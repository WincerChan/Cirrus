import fetch from "../patches/fetch";

const localFetch = (...args) => {
    if (window.location.origin != 'https://blog.itswincer.com') return
    fetch(...args)
}

function z() {
    !function (t, e) {
        "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = "undefined" != typeof globalThis ? globalThis : t || self).webVitals = {})
    }(void 0, function (t) {
        function s(t, e) {
            return {
                name: t,
                value: 1 < arguments.length && void 0 !== e ? e : -1,
                delta: 0,
                entries: [],
                id: "".concat(Date.now(), "-").concat(Math.floor(8999999999999 * Math.random()) + 1e12),
                isFinal: !1
            }
        }

        function u(t, e) {
            try {
                if (PerformanceObserver.supportedEntryTypes.includes(t)) {
                    var n = new PerformanceObserver(function (t) {
                        return t.getEntries().map(e)
                    });
                    return n.observe({
                        type: t,
                        buffered: !0
                    }), n
                }
            } catch (t) { }
        }

        function i(t) {
            a = !t.persisted
        }

        function d(n, t) {
            var e = 1 < arguments.length && void 0 !== t && t;
            r || (addEventListener("pagehide", i), addEventListener("beforeunload", function () { }), r = !0), addEventListener("visibilitychange", function (t) {
                var e = t.timeStamp;
                "hidden" === document.visibilityState && n({
                    timeStamp: e,
                    isUnloading: a
                })
            }, {
                capture: !0,
                once: e
            })
        }

        function l(t, e, n, i) {
            var a;
            return function () {
                n && e.isFinal && n.disconnect(), 0 <= e.value && (i || e.isFinal || "hidden" === document.visibilityState) && (e.delta = e.value - (a || 0), (e.delta || e.isFinal || void 0 === a) && (t(e), a = e.value))
            }
        }

        function p() {
            return void 0 === n && (n = "hidden" === document.visibilityState ? 0 : 1 / 0, d(function (t) {
                var e = t.timeStamp;
                return n = e
            }, !0)), {
                get timeStamp() {
                    return n
                }
            }
        }
        var n, f, a = !1,
            r = !1;
        t.getCLS = function (t) {
            function n(t) {
                t.hadRecentInput || (a.value += t.value, a.entries.push(t), i())
            }
            var i, e = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
                a = s("CLS", 0),
                r = u("layout-shift", n);
            r && (i = l(t, a, r, e), d(function (t) {
                var e = t.isUnloading;
                r.takeRecords().map(n), e && (a.isFinal = !0), i()
            }))
        }, t.getFCP = function (t) {
            var e, n = s("FCP"),
                i = p(),
                a = u("paint", function (t) {
                    "first-contentful-paint" === t.name && t.startTime < i.timeStamp && (n.value = t.startTime, n.isFinal = !0, n.entries.push(t), e())
                });
            a && (e = l(t, n, a))
        }, t.getFID = function (t) {
            function e(t) {
                t.startTime < i.timeStamp && (n.value = t.processingStart - t.startTime, n.entries.push(t), n.isFinal = !0, r())
            }
            var n = s("FID"),
                i = p(),
                a = u("first-input", e),
                r = l(t, n, a);
            a ? d(function () {
                a.takeRecords().map(e), a.disconnect()
            }, !0) : window.perfMetrics && window.perfMetrics.onFirstInputDelay && window.perfMetrics.onFirstInputDelay(function (t, e) {
                e.timeStamp < i.timeStamp && (n.value = t, n.isFinal = !0, n.entries = [{
                    entryType: "first-input",
                    name: e.type,
                    target: e.target,
                    cancelable: e.cancelable,
                    startTime: e.timeStamp,
                    processingStart: e.timeStamp + t
                }], r())
            })
        }, t.getLCP = function (t) {
            function e(t) {
                var e = t.startTime;
                e < r.timeStamp ? (a.value = e, a.entries.push(t)) : a.isFinal = !0, n()
            }
            var n, i = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
                a = s("LCP"),
                r = p(),
                o = u("largest-contentful-paint", e);
            if (o) {
                n = l(t, a, o, i);
                var c = function () {
                    a.isFinal || (o.takeRecords().map(e), a.isFinal = !0, n())
                };
                (f = f || new Promise(function (e) {
                    return ["scroll", "keydown", "pointerdown"].map(function (t) {
                        addEventListener(t, e, {
                            once: !0,
                            passive: !0,
                            capture: !0
                        })
                    })
                })).then(c), d(c, !0)
            }
        }, t.getTTFB = function (e) {
            var t, n = s("TTFB");
            t = function () {
                try {
                    var t = performance.getEntriesByType("navigation")[0] || function () {
                        var t = performance.timing,
                            e = {
                                entryType: "navigation",
                                startTime: 0
                            };
                        for (var n in t) "navigationStart" !== n && "toJSON" !== n && (e[n] = Math.max(t[n] - t.navigationStart, 0));
                        return e
                    }();
                    n.value = n.delta = t.responseStart, n.entries = [t], n.isFinal = !0, e(n)
                } catch (t) { }
            }, "complete" === document.readyState ? setTimeout(t, 0) : addEventListener("pageshow", t)
        }, Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }),
        function (e, n, i) {
            var t = void 0 !== e,
                a = t && !("onscroll" in e) || void 0 !== i && /(gle|ing|ro|msn)bot|crawl|spider|yand|duckgo/i.test(i.userAgent);
            if (t && !a) {
                var r, o, c, s = e.requestIdleCallback || function (t) {
                    return setTimeout(t, 1)
                },
                    u = e.performance,
                    d = e.screen,
                    l = e.ga_api,
                    p = function (t) {
                        return Math.random().toString(36).slice(-t)
                    },
                    f = function (t, e) {
                        return parseInt(Math.random() * (e - t + 1) + t, 10)
                    },
                    m = encodeURIComponent,
                    v = Math.max,
                    g = Date.now();
                "complete" === n.readyState ? S() : e.addEventListener("load", S)
            }

            function h() {
                try {
                    var t, e, n = u.getEntriesByType("navigation")[0],
                        i = u && u.timing,
                        a = function (t) {
                            return isNaN(t) || t == 1 / 0 || t < 0 ? void 0 : 1e4 < t ? 1e4 : t.toFixed(0)
                        };
                    e = "getEntriesByType" in u && "getEntriesByName" in u && n ? (t = n).startTime : (t = i).navigationStart, o = ["plt=" + a(t.loadEventStart - e || 0), "dns=" + a(t.domainLookupEnd - t.domainLookupStart || 0), "pdt=" + a(t.responseEnd - t.responseStart || 0), "rrt=" + a(t.redirectEnd - t.redirectStart || 0), "tcp=" + a(t.connectEnd - t.connectStart || 0), "srt=" + a(t.responseStart - t.requestStart || 0), "dit=" + a(t.domInteractive - e || 0), "clt=" + a(t.domContentLoadedEventEnd - e || 0)], localFetch(l + "?" + p(f(5, 8)) + "=" + p(f(7, 12)) + "&rx=perf&" + r.concat(o).join("&"), { referrerPolicy: 'unsafe-url', credentials: 'include' });
                } catch (t) { }
            }

            function y(t) {
                var e = t.name,
                    n = t.delta,
                    i = t.id;
                try {
                    setTimeout(function () {
                        var t;
                        c = ["ec=" + m("Web Vitals"), "ea=" + m(e), "ev=" + (t = Math.round("CLS" === e ? 1e3 * n : n), isNaN(t) || t == 1 / 0 || t < 0 ? void 0 : 1e4 < t ? 1e4 : t), "el=" + m(i)], localFetch(l + "?" + p(f(5, 10)) + "=" + p(f(6, 11)) + "&rx=event&" + r.concat(c).join("&"), { referrerPolicy: 'unsafe-url', credentials: 'include' })
                    }, 3500)
                } catch (t) { }
            }

            function S() {
                s(function () {
                    ! function () {
                        try {
                            r = ["ga=" + e.ga_tid, "dt=" + m(n.title), "de=" + m(n.characterSet || n.charset), "dr=" + m(n.referrer), "ul=" + (i.language || i.browserLanguage || i.userLanguage), "sd=" + d.colorDepth + "-bit", "sr=" + d.width + "x" + d.height, "vp=" + v(n.documentElement.clientWidth, e.innerWidth || 0) + "x" + v(n.documentElement.clientHeight, e.innerHeight || 0), "z=" + g]; localFetch(l + "?" + p(f(5, 8)) + "=" + p(f(8, 12)) + "&rx=pv&" + r.join("&"), { referrerPolicy: 'unsafe-url', credentials: 'include' })
                        } catch (t) { }
                    }();
                    var t = e.webVitals;
                    t.getCLS(y), t.getFID(y), t.getLCP(y), t.getFCP(y), t.getTTFB(y)
                }), "performance" in e && setTimeout(function () {
                    s(h)
                }, 3500)
            }
        }(window, document, navigator)
}

export default z;