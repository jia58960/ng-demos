 /*!
 * jQuery JavaScript Library v1.9.1
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2012 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2013-2-4
 */
function css_browser_selector(e) {
    var t = e.toLowerCase(), n = function(e) {
        return t.indexOf(e) > -1
    }, r = "gecko", i = "webkit", s = "safari", o = "opera", u = "mobile", a = document.documentElement, f = [!/opera|webtv/i.test(t) && /msie\s(\d)/.test(t) ? "ie ie" + RegExp.$1 : n("firefox/2") ? r + " ff2" : n("firefox/3.5") ? r + " ff3 ff3_5" : n("firefox/3.6") ? r + " ff3 ff3_6" : n("firefox/3") ? r + " ff3" : n("gecko/") ? r : n("opera") ? o + (/version\/(\d+)/.test(t) ? " " + o + RegExp.$1 : /opera(\s|\/)(\d+)/.test(t) ? " " + o + RegExp.$2 : "") : n("konqueror") ? "konqueror" : n("blackberry") ? u + " blackberry" : n("android") ? u + " android" : n("chrome") ? i + " chrome" : n("iron") ? i + " iron" : n("applewebkit/") ? i + " " + s + (/version\/(\d+)/.test(t) ? " " + s + RegExp.$1 : "") : n("mozilla/") ? r : "", n("j2me") ? u + " j2me" : n("iphone") ? u + " iphone" : n("ipod") ? u + " ipod" : n("ipad") ? u + " ipad" : n("mac") ? "mac" : n("darwin") ? "mac" : n("webtv") ? "webtv" : n("win") ? "win" + (n("windows nt 6.0") ? " vista" : "") : n("freebsd") ? "freebsd" : n("x11") || n("linux") ? "linux" : "", "js"];
    return Selector_browser = f[0], c = f.join(" "), a.className += " " + c, c
}
(function(e, t) {
    function P(e) {
        var t = e.length, n = b.type(e);
        return b.isWindow(e) ? !1 : e.nodeType === 1 && t ? !0 : n === "array" || n !== "function" && (t === 0 || typeof t == "number" && t > 0 && t - 1 in e)
    }
    function B(e) {
        var t = H[e] = {};
        return b.each(e.match(E) || [], function(e, n) {
            t[n] = !0
        }), t
    }
    function I(e, n, r, i) {
        if (!b.acceptData(e))
            return;
        var s, o, u = b.expando, a = typeof n == "string", f = e.nodeType, c = f ? b.cache : e, h = f ? e[u] : e[u] && u;
        if ((!h || !c[h] || !i && !c[h].data) && a && r === t)
            return;
        h || (f ? e[u] = h = l.pop() || b.guid++ : h = u), c[h] || (c[h] = {}, f || (c[h].toJSON = b.noop));
        if (typeof n == "object" || typeof n == "function")
            i ? c[h] = b.extend(c[h], n) : c[h].data = b.extend(c[h].data, n);
        return s = c[h], i || (s.data || (s.data = {}), s = s.data), r !== t && (s[b.camelCase(n)] = r), a ? (o = s[n], o == null && (o = s[b.camelCase(n)])) : o = s, o
    }
    function q(e, t, n) {
        if (!b.acceptData(e))
            return;
        var r, i, s, o = e.nodeType, u = o ? b.cache : e, a = o ? e[b.expando] : b.expando;
        if (!u[a])
            return;
        if (t) {
            s = n ? u[a] : u[a].data;
            if (s) {
                b.isArray(t) ? t = t.concat(b.map(t, b.camelCase)) : t in s ? t = [t] : (t = b.camelCase(t), t in s ? t = [t] : t = t.split(" "));
                for (r = 0, i = t.length; r < i; r++)
                    delete s[t[r]];
                if (!(n ? U : b.isEmptyObject)(s))
                    return
            }
        }
        if (!n) {
            delete u[a].data;
            if (!U(u[a]))
                return
        }
        o ? b.cleanData([e], !0) : b.support.deleteExpando || u != u.window ? delete u[a] : u[a] = null
    }
    function R(e, n, r) {
        if (r === t && e.nodeType === 1) {
            var i = "data-" + n.replace(F, "-$1").toLowerCase();
            r = e.getAttribute(i);
            if (typeof r == "string") {
                try {
                    r = r === "true" ? !0 : r === "false" ? !1 : r === "null" ? null : +r + "" === r ? +r : j.test(r) ? b.parseJSON(r) : r
                } catch (s) {
                }
                b.data(e, n, r)
            } else
                r = t
        }
        return r
    }
    function U(e) {
        var t;
        for (t in e) {
            if (t === "data" && b.isEmptyObject(e[t]))
                continue;
            if (t !== "toJSON")
                return !1
        }
        return !0
    }
    function it() {
        return !0
    }
    function st() {
        return !1
    }
    function ct(e, t) {
        do
            e = e[t];
        while (e && e.nodeType !== 1);
        return e
    }
    function ht(e, t, n) {
        t = t || 0;
        if (b.isFunction(t))
            return b.grep(e, function(e, r) {
                var i = !!t.call(e, r, e);
                return i === n
            });
        if (t.nodeType)
            return b.grep(e, function(e) {
                return e === t === n
            });
        if (typeof t == "string") {
            var r = b.grep(e, function(e) {
                return e.nodeType === 1
            });
            if (at.test(t))
                return b.filter(t, r, !n);
            t = b.filter(t, r)
        }
        return b.grep(e, function(e) {
            return b.inArray(e, t) >= 0 === n
        })
    }
    function pt(e) {
        var t = dt.split("|"), n = e.createDocumentFragment();
        if (n.createElement)
            while (t.length)
                n.createElement(t.pop());
        return n
    }
    function Mt(e, t) {
        return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t))
    }
    function _t(e) {
        var t = e.getAttributeNode("type");
        return e.type = (t && t.specified) + "/" + e.type, e
    }
    function Dt(e) {
        var t = Ct.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }
    function Pt(e, t) {
        var n, r = 0;
        for (; (n = e[r]) != null; r++)
            b._data(n, "globalEval", !t || b._data(t[r], "globalEval"))
    }
    function Ht(e, t) {
        if (t.nodeType !== 1 || !b.hasData(e))
            return;
        var n, r, i, s = b._data(e), o = b._data(t, s), u = s.events;
        if (u) {
            delete o.handle, o.events = {};
            for (n in u)
                for (r = 0, i = u[n].length; r < i; r++)
                    b.event.add(t, n, u[n][r])
        }
        o.data && (o.data = b.extend({}, o.data))
    }
    function Bt(e, t) {
        var n, r, i;
        if (t.nodeType !== 1)
            return;
        n = t.nodeName.toLowerCase();
        if (!b.support.noCloneEvent && t[b.expando]) {
            i = b._data(t);
            for (r in i.events)
                b.removeEvent(t, r, i.handle);
            t.removeAttribute(b.expando)
        }
        if (n === "script" && t.text !== e.text)
            _t(t).text = e.text, Dt(t);
        else if (n === "object")
            t.parentNode && (t.outerHTML = e.outerHTML), b.support.html5Clone && e.innerHTML && !b.trim(t.innerHTML) && (t.innerHTML = e.innerHTML);
        else if (n === "input" && xt.test(e.type))
            t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value);
        else if (n === "option")
            t.defaultSelected = t.selected = e.defaultSelected;
        else if (n === "input" || n === "textarea")
            t.defaultValue = e.defaultValue
    }
    function jt(e, n) {
        var r, s, o = 0, u = typeof e.getElementsByTagName !== i ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== i ? e.querySelectorAll(n || "*") : t;
        if (!u)
            for (u = [], r = e.childNodes || e; (s = r[o]) != null; o++)
                !n || b.nodeName(s, n) ? u.push(s) : b.merge(u, jt(s, n));
        return n === t || n && b.nodeName(e, n) ? b.merge([e], u) : u
    }
    function Ft(e) {
        xt.test(e.type) && (e.defaultChecked = e.checked)
    }
    function tn(e, t) {
        if (t in e)
            return t;
        var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = en.length;
        while (i--) {
            t = en[i] + n;
            if (t in e)
                return t
        }
        return r
    }
    function nn(e, t) {
        return e = t || e, b.css(e, "display") === "none" || !b.contains(e.ownerDocument, e)
    }
    function rn(e, t) {
        var n, r, i, s = [], o = 0, u = e.length;
        for (; o < u; o++) {
            r = e[o];
            if (!r.style)
                continue;
            s[o] = b._data(r, "olddisplay"), n = r.style.display, t ? (!s[o] && n === "none" && (r.style.display = ""), r.style.display === "" && nn(r) && (s[o] = b._data(r, "olddisplay", an(r.nodeName)))) : s[o] || (i = nn(r), (n && n !== "none" || !i) && b._data(r, "olddisplay", i ? n : b.css(r, "display")))
        }
        for (o = 0; o < u; o++) {
            r = e[o];
            if (!r.style)
                continue;
            if (!t || r.style.display === "none" || r.style.display === "")
                r.style.display = t ? s[o] || "" : "none"
        }
        return e
    }
    function sn(e, t, n) {
        var r = $t.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }
    function on(e, t, n, r, i) {
        var s = n === (r ? "border" : "content") ? 4 : t === "width" ? 1 : 0, o = 0;
        for (; s < 4; s += 2)
            n === "margin" && (o += b.css(e, n + Zt[s], !0, i)), r ? (n === "content" && (o -= b.css(e, "padding" + Zt[s], !0, i)), n !== "margin" && (o -= b.css(e, "border" + Zt[s] + "Width", !0, i))) : (o += b.css(e, "padding" + Zt[s], !0, i), n !== "padding" && (o += b.css(e, "border" + Zt[s] + "Width", !0, i)));
        return o
    }
    function un(e, t, n) {
        var r = !0, i = t === "width" ? e.offsetWidth : e.offsetHeight, s = qt(e), o = b.support.boxSizing && b.css(e, "boxSizing", !1, s) === "border-box";
        if (i <= 0 || i == null) {
            i = Rt(e, t, s);
            if (i < 0 || i == null)
                i = e.style[t];
            if (Jt.test(i))
                return i;
            r = o && (b.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + on(e, t, n || (o ? "border" : "content"), r, s) + "px"
    }
    function an(e) {
        var t = s, n = Qt[e];
        if (!n) {
            n = fn(e, t);
            if (n === "none" || !n)
                It = (It || b("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (It[0].contentWindow || It[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = fn(e, t), It.detach();
            Qt[e] = n
        }
        return n
    }
    function fn(e, t) {
        var n = b(t.createElement(e)).appendTo(t.body), r = b.css(n[0], "display");
        return n.remove(), r
    }
    function vn(e, t, n, r) {
        var i;
        if (b.isArray(t))
            b.each(t, function(t, i) {
                n || cn.test(e) ? r(e, i) : vn(e + "[" + (typeof i == "object" ? t : "") + "]", i, n, r)
            });
        else if (!n && b.type(t) === "object")
            for (i in t)
                vn(e + "[" + i + "]", t[i], n, r);
        else
            r(e, t)
    }
    function _n(e) {
        return function(t, n) {
            typeof t != "string" && (n = t, t = "*");
            var r, i = 0, s = t.toLowerCase().match(E) || [];
            if (b.isFunction(n))
                while (r = s[i++])
                    r[0] === "+" ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }
    function Dn(e, t, n, r) {
        function o(u) {
            var a;
            return i[u] = !0, b.each(e[u] || [], function(e, u) {
                var f = u(t, n, r);
                if (typeof f == "string" && !s && !i[f])
                    return t.dataTypes.unshift(f), o(f), !1;
                if (s)
                    return !(a = f)
            }), a
        }
        var i = {}, s = e === An;
        return o(t.dataTypes[0]) || !i["*"] && o("*")
    }
    function Pn(e, n) {
        var r, i, s = b.ajaxSettings.flatOptions || {};
        for (i in n)
            n[i] !== t && ((s[i] ? e : r || (r = {}))[i] = n[i]);
        return r && b.extend(!0, e, r), e
    }
    function Hn(e, n, r) {
        var i, s, o, u, a = e.contents, f = e.dataTypes, l = e.responseFields;
        for (u in l)
            u in r && (n[l[u]] = r[u]);
        while (f[0] === "*")
            f.shift(), s === t && (s = e.mimeType || n.getResponseHeader("Content-Type"));
        if (s)
            for (u in a)
                if (a[u] && a[u].test(s)) {
                    f.unshift(u);
                    break
                }
        if (f[0] in r)
            o = f[0];
        else {
            for (u in r) {
                if (!f[0] || e.converters[u + " " + f[0]]) {
                    o = u;
                    break
                }
                i || (i = u)
            }
            o = o || i
        }
        if (o)
            return o !== f[0] && f.unshift(o), r[o]
    }
    function Bn(e, t) {
        var n, r, i, s, o = {}, u = 0, a = e.dataTypes.slice(), f = a[0];
        e.dataFilter && (t = e.dataFilter(t, e.dataType));
        if (a[1])
            for (i in e.converters)
                o[i.toLowerCase()] = e.converters[i];
        for (; r = a[++u]; )
            if (r !== "*") {
                if (f !== "*" && f !== r) {
                    i = o[f + " " + r] || o["* " + r];
                    if (!i)
                        for (n in o) {
                            s = n.split(" ");
                            if (s[1] === r) {
                                i = o[f + " " + s[0]] || o["* " + s[0]];
                                if (i) {
                                    i === !0 ? i = o[n] : o[n] !== !0 && (r = s[0], a.splice(u--, 0, r));
                                    break
                                }
                            }
                        }
                    if (i !== !0)
                        if (i && e["throws"])
                            t = i(t);
                        else
                            try {
                                t = i(t)
                            } catch (l) {
                                return {state: "parsererror",error: i ? l : "No conversion from " + f + " to " + r}
                            }
                }
                f = r
            }
        return {state: "success",data: t}
    }
    function zn() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {
        }
    }
    function Wn() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {
        }
    }
    function Yn() {
        return setTimeout(function() {
            Xn = t
        }), Xn = b.now()
    }
    function Zn(e, t) {
        b.each(t, function(t, n) {
            var r = (Gn[t] || []).concat(Gn["*"]), i = 0, s = r.length;
            for (; i < s; i++)
                if (r[i].call(e, t, n))
                    return
        })
    }
    function er(e, t, n) {
        var r, i, s = 0, o = Qn.length, u = b.Deferred().always(function() {
            delete a.elem
        }), a = function() {
            if (i)
                return !1;
            var t = Xn || Yn(), n = Math.max(0, f.startTime + f.duration - t), r = n / f.duration || 0, s = 1 - r, o = 0, a = f.tweens.length;
            for (; o < a; o++)
                f.tweens[o].run(s);
            return u.notifyWith(e, [f, s, n]), s < 1 && a ? n : (u.resolveWith(e, [f]), !1)
        }, f = u.promise({elem: e,props: b.extend({}, t),opts: b.extend(!0, {specialEasing: {}}, n),originalProperties: t,originalOptions: n,startTime: Xn || Yn(),duration: n.duration,tweens: [],createTween: function(t, n) {
                var r = b.Tween(e, f.opts, t, n, f.opts.specialEasing[t] || f.opts.easing);
                return f.tweens.push(r), r
            },stop: function(t) {
                var n = 0, r = t ? f.tweens.length : 0;
                if (i)
                    return this;
                i = !0;
                for (; n < r; n++)
                    f.tweens[n].run(1);
                return t ? u.resolveWith(e, [f, t]) : u.rejectWith(e, [f, t]), this
            }}), l = f.props;
        tr(l, f.opts.specialEasing);
        for (; s < o; s++) {
            r = Qn[s].call(f, e, l, f.opts);
            if (r)
                return r
        }
        return Zn(f, l), b.isFunction(f.opts.start) && f.opts.start.call(e, f), b.fx.timer(b.extend(a, {elem: e,anim: f,queue: f.opts.queue})), f.progress(f.opts.progress).done(f.opts.done, f.opts.complete).fail(f.opts.fail).always(f.opts.always)
    }
    function tr(e, t) {
        var n, r, i, s, o;
        for (i in e) {
            r = b.camelCase(i), s = t[r], n = e[i], b.isArray(n) && (s = n[1], n = e[i] = n[0]), i !== r && (e[r] = n, delete e[i]), o = b.cssHooks[r];
            if (o && "expand" in o) {
                n = o.expand(n), delete e[r];
                for (i in n)
                    i in e || (e[i] = n[i], t[i] = s)
            } else
                t[r] = s
        }
    }
    function nr(e, t, n) {
        var r, i, s, o, u, a, f, l, c, h = this, p = e.style, d = {}, v = [], m = e.nodeType && nn(e);
        n.queue || (l = b._queueHooks(e, "fx"), l.unqueued == null && (l.unqueued = 0, c = l.empty.fire, l.empty.fire = function() {
            l.unqueued || c()
        }), l.unqueued++, h.always(function() {
            h.always(function() {
                l.unqueued--, b.queue(e, "fx").length || l.empty.fire()
            })
        })), e.nodeType === 1 && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], b.css(e, "display") === "inline" && b.css(e, "float") === "none" && (!b.support.inlineBlockNeedsLayout || an(e.nodeName) === "inline" ? p.display = "inline-block" : p.zoom = 1)), n.overflow && (p.overflow = "hidden", b.support.shrinkWrapBlocks || h.always(function() {
            p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
        }));
        for (i in t) {
            o = t[i];
            if ($n.exec(o)) {
                delete t[i], a = a || o === "toggle";
                if (o === (m ? "hide" : "show"))
                    continue;
                v.push(i)
            }
        }
        s = v.length;
        if (s) {
            u = b._data(e, "fxshow") || b._data(e, "fxshow", {}), "hidden" in u && (m = u.hidden), a && (u.hidden = !m), m ? b(e).show() : h.done(function() {
                b(e).hide()
            }), h.done(function() {
                var t;
                b._removeData(e, "fxshow");
                for (t in d)
                    b.style(e, t, d[t])
            });
            for (i = 0; i < s; i++)
                r = v[i], f = h.createTween(r, m ? u[r] : 0), d[r] = u[r] || b.style(e, r), r in u || (u[r] = f.start, m && (f.end = f.start, f.start = r === "width" || r === "height" ? 1 : 0))
        }
    }
    function rr(e, t, n, r, i) {
        return new rr.prototype.init(e, t, n, r, i)
    }
    function ir(e, t) {
        var n, r = {height: e}, i = 0;
        t = t ? 1 : 0;
        for (; i < 4; i += 2 - t)
            n = Zt[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }
    function sr(e) {
        return b.isWindow(e) ? e : e.nodeType === 9 ? e.defaultView || e.parentWindow : !1
    }
    var n, r, i = typeof t, s = e.document, o = e.location, u = e.jQuery, a = e.$, f = {}, l = [], c = "1.9.1", h = l.concat, p = l.push, d = l.slice, v = l.indexOf, m = f.toString, g = f.hasOwnProperty, y = c.trim, b = function(e, t) {
        return new b.fn.init(e, t, r)
    }, w = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, E = /\S+/g, S = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, x = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/, T = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, N = /^[\],:{}\s]*$/, C = /(?:^|:|,)(?:\s*\[)+/g, k = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, L = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g, A = /^-ms-/, O = /-([\da-z])/gi, M = function(e, t) {
        return t.toUpperCase()
    }, _ = function(e) {
        if (s.addEventListener || e.type === "load" || s.readyState === "complete")
            D(), b.ready()
    }, D = function() {
        s.addEventListener ? (s.removeEventListener("DOMContentLoaded", _, !1), e.removeEventListener("load", _, !1)) : (s.detachEvent("onreadystatechange", _), e.detachEvent("onload", _))
    };
    b.fn = b.prototype = {jquery: c,constructor: b,init: function(e, n, r) {
            var i, o;
            if (!e)
                return this;
            if (typeof e == "string") {
                e.charAt(0) === "<" && e.charAt(e.length - 1) === ">" && e.length >= 3 ? i = [null, e, null] : i = x.exec(e);
                if (i && (i[1] || !n)) {
                    if (i[1]) {
                        n = n instanceof b ? n[0] : n, b.merge(this, b.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : s, !0));
                        if (T.test(i[1]) && b.isPlainObject(n))
                            for (i in n)
                                b.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
                        return this
                    }
                    o = s.getElementById(i[2]);
                    if (o && o.parentNode) {
                        if (o.id !== i[2])
                            return r.find(e);
                        this.length = 1, this[0] = o
                    }
                    return this.context = s, this.selector = e, this
                }
                return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e)
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : b.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), b.makeArray(e, this))
        },selector: "",length: 0,size: function() {
            return this.length
        },toArray: function() {
            return d.call(this)
        },get: function(e) {
            return e == null ? this.toArray() : e < 0 ? this[this.length + e] : this[e]
        },pushStack: function(e) {
            var t = b.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },each: function(e, t) {
            return b.each(this, e, t)
        },ready: function(e) {
            return b.ready.promise().done(e), this
        },slice: function() {
            return this.pushStack(d.apply(this, arguments))
        },first: function() {
            return this.eq(0)
        },last: function() {
            return this.eq(-1)
        },eq: function(e) {
            var t = this.length, n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },map: function(e) {
            return this.pushStack(b.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },end: function() {
            return this.prevObject || this.constructor(null)
        },push: p,sort: [].sort,splice: [].splice}, b.fn.init.prototype = b.fn, b.extend = b.fn.extend = function() {
        var e, n, r, i, s, o, u = arguments[0] || {}, a = 1, f = arguments.length, l = !1;
        typeof u == "boolean" && (l = u, u = arguments[1] || {}, a = 2), typeof u != "object" && !b.isFunction(u) && (u = {}), f === a && (u = this, --a);
        for (; a < f; a++)
            if ((s = arguments[a]) != null)
                for (i in s) {
                    e = u[i], r = s[i];
                    if (u === r)
                        continue;
                    l && r && (b.isPlainObject(r) || (n = b.isArray(r))) ? (n ? (n = !1, o = e && b.isArray(e) ? e : []) : o = e && b.isPlainObject(e) ? e : {}, u[i] = b.extend(l, o, r)) : r !== t && (u[i] = r)
                }
        return u
    }, b.extend({noConflict: function(t) {
            return e.$ === b && (e.$ = a), t && e.jQuery === b && (e.jQuery = u), b
        },isReady: !1,readyWait: 1,holdReady: function(e) {
            e ? b.readyWait++ : b.ready(!0)
        },ready: function(e) {
            if (e === !0 ? --b.readyWait : b.isReady)
                return;
            if (!s.body)
                return setTimeout(b.ready);
            b.isReady = !0;
            if (e !== !0 && --b.readyWait > 0)
                return;
            n.resolveWith(s, [b]), b.fn.trigger && b(s).trigger("ready").off("ready")
        },isFunction: function(e) {
            return b.type(e) === "function"
        },isArray: Array.isArray || function(e) {
            return b.type(e) === "array"
        },isWindow: function(e) {
            return e != null && e == e.window
        },isNumeric: function(e) {
            return !isNaN(parseFloat(e)) && isFinite(e)
        },type: function(e) {
            return e == null ? String(e) : typeof e == "object" || typeof e == "function" ? f[m.call(e)] || "object" : typeof e
        },isPlainObject: function(e) {
            if (!e || b.type(e) !== "object" || e.nodeType || b.isWindow(e))
                return !1;
            try {
                if (e.constructor && !g.call(e, "constructor") && !g.call(e.constructor.prototype, "isPrototypeOf"))
                    return !1
            } catch (n) {
                return !1
            }
            var r;
            for (r in e)
                ;
            return r === t || g.call(e, r)
        },isEmptyObject: function(e) {
            var t;
            for (t in e)
                return !1;
            return !0
        },error: function(e) {
            throw new Error(e)
        },parseHTML: function(e, t, n) {
            if (!e || typeof e != "string")
                return null;
            typeof t == "boolean" && (n = t, t = !1), t = t || s;
            var r = T.exec(e), i = !n && [];
            return r ? [t.createElement(r[1])] : (r = b.buildFragment([e], t, i), i && b(i).remove(), b.merge([], r.childNodes))
        },parseJSON: function(t) {
            if (e.JSON && e.JSON.parse)
                return e.JSON.parse(t);
            if (t === null)
                return t;
            if (typeof t == "string") {
                t = b.trim(t);
                if (t && N.test(t.replace(k, "@").replace(L, "]").replace(C, "")))
                    return (new Function("return " + t))()
            }
            b.error("Invalid JSON: " + t)
        },parseXML: function(n) {
            var r, i;
            if (!n || typeof n != "string")
                return null;
            try {
                e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n))
            } catch (s) {
                r = t
            }
            return (!r || !r.documentElement || r.getElementsByTagName("parsererror").length) && b.error("Invalid XML: " + n), r
        },noop: function() {
        },globalEval: function(t) {
            t && b.trim(t) && (e.execScript || function(t) {
                e.eval.call(e, t)
            })(t)
        },camelCase: function(e) {
            return e.replace(A, "ms-").replace(O, M)
        },nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },each: function(e, t, n) {
            var r, i = 0, s = e.length, o = P(e);
            if (n)
                if (o)
                    for (; i < s; i++) {
                        r = t.apply(e[i], n);
                        if (r === !1)
                            break
                    }
                else
                    for (i in e) {
                        r = t.apply(e[i], n);
                        if (r === !1)
                            break
                    }
            else if (o)
                for (; i < s; i++) {
                    r = t.call(e[i], i, e[i]);
                    if (r === !1)
                        break
                }
            else
                for (i in e) {
                    r = t.call(e[i], i, e[i]);
                    if (r === !1)
                        break
                }
            return e
        },trim: y && !y.call("﻿ ") ? function(e) {
            return e == null ? "" : y.call(e)
        } : function(e) {
            return e == null ? "" : (e + "").replace(S, "")
        },makeArray: function(e, t) {
            var n = t || [];
            return e != null && (P(Object(e)) ? b.merge(n, typeof e == "string" ? [e] : e) : p.call(n, e)), n
        },inArray: function(e, t, n) {
            var r;
            if (t) {
                if (v)
                    return v.call(t, e, n);
                r = t.length, n = n ? n < 0 ? Math.max(0, r + n) : n : 0;
                for (; n < r; n++)
                    if (n in t && t[n] === e)
                        return n
            }
            return -1
        },merge: function(e, n) {
            var r = n.length, i = e.length, s = 0;
            if (typeof r == "number")
                for (; s < r; s++)
                    e[i++] = n[s];
            else
                while (n[s] !== t)
                    e[i++] = n[s++];
            return e.length = i, e
        },grep: function(e, t, n) {
            var r, i = [], s = 0, o = e.length;
            n = !!n;
            for (; s < o; s++)
                r = !!t(e[s], s), n !== r && i.push(e[s]);
            return i
        },map: function(e, t, n) {
            var r, i = 0, s = e.length, o = P(e), u = [];
            if (o)
                for (; i < s; i++)
                    r = t(e[i], i, n), r != null && (u[u.length] = r);
            else
                for (i in e)
                    r = t(e[i], i, n), r != null && (u[u.length] = r);
            return h.apply([], u)
        },guid: 1,proxy: function(e, n) {
            var r, i, s;
            return typeof n == "string" && (s = e[n], n = e, e = s), b.isFunction(e) ? (r = d.call(arguments, 2), i = function() {
                return e.apply(n || this, r.concat(d.call(arguments)))
            }, i.guid = e.guid = e.guid || b.guid++, i) : t
        },access: function(e, n, r, i, s, o, u) {
            var a = 0, f = e.length, l = r == null;
            if (b.type(r) === "object") {
                s = !0;
                for (a in r)
                    b.access(e, n, a, r[a], !0, o, u)
            } else if (i !== t) {
                s = !0, b.isFunction(i) || (u = !0), l && (u ? (n.call(e, i), n = null) : (l = n, n = function(e, t, n) {
                    return l.call(b(e), n)
                }));
                if (n)
                    for (; a < f; a++)
                        n(e[a], r, u ? i : i.call(e[a], a, n(e[a], r)))
            }
            return s ? e : l ? n.call(e) : f ? n(e[0], r) : o
        },now: function() {
            return (new Date).getTime()
        }}), b.ready.promise = function(t) {
        if (!n) {
            n = b.Deferred();
            if (s.readyState === "complete")
                setTimeout(b.ready);
            else if (s.addEventListener)
                s.addEventListener("DOMContentLoaded", _, !1), e.addEventListener("load", _, !1);
            else {
                s.attachEvent("onreadystatechange", _), e.attachEvent("onload", _);
                var r = !1;
                try {
                    r = e.frameElement == null && s.documentElement
                } catch (i) {
                }
                r && r.doScroll && function o() {
                    if (!b.isReady) {
                        try {
                            r.doScroll("left")
                        } catch (e) {
                            return setTimeout(o, 50)
                        }
                        D(), b.ready()
                    }
                }()
            }
        }
        return n.promise(t)
    }, b.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        f["[object " + t + "]"] = t.toLowerCase()
    }), r = b(s);
    var H = {};
    b.Callbacks = function(e) {
        e = typeof e == "string" ? H[e] || B(e) : b.extend({}, e);
        var n, r, i, s, o, u, a = [], f = !e.once && [], l = function(t) {
            r = e.memory && t, i = !0, o = u || 0, u = 0, s = a.length, n = !0;
            for (; a && o < s; o++)
                if (a[o].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                    r = !1;
                    break
                }
            n = !1, a && (f ? f.length && l(f.shift()) : r ? a = [] : c.disable())
        }, c = {add: function() {
                if (a) {
                    var t = a.length;
                    (function i(t) {
                        b.each(t, function(t, n) {
                            var r = b.type(n);
                            r === "function" ? (!e.unique || !c.has(n)) && a.push(n) : n && n.length && r !== "string" && i(n)
                        })
                    })(arguments), n ? s = a.length : r && (u = t, l(r))
                }
                return this
            },remove: function() {
                return a && b.each(arguments, function(e, t) {
                    var r;
                    while ((r = b.inArray(t, a, r)) > -1)
                        a.splice(r, 1), n && (r <= s && s--, r <= o && o--)
                }), this
            },has: function(e) {
                return e ? b.inArray(e, a) > -1 : !!a && !!a.length
            },empty: function() {
                return a = [], this
            },disable: function() {
                return a = f = r = t, this
            },disabled: function() {
                return !a
            },lock: function() {
                return f = t, r || c.disable(), this
            },locked: function() {
                return !f
            },fireWith: function(e, t) {
                return t = t || [], t = [e, t.slice ? t.slice() : t], a && (!i || f) && (n ? f.push(t) : l(t)), this
            },fire: function() {
                return c.fireWith(this, arguments), this
            },fired: function() {
                return !!i
            }};
        return c
    }, b.extend({Deferred: function(e) {
            var t = [["resolve", "done", b.Callbacks("once memory"), "resolved"], ["reject", "fail", b.Callbacks("once memory"), "rejected"], ["notify", "progress", b.Callbacks("memory")]], n = "pending", r = {state: function() {
                    return n
                },always: function() {
                    return i.done(arguments).fail(arguments), this
                },then: function() {
                    var e = arguments;
                    return b.Deferred(function(n) {
                        b.each(t, function(t, s) {
                            var o = s[0], u = b.isFunction(e[t]) && e[t];
                            i[s[1]](function() {
                                var e = u && u.apply(this, arguments);
                                e && b.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o + "With"](this === r ? n.promise() : this, u ? [e] : arguments)
                            })
                        }), e = null
                    }).promise()
                },promise: function(e) {
                    return e != null ? b.extend(e, r) : r
                }}, i = {};
            return r.pipe = r.then, b.each(t, function(e, s) {
                var o = s[2], u = s[3];
                r[s[1]] = o.add, u && o.add(function() {
                    n = u
                }, t[e ^ 1][2].disable, t[2][2].lock), i[s[0]] = function() {
                    return i[s[0] + "With"](this === i ? r : this, arguments), this
                }, i[s[0] + "With"] = o.fireWith
            }), r.promise(i), e && e.call(i, i), i
        },when: function(e) {
            var t = 0, n = d.call(arguments), r = n.length, i = r !== 1 || e && b.isFunction(e.promise) ? r : 0, s = i === 1 ? e : b.Deferred(), o = function(e, t, n) {
                return function(r) {
                    t[e] = this, n[e] = arguments.length > 1 ? d.call(arguments) : r, n === u ? s.notifyWith(t, n) : --i || s.resolveWith(t, n)
                }
            }, u, a, f;
            if (r > 1) {
                u = new Array(r), a = new Array(r), f = new Array(r);
                for (; t < r; t++)
                    n[t] && b.isFunction(n[t].promise) ? n[t].promise().done(o(t, f, n)).fail(s.reject).progress(o(t, a, u)) : --i
            }
            return i || s.resolveWith(f, n), s.promise()
        }}), b.support = function() {
        var t, n, r, o, u, a, f, l, c, h, p = s.createElement("div");
        p.setAttribute("className", "t"), p.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = p.getElementsByTagName("*"), r = p.getElementsByTagName("a")[0];
        if (!n || !r || !n.length)
            return {};
        u = s.createElement("select"), f = u.appendChild(s.createElement("option")), o = p.getElementsByTagName("input")[0], r.style.cssText = "top:1px;float:left;opacity:.5", t = {getSetAttribute: p.className !== "t",leadingWhitespace: p.firstChild.nodeType === 3,tbody: !p.getElementsByTagName("tbody").length,htmlSerialize: !!p.getElementsByTagName("link").length,style: /top/.test(r.getAttribute("style")),hrefNormalized: r.getAttribute("href") === "/a",opacity: /^0.5/.test(r.style.opacity),cssFloat: !!r.style.cssFloat,checkOn: !!o.value,optSelected: f.selected,enctype: !!s.createElement("form").enctype,html5Clone: s.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>",boxModel: s.compatMode === "CSS1Compat",deleteExpando: !0,noCloneEvent: !0,inlineBlockNeedsLayout: !1,shrinkWrapBlocks: !1,reliableMarginRight: !0,boxSizingReliable: !0,pixelPosition: !1}, o.checked = !0, t.noCloneChecked = o.cloneNode(!0).checked, u.disabled = !0, t.optDisabled = !f.disabled;
        try {
            delete p.test
        } catch (d) {
            t.deleteExpando = !1
        }
        o = s.createElement("input"), o.setAttribute("value", ""), t.input = o.getAttribute("value") === "", o.value = "t", o.setAttribute("type", "radio"), t.radioValue = o.value === "t", o.setAttribute("checked", "t"), o.setAttribute("name", "t"), a = s.createDocumentFragment(), a.appendChild(o), t.appendChecked = o.checked, t.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, p.attachEvent && (p.attachEvent("onclick", function() {
            t.noCloneEvent = !1
        }), p.cloneNode(!0).click());
        for (h in {submit: !0,change: !0,focusin: !0})
            p.setAttribute(l = "on" + h, "t"), t[h + "Bubbles"] = l in e || p.attributes[l].expando === !1;
        return p.style.backgroundClip = "content-box", p.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = p.style.backgroundClip === "content-box", b(function() {
            var n, r, o, u = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;", a = s.getElementsByTagName("body")[0];
            if (!a)
                return;
            n = s.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", a.appendChild(n).appendChild(p), p.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", o = p.getElementsByTagName("td"), o[0].style.cssText = "padding:0;margin:0;border:0;display:none", c = o[0].offsetHeight === 0, o[0].style.display = "", o[1].style.display = "none", t.reliableHiddenOffsets = c && o[0].offsetHeight === 0, p.innerHTML = "", p.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", t.boxSizing = p.offsetWidth === 4, t.doesNotIncludeMarginInBodyOffset = a.offsetTop !== 1, e.getComputedStyle && (t.pixelPosition = (e.getComputedStyle(p, null) || {}).top !== "1%", t.boxSizingReliable = (e.getComputedStyle(p, null) || {width: "4px"}).width === "4px", r = p.appendChild(s.createElement("div")), r.style.cssText = p.style.cssText = u, r.style.marginRight = r.style.width = "0", p.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), typeof p.style.zoom !== i && (p.innerHTML = "", p.style.cssText = u + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = p.offsetWidth === 3, p.style.display = "block", p.innerHTML = "<div></div>", p.firstChild.style.width = "5px", t.shrinkWrapBlocks = p.offsetWidth !== 3, t.inlineBlockNeedsLayout && (a.style.zoom = 1)), a.removeChild(n), n = p = o = r = null
        }), n = u = a = f = r = o = null, t
    }();
    var j = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, F = /([A-Z])/g;
    b.extend({cache: {},expando: "jQuery" + (c + Math.random()).replace(/\D/g, ""),noData: {embed: !0,object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet: !0},hasData: function(e) {
            return e = e.nodeType ? b.cache[e[b.expando]] : e[b.expando], !!e && !U(e)
        },data: function(e, t, n) {
            return I(e, t, n)
        },removeData: function(e, t) {
            return q(e, t)
        },_data: function(e, t, n) {
            return I(e, t, n, !0)
        },_removeData: function(e, t) {
            return q(e, t, !0)
        },acceptData: function(e) {
            if (e.nodeType && e.nodeType !== 1 && e.nodeType !== 9)
                return !1;
            var t = e.nodeName && b.noData[e.nodeName.toLowerCase()];
            return !t || t !== !0 && e.getAttribute("classid") === t
        }}), b.fn.extend({data: function(e, n) {
            var r, i, s = this[0], o = 0, u = null;
            if (e === t) {
                if (this.length) {
                    u = b.data(s);
                    if (s.nodeType === 1 && !b._data(s, "parsedAttrs")) {
                        r = s.attributes;
                        for (; o < r.length; o++)
                            i = r[o].name, i.indexOf("data-") || (i = b.camelCase(i.slice(5)), R(s, i, u[i]));
                        b._data(s, "parsedAttrs", !0)
                    }
                }
                return u
            }
            return typeof e == "object" ? this.each(function() {
                b.data(this, e)
            }) : b.access(this, function(n) {
                if (n === t)
                    return s ? R(s, e, b.data(s, e)) : null;
                this.each(function() {
                    b.data(this, e, n)
                })
            }, null, n, arguments.length > 1, null, !0)
        },removeData: function(e) {
            return this.each(function() {
                b.removeData(this, e)
            })
        }}), b.extend({queue: function(e, t, n) {
            var r;
            if (e)
                return t = (t || "fx") + "queue", r = b._data(e, t), n && (!r || b.isArray(n) ? r = b._data(e, t, b.makeArray(n)) : r.push(n)), r || []
        },dequeue: function(e, t) {
            t = t || "fx";
            var n = b.queue(e, t), r = n.length, i = n.shift(), s = b._queueHooks(e, t), o = function() {
                b.dequeue(e, t)
            };
            i === "inprogress" && (i = n.shift(), r--), s.cur = i, i && (t === "fx" && n.unshift("inprogress"), delete s.stop, i.call(e, o, s)), !r && s && s.empty.fire()
        },_queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return b._data(e, n) || b._data(e, n, {empty: b.Callbacks("once memory").add(function() {
                    b._removeData(e, t + "queue"), b._removeData(e, n)
                })})
        }}), b.fn.extend({queue: function(e, n) {
            var r = 2;
            return typeof e != "string" && (n = e, e = "fx", r--), arguments.length < r ? b.queue(this[0], e) : n === t ? this : this.each(function() {
                var t = b.queue(this, e, n);
                b._queueHooks(this, e), e === "fx" && t[0] !== "inprogress" && b.dequeue(this, e)
            })
        },dequeue: function(e) {
            return this.each(function() {
                b.dequeue(this, e)
            })
        },delay: function(e, t) {
            return e = b.fx ? b.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                var r = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(r)
                }
            })
        },clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },promise: function(e, n) {
            var r, i = 1, s = b.Deferred(), o = this, u = this.length, a = function() {
                --i || s.resolveWith(o, [o])
            };
            typeof e != "string" && (n = e, e = t), e = e || "fx";
            while (u--)
                r = b._data(o[u], e + "queueHooks"), r && r.empty && (i++, r.empty.add(a));
            return a(), s.promise(n)
        }});
    var z, W, X = /[\t\r\n]/g, V = /\r/g, $ = /^(?:input|select|textarea|button|object)$/i, J = /^(?:a|area)$/i, K = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i, Q = /^(?:checked|selected)$/i, G = b.support.getSetAttribute, Y = b.support.input;
    b.fn.extend({attr: function(e, t) {
            return b.access(this, b.attr, e, t, arguments.length > 1)
        },removeAttr: function(e) {
            return this.each(function() {
                b.removeAttr(this, e)
            })
        },prop: function(e, t) {
            return b.access(this, b.prop, e, t, arguments.length > 1)
        },removeProp: function(e) {
            return e = b.propFix[e] || e, this.each(function() {
                try {
                    this[e] = t, delete this[e]
                } catch (n) {
                }
            })
        },addClass: function(e) {
            var t, n, r, i, s, o = 0, u = this.length, a = typeof e == "string" && e;
            if (b.isFunction(e))
                return this.each(function(t) {
                    b(this).addClass(e.call(this, t, this.className))
                });
            if (a) {
                t = (e || "").match(E) || [];
                for (; o < u; o++) {
                    n = this[o], r = n.nodeType === 1 && (n.className ? (" " + n.className + " ").replace(X, " ") : " ");
                    if (r) {
                        s = 0;
                        while (i = t[s++])
                            r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                        n.className = b.trim(r)
                    }
                }
            }
            return this
        },removeClass: function(e) {
            var t, n, r, i, s, o = 0, u = this.length, a = arguments.length === 0 || typeof e == "string" && e;
            if (b.isFunction(e))
                return this.each(function(t) {
                    b(this).removeClass(e.call(this, t, this.className))
                });
            if (a) {
                t = (e || "").match(E) || [];
                for (; o < u; o++) {
                    n = this[o], r = n.nodeType === 1 && (n.className ? (" " + n.className + " ").replace(X, " ") : "");
                    if (r) {
                        s = 0;
                        while (i = t[s++])
                            while (r.indexOf(" " + i + " ") >= 0)
                                r = r.replace(" " + i + " ", " ");
                        n.className = e ? b.trim(r) : ""
                    }
                }
            }
            return this
        },toggleClass: function(e, t) {
            var n = typeof e, r = typeof t == "boolean";
            return b.isFunction(e) ? this.each(function(n) {
                b(this).toggleClass(e.call(this, n, this.className, t), t)
            }) : this.each(function() {
                if (n === "string") {
                    var s, o = 0, u = b(this), a = t, f = e.match(E) || [];
                    while (s = f[o++])
                        a = r ? a : !u.hasClass(s), u[a ? "addClass" : "removeClass"](s)
                } else if (n === i || n === "boolean")
                    this.className && b._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : b._data(this, "__className__") || ""
            })
        },hasClass: function(e) {
            var t = " " + e + " ", n = 0, r = this.length;
            for (; n < r; n++)
                if (this[n].nodeType === 1 && (" " + this[n].className + " ").replace(X, " ").indexOf(t) >= 0)
                    return !0;
            return !1
        },val: function(e) {
            var n, r, i, s = this[0];
            if (!arguments.length) {
                if (s)
                    return r = b.valHooks[s.type] || b.valHooks[s.nodeName.toLowerCase()], r && "get" in r && (n = r.get(s, "value")) !== t ? n : (n = s.value, typeof n == "string" ? n.replace(V, "") : n == null ? "" : n);
                return
            }
            return i = b.isFunction(e), this.each(function(n) {
                var s, o = b(this);
                if (this.nodeType !== 1)
                    return;
                i ? s = e.call(this, n, o.val()) : s = e, s == null ? s = "" : typeof s == "number" ? s += "" : b.isArray(s) && (s = b.map(s, function(e) {
                    return e == null ? "" : e + ""
                })), r = b.valHooks[this.type] || b.valHooks[this.nodeName.toLowerCase()];
                if (!r || !("set" in r) || r.set(this, s, "value") === t)
                    this.value = s
            })
        }}), b.extend({valHooks: {option: {get: function(e) {
                    var t = e.attributes.value;
                    return !t || t.specified ? e.value : e.text
                }},select: {get: function(e) {
                    var t, n, r = e.options, i = e.selectedIndex, s = e.type === "select-one" || i < 0, o = s ? null : [], u = s ? i + 1 : r.length, a = i < 0 ? u : s ? i : 0;
                    for (; a < u; a++) {
                        n = r[a];
                        if ((n.selected || a === i) && (b.support.optDisabled ? !n.disabled : n.getAttribute("disabled") === null) && (!n.parentNode.disabled || !b.nodeName(n.parentNode, "optgroup"))) {
                            t = b(n).val();
                            if (s)
                                return t;
                            o.push(t)
                        }
                    }
                    return o
                },set: function(e, t) {
                    var n = b.makeArray(t);
                    return b(e).find("option").each(function() {
                        this.selected = b.inArray(b(this).val(), n) >= 0
                    }), n.length || (e.selectedIndex = -1), n
                }}},attr: function(e, n, r) {
            var s, o, u, a = e.nodeType;
            if (!e || a === 3 || a === 8 || a === 2)
                return;
            if (typeof e.getAttribute === i)
                return b.prop(e, n, r);
            o = a !== 1 || !b.isXMLDoc(e), o && (n = n.toLowerCase(), s = b.attrHooks[n] || (K.test(n) ? W : z));
            if (r === t)
                return s && o && "get" in s && (u = s.get(e, n)) !== null ? u : (typeof e.getAttribute !== i && (u = e.getAttribute(n)), u == null ? t : u);
            if (r !== null)
                return s && o && "set" in s && (u = s.set(e, r, n)) !== t ? u : (e.setAttribute(n, r + ""), r);
            b.removeAttr(e, n)
        },removeAttr: function(e, t) {
            var n, r, i = 0, s = t && t.match(E);
            if (s && e.nodeType === 1)
                while (n = s[i++])
                    r = b.propFix[n] || n, K.test(n) ? !G && Q.test(n) ? e[b.camelCase("default-" + n)] = e[r] = !1 : e[r] = !1 : b.attr(e, n, ""), e.removeAttribute(G ? n : r)
        },attrHooks: {type: {set: function(e, t) {
                    if (!b.support.radioValue && t === "radio" && b.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }}},propFix: {tabindex: "tabIndex",readonly: "readOnly","for": "htmlFor","class": "className",maxlength: "maxLength",cellspacing: "cellSpacing",cellpadding: "cellPadding",rowspan: "rowSpan",colspan: "colSpan",usemap: "useMap",frameborder: "frameBorder",contenteditable: "contentEditable"},prop: function(e, n, r) {
            var i, s, o, u = e.nodeType;
            if (!e || u === 3 || u === 8 || u === 2)
                return;
            return o = u !== 1 || !b.isXMLDoc(e), o && (n = b.propFix
            [n] || n, s = b.propHooks[n]), r !== t ? s && "set" in s && (i = s.set(e, r, n)) !== t ? i : e[n] = r : s && "get" in s && (i = s.get(e, n)) !== null ? i : e[n]
        },propHooks: {tabIndex: {get: function(e) {
                    var n = e.getAttributeNode("tabindex");
                    return n && n.specified ? parseInt(n.value, 10) : $.test(e.nodeName) || J.test(e.nodeName) && e.href ? 0 : t
                }}}}), W = {get: function(e, n) {
            var r = b.prop(e, n), i = typeof r == "boolean" && e.getAttribute(n), s = typeof r == "boolean" ? Y && G ? i != null : Q.test(n) ? e[b.camelCase("default-" + n)] : !!i : e.getAttributeNode(n);
            return s && s.value !== !1 ? n.toLowerCase() : t
        },set: function(e, t, n) {
            return t === !1 ? b.removeAttr(e, n) : Y && G || !Q.test(n) ? e.setAttribute(!G && b.propFix[n] || n, n) : e[b.camelCase("default-" + n)] = e[n] = !0, n
        }};
    if (!Y || !G)
        b.attrHooks.value = {get: function(e, n) {
                var r = e.getAttributeNode(n);
                return b.nodeName(e, "input") ? e.defaultValue : r && r.specified ? r.value : t
            },set: function(e, t, n) {
                if (!b.nodeName(e, "input"))
                    return z && z.set(e, t, n);
                e.defaultValue = t
            }};
    G || (z = b.valHooks.button = {get: function(e, n) {
            var r = e.getAttributeNode(n);
            return r && (n === "id" || n === "name" || n === "coords" ? r.value !== "" : r.specified) ? r.value : t
        },set: function(e, n, r) {
            var i = e.getAttributeNode(r);
            return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)), i.value = n += "", r === "value" || n === e.getAttribute(r) ? n : t
        }}, b.attrHooks.contenteditable = {get: z.get,set: function(e, t, n) {
            z.set(e, t === "" ? !1 : t, n)
        }}, b.each(["width", "height"], function(e, t) {
        b.attrHooks[t] = b.extend(b.attrHooks[t], {set: function(e, n) {
                if (n === "")
                    return e.setAttribute(t, "auto"), n
            }})
    })), b.support.hrefNormalized || (b.each(["href", "src", "width", "height"], function(e, n) {
        b.attrHooks[n] = b.extend(b.attrHooks[n], {get: function(e) {
                var r = e.getAttribute(n, 2);
                return r == null ? t : r
            }})
    }), b.each(["href", "src"], function(e, t) {
        b.propHooks[t] = {get: function(e) {
                return e.getAttribute(t, 4)
            }}
    })), b.support.style || (b.attrHooks.style = {get: function(e) {
            return e.style.cssText || t
        },set: function(e, t) {
            return e.style.cssText = t + ""
        }}), b.support.optSelected || (b.propHooks.selected = b.extend(b.propHooks.selected, {get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }})), b.support.enctype || (b.propFix.enctype = "encoding"), b.support.checkOn || b.each(["radio", "checkbox"], function() {
        b.valHooks[this] = {get: function(e) {
                return e.getAttribute("value") === null ? "on" : e.value
            }}
    }), b.each(["radio", "checkbox"], function() {
        b.valHooks[this] = b.extend(b.valHooks[this], {set: function(e, t) {
                if (b.isArray(t))
                    return e.checked = b.inArray(b(e).val(), t) >= 0
            }})
    });
    var Z = /^(?:input|select|textarea)$/i, et = /^key/, tt = /^(?:mouse|contextmenu)|click/, nt = /^(?:focusinfocus|focusoutblur)$/, rt = /^([^.]*)(?:\.(.+)|)$/;
    b.event = {global: {},add: function(e, n, r, s, o) {
            var u, a, f, l, c, h, p, d, v, m, g, y = b._data(e);
            if (!y)
                return;
            r.handler && (l = r, r = l.handler, o = l.selector), r.guid || (r.guid = b.guid++), (a = y.events) || (a = y.events = {}), (h = y.handle) || (h = y.handle = function(e) {
                return typeof b === i || !!e && b.event.triggered === e.type ? t : b.event.dispatch.apply(h.elem, arguments)
            }, h.elem = e), n = (n || "").match(E) || [""], f = n.length;
            while (f--) {
                u = rt.exec(n[f]) || [], v = g = u[1], m = (u[2] || "").split(".").sort(), c = b.event.special[v] || {}, v = (o ? c.delegateType : c.bindType) || v, c = b.event.special[v] || {}, p = b.extend({type: v,origType: g,data: s,handler: r,guid: r.guid,selector: o,needsContext: o && b.expr.match.needsContext.test(o),namespace: m.join(".")}, l);
                if (!(d = a[v])) {
                    d = a[v] = [], d.delegateCount = 0;
                    if (!c.setup || c.setup.call(e, s, m, h) === !1)
                        e.addEventListener ? e.addEventListener(v, h, !1) : e.attachEvent && e.attachEvent("on" + v, h)
                }
                c.add && (c.add.call(e, p), p.handler.guid || (p.handler.guid = r.guid)), o ? d.splice(d.delegateCount++, 0, p) : d.push(p), b.event.global[v] = !0
            }
            e = null
        },remove: function(e, t, n, r, i) {
            var s, o, u, a, f, l, c, h, p, d, v, m = b.hasData(e) && b._data(e);
            if (!m || !(l = m.events))
                return;
            t = (t || "").match(E) || [""], f = t.length;
            while (f--) {
                u = rt.exec(t[f]) || [], p = v = u[1], d = (u[2] || "").split(".").sort();
                if (!p) {
                    for (p in l)
                        b.event.remove(e, p + t[f], n, r, !0);
                    continue
                }
                c = b.event.special[p] || {}, p = (r ? c.delegateType : c.bindType) || p, h = l[p] || [], u = u[2] && new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = s = h.length;
                while (s--)
                    o = h[s], (i || v === o.origType) && (!n || n.guid === o.guid) && (!u || u.test(o.namespace)) && (!r || r === o.selector || r === "**" && o.selector) && (h.splice(s, 1), o.selector && h.delegateCount--, c.remove && c.remove.call(e, o));
                a && !h.length && ((!c.teardown || c.teardown.call(e, d, m.handle) === !1) && b.removeEvent(e, p, m.handle), delete l[p])
            }
            b.isEmptyObject(l) && (delete m.handle, b._removeData(e, "events"))
        },trigger: function(n, r, i, o) {
            var u, a, f, l, c, h, p, d = [i || s], v = g.call(n, "type") ? n.type : n, m = g.call(n, "namespace") ? n.namespace.split(".") : [];
            f = h = i = i || s;
            if (i.nodeType === 3 || i.nodeType === 8)
                return;
            if (nt.test(v + b.event.triggered))
                return;
            v.indexOf(".") >= 0 && (m = v.split("."), v = m.shift(), m.sort()), a = v.indexOf(":") < 0 && "on" + v, n = n[b.expando] ? n : new b.Event(v, typeof n == "object" && n), n.isTrigger = !0, n.namespace = m.join("."), n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = i), r = r == null ? [n] : b.makeArray(r, [n]), c = b.event.special[v] || {};
            if (!o && c.trigger && c.trigger.apply(i, r) === !1)
                return;
            if (!o && !c.noBubble && !b.isWindow(i)) {
                l = c.delegateType || v, nt.test(l + v) || (f = f.parentNode);
                for (; f; f = f.parentNode)
                    d.push(f), h = f;
                h === (i.ownerDocument || s) && d.push(h.defaultView || h.parentWindow || e)
            }
            p = 0;
            while ((f = d[p++]) && !n.isPropagationStopped())
                n.type = p > 1 ? l : c.bindType || v, u = (b._data(f, "events") || {})[n.type] && b._data(f, "handle"), u && u.apply(f, r), u = a && f[a], u && b.acceptData(f) && u.apply && u.apply(f, r) === !1 && n.preventDefault();
            n.type = v;
            if (!o && !n.isDefaultPrevented() && (!c._default || c._default.apply(i.ownerDocument, r) === !1) && (v !== "click" || !b.nodeName(i, "a")) && b.acceptData(i) && a && i[v] && !b.isWindow(i)) {
                h = i[a], h && (i[a] = null), b.event.triggered = v;
                try {
                    i[v]()
                } catch (y) {
                }
                b.event.triggered = t, h && (i[a] = h)
            }
            return n.result
        },dispatch: function(e) {
            e = b.event.fix(e);
            var n, r, i, s, o, u = [], a = d.call(arguments), f = (b._data(this, "events") || {})[e.type] || [], l = b.event.special[e.type] || {};
            a[0] = e, e.delegateTarget = this;
            if (l.preDispatch && l.preDispatch.call(this, e) === !1)
                return;
            u = b.event.handlers.call(this, e, f), n = 0;
            while ((s = u[n++]) && !e.isPropagationStopped()) {
                e.currentTarget = s.elem, o = 0;
                while ((i = s.handlers[o++]) && !e.isImmediatePropagationStopped())
                    if (!e.namespace_re || e.namespace_re.test(i.namespace))
                        e.handleObj = i, e.data = i.data, r = ((b.event.special[i.origType] || {}).handle || i.handler).apply(s.elem, a), r !== t && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation())
            }
            return l.postDispatch && l.postDispatch.call(this, e), e.result
        },handlers: function(e, n) {
            var r, i, s, o, u = [], a = n.delegateCount, f = e.target;
            if (a && f.nodeType && (!e.button || e.type !== "click"))
                for (; f != this; f = f.parentNode || this)
                    if (f.nodeType === 1 && (f.disabled !== !0 || e.type !== "click")) {
                        s = [];
                        for (o = 0; o < a; o++)
                            i = n[o], r = i.selector + " ", s[r] === t && (s[r] = i.needsContext ? b(r, this).index(f) >= 0 : b.find(r, this, null, [f]).length), s[r] && s.push(i);
                        s.length && u.push({elem: f,handlers: s})
                    }
            return a < n.length && u.push({elem: this,handlers: n.slice(a)}), u
        },fix: function(e) {
            if (e[b.expando])
                return e;
            var t, n, r, i = e.type, o = e, u = this.fixHooks[i];
            u || (this.fixHooks[i] = u = tt.test(i) ? this.mouseHooks : et.test(i) ? this.keyHooks : {}), r = u.props ? this.props.concat(u.props) : this.props, e = new b.Event(o), t = r.length;
            while (t--)
                n = r[t], e[n] = o[n];
            return e.target || (e.target = o.srcElement || s), e.target.nodeType === 3 && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, u.filter ? u.filter(e, o) : e
        },props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks: {},keyHooks: {props: "char charCode key keyCode".split(" "),filter: function(e, t) {
                return e.which == null && (e.which = t.charCode != null ? t.charCode : t.keyCode), e
            }},mouseHooks: {props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter: function(e, n) {
                var r, i, o, u = n.button, a = n.fromElement;
                return e.pageX == null && n.clientX != null && (i = e.target.ownerDocument || s, o = i.documentElement, r = i.body, e.pageX = n.clientX + (o && o.scrollLeft || r && r.scrollLeft || 0) - (o && o.clientLeft || r && r.clientLeft || 0), e.pageY = n.clientY + (o && o.scrollTop || r && r.scrollTop || 0) - (o && o.clientTop || r && r.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? n.toElement : a), !e.which && u !== t && (e.which = u & 1 ? 1 : u & 2 ? 3 : u & 4 ? 2 : 0), e
            }},special: {load: {noBubble: !0},click: {trigger: function() {
                    if (b.nodeName(this, "input") && this.type === "checkbox" && this.click)
                        return this.click(), !1
                }},focus: {trigger: function() {
                    if (this !== s.activeElement && this.focus)
                        try {
                            return this.focus(), !1
                        } catch (e) {
                        }
                },delegateType: "focusin"},blur: {trigger: function() {
                    if (this === s.activeElement && this.blur)
                        return this.blur(), !1
                },delegateType: "focusout"},beforeunload: {postDispatch: function(e) {
                    e.result !== t && (e.originalEvent.returnValue = e.result)
                }}},simulate: function(e, t, n, r) {
            var i = b.extend(new b.Event, n, {type: e,isSimulated: !0,originalEvent: {}});
            r ? b.event.trigger(i, null, t) : b.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
        }}, b.removeEvent = s.removeEventListener ? function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    } : function(e, t, n) {
        var r = "on" + t;
        e.detachEvent && (typeof e[r] === i && (e[r] = null), e.detachEvent(r, n))
    }, b.Event = function(e, t) {
        if (!(this instanceof b.Event))
            return new b.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? it : st) : this.type = e, t && b.extend(this, t), this.timeStamp = e && e.timeStamp || b.now(), this[b.expando] = !0
    }, b.Event.prototype = {isDefaultPrevented: st,isPropagationStopped: st,isImmediatePropagationStopped: st,preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = it;
            if (!e)
                return;
            e.preventDefault ? e.preventDefault() : e.returnValue = !1
        },stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = it;
            if (!e)
                return;
            e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0
        },stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = it, this.stopPropagation()
        }}, b.each({mouseenter: "mouseover",mouseleave: "mouseout"}, function(e, t) {
        b.event.special[e] = {delegateType: t,bindType: t,handle: function(e) {
                var n, r = this, i = e.relatedTarget, s = e.handleObj;
                if (!i || i !== r && !b.contains(r, i))
                    e.type = s.origType, n = s.handler.apply(this, arguments), e.type = t;
                return n
            }}
    }), b.support.submitBubbles || (b.event.special.submit = {setup: function() {
            if (b.nodeName(this, "form"))
                return !1;
            b.event.add(this, "click._submit keypress._submit", function(e) {
                var n = e.target, r = b.nodeName(n, "input") || b.nodeName(n, "button") ? n.form : t;
                r && !b._data(r, "submitBubbles") && (b.event.add(r, "submit._submit", function(e) {
                    e._submit_bubble = !0
                }), b._data(r, "submitBubbles", !0))
            })
        },postDispatch: function(e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && b.event.simulate("submit", this.parentNode, e, !0))
        },teardown: function() {
            if (b.nodeName(this, "form"))
                return !1;
            b.event.remove(this, "._submit")
        }}), b.support.changeBubbles || (b.event.special.change = {setup: function() {
            if (Z.test(this.nodeName)) {
                if (this.type === "checkbox" || this.type === "radio")
                    b.event.add(this, "propertychange._change", function(e) {
                        e.originalEvent.propertyName === "checked" && (this._just_changed = !0)
                    }), b.event.add(this, "click._change", function(e) {
                        this._just_changed && !e.isTrigger && (this._just_changed = !1), b.event.simulate("change", this, e, !0)
                    });
                return !1
            }
            b.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                Z.test(t.nodeName) && !b._data(t, "changeBubbles") && (b.event.add(t, "change._change", function(e) {
                    this.parentNode && !e.isSimulated && !e.isTrigger && b.event.simulate("change", this.parentNode, e, !0)
                }), b._data(t, "changeBubbles", !0))
            })
        },handle: function(e) {
            var t = e.target;
            if (this !== t || e.isSimulated || e.isTrigger || t.type !== "radio" && t.type !== "checkbox")
                return e.handleObj.handler.apply(this, arguments)
        },teardown: function() {
            return b.event.remove(this, "._change"), !Z.test(this.nodeName)
        }}), b.support.focusinBubbles || b.each({focus: "focusin",blur: "focusout"}, function(e, t) {
        var n = 0, r = function(e) {
            b.event.simulate(t, e.target, b.event.fix(e), !0)
        };
        b.event.special[t] = {setup: function() {
                n++ === 0 && s.addEventListener(e, r, !0)
            },teardown: function() {
                --n === 0 && s.removeEventListener(e, r, !0)
            }}
    }), b.fn.extend({on: function(e, n, r, i, s) {
            var o, u;
            if (typeof e == "object") {
                typeof n != "string" && (r = r || n, n = t);
                for (o in e)
                    this.on(o, n, r, e[o], s);
                return this
            }
            r == null && i == null ? (i = n, r = n = t) : i == null && (typeof n == "string" ? (i = r, r = t) : (i = r, r = n, n = t));
            if (i === !1)
                i = st;
            else if (!i)
                return this;
            return s === 1 && (u = i, i = function(e) {
                return b().off(e), u.apply(this, arguments)
            }, i.guid = u.guid || (u.guid = b.guid++)), this.each(function() {
                b.event.add(this, e, i, r, n)
            })
        },one: function(e, t, n, r) {
            return this.on(e, t, n, r, 1)
        },off: function(e, n, r) {
            var i, s;
            if (e && e.preventDefault && e.handleObj)
                return i = e.handleObj, b(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if (typeof e == "object") {
                for (s in e)
                    this.off(s, n, e[s]);
                return this
            }
            if (n === !1 || typeof n == "function")
                r = n, n = t;
            return r === !1 && (r = st), this.each(function() {
                b.event.remove(this, e, r, n)
            })
        },bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },unbind: function(e, t) {
            return this.off(e, null, t)
        },delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },undelegate: function(e, t, n) {
            return arguments.length === 1 ? this.off(e, "**") : this.off(t, e || "**", n)
        },trigger: function(e, t) {
            return this.each(function() {
                b.event.trigger(e, t, this)
            })
        },triggerHandler: function(e, t) {
            var n = this[0];
            if (n)
                return b.event.trigger(e, t, n, !0)
        }}), function(e, t) {
        function rt(e) {
            return J.test(e + "")
        }
        function it() {
            var e, t = [];
            return e = function(n, r) {
                return t.push(n += " ") > i.cacheLength && delete e[t.shift()], e[n] = r
            }
        }
        function st(e) {
            return e[w] = !0, e
        }
        function ot(e) {
            var t = c.createElement("div");
            try {
                return e(t)
            } catch (n) {
                return !1
            }finally {
                t = null
            }
        }
        function ut(e, t, n, r) {
            var i, s, o, u, a, f, h, v, m, y;
            (t ? t.ownerDocument || t : E) !== c && l(t), t = t || c, n = n || [];
            if (!e || typeof e != "string")
                return n;
            if ((u = t.nodeType) !== 1 && u !== 9)
                return [];
            if (!p && !r) {
                if (i = K.exec(e))
                    if (o = i[1]) {
                        if (u === 9) {
                            s = t.getElementById(o);
                            if (!s || !s.parentNode)
                                return n;
                            if (s.id === o)
                                return n.push(s), n
                        } else if (t.ownerDocument && (s = t.ownerDocument.getElementById(o)) && g(t, s) && s.id === o)
                            return n.push(s), n
                    } else {
                        if (i[2])
                            return _.apply(n, D.call(t.getElementsByTagName(e), 0)), n;
                        if ((o = i[3]) && S.getByClassName && t.getElementsByClassName)
                            return _.apply(n, D.call(t.getElementsByClassName(o), 0)), n
                    }
                if (S.qsa && !d.test(e)) {
                    h = !0, v = w, m = t, y = u === 9 && e;
                    if (u === 1 && t.nodeName.toLowerCase() !== "object") {
                        f = ht(e), (h = t.getAttribute("id")) ? v = h.replace(Y, "\\$&") : t.setAttribute("id", v), v = "[id='" + v + "'] ", a = f.length;
                        while (a--)
                            f[a] = v + pt(f[a]);
                        m = $.test(e) && t.parentNode || t, y = f.join(",")
                    }
                    if (y)
                        try {
                            return _.apply(n, D.call(m.querySelectorAll(y), 0)), n
                        } catch (b) {
                        }finally {
                            h || t.removeAttribute("id")
                        }
                }
            }
            return Et(e.replace(R, "$1"), t, n, r)
        }
        function at(e, t) {
            var n = t && e, r = n && (~t.sourceIndex || A) - (~e.sourceIndex || A);
            if (r)
                return r;
            if (n)
                while (n = n.nextSibling)
                    if (n === t)
                        return -1;
            return e ? 1 : -1
        }
        function ft(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return n === "input" && t.type === e
            }
        }
        function lt(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return (n === "input" || n === "button") && t.type === e
            }
        }
        function ct(e) {
            return st(function(t) {
                return t = +t, st(function(n, r) {
                    var i, s = e([], n.length, t), o = s.length;
                    while (o--)
                        n[i = s[o]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }
        function ht(e, t) {
            var n, r, s, o, u, a, f, l = C[e + " "];
            if (l)
                return t ? 0 : l.slice(0);
            u = e, a = [], f = i.preFilter;
            while (u) {
                if (!n || (r = U.exec(u)))
                    r && (u = u.slice(r[0].length) || u), a.push(s = []);
                n = !1;
                if (r = z.exec(u))
                    n = r.shift(), s.push({value: n,type: r[0].replace(R, " ")}), u = u.slice(n.length);
                for (o in i.filter)
                    (r = V[o].exec(u)) && (!f[o] || (r = f[o](r))) && (n = r.shift(), s.push({value: n,type: o,matches: r}), u = u.slice(n.length));
                if (!n)
                    break
            }
            return t ? u.length : u ? ut.error(e) : C(e, a).slice(0)
        }
        function pt(e) {
            var t = 0, n = e.length, r = "";
            for (; t < n; t++)
                r += e[t].value;
            return r
        }
        function dt(e, t, n) {
            var i = t.dir, s = n && i === "parentNode", o = T++;
            return t.first ? function(t, n, r) {
                while (t = t[i])
                    if (t.nodeType === 1 || s)
                        return e(t, n, r)
            } : function(t, n, u) {
                var a, f, l, c = x + " " + o;
                if (u) {
                    while (t = t[i])
                        if (t.nodeType === 1 || s)
                            if (e(t, n, u))
                                return !0
                } else
                    while (t = t[i])
                        if (t.nodeType === 1 || s) {
                            l = t[w] || (t[w] = {});
                            if ((f = l[i]) && f[0] === c) {
                                if ((a = f[1]) === !0 || a === r)
                                    return a === !0
                            } else {
                                f = l[i] = [c], f[1] = e(t, n, u) || r;
                                if (f[1] === !0)
                                    return !0
                            }
                        }
            }
        }
        function vt(e) {
            return e.length > 1 ? function(t, n, r) {
                var i = e.length;
                while (i--)
                    if (!e[i](t, n, r))
                        return !1;
                return !0
            } : e[0]
        }
        function mt(e, t, n, r, i) {
            var s, o = [], u = 0, a = e.length, f = t != null;
            for (; u < a; u++)
                if (s = e[u])
                    if (!n || n(s, r, i))
                        o.push(s), f && t.push(u);
            return o
        }
        function gt(e, t, n, r, i, s) {
            return r && !r[w] && (r = gt(r)), i && !i[w] && (i = gt(i, s)), st(function(s, o, u, a) {
                var f, l, c, h = [], p = [], d = o.length, v = s || wt(t || "*", u.nodeType ? [u] : u, []), m = e && (s || !t) ? mt(v, h, e, u, a) : v, g = n ? i || (s ? e : d || r) ? [] : o : m;
                n && n(m, g, u, a);
                if (r) {
                    f = mt(g, p), r(f, [], u, a), l = f.length;
                    while (l--)
                        if (c = f[l])
                            g[p[l]] = !(m[p[l]] = c)
                }
                if (s) {
                    if (i || e) {
                        if (i) {
                            f = [], l = g.length;
                            while (l--)
                                (c = g[l]) && f.push(m[l] = c);
                            i(null, g = [], f, a)
                        }
                        l = g.length;
                        while (l--)
                            (c = g[l]) && (f = i ? P.call(s, c) : h[l]) > -1 && (s[f] = !(o[f] = c))
                    }
                } else
                    g = mt(g === o ? g.splice(d, g.length) : g), i ? i(null, o, g, a) : _.apply(o, g)
            })
        }
        function yt(e) {
            var t, n, r, s = e.length, o = i.relative[e[0].type], u = o || i.relative[" "], a = o ? 1 : 0, l = dt(function(e) {
                return e === t
            }, u, !0), c = dt(function(e) {
                return P.call(t, e) > -1
            }, u, !0), h = [function(e, n, r) {
                    return !o && (r || n !== f) || ((t = n).nodeType ? l(e, n, r) : c(e, n, r))
                }];
            for (; a < s; a++)
                if (n = i.relative[e[a].type])
                    h = [dt(vt(h), n)];
                else {
                    n = i.filter[e[a].type].apply(null, e[a].matches);
                    if (n[w]) {
                        r = ++a;
                        for (; r < s; r++)
                            if (i.relative[e[r].type])
                                break;
                        return gt(a > 1 && vt(h), a > 1 && pt(e.slice(0, a - 1)).replace(R, "$1"), n, a < r && yt(e.slice(a, r)), r < s && yt(e = e.slice(r)), r < s && pt(e))
                    }
                    h.push(n)
                }
            return vt(h)
        }
        function bt(e, t) {
            var n = 0, s = t.length > 0, o = e.length > 0, u = function(u, a, l, h, p) {
                var d, v, m, g = [], y = 0, b = "0", w = u && [], E = p != null, S = f, T = u || o && i.find.TAG("*", p && a.parentNode || a), N = x += S == null ? 1 : Math.random() || .1;
                E && (f = a !== c && a, r = n);
                for (; (d = T[b]) != null; b++) {
                    if (o && d) {
                        v = 0;
                        while (m = e[v++])
                            if (m(d, a, l)) {
                                h.push(d);
                                break
                            }
                        E && (x = N, r = ++n)
                    }
                    s && ((d = !m && d) && y--, u && w.push(d))
                }
                y += b;
                if (s && b !== y) {
                    v = 0;
                    while (m = t[v++])
                        m(w, g, a, l);
                    if (u) {
                        if (y > 0)
                            while (b--)
                                !w[b] && !g[b] && (g[b] = M.call(h));
                        g = mt(g)
                    }
                    _.apply(h, g), E && !u && g.length > 0 && y + t.length > 1 && ut.uniqueSort(h)
                }
                return E && (x = N, f = S), w
            };
            return s ? st(u) : u
        }
        function wt(e, t, n) {
            var r = 0, i = t.length;
            for (; r < i; r++)
                ut(e, t[r], n);
            return n
        }
        function Et(e, t, n, r) {
            var s, o, a, f, l, c = ht(e);
            if (!r && c.length === 1) {
                o = c[0] = c[0].slice(0);
                if (o.length > 2 && (a = o[0]).type === "ID" && t.nodeType === 9 && !p && i.relative[o[1].type]) {
                    t = i.find.ID(a.matches[0].replace(et, tt), t)[0];
                    if (!t)
                        return n;
                    e = e.slice(o.shift().value.length)
                }
                s = V.needsContext.test(e) ? 0 : o.length;
                while (s--) {
                    a = o[s];
                    if (i.relative[f = a.type])
                        break;
                    if (l = i.find[f])
                        if (r = l(a.matches[0].replace(et, tt), $.test(o[0].type) && t.parentNode || t)) {
                            o.splice(s, 1), e = r.length && pt(o);
                            if (!e)
                                return _.apply(n, D.call(r, 0)), n;
                            break
                        }
                }
            }
            return u(e, c)(r, t, p, n, $.test(e)), n
        }
        function St() {
        }
        var n, r, i, s, o, u, a, f, l, c, h, p, d, v, m, g, y, w = "sizzle" + -(new Date), E = e.document, S = {}, x = 0, T = 0, N = it(), C = it(), k = it(), L = typeof t, A = 1 << 31, O = [], M = O.pop, _ = O.push, D = O.slice, P = O.indexOf || function(e) {
            var t = 0, n = this.length;
            for (; t < n; t++)
                if (this[t] === e)
                    return t;
            return -1
        }, H = "[\\x20\\t\\r\\n\\f]", B = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", j = B.replace("w", "w#"), F = "([*^$|!~]?=)", I = "\\[" + H + "*(" + B + ")" + H + "*(?:" + F + H + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + j + ")|)|)" + H + "*\\]", q = ":(" + B + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + I.replace(3, 8) + ")*)|.*)\\)|)", R = new RegExp("^" + H + "+|((?:^|[^\\\\])(?:\\\\.)*)" + H + "+$", "g"), U = new RegExp("^" + H + "*," + H + "*"), z = new RegExp("^" + H + "*([\\x20\\t\\r\\n\\f>+~])" + H + "*"), W = new RegExp(q), X = new RegExp("^" + j + "$"), V = {ID: new RegExp("^#(" + B + ")"),CLASS: new RegExp("^\\.(" + B + ")"),NAME: new RegExp("^\\[name=['\"]?(" + B + ")['\"]?\\]"),TAG: new RegExp("^(" + B.replace("w", "w*") + ")"),ATTR: new RegExp("^" + I),PSEUDO: new RegExp("^" + q),CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + H + "*(even|odd|(([+-]|)(\\d*)n|)" + H + "*(?:([+-]|)" + H + "*(\\d+)|))" + H + "*\\)|)", "i"),needsContext: new RegExp("^" + H + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + H + "*((?:-\\d)?\\d*)" + H + "*\\)|)(?=[^-]|$)", "i")}, $ = /[\x20\t\r\n\f]*[+~]/, J = /^[^{]+\{\s*\[native code/, K = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, Q = /^(?:input|select|textarea|button)$/i, G = /^h\d$/i, Y = /'|\\/g, Z = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g, et = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g, tt = function(e, t) {
            var n = "0x" + t - 65536;
            return n !== n ? t : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, n & 1023 | 56320)
        };
        try {
            D.call(E.documentElement.childNodes, 0)[0].nodeType
        } catch (nt) {
            D = function(e) {
                var t, n = [];
                while (t = this[e++])
                    n.push(t);
                return n
            }
        }
        o = ut.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? t.nodeName !== "HTML" : !1
        }, l = ut.setDocument = function(e) {
            var n = e ? e.ownerDocument || e : E;
            if (n === c || n.nodeType !== 9 || !n.documentElement)
                return c;
            c = n, h = n.documentElement, p = o(n), S.tagNameNoComments = ot(function(e) {
                return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length
            }), S.attributes = ot(function(e) {
                e.innerHTML = "<select></select>";
                var t = typeof e.lastChild.getAttribute("multiple");
                return t !== "boolean" && t !== "string"
            }), S.getByClassName = ot(function(e) {
                return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", !e.getElementsByClassName || !e.getElementsByClassName("e").length ? !1 : (e.lastChild.className = "e", e.getElementsByClassName("e").length === 2)
            }), S.getByName = ot(function(e) {
                e.id = w + 0, e.innerHTML = "<a name='" + w + "'></a><div name='" + w + "'></div>", h.insertBefore(e, h.firstChild);
                var t = n.getElementsByName && n.getElementsByName(w).length === 2 + n.getElementsByName(w + 0).length;
                return S.getIdNotName = !n.getElementById(w), h.removeChild(e), t
            }), i.attrHandle = ot(function(e) {
                return e.innerHTML = "<a href='#'></a>", e.firstChild && typeof e.firstChild.getAttribute !== L && e.firstChild.getAttribute("href") === "#"
            }) ? {} : {href: function(e) {
                    return e.getAttribute("href", 2)
                },type: function(e) {
                    return e.getAttribute("type")
                }}, S.getIdNotName ? (i.find.ID = function(e, t) {
                if (typeof t.getElementById !== L && !p) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }, i.filter.ID = function(e) {
                var t = e.replace(et, tt);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }) : (i.find.ID = function(e, n) {
                if (typeof n.getElementById !== L && !p) {
                    var r = n.getElementById(e);
                    return r ? r.id === e || typeof r.getAttributeNode !== L && r.getAttributeNode("id").value === e ? [r] : t : []
                }
            }, i.filter.ID = function(e) {
                var t = e.replace(et, tt);
                return function(e) {
                    var n = typeof e.getAttributeNode !== L && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), i.find.TAG = S.tagNameNoComments ? function(e, t) {
                if (typeof t.getElementsByTagName !== L)
                    return t.getElementsByTagName(e)
            } : function(e, t) {
                var n, r = [], i = 0, s = t.getElementsByTagName(e);
                if (e === "*") {
                    while (n = s[i++])
                        n.nodeType === 1 && r.push(n);
                    return r
                }
                return s
            }, i.find.NAME = S.getByName && function(e, t) {
                if (typeof t.getElementsByName !== L)
                    return t.getElementsByName(name)
            }, i.find.CLASS = S.getByClassName && function(e, t) {
                if (typeof t.getElementsByClassName !== L && !p)
                    return t.getElementsByClassName(e)
            }, v = [], d = [":focus"];
            if (S.qsa = rt(n.querySelectorAll))
                ot(function(e) {
                    e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || d.push("\\[" + H + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), e.querySelectorAll(":checked").length || d.push(":checked")
                }), ot(function(e) {
                    e.innerHTML = "<input type='hidden' i=''/>", e.querySelectorAll("[i^='']").length && d.push("[*^$]=" + H + "*(?:\"\"|'')"), e.querySelectorAll(":enabled").length || d.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), d.push(",.*:")
                });
            return (S.matchesSelector = rt(m = h.matchesSelector || h.mozMatchesSelector || h.webkitMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ot(function(e) {
                S.disconnectedMatch = m.call(e, "div"), m.call(e, "[s!='']:x"), v.push("!=", q)
            }), d = new RegExp(d.join("|")), v = new RegExp(v.join("|")), g = rt(h.contains) || h.compareDocumentPosition ? function(e, t) {
                var n = e.nodeType === 9 ? e.documentElement : e, r = t && t.parentNode;
                return e === r || !!r && r.nodeType === 1 && !!(n.contains ? n.contains(r) : e.compareDocumentPosition && e.compareDocumentPosition(r) & 16)
            } : function(e, t) {
                if (t)
                    while (t = t.parentNode)
                        if (t === e)
                            return !0;
                return !1
            }, y = h.compareDocumentPosition ? function(e, t) {
                var r;
                if (e === t)
                    return a = !0, 0;
                if (r = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t))
                    return r & 1 || e.parentNode && e.parentNode.nodeType === 11 ? e === n || g(E, e) ? -1 : t === n || g(E, t) ? 1 : 0 : r & 4 ? -1 : 1;
                return e.compareDocumentPosition ? -1 : 1
            } : function(e, t) {
                var r, i = 0, s = e.parentNode, o = t.parentNode, u = [e], f = [t];
                if (e === t)
                    return a = !0, 0;
                if (!s || !o)
                    return e === n ? -1 : t === n ? 1 : s ? -1 : o ? 1 : 0;
                if (s === o)
                    return at(e, t);
                r = e;
                while (r = r.parentNode)
                    u.unshift(r);
                r = t;
                while (r = r.parentNode)
                    f.unshift(r);
                while (u[i] === f[i])
                    i++;
                return i ? at(u[i], f[i]) : u[i] === E ? -1 : f[i] === E ? 1 : 0
            }, a = !1, [0, 0].sort(y), S.detectDuplicates = a, c
        }, ut.matches = function(e, t) {
            return ut(e, null, null, t)
        }, ut.matchesSelector = function(e, t) {
            (e.ownerDocument || e) !== c && l(e), t = t.replace(Z, "='$1']");
            if (S.matchesSelector && !p && (!v || !v.test(t)) && !d.test(t))
                try {
                    var n = m.call(e, t);
                    if (n || S.disconnectedMatch || e.document && e.document.nodeType !== 11)
                        return n
                } catch (r) {
                }
            return ut(t, c, null, [e]).length > 0
        }, ut.contains = function(e, t) {
            return (e.ownerDocument || e) !== c && l(e), g(e, t)
        }, ut.attr = function(e, t) {
            var n;
            return (e.ownerDocument || e) !== c && l(e), p || (t = t.toLowerCase()), (n = i.attrHandle[t]) ? n(e) : p || S.attributes ? e.getAttribute(t) : ((n = e.getAttributeNode(t)) || e.getAttribute(t)) && e[t] === !0 ? t : n && n.specified ? n.value : null
        }, ut.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, ut.uniqueSort = function(e) {
            var t, n = [], r = 1, i = 0;
            a = !S.detectDuplicates, e.sort(y);
            if (a) {
                for (; t = e[r]; r++)
                    t === e[r - 1] && (i = n.push(r));
                while (i--)
                    e.splice(n[i], 1)
            }
            return e
        }, s = ut.getText = function(e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (!i)
                for (; t = e[r]; r++)
                    n += s(t);
            else if (i === 1 || i === 9 || i === 11) {
                if (typeof e.textContent == "string")
                    return e.textContent;
                for (e = e.firstChild; e; e = e.nextSibling)
                    n += s(e)
            } else if (i === 3 || i === 4)
                return e.nodeValue;
            return n
        }, i = ut.selectors = {cacheLength: 50,createPseudo: st,match: V,find: {},relative: {">": {dir: "parentNode",first: !0}," ": {dir: "parentNode"},"+": {dir: "previousSibling",first: !0},"~": {dir: "previousSibling"}},preFilter: {ATTR: function(e) {
                    return e[1] = e[1].replace(et, tt), e[3] = (e[4] || e[5] || "").replace(et, tt), e[2] === "~=" && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), e[1].slice(0, 3) === "nth" ? (e[3] || ut.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * (e[3] === "even" || e[3] === "odd")), e[5] = +(e[7] + e[8] || e[3] === "odd")) : e[3] && ut.error(e[0]), e
                },PSEUDO: function(e) {
                    var t, n = !e[5] && e[2];
                    return V.CHILD.test(e[0]) ? null : (e[4] ? e[2] = e[4] : n && W.test(n) && (t = ht(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }},filter: {TAG: function(e) {
                    return e === "*" ? function() {
                        return !0
                    } : (e = e.replace(et, tt).toLowerCase(), function(t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    })
                },CLASS: function(e) {
                    var t = N[e + " "];
                    return t || (t = new RegExp("(^|" + H + ")" + e + "(" + H + "|$)")) && N(e, function(e) {
                        return t.test(e.className || typeof e.getAttribute !== L && e.getAttribute("class") || "")
                    })
                },ATTR: function(e, t, n) {
                    return function(r) {
                        var i = ut.attr(r, e);
                        return i == null ? t === "!=" : t ? (i += "", t === "=" ? i === n : t === "!=" ? i !== n : t === "^=" ? n && i.indexOf(n) === 0 : t === "*=" ? n && i.indexOf(n) > -1 : t === "$=" ? n && i.slice(-n.length) === n : t === "~=" ? (" " + i + " ").indexOf(n) > -1 : t === "|=" ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0
                    }
                },CHILD: function(e, t, n, r, i) {
                    var s = e.slice(0, 3) !== "nth", o = e.slice(-4) !== "last", u = t === "of-type";
                    return r === 1 && i === 0 ? function(e) {
                        return !!e.parentNode
                    } : function(t, n, a) {
                        var f, l, c, h, p, d, v = s !== o ? "nextSibling" : "previousSibling", m = t.parentNode, g = u && t.nodeName.toLowerCase(), y = !a && !u;
                        if (m) {
                            if (s) {
                                while (v) {
                                    c = t;
                                    while (c = c[v])
                                        if (u ? c.nodeName.toLowerCase() === g : c.nodeType === 1)
                                            return !1;
                                    d = v = e === "only" && !d && "nextSibling"
                                }
                                return !0
                            }
                            d = [o ? m.firstChild : m.lastChild];
                            if (o && y) {
                                l = m[w] || (m[w] = {}), f = l[e] || [], p = f[0] === x && f[1], h = f[0] === x && f[2], c = p && m.childNodes[p];
                                while (c = ++p && c && c[v] || (h = p = 0) || d.pop())
                                    if (c.nodeType === 1 && ++h && c === t) {
                                        l[e] = [x, p, h];
                                        break
                                    }
                            } else if (y && (f = (t[w] || (t[w] = {}))[e]) && f[0] === x)
                                h = f[1];
                            else
                                while (c = ++p && c && c[v] || (h = p = 0) || d.pop())
                                    if ((u ? c.nodeName.toLowerCase() === g : c.nodeType === 1) && ++h) {
                                        y && ((c[w] || (c[w] = {}))[e] = [x, h]);
                                        if (c === t)
                                            break
                                    }
                            return h -= i, h === r || h % r === 0 && h / r >= 0
                        }
                    }
                },PSEUDO: function(e, t) {
                    var n, r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || ut.error("unsupported pseudo: " + e);
                    return r[w] ? r(t) : r.length > 1 ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? st(function(e, n) {
                        var i, s = r(e, t), o = s.length;
                        while (o--)
                            i = P.call(e, s[o]), e[i] = !(n[i] = s[o])
                    }) : function(e) {
                        return r(e, 0, n)
                    }) : r
                }},pseudos: {not: st(function(e) {
                    var t = [], n = [], r = u(e.replace(R, "$1"));
                    return r[w] ? st(function(e, t, n, i) {
                        var s, o = r(e, null, i, []), u = e.length;
                        while (u--)
                            if (s = o[u])
                                e[u] = !(t[u] = s)
                    }) : function(e, i, s) {
                        return t[0] = e, r(t, null, s, n), !n.pop()
                    }
                }),has: st(function(e) {
                    return function(t) {
                        return ut(e, t).length > 0
                    }
                }),contains: st(function(e) {
                    return function(t) {
                        return (t.textContent || t.innerText || s(t)).indexOf(e) > -1
                    }
                }),lang: st(function(e) {
                    return X.test(e || "") || ut.error("unsupported lang: " + e), e = e.replace(et, tt).toLowerCase(), function(t) {
                        var n;
                        do
                            if (n = p ? t.getAttribute("xml:lang") || t.getAttribute("lang") : t.lang)
                                return n = n.toLowerCase(), n === e || n.indexOf(e + "-") === 0;
                        while ((t = t.parentNode) && t.nodeType === 1);
                        return !1
                    }
                }),target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },root: function(e) {
                    return e === h
                },focus: function(e) {
                    return e === c.activeElement && (!c.hasFocus || c.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },enabled: function(e) {
                    return e.disabled === !1
                },disabled: function(e) {
                    return e.disabled === !0
                },checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return t === "input" && !!e.checked || t === "option" && !!e.selected
                },selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                },empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeName > "@" || e.nodeType === 3 || e.nodeType === 4)
                            return !1;
                    return !0
                },parent: function(e) {
                    return !i.pseudos.empty(e)
                },header: function(e) {
                    return G.test(e.nodeName)
                },input: function(e) {
                    return Q.test(e.nodeName)
                },button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return t === "input" && e.type === "button" || t === "button"
                },text: function(e) {
                    var t;
                    return e.nodeName.toLowerCase() === "input" && e.type === "text" && ((t = e.getAttribute("type")) == null || t.toLowerCase() === e.type)
                },first: ct(function() {
                    return [0]
                }),last: ct(function(e, t) {
                    return [t - 1]
                }),eq: ct(function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }),even: ct(function(e, t) {
                    var n = 0;
                    for (; n < t; n += 2)
                        e.push(n);
                    return e
                }),odd: ct(function(e, t) {
                    var n = 1;
                    for (; n < t; n += 2)
                        e.push(n);
                    return e
                }),lt: ct(function(e, t, n) {
                    var r = n < 0 ? n + t : n;
                    for (; --r >= 0; )
                        e.push(r);
                    return e
                }),gt: ct(function(e, t, n) {
                    var r = n < 0 ? n + t : n;
                    for (; ++r < t; )
                        e.push(r);
                    return e
                })}};
        for (n in {radio: !0,checkbox: !0,file: !0,password: !0,image: !0})
            i.pseudos[n] = ft(n);
        for (n in {submit: !0,reset: !0})
            i.pseudos[n] = lt(n);
        u = ut.compile = function(e, t) {
            var n, r = [], i = [], s = k[e + " "];
            if (!s) {
                t || (t = ht(e)), n = t.length;
                while (n--)
                    s = yt(t[n]), s[w] ? r.push(s) : i.push(s);
                s = k(e, bt(i, r))
            }
            return s
        }, i.pseudos.nth = i.pseudos.eq, i.filters = St.prototype = i.pseudos, i.setFilters = new St, l(), ut.attr = b.attr, b.find = ut, b.expr = ut.selectors, b.expr[":"] = b.expr.pseudos, b.unique = ut.uniqueSort, b.text = ut.getText, b.isXMLDoc = ut.isXML, b.contains = ut.contains
    }(e);
    var ot = /Until$/, ut = /^(?:parents|prev(?:Until|All))/, at = /^.[^:#\[\.,]*$/, ft = b.expr.match.needsContext, lt = {children: !0,contents: !0,next: !0,prev: !0};
    b.fn.extend({find: function(e) {
            var t, n, r, i = this.length;
            if (typeof e != "string")
                return r = this, this.pushStack(b(e).filter(function() {
                    for (t = 0; t < i; t++)
                        if (b.contains(r[t], this))
                            return !0
                }));
            n = [];
            for (t = 0; t < i; t++)
                b.find(e, this[t], n);
            return n = this.pushStack(i > 1 ? b.unique(n) : n), n.selector = (this.selector ? this.selector + " " : "") + e, n
        },has: function(e) {
            var t, n = b(e, this), r = n.length;
            return this.filter(function() {
                for (t = 0; t < r; t++)
                    if (b.contains(this, n[t]))
                        return !0
            })
        },not: function(e) {
            return this.pushStack(ht(this, e, !1))
        },filter: function(e) {
            return this.pushStack(ht(this, e, !0))
        },is: function(e) {
            return !!e && (typeof e == "string" ? ft.test(e) ? b(e, this.context).index(this[0]) >= 0 : b.filter(e, this).length > 0 : this.filter(e).length > 0)
        },closest: function(e, t) {
            var n, r = 0, i = this.length, s = [], o = ft.test(e) || typeof e != "string" ? b(e, t || this.context) : 0;
            for (; r < i; r++) {
                n = this[r];
                while (n && n.ownerDocument && n !== t && n.nodeType !== 11) {
                    if (o ? o.index(n) > -1 : b.find.matchesSelector(n, e)) {
                        s.push(n);
                        break
                    }
                    n = n.parentNode
                }
            }
            return this.pushStack(s.length > 1 ? b.unique(s) : s)
        },index: function(e) {
            return e ? typeof e == "string" ? b.inArray(this[0], b(e)) : b.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },add: function(e, t) {
            var n = typeof e == "string" ? b(e, t) : b.makeArray(e && e.nodeType ? [e] : e), r = b.merge(this.get(), n);
            return this.pushStack(b.unique(r))
        },addBack: function(e) {
            return this.add(e == null ? this.prevObject : this.prevObject.filter(e))
        }}), b.fn.andSelf = b.fn.addBack, b.each({parent: function(e) {
            var t = e.parentNode;
            return t && t.nodeType !== 11 ? t : null
        },parents: function(e) {
            return b.dir(e, "parentNode")
        },parentsUntil: function(e, t, n) {
            return b.dir(e, "parentNode", n)
        },next: function(e) {
            return ct(e, "nextSibling")
        },prev: function(e) {
            return ct(e, "previousSibling")
        },nextAll: function(e) {
            return b.dir(e, "nextSibling")
        },prevAll: function(e) {
            return b.dir(e, "previousSibling")
        },nextUntil: function(e, t, n) {
            return b.dir(e, "nextSibling", n)
        },prevUntil: function(e, t, n) {
            return b.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return b.sibling((e.parentNode || {}).firstChild, e)
        },children: function(e) {
            return b.sibling(e.firstChild)
        },contents: function(e) {
            return b.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : b.merge([], e.childNodes)
        }}, function(e, t) {
        b.fn[e] = function(n, r) {
            var i = b.map(this, t, n);
            return ot.test(e) || (r = n), r && typeof r == "string" && (i = b.filter(r, i)), i = this.length > 1 && !lt[e] ? b.unique(i) : i, this.length > 1 && ut.test(e) && (i = i.reverse()), this.pushStack(i)
        }
    }), b.extend({filter: function(e, t, n) {
            return n && (e = ":not(" + e + ")"), t.length === 1 ? b.find.matchesSelector(t[0], e) ? [t[0]] : [] : b.find.matches(e, t)
        },dir: function(e, n, r) {
            var i = [], s = e[n];
            while (s && s.nodeType !== 9 && (r === t || s.nodeType !== 1 || !b(s).is(r)))
                s.nodeType === 1 && i.push(s), s = s[n];
            return i
        },sibling: function(e, t) {
            var n = [];
            for (; e; e = e.nextSibling)
                e.nodeType === 1 && e !== t && n.push(e);
            return n
        }});
    var dt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", vt = / jQuery\d+="(?:null|\d+)"/g, mt = new RegExp("<(?:" + dt + ")[\\s/>]", "i"), gt = /^\s+/, yt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, bt = /<([\w:]+)/, wt = /<tbody/i, Et = /<|&#?\w+;/, St = /<(?:script|style|link)/i, xt = /^(?:checkbox|radio)$/i, Tt = /checked\s*(?:[^=]|=\s*.checked.)/i, Nt = /^$|\/(?:java|ecma)script/i, Ct = /^true\/(.*)/, kt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Lt = {option: [1, "<select multiple='multiple'>", "</select>"],legend: [1, "<fieldset>", "</fieldset>"],area: [1, "<map>", "</map>"],param: [1, "<object>", "</object>"],thead: [1, "<table>", "</table>"],tr: [2, "<table><tbody>", "</tbody></table>"],col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],_default: b.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]}, At = pt(s), Ot = At.appendChild(s.createElement("div"));
    Lt.optgroup = Lt.option, Lt.tbody = Lt.tfoot = Lt.colgroup = Lt.caption = Lt.thead, Lt.th = Lt.td, b.fn.extend({text: function(e) {
            return b.access(this, function(e) {
                return e === t ? b.text(this) : this.empty().append((this[0] && this[0].ownerDocument || s).createTextNode(e))
            }, null, e, arguments.length)
        },wrapAll: function(e) {
            if (b.isFunction(e))
                return this.each(function(t) {
                    b(this).wrapAll(e.call(this, t))
                });
            if (this[0]) {
                var t = b(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    var e = this;
                    while (e.firstChild && e.firstChild.nodeType === 1)
                        e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },wrapInner: function(e) {
            return b.isFunction(e) ? this.each(function(t) {
                b(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = b(this), n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },wrap: function(e) {
            var t = b.isFunction(e);
            return this.each(function(n) {
                b(this).wrapAll(t ? e.call(this, n) : e)
            })
        },unwrap: function() {
            return this.parent().each(function() {
                b.nodeName(this, "body") || b(this).replaceWith(this.childNodes)
            }).end()
        },append: function() {
            return this.domManip(arguments, !0, function(e) {
                (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) && this.appendChild(e)
            })
        },prepend: function() {
            return this.domManip(arguments, !0, function(e) {
                (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) && this.insertBefore(e, this.firstChild)
            })
        },before: function() {
            return this.domManip(arguments, !1, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },after: function() {
            return this.domManip(arguments, !1, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },remove: function(e, t) {
            var n, r = 0;
            for (; (n = this[r]) != null; r++)
                if (!e || b.filter(e, [n]).length > 0)
                    !t && n.nodeType === 1 && b.cleanData(jt(n)), n.parentNode && (t && b.contains(n.ownerDocument, n) && Pt(jt(n, "script")), n.parentNode.removeChild(n));
            return this
        },empty: function() {
            var e, t = 0;
            for (; (e = this[t]) != null; t++) {
                e.nodeType === 1 && b.cleanData(jt(e, !1));
                while (e.firstChild)
                    e.removeChild(e.firstChild);
                e.options && b.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },clone: function(e, t) {
            return e = e == null ? !1 : e, t = t == null ? e : t, this.map(function() {
                return b.clone(this, e, t)
            })
        },html: function(e) {
            return b.access(this, function(e) {
                var n = this[0] || {}, r = 0, i = this.length;
                if (e === t)
                    return n.nodeType === 1 ? n.innerHTML.replace(vt, "") : t;
                if (typeof e == "string" && !St.test(e) && (b.support.htmlSerialize || !mt.test(e)) && (b.support.leadingWhitespace || !gt.test(e)) && !Lt[(bt.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = e.replace(yt, "<$1></$2>");
                    try {
                        for (; r < i; r++)
                            n = this[r] || {}, n.nodeType === 1 && (b.cleanData(jt(n, !1)), n.innerHTML = e);
                        n = 0
                    } catch (s) {
                    }
                }
                n && this.empty().append(e)
            }, null, e, arguments.length)
        },replaceWith: function(e) {
            var t = b.isFunction(e);
            return !t && typeof e != "string" && (e = b(e).not(this).detach()), this.domManip([e], !0, function(e) {
                var t = this.nextSibling, n = this.parentNode;
                n && (b(this).remove(), n.insertBefore(e, t))
            })
        },detach: function(e) {
            return this.remove(e, !0)
        },domManip: function(e, n, r) {
            e = h.apply([], e);
            var i, s, o, u, a, f, l = 0, c = this.length, p = this, d = c - 1, v = e[0], m = b.isFunction(v);
            if (m || !(c <= 1 || typeof v != "string" || b.support.checkClone || !Tt.test(v)))
                return this.each(function(i) {
                    var s = p.eq(i);
                    m && (e[0] = v.call(this, i, n ? s.html() : t)), s.domManip(e, n, r)
                });
            if (c) {
                f = b.buildFragment(e, this[0].ownerDocument, !1, this), i = f.firstChild, f.childNodes.length === 1 && (f = i);
                if (i) {
                    n = n && b.nodeName(i, "tr"), u = b.map(jt(f, "script"), _t), o = u.length;
                    for (; l < c; l++)
                        s = f, l !== d && (s = b.clone(s, !0, !0), o && b.merge(u, jt(s, "script"))), r.call(n && b.nodeName(this[l], "table") ? Mt(this[l], "tbody") : this[l], s, l);
                    if (o) {
                        a = u[u.length - 1].ownerDocument, b.map(u, Dt);
                        for (l = 0; l < o; l++)
                            s = u[l], Nt.test(s.type || "") && !b._data(s, "globalEval") && b.contains(a, s) && (s.src ? b.ajax({url: s.src,type: "GET",dataType: "script",async: !1,global: !1,"throws": !0}) : b.globalEval((s.text || s.textContent || s.innerHTML || "").replace(kt, "")))
                    }
                    f = i = null
                }
            }
            return this
        }}), b.each({appendTo: "append",prependTo: "prepend",insertBefore: "before",insertAfter: "after",replaceAll: "replaceWith"}, function(e, t) {
        b.fn[e] = function(e) {
            var n, r = 0, i = [], s = b(e), o = s.length - 1;
            for (; r <= o; r++)
                n = r === o ? this : this.clone(!0), b(s[r])[t](n), p.apply(i, n.get());
            return this.pushStack(i)
        }
    }), b.extend({clone: function(e, t, n) {
            var r, i, s, o, u, a = b.contains(e.ownerDocument, e);
            b.support.html5Clone || b.isXMLDoc(e) || !mt.test("<" + e.nodeName + ">") ? s = e.cloneNode(!0) : (Ot.innerHTML = e.outerHTML, Ot.removeChild(s = Ot.firstChild));
            if ((!b.support.noCloneEvent || !b.support.noCloneChecked) && (e.nodeType === 1 || e.nodeType === 11) && !b.isXMLDoc(e)) {
                r = jt(s), u = jt(e);
                for (o = 0; (i = u[o]) != null; ++o)
                    r[o] && Bt(i, r[o])
            }
            if (t)
                if (n) {
                    u = u || jt(e), r = r || jt(s);
                    for (o = 0; (i = u[o]) != null; o++)
                        Ht(i, r[o])
                } else
                    Ht(e, s);
            return r = jt(s, "script"), r.length > 0 && Pt(r, !a && jt(e, "script")), r = u = i = null, s
        },buildFragment: function(e, t, n, r) {
            var i, s, o, u, a, f, l, c = e.length, h = pt(t), p = [], d = 0;
            for (; d < c; d++) {
                s = e[d];
                if (s || s === 0)
                    if (b.type(s) === "object")
                        b.merge(p, s.nodeType ? [s] : s);
                    else if (!Et.test(s))
                        p.push(t.createTextNode(s));
                    else {
                        u = u || h.appendChild(t.createElement("div")), a = (bt.exec(s) || ["", ""])[1].toLowerCase(), l = Lt[a] || Lt._default, u.innerHTML = l[1] + s.replace(yt, "<$1></$2>") + l[2], i = l[0];
                        while (i--)
                            u = u.lastChild;
                        !b.support.leadingWhitespace && gt.test(s) && p.push(t.createTextNode(gt.exec(s)[0]));
                        if (!b.support.tbody) {
                            s = a === "table" && !wt.test(s) ? u.firstChild : l[1] === "<table>" && !wt.test(s) ? u : 0, i = s && s.childNodes.length;
                            while (i--)
                                b.nodeName(f = s.childNodes[i], "tbody") && !f.childNodes.length && s.removeChild(f)
                        }
                        b.merge(p, u.childNodes), u.textContent = "";
                        while (u.firstChild)
                            u.removeChild(u.firstChild);
                        u = h.lastChild
                    }
            }
            u && h.removeChild(u), b.support.appendChecked || b.grep(jt(p, "input"), Ft), d = 0;
            while (s = p[d++]) {
                if (r && b.inArray(s, r) !== -1)
                    continue;
                o = b.contains(s.ownerDocument, s), u = jt(h.appendChild(s), "script"), o && Pt(u);
                if (n) {
                    i = 0;
                    while (s = u[i++])
                        Nt.test(s.type || "") && n.push(s)
                }
            }
            return u = null, h
        },cleanData: function(e, t) {
            var n, r, s, o, u = 0, a = b.expando, f = b.cache, c = b.support.deleteExpando, h = b.event.special;
            for (; (n = e[u]) != null; u++)
                if (t || b.acceptData(n)) {
                    s = n[a], o = s && f[s];
                    if (o) {
                        if (o.events)
                            for (r in o.events)
                                h[r] ? b.event.remove(n, r) : b.removeEvent(n, r, o.handle);
                        f[s] && (delete f[s], c ? delete n[a] : typeof n.removeAttribute !== i ? n.removeAttribute(a) : n[a] = null, l.push(s))
                    }
                }
        }});
    var It, qt, Rt, Ut = /alpha\([^)]*\)/i, zt = /opacity\s*=\s*([^)]*)/, Wt = /^(top|right|bottom|left)$/, Xt = /^(none|table(?!-c[ea]).+)/, Vt = /^margin/, $t = new RegExp("^(" + w + ")(.*)$", "i"), Jt = new RegExp("^(" + w + ")(?!px)[a-z%]+$", "i"), Kt = new RegExp("^([+-])=(" + w + ")", "i"), Qt = {BODY: "block"}, Gt = {position: "absolute",visibility: "hidden",display: "block"}, Yt = {letterSpacing: 0,fontWeight: 400}, Zt = ["Top", "Right", "Bottom", "Left"], en = ["Webkit", "O", "Moz", "ms"];
    b.fn.extend({css: function(e, n) {
            return b.access(this, function(e, n, r) {
                var i, s, o = {}, u = 0;
                if (b.isArray(n)) {
                    s = qt(e), i = n.length;
                    for (; u < i; u++)
                        o[n[u]] = b.css(e, n[u], !1, s);
                    return o
                }
                return r !== t ? b.style(e, n, r) : b.css(e, n)
            }, e, n, arguments.length > 1)
        },show: function() {
            return rn(this, !0)
        },hide: function() {
            return rn(this)
        },toggle: function(e) {
            var t = typeof e == "boolean";
            return this.each(function() {
                (t ? e : nn(this)) ? b(this).show() : b(this).hide()
            })
        }}), b.extend({cssHooks: {opacity: {get: function(e, t) {
                    if (t) {
                        var n = Rt(e, "opacity");
                        return n === "" ? "1" : n
                    }
                }}},cssNumber: {columnCount: !0,fillOpacity: !0,fontWeight: !0,lineHeight: !0,opacity: !0,orphans: !0,widows: !0,zIndex: !0,zoom: !0},cssProps: {"float": b.support.cssFloat ? "cssFloat" : "styleFloat"},style: function(e, n, r, i) {
            if (!e || e.nodeType === 3 || e.nodeType === 8 || !e.style)
                return;
            var s, o, u, a = b.camelCase(n), f = e.style;
            n = b.cssProps[a] || (b.cssProps[a] = tn(f, a)), u = b.cssHooks[n] || b.cssHooks[a];
            if (r === t)
                return u && "get" in u && (s = u.get(e, !1, i)) !== t ? s : f[n];
            o = typeof r, o === "string" && (s = Kt.exec(r)) && (r = (s[1] + 1) * s[2] + parseFloat(b.css(e, n)), o = "number");
            if (r == null || o === "number" && isNaN(r))
                return;
            o === "number" && !b.cssNumber[a] && (r += "px"), !b.support.clearCloneStyle && r === "" && n.indexOf("background") === 0 && (f[n] = "inherit");
            if (!u || !("set" in u) || (r = u.set(e, r, i)) !== t)
                try {
                    f[n] = r
                } catch (l) {
                }
        },css: function(e, n, r, i) {
            var s, o, u, a = b.camelCase(n);
            return n = b.cssProps[a] || (b.cssProps[a] = tn(e.style, a)), u = b.cssHooks[n] || b.cssHooks[a], u && "get" in u && (o = u.get(e, !0, r)), o === t && (o = Rt(e, n, i)), o === "normal" && n in Yt && (o = Yt[n]), r === "" || r ? (s = parseFloat(o), r === !0 || b.isNumeric(s) ? s || 0 : o) : o
        },swap: function(e, t, n, r) {
            var i, s, o = {};
            for (s in t)
                o[s] = e.style[s], e.style[s] = t[s];
            i = n.apply(e, r || []);
            for (s in t)
                e.style[s] = o[s];
            return i
        }}), e.getComputedStyle ? (qt = function(t) {
        return e.getComputedStyle(t, null)
    }, Rt = function(e, n, r) {
        var i, s, o, u = r || qt(e), a = u ? u.getPropertyValue(n) || u[n] : t, f = e.style;
        return u && (a === "" && !b.contains(e.ownerDocument, e) && (a = b.style(e, n)), Jt.test(a) && Vt.test(n) && (i = f.width, s = f.minWidth, o = f.maxWidth, f.minWidth = f.maxWidth = f.width = a, a = u.width, f.width = i, f.minWidth = s, f.maxWidth = o)), a
    }) : s.documentElement.currentStyle && (qt = function(e) {
        return e.currentStyle
    }, Rt = function(e, n, r) {
        var i, s, o, u = r || qt(e), a = u ? u[n] : t, f = e.style;
        return a == null && f && f[n] && (a = f[n]), Jt.test(a) && !Wt.test(n) && (i = f.left, s = e.runtimeStyle, o = s && s.left, o && (s.left = e.currentStyle.left), f.left = n === "fontSize" ? "1em" : a, a = f.pixelLeft + "px", f.left = i, o && (s.left = o)), a === "" ? "auto" : a
    }), b.each(["height", "width"], function(e, t) {
        b.cssHooks[t] = {get: function(e, n, r) {
                if (n)
                    return e.offsetWidth === 0 && Xt.test(b.css(e, "display")) ? b.swap(e, Gt, function() {
                        return un(e, t, r)
                    }) : un(e, t, r)
            },set: function(e, n, r) {
                var i = r && qt(e);
                return sn(e, n, r ? on(e, t, r, b.support.boxSizing && b.css(e, "boxSizing", !1, i) === "border-box", i) : 0)
            }}
    }), b.support.opacity || (b.cssHooks.opacity = {get: function(e, t) {
            return zt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },set: function(e, t) {
            var n = e.style, r = e.currentStyle, i = b.isNumeric(t) ? "alpha(opacity=" + t * 100 + ")" : "", s = r && r.filter || n.filter || "";
            n.zoom = 1;
            if ((t >= 1 || t === "") && b.trim(s.replace(Ut, "")) === "" && n.removeAttribute) {
                n.removeAttribute("filter");
                if (t === "" || r && !r.filter)
                    return
            }
            n.filter = Ut.test(s) ? s.replace(Ut, i) : s + " " + i
        }}), b(function() {
        b.support.reliableMarginRight || (b.cssHooks.marginRight = {get: function(e, t) {
                if (t)
                    return b.swap(e, {display: "inline-block"}, Rt, [e, "marginRight"])
            }}), !b.support.pixelPosition && b.fn.position && b.each(["top", "left"], function(e, t) {
            b.cssHooks[t] = {get: function(e, n) {
                    if (n)
                        return n = Rt(e, t), Jt.test(n) ? b(e).position()[t] + "px" : n
                }}
        })
    }), b.expr && b.expr.filters && (b.expr.filters.hidden = function(e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !b.support.reliableHiddenOffsets && (e.style && e.style.display || b.css(e, "display")) === "none"
    }, b.expr.filters.visible = function(e) {
        return !b.expr.filters.hidden(e)
    }), b.each({margin: "",padding: "",border: "Width"}, function(e, t) {
        b.cssHooks[e + t] = {expand: function(n) {
                var r = 0, i = {}, s = typeof n == "string" ? n.split(" ") : [n];
                for (; r < 4; r++)
                    i[e + Zt[r] + t] = s[r] || s[r - 2] || s[0];
                return i
            }}, Vt.test(e) || (b.cssHooks[e + t].set = sn)
    });
    var ln = /%20/g, cn = /\[\]$/, hn = /\r?\n/g, pn = /^(?:submit|button|image|reset|file)$/i, dn = /^(?:input|select|textarea|keygen)/i;
    b.fn.extend({serialize: function() {
            return b.param(this.serializeArray())
        },serializeArray: function() {
            return this.map(function() {
                var e = b.prop(this, "elements");
                return e ? b.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !b(this).is(":disabled") && dn.test(this.nodeName) && !pn.test(e) && (this.checked || !xt.test(e))
            }).map(function(e, t) {
                var n = b(this).val();
                return n == null ? null : b.isArray(n) ? b.map(n, function(e) {
                    return {name: t.name,value: e.replace(hn, "\r\n")}
                }) : {name: t.name,value: n.replace(hn, "\r\n")}
            }).get()
        }}), b.param = function(e, n) {
        var r, i = [], s = function(e, t) {
            t = b.isFunction(t) ? t() : t == null ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        n === t && (n = b.ajaxSettings && b.ajaxSettings.traditional);
        if (b.isArray(e) || e.jquery && !b.isPlainObject(e))
            b.each(e, function() {
                s(this.name, this.value)
            });
        else
            for (r in e)
                vn(r, e[r], n, s);
        return i.join("&").replace(ln, "+")
    }, b.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        b.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), b.fn.hover = function(e, t) {
        return this.mouseenter(e).mouseleave(t || e)
    };
    var mn, gn, yn = b.now(), bn = /\?/, wn = /#.*$/, En = /([?&])_=[^&]*/, Sn = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, xn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Tn = /^(?:GET|HEAD)$/, Nn = /^\/\//, Cn = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, kn = b.fn.load, Ln = {}, An = {}, On = "*/".concat("*");
    try {
        gn = o.href
    } catch (Mn) {
        gn = s.createElement("a"), gn.href = "", gn = gn.href
    }
    mn = Cn.exec(gn.toLowerCase()) || [], b.fn.load = function(e, n, r) {
        if (typeof e != "string" && kn)
            return kn.apply(this, arguments);
        var i, s, o, u = this, a = e.indexOf(" ");
        return a >= 0 && (i = e.slice(a, e.length), e = e.slice(0, a)), b.isFunction(n) ? (r = n, n = t) : n && typeof n == "object" && (o = "POST"), u.length > 0 && b.ajax({url: e,type: o,dataType: "html",data: n}).done(function(e) {
            s = arguments, u.html(i ? b("<div>").append(b.parseHTML(e)).find(i) : e)
        }).complete(r && function(e, t) {
            u.each(r, s || [e.responseText, t, e])
        }), this
    }, b.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        b.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), b.each(["get", "post"], function(e, n) {
        b[n] = function(e, r, i, s) {
            return b.isFunction(r) && (s = s || i, i = r, r = t), b.ajax({url: e,type: n,dataType: s,data: r,success: i})
        }
    }), b.extend({active: 0,lastModified: {},etag: {},ajaxSettings: {url: gn,type: "GET",isLocal: xn.test(mn[1]),global: !0,processData: !0,async: !0,contentType: "application/x-www-form-urlencoded; charset=UTF-8",accepts: {"*": On,text: "text/plain",html: "text/html",xml: "application/xml, text/xml",json: "application/json, text/javascript"},contents: {xml: /xml/,html: /html/,json: /json/},responseFields: {xml: "responseXML",text: "responseText"},converters: {"* text": e.String,"text html": !0,"text json": b.parseJSON,"text xml": b.parseXML},flatOptions: {url: !0,context: !0}},ajaxSetup: function(e, t) {
            return t ? Pn(Pn(e, b.ajaxSettings), t) : Pn(b.ajaxSettings, e)
        },ajaxPrefilter: _n(Ln),ajaxTransport: _n(An),ajax: function(e, n) {
            function N(e, n, r, i) {
                var l, g, y, E, S, T = n;
                if (w === 2)
                    return;
                w = 2, u && clearTimeout(u), f = t, o = i || "", x.readyState = e > 0 ? 4 : 0, r && (E = Hn(c, x, r));
                if (e >= 200 && e < 300 || e === 304)
                    c.ifModified && (S = x.getResponseHeader("Last-Modified"), S && (b.lastModified[s] = S), S = x.getResponseHeader("etag"), S && (b.etag[s] = S)), e === 204 ? (l = !0, T = "nocontent") : e === 304 ? (l = !0, T = "notmodified") : (l = Bn(c, E), T = l.state, g = l.data, y = l.error, l = !y);
                else {
                    y = T;
                    if (e || !T)
                        T = "error", e < 0 && (e = 0)
                }
                x.status = e, x.statusText = (n || T) + "", l ? d.resolveWith(h, [g, T, x]) : d.rejectWith(h, [x, T, y]), x.statusCode(m), m = t, a && p.trigger(l ? "ajaxSuccess" : "ajaxError", [x, c, l ? g : y]), v.fireWith(h, [x, T]), a && (p.trigger("ajaxComplete", [x, c]), --b.active || b.event.trigger("ajaxStop"))
            }
            typeof e == "object" && (n = e, e = t), n = n || {};
            var r, i, s, o, u, a, f, l, c = b.ajaxSetup({}, n), h = c.context || c, p = c.context && (h.nodeType || h.jquery) ? b(h) : b.event, d = b.Deferred(), v = b.Callbacks("once memory"), m = c.statusCode || {}, g = {}, y = {}, w = 0, S = "canceled", x = {readyState: 0,getResponseHeader: function(e) {
                    var t;
                    if (w === 2) {
                        if (!l) {
                            l = {};
                            while (t = Sn.exec(o))
                                l[t[1].toLowerCase()] = t[2]
                        }
                        t = l[e.toLowerCase()]
                    }
                    return t == null ? null : t
                },getAllResponseHeaders: function() {
                    return w === 2 ? o : null
                },setRequestHeader: function(e, t) {
                    var n = e.toLowerCase();
                    return w || (e = y[n] = y[n] || e, g[e] = t), this
                },overrideMimeType: function(e) {
                    return w || (c.mimeType = e), this
                },statusCode: function(e) {
                    var t;
                    if (e)
                        if (w < 2)
                            for (t in e)
                                m[t] = [m[t], e[t]];
                        else
                            x.always(e[x.status]);
                    return this
                },abort: function(e) {
                    var t = e || S;
                    return f && f.abort(t), N(0, t), this
                }};
            d.promise(x).complete = v.add, x.success = x.done, x.error = x.fail, c.url = ((e || c.url || gn) + "").replace(wn, "").replace(Nn, mn[1] + "//"), c.type = n.method || n.type || c.method || c.type, c.dataTypes = b.trim(c.dataType || "*").toLowerCase().match(E) || [""], c.crossDomain == null && (r = Cn.exec(c.url.toLowerCase()), c.crossDomain = !(!r || r[1] === mn[1] && r[2] === mn[2] && (r[3] || (r[1] === "http:" ? 80 : 443)) == (mn[3] || (mn[1] === "http:" ? 80 : 443)))), c.data && c.processData && typeof c.data != "string" && (c.data = b.param(c.data, c.traditional)), Dn(Ln, c, n, x);
            if (w === 2)
                return x;
            a = c.global, a && b.active++ === 0 && b.event.trigger("ajaxStart"), c.type = c.type.toUpperCase(), c.hasContent = !Tn.test(c.type), s = c.url, c.hasContent || (c.data && (s = c.url += (bn.test(s) ? "&" : "?") + c.data, delete c.data), c.cache === !1 && (c.url = En.test(s) ? s.replace(En, "$1_=" + yn++) : s + (bn.test(s) ? "&" : "?") + "_=" + yn++)), c.ifModified && (b.lastModified[s] && x.setRequestHeader("If-Modified-Since", b.lastModified[s]), b.etag[s] && x.setRequestHeader("If-None-Match", b.etag[s])), (c.data && c.hasContent && c.contentType !== !1 || n.contentType) && x.setRequestHeader("Content-Type", c.contentType), x.setRequestHeader("Accept", c.dataTypes[0] && c.accepts[c.dataTypes[0]] ? c.accepts[c.dataTypes[0]] + (c.dataTypes[0] !== "*" ? ", " + On + "; q=0.01" : "") : c.accepts["*"]);
            for (i in c.headers)
                x.setRequestHeader(i, c.headers[i]);
            if (!c.beforeSend || c.beforeSend.call(h, x, c) !== !1 && w !== 2) {
                S = "abort";
                for (i in {success: 1,error: 1,complete: 1})
                    x[i](c[i]);
                f = Dn(An, c, n, x);
                if (!f)
                    N(-1, "No Transport");
                else {
                    x.readyState = 1, a && p.trigger("ajaxSend", [x, c]), c.async && c.timeout > 0 && (u = setTimeout(function() {
                        x.abort("timeout")
                    }, c.timeout));
                    try {
                        w = 1, f.send(g, N)
                    } catch (T) {
                        if (!(w < 2))
                            throw T;
                        N(-1, T)
                    }
                }
                return x
            }
            return x.abort()
        },getScript: function(e, n) {
            return b.get(e, t, n, "script")
        },getJSON: function(e, t, n) {
            return b.get(e, t, n, "json")
        }}), b.ajaxSetup({accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents: {script: /(?:java|ecma)script/},converters: {"text script": function(e) {
                return b.globalEval(e), e
            }}}), b.ajaxPrefilter("script", function(e) {
        e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), b.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var n, r = s.head || b("head")[0] || s.documentElement;
            return {send: function(t, i) {
                    n = s.createElement("script"), n.async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function(e, t) {
                        if (t || !n.readyState || /loaded|complete/.test(n.readyState))
                            n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || i(200, "success")
                    }, r.insertBefore(n, r.firstChild)
                },abort: function() {
                    n && n.onload(t, !0)
                }}
        }
    });
    var jn = [], Fn = /(=)\?(?=&|$)|\?\?/;
    b.ajaxSetup({jsonp: "callback",jsonpCallback: function() {
            var e = jn.pop() || b.expando + "_" + yn++;
            return this[e] = !0, e
        }}), b.ajaxPrefilter("json jsonp", function(n, r, i) {
        var s, o, u, a = n.jsonp !== !1 && (Fn.test(n.url) ? "url" : typeof n.data == "string" && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Fn.test(n.data) && "data");
        if (a || n.dataTypes[0] === "jsonp")
            return s = n.jsonpCallback = b.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, a ? n[a] = n[a].replace(Fn, "$1" + s) : n.jsonp !== !1 && (n.url += (bn.test(n.url) ? "&" : "?") + n.jsonp + "=" + s), n.converters["script json"] = function() {
                return u || b.error(s + " was not called"), u[0]
            }, n.dataTypes[0] = "json", o = e[s], e[s] = function() {
                u = arguments
            }, i.always(function() {
                e[s] = o, n[s] && (n.jsonpCallback = r.jsonpCallback, jn.push(s)), u && b.isFunction(o) && o(u[0]), u = o = t
            }), "script"
    });
    var In, qn, Rn = 0, Un = e.ActiveXObject && function() {
        var e;
        for (e in In)
            In[e](t, !0)
    };
    b.ajaxSettings.xhr = e.ActiveXObject ? function() {
        return !this.isLocal && zn() || Wn()
    } : zn, qn = b.ajaxSettings.xhr(), b.support.cors = !!qn && "withCredentials" in qn, qn = b.support.ajax = !!qn, qn && b.ajaxTransport(function(n) {
        if (!n.crossDomain || b.support.cors) {
            var r;
            return {send: function(i, s) {
                    var o, u, a = n.xhr();
                    n.username ? a.open(n.type, n.url, n.async, n.username, n.password) : a.open(n.type, n.url, n.async);
                    if (n.xhrFields)
                        for (u in n.xhrFields)
                            a[u] = n.xhrFields[u];
                    n.mimeType && a.overrideMimeType && a.overrideMimeType(n.mimeType), !n.crossDomain && !i["X-Requested-With"] && (i["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (u in i)
                            a.setRequestHeader(u, i[u])
                    } catch (f) {
                    }
                    a.send(n.hasContent && n.data || null), r = function(e, i) {
                        var u, f, l, c;
                        try {
                            if (r && (i || a.readyState === 4)) {
                                r = t, o && (a.onreadystatechange = b.noop, Un && delete In[o]);
                                if (i)
                                    a.readyState !== 4 && a.abort();
                                else {
                                    c = {}, u = a.status, f = a.getAllResponseHeaders(), typeof a.responseText == "string" && (c.text = a.responseText);
                                    try {
                                        l = a.statusText
                                    } catch (h) {
                                        l = ""
                                    }
                                    !u && n.isLocal && !n.crossDomain ? u = c.text ? 200 : 404 : u === 1223 && (u = 204)
                                }
                            }
                        } catch (p) {
                            i || s(-1, p)
                        }
                        c && s(u, l, c, f)
                    }, n.async ? a.readyState === 4 ? setTimeout(r) : (o = ++Rn, Un && (In || (In = {}, b(e).unload(Un)), In[o] = r), a.onreadystatechange = r) : r()
                },abort: function() {
                    r && r(t, !0)
                }}
        }
    });
    var Xn, Vn, $n = /^(?:toggle|show|hide)$/, Jn = new RegExp("^(?:([+-])=|)(" + w + ")([a-z%]*)$", "i"), Kn = /queueHooks$/, Qn = [nr], Gn = {"*": [function(e, t) {
                var n, r, i = this.createTween(e, t), s = Jn.exec(t), o = i.cur(), u = +o || 0, a = 1, f = 20;
                if (s) {
                    n = +s[2], r = s[3] || (b.cssNumber[e] ? "" : "px");
                    if (r !== "px" && u) {
                        u = b.css(i.elem, e, !0) || n || 1;
                        do
                            a = a || ".5", u /= a, b.style(i.elem, e, u + r);
                        while (a !== (a = i.cur() / o) && a !== 1 && --f)
                    }
                    i.unit = r, i.start = u, i.end = s[1] ? u + (s[1] + 1) * n : n
                }
                return i
            }]};
    b.Animation = b.extend(er, {tweener: function(e, t) {
            b.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            var n, r = 0, i = e.length;
            for (; r < i; r++)
                n = e[r], Gn[n] = Gn[n] || [], Gn[n].unshift(t)
        },prefilter: function(e, t) {
            t ? Qn.unshift(e) : Qn.push(e)
        }}), b.Tween = rr, rr.prototype = {constructor: rr,init: function(e, t, n, r, i, s) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = s || (b.cssNumber[n] ? "" : "px")
        },cur: function() {
            var e = rr.propHooks[this.prop];
            return e && e.get ? e.get(this) : rr.propHooks._default.get(this)
        },run: function(e) {
            var t, n = rr.propHooks[this.prop];
            return this.options.duration ? this.pos = t = b.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : rr.propHooks._default.set(this), this
        }}, rr.prototype.init.prototype = rr.prototype, rr.propHooks = {_default: {get: function(e) {
                var t;
                return e.elem[e.prop] == null || !!e.elem.style && e.elem.style[e.prop] != null ? (t = b.css(e.elem, e.prop, ""), !t || t === "auto" ? 0 : t) : e.elem[e.prop]
            },set: function(e) {
                b.fx.step[e.prop] ? b.fx.step[e.prop](e) : e.elem.style && (e.elem.style[b.cssProps[e.prop]] != null || b.cssHooks[e.prop]) ? b.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }}}, rr.propHooks.scrollTop = rr.propHooks.scrollLeft = {set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }}, b.each(["toggle", "show", "hide"], function(e, t) {
        var n = b.fn[t];
        b.fn[t] = function(e, r, i) {
            return e == null || typeof e == "boolean" ? n.apply(this, arguments) : this.animate(ir(t, !0), e, r, i)
        }
    }), b.fn.extend({fadeTo: function(e, t, n, r) {
            return this.filter(nn).css("opacity", 0).show().end().animate({opacity: t}, e, n, r)
        },animate: function(e, t, n, r) {
            var i = b.isEmptyObject(e), s = b.speed(t, n, r), o = function() {
                var t = er(this, b.extend({}, e), s);
                o.finish = function() {
                    t.stop(!0)
                }, (i || b._data(this, "finish")) && t.stop(!0)
            };
            return o.finish = o, i || s.queue === !1 ? this.each(o) : this.queue(s.queue, o)
        },stop: function(e, n, r) {
            var i = function(e) {
                var t = e.stop;
                delete e.stop, t(r)
            };
            return typeof e != "string" && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                var t = !0, n = e != null && e + "queueHooks", s = b.timers, o = b._data(this);
                if (n)
                    o[n] && o[n].stop && i(o[n]);
                else
                    for (n in o)
                        o[n] && o[n].stop && Kn.test(n) && i(o[n]);
                for (n = s.length; n--; )
                    s[n].elem === this && (e == null || s[n].queue === e) && (s[n].anim.stop(r), t = !1, s.splice(n, 1));
                (t || !r) && b.dequeue(this, e)
            })
        },finish: function(e) {
            return e !== !1 && (e = e || "fx"), this.each(function() {
                var t, n = b._data(this), r = n[e + "queue"], i = n[e + "queueHooks"], s = b.timers, o = r ? r.length : 0;
                n.finish = !0, b.queue(this, e, []), i && i.cur && i.cur.finish && i.cur.finish.call(this);
                for (t = s.length; t--; )
                    s[t].elem === this && s[t].queue === e && (s[t].anim.stop(!0), s.splice(t, 1));
                for (t = 0; t < o; t++)
                    r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }}), b.each({slideDown: ir("show"),slideUp: ir("hide"),slideToggle: ir("toggle"),fadeIn: {opacity: "show"},fadeOut: {opacity: "hide"},fadeToggle: {opacity: "toggle"}}, function(e, t) {
        b.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r)
        }
    }), b.speed = function(e, t, n) {
        var r = e && typeof e == "object" ? b.extend({}, e) : {complete: n || !n && t || b.isFunction(e) && e,duration: e,easing: n && t || t && !b.isFunction(t) && t};
        r.duration = b.fx.off ? 0 : typeof r.duration == "number" ? r.duration : r.duration in b.fx.speeds ? b.fx.speeds[r.duration] : b.fx.speeds._default;
        if (r.queue == null || r.queue === !0)
            r.queue = "fx";
        return r.old = r.complete, r.complete = function() {
            b.isFunction(r.old) && r.old.call(this), r.queue && b.dequeue(this, r.queue)
        }, r
    }, b.easing = {linear: function(e) {
            return e
        },swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }}, b.timers = [], b.fx = rr.prototype.init, b.fx.tick = function() {
        var e, n = b.timers, r = 0;
        Xn = b.now();
        for (; r < n.length; r++)
            e = n[r], !e() && n[r] === e && n.splice(r--, 1);
        n.length || b.fx.stop(), Xn = t
    }, b.fx.timer = function(e) {
        e() && b.timers.push(e) && b.fx.start()
    }, b.fx.interval = 13, b.fx.start = function() {
        Vn || (Vn = setInterval(b.fx.tick, b.fx.interval))
    }, b.fx.stop = function() {
        clearInterval(Vn), Vn = null
    }, b.fx.speeds = {slow: 600,fast: 200,_default: 400}, b.fx.step = {}, b.expr && b.expr.filters && (b.expr.filters.animated = function(e) {
        return b.grep(b.timers, function(t) {
            return e === t.elem
        }).length
    }), b.fn.offset = function(e) {
        if (arguments.length)
            return e === t ? this : this.each(function(t) {
                b.offset.setOffset(this, e, t)
            });
        var n, r, s = {top: 0,left: 0}, o = this[0], u = o && o.ownerDocument;
        if (!u)
            return;
        return n = u.documentElement, b.contains(n, o) ? (typeof o.getBoundingClientRect !== i && (s = o.getBoundingClientRect()), r = sr(u), {top: s.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),left: s.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)}) : s
    }, b.offset = {setOffset: function(e, t, n) {
            var r = b.css(e, "position");
            r === "static" && (e.style.position = "relative");
            var i = b(e), s = i.offset(), o = b.css(e, "top"), u = b.css(e, "left"), a = (r === "absolute" || r === "fixed") && b.inArray("auto", [o, u]) > -1, f = {}, l = {}, c, h;
            a ? (l = i.position(), c = l.top, h = l.left) : (c = parseFloat(o) || 0, h = parseFloat(u) || 0), b.isFunction(t) && (t = t.call(e, n, s)), t.top != null && (f.top = t.top - s.top + c), t.left != null && (f.left = t.left - s.left + h), "using" in t ? t.using.call(e, f) : i.css(f)
        }}, b.fn.extend({position: function() {
            if (!this[0])
                return;
            var e, t, n = {top: 0,left: 0}, r = this[0];
            return b.css(r, "position") === "fixed" ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), b.nodeName(e[0], "html") || (n = e.offset()), n.top += b.css(e[0], "borderTopWidth", !0), n.left += b.css(e[0], "borderLeftWidth", !0)), {top: t.top - n.top - b.css(r, "marginTop", !0),left: t.left - n.left - b.css(r, "marginLeft", !0)}
        },offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent || s.documentElement;
                while (e && !b.nodeName(e, "html") && b.css(e, "position") === "static")
                    e = e.offsetParent;
                return e || s.documentElement
            })
        }}), b.each({scrollLeft: "pageXOffset",scrollTop: "pageYOffset"}, function(e, n) {
        var r = /Y/.test(n);
        b.fn[e] = function(i) {
            return b.access(this, function(e, i, s) {
                var o = sr(e);
                if (s === t)
                    return o ? n in o ? o[n] : o.document.documentElement[i] : e[i];
                o ? o.scrollTo(r ? b(o).scrollLeft() : s, r ? s : b(o).scrollTop()) : e[i] = s
            }, e, i, arguments.length, null)
        }
    }), b.each({Height: "height",Width: "width"}, function(e, n) {
        b.each({padding: "inner" + e,content: n,"": "outer" + e}, function(r, i) {
            b.fn[i] = function(i, s) {
                var o = arguments.length && (r || typeof i != "boolean"), u = r || (i === !0 || s === !0 ? "margin" : "border");
                return b.access(this, function(n, r, i) {
                    var s;
                    return b.isWindow(n) ? n.document.documentElement["client" + e] : n.nodeType === 9 ? (s = n.documentElement, Math.max(n.body["scroll" + e], s["scroll" + e], n.body["offset" + e], s["offset" + e], s["client" + e])) : i === t ? b.css(n, r, u) : b.style(n, r, i, u)
                }, n, o ? i : t, o, null)
            }
        })
    }), e.jQuery = e.$ = b, typeof define == "function" && define.amd && define.amd.jQuery && define("jquery", [], function() {
        return b
    })
})(window), function(e, t, n) {
    function f(e) {
        var t = {}, r = /^jQuery\d+$/;
        return n.each(e.attributes, function(e, n) {
            n.specified && !r.test(n.name) && (t[n.name] = n.value)
        }), t
    }
    function l(e, r) {
        var i = this, s = n(i);
        if (i.value == s.attr("placeholder") && s.hasClass("placeholder"))
            if (s.data("placeholder-password")) {
                s = s.hide().next().show().attr("id", s.removeAttr("id").data("placeholder-id"));
                if (e === !0)
                    return s[0].value = r;
                s.focus()
            } else
                i.value = "", s.removeClass("placeholder"), i == t.activeElement && i.select()
    }
    function c() {
        var e, t = this, r = n(t), i = r, s = this.id;
        if (t.value == "") {
            if (t.type == "password") {
                if (!r.data("placeholder-textinput")) {
                    try {
                        e = r.clone().attr({type: "text"})
                    } catch (o) {
                        e = n("<input>").attr(n.extend(f(this), {type: "text"}))
                    }
                    e.removeAttr("name").data({"placeholder-password": !0,"placeholder-id": s}).bind("focus.placeholder", l), r.data({"placeholder-textinput": e,"placeholder-id": s}).before(e)
                }
                r = r.removeAttr("id").hide().prev().attr("id", s).show()
            }
            r.addClass("placeholder"), r[0].value = r.attr("placeholder")
        } else
            r.removeClass("placeholder")
    }
    var r = "placeholder" in t.createElement("input"), i = "placeholder" in t.createElement("textarea"), s = n.fn, o = n.valHooks, u, a;
    r && i ? (a = s.placeholder = function() {
        return this
    }, a.input = a.textarea = !0) : (a = s.placeholder = function() {
        var e = this;
        return e.filter((r ? "textarea" : ":input") + "[placeholder]").not(".placeholder").bind({"focus.placeholder": l,"blur.placeholder": c}).data("placeholder-enabled", !0).trigger("blur.placeholder"), e
    }, a.input = r, a.textarea = i, u = {get: function(e) {
            var t = n(e);
            return t.data("placeholder-enabled") && t.hasClass("placeholder") ? "" : e.value
        },set: function(e, r) {
            var i = n(e);
            return i.data("placeholder-enabled") ? (r == "" ? (e.value = r, e != t.activeElement && c.call(e)) : i.hasClass("placeholder") ? l.call(e, !0, r) || (e.value = r) : e.value = r, i) : e.value = r
        }}, r || (o.input = u), i || (o.textarea = u), n(function() {
        n(t).delegate("form", "submit.placeholder", function() {
            var e = n(".placeholder", this).each(l);
            setTimeout(function() {
                e.each(c)
            }, 10)
        })
    }), n(e).bind("beforeunload.placeholder", function() {
        n(".placeholder").each(function() {
            this.value = ""
        })
    }))
}(this, document, jQuery), function(e) {
    var t = {domainpostfix: ".jing.fm"};
    e.extend({wh2Thumbtype: function(e) {
            return e >= 200 ? "SL" : e >= 75 ? "UM" : e >= 64 ? "US" : e >= 50 ? "UT" : "UY"
        },wh2wh: function(e) {
            switch (e) {
                case 53:
                    return 64;
                case 39:
                    return 50
            }
        },imgRetina: function(e) {
            switch (e) {
                case "AT":
                    e = "AS";
                    break;
                case "AS":
                    e = "AM";
                    break;
                case "AM":
                    e = "AL";
                    break;
                case "ST":
                    e = "SM";
                    break;
                case "SS":
                case "SM":
                    e = "SL";
                    break;
                case "UY":
                    e = "US";
                    break;
                case "UT":
                    e = "UM";
                    break;
                case "CP":
                    e = "CL";
                    break;
                case "U1":
                    e = "U2";
                    break;
                case "BN":
                    e = "BR";
                    break;
                case "BC":
                    e = "BB";
                    break;
                case "IN":
                    e = "IM";
                    break;
                case "US":
                case "UM":
                    e = "UL"
            }
            return e
        },id2default: function(e, t) {
            return IMG_URL + "/defaults/" + e + "/" + t + Retina.suffix + ".jpg"
        },id2url: function(n, r, i) {
            if (n == null)
                return "";
            var s = "", o = "image";
            return Retina.enabled && (r = e.imgRetina(r)), s = "http://" + e.randNumberWithKey(i) + t.domainpostfix + "/" + i + e.id2filepath(n, o, r), s
        },id2mediaUrl: function(t, n, r) {
            var i = MEDIA_URL + e.id2filepath(t, n, r);
            return i
        },randNumberWithKey: function(e) {
            var t = "";
            switch (e) {
                case "cover":
                case "avatar":
                case "tmp":
                    t = "img";
                    break;
                case "album":
                case "artist":
                case "chart_cover":
                case "chart_issue":
                    t = "image";
                    break;
                case "audio":
                    t = "media"
            }
            return t
        },id2filepath: function(t, n, r) {
            var i = "";
            switch (n) {
                case "image":
                    if (typeof r == "undefined" || typeof r == "null" || r == null || r == "")
                        r = "NO";
                    i = "/" + r + "/" + t.substring(0, 4) + "/" + t.substring(4, 8) + "/" + t.substring(8, 10) + "/" + t.substring(10, 12) + "/" + e.id2filename(t, r);
                    break;
                case "audio":
                    i = "/" + t.substring(0, 4) + "/" + t.substring(4, 8) + "/" + t.substring(8, 10) + "/" + t.substring(10, 12) + "/", i += "MM" + t;
                    break;
                default:
                    numend = 1
            }
            return i
        },id2filename: function(e, t) {
            return t + "" + e
        }})
}(jQuery);
var Selector_browser = "";
css_browser_selector(navigator.userAgent), window.Modernizr = function(e, t, n) {
    function A(e) {
        f.cssText = e
    }
    function O(e, t) {
        return A(p.join(e + ";") + (t || ""))
    }
    function M(e, t) {
        return typeof e === t
    }
    function _(e, t) {
        return !!~("" + e).indexOf(t)
    }
    function D(e, t) {
        for (var r in e) {
            var i = e[r];
            if (!_(i, "-") && f[i] !== n)
                return t == "pfx" ? 
                i : !0
        }
        return !1
    }
    function P(e, t, r) {
        for (var i in e) {
            var s = t[e[i]];
            if (s !== n)
                return r === !1 ? e[i] : M(s, "function") ? s.bind(r || t) : s
        }
        return !1
    }
    function H(e, t, n) {
        var r = e.charAt(0).toUpperCase() + e.slice(1), i = (e + " " + v.join(r + " ") + r).split(" ");
        return M(t, "string") || M(t, "undefined") ? D(i, t) : (i = (e + " " + m.join(r + " ") + r).split(" "), P(i, t, n))
    }
    function B() {
        i.input = function(n) {
            for (var r = 0, i = n.length; r < i; r++)
                w[n[r]] = n[r] in l;
            return w.list && (w.list = !!t.createElement("datalist") && !!e.HTMLDataListElement), w
        }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), i.inputtypes = function(e) {
            for (var r = 0, i, s, u, a = e.length; r < a; r++)
                l.setAttribute("type", s = e[r]), i = l.type !== "text", i && (l.value = c, l.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(s) && l.style.WebkitAppearance !== n ? (o.appendChild(l), u = t.defaultView, i = u.getComputedStyle && u.getComputedStyle(l, null).WebkitAppearance !== "textfield" && l.offsetHeight !== 0, o.removeChild(l)) : /^(search|tel)$/.test(s) || (/^(url|email)$/.test(s) ? i = l.checkValidity && l.checkValidity() === !1 : i = l.value != c)), b[e[r]] = !!i;
            return b
        }("search tel url email datetime date month week time datetime-local number range color".split(" "))
    }
    var r = "2.6.2", i = {}, s = !0, o = t.documentElement, u = "modernizr", a = t.createElement(u), f = a.style, l = t.createElement("input"), c = ":)", h = {}.toString, p = " -webkit- -moz- -o- -ms- ".split(" "), d = "Webkit Moz O ms", v = d.split(" "), m = d.toLowerCase().split(" "), g = {svg: "http://www.w3.org/2000/svg"}, y = {}, b = {}, w = {}, E = [], S = E.slice, x, T = function(e, n, r, i) {
        var s, a, f, l, c = t.createElement("div"), h = t.body, p = h || t.createElement("body");
        if (parseInt(r, 10))
            while (r--)
                f = t.createElement("div"), f.id = i ? i[r] : u + (r + 1), c.appendChild(f);
        return s = ["&#173;", '<style id="s', u, '">', e, "</style>"].join(""), c.id = u, (h ? c : p).innerHTML += s, p.appendChild(c), h || (p.style.background = "", p.style.overflow = "hidden", l = o.style.overflow, o.style.overflow = "hidden", o.appendChild(p)), a = n(c, e), h ? c.parentNode.removeChild(c) : (p.parentNode.removeChild(p), o.style.overflow = l), !!a
    }, N = function(t) {
        var n = e.matchMedia || e.msMatchMedia;
        if (n)
            return n(t).matches;
        var r;
        return T("@media " + t + " { #" + u + " { position: absolute; } }", function(t) {
            r = (e.getComputedStyle ? getComputedStyle(t, null) : t.currentStyle)["position"] == "absolute"
        }), r
    }, C = function() {
        function r(r, i) {
            i = i || t.createElement(e[r] || "div"), r = "on" + r;
            var s = r in i;
            return s || (i.setAttribute || (i = t.createElement("div")), i.setAttribute && i.removeAttribute && (i.setAttribute(r, ""), s = M(i[r], "function"), M(i[r], "undefined") || (i[r] = n), i.removeAttribute(r))), i = null, s
        }
        var e = {select: "input",change: "input",submit: "form",reset: "form",error: "img",load: "img",abort: "img"};
        return r
    }(), k = {}.hasOwnProperty, L;
    !M(k, "undefined") && !M(k.call, "undefined") ? L = function(e, t) {
        return k.call(e, t)
    } : L = function(e, t) {
        return t in e && M(e.constructor.prototype[t], "undefined")
    }, Function.prototype.bind || (Function.prototype.bind = function(t) {
        var n = this;
        if (typeof n != "function")
            throw new TypeError;
        var r = S.call(arguments, 1), i = function() {
            if (this instanceof i) {
                var e = function() {
                };
                e.prototype = n.prototype;
                var s = new e, o = n.apply(s, r.concat(S.call(arguments)));
                return Object(o) === o ? o : s
            }
            return n.apply(t, r.concat(S.call(arguments)))
        };
        return i
    }), y.flexbox = function() {
        return H("flexWrap")
    }, y.flexboxlegacy = function() {
        return H("boxDirection")
    }, y.canvas = function() {
        var e = t.createElement("canvas");
        return !!e.getContext && !!e.getContext("2d")
    }, y.canvastext = function() {
        return !!i.canvas && !!M(t.createElement("canvas").getContext("2d").fillText, "function")
    }, y.webgl = function() {
        return !!e.WebGLRenderingContext
    }, y.touch = function() {
        var n;
        return "ontouchstart" in e || e.DocumentTouch && t instanceof DocumentTouch ? n = !0 : T(["@media (", p.join("touch-enabled),("), u, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(e) {
            n = e.offsetTop === 9
        }), n
    }, y.geolocation = function() {
        return "geolocation" in navigator
    }, y.postmessage = function() {
        return !!e.postMessage
    }, y.websqldatabase = function() {
        return !!e.openDatabase
    }, y.indexedDB = function() {
        return !!H("indexedDB", e)
    }, y.hashchange = function() {
        return C("hashchange", e) && (t.documentMode === n || t.documentMode > 7)
    }, y.history = function() {
        return !!e.history && !!history.pushState
    }, y.draganddrop = function() {
        var e = t.createElement("div");
        return "draggable" in e || "ondragstart" in e && "ondrop" in e
    }, y.websockets = function() {
        return "WebSocket" in e || "MozWebSocket" in e
    }, y.rgba = function() {
        return A("background-color:rgba(150,255,150,.5)"), _(f.backgroundColor, "rgba")
    }, y.hsla = function() {
        return A("background-color:hsla(120,40%,100%,.5)"), _(f.backgroundColor, "rgba") || _(f.backgroundColor, "hsla")
    }, y.multiplebgs = function() {
        return A("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(f.background)
    }, y.backgroundsize = function() {
        return H("backgroundSize")
    }, y.borderimage = function() {
        return H("borderImage")
    }, y.borderradius = function() {
        return H("borderRadius")
    }, y.boxshadow = function() {
        return H("boxShadow")
    }, y.textshadow = function() {
        return t.createElement("div").style.textShadow === ""
    }, y.opacity = function() {
        return O("opacity:.55"), /^0.55$/.test(f.opacity)
    }, y.cssanimations = function() {
        return H("animationName")
    }, y.csscolumns = function() {
        return H("columnCount")
    }, y.cssgradients = function() {
        var e = "background-image:", t = "gradient(linear,left top,right bottom,from(#9f9),to(white));", n = "linear-gradient(left top,#9f9, white);";
        return A((e + "-webkit- ".split(" ").join(t + e) + p.join(n + e)).slice(0, -e.length)), _(f.backgroundImage, "gradient")
    }, y.cssreflections = function() {
        return H("boxReflect")
    }, y.csstransforms = function() {
        return !!H("transform")
    }, y.csstransforms3d = function() {
        var e = !!H("perspective");
        return e && "webkitPerspective" in o.style && T("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(t, n) {
            e = t.offsetLeft === 9 && t.offsetHeight === 3
        }), e
    }, y.csstransitions = function() {
        return H("transition")
    }, y.fontface = function() {
        var e;
        return T('@font-face {font-family:"font";src:url("https://")}', function(n, r) {
            var i = t.getElementById("smodernizr"), s = i.sheet || i.styleSheet, o = s ? s.cssRules && s.cssRules[0] ? s.cssRules[0].cssText : s.cssText || "" : "";
            e = /src/i.test(o) && o.indexOf(r.split(" ")[0]) === 0
        }), e
    }, y.generatedcontent = function() {
        var e;
        return T(["#", u, "{font:0/0 a}#", u, ':after{content:"', c, '";visibility:hidden;font:3px/1 a}'].join(""), function(t) {
            e = t.offsetHeight >= 3
        }), e
    }, y.video = function() {
        var e = t.createElement("video"), n = !1;
        try {
            if (n = !!e.canPlayType)
                n = new Boolean(n), n.ogg = e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), n.h264 = e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), n.webm = e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, "")
        } catch (r) {
        }
        return n
    }, y.audio = function() {
        var e = t.createElement("audio"), n = !1;
        try {
            if (n = !!e.canPlayType)
                n = new Boolean(n), n.ogg = e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), n.mp3 = e.canPlayType("audio/mpeg;").replace(/^no$/, ""), n.wav = e.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), n.m4a = (e.canPlayType("audio/x-m4a;") || e.canPlayType("audio/aac;")).replace(/^no$/, "")
        } catch (r) {
        }
        return n
    }, y.localstorage = function() {
        try {
            return localStorage.setItem(u, u), localStorage.removeItem(u), !0
        } catch (e) {
            return !1
        }
    }, y.sessionstorage = function() {
        try {
            return sessionStorage.setItem(u, u), sessionStorage.removeItem(u), !0
        } catch (e) {
            return !1
        }
    }, y.webworkers = function() {
        return !!e.Worker
    }, y.applicationcache = function() {
        return !!e.applicationCache
    }, y.svg = function() {
        return !!t.createElementNS && !!t.createElementNS(g.svg, "svg").createSVGRect
    }, y.inlinesvg = function() {
        var e = t.createElement("div");
        return e.innerHTML = "<svg/>", (e.firstChild && e.firstChild.namespaceURI) == g.svg
    }, y.smil = function() {
        return !!t.createElementNS && /SVGAnimate/.test(h.call(t.createElementNS(g.svg, "animate")))
    }, y.svgclippaths = function() {
        return !!t.createElementNS && /SVGClipPath/.test(h.call(t.createElementNS(g.svg, "clipPath")))
    };
    for (var j in y)
        L(y, j) && (x = j.toLowerCase(), i[x] = y[j](), E.push((i[x] ? "" : "no-") + x));
    return i.input || B(), i.addTest = function(e, t) {
        if (typeof e == "object")
            for (var r in e)
                L(e, r) && i.addTest(r, e[r]);
        else {
            e = e.toLowerCase();
            if (i[e] !== n)
                return i;
            t = typeof t == "function" ? t() : t, typeof s != "undefined" && s && (o.className += " " + (t ? "" : "no-") + e), i[e] = t
        }
        return i
    }, A(""), a = l = null, function(e, t) {
        function l(e, t) {
            var n = e.createElement("p"), r = e.getElementsByTagName("head")[0] || e.documentElement;
            return n.innerHTML = "x<style>" + t + "</style>", r.insertBefore(n.lastChild, r.firstChild)
        }
        function c() {
            var e = g.elements;
            return typeof e == "string" ? e.split(" ") : e
        }
        function h(e) {
            var t = a[e[o]];
            return t || (t = {}, u++, e[o] = u, a[u] = t), t
        }
        function p(e, n, s) {
            n || (n = t);
            if (f)
                return n.createElement(e);
            s || (s = h(n));
            var o;
            return s.cache[e] ? o = s.cache[e].cloneNode() : i.test(e) ? o = (s.cache[e] = s.createElem(e)).cloneNode() : o = s.createElem(e), o.canHaveChildren && !r.test(e) ? s.frag.appendChild(o) : o
        }
        function d(e, n) {
            e || (e = t);
            if (f)
                return e.createDocumentFragment();
            n = n || h(e);
            var r = n.frag.cloneNode(), i = 0, s = c(), o = s.length;
            for (; i < o; i++)
                r.createElement(s[i]);
            return r
        }
        function v(e, t) {
            t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), e.createElement = function(n) {
                return g.shivMethods ? p(n, e, t) : t.createElem(n)
            }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + c().join().replace(/\w+/g, function(e) {
                return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
            }) + ");return n}")(g, t.frag)
        }
        function m(e) {
            e || (e = t);
            var n = h(e);
            return g.shivCSS && !s && !n.hasCSS && (n.hasCSS = !!l(e, "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")), f || v(e, n), e
        }
        var n = e.html5 || {}, r = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i, i = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i, s, o = "_html5shiv", u = 0, a = {}, f;
        (function() {
            try {
                var e = t.createElement("a");
                e.innerHTML = "<xyz></xyz>", s = "hidden" in e, f = e.childNodes.length == 1 || function() {
                    t.createElement("a");
                    var e = t.createDocumentFragment();
                    return typeof e.cloneNode == "undefined" || typeof e.createDocumentFragment == "undefined" || typeof e.createElement == "undefined"
                }()
            } catch (n) {
                s = !0, f = !0
            }
        })();
        var g = {elements: n.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS: n.shivCSS !== !1,supportsUnknownElements: f,shivMethods: n.shivMethods !== !1,type: "default",shivDocument: m,createElement: p,createDocumentFragment: d};
        e.html5 = g, m(t)
    }(this, t), i._version = r, i._prefixes = p, i._domPrefixes = m, i._cssomPrefixes = v, i.mq = N, i.hasEvent = C, i.testProp = function(e) {
        return D([e])
    }, i.testAllProps = H, i.testStyles = T, i.prefixed = function(e, t, n) {
        return t ? H(e, t, n) : H(e, "pfx")
    }, o.className = o.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (s ? " js " + E.join(" ") : ""), i
}(this, this.document), function(e) {
    function t(e, t) {
        var n = e.length;
        while (n--)
            if (e[n] === t)
                return n;
        return -1
    }
    function n(e) {
        var n, r, i, o, u, a;
        r = (e.target || e.srcElement).tagName, n = e.keyCode;
        if (n == 93 || n == 224)
            n = 91;
        if (n in c) {
            c[n] = !0;
            for (o in p)
                p[o] == n && (s[o] = !0);
            return
        }
        if (r == "INPUT" || r == "SELECT" || r == "TEXTAREA")
            return;
        if (!(n in l))
            return;
        for (u = 0; u < l[n].length; u++) {
            i = l[n][u];
            if (i.scope == h || i.scope == "all") {
                a = i.mods.length > 0;
                for (o in c)
                    if (!c[o] && t(i.mods, +o) > -1 || c[o] && t(i.mods, +o) == -1)
                        a = !1;
                (i.mods.length == 0 && !c[16] && !c[18] && !c[17] && !c[91] || a) && i.method(e, i) === !1 && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, e.stopPropagation && e.stopPropagation(), e.cancelBubble && (e.cancelBubble = !0))
            }
        }
    }
    function r(e) {
        var t = e.keyCode, n;
        if (t == 93 || t == 224)
            t = 91;
        if (t in c) {
            c[t] = !1;
            for (n in p)
                p[n] == t && (s[n] = !1)
        }
    }
    function i() {
        for (f in c)
            c[f] = !1;
        for (f in p)
            s[f] = !1
    }
    function s(e, t, n) {
        var r, i, s, o;
        n === undefined && (n = t, t = "all"), e = e.replace(/\s/g, ""), r = e.split(","), r[r.length - 1] == "" && (r[r.length - 2] += ",");
        for (s = 0; s < r.length; s++) {
            i = [], e = r[s].split("+");
            if (e.length > 1) {
                i = e.slice(0, e.length - 1);
                for (o = 0; o < i.length; o++)
                    i[o] = p[i[o]];
                e = [e[e.length - 1]]
            }
            e = e[0], e = d[e] || e.toUpperCase().charCodeAt(0), e in l || (l[e] = []), l[e].push({shortcut: r[s],scope: t,method: n,key: r[s],mods: i})
        }
    }
    function o(e) {
        h = e || "all"
    }
    function u() {
        return h || "all"
    }
    function a(e, t, n) {
        e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent && e.attachEvent("on" + t, function() {
            n(window.event)
        })
    }
    var f, l = {}, c = {16: !1,18: !1,17: !1,91: !1}, h = "all", p = {"⇧": 16,shift: 16,"⌥": 18,alt: 18,option: 18,"⌃": 17,ctrl: 17,control: 17,"⌘": 91,command: 91}, d = {backspace: 8,tab: 9,clear: 12,enter: 13,"return": 13,esc: 27,escape: 27,space: 32,left: 37,up: 38,right: 39,down: 40,del: 46,"delete": 46,home: 36,end: 35,pageup: 33,pagedown: 34,",": 188,".": 190,"/": 191,"`": 192,"-": 189,"=": 187,";": 186,"'": 222,"[": 219,"]": 221,"\\": 220};
    for (f = 1; f < 20; f++)
        p["f" + f] = 111 + f;
    for (f in p)
        s[f] = !1;
    a(document, "keydown", n), a(document, "keyup", r), a(window, "focus", i), e.key = s, e.key.setScope = o, e.key.getScope = u, typeof module != "undefined" && (module.exports = key)
}(this), function(e) {
    typeof define == "function" && define.amd ? define(["jquery"], e) : typeof exports == "object" ? module.exports = e : e(jQuery)
}(function(e) {
    function o(t) {
        var n = t || window.event, s = [].slice.call(arguments, 1), o = 0, u = 0, a = 0, f = 0, l = 0, c;
        t = e.event.fix(n), t.type = "mousewheel", n.wheelDelta && (o = n.wheelDelta), n.detail && (o = n.detail * -1), n.deltaY && (a = n.deltaY * -1, o = a), n.deltaX && (u = n.deltaX, o = u * -1), n.wheelDeltaY !== undefined && (a = n.wheelDeltaY), n.wheelDeltaX !== undefined && (u = n.wheelDeltaX * -1), f = Math.abs(o);
        if (!r || f < r)
            r = f;
        l = Math.max(Math.abs(a), Math.abs(u));
        if (!i || l < i)
            i = l;
        return c = o > 0 ? "floor" : "ceil", o = Math[c](o / r), u = Math[c](u / i), a = Math[c](a / i), s.unshift(t, o, u, a), (e.event.dispatch || e.event.handle).apply(this, s)
    }
    var t = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"], n = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"], r, i;
    if (e.event.fixHooks)
        for (var s = t.length; s; )
            e.event.fixHooks[t[--s]] = e.event.mouseHooks;
    e.event.special.mousewheel = {setup: function() {
            if (this.addEventListener)
                for (var e = n.length; e; )
                    this.addEventListener(n[--e], o, !1);
            else
                this.onmousewheel = o
        },teardown: function() {
            if (this.removeEventListener)
                for (var e = n.length; e; )
                    this.removeEventListener(n[--e], o, !1);
            else
                this.onmousewheel = null
        }}, e.fn.extend({mousewheel: function(e) {
            return e ? this.bind("mousewheel", e) : this.trigger("mousewheel")
        },unmousewheel: function(e) {
            return this.unbind("mousewheel", e)
        }})
});
var swfobject = function() {
    function C() {
        if (b)
            return;
        try {
            var e = a.getElementsByTagName("body")[0].appendChild(U("span"));
            e.parentNode.removeChild(e)
        } catch (t) {
            return
        }
        b = !0;
        var n = c.length;
        for (var r = 0; r < n; r++)
            c[r]()
    }
    function k(e) {
        b ? e() : c[c.length] = e
    }
    function L(t) {
        if (typeof u.addEventListener != e)
            u.addEventListener("load", t, !1);
        else if (typeof a.addEventListener != e)
            a.addEventListener("load", t, !1);
        else if (typeof u.attachEvent != e)
            z(u, "onload", t);
        else if (typeof u.onload == "function") {
            var n = u.onload;
            u.onload = function() {
                n(), t()
            }
        } else
            u.onload = t
    }
    function A() {
        l ? O() : M()
    }
    function O() {
        var n = a.getElementsByTagName("body")[0], r = U(t);
        r.setAttribute("type", i);
        var s = n.appendChild(r);
        if (s) {
            var o = 0;
            (function() {
                if (typeof s.GetVariable != e) {
                    var t = s.GetVariable("$version");
                    t && (t = t.split(" ")[1].split(","), T.pv = [parseInt(t[0], 10), parseInt(t[1], 10), parseInt(t[2], 10)])
                } else if (o < 10) {
                    o++, setTimeout(arguments.callee, 10);
                    return
                }
                n.removeChild(r), s = null, M()
            })()
        } else
            M()
    }
    function M() {
        var t = h.length;
        if (t > 0)
            for (var n = 0; n < t; n++) {
                var r = h[n].id, i = h[n].callbackFn, s = {success: !1,id: r};
                if (T.pv[0] > 0) {
                    var o = R(r);
                    if (o)
                        if (W(h[n].swfVersion) && !(T.wk && T.wk < 312))
                            V(r, !0), i && (s.success = !0, s.ref = _(r), i(s));
                        else if (h[n].expressInstall && D()) {
                            var u = {};
                            u.data = h[n].expressInstall, u.width = o.getAttribute("width") || "0", u.height = o.getAttribute("height") || "0", o.getAttribute("class") && (u.styleclass = o.getAttribute("class")), o.getAttribute("align") && (u.align = o.getAttribute("align"));
                            var a = {}, f = o.getElementsByTagName("param"), l = f.length;
                            for (var c = 0; c < l; c++)
                                f[c].getAttribute("name").toLowerCase() != "movie" && (a[f[c].getAttribute("name")] = f[c].getAttribute("value"));
                            P(u, a, r, i)
                        } else
                            H(o), i && i(s)
                } else {
                    V(r, !0);
                    if (i) {
                        var p = _(r);
                        p && typeof p.SetVariable != e && (s.success = !0, s.ref = p), i(s)
                    }
                }
            }
    }
    function _(n) {
        var r = null, i = R(n);
        if (i && i.nodeName == "OBJECT")
            if (typeof i.SetVariable != e)
                r = i;
            else {
                var s = i.getElementsByTagName(t)[0];
                s && (r = s)
            }
        return r
    }
    function D() {
        return !w && W("6.0.65") && (T.win || T.mac) && !(T.wk && T.wk < 312)
    }
    function P(t, n, r, i) {
        w = !0, g = i || null, y = {success: !1,id: r};
        var o = R(r);
        if (o) {
            o.nodeName == "OBJECT" ? (v = B(o), m = null) : (v = o, m = r), t.id = s;
            if (typeof t.width == e || !/%$/.test(t.width) && parseInt(t.width, 10) < 310)
                t.width = "310";
            if (typeof t.height == e || !/%$/.test(t.height) && parseInt(t.height, 10) < 137)
                t.height = "137";
            a.title = a.title.slice(0, 47) + " - Flash Player Installation";
            var f = T.ie && T.win ? "ActiveX" : "PlugIn", l = "MMredirectURL=" + u.location.toString().replace(/&/g, "%26") + "&MMplayerType=" + f + "&MMdoctitle=" + a.title;
            typeof n.flashvars != e ? n.flashvars += "&" + l : n.flashvars = l;
            if (T.ie && T.win && o.readyState != 4) {
                var c = U("div");
                r += "SWFObjectNew", c.setAttribute("id", r), o.parentNode.insertBefore(c, o), o.style.display = "none", function() {
                    o.readyState == 4 ? o.parentNode.removeChild(o) : setTimeout(arguments.callee, 10)
                }()
            }
            j(t, n, r)
        }
    }
    function H(e) {
        if (T.ie && T.win && e.readyState != 4) {
            var t = U("div");
            e.parentNode.insertBefore(t, e), t.parentNode.replaceChild(B(e), t), e.style.display = "none", function() {
                e.readyState == 4 ? e.parentNode.removeChild(e) : setTimeout(arguments.callee, 10)
            }()
        } else
            e.parentNode.replaceChild(B(e), e)
    }
    function B(e) {
        var n = U("div");
        if (T.win && T.ie)
            n.innerHTML = e.innerHTML;
        else {
            var r = e.getElementsByTagName(t)[0];
            if (r) {
                var i = r.childNodes;
                if (i) {
                    var s = i.length;
                    for (var o = 0; o < s; o++)
                        (i[o].nodeType != 1 || i[o].nodeName != "PARAM") && i[o].nodeType != 8 && n.appendChild(i[o].cloneNode(!0))
                }
            }
        }
        return n
    }
    function j(n, r, s) {
        var o, u = R(s);
        if (T.wk && T.wk < 312)
            return o;
        if (u) {
            typeof n.id == e && (n.id = s);
            if (T.ie && T.win) {
                var a = "";
                for (var f in n)
                    n[f] != Object.prototype[f] && (f.toLowerCase() == "data" ? r.movie = n[f] : f.toLowerCase() == "styleclass" ? a += ' class="' + n[f] + '"' : f.toLowerCase() != "classid" && (a += " " + f + '="' + n[f] + '"'));
                var l = "";
                for (var c in r)
                    r[c] != Object.prototype[c] && (l += '<param name="' + c + '" value="' + r[c] + '" />');
                u.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + a + ">" + l + "</object>", p[p.length] = n.id, o = R(n.id)
            } else {
                var h = U(t);
                h.setAttribute("type", i);
                for (var d in n)
                    n[d] != Object.prototype[d] && (d.toLowerCase() == "styleclass" ? h.setAttribute("class", n[d]) : d.toLowerCase() != "classid" && h.setAttribute(d, n[d]));
                for (var v in r)
                    r[v] != Object.prototype[v] && v.toLowerCase() != "movie" && F(h, v, r[v]);
                u.parentNode.replaceChild(h, u), o = h
            }
        }
        return o
    }
    function F(e, t, n) {
        var r = U("param");
        r.setAttribute("name", t), r.setAttribute("value", n), e.appendChild(r)
    }
    function I(e) {
        var t = R(e);
        t && t.nodeName == "OBJECT" && (T.ie && T.win ? (t.style.display = "none", function() {
            t.readyState == 4 ? q(e) : setTimeout(arguments.callee, 10)
        }()) : t.parentNode.removeChild(t))
    }
    function q(e) {
        var t = R(e);
        if (t) {
            for (var n in t)
                typeof t[n] == "function" && (t[n] = null);
            t.parentNode.removeChild(t)
        }
    }
    function R(e) {
        var t = null;
        try {
            t = a.getElementById(e)
        } catch (n) {
        }
        return t
    }
    function U(e) {
        return a.createElement(e)
    }
    function z(e, t, n) {
        e.attachEvent(t, n), d[d.length] = [e, t, n]
    }
    function W(e) {
        var t = T.pv, n = e.split(".");
        return n[0] = parseInt(n[0], 10), n[1] = parseInt(n[1], 10) || 0, n[2] = parseInt(n[2], 10) || 0, t[0] > n[0] || t[0] == n[0] && t[1] > n[1] || t[0] == n[0] && t[1] == n[1] && t[2] >= n[2] ? !0 : !1
    }
    function X(n, r, i, s) {
        if (T.ie && T.mac)
            return;
        var o = a.getElementsByTagName("head")[0];
        if (!o)
            return;
        var u = i && typeof i == "string" ? i : "screen";
        s && (E = null, S = null);
        if (!E || S != u) {
            var f = U("style");
            f.setAttribute("type", "text/css"), f.setAttribute("media", u), E = o.appendChild(f), T.ie && T.win && typeof a.styleSheets != e && a.styleSheets.length > 0 && (E = a.styleSheets[a.styleSheets.length - 1]), S = u
        }
        T.ie && T.win ? E && typeof E.addRule == t && E.addRule(n, r) : E && typeof a.createTextNode != e && E.appendChild(a.createTextNode(n + " {" + r + "}"))
    }
    function V(e, t) {
        if (!x)
            return;
        var n = t ? "visible" : "hidden"
    }
    function $(t) {
        var n = /[\\\"<>\.;]/, r = n.exec(t) != null;
        return r && typeof encodeURIComponent != e ? encodeURIComponent(t) : t
    }
    var e = "undefined", t = "object", n = "Shockwave Flash", r = "ShockwaveFlash.ShockwaveFlash", i = "application/x-shockwave-flash", s = "SWFObjectExprInst", o = "onreadystatechange", u = window, a = document, f = navigator, l = !1, c = [A], h = [], p = [], d = [], v, m, g, y, b = !1, w = !1, E, S, x = !0, T = function() {
        var s = typeof a.getElementById != e && typeof a.getElementsByTagName != e && typeof a.createElement != e, o = f.userAgent.toLowerCase(), c = f.platform.toLowerCase(), h = c ? /win/.test(c) : /win/.test(o), p = c ? /mac/.test(c) : /mac/.test(o), d = /webkit/.test(o) ? parseFloat(o.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : !1, v = !1, m = [0, 0, 0], g = null;
        if (typeof f.plugins != e && typeof f.plugins[n] == t)
            g = f.plugins[n].description, g && (typeof f.mimeTypes == e || !f.mimeTypes[i] || !!f.mimeTypes[i].enabledPlugin) && (l = !0, v = !1, g = g.replace(/^.*\s+(\S+\s+\S+$)/, "$1"), m[0] = parseInt(g.replace(/^(.*)\..*$/, "$1"), 10), m[1] = parseInt(g.replace(/^.*\.(.*)\s.*$/, "$1"), 10), m[2] = /[a-zA-Z]/.test(g) ? parseInt(g.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0);
        else if (typeof u.ActiveXObject != e)
            try {
                var y = new ActiveXObject(r);
                y && (g = y.GetVariable("$version"), g && (v = !0, g = g.split(" ")[1].split(","), m = [parseInt(g[0], 10), parseInt(g[1], 10), parseInt(g[2], 10)]))
            } catch (b) {
            }
        return {w3: s,pv: m,wk: d,ie: v,win: h,mac: p}
    }(), N = function() {
        if (!T.w3)
            return;
        (typeof a.readyState != e && a.readyState == "complete" || typeof a.readyState == e && (a.getElementsByTagName("body")[0] || a.body)) && C(), b || (typeof a.addEventListener != e && a.addEventListener("DOMContentLoaded", C, !1), T.ie && T.win && (a.attachEvent(o, function() {
            a.readyState == "complete" && (a.detachEvent(o, arguments.callee), C())
        }), u == top && function() {
            if (b)
                return;
            try {
                a.documentElement.doScroll("left")
            } catch (e) {
                setTimeout(arguments.callee, 0);
                return
            }
            C()
        }()), T.wk && function() {
            if (b)
                return;
            if (!/loaded|complete/.test(a.readyState)) {
                setTimeout(arguments.callee, 0);
                return
            }
            C()
        }(), L(C))
    }(), J = function() {
        T.ie && T.win && window.attachEvent("onunload", function() {
            var e = d.length;
            for (var t = 0; t < e; t++)
                d[t][0].detachEvent(d[t][1], d[t][2]);
            var n = p.length;
            for (var r = 0; r < n; r++)
                I(p[r]);
            for (var i in T)
                T[i] = null;
            T = null;
            for (var s in swfobject)
                swfobject[s] = null;
            swfobject = null
        })
    }();
    return {registerObject: function(e, t, n, r) {
            if (T.w3 && e && t) {
                var i = {};
                i.id = e, i.swfVersion = t, i.expressInstall = n, i.callbackFn = r, h[h.length] = i, V(e, !1)
            } else
                r && r({success: !1,id: e})
        },getObjectById: function(e) {
            if (T.w3)
                return _(e)
        },embedSWF: function(n, r, i, s, o, u, a, f, l, c) {
            var h = {success: !1,id: r};
            T.w3 && !(T.wk && T.wk < 312) && n && r && i && s && o ? (V(r, !1), k(function() {
                i += "", s += "";
                var p = {};
                if (l && typeof l === t)
                    for (var d in l)
                        p[d] = l[d];
                p.data = n, p.width = i, p.height = s;
                var v = {};
                if (f && typeof f === t)
                    for (var m in f)
                        v[m] = f[m];
                if (a && typeof a === t)
                    for (var g in a)
                        typeof v.flashvars != e ? v.flashvars += "&" + g + "=" + a[g] : v.flashvars = g + "=" + a[g];
                if (W(o)) {
                    var y = j(p, v, r);
                    p.id == r && V(r, !0), h.success = !0, h.ref = y
                } else {
                    if (u && D()) {
                        p.data = u, P(p, v, r, c);
                        return
                    }
                    V(r, !0)
                }
                c && c(h)
            })) : c && c(h)
        },switchOffAutoHideShow: function() {
            x = !1
        },ua: T,getFlashPlayerVersion: function() {
            return {major: T.pv[0],minor: T.pv[1],release: T.pv[2]}
        },hasFlashPlayerVersion: W,createSWF: function(e, t, n) {
            return T.w3 ? j(e, t, n) : undefined
        },showExpressInstall: function(e, t, n, r) {
            T.w3 && D() && P(e, t, n, r)
        },removeSWF: function(e) {
            T.w3 && I(e)
        },createCSS: function(e, t, n, r) {
            T.w3 && X(e, t, n, r)
        },addDomLoadEvent: k,addLoadEvent: L,getQueryParamValue: function(e) {
            var t = a.location.search || a.location.hash;
            if (t) {
                /\?/.test(t) && (t = t.split("?")[1]);
                if (e == null)
                    return $(t);
                var n = t.split("&");
                for (var r = 0; r < n.length; r++)
                    if (n[r].substring(0, n[r].indexOf("=")) == e)
                        return $(n[r].substring(n[r].indexOf("=") + 1))
            }
            return ""
        },expressInstallCallback: function() {
            if (w) {
                var e = R(s);
                e && v && (e.parentNode.replaceChild(v, e), m && (V(m, !0), T.ie && T.win && (v.style.display = "block")), g && g(y)), w = !1
            }
        }}
}(), swfobject = function() {
    function C() {
        if (b)
            return;
        try {
            var e = a.getElementsByTagName("body")[0].appendChild(U("span"));
            e.parentNode.removeChild(e)
        } catch (t) {
            return
        }
        b = !0;
        var n = c.length;
        for (var r = 0; r < n; r++)
            c[r]()
    }
    function k(e) {
        b ? e() : c[c.length] = e
    }
    function L(t) {
        if (typeof u.addEventListener != e)
            u.addEventListener("load", t, !1);
        else if (typeof a.addEventListener != e)
            a.addEventListener("load", t, !1);
        else if (typeof u.attachEvent != e)
            z(u, "onload", t);
        else if (typeof u.onload == "function") {
            var n = u.onload;
            u.onload = function() {
                n(), t()
            }
        } else
            u.onload = t
    }
    function A() {
        l ? O() : M()
    }
    function O() {
        var n = a.getElementsByTagName("body")[0], r = U(t);
        r.setAttribute("type", i);
        var s = n.appendChild(r);
        if (s) {
            var o = 0;
            (function() {
                if (typeof s.GetVariable != e) {
                    var t = s.GetVariable("$version");
                    t && (t = t.split(" ")[1].split(","), T.pv = [parseInt(t[0], 10), parseInt(t[1], 10), parseInt(t[2], 10)])
                } else if (o < 10) {
                    o++, setTimeout(arguments.callee, 10);
                    return
                }
                n.removeChild(r), s = null, M()
            })()
        } else
            M()
    }
    function M() {
        var t = h.length;
        if (t > 0)
            for (var n = 0; n < t; n++) {
                var r = h[n].id, i = h[n].callbackFn, s = {success: !1,id: r};
                if (T.pv[0] > 0) {
                    var o = R(r);
                    if (o)
                        if (W(h[n].swfVersion) && !(T.wk && T.wk < 312))
                            V(r, !0), i && (s.success = !0, s.ref = _(r), i(s));
                        else if (h[n].expressInstall && D()) {
                            var u = {};
                            u.data = h[n].expressInstall, u.width = o.getAttribute("width") || "0", u.height = o.getAttribute("height") || "0", o.getAttribute("class") && (u.styleclass = o.getAttribute("class")), o.getAttribute("align") && (u.align = o.getAttribute("align"));
                            var a = {}, f = o.getElementsByTagName("param"), l = f.length;
                            for (var c = 0; c < l; c++)
                                f[c].getAttribute("name").toLowerCase() != "movie" && (a[f[c].getAttribute("name")] = f[c].getAttribute("value"));
                            P(u, a, r, i)
                        } else
                            H(o), i && i(s)
                } else {
                    V(r, !0);
                    if (i) {
                        var p = _(r);
                        p && typeof p.SetVariable != e && (s.success = !0, s.ref = p), i(s)
                    }
                }
            }
    }
    function _(n) {
        var r = null, i = R(n);
        if (i && i.nodeName == "OBJECT")
            if (typeof i.SetVariable != e)
                r = i;
            else {
                var s = i.getElementsByTagName(t)[0];
                s && (r = s)
            }
        return r
    }
    function D() {
        return !w && W("6.0.65") && (T.win || T.mac) && !(T.wk && T.wk < 312)
    }
    function P(t, n, r, i) {
        w = !0, g = i || null, y = {success: !1,id: r};
        var o = R(r);
        if (o) {
            o.nodeName == "OBJECT" ? (v = B(o), m = null) : (v = o, m = r), t.id = s;
            if (typeof t.width == e || !/%$/.test(t.width) && parseInt(t.width, 10) < 310)
                t.width = "310";
            if (typeof t.height == e || !/%$/.test(t.height) && parseInt(t.height, 10) < 137)
                t.height = "137";
            a.title = a.title.slice(0, 47) + " - Flash Player Installation";
            var f = T.ie && T.win ? "ActiveX" : "PlugIn", l = "MMredirectURL=" + u.location.toString().replace(/&/g, "%26") + "&MMplayerType=" + f + "&MMdoctitle=" + a.title;
            typeof n.flashvars != e ? n.flashvars += "&" + l : n.flashvars = l;
            if (T.ie && T.win && o.readyState != 4) {
                var c = U("div");
                r += "SWFObjectNew", c.setAttribute("id", r), o.parentNode.insertBefore(c, o), o.style.display = "none", function() {
                    o.readyState == 4 ? o.parentNode.removeChild(o) : setTimeout(arguments.callee, 10)
                }()
            }
            j(t, n, r)
        }
    }
    function H(e) {
        if (T.ie && T.win && e.readyState != 4) {
            var t = U("div");
            e.parentNode.insertBefore(t, e), t.parentNode.replaceChild(B(e), t), e.style.display = "none", function() {
                e.readyState == 4 ? e.parentNode.removeChild(e) : setTimeout(arguments.callee, 10)
            }()
        } else
            e.parentNode.replaceChild(B(e), e)
    }
    function B(e) {
        var n = U("div");
        if (T.win && T.ie)
            n.innerHTML = e.innerHTML;
        else {
            var r = e.getElementsByTagName(t)[0];
            if (r) {
                var i = r.childNodes;
                if (i) {
                    var s = i.length;
                    for (var o = 0; o < s; o++)
                        (i[o].nodeType != 1 || i[o].nodeName != "PARAM") && i[o].nodeType != 8 && n.appendChild(i[o].cloneNode(!0))
                }
            }
        }
        return n
    }
    function j(n, r, s) {
        var o, u = R(s);
        if (T.wk && T.wk < 312)
            return o;
        if (u) {
            typeof n.id == e && (n.id = s);
            if (T.ie && T.win) {
                var a = "";
                for (var f in n)
                    n[f] != Object.prototype[f] && (f.toLowerCase() == "data" ? r.movie = n[f] : f.toLowerCase() == "styleclass" ? a += ' class="' + n[f] + '"' : f.toLowerCase() != "classid" && (a += " " + f + '="' + n[f] + '"'));
                var l = "";
                for (var c in r)
                    r[c] != Object.prototype[c] && (l += '<param name="' + c + '" value="' + r[c] + '" />');
                u.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + a + ">" + l + "</object>", p[p.length] = n.id, o = R(n.id)
            } else {
                var h = U(t);
                h.setAttribute("type", i);
                for (var d in n)
                    n[d] != Object.prototype[d] && (d.toLowerCase() == "styleclass" ? h.setAttribute("class", n[d]) : d.toLowerCase() != "classid" && h.setAttribute(d, n[d]));
                for (var v in r)
                    r[v] != Object.prototype[v] && v.toLowerCase() != "movie" && F(h, v, r[v]);
                u.parentNode.replaceChild(h, u), o = h
            }
        }
        return o
    }
    function F(e, t, n) {
        var r = U("param");
        r.setAttribute("name", t), r.setAttribute("value", n), e.appendChild(r)
    }
    function I(e) {
        var t = R(e);
        t && t.nodeName == "OBJECT" && (T.ie && T.win ? (t.style.display = "none", function() {
            t.readyState == 4 ? q(e) : setTimeout(arguments.callee, 10)
        }()) : t.parentNode.removeChild(t))
    }
    function q(e) {
        var t = R(e);
        if (t) {
            for (var n in t)
                typeof t[n] == "function" && (t[n] = null);
            t.parentNode.removeChild(t)
        }
    }
    function R(e) {
        var t = null;
        try {
            t = a.getElementById(e)
        } catch (n) {
        }
        return t
    }
    function U(e) {
        return a.createElement(e)
    }
    function z(e, t, n) {
        e.attachEvent(t, n), d[d.length] = [e, t, n]
    }
    function W(e) {
        var t = T.pv, n = e.split(".");
        return n[0] = parseInt(n[0], 10), n[1] = parseInt(n[1], 10) || 0, n[2] = parseInt(n[2], 10) || 0, t[0] > n[0] || t[0] == n[0] && t[1] > n[1] || t[0] == n[0] && t[1] == n[1] && t[2] >= n[2] ? !0 : !1
    }
    function X(n, r, i, s) {
        if (T.ie && T.mac)
            return;
        var o = a.getElementsByTagName("head")[0];
        if (!o)
            return;
        var u = i && typeof i == "string" ? i : "screen";
        s && (E = null, S = null);
        if (!E || S != u) {
            var f = U("style");
            f.setAttribute("type", "text/css"), f.setAttribute("media", u), E = o.appendChild(f), T.ie && T.win && typeof a.styleSheets != e && a.styleSheets.length > 0 && (E = a.styleSheets[a.styleSheets.length - 1]), S = u
        }
        T.ie && T.win ? E && typeof E.addRule == t && E.addRule(n, r) : E && typeof a.createTextNode != e && E.appendChild(a.createTextNode(n + " {" + r + "}"))
    }
    function V(e, t) {
        if (!x)
            return;
        var n = t ? "visible" : "hidden";
        b && R(e) ? R(e).style.visibility = n : X("#" + e, "visibility:" + n)
    }
    function $(t) {
        var n = /[\\\"<>\.;]/, r = n.exec(t) != null;
        return r && typeof encodeURIComponent != e ? encodeURIComponent(t) : t
    }
    var e = "undefined", t = "object", n = "Shockwave Flash", r = "ShockwaveFlash.ShockwaveFlash", i = "application/x-shockwave-flash", s = "SWFObjectExprInst", o = "onreadystatechange", u = window, a = document, f = navigator, l = !1, c = [A], h = [], p = [], d = [], v, m, g, y, b = !1, w = !1, E, S, x = !0, T = function() {
        var s = typeof a.getElementById != e && typeof a.getElementsByTagName != e && typeof a.createElement != e, o = f.userAgent.toLowerCase(), c = f.platform.toLowerCase(), h = c ? /win/.test(c) : /win/.test(o), p = c ? /mac/.test(c) : /mac/.test(o), d = /webkit/.test(o) ? parseFloat(o.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : !1, v = !1, m = [0, 0, 0], g = null;
        if (typeof f.plugins != e && typeof f.plugins[n] == t)
            g = f.plugins[n].description, g && (typeof f.mimeTypes == e || !f.mimeTypes[i] || !!f.mimeTypes[i].enabledPlugin) && (l = !0, v = !1, g = g.replace(/^.*\s+(\S+\s+\S+$)/, "$1"), m[0] = parseInt(g.replace(/^(.*)\..*$/, "$1"), 10), m[1] = parseInt(g.replace(/^.*\.(.*)\s.*$/, "$1"), 10), m[2] = /[a-zA-Z]/.test(g) ? parseInt(g.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0);
        else if (typeof u.ActiveXObject != e)
            try {
                var y = new ActiveXObject(r);
                y && (g = y.GetVariable("$version"), g && (v = !0, g = g.split(" ")[1].split(","), m = [parseInt(g[0], 10), parseInt(g[1], 10), parseInt(g[2], 10)]))
            } catch (b) {
            }
        return {w3: s,pv: m,wk: d,ie: v,win: h,mac: p}
    }(), N = function() {
        if (!T.w3)
            return;
        (typeof a.readyState != e && a.readyState == "complete" || typeof a.readyState == e && (a.getElementsByTagName("body")[0] || a.body)) && C(), b || (typeof a.addEventListener != e && a.addEventListener("DOMContentLoaded", C, !1), T.ie && T.win && (a.attachEvent(o, function() {
            a.readyState == "complete" && (a.detachEvent(o, arguments.callee), C())
        }), u == top && function() {
            if (b)
                return;
            try {
                a.documentElement.doScroll("left")
            } catch (e) {
                setTimeout(arguments.callee, 0);
                return
            }
            C()
        }()), T.wk && function() {
            if (b)
                return;
            if (!/loaded|complete/.test(a.readyState)) {
                setTimeout(arguments.callee, 0);
                return
            }
            C()
        }(), L(C))
    }(), J = function() {
        T.ie && T.win && window.attachEvent("onunload", function() {
            var e = d.length;
            for (var t = 0; t < e; t++)
                d[t][0].detachEvent(d[t][1], d[t][2]);
            var n = p.length;
            for (var r = 0; r < n; r++)
                I(p[r]);
            for (var i in T)
                T[i] = null;
            T = null;
            for (var s in swfobject)
                swfobject[s] = null;
            swfobject = null
        })
    }();
    return {registerObject: function(e, t, n, r) {
            if (T.w3 && e && t) {
                var i = {};
                i.id = e, i.swfVersion = t, i.expressInstall = n, i.callbackFn = r, h[h.length] = i, V(e, !1)
            } else
                r && r({success: !1,id: e})
        },getObjectById: function(e) {
            if (T.w3)
                return _(e)
        },embedSWF: function(n, r, i, s, o, u, a, f, l, c) {
            var h = {success: !1,id: r};
            T.w3 && !(T.wk && T.wk < 312) && n && r && i && s && o ? (V(r, !1), k(function() {
                i += "", s += "";
                var p = {};
                if (l && typeof l === t)
                    for (var d in l)
                        p[d] = l[d];
                p.data = n, p.width = i, p.height = s;
                var v = {};
                if (f && typeof f === t)
                    for (var m in f)
                        v[m] = f[m];
                if (a && typeof a === t)
                    for (var g in a)
                        typeof v.flashvars != e ? v.flashvars += "&" + g + "=" + a[g] : v.flashvars = g + "=" + a[g];
                if (W(o)) {
                    var y = j(p, v, r);
                    p.id == r && V(r, !0), h.success = !0, h.ref = y
                } else {
                    if (u && D()) {
                        p.data = u, P(p, v, r, c);
                        return
                    }
                    V(r, !0)
                }
                c && c(h)
            })) : c && c(h)
        },switchOffAutoHideShow: function() {
            x = !1
        },ua: T,getFlashPlayerVersion: function() {
            return {major: T.pv[0],minor: T.pv[1],release: T.pv[2]}
        },hasFlashPlayerVersion: W,createSWF: function(e, t, n) {
            return T.w3 ? j(e, t, n) : undefined
        },showExpressInstall: function(e, t, n, r) {
            T.w3 && D() && P(e, t, n, r)
        },removeSWF: function(e) {
            T.w3 && I(e)
        },createCSS: function(e, t, n, r) {
            T.w3 && X(e, t, n, r)
        },addDomLoadEvent: k,addLoadEvent: L,getQueryParamValue: function(e) {
            var t = a.location.search || a.location.hash;
            if (t) {
                /\?/.test(t) && (t = t.split("?")[1]);
                if (e == null)
                    return $(t);
                var n = t.split("&");
                for (var r = 0; r < n.length; r++)
                    if (n[r].substring(0, n[r].indexOf("=")) == e)
                        return $(n[r].substring(n[r].indexOf("=") + 1))
            }
            return ""
        },expressInstallCallback: function() {
            if (w) {
                var e = R(s);
                e && v && (e.parentNode.replaceChild(v, e), m && (V(m, !0), T.ie && T.win && (v.style.display = "block")), g && g(y)), w = !1
            }
        }}
}(), SWFUpload;
SWFUpload == undefined && (SWFUpload = function(e) {
    this.initSWFUpload(e)
}), SWFUpload.prototype.initSWFUpload = function(e) {
    try {
        this.customSettings = {}, this.settings = e, this
        .eventQueue = [], this.movieName = "SWFUpload_" + SWFUpload.movieCount++, this.movieElement = null, SWFUpload.instances[this.movieName] = this, this.initSettings(), this.loadFlash(), this.displayDebugInfo()
    } catch (t) {
        throw delete SWFUpload.instances[this.movieName], t
    }
}, SWFUpload.instances = {}, SWFUpload.movieCount = 0, SWFUpload.version = "2.2.0 2009-03-25", SWFUpload.QUEUE_ERROR = {QUEUE_LIMIT_EXCEEDED: -100,FILE_EXCEEDS_SIZE_LIMIT: -110,ZERO_BYTE_FILE: -120,INVALID_FILETYPE: -130}, SWFUpload.UPLOAD_ERROR = {HTTP_ERROR: -200,MISSING_UPLOAD_URL: -210,IO_ERROR: -220,SECURITY_ERROR: -230,UPLOAD_LIMIT_EXCEEDED: -240,UPLOAD_FAILED: -250,SPECIFIED_FILE_ID_NOT_FOUND: -260,FILE_VALIDATION_FAILED: -270,FILE_CANCELLED: -280,UPLOAD_STOPPED: -290}, SWFUpload.FILE_STATUS = {QUEUED: -1,IN_PROGRESS: -2,ERROR: -3,COMPLETE: -4,CANCELLED: -5}, SWFUpload.BUTTON_ACTION = {SELECT_FILE: -100,SELECT_FILES: -110,START_UPLOAD: -120}, SWFUpload.CURSOR = {ARROW: -1,HAND: -2}, SWFUpload.WINDOW_MODE = {WINDOW: "window",TRANSPARENT: "transparent",OPAQUE: "opaque"}, SWFUpload.completeURL = function(e) {
    if (typeof e != "string" || e.match(/^https?:\/\//i) || e.match(/^\//))
        return e;
    var t = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ":" + window.location.port : ""), n = window.location.pathname.lastIndexOf("/");
    return n <= 0 ? path = "/" : path = window.location.pathname.substr(0, n) + "/", path + e
}, SWFUpload.prototype.initSettings = function() {
    this.ensureDefault = function(e, t) {
        this.settings[e] = this.settings[e] == undefined ? t : this.settings[e]
    }, this.ensureDefault("upload_url", ""), this.ensureDefault("preserve_relative_urls", !1), this.ensureDefault("file_post_name", "Filedata"), this.ensureDefault("post_params", {}), this.ensureDefault("use_query_string", !1), this.ensureDefault("requeue_on_error", !1), this.ensureDefault("http_success", []), this.ensureDefault("assume_success_timeout", 0), this.ensureDefault("file_types", "*.*"), this.ensureDefault("file_types_description", "All Files"), this.ensureDefault("file_size_limit", 0), this.ensureDefault("file_upload_limit", 0), this.ensureDefault("file_queue_limit", 0), this.ensureDefault("flash_url", "swfupload.swf"), this.ensureDefault("prevent_swf_caching", !0), this.ensureDefault("button_image_url", ""), this.ensureDefault("button_width", 1), this.ensureDefault("button_height", 1), this.ensureDefault("button_text", ""), this.ensureDefault("button_text_style", "color: #000000; font-size: 16pt;"), this.ensureDefault("button_text_top_padding", 0), this.ensureDefault("button_text_left_padding", 0), this.ensureDefault("button_action", SWFUpload.BUTTON_ACTION.SELECT_FILES), this.ensureDefault("button_disabled", !1), this.ensureDefault("button_placeholder_id", ""), this.ensureDefault("button_placeholder", null), this.ensureDefault("button_cursor", SWFUpload.CURSOR.ARROW), this.ensureDefault("button_window_mode", SWFUpload.WINDOW_MODE.WINDOW), this.ensureDefault("debug", !1), this.settings.debug_enabled = this.settings.debug, this.settings.return_upload_start_handler = this.returnUploadStart, this.ensureDefault("swfupload_loaded_handler", null), this.ensureDefault("file_dialog_start_handler", null), this.ensureDefault("file_queued_handler", null), this.ensureDefault("file_queue_error_handler", null), this.ensureDefault("file_dialog_complete_handler", null), this.ensureDefault("upload_start_handler", null), this.ensureDefault("upload_progress_handler", null), this.ensureDefault("upload_error_handler", null), this.ensureDefault("upload_success_handler", null), this.ensureDefault("upload_complete_handler", null), this.ensureDefault("debug_handler", this.debugMessage), this.ensureDefault("custom_settings", {}), this.customSettings = this.settings.custom_settings, !this.settings.prevent_swf_caching || (this.settings.flash_url = this.settings.flash_url + (this.settings.flash_url.indexOf("?") < 0 ? "?" : "&") + "preventswfcaching=" + (new Date).getTime()), this.settings.preserve_relative_urls || (this.settings.upload_url = SWFUpload.completeURL(this.settings.upload_url), this.settings.button_image_url = SWFUpload.completeURL(this.settings.button_image_url)), delete this.ensureDefault
}, SWFUpload.prototype.loadFlash = function() {
    var e, t;
    if (document.getElementById(this.movieName) !== null)
        throw "ID " + this.movieName + " is already in use. The Flash Object could not be added";
    e = document.getElementById(this.settings.button_placeholder_id) || this.settings.button_placeholder;
    if (e == undefined)
        throw "Could not find the placeholder element: " + this.settings.button_placeholder_id;
    t = document.createElement("div"), t.innerHTML = this.getFlashHTML(), e.parentNode.replaceChild(t.firstChild, e), window[this.movieName] == undefined && (window[this.movieName] = this.getMovieElement())
}, SWFUpload.prototype.getFlashHTML = function() {
    return ['<object id="', this.movieName, '" type="application/x-shockwave-flash" data="', this.settings.flash_url, '" width="', this.settings.button_width, '" height="', this.settings.button_height, '" class="swfupload">', '<param name="wmode" value="', this.settings.button_window_mode, '" />', '<param name="movie" value="', this.settings.flash_url, '" />', '<param name="quality" value="high" />', '<param name="menu" value="false" />', '<param name="allowScriptAccess" value="always" />', '<param name="flashvars" value="' + this.getFlashVars() + '" />', "</object>"].join("")
}, SWFUpload.prototype.getFlashVars = function() {
    var e = this.buildParamString(), t = this.settings.http_success.join(",");
    return ["movieName=", encodeURIComponent(this.movieName), "&amp;uploadURL=", encodeURIComponent(this.settings.upload_url), "&amp;useQueryString=", encodeURIComponent(this.settings.use_query_string), "&amp;requeueOnError=", encodeURIComponent(this.settings.requeue_on_error), "&amp;httpSuccess=", encodeURIComponent(t), "&amp;assumeSuccessTimeout=", encodeURIComponent(this.settings.assume_success_timeout), "&amp;params=", encodeURIComponent(e), "&amp;filePostName=", encodeURIComponent(this.settings.file_post_name), "&amp;fileTypes=", encodeURIComponent(this.settings.file_types), "&amp;fileTypesDescription=", encodeURIComponent(this.settings.file_types_description), "&amp;fileSizeLimit=", encodeURIComponent(this.settings.file_size_limit), "&amp;fileUploadLimit=", encodeURIComponent(this.settings.file_upload_limit), "&amp;fileQueueLimit=", encodeURIComponent(this.settings.file_queue_limit), "&amp;debugEnabled=", encodeURIComponent(this.settings.debug_enabled), "&amp;buttonImageURL=", encodeURIComponent(this.settings.button_image_url), "&amp;buttonWidth=", encodeURIComponent(this.settings.button_width), "&amp;buttonHeight=", encodeURIComponent(this.settings.button_height), "&amp;buttonText=", encodeURIComponent(this.settings.button_text), "&amp;buttonTextTopPadding=", encodeURIComponent(this.settings.button_text_top_padding), "&amp;buttonTextLeftPadding=", encodeURIComponent(this.settings.button_text_left_padding), "&amp;buttonTextStyle=", encodeURIComponent(this.settings.button_text_style), "&amp;buttonAction=", encodeURIComponent(this.settings.button_action), "&amp;buttonDisabled=", encodeURIComponent(this.settings.button_disabled), "&amp;buttonCursor=", encodeURIComponent(this.settings.button_cursor)].join("")
}, SWFUpload.prototype.getMovieElement = function() {
    this.movieElement == undefined && (this.movieElement = document.getElementById(this.movieName));
    if (this.movieElement === null)
        throw "Could not find Flash element";
    return this.movieElement
}, SWFUpload.prototype.buildParamString = function() {
    var e = this.settings.post_params, t = [];
    if (typeof e == "object")
        for (var n in e)
            e.hasOwnProperty(n) && t.push(encodeURIComponent(n.toString()) + "=" + encodeURIComponent(e[n].toString()));
    return t.join("&amp;")
}, SWFUpload.prototype.destroy = function() {
    try {
        this.cancelUpload(null, !1);
        var e = null;
        e = this.getMovieElement();
        if (e && typeof e.CallFunction == "unknown") {
            for (var t in e)
                try {
                    typeof e[t] == "function" && (e[t] = null)
                } catch (n) {
                }
            try {
                e.parentNode.removeChild(e)
            } catch (r) {
            }
        }
        return window[this.movieName] = null, SWFUpload.instances[this.movieName] = null, delete SWFUpload.instances[this.movieName], this.movieElement = null, this.settings = null, this.customSettings = null, this.eventQueue = null, this.movieName = null, !0
    } catch (i) {
        return !1
    }
}, SWFUpload.prototype.displayDebugInfo = function() {
    this.debug(["---SWFUpload Instance Info---\n", "Version: ", SWFUpload.version, "\n", "Movie Name: ", this.movieName, "\n", "Settings:\n", "	", "upload_url:               ", this.settings.upload_url, "\n", "	", "flash_url:                ", this.settings.flash_url, "\n", "	", "use_query_string:         ", this.settings.use_query_string.toString(), "\n", "	", "requeue_on_error:         ", this.settings.requeue_on_error.toString(), "\n", "	", "http_success:             ", this.settings.http_success.join(", "), "\n", "	", "assume_success_timeout:   ", this.settings.assume_success_timeout, "\n", "	", "file_post_name:           ", this.settings.file_post_name, "\n", "	", "post_params:              ", this.settings.post_params.toString(), "\n", "	", "file_types:               ", this.settings.file_types, "\n", "	", "file_types_description:   ", this.settings.file_types_description, "\n", "	", "file_size_limit:          ", this.settings.file_size_limit, "\n", "	", "file_upload_limit:        ", this.settings.file_upload_limit, "\n", "	", "file_queue_limit:         ", this.settings.file_queue_limit, "\n", "	", "debug:                    ", this.settings.debug.toString(), "\n", "	", "prevent_swf_caching:      ", this.settings.prevent_swf_caching.toString(), "\n", "	", "button_placeholder_id:    ", this.settings.button_placeholder_id.toString(), "\n", "	", "button_placeholder:       ", this.settings.button_placeholder ? "Set" : "Not Set", "\n", "	", "button_image_url:         ", this.settings.button_image_url.toString(), "\n", "	", "button_width:             ", this.settings.button_width.toString(), "\n", "	", "button_height:            ", this.settings.button_height.toString(), "\n", "	", "button_text:              ", this.settings.button_text.toString(), "\n", "	", "button_text_style:        ", this.settings.button_text_style.toString(), "\n", "	", "button_text_top_padding:  ", this.settings.button_text_top_padding.toString(), "\n", "	", "button_text_left_padding: ", this.settings.button_text_left_padding.toString(), "\n", "	", "button_action:            ", this.settings.button_action.toString(), "\n", "	", "button_disabled:          ", this.settings.button_disabled.toString(), "\n", "	", "custom_settings:          ", this.settings.custom_settings.toString(), "\n", "Event Handlers:\n", "	", "swfupload_loaded_handler assigned:  ", (typeof this.settings.swfupload_loaded_handler == "function").toString(), "\n", "	", "file_dialog_start_handler assigned: ", (typeof this.settings.file_dialog_start_handler == "function").toString(), "\n", "	", "file_queued_handler assigned:       ", (typeof this.settings.file_queued_handler == "function").toString(), "\n", "	", "file_queue_error_handler assigned:  ", (typeof this.settings.file_queue_error_handler == "function").toString(), "\n", "	", "upload_start_handler assigned:      ", (typeof this.settings.upload_start_handler == "function").toString(), "\n", "	", "upload_progress_handler assigned:   ", (typeof this.settings.upload_progress_handler == "function").toString(), "\n", "	", "upload_error_handler assigned:      ", (typeof this.settings.upload_error_handler == "function").toString(), "\n", "	", "upload_success_handler assigned:    ", (typeof this.settings.upload_success_handler == "function").toString(), "\n", "	", "upload_complete_handler assigned:   ", (typeof this.settings.upload_complete_handler == "function").toString(), "\n", "	", "debug_handler assigned:             ", (typeof this.settings.debug_handler == "function").toString(), "\n"].join(""))
}, SWFUpload.prototype.addSetting = function(e, t, n) {
    return t == undefined ? this.settings[e] = n : this.settings[e] = t
}, SWFUpload.prototype.getSetting = function(e) {
    return this.settings[e] != undefined ? this.settings[e] : ""
}, SWFUpload.prototype.callFlash = function(functionName, argumentArray) {
    argumentArray = argumentArray || [];
    var movieElement = this.getMovieElement(), returnValue, returnString;
    try {
        returnString = movieElement.CallFunction('<invoke name="' + functionName + '" returntype="javascript">' + __flash__argumentsToXML(argumentArray, 0) + "</invoke>"), returnValue = eval(returnString)
    } catch (ex) {
        throw "Call to " + functionName + " failed"
    }
    return returnValue != undefined && typeof returnValue.post == "object" && (returnValue = this.unescapeFilePostParams(returnValue)), returnValue
}, SWFUpload.prototype.selectFile = function() {
    this.callFlash("SelectFile")
}, SWFUpload.prototype.selectFiles = function() {
    this.callFlash("SelectFiles")
}, SWFUpload.prototype.startUpload = function(e) {
    this.callFlash("StartUpload", [e])
}, SWFUpload.prototype.cancelUpload = function(e, t) {
    t !== !1 && (t = !0), this.callFlash("CancelUpload", [e, t])
}, SWFUpload.prototype.stopUpload = function() {
    this.callFlash("StopUpload")
}, SWFUpload.prototype.getStats = function() {
    return this.callFlash("GetStats")
}, SWFUpload.prototype.setStats = function(e) {
    this.callFlash("SetStats", [e])
}, SWFUpload.prototype.getFile = function(e) {
    return typeof e == "number" ? this.callFlash("GetFileByIndex", [e]) : this.callFlash("GetFile", [e])
}, SWFUpload.prototype.addFileParam = function(e, t, n) {
    return this.callFlash("AddFileParam", [e, t, n])
}, SWFUpload.prototype.removeFileParam = function(e, t) {
    this.callFlash("RemoveFileParam", [e, t])
}, SWFUpload.prototype.setUploadURL = function(e) {
    this.settings.upload_url = e.toString(), this.callFlash("SetUploadURL", [e])
}, SWFUpload.prototype.setPostParams = function(e) {
    this.settings.post_params = e, this.callFlash("SetPostParams", [e])
}, SWFUpload.prototype.addPostParam = function(e, t) {
    this.settings.post_params[e] = t, this.callFlash("SetPostParams", [this.settings.post_params])
}, SWFUpload.prototype.removePostParam = function(e) {
    delete this.settings.post_params[e], this.callFlash("SetPostParams", [this.settings.post_params])
}, SWFUpload.prototype.setFileTypes = function(e, t) {
    this.settings.file_types = e, this.settings.file_types_description = t, this.callFlash("SetFileTypes", [e, t])
}, SWFUpload.prototype.setFileSizeLimit = function(e) {
    this.settings.file_size_limit = e, this.callFlash("SetFileSizeLimit", [e])
}, SWFUpload.prototype.setFileUploadLimit = function(e) {
    this.settings.file_upload_limit = e, this.callFlash("SetFileUploadLimit", [e])
}, SWFUpload.prototype.setFileQueueLimit = function(e) {
    this.settings.file_queue_limit = e, this.callFlash("SetFileQueueLimit", [e])
}, SWFUpload.prototype.setFilePostName = function(e) {
    this.settings.file_post_name = e, this.callFlash("SetFilePostName", [e])
}, SWFUpload.prototype.setUseQueryString = function(e) {
    this.settings.use_query_string = e, this.callFlash("SetUseQueryString", [e])
}, SWFUpload.prototype.setRequeueOnError = function(e) {
    this.settings.requeue_on_error = e, this.callFlash("SetRequeueOnError", [e])
}, SWFUpload.prototype.setHTTPSuccess = function(e) {
    typeof e == "string" && (e = e.replace(" ", "").split(",")), this.settings.http_success = e, this.callFlash("SetHTTPSuccess", [e])
}, SWFUpload.prototype.setAssumeSuccessTimeout = function(e) {
    this.settings.assume_success_timeout = e, this.callFlash("SetAssumeSuccessTimeout", [e])
}, SWFUpload.prototype.setDebugEnabled = function(e) {
    this.settings.debug_enabled = e, this.callFlash("SetDebugEnabled", [e])
}, SWFUpload.prototype.setButtonImageURL = function(e) {
    e == undefined && (e = ""), this.settings.button_image_url = e, this.callFlash("SetButtonImageURL", [e])
}, SWFUpload.prototype.setButtonDimensions = function(e, t) {
    this.settings.button_width = e, this.settings.button_height = t;
    var n = this.getMovieElement();
    n != undefined && (n.style.width = e + "px", n.style.height = t + "px"), this.callFlash("SetButtonDimensions", [e, t])
}, SWFUpload.prototype.setButtonText = function(e) {
    this.settings.button_text = e, this.callFlash("SetButtonText", [e])
}, SWFUpload.prototype.setButtonTextPadding = function(e, t) {
    this.settings.button_text_top_padding = t, this.settings.button_text_left_padding = e, this.callFlash("SetButtonTextPadding", [e, t])
}, SWFUpload.prototype.setButtonTextStyle = function(e) {
    this.settings.button_text_style = e, this.callFlash("SetButtonTextStyle", [e])
}, SWFUpload.prototype.setButtonDisabled = function(e) {
    this.settings.button_disabled = e, this.callFlash("SetButtonDisabled", [e])
}, SWFUpload.prototype.setButtonAction = function(e) {
    this.settings.button_action = e, this.callFlash("SetButtonAction", [e])
}, SWFUpload.prototype.setButtonCursor = function(e) {
    this.settings.button_cursor = e, this.callFlash("SetButtonCursor", [e])
}, SWFUpload.prototype.queueEvent = function(e, t) {
    t == undefined ? t = [] : t instanceof Array || (t = [t]);
    var n = this;
    if (typeof this.settings[e] == "function")
        this.eventQueue.push(function() {
            this.settings[e].apply(this, t)
        }), setTimeout(function() {
            n.executeNextEvent()
        }, 0);
    else if (this.settings[e] !== null)
        throw "Event handler " + e + " is unknown or is not a function"
}, SWFUpload.prototype.executeNextEvent = function() {
    var e = this.eventQueue ? this.eventQueue.shift() : null;
    typeof e == "function" && e.apply(this)
}, SWFUpload.prototype.unescapeFilePostParams = function(e) {
    var t = /[$]([0-9a-f]{4})/i, n = {}, r;
    if (e != undefined) {
        for (var i in e.post)
            if (e.post.hasOwnProperty(i)) {
                r = i;
                var s;
                while ((s = t.exec(r)) !== null)
                    r = r.replace(s[0], String.fromCharCode(parseInt("0x" + s[1], 16)));
                n[r] = e.post[i]
            }
        e.post = n
    }
    return e
}, SWFUpload.prototype.testExternalInterface = function() {
    try {
        return this.callFlash("TestExternalInterface")
    } catch (e) {
        return !1
    }
}, SWFUpload.prototype.flashReady = function() {
    var e = this.getMovieElement();
    if (!e) {
        this.debug("Flash called back ready but the flash movie can't be found.");
        return
    }
    this.cleanUp(e), this.queueEvent("swfupload_loaded_handler")
}, SWFUpload.prototype.cleanUp = function(e) {
    try {
        if (this.movieElement && typeof e.CallFunction == "unknown") {
            this.debug("Removing Flash functions hooks (this should only run in IE and should prevent memory leaks)");
            for (var t in e)
                try {
                    typeof e[t] == "function" && (e[t] = null)
                } catch (n) {
                }
        }
    } catch (r) {
    }
    window.__flash__removeCallback = function(e, t) {
        try {
            e && (e[t] = null)
        } catch (n) {
        }
    }
}, SWFUpload.prototype.fileDialogStart = function() {
    this.queueEvent("file_dialog_start_handler")
}, SWFUpload.prototype.fileQueued = function(e) {
    e = this.unescapeFilePostParams(e), this.queueEvent("file_queued_handler", e)
}, SWFUpload.prototype.fileQueueError = function(e, t, n) {
    e = this.unescapeFilePostParams(e), this.queueEvent("file_queue_error_handler", [e, t, n])
}, SWFUpload.prototype.fileDialogComplete = function(e, t, n) {
    this.queueEvent("file_dialog_complete_handler", [e, t, n])
}, SWFUpload.prototype.uploadStart = function(e) {
    e = this.unescapeFilePostParams(e), this.queueEvent("return_upload_start_handler", e)
}, SWFUpload.prototype.returnUploadStart = function(e) {
    var t;
    if (typeof this.settings.upload_start_handler == "function")
        e = this.unescapeFilePostParams(e), t = this.settings.upload_start_handler.call(this, e);
    else if (this.settings.upload_start_handler != undefined)
        throw "upload_start_handler must be a function";
    t === undefined && (t = !0), t = !!t, this.callFlash("ReturnUploadStart", [t])
}, SWFUpload.prototype.uploadProgress = function(e, t, n) {
    e = this.unescapeFilePostParams(e), this.queueEvent("upload_progress_handler", [e, t, n])
}, SWFUpload.prototype.uploadError = function(e, t, n) {
    e = this.unescapeFilePostParams(e), this.queueEvent("upload_error_handler", [e, t, n])
}, SWFUpload.prototype.uploadSuccess = function(e, t, n) {
    e = this.unescapeFilePostParams(e), this.queueEvent("upload_success_handler", [e, t, n])
}, SWFUpload.prototype.uploadComplete = function(e) {
    e = this.unescapeFilePostParams(e), this.queueEvent("upload_complete_handler", e)
}, SWFUpload.prototype.debug = function(e) {
    this.queueEvent("debug_handler", e)
}, SWFUpload.prototype.debugMessage = function(e) {
    if (this.settings.debug) {
        var t, n = [];
        if (typeof e == "object" && typeof e.name == "string" && typeof e.message == "string") {
            for (var r in e)
                e.hasOwnProperty(r) && n.push(r + ": " + e[r]);
            t = n.join("\n") || "", n = t.split("\n"), t = "EXCEPTION: " + n.join("\nEXCEPTION: "), SWFUpload.Console.writeLine(t)
        } else
            SWFUpload.Console.writeLine(e)
    }
}, SWFUpload.Console = {}, SWFUpload.Console.writeLine = function(e) {
    var t, n;
    try {
        t = document.getElementById("SWFUpload_Console"), t || (n = document.createElement("form"), document.getElementsByTagName("body")[0].appendChild(n), t = document.createElement("textarea"), t.id = "SWFUpload_Console", t.style.fontFamily = "monospace", t.setAttribute("wrap", "off"), t.wrap = "off", t.style.overflow = "auto", t.style.width = "700px", t.style.height = "350px", t.style.margin = "5px", n.appendChild(t)), t.value += e + "\n", t.scrollTop = t.scrollHeight - t.clientHeight
    } catch (r) {
        alert("Exception: " + r.name + " Message: " + r.message)
    }
}, function(e) {
    var t = {init: function(t, r) {
            return this.each(function() {
                var i = e(this), s = i.clone(), o = e.extend({id: i.attr("id"),swf: "uploadify.swf",uploader: "uploadify.php",auto: !0,buttonClass: "",buttonCursor: "hand",buttonImage: null,buttonText: "SELECT FILES",checkExisting: !1,debug: !1,fileObjName: "Filedata",fileSizeLimit: 0,fileTypeDesc: "All Files",fileTypeExts: "*.*",height: 30,method: "post",multi: !0,formData: {},preventCaching: !0,progressData: "percentage",queueID: !1,queueSizeLimit: 999,removeCompleted: !0,removeTimeout: 3,requeueErrors: !1,successTimeout: 30,uploadLimit: 0,width: 120,overrideEvents: []}, t), u = {assume_success_timeout: o.successTimeout,button_placeholder_id: o.id,button_width: o.width,button_height: o.height,button_text: null,button_text_style: null,button_text_top_padding: 0,button_text_left_padding: 0,button_action: o.multi ? SWFUpload.BUTTON_ACTION.SELECT_FILES : SWFUpload.BUTTON_ACTION.SELECT_FILE,button_disabled: !1,button_cursor: o.buttonCursor == "arrow" ? SWFUpload.CURSOR.ARROW : SWFUpload.CURSOR.HAND,button_window_mode: SWFUpload.WINDOW_MODE.TRANSPARENT,debug: o.debug,requeue_on_error: o.requeueErrors,file_post_name: o.fileObjName,file_size_limit: o.fileSizeLimit,file_types: o.fileTypeExts,file_types_description: o.fileTypeDesc,file_queue_limit: o.queueSizeLimit,file_upload_limit: o.uploadLimit,flash_url: o.swf,prevent_swf_caching: o.preventCaching,post_params: o.formData,upload_url: o.uploader,use_query_string: o.method == "get",file_dialog_complete_handler: n.onDialogClose,file_dialog_start_handler: n.onDialogOpen,file_queued_handler: n.onSelect,file_queue_error_handler: n.onSelectError,swfupload_loaded_handler: o.onSWFReady,upload_complete_handler: n.onUploadComplete,upload_error_handler: n.onUploadError,upload_progress_handler: n.onUploadProgress,upload_start_handler: n.onUploadStart,upload_success_handler: n.onUploadSuccess};
                r && (u = e.extend(u, r)), u = e.extend(u, o);
                var f = swfobject.getFlashPlayerVersion(), l = f.major >= 9;
                if (l) {
                    window["uploadify_" + o.id] = new SWFUpload(u);
                    var h = window["uploadify_" + o.id];
                    i.data("uploadify", h);
                    var p = e("<div />", {id: o.id,"class": "uploadify",css: {height: o.height + "px",width: o.width + "px"}});
                    e("#" + h.movieName).wrap(p), p = e("#" + o.id), p.data("uploadify", h);
                    var v = e("<div />", {id: o.id + "-button","class": "uploadify-button " + o.buttonClass});
                    o.buttonImage && v.css({"background-image": "url('" + o.buttonImage + "')","text-indent": "-9999px"}), v.html('<span class="uploadify-button-text">' + o.buttonText + "</span>"), p.append(v), e("#" + h.movieName).css({position: "absolute","z-index": 1});
                    if (!o.queueID) {
                        var m = e("<div />", {id: o.id + "-queue","class": "uploadify-queue"});
                        p.after(m), h.settings.queueID = o.id + "-queue", h.settings.defaultQueue = !0
                    }
                    h.queueData = {files: {},filesSelected: 0,filesQueued: 0,filesReplaced: 0,filesCancelled: 0,filesErrored: 0,uploadsSuccessful: 0,uploadsErrored: 0,averageSpeed: 0,queueLength: 0,queueSize: 0,uploadSize: 0,queueBytesUploaded: 0,uploadQueue: [],errorMsg: "Some files were not added to the queue:"}, h.original = s, h.wrapper = p, h.button = v, h.queue = m, o.onInit && o.onInit.call(i, h)
                } else
                    o.onFallback && o.onFallback.call(i)
            })
        },cancel: function(t, n) {
            var r = arguments;
            this.each(function() {
                var t = e(this), n = t.data("uploadify"), i = n.settings, s = -1;
                if (r[0])
                    if (r[0] == "*") {
                        var o = n.queueData.queueLength;
                        e("#" + i.queueID).find(".uploadify-queue-item").each(function() {
                            s++, r[1] === !0 ? n.cancelUpload(e(this).attr("id"), !1) : n.cancelUpload(e(this).attr("id")), e(this).find(".data").removeClass("data").html(" - Cancelled"), e(this).find(".uploadify-progress-bar").remove(), e(this).delay(1e3 + 100 * s).fadeOut(500, function() {
                                e(this).remove()
                            })
                        }), n.queueData.queueSize = 0, i.onClearQueue && i.onClearQueue.call(t, o)
                    } else
                        for (var u = 0; u < r.length; u++)
                            n.cancelUpload(r[u]), e("#" + r[u]).find(".data").removeClass("data").html(" - Cancelled"), e("#" + r[u]).find(".uploadify-progress-bar").remove(), e("#" + r[u]).delay(1e3 + 100 * u).fadeOut(500, function() {
                                e(this).remove()
                            });
                else {
                    var a = e("#" + i.queueID).find(".uploadify-queue-item").get(0);
                    $item = e(a), n.cancelUpload($item.attr("id")), $item.find(".data").removeClass("data").html(" - Cancelled"), $item.find(".uploadify-progress-bar").remove(), $item.delay(1e3).fadeOut(500, function() {
                        e(this).remove()
                    })
                }
            })
        },destroy: function() {
            this.each(function() {
                var t = e(this), n = t.data("uploadify"), r = n.settings;
                n.destroy(), r.defaultQueue && e("#" + r.queueID).remove(), e("#" + r.id).replaceWith(n.original), r.onDestroy && r.onDestroy.call(this), delete n
            })
        },disable: function(t) {
            this.each(function() {
                var n = e(this), r = n.data("uploadify"), i = r.settings;
                t ? (r.button.addClass("disabled"), i.onDisable && i.onDisable.call(this)) : (r.button.removeClass("disabled"), i.onEnable && i.onEnable.call(this)), r.setButtonDisabled(t)
            })
        },settings: function(t, n, r) {
            var i = arguments, s = n;
            this.each(function() {
                var o = e(this), u = o.data("uploadify"), a = u.settings;
                if (typeof i[0] == "object")
                    for (var l in n)
                        setData(l, n[l]);
                if (i.length === 1)
                    s = a[t];
                else {
                    switch (t) {
                        case "uploader":
                            u.setUploadURL(n);
                            break;
                        case "formData":
                            r || (n = e.extend(a.formData, n)), u.setPostParams(a.formData);
                            break;
                        case "method":
                            n == "get" ? u.setUseQueryString(!0) : u.setUseQueryString(!1);
                            break;
                        case "fileObjName":
                            u.setFilePostName(n);
                            break;
                        case "fileTypeExts":
                            u.setFileTypes(n, a.fileTypeDesc);
                            break;
                        case "fileTypeDesc":
                            u.setFileTypes(a.fileTypeExts, n);
                            break;
                        case "fileSizeLimit":
                            u.setFileSizeLimit(n);
                            break;
                        case "uploadLimit":
                            u.setFileUploadLimit(n);
                            break;
                        case "queueSizeLimit":
                            u.setFileQueueLimit(n);
                            break;
                        case "buttonImage":
                            u.button.css("background-image", settingValue);
                            break;
                        case "buttonCursor":
                            n == "arrow" ? u.setButtonCursor(SWFUpload.CURSOR.ARROW) : u.setButtonCursor(SWFUpload.CURSOR.HAND);
                            break;
                        case "buttonText":
                            e("#" + a.id + "-button").find(".uploadify-button-text").html(n);
                            break;
                        case "width":
                            u.setButtonDimensions(n, a.height);
                            break;
                        case "height":
                            u.setButtonDimensions(a.width, n);
                            break;
                        case "multi":
                            n ? u.setButtonAction(SWFUpload.BUTTON_ACTION.SELECT_FILES) : u.setButtonAction(SWFUpload.BUTTON_ACTION.SELECT_FILE)
                    }
                    a[t] = n
                }
            });
            if (i.length === 1)
                return s
        },stop: function() {
            this.each(function() {
                var t = e(this), n = t.data("uploadify");
                n.queueData.averageSpeed = 0, n.queueData.uploadSize = 0, n.queueData.bytesUploaded = 0, n.queueData.uploadQueue = [], n.stopUpload()
            })
        },upload: function() {
            var t = arguments;
            this.each(function() {
                var n = e(this), r = n.data("uploadify");
                r.queueData.averageSpeed = 0, r.queueData.uploadSize = 0, r.queueData.bytesUploaded = 0, r.queueData.uploadQueue = [];
                if (t[0])
                    if (t[0] == "*")
                        r.queueData.uploadSize = r.queueData.queueSize, r.queueData.uploadQueue.push("*"), r.startUpload();
                    else {
                        for (var i = 0; i < t.length; i++)
                            r.queueData.uploadSize += r.queueData.files[t[i]].size, r.queueData.uploadQueue.push(t[i]);
                        r.startUpload(r.queueData.uploadQueue.shift())
                    }
                else
                    r.startUpload()
            })
        }}, n = {onDialogOpen: function() {
            var e = this.settings;
            this.queueData.errorMsg = "Some files were not added to the queue:", this.queueData.filesReplaced = 0, this.queueData.filesCancelled = 0, e.onDialogOpen && e.onDialogOpen.call(this)
        },onDialogClose: function(t, n, r) {
            var i = this.settings;
            this.queueData.filesErrored = t - n, this.queueData.filesSelected = t, this.queueData.filesQueued = n - this.queueData.filesCancelled, this.queueData.queueLength = r, e.inArray("onDialogClose", i.overrideEvents) < 0 && this.queueData.filesErrored > 0 && alert(this.queueData.errorMsg), i.onDialogClose && i.onDialogClose.call(this, this.queueData), i.auto && e("#" + i.id).uploadify("upload", "*")
        },onSelect: function(t) {
            var n = this.settings, r = {};
            for (var i in this.queueData.files) {
                r = this.queueData.files[i];
                if (r.uploaded != 1 && r.name == t.name) {
                    var s = confirm('The file named "' + t.name + '" is already in the queue.\nDo you want to replace the existing item in the queue?');
                    if (!s)
                        return this.cancelUpload(t.id), this.queueData.filesCancelled++, !1;
                    e("#" + r.id).remove(), this.cancelUpload(r.id), this.queueData.filesReplaced++
                }
            }
            var o = Math.round(t.size / 1024), u = "KB";
            o > 1e3 && (o = Math.round(o / 1e3), u = "MB");
            var a = o.toString().split(".");
            o = a[0], a.length > 1 && (o += "." + a[1].substr(0, 2)), o += u;
            var f = t.name;
            f.length > 25 && (f = f.substr(0, 25) + "..."), e.inArray("onSelect", n.overrideEvents) < 0 && e("#" + n.queueID).append('<div id="' + t.id + '" class="uploadify-queue-item">					<div class="cancel">						<a href="javascript:$(\'#' + n.id + "').uploadify('cancel', '" + t.id + '\')">X</a>					</div>					<span class="fileName">' + f + " (" + o + ')</span><span class="data"></span>					<div class="uploadify-progress">						<div class="uploadify-progress-bar"><!--Progress Bar--></div>					</div>				</div>'), this.queueData.queueSize += t.size, this.queueData.files[t.id] = t, n.onSelect && n.onSelect.apply(this, arguments)
        },onSelectError: function(t, n, r) {
            var i = this.settings;
            if (e.inArray("onSelectError", i.overrideEvents) < 0)
                switch (n) {
                    case SWFUpload.QUEUE_ERROR.QUEUE_LIMIT_EXCEEDED:
                        i.queueSizeLimit > r ? this.queueData.errorMsg += "\nThe number of files selected exceeds the remaining upload limit (" + r + ")." : this.queueData.errorMsg += "\nThe number of files selected exceeds the queue size limit (" + i.queueSizeLimit + ").";
                        break;
                    case SWFUpload.QUEUE_ERROR.FILE_EXCEEDS_SIZE_LIMIT:
                        this.queueData.errorMsg += '\nThe file "' + t.name + '" exceeds the size limit (' + i.fileSizeLimit + ").";
                        break;
                    case SWFUpload.QUEUE_ERROR.ZERO_BYTE_FILE:
                        this.queueData.errorMsg += '\nThe file "' + t.name + '" is empty.';
                        break;
                    case SWFUpload.QUEUE_ERROR.FILE_EXCEEDS_SIZE_LIMIT:
                        this.queueData.errorMsg += '\nThe file "' + t.name + '" is not an accepted file type (' + i.fileTypeDesc + ")."
                }
            n != SWFUpload.QUEUE_ERROR.QUEUE_LIMIT_EXCEEDED && delete this.queueData.files[t.id], i.onSelectError && i.onSelectError.apply(this, arguments)
        },onQueueComplete: function() {
            this.settings.onQueueComplete && this.settings.onQueueComplete.call(this, this.settings.queueData)
        },onUploadComplete: function(t) {
            var n = this.settings, r = this, i = this.getStats();
            this.queueData.queueLength = i.files_queued, this.queueData.uploadQueue[0] == "*" ? this.queueData.queueLength > 0 ? this.startUpload() : (this.queueData.uploadQueue = [], n.onQueueComplete && n.onQueueComplete.call(this, this.queueData)) : this.queueData.uploadQueue.length > 0 ? this.startUpload(this.queueData.uploadQueue.shift()) : (this.queueData.uploadQueue = [], n.onQueueComplete && n.onQueueComplete.call(this, this.queueData));
            if (e.inArray("onUploadComplete", n.overrideEvents) < 0)
                if (n.removeCompleted)
                    switch (t.filestatus) {
                        case SWFUpload.FILE_STATUS.COMPLETE:
                            setTimeout(function() {
                                e("#" + t.id) && (r.queueData.queueSize -= t.size, delete r.queueData.files[t.id], e("#" + t.id).fadeOut(500, function() {
                                    e(this).remove()
                                }))
                            }, n.removeTimeout * 1e3);
                            break;
                        case SWFUpload.FILE_STATUS.ERROR:
                            n.requeueErrors || setTimeout(function() {
                                e("#" + t.id) && (r.queueData.queueSize -= t.size, delete r.queueData.files[t.id], e("#" + t.id).fadeOut(500, function() {
                                    e(this).remove()
                                }))
                            }, n.removeTimeout * 1e3)
                    }
                else
                    t.uploaded = !0;
            n.onUploadComplete && n.onUploadComplete.call(this, t)
        },onUploadError: function(t, n, r) {
            var i = this.settings, s = "Error";
            switch (n) {
                case SWFUpload.UPLOAD_ERROR.HTTP_ERROR:
                    s = "HTTP Error (" + r + ")";
                    break;
                case SWFUpload.UPLOAD_ERROR.MISSING_UPLOAD_URL:
                    s = "Missing Upload URL";
                    break;
                case SWFUpload.UPLOAD_ERROR.IO_ERROR:
                    s = "IO Error";
                    break;
                case SWFUpload.UPLOAD_ERROR.SECURITY_ERROR:
                    s = "Security Error";
                    break;
                case SWFUpload.UPLOAD_ERROR.UPLOAD_LIMIT_EXCEEDED:
                    alert("The upload limit has been reached (" + r + ")."), s = "Exceeds Upload Limit";
                    break;
                case SWFUpload.UPLOAD_ERROR.UPLOAD_FAILED:
                    s = "Failed";
                    break;
                case SWFUpload.UPLOAD_ERROR.SPECIFIED_FILE_ID_NOT_FOUND:
                    break;
                case SWFUpload.UPLOAD_ERROR.FILE_VALIDATION_FAILED:
                    s = "Validation Error";
                    break;
                case SWFUpload.UPLOAD_ERROR.FILE_CANCELLED:
                    s = "Cancelled", this.queueData.queueSize -= t.size;
                    if (t.status == SWFUpload.FILE_STATUS.IN_PROGRESS || e.inArray(t.id, this.queueData.uploadQueue) >= 0)
                        this.queueData.uploadSize -= t.size;
                    i.onCancel && i.onCancel.call(this, t), delete this.queueData.files[t.id];
                    break;
                case SWFUpload.UPLOAD_ERROR.UPLOAD_STOPPED:
                    s = "Stopped"
            }
            e.inArray("onUploadError", i.overrideEvents) < 0 && (n != SWFUpload.UPLOAD_ERROR.FILE_CANCELLED && n != SWFUpload.UPLOAD_ERROR.UPLOAD_STOPPED && e("#" + t.id).addClass("uploadify-error"), e("#" + t.id).find(".uploadify-progress-bar").css("width", "1px"), n != SWFUpload.UPLOAD_ERROR.SPECIFIED_FILE_ID_NOT_FOUND && t.status != SWFUpload.FILE_STATUS.COMPLETE && e("#" + t.id).find(".data").html(" - " + s));
            var o = this.getStats();
            this.queueData.uploadsErrored = o.upload_errors, i.onUploadError && i.onUploadError.call(this, t, n, r, s)
        },onUploadProgress: function(t, n, r) {
            var i = this.settings, s = new Date, o = s.getTime(), u = o - this.timer;
            u > 500 && (this.timer = o);
            var a = n - this.bytesLoaded;
            this.bytesLoaded = n;
            var f = this.queueData.queueBytesUploaded + n, l = Math.round(n / r * 100), h = "KB/s", p = 0, d = a / 1024 / (u / 1e3);
            d = Math.floor(d * 10) / 10, this.queueData.averageSpeed > 0 ? this.queueData.averageSpeed = Math.floor((this.queueData.averageSpeed + d) / 2) : this.queueData.averageSpeed = Math.floor(d), d > 1e3 && (p = d * .001, this.queueData.averageSpeed = Math.floor(p), h = "MB/s"), e.inArray("onUploadProgress", i.overrideEvents) < 0 && (i.progressData == "percentage" ? e("#" + t.id).find(".data").html(" - " + l + "%") : i.progressData == "speed" && u > 500 && e("#" + t.id).find(".data").html(" - " + this.queueData.averageSpeed + h), e("#" + t.id).find(".uploadify-progress-bar").css("width", l + "%")), i.onUploadProgress && i.onUploadProgress.call(this, t, n, r, f, this.queueData
            .uploadSize)
        },onUploadStart: function(t) {
            var n = this.settings, r = new Date;
            this.timer = r.getTime(), this.bytesLoaded = 0, this.queueData.uploadQueue.length == 0 && (this.queueData.uploadSize = t.size), n.checkExisting && e.ajax({type: "POST",async: !1,url: n.checkExisting,data: {filename: t.name},success: function(n) {
                    if (n == 1) {
                        var r = confirm('A file with the name "' + t.name + '" already exists on the server.\nWould you like to replace the existing file?');
                        r || (this.cancelUpload(t.id), e("#" + t.id).remove(), this.queueData.uploadQueue.length > 0 && this.queueData.queueLength > 0 && (this.queueData.uploadQueue[0] == "*" ? this.startUpload() : this.startUpload(this.queueData.uploadQueue.shift())))
                    }
                }}), n.onUploadStart && n.onUploadStart.call(this, t)
        },onUploadSuccess: function(t, n, r) {
            var i = this.settings, s = this.getStats();
            this.queueData.uploadsSuccessful = s.successful_uploads, this.queueData.queueBytesUploaded += t.size, e.inArray("onUploadSuccess", i.overrideEvents) < 0 && e("#" + t.id).find(".data").html(" - Complete"), i.onUploadSuccess && i.onUploadSuccess.call(this, t, n, r)
        }};
    e.fn.uploadify = function(n) {
        if (t[n])
            return t[n].apply(this, Array.prototype.slice.call(arguments, 1));
        if (typeof n == "object" || !n)
            return t.init.apply(this, arguments);
        e.error("The method " + n + " does not exist in $.uploadify")
    }
}($), !function(e, t, n) {
    function r(e, n) {
        var r = t.createElement(e || "div"), i;
        for (i in n)
            r[i] = n[i];
        return r
    }
    function i(e) {
        for (var t = 1, n = arguments.length; t < n; t++)
            e.appendChild(arguments[t]);
        return e
    }
    function s(e, t, n, r) {
        var i = ["opacity", t, ~~(e * 100), n, r].join("-"), s = .01 + n / r * 100, o = Math.max(1 - (1 - e) / t * (100 - s), e), u = h.substring(0, h.indexOf("Animation")).toLowerCase(), a = u && "-" + u + "-" || "";
        return c[i] || (p.insertRule("@" + a + "keyframes " + i + "{" + "0%{opacity:" + o + "}" + s + "%{opacity:" + e + "}" + (s + .01) + "%{opacity:1}" + (s + t) % 100 + "%{opacity:" + e + "}" + "100%{opacity:" + o + "}" + "}", p.cssRules.length), c[i] = 1), i
    }
    function o(e, t) {
        var r = e.style, i, s;
        if (r[t] !== n)
            return t;
        t = t.charAt(0).toUpperCase() + t.slice(1);
        for (s = 0; s < l.length; s++) {
            i = l[s] + t;
            if (r[i] !== n)
                return i
        }
    }
    function u(e, t) {
        for (var n in t)
            e.style[o(e, n) || n] = t[n];
        return e
    }
    function a(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var i in r)
                e[i] === n && (e[i] = r[i])
        }
        return e
    }
    function f(e) {
        var t = {x: e.offsetLeft,y: e.offsetTop};
        while (e = e.offsetParent)
            t.x += e.offsetLeft, t.y += e.offsetTop;
        return t
    }
    var l = ["webkit", "Moz", "ms", "O"], c = {}, h, p = function() {
        var e = r("style", {type: "text/css"});
        return i(t.getElementsByTagName("head")[0], e), e.sheet || e.styleSheet
    }(), d = {lines: 12,length: 7,width: 5,radius: 10,rotate: 0,corners: 1,color: "#000",speed: 1,trail: 100,opacity: .25,fps: 20,zIndex: 2e9,className: "spinner",top: "auto",left: "auto",position: "relative"}, v = function m(e) {
        if (!this.spin)
            return new m(e);
        this.opts = a(e || {}, m.defaults, d)
    };
    v.defaults = {}, a(v.prototype, {spin: function(e) {
            this.stop();
            var t = this, n = t.opts, i = t.el = u(r(0, {className: n.className}), {position: n.position,width: 0,zIndex: n.zIndex}), s = n.radius + n.length + n.width, o, a;
            e && (e.insertBefore(i, e.firstChild || null), a = f(e), o = f(i), u(i, {left: (n.left == "auto" ? a.x - o.x + (e.offsetWidth >> 1) : parseInt(n.left, 10) + s) + "px",top: (n.top == "auto" ? a.y - o.y + (e.offsetHeight >> 1) : parseInt(n.top, 10) + s) + "px"})), i.setAttribute("aria-role", "progressbar"), t.lines(i, t.opts);
            if (!h) {
                var l = 0, c = n.fps, p = c / n.speed, d = (1 - n.opacity) / (p * n.trail / 100), v = p / n.lines;
                (function m() {
                    l++;
                    for (var e = n.lines; e; e--) {
                        var r = Math.max(1 - (l + e * v) % p * d, n.opacity);
                        t.opacity(i, n.lines - e, r, n)
                    }
                    t.timeout = t.el && setTimeout(m, ~~(1e3 / c))
                })()
            }
            return t
        },stop: function() {
            var e = this.el;
            return e && (clearTimeout(this.timeout), e.parentNode && e.parentNode.removeChild(e), this.el = n), this
        },lines: function(e, t) {
            function n(e, n) {
                return u(r(), {position: "absolute",width: t.length + t.width + "px",height: t.width + "px",background: e,boxShadow: n,transformOrigin: "left",transform: "rotate(" + ~~(360 / t.lines * o + t.rotate) + "deg) translate(" + t.radius + "px" + ",0)",borderRadius: (t.corners * t.width >> 1) + "px"})
            }
            var o = 0, a;
            for (; o < t.lines; o++)
                a = u(r(), {position: "absolute",top: 1 + ~(t.width / 2) + "px",transform: t.hwaccel ? "translate3d(0,0,0)" : "",opacity: t.opacity,animation: h && s(t.opacity, t.trail, o, t.lines) + " " + 1 / t.speed + "s linear infinite"}), t.shadow && i(a, u(n("#000", "0 0 4px #000"), {top: "2px"})), i(e, i(a, n(t.color, "0 0 1px rgba(0,0,0,.1)")));
            return e
        },opacity: function(e, t, n) {
            t < e.childNodes.length && (e.childNodes[t].style.opacity = n)
        }}), function() {
        function e(e, t) {
            return r("<" + e + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', t)
        }
        var t = u(r("group"), {behavior: "url(#default#VML)"});
        !o(t, "transform") && t.adj ? (p.addRule(".spin-vml", "behavior:url(#default#VML)"), v.prototype.lines = function(t, n) {
            function r() {
                return u(e("group", {coordsize: a + " " + a,coordorigin: -o + " " + -o}), {width: a,height: a})
            }
            function s(t, s, a) {
                i(l, i(u(r(), {rotation: 360 / n.lines * t + "deg",left: ~~s}), i(u(e("roundrect", {arcsize: n.corners}), {width: o,height: n.width,left: n.radius,top: -n.width >> 1,filter: a}), e("fill", {color: n.color,opacity: n.opacity}), e("stroke", {opacity: 0}))))
            }
            var o = n.length + n.width, a = 2 * o, f = -(n.width + n.length) * 2 + "px", l = u(r(), {position: "absolute",top: f,left: f}), c;
            if (n.shadow)
                for (c = 1; c <= n.lines; c++)
                    s(c, -2, "progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");
            for (c = 1; c <= n.lines; c++)
                s(c);
            return i(t, l)
        }, v.prototype.opacity = function(e, t, n, r) {
            var i = e.firstChild;
            r = r.shadow && r.lines || 0, i && t + r < i.childNodes.length && (i = i.childNodes[t + r], i = i && i.firstChild, i = i && i.firstChild, i && (i.opacity = n))
        }) : h = o(t, "animation")
    }(), typeof define == "function" && define.amd ? define(function() {
        return v
    }) : e.Spinner = v
}(window, document), $.fn.spin = function(e) {
    return this.each(function() {
        var t = $(this), n = t.data();
        n.spinner && (n.spinner.stop(), delete n.spinner), e !== !1 && (n.spinner = (new Spinner($.extend({color: t.css("color")}, e))).spin(this))
    }), this
}, function(e, t, n) {
    e.fn.jScrollPane = function(r) {
        function i(r, i) {
            function K(t) {
                var i, o, a, w, E, x, T = !1, C = !1;
                s = t;
                if (u === n)
                    E = r.scrollTop(), x = r.scrollLeft(), r.css({overflow: "hidden",padding: 0}), f = r.innerWidth() + R, l = r.innerHeight(), r.width(f), u = e('<div class="jspPane" />').css("padding", q).append(r.children()), h = e('<div class="jspContainer" />').css({width: f + "px",height: l + "px"}).append(u).appendTo(r);
                else {
                    r.css("width", ""), T = s.stickToBottom && yt(), C = s.stickToRight && bt(), w = r.innerWidth() + R != f || r.outerHeight() != l, w && (f = r.innerWidth() + R, l = r.innerHeight(), h.css({width: f + "px",height: l + "px"}));
                    if (!w && U == p && u.outerHeight() == d) {
                        r.width(f);
                        return
                    }
                    U = p, u.css("width", ""), r.width(f), h.find(">.jspVerticalBar,>.jspHorizontalBar").remove().end()
                }
                u.css("overflow", "auto"), t.contentWidth ? p = t.contentWidth : p = u[0].scrollWidth, d = u[0].scrollHeight, u.css("overflow", ""), v = p / f, m = d / l, g = m > 1, y = v > 1, !y && !g ? (r.removeClass("jspScrollable"), u.css({top: 0,width: h.width() - R}), Et(), Tt(), Ct(), st()) : (r.addClass("jspScrollable"), i = s.maintainPosition && (S || N), i && (o = mt(), a = gt()), Q(), Y(), et(), i && (dt(C ? p - f : o, !1), pt(T ? d - l : a, !1)), xt(), wt(), At(), s.enableKeyboardNavigation && Nt(), s.clickOnTrack && it(), kt(), s.hijackInternalLinks && Lt()), s.autoReinitialise && !I ? I = setInterval(function() {
                    K(s)
                }, s.autoReinitialiseDelay) : !s.autoReinitialise && I && clearInterval(I), E && r.scrollTop(0) && pt(E, !1), x && r.scrollLeft(0) && dt(x, !1), r.trigger("jsp-initialised", [y || g])
            }
            function Q() {
                g && (h.append(e('<div class="jspVerticalBar" />').append(e('<div class="jspCap jspCapTop" />'), e('<div class="jspTrack" />').append(e('<div class="jspDrag" />').append(e('<div class="jspDragTop" />'), e('<div class="jspDragBottom" />'))), e('<div class="jspCap jspCapBottom" />'))), C = h.find(">.jspVerticalBar"), k = C.find(">.jspTrack"), w = k.find(">.jspDrag"), s.showArrows && (M = e('<a class="jspArrow jspArrowUp" />').bind("mousedown.jsp", nt(0, -1)).bind("click.jsp", St), _ = e('<a class="jspArrow jspArrowDown" />').bind("mousedown.jsp", nt(0, 1)).bind("click.jsp", St), s.arrowScrollOnHover && (M.bind("mouseover.jsp", nt(0, -1, M)), _.bind("mouseover.jsp", nt(0, 1, _))), tt(k, s.verticalArrowPositions, M, _)), A = l, h.find(">.jspVerticalBar>.jspCap:visible,>.jspVerticalBar>.jspArrow").each(function() {
                    A -= e(this).outerHeight()
                }), w.hover(function() {
                    w.addClass("jspHover")
                }, function() {
                    w.removeClass("jspHover")
                }).bind("mousedown.jsp", function(t) {
                    e("html").bind("dragstart.jsp selectstart.jsp", St), w.addClass("jspActive");
                    var n = t.pageY - w.position().top;
                    return e("html").bind("mousemove.jsp", function(e) {
                        ut(e.pageY - n, !1)
                    }).bind("mouseup.jsp mouseleave.jsp", ot), !1
                }), G())
            }
            function G() {
                k.height(0), S = 0, L = s.verticalGutter + k.outerWidth(), u.width(f - L - R);
                try {
                    C.position().left === 0 && u.css("margin-left", L + "px")
                } catch (e) {
                }
            }
            function Y() {
                y && (h.append(e('<div class="jspHorizontalBar" />').append(e('<div class="jspCap jspCapLeft" />'), e('<div class="jspTrack" />').append(e('<div class="jspDrag" />').append(e('<div class="jspDragLeft" />'), e('<div class="jspDragRight" />'))), e('<div class="jspCap jspCapRight" />'))), D = h.find(">.jspHorizontalBar"), P = D.find(">.jspTrack"), x = P.find(">.jspDrag"), s.showArrows && (j = e('<a class="jspArrow jspArrowLeft" />').bind("mousedown.jsp", nt(-1, 0)).bind("click.jsp", St), F = e('<a class="jspArrow jspArrowRight" />').bind("mousedown.jsp", nt(1, 0)).bind("click.jsp", St), s.arrowScrollOnHover && (j.bind("mouseover.jsp", nt(-1, 0, j)), F.bind("mouseover.jsp", nt(1, 0, F))), tt(P, s.horizontalArrowPositions, j, F)), x.hover(function() {
                    x.addClass("jspHover")
                }, function() {
                    x.removeClass("jspHover")
                }).bind("mousedown.jsp", function(t) {
                    e("html").bind("dragstart.jsp selectstart.jsp", St), x.addClass("jspActive");
                    var n = t.pageX - x.position().left;
                    return e("html").bind("mousemove.jsp", function(e) {
                        ft(e.pageX - n, !1)
                    }).bind("mouseup.jsp mouseleave.jsp", ot), !1
                }), H = h.innerWidth(), Z())
            }
            function Z() {
                h.find(">.jspHorizontalBar>.jspCap:visible,>.jspHorizontalBar>.jspArrow").each(function() {
                    H -= e(this).outerWidth()
                }), P.width(H + "px"), N = 0
            }
            function et() {
                if (y && g) {
                    var t = P.outerHeight(), n = k.outerWidth();
                    A -= t, e(D).find(">.jspCap:visible,>.jspArrow").each(function() {
                        H += e(this).outerWidth()
                    }), H -= n, l -= n, f -= t, P.parent().append(e('<div class="jspCorner" />').css("width", t + "px")), G(), Z()
                }
                y && u.width(h.outerWidth() - R + "px"), d = u.outerHeight(), m = d / l, y && (B = Math.ceil(1 / v * H), B > s.horizontalDragMaxWidth ? B = s.horizontalDragMaxWidth : B < s.horizontalDragMinWidth && (B = s.horizontalDragMinWidth), x.width(B + "px"), T = H - B, lt(N)), g && (O = Math.ceil(1 / m * A), O > s.verticalDragMaxHeight ? O = s.verticalDragMaxHeight : O < s.verticalDragMinHeight && (O = s.verticalDragMinHeight), w.height(0), E = A - O, at(S))
            }
            function tt(e, t, n, r) {
                var i = "before", s = "after", o;
                t == "os" && (t = /Mac/.test(navigator.platform) ? "after" : "split"), t == i ? s = t : t == s && (i = t, o = n, n = r, r = o), e[i](n)[s](r)
            }
            function nt(e, t, n) {
                return function() {
                    return rt(e, t, this, n), this.blur(), !1
                }
            }
            function rt(t, n, r, i) {
                r = e(r).addClass("jspActive");
                var u, a, f = !0, l = function() {
                    t !== 0 && o.scrollByX(t * s.arrowButtonSpeed), n !== 0 && o.scrollByY(n * s.arrowButtonSpeed), a = setTimeout(l, f ? s.initialDelay : s.arrowRepeatFreq), f = !1
                };
                l(), u = i ? "mouseout.jsp" : "mouseup.jsp", i = i || e("html"), i.bind(u, function() {
                    r.removeClass("jspActive"), a && clearTimeout(a), a = null, i.unbind(u)
                })
            }
            function it() {
                st(), g && k.bind("mousedown.jsp", function(t) {
                    if (t.originalTarget === n || t.originalTarget == t.currentTarget) {
                        var r = e(this), i = r.offset(), u = t.pageY - i.top - S, a, f = !0, h = function() {
                            var e = r.offset(), n = t.pageY - e.top - O / 2, i = l * s.scrollPagePercent, c = E * i / (d - l);
                            if (u < 0)
                                S - c > n ? o.scrollByY(-i) : ut(n);
                            else {
                                if (!(u > 0)) {
                                    p();
                                    return
                                }
                                S + c < n ? o.scrollByY(i) : ut(n)
                            }
                            a = setTimeout(h, f ? s.initialDelay : s.trackClickRepeatFreq), f = !1
                        }, p = function() {
                            a && clearTimeout(a), a = null, e(document).unbind("mouseup.jsp", p)
                        };
                        return h(), e(document).bind("mouseup.jsp", p), !1
                    }
                }), y && P.bind("mousedown.jsp", function(t) {
                    if (t.originalTarget === n || t.originalTarget == t.currentTarget) {
                        var r = e(this), i = r.offset(), u = t.pageX - i.left - N, a, l = !0, h = function() {
                            var e = r.offset(), n = t.pageX - e.left - B / 2, i = f * s.scrollPagePercent, c = T * i / (p - f);
                            if (u < 0)
                                N - c > n ? o.scrollByX(-i) : ft(n);
                            else {
                                if (!(u > 0)) {
                                    d();
                                    return
                                }
                                N + c < n ? o.scrollByX(i) : ft(n)
                            }
                            a = setTimeout(h, l ? s.initialDelay : s.trackClickRepeatFreq), l = !1
                        }, d = function() {
                            a && clearTimeout(a), a = null, e(document).unbind("mouseup.jsp", d)
                        };
                        return h(), e(document).bind("mouseup.jsp", d), !1
                    }
                })
            }
            function st() {
                P && P.unbind("mousedown.jsp"), k && k.unbind("mousedown.jsp")
            }
            function ot() {
                e("html").unbind("dragstart.jsp selectstart.jsp mousemove.jsp mouseup.jsp mouseleave.jsp"), w && w.removeClass("jspActive"), x && x.removeClass("jspActive")
            }
            function ut(e, t) {
                if (!g)
                    return;
                e < 0 ? e = 0 : e > E && (e = E), t === n && (t = s.animateScroll), t ? o.animate(w, "top", e, at) : (w.css("top", e), at(e))
            }
            function at(e) {
                e === n && (e = w.position().top), h.scrollTop(0), S = e;
                var t = S === 0, i = S == E, s = e / E, o = -s * (d - l);
                if (z != t || X != i)
                    z = t, X = i, r.trigger("jsp-arrow-change", [z, X, W, V]);
                ct(t, i), u.css("top", o), r.trigger("jsp-scroll-y", [-o, t, i]).trigger("scroll")
            }
            function ft(e, t) {
                if (!y)
                    return;
                e < 0 ? e = 0 : e > T && (e = T), t === n && (t = s.animateScroll), t ? o.animate(x, "left", e, lt) : (x.css("left", e), lt(e))
            }
            function lt(e) {
                e === n && (e = x.position().left), h.scrollTop(0), N = e;
                var t = N === 0, i = N == T, s = e / T, o = -s * (p - f);
                if (W != t || V != i)
                    W = t, V = i, r.trigger("jsp-arrow-change", [z, X, W, V]);
                ht(t, i), u.css("left", o), r.trigger("jsp-scroll-x", [-o, t, i]).trigger("scroll")
            }
            function ct(e, t) {
                s.showArrows && (M[e ? "addClass" : "removeClass"]("jspDisabled"), _[t ? "addClass" : "removeClass"]("jspDisabled"))
            }
            function ht(e, t) {
                s.showArrows && (j[e ? "addClass" : "removeClass"]("jspDisabled"), F[t ? "addClass" : "removeClass"]("jspDisabled"))
            }
            function pt(e, t) {
                var n = e / (d - l);
                ut(n * E, t)
            }
            function dt(e, t) {
                var n = e / (p - f);
                ft(n * T, t)
            }
            function vt(t, n, r) {
                var i, o, u, a = 0, c = 0, p, d, v, m, g, y;
                try {
                    i = e(t)
                } catch (w) {
                    return
                }
                o = i.outerHeight(), u = i.outerWidth(), h.scrollTop(0), h.scrollLeft(0);
                while (!i.is(".jspPane")) {
                    a += i.position().top, c += i.position().left, i = i.offsetParent();
                    if (/^body|html$/i.test(i[0].nodeName))
                        return
                }
                p = gt(), v = p + l, a < p || n ? g = a - s.verticalGutter : a + o > v && (g = a - l + o + s.verticalGutter), g && pt(g, r), d = mt(), m = d + f, c < d || n ? y = c - s.horizontalGutter : c + u > m && (y = c - f + u + s.horizontalGutter), y && dt(y, r)
            }
            function mt() {
                return -u.position().left
            }
            function gt() {
                return -u.position().top
            }
            function yt() {
                var e = d - l;
                return e > 20 && e - gt() < 10
            }
            function bt() {
                var e = p - f;
                return e > 20 && e - mt() < 10
            }
            function wt() {
                h.unbind(J).bind(J, function(e, t, n, r) {
                    var i = N, u = S;
                    return o.scrollBy(n * s.mouseWheelSpeed, -r * s.mouseWheelSpeed, !1), i == N && u == S
                })
            }
            function Et() {
                h.unbind(J)
            }
            function St() {
                return !1
            }
            function xt() {
                u.find(":input,a").unbind("focus.jsp").bind("focus.jsp", function(e) {
                    vt(e.target, !1)
                })
            }
            function Tt() {
                u.find(":input,a").unbind("focus.jsp")
            }
            function Nt() {
                function a() {
                    var e = N, r = S;
                    switch (t) {
                        case 40:
                            o.scrollByY(s.keyboardSpeed, !1);
                            break;
                        case 38:
                            o.scrollByY(-s.keyboardSpeed, !1);
                            break;
                        case 34:
                        case 32:
                            o.scrollByY(l * s.scrollPagePercent, !1);
                            break;
                        case 33:
                            o.scrollByY(-l * s.scrollPagePercent, !1);
                            break;
                        case 39:
                            o.scrollByX(s.keyboardSpeed, !1);
                            break;
                        case 37:
                            o.scrollByX(-s.keyboardSpeed, !1)
                    }
                    return n = e != N || r != S, n
                }
                var t, n, i = [];
                y && i.push(D[0]), g && i.push(C[0]), u.focus(function() {
                    r.focus()
                }), r.attr("tabindex", 0).unbind("keydown.jsp keypress.jsp").bind("keydown.jsp", function(r) {
                    if (r.target !== this && (!i.length || !e(r.target).closest(i).length))
                        return;
                    var s = N, o = S;
                    switch (r.keyCode) {
                        case 40:
                        case 38:
                        case 34:
                        case 32:
                        case 33:
                        case 39:
                        case 37:
                            t = r.keyCode, a();
                            break;
                        case 35:
                            pt(d - l), t = null;
                            break;
                        case 36:
                            pt(0), t = null
                    }
                    return n = r.keyCode == t && s != N || o != S, !n
                }).bind("keypress.jsp", function(e) {
                    return e.keyCode == t && a(), !n
                }), s.hideFocus ? (r.css("outline", "none"), "hideFocus" in h[0] && r.attr("hideFocus", !0)) : (r.css("outline", ""), "hideFocus" in h[0] && r.attr("hideFocus", !1))
            }
            function Ct() {
                r.attr("tabindex", "-1").removeAttr("tabindex").unbind("keydown.jsp keypress.jsp")
            }
            function kt() {
                if (location.hash && location.hash.length > 1) {
                    var t, n, r = escape(location.hash.substr(1));
                    try {
                        t = e("#" + r + ', a[name="' + r + '"]')
                    } catch (i) {
                        return
                    }
                    t.length && u.find(r) && (h.scrollTop() === 0 ? n = setInterval(function() {
                        h.scrollTop() > 0 && (vt(t, !0), e(document).scrollTop(h.position().top), clearInterval(n))
                    }, 50) : (vt(t, !0), e(document).scrollTop(h.position().top)))
                }
            }
            function Lt() {
                if (e(document.body).data("jspHijack"))
                    return;
                e(document.body).data("jspHijack", !0), e(document.body).delegate("a[href*=#]", "click", function(n) {
                    var r = this.href.substr(0, this.href.indexOf("#")), i = location.href, s, o, u, f, l, c;
                    location.href.indexOf("#") !== -1 && (i = location.href.substr(0, location.href.indexOf("#")));
                    if (r !== i)
                        return;
                    s = escape(this.href.substr(this.href.indexOf("#") + 1)), o;
                    try {
                        o = e("#" + s + ', a[name="' + s + '"]')
                    } catch (h) {
                        return
                    }
                    if (!o.length)
                        return;
                    u = o.closest(".jspScrollable"), f = u.data("jsp"), f.scrollToElement(o, !0), u[0].scrollIntoView && (l = e(t).scrollTop(), c = o.offset().top, (c < l || c > l + e(t).height()) && u[0].scrollIntoView()), n.preventDefault()
                })
            }
            function At() {
                var e, t, n, r, i, s = !1;
                h.unbind("touchstart.jsp touchmove.jsp touchend.jsp click.jsp-touchclick").bind("touchstart.jsp", function(o) {
                    var u = o.originalEvent.touches[0];
                    e = mt(), t = gt(), n = u.pageX, r = u.pageY, i = !1, s = !0
                }).bind("touchmove.jsp", function(u) {
                    if (!s)
                        return;
                    var a = u.originalEvent.touches[0], f = N, l = S;
                    return o.scrollTo(e + n - a.pageX, t + r - a.pageY), i = i || Math.abs(n - a.pageX) > 5 || Math.abs(r - a.pageY) > 5, f == N && l == S
                }).bind("touchend.jsp", function(e) {
                    s = !1
                }).bind("click.jsp-touchclick", function(e) {
                    if (i)
                        return i = !1, !1
                })
            }
            function Ot() {
                var e = gt(), t = mt();
                r.removeClass("jspScrollable").unbind(".jsp"), r.replaceWith($.append(u.children())), $.scrollTop(e), $.scrollLeft(t), I && clearInterval(I)
            }
            var s, o = this, u, f, l, h, p, d, v, m, g, y, w, E, S, x, T, N, C, k, L, A, O, M, _, D, P, H, B, j, F, I, q, R, U, z = !0, W = !0, X = !1, V = !1, $ = r.clone(!1, !1).empty(), J = e.fn.mwheelIntent ? "mwheelIntent.jsp" : "mousewheel.jsp";
            q = r.css("paddingTop") + " " + r.css("paddingRight") + " " + r.css("paddingBottom") + " " + r.css("paddingLeft"), R = (parseInt(r.css("paddingLeft"), 10) || 0) + (parseInt(r.css("paddingRight"), 10) || 0), e.extend(o, {reinitialise: function(t) {
                    t = e.extend({}, s, t), K(t)
                },scrollToElement: function(e, t, n) {
                    vt(e, t, n)
                },scrollTo: function(e, t, n) {
                    dt(e, n), pt(t, n)
                },scrollToX: function(e, t) {
                    dt(e, t)
                },scrollToY: function(e, t) {
                    pt(e, t)
                },scrollToPercentX: function(e, t) {
                    dt(e * (p - f), t)
                },scrollToPercentY: function(e, t) {
                    pt(e * (d - l), t)
                },scrollBy: function(e, t, n) {
                    o.scrollByX(e, n), o.scrollByY(t, n)
                },scrollByX: function(e, t) {
                    var n = mt() + Math[e < 0 ? "floor" : "ceil"](e), r = n / (p - f);
                    ft(r * T, t)
                },scrollByY: function(e, t) {
                    var n = gt() + Math[e < 0 ? "floor" : "ceil"](e), r = n / (d - l);
                    ut(r * E, t)
                },positionDragX: function(e, t) {
                    ft(e, t)
                },positionDragY: function(e, t) {
                    ut(e, t)
                },animate: function(e, t, n, r) {
                    var i = {};
                    i[t] = n, e.animate(i, {duration: s.animateDuration,easing: s.animateEase,queue: !1,step: r})
                },getContentPositionX: function() {
                    return mt()
                },getContentPositionY: function() {
                    return gt()
                },getContentWidth: function() {
                    return p
                },getContentHeight: function() {
                    return d
                },getPercentScrolledX: function() {
                    return mt() / (p - f)
                },getPercentScrolledY: function() {
                    return gt() / (d - l)
                },getIsScrollableH: function() {
                    return y
                },getIsScrollableV: function() {
                    return g
                },getContentPane: function() {
                    return u
                },scrollToBottom: function(e) {
                    ut(E, e)
                },hijackInternalLinks: e.noop,destroy: function() {
                    Ot()
                }}), K(i)
        }
        return r = e.extend({}, e.fn.jScrollPane.defaults, r), e.each(["mouseWheelSpeed", "arrowButtonSpeed", "trackClickSpeed", "keyboardSpeed"], function() {
            r[this] = r[this] || r.speed
        }), this.each(function() {
            var t = e(this), n = t.data("jsp");
            n ? n.reinitialise(r) : (e("script", t).filter('[type="text/javascript"],:not([type])').remove(), n = new i(t, r), t.data("jsp", n))
        })
    }, e.fn.jScrollPane.defaults = {showArrows: !1,maintainPosition: !0,stickToBottom: !1,stickToRight: !1,clickOnTrack: !0,autoReinitialise: !1,autoReinitialiseDelay: 500,verticalDragMinHeight: 0,verticalDragMaxHeight: 99999,horizontalDragMinWidth: 0,horizontalDragMaxWidth: 99999,contentWidth: n,animateScroll: !1,animateDuration: 300,animateEase: "linear",hijackInternalLinks: !1,verticalGutter: 4,horizontalGutter: 4,mouseWheelSpeed: 0,arrowButtonSpeed: 0,arrowRepeatFreq: 50,arrowScrollOnHover: !1,trackClickSpeed: 0,trackClickRepeatFreq: 70,verticalArrowPositions: "split",horizontalArrowPositions: "split",enableKeyboardNavigation: !0,hideFocus: !1,keyboardSpeed: 0,initialDelay: 300,speed: 30,scrollPagePercent: .8}
}(jQuery, this), function() {
    var e = {}, t = function(n, r) {
        n = n || "";
        if (e[n])
            return e[n];
        r = r || {}, r.socketio = r.socketio || {}, r.socketio.resource = r.socketio.resource || "socket.io";
        var i, s = {}, o = !1, u = 0, a, f, l, c = function() {
            try {
                return Object.defineProperty({}, "", {}), !1
            } catch (e) {
                return Object.prototype.__defineGetter__ && Object.prototype.__defineSetter__ ? !1 : !0
            }
        }(), h = {data: {},arrays: {},get: function(e) {
                return h.data[e]
            },set: function(e, t) {
                if (h.data[e] !== undefined)
                    h.deleteChildren(e, t);
                else {
                    var n = e.lastIndexOf("."), r = e.substring(0, n);
                    h.addParent(r, e.substring(n + 1))
                }
                return h.data[e] = t
            },addParent: function(e, t) {
                e && (f.isArray(h.data[e]) || h.set(e, []), h.data[e].push(t))
            },deleteChildren: function(e) {
                var t = this.data[e], n = [];
                if (f.isArray(this.data[e]))
                    for (var r = 0; t.length; ) {
                        var i = this.deleteVar(e + "." + t[r]);
                        for (var s = 0; s < i.length; s++)
                            n.push(i[s])
                    }
                return n
            },deleteVar: function(e) {
                var t = e.lastIndexOf("."), n = e.substring(0, t);
                if (f.hasProperty(this.data, n)) {
                    var r = f.indexOf(this.data[n], e.substring(t + 1));
                    r > -1 && this.data[n].splice(r, 1)
                }
                var i = this.deleteChildren(e);
                return i.push(e), delete this.data[e], this.unflagAsArray(e), i
            },flagAsArray: function(e) {
                return this.arrays[e] = !0
            },unflagAsArray: function(e) {
                delete this.arrays[e]
            }};
        f = {_events: {},on: function(e, t) {
                return f.hasProperty(f._events, e) || (f._events[e] = []), f._events[e].push(t), f
            },indexOf: function(e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                    if ("" + e[n] === t)
                        return n;
                return -1
            },emit: function(e, t) {
                if (f.hasProperty(f._events, e)) {
                    var n = f._events[e].slice(0);
                    for (var r = 0, i = n.length; r < i; r++)
                        n[r].apply(f, t === undefined ? [] : t)
                }
                return f
            },removeEvent: function(e, t) {
                if (f.hasProperty(f._events, e))
                    for (var n = 0, r = f._events[e].length; n < r; n++)
                        f._events[e][n] === t && f._events[e].splice(n, 1);
                return f
            },hasProperty: function(e, t) {
                return Object.prototype.hasOwnProperty.call(Object(e), t)
            },isArray: Array.isArray || function(e) {
                return Object.prototype.toString.call(e) === "[object Array]"
            },createVarAtFqn: function(e, t, n) {
                var r = t.split("."), i = f.forceGetParentVarAtFqn(e, t), s = r.pop();
                h.set(t, n && typeof n == "object" ? [] : n), f.isArray(n) && h.flagAsArray(t), i[s] = n, !c && !f.isArray(i) && f.watch(i, s, t)
            },forceGetParentVarAtFqn: function(e, t) {
                var n = t.split(".");
                n.shift();
                var r = e;
                while (n.length > 1) {
                    var i = n.shift();
                    f.hasProperty(r, i) || (isNaN(n[0]) ? r[i] = {} : r[i] = []);
                    if (!r[i] || typeof r[i] != "object")
                        r[i] = {};
                    r = r[i]
                }
                return r
            },getVarFromFqn: function(e, t) {
                var n = t.split(".");
                n.shift();
                var r = e;
                while (n.length > 0) {
                    var i = n.shift();
                    if (!f.hasProperty(r, i))
                        return !1;
                    r = r[i]
                }
                return r
            },generateRandomString: function() {
                return Math.random().toString().substr(2)
            },getValOrFqn: function(e, t) {
                return typeof e == "function" ? e.remote ? undefined : {fqn: t} : e
            },watch: function(e, t, n) {
                function s() {
                    return r
                }
                function o(t) {
                    if (r !== t && t !== h.get(n)) {
                        if (r && typeof r == "object")
                            return h.deleteVar(n), i.emit("del", [n]), r = t, l.processScope(e, n.substring(0, n.lastIndexOf("."))), t;
                        if (t && typeof t == "object")
                            return h.deleteVar(n), i.emit("del", [n]), r = t, l.processScope(e, n.substring(0, n.lastIndexOf("."))), t;
                        h.set(n, t), r = t, typeof t == "function" && (t = {fqn: n});
                        var s = {};
                        s[n] = t, i.emit("rv", s)
                    }
                    return t
                }
                var r = e[t];
                Object.defineProperty ? Object.defineProperty(e, t, {get: s,set: o}) : (e.__defineSetter__ && e.__defineSetter__(t, o), e.__defineGetter__ && e.__defineGetter__(t, s))
            },unwatch: function(e, t) {
                Object.defineProperty ? Object.defineProperty(e, t, {get: undefined,set: undefined}) : (e.__defineSetter__ && e.__defineSetter__(t, undefined), e.__defineGetter__ && e.__defineGetter__(t, undefined))
            }};
        var p = {ready: function(e) {
                arguments.length === 0 ? f.emit("ready") : (o && e(), f.on("ready", e))
            },core: {on: f.on,options: r,removeEvent: f.removeEvent,clientId: undefined,noConflict: t},reconnect: function() {
                i.socket.connected || i.socket.reconnect()
            }};
        l = {deleteVar: function(e) {
                var t, n, r, i;
                t = e.split("."), n = p;
                for (var s = 1; s < t.length; s++) {
                    i = t[s];
                    if (n === undefined) {
                        h.deleteVar(e);
                        return
                    }
                    if (s === t.length - 1) {
                        delete n[t.pop()], h.deleteVar(e);
                        return
                    }
                    n = n[i]
                }
            },replaceVar: function(e) {
                for (var t in e)
                    f.hasProperty(e[t], "fqn") && (e[t] = l.constructRemoteFunction(t)), f.createVarAtFqn(p, t, e[t])
            },remoteCall: function(e) {
                var t;
                e.fqn.split("_")[0] === "closure" ? t = s[e.fqn] : t = f.getVarFromFqn(p, e.fqn);
                var n, r, i = e.args;
                if (typeof i == "object" && !f.isArray(i)) {
                    var o = [];
                    for (n in i)
                        o.push(i[n]);
                    i = o
                }
                for (n = 0, r = i.length; n < r; n++)
                    f.hasProperty(i[n], "fqn") && (i[n] = l.constructRemoteFunction(i[n].fqn));
                t.apply({now: p}, i)
            },serverReady: function() {
                o = !0, l.processNowScope(), f.emit("ready")
            },constructRemoteFunction: function(e) {
                var t = function() {
                    l.processNowScope();
                    var t = [];
                    for (var n = 0, r = arguments.length; n < r; n++)
                        t[n] = arguments[n];
                    for (n = 0, r = t.length; n < r; n++)
                        if (typeof t[n] == "function") {
                            var o = "closure_" + t[n].name + "_" + f.generateRandomString();
                            s[o] = t[n], t[n] = {fqn: o}
                        }
                    i.emit("rfc", {fqn: e,args: t})
                };
                return t.remote = !0, t
            },handleNewConnection: function(e) {
                if (e.handled)
                    return;
                e.handled = !0, e.on("rfc", function(e) {
                    l.remoteCall(e), f.emit("rfc", e)
                }), e.on("rv", function(e) {
                    l.replaceVar(e), f.emit("rv", e)
                }), e.on("del", function(e) {
                    l.deleteVar(e), f.emit("del", e)
                }), e.on("rd", function(e) {
                    ++u === 2 && l.serverReady()
                }), e.on("disconnect", function() {
                    u = 0, f.emit("disconnect")
                }), e.on("error", function() {
                    f.emit("error")
                }), e.on("retry", function() {
                    f.emit("retry")
                }), e.on("reconnect", function() {
                    f.emit("reconnect")
                }), e.on("reconnect_failed", function() {
                    f.emit("reconnect_failed")
                }), e.on("connect_failed", function() {
                    f.emit("connect_failed")
                })
            },processNowScope: function() {
                l.processScope(p, "now"), clearTimeout(a), i.socket.connected && (a = setTimeout(l.processNowScope, 1e3))
            },processScope: function(e, t) {
                var n = {};
                l.traverseScope(e, t, n);
                for (var r in n)
                    if (f.hasProperty(n, r) && n[r] !== undefined) {
                        i.emit("rv", n);
                        break
                    }
            },traverseScope: function(e, t, n) {
                if (e && typeof e == "object") {
                    var r = f.isArray(e), s = h.get(t);
                    for (var o in e) {
                        var u = t + "." + o;
                        if (u === "now.core" || u === "now.ready")
                            continue;
                        if (f.hasProperty(e, o)) {
                            var a = e[o], p = h.get(u), d = h.arrays[u], v = f.isArray(a), m = a && typeof a == "object", g = f.isArray(p) && !d;
                            r || c ? m ? v ? d || (h.set(u, []), h.flagAsArray(u), n[u] = []) : g || (h.set(u, []), h.unflagAsArray(u), n[u] = {}) : a !== p && (h.set(u, a), h.unflagAsArray(u), n[u] = f.getValOrFqn(a, u)) : p === undefined && (f.watch(e, o, u), m ? v ? (h.set(u, []), h.flagAsArray(u), n[u] = []) : (h.set(u, []), n[u] = {}) : (h.set(u, a), n[u] = f.getValOrFqn(a, u))), m && l.traverseScope(a, u, n)
                        }
                    }
                    if (s && typeof s == "object") {
                        var y = [];
                        for (var b = 0; b < s.length; b++)
                            s[b] !== undefined && e[s[b]] === undefined && (y.push(t + "." + s[b]), h.deleteVar(t + "." + s[b]), --b);
                        y.length > 0 && i.emit("del", y)
                    }
                }
            },traverseScopeIE: function(e, t, n) {
            }};
        var d = [{key: "io",path: "/assets/socket.io.js"}], v = 0, m = function() {
            v++;
            if (v !== d.length)
                return;
            i = io.connect(n + "/", {"sync disconnect on unload": !0}), p.core.socketio = i, i.on("connect", function() {
                p.core.clientId = i.socket.sessionid, l.handleNewConnection(i), setTimeout(function() {
                    l.processNowScope(), i.emit("rd"), ++u === 2 && (o = !0, f.emit("ready"))
                }, 100), f.emit("connect")
            }), i.on("disconnect", function() {
                (function(e) {
                    e(e, p)
                })(function(e, t) {
                    for (var n in t)
                        t[n] && typeof t[n] == "object" && t[n] !== document && t[n] !== p.core ? e(e, t[n]) : typeof t[n] == "function" && t[n].remote && delete t[n]
                }), h.data = {}, socketOnDisconnect()
            })
        };
        for (var g = 0, y = d.length; g < y; g++) {
            if (window[d[g].key]) {
                m();
                continue
            }
            var b = document.createElement("script");
            b.setAttribute("type", "text/javascript"), b.setAttribute("src", "http://jing.fm" + d[g].path), b.onload = m, c && (b.onreadystatechange = function() {
                (b.readyState === "loaded" || b.readyState === "complete") && m()
            }), document.getElementsByTagName("head")[0].appendChild(b)
        }
        return e[n] = p
    };
    window.nowInitialize = t
}();
