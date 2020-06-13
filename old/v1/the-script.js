! function (t) {
    function e(i) {
        if (n[i]) return n[i].exports;
        var r = n[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return t[i].call(r.exports, r, r.exports, e), r.l = !0, r.exports
    }
    var n = {};
    e.m = t, e.c = n, e.d = function (t, n, i) {
        e.o(t, n) || Object.defineProperty(t, n, {
            configurable: !1,
            enumerable: !0,
            get: i
        })
    }, e.n = function (t) {
        var n = t && t.__esModule ? function () {
            return t.default
        } : function () {
            return t
        };
        return e.d(n, "a", n), n
    }, e.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, e.p = "./static/", e(e.s = 4)
}([function (t, e, n) {
    "use strict";

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        },
        o = function () {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            return function (e, n, i) {
                return n && t(e.prototype, n), i && t(e, i), e
            }
        }(),
        a = e.w = window,
        s = (e.$ = document.querySelectorAll.bind(document), function () {
            function t() {
                i(this, t), a.requestAnimationFrame || (a.requestAnimationFrame = a.webkitRequestAnimationFrame || a.mozRequestAnimationFrame || a.oRequestAnimationFrame || a.msRequestAnimationFrame || function (t) {
                    return a.setTimeout(t, 1e3 / 60)
                }), a.cancelAnimationFrame || (a.cancelAnimationFrame = a.cancelRequestAnimationFrame || a.webkitCancelAnimationFrame || a.webkitCancelRequestAnimationFrame || a.mozCancelAnimationFrame || a.mozCancelRequestAnimationFrame || a.oCancelAnimationFrame || a.oCancelRequestAnimationFrame || a.msCancelAnimationFrame || a.msCancelRequestAnimationFrame || a.clearTimeout)
            }
            return o(t, [{
                key: "captureMouse",
                value: function (t) {
                    function e(e) {
                        var r = t.offsetLeft || 0,
                            o = t.offsetTop || 0;
                        i.x = e.pageX - r, i.y = e.pageY - o, i.percentageX = (i.x - n.screenSize().width / 2) / n.screenSize().width * 100, i.percentageY = (i.y - n.screenSize().height / 2) / n.screenSize().height * 100
                    }
                    var n = this,
                        i = {
                            x: 0,
                            y: 0,
                            percentageX: 0,
                            percentageY: 0
                        };
                    return t.addEventListener("mousemove", e, {
                        passive: !0
                    }), i
                }
            }, {
                key: "captureTouch",
                value: function (t) {
                    function e() {
                        r.isPressed = !0
                    }

                    function n() {
                        r.isPressed = !1
                    }

                    function i(e) {
                        t.offsetLeft = t.offsetLeft || 0, t.offsetTop = t.offsetTop || 0, r.x = e.touches[0].pageX - t.offsetLeft, r.y = e.touches[0].pageY - t.offsetTop
                    }
                    var r = {
                        x: 0,
                        y: 0,
                        isPressed: !1
                    };
                    return t.addEventListener("touchstart", e, {
                        passive: !0
                    }), t.addEventListener("touchend", n, {
                        passive: !0
                    }), t.addEventListener("touchmove", i, {
                        passive: !0
                    }), r
                }
            }, {
                key: "captureTilt",
                value: function () {
                    function t(t) {
                        var e = t.gamma,
                            n = t.beta;
                        e > 90 && (e = 90), e < 45 && (e = 45), n > 90 && (n = 90), n < 0 && (n = 0);
                        var i = (90 - Math.floor(Math.abs(e))) / 45,
                            r = (90 - Math.floor(Math.abs(n))) / 90;
                        Math.floor(10 * r) > 0 && (this.gravity = r), Math.floor(10 * i) > 0 && (this.speed = i)
                    }
                    var e = {
                        x: 0,
                        y: 0
                    };
                    return a.addEventListener("deviceorientation", function (e) {
                        return t(e)
                    }, {
                        capture: !0,
                        passive: !0
                    }), e
                }
            }, {
                key: "containsPoint",
                value: function (t, e, n) {
                    return !(e < t.x || e > t.x + t.width || n < t.y || n > t.y + t.height)
                }
            }, {
                key: "intersects",
                value: function (t, e) {
                    return !(t.x + t.width < e.x || e.x + e.width < t.x || t.y + t.height < e.y || e.y + e.height < t.y)
                }
            }, {
                key: "rand",
                value: function (t, e) {
                    return Math.random() * (e - t) + t
                }
            }, {
                key: "randInt",
                value: function (t, e) {
                    return Math.floor(Math.random() * (e - t) + t)
                }
            }, {
                key: "randMultiple",
                value: function (t, e) {
                    return Math.floor((Math.random() * (e - t) + t + 1) / t) * t
                }
            }, {
                key: "coinFlip",
                value: function () {
                    return 0 == Math.floor(2 * Math.random())
                }
            }, {
                key: "screenSize",
                value: function () {
                    var t = document,
                        e = t.documentElement,
                        n = t.body;
                    return {
                        width: a.innerWidth || e.clientWidth || n.clientWidth,
                        height: a.innerHeight || e.clientHeight || n.clientHeight
                    }
                }
            }, {
                key: "colorToRGB",
                value: function (t, e) {
                    "string" == typeof t && "#" === t[0] && (t = a.parseInt(t.slice(1), 16)), e = void 0 === e ? 1 : e;
                    var n = t >> 16 & 255,
                        i = t >> 8 & 255,
                        r = 255 & t,
                        o = e < 0 ? 0 : e > 1 ? 1 : e;
                    return 1 === o ? "rgb(" + n + "," + i + "," + r + ")" : "rgba(" + n + "," + i + "," + r + "," + o + ")"
                }
            }, {
                key: "convertRange",
                value: function (t, e, n) {
                    var i = e.max - e.min,
                        r = n.max - n.min;
                    return (t - e.min) * r / i + n.min
                }
            }, {
                key: "delay",
                value: function (e, n) {
                    function i(t) {
                        var e = new Promise(function (e, n) {
                            return t(e, n)
                        });
                        return e.__proto__ = i.prototype, e
                    }
                    i.__proto__ = Promise, i.prototype.__proto__ = Promise.prototype, i.prototype.delay = function (e, n) {
                        return this.then(function () {
                            return t.prototype.delay(e, n)
                        })
                    };
                    return function (t) {
                        return new i(function (e) {
                            return setTimeout(e, t)
                        })
                    }(n).then(e)
                }
            }, {
                key: "deviceOrientationSupport",
                value: function () {
                    return !!a.DeviceOrientationEvent
                }
            }, {
                key: "touchSupport",
                value: function () {
                    return "ontouchstart" in a
                }
            }, {
                key: "allowDeviceOrientation",
                value: function () {
                    return this.deviceOrientationSupport() && this.touchSupport()
                }
            }, {
                key: "logCoordinates",
                value: function (t, e, n, i) {
                    function r() {
                        console.log("current touch position: ", "x: " + n.x + ", y: " + n.y)
                    }

                    function o() {
                        e.current ? console.log("current mouse position: ", "x: " + e.current.x + ", y: " + e.current.y) : console.log("current mouse position: ", "x: " + e.x + ", y: " + e.y + ", percentageX: " + e.percentageX + ", percentageY: " + e.percentageY)
                    }
                    n && "touch" === i ? t.addEventListener("touchmove", r, {
                        passive: !0
                    }) : t.addEventListener("mousemove", o, {
                        passive: !0
                    })
                }
            }, {
                key: "setupHelpers",
                value: function (t, e, n, i) {
                    this.logCoordinates(t, e, n, i || "mouse")
                }
            }, {
                key: "throttleEvent",
                value: function (t, e, n) {
                    t = t || a;
                    var i = !1,
                        r = function () {
                            i || (i = !0, a.requestAnimationFrame(function () {
                                n && n(), i = !1
                            }))
                        };
                    t.addEventListener(e, r, {
                        passive: !0
                    })
                }
            }, {
                key: "isElementInViewport",
                value: function (t, e) {
                    var n = t.getBoundingClientRect();
                    return e = e || 1, n.bottom >= 0 && n.right >= 0 && n.top <= (window.innerHeight || document.documentElement.clientHeight) * e && n.left <= (window.innerWidth || document.documentElement.clientWidth) * e
                }
            }, {
                key: "addClassOnScrollInToView",
                value: function (t) {
                    function e() {
                        function e(t) {
                            t.forEach(function (t) {
                                t.isPlaying || (t.play(), t.isPlaying = !0)
                            })
                        }

                        function i(t) {
                            t.forEach(function (t) {
                                t.isPlaying && (t.pause(), t.isPlaying = !1)
                            })
                        }

                        function r(r) {
                            var o = Array.from(r.querySelectorAll("[data-video-inview-play]")),
                                a = o.length > 0;
                            n.isElementInViewport(r, 1 - t.threshold) ? (r.classList.add(t.activeClass), a && e(o)) : a && i(o), t.removeClassOnExit && (n.isElementInViewport(r, 1 - t.threshold) || r.classList.remove(t.activeClass))
                        }
                        Array.prototype.forEach.call(t.elements, function (t) {
                            r(t)
                        })
                    }
                    var n = this;
                    t.activeClass = t.activeClass || "inview", t.threshold = t.threshold || .25, t.removeClassOnExit = !1 !== t.removeClassOnExit, t.playVideosInView = !1 !== t.playVideosInView, t.inviewVideoAttribute = t.inviewVideoAttribute || "data-video-inview-play", this.throttleEvent(a, "scroll", e)
                }
            }, {
                key: "clamp",
                value: function (t, e, n) {
                    return Math.min(Math.max(t, e), n)
                }
            }, {
                key: "xhrPromise",
                value: function (t) {
                    return new Promise(function (e, n) {
                        var i = new XMLHttpRequest,
                            o = t.params;
                        i.open(t.method, t.url), i.onload = function () {
                            i.status >= 200 && i.status < 300 ? e(JSON.parse(i.response)) : n({
                                status: i.status,
                                statusText: i.statusText
                            })
                        }, i.onerror = function () {
                            n({
                                status: i.status,
                                statusText: i.statusText
                            })
                        }, t.headers && Object.keys(t.headers).forEach(function (e) {
                            i.setRequestHeader(e, t.headers[e])
                        }), o && "object" === (void 0 === o ? "undefined" : r(o)) && (o = Object.keys(o).map(function (t) {
                            return encodeURIComponent(t) + "=" + encodeURIComponent(o[t])
                        }).join("&")), i.send(o)
                    })
                }
            }]), t
        }());
    e.default = s
}, function (t, e, n) {
    "use strict";
    var i, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
    } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }
}])