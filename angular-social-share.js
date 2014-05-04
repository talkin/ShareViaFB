"use strict";
angular.module("AngularSocialShare", []).factory("$FB", ["$window",
    function(t) {
        return {
            init: function(n) {
                if (!n) throw "FB App Id Cannot be blank";
                this.fbId = n, t.fbAsyncInit = function() {
                    FB.init({
                        appId: n,
                        channelUrl: "app/channel.html",
                        status: !0,
                        xfbml: !0
                    });
                },

                function(t) {
                    console.log("a");
                    var n, e = "facebook-jssdk",
                        i = t.getElementsByTagName("script")[0];
                    t.getElementById(e) || (n = t.createElement("script"), n.id = e, n.async = !0, n.src = "//connect.facebook.net/en_US/all.js", i.parentNode.insertBefore(n, i));
                }(document);
            }
        };
    }
])
    .directive("facebook", ["$timeout", "$http",
        function(t, n) {
            return {
                scope: {
                    shares: "="
                },
                transclude: !0,
                template: "<div ng-transclude></div>",
                link: function(e, i, c) {
                    t(function() {
                        i.bind("click", function() {
                            FB.ui({
                                method: "feed",
                                name: c.name,
                                link: c.url,
                                picture: c.pictureUrl,
                                caption: c.caption
                            });
                        });
                    });
                }
            };
        }
    ]);
