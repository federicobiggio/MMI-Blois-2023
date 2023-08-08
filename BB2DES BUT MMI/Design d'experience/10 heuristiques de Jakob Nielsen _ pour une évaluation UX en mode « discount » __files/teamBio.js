;(function(plugin) {
    var chicago = window.Chicago || {
        utils : {
            now: Date.now || function() {
                return new Date().getTime();
            },
            uid : function(prefix) {
                return ( prefix || 'id' ) + chicago.utils.now() + 'RAND' + Math.ceil( Math.random() * 1e5 );
            },
            is : {
                number : function(obj) {
                    return ! isNaN( parseFloat( obj ) ) && isFinite( obj );
                },
                fn : function(obj) {
                    return typeof obj === 'function';
                },
                object : function(obj) {
                    return Object.prototype.toString.call(obj) === "[object Object]";
                }
            },
            debounce : function(fn, wait, immediate) {
                var timeout;
                return function() {
                    var context = this,
                        args = arguments,
                        later = function() {
                            timeout = null;
                            if ( ! immediate ) {
                                fn.apply( context, args );
                            }
                        },
                        callNow = immediate && !timeout;
                    if( timeout ) {
                        clearTimeout(timeout);
                    }
                    timeout = setTimeout( later, wait );
                    if( callNow ) {
                        fn.apply( context, args );
                    }
                };
            },
        },
        $ : window.jQuery || null
    };

    if(typeof define === 'function' && define.amd) {
        define('chicago', function() {
            chicago.load = function(res, req, onload, config) {
                var resources = res.split(','),
                    load = [];
                var base = ( config.config && config.config.chicago && config.config.chicago.base ? config.config.chicago.base : '' ).replace( /\/+$/g, '' );
                if( ! base ) {
                    throw new Error( 'Please define base path to jQuery resizeend in the requirejs config.' );
                }
                var i = 0;
                while(i < resources.length) {
                    var resource = resources[i].replace(/\./g, '/');
                    load.push(base + '/' + resource);
                    i += 1;
                }
                req(load, function() {
                    onload( chicago );
                });
            };
            return chicago;
        });
    }

    if( window && window.jQuery ) {
        return plugin( chicago, window, window.document );
    } else if( ! window.jQuery ) {
        throw new Error( 'jQuery resizeend requires jQuery' );
    }

})(function(_c, win, doc) {

    _c.$win = _c.$(win);
    _c.$doc = _c.$(doc);

    if( ! _c.events ) {
        _c.events = {};
    }

    _c.events.resizeend = {
        defaults : {
            delay : 250
        },
        setup : function() {
            var args = arguments,
                options = {
                    delay : _c.$.event.special.resizeend.defaults.delay
                },
                fn;

            if( _c.utils.is.fn( args[0] ) ) {
                fn = args[0];
            } else if( _c.utils.is.number( args[0] ) ) {
                options.delay = args[0];
            } else if( _c.utils.is.object( args[0] ) ) {
                options = _c.$.extend({}, options, args[0]);
            }

            var uid = _c.utils.uid('resizeend'),
                _data = _c.$.extend({
                    delay : _c.$.event.special.resizeend.defaults.delay
                }, options),
                timer = _data,
                handler = function(e) {
                    if(timer) {
                        clearTimeout(timer);
                    }
                    timer = setTimeout(function() {
                        timer = null;
                        e.type = 'resizeend.chicago.dom';
                        return _c.$(e.target).trigger('resizeend', e);
                    }, _data.delay);
                };
            _c.$(this).data('chicago.event.resizeend.uid', uid);
            return _c.$(this).on('resize', _c.utils.debounce(handler, 100)).data(uid, handler);
        },
        teardown : function() {
            var uid = _c.$(this).data('chicago.event.resizeend.uid');
            _c.$(this).off('resize', _c.$(this).data(uid));
            _c.$(this).removeData(uid);
            return _c.$(this).removeData('chicago.event.resizeend.uid');
        }
    };

    (function() {
        _c.$.event.special.resizeend = _c.events.resizeend;
        _c.$.fn.resizeend = function(options, callback) {
            return this.each(function() {
                _c.$(this).on('resizeend', options, callback);
            });
        };
    })();
});

