"use strict";
function _toConsumableArray(t) {
    return _arrayWithoutHoles(t) || _iterableToArray(t) || _unsupportedIterableToArray(t) || _nonIterableSpread()
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
}
function _unsupportedIterableToArray(t, e) {
    if (t) {
        if ("string" == typeof t)
            return _arrayLikeToArray(t, e);
        var n = Object.prototype.toString.call(t).slice(8, -1);
        return "Object" === n && t.constructor && (n = t.constructor.name),
        "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? _arrayLikeToArray(t, e) : void 0
    }
}
function _iterableToArray(t) {
    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"])
        return Array.from(t)
}
function _arrayWithoutHoles(t) {
    if (Array.isArray(t))
        return _arrayLikeToArray(t)
}
function _arrayLikeToArray(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var n = 0, i = new Array(e); n < e; n++)
        i[n] = t[n];
    return i
}
if (!window.ActiveXObject && !("ActiveXObject"in window)) {
    var __getClientLogo = function() {
        var t, e = JSON.parse(decodeURI(atob("JTVCJTVCJTIyJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwLy8lMjIsJTIyJTIyJTVELCU1QiUyMiUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCU1QyU1QyU1QyU1QyUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMC8vJTIyLCUyMiUyMiU1RCwlNUIlMjIlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlNUMlNUMlNUMlNUMlMjAlMjAlMjAlMjAlMjAlMjAlMjAvLyUyMiwlMjIlMjIlNUQsJTVCJTIyJTIwJTIwJTIwJTIwIyNEREREREREREREREREREREREREREREIyMlMjIsJTIyJTIyJTVELCU1QiUyMiUyMCUyMCUyMCUyMCMjJTIwREREREREREREREREREREREREREQlMjAjIyUyMiwlMjIlMjAlMjAlMjBfX19fX19fXyUyMCUyMCUyMF9fXyUyMCUyMCUyMF9fXyUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMF9fXyUyMCUyMCUyMF9fX19fX19fJTIwJTIwJTIwX19fJTIwJTIwJTIwX19fJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwX19fJTIyJTVELCU1QiUyMiUyMCUyMCUyMCUyMCMjJTIwaGglMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjBoaCUyMCMjJTIyLCUyMiUyMCUyMCUyMCU3QyU1QyU1QyUyMCUyMCUyMF9fJTIwJTIwJTVDJTVDJTIwJTdDJTVDJTVDJTIwJTIwJTVDJTVDJTIwJTdDJTVDJTVDJTIwJTIwJTVDJTVDJTIwJTIwJTIwJTIwJTIwJTIwJTdDJTVDJTVDJTIwJTIwJTVDJTVDJTIwJTdDJTVDJTVDJTIwJTIwJTIwX18lMjAlMjAlNUMlNUMlMjAlN0MlNUMlNUMlMjAlMjAlNUMlNUMlMjAlN0MlNUMlNUMlMjAlMjAlNUMlNUMlMjAlMjAlMjAlMjAlMjAlMjAlN0MlNUMlNUMlMjAlMjAlNUMlNUMlMjIlNUQsJTVCJTIyJTIwJTIwJTIwJTIwIyMlMjBoaCUyMCUyMCUyMCUyMC8vJTIwJTIwJTIwJTIwJTVDJTVDJTVDJTVDJTIwJTIwJTIwJTIwaGglMjAjIyUyMiwlMjIlMjAlMjAlMjAlNUMlNUMlMjAlNUMlNUMlMjAlMjAlNUMlNUMlN0MlNUMlNUMlMjAvXyU1QyU1QyUyMCU1QyU1QyUyMCUyMCU1QyU1QyU1QyU1QyUyMCU1QyU1QyUyMCUyMCU1QyU1QyUyMCUyMCUyMCUyMCUyMCU1QyU1QyUyMCU1QyU1QyUyMCUyMCU1QyU1QyU1QyU1QyUyMCU1QyU1QyUyMCUyMCU1QyU1QyU3QyU1QyU1QyUyMC9fJTVDJTVDJTIwJTVDJTVDJTIwJTIwJTVDJTVDJTVDJTVDJTIwJTVDJTVDJTIwJTIwJTVDJTVDJTIwJTIwJTIwJTIwJTIwJTVDJTVDJTIwJTVDJTVDJTIwJTIwJTVDJTVDJTIyJTVELCU1QiUyMiUyMCUyMCUyMCUyMCMjJTIwaGglMjAlMjAlMjAvLyUyMCUyMCUyMCUyMCUyMCUyMCU1QyU1QyU1QyU1QyUyMCUyMCUyMGhoJTIwIyMlMjIsJTIyJTIwJTIwJTIwJTIwJTVDJTVDJTIwJTVDJTVDJTIwJTIwJTIwX18lMjAlMjAlNUMlNUMlNUMlNUMlMjAlNUMlNUMlMjAlMjAlNUMlNUMlNUMlNUMlMjAlNUMlNUMlMjAlMjAlNUMlNUMlMjAlMjAlMjAlMjAlMjAlNUMlNUMlMjAlNUMlNUMlMjAlMjAlNUMlNUMlNUMlNUMlMjAlNUMlNUMlMjAlMjAlMjBfXyUyMCUyMCU1QyU1QyU1QyU1QyUyMCU1QyU1QyUyMCUyMCU1QyU1QyU1QyU1QyUyMCU1QyU1QyUyMCUyMCU1QyU1QyUyMCUyMCUyMCUyMCUyMCU1QyU1QyUyMCU1QyU1QyUyMCUyMCU1QyU1QyUyMiU1RCwlNUIlMjIlMjAlMjAlMjAlMjAjIyUyMGhoJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwaGglMjAjIyUyMiwlMjIlMjAlMjAlMjAlMjAlMjAlNUMlNUMlMjAlNUMlNUMlMjAlMjAlNUMlNUMlN0MlNUMlNUMlMjAlMjAlNUMlNUMlNUMlNUMlMjAlNUMlNUMlMjAlMjAlNUMlNUMlNUMlNUMlMjAlNUMlNUMlMjAlMjAlNUMlNUNfX19fJTIwJTVDJTVDJTIwJTVDJTVDJTIwJTIwJTVDJTVDJTVDJTVDJTIwJTVDJTVDJTIwJTIwJTVDJTVDJTdDJTVDJTVDJTIwJTIwJTVDJTVDJTVDJTVDJTIwJTVDJTVDJTIwJTIwJTVDJTVDJTVDJTVDJTIwJTVDJTVDJTIwJTIwJTVDJTVDX19fXyUyMCU1QyU1QyUyMCU1QyU1QyUyMCUyMCU1QyU1QyUyMiU1RCwlNUIlMjIlMjAlMjAlMjAlMjAjIyUyMGhoJTIwJTIwJTIwJTIwJTIwJTIwd3d3dyUyMCUyMCUyMCUyMCUyMCUyMGhoJTIwIyMlMjIsJTIyJTIwJTIwJTIwJTIwJTIwJTIwJTVDJTVDJTIwJTVDJTVDX19fX19fXyU1QyU1QyU1QyU1QyUyMCU1QyU1Q19fJTVDJTVDJTVDJTVDJTIwJTVDJTVDX19fX19fXyU1QyU1QyU1QyU1QyUyMCU1QyU1Q19fJTVDJTVDJTVDJTVDJTIwJTVDJTVDX19fX19fXyU1QyU1QyU1QyU1QyUyMCU1QyU1Q19fJTVDJTVDJTVDJTVDJTIwJTVDJTVDX19fX19fXyU1QyU1QyU1QyU1QyUyMCU1QyU1Q19fJTVDJTVDJTIyJTVELCU1QiUyMiUyMCUyMCUyMCUyMCMjJTIwaGglMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjBoaCUyMCMjJTIyLCUyMiUyMCUyMCUyMCUyMCUyMCUyMCUyMCU1QyU1QyU3Q19fX19fX18lN0MlMjAlNUMlNUMlN0NfXyU3QyUyMCU1QyU1QyU3Q19fX19fX18lN0MlMjAlNUMlNUMlN0NfXyU3QyUyMCU1QyU1QyU3Q19fX19fX18lN0MlMjAlNUMlNUMlN0NfXyU3QyUyMCU1QyU1QyU3Q19fX19fX18lN0MlMjAlNUMlNUMlN0NfXyU3QyUyMiU1RCwlNUIlMjIlMjAlMjAlMjAlMjAjIyUyME1NTU1NTU1NTU1NTU1NTU1NTU1NJTIwIyMlMjIsJTIyJTIyJTVELCU1QiUyMiUyMCUyMCUyMCUyMCMjTU1NTU1NTU1NTU1NTU1NTU1NTU1NTSMjJTIyLCUyMiUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMFJlbGVhc2UlMjB1bmRlZmluZWRAbm8lMjByZWxlYXNlJTIweWV0JTIyJTVELCU1QiUyMiUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCU1QyU1Qy8lMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlNUMlNUMvJTIwJTIwJTIwJTIwJTIwJTIyLCUyMiUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMFBvd2VyZWQlMjBieSUyMEBiaWxpYmlsaS9qaW5rZWxhLWNvcmVAMi44LjExJTIyJTVEJTVE"))), n = ["%c"], i = [];
        e.forEach((function(t) {
            var e = t[0]
              , i = t[1];
            n.push(e + i)
        }
        )),
        i = i.concat(["color:#00a1d6"]),
        i = [n.join("\n")].concat(i),
        (t = console).log.apply(t, _toConsumableArray(i))
    };
    __getClientLogo()
}
!function(t) {
    function e(e) {
        for (var i, o, c = e[0], s = e[1], l = e[2], u = 0, f = []; u < c.length; u++)
            o = c[u],
            Object.prototype.hasOwnProperty.call(a, o) && a[o] && f.push(a[o][0]),
            a[o] = 0;
        for (i in s)
            Object.prototype.hasOwnProperty.call(s, i) && (t[i] = s[i]);
        for (d && d(e); f.length; )
            f.shift()();
        return r.push.apply(r, l || []),
        n()
    }
    function n() {
        for (var t, e = 0; e < r.length; e++) {
            for (var n = r[e], i = !0, c = 1; c < n.length; c++) {
                var s = n[c];
                0 !== a[s] && (i = !1)
            }
            i && (r.splice(e--, 1),
            t = o(o.s = n[0]))
        }
        return t
    }
    var i = {}
      , a = {
        0: 0
    }
      , r = [];
    function o(e) {
        if (i[e])
            return i[e].exports;
        var n = i[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(n.exports, n, n.exports, o),
        n.l = !0,
        n.exports
    }
    o.m = t,
    o.c = i,
    o.d = function(t, e, n) {
        o.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: n
        })
    }
    ,
    o.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }
    ,
    o.t = function(t, e) {
        if (1 & e && (t = o(t)),
        8 & e)
            return t;
        if (4 & e && "object" == typeof t && t && t.__esModule)
            return t;
        var n = Object.create(null);
        if (o.r(n),
        Object.defineProperty(n, "default", {
            enumerable: !0,
            value: t
        }),
        2 & e && "string" != typeof t)
            for (var i in t)
                o.d(n, i, function(e) {
                    return t[e]
                }
                .bind(null, i));
        return n
    }
    ,
    o.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        }
        : function() {
            return t
        }
        ;
        return o.d(e, "a", e),
        e
    }
    ,
    o.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }
    ,
    o.p = "//s1.hdslb.com/bfs/static/jinkela/article-web/";
    var c = window.webpackJsonp = window.webpackJsonp || []
      , s = c.push.bind(c);
    c.push = e,
    c = c.slice();
    for (var l = 0; l < c.length; l++)
        e(c[l]);
    var d = s;
    r.push([155, 1]),
    n()
}([function(t, e, n) {
    (function(t) {
        n.d(e, "l", (function() {
            return l
        }
        )),
        n.d(e, "t", (function() {
            return d
        }
        )),
        n.d(e, "h", (function() {
            return u
        }
        )),
        n.d(e, "g", (function() {
            return f
        }
        )),
        n.d(e, "k", (function() {
            return p
        }
        )),
        n.d(e, "j", (function() {
            return v
        }
        )),
        n.d(e, "a", (function() {
            return m
        }
        )),
        n.d(e, "p", (function() {
            return h
        }
        )),
        n.d(e, "i", (function() {
            return y
        }
        )),
        n.d(e, "f", (function() {
            return w
        }
        )),
        n.d(e, "n", (function() {
            return C
        }
        )),
        n.d(e, "d", (function() {
            return I
        }
        )),
        n.d(e, "o", (function() {
            return j
        }
        )),
        n.d(e, "e", (function() {
            return M
        }
        )),
        n.d(e, "r", (function() {
            return O
        }
        )),
        n.d(e, "q", (function() {
            return U
        }
        )),
        n.d(e, "m", (function() {
            return k
        }
        )),
        n.d(e, "c", (function() {
            return _
        }
        )),
        n.d(e, "b", (function() {
            return T
        }
        )),
        n.d(e, "s", (function() {
            return x
        }
        ));
        var i = n(69)
          , a = n.n(i)
          , r = n(8)
          , o = n.n(r)
          , c = (n(144),
        n(9));
        var s = !0
          , l = (s && (s = "undefined" == typeof window),
        s)
          , d = function(t) {
            return t ? t.replace(/^http:/, "") : ""
        }
          , u = function(t) {
            return parseInt(t) < 0 || null == t ? "--" : -1 !== String(t).indexOf(".") || -1 !== String(t).indexOf("-") ? t : 0 === parseInt(t) ? 0 : (t = parseInt(t)) >= 1e4 && t < 1e8 ? (t / 1e4).toFixed(t % 1e4 > 500 && t % 1e4 < 9500 ? 1 : 0) + c.b["万"] : t >= 1e8 ? (t / 1e8).toFixed(t % 1e8 > 5e6 && t % 1e8 < 95e6 ? 1 : 0) + c.b["亿"] : t
        }
          , f = function(t, e, n, i, a) {
            if (e = Math.abs(Math.round(e)),
            n = Math.abs(Math.round(n)),
            e > 4096 || n > 4096)
                return t;
            if (!t)
                return t;
            var r = t.match(/(.*\.(jpg|jpeg|gif|png))(\?.*)?/);
            if (!r)
                return t;
            if (!(-1 !== t.indexOf("/bfs/")))
                return t;
            var o = i && a ? "_" + i + "e_" + a + "c" : ""
              , c = e || n ? "@".concat(e ? "".concat(e, "w") : "").concat(n ? "_".concat(n, "h") : "").concat(o) : ""
              , s = r[3] ? r[3] : "";
            return g ? "".concat(r[1]).concat(c ? c + "_" : "@", "progressive.webp").concat(s) : "".concat(r[1]).concat(c ? c + "_" : "@", "progressive.").concat(r[2]).concat(s)
        }
          , p = function(t) {
            return /i\d\.hdslb\.com/.test(t)
        }
          , v = function(t, e) {
            return !(!t || "object" !== o()(t) || !e) && (t.classList ? t.classList.contains(e) : (" " + t.className + " ").indexOf(" " + e + " ") > -1)
        }
          , m = function(t, e) {
            if (t && "object" === o()(t) && e) {
                var n = (e || "").split(" ");
                if (t.classList) {
                    var i;
                    (i = t.classList).add.apply(i, a()(n))
                } else {
                    for (var r = t.className, c = 0; c < n.length; c++) {
                        var s = n[c];
                        s && (v(t, s) || (r += " " + s))
                    }
                    t.className = r
                }
            }
        }
          , h = function(t, e) {
            if (t && "object" === o()(t) && e) {
                var n = (e || "").split(" ");
                if (t.classList) {
                    var i;
                    (i = t.classList).remove.apply(i, a()(n))
                } else {
                    for (var r = " " + t.className + " ", c = 0; c < n.length; c++) {
                        var s = n[c];
                        s && (v(t, s) && (r = r.replace(" " + clsName + " ", " ")))
                    }
                    t.className = r.trim()
                }
            }
        };
        var b = null
          , g = b || l ? b : b = 0 === document.createElement("canvas").toDataURL("image/webp").indexOf("data:image/webp")
          , y = function(t) {
            return g ? t + "@1s.webp" : t + "@1s.gif"
        }
          , w = function(t) {
            return -1 !== String(t).indexOf(":") ? t : (t / 60 < 1 ? (e = "0",
            n = t) : (e = Math.floor(t / 60),
            n = t - 60 * Math.floor(t / 60)),
            e < 10 && (e = "0" + e),
            n < 10 && (n = "0" + n),
            e + ":" + n);
            var e, n
        }
          , C = function(t) {
            return "string" == typeof t && t.length > 6 ? t.substring(0, 6) + "..." : t
        }
          , I = (/iphone/gi.test((t || window).userAgent) && (812 === screen.height && 375 === screen.width || 896 === screen.height && screen.width),
        (l ? t : window).devicePixelRatio || 2)
          , j = function(t) {
            var e = 1e3 * t - (new Date).getTime()
              , n = 0
              , i = 0
              , a = 0
              , r = 0;
            return e <= 0 ? c.b["已结束"] : (a = ((e = Math.floor(e / 1e3)) - (r = e % 60)) / 60,
            n = Math.floor(a / 60),
            a %= 60,
            i = Math.floor(n / 24),
            n %= 24,
            "".concat(c.b["剩余"], " ").concat(i).concat(c.b["天"]).concat(n).concat(c.b["时"]).concat(r > 0 ? a + 1 : a).concat(c.b["分"]))
        }
          , M = function(t) {
            return (t = t.toString()).replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&#34;").replace(/'/g, "&#39;").replace(/\n/g, "")
        }
          , O = function(t) {
            if (t) {
                var e = []
                  , n = t.match(/codecontent="[^"]+"/g);
                n && n.forEach((function(n, i) {
                    t = t.replace(n, "$codeholder_" + i),
                    e.push(n)
                }
                ));
                for (var i = /(<a[^<]*>.*?<\/a>)/, a = t.split(i), r = 0, o = a.length; r < o; ++r)
                    if (i.test(a[r]))
                        a[r] = a[r].replace(/(<a\s)/, (function(t) {
                            return t + 'target="_blank" '
                        }
                        ));
                    else {
                        a[r] = a[r].replace(/(http:\/\/|https:\/\/)?[a-zA-Z]+\.bili(bili|game)\.com((\w|=|\?|\.|\/|&|-|#)*)/gi, (function(t) {
                            return t.indexOf("api.") > -1 ? t : "<a class='article-link' target='_blank' href='" + ("http" === t.substr(0, 4) ? t : "//" + t) + "'>" + t + "</a>"
                        }
                        ));
                        for (var c = a[r].split(i), s = 0, l = c.length; s < l; ++s)
                            i.test(c[s]) || (c[s] = c[s].replace(/av[0-9]+/gi, (function(t) {
                                return "<a class='video-link av-bv' data-av=" + t.slice(2) + " target='_blank' href='//www.bilibili.com/video/" + t + "'>" + t.toUpperCase() + "</a>"
                            }
                            )),
                            c[s] = c[s].replace(/cv[0-9]+/gi, (function(t) {
                                return "<a class='article-link' target='_blank' href='//www.bilibili.com/read/" + t + "?from=articleDetail'>" + t.toUpperCase() + "</a>"
                            }
                            )),
                            c[s] = c[s].replace(/(b|B)(v|V)1[1-9a-km-zA-HJ-NP-Z]{9}/g, (function(t) {
                                return "<a class='video-link' target='_blank' href='//www.bilibili.com/video/" + t + "?from=articleDetail'>" + t + "</a>"
                            }
                            )));
                        a[r] = c.join("")
                    }
                var d = a.join("");
                return e.forEach((function(t, e) {
                    d = d.replace("$codeholder_".concat(e), t)
                }
                )),
                e = null,
                d
            }
        }
          , U = function(t) {
            return t && t.replace(/(<\/figure>)((<p><br\/?><\/p>)+)(<figure[^>]*>)/g, (function(t, e, n, i, a) {
                return e + a
            }
            ))
        }
          , k = function(t) {
            return l ? Promise.resolve(-1) : new Promise((function(e, n) {
                var i = document.createElement("script");
                i.src = t,
                document.body.appendChild(i),
                i.onload = function() {
                    e(1)
                }
                ,
                i.onerror = function(t) {
                    n(t)
                }
            }
            ))
        }
          , _ = function(t) {
            return [/^(http:)?(https:)?(\/\/)?((([a-zA-Z0-9_-])+(\.)?){1,2}\.)?(bilibili.com)+(:\d+)?(\/((\.)?(\?)?=?&?%?[#!a-zA-Z0-9_-](\?)?)*)*$/i, /^(http:)?(https:)?(\/\/)?(([a-zA-Z0-9_-])+(\.)?){0,2}(\.biligame.com)+(:\d+)?(\/((\.)?(\?)?=?&?%?[#!a-zA-Z0-9_-](\?)?)*)*$/i, /^(http:)?(https:)?(\/\/)?(acg.tv)+(:\d+)?(\/((\.)?(\?)?=?&?%?[#!a-zA-Z0-9_-](\?)?)*)*$/i, /^(bilibili:\/\/)(\S)+$/i, /^(http:)?(https:)?(\/\/)?(b23.tv)(\/\w+)+$/i].filter((function(e) {
                return t.match(e)
            }
            )).length
        }
          , T = function() {
            var t, e, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, a = n.spm_id || (null === (t = document.getElementsByTagName("meta").spm_prefix) || void 0 === t ? void 0 : t.content), r = n.CBlock || "0", o = n.DBlock || "0", c = n.EBlock;
            if (e = c ? "".concat(a, ".").concat(r, ".").concat(o, ".").concat(c) : "".concat(a, ".").concat(r, ".").concat(o),
            !n.type)
                throw new Error("report need type");
            i.spm_id = e,
            window.reportObserver && window.reportObserver.reportCustomData && window.reportObserver.reportCustomData(n.type, i)
        }
          , x = function(t) {
            t = (t / 2).toString().split(".");
            for (var e = [], n = 0; n < t[0]; n++)
                e.push(2);
            if (t[1] && e.push(1),
            5 !== e.length)
                for (var i = 5 - e.length, a = 0; a < i; a++)
                    e.push(0);
            return e
        }
    }
    ).call(this, n(22))
}
, function(t, e, n) {
    n.d(e, "c", (function() {
        return r
    }
    )),
    n.d(e, "h", (function() {
        return o
    }
    )),
    n.d(e, "f", (function() {
        return c
    }
    )),
    n.d(e, "i", (function() {
        return s
    }
    )),
    n.d(e, "e", (function() {
        return d
    }
    )),
    n.d(e, "d", (function() {
        return u
    }
    )),
    n.d(e, "a", (function() {
        return f
    }
    )),
    n.d(e, "j", (function() {
        return p
    }
    )),
    n.d(e, "b", (function() {
        return v
    }
    )),
    n.d(e, "g", (function() {
        return m
    }
    ));
    n(7);
    var i = n(8)
      , a = n.n(i);
    n(145);
    var r = {
        get: function(t) {
            if ("undefined" != typeof document)
                return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(t).replace(/[-.+*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null
        },
        set: function(t, e, n) {
            n = void 0 !== n ? n : 365;
            var i = new Date;
            i.setTime(i.getTime() + 24 * n * 60 * 60 * 1e3),
            document.cookie = t + "=" + escape(e) + ";expires=" + i.toGMTString() + "; path=/; domain=.bilibili.com"
        },
        delete: function(t) {
            this.set(t, "", -1)
        }
    };
    !window || !window.localStorage || a()(window.localStorage);
    function o(t, e, n) {
        var i, a = null;
        return function() {
            var r = this
              , o = arguments
              , c = +new Date;
            clearTimeout(a),
            i || (i = c),
            c - i >= n ? (t.apply(r, o),
            i = c) : a = setTimeout((function() {
                t.apply(r, o)
            }
            ), e)
        }
    }
    var c = function(t, e) {
        if (parseInt(t) < 0 || null == t || null == t)
            return "--";
        if (-1 !== String(t).indexOf(".") || -1 !== String(t).indexOf("-"))
            return t;
        if (0 === parseInt(t))
            return 0;
        var n = e ? "萬" : "万"
          , i = e ? "億" : "亿";
        return (t = parseInt(t)) >= 1e4 && t < 1e8 ? (t / 1e4).toFixed(1) + n : t >= 1e8 ? (t / 1e8).toFixed(1) + i : t
    };
    var s = function(t) {
        return t ? t.replace(/^http:/, "") : ""
    }
      , l = function() {
        if ("undefined" == typeof window)
            return !1;
        try {
            return 0 === document.createElement("canvas").toDataURL("image/webp").indexOf("data:image/webp")
        } catch (t) {
            return !1
        }
    }()
      , d = function(t, e, n) {
        var i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!t)
            return t;
        var a = t.match(/(.*\.(jpg|jpeg|gif|png|bmp))(\?.*)?/)
          , r = -1 !== t.indexOf("/bfs/");
        if (!a || "gif" === a[2] || "bmp" === a[2] || !r)
            return t;
        var o = e && n ? "@" + e + "w_" + n + "h" + (i ? "_1c" : "") : "@"
          , c = a[3] ? a[3] : "";
        return l ? a[1] + o + ".webp" + c : a[1] + o + "." + a[2] + c
    };
    "undefined" != typeof window && window.console && window.console.log;
    var u = function(t, e) {
        if (window.spmReportData) {
            var n = e || t;
            window.spmReportData[t] = n
        }
    }
      , f = function() {
        var t, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, i = e.spm_id || (null === (t = document.getElementsByTagName("meta").spm_prefix) || void 0 === t ? void 0 : t.content) || "0.0", a = e.c || "0", r = e.d || "0", o = e.e || "0", c = o ? "".concat(i, ".").concat(a, ".").concat(r, ".").concat(o) : "".concat(i, ".").concat(a, ".").concat(r);
        if (!e.type)
            throw new Error("report need type");
        n.spm_id = c,
        window.reportObserver && window.reportObserver.reportCustomData && window.reportObserver.reportCustomData(e.type, n)
    }
      , p = (function() {
        try {
            r.get("bili_jct")
        } catch (t) {
            return ""
        }
    }(),
    function(t, e) {
        return t ? t.replace(e || /[&<">'](?:(amp|lt|quot|gt|#39|nbsp|#\d+);)?/g, (function(t, e) {
            return e ? t : {
                "<": "&lt;",
                "&": "&amp;",
                '"': "&quot;",
                ">": "&gt;",
                "'": "&#39;"
            }[t]
        }
        )) : ""
    }
    );
    var v = function(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (!t)
            return !1;
        var n = t.getBoundingClientRect();
        return n.top < window.innerHeight + e && n.bottom + e > 0 && n.left < window.innerWidth + e && n.right + e > 0
    }
      , m = function(t) {
        var e = t;
        if (!e)
            return null;
        for (; e && "HTML" !== e.tagName && "BOYD" !== e.tagName && 1 === e.nodeType; ) {
            var n = window.getComputedStyle(e).overflowY;
            if ("scroll" === n || "auto" === n)
                return "HTML" === e.tagName || "BODY" === e.tagName ? document : e;
            e = e.parentNode
        }
        return document
    };
    !function() {
        try {
            if ("object" === ("undefined" == typeof WebAssembly ? "undefined" : a()(WebAssembly)) && "function" == typeof WebAssembly.instantiate) {
                var t = new WebAssembly.Module(Uint8Array.of(0, 97, 115, 109, 1, 0, 0, 0));
                if (t instanceof WebAssembly.Module)
                    return new WebAssembly.Instance(t)instanceof WebAssembly.Instance
            }
        } catch (t) {}
    }()
}
, , , , , , , , function(t, e, n) {
    n.d(e, "b", (function() {
        return a
    }
    )),
    n.d(e, "a", (function() {
        return r
    }
    ));
    var i = n(52)
      , a = {}
      , r = function(t) {
        if (!t)
            return a;
        return function e() {
            var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , i = arguments.length > 1 ? arguments[1] : void 0;
            if ("string" != typeof n)
                for (var r = 0, o = Object.keys(n); r < o.length; r++) {
                    var c = o[r]
                      , s = n[c]
                      , l = i ? i + ".".concat(c) : c;
                    "string" == typeof s && (a[s] = t.t(l)),
                    e(s, l)
                }
        }(i, ""),
        a
    }
}
, function(t, e, n) {
    n.d(e, "g", (function() {
        return c
    }
    )),
    n.d(e, "d", (function() {
        return s
    }
    )),
    n.d(e, "f", (function() {
        return l
    }
    )),
    n.d(e, "h", (function() {
        return d
    }
    )),
    n.d(e, "b", (function() {
        return u
    }
    )),
    n.d(e, "a", (function() {
        return f
    }
    )),
    n.d(e, "i", (function() {
        return p
    }
    )),
    n.d(e, "k", (function() {
        return v
    }
    )),
    n.d(e, "c", (function() {
        return m
    }
    )),
    n.d(e, "j", (function() {
        return h
    }
    )),
    n.d(e, "e", (function() {
        return b
    }
    ));
    var i = n(28)
      , a = n(29)
      , r = "//api.bilibili.com"
      , o = function(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
          , n = i.b ? e && e.cookie : document.cookie;
        return e.csrf && t.data && (t.data.csrf = Object(i.c)(n).get("bili_jct")),
        Object(a.a)(t).then((function(e) {
            if (e && 200 === e.status || e.data && e.data.data) {
                var n = e.data || {}
                  , i = n.code
                  , a = n.message;
                return -101 !== i || "账号未登录" !== a || t.nologin || login().then((function(t) {
                    t && 1 === t.state && store.dispatch("SET_DEDE_USERID")
                }
                )),
                e.data || {}
            }
            return e || {}
        }
        )).catch((function(t) {
            return {
                err: t
            }
        }
        ))
    }
      , c = function(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
          , n = {
            url: "".concat(r, "/x/article/view"),
            method: "get",
            query: {
                id: t
            },
            sUrl: e.surl && e.surl["article.service"] || ""
        };
        return o(n, e)
    }
      , s = function(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
          , n = {
            url: "".concat(r, "/x/article/creative/draft/view"),
            method: "get",
            query: {
                aid: t
            },
            withCredentials: !0,
            sUrl: e.surl && e.surl["article.service"] || ""
        };
        return o(n, e)
    }
      , l = function(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
          , n = {
            url: "".concat(r, "/x/article/creative/article/view"),
            method: "get",
            query: {
                aid: t
            },
            withCredentials: !0,
            sUrl: e.surl && e.surl["article.service"] || ""
        };
        return o(n, e)
    }
      , d = function(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
          , n = {
            url: "".concat(r, "/x/article/viewinfo"),
            query: {
                id: t,
                mobi_app: "pc",
                from: "web"
            },
            sUrl: e.surl && e.surl["article.service"] || "",
            withCredentials: !0
        };
        return o(n, e)
    }
      , u = function(t, e) {
        var n = {
            url: "".concat(r, "/x/activity/subject/info"),
            query: {
                sid: t,
                aid: e
            }
        };
        return o(n)
    }
      , f = function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "pc"
          , e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
          , n = {
            url: "".concat(r, "/x/article/actinfo"),
            query: {
                mobi_app: t
            }
        };
        return o(n, e)
    }
      , p = function(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
          , n = {
            url: "".concat(r, "/x/article/more"),
            query: {
                aid: t,
                platform: "pc"
            }
        };
        return o(n, e)
    }
      , v = function(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
          , n = {
            url: "//api.vc.bilibili.com/vote_svr/v1/vote_svr/vote_info",
            query: {
                vote_id: t
            }
        };
        return o(n, e)
    }
      , m = function(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
          , n = {
            url: "".concat(r, "/x/article/cards"),
            query: {
                ids: t.join(","),
                game_sdk_type: 1
            }
        };
        return o(n, e)
    }
      , h = function(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
          , n = {
            url: "".concat(r, "/x/web-interface/card"),
            query: {
                mid: t,
                article: !0
            }
        };
        return o(n, e)
    };
    var b = function(t) {
        return o({
            url: "".concat("//api.bilibili.com", "/x/polymer/web-dynamic/v1/info"),
            query: {
                rid: t,
                type: 64
            }
        })
    }
}
, , , , , , function(t, e, n) {
    var i = n(1)
      , a = {
        props: {
            src: {
                type: String,
                default: ""
            },
            width: {
                type: Number,
                default: null
            },
            height: {
                type: Number,
                default: null
            },
            radius: {
                type: Number,
                default: null
            }
        },
        data: function() {
            return {
                isMounted: !1,
                dpr: 2,
                bgImage: null
            }
        },
        mounted: function() {
            this.isMounted = !0;
            var t = Object(i.e)(Object(i.i)(this.src), this.width * this.dpr, this.height * this.dpr);
            this.bgImage = {
                "background-image": 'url("'.concat(Object(i.i)(t), '")'),
                "border-radius": "".concat(this.radius, "px")
            }
        },
        computed: {
            baseStyle: function() {
                return {
                    width: "".concat(this.width, "px"),
                    height: "".concat(this.height, "px"),
                    "border-radius": "".concat(this.radius, "px")
                }
            }
        }
    }
      , r = (n(275),
    n(3))
      , o = Object(r.a)(a, (function() {
        var t = this.$createElement
          , e = this._self._c || t;
        return e("div", {
            staticClass: "card-image",
            style: this.baseStyle
        }, [e("div", {
            staticClass: "card-image__image",
            style: this.bgImage
        })])
    }
    ), [], !1, null, "b1d802ec", null);
    e.a = o.exports
}
, , , , , , , , , , , , function(t, e, n) {
    n.d(e, "a", (function() {
        return r
    }
    )),
    n.d(e, "d", (function() {
        return o
    }
    )),
    n.d(e, "b", (function() {
        return s
    }
    )),
    n.d(e, "c", (function() {
        return l
    }
    ));
    var i = void 0
      , a = function(t) {
        return t < 10 ? "0".concat(t) : "".concat(t)
    }
      , r = function(t) {
        var e = new Date(1e3 * t);
        return "".concat(e.getFullYear(), "-").concat(a(e.getMonth() + 1), "-").concat(a(e.getDate()), " ").concat(a(e.getHours()), ":").concat(a(e.getMinutes()))
    }
      , o = function(t) {
        var e = [];
        for (var n in t)
            e.push(n + "=" + encodeURIComponent(t[n] || ""));
        return e
    }
      , c = !0
      , s = (c && (c = "undefined" == typeof window),
    c)
      , l = function(t) {
        return {
            get: function(e) {
                return decodeURIComponent(t.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(e).replace(/[-.+*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null
            },
            set: function(t, e, n) {
                if (!s) {
                    n = void 0 !== n ? n : 365;
                    var i = new Date;
                    i.setTime(i.getTime() + 24 * n * 60 * 60 * 1e3),
                    document.cookie = t + "=" + escape(e) + ";expires=" + i.toGMTString() + "; path=/; domain=.bilibili.com"
                }
            },
            delete: function(t) {
                i.set(t, "", -1)
            }
        }
    }
}
, function(t, e, n) {
    var i = n(32)
      , a = n.n(i)
      , r = n(51)
      , o = n.n(r)
      , c = n(23)
      , s = n.n(c);
    function l(t) {
        return t.query.jsonp = "jsonp",
        t.param = t.params || t.param || t.data,
        new Promise((function(e, n) {
            t.url = t.query ? t.url + "?" + s.a.stringify(t.query) : "",
            t.url.indexOf("http") < 0 && (t.url = window.location.protocol + t.url);
            var i = {
                timeout: t.timeout,
                prefix: t.jsonCallback
            };
            o()(t.url, i, (function(t, i) {
                if (t)
                    return n(t);
                var a = {
                    code: i.code,
                    data: i
                };
                e(a)
            }
            ))
        }
        ))
    }
    function d(t) {
        return t.contentType && (t.headers = t.headers || {},
        t.headers["Content-Type"] = t.contentType),
        t.url = t.query ? t.url + "?" + s.a.stringify(t.query) : t.url,
        a()(t)
    }
    e.a = function(t) {
        return t.jsonp ? l(t).catch((function() {
            if (t.fallbackUrl)
                return t.url = t.fallbackUrl,
                l(t)
        }
        )) : d(t).catch((function() {
            if (t.fallbackUrl)
                return t.url = t.fallbackUrl,
                d(t)
        }
        ))
    }
}
, , , , function(t, e, n) {
    n.d(e, "a", (function() {
        return i
    }
    ));
    var i = {
        0: "/read/home",
        2: "/read/douga",
        1: "/read/game",
        16: "/read/lightnovel",
        17: "/read/technology",
        28: "/read/cinephile",
        29: "/read/interest",
        3: "/read/life",
        99: "/read/note",
        41: "/read/note",
        94: "/read/home"
    }
}
, function(t, e, n) {
    var i = n(6)
      , a = n.n(i)
      , r = n(7)
      , o = n.n(r)
      , c = n(2)
      , s = n.n(c)
      , l = n(72)
      , d = n.n(l)
      , u = (n(250),
    n(53))
      , f = n(5)
      , p = n(1)
      , v = {
        props: {
            show: {
                default: !1
            }
        },
        methods: {
            close: function() {
                this.$emit("close")
            }
        }
    }
      , m = (n(254),
    n(3))
      , h = Object(m.a)(v, (function() {
        var t = this.$createElement
          , e = this._self._c || t;
        return this.show ? e("div", {
            staticClass: "bili-dialog-m",
            on: {
                click: this.close
            }
        }, [e("div", {
            staticClass: "bili-dialog-bomb",
            on: {
                click: function(t) {
                    t.stopPropagation()
                }
            }
        }, [this._t("default")], 2)]) : this._e()
    }
    ), [], !1, null, null, null).exports
      , b = n(146)
      , g = n.n(b)
      , y = n(29);
    var w = n(23)
      , C = n.n(w);
    function I(t, e) {
        var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
        if (!n) {
            if (Array.isArray(t) || (n = function(t, e) {
                if (!t)
                    return;
                if ("string" == typeof t)
                    return j(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                "Object" === n && t.constructor && (n = t.constructor.name);
                if ("Map" === n || "Set" === n)
                    return Array.from(t);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                    return j(t, e)
            }(t)) || e && t && "number" == typeof t.length) {
                n && (t = n);
                var i = 0
                  , a = function() {};
                return {
                    s: a,
                    n: function() {
                        return i >= t.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: t[i++]
                        }
                    },
                    e: function(t) {
                        throw t
                    },
                    f: a
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var r, o = !0, c = !1;
        return {
            s: function() {
                n = n.call(t)
            },
            n: function() {
                var t = n.next();
                return o = t.done,
                t
            },
            e: function(t) {
                c = !0,
                r = t
            },
            f: function() {
                try {
                    o || null == n.return || n.return()
                } finally {
                    if (c)
                        throw r
                }
            }
        }
    }
    function j(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, i = new Array(e); n < e; n++)
            i[n] = t[n];
        return i
    }
    var M = {
        data: function() {
            return {
                relationTags: [],
                userTags: {},
                newGroupName: "",
                showNewGroup: !1,
                errmsg: ""
            }
        },
        props: {
            upData: {
                default: {}
            }
        },
        computed: {
            submitText: function() {
                var t, e = I(this.relationTags);
                try {
                    for (e.s(); !(t = e.n()).done; ) {
                        if (t.value.checked)
                            return "保存"
                    }
                } catch (t) {
                    e.e(t)
                } finally {
                    e.f()
                }
                return "保存至默认分组"
            }
        },
        methods: {
            getRelationTag: function() {
                return Object(y.a)({
                    url: "//api.bilibili.com/x/relation/tags",
                    withCredentials: !0
                })
            },
            getUserTag: function() {
                var t = {
                    url: "//api.bilibili.com/x/relation/tag/user",
                    withCredentials: !0,
                    query: {
                        fid: this.upData && this.upData.mid || 0
                    }
                };
                return Object(y.a)(t)
            },
            addGroup: function() {
                var t = this;
                if (this.newGroupName) {
                    var e = {
                        url: "//api.bilibili.com/x/relation/tag/create?cross_domain=true",
                        method: "POST",
                        withCredentials: !0,
                        data: C.a.stringify({
                            tag: this.newGroupName,
                            csrf: p.c.get("bili_jct")
                        })
                    };
                    Object(y.a)(e).then((function(e) {
                        e.data && 0 === e.data.code ? t.relationTags.push({
                            name: t.newGroupName,
                            tagid: e.data.data.tagid,
                            checked: !1
                        }) : t.errmsg = e.data && e.data.message,
                        t.newGroupName = "",
                        t.showNewGroup = !1
                    }
                    ))
                } else
                    !function(t) {
                        var e = t.el.getBoundingClientRect()
                          , n = e.left
                          , i = e.top
                          , a = e.width
                          , r = document.body && document.body.clientWidth || window.innerWidth
                          , o = document.body && document.body.clientHeight || window.innerHeight
                          , c = (document.scrollingElement || document.documentElement).scrollTop
                          , s = t.el ? n + a / 2 : r / 2
                          , l = t.el ? i + window.pageYOffset : o / 2 + c
                          , d = t.msg || ""
                          , u = t.cd || 2e3
                          , f = t.type || "success"
                          , p = document.getElementsByClassName("bili-msg");
                        p.length > 0 && p.forEach((function(t) {
                            return t.remove()
                        }
                        ));
                        var v = document.createElement("div");
                        v.setAttribute("class", "bili-msg"),
                        document.body.appendChild(v),
                        v.innerText = d,
                        v.setAttribute("style", "left: ".concat(s - v.offsetWidth / 2, "px; top: ").concat(l - (v.offsetHeight + 10), "px")),
                        v.classList.add("show"),
                        "error" === f && v.classList.add("error"),
                        v.timer = setTimeout((function() {
                            v.remove()
                        }
                        ), u)
                    }({
                        el: this.$refs.submitGroup,
                        msg: "请填写分组名称",
                        cd: 1e3,
                        type: "error"
                    })
            },
            openNewGroup: function() {
                this.errmsg = "",
                this.showNewGroup = !0
            },
            closeNewGroup: function(t) {
                var e;
                this.$refs.addGroup === t.target || null !== (e = this.$refs.addGroup) && void 0 !== e && e.contains(t.target) || (this.newGroupName = "",
                this.showNewGroup = !1)
            },
            submit: function() {
                var t, e = this, n = [], i = I(this.relationTags);
                try {
                    for (i.s(); !(t = i.n()).done; ) {
                        var a = t.value;
                        a.checked && n.push(a.tagid)
                    }
                } catch (t) {
                    i.e(t)
                } finally {
                    i.f()
                }
                var r = {
                    url: "//api.bilibili.com/x/relation/tags/addUsers?cross_domain=true",
                    method: "POST",
                    withCredentials: !0,
                    data: C.a.stringify({
                        fids: this.upData && this.upData.mid || 0,
                        tagids: n.join(","),
                        csrf: p.c.get("bili_jct")
                    })
                };
                Object(y.a)(r).then((function(t) {
                    document.getElementById("follow-dialog-wrap");
                    e.$message.info("加入分组成功", null, 1e3),
                    e.$emit("close")
                }
                )).catch((function(t) {}
                ))
            }
        },
        created: function() {
            var t = this;
            return a()(s.a.mark((function e() {
                var n, i, a, r, o, c, l, d;
                return s.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            Promise.all([t.getRelationTag(), t.getUserTag()]);
                        case 2:
                            if (n = e.sent,
                            i = g()(n, 2),
                            a = i[0],
                            (r = i[1]) && r.data && 0 === r.data.code ? t.userTags = r.data.data : r.data && r.data.message && (t.errmsg = r.data.message),
                            a.data && 0 === a.data.code) {
                                o = a.data.data,
                                c = I(o);
                                try {
                                    for (c.s(); !(l = c.n()).done; )
                                        d = l.value,
                                        t.userTags[d.tagid] ? d.checked = !0 : d.checked = !1
                                } catch (t) {
                                    c.e(t)
                                } finally {
                                    c.f()
                                }
                                t.relationTags = o
                            } else
                                a.data && a.data.message && (t.errmsg = a.data.message);
                        case 8:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))()
        }
    }
      , O = (n(258),
    Object(m.a)(M, (function() {
        var t = this
          , e = t.$createElement
          , n = t._self._c || e;
        return n("div", {
            staticClass: "follow-dialog-wrap",
            on: {
                click: function(e) {
                    return t.closeNewGroup(e)
                }
            }
        }, [n("div", {
            staticClass: "follow-dialog-window"
        }, [n("div", {
            staticClass: "title"
        }, [t._v("设置分组"), n("i", {
            staticClass: "close",
            on: {
                click: function(e) {
                    return t.$emit("close")
                }
            }
        })]), n("div", {
            staticClass: "content"
        }, [n("div", {
            staticClass: "info"
        }, [t._v("\n        请为 "), n("span", {
            staticClass: "uname",
            domProps: {
                textContent: t._s(t.upData.name)
            }
        }), t._v(" 选择分组\n      ")]), n("div", {
            staticClass: "group-list"
        }, [n("ul", [n("div", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: t.showNewGroup,
                expression: "showNewGroup"
            }],
            staticClass: "follow-group-mask"
        }), t._l(t.relationTags, (function(e) {
            return [0 !== e.tagid ? n("li", {
                key: e.tagid,
                class: e.tip ? "special-group" : ""
            }, [n("label", [n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.checked,
                    expression: "item.checked"
                }],
                attrs: {
                    type: "checkbox"
                },
                domProps: {
                    checked: Array.isArray(e.checked) ? t._i(e.checked, null) > -1 : e.checked
                },
                on: {
                    change: function(n) {
                        var i = e.checked
                          , a = n.target
                          , r = !!a.checked;
                        if (Array.isArray(i)) {
                            var o = t._i(i, null);
                            a.checked ? o < 0 && t.$set(e, "checked", i.concat([null])) : o > -1 && t.$set(e, "checked", i.slice(0, o).concat(i.slice(o + 1)))
                        } else
                            t.$set(e, "checked", r)
                    }
                }
            }), n("i"), n("span", {
                domProps: {
                    textContent: t._s(e.name)
                }
            })]), e.tip ? n("span", {
                staticClass: "special-tip",
                domProps: {
                    textContent: t._s(e.tip)
                }
            }) : t._e()]) : t._e()]
        }
        ))], 2), n("div", {
            staticClass: "errmsg",
            domProps: {
                textContent: t._s(t.errmsg)
            }
        }), n("div", {
            ref: "addGroup",
            staticClass: "add-group"
        }, [n("div", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: !t.showNewGroup,
                expression: "!showNewGroup"
            }],
            staticClass: "add-btn",
            on: {
                click: function(e) {
                    return e.stopPropagation(),
                    t.openNewGroup()
                }
            }
        }, [t._v("新建分组")]), n("div", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: t.showNewGroup,
                expression: "showNewGroup"
            }],
            staticClass: "input-group"
        }, [n("input", {
            directives: [{
                name: "model",
                rawName: "v-model",
                value: t.newGroupName,
                expression: "newGroupName"
            }],
            attrs: {
                type: "text",
                maxLength: "16",
                placeholder: "最多输入16个字"
            },
            domProps: {
                value: t.newGroupName
            },
            on: {
                input: function(e) {
                    e.target.composing || (t.newGroupName = e.target.value)
                }
            }
        }), n("button", {
            ref: "submitGroup",
            staticClass: "submitGroup",
            on: {
                click: function(e) {
                    return t.addGroup()
                }
            }
        }, [t._v("新建")])])])])]), n("div", {
            staticClass: "bottom"
        }, [n("button", {
            staticClass: "btn submit-move",
            attrs: {
                disabled: t.showNewGroup
            },
            domProps: {
                textContent: t._s(t.submitText)
            },
            on: {
                click: function(e) {
                    return t.submit()
                }
            }
        })])])])
    }
    ), [], !1, null, null, null).exports)
      , U = n(10);
    function k(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(t);
            e && (i = i.filter((function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }
            ))),
            n.push.apply(n, i)
        }
        return n
    }
    function _(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? k(Object(n), !0).forEach((function(e) {
                o()(t, e, n[e])
            }
            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : k(Object(n)).forEach((function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }
            ))
        }
        return t
    }
    var T = {
        name: "UpInfo",
        components: {
            UserAvatar: d.a,
            FollowBtn: u.a,
            BiliDialog: h,
            FollowedDialog: O
        },
        props: {
            viewInfo: {
                type: Object,
                default: function() {}
            }
        },
        data: function() {
            return {
                avatarObj: null,
                formatNum: p.f,
                dialogVisible: !1,
                upCardInfo: null,
                nameplateInfo: null
            }
        },
        mounted: function() {
            var t = this;
            this.$bus.$on("open-followed-dialog", (function() {
                t.dialogVisible = !0
            }
            )),
            this.getUpCardInfo()
        },
        computed: _(_({}, Object(f.d)(["readInfo", "upInfo", "readViewInfo"])), {}, {
            verify: function() {
                if (this.upCardInfo && this.upCardInfo.Official) {
                    var t = this.upCardInfo.Official.role;
                    if (1 === t || 2 === t || 7 === t)
                        return "person";
                    if (3 === t || 4 === t || 5 === t || 6 === t)
                        return "organization"
                }
                return ""
            },
            isVip: function() {
                if (this.upCardInfo) {
                    var t = this.upCardInfo.vip
                      , e = t.vipType
                      , n = t.vipStatus;
                    return (1 === e || 2 === e) && 1 === n
                }
            },
            iconType: function() {
                return "organization" === this.verify ? "business" : "person" === this.verify ? "personal" : this.isVip && 2 === this.upCardInfo.vip.vip_avatar_subscript ? "small-vip" : this.isVip && 1 === this.upCardInfo.vip.vip_avatar_subscript ? "big-vip" : ""
            }
        }),
        methods: {
            getUpCardInfo: function() {
                var t = this;
                return a()(s.a.mark((function e() {
                    var n, i;
                    return s.a.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                Object(U.j)(t.readInfo.author.mid);
                            case 2:
                                n = e.sent,
                                i = n.data,
                                t.upCardInfo = i.card,
                                t.nameplateInfo = i.card.nameplate,
                                t.setAvatar(t.readInfo);
                            case 7:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )))()
            },
            reportUpClick: function() {
                Object(p.a)({
                    c: "article_top",
                    d: "author_information",
                    e: "click",
                    type: "click"
                })
            },
            followChange: function(t) {
                this.viewInfo.attention = t
            },
            setAvatar: function(t) {
                var e = t.author
                  , n = {
                    avatar: e.face,
                    pendant: e.pendant.image,
                    avatarWidth: 44,
                    radius: !0,
                    iconType: this.iconType
                };
                n = Object.assign(n, {
                    pendent: e.pendant.image_enhance_frame || e.pendant.image,
                    isAnimate: !!e.pendant.image_enhance_frame
                }),
                this.avatarObj = new d.a,
                this.avatarObj.append(n, this.$refs.avatar, "avatar")
            }
        }
    }
      , x = (n(259),
    Object(m.a)(T, (function() {
        var t = this
          , e = t.$createElement
          , n = t._self._c || e;
        return n("div", {
            staticClass: "article-up-info"
        }, [n("div", {
            staticClass: "up-left"
        }, [n("div", {
            staticClass: "avatar-container",
            class: {
                "has-pendant": t.readInfo.author.pendant.image
            }
        }, [n("a", {
            ref: "avatar",
            attrs: {
                href: "//space.bilibili.com/" + t.readInfo.author.mid,
                target: "_blank"
            }
        })]), n("div", [n("div", {
            staticClass: "up-name-pannel"
        }, [n("a", {
            staticClass: "up-name",
            attrs: {
                href: "//space.bilibili.com/" + t.readInfo.author.mid,
                target: "_blank"
            },
            on: {
                click: t.reportUpClick
            }
        }, [t._v("\n        " + t._s(t.readInfo.author.name))]), t.upCardInfo && t.upCardInfo.level_info ? n("span", {
            staticClass: "level",
            class: "l" + t.upCardInfo.level_info.current_level
        }) : t._e(), t.nameplateInfo && 0 !== t.nameplateInfo.nid && t.nameplateInfo.name ? [n("div", {
            staticClass: "nameplate-holder"
        }, [n("i", {
            staticClass: "nameplate",
            style: {
                "background-image": "url(" + t.nameplateInfo.image_small + ")"
            }
        }), n("div", {
            staticClass: "nameplate-card"
        }, [n("div", {
            staticClass: "nameplate-ctnr"
        }, [n("i", {
            staticClass: "nameplate-arrow"
        }), n("img", {
            staticClass: "nameplate-pic",
            attrs: {
                src: t.nameplateInfo.image_small
            }
        }), n("div", {
            staticClass: "info"
        }, [n("div", {
            staticClass: "n-item n-name"
        }, [t._v("\n                    " + t._s(t.nameplateInfo.name) + "\n                  ")]), n("div", {
            staticClass: "n-item n-title"
        }, [t._v(t._s(t.nameplateInfo.condition))]), n("div", {
            staticClass: "info-bottom"
        }, [n("p", {
            staticClass: "n-item n-type"
        }, [n("span", [t._v(t._s(t.nameplateInfo.level))])]), n("a", {
            attrs: {
                href: "https://account.bilibili.com/site/nameplate.html",
                target: "_blank"
            }
        }, [t._v("查看全部>>")])])])])])])] : t._e()], 2), n("div", {
            staticClass: "avatar-info-pannel"
        }, [n("span", {
            staticClass: "fans"
        }, [t._v("粉丝：")]), n("span", {
            staticClass: "fans-num"
        }, [t._v(t._s(t.formatNum(t.upInfo.fans || 0)))]), [n("span", {
            staticClass: "view"
        }, [t._v("文章：")]), n("span", {
            staticClass: "view-num"
        }, [t._v(t._s(t.formatNum(t.readViewInfo.total || 0)))])]], 2)])]), n("FollowBtn", {
            staticClass: "up-btn",
            attrs: {
                width: 128,
                height: 32,
                mid: t.readInfo.author.mid
            }
        }), t.dialogVisible ? n("BiliDialog", {
            attrs: {
                show: t.dialogVisible
            },
            on: {
                close: function(e) {
                    t.dialogVisible = !1
                }
            }
        }, [n("FollowedDialog", {
            attrs: {
                upData: {
                    mid: t.readInfo.author.mid
                }
            },
            on: {
                close: function(e) {
                    t.dialogVisible = !1
                }
            }
        })], 1) : t._e()], 1)
    }
    ), [], !1, null, "904253a6", null));
    e.a = x.exports
}
, function(t, e, n) {
    var i = n(6)
      , a = n.n(i)
      , r = n(7)
      , o = n.n(r)
      , c = n(2)
      , s = n.n(c)
      , l = n(5)
      , d = n(0)
      , u = n(10)
      , f = n(1)
      , p = (n(9),
    n(4))
      , v = n(14)
      , m = {
        data: function() {
            return {
                exposeExist: !1,
                triggerDrop: !1,
                downloadStatus: "",
                statusType: 0,
                callTempData: "",
                gameInfoCache: {},
                buttonText: "",
                progress: 0
            }
        },
        computed: {
            extraData: function() {
                var t = {
                    sourcefrom: this.source.sourceFrom + "",
                    game_base_id: this.gameid.toString(),
                    button_name: this.buttonText,
                    game_status: this.gameInfoCache.game_status.toString()
                };
                return Object.assign(t, this.extra)
            },
            isDownload: function() {
                return "2" == this.statusType && ["start", "waiting", "progressing", "pausing", "paused"].includes(this.downloadStatus)
            }
        },
        props: {
            gameid: {
                required: !0,
                type: Number
            },
            source: {
                required: !0,
                type: Object
            },
            extra: {
                type: Object
            }
        },
        mounted: function() {
            this.init()
        },
        methods: {
            reportExposure: function() {
                var t = this;
                this.exposeExist || (Object(v.d)("gamecommon.reportExposure").then((function(e) {
                    e ? v.a.callNative({
                        method: "gamecommon.reportExposure",
                        data: {
                            event_id: t.source.exposureEvent,
                            extra: t.extraData
                        }
                    }) : console.error("not support")
                }
                )),
                this.exposeExist = !0)
            },
            reportClick: function() {
                var t = this;
                Object(v.d)("gamecommon.reportClick").then((function(e) {
                    e ? v.a.callNative({
                        method: "gamecommon.reportClick",
                        data: {
                            event_id: t.source.clickEvent,
                            extra: t.extraData
                        }
                    }) : console.error("not support")
                }
                ))
            },
            hrefOpen: function() {
                var t = "https://app.biligame.com/detail?id=".concat(this.gameid, "&sourceFrom=").concat(this.source.sourceFrom);
                window.open(t)
            },
            init: function() {
                var t = this;
                v.b && this.gameid ? (Object(v.c)(),
                v.a.callNative({
                    method: "global.import",
                    data: {
                        namespace: "gamecommon"
                    }
                }),
                Object(v.d)("gamecommon.getGameInfo").then((function(e) {
                    e ? v.a.callNative({
                        method: "gamecommon.getGameInfo",
                        data: {
                            game_base_id: t.gameid.toString()
                        },
                        callback: t.commonCallback
                    }) : (t.triggerDrop = !0,
                    t.buttonText = "查看",
                    t.reportExposure())
                }
                ))) : (this.triggerDrop = !0,
                this.buttonText = "查看",
                this.reportExposure())
            },
            clickFn: function() {
                var t = this;
                if (v.b && this.gameid && !this.triggerDrop) {
                    var e = {
                        game_info: this.gameInfoCache,
                        event_id: this.source.clickEvent,
                        sourcefrom: this.source.sourceFrom + "",
                        sourceFrom: this.source.sourceFrom + "",
                        bilifrom: this.source.biliFrom + "",
                        extra: this.extraData
                    };
                    Object(v.d)("gamecommon.handleClick").then((function(n) {
                        n ? v.a.callNative({
                            method: "gamecommon.handleClick",
                            data: e,
                            callback: t.commonCallback
                        }) : t.hrefOpen()
                    }
                    ))
                } else
                    this.hrefOpen()
            },
            commonCallback: function(t) {
                switch (this.buttonText = t.button_name || "查看",
                this.statusType = t.type,
                this.triggerDrop = !1,
                this.statusType) {
                case "0":
                    0 == t.code ? t.data.game_base_id == this.gameid && (this.gameInfoCache = t.data) : this.triggerDrop = !0,
                    this.reportExposure();
                    break;
                case "1":
                    t.data.game_base_id == this.gameid && (this.gameInfoCache = t.data);
                    break;
                case "2":
                    t.data.pkg === this.gameInfoCache.android_pkg_name && (this.downloadStatus = t.data.status,
                    this.progress = t.data.progress)
                }
                this.callTempData = JSON.stringify(t)
            }
        }
    }
      , h = (n(266),
    n(3))
      , b = Object(h.a)(m, (function() {
        var t = this
          , e = t.$createElement
          , n = t._self._c || e;
        return t.buttonText && t.gameid ? n("div", {
            class: ["yyds-status-button", t.isDownload ? "download" : ""],
            on: {
                click: t.clickFn
            }
        }, [n("div", {
            staticClass: "button-text"
        }, [t._v(t._s(t.buttonText))]), t.isDownload ? n("div", {
            staticClass: "button-progress",
            style: {
                width: t.progress + "%"
            }
        }) : t._e()]) : t._e()
    }
    ), [], !1, null, "327814ae", null).exports;
    function g(t, e) {
        var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
        if (!n) {
            if (Array.isArray(t) || (n = function(t, e) {
                if (!t)
                    return;
                if ("string" == typeof t)
                    return y(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                "Object" === n && t.constructor && (n = t.constructor.name);
                if ("Map" === n || "Set" === n)
                    return Array.from(t);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                    return y(t, e)
            }(t)) || e && t && "number" == typeof t.length) {
                n && (t = n);
                var i = 0
                  , a = function() {};
                return {
                    s: a,
                    n: function() {
                        return i >= t.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: t[i++]
                        }
                    },
                    e: function(t) {
                        throw t
                    },
                    f: a
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var r, o = !0, c = !1;
        return {
            s: function() {
                n = n.call(t)
            },
            n: function() {
                var t = n.next();
                return o = t.done,
                t
            },
            e: function(t) {
                c = !0,
                r = t
            },
            f: function() {
                try {
                    o || null == n.return || n.return()
                } finally {
                    if (c)
                        throw r
                }
            }
        }
    }
    function y(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, i = new Array(e); n < e; n++)
            i[n] = t[n];
        return i
    }
    var w = d.d > 2 ? 2 : 1.5
      , C = function t(e, n, i) {
        var a = {
            "video-card": {
                id: "av".concat(n)
            },
            "video-card nomal": {
                id: "av".concat(n)
            },
            "video-card column": {
                id: "av".concat(n)
            },
            "article-card": {
                id: "cv".concat(n)
            },
            "music-card": {
                id: n
            },
            "fanju-card": {
                id: n
            },
            "shop-card": {
                id: n
            },
            "caricature-card": {
                id: "mc".concat(n)
            },
            "caricature-card nomal": {
                id: "mc".concat(n)
            },
            "caricature-card column": {
                id: "mc".concat(n)
            },
            "live-card": {
                id: "lv".concat(n)
            },
            "goods-card": {
                id: "co".concat(i)
            },
            "game-card": {
                id: "gm".concat(n)
            }
        };
        return /[0-9]+,[0-9]+/.test(n) ? {
            ids: n.split(",").map((function(n) {
                return (t(e, n) || {}).id
            }
            ))
        } : /shopId/.test(n) ? t(e, n.split("shopId=")[0]) : a[e] || {}
    }
      , I = function(t) {
        var e = new Date;
        return e.setTime(1e3 * t),
        "".concat(e.getFullYear(), "/").concat(e.getMonth() + 1, "/").concat(e.getDate())
    }
      , j = function(t, e) {
        if (!t)
            return "";
        var n = t.getAttribute("width") || e
          , i = t.getAttribute("height")
          , a = t.getAttribute("data-src");
        n > e && (i = Math.ceil(e / n * i),
        n = e),
        t.setAttribute("data-src", Object(d.t)(Object(d.g)(a, n * w, i * w)));
        var r = /\.gif$/.test(a)
          , o = t.parentNode;
        if ("FIGURE" === o.tagName)
            o.style.cssText = "min-width: ".concat(n, "px;min-height: ").concat(i, "px;");
        else {
            var c = document.createElement("figure");
            c.className = "img-box",
            c.setAttribute("contenteditable", !1);
            var s = t.cloneNode();
            o.replaceChild(c, t),
            c.appendChild(s),
            t = s
        }
        if (r) {
            t.setAttribute("src", Object(d.i)(a)),
            t.className = "normal-img normal-gif",
            t.style.cssText = "width: ".concat(n, "px;height: ").concat(i ? "".concat(i, "px") : "auto", ";");
            var l = '\n      <div class="n-img-mask" style="width: 100%;height: '.concat(i ? "".concat(i, "px") : "auto", ';">\n        <div class="d-f ali-c jus-c gif-preload-dots dis-evt">\n          <div class="black-tv-icon-bg">\n            <span class="dot dot-1"></span>\n            <span class="dot dot-2"></span>\n            <span class="dot dot-3"></span>\n          </div>\n        </div>\n        <div class="d-f ali-c jus-c gif-preload-info" data-type="reload">\n          <span class="black-tv-icon-bg dis-evt">GIF</span>\n        </div>\n      </div>\n    ');
            t.insertAdjacentHTML("beforebegin", l)
        } else {
            t.className = "normal-img",
            t.style.cssText = "width: ".concat(n, "px;height: ").concat(i ? "".concat(i, "px") : "auto", ";");
            var u = '\n      <div class="n-img-mask" style="width: 100%;height: '.concat(i ? "".concat(i, "px") : "auto", ';">\n        <i class="iconfont icon--default-cover default-cover"></i>\n        <div class="n-img-reload" data-type="reload"></div>\n      </div>\n    ');
            t.insertAdjacentHTML("beforebegin", u)
        }
        return {
            dom: t,
            width: n,
            height: i
        }
    }
      , M = function(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
          , n = arguments.length > 2 ? arguments[2] : void 0
          , i = arguments.length > 3 ? arguments[3] : void 0
          , a = arguments.length > 4 ? arguments[4] : void 0;
        if (t) {
            var r = e.id
              , o = e.title
              , c = e.author
              , s = void 0 === c ? {} : c
              , l = e.stats
              , u = void 0 === l ? {} : l
              , f = e.image_urls
              , p = void 0 === f ? [] : f
              , v = e.summary
              , m = null
              , h = !r;
            m = h ? '\n      <div class="card article-error-card slim-border">\n        <div class="article-error-card__left">\n          <p class="p-1"></p>\n          <p class="p-2"></p>\n          <p class="p-3"></p></div>\n        <p class="cover"><i class="icon icon-info"></i><span>文章加载失败</span></p>\n      </div>\n    ' : '\n      <a class="article-card-holder normal-card" href="//www.bilibili.com/read/'.concat(n, '?from=articleDetail" target="_blank" data-card-type="article" data-card-id="').concat(e.id, '">\n        <div class="dis-evt article-card-wrap slim-border">\n          <div>\n            <div class="title-wrap">\n              <p class="single-ellipsis title" style="-webkit-box-orient: vertical;">').concat(Object(d.e)(o), '</p>\n\n              <p class="single-ellipsis desc" style="-webkit-box-orient: vertical;">').concat(Object(d.e)(v), '</p>\n            </div>\n            <p class="article-card-status">\n              <label class="card-text-label">').concat(null == a ? void 0 : a.$t("cards.article"), '</label>\n              <span class="d-f ali-c author status-item">\n                <i class="iconfont icon--up article-icon"></i>\n                <span>').concat(Object(d.n)(Object(d.e)(s.name)), '</span>\n              </span>\n              <span class="d-f ali-c play-item status-item">\n                <i class="iconfont icon--view-num article-icon"></i>\n                <span class="num">').concat(Object(d.h)(u.view), '</span>\n              </span>\n              <span class="d-f ali-c like-item status-item">\n                <i class="iconfont icon--like-num article-icon"></i>\n                <span class="num">').concat(Object(d.h)(u.like), '</span>\n              </span>\n              <span class="d-f ali-c like-item status-item">\n                <i class="iconfont icon--comment-num article-icon"></i>\n                <span class="num">').concat(Object(d.h)(u.reply), '</span>\n              </span>\n            </p>\n          </div>\n          <div class="default-col">\n          </div>\n          <div class="default-col">\n            <div class="d-f fw-n article-card-pics">\n                <div class="v-f article-pic"><span class="article-bg-pic" \n                style="background-image: url(').concat(Object(d.e)(Object(d.g)(p[0], i / p.length * w, 100 * w)), '\n                ")"></span></div>\n            </div>\n          </div>\n        </div>\n      </a>\n    '),
            t.parentNode && (t.parentNode.innerHTML = '<div class="card-container article-card '.concat(h ? "auto-card" : "", '">').concat(m, "</div>"))
        }
    }
      , O = function(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
          , n = arguments.length > 3 ? arguments[3] : void 0;
        if (t) {
            var i, a = e.title, r = e.aid, o = e.bvid, c = e.cid, s = e.owner, l = void 0 === s ? {} : s, u = e.pic, f = e.duration, p = e.stat, v = void 0 === p ? {} : p, m = e.redirect_url, h = void 0 === m ? "" : m, b = h || "//www.bilibili.com/video/".concat(o || "av" + r), g = !(o && r);
            i = g ? '\n      <div class="video-error-card">\n          <div class="video-cover">\n            <p class="error-hint">\n              <span>视频加载失败</span>\n            </p>\n          </div>\n          <div class="video-info-container">\n            <p class="title"></p>\n            <p class="card-status"></p>\n            <p class="partition"></p>\n          </div>\n      </div>\n    ' : '\n      <a href="'.concat(b, '" target="_blank" data-card-type="video" data-card-id="').concat(o || r, '">\n        <div class="dis-evt row-video-holder normal-card is-pause" data-aid="').concat(r, '" data-bvid="').concat(o, '" data-cid="').concat(c, '" data-redirect="').concat(h, '">\n          <div class="d-f-s dis-evt row-video-ctnr">\n            <div class="row-video-left" style="background-image: url(').concat(Object(d.g)(Object(d.t)(u), 150 * w), ');">\n              <div class="dis-evt d-f-c row-video-mask by-playing">\n                <div class="row-video-sub">\n                  <div class="d-f ali-f-e jus-f-e playing-status"></div>\n                </div>\n              </div>\n              <div class="dis-evt d-f-c row-video-mask by-pause">\n                <svg class="symbol-icon row-video-icon">\n                  <use xlink:href="#read-player-play"/>\n                </svg>\n                <div class="row-video-sub">\n                  <div class="row-video-duration">').concat(Object(d.f)(f), '</div>\n                </div>\n              </div>\n            </div>\n            <div class="v-f txt-l row-video-right">\n              <div class="double-ellipsis row-video-tit" data-card-type="videoAuthor" style="-webkit-box-orient: vertical;">').concat(Object(d.e)(a), '</div>\n              <div class="row-video-infos">\n                <div class="video-play-infos">\n                  <div class="player-views">\n                    <i class="iconfont icon--video-play-num info-icon"></i>\n                    <span>').concat(Object(d.h)(v.view || 0), '</span>\n                    <i class="iconfont icon--comment-num info-icon"></i>\n                    <span>').concat(Object(d.h)(v.reply || 0), '</span>\n                  </div>\n                </div>\n                <div class="d-f-s author-info-box">\n                  <label class="card-text-label">').concat(null == n ? void 0 : n.$t("cards.video"), '</label>\n                  <i class="iconfont icon--up up-icon info-icon"></i>\n                  <span class="dis-evt author-name">').concat(Object(d.e)(l.name), "</span>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </a>\n    "),
            t.parentNode && (t.parentNode.innerHTML = '<div class="card-container video-card '.concat(g ? "auto-card" : "", '">').concat(i, "</div>"))
        }
    }
      , U = function(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []
          , n = arguments.length > 2 ? arguments[2] : void 0
          , i = arguments.length > 3 ? arguments[3] : void 0
          , a = arguments.length > 4 ? arguments[4] : void 0;
        if (t) {
            if (e.length <= 1)
                return makeVideoCard(t, e[0], i, n, a);
            var r = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , e = arguments.length > 1 ? arguments[1] : void 0
                  , n = t.bvid
                  , i = t.aid
                  , r = t.pic
                  , o = t.stat
                  , c = (t.duration,
                t.title)
                  , s = t.owner;
                return n ? '\n      <div class="v-f d-f slim-video-holder normal-card">\n        <a class="d-f" data-card-type="video" data-card-id="'.concat(n || i, '" data-aid="').concat(i, '"\n          href="//www.bilibili.com/video/').concat(n || "av".concat(i), '" target="_blank">\n          <div class="dis-evt cover-box">\n            <i class="iconfont icon--default-cover default-cover"></i>\n            <div class="cover-img" style="background-image: url(').concat(Object(d.g)(Object(d.t)(r), e / 2 * w, e / 2 * .625 * w), ')"></div>\n          </div>\n          <div class="dis-evt slim-video-cnt-ctnr">\n            <p class="double-ellipsis slim-video-title">').concat(Object(d.e)(c), '</p>\n            <div class="column-video-card__info">\n              <div class="cover-info-item">\n                <i class="iconfont icon--video-play-num"></i>\n                <span class="num-info">').concat(Object(d.h)(o.view || 0), '</span>\n              </div>\n              <div class="cover-info-item">\n                <i class="iconfont icon--danmu"></i>\n                <span class="num-info">').concat(Object(d.h)(o.danmaku || 0), '</span>\n              </div>\n            </div>\n            <div class="column-video-card__bottom">\n              <label class="card-text-label">').concat(null == a ? void 0 : a.$t("cards.video"), '</label>\n              <div class="v-f d-f ali-c slim-author-info">\n                <i class="iconfont icon--up up-icon"></i>\n                <span class="v-f single-ellipsis author-name">').concat(Object(d.e)(s.name), "</span>\n              </div>\n            </div>\n          </div>\n        </a>\n      </div>\n    ") : '<div class="v-f error-card-pb slim-video-card-error column">\n      <div class="error-cover">\n        视频加载失败\n      </div>\n      <div class="error-info">\n        <p class="info-block info-block-1"></p>\n        <p class="info-block info-block-2"></p>\n        <p class="info-block info-block-3"></p>\n      </div>\n    </div>'
            }
              , o = e.reduce((function(t, e) {
                return t + r(e, n)
            }
            ), "");
            t.parentNode && (t.parentNode.innerHTML = '<div class="d-f fd-row card-container column-card slim-video-card">'.concat(o, "</div>"),
            t.remove())
        }
    }
      , k = function(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
          , n = arguments.length > 2 ? arguments[2] : void 0;
        if (t) {
            var i = e.song_id
              , a = e.cover_url
              , r = e.title
              , o = e.play_num
              , c = e.reply_num
              , s = e.up_name
              , l = (Object(d.e)("bilibili://music/playoutside?songId=".concat(i, "&name=").concat(encodeURIComponent(r), "&uperName=").concat(encodeURIComponent(s), "&cover_url=").concat(encodeURIComponent(a), "&upperId=").concat(encodeURIComponent(s), "&from=article")),
            "//m.bilibili.com/audio/au".concat(i))
              , u = Object(d.g)(Object(d.t)(a), 96 * w)
              , f = ""
              , p = !i;
            f = p ? '<div class="error-card-pb comic-card-error-single">\n      <div class="cover-img">\n        音乐加载失败\n      </div>\n      <div class="comic-info">\n        <p class="error-block error-block-1"></p>\n        <p class="error-block error-block-2"></p>\n        <p class="error-block error-block-3"></p>\n      </div>\n    </div>' : '\n      <div class="d-f fd-row music-card-holder flex-normal-card">\n        <a class="music-cover-box" data-card-type="music" data-card-id="'.concat(i, '" href="').concat(l, '" target="_blank">\n          <div class="dis-evt music-cover-ctnr">\n            <div class="cover-bg cover-bottom-bg" style="background-image: url(').concat(u, ')"></div>\n            <div class="cover-bg cover-top-bg" style="background-image: url(').concat(u, ')"></div>\n          </div>\n        </a>\n        <a class="music-cnt-box" data-card-type="music" data-card-id="').concat(i, '" href="').concat(l, '" target="_blank">\n          <div class="music-cnt-ctnr">\n            <p class="music-title single-ellipsis">').concat(Object(d.e)(r), '</p>\n            <div class="music-data-box">\n              <div class="music-data-item">\n                <i class="iconfont icon--earphone comment-icon"></i>\n                <span class="data-num">').concat(Object(d.h)(o), '</span>\n              </div>\n              <div class="music-data-item">\n                <i class="iconfont icon--comment-num comment-icon"></i>\n                <span class="data-num">').concat(Object(d.h)(c), '</span>\n              </div>\n            </div>\n            <div class="d-f ali-c music-up-info">\n              <i class="iconfont icon--up up-icon"></i>\n              <label class="single-ellipsis up-name">').concat(Object(d.e)(s), '</label>\n            </div>\n            <div class="music-tag-box">\n              <label class="card-text-label">').concat(null == n ? void 0 : n.$t("cards.music"), "</label>\n            </div>\n          </div>\n        </a>\n      </div>\n    "),
            t.parentNode && (t.parentNode.innerHTML = '<div class="card-container music-card '.concat(p ? "auto-card" : "", '">').concat(f, "</div>"))
        }
    }
      , _ = function(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
          , n = arguments.length > 2 ? arguments[2] : void 0;
        if (t) {
            var i = e.game_base_id
              , a = e.game_icon
              , r = e.game_name
              , o = e.game_tags
              , c = e.grade
              , s = (e.book_num,
            e.notice)
              , l = (e.game_status,
            e.download_num,
            e.is_online)
              , u = ""
              , f = !i;
            if (f)
                u = '<div class="game-card-error">\n        <div class="cover-img"><i class="iconfont icon--default-cover"></i></div>\n        <div class="comic-info">\n          <p class="error-text"><i class="iconfont icon-tanchuang_check"></i>游戏加载失败</p>\n          <p class="error-block error-block-1"></p>\n          <p class="error-block error-block-2"></p>\n          <p class="error-block error-block-3"></p>\n        </div>\n      </div>\n    ';
            else {
                var v = Object(d.g)(Object(d.t)(a), 84 * w);
                s = s ? "公告：".concat(s) : "";
                var m = function(t) {
                    var e = {
                        0: "icon-rate",
                        1: "icon-rate_half",
                        2: "icon-rate_fill"
                    }
                      , n = Object(d.s)(t)
                      , i = "";
                    i += '<span class="game-rate-star">';
                    for (var a = 0; a < 5; a++)
                        i += '<i class="iconfont '.concat(e[n[a]], '"></i>');
                    return i += "</span>"
                };
                u = '\n      <div class="d-f fd-row game-card-holder" @click="statusButtonClick">\n        <a class="d-f fd-row v-f" href="//www.biligame.com/detail/?id='.concat(i, '" target="_blank">\n          <div class="game-icon" style="background-image: url(').concat(v, ')"></div>\n          <div class="game-info d-f fd-col jus-s-b">\n            <p class="game-info-title single-ellipsis">').concat(r, '</p>\n            <div class="game-info-sub-text">\n              ').concat(c ? '<p class="game-info-grade">'.concat(m(c), '<span class="grade">').concat(Number(c).toFixed(1), "分</span></p>") : "", "\n              ").concat(s ? '<p class="game-info-notice single-ellipsis">'.concat(s, "</p>") : "", '\n              <p class="game-info-tag">\n                <label class="card-text-label">游戏</label>\n                <span class="game-tags single-ellipsis">').concat(o, "</span>\n              </p>\n            </div>\n          </div>\n        </a>\n        ").concat(l ? '<div class="game-button d-f ali-c jus-c">\n            <StatusButton :gameid="'.concat(i, '" :source="{sourceFrom: 1000210022 }" :extra="{spmid: \'333.976.0.0\', column_id: ').concat(n, '}"  />\n          </div>') : "", "\n      </div>\n    ")
            }
            if (t.parentNode) {
                if (l) {
                    var h = document.createElement("div");
                    t.parentNode.appendChild(h),
                    new p.default({
                        el: h,
                        components: {
                            StatusButton: b
                        },
                        template: '<div class="card-container game-card '.concat(f ? "auto-card" : "", '">').concat(u, "</div>"),
                        methods: {
                            statusButtonClick: function() {
                                Object(d.b)({
                                    CBlock: "tail",
                                    DBlock: "game-card",
                                    type: "click"
                                }, {
                                    msg: JSON.stringify({
                                        page_entity_id: n,
                                        page_entity: "article",
                                        card_entity: "game",
                                        card_entity_id: i
                                    })
                                })
                            }
                        },
                        mounted: function() {
                            Object(d.b)({
                                CBlock: "tail",
                                DBlock: "game-card",
                                type: "appear"
                            }, {
                                msg: JSON.stringify({
                                    page_entity_id: n,
                                    page_entity: "article",
                                    card_entity: "game",
                                    card_entity_id: i
                                })
                            })
                        }
                    })
                } else
                    t.parentNode.innerHTML = '<div class="card-container game-card '.concat(f ? "auto-card" : "", '">').concat(u, "</div>");
                t.remove()
            }
        }
    }
      , T = function(t, e, n) {
        if (t) {
            var i = t.count
              , a = t.score
              , r = !!i
              , o = i ? "".concat(Object(d.h)(i), "人") : null == n ? void 0 : n.$t("cards.shortRatePeople")
              , c = /\./.test(a) ? a : "".concat(a, ".0");
            return r ? '\n        <div class="score-cnt">\n          <span class="score-num">'.concat(c, "</span>\n          <span>").concat(null == n ? void 0 : n.$t("tool.score"), '</span>\n        </div>\n        <div class="score-disc">').concat(e ? "".concat(o) : null == n ? void 0 : n.$t("tool.notPlay"), "</div>\n      ") : '\n        <div class="score-no-count">\n          '.concat(null == n ? void 0 : n.$t("cards.noRate"), '\n        </div>\n        <div class="score-disc">').concat(e ? "".concat(o) : null == n ? void 0 : n.$t("tool.notPlay"), "</div>\n      ")
        }
        return ""
    }
      , x = function(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
          , n = arguments.length > 2 ? arguments[2] : void 0;
        if (t) {
            var i, a = e.season_id, r = e.cover, o = e.title, c = e.rating, s = e.playable, l = e.play_count, u = e.follow_count, f = e.season_type_name, p = !a;
            i = p ? '<div class="error-card-pb comic-card-error-single">\n      <div class="cover-img">\n        番剧加载失败\n      </div>\n      <div class="comic-info">\n        <p class="error-block error-block-1"></p>\n        <p class="error-block error-block-2"></p>\n        <p class="error-block error-block-3"></p>\n      </div>\n    </div>' : '\n      <a class="bangumi-card-holder normal-card" data-card-type="bangumi" data-card-id="'.concat(a, '" href="//bangumi.bilibili.com/anime/').concat(a, '" target="_blank">\n        <div class="dis-evt d-f bangumi-card-ctnr">\n          <div class="cover-box">\n            <i class="iconfont icon--default-cover default-cover"></i>\n            <div class="cover-img" style="background-image:url(').concat(Object(d.g)(Object(d.t)(r), 78 * d.d, 104 * d.d), ')"></div>\n          </div>\n          <div class="v-f d-f fd-col jus-s-b bangumi-cnt-ctnr">\n            <div class="v-f">\n              <p class="bangumi-title double-ellipsis" style="-webkit-box-orient: vertical;">').concat(Object(d.e)(o), '</p>\n              <div class="d-f ali-c bangumi-data-box">\n                <div class="d-f ali-c bangumi-data-item">\n                  <i class="iconfont icon--video-play-num bangumi-icon"></i>\n                  <span class="data-num">').concat(Object(d.h)(l), '</span>\n                </div>\n                <div class="d-f ali-c bangumi-data-item">\n                  <i class="iconfont icon--heart bangumi-icon"></i>\n                  <span class="data-num">').concat(Object(d.h)(u), '</span>\n                </div>\n              </div>\n            </div>\n            <div class="bangumi-tag-box">\n              <label class="card-text-label">').concat(f || (null == n ? void 0 : n.$t("cards.bangumi")), '</label>\n            </div>\n          </div>\n          <div class="bangumi-score-ctnr">\n            ').concat(T(c, s, n), "\n          </div>\n        </div>\n      </a>\n    "),
            t.parentNode && (t.parentNode.innerHTML = '<div class="card-container bangumi-card '.concat(p ? "auto-card" : "", '">').concat(i, "</div>"),
            t.remove())
        }
    }
      , D = function(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
          , n = arguments.length > 2 ? arguments[2] : void 0;
        if (t) {
            var i = e.uid
              , a = e.room_id
              , r = e.area_v2_name
              , o = e.cover
              , c = e.face
              , s = e.online
              , l = e.live_status
              , u = e.pendent_ru
              , f = e.pendent_ru_pic
              , p = e.role
              , v = e.uname
              , m = e.title
              , h = ""
              , b = !i;
            if (b)
                h = '<div class="video-error-card">\n        <div class="video-cover">\n          <p class="error-hint">\n            <span>直播加载失败</span>\n          </p>\n        </div>\n        <div class="video-info-container">\n          <p class="title"></p>\n          <p class="card-status"></p>\n          <p class="partition"></p>\n        </div>\n    </div>\n  ';
            else {
                var g = f ? '\n      <div class="living-recommend" style="background-image: url('.concat(Object(d.g)(Object(d.t)(f), 150 * w), ')">\n        ').concat(u ? Object(d.e)(u) : "", "\n      </div>") : ""
                  , y = {
                    1: "p",
                    2: "p",
                    7: "p",
                    3: "c",
                    4: "c",
                    5: "c",
                    6: "c"
                }
                  , C = 0 !== p ? '\n      <svg class="symbol-icon up-role-icon">\n        <use xlink:href="#read-sym-auth-'.concat(y[p], '"/>\n      </svg>\n    ') : "";
                h = '\n      <a class="live-card-holder normal-card" data-card-type="live" data-card-id="'.concat(a, '" href="//live.bilibili.com/').concat(a, '?jumpfrom=27012" target="_blank">\n        <div class="dis-evt d-f live-card-ctnr">\n          <div class="cover-box">\n            <i class="iconfont icon--default-cover default-cover"></i>\n            <div class="cover-img" style="background-image: url(').concat(Object(d.g)(Object(d.t)(o), 150 * w), ');"></div>\n            <div class="d-f cover-info">\n            ').concat(s > 0 && 1 === l ? '<div class="d-f ali-c live-person-info">\n                <i class="iconfont icon--popularity popularity-icon"></i>\n                <span>'.concat(Object(d.h)(s), "</span>\n              </div>") : "", '\n              <span class="v-f single-ellipsis">').concat(Object(d.e)(r), "</span>\n            </div>\n            ").concat(g, '\n          </div>\n          <div class="v-f d-f fd-col jus-s-b live-cnt-ctnr">\n            <p class="live-title double-ellipsis" style="-webkit-box-orient: vertical;">').concat(Object(d.e)(m), '</p>\n            <div class="d-f ali-c live-room-info">\n              <span class="up-avatar" style="').concat(c ? "background-image: url(".concat(Object(d.g)(Object(d.t)(c), 30 * d.d), ")") : "", '">\n                ').concat(C, '\n              </span>\n              <div class="v-f up-info">\n                <p class="single-ellipsis up-name">').concat(Object(d.e)(v), '</p>\n                <div class="d-f ali-b live-status ').concat(1 === l ? "online" : "offline", '">\n                  <span class="bg-icon icon-live live-status-icon"></span>\n                  <span class="live-status-text">').concat(1 === l ? null == n ? void 0 : n.$t("cards.living") : null == n ? void 0 : n.$t("tool.notPlay"), "</span>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </a>\n    ")
            }
            t.parentNode && (t.parentNode.innerHTML = '<div class="card-container live-card '.concat(b ? "auto-card" : "", '">').concat(h, "</div>"),
            t.remove())
        }
    }
      , N = function(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
          , n = arguments.length > 2 ? arguments[2] : void 0;
        if (t) {
            var i = ""
              , a = e.id
              , r = e.title
              , o = e.vertical_cover
              , c = e.evaluate
              , s = e.author
              , l = !a;
            i = l ? '<div class="error-card-pb comic-card-error-single">\n    <div class="cover-img">\n      漫画加载失败\n    </div>\n    <div class="comic-info">\n      <p class="error-block error-block-1"></p>\n      <p class="error-block error-block-2"></p>\n      <p class="error-block error-block-3"></p>\n    </div>\n  </div>' : '\n      <a class="comic-card-holder normal-card" data-card-type="manga" data-card-id="'.concat(a, '" href="//manga.bilibili.com/m/detail/mc').concat(a, '?from=article_card" target="_blank">\n        <div class="d-f dis-evt comic-card-ctnr">\n          <div class="cover-box">\n            <i class="iconfont icon--default-cover default-cover"></i>\n            <div class="cover-img" style="background-image:url(').concat(Object(d.g)(Object(d.t)(o), 78 * d.d, 104 * d.d), ')"></div>\n          </div>\n          <div class="v-f d-f fd-col jus-s-b comic-cnt-box">\n            <div class="comic-info">\n              <p class="single-ellipsis comic-title">').concat(Object(d.e)(r), '</p>\n              <div class="double-ellipsis comic-desc" style="-webkit-box-orient: vertical;">').concat(Object(d.e)(c), '</div>\n            </div>\n            <div class="d-f ali-c comic-author-box">\n              <label class="card-text-label">').concat(null == n ? void 0 : n.$t("cards.comic"), '</label>\n              <div class="v-f txt-l single-ellipsis author-name">').concat(Object(d.e)(s.join(" ")), "</div>\n            </div>\n          </div>\n        </div>\n      </a>\n    "),
            t.parentNode && (t.parentNode.innerHTML = '<div class="card-container comic-card '.concat(l ? "auto-card" : "", '">').concat(i, "</div>"),
            t.remove())
        }
    }
      , A = function(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []
          , n = arguments.length > 2 ? arguments[2] : void 0
          , i = arguments.length > 3 ? arguments[3] : void 0;
        if (t) {
            if (e.length <= 1)
                return N(t, e[0], i);
            var a = function(t, e) {
                var n = t || {}
                  , a = n.id
                  , r = n.title
                  , o = n.vertical_cover
                  , c = n.evaluate
                  , s = n.author;
                return a ? '\n      <div class="v-f comic-card-holder column-comic-card-holder">\n        <a class="normal-card" data-card-type="manga-slim" data-card-id="'.concat(a, '" href="//manga.bilibili.com/m/detail/mc').concat(a, '?from=article_card" target="_blank">\n          <div class="d-f dis-evt comic-card-ctnr">\n            <div class="cover-box">\n              <i class="iconfont icon--default-cover default-cover"></i>\n              <div class="cover-img" style="background-image:url(').concat(Object(d.g)(Object(d.t)(o), 78 * w, 114 * w), ')"></div>\n            </div>\n            <div class="v-f d-f fd-col jus-s-b comic-cnt-box">\n              <div class="comic-info">\n                <p class="single-ellipsis comic-title">').concat(Object(d.e)(r), '</p>\n                <div class="double-ellipsis comic-desc" style="-webkit-box-orient: vertical;">').concat(Object(d.e)(c), '</div>\n              </div>\n              <div class="d-f ali-c comic-author-box">\n                <label class="card-text-label">').concat(null == i ? void 0 : i.$t("cards.comic"), '</label>\n                <div class="v-f txt-l single-ellipsis author-name">').concat(Object(d.e)(s.join(" ")), "</div>\n              </div>\n            </div>\n          </div>\n        </a>\n      </div>\n    ") : '<div class="v-f error-card-pb slim-video-card-error column">\n      <div class="error-cover">\n        漫画加载失败\n      </div>\n      <div class="error-info">\n        <p class="info-block info-block-1"></p>\n        <p class="info-block info-block-2"></p>\n        <p class="info-block info-block-3"></p>\n      </div>\n    </div>'
            }
              , r = e.reduce((function(t, e) {
                return t + a(e, n)
            }
            ), "");
            t.parentNode && (t.parentNode.innerHTML = '<div class="d-f fd-row card-container column-card column-comic-card">'.concat(r, "</div>"),
            t.remove())
        }
    }
      , J = function(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
          , n = arguments.length > 2 ? arguments[2] : void 0;
        if (t) {
            var i = ""
              , a = e.id
              , r = e.url
              , o = e.performance_image
              , c = e.name
              , s = e.start_time
              , l = e.end_time
              , u = e.city_name
              , f = e.district_name
              , p = e.venue_name
              , v = e.price_low
              , m = !a;
            i = m ? '<div class="error-card-pb comic-card-error-single">\n      <div class="cover-img">\n      票务加载失败\n      </div>\n      <div class="comic-info">\n        <p class="error-block error-block-1"></p>\n        <p class="error-block error-block-2"></p>\n        <p class="error-block error-block-3"></p>\n      </div>\n    </div>' : '\n      <a class="ticket-card-holder normal-card" data-card-type="ticket" data-card-id="'.concat(a, '" href="').concat(Object(d.t)(r), '" target="_blank">\n        <div class="d-f dis-evt ticket-card-ctnr">\n          <div class="cover-box">\n            <i class="iconfont icon--default-cover default-cover"></i>\n            <div class="cover-img" style="background-image:url(').concat(Object(d.g)(Object(d.t)(o), 78 * d.d, 104 * d.d), ')"></div>\n          </div>\n          <div class="ticket-cnt-box">\n            <div class="ticket-info-box">\n              <p class="single-ellipsis ticket-name">').concat(Object(d.e)(c), '</p>\n              <div class="ticket-info">\n                <i class="iconfont icon--time ticket-icon"></i>\n                <span>').concat(I(s), " - ").concat(I(l), '</span>\n              </div>\n              <div class="ticket-info">\n                <i class="iconfont icon--location"></i>\n                <span>').concat(Object(d.e)("".concat(u, " ").concat(f).concat(p)), '</span>\n              </div>\n            </div>\n            <div class="ticket-bottom-box">\n              <label class="card-text-label">').concat(null == n ? void 0 : n.$t("cards.shop"), '</label>\n              <div class="ticket-price-box">\n                <span>¥</span>\n                <span class="price">').concat(v, "</span>\n              </div>\n            </div>\n          </div>\n        </div>\n      </a>\n    "),
            t.parentNode && (t.parentNode.innerHTML = '<div class="card-container ticket-card '.concat(m ? "auto-card" : "", '">').concat(i, "</div>"),
            t.remove())
        }
    }
      , E = function(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
          , n = arguments.length > 2 ? arguments[2] : void 0
          , i = arguments.length > 3 ? arguments[3] : void 0
          , a = arguments.length > 4 ? arguments[4] : void 0;
        if (t) {
            var r = ""
              , o = e.itemsId
              , c = e.brief
              , s = e.img
              , l = void 0 === s ? [] : s
              , u = e.name
              , f = e.price
              , p = e.type
              , v = e.jumpLinkType
              , m = "//mall.bilibili.com/detail.html?loadingShow=1".concat(n ? "&shopId=".concat(n) : "", "&noTitleBar=1&from=articleDetail&cvid=").concat(i || 0, "&jumpLinkType=").concat(v, "#itemsId=").concat(o, '"')
              , h = 0 === p ? f / 100 : f / 100 || (null == a ? void 0 : a.$t("cards.holdPrice"))
              , b = !o;
            r = b ? '<div class="error-card-pb comic-card-error-single">\n      <div class="cover-img">\n        商品加载失败\n      </div>\n      <div class="comic-info">\n        <p class="error-block error-block-1"></p>\n        <p class="error-block error-block-2"></p>\n        <p class="error-block error-block-3"></p>\n      </div>\n    </div>' : '\n      <a class="shop-card-holder normal-card" data-card-type="shop" data-card-id="'.concat(o, '" href="').concat(Object(d.t)(m), '" target="_blank">\n        <div class="d-f dis-evt shop-card-ctnr">\n          <div class="cover-box ').concat(l.length ? "show-img" : "", '">\n            <i class="iconfont icon--default-cover default-cover"></i>\n            <div class="cover-img" style="').concat(l.length ? "background-image:url(".concat(Object(d.g)(Object(d.t)(l[0]), 78 * d.d, 104 * d.d), ")") : "", '"></div>\n          </div>\n          <div class="v-f d-f fd-col jus-s-b shop-cnt-box">\n            <div class="shop-info-box">\n              <p class="single-ellipsis shop-name">').concat(Object(d.e)(u), '</p>\n              <p class="double-ellipsis shop-desc" style="-webkit-box-orient: vertical;">').concat(Object(d.e)(c), '</p>\n            </div>\n            <div class="d-f ali-c shop-bottom-box">\n              <label class="card-text-label">').concat(null == a ? void 0 : a.$t("cards.shop"), '</label>\n              <div class="v-f d-f ali-b shop-price-box">\n                <span>¥</span>\n                <span class="price">').concat(Object(d.e)(h), "</span>\n              </div>\n            </div>\n          </div>\n        </div>\n      </a>\n    "),
            t.parentNode && (t.parentNode.innerHTML = '<div class="card-container shop-card '.concat(b ? "auto-card" : "", '">').concat(r, "</div>"),
            t.remove())
        }
    }
      , P = function() {
        var t = a()(s.a.mark((function t(e, n, i, a) {
            var r, o;
            return s.a.wrap((function(t) {
                for (; ; )
                    switch (t.prev = t.next) {
                    case 0:
                        if (e) {
                            t.next = 2;
                            break
                        }
                        return t.abrupt("return");
                    case 2:
                        if (!(r = e.getAttribute("data-vote-id"))) {
                            t.next = 10;
                            break
                        }
                        return t.next = 6,
                        Object(u.k)(e.getAttribute("data-vote-id"));
                    case 6:
                        0 === (o = t.sent).code && o.data ? S(e, o.data, r, n, i, a) : S(e, {}, null, null, null, a),
                        t.next = 11;
                        break;
                    case 10:
                        S(e, {}, null, null, null, a);
                    case 11:
                    case "end":
                        return t.stop()
                    }
            }
            ), t)
        }
        )));
        return function(e, n, i, a) {
            return t.apply(this, arguments)
        }
    }()
      , S = function(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
          , n = arguments.length > 3 ? arguments[3] : void 0
          , i = arguments.length > 5 ? arguments[5] : void 0;
        if (t) {
            f.c.get("DedeUserID");
            var a = ""
              , r = e.info
              , o = void 0 === r ? {} : r
              , c = o.vote_id
              , s = (o.uid,
            o.title)
              , l = o.cnt
              , u = (o.options,
            o.endtime)
              , p = (o.type,
            o.choice_cnt,
            o.status,
            Object(d.o)(u))
              , v = !c;
            a = v ? '<div class="error-card-pb vote-card-error"></div>' : '\n      <div class="vote-card vote-card-holder normal-card" data-card-type="vote" data-card-id="'.concat(c, '">\n        <div class="d-f vote-head">\n          <div class="vote-icon-box"><div class="vote-icon"></div></div>\n          <div class="v-f d-f fd-col jus-s-b head-left">\n            <h3>').concat(Object(d.e)(s), "</h3>\n            <p>").concat(Object(d.h)(l)).concat(null == i ? void 0 : i.$t("cards.joinedByPeople"), " ").concat(p, '</p>\n          </div>\n          <div class="vote-btn-box"><div id="open-vote" class="vote-btn vote-btn-').concat(c, '">投票</div></div>\n        </div>\n\n      </div>\n    '),
            t.parentNode && (t.parentNode.innerHTML = '<div id="vote-'.concat(c, '" class="card-container vote-card ').concat(v ? "auto-card" : "", '" data-vote-id="').concat(c, '">').concat(a, "</div>"),
            t.remove()),
            document.querySelector(".vote-btn-".concat(c)).addEventListener("click", (function(t) {
                V("投票", "//t.bilibili.com/vote/h5/index/#/result?vote_id=".concat(c, "&isWeb=1&from=article&rid=").concat(n, "&type=64"))
            }
            ))
        }
    }
      , V = function(t, e) {
        var n = '<div class="vote-backdrop"><div class="extension-wrapper"><div class="title-box">\n      <div class="title-text">'.concat(t, '</div>\n        <div id="vote-close-button" class="vote-close-button">\n          <i class="iconfont icon--close"></i>\n        </div>\n        </div>\n        <iframe src="').concat(e, '" frameborder="0">\n      </iframe></div>\n      </div>')
          , i = document.createElement("div");
        i.setAttribute("id", "vote-backdrop-container"),
        i.innerHTML = n,
        document.body.appendChild(i),
        document.getElementById("vote-close-button").addEventListener("click", (function() {
            document.body.removeChild(document.getElementById("vote-backdrop-container"))
        }
        ))
    }
      , L = function(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        if (t) {
            var n = "";
            e.length || (n = '<div class="error-card-pb goods-card-error"></div>');
            var i, a = g(e);
            try {
                for (a.s(); !(i = a.n()).done; ) {
                    var r = i.value
                      , o = r.itemIdStr
                      , c = r.img
                      , s = r.schemaUrl
                      , l = r.jumpLink
                      , u = r.shopGoodType
                      , f = r.name
                      , p = r.brief
                      , v = r.iconUrl
                      , m = r.price
                      , h = r.adMark
                      , b = void 0 === h ? "" : h;
                    o ? n += '\n        <div class="goods-card-holder normal-card"\n          data-card-type="tao"\n          data-card-id="'.concat(o, '"\n          data-scheme="').concat(s, '"\n          data-platform="').concat(u, '"\n          data-url="').concat(l, '">\n          <div class="d-f dis-evt goods-card-ctnr">\n            <div class="cover-box ').concat(c ? "show-img" : "", '">\n              <i class="iconfont icon--default-cover default-cover"></i>\n              <div class="cover-img" style="').concat(c ? "background-image:url(".concat(Object(d.g)(Object(d.t)(c), 76 * d.d, 76 * d.d), ")") : "", '"></div>\n            </div>\n            <div class="v-f d-f fd-col jus-s-b goods-cnt-box">\n              <div class="goods-info-box">\n                <p class="single-ellipsis goods-name">').concat(Object(d.e)(f), '</p>\n                <p class="single-ellipsis goods-desc">').concat(Object(d.e)(p), '</p>\n              </div>\n              <div class="d-f ali-c goods-bottom-box">\n                <img class="icon-img" alt="goods_icon" src="').concat(Object(d.t)(v), '">\n                <div class="v-f d-f ali-b goods-price-box">\n                  <span>¥</span>\n                  <span class="price">').concat(m, '</span>\n                </div>\n                <div class="d-f ali-c goods-ad-box ').concat(b ? "" : "is-none", '">\n                  <i class="iconfont icon--up-ad"></i>\n                  <span class="goods-ad-text">').concat(b.substring(0, 8), "</span>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      ") : n = '<div class="error-card-pb goods-card-error"></div>'
                }
            } catch (t) {
                a.e(t)
            } finally {
                a.f()
            }
            t.parentNode && (t.parentNode.innerHTML = '<div class="card-container goods-card">'.concat(n, "</div>"),
            t.remove())
        }
    }
      , R = n(8)
      , H = n.n(R)
      , q = n(147)
      , G = n.n(q)
      , z = n(148)
      , Q = n.n(z)
      , F = n(37)
      , W = {
        renderCardSwitch: !1
    }
      , Y = function(t) {
        return W[t]
    };
    !function() {
        if ("object" === ("undefined" == typeof window ? "undefined" : H()(window)))
            if ("IntersectionObserver"in window && "IntersectionObserverEntry"in window && "intersectionRatio"in window.IntersectionObserverEntry.prototype)
                "isIntersecting"in window.IntersectionObserverEntry.prototype || Object.defineProperty(window.IntersectionObserverEntry.prototype, "isIntersecting", {
                    get: function() {
                        return this.intersectionRatio > 0
                    }
                });
            else {
                var t = function(t) {
                    for (var e = window.document, n = a(e); n; )
                        n = a(e = n.ownerDocument);
                    return e
                }()
                  , e = []
                  , n = null
                  , i = null;
                o.prototype.THROTTLE_TIMEOUT = 100,
                o.prototype.POLL_INTERVAL = null,
                o.prototype.USE_MUTATION_OBSERVER = !0,
                o._setupCrossOriginUpdater = function() {
                    return n || (n = function(t, n) {
                        i = t && n ? u(t, n) : {
                            top: 0,
                            bottom: 0,
                            left: 0,
                            right: 0,
                            width: 0,
                            height: 0
                        },
                        e.forEach((function(t) {
                            t._checkForIntersections()
                        }
                        ))
                    }
                    ),
                    n
                }
                ,
                o._resetCrossOriginUpdater = function() {
                    n = null,
                    i = null
                }
                ,
                o.prototype.observe = function(t) {
                    if (!this._observationTargets.some((function(e) {
                        return e.element == t
                    }
                    ))) {
                        if (!t || 1 != t.nodeType)
                            throw new Error("target must be an Element");
                        this._registerInstance(),
                        this._observationTargets.push({
                            element: t,
                            entry: null
                        }),
                        this._monitorIntersections(t.ownerDocument),
                        this._checkForIntersections()
                    }
                }
                ,
                o.prototype.unobserve = function(t) {
                    this._observationTargets = this._observationTargets.filter((function(e) {
                        return e.element != t
                    }
                    )),
                    this._unmonitorIntersections(t.ownerDocument),
                    0 == this._observationTargets.length && this._unregisterInstance()
                }
                ,
                o.prototype.disconnect = function() {
                    this._observationTargets = [],
                    this._unmonitorAllIntersections(),
                    this._unregisterInstance()
                }
                ,
                o.prototype.takeRecords = function() {
                    var t = this._queuedEntries.slice();
                    return this._queuedEntries = [],
                    t
                }
                ,
                o.prototype._initThresholds = function(t) {
                    var e = t || [0];
                    return Array.isArray(e) || (e = [e]),
                    e.sort().filter((function(t, e, n) {
                        if ("number" != typeof t || isNaN(t) || t < 0 || t > 1)
                            throw new Error("threshold must be a number between 0 and 1 inclusively");
                        return t !== n[e - 1]
                    }
                    ))
                }
                ,
                o.prototype._parseRootMargin = function(t) {
                    var e = (t || "0px").split(/\s+/).map((function(t) {
                        var e = /^(-?\d*\.?\d+)(px|%)$/.exec(t);
                        if (!e)
                            throw new Error("rootMargin must be specified in pixels or percent");
                        return {
                            value: parseFloat(e[1]),
                            unit: e[2]
                        }
                    }
                    ));
                    return e[1] = e[1] || e[0],
                    e[2] = e[2] || e[0],
                    e[3] = e[3] || e[1],
                    e
                }
                ,
                o.prototype._monitorIntersections = function(e) {
                    var n = e.defaultView;
                    if (n && -1 == this._monitoringDocuments.indexOf(e)) {
                        var i = this._checkForIntersections
                          , r = null
                          , o = null;
                        if (this.POLL_INTERVAL ? r = n.setInterval(i, this.POLL_INTERVAL) : (c(n, "resize", i, !0),
                        c(e, "scroll", i, !0),
                        this.USE_MUTATION_OBSERVER && "MutationObserver"in n && (o = new n.MutationObserver(i)).observe(e, {
                            attributes: !0,
                            childList: !0,
                            characterData: !0,
                            subtree: !0
                        })),
                        this._monitoringDocuments.push(e),
                        this._monitoringUnsubscribes.push((function() {
                            var t = e.defaultView;
                            t && (r && t.clearInterval(r),
                            s(t, "resize", i, !0)),
                            s(e, "scroll", i, !0),
                            o && o.disconnect()
                        }
                        )),
                        e != (this.root && this.root.ownerDocument || t)) {
                            var l = a(e);
                            l && this._monitorIntersections(l.ownerDocument)
                        }
                    }
                }
                ,
                o.prototype._unmonitorIntersections = function(e) {
                    var n = this._monitoringDocuments.indexOf(e);
                    if (-1 != n) {
                        var i = this.root && this.root.ownerDocument || t;
                        if (!this._observationTargets.some((function(t) {
                            var n = t.element.ownerDocument;
                            if (n == e)
                                return !0;
                            for (; n && n != i; ) {
                                var r = a(n);
                                if ((n = r && r.ownerDocument) == e)
                                    return !0
                            }
                            return !1
                        }
                        ))) {
                            var r = this._monitoringUnsubscribes[n];
                            if (this._monitoringDocuments.splice(n, 1),
                            this._monitoringUnsubscribes.splice(n, 1),
                            r(),
                            e != i) {
                                var o = a(e);
                                o && this._unmonitorIntersections(o.ownerDocument)
                            }
                        }
                    }
                }
                ,
                o.prototype._unmonitorAllIntersections = function() {
                    var t = this._monitoringUnsubscribes.slice(0);
                    this._monitoringDocuments.length = 0,
                    this._monitoringUnsubscribes.length = 0;
                    for (var e = 0; e < t.length; e++)
                        t[e]()
                }
                ,
                o.prototype._checkForIntersections = function() {
                    if (this.root || !n || i) {
                        var t = this._rootIsInDom()
                          , e = t ? this._getRootRect() : {
                            top: 0,
                            bottom: 0,
                            left: 0,
                            right: 0,
                            width: 0,
                            height: 0
                        };
                        this._observationTargets.forEach((function(i) {
                            var a = i.element
                              , o = l(a)
                              , c = this._rootContainsTarget(a)
                              , s = i.entry
                              , d = t && c && this._computeTargetAndRootIntersection(a, o, e)
                              , u = i.entry = new r({
                                time: window.performance && performance.now && performance.now(),
                                target: a,
                                boundingClientRect: o,
                                rootBounds: n && !this.root ? null : e,
                                intersectionRect: d
                            });
                            s ? t && c ? this._hasCrossedThreshold(s, u) && this._queuedEntries.push(u) : s && s.isIntersecting && this._queuedEntries.push(u) : this._queuedEntries.push(u)
                        }
                        ), this),
                        this._queuedEntries.length && this._callback(this.takeRecords(), this)
                    }
                }
                ,
                o.prototype._computeTargetAndRootIntersection = function(e, a, r) {
                    if ("none" != window.getComputedStyle(e).display) {
                        for (var o, c, s, d, f, v, m, h, b = a, g = p(e), y = !1; !y && g; ) {
                            var w = null
                              , C = 1 == g.nodeType ? window.getComputedStyle(g) : {};
                            if ("none" == C.display)
                                return null;
                            if (g == this.root || 9 == g.nodeType)
                                if (y = !0,
                                g == this.root || g == t)
                                    n && !this.root ? !i || 0 == i.width && 0 == i.height ? (g = null,
                                    w = null,
                                    b = null) : w = i : w = r;
                                else {
                                    var I = p(g)
                                      , j = I && l(I)
                                      , M = I && this._computeTargetAndRootIntersection(I, j, r);
                                    j && M ? (g = I,
                                    w = u(j, M)) : (g = null,
                                    b = null)
                                }
                            else {
                                var O = g.ownerDocument;
                                g != O.body && g != O.documentElement && "visible" != C.overflow && (w = l(g))
                            }
                            if (w && (o = w,
                            c = b,
                            s = void 0,
                            d = void 0,
                            f = void 0,
                            v = void 0,
                            m = void 0,
                            h = void 0,
                            s = Math.max(o.top, c.top),
                            d = Math.min(o.bottom, c.bottom),
                            f = Math.max(o.left, c.left),
                            v = Math.min(o.right, c.right),
                            h = d - s,
                            b = (m = v - f) >= 0 && h >= 0 && {
                                top: s,
                                bottom: d,
                                left: f,
                                right: v,
                                width: m,
                                height: h
                            } || null),
                            !b)
                                break;
                            g = g && p(g)
                        }
                        return b
                    }
                }
                ,
                o.prototype._getRootRect = function() {
                    var e;
                    if (this.root)
                        e = l(this.root);
                    else {
                        var n = t.documentElement
                          , i = t.body;
                        e = {
                            top: 0,
                            left: 0,
                            right: n.clientWidth || i.clientWidth,
                            width: n.clientWidth || i.clientWidth,
                            bottom: n.clientHeight || i.clientHeight,
                            height: n.clientHeight || i.clientHeight
                        }
                    }
                    return this._expandRectByRootMargin(e)
                }
                ,
                o.prototype._expandRectByRootMargin = function(t) {
                    var e = this._rootMarginValues.map((function(e, n) {
                        return "px" == e.unit ? e.value : e.value * (n % 2 ? t.width : t.height) / 100
                    }
                    ))
                      , n = {
                        top: t.top - e[0],
                        right: t.right + e[1],
                        bottom: t.bottom + e[2],
                        left: t.left - e[3]
                    };
                    return n.width = n.right - n.left,
                    n.height = n.bottom - n.top,
                    n
                }
                ,
                o.prototype._hasCrossedThreshold = function(t, e) {
                    var n = t && t.isIntersecting ? t.intersectionRatio || 0 : -1
                      , i = e.isIntersecting ? e.intersectionRatio || 0 : -1;
                    if (n !== i)
                        for (var a = 0; a < this.thresholds.length; a++) {
                            var r = this.thresholds[a];
                            if (r == n || r == i || r < n != r < i)
                                return !0
                        }
                }
                ,
                o.prototype._rootIsInDom = function() {
                    return !this.root || f(t, this.root)
                }
                ,
                o.prototype._rootContainsTarget = function(e) {
                    return f(this.root || t, e) && (!this.root || this.root.ownerDocument == e.ownerDocument)
                }
                ,
                o.prototype._registerInstance = function() {
                    e.indexOf(this) < 0 && e.push(this)
                }
                ,
                o.prototype._unregisterInstance = function() {
                    var t = e.indexOf(this);
                    -1 != t && e.splice(t, 1)
                }
                ,
                window.IntersectionObserver = o,
                window.IntersectionObserverEntry = r
            }
        function a(t) {
            try {
                return t.defaultView && t.defaultView.frameElement || null
            } catch (t) {
                return null
            }
        }
        function r(t) {
            this.time = t.time,
            this.target = t.target,
            this.rootBounds = d(t.rootBounds),
            this.boundingClientRect = d(t.boundingClientRect),
            this.intersectionRect = d(t.intersectionRect || {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                width: 0,
                height: 0
            }),
            this.isIntersecting = !!t.intersectionRect;
            var e = this.boundingClientRect
              , n = e.width * e.height
              , i = this.intersectionRect
              , a = i.width * i.height;
            this.intersectionRatio = n ? Number((a / n).toFixed(4)) : this.isIntersecting ? 1 : 0
        }
        function o(t, e) {
            var n, i, a, r = e || {};
            if ("function" != typeof t)
                throw new Error("callback must be a function");
            if (r.root && 1 != r.root.nodeType)
                throw new Error("root must be an Element");
            this._checkForIntersections = (n = this._checkForIntersections.bind(this),
            i = this.THROTTLE_TIMEOUT,
            a = null,
            function() {
                a || (a = setTimeout((function() {
                    n(),
                    a = null
                }
                ), i))
            }
            ),
            this._callback = t,
            this._observationTargets = [],
            this._queuedEntries = [],
            this._rootMarginValues = this._parseRootMargin(r.rootMargin),
            this.thresholds = this._initThresholds(r.threshold),
            this.root = r.root || null,
            this.rootMargin = this._rootMarginValues.map((function(t) {
                return t.value + t.unit
            }
            )).join(" "),
            this._monitoringDocuments = [],
            this._monitoringUnsubscribes = []
        }
        function c(t, e, n, i) {
            "function" == typeof t.addEventListener ? t.addEventListener(e, n, i || !1) : "function" == typeof t.attachEvent && t.attachEvent("on" + e, n)
        }
        function s(t, e, n, i) {
            "function" == typeof t.removeEventListener ? t.removeEventListener(e, n, i || !1) : "function" == typeof t.detatchEvent && t.detatchEvent("on" + e, n)
        }
        function l(t) {
            var e;
            try {
                e = t.getBoundingClientRect()
            } catch (t) {}
            return e ? (e.width && e.height || (e = {
                top: e.top,
                right: e.right,
                bottom: e.bottom,
                left: e.left,
                width: e.right - e.left,
                height: e.bottom - e.top
            }),
            e) : {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                width: 0,
                height: 0
            }
        }
        function d(t) {
            return !t || "x"in t ? t : {
                top: t.top,
                y: t.top,
                bottom: t.bottom,
                left: t.left,
                x: t.left,
                right: t.right,
                width: t.width,
                height: t.height
            }
        }
        function u(t, e) {
            var n = e.top - t.top
              , i = e.left - t.left;
            return {
                top: n,
                left: i,
                height: e.height,
                width: e.width,
                bottom: n + e.height,
                right: i + e.width
            }
        }
        function f(t, e) {
            for (var n = e; n; ) {
                if (n == t)
                    return !0;
                n = p(n)
            }
            return !1
        }
        function p(e) {
            var n = e.parentNode;
            return 9 == e.nodeType && e != t ? a(e) : n && 11 == n.nodeType && n.host ? n.host : n && n.assignedSlot ? n.assignedSlot.parentNode : n
        }
    }();
    var B = function() {
        function t(e, n) {
            var i = n.always
              , a = void 0 !== i && i
              , r = n.reverse
              , o = void 0 !== r && r
              , c = n.openSwitch
              , s = void 0 !== c && c
              , l = n.rootOptions
              , d = void 0 === l ? {
                root: F.a.scrollWrap,
                rootMargin: "0px 40px 0px 0px",
                threshold: .5
            } : l
              , u = n.callback;
            G()(this, t);
            var f = {
                root: "body" === F.a.wrapType ? null : F.a.scrollWrap,
                rootMargin: "0px 40px 0px 0px",
                threshold: 0
            };
            this.rootOptions = Object.assign({}, f, d),
            this.always = a,
            this.reverse = o,
            this.switch = s,
            this.originDoms = [].concat(e),
            this.callback = u,
            this.intersection = null
        }
        return Q()(t, [{
            key: "init",
            value: function() {
                var t = this;
                "object" === ("undefined" == typeof window ? "undefined" : H()(window)) && (this.intersection = new IntersectionObserver((function(e) {
                    t.switch && Y("renderCardSwitch") || e.forEach((function(e) {
                        (t.reverse || e.isIntersecting) && ("function" == typeof t.callback && t.callback(e),
                        t.always || t.intersection && t.intersection.unobserve(e.target))
                    }
                    ))
                }
                ),this.rootOptions),
                this.originDoms.forEach((function(e) {
                    return t.intersection.observe(e)
                }
                )))
            }
        }, {
            key: "add",
            value: function(t) {
                t && "object" === H()(t) && (this.originDoms.push(t),
                this.intersection && this.intersection.observe(t))
            }
        }, {
            key: "destroy",
            value: function() {
                var t = this;
                "object" === ("undefined" == typeof window ? "undefined" : H()(window)) && this.originDoms && this.originDoms.length && this.intersection && (this.originDoms.forEach((function(e) {
                    return t.intersection.unobserve(e)
                }
                )),
                this.originDoms = [])
            }
        }, {
            key: "checkIsIntersection",
            value: function() {
                return "IntersectionObserver"in window && "IntersectionObserverEntry"in window && "intersectionRatio"in window.IntersectionObserverEntry.prototype
            }
        }, {
            key: "getEmptyRect",
            value: function() {
                return {
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    width: 0,
                    height: 0
                }
            }
        }]),
        t
    }()
      , Z = function(t) {
        var e = t.querySelectorAll("figure pre")
          , n = !1;
        if (e.length > 0) {
            if (e.forEach((function(t) {
                var e = t.getAttribute("codecontent") || "";
                e ? (t.querySelector("code").innerHTML = e,
                t.removeAttribute("codecontent")) : n = !0
            }
            )),
            n)
                return;
            Object(d.m)("//s1.hdslb.com/bfs/static/article-text/static/ueditor/plugins/prism/prism.js")
        }
    };
    function X(t, e) {
        var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
        if (!n) {
            if (Array.isArray(t) || (n = function(t, e) {
                if (!t)
                    return;
                if ("string" == typeof t)
                    return K(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                "Object" === n && t.constructor && (n = t.constructor.name);
                if ("Map" === n || "Set" === n)
                    return Array.from(t);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                    return K(t, e)
            }(t)) || e && t && "number" == typeof t.length) {
                n && (t = n);
                var i = 0
                  , a = function() {};
                return {
                    s: a,
                    n: function() {
                        return i >= t.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: t[i++]
                        }
                    },
                    e: function(t) {
                        throw t
                    },
                    f: a
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var r, o = !0, c = !1;
        return {
            s: function() {
                n = n.call(t)
            },
            n: function() {
                var t = n.next();
                return o = t.done,
                t
            },
            e: function(t) {
                c = !0,
                r = t
            },
            f: function() {
                try {
                    o || null == n.return || n.return()
                } finally {
                    if (c)
                        throw r
                }
            }
        }
    }
    function K(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, i = new Array(e); n < e; n++)
            i[n] = t[n];
        return i
    }
    function $(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(t);
            e && (i = i.filter((function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }
            ))),
            n.push.apply(n, i)
        }
        return n
    }
    function tt(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? $(Object(n), !0).forEach((function(e) {
                o()(t, e, n[e])
            }
            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : $(Object(n)).forEach((function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }
            ))
        }
        return t
    }
    var et = []
      , nt = []
      , it = []
      , at = {
        name: "ArticleContent",
        components: {},
        computed: tt(tt({}, Object(l.d)(["readInfo", "readViewInfo"])), {}, {
            isNoteArticle: function() {
                return 2 === this.readInfo.type
            },
            isNewEditor: function() {
                return 3 === this.readInfo.type
            }
        }),
        data: function() {
            return {
                cvid: "",
                clientW: 660,
                videoInfo: null,
                isCardRendered: !1,
                previewImgs: [],
                cardsInfo: {},
                lazyIns: null,
                preGifIns: null,
                listenIns: null,
                showArr: [],
                isMounted: !1
            }
        },
        mounted: function() {
            var t = this;
            this.cvid = this.$route.params.cvid,
            this.isMounted = !0,
            window.__INITIAL_STATE__ ? document.addEventListener("DOMContentLoaded", (function() {
                t.initCards()
            }
            )) : this.initCards(),
            this.listenCardsShow(Array.from(document.querySelectorAll("a[data-card-type]")))
        },
        methods: {
            handleClickTimeTag: function(t) {
                t.index > 1 ? window.open("//www.bilibili.com/video/".concat(this.readInfo.top_video_info.bvid, "?p=").concat(t.index, "&t=").concat(t.seconds)) : window.open("//www.bilibili.com/video/".concat(this.readInfo.top_video_info.bvid, "?t=").concat(t.seconds))
            },
            noteToast: function(t) {
                this.$message.info(t)
            },
            onNoteInfoCb: function(t) {
                this.videoInfo = t.arc,
                this.$bus.$emit("note-init")
            },
            articleHandle: function(t) {
                switch (t.target.dataset.type) {
                case "reload":
                    var e = t.target.parentNode && t.target.parentNode.nextElementSibling;
                    this.loadImgHandle(e)
                }
                var n = t.target.dataset
                  , i = n.cardType
                  , a = n.cardId
                  , r = n.aid;
                if (i) {
                    switch (this.reportCardShow(i, "click", a),
                    i) {
                    case "vlater":
                        var o = this.clientW
                          , c = t.target.getBoundingClientRect()
                          , s = c.left
                          , l = c.right
                          , d = c.y
                          , u = "width: 200px; top: ".concat(Math.round(d) + 4, "px;")
                          , f = "middle";
                        s > o / 2 ? (u += "right: ".concat(Math.ceil(o - l) - 96, "px;"),
                        f = "right") : u += "left: ".concat(Math.ceil(s + (l - s) / 2 - 4), "px;"),
                        this.setVlater({
                            _style: u,
                            show: !0,
                            subPos: f,
                            vid: r
                        });
                        break;
                    default:
                        window.reportMsgObj.cardType_card_click = {
                            aid: a,
                            cvid: this.cvid
                        }
                    }
                    window.reportObserver && window.reportObserver.forceCommit()
                }
            },
            generateCardByImg: function(t) {
                var e = arguments
                  , n = this;
                return a()(s.a.mark((function i() {
                    var a, r, o, c, l, u, f, p, v, m, h;
                    return s.a.wrap((function(i) {
                        for (; ; )
                            switch (i.prev = i.next) {
                            case 0:
                                if (a = e.length > 1 && void 0 !== e[1] ? e[1] : {},
                                r = e.length > 2 ? e[2] : void 0,
                                t) {
                                    i.next = 4;
                                    break
                                }
                                return i.abrupt("return");
                            case 4:
                                o = n.clientW,
                                c = o - 32,
                                i.t0 = !0,
                                i.next = i.t0 === (!t.className || Object(d.j)(t, "normal-img")) ? 9 : i.t0 === Object(d.j)(t, "article-card") ? 11 : i.t0 === Object(d.j)(t, "video-card") ? 13 : i.t0 === Object(d.j)(t, "music-card") ? 15 : i.t0 === Object(d.j)(t, "game-card") ? 17 : i.t0 === Object(d.j)(t, "fanju-card") ? 19 : i.t0 === Object(d.j)(t, "live-card") ? 21 : i.t0 === Object(d.j)(t, "caricature-card") ? 23 : i.t0 === Object(d.j)(t, "shop-card") ? 25 : i.t0 === Object(d.j)(t, "vote-display") ? 27 : i.t0 === Object(d.j)(t, "goods-card") ? 29 : 32;
                                break;
                            case 9:
                                return n.loadImgHandle(t),
                                i.abrupt("break", 34);
                            case 11:
                                return M(t, a, r, c, n),
                                i.abrupt("break", 34);
                            case 13:
                                return Object(d.j)(t, "column") ? (l = t.getAttribute("aid") || "",
                                u = l.split(",").map((function(t) {
                                    return n.cardsInfo["av" + t]
                                }
                                )),
                                U(t, u, c, !0, n)) : O(t, a, !1, n),
                                i.abrupt("break", 34);
                            case 15:
                                return k(t, a, n),
                                i.abrupt("break", 34);
                            case 17:
                                return _(t, a, n.cvid),
                                i.abrupt("break", 34);
                            case 19:
                                return x(t, a, n),
                                i.abrupt("break", 34);
                            case 21:
                                return D(t, a, n),
                                i.abrupt("break", 34);
                            case 23:
                                return Object(d.j)(t, "column") ? (f = t.getAttribute("aid") || "",
                                p = f.split(",").map((function(t) {
                                    return n.cardsInfo["mc" + t]
                                }
                                )),
                                A(t, p, c, n)) : N(t, a, n),
                                i.abrupt("break", 34);
                            case 25:
                                return /pw/.test(r) ? J(t, a, n) : /sp/.test(r) ? (v = t.getAttribute("aid").split("shopId="),
                                E(t, a, v[1], n.cvid, n)) : E(t, {}, null, null, n),
                                i.abrupt("break", 34);
                            case 27:
                                try {
                                    P(t, n.cvid, c, n)
                                } catch (e) {
                                    t.setAttribute("src", t.getAttribute("data-src"))
                                }
                                return i.abrupt("break", 34);
                            case 29:
                                m = t.getAttribute("aid") || "";
                                try {
                                    h = a.filter((function(t) {
                                        return t.itemIdStr === m
                                    }
                                    )),
                                    L(t, h, n)
                                } catch (e) {
                                    t.setAttribute("src", t.getAttribute("data-src"))
                                }
                                return i.abrupt("break", 34);
                            case 32:
                                return n.loadImgHandle(t),
                                i.abrupt("break", 34);
                            case 34:
                            case "end":
                                return i.stop()
                            }
                    }
                    ), i)
                }
                )))()
            },
            initCards: function() {
                var t = this;
                return a()(s.a.mark((function e() {
                    var n, i, a, r, o, c, l, u, f, p, v, m, h, b, g, y, w, I, M, O, U, k, _, T, x, D, N, A, J, E, P, S, V;
                    return s.a.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (!d.l && window.document) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return");
                            case 2:
                                n = t.clientW,
                                i = n - 32,
                                a = document.querySelectorAll(".read-article-holder img[data-src]"),
                                t.isCardRendered = a.length,
                                r = !1,
                                o = [],
                                c = [],
                                l = 0;
                            case 10:
                                if (!(l < a.length)) {
                                    e.next = 42;
                                    break
                                }
                                u = a[l],
                                f = u.classList.value || u.className,
                                p = u.getAttribute("aid"),
                                e.t0 = !0,
                                e.next = e.t0 === f.includes("cut-off") ? 17 : e.t0 === f.includes("vote-display") ? 20 : e.t0 === f.includes("goods-card") ? 23 : e.t0 === (!p || !f) ? 27 : 34;
                                break;
                            case 17:
                                return u.setAttribute("src", Object(d.t)(Object(d.g)(u.getAttribute("data-src")))),
                                Object(d.a)(u.parentNode, "loaded"),
                                e.abrupt("break", 39);
                            case 20:
                                return t.generateCardByImg(u),
                                Object(d.a)(u.parentNode, "loaded"),
                                e.abrupt("break", 39);
                            case 23:
                                return v = "co".concat(t.cvid),
                                et.push(v),
                                c.push(u),
                                e.abrupt("break", 39);
                            case 27:
                                return m = j(u, i),
                                h = m.dom,
                                Object(d.j)(h, "normal-gif") ? nt.push(h) : it.push(h),
                                h.setAttribute("data-index", o.length),
                                h.setAttribute("data-type", "preview"),
                                b = h.getAttribute("data-src"),
                                Object(d.k)(b) && (g = h.getAttribute("width") || 0,
                                y = h.getAttribute("height") || 0,
                                w = h.getAttribute("originWidth") || g || 0,
                                I = h.getAttribute("originHeight") || y || 0,
                                M = h.getAttribute("data-size") || 0,
                                o.push({
                                    url: b,
                                    width: g,
                                    height: y,
                                    originWidth: w,
                                    originHeight: I,
                                    size: M
                                })),
                                e.abrupt("break", 39);
                            case 34:
                                if (r = r || f.includes("video-card") && !f.includes("column"),
                                O = C(f, p, t.cvid),
                                U = O.id,
                                k = O.ids) {
                                    _ = X(k);
                                    try {
                                        for (_.s(); !(T = _.n()).done; )
                                            x = T.value,
                                            et.push(x)
                                    } catch (t) {
                                        _.e(t)
                                    } finally {
                                        _.f()
                                    }
                                } else
                                    et.push(U);
                                return c.push(u),
                                e.abrupt("break", 39);
                            case 39:
                                l++,
                                e.next = 10;
                                break;
                            case 42:
                                return e.next = 44,
                                t.getCardsInfo();
                            case 44:
                                for (D = 0,
                                N = c; D < N.length; D++)
                                    A = N[D],
                                    J = C(A.className, A.getAttribute("aid"), t.cvid),
                                    E = J.id,
                                    P = J.ids,
                                    (S = t.cardsInfo[E]) || P ? it.push(A) : (V = A.parentNode,
                                    t.generateCardByImg(A, S, E),
                                    Object(d.a)(V, "loaded"));
                                t.initLazyCards(it),
                                t.preloadGifs(nt),
                                t.previewImgs = o,
                                Z(t.$el),
                                t.filterUnallowLinkUrls(),
                                t.$emit("loaded");
                            case 51:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )))()
            },
            colpicRenderHandle: function(t) {
                var e = this;
                return a()(s.a.mark((function n() {
                    var i, a, r, o, c, l, u;
                    return s.a.wrap((function(n) {
                        for (; ; )
                            switch (n.prev = n.next) {
                            case 0:
                                return i = 20,
                                n.next = 3,
                                e.getCardsInfo(i);
                            case 3:
                                a = X([].slice.call(t, 0, i)),
                                n.prev = 4,
                                a.s();
                            case 6:
                                if ((r = a.n()).done) {
                                    n.next = 19;
                                    break
                                }
                                if (o = r.value,
                                c = o && o.parentNode) {
                                    n.next = 11;
                                    break
                                }
                                return n.abrupt("continue", 17);
                            case 11:
                                if (!Object(d.j)(o, "normal-gif")) {
                                    n.next = 14;
                                    break
                                }
                                return Object(d.a)(c, "is-reload"),
                                n.abrupt("continue", 17);
                            case 14:
                                l = C(o.className, o.getAttribute("aid"), e.cvid),
                                u = l.id,
                                e.generateCardByImg(o, e.cardsInfo[u], u),
                                Object(d.a)(c, "loaded");
                            case 17:
                                n.next = 6;
                                break;
                            case 19:
                                n.next = 24;
                                break;
                            case 21:
                                n.prev = 21,
                                n.t0 = n.catch(4),
                                a.e(n.t0);
                            case 24:
                                return n.prev = 24,
                                a.f(),
                                n.finish(24);
                            case 27:
                            case "end":
                                return n.stop()
                            }
                    }
                    ), n, null, [[4, 21, 24, 27]])
                }
                )))()
            },
            getCardsByGroup: function(t) {
                var e = this;
                return a()(s.a.mark((function n() {
                    var i;
                    return s.a.wrap((function(n) {
                        for (; ; )
                            switch (n.prev = n.next) {
                            case 0:
                                return n.next = 2,
                                Object(u.c)(t);
                            case 2:
                                if (0 !== (i = n.sent).code) {
                                    n.next = 6;
                                    break
                                }
                                return e.cardsInfo = tt(tt({}, e.cardsInfo), i.data),
                                n.abrupt("return", null);
                            case 6:
                            case "end":
                                return n.stop()
                            }
                    }
                    ), n)
                }
                )))()
            },
            getCardsInfo: function() {
                var t = arguments
                  , e = this;
                return a()(s.a.mark((function n() {
                    var i, a, r, o, c;
                    return s.a.wrap((function(n) {
                        for (; ; )
                            switch (n.prev = n.next) {
                            case 0:
                                for (i = t.length > 0 && void 0 !== t[0] ? t[0] : -1,
                                a = -1 === i ? et : et.slice(0, i),
                                r = a.length,
                                o = [],
                                c = 0; c < Math.ceil(r / 20); c++)
                                    o.push(a.slice(20 * c, 20 + 20 * c));
                                return n.next = 7,
                                Promise.all(o.map((function(t) {
                                    return e.getCardsByGroup(t)
                                }
                                )));
                            case 7:
                            case "end":
                                return n.stop()
                            }
                    }
                    ), n)
                }
                )))()
            },
            loadImgHandle: function(t) {
                if (!d.l && t) {
                    var e = t.parentNode;
                    if (e) {
                        var n = t.getAttribute("data-src");
                        if (t.src = n,
                        Object(d.j)(e, "loaded"))
                            Object(d.p)(e, "is-reload");
                        else {
                            Object(d.p)(e, "is-reload"),
                            Object(d.a)(e, "is-loading");
                            var i = new Image;
                            i.src = n,
                            i.onload = function() {
                                t.src = n,
                                Object(d.p)(e, "is-loading"),
                                Object(d.a)(e, "loaded")
                            }
                            ,
                            i.onerror = function() {
                                Object(d.p)(e, "is-loading"),
                                Object(d.a)(e, "is-reload")
                            }
                        }
                    }
                }
            },
            initLazyCards: function() {
                var t = this
                  , e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : it;
                e && e.length && (this.lazyIns = new B(e,{
                    openSwitch: !0,
                    rootOptions: {
                        rootMargin: "0px 0px 0px 0px"
                    },
                    callback: function(e) {
                        var n = e.target
                          , i = n && n.parentNode;
                        if (i) {
                            var a = C(n.className, n.getAttribute("aid"), t.cvid)
                              , r = a.id
                              , o = a.ids;
                            t.generateCardByImg(n, t.cardsInfo[r], r),
                            t.addListenCard(i),
                            (r || o) && Object(d.a)(i, "loaded")
                        }
                    }
                }))
            },
            preloadGifs: function() {
                var t = this
                  , e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : nt;
                this.preGifIns = new B(e,{
                    always: !0,
                    openSwitch: !0,
                    rootOptions: {
                        rootMargin: "500px 0px 500px 0px",
                        threshold: [0, .5]
                    },
                    callback: function(e) {
                        var n = e.target;
                        if (n) {
                            var i = n.parentNode;
                            e.intersectionRatio >= .5 ? t.loadImgHandle(n) : Object(d.j)(i, "is-loading") || (n.setAttribute("src", Object(d.i)(n.getAttribute("data-src"))),
                            Object(d.a)(i, "is-reload"))
                        }
                    }
                })
            },
            listenCardsShow: function() {
                var t = this
                  , e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                this.listenIns = new B(e,{
                    always: !0,
                    rootOptions: {
                        rootMargin: "0px 0px 0px 0px",
                        threshold: .5
                    },
                    callback: function(e) {
                        var n = e.target;
                        if (n && e.intersectionRatio >= .5) {
                            var i = n.dataset
                              , a = i.cardType
                              , r = i.cardId;
                            "tao" === a && (window.reportMsgObj["".concat(a, "_card_show")] = {
                                value: t.cvid,
                                aid: r
                            }),
                            t.reportCardShow(a, "appear", r),
                            window.reportMsgObj["".concat(a, "_card_show")] = r,
                            window.reportObserver && window.reportObserver.forceCommit()
                        }
                    }
                }),
                this.listenIns.init()
            },
            addListenCard: function(t) {
                if (this.listenIns) {
                    var e = function t(e) {
                        return e.getAttribute("data-card-type") ? e : Array.from(e.children).map((function(e) {
                            return t(e)
                        }
                        )).filter((function(t) {
                            return t
                        }
                        ))[0]
                    }(t);
                    this.listenIns.add(e)
                }
            },
            filterUnallowLinkUrls: function() {
                for (var t = document.querySelectorAll("#read-article-holder a"), e = 0; e < t.length; e++)
                    Object(d.c)(t[e].getAttribute("href")) || (t[e].setAttribute("href", "#"),
                    t[e].style = "pointer-events: none;")
            },
            initObserves: function() {
                var t = this;
                this.lazyIns && this.lazyIns.init(),
                this.$nextTick((function() {
                    t.preGifIns && t.preGifIns.init()
                }
                ))
            },
            destroy: function() {
                this.lazyIns && this.lazyIns.destroy(),
                this.preGifIns && this.preGifIns.destroy()
            },
            reportCardShow: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "appear"
                  , n = arguments.length > 2 ? arguments[2] : void 0;
                "appear" === e && this.showArr.find((function(t) {
                    return t === n
                }
                )) || (this.showArr.push(n),
                Object(f.a)({
                    c: "in_article",
                    d: "".concat(t, "_card"),
                    e: "appear" === e ? "show" : "click",
                    type: "appear" === e ? "appear" : "click"
                }))
            }
        }
    }
      , rt = (n(267),
    Object(h.a)(at, (function() {
        var t = this
          , e = t.$createElement
          , n = t._self._c || e;
        return n("div", {
            staticClass: "article-content",
            attrs: {
                id: "article-content"
            }
        }, [t.isNoteArticle ? [t.isMounted ? n("AppViewNote", {
            attrs: {
                isNeedLoading: !1,
                isArticleNote: !0,
                cvid: t.cvid
            },
            on: {
                clickTimeTag: t.handleClickTimeTag,
                toast: t.noteToast,
                onNoteInfoCb: t.onNoteInfoCb
            }
        }) : t._e()] : t.isNewEditor ? [t.isMounted ? n("NewEditorWebView", {
            attrs: {
                content: t.readInfo.content
            }
        }) : t._e()] : t._m(0)], 2)
    }
    ), [function() {
        var t = this.$createElement;
        return (this._self._c || t)("div", {
            ref: "read-article-holder",
            staticClass: "normal-article-holder read-article-holder",
            class: {
                "show-later": this.readViewInfo.show_later_watch
            },
            attrs: {
                id: "read-article-holder"
            },
            domProps: {
                innerHTML: this._s(this.readInfo.content)
            },
            on: {
                click: this.articleHandle
            }
        })
    }
    ], !1, null, null, null));
    e.a = rt.exports
}
, function(t, e, n) {
    var i = n(7)
      , a = n.n(i)
      , r = n(28)
      , o = n(33)
      , c = n(1)
      , s = n(5);
    function l(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(t);
            e && (i = i.filter((function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }
            ))),
            n.push.apply(n, i)
        }
        return n
    }
    function d(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? l(Object(n), !0).forEach((function(e) {
                a()(t, e, n[e])
            }
            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach((function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }
            ))
        }
        return t
    }
    var u = {
        name: "ReadInfo",
        props: {
            info: {
                type: Object,
                default: function() {}
            }
        },
        data: function() {
            return {
                appointDate: r.a,
                categoriesMap: o.a,
                formatNum: c.f
            }
        },
        computed: d(d({}, Object(s.d)(["readInfo", "stats"])), {}, {
            link: function() {
                var t, e, n, i, a = this.categoriesMap[null === (t = this.info) || void 0 === t || null === (e = t.category) || void 0 === e ? void 0 : e.parent_id], r = null === (n = this.info) || void 0 === n || null === (i = n.category) || void 0 === i ? void 0 : i.id;
                return "//www.bilibili.com".concat(a, "#rid=").concat(r, "?from=articleDetail")
            }
        })
    }
      , f = (n(269),
    n(3))
      , p = Object(f.a)(u, (function() {
        var t = this
          , e = t.$createElement
          , n = t._self._c || e;
        return n("div", {
            staticClass: "article-read-panel"
        }, [n("div", {
            staticClass: "article-read-info"
        }, [t._e(), n("span", {
            staticClass: "publish-text"
        }, [t._v(t._s(t.appointDate(t.info.publish_time)))]), n("span", [t._v(t._s(t.formatNum(t.stats.view)) + "阅读")]), t._v(" ·\n    "), n("span", [t._v(t._s(t.formatNum(t.stats.like)) + "喜欢")]), t._v(" ·\n    "), n("span", [t._v(t._s(t.formatNum(t.stats.reply)) + "评论")]), t.readInfo.media && t.readInfo.media.spoiler ? n("span", {
            staticClass: "spoiler"
        }, [t._v("涉及剧透内容")]) : t._e()]), t.readInfo.top_video_info && t.readInfo.top_video_info.bvid ? n("p", {
            staticClass: "video-link"
        }, [t._v("\n    视频地址：\n    "), n("a", {
            staticClass: "video-link__to",
            attrs: {
                target: "_blank",
                href: "//www.bilibili.com/video/" + t.readInfo.top_video_info.bvid
            }
        }, [t._v("\n    " + t._s(t.readInfo.top_video_info.title))])]) : t._e()])
    }
    ), [], !1, null, "1d1eb212", null);
    e.a = p.exports
}
, function(t, e, n) {
    var i = n(4)
      , a = null;
    e.a = (a || (a = new i.default({
        data: {
            scrollWrap: null,
            wrapType: "body",
            wrapScrollTop: function() {}
        }
    })),
    a)
}
, , , , , , , , , , , , , , , function(t) {
    t.exports = JSON.parse('{"tool":{"follow":"关注","ended":"已结束","people":"人","single":"个","score":"分","voteNum":"票","notPlay":"未开播","understandMore":"了解更多","repost":"转发","comments":"评论","shareTo":"分享至","readNum":"阅读","checkDetail":"查看详情","fans":"粉丝","flowPlaying":"正在使用流量播放哦～","confirm":"确认","cancel":"取消","save":"保存","share":"分享","generating":"正在生成...","favSuccess":"收藏成功","longLikeSuccess":"成功","tenThousand":"万","billion":"亿","moment":"刚刚","minutesAgo":"分钟前","hoursAgo":"小时前","yesterday":"昨天","left":"剩余","D":"天","H":"时","M":"分"},"cards":{"article":"文章","video":"视频","detailPage":"详情页","music":"音乐","shortRatePeople":"评分人数不足","noRate":"暂无评分","bangumi":"番剧","living":"直播中","comic":"漫画","shop":"商品","holdPrice":"价格待定","doVote":"投票","voteUnderReview":"该投票待审中","voteDeleted":"该投票已被删除","voteReviewFailed":"该投票未过审","voteEnded":"投票已结束","thanksToVote":"感谢你的投票","maxChoose1":"最多选","maxChoose2":"最多只能选择","choose":"项","joinedByPeople":"人参与","anonymous":"匿名","voteTo":"我投给了","joinedVote":"我参与了投票","shareToDynamic":"同时分享至动态"},"info":{"followUp":"关注该UP主，第一时间知道TA的最新投稿","addLater":"添加至稍后再看","isLater":"已添加稍后再看","disabledRepost":"本文禁止转载或摘编","originalByOwner":"本文为我原创","spoiler":"涉及剧透内容","mightLikePeople":"你可能感兴趣的用户","change":"换一换","recommendArticles":"推荐文章","moreArticles":"进入分区查看更多精彩内容","biliReadApp":"哔哩哔哩专栏","noMore":"没有更多了","noOneRepost":"还没有人转发","quicklyToRepost":"快来转发吧","readMore":"继续阅读全文"},"success":{"setting":"设置成功啦～","copy":"复制成功","share":"分享成功～","add":"添加成功","linkCopy":"链接复制成功～","login":"登录成功"},"failed":{"articleLoad":"文章加载失败","videoLoad":"视频加载失败","shareToDnamic":"分享至动态失败","vote":"投票失败","like":"点赞失败","share":"分享失败","fav":"收藏失败","add":"添加失败，请重试","normal":"啊哦，失败咯～"},"reply":{"openArea":"开启评论区","closeArea":"关闭评论区","showByChoice":"评论经过我的筛选向所有人展示","showToEveryone":"评论直接向所有人展示","confirmOpenChosen":"确认开启本内容的评论精选？","openChosenDesc":"可前往PC端创作中心-互动管理-评论管理进行操作。","confirmCloseChosen":"确认关闭本内容的评论精选？","closeChosenDesc":"如有遗留未处理评论，可前往PC端创作中心-互动管理-评论管理进行操作。","confirmOpen":"确认开启本内容的评论区？","confirmOpenDesc":"开启后用户将允许在本内容下发送评论，如已有历史评论也将被展示。","confirmClose":"确认关闭本内容的评论区？","confirmCloseDesc":"关闭后用户将不允许在本内容下发送评论，如已有历史评论也将被隐藏。"},"tabbar":{"longLikeTip":"长按一键点赞投币收藏","closedReply":"UP主已关闭评论区","postComment":"发条友善的评论","favSuccess":"收藏成功啦～","favFailed":"收藏失败啦～","watchToFav":"收藏成功，请去收藏夹查看","cancelFav":"已取消收藏","longLikeSuccess":"关注UP主（●\'‿\'●）","likeFailed":"点赞失败啦～","noLongLike":"请检查网络后再试"},"readList":{"list":"目录","asc":"正序","desc":"倒序"},"bridge":{"notSupport":"暂不支持哦～","saveImgSuccess":"保存图片成功～","unknowError":"未知错误","authorizeFailed":"授权失败","loadFileFailed":"读取文件失败","saveToAlbumFailed":"保存图片至相册失败","replyPopupError":"评论框弹起失败"},"colpic":{"title":"生成分享图片","scanRead":"扫码阅读全文","scanQrcode":"识别二维码，观看全文","generateDate":"图片生成于","generateFailed":"图片生成失败~","shareSuccess":"分享成功~"}}')
}
, function(t, e, n) {
    var i = n(6)
      , a = n.n(i)
      , r = n(7)
      , o = n.n(r)
      , c = n(2)
      , s = n.n(c)
      , l = n(5)
      , d = n(1)
      , u = n(19)
      , f = n.n(u);
    function p(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(t);
            e && (i = i.filter((function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }
            ))),
            n.push.apply(n, i)
        }
        return n
    }
    function v(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? p(Object(n), !0).forEach((function(e) {
                o()(t, e, n[e])
            }
            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : p(Object(n)).forEach((function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }
            ))
        }
        return t
    }
    var m = {
        name: "FollowBtn",
        props: {
            width: {
                type: Number,
                default: 0
            },
            height: {
                type: Number,
                default: 0
            },
            mid: {
                type: Number,
                default: 0
            }
        },
        watch: {
            isFollow: function(t) {
                this.isAtten = t
            }
        },
        data: function() {
            return {
                isAtten: null,
                dialogVisible: !1,
                isLogin: null,
                isMounted: !1
            }
        },
        mounted: function() {
            var t = this;
            this.isMounted = !0,
            f.a.watch((function(e) {
                var n;
                0 === e.code && (t.isLogin = null == e || null === (n = e.data) || void 0 === n ? void 0 : n.isLogin)
            }
            ))
        },
        computed: v(v({}, Object(l.d)(["upInfo", "readViewInfo", "readInfo"])), {}, {
            baseStyle: function() {
                return {
                    width: "".concat(this.width, "px"),
                    height: "".concat(this.height, "px")
                }
            }
        }),
        methods: v(v({}, Object(l.c)(["setReadViewInfo"])), {}, {
            followChange: function(t) {
                var e = this;
                return a()(s.a.mark((function i() {
                    var a, r;
                    return s.a.wrap((function(i) {
                        for (; ; )
                            switch (i.prev = i.next) {
                            case 0:
                                if (Object(d.a)({
                                    c: "article_top",
                                    d: "follow",
                                    e: "click",
                                    type: "click"
                                }, {
                                    msg: JSON.stringify({
                                        type: t ? 1 : 0
                                    })
                                }),
                                a = n(251),
                                e.isLogin) {
                                    i.next = 5;
                                    break
                                }
                                return UserStatus.quickLogin((function() {
                                    location.reload()
                                }
                                )),
                                i.abrupt("return");
                            case 5:
                                return i.next = 7,
                                e.$axios({
                                    method: "post",
                                    url: "//api.bilibili.com/x/relation/modify",
                                    query: {
                                        fid: e.mid,
                                        act: t ? 1 : 2,
                                        re_src: 115,
                                        csrf: a.get("bili_jct"),
                                        spmid: "333.14.0.0",
                                        extend_content: {
                                            entity: "article",
                                            entity_id: e.readInfo.id
                                        }
                                    },
                                    withCredentials: !0
                                });
                            case 7:
                                if (0 === (r = i.sent).data.code) {
                                    i.next = 11;
                                    break
                                }
                                return e.$message.info(r.data.message, e.$refs.btn),
                                i.abrupt("return");
                            case 11:
                                t ? e.setReadViewInfo({
                                    attention: !0
                                }) : e.setReadViewInfo({
                                    attention: !1
                                });
                            case 12:
                            case "end":
                                return i.stop()
                            }
                    }
                    ), i)
                }
                )))()
            },
            setFollowedGrout: function() {
                this.$bus.$emit("open-followed-dialog")
            }
        })
    }
      , h = (n(252),
    n(253),
    n(3))
      , b = Object(h.a)(m, (function() {
        var t = this
          , e = t.$createElement
          , n = t._self._c || e;
        return n("div", {
            ref: "btn",
            style: t.baseStyle
        }, [t.readViewInfo.attention ? t._e() : n("span", {
            staticClass: "follow-btn unfollow",
            on: {
                click: function(e) {
                    return t.followChange(!0)
                }
            }
        }, [n("i", {
            staticClass: "iconfont icon-add"
        }), t._v("\n    关注")]), t.isMounted && t.readViewInfo.attention ? n("van-popover", {
            attrs: {
                placement: "bottom-end",
                "visible-arrow": !1,
                "popper-class": "van-followed",
                width: "98",
                trigger: "hover"
            }
        }, [n("span", {
            staticClass: "follow-btn followed",
            attrs: {
                slot: "reference"
            },
            slot: "reference"
        }, [t._v("已关注")]), n("ul", {
            staticClass: "follow_dropdown"
        }, [n("li", {
            on: {
                click: t.setFollowedGrout
            }
        }, [t._v("设置分组")]), n("li", {
            on: {
                click: function(e) {
                    return t.followChange(!1)
                }
            }
        }, [t._v("取消关注")])])]) : t._e()], 1)
    }
    ), [], !1, null, "d9ea6c32", null);
    e.a = b.exports
}
, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, e, n) {}
, function(t, e, n) {}
, function(t, e, n) {}
, function(t, e, n) {}
, function(t, e, n) {}
, function(t, e, n) {}
, function(t, e, n) {}
, function(t, e, n) {}
, function(t, e, n) {}
, function(t, e, n) {}
, function(t, e, n) {}
, function(t, e, n) {}
, function(t, e, n) {}
, function(t, e, n) {}
, function(t, e, n) {}
, function(t, e, n) {}
, function(t, e, n) {}
, function(t, e, n) {}
, function(t, e, n) {}
, function(t, e, n) {}
, function(t, e, n) {}
, function(t, e, n) {}
, function(t, e, n) {}
, function(t, e, n) {}
, function(t, e, n) {}
, function(t, e, n) {}
, , , , , , , , , , , function(t, e, n) {
    function i(t, e) {
        var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
        if (!n) {
            if (Array.isArray(t) || (n = function(t, e) {
                if (!t)
                    return;
                if ("string" == typeof t)
                    return a(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                "Object" === n && t.constructor && (n = t.constructor.name);
                if ("Map" === n || "Set" === n)
                    return Array.from(t);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                    return a(t, e)
            }(t)) || e && t && "number" == typeof t.length) {
                n && (t = n);
                var i = 0
                  , r = function() {};
                return {
                    s: r,
                    n: function() {
                        return i >= t.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: t[i++]
                        }
                    },
                    e: function(t) {
                        throw t
                    },
                    f: r
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var o, c = !0, s = !1;
        return {
            s: function() {
                n = n.call(t)
            },
            n: function() {
                var t = n.next();
                return c = t.done,
                t
            },
            e: function(t) {
                s = !0,
                o = t
            },
            f: function() {
                try {
                    c || null == n.return || n.return()
                } finally {
                    if (s)
                        throw o
                }
            }
        }
    }
    function a(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, i = new Array(e); n < e; n++)
            i[n] = t[n];
        return i
    }
    n.d(e, "a", (function() {
        return u
    }
    ));
    var r = ["星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日"]
      , o = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"]
      , c = function(t) {
        var e, n = "", a = i(t + "");
        try {
            for (a.s(); !(e = a.n()).done; ) {
                var r = e.value;
                n += o[parseInt(r)]
            }
        } catch (t) {
            a.e(t)
        } finally {
            a.f()
        }
        return n
    }
      , s = function(t) {
        var e, n = "", a = i(t + "");
        try {
            for (a.s(); !(e = a.n()).done; ) {
                var o = e.value;
                n += r[parseInt(o)]
            }
        } catch (t) {
            a.e(t)
        } finally {
            a.f()
        }
        return n
    }
      , l = function(t, e) {
        for (var n = Math.abs(t).toString(); n.length < e; )
            n = "0" + n;
        return n
    }
      , d = {
        ZH_MM: function(t) {
            return c(l(t.getMonth() + 1, 2))
        },
        MM: function(t) {
            return l(t.getMonth() + 1, 2)
        },
        ZH_M: function(t) {
            return c(t.getMonth() + 1)
        },
        M: function(t) {
            return t.getMonth() + 1
        },
        Q: function(t) {
            return Math.ceil((t.getMonth() + 1) / 3)
        },
        DD: function(t) {
            return l(t.getDate(), 2)
        },
        D: function(t) {
            return t.getDate()
        },
        ZH_d: function(t) {
            var e = t.getDay() || 7;
            return s(e - 1)
        },
        d: function(t) {
            return t.getDay()
        },
        ZH_E: function(t) {
            var e = t.getDay() || 7;
            return s(e - 1)
        },
        E: function(t) {
            return t.getDay() || 7
        },
        ZH_YYYY: function(t) {
            return c(l(t.getFullYear(), 4))
        },
        YYYY: function(t) {
            return l(t.getFullYear(), 4)
        },
        ZH_YY: function(t) {
            return c(l(t.getFullYear(), 4).substr(2))
        },
        YY: function(t) {
            return l(t.getFullYear(), 4).substr(2)
        },
        ZH_HH: function(t) {
            return c(l(t.getHours(), 2))
        },
        HH: function(t) {
            return l(t.getHours(), 2)
        },
        ZH_H: function(t) {
            return c(t.getHours())
        },
        H: function(t) {
            return t.getHours()
        },
        ZH_hh: function(t) {
            return c(l(d.h(t), 2))
        },
        hh: function(t) {
            return l(d.h(t), 2)
        },
        ZH_h: function(t) {
            var e = t.getHours();
            return 0 === e ? e = 12 : e > 12 && (e %= 12),
            c(e)
        },
        h: function(t) {
            var e = t.getHours();
            return 0 === e ? 12 : e > 12 ? e % 12 : e
        },
        mm: function(t) {
            return l(t.getMinutes(), 2)
        },
        m: function(t) {
            return t.getMinutes()
        },
        ss: function(t) {
            return l(t.getSeconds(), 2)
        },
        s: function(t) {
            return t.getSeconds()
        }
    }
      , u = function(t) {
        for (var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "YYYY MM DD", n = Object.keys(d), i = e, a = new Date(t), r = 0, o = n; r < o.length; r++) {
            var c = o[r];
            i.match(c) && (i = i.replace(c, d[c](a)))
        }
        return i
    }
}
, , , , , function(t, e) {
    t.exports = "data:;base64,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"
}
, function(t, e) {
    t.exports = "data:;base64,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"
}
, function(t, e) {
    t.exports = "data:;base64,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"
}
, function(t) {
    t.exports = JSON.parse('{"tool":{"follow":"關注","ended":"已結束","people":"人","single":"個","score":"分","voteNum":"票","notPlay":"未開播","understandMore":"了解更多","repost":"轉發","comments":"評論","shareTo":"分享至","readNum":"閱讀","checkDetail":"查看詳情","fans":"粉絲","flowPlaying":"正在使用流量播放哦～","confirm":"確認","cancel":"取消","save":"保存","share":"分享","generating":"正在生成...","favSuccess":"收藏成功","longLikeSuccess":"成功","tenThousand":"萬","billion":"億","moment":"剛剛","minutesAgo":"分鐘前","hoursAgo":"小時前","yesterday":"昨天","left":"剩餘","D":"天","H":"時","M":"分"},"cards":{"article":"文章","video":"視頻","detailPage":"詳情頁","music":"音樂","shortRatePeople":"評分人數不足","noRate":"暫無評分","bangumi":"番劇","living":"直播中","comic":"漫畫","shop":"商品","holdPrice":"價格待定","doVote":"投票","voteUnderReview":"該投票待審中","voteDeleted":"該投票已被刪除","voteReviewFailed":"該投票未過審","voteEnded":"投票已結束","thanksToVote":"感謝你的投票","maxChoose1":"最多選","maxChoose2":"最多只能選擇","choose":"項","joinedByPeople":"人參與","anonymous":"匿名","voteTo":"我投給了","joinedVote":"我參與了投票","shareToDynamic":"同時分享至動態"},"info":{"followUp":"關注該UP主，第一時間知道TA的最新投稿","addLater":"添加至稍後再看","isLater":"已添加稍後再看","disabledRepost":"本文禁止轉載或摘編","originalByOwner":"本文為我原創","spoiler":"涉及劇透內容","mightLikePeople":"你可能感興趣的用戶","change":"換一換","recommendArticles":"推薦文章","moreArticles":"進入分區查看更多精彩內容","biliReadApp":"嗶哩嗶哩專欄","noMore":"没有更多了","noOneRepost":"還沒有人轉發","quicklyToRepost":"快來轉發吧","readMore":"繼續閱讀全文"},"success":{"setting":"設置成功啦～","copy":"複製成功","share":"分享成功～","add":"添加成功","linkCopy":"鏈接複製成功～","login":"登錄成功"},"failed":{"articleLoad":"文章載入失敗","videoLoad":"視頻載入失敗","shareToDnamic":"分享至動態失敗","vote":"投票失敗","like":"點贊失敗","share":"分享失敗","fav":"收藏失敗","add":"添加失敗，請重試","normal":"哎呀，失敗了～"},"reply":{"openArea":"開啟評論區","closeArea":"關閉評論區","showByChoice":"評論經過我的篩選向所有人展示","showToEveryone":"評論直接向所有人展示","confirmOpenChosen":"確認開啟本內容的評論精選？","openChosenDesc":"可前往PC端創作中心-互動管理-評論管理進行操作。","confirmCloseChosen":"確認關閉本內容的評論精選？","closeChosenDesc":"如有遺留未處理評論，可前往PC端創作中心-互動管理-評論管理進行操作。","confirmOpen":"確認開啟本內容的評論區？","confirmOpenDesc":"開啟後用戶將允許在本內容下發送評論，如已有歷史評論也將被展示。","confirmClose":"確認關閉本內容的評論區？","confirmCloseDesc":"關閉後用戶將不允許在本內容下發送評論，如已有歷史評論也將被隱藏。"},"tabbar":{"longLikeTip":"長按一鍵點贊投幣收藏","closedReply":"UP主已關閉評論區","postComment":"發條友善的評論","favSuccess":"收藏成功啦～","favFailed":"收藏失敗啦～","watchToFav":"收藏成功，請去收藏夾查看","cancelFav":"已取消收藏","longLikeSuccess":"關注UP主（●\'‿\'●）","likeFailed":"點贊失敗啦～","noLongLike":"請檢查網絡後再試"},"readList":{"list":"目錄","asc":"正序","desc":"倒序"},"bridge":{"notSupport":"暫不支持哦～","saveImgSuccess":"保存圖片成功～","unknowError":"未知錯誤","authorizeFailed":"授權失敗","loadFileFailed":"讀取文件失敗","saveToAlbumFailed":"保存圖片至相簿失敗","replyPopupError":"評論框彈起失敗"},"colpic":{"title":"生成分享圖片","scanRead":"掃碼閱讀全文","scanQrcode":"識別二維碼，觀看全文","generateDate":"圖片生成於","generateFailed":"圖片生成失敗~","shareSuccess":"分享成功~"}}')
}
, , , function(t, e, n) {
    t.exports = n(296)
}
, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, e) {}
, , , , function(t, e, n) {
    n(108)
}
, function(t, e, n) {
    n(109)
}
, function(t, e, n) {
    n(110)
}
, , , , function(t, e, n) {
    n(111)
}
, function(t, e, n) {
    n(112)
}
, function(t, e, n) {
    n(113)
}
, function(t, e, n) {
    n(114)
}
, function(t, e, n) {
    n(115)
}
, function(t, e, n) {
    n(116)
}
, function(t, e, n) {
    n(117)
}
, function(t, e, n) {
    n(118)
}
, function(t, e, n) {
    n(119)
}
, function(t, e, n) {
    n(120)
}
, function(t, e, n) {
    n(121)
}
, function(t, e, n) {
    n(122)
}
, function(t, e, n) {
    n(123)
}
, , function(t, e, n) {
    n(124)
}
, function(t, e, n) {
    n(125)
}
, function(t, e, n) {
    n(126)
}
, function(t, e, n) {
    n(127)
}
, function(t, e, n) {
    n(128)
}
, function(t, e, n) {
    n(129)
}
, function(t, e, n) {
    n(130)
}
, function(t, e, n) {
    n(131)
}
, function(t, e, n) {
    n(132)
}
, function(t, e, n) {
    n(133)
}
, , function(t, e, n) {}
, , function(t, e, n) {}
, , , , , , , , , , , function(t, e, n) {
    n.r(e);
    var i = n(134)
      , a = n.n(i)
      , r = (n(206),
    n(135))
      , o = n.n(r)
      , c = (n(209),
    n(136))
      , s = n.n(c)
      , l = n(137)
      , d = n.n(l)
      , u = (n(212),
    n(138))
      , f = n.n(u)
      , p = (n(216),
    n(139))
      , v = n.n(p)
      , m = (n(217),
    n(140))
      , h = n.n(m)
      , b = (n(229),
    n(141))
      , g = n.n(b)
      , y = n(142)
      , w = n.n(y)
      , C = n(4)
      , I = n(143)
      , j = n.n(I)
      , M = n(5)
      , O = n(0)
      , U = {
        setReadInfo: function(t, e) {
            var n, i = /src=/;
            3 !== e.type && (e.content = Object(O.r)(Object(O.q)(null === (n = e.content) || void 0 === n ? void 0 : n.replace(/<img[^<]*\ssrc[^>]+>/gi, (function(t) {
                return t.indexOf('class="latex"') > -1 ? t : t.replace(i, "data-src=")
            }
            )))));
            t.readInfo = e,
            t.cvid = e.id
        },
        setReadViewInfo: function(t, e) {
            t.readViewInfo = Object.assign({}, t.readViewInfo, e)
        },
        setStats: function(t, e) {
            t.stats = e
        },
        setQuery: function(t, e) {
            t.query = e
        },
        setUpInfo: function(t, e) {
            t.upInfo = Object.assign({}, t.upInfo, e)
        },
        setCatalogList: function(t, e) {
            t.catalogList = e
        },
        setActInfo: function(t, e) {
            t.actInfo = e
        },
        setRecommendInfo: function(t, e) {
            t.recommendInfoList = e
        }
    }
      , k = n(6)
      , _ = n.n(k)
      , T = n(2)
      , x = n.n(T)
      , D = n(10)
      , N = n(70)
      , A = n.n(N)
      , J = {
        LOAD_READ_DATA: function(t) {
            var e = t.commit
              , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return Object(D.g)(n.id, n).then(function() {
                var t = _()(x.a.mark((function t(i) {
                    var a, r, o, c, s, l, d, u, f, p, v, m, h;
                    return x.a.wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                if (r = (a = i || {}).code,
                                -400 !== (null == (o = a.data) ? void 0 : o.code) && -404 !== (null == o ? void 0 : o.code)) {
                                    t.next = 3;
                                    break
                                }
                                return t.abrupt("return", Promise.reject({
                                    status: 302,
                                    redirect: "https://bilibili.com/read/error",
                                    message: o.message
                                }));
                            case 3:
                                if (s = (c = o || {}).type,
                                l = c.id,
                                d = !1,
                                "undefined" != typeof window ? d = A()(null === (u = navigator) || void 0 === u ? void 0 : u.userAgent) : null != n && n.userAgent && (d = A()(n.userAgent)),
                                f = n.cookie && n.cookie.indexOf("opus-goback=1") > -1,
                                !l || 2 !== s && 3 !== s) {
                                    t.next = 21;
                                    break
                                }
                                if (!d || f) {
                                    t.next = 20;
                                    break
                                }
                                return t.prev = 9,
                                p = (n || "").querystring,
                                t.next = 13,
                                Object(D.e)(l);
                            case 13:
                                return v = t.sent,
                                m = 0 === (null == v ? void 0 : v.code) && (null == v ? void 0 : v.data) || {},
                                h = m.dyn_id,
                                t.abrupt("return", Promise.reject({
                                    status: 302,
                                    redirect: "https://bilibili.com/opus/".concat(h).concat(p ? "?".concat(p) : "")
                                }));
                            case 18:
                                t.prev = 18,
                                t.t0 = t.catch(9);
                            case 20:
                                e("setQuery", {
                                    jump_opus: 1
                                });
                            case 21:
                                e("setReadInfo", 0 === r && o || {});
                            case 22:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t, null, [[9, 18]])
                }
                )));
                return function(e) {
                    return t.apply(this, arguments)
                }
            }())
        },
        LOAD_DRAFT_DATA: function(t) {
            var e = t.commit
              , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return Object(D.d)(n.id, n).then((function(t) {
                var n = t || {}
                  , i = n.code
                  , a = n.data;
                if (-400 === (null == a ? void 0 : a.code) || -404 === (null == a ? void 0 : a.code))
                    return Promise.reject({
                        status: 302,
                        redirect: "https://bilibili.com/read/error",
                        message: a.message
                    });
                e("setReadInfo", 0 === i && a || {})
            }
            ))
        },
        LOAD_PREVIEW_DATA: function(t) {
            var e = t.commit
              , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return Object(D.f)(n.id, n).then((function(t) {
                var n = t || {}
                  , i = n.code
                  , a = n.data;
                if (-400 === (null == a ? void 0 : a.code) || -404 === (null == a ? void 0 : a.code))
                    return Promise.reject({
                        status: 302,
                        redirect: "https://bilibili.com/read/error",
                        message: a.message
                    });
                e("setReadInfo", 0 === i && a || {})
            }
            ))
        },
        LOAD_READ_VIEW_DATA: function(t) {
            var e = t.commit
              , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return Object(D.h)(n.id, n).then((function(t) {
                var n = 0 === (null == t ? void 0 : t.code) && (null == t ? void 0 : t.data) || {};
                e("setReadViewInfo", n),
                e("setStats", (null == n ? void 0 : n.stats) || {})
            }
            ))
        },
        LOAD_RECOMMEND_DATA: function(t) {
            var e = t.commit
              , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return Object(D.i)(n.id, n).then((function(t) {
                var n, i = 0 === (null == t ? void 0 : t.code) && (null == t ? void 0 : t.data) || {};
                e("setRecommendInfo", i.articles),
                e("setReadViewInfo", {
                    total: i.total
                }),
                e("setUpInfo", {
                    fans: (null == i ? void 0 : i.author) && (null == i || null === (n = i.author) || void 0 === n ? void 0 : n.fans),
                    readCount: (null == i ? void 0 : i.author) && (null == i ? void 0 : i.read_count)
                })
            }
            ))
        },
        SET_ACT_INFO: function(t, e) {
            var n = t.commit;
            return Object(D.a)("pc", e).then((function(t) {
                return n("setActInfo", 0 === (null == t ? void 0 : t.code) && (null == t ? void 0 : t.data) || {})
            }
            ))
        }
    }
      , E = function() {
        return {
            cvid: null,
            readInfo: {},
            readViewInfo: {},
            upInfo: {},
            catalogList: [],
            stats: {},
            actInfo: {},
            recommendInfoList: [],
            previewInfo: {},
            draftInfo: {},
            query: {}
        }
    };
    C.default.use(M.a);
    var P, S = function() {
        return new M.a.Store({
            state: E,
            mutations: U,
            actions: J
        })
    }, V = n(8), L = n.n(V), R = n(71), H = n(7), q = n.n(H), G = n(19), z = n.n(G), Q = n(33), F = n(1), W = n(34), Y = n(28), B = {
        name: "Dialog",
        props: {
            show: {
                type: Boolean,
                default: !1
            }
        },
        watch: {
            show: function(t) {
                t ? (this.$emit("open"),
                document.body.appendChild(this.$el)) : this.$emit("close")
            }
        },
        methods: {
            close: function() {
                this.$emit("close")
            }
        },
        destroyed: function() {
            this.$el && this.$el.parentNode && this.$el.parentNode.removeChild(this.$el)
        }
    }, Z = (n(260),
    n(3)), X = Object(Z.a)(B, (function() {
        var t = this.$createElement
          , e = this._self._c || t;
        return e("transition", {
            attrs: {
                name: "dialog-fade"
            }
        }, [this.show ? e("div", {
            staticClass: "bili-dialog-container",
            on: {
                click: this.close
            }
        }, [e("div", {
            staticClass: "bili-dialog-bomb",
            on: {
                click: function(t) {
                    t.stopPropagation()
                }
            }
        }, [this._t("default")], 2)]) : this._e()])
    }
    ), [], !1, null, "4c7b738e", null).exports, K = {
        props: {
            author: {
                type: Object,
                default: function() {}
            },
            title: String,
            summary: String,
            banners: {
                type: Array,
                default: function() {
                    return []
                }
            },
            info: {
                type: Object,
                default: function() {}
            }
        },
        data: function() {
            return {
                desc: "",
                maxLength: 233
            }
        },
        methods: {
            submit: function() {
                var t = {
                    title: this.title,
                    content: this.desc,
                    type: 64,
                    csrf_token: F.c.get("bili_jct"),
                    share_uid: F.c.get("DedeUserID"),
                    uid: this.author.mid,
                    rid: this.$route.params.cvid
                };
                this.$emit("submit", t)
            }
        }
    }, tt = (n(261),
    Object(Z.a)(K, (function() {
        var t = this
          , e = t.$createElement
          , n = t._self._c || e;
        return n("div", {
            staticClass: "share-dynamic-dialog web active"
        }, [n("div", {
            staticClass: "sdd-head"
        }, [n("span", [t._v("分享至动态")]), n("span", {
            staticClass: "sdd-close",
            on: {
                click: function(e) {
                    return e.stopPropagation(),
                    t.$emit("close")
                }
            }
        }, [n("van-icon", {
            attrs: {
                type: "general_close_s"
            }
        })], 1)]), n("div", {
            staticClass: "sdd-body-wrap"
        }, [n("textarea", {
            directives: [{
                name: "model",
                rawName: "v-model",
                value: t.desc,
                expression: "desc"
            }],
            ref: "input",
            staticClass: "sdd-input",
            attrs: {
                placeholder: "说点什么..."
            },
            domProps: {
                value: t.desc
            },
            on: {
                input: function(e) {
                    e.target.composing || (t.desc = e.target.value)
                }
            }
        }), n("div", {
            staticClass: "sdd-card"
        }, [n("div", {
            staticClass: "name"
        }, [t._v("@" + t._s(t.author.name) + ":")]), n("div", {
            staticClass: "sdd-card-content"
        }, [n("div", {
            staticClass: "banner-box"
        }, t._l(t.banners, (function(t, e) {
            return n("div", {
                key: e,
                staticClass: "pic-item",
                style: "background-image: url(" + t + ");"
            })
        }
        )), 0), n("div", {
            staticClass: "title"
        }, [t._v("\n        " + t._s(t.title) + " - 哔哩哔哩\n        ")]), n("div", {
            staticClass: "summary"
        }, [t._v(t._s(t.summary))])])])]), n("div", {
            staticClass: "sdd-action-bar"
        }, [n("div", {
            staticClass: "sdd-submit",
            on: {
                click: function(e) {
                    return e.stopPropagation(),
                    t.submit.apply(null, arguments)
                }
            }
        }, [t._v("发布")]), n("div", {
            staticClass: "sdd-input-num"
        }, [t._v(t._s(t.maxLength - t.desc.length))])])])
    }
    ), [], !1, null, null, null).exports), et = {
        components: {
            Dialog: X
        },
        data: function() {
            return {
                visible: !1
            }
        },
        methods: {
            show: function(t) {
                this.visible = t
            }
        }
    }, nt = (n(262),
    Object(Z.a)(et, (function() {
        var t = this
          , e = t.$createElement
          , n = t._self._c || e;
        return n("Dialog", {
            attrs: {
                show: t.visible
            },
            on: {
                close: function(e) {
                    t.visible = !1
                }
            }
        }, [n("div", {
            staticClass: "share-success-dialog web active"
        }, [n("div", {
            staticClass: "suc-img"
        }), n("div", {
            staticClass: "info"
        }, [t._v("分享成功")]), n("div", {
            staticClass: "hint"
        }, [t._v("请在客户端中查看~")]), n("div", {
            staticClass: "btn-close",
            on: {
                click: function(e) {
                    e.stopPropagation(),
                    t.visible = !1
                }
            }
        }, [t._v("确定")])])])
    }
    ), [], !1, null, null, null).exports), it = null, at = C.default.extend(nt), rt = function(t) {
        it || (it = new at({
            el: document.createElement("div")
        }),
        document.body.appendChild(it.$el)),
        it.show(t)
    }, ot = {
        props: {
            maxLength: {
                type: Number,
                default: 5
            }
        },
        data: function() {
            return {
                images: []
            }
        },
        methods: {
            delImage: function(t) {
                this.images.splice(t, 1)
            },
            uploadMethod: function(t) {
                var e = this;
                this.$axios({
                    method: "POST",
                    url: "//api.bilibili.com/x/article/creative/upload/image",
                    data: {
                        file: t,
                        csrf: F.c.get("bili_jct"),
                        jsonp: "jsonp"
                    },
                    withCredentials: !0
                }).then((function(t) {
                    var n = t.data;
                    0 === n.code && n.data ? e.images.push(n.data.url) : e.$emit("toast", "图片上传失败")
                }
                ))
            },
            uploadHandle: function(t) {
                var e = this
                  , n = t.currentTarget
                  , i = n.files[0]
                  , a = new FileReader;
                i && (n.value = "",
                i.size > 5242880 ? this.$emit("toast", "每张图片最大5M") : (a.addEventListener("load", (function(t) {
                    e.uploadMethod(t.target.result)
                }
                )),
                a.readAsDataURL(i)))
            }
        }
    }, ct = (n(263),
    {
        components: {
            UploadImages: Object(Z.a)(ot, (function() {
                var t = this
                  , e = t.$createElement
                  , n = t._self._c || e;
                return n("ul", {
                    staticClass: "upload-box"
                }, [t._l(t.images, (function(e, i) {
                    return n("li", {
                        key: i,
                        staticClass: "upload-item image-item",
                        style: "background-image: url(" + e + ");"
                    }, [n("span", {
                        staticClass: "close-icon",
                        on: {
                            click: function(e) {
                                return e.stopPropagation(),
                                t.delImage(i)
                            }
                        }
                    }, [n("van-icon", {
                        attrs: {
                            type: "guanbi"
                        }
                    })], 1)])
                }
                )), n("li", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.images.length < t.maxLength,
                        expression: "images.length < maxLength"
                    }],
                    staticClass: "upload-item add-item"
                }, [n("label", {
                    attrs: {
                        for: "upload"
                    }
                }, [n("div", {
                    staticClass: "upload-icon"
                }), n("input", {
                    staticClass: "upload-input",
                    attrs: {
                        id: "upload",
                        name: "upload",
                        type: "file",
                        accept: "image/jpeg,image/jpg,image/png"
                    },
                    on: {
                        change: t.uploadHandle
                    }
                })])])], 2)
            }
            ), [], !1, null, null, null).exports
        },
        props: {
            cvid: Number
        },
        data: function() {
            return {
                adviceText: "",
                chosenTid: "",
                memoTip: "请补充问题类型和出现位置等详细信息",
                chooseItems: [{
                    tid: 5,
                    text: "广告营销内容",
                    extra: "请补充违规内容出现位置等详细信息"
                }, {
                    tid: 3,
                    text: "有害、危害行为内容",
                    extra: "请补充违规内容出现位置等详细信息"
                }, {
                    tid: 2,
                    text: "抄袭、版权问题",
                    extra: '请补充原文链接和相关截图。如果这篇文章侵犯了你的相关权益，请访问[<a href="https://www.bilibili.com/blackboard/copyright.html" target="_blank">侵权访问</a>]，按照提示反馈给我们'
                }, {
                    tid: 6,
                    text: "青少年不良信息",
                    extra: "请补充违规内容出现位置等详细信息"
                }, {
                    tid: 1,
                    text: "色情、暴力、反动内容",
                    extra: "请补充违规内容出现位置等详细信息"
                }, {
                    tid: 7,
                    text: "侵权申诉",
                    extra: ""
                }, {
                    tid: 9,
                    text: "涉政谣言",
                    extra: "请补充违规内容出现位置等详细信息"
                }, {
                    tid: 10,
                    text: "涉社会事件谣言",
                    extra: "请补充违规内容出现位置等详细信息"
                }, {
                    tid: 11,
                    text: "疫情谣言",
                    extra: "请补充违规内容出现位置等详细信息"
                }, {
                    tid: 12,
                    text: "虚假不实信息",
                    extra: "请补充违规内容出现位置等详细信息"
                }, {
                    tid: 4,
                    text: "其他问题 或建议",
                    extra: "请补充问题类型和出现位置等详细信息"
                }]
            }
        },
        methods: {
            chooseOption: function(t) {
                var e = t.target.dataset
                  , n = e.tid
                  , i = e.type
                  , a = e.index;
                "option" === i && (this.chosenTid = Number(n),
                this.memoTip = this.chooseItems[a].extra)
            },
            submit: function() {
                var t = this;
                this.chosenTid ? 7 !== this.chosenTid ? this.$axios({
                    method: "POST",
                    url: "//api.bilibili.com/x/article/complaints",
                    data: {
                        aid: this.$route.params.cvid,
                        cid: this.chosenTid,
                        reason: this.adviceText,
                        images: this.$refs.uploadImages.images.join(","),
                        csrf: F.c.get("bili_jct")
                    },
                    withCredentials: !0
                }).then((function(e) {
                    var n = e.data;
                    0 === n.code ? (t.$message.info("投诉成功"),
                    t.$emit("close")) : t.$message.info(n.message)
                }
                )).catch((function(e) {
                    t.$message.info("投诉失败，".concat(e.message))
                }
                )) : location.href = "//www.bilibili.com/v/copyright/intro/" : this.$message.info("请选择投诉理由")
            }
        }
    }), st = (n(264),
    Object(Z.a)(ct, (function() {
        var t = this
          , e = t.$createElement
          , n = t._self._c || e;
        return n("div", {
            staticClass: "bili-dialog-bomb"
        }, [n("div", {
            staticClass: "appeal-box"
        }, [n("div", {
            staticClass: "header"
        }, [n("span", {
            staticClass: "title"
        }, [t._v("投诉或建议")]), n("i", {
            staticClass: "iconfont icon--close close",
            on: {
                click: function(e) {
                    return e.stopPropagation(),
                    t.$emit("close")
                }
            }
        })]), n("div", {
            staticClass: "wrap"
        }, [n("div", {
            staticClass: "container"
        }, [n("div", {
            staticClass: "question"
        }, [t._v("你觉得这篇专栏文章(cv" + t._s(t.cvid) + ")有什么问题？")]), n("div", {
            staticClass: "options",
            on: {
                click: function(e) {
                    return e.stopPropagation(),
                    t.chooseOption.apply(null, arguments)
                }
            }
        }, t._l(t.chooseItems, (function(e, i) {
            return n("div", {
                key: i,
                staticClass: "option",
                attrs: {
                    "data-type": "option",
                    "data-tid": e.tid,
                    "data-index": i
                }
            }, [n("span", {
                staticClass: "checkbox",
                class: {
                    checked: e.tid === t.chosenTid
                }
            }), n("span", [t._v(t._s(e.text))])])
        }
        )), 0), 7 !== t.chosenTid ? n("div", [n("div", {
            staticClass: "textarea"
        }, [n("div", {
            staticClass: "memo",
            domProps: {
                innerHTML: t._s(t.memoTip)
            }
        }), n("div", {
            staticClass: "textarea-wrap"
        }, [n("textarea", {
            directives: [{
                name: "model",
                rawName: "v-model",
                value: t.adviceText,
                expression: "adviceText"
            }],
            attrs: {
                maxlength: "400",
                placeholder: "请输入文字描述，可加快反馈速度哦～"
            },
            domProps: {
                value: t.adviceText
            },
            on: {
                input: function(e) {
                    e.target.composing || (t.adviceText = e.target.value)
                }
            }
        }), n("span", {
            staticClass: "limit"
        }, [t._v(t._s(t.adviceText.length) + "/400")])])]), n("div", {
            staticClass: "upload-area"
        }, [n("UploadImages", {
            ref: "uploadImages",
            on: {
                toast: t.$message.info
            }
        })], 1), t._m(0)]) : t._e()])]), n("div", {
            staticClass: "submit"
        }, [n("div", {
            staticClass: "confirm",
            on: {
                click: function(e) {
                    return e.stopPropagation(),
                    t.submit.apply(null, arguments)
                }
            }
        }, [t._v(t._s(7 === t.chosenTid ? "前往申诉" : "提交"))]), n("div", {
            staticClass: "cancel",
            on: {
                click: function(e) {
                    return e.stopPropagation(),
                    t.$emit("close")
                }
            }
        }, [t._v("取消")])])])])
    }
    ), [function() {
        var t = this.$createElement
          , e = this._self._c || t;
        return e("div", {
            staticClass: "img-text"
        }, [e("span", {
            staticClass: "memo"
        }, [this._v("支持JPG/PNG格式，最多5张，每张不超过5M")])])
    }
    ], !1, null, null, null).exports);
    function lt(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(t);
            e && (i = i.filter((function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }
            ))),
            n.push.apply(n, i)
        }
        return n
    }
    var dt = {
        name: "InteractionInfo",
        components: (P = {
            Dialog: X,
            DynamicDialog: tt
        },
        q()(P, "Dialog", X),
        q()(P, "AdviceDialog", st),
        P),
        data: function() {
            return {
                shareList: [],
                isLogin: null,
                dialogVisible: !1,
                dynamicDialogVisible: !1,
                adviceDialogVisible: !1
            }
        },
        computed: function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? lt(Object(n), !0).forEach((function(e) {
                    q()(t, e, n[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : lt(Object(n)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }
                ))
            }
            return t
        }({}, Object(M.d)(["readViewInfo", "readInfo", "upInfo", "cvid"])),
        mounted: function() {
            var t = this;
            z.a.watch((function(e) {
                var n;
                0 === e.code && (t.isLogin = null == e || null === (n = e.data) || void 0 === n ? void 0 : n.isLogin)
            }
            )),
            this.shareList = [{
                title: "动态",
                type: "dynamic",
                icon: "share_news_default",
                disEvt: !0
            }, {
                title: "新浪微博",
                type: "weibo",
                icon: "share_weibo_default",
                href: "http://service.weibo.com/share/share.php?appkey=2841902482&language=zh_cn&".concat(this.generateShareParams(!0)),
                disEvt: !1
            }, {
                type: "wechat",
                icon: "share_wechat_default",
                disEvt: !0,
                qrcode: {
                    id: "wechat-qrcode",
                    tit: "微信扫一扫分享",
                    text: window.location.href
                }
            }, {
                title: "QQ空间",
                type: "qzone",
                icon: "share_qzone_default",
                href: "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?style=203&width=98&height=22&otype=share&".concat(this.generateShareParams()),
                disEvt: !1
            }, {
                title: "QQ好友",
                type: "qq",
                icon: "share_qq_default",
                href: "http://connect.qq.com/widget/shareqq/index.html?".concat(this.generateShareParams()),
                disEvt: !1
            }]
        },
        methods: {
            generateShareParams: function(t) {
                var e = t ? "#bilibili专栏# ".concat(this.readViewInfo.title, " - 哔哩哔哩专栏") : this.readViewInfo.title;
                return Object(Y.d)({
                    url: window.location.href,
                    title: e,
                    pic: this.readViewInfo.banner_url || "https://static.hdslb.com/mobile/img/app_logo.png",
                    pics: this.readViewInfo.banner_url || "https://static.hdslb.com/mobile/img/app_logo.png",
                    site: "",
                    summary: this.readViewInfo.summary,
                    searchPic: !0
                }).join("&")
            },
            shareClickHandle: function(t) {
                var e = t.target.getAttribute("data-type");
                switch (Object(F.a)({
                    c: "article_bottom",
                    d: "share",
                    e: "click",
                    type: "click"
                }),
                e) {
                case "dynamic":
                    if (!this.isLogin)
                        return void UserStatus.quickLogin((function() {
                            location.reload()
                        }
                        ));
                    this.dynamicDialogVisible = !0
                }
            },
            submitDynamicShare: function(t) {
                var e = this;
                return _()(x.a.mark((function n() {
                    return x.a.wrap((function(n) {
                        for (; ; )
                            switch (n.prev = n.next) {
                            case 0:
                                e.$axios({
                                    method: "POST",
                                    url: "https://api.vc.bilibili.com/dynamic_repost/v1/dynamic_repost/share",
                                    data: t,
                                    withCredentials: !0
                                }).then((function(t) {
                                    var n = t.data || {}
                                      , i = n.code
                                      , a = n.message;
                                    0 === i ? (e.dynamicDialogVisible = !1,
                                    rt(!0)) : e.$message.info("分享失败 ".concat(a))
                                }
                                )).catch((function(t) {
                                    e.$message.info("分享失败，".concat(t.message))
                                }
                                ));
                            case 1:
                            case "end":
                                return n.stop()
                            }
                    }
                    ), n)
                }
                )))()
            },
            openAdvice: function() {
                this.isLogin ? this.adviceDialogVisible = !0 : UserStatus.quickLogin((function() {
                    location.reload()
                }
                ))
            }
        }
    }
      , ut = (n(265),
    Object(Z.a)(dt, (function() {
        var t = this
          , e = t.$createElement
          , n = t._self._c || e;
        return n("div", {
            staticClass: "interaction-info"
        }, [n("div", {
            staticClass: "toolbar"
        }, [n("div", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: !t.readViewInfo.disable_share,
                expression: "!readViewInfo.disable_share"
            }],
            ref: "share",
            staticClass: "share-box"
        }, [t._v("\n      分享到：\n      "), n("ul", {
            staticClass: "share-list",
            on: {
                click: function(e) {
                    return e.stopPropagation(),
                    t.shareClickHandle.apply(null, arguments)
                }
            }
        }, t._l(t.shareList, (function(e, i) {
            return n("li", {
                key: i,
                staticClass: "hover-item share-item",
                class: {
                    "has-qrcode-item": e.qrcode
                },
                attrs: {
                    title: e.title,
                    "data-type": e.type
                }
            }, [n("a", {
                class: {
                    "dis-evt": e.disEvt
                },
                attrs: {
                    href: e.href || "javascript:void(0);",
                    target: e.href ? "_blank" : "_self"
                }
            }, [n("van-icon", {
                attrs: {
                    type: e.icon
                }
            })], 1), e.qrcode ? n("div", {
                staticClass: "qrcode-box"
            }, [n("p", {
                staticClass: "qrcode-tit"
            }, [t._v(t._s(e.qrcode.tit))]), n("div", {
                staticClass: "qrcode-ctnr",
                attrs: {
                    id: e.qrcode.id
                }
            }, [n("van-qrcode", {
                attrs: {
                    text: e.qrcode.text,
                    width: 132,
                    height: 132
                }
            })], 1)]) : t._e()])
        }
        )), 0)])]), n("span", {
            staticClass: "hover-item advice-item",
            on: {
                click: function(e) {
                    return e.stopPropagation(),
                    t.openAdvice.apply(null, arguments)
                }
            }
        }, [t._v("投诉或建议")]), n("Dialog", {
            attrs: {
                show: t.dynamicDialogVisible
            },
            on: {
                close: function(e) {
                    t.dynamicDialogVisible = !1
                }
            }
        }, [n("DynamicDialog", {
            attrs: {
                title: t.readViewInfo.title,
                summary: t.readViewInfo.summary,
                banners: t.readViewInfo.image_urls,
                author: t.upInfo,
                info: t.readViewInfo
            },
            on: {
                close: function(e) {
                    t.dynamicDialogVisible = !1
                },
                submit: t.submitDynamicShare
            }
        })], 1), n("Dialog", {
            attrs: {
                show: t.adviceDialogVisible
            },
            on: {
                close: function(e) {
                    t.adviceDialogVisible = !1
                }
            }
        }, [n("AdviceDialog", {
            attrs: {
                cvid: t.cvid
            },
            on: {
                close: function(e) {
                    t.adviceDialogVisible = !1
                }
            }
        })], 1)], 1)
    }
    ), [], !1, null, null, null).exports)
      , ft = n(35)
      , pt = {
        name: "CommentInfo",
        props: {
            cvid: {
                type: Number,
                default: null
            },
            userInfo: {
                type: Object,
                default: null
            }
        },
        mounted: function() {
            this.initComment(this.userInfo)
        },
        methods: {
            initComment: function(t) {
                var e = document.querySelector(".article-comment");
                e.innerHTML = "";
                var n = e.cloneNode(!0);
                e.parentNode.replaceChild(n, e),
                document.querySelector(".common .b-head .results").innerHTML = "";
                var i = window.location.href.match(/#fb,([0-9]+),([0-9]+),([0-9]+),(.+)$/) && window.location.href.match(/#fb,([0-9]+),([0-9]+),([0-9]+),(.+)$/)[3] || window.location.href.match(/#reply([0-9]+)$/) && window.location.href.match(/#reply([0-9]+)$/)[1] || "";
                new bbComment(".article-comment",this.cvid,12,t,i),
                window.commentContainer = n
            }
        }
    }
      , vt = (n(268),
    Object(Z.a)(pt, (function() {
        var t = this.$createElement;
        this._self._c;
        return this._m(0)
    }
    ), [function() {
        var t = this.$createElement
          , e = this._self._c || t;
        return e("div", {
            staticClass: "comment-wrapper",
            attrs: {
                id: "comment-wrapper"
            }
        }, [e("div", {
            staticClass: "comment-m"
        }, [e("div", {
            staticClass: "common"
        }, [e("div", {
            staticClass: "b-head"
        }, [e("span", {
            staticClass: "b-head-t results"
        }), e("span", {
            staticClass: "b-head-t"
        }, [this._v("评论")])]), e("div", {
            staticClass: "article-comment"
        })])])])
    }
    ], !1, null, null, null).exports)
      , mt = n(36)
      , ht = n(149)
      , bt = n.n(ht)
      , gt = n(150)
      , yt = n.n(gt)
      , wt = n(151)
      , Ct = n.n(wt)
      , It = {
        props: {
            size: Number,
            left: Number,
            top: Number
        },
        data: function() {
            return {
                angle: 0,
                interval: null,
                ctx: null
            }
        },
        computed: {
            r: function() {
                return this.size / 2
            }
        },
        methods: {
            drawRing: function() {
                this.ctx.clearRect(0, 0, this.size, this.size),
                this.ctx.beginPath(),
                this.ctx.strokeStyle = "#00a1d6",
                this.ctx.lineWidth = 1,
                this.ctx.arc(this.r, this.r, this.r - 1, -Math.PI / 2, (this.angle - .5) * Math.PI),
                this.ctx.stroke()
            },
            startAnim: function() {
                var t = this;
                this.interval = setInterval((function() {
                    t.angle += .1,
                    t.drawRing(),
                    t.angle >= 2 && (t.angle = 0,
                    t.drawRing(),
                    clearInterval(t.interval),
                    t.$emit("animFinish"))
                }
                ), 50)
            },
            cancelAnim: function() {
                var t = this;
                clearInterval(this.interval),
                this.interval = setInterval((function() {
                    t.angle -= .1,
                    t.drawRing(),
                    t.angle <= 0 && (t.angle = 0,
                    t.drawRing(),
                    clearInterval(t.interval))
                }
                ), 50)
            }
        },
        mounted: function() {
            var t = this.$refs.progress;
            this.ctx = t.getContext("2d"),
            this.drawRing()
        }
    }
      , jt = (n(270),
    Object(Z.a)(It, (function() {
        var t = this.$createElement;
        return (this._self._c || t)("canvas", {
            ref: "progress",
            staticClass: "ring-progress",
            style: {
                width: this.size + "px",
                height: this.size + "px",
                left: this.left + "px",
                top: this.top + "px"
            },
            attrs: {
                width: this.size,
                height: this.size
            }
        })
    }
    ), [], !1, null, null, null).exports)
      , Mt = {
        props: {
            file: String,
            loop: {
                type: Boolean,
                default: !1
            }
        },
        data: function() {
            return {
                parent: null,
                originTop: 0,
                originLeft: 0
            }
        },
        mounted: function() {
            var t = this
              , e = n(271)
              , i = this.$refs.demoCanvas
              , a = new e.Player(i);
            this.parent = this.$el.parentNode,
            this.originTop = this.$el.style.top,
            this.originLeft = this.$el.style.left;
            var r = this.$el.getBoundingClientRect();
            this.$el.style.left = window.pageXOffset + r.left + "px",
            this.$el.style.top = window.pageYOffset + r.top + "px",
            document.body.appendChild(this.$el),
            this.loop || (a.loops = 1),
            a.onFinished((function() {
                t.parent && t.parent.appendChild && (t.parent.appendChild(t.$el),
                t.$el.style.left = t.originLeft,
                t.$el.style.top = t.originTop),
                t.$emit("finish")
            }
            )),
            new e.Parser(i).load(this.file, (function(e) {
                t.$emit("start"),
                a.setVideoItem(e),
                a.startAnimation()
            }
            ))
        }
    }
      , Ot = (n(272),
    Object(Z.a)(Mt, (function() {
        var t = this.$createElement;
        return (this._self._c || t)("div", {
            ref: "demoCanvas",
            staticClass: "svga-container"
        })
    }
    ), [], !1, null, null, null).exports)
      , Ut = {
        name: "CoinDialog",
        data: function() {
            return {
                selectLike: !1,
                exp: 0
            }
        },
        methods: {
            selectCoin: function() {},
            submitAddCoin: function() {}
        }
    };
    n(273);
    function kt(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(t);
            e && (i = i.filter((function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }
            ))),
            n.push.apply(n, i)
        }
        return n
    }
    function _t(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? kt(Object(n), !0).forEach((function(e) {
                q()(t, e, n[e])
            }
            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : kt(Object(n)).forEach((function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }
            ))
        }
        return t
    }
    var Tt = {
        components: {
            RingProgress: jt,
            SVGA: Ot,
            Dialog: X,
            CoinDialog: Object(Z.a)(Ut, (function() {
                var t = this
                  , e = t.$createElement
                  , n = t._self._c || e;
                return n("div", {
                    staticClass: "coin-dialog-wrapper"
                }, [n("van-icon", {
                    attrs: {
                        type: "guanbi"
                    },
                    nativeOn: {
                        click: function(e) {
                            return t.$emit("close")
                        }
                    }
                }), n("div", {
                    staticClass: "coin-title"
                }, [t._v("\n    给UP主投上1枚硬币\n  ")]), n("div", {
                    staticClass: "coin-card clearfix"
                }, [n("div", {
                    staticClass: "coin-card-box left-con on",
                    on: {
                        click: function(e) {
                            return t.selectCoin(1)
                        }
                    }
                }, [n("span", {
                    staticClass: "coin-num"
                }, [t._v("1硬币")])])]), n("div", {
                    staticClass: "coin-bottom"
                }, [n("span", {
                    staticClass: "confirm-btn",
                    on: {
                        click: function(e) {
                            return t.$emit("addCoin", t.selectLike)
                        }
                    }
                }, [t._v("确定")]), t.exp < 50 ? n("p", {
                    staticClass: "tips"
                }, [t._v("\n      经验值+" + t._s(10) + "（今日" + t._s(t.exp) + "/50）\n    ")]) : n("p", {
                    staticClass: "tips"
                }, [t._v("今日投币+50经验成就 get ✓ 赞！")])])], 1)
            }
            ), [], !1, null, null, null).exports
        },
        props: {
            commentCount: {
                type: Number,
                default: 0
            }
        },
        data: function() {
            return {
                replyOffsetTop: 0,
                showBackTop: !1,
                catalogShow: !1,
                formatNum: F.f,
                longPressing: !1,
                likeAnim: "",
                favAnim: "",
                coinAnim: "",
                showLikeCombo: !1,
                showFavCombo: !1,
                showCoinCombo: !1,
                LikeBase: "//s1.hdslb.com/bfs/seed/jinkela/short/config/like_base.svga",
                LikeHeart: "//s1.hdslb.com/bfs/seed/jinkela/short/config/like_heart.svga",
                LikeThumb: "//s1.hdslb.com/bfs/seed/jinkela/short/config/like_thumb.svga",
                ComboLike: bt.a,
                ComboCoin: yt.a,
                ComboFav: Ct.a,
                isLogin: null,
                dialogVisible: !1,
                dynamicDialogVisible: !1,
                isJustCombo: !1,
                clientHeight: 0,
                panelShow: !1,
                scrollTop: null
            }
        },
        computed: _t({}, Object(M.d)(["cvid", "catalogList", "readInfo", "stats", "readViewInfo"])),
        methods: _t(_t({}, Object(M.c)(["setCatalogList"])), {}, {
            reportClick: function(t) {
                Object(F.a)({
                    c: "right_resident_key_area",
                    d: t,
                    e: "click",
                    type: "click"
                })
            },
            initReplyOffsetTop: function() {
                var t = document.querySelector("#comment-wrapper");
                t && (this.replyOffsetTop = t.offsetTop - window.innerHeight / 2 + 500)
            },
            initScrollListener: function() {
                var t = this;
                document.addEventListener("scroll", (function() {
                    t.showBackTop = window.pageYOffset > window.innerHeight / 2
                }
                ))
            },
            getCatalogList: function() {
                var t = this;
                return _()(x.a.mark((function e() {
                    var n, i, a, r;
                    return x.a.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (t.readInfo.list) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return");
                            case 2:
                                return n = t.readInfo.list.id,
                                e.next = 5,
                                t.$axios({
                                    method: "get",
                                    url: "//api.bilibili.com/x/article/list/articles",
                                    query: {
                                        id: n
                                    },
                                    withCredentials: !0
                                });
                            case 5:
                                i = e.sent,
                                0 === (a = i.data).code && t.setCatalogList(null == a || null === (r = a.data) || void 0 === r ? void 0 : r.articles);
                            case 8:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )))()
            },
            openCatelog: function() {
                var t = this;
                this.reportClick("anthology"),
                this.panelShow = !0,
                this.$nextTick((function() {
                    t.scrollTop || (t.scrollTop = document.getElementsByClassName("catalog-item--on")[0].getBoundingClientRect().top),
                    document.getElementsByClassName("catalog-panel__list")[0].scrollTop = t.scrollTop - 400
                }
                ))
            },
            likeMethod: function() {
                var t = arguments
                  , e = this;
                return _()(x.a.mark((function n() {
                    var i, a, r;
                    return x.a.wrap((function(n) {
                        for (; ; )
                            switch (n.prev = n.next) {
                            case 0:
                                return i = t.length > 0 && void 0 !== t[0] ? t[0] : e.readViewInfo.like ? 2 : 1,
                                n.next = 3,
                                e.$axios({
                                    method: "POST",
                                    url: "//api.bilibili.com/x/article/like",
                                    data: {
                                        id: e.cvid,
                                        type: i,
                                        csrf: F.c.get("bili_jct")
                                    },
                                    withCredentials: !0
                                });
                            case 3:
                                return a = n.sent,
                                r = a.data,
                                n.abrupt("return", r || {});
                            case 6:
                            case "end":
                                return n.stop()
                            }
                    }
                    ), n)
                }
                )))()
            },
            addFavMethod: function() {
                var t = this;
                return _()(x.a.mark((function e() {
                    var n, i;
                    return x.a.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                t.$axios({
                                    method: "POST",
                                    url: "//api.bilibili.com/x/article/favorites/add",
                                    data: {
                                        csrf: F.c.get("bili_jct"),
                                        id: t.cvid
                                    },
                                    withCredentials: !0
                                });
                            case 2:
                                return n = e.sent,
                                i = n.data,
                                e.abrupt("return", i || {});
                            case 5:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )))()
            },
            delFavMethod: function() {
                var t = this;
                return _()(x.a.mark((function e() {
                    var n, i;
                    return x.a.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                t.$axios({
                                    method: "POST",
                                    url: "//api.bilibili.com/x/article/favorites/del",
                                    data: {
                                        csrf: F.c.get("bili_jct"),
                                        id: t.cvid
                                    },
                                    withCredentials: !0
                                });
                            case 2:
                                return n = e.sent,
                                i = n.data,
                                e.abrupt("return", i || {});
                            case 5:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )))()
            },
            addCoinMethod: function() {
                var t = arguments
                  , e = this;
                return _()(x.a.mark((function n() {
                    var i, a, r;
                    return x.a.wrap((function(n) {
                        for (; ; )
                            switch (n.prev = n.next) {
                            case 0:
                                return i = t.length > 0 && void 0 !== t[0] ? t[0] : 1,
                                n.next = 3,
                                e.$axios({
                                    method: "post",
                                    url: "//api.bilibili.com/x/web-interface/coin/add",
                                    data: {
                                        csrf: F.c.get("bili_jct"),
                                        aid: e.cvid,
                                        upid: e.readViewInfo.mid,
                                        multiply: i,
                                        avtype: 2
                                    },
                                    withCredentials: !0
                                });
                            case 3:
                                return a = n.sent,
                                r = a.data,
                                n.abrupt("return", r || {});
                            case 6:
                            case "end":
                                return n.stop()
                            }
                    }
                    ), n)
                }
                )))()
            },
            startCombo: function() {
                var t;
                this.isLogin ? this.longPressing || this.liked && this.faved && this.coined || (this.likeAnim = "shake",
                this.longPressing = !0,
                this.$refs.progressCoin.startAnim(),
                this.$refs.progressFav.startAnim()) : null === (t = window.UserStatus) || void 0 === t || t.quickLogin()
            },
            cancelCombo: function() {
                var t = this;
                !this.isJustCombo && this.longPressing && Object(F.a)({
                    c: "right_resident_key_area",
                    d: "highlyrec",
                    e: "click",
                    type: "click"
                }, {
                    msg: JSON.stringify({
                        type: 0
                    })
                }),
                setTimeout((function() {
                    t.longPressing = !1
                }
                ), 30),
                "shake" === this.likeAnim && (this.likeAnim = ""),
                this.$refs.progressCoin.cancelAnim(),
                this.$refs.progressFav.cancelAnim()
            },
            setLike: function() {
                var t = this;
                return _()(x.a.mark((function e() {
                    var n, i, a, r;
                    return x.a.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (t.isLogin) {
                                    e.next = 3;
                                    break
                                }
                                return null === (n = window.UserStatus) || void 0 === n || n.quickLogin(),
                                e.abrupt("return");
                            case 3:
                                if (!t.longPressing) {
                                    e.next = 5;
                                    break
                                }
                                return e.abrupt("return");
                            case 5:
                                return Object(F.a)({
                                    c: "right_resident_key_area",
                                    d: "like",
                                    e: "click",
                                    type: "click"
                                }, {
                                    msg: JSON.stringify({
                                        type: t.readViewInfo.like ? 0 : 1
                                    })
                                }),
                                e.prev = 6,
                                e.next = 9,
                                t.likeMethod(t.readViewInfo.like ? 2 : 1);
                            case 9:
                                if (i = e.sent,
                                a = i.code,
                                r = i.message,
                                0 === a) {
                                    e.next = 15;
                                    break
                                }
                                return t.$message.info(r, t.$refs.like, 2e3),
                                e.abrupt("return");
                            case 15:
                                t.readViewInfo.like ? (t.$message.info("取消点赞成功", t.$refs.like, 1e3),
                                t.readViewInfo.like = 0,
                                t.stats.like = t.stats.like - 1) : (t.stats.like = t.stats.like + 1,
                                t.readViewInfo.like = 1,
                                t.$message.info("点赞成功", t.$refs.like, 1e3)),
                                e.next = 21;
                                break;
                            case 18:
                                e.prev = 18,
                                e.t0 = e.catch(6),
                                t.$message.info("点赞失败", t.$refs.like, 1e3);
                            case 21:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[6, 18]])
                }
                )))()
            },
            setCoinState: function() {
                var t;
                this.isLogin ? (Object(F.a)({
                    c: "right_resident_key_area",
                    d: "coin",
                    e: "click",
                    type: "click"
                }),
                this.readViewInfo.coin ? this.$message.info("你已经投过币咯", this.$refs.coin) : this.dialogVisible = !0) : null === (t = window.UserStatus) || void 0 === t || t.quickLogin()
            },
            addCoin: function() {
                var t = this;
                return _()(x.a.mark((function e() {
                    var n, i, a, r;
                    return x.a.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0,
                                e.next = 3,
                                t.addCoinMethod();
                            case 3:
                                if (n = e.sent,
                                i = n.code,
                                a = n.message,
                                r = n.like,
                                0 === i) {
                                    e.next = 8;
                                    break
                                }
                                return t.$message.info(a, t.$refs.coin, 1e3),
                                e.abrupt("return");
                            case 8:
                                t.dialogVisible = !1,
                                t.$message.info("投币成功", t.$refs.coin, 1e3),
                                t.readViewInfo.coin = 1,
                                t.stats.coin = t.stats.coin + 1,
                                r && !t.readViewInfo.like && (t.readViewInfo.like = 1,
                                t.readViewInfo.like = t.readViewInfo.like + 1),
                                e.next = 18;
                                break;
                            case 15:
                                e.prev = 15,
                                e.t0 = e.catch(0),
                                t.$message.info("投币失败", t.$refs.coin, 1e3);
                            case 18:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[0, 15]])
                }
                )))()
            },
            setFavState: function() {
                var t = this;
                return _()(x.a.mark((function e() {
                    var n, i, a, r, o;
                    return x.a.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (Object(F.a)({
                                    c: "right_resident_key_area",
                                    d: "fav",
                                    e: "click",
                                    type: "click"
                                }, {
                                    msg: JSON.stringify({
                                        type: t.readViewInfo.favorite ? 0 : 1
                                    })
                                }),
                                !t.isLogin) {
                                    e.next = 20;
                                    break
                                }
                                return n = {
                                    add: t.addFavMethod,
                                    del: t.delFavMethod
                                },
                                e.prev = 3,
                                e.next = 6,
                                n[t.readViewInfo.favorite ? "del" : "add"]();
                            case 6:
                                if (i = e.sent,
                                a = i.code,
                                r = i.message,
                                0 === a) {
                                    e.next = 12;
                                    break
                                }
                                return t.$message.info(r, t.$refs.collect, 1e3),
                                e.abrupt("return");
                            case 12:
                                t.readViewInfo.favorite ? (t.$message.info("取消收藏成功", t.$refs.collect, 1e3),
                                t.readViewInfo.favorite = 0,
                                t.stats.favorite = t.stats.favorite - 1) : (t.$message.info("收藏成功", t.$refs.collect, 1e3),
                                t.readViewInfo.favorite = 1,
                                t.stats.favorite = t.stats.favorite + 1),
                                e.next = 18;
                                break;
                            case 15:
                                e.prev = 15,
                                e.t0 = e.catch(3),
                                t.$message.info("收藏失败", t.$refs.collect, 1e3);
                            case 18:
                                e.next = 21;
                                break;
                            case 20:
                                null === (o = window.UserStatus) || void 0 === o || o.quickLogin();
                            case 21:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[3, 15]])
                }
                )))()
            },
            comboFinish: function() {
                var t = this
                  , e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                "shake" === this.likeAnim && (this.likeAnim = ""),
                this.showLikeCombo = e,
                this.showCoinCombo = e,
                this.showFavCombo = e,
                Object(F.a)({
                    c: "right_resident_key_area",
                    d: "highlyrec",
                    e: "click",
                    type: "click"
                }, {
                    msg: JSON.stringify({
                        type: 1
                    })
                }),
                this.isJustCombo = !0,
                setTimeout((function() {
                    t.isJustCombo = !1
                }
                ), 2e3),
                this.longLikeArticle()
            },
            longLikeArticle: function() {
                var t = this;
                return _()(x.a.mark((function e() {
                    return x.a.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                Promise.all([!t.readViewInfo.like && t.likeMethod(1).then((function(e) {
                                    0 === e.code ? t.readViewInfo.like || (t.readViewInfo.like = 1,
                                    t.stats.like = t.stats.like + 1) : t.$message.info(e.message, t.$refs.like, 1e3)
                                }
                                )), t.readViewInfo.coin < 2 && t.addCoinMethod(2 - t.readViewInfo.coin).then((function(e) {
                                    0 === e.code ? (t.stats.coin = t.stats.coin + (2 - t.readViewInfo.coin),
                                    t.readViewInfo.coin = 2) : t.$message.info(e.message, t.$refs.coin, 1e3)
                                }
                                )), !t.readViewInfo.favorite && t.addFavMethod().then((function(e) {
                                    0 === e.code ? t.readViewInfo.favorite || (t.readViewInfo.favorite = 1,
                                    t.stats.favorite = t.stats.favorite + 1) : t.$message.info(e.message, t.$refs.fav, 1e3)
                                }
                                ))]).then((function() {
                                    t.readViewInfo.like && t.readViewInfo.coin && t.readViewInfo.favorite && setTimeout((function() {
                                        t.$message.info("成功！", t.$refs.like, 1e3)
                                    }
                                    ), 500)
                                }
                                )).catch((function() {
                                    t.$message.info("请检查网络后再试", t.$refs.like, 1e3)
                                }
                                ));
                            case 1:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )))()
            }
        }),
        mounted: function() {
            var t = this;
            this.initScrollListener(),
            this.$bus.$on("loaded", this.initReplyOffsetTop),
            z.a.watch((function(e) {
                var n;
                0 === e.code && (t.isLogin = null == e || null === (n = e.data) || void 0 === n ? void 0 : n.isLogin)
            }
            )),
            this.clientHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
            this.getCatalogList(),
            window.addEventListener("resize", (function() {
                t.clientHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
            }
            ))
        }
    }
      , xt = (n(274),
    Object(Z.a)(Tt, (function() {
        var t = this
          , e = t.$createElement
          , n = t._self._c || e;
        return n("div", {
            staticClass: "right-side-bar",
            class: {
                on: t.showBackTop,
                "is-mini-page": t.clientHeight && t.clientHeight < 780
            }
        }, [t.readInfo.list ? n("div", {
            staticClass: "catalog",
            on: {
                mouseenter: t.openCatelog,
                mouseleave: function(e) {
                    t.panelShow = !1
                }
            }
        }, [n("i", {
            staticClass: "iconfont icon-catalog"
        }), n("span", {
            staticClass: "catalog-text"
        }, [t._v("目录")]), t.panelShow ? n("div", {
            staticClass: "catalog-panel",
            style: {
                transform: t.clientHeight < 780 ? "translateY(-39%)" : "translateY(-50%)"
            }
        }, [n("a", {
            staticClass: "catalog-panel__header",
            attrs: {
                target: "_blank",
                href: "//www.bilibili.com/read/readlist/rl" + t.readInfo.list.id
            }
        }, [n("span", {
            staticClass: "catalog-panel__title"
        }, [t._v("目录")]), n("span", {
            staticClass: "catalog-panel__info"
        }, [t._v("来自文集：" + t._s(t.readInfo.list.name) + "\n          "), n("i", {
            staticClass: "iconfont icon-top"
        })])]), n("div", {
            ref: "catalogPanel",
            staticClass: "catalog-panel__list",
            style: {
                "max-height": t.clientHeight > 780 ? "573px" : "453px"
            }
        }, t._l(t.catalogList, (function(e, i) {
            return n("a", {
                key: i,
                staticClass: "catalog-item",
                class: {
                    "catalog-item--on": e.id === t.readInfo.id
                },
                attrs: {
                    href: "//www.bilibili.com/read/cv" + e.id
                },
                on: {
                    click: function(e) {
                        return t.reportClick("anthology_article")
                    }
                }
            }, [e.id === t.readInfo.id ? n("i", {
                staticClass: "iconfont icon-bilibili-tv"
            }) : n("span", {
                staticClass: "item-ul"
            }), n("span", {
                staticClass: "catalog-item__text"
            }, [t._v(t._s(e.title))])])
        }
        )), 0)]) : t._e()]) : t._e(), n("div", {
            staticClass: "side-toolbar"
        }, [n("div", {
            directives: [{
                name: "longClick",
                rawName: "v-longClick:800",
                value: t.startCombo,
                expression: "startCombo",
                arg: "800"
            }, {
                name: "longClickLeave",
                rawName: "v-longClickLeave",
                value: t.cancelCombo,
                expression: "cancelCombo"
            }],
            ref: "like",
            staticClass: "toolbar-item",
            class: {
                "toolbar-on": t.readViewInfo.like
            },
            on: {
                click: t.setLike
            }
        }, [t.readViewInfo.like ? n("i", {
            staticClass: "iconfont icon-like_p",
            class: {
                shake: "shake" === t.likeAnim
            }
        }) : n("i", {
            staticClass: "iconfont icon-like",
            class: {
                shake: "shake" === t.likeAnim
            }
        }), n("span", {
            staticClass: "toolbar-item__num"
        }, [t._v(t._s(t.formatNum(t.stats.like)))])]), n("div", {
            ref: "coin",
            staticClass: "toolbar-item",
            class: {
                "toolbar-on": t.readViewInfo.coin > 0
            },
            on: {
                click: t.setCoinState
            }
        }, [n("RingProgress", {
            ref: "progressCoin",
            attrs: {
                size: 35,
                left: 13,
                top: 7
            },
            on: {
                animFinish: t.comboFinish
            }
        }), t.showCoinCombo ? n("SVGA", {
            staticClass: "svga-center",
            attrs: {
                file: t.ComboCoin
            },
            on: {
                start: function(e) {
                    t.coinAmin = "combo"
                },
                finish: function(e) {
                    t.coinAnim = "",
                    t.showCoinCombo = !1
                }
            }
        }) : t._e(), t.readViewInfo.coin ? n("i", {
            staticClass: "iconfont icon-money_p"
        }) : n("i", {
            staticClass: "iconfont icon-money",
            class: {
                "hidden-icon": t.showCoinCombo
            }
        }), n("span", {
            staticClass: "toolbar-item__num"
        }, [t._v(t._s(t.formatNum(t.stats.coin)))])], 1), n("div", {
            ref: "collect",
            staticClass: "toolbar-item",
            class: {
                "toolbar-on": t.readViewInfo.favorite
            },
            on: {
                click: t.setFavState
            }
        }, [n("RingProgress", {
            ref: "progressFav",
            attrs: {
                size: 35,
                left: 13,
                top: 7
            }
        }), t.showFavCombo ? n("SVGA", {
            staticClass: "svga-center",
            attrs: {
                file: t.ComboFav
            },
            on: {
                start: function(e) {
                    t.favAnim = "combo"
                },
                finish: function(e) {
                    t.favAnim = "",
                    t.showFavCombo = !1
                }
            }
        }) : t._e(), t.readViewInfo.favorite ? n("i", {
            staticClass: "iconfont icon-collect_p"
        }) : n("i", {
            staticClass: "iconfont icon-collect",
            class: {
                "hidden-icon": t.showFavCombo
            }
        }), n("span", {
            staticClass: "toolbar-item__num"
        }, [t._v(t._s(t.formatNum(t.stats.favorite)))])], 1), n("div", {
            staticClass: "toolbar-item",
            on: {
                click: function(e) {
                    return t.reportClick("comments")
                }
            }
        }, [n("i", {
            staticClass: "iconfont icon-comment"
        }), n("span", {
            staticClass: "toolbar-item__num"
        }, [t._v(t._s(t.formatNum(t.commentCount)))]), t.replyOffsetTop ? n("div", {
            directives: [{
                name: "van-backtop",
                rawName: "v-van-backtop",
                value: t.replyOffsetTop,
                expression: "replyOffsetTop"
            }],
            staticClass: "comment-btn"
        }) : t._e()])]), n("div", {
            directives: [{
                name: "van-backtop",
                rawName: "v-van-backtop",
                value: 0,
                expression: "0"
            }],
            staticClass: "to-top",
            on: {
                click: function(e) {
                    return t.reportClick("top")
                }
            }
        }, [n("i", {
            staticClass: "iconfont icon-top"
        })]), n("Dialog", {
            attrs: {
                show: t.dialogVisible
            },
            on: {
                close: function(e) {
                    t.dialogVisible = !1
                }
            }
        }, [n("CoinDialog", {
            on: {
                close: function(e) {
                    t.dialogVisible = !1
                },
                addCoin: t.addCoin
            }
        })], 1)], 1)
    }
    ), [], !1, null, "ed0b497e", null).exports)
      , Dt = n(16);
    function Nt(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(t);
            e && (i = i.filter((function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }
            ))),
            n.push.apply(n, i)
        }
        return n
    }
    var At = {
        name: "RecommendList",
        components: {
            CardImage: Dt.a
        },
        computed: function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? Nt(Object(n), !0).forEach((function(e) {
                    q()(t, e, n[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Nt(Object(n)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }
                ))
            }
            return t
        }({}, Object(M.d)(["recommendInfoList"])),
        data: function() {
            return {
                categoriesMap: Q.a,
                formatNum: F.f
            }
        },
        methods: {
            handelCardShow: function() {
                Object(F.a)({
                    c: "article_bottom",
                    d: "related_recommendations",
                    e: "show",
                    type: "appear"
                })
            },
            reportOpenArticle: function() {
                Object(F.a)({
                    c: "article_bottom",
                    d: "related_recommendations",
                    e: "click",
                    type: "click"
                })
            },
            openLink: function(t) {
                window.open(t)
            }
        }
    }
      , Jt = (n(276),
    Object(Z.a)(At, (function() {
        var t = this
          , e = t.$createElement
          , n = t._self._c || e;
        return n("div", {
            directives: [{
                name: "livelazyload",
                rawName: "v-livelazyload",
                value: t.handelCardShow,
                expression: "handelCardShow"
            }],
            staticClass: "recommend-list report-wrap-module",
            attrs: {
                id: "readRecommendInfo"
            }
        }, [t._m(0), n("div", {
            staticClass: "recommend-article-list"
        }, t._l(t.recommendInfoList, (function(e, i) {
            return n("a", {
                key: i,
                staticClass: "article-item",
                attrs: {
                    target: "_blank",
                    href: "//www.bilibili.com/read/cv" + e.id + "?from=articleDetail"
                },
                on: {
                    click: t.reportOpenArticle
                }
            }, [n("div", {
                staticClass: "left-panel"
            }, [n("div", {
                staticClass: "article-title",
                attrs: {
                    title: e.title
                }
            }, [t._v(t._s(e.title))]), n("div", {
                staticClass: "article-desc",
                attrs: {
                    title: e.summary
                }
            }, [t._v(t._s(e.summary || "--"))]), n("div", {
                staticClass: "article-info"
            }, [n("span", {
                staticClass: "article-info--up",
                on: {
                    click: function(n) {
                        return n.preventDefault(),
                        t.openLink("//space.bilibili.com/" + e.author.mid)
                    }
                }
            }, [n("CardImage", {
                staticClass: "article-info--cover",
                attrs: {
                    src: e.author.face,
                    width: 24,
                    height: 24,
                    radius: 24
                }
            }), n("span", [t._v(t._s(e.author.name))])], 1), n("div", {
                staticClass: "article-info--stats"
            }, [n("span", {
                staticClass: "stats-categroy",
                attrs: {
                    target: "_blank"
                },
                on: {
                    click: function(n) {
                        return n.stopPropagation(),
                        t.openLink("//www.bilibili.com" + t.categoriesMap[e.category.parent_id] + "?from=articleDetail")
                    }
                }
            }, [t._v("\n              " + t._s(e.category.name) + "\n            ")]), n("span", {
                staticClass: "stats-item"
            }, [n("i", {
                staticClass: "iconfont icon-zhuanlanka_yueduliang"
            }), t._v("\n              " + t._s(t.formatNum(e.stats.view)) + "\n            ")]), n("span", {
                staticClass: "stats-item"
            }, [n("i", {
                staticClass: "iconfont icon-zhuanlanka_xihuan"
            }), t._v("\n              " + t._s(t.formatNum(e.stats.like)) + "\n            ")]), n("span", {
                staticClass: "stats-item"
            }, [n("i", {
                staticClass: "iconfont icon-zhuanlanka_pinglun"
            }), t._v("\n              " + t._s(t.formatNum(e.stats.reply)) + "\n            ")])])])]), n("div", {
                staticClass: "right-panel"
            }, [n("CardImage", {
                attrs: {
                    src: e.banner_url || e.image_urls[0],
                    width: 117,
                    height: 88,
                    radius: 4
                }
            })], 1)])
        }
        )), 0)])
    }
    ), [function() {
        var t = this.$createElement
          , e = this._self._c || t;
        return e("div", {
            staticClass: "recommend-header"
        }, [e("div", {
            staticClass: "title"
        }, [this._v("\n      推荐文章\n    ")]), e("a", {
            staticClass: "more",
            attrs: {
                target: "_blank",
                href: "//www.bilibili.com/read/home"
            }
        }, [e("span", [this._v("更多精彩内容")]), e("i", {
            staticClass: "iconfont icon-top"
        })])])
    }
    ], !1, null, null, null).exports);
    function Et(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(t);
            e && (i = i.filter((function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }
            ))),
            n.push.apply(n, i)
        }
        return n
    }
    var Pt = {
        name: "BangumiRate",
        components: {
            CardImage: Dt.a
        },
        computed: function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? Et(Object(n), !0).forEach((function(e) {
                    q()(t, e, n[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Et(Object(n)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }
                ))
            }
            return t
        }({}, Object(M.d)(["readInfo"]))
    }
      , St = (n(277),
    Object(Z.a)(Pt, (function() {
        var t = this
          , e = t.$createElement
          , n = t._self._c || e;
        return n("a", {
            staticClass: "bangumi-rate-panel",
            attrs: {
                target: "_blank",
                href: "//www.bilibili.com/bangumi/play/ss" + t.readInfo.media.season_id
            }
        }, [n("CardImage", {
            staticClass: "cover",
            attrs: {
                src: t.readInfo.media.cover,
                width: 51,
                height: 68,
                radius: 2
            }
        }), n("div", {
            staticClass: "info"
        }, [n("span", {
            staticClass: "title"
        }, [t._v(t._s(t.readInfo.media.title))]), n("div", {
            staticClass: "desc"
        }, [n("span", [t._v(t._s(t.readInfo.media.area))]), t._v(" |\n      "), n("span", [t._v(t._s(t.readInfo.media.type_name))])]), n("van-rate", {
            attrs: {
                disabled: "",
                value: t.readInfo.media.score / 2
            }
        })], 1)], 1)
    }
    ), [], !1, null, "24b51097", null).exports)
      , Vt = n(53);
    function Lt(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(t);
            e && (i = i.filter((function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }
            ))),
            n.push.apply(n, i)
        }
        return n
    }
    function Rt(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? Lt(Object(n), !0).forEach((function(e) {
                q()(t, e, n[e])
            }
            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Lt(Object(n)).forEach((function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }
            ))
        }
        return t
    }
    var Ht = {
        components: {
            ReadInfo: mt.a,
            UpInfo: W.a,
            InteractionInfo: ut,
            ArticleContent: ft.a,
            CommentInfo: vt,
            SideBar: xt,
            RecommendList: Jt,
            CardImage: Dt.a,
            BangumiRate: St,
            FollowBtn: Vt.a
        },
        computed: Rt(Rt({}, Object(M.d)(["readInfo", "cvid", "readViewInfo", "actInfo", "recommendInfoList", "query"])), {}, {
            firstCategoryLink: function() {
                var t = this.readInfo.category;
                return "//www.bilibili.com".concat(this.categoriesMap[t.parent_id], "?from=articleDetail")
            },
            secondCategoryLink: function() {
                var t = this.readInfo.category;
                return "//www.bilibili.com".concat(this.categoriesMap[t.parent_id], "#rid=").concat(t.id, "?from=articleDetail")
            },
            channel1: function() {
                return this.readInfo.categories[0] && this.readInfo.categories[0].name
            },
            channel2: function() {
                return this.readInfo.categories[1] && this.readInfo.categories[1].name
            },
            disputeInfo: function() {
                if (!this.readInfo.dispute)
                    return {};
                return Rt(Rt({}, this.readInfo.dispute), {}, {
                    isLink: /^http(s)?:\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/gi.test(this.readInfo.dispute && this.readInfo.dispute.dispute_url)
                })
            }
        }),
        metaInfo: function() {
            var t = this.readInfo.banner_url || (this.readInfo.origin_image_urls || [])[0];
            return {
                title: this.readInfo.title || "哔哩哔哩专栏",
                titleTemplate: "%s - 哔哩哔哩",
                htmlAttrs: {
                    lang: "zh"
                },
                meta: [{
                    name: "description",
                    content: Object(F.j)(this.readInfo.summary)
                }, {
                    name: "author",
                    content: this.readInfo.author && this.readInfo.author.name
                }, {
                    name: "keywords",
                    content: Object(F.j)(this.readInfo.keywords)
                }, {
                    "data-n-head": "true",
                    "data-hid": "og:title",
                    property: "og:title",
                    content: Object(F.j)(this.readInfo.title)
                }, {
                    "data-n-head": "true",
                    "data-hid": "og:image",
                    property: "og:image",
                    content: Object(F.j)(t)
                }, {
                    "data-n-head": "true",
                    "data-hid": "og:url",
                    property: "og:url",
                    content: "http://www.bilibili.com/read/cv".concat(this.cvid)
                }],
                link: [{
                    rel: "canonical",
                    href: "https://www.bilibili.com/read/cv".concat(this.cvid, "/")
                }, {
                    rel: "alternate",
                    media: "only screen and (max-width: 640px)",
                    href: "https://www.bilibili.com/read/mobile?id=".concat(this.cvid)
                }],
                __dangerouslyDisableSanitizers: ["meta", "link"]
            }
        },
        data: function() {
            return {
                fixedHeaderShow: !1,
                categoriesMap: Q.a,
                view: {
                    mid: 0,
                    title: ""
                },
                readCount: 0,
                upInfo: null,
                recommendList: [],
                isHidden: !1,
                isDocumentHidden: null,
                userInfo: null,
                joinedAct: null
            }
        },
        mounted: function() {
            var t = this;
            return _()(x.a.mark((function e() {
                var n, i, a, r;
                return x.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            z.a.get();
                        case 2:
                            n = e.sent,
                            i = n.data,
                            t.userInfo = i,
                            i.isLogin || z.a.watch((function(t) {
                                0 === t.code && window.location.reload()
                            }
                            )),
                            document.addEventListener("visibilitychange", (function() {
                                t.isDocumentHidden = document.hidden
                            }
                            )),
                            t.loadedEvents(),
                            document.addEventListener("scroll", (function() {
                                t.fixedHeaderShow = window.pageYOffset > 320
                            }
                            )),
                            window.performance && window.performance.timing && window.performance.timing.navigationStart && (a = performance.getEntries && performance.getEntriesByName("first-paint")[0] ? Math.round(performance.getEntriesByName("first-paint")[0].startTime) : 0,
                            performance.timing.firstscreenfinish = performance.timing.playerStage3 || performance.timing.mediaLoaded,
                            window.reportObserver && reportObserver.sendPerformance(),
                            r = {
                                fp: a,
                                mounted: Date.now() - performance.timing.navigationStart,
                                visible: "visible" === document.visibilityState,
                                degrade: void 0 === window.__INITIAL_STATE__
                            },
                            Object(F.d)("article_performance", r)),
                            t.query.jump_opus && t.$router.push({
                                query: Rt(Rt({}, t.$route.query || {}), t.query)
                            });
                        case 11:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))()
        },
        methods: Rt(Rt(Rt({}, Object(M.b)({
            loadRecommendData: "LOAD_RECOMMEND_DATA",
            loadReadViewData: "LOAD_READ_VIEW_DATA",
            setActInfo: "SET_ACT_INFO"
        })), Object(M.c)(["setUpInfo"])), {}, {
            loadedEvents: function() {
                var t, e = this;
                this.loadReadViewData({
                    id: this.cvid
                }),
                this.setActInfo(),
                this.checkIsJoinedActivity(null === (t = this.readInfo) || void 0 === t ? void 0 : t.act_id, this.cvid),
                this.$refs.articleContent && this.$refs.articleContent.initObserves(),
                this.initReprint(),
                this.$nextTick((function() {
                    e.initOtherEvents()
                }
                ))
            },
            contentLoaded: function() {
                var t = this;
                this.$refs.articleContent && this.$refs.articleContent.initObserves(),
                this.$nextTick((function() {
                    t.$bus.$emit("loaded")
                }
                ))
            },
            initReport: function() {
                var t = this;
                this.sendReport(),
                setTimeout((function() {
                    t.initReport()
                }
                ), 5e3)
            },
            initOtherEvents: function() {
                for (var t = document.querySelectorAll("[contenteditable]"), e = 0; e < t.length; e++)
                    t[e].setAttribute("contenteditable", !1)
            },
            sendReport: function() {
                this.isDocumentHidden || this.$axios({
                    method: "get",
                    url: "//api.bilibili.com/x/article/read/ping",
                    query: {
                        aid: this.cvid || 0,
                        source: this.$route.query || "web"
                    },
                    withCredentials: !0
                })
            },
            initReprint: function() {
                var t, e = this;
                null === (t = document.getElementById("article-content")) || void 0 === t || t.addEventListener("copy", (function(t) {
                    var n = window.getSelection().toString()
                      , i = e.readInfo.author.name
                      , a = "".concat(n, " 作者：").concat(i, " ").concat(window.location.href, " 出处：bilibili");
                    t.clipboardData.setData("text/plain", n),
                    t.preventDefault(),
                    t.stopPropagation()
                }
                ))
            },
            getUpInfo: function() {
                var t = this;
                return _()(x.a.mark((function e() {
                    var n, i;
                    return x.a.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                t.$axios({
                                    method: "get",
                                    url: "//api.bilibili.com/x/web-interface/card",
                                    query: {
                                        mid: t.readInfo.author.mid,
                                        article: !0
                                    },
                                    withCredentials: !0
                                });
                            case 2:
                                n = e.sent,
                                0 === (i = n.data).code && (t.upInfo = i.data);
                            case 5:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )))()
            },
            reportUpClick: function() {
                Object(F.a)({
                    c: "article_top",
                    d: "author_information",
                    e: "click",
                    type: "click"
                })
            },
            reportTagClick: function() {
                Object(F.a)({
                    c: "article_bottom",
                    d: "article_tag",
                    e: "click",
                    type: "click"
                })
            },
            checkIsJoinedActivity: function(t, e) {
                var n = this;
                (t = parseInt(t)) > 0 && Object(D.b)(t, e).then((function(t) {
                    if (0 === t.code && t.data) {
                        if (0 === t.data.lid)
                            return;
                        n.joinedAct = t.data
                    }
                }
                ))
            }
        }),
        asyncData: function(t) {
            var e, n = t.store, i = t.context, a = t.route.params.cvid || (null === (e = i.query) || void 0 === e ? void 0 : e.id);
            i || (i = {}),
            i.id = a,
            i.appname = ["article.service"];
            try {
                return Promise.all([n.dispatch("LOAD_READ_DATA", i), n.dispatch("LOAD_RECOMMEND_DATA", i)])
            } catch (t) {
                return Promise.reject(t)
            }
        }
    }
      , qt = (n(278),
    Object(Z.a)(Ht, (function() {
        var t = this
          , e = t.$createElement
          , n = t._self._c || e;
        return n("div", {
            staticClass: "article-detail"
        }, [n("transition", {
            attrs: {
                name: "fade",
                mode: "out-in"
            }
        }, [n("div", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: t.fixedHeaderShow,
                expression: "fixedHeaderShow"
            }],
            staticClass: "fixed-top-header"
        }, [n("div", {
            staticClass: "inner"
        }, [n("p", {
            staticClass: "inner-title",
            attrs: {
                title: t.readInfo.title
            }
        }, [t._v(t._s(t.readInfo.title))]), n("div", {
            staticClass: "inner-right"
        }, [n("a", {
            staticClass: "up-info",
            attrs: {
                href: "//space.bilibili.com/" + t.readInfo.author.mid,
                target: "_blank"
            },
            on: {
                click: t.reportUpClick
            }
        }, [n("CardImage", {
            staticClass: "author-face",
            attrs: {
                src: t.readInfo.author.face,
                width: 28,
                height: 28,
                radius: 28
            }
        }), n("span", {
            staticClass: "up-info__name",
            attrs: {
                title: t.readInfo.author.name
            }
        }, [t._v(t._s(t.readInfo.author.name))])], 1), n("FollowBtn", {
            attrs: {
                width: 73,
                height: 26,
                mid: t.readInfo.author.mid
            }
        })], 1)])])]), n("div", {
            staticClass: "article-breadcrumb"
        }, [n("a", {
            staticClass: "breadcrumb-name",
            attrs: {
                href: "//www.bilibili.com/read/home?from=articleDetail",
                target: "_self"
            }
        }, [t._v("专栏")]), n("span", {
            staticClass: "slash"
        }, [t._v("/")]), (t.channel1,
        t._e()), (t.channel1,
        t._e()), (t.channel2,
        t._e()), (t.channel2,
        t._e()), n("span", {
            staticClass: "breadcrumb-name breadcrumb-title"
        }, [t._v(t._s(t.readInfo.title))])]), n("div", {
            staticClass: "article-container"
        }, [n("div", {
            staticClass: "article-container__content"
        }, [n("div", {
            staticClass: "title-container"
        }, [n("h1", {
            staticClass: "title"
        }, [t.joinedAct ? n("a", {
            staticClass: "joined-activity",
            attrs: {
                href: t.joinedAct.act_url,
                target: "_blank"
            }
        }, [t._v("活动")]) : t._e(), t._v(t._s(t.readInfo.title) + "\n        ")]), t.disputeInfo.dispute ? n("div", {
            staticClass: "duspute-box"
        }, [t.disputeInfo.isLink ? n("a", {
            staticClass: "d-f ali-c duspute-ctnr",
            attrs: {
                href: t.disputeInfo.dispute_url,
                target: "_blank"
            }
        }, [n("i", {
            staticClass: "read-icon read-icon-info-warning duspute-icon"
        }), n("span", {
            staticClass: "v-f duspute-text",
            domProps: {
                textContent: t._s(t.disputeInfo.dispute)
            }
        }), n("i", {
            staticClass: "read-icon read-icon-arrow-right duspute-icon"
        })]) : n("div", {
            staticClass: "d-f ali-c duspute-ctnr"
        }, [n("i", {
            staticClass: "read-icon read-icon-info-warning duspute-icon"
        }), n("span", {
            staticClass: "duspute-text",
            domProps: {
                textContent: t._s(t.disputeInfo.dispute)
            }
        })])]) : t._e(), n("ReadInfo", {
            attrs: {
                info: t.readInfo
            }
        })], 1), n("UpInfo", {
            attrs: {
                viewInfo: t.view
            }
        }), t.readInfo.banner_url || t.readInfo.media.media_id ? n("div", {
            staticClass: "banner-container"
        }, [t.readInfo.banner_url ? n("CardImage", {
            staticClass: "banner-image",
            attrs: {
                src: t.readInfo.banner_url,
                width: 660,
                height: 370,
                radius: 4
            }
        }) : t._e(), t.readInfo.media.media_id ? n("BangumiRate") : t._e()], 1) : t._e(), n("div", {
            staticClass: "title-line"
        }), n("ArticleContent", {
            ref: "articleContent",
            on: {
                loaded: t.contentLoaded
            }
        }), n("div", {
            staticClass: "article-footer-box"
        }, [2 !== t.readInfo.type ? [1 === t.readInfo.original ? n("span", {
            staticClass: "footer-text"
        }, [t._v("本文为我原创")]) : t._e(), 0 === t.readInfo.reprint ? n("span", {
            staticClass: "footer-text"
        }, [t._v("本文禁止转载或摘编")]) : t._e()] : t._e(), t.readInfo.tags && t.readInfo.tags.length ? n("div", {
            staticClass: "article-tags"
        }, [n("i", {
            staticClass: "iconfont icon-tag"
        }), t._l(t.readInfo.tags, (function(e, i) {
            return n("a", {
                key: i,
                staticClass: "tag-item",
                attrs: {
                    href: "//search.bilibili.com/article?keyword=" + e.name + "&from_source=article",
                    target: "_blank"
                },
                on: {
                    click: t.reportTagClick
                }
            }, [t._v("\n            " + t._s(e.name) + "\n          ")])
        }
        ))], 2) : t._e()], 2)], 1), n("InteractionInfo", {
            attrs: {
                viewInfo: t.readViewInfo
            }
        })], 1), t._l(t.actInfo.banners, (function(t, e) {
            return n("a", {
                key: e,
                staticClass: "activty-image",
                attrs: {
                    target: "_blank",
                    href: t.url
                }
            }, [n("CardImage", {
                attrs: {
                    src: t.image,
                    width: 900,
                    height: 125,
                    radius: 4
                }
            })], 1)
        }
        )), t.recommendInfoList && t.recommendInfoList.length ? n("RecommendList") : t._e(), t.readInfo && t.readInfo.stats ? n("CommentInfo", {
            ref: "comment",
            attrs: {
                cvid: Number(t.cvid),
                userInfo: t.userInfo
            }
        }) : t._e(), n("SideBar", {
            attrs: {
                commentCount: t.readInfo && t.readInfo.stats && t.readInfo.stats.reply
            }
        })], 2)
    }
    ), [], !1, null, null, null).exports);
    function Gt(t) {
        if ("function" != typeof WeakMap)
            return null;
        var e = new WeakMap
          , n = new WeakMap;
        return (Gt = function(t) {
            return t ? n : e
        }
        )(t)
    }
    function zt(t, e) {
        if (!e && t && t.__esModule)
            return t;
        if (null === t || "object" !== L()(t) && "function" != typeof t)
            return {
                default: t
            };
        var n = Gt(e);
        if (n && n.has(t))
            return n.get(t);
        var i = {}
          , a = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var r in t)
            if ("default" !== r && Object.prototype.hasOwnProperty.call(t, r)) {
                var o = a ? Object.getOwnPropertyDescriptor(t, r) : null;
                o && (o.get || o.set) ? Object.defineProperty(i, r, o) : i[r] = t[r]
            }
        return i.default = t,
        n && n.set(t, i),
        i
    }
    C.default.use(R.a);
    var Qt = function() {
        return new R.a({
            mode: "history",
            routes: [{
                path: "/read/cv:cvid",
                component: qt
            }, {
                path: "/read/preview/:cvid",
                component: function() {
                    return Promise.resolve().then((function() {
                        return zt(n(297))
                    }
                    ))
                }
            }, {
                path: "/read/pcpreview",
                component: function() {
                    return Promise.resolve().then((function() {
                        return zt(n(298))
                    }
                    ))
                }
            }]
        })
    }
      , Ft = (n(281),
    Object(Z.a)({}, (function() {
        var t = this.$createElement
          , e = this._self._c || t;
        return e("div", {
            attrs: {
                id: "app"
            }
        }, [e("router-view")], 1)
    }
    ), [], !1, null, null, null).exports)
      , Wt = n(73)
      , Yt = {
        "zh-CN": n(52),
        "zh-TW": n(152)
    }
      , Bt = n(9);
    C.default.use(Wt.a);
    var Zt = null
      , Xt = function(t) {
        return Zt || (Zt = new Wt.a({
            fallbackLocale: "zh-CN",
            locale: t,
            messages: Yt
        }),
        C.default.filter("t", (function(t, e, n) {
            return e ? Zt.t(e, q()({}, n, t)) : ""
        }
        )),
        C.default.prototype.$rLangs = Object(Bt.a)(Zt),
        C.default.prototype.$i18nLocale = t),
        Zt
    };
    n(282),
    n(283),
    n(284),
    n(285);
    C.default.use(j.a);
    var Kt = n(37)
      , $t = n(153)
      , te = n.n($t)
      , ee = (n(286),
    n(154));
    function ne(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(t);
            e && (i = i.filter((function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }
            ))),
            n.push.apply(n, i)
        }
        return n
    }
    function ie(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? ne(Object(n), !0).forEach((function(e) {
                q()(t, e, n[e])
            }
            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : ne(Object(n)).forEach((function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }
            ))
        }
        return t
    }
    var ae = {
        install: function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (!t.prototype.$isServer) {
                var n = ie({
                    preload: 0
                }, e)
                  , i = []
                  , a = "function" == typeof window.IntersectionObserver
                  , r = window.IntersectionObserver && new window.IntersectionObserver((function(t) {
                    t.forEach((function(t) {
                        var e = t.intersectionRatio
                          , n = t.isIntersecting
                          , i = t.target;
                        e <= 0 || !n || !i || (i.__lazy_handler__ && i.__lazy_handler__(),
                        delete i.__lazy_handler__,
                        r.unobserve(i))
                    }
                    ))
                }
                ))
                  , o = function(t) {
                    !a && Object(F.b)(t, n.preload) && (t.__lazy_handler__ && t.__lazy_handler__(),
                    l(t))
                }
                  , c = Object(F.h)(200, (function() {
                    i.map(o)
                }
                ))
                  , s = function(t) {
                    a ? r.observe(t) : (i.push(t),
                    Object(F.g)(t).addEventListener("resize", c))
                }
                  , l = function(t) {
                    if (a)
                        r.unobserve(t);
                    else
                        for (var e = 0, n = i.length; e < n; e++)
                            if (i[e] === t) {
                                i.splice(e, 1),
                                delete t.__lazy_handler__;
                                break
                            }
                };
                t.directive("livelazyload", {
                    bind: function(t, e) {
                        t.__lazy_handler__ = e.value,
                        s(t)
                    },
                    inserted: function(t) {
                        o(t)
                    },
                    unbind: function(t) {
                        l(t)
                    }
                })
            }
        }
    };
    function re(t) {
        "string" == typeof t ? Object(F.d)(t) : Object(F.d)(t.name, t.ops)
    }
    C.default.directive("mouse-movieclip", {
        bind: function(t, e) {
            var n = e.value
              , i = 0
              , a = 0
              , r = !1
              , o = n.target ? $(t).find(n.target) : $(t)
              , c = n.direction ? n.direction : "x"
              , s = n.speed ? n.speed : 80;
            t.addEventListener("mouseenter", (function() {
                r = !0,
                a = 0,
                clearInterval(t.timer);
                var e = {};
                t.timer = setInterval((function() {
                    i = -a * n.step,
                    "x" === c && (e = {
                        "background-position-x": i
                    }),
                    "y" === c && (e = {
                        "background-position-y": i
                    }),
                    $(o).css(e),
                    r ? ++a > n.max - 1 && (a = n.point) : --a < 0 && clearInterval(t.timer)
                }
                ), s)
            }
            )),
            t.addEventListener("mouseleave", (function() {
                r = !1
            }
            ))
        }
    }),
    C.default.directive("longClick", {
        bind: function(t, e) {
            t.addEventListener("mousedown", (function() {
                t.isPressing = !0;
                var n = e.value;
                t.timer = setTimeout((function() {
                    t.isPressing && n()
                }
                ), e.arg)
            }
            ))
        }
    }),
    C.default.directive("longClickLeave", {
        bind: function(t, e) {
            t.addEventListener("mouseup", (function() {
                t.isPressing && (clearTimeout(t.timer),
                t.isPressing = !1,
                e.value())
            }
            )),
            t.addEventListener("mouseleave", (function() {
                t.isPressing && (clearTimeout(t.timer),
                t.isPressing = !1,
                e.value())
            }
            ))
        }
    }),
    C.default.directive("report", {
        bind: function(t, e) {
            t.addEventListener(e.arg, (function() {
                var t = e.value;
                t instanceof Array ? t.forEach((function(t) {
                    return re(t)
                }
                )) : re(t),
                e.modifiers.self && window.reportObserver.forceCommit()
            }
            ))
        }
    }),
    C.default.directive("focus", {
        inserted: function(t) {
            t.focus()
        }
    }),
    C.default.use(w.a),
    C.default.use(g.a),
    C.default.use(h.a),
    C.default.use(v.a),
    C.default.use(f.a),
    C.default.use(d.a),
    C.default.use(s.a),
    C.default.component("NewEditorWebView", ee.WebRender),
    C.default.prototype.$message = o.a,
    C.default.prototype.$axios = a.a,
    C.default.use(te.a),
    C.default.prototype.$bus = Kt.a,
    C.default.use(ae),
    C.default.mixin({
        beforeRouteUpdate: function(t, e, n) {
            var i = this.$options.asyncData;
            i ? i({
                store: this.$store,
                route: t
            }).then(n).catch(n) : n()
        }
    });
    var oe = function() {
        var t = S()
          , e = Qt()
          , n = Xt("zh-CN");
        return {
            app: new C.default({
                store: t,
                router: e,
                i18n: n,
                render: function(t) {
                    return t(Ft)
                }
            }),
            router: e,
            store: t
        }
    }()
      , ce = oe.app
      , se = oe.router
      , le = oe.store;
    se.onReady((function() {
        if (window.__INITIAL_STATE__)
            le.replaceState(window.__INITIAL_STATE__);
        else {
            var t = se.getMatchedComponents()
              , e = se.currentRoute;
            if (!t) {
                var n = new Error("404 Not Found");
                throw n.status = 404,
                n
            }
            Promise.all(t.map((function(t) {
                return t.asyncData && t.asyncData({
                    store: le,
                    context: {},
                    route: e
                })
            }
            ))).then((function() {
                ce.$mount("#article-web-app")
            }
            )).catch((function(t) {
                console.error(t)
            }
            ))
        }
        window && window.document.getElementById("app") && ce.$mount("#app")
    }
    ))
}
, function(t, e, n) {
    n.r(e);
    var i = n(7)
      , a = n.n(i)
      , r = n(35)
      , o = n(36)
      , c = n(34)
      , s = n(16)
      , l = n(5);
    function d(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(t);
            e && (i = i.filter((function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }
            ))),
            n.push.apply(n, i)
        }
        return n
    }
    function u(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? d(Object(n), !0).forEach((function(e) {
                a()(t, e, n[e])
            }
            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : d(Object(n)).forEach((function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }
            ))
        }
        return t
    }
    var f = {
        components: {
            ArticleContent: r.a,
            ReadInfoComponent: o.a,
            UpInfoComponent: c.a,
            CardImage: s.a
        },
        data: function() {
            return {
                showTips: !0
            }
        },
        computed: u({}, Object(l.d)(["readInfo"])),
        mounted: function() {
            this.loadPreviewData({
                id: this.$route.params.cvid
            })
        },
        methods: u(u({}, Object(l.b)({
            loadPreviewData: "LOAD_PREVIEW_DATA"
        })), {}, {
            contentLoaded: function() {
                this.$refs.articleContent && this.$refs.articleContent.initObserves()
            }
        })
    }
      , p = (n(279),
    n(3))
      , v = Object(p.a)(f, (function() {
        var t = this
          , e = t.$createElement
          , n = t._self._c || e;
        return n("div", {
            staticClass: "article-web-preview"
        }, [t.showTips ? n("div", {
            staticClass: "promote-hint"
        }, [n("span", [t._v("此链接为预览，仅您自己可见")]), n("span", {
            staticClass: "close-hint",
            on: {
                click: function(e) {
                    t.showTips = !1
                }
            }
        }, [t._v("知道了")])]) : t._e(), n("div", {
            staticClass: "article-preview-detail pc"
        }, [t.readInfo.id ? n("div", {
            staticClass: "article-container article-preview-container"
        }, [n("div", {
            staticClass: "article-container__content article-preview-container__content"
        }, [n("div", {
            staticClass: "title-container"
        }, [n("h1", {
            staticClass: "title"
        }, [t._v("\n            " + t._s(t.readInfo.title) + "\n          ")]), n("ReadInfoComponent", {
            attrs: {
                info: t.readInfo
            }
        })], 1), t.readInfo.banner_url || t.readInfo.media && t.readInfo.media.media_id ? n("div", {
            staticClass: "banner-container"
        }, [t.readInfo.banner_url ? n("CardImage", {
            staticClass: "banner-image",
            attrs: {
                src: t.readInfo.banner_url,
                radius: 4
            }
        }) : t._e(), t.readInfo.media && t.readInfo.media.media_id ? n("BangumiRate") : t._e()], 1) : t._e(), n("div", {
            staticClass: "title-line"
        }), n("ArticleContent", {
            ref: "articleContent",
            on: {
                loaded: t.contentLoaded
            }
        }), 2 !== t.readInfo.type ? n("div", {
            staticClass: "article-footer-box"
        }, [1 === t.readInfo.original ? n("span", {
            staticClass: "footer-text"
        }, [t._v("本文为我原创")]) : t._e(), 0 === t.readInfo.reprint ? n("span", {
            staticClass: "footer-text"
        }, [t._v("本文禁止转载或摘编")]) : t._e()]) : t._e()], 1)]) : t._e()])])
    }
    ), [], !1, null, null, null);
    e.default = v.exports
}
, function(t, e, n) {
    n.r(e);
    var i = n(7)
      , a = n.n(i)
      , r = n(35)
      , o = n(36)
      , c = n(34)
      , s = n(16)
      , l = n(5);
    function d(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(t);
            e && (i = i.filter((function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }
            ))),
            n.push.apply(n, i)
        }
        return n
    }
    function u(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? d(Object(n), !0).forEach((function(e) {
                a()(t, e, n[e])
            }
            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : d(Object(n)).forEach((function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }
            ))
        }
        return t
    }
    var f = {
        components: {
            ArticleContent: r.a,
            ReadInfoComponent: o.a,
            UpInfoComponent: c.a,
            CardImage: s.a
        },
        data: function() {
            return {
                showTips: !0
            }
        },
        computed: u({}, Object(l.d)(["readInfo"])),
        mounted: function() {
            this.loadPreviewData({
                id: this.$route.query.aid
            })
        },
        methods: u(u({}, Object(l.b)({
            loadPreviewData: "LOAD_DRAFT_DATA"
        })), {}, {
            contentLoaded: function() {
                this.$refs.articleContent && this.$refs.articleContent.initObserves()
            }
        })
    }
      , p = (n(280),
    n(3))
      , v = Object(p.a)(f, (function() {
        var t = this
          , e = t.$createElement
          , n = t._self._c || e;
        return n("div", {
            staticClass: "article-web-preview"
        }, [t.showTips ? n("div", {
            staticClass: "promote-hint"
        }, [n("span", [t._v("此链接为预览，仅您自己可见")]), n("span", {
            staticClass: "close-hint",
            on: {
                click: function(e) {
                    t.showTips = !1
                }
            }
        }, [t._v("知道了")])]) : t._e(), n("div", {
            staticClass: "article-draft-detail pc"
        }, [t.readInfo.id ? n("div", {
            staticClass: "article-container article-preview-container"
        }, [n("div", {
            staticClass: "article-container__content article-preview-container__content"
        }, [n("div", {
            staticClass: "title-container"
        }, [n("h1", {
            staticClass: "title"
        }, [t._v("\n            " + t._s(t.readInfo.title) + "\n          ")]), n("ReadInfoComponent", {
            attrs: {
                info: t.readInfo
            }
        })], 1), t.readInfo.banner_url || t.readInfo.media && t.readInfo.media.media_id ? n("div", {
            staticClass: "banner-container"
        }, [t.readInfo.banner_url ? n("CardImage", {
            staticClass: "banner-image",
            attrs: {
                src: t.readInfo.banner_url,
                radius: 4
            }
        }) : t._e(), t.readInfo.media && t.readInfo.media.media_id ? n("BangumiRate") : t._e()], 1) : t._e(), n("div", {
            staticClass: "title-line"
        }), n("ArticleContent", {
            ref: "articleContent",
            on: {
                loaded: t.contentLoaded
            }
        }), 2 !== t.readInfo.type ? n("div", {
            staticClass: "article-footer-box"
        }, [1 === t.readInfo.original ? n("span", {
            staticClass: "footer-text"
        }, [t._v("本文为我原创")]) : t._e(), 0 === t.readInfo.reprint ? n("span", {
            staticClass: "footer-text"
        }, [t._v("本文禁止转载或摘编")]) : t._e()]) : t._e()], 1)]) : t._e()])])
    }
    ), [], !1, null, null, null);
    e.default = v.exports
}
]);