jQuery(document).ready(function() {
    jQuery(window).on('resizeend', function() {
        console.log('resizeend');
        if(!jQuery('.detail-bio').is(':visible')) {
            return;
        }
        jQuery('.team-member').attr('style','');
        var countTeamMemberElByRows = 0,
            ww = jQuery(window).width();
        if (ww > 1354) {
            countTeamMemberElByRows = 4;
        } else if (ww > 1065) {
            countTeamMemberElByRows = 3;
        } else if (ww > 689) {
            countTeamMemberElByRows = 2;
        } else {
            countTeamMemberElByRows = 1;
        }

        var $detailBio = jQuery('.detail-bio:visible');
        var $detailH = $detailBio.outerHeight();
        var $teamMember = $detailBio.parents('.team-member');
        var childIndex = $teamMember.index() + 1;
        var chilIndexToSetMargin = Math.ceil(childIndex / countTeamMemberElByRows) * countTeamMemberElByRows;

        $teamMembers = $teamMember.parents('.team').find('.team-member');

        $teamMemberWithMargin = $teamMembers.eq(chilIndexToSetMargin - 1);
        $teamMemberWithMargin.css('margin-bottom', $detailH);
        // jQuery('.detail-bio:visible').css({visibility: 'hidden'});
        // jQuery('.detail-bio:visible').parents('.team-member').find('h4').trigger('click');
    });

    jQuery('.team-member > p, .team-member h4').on('click', function(e) {
        console.log('click teammember');
        if (typeof(lastBioShowed) !== 'undefined' && typeof(lastTeamMemberWithMargin) !== 'undefined') {
            lastBioShowed.hide();
            lastTeamMemberWithMargin.attr('style', '');
        }

        e.preventDefault();
        // Set bio height
        var $teamMember = jQuery(this).parents('.team-member'),
            $detail = $teamMember.find('.detail-bio'),
            detailH = 0,
            childIndex = $teamMember.index() + 1;
        // remove other active border
        jQuery('.team-member.detail-member').removeClass('active');
        //set active border on current team member
        $teamMember.addClass('active');

        $detail.css({
            visibility: 'hidden',
            display: 'block'
        });

        $detailH = $detail.outerHeight();
        $detail.attr('style','').stop(true,true).slideDown(1000);

        // Set bottom margin of last team
        var countTeamMemberElByRows = 0,
            ww = jQuery(window).width();
        if (ww > 1354) {
            countTeamMemberElByRows = 4;
        } else if (ww > 1065) {
            countTeamMemberElByRows = 3;
        } else if (ww > 689) {
            countTeamMemberElByRows = 2;
        } else {
            countTeamMemberElByRows = 1;
        }
        var chilIndexToSetMargin = Math.ceil(childIndex / countTeamMemberElByRows) * countTeamMemberElByRows;
        $teamMembers = $teamMember.parents('.team')
            .find('.team-member');

        $teamMemberWithMargin = $teamMembers.eq(chilIndexToSetMargin - 1);

        // If the last row is not full of .team-members
        if ($teamMemberWithMargin.length === 0) {
            $teamMemberWithMargin = $teamMembers.last();
        }
        $teamMemberWithMargin.css('margin-bottom', $detailH);

        jQuery('html, body').scrollTop($teamMember.offset().top);

        lastBioShowed = $detail;
        lastTeamMemberWithMargin = $teamMemberWithMargin;
    });

    jQuery('.detail-bio .close').on('click', function(e) {
                console.log('click close');

        if (typeof(lastBioShowed) !== 'undefined' && typeof(lastTeamMemberWithMargin) !== 'undefined') {
            lastBioShowed.parents('.detail-member').removeClass('active');
            lastBioShowed.slideUp();
            lastTeamMemberWithMargin.animate({
                marginBottom: 24
            });
        }
    });
});
