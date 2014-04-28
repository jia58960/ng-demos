function fingerGestureListener(e, t) {
    function u(i) {
        o = i.touches.length, e.addEventListener("touchmove", a, !1);
        if (e.getAttribute("id") == "bg" && o == 1) {
            e.addEventListener("touchend", f, !1);
            return
        }
        o == 2 && (i.preventDefault(), n = i.touches[0].pageX, r = i.touches[0].pageY, $("#topApp").isDisplay() && t({status: "start"}), e.addEventListener("touchend", f, !1))
    }
    function a(o) {
        if (o.touches.length == 1)
            o.preventDefault();
        else if (o.touches.length == 2) {
            i = o.touches[0].pageX - n;
            var u = o.touches[0].pageY - r;
            s == null ? s = i : s < 0 && i > 0 || s > 0 && i < 0 || Math.abs(u) > 100 ? l() : $("#topApp").isDisplay() && t({target: e,dx: i,status: "move"})
        } else
            l()
    }
    function f(n) {
        if (e.getAttribute("id") == "bg" && o == 1) {
            $(document).click();
            return
        }
        o == 2 && (Interface.Current == Interface.MAIN && !Core.isFullScren ? Math.abs(i) > 120 ? t({target: e,direction: i > 0 ? "right" : "left"}) : Math.abs(i) < 30 && t({target: e,direction: "middle"}) : ($("#topApp").isDisplay() || $("#abtCtn").isDisplay()) && Math.abs(i) > 10 && t({target: e,dx: i,status: "end"})), l()
    }
    function l() {
        e.removeEventListener("touchmove", a), e.removeEventListener("touchend", f), n = null, i = null, s = null
    }
    var n, r, i, s, o;
    e.addEventListener("touchstart", u, !1)
}
function socketOnDisconnect() {
    Core.nowIsReady = !1, Player.isDisconnect = !0
}
function socketConnect() {
    now.reconnect()
}
function swfReady() {
    if (Player.swfObj != undefined)
        return;
    Player.swfObj = swfobject.getObjectById("rotateFlash"), Player.ready()
}
var Jing = {VERSION: {MARJOR: "3",MINOR: "2",TINY: "9",PATCH: "4324"},version: function() {
        return Jing.VERSION.MARJOR + "." + Jing.VERSION.MINOR + "." + Jing.VERSION.TINY + "." + Jing.VERSION.PATCH
    }}, NOW_URL = "http://zoro.jing.fm", MEDIA_URL = "http://pmedia.jing.fm", IMG_URL = "http://image.jing.fm/assets/jing-beta", Retina = new Object;
Retina = {enabled: !1,suffix: "",className: "retina",init: function() {
        if (window.devicePixelRatio)
            if (Retina.enabled || window.devicePixelRatio >= 2) {
                Retina.suffix = "@2x", Retina.enabled = !0, $("html").addClass(Retina.className);
                try {
                    Core && (Core.A30 += Retina.suffix, Core.A50 += Retina.suffix, Core.A64 += Retina.suffix)
                } catch (e) {
                }
            }
    }};
try {
    Jing && (Jing.Retina = Retina)
} catch (e) {
}
new function(e) {
    e.fn.setCursorPosition = function(t) {
        if (e(this).get(0).setSelectionRange)
            e(this).get(0).setSelectionRange(t, t);
        else if (e(this).get(0).createTextRange) {
            var n = e(this).get(0).createTextRange();
            n.collapse(!0), n.moveEnd("character", t), n.moveStart("character", t), n.select()
        }
    }, e.fn.isDisplay = function() {
        return e(this).length == 0 ? !1 : e(this).css("display") == "none" ? !1 : !0
    }, e.fn.autoTextarea = function(t) {
        var n = {maxHeight: null,minHeight: e(this).height()}, r = e.extend({}, n, t);
        return e(this).each(function() {
            e(this).bind("paste cut keydown keyup focus blur", function() {
                var t, n = this.style;
                this.style.height = r.minHeight + "px", this.scrollHeight > r.minHeight && (r.maxHeight && this.scrollHeight > r.maxHeight ? (t = r.maxHeight, n.overflowY = "scroll") : (t = this.scrollHeight, n.overflowY = "hidden"), n.height = t + "px", e(this).parent().css("height", t + 40))
            })
        })
    }
}(jQuery), Jing.Core = {VERSION: "3.2.9",bodyWidth: 0,bodyHeight: 0,screenWidth: 0,screentHeight: 0,MIN_BODY_WIDTH: 994,MIN_BODY_HEIGHT: 620,MAX_BODY_WIDTH: 2560,MAX_BODY_HEIGHT: 1440,JingATokenHeader: "Jing-A-Token-Header",JingRTokenHeader: "Jing-R-Token-Header",API_VER: "/api/v1",isFullScren: !1,FS_HEIGHT: 0,MAX_OVERLAY_HEIGHT: 0,DOMAIN: "jing.fm",COOKIE_VERSION: "1.0",ie67: $("html").hasClass("ie6") || $("html").hasClass("ie7"),ie68: "",ie69: "",ie: $("html").hasClass("ie"),gecko: $("html").hasClass("gecko"),opera: $("html").hasClass("opera"),ipad: $("html").hasClass("ipad"),webkit: $("html").hasClass("webkit"),standalone: navigator.standalone,nowIsReady: !1,nowSuccess: 1,A30: "30",A50: "50",A64: "64",dspr: "",init: function() {
        Core.standalone ? Core.standalone = "jing.fm" : Core.standalone = "", Core.ie68 = Core.ie67 || $("html").hasClass("ie8"), Core.ie69 = Core.ie68 || $("html").hasClass("ie9"), Core.ie68 ? Core.dspr = "hide" : Core.dspr = "dspr", document.domain = Core.DOMAIN;
        var e = new Array("btnsCtn" + Retina.suffix + ".png", "icons" + Retina.suffix + ".png", "defaults/profile/cover" + Retina.suffix + ".jpg", "defaults/avatar/" + Core.A30 + ".jpg", "defaults/avatar/" + Core.A50 + ".jpg", "defaults/avatar/" + Core.A64 + ".jpg");
        for (var t = 0; t < e.length; ++t) {
            var n = new Image;
            n.src = IMG_URL + "/" + e[t]
        }
        Core.resize(), Core.screenWidth = window.screen.width, Core.screenHeight = window.screen.height, $("html").hasClass("win") && $("html").hasClass("chrome") ? $("#signUp, #signIn").children().css({width: "88px"}) : Core.ipad && $("#signUp, #signIn").children().css({width: "87px"})
    },uploadCallback: function(response, functype) {
        response = eval("(" + response + ")"), functype == "avatar" ? Abt.avtUploadCallback(response) : functype == "cover" ? Abt.coverUploadCallback(response) : functype == "sgnpAvt" && Signup.uploadCallback(response)
    },uploadify: function(action) {
        $("#uploadify").uploadify({uploader: "/api/v1/user/tmp/upload",swf: "http://jing.fm/assets/vendor/uploadify.swf",auto: !0,buttonText: "上传头像",fileObjName: "file",multi: !1,width: 100,height: 100,onSWFReady: function() {
                $("#SWFUpload_0").css({left: "0px",top: "0px"}), $("#uploadify").css({width: "100px",height: "40px"})
            },onDialogOpen: function() {
                $("#uploadify-button").addClass("selected"), $("#uploadify-button").children("span").text("正在打开")
            },onDialogClose: function() {
                $("#uploadify-button").removeClass("selected"), $("#uploadify-button").children("span").text("上传头像")
            },onUploadStart: function(e) {
                $("#uploadify-button").children("span").text("上传中")
            },onUploadSuccess: function(file, response, data) {
                var $obj = $("#uploadify-button").children("span");
                response = eval("(" + response + ")");
                if (response.success) {
                    $obj.text("上传头像"), Signup.userDetail.fid = response.result;
                    var img = new Image;
                    img.onload = function() {
                        $("#uploadify").addClass("selected").after('<img src="' + this.src + '" class="avtImg" />')
                    }, img.src = $.id2url(Signup.userDetail.fid, "UL", "tmp")
                }
            }})
    },getSelectionStart: function(e) {
        if (e.createTextRange) {
            var t = document.selection.createRange().duplicate();
            return t.moveEnd("character", e.value.length), t.text == "" ? e.value.length : e.value.lastIndexOf(t.text)
        }
        return e.selectionStart
    },getSelectionEnd: function(e) {
        if (e.createTextRange) {
            var t = document.selection.createRange().duplicate();
            return t.moveStart("character", -e.value.length), t.text.length
        }
        return e.selectionEnd
    },getCookie: function(name) {
        var tempName = "";
        name != "jing.auth" && name != "jing.misc" && (tempName = name, name = "jing.misc");
        var arg = name + "=", alen = arg.length, clen = document.cookie.length, i = 0;
        while (i < clen) {
            var j = i + alen;
            if (document.cookie.substring(i, j) == arg) {
                var endstr = document.cookie.indexOf(";", j);
                endstr == -1 && (endstr = document.cookie.length);
                var result = unescape(document.cookie.substring(j, endstr));
                if (tempName != "") {
                    try {
                        result = eval("(" + result + ")")
                    } catch (e) {
                        result = new Object
                    }
                    return result.v != Core.COOKIE_VERSION ? "" : result[tempName] == undefined ? "" : result[tempName]
                }
                return result
            }
            i = document.cookie.indexOf(" ", i) + 1;
            if (i == 0)
                break
        }
        return null
    },setCookie: function(name, value, expires, path, domain, secure) {
        if (name != "jing.auth") {
            var tempName = name + "";
            name = "jing.misc";
            var tempValue = value + "", misc = Core.getCookie("jing.misc");
            if (misc == null || misc == "")
                misc = new Object, misc.v = Core.COOKIE_VERSION;
            else {
                try {
                    misc = eval("(" + misc + ")")
                } catch (e) {
                    misc = new Object
                }
                misc.v != Core.COOKIE_VERSION && (misc = new Object, misc.v = Core.COOKIE_VERSION)
            }
            misc[tempName] = tempValue, value = Core.object2String(misc)
        }
        expires = Core.getExpDate(30, 0, 0), document.cookie = name + "=" + escape($.trim(value)) + (expires ? "; expires=" + expires : "") + "path=/" + ("domain=" + Core.DOMAIN) + (secure ? "; secure" : "")
    },getExpDate: function(e, t, n) {
        var r = new Date;
        if (typeof e == "number" && typeof t == "number" && typeof t == "number")
            return r.setDate(r.getDate() + parseInt(e)), r.setHours(r.getHours() + parseInt(t)), r.setMinutes(r.getMinutes() + parseInt(n)), r.toGMTString()
    },getDate: function() {
        var e = new Date;
        return e.getFullYear() + "-" + (e.getMonth() + 1) + "-" + e.getDate() + " " + e.getHours() + ":" + e.getMinutes() + ":" + e.getSeconds()
    },resize: function(init) {
        Core.bodyWidth = document.documentElement.clientWidth, Core.bodyHeight = document.documentElement.clientHeight, Core.bodyWidth = Core.bodyWidth > Core.MIN_BODY_WIDTH ? Core.bodyWidth : Core.MIN_BODY_WIDTH, Core.bodyWidth = Core.bodyWidth < Core.MAX_BODY_WIDTH ? Core.bodyWidth : Core.MAX_BODY_WIDTH;
        if (Main.screenId != "") {
            var objId = Main.screenId.substring(0, 1).toUpperCase() + Main.screenId.substring(1);
            eval(objId + ".resize")()
        }
        Lrc.resize();
        switch (Interface.Current) {
            case Interface.LOGIN:
                break;
            case Interface.MAIN:
                Player.resize();
                break;
            case Interface.SEARCH:
                Search.resize();
                break;
            case Interface.JING:
        }
    },strLength: function(e) {
        var t = 0;
        for (var n = 0; n < e.length; n++)
            e.charCodeAt(n) > 256 ? t += 2 : t++;
        return t
    },objLength: function(e) {
        var t = 0;
        for (var n in e)
            ++t;
        return t
    },inputConver: function(e) {
        $("body").append('<p id="inputConver"></p>'), $("#inputConver").text(e);
        var e = $("#inputConver").html();
        return $("#inputConver").remove(), e
    },badgesUrl: function(e, t, n) {
        return n == undefined && (n = "jpg"), Retina.enabled ? IMG_URL + "/badges/" + t + "@2x/" + e + "." + n : IMG_URL + "/badges/" + t + "/" + e + "." + n
    },imgLoad: function(e, t, n, r) {
        if (n == null || n == "" || n == "null")
            return;
        e.attr({width: r + "px",height: r + "px"}).css({width: r + "px",height: r + "px"});
        var i = new Image;
        i.obj = e, i.wh = r, i.st = t, i.onload = function() {
            var e = 0;
            if (this.st != "" && this.st != e)
                return;
            var t = this.width, n = this.height, i = "", s = 0;
            t < n ? (n = parseInt(this.wh / t * n), i = "top", t = this.wh) : t > n ? (t = parseInt(this.wh / n * t), i = "left", n = this.wh) : (t = this.wh, n = this.wh), r == 30 ? s = 1 : r == 64 && (s = 2), s = 0, this.obj.attr({width: t + "px",height: n + "px"}), this.obj.css({width: t + "px",height: n + "px"}), i == "top" ? this.obj.css({top: -((n - this.wh) / 2) + "px",left: s + "px"}) : i == "left" ? this.obj.css({left: -((t - this.wh) / 2) + "px",top: s + "px"}) : this.obj.css({left: s + "px",top: s + "px"}), this.obj.css({position: "absolute"}), this.obj.attr("src", this.src)
        }, n.indexOf("http://") != 0 && (n = $.id2url(n, $.wh2Thumbtype(r), "avatar")), i.src = n
    },isEmpty: function(e) {
        return e == null || e == undefined || e == "" ? !0 : !1
    },object2String: function(e) {
        var t, n = "";
        if (e) {
            n += "{";
            for (var r in e) {
                t = e[r];
                switch (typeof t) {
                    case "object":
                        t[0] ? n += "'" + r + "':" + Core.array2String(t) + "," : n += "'" + r + "':" + Core.object2String(t) + ",";
                        break;
                    case "string":
                        n += "'" + r + "':'" + t + "',";
                        break;
                    default:
                        n += r + ":" + t + ","
                }
            }
            n = n.substring(0, n.length - 1) + "}"
        }
        return n
    },array2String: function(e) {
        var t, n = "";
        if (e) {
            n += "[";
            for (var r in e) {
                t = e[r];
                switch (typeof t) {
                    case "object":
                        t[0] ? n += Core.array2String(t) + "," : n += Core.object2String(t) + ",";
                        break;
                    case "string":
                        n += "'" + t + "',";
                        break;
                    default:
                        n += t + ","
                }
            }
            n = n.substring(0, n.length - 1) + "]"
        }
        return n
    },playerCDShow: function() {
        $("#mdlHr").show(), $("html").hasClass("gecko") || $("html").hasClass("opera") ? $("#mscPlrCtn, #rotateFlash").css({visibility: "visible"}) : $("#mscPlrCtn").show()
    },playerCDHide: function() {
        $("#mdlHr").hide(), $("html").hasClass("gecko") || $("html").hasClass("opera") ? $("#mscPlrCtn, #rotateFlash").css({visibility: "hidden"}) : $("#mscPlrCtn").hide()
    }}, new function(e) {
    var t = e.separator || "&", n = e.spaces === !1 ? !1 : !0, r = e.suffix === !1 ? "" : "[]", i = e.prefix === !1 ? !1 : !0, s = i ? e.hash === !0 ? "#" : "?" : "", o = e.numbers === !1 ? !1 : !0;
    jQuery.query = new function() {
        var e = function(e, t) {
            return e != undefined && e !== null && (t ? e.constructor == t : !0)
        }, r = function(e) {
            var t, n = /\[([^[]*)\]/g, r = /^([^[]+)(\[.*\])?$/.exec(e), i = r[1], s = [];
            while (t = n.exec(r[2]))
                s.push(t[1]);
            return [i, s]
        }, i = function(t, n, r) {
            var s, o = n.shift();
            typeof t != "object" && (t = null);
            if (o === "") {
                t || (t = []);
                if (e(t, Array))
                    t.push(n.length == 0 ? r : i(null, n.slice(0), r));
                else if (e(t, Object)) {
                    var u = 0;
                    while (t[u++] != null)
                        ;
                    t[--u] = n.length == 0 ? r : i(t[u], n.slice(0), r)
                } else
                    t = [], t.push(n.length == 0 ? r : i(null, n.slice(0), r))
            } else if (o && o.match(/^\s*[0-9]+\s*$/)) {
                var a = parseInt(o, 10);
                t || (t = []), t[a] = n.length == 0 ? r : i(t[a], n.slice(0), r)
            } else {
                if (!o)
                    return r;
                var a = o.replace(/^\s*|\s*$/g, "");
                t || (t = {});
                if (e(t, Array)) {
                    var f = {};
                    for (var u = 0; u < t.length; ++u)
                        f[u] = t[u];
                    t = f
                }
                t[a] = n.length == 0 ? r : i(t[a], n.slice(0), r)
            }
            return t
        }, u = function(e) {
            var t = this;
            return t.keys = {}, e.queryObject ? jQuery.each(e.get(), function(e, n) {
                t.SET(e, n)
            }) : jQuery.each(arguments, function() {
                var e = "" + this;
                e = e.replace(/^[?#]/, ""), e = e.replace(/[;&]$/, ""), n && (e = e.replace(/[+]/g, " ")), jQuery.each(e.split(/[&;]/), function() {
                    var e = decodeURIComponent(this.split("=")[0] || ""), n = decodeURIComponent(this.split("=")[1] || "");
                    if (!e)
                        return;
                    o && (/^[+-]?[0-9]+\.[0-9]*$/.test(n) ? n = parseFloat(n) : /^[+-]?[0-9]+$/.test(n) && (n = parseInt(n, 10))), n = !n && n !== 0 ? !0 : n, n !== !1 && n !== !0 && typeof n != "number" && (n = n), t.SET(e, n)
                })
            }), t
        };
        return u.prototype = {queryObject: !0,has: function(t, n) {
                var r = this.get(t);
                return e(r, n)
            },GET: function(t) {
                if (!e(t))
                    return this.keys;
                var n = r(t), i = n[0], s = n[1], o = this.keys[i];
                while (o != null && s.length != 0)
                    o = o[s.shift()];
                return typeof o == "number" ? o : o || ""
            },get: function(t) {
                var n = this.GET(t);
                return e(n, Object) ? jQuery.extend(!0, {}, n) : e(n, Array) ? n.slice(0) : n
            },SET: function(t, n) {
                var s = e(n) ? n : null, o = r(t), u = o[0], a = o[1], f = this.keys[u];
                return this.keys[u] = i(f, a.slice(0), s), this
            },set: function(e, t) {
                return this.copy().SET(e, t)
            },REMOVE: function(e) {
                return this.SET(e, null).COMPACT()
            },remove: function(e) {
                return this.copy().REMOVE(e)
            },EMPTY: function() {
                var e = this;
                return jQuery.each(e.keys, function(t, n) {
                    delete e.keys[t]
                }), e
            },load: function(e) {
                var t = e.replace(/^.*?[#](.+?)(?:\?.+)?$/, "$1"), n = e.replace(/^.*?[?](.+?)(?:#.+)?$/, "$1");
                return new u(e.length == n.length ? "" : n, e.length == t.length ? "" : t)
            },empty: function() {
                return this.copy().EMPTY()
            },copy: function() {
                return new u(this)
            },COMPACT: function() {
                function t(n) {
                    var r = typeof n == "object" ? e(n, Array) ? [] : {} : n;
                    if (typeof n == "object") {
                        function i(t, n, r) {
                            e(t, Array) ? t.push(r) : t[n] = r
                        }
                        jQuery.each(n, function(n, s) {
                            if (!e(s))
                                return !0;
                            i(r, n, t(s))
                        })
                    }
                    return r
                }
                return this.keys = t(this.keys), this
            },compact: function() {
                return this.copy().COMPACT()
            },toString: function() {
                var r = 0, i = [], o = [], u = this, a = function(e) {
                    return e += "", n && (e = e.replace(/ /g, "+")), encodeURIComponent(e)
                }, f = function(t, n, r) {
                    if (!e(r) || r === !1)
                        return;
                    var i = [a(n)];
                    r !== !0 && (i.push("="), i.push(a(r))), t.push(i.join(""))
                }, l = function(e, t) {
                    var n = function(e) {
                        return !t || t == "" ? [e].join("") : [t, "[", e, "]"].join("")
                    };
                    jQuery.each(e, function(e, t) {
                        typeof t == "object" ? l(t, n(e)) : f(o, n(e), t)
                    })
                };
                return l(this.keys), o.length > 0 && i.push(s), i.push(o.join(t)), i.join("")
            }}, new u(location.search, location.hash)
    }
}(jQuery.query || {});
var BASE64 = {enKey: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",deKey: new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1),encode: function(e) {
        var t = new Array, n, r, i, s = 0;
        while (s + 3 <= e.length)
            n = e.charCodeAt(s++), r = e.charCodeAt(s++), i = e.charCodeAt(s++), t.push(this.enKey.charAt(n >> 2), this.enKey.charAt((n << 4) + (r >> 4) & 63)), t.push(this.enKey.charAt((r << 2) + (i >> 6) & 63), this.enKey.charAt(i & 63));
        return s < e.length && (n = e.charCodeAt(s++), t.push(this.enKey.charAt(n >> 2)), s < e.length ? (r = e.charCodeAt(s), t.push(this.enKey.charAt((n << 4) + (r >> 4) & 63)), t.push(this.enKey.charAt(r << 2 & 63), "=")) : t.push(this.enKey.charAt(n << 4 & 63), "==")), t.join("")
    },decode: function(e) {
        var t = new Array, n, r, i, s, o = 0;
        e = e.replace(/[^A-Za-z0-9\+\/]/g, "");
        while (o + 4 <= e.length)
            n = this.deKey[e.charCodeAt(o++)], r = this.deKey[e.charCodeAt(o++)], i = this.deKey[e.charCodeAt(o++)], s = this.deKey[e.charCodeAt(o++)], t.push(String.fromCharCode((n << 2 & 255) + (r >> 4), (r << 4 & 255) + (i >> 2), (i << 6 & 255) + s));
        return o + 1 < e.length && (n = this.deKey[e.charCodeAt(o++)], r = this.deKey[e.charCodeAt(o++)], o < e.length ? (i = this.deKey[e.charCodeAt(o)], t.push(String.fromCharCode((n << 2 & 255) + (r >> 4), (r << 4 & 255) + (i >> 2)))) : t.push(String.fromCharCode((n << 2 & 255) + (r >> 4)))), t.join("")
    }};
Jing.Main = {screenId: "",init: function() {
        $("#mdCtn, #tbCtn").show(), $("#authCtn").animate({opacity: "0"}, 700, function() {
            $(this).remove(), $("body").removeClass("wlcm"), $("#lgtBtn").show()
        }), $("#jing").click(function() {
            Notifier.requestPermission()
        }), Signup.userDetail.newbie == 0 ? Main.fetchOffMsg() : Gd.init(), Now.init(), Mbl.init(), Fltr.init(), Top.init(), Explr.init(), Cht.init(), Flw.init(), Frds.init(), Fav.init(), Hate.init(), Tkrs.init(), Charts.init(), Ntlg.init(), Pplr.init(), Abt.init(), Gns.init(), Player.init(), Search.init(), Player.load(), InsertPlay.init(), Lrc.init(), Notifier.init(), Core.ie68 || $("#btnsCtn").addClass("dspr"), $(document).on("click", "#fsapp", function(e) {
            $("#avatarCtn").remove(), e.stopPropagation()
        }), $("#fsapp").mousewheel(Main.mousewheel), Core.ipad && fingerGestureListener($(".mscPlrMask")[0], function(e) {
            e.direction == "middle" && Player.playCtl(), Interface.Current == Interface.MAIN && Signup.userDetail.avbF.stct != undefined && !$("#topApp").isDisplay() && e.direction == "left" && $("#playerNext").click()
        }), $(document).on("click", ".ijaBtn, .icon", function() {
            var e = $(this).attr("id");
            if (e == undefined)
                return;
            return Main.menuClick(e), !1
        }), $(document).on("mousedown", ".ijaBtnDrag", function(e) {
            Main.id = $(this).attr("id");
            var t = $(this);
            $(this).children(".num").remove();
            var n = e.clientX + document.body.scrollLeft - document.body.clientLeft, r = e.clientY + document.body.scrollTop - document.body.clientTop;
            document.onmousemove = function(e) {
                e = e || window.event;
                var n = e.clientX + document.body.scrollLeft - document.body.clientLeft, r = e.clientY + document.body.scrollTop - document.body.clientTop;
                if ($("#ijaBtnDrag").length != 0) {
                    var a = n - Main.ijaBtnLeft, f = r - Main.ijaBtnTop;
                    return $("#ijaBtnDrag").css({left: a + "px",top: f + "px"}), clearTimeout(Main.mousemoveTmo), Main.mousemoveTmo = setTimeout(function() {
                        var e = a + $("#ijaBtnDrag").width() / 2, t = f + $("#ijaBtnDrag").height() / 2, n = !0;
                        for (var r in Main.ijaBtnObj) {
                            if (r.indexOf("Icon") >= 0)
                                continue;
                            var i = e - Main.ijaBtnObj[r][0], s = t - Main.ijaBtnObj[r][1];
                            if (i > 0 && i < $("#ijaBtnDrag").width() && s > 0 && s < $("#ijaBtnDrag").height()) {
                                n = !1;
                                if (r == Main.id)
                                    continue;
                                $("#" + Main.id + ".ijaBtn").length == 1 ? $("#" + Main.id).offset().left > $("#" + r).offset().left ? ($("#" + Main.id + ".ijaBtn").remove(), $("#" + r).before('<a id="' + Main.id + '" class="ijaBtn ijaBtnDrag" href="#" data-tps="' + Main.ijaBtnObj[Main.id][2] + '"></a>')) : ($("#" + Main.id + ".ijaBtn").remove(), $("#" + r).after('<a id="' + Main.id + '" class="ijaBtn ijaBtnDrag" href="#" data-tps="' + Main.ijaBtnObj[Main.id][2] + '"></a>')) : ($("#" + r).before('<a id="' + Main.id + '" class="ijaBtn ijaBtnDrag" href="#" data-tps="' + Main.ijaBtnObj[Main.id + "Icon"][2] + '"></a>'), $($(".ijaBtn.ijaBtnDrag")[$(".ijaBtn.ijaBtnDrag").length - 1]).hide());
                                var o = $.makeArray($(".ijaBtnDrag"));
                                Main.ijaBtnObj = new Object;
                                for (var u = 0; u < o.length; ++u) {
                                    var l = $(o[u]).attr("id");
                                    $(o[u]).hasClass("icon") && (l += "Icon"), Main.ijaBtnObj[l] = new Array, Main.ijaBtnObj[l][0] = $(o[u]).offset().left, Main.ijaBtnObj[l][1] = $(o[u]).offset().top;
                                    var c = $(o[u]).data("tps");
                                    c == undefined && (c = $(o[u]).children("span").text()), Main.ijaBtnObj[l][2] = c
                                }
                                break
                            }
                        }
                        if (n && $("#" + Main.id + ".icon").length == 1 && $("#" + Main.id + ".ijaBtn").length == 1) {
                            $("#" + Main.id + ".ijaBtn").remove(), $($(".ijaBtn.ijaBtnDrag")[$(".ijaBtn.ijaBtnDrag").length - 1]).show();
                            var o = $.makeArray($(".ijaBtnDrag"));
                            Main.ijaBtnObj = new Object;
                            for (var u = 0; u < o.length; ++u) {
                                var l = $(o[u]).attr("id");
                                $(o[u]).hasClass("icon") && (l += "Icon"), Main.ijaBtnObj[l] = new Array, Main.ijaBtnObj[l][0] = $(o[u]).offset().left, Main.ijaBtnObj[l][1] = $(o[u]).offset().top, Main.ijaBtnObj[l][2] = $(o[u]).data("tps")
                            }
                        }
                    }, 20), !1
                }
                var i = $.makeArray($(".ijaBtnDrag"));
                Main.ijaBtnObj = new Object;
                for (var s = 0; s < i.length; ++s) {
                    var o = $(i[s]).attr("id");
                    $(i[s]).hasClass("icon") && (o += "Icon"), Main.ijaBtnObj[o] = new Array, Main.ijaBtnObj[o][0] = $(i[s]).offset().left, Main.ijaBtnObj[o][1] = $(i[s]).offset().top;
                    var u = $(i[s]).data("tps");
                    u == undefined && (u = $(i[s]).children("span").text()), Main.ijaBtnObj[o][2] = u
                }
                t.removeClass(Main.id);
                var a, f;
                return t.hasClass("icon") ? (a = n - 27.5, f = r - 35, t.children("span").hide()) : (a = t.offset().left, f = t.offset().top), $("body").append('<div id="ijaBtnDrag" class="ijaBtnFly ' + Main.id + '" style="position:absolute; top:' + f + "px; left:" + a + 'px; z-index:9999"></div>'), Main.ijaBtnLeft = n - a, Main.ijaBtnTop = r - f, !1
            }, document.onmouseup = function() {
                Core.ie && (Core.pass = !0), document.onmousemove = null, document.onmouseup = null;
                if ($("#" + Main.id + ".icon").length == 1 && $("#" + Main.id + ".ijaBtn").length == 1) {
                    var e = $("#" + Main.id + ".icon");
                    for (; ; ) {
                        var t = e.next().attr("id"), n = e.next().children("span").text();
                        if (t == "" || t == undefined)
                            break;
                        e.removeClass(e.attr("id")).addClass(t).data("tps", n).children("span").show().text(n), e.attr("id", t), e = e.next()
                    }
                    e.removeClass(e.attr("id")).attr("id", "").data("tps", "").children("span").text("");
                    var r = $($(".ijaBtn.ijaBtnDrag")[$(".ijaBtn.ijaBtnDrag").length - 1]);
                    r.show(), $("body").append('<div id="lastIjaBtnDrag" class="ijaBtnFly ' + r.attr("id") + '" style="position:absolute; top:' + r.offset().top + "px; left:" + r.offset().left + 'px; z-index:9999"></div>');
                    var t = r.attr("id");
                    r.remove(), $("#lastIjaBtnDrag").animate({left: e.offset().left,top: e.offset().top}, 300, function() {
                        e.attr("id", t).addClass(t).data("tps", Main.ijaBtnObj[t][2]).children("span").show().text(Main.ijaBtnObj[t][2]), $(this).remove()
                    })
                }
                $("#ijaBtnDrag").animate({left: $("#" + Main.id).offset().left,top: $("#" + Main.id).offset().top}, 300, function() {
                    $(this).remove(), $("#" + Main.id).addClass(Main.id), $("#" + Main.id).hasClass("icon") && $("#" + Main.id).children("span").show().text(Main.ijaBtnObj[Main.id + "Icon"][2]);
                    var e = "";
                    $(".ijaBtn").each(function() {
                        e += $(this).attr("id") + ","
                    }), $("#btnsCtn>.btnsCtt>.icon").each(function() {
                        var t = $(this).attr("id");
                        if (t == undefined || t == "")
                            return;
                        e += t + ","
                    }), $.ajax({url: Core.API_VER + "/web/account/post_menu",data: {uid: Signup.userDetail.id,m: e.substring(0, e.length - 1)}})
                })
            }
        })
    },menuClick: function(mid) {
        $("#avatarCtn").remove();
        var screenId;
        mid == "addSNS" || mid == "ntff" ? screenId = "frds" : (screenId = mid, mid = undefined);
        if (Main.screenId != screenId) {
            $("#" + screenId).children(".num").remove();
            if (screenId == "home") {
                $(document).click();
                return
            }
            if (screenId == "more")
                return Tps.hide(), $("#btnsCtn").isDisplay() ? (Core.ie68 ? $("#btnsCtn").hide() : $("#btnsCtn").animate({opacity: "0"}, 300, function() {
                    $(this).hide()
                }), $("#" + screenId).removeClass("selected")) : (Core.ie68 ? $("#btnsCtn").show() : $("#btnsCtn").show().animate({opacity: "1"}, 300), $("#" + screenId).addClass("selected")), !1;
            Main.moreHide(), Core.playerCDHide(), $("#fsapp").html(""), Main.screenId == "" ? $("#fsapp").show().animate({opacity: "1"}, 300) : $("#" + Main.screenId).removeClass("selected"), Interface.Current == Interface.SEARCH && $(document).click(), $("#" + screenId).addClass("selected"), $("#fsapp").removeClass(screenId), $("#fsapp").addClass(screenId);
            var objId = screenId.substring(0, 1).toUpperCase() + screenId.substring(1);
            return eval(objId + ".resize")(), eval(objId + ".show")(mid), Main.screenId = screenId, !1
        }
        Main.closeFsapp(screenId)
    },moreHide: function() {
        $("#more").removeClass("selected"), $("#btnsCtn").hide()
    },closeFsapp: function(e) {
        Main.hideLoading(), e == undefined && (e = Main.screenId);
        if (e == "")
            return;
        $("#" + e).removeClass("selected"), $("#avatarCtn").remove(), Core.playerCDShow(), $("#fsapp").removeClass(Main.screenId).animate({opacity: "0"}, 300, function() {
            $(this).hide(), $(this).html("")
        }), Main.screenId = ""
    },showLoading: function(e) {
        e == undefined && (e = $("body"));
        if (e.children(".domiso").length > 0)
            return !1;
        e.append('<div class="domiso"><i class="dou"></i><i class="re"></i><i class="me"></i></div>');
        if ($("html").hasClass("cssanimations"))
            e.children(".domiso").children(".dou").addClass("dancing"), setTimeout(function() {
                e.children(".domiso").children(".re").addClass("dancing")
            }, 100), setTimeout(function() {
                e.children(".domiso").children(".me").addClass("dancing")
            }, 200);
        else {
            var t = function(n) {
                e.children(".domiso").children("." + n).animate({"margin-top": "0px",height: "28px",opacity: "0.9"}, 250, function() {
                    $(this).animate({"margin-top": "4px",height: "20px",opacity: "0.5"}, 250, function() {
                        t(n)
                    })
                })
            };
            t("dou"), setTimeout(function() {
                t("re")
            }, 100), setTimeout(function() {
                t("me")
            }, 200)
        }
        return !0
    },hideLoading: function(e) {
        e == undefined && (e = $("body")), e.children(".domiso").remove()
    },setNowListen: function(e) {
        $("#nowListen").html(e), $("#playerRptOne").removeClass("selected")
    },mousewheel: function(e, t, n, r) {
        switch (Main.screenId) {
            case "explr":
            case "ntlg":
            case "top":
                if (Main.isMousewheel)
                    return;
                Main.isMousewheel = !0, setTimeout(function() {
                    Main.isMousewheel = !1
                }, 500), t > 0 ? $("#lftSldrBtn").click() : $("#rghtSldrBtn").click();
                return
        }
        var i = $("#" + Main.screenId + "Ctn");
        Main.screenId == "charts" && $("#chartsYearCtn").isDisplay() && (i = $("#chartsYearCtn"));
        if (i.length == 0)
            return;
        var s = i.width(), o = parseInt(i.css("margin-left").replace("px", ""));
        if (s < Core.bodyWidth)
            return;
        var u = 25;
        Main.screenId == "abt" && (u = 0);
        if (t > 0) {
            t < 2 ? t = 80 : t < 3 ? t = 120 : t < 4 ? t = 170 : t < 5 ? t = 200 : t = 250;
            if (o == u)
                return;
            o += t, o > u && (o = u), i.css("margin-left", o + "px")
        } else {
            t > -2 ? t = -80 : t > -3 ? t = -120 : t > -4 ? t = -170 : t > -5 ? t = -200 : t = -250;
            if (s + o == Core.bodyWidth)
                return;
            o += t;
            if (s + o > Core.bodyWidth)
                i.css("margin-left", o);
            else {
                i.css("margin-left", Core.bodyWidth - s);
                switch (Main.screenId) {
                    case "fav":
                        var a = Fav.st + ($("#favCtn>.rndSqrCol").length * Fav.colCount - 1);
                        a < Fav.total && Main.showLoading() && Fav.fetchFav(a);
                        break;
                    case "hate":
                        var a = Hate.st + $("#hateCtn>.rndSqrCol").length * Hate.colCount;
                        a < Hate.total && Main.showLoading() && Hate.fetchHate(a);
                        break;
                    case "tkrs":
                        var a = Tkrs.st + $("#tkrsCtn>.rndSqrCol").length * Tkrs.colCount;
                        a < Tkrs.total && Main.showLoading() && Tkrs.fetchTkers(a);
                        break;
                    case "pplr":
                        Main.showLoading() && Pplr.fetchPplr();
                        break;
                    case "frds":
                        if (Frds.mid == "srchFrds")
                            return;
                        var a = Frds.st + $(".frdsCtn").length;
                        a < Frds.total && Main.showLoading() && Frds.fetchFrds(a);
                        break;
                    case "abt":
                        var a = Abt.st + $("#abtCtn>.rndSqrCol").length * Abt.colCount;
                        a < Abt.total && Main.showLoading() && $.ajax({url: Core.API_VER + "/personal/lovetickers",data: {uid: Signup.userDetail.id,ouid: Abt.abtObj.uid,st: a,ps: Abt.count},success: function(e) {
                                Abt.gnTkrsHtml(e.result.items, "", !1)
                            }})
                }
            }
        }
    },fetchOffMsg: function() {
        setTimeout(function() {
            $.ajax({url: Core.API_VER + "/message/fetch_offline_messages",data: {uid: Signup.userDetail.id},success: function(e) {
                    var t = e.result.items, n = e.result.chats, r = new Array, i = "", s = "", o = 0;
                    for (var u = 0; u < t.length; ++u)
                        t[u].t == "flwd" ? t[u].flw_id == Signup.userDetail.id && (i == "" ? (i = t[u], i.flwer += "、") : i.flwer += t[u].flwer + "、") : t[u].t == "inhs" ? s == "" ? (s = t[u], s.frd += "、") : s.frd += t[u].frd + "、" : r[r.length] = t[u];
                    i != "" && (i.flwer = i.flwer.substring(0, i.flwer.length - 1), r[r.length] = i), s != "" && (s.frd = s.frd.substring(0, s.frd.length - 1), r[r.length] = s), t = r;
                    for (var u = 0; u < t.length; ++u)
                        Message.send(t[u], !1);
                    var a = "";
                    if (o != 0) {
                        var f = n.length;
                        n[f] = new Object, n[f].uid = "0", n[f].nick = "好友请求", n[f].count = o, a = '未读的 <a href="#" class="trg chtSysEvent">' + n[f].nick + " (" + n[f].count + ")</a>"
                    }
                    var l = "";
                    for (var u = 0; u < n.length; ++u) {
                        Cht.offlineCount += n[u].count, Cht.offlineMes[n[u].uid] = new Object, Cht.offlineMes[n[u].uid].nick = n[u].nick, Cht.offlineMes[n[u].uid].count = n[u].count;
                        if (n[u].uid == "0") {
                            Cht.sysOfflineCount = n[u].count;
                            continue
                        }
                        l += '<a href="#" class="trg chtNickEvent" data-uid="' + n[u].uid + '" data-nick="' + n[u].nick + '" data-avatar="' + n[u].avatar + '" data-ol="' + n[u].ol + '">' + n[u].nick + " (" + n[u].count + ")</a>、"
                    }
                    n.length == 1 && a != "" ? (a = "你有" + a, a += '，<a href="#" class="trg chtSysEvent">去看看？</a>', Gns.nowGns(a)) : Cht.offlineCount != 0 && (a != "" && (a = "，还有" + a), l = l.substring(0, l.length - 1), l += " 给你发送了消息" + a + '，<a href="#" class="trg chtListEvent">去看看？</a>', Gns.nowGns(l)), Cht.offlineCount != 0 && ($(".frds.ijaBtn").length == 1 ? ($(".frds.ijaBtn").children(".num").remove(), $(".frds.ijaBtn").append('<em class="num serif" style="left: 33px; top: 8px;">' + Cht.offlineCount + "</em>")) : ($(".more.ijaBtn").children(".num").remove(), $(".frds.icon").children(".num").remove(), $(".more.ijaBtn").append('<em class="num serif" style="left: 33px; top: 8px;">' + Cht.offlineCount + "</em>"), $(".frds.icon").append('<em class="num serif" style="left: 76px; top: 8px;">' + Cht.offlineCount + "</em>")))
                }})
        }, 1e4), Signup.userDetail.sts.hbr == "false" && Core.getCookie("highKnow") != "true" && setTimeout(function() {
            Gns.nowGns('你现在在使用低品质音乐，如果想恢复高品质音乐，<a href="#" class="trg gnsStsDsply">点击设置</a>。<a href="#" class="trg knowEvent" data-cookieid="highKnow">不再提醒设置</a>。')
        }, 6e3)
    }};
var Interface = {Current: 2,MAIN: 0,SEARCH: 1,LOGIN: 2,JING: 3};
Jing.Signup = {userDetail: {id: "",nick: "",fid: "",snsId: "",snsType: "",newbie: 0,c: 0,invitation: "",k: "",pld: null,sts: null,avbF: new Object,newview: new Object},init: function() {
        Core.getCookie("jing.auth") != "" && Core.getCookie("jing.auth") != null && $.ajax({url: Core.API_VER + "/web/sessions/validates",data: {i: ""},success: function(e, t, n) {
                e.success && (Signup.setUserDetail(e.result, t, n), Signup.userDetail.beta ? Signup.finish(!0) : Signup.validateBeta())
            }}), $.query.get("invt") != "" && (Signup.userDetail.invitation = $.query.get("invt")), Core.ie ? ($("#sgnpBrowseAvt").remove(), Core.uploadify()) : $("#uploadify").remove(), $("#sgnpCtn, #crdntlsCtn").click(function(e) {
            e.stopPropagation()
        }), Core.ie68 || $("#snsCtn").addClass("dspr"), Signup.lgn(), Signup.sgnp(), Signup.snsAuth(), $(document).on("click", ".shareJing", function() {
            $(this).hasClass("ok") && $.ajax({url: Core.API_VER + "/oauth/bindmessage",data: {uid: Signup.userDetail.id,identify: $(this).data("identify")}}), Gns.empty(!0)
        })
    },lgn: function() {
        $("#lgn").click(function() {
            if ($(this).hasClass("selected") || Signup.isAnimate)
                return;
            Signup.isAnimate = !0, $(".auth").removeClass("selected"), $(this).addClass("selected");
            var e = function() {
                $("html").hasClass("cssanimations") ? $("#logoCtn").css({"margin-top": "-235px"}) : $("#logoCtn").animate({"margin-top": "-235px"}, 300), setTimeout(function() {
                    $("#crdntlsCtn>input").css("padding", "0px"), $("#lgnEmail").attr("placeholder", "").css({left: "203px",width: "1px"}), $("#lgnPwd").attr("placeholder", "").css({left: "224px",width: "1px"}), $("#crdntlsCtn").show(), $("#lgnEmail").animate({left: "0px",width: "204px"}, 500, function() {
                        $(this).css({"padding-left": "20px","padding-right": "20px"}), Core.ie67 && $(this).css("width", "-=40"), $(this).attr("placeholder", "输入你的登录邮箱").placeholder()
                    }), $("#lgnPwd").animate({width: "204px"}, 500, function() {
                        $(this).css({"padding-left": "20px","padding-right": "40px"}), Core.ie67 && $(this).css("width", "-=60"), $(this).attr("placeholder", "输入你的登录密码").placeholder(), Signup.isAnimate = !1
                    }), $("#snsCtn").css("margin-top", "5px").show(), Core.ie68 || $("#snsCtn").animate({opacity: "1"}, 300)
                }, 200)
            };
            $("#sgnpCtn").isDisplay() ? ($("html").hasClass("cssanimations") ? $("#sgnpCtn").css({opacity: "0"}) : $("#sgnpCtn").animate({opacity: "0"}, 300), Core.ie68 || $("#snsCtn").animate({opacity: "1"}, 300), setTimeout(function() {
                $("#sgnpCtn, #snsCtn").hide(), $("#logoCtn").show(), $("html").hasClass("cssanimations") ? $("#logoCtn").css({opacity: "1"}) : $("#logoCtn").animate({opacity: "1"}, 300), setTimeout(e, 300)
            }, 300)) : e()
        }), $("#lgnEmail").blur(function(e) {
            Stngs.checkEmail($(this), !1, !1)
        }), $("#lgnPwd").keyup(function(e) {
            e.keyCode == 13 && $("#lgnSbmt").click()
        }).blur(function(e) {
            Stngs.checkPwd($(this), !1)
        }), $("#lgnSbmt").click(function() {
            var e = $("#lgnEmail").val(), t = $("#lgnPwd").val().split("");
            if (Stngs.checkEmail($("#lgnEmail"), !0, !1) && Stngs.checkPwd($("#lgnPwd"), !0)) {
                var n = "", r = new Array("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9");
                for (var i = 0; i < t.length; ++i)
                    n += t[i] + r[parseInt(Math.random() * r.length)];
                t = BASE64.encode(n), $.ajax({url: Core.API_VER + "/web/sessions/create",data: {email: e,pwd: t},success: function(e, t, n) {
                        if (!e.success) {
                            $("#lgnPwd").data("tps", e.codemsg), Tps.show($("#lgnPwd"));
                            return
                        }
                        Tps.hide(), Signup.setUserDetail(e.result, t, n), $("#crdntlsCtn>input").val("").css("padding", "0px").attr("placeholder", ""), $("#lgnEmail").animate({left: "204px",width: "0px"}, 500), $("#lgnPwd").animate({width: "0px"}, 500, function() {
                            Signup.userDetail.beta ? Signup.finish(!0) : Signup.validateBeta()
                        })
                    }})
            }
        })
    },sgnp: function() {
        $("#sgnp").click(function() {
            if ($(this).hasClass("selected") || Signup.isAnimate)
                return;
            Signup.isAnimate = !0, $(".auth").removeClass("selected"), $(this).addClass("selected"), $("html").hasClass("cssanimations") ? $("#logoCtn").css({"margin-top": "-=100",opacity: "0"}) : $("#logoCtn").animate({"margin-top": "-=100",opacity: "0"}, 300), setTimeout(function() {
                $("#logoCtn").hide(), $("#logoCtn").css("margin-top", "-128px"), $("#sgnpCtn").show(), $("#snsCtn").css("margin-top", "-270px").show(), Core.ie68 || $("#snsCtn").animate({opacity: "1"}, 300), $("html").hasClass("cssanimations") ? ($("#sgnpCtn").css({opacity: "1"}), setTimeout(function() {
                    $("#sgnpCtn>.rgstrForm").css("height", "291px"), Signup.isAnimate = !1
                }, 300)) : $("#sgnpCtn").animate({opacity: "1"}, 300, function() {
                    $("#sgnpCtn>.rgstrForm").animate({height: "291px"}, 300), Signup.isAnimate = !1
                })
            }, 300), $("#crdntlsCtn").hide(), $("#snsCtn").hide(), Core.ie68 || $("#snsCtn").css("opacity", "0")
        }), $(".slct").click(function() {
            $(".slct").removeClass("selected"), $(this).addClass("selected"), $("#sgnpSex").val($(this).text())
        }), $("#sgnpNick").blur(function() {
            Stngs.checkNick($(this), !1)
        }), $("#sgnpEmail").blur(function() {
            Stngs.checkEmail($(this), !1, !0)
        }), $("#sgnpPwd").blur(function() {
            Stngs.checkPwd($(this), !1)
        }), $("#sgnpSmt").click(function() {
            if (!Stngs.checkNick($("#sgnpNick"), !0) || !Stngs.checkEmail($("#sgnpEmail"), !0, !0) || !Stngs.checkPwd($("#sgnpPwd")))
                return;
            $("#rgstrFormMask").show(), Main.showLoading($("#sgnpCtn"));
            var e = $("#sgnpNick").val(), t = $("#sgnpSex").val(), n = $("#sgnpEmail").val(), r = $("#sgnpPwd").val().split(""), i = "", s = new Array("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A"
            , "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9");
            for (var o = 0; o < r.length; ++o)
                i += r[o] + s[parseInt(Math.random() * s.length)];
            r = BASE64.encode(i), $.ajax({url: Core.API_VER + "/web/account/create",data: {email: n,pwd: r,nick: e,sex: t,fid: Signup.userDetail.fid,i: Signup.userDetail.invitation},success: function(e, t, n) {
                    if (!e.success)
                        return;
                    Signup.setUserDetail(e.result, t, n), $("#rgstrFormMask").hide(), Main.hideLoading($("#sgnpCtn")), Signup.userDetail.beta ? Signup.finish(!1) : Signup.validateBeta()
                }})
        }), $("#sgnpBrowseAvt").click(function(e) {
            return $(this).hasClass("uploading") || $("#sgnpAvtInput").click(), !1
        })
    },validateBeta: function() {
        $("#crdntlsCtn").children().remove(), $("#sgnp").hasClass("selected") ? ($("html").hasClass("cssanimations") ? $("#sgnpCtn").css({opacity: "0"}) : $("#sgnpCtn").animate({opacity: "0"}, 300), Core.ie68 || $("#snsCtn").animate({opacity: "1"}, 300), setTimeout(function() {
            $("#sgnpCtn, #snsCtn").hide(), $("#logoCtn").show(), $("html").hasClass("cssanimations") ? $("#logoCtn").css({opacity: "1"}) : $("#logoCtn").animate({opacity: "1"}, 300), setTimeout(function() {
                $("html").hasClass("cssanimations") ? $("#logoCtn").css({"margin-top": "-235px"}) : $("#logoCtn").animate({"margin-top": "-235px"}, 300), setTimeout(function() {
                    $("#crdntlsCtn").show(), $("#snsCtn").css("margin-top", "5px").show(), Core.ie68 || $("#snsCtn").animate({opacity: "1"}, 300), setTimeout(function() {
                        $("#validateSmt").click()
                    }, 300)
                }, 200)
            }, 300)
        }, 300)) : ($("html").hasClass("cssanimations") ? $("#sgnpCtn").css({opacity: "0"}) : $("#sgnpCtn").animate({opacity: "0"}, 300), Core.ie68 || $("#snsCtn").animate({opacity: "1"}, 300), setTimeout(function() {
            $("html").hasClass("cssanimations") ? $("#logoCtn").css({"margin-top": "-235px"}) : $("#logoCtn").animate({"margin-top": "-235px"}, 300), setTimeout(function() {
                $("#crdntlsCtn").show(), $("#snsCtn").css("margin-top", "5px").show(), Core.ie68 || $("#snsCtn").animate({opacity: "1"}, 300), setTimeout(function() {
                    $("#validateSmt").click()
                }, 300)
            }, 200)
        }, 300)), $("#crdntlsCtn").append('<input id="lgnBeta" class="input" style="left:107px;" value="' + Signup.userDetail.invitation + '"><a id="validateSmt" href="#" class="sbmt" style="right:128px;"></a>'), $("#lgnBeta").attr("placeholder", "输入你的Beta邀请码").placeholder(), $("#lgnBeta").keyup(function(e) {
            e.keyCode == 13 && $("#validateSmt").click()
        }), $("#validateSmt").click(function() {
            var e = $("#lgnBeta").val();
            if (e == "")
                return;
            $.ajax({url: Core.API_VER + "/app/post_active_token",data: {uid: Signup.userDetail.id,i: e},success: function(e, t, n) {
                    if (!e.success) {
                        $("#lgnBeta").data("tps", "这个邀请码无效"), Tps.show($("#lgnBeta"));
                        return
                    }
                    Signup.finish(!1)
                }})
        }), $("#sgnp, #lgn").addClass("selected")
    },uploadPhoto: function() {
        $("#sgnpBrowseAvt").text("上传中"), document.sgnpAvtForm.submit()
    },uploadCallback: function(e) {
        $(this).removeClass("uploading");
        if (e.success) {
            Signup.userDetail.fid = e.result;
            var t = new Image;
            t.onload = function() {
                $("#sgnpBrowseAvt").addClass("selected").text("上传头像").after('<img src="' + this.src + '" class="avtImg" />')
            }, t.src = $.id2url(Signup.userDetail.fid, "UL", "tmp")
        }
    },snsAuth: function() {
        $(".snsAuthEvent").click(function() {
            var e = $(this).data("snsid"), t = SnsWindowWh[e][0], n = SnsWindowWh[e][1], r = (Core.screenWidth - t) / 2, i = (Core.screenHeight - n - 68) / 2, s = !1;
            Core.ipad && (s = !0);
            var o = Core.API_VER + "/oauth/proxyauthorize?identify=" + ConverSns[e + "1"] + "&autoclose=" + s + "&standalone=" + Core.standalone;
            s ? window.open(o, "_blank", "width=" + t + "px, height=" + n + "px, left=" + r + "px, top=" + i + "px, directories=0, location=0, menubar=0, resizable=0, status=0, toolbar=0") : Signup.OpenWindow = window.open(o, "_blank", "width=" + t + "px, height=" + n + "px, left=" + r + "px, top=" + i + "px, directories=0, location=0, menubar=0, resizable=0, status=0, toolbar=0")
        })
    },finish: function(e) {
        $("#crdntlsCtn").children().remove(), $("#crdntlsCtn").show(), $("#logoCtn").css("margin-top") == "-128px" && $("#crdntlsCtn").css("margin-top", "100px"), $("#crdntlsCtn").show(), e && Main.showLoading($("#crdntlsCtn")), setTimeout(function() {
            Main.init()
        }, 500), $("#lgtBtn").click(function() {
            _gaq.push(["_trackEvent", "Main", "Lgt", "LogoutSuccessfully"]), Core.setCookie("jing.auth", ""), window.location.href = "/beta/"
        })
    },authCallback: function(e) {
        if (!e.success) {
            alert(e.msg);
            return
        }
        if (e.result.association == undefined) {
            var t = e.result.identify;
            $.ajax({url: Core.API_VER + "/oauth/bind",data: {uid: Signup.userDetail.id,identify: t},success: function(e) {
                    if (!e.success) {
                        e.code == "806" ? Gns.nowGns("你的" + btnDes[t] + "已经绑定了别的账户，请换别的SNS。") : alert(e.msg);
                        return
                    }
                    if (ConverSns[t] != undefined) {
                        Signup.userDetail.snstokens[t] = e.result;
                        var n = ConverSns[t];
                        $(".icon." + n).parent().addClass("selected"), Gns.nowGns("分享Jing到" + btnDes[t] + '？<a href="#" class="trg shareJing ok" data-identify="' + t + '">是</a> | <a href="#" class="trg shareJing no">否</a>')
                    }
                }})
        } else if (e.result.association)
            Core.setCookie("jing.auth", e.result[Core.JingATokenHeader] + "," + e.result[Core.JingRTokenHeader]), $.ajaxSetup({headers: {"Jing-A-Token-Header": e.result[Core.JingATokenHeader],"Jing-R-Token-Header": e.result[Core.JingRTokenHeader]}}), Signup.setUserDetail(e.result), Signup.userDetail.beta ? Signup.finish(!1) : Signup.validateBeta();
        else {
            var n = e.result.id, r = e.result.nick, t = e.result.identify;
            Main.showLoading($("#crdntlsCtn")), $.ajax({url: Core.API_VER + "/oauth/auto_create",data: {auid: n,nick: r,identify: t,i: Signup.userDetail.invitation},success: function(e, r, i) {
                    e.success && (Signup.setUserDetail(e.result, r, i), $.ajax({url: Core.API_VER + "/oauth/association",data: {uid: Signup.userDetail.id,identify: t,auid: n},success: function(e) {
                            e.success && setTimeout(function() {
                                Gns.nowGns("分享Jing到" + btnDes[t] + '？<a href="#" class="trg shareJing ok" data-identify="' + t + '">是</a> | <a href="#" class="trg shareJing no">否</a>')
                            }, 1e4)
                        }}), Signup.userDetail.beta ? Signup.finish(!1) : Signup.validateBeta())
                }})
        }
        Signup.OpenWindow && setTimeout(function() {
            Signup.OpenWindow.window.close(), Signup.OpenWindow = !1
        }, 2e3)
    },resize: function() {
    },setUserDetail: function(e, t, n) {
        if (n != undefined) {
            var r = n.getResponseHeader(Core.JingATokenHeader), i = n.getResponseHeader(Core.JingRTokenHeader);
            Core.setCookie("jing.auth", r + "," + i), $.ajaxSetup({headers: {"Jing-A-Token-Header": r,"Jing-R-Token-Header": i}})
        }
        Signup.userDetail.pld = e.pld;
        if (e.avbF != null) {
            var s = e.avbF.split(",");
            for (var o = 0; o < s.length; ++o)
                Signup.userDetail.avbF[s[o]] = !0
        }
        Signup.userDetail.id = e.usr.id, Signup.userDetail.nick = e.usr.nick, Signup.userDetail.newbie = e.usr.newbie, Signup.userDetail.c = e.usr.c, Signup.userDetail.sid = e.usr.sid, Signup.userDetail.beta = e.usr.beta, e.usr.avatar == null && (e.usr.avatar = ""), Signup.userDetail.fid = e.usr.avatar, Signup.userDetail.fidtiny = e.usr.avatartiny, Signup.userDetail.sts = e.sts, Signup.userDetail.snstokens = e.snstokens;
        for (var o = 0; o < resData.frdCt.length; ++o)
            for (var u in e.snstokens)
                resData.frdCt[o].mid == ConverSns[u] && (resData.frdCt[o].display = "true");
        Core.ipad && (Signup.userDetail.sts.tipNtf = undefined), Signup.userDetail.newview = e.newview, Signup.userDetail.newview.b = new Array, Signup.userDetail.sts.lgA == "true" && $("html").addClass("ftlg");
        if (e.m != null) {
            var o = 0, a = e.m.split(",");
            $(".ijaBtn").each(function() {
                $(this).removeClass($(this).attr("id")), $(this).attr("id", a[o]).addClass(a[o]), $(this).data("tps", Menu[a[o]]), ++o
            }), $("#btnsCtn>.btnsCtt>.icon").each(function() {
                if (a.length == o)
                    return;
                $(this).removeClass($(this).attr("id")), $(this).attr("id", a[o]).addClass(a[o]), $(this).children(".tit").text(Menu[a[o]]), ++o
            })
        }
    }}, Jing.InsertPlay = {type: "",cmbt: "",music: "",nowListenStr: "",keywords: "",isPlay: !1,cacheMusic: null,cachePos: "",cacheSt: "",cacheSec: "",cacheTotal: "",init: function() {
        $(document).on("click", ".closeInsertPlay", InsertPlay.close)
    },play: function(e, t, n, r) {
        InsertPlay.keywords = "", InsertPlay.cacheMusic == null ? (InsertPlay.cacheMusic = Player.music, InsertPlay.cachePos = Player.pos, InsertPlay.cacheSt = Search.st, InsertPlay.cacheSec = Player.currentTime, InsertPlay.cacheTotal = Search.total, InsertPlay.cacheM = Search.m) : t != "flw" && InsertPlay.type == "flw" && (Flw.leave(), Flw.empty());
        if (e != "") {
            var i = e.indexOf("q=");
            i > 0 && (InsertPlay.keywords = e.substring(i + 2)), e = e.substring(0, e.indexOf("?"))
        }
        InsertPlay.cmbt = e, InsertPlay.type = t, InsertPlay.music = n, InsertPlay.nowListenStr = r, InsertPlay.isPlay = !0, Search.st = 0, Player.pos = 100, Player.next(400), Main.setNowListen(InsertPlay.nowListenStr + ' | <a class="closeInsertPlay" href="#">返回</a>')
    },next: function(e) {
        if (InsertPlay.cmbt == "") {
            if (Player.pos == 1 && Main.screenId == "top" && Main.screenId == InsertPlay.type) {
                var t = $.makeArray($(".favPlayCtlEvent")), n = $(t[parseInt(Math.random() * t.length)]);
                n.mouseenter(), n.click(), n.mouseleave(), n.parents(".topCt").data("no") == "0" ? $("#lftSldrBtn").click() : n.parents(".topCt").data("no") == "2" && $("#rghtSldrBtn").click();
                return
            }
            Search.m = 99, Player.music = new Array, Search.setMusic(InsertPlay.music, 0), Player.pos = 0, Player.setVolumeDown("play", e)
        } else if (Player.pos >= Player.music.length) {
            var r = function(t) {
                if (!t.success) {
                    Gns.nowGns("Jing 开了点小差，你过会儿再试试。");
                    return
                }
                t.result.hint != undefined && Gns.nowGns(t.result.hint);
                var n = t.result;
                Search.m = n.m;
                var r = "";
                if (InsertPlay.type == "charts")
                    for (var i in n)
                        n[i].items != undefined ? r = n[i].items : i == "m" && (Search.m = n[i]);
                else
                    r = n.items;
                if (r.length == 0) {
                    Search.st != 0 ? (Search.st = 0, InsertPlay.next(0)) : (InsertPlay.type == "jingRd" && Gns.nowGns("你需要至少喜欢3首歌曲之后，Jing才能为你开启智能推荐功能。"), InsertPlay.close());
                    return
                }
                Search.total = n.total, InsertPlay.type != "charts" && (Search.st = Search.st + n.items.length), Player.music = new Array;
                for (var s = 0; s < r.length; ++s)
                    Search.setMusic(r[s], s);
                Player.pos = 0, Player.setVolumeDown("play", e)
            };
            InsertPlay.type == "charts" ? $.ajax({url: Core.API_VER + InsertPlay.cmbt,data: {uid: Signup.userDetail.id,nodeids: InsertPlay.keywords},success: r}) : $.ajax({url: Core.API_VER + InsertPlay.cmbt,data: {u: Signup.userDetail.id,st: Search.st,ps: 5,q: InsertPlay.keywords,mc: "false"},success: r})
        } else
            Player.setVolumeDown("play", e)
    },close: function(e) {
        InsertPlay.isPlay = !1, Main.setNowListen("正在收听：" + Search.keywords), Search.st = InsertPlay.cacheSt, Player.music = InsertPlay.cacheMusic, Player.pos = InsertPlay.cachePos, Search.total = InsertPlay.cacheTotal, Search.m = InsertPlay.cacheM, Player.addLoading(), e != "false" && Player.play(InsertPlay.cacheSec), InsertPlay.cacheMusic = null, InsertPlay.type == "flw" ? (Flw.leave(), Flw.empty()) : Main.screenId == "jingRd" && InsertPlay.type == "jingRd" && Main.closeFsapp(), InsertPlay.type = "", InsertPlay.seconds = 0
    }};
var ClientIdArr = new Array;
Jing.Now = {disconnectTmo: 0,init: function() {
        window.now = nowInitialize(NOW_URL, {}), now.ready(function() {
            console.log("now enter ready");
            var e = Signup.userDetail.sid + "-" + Core.nowSuccess;
            ClientIdArr[ClientIdArr.length] = window.now.core.clientId, now.connectionUnique(Signup.userDetail.id, Signup.userDetail.nick, e, function() {
                ++Core.nowSuccess, clearTimeout(Now.disconnectTmo), Now.disconnectTmo = 0, console.log("now connection regist success"), Core.nowIsReady = !0, $("#tstInShow").text().indexOf("你掉线了哦，检查下你的网络，或者刷新下页面试试") >= 0 && (Gns.empty(!1), Gns.nowGns("你的网络已经恢复，继续玩吧"))
            }, Selector_browser, Core.getCookie("jing.auth").split(",")[0])
        }), now.receiveTickerMessage = function(message) {
            message = eval("(" + message + ")");
            if (Signup.userDetail.sts.tckNtf != "true")
                return;
            message.t == "L" && message.uid != Signup.userDetail.id && (++Tkrs.tkrsCount, $(".tkrs.ijaBtn").length == 1 ? ($(".tkrs.ijaBtn").children(".num").remove(), $(".tkrs.ijaBtn").append('<em class="num serif" style="left: 33px; top: 8px;">' + Tkrs.tkrsCount + "</em>")) : ($(".more.ijaBtn").children(".num").remove(), $(".tkrs.icon").children(".num").remove(), $(".more.ijaBtn").append('<em class="num serif" style="left: 33px; top: 8px;">' + Tkrs.tkrsCount + "</em>"), $(".tkrs.icon").append('<em class="num serif" style="left: 76px; top: 8px;">' + Tkrs.tkrsCount + "</em>")))
        }, now.receivePrivateMessage = function(message) {
            message = eval("(" + message + ")");
            switch (message.t) {
                case "lisn":
                    if (Flw.isFlw)
                        return;
                    Gns.friendListen(message);
                    break;
                case "chat":
                    Cht.receiveMessage(message);
                    break;
                case "acty":
                    Player.setVolumeDown("msgTone", 100), Gns.nowGns('你收到一条活动信息，<a href="#" class="trg chtSysEvent">去看看</a>');
                    break;
                case "nson":
                    ++Signup.onlineCount;
                    break;
                case "nsof":
                    --Signup.onlineCount, Signup.onlineCount < 0 && (Signup.onlineCount = 0);
                    break;
                case "umft":
                    Player.setVolumeDown("msgTone", 100), Gns.nowGns('<a href="#" class+"trg abtEvent" data-uid="' + message.uid + '" data-nick="' + message.nick + '">' + message.nick + "</a> 喜欢了你喜欢的 " + message.n, Gns.NOTIFIER, message.nick + " 喜欢了你喜欢的 " + message.n);
                    break;
                case "utrc":
                    Player.setVolumeDown("msgTone", 100), Gns.nowGns('<a href="#" class="trg abtEvent" data-uid="' + message.uid + '" data-nick="' + message.nick + '">' + message.nick + "</a> 收藏了你的搜索条件 " + message.tit);
                    break;
                case "mbsp":
                    Shr.resultMsg(message);
                    break;
                default:
                    Message.send(message, !0)
            }
        }, now.receiveInputMessage = function(e, t) {
            if (Cht.fuid != e)
                return;
            Cht.typingMessage(e, t)
        }, now.disconnect = function(e) {
            setTimeout(function() {
                for (var t = 0; t < ClientIdArr.length; ++t)
                    if (ClientIdArr[t] == e)
                        return;
                Gns.nowGns('你的帐号已在别的地方登陆了，我们将会在 <em class="serif big">5</em> 秒内退出此帐号。', Gns.level1, "你的帐号已在别的地方登陆了，我们将会在 5 秒内退出此帐号。"), Core.setCookie("jing.auth", ""), setTimeout(function() {
                    window.location.reload()
                }, 5e3)
            }, 5e3)
        }, now.disconnectRefresh = function() {
            setTimeout(function() {
                Gns.nowGns("检测到你的网络连接异常，将会在5秒钟后重新加载应用，或者手动刷新。", Gns.level1)
            }, 1e4), setTimeout(function() {
                window.location.reload()
            }, 15e3)
        }, now.followListenResponseFailOther = function(e, t) {
            $.ajax({url: Core.API_VER + "/account/check_frdshp",data: {uid: Signup.userDetail.id,frdid: e},success: function(n) {
                    $("#usrTpsCtn").remove();
                    var r = "";
                    n.success ? r = Flw.nick + " 正在跟听 " + t + '，你也要跟听吗？<a id="flwOther" data-fid="' + e + '" data-fnick="' + t + '" class="trg" href="#">跟听</a>' : r = Flw.nick + " 正在跟听别人", Flw.empty(), setTimeout(function() {
                        Gns.nowGns(r)
                    }, 500)
                }})
        }, now.followListenRequestSuccess = function() {
            Gns.nowGns('跟听请求已发送给Ta，现在正在等待Ta的许可 <em id="flwCountdown" class="serif big">15</em>', Gns.level1);
            var e = function() {
                if ($("#flwCountdown").length == 0)
                    return;
                var t = parseInt($("#flwCountdown").text()) - 1;
                t > 0 && ($("#flwCountdown").text(t), setTimeout(e, 1e3))
            };
            setTimeout(e, 2e3), $("#usrTpsCtn").remove(), Flw.serverTmo = setTimeout(function() {
                Gns.empty(!1), Gns.nowGns(Flw.nick + "可能不在电脑旁边哦～所以不能跟听啦"), Flw.empty()
            }, 17e3)
        }, now.followListenRequestAuthorize = function(e, t, r) {
            Player.setVolumeDown("msgTone", 100), Gns.nowGns(t + ' 想要让你带着Ta听音乐，<a href="#" id="flwOK" class="trg know" data-fuid="' + e + '">同意</a> 或 <a href="#" id="flwNO" class="trg know" data-fuid="' + e + '">拒绝</a> <em class="serif big" id="flwCountdown">15</em> 秒后默认为同意。', Gns.level1, t + " 想要让你带着Ta听音乐"), n = 14;
            var i = function() {
                n > 0 ? ($("#flwCountdown").text(n), Flw.reqTmo = setTimeout(i, 1e3), --n) : Flw.flwOK(e)
            };
            Flw.reqTmo = setTimeout(i, 2e3)
        }, now.followListenJoin = function(e, t, n) {
            if (Signup.userDetail.id == e)
                Gns.empty(!1), Gns.nowGns("你正在和 " + Flw.nick + " 收听同样的音乐哦，你可以喜欢、讨厌，但在退出跟听之前不能进行其他操作"), clearTimeout(Flw.serverTmo);
            else if (Flw.toid == "") {
                var r = t + " 正在跟着你听音乐哦";
                Flw.users == null && (Flw.users = new Object, $("#flwLstBtn").show()), Gns.nowGns(r), Flw.users[e] = new Array, Flw.users[e][0] = t, Flw.users[e][1] = n
            } else
                Gns.nowGns(t + " 加入了跟听")
        }, now.followListenLeave = function(e, t) {
            if (Flw.toid == e)
                Gns.nowGns(t + " 停止让你继续跟听Ta，跟听结束。", Gns.NOTIFIER), InsertPlay.close();
            else {
                var n = t + " 退出了跟听";
                if (Flw.toid == "") {
                    if (Signup.userDetail.id == e)
                        return;
                    delete Flw.users[e], Core.objLength(Flw.users) == 0 && (Flw.empty(), n += "，跟听已结束")
                }
                Gns.nowGns(n)
            }
        }, now.followListenResponseAuthorizeSuccess = function(e) {
            if (!Flw.isFlw)
                return;
            Player.cacheVolume = Player.volume, Gns.openGnsArr = new Array;
            var t = e.split(",");
            t[0] == "pausing" ? Flw.play(e, !0) : Flw.play(e, !1)
        }, now.followListenResponseAuthorizeRefuse = function() {
            Gns.empty(!1), Flw.empty(), Gns.nowGns("你的好友 " + Flw.nick + " 暂时不想让你跟听，试试收听Ta喜欢的音乐吧")
        }, now.followListenKickLeave = function() {
            Gns.nowGns(Flw.nick + " 停止让你继续跟听Ta，跟听结束。", Gns.NOTIFIER), InsertPlay.close()
        }, now.receiveFollowListenMessage = function(e, t) {
            if (Signup.userDetail.id == e)
                return;
            var n = t.split(",");
            n[0] == "playing" ? Player.playCtl() : n[0] == "pause" ? (Gns.nowGns("你跟听的人，暂停播放了哦", Gns.NOTIFIER), Player.pause()) : n[0] == "volume" ? (Player.vlmHideTmo == 0 && Gns.nowGns("你跟听的人，调节了音量哦", Gns.NOTIFIER), Player.setVolume(Number(n[1]))) : n[0] == "hate" && Flw.toid == "" ? (Gns.nowGns("正在跟听你的" + n[1] + '，表示不想听这首。和他 <a href="#" class="trg chtNickEvent" data-nick="' + n[1] + '" data-uid="' + e + '" data-ol="true">聊聊</a>', Gns.NOTIFIER, "正在跟听你的" + n[1] + "，表示不想听这首。"), Player.setVolumeDown("msgTone", 100)) : n[0] == "love" && Flw.toid == "" ? Gns.nowGns("正在跟听你的" + n[1] + "，喜欢了这首歌哦", Gns.NOTIFIER) : Flw.play(t, !1)
        }, now.receiveOnlineFrdCountMessage = function(e) {
            e = Number(e);
            if (e == Signup.onlineCount)
                return;
            Signup.onlineCount = e
        }
    }}, Jing.Search = {TIP_WIDTH: 160,TIP_HEIGHT: 170,PERCENTAGE: 5,INTERVAL: 100,rowCount: 0,colCount: 0,isFly: !1,oldStart: 0,oldEnd: 0,count: 0,maxCount: 0,keywords: "",nowKeywords: "",updateKeywords: null,tickerSendTimeout: 0,autoKeywords: null,st: 0,total: 0,ps: 0,isSearch: !1,tid: 0,mt: "",response: null,afterKeywords: "",moods: null,ss: !0,m: "",ntlgSt: 0,init: function() {
        $("html").hasClass("gecko") && $("#schFld").attr("placeholder", ""), $("#schBxCtn").click(Search.schBxCtnClick), $("#schFld").keyup(Search.inputKeyup), $("#schFld").keydown(Search.inputKeydown), $("#schFld").focus(function() {
            Interface.Current != Interface.SEARCH && $("#schBxCtn").click()
        }), $("#schBtn").click(function() {
            return _gaq.push(["_trackEvent", "Search", "ClckSch", "ClickToSearch"]), Interface.Current == Interface.SEARCH && $(document).click(), Search.searchBtnClick(), !1
        }), $("#schCtn").mouseenter(function() {
            $("#schBxCtn").show();
            var e = 0;
            Core.bodyWidth < 1200 ? e = Core.bodyWidth - 560 : e = Core.bodyWidth - 900, e > 700 && (e = 700), $("#schBxCtn").animate({width: e + "px"}, {queue: !1,duration: 300})
        }).mouseleave(function() {
            if (Interface.Current == Interface.SEARCH)
                return !1;
            var e = 23;
            $("#schBxCtn").animate({width: e + "px"}, {queue: !1,duration: 300}), clearTimeout(Search.hideSchTmo), Search.hideSchTmo = setTimeout(function() {
                $("#schBxCtn").width() == e && $("#schBxCtn").hide()
            }, 310)
        }), Search.resize("init"), $(document).on("click", ".searchflyCtn", function() {
            return Search.fly($(this).children(), $(this).data("fid"), $(this).children().children(".name").data("text"), !0, !1), setTimeout(function() {
                Search.dataUpdate("")
            }, 1e3), !1
        }), $(document).on("click", "#instSchChange", function() {
            return _gaq.push(["_trackEvent", "Search", "instSchChange", "Search/InstantSearch"]), Search.dataUpdate("", !1), !1
        }), $(document).on("click", "#smtSch", function() {
            Search.ss = !1, Search.st = 99999999, Gns.isOver = !1, Gns.nowGns("你已经关闭了智能引导，现在可以收听 " + $(this).data("artist") + " 全部的歌曲了")
        }), $(document).on("click", "#smtSchIgnore", function() {
            Gns.isOver = !1, Gns.nextGns()
        })
    },setSchHint: function() {
        if ($("#schFld").val() == "")
            (Core.ie69 || Core.gecko) && $("#schBxCtn .schHint").html("情绪 , 状态 , 艺人 , 风格 , 乐器 ... 随意组合").css({left: "27px"}).show();
        else {
            $("#schBxCtn .schHint").html("想听更多点击添加"), $("#ctnLength").html(Core.inputConver($("#schFld").val()).replace(/&amp;/g, "&"));
            var e = $("#ctnLength").width() + 20;
            e < 198 ? $("#schBxCtn>.schHint").css({left: e + "px"}).show() : $("#schBxCtn>.schHint").hide()
        }
    },schBxCtnClick: function() {
        if (Signup.userDetail.newbie != 0)
            return;
        $("#tps").hide();
        if (Interface.Current != Interface.SEARCH) {
            Main.closeFsapp(), Search.updateKeywords = null, Interface.Current = Interface.SEARCH, $("#schBxCtn .schHint").hide();
            var e = $("#schFld").val();
            e.length != 0 && Symbol[e.substring(e.length - 3)] == undefined && (e += " + "), $("#schFld").val(e), $("#schFld").setCursorPosition(e.length), Core.playerCDHide(), $("#instSchCtn, #instSchCttCtn").show(), Search.dataUpdate(""), $("#schFld").focus()
        }
        return !1
    },searchBtnClick: function() {
        Signup.userDetail.newbie != 0 && Gd.finish();
        var e = !0;
        Player.loveCount = 0, Player.hateCount = 0, $("#atTipsCtn").html("").hide(), $(".tipCtn").length == 1 && Search.flyInput($(".tipCtn>.tipCtt>.name").data("text"), !0);
        var t = Core.inputConver($("#schFld").val()).replace(/&amp;/g, "&");
        t = Search.filterStr(t), $("#schFld").val(t), t = Search.removeLastSymbol(t);
        if (t == "") {
            $("#schFld").val("");
            return
        }
        Search.st = 0, clearTimeout(Gns.gnsRcmdTmo), Gns.gnsRcmdTmo = setInterval(Gns.rcmd, 6e5), t == Search.keywords && (e = !1), Search.searchByKeywords(t, 0, 0, e)
    },searchByKeywords: function(e, t, n, r) {
        if (e == "")
            return;
        var i = "";
        i = Core.API_VER + "/search/jing/fetch_pls";
        var s = Search.tid, o = Search.mt;
        Search.tid = 0, Search.mt = "", Search.isSearch = !0, n == 0 && Player.addLoading(), $.ajax({url: i,data: {q: e,ps: 5,st: n,u: Signup.userDetail.id,tid: s,mt: o,ss: Search.ss},success: function(n) {
                Search.isSearch = !1;
                if (!n.success) {
                    $("#playCtl").removeClass("loading"), Gns.nowGns("Jing 开了点小差，你过会儿再试试。");
                    return
                }
                InsertPlay.isPlay && InsertPlay.close("false"), Search.m = n.result.m, n.result.hint != undefined && Search.st == 0 && Gns.nowGns(n.result.hint);
                if (n.result.items.length == 0) {
                    Search.st != 0 ? (Search.st = 0, Search.searchByKeywords(Search.keywords, 0, 0)) : t == 0 && (Search.keywords == e ? Player.setPlayerDefault() : Search.setSchVal(Search.keywords), $("#playCtl").removeClass("loading"), $("#mscPlr").data("mouse") == "false" && $("#mscPlrMask").mouseleave(), Player.spin.data().spinner.stop(), Player.spin = null, $("#playCtl").hasClass("pause") && Player.startRotate());
                    return
                }
                n.result.moods == undefined ? (Search.moods = null, Search.moodids = "") : (Search.moods = n.result.moods, Search.moodids = n.result.moodids), n.result.g && Gns.nowGns("关闭智能引导，可以搜听 " + n.result.g + ' 所有的歌曲，<a id="smtSch" href="#" class="trg" data-artist="' + n.result.g + '">关闭</a> | <a id="smtSchIgnore" href="#" class="trg">忽略</a>');
                if (n.result.choose == 1) {
                    $("#playCtl").removeClass("loading");
                    var i = "", s = n.result.items;
                    for (var o = 0; o < s.length; ++o)
                        i += '<a href="#" class="trg gnsSchSml" data-tid="' + s[o].tid + '">' + s[o].n + "</a>", o == s.length - 2 ? i += "，还是 " : i += "，";
                    Gns.nowGns("你想要搜索的歌曲是 " + i + " 演艺的？");
                    return
                }
                if (n.result.multiple != undefined) {
                    var i = "";
                    for (var o = 0; o < n.result.multiple.length; ++o) {
                        var u = n.result.multiple[o].split(":");
                        u[2] == "ats" ? i += "艺人" : u[2] == "tas" ? i += "电影原声" : u[2] == "sta" ? i += "原声专辑" : i += "标签", i += '：<a href="#" class="trg gnsMt" data-mt="' + n.result.multiple[o] + '">', u[0] == u[1] ? i += u[0] : i += u[0] + "（" + u[1] + "）", i += "</a>、"
                    }
                    Gns.nowGns("还有 " + i.substring(0, i.length - 1) + "，是否要听听？")
                }
                var a = n.result.os;
                if (a != undefined) {
                    osArr = a.split(":");
                    if (!(osArr[1] > 0)) {
                        Search.response = n, Gns.nowGns(osArr[0] + '今年才发行的专辑，还没有老歌呀，<a href="#" class="trg gnsTingOS" data-keywords="' + e + '">是否收听这盘专辑</a>呢？');
                        return
                    }
                    Gns.nowGns(osArr[0] + "的歌曲都不算太老哦，为你播放 " + osArr[0] + " 尽可能早的歌曲")
                }
                Search.searchAfter(e, n, t, r, !0)
            }})
    },searchAfter: function(e, t, n, r, i) {
        t.result.tn != undefined && Gns.nowGns('你正在收听 <a href="#" class="trg">' + t.result.tn + "</a> 的相似歌曲"), Search.total = t.result.total, t.result.cmbt != undefined ? (Search.keywords = t.result.cmbt, e = t.result.cmbt, Search.setSchVal(Search.keywords)) : Search.keywords = e, r == 1 && (Search.tickerSendTimeout != 0 && clearTimeout(Search.tickerSendTimeout), e.indexOf("@") == -1 && (Search.tickerSendTimeout = setTimeout(function() {
            $.ajax({url: Core.API_VER + "/ticker/post_cmbt",data: {uid: Signup.userDetail.id,content: e,tid: t.result.tid,usedCmbt: i},success: function(e) {
                    e.result != undefined && e.result.rd != undefined && (pHtml = Signup.userDetail.nick + '，试试 <a class="gnsRdFlyEvent trg" href="#">' + e.result.rd + "</a> 的组合", Gns.openGnsArr[Gns.openGnsArr.length] = new Array("rcmd", pHtml), Gns.showGns())
                }})
        }, 1e4))), n == 0 && (Player.music = new Array);
        var s = n;
        for (var o = 0; o < t.result.items.length; ++o) {
            if (n == 1 && t.result.items[o].tid == Player.music[0].tid)
                continue;
            Search.setMusic(t.result.items[o], s), s += 1
        }
        Search.ps = Player.music.length, n == 0 && (Player.pos = 0, Player.setVolumeDown("play", 0), Player.setPlayerUI(), Player.closeGns()), Main.setNowListen("当前收听：" + Search.keywords)
    },setMusic: function(e, t) {
        Player.music[t] = new Object, Player.music[t].fid = e.fid, Player.music[t].mid = e.mid, Player.music[t].tid = e.tid, Player.music[t].n = e.n, Player.music[t].d = e.d, Player.music[t].an = e.an, Player.music[t].atn = e.atn, e.d < 1 && console.error("duration异常(" + e.d + "), name->" + e.n + ", fid->" + e.tid)
    },getMusic: function(e) {
        var t = new Object;
        return t.fid = e.fid, t.mid = e.mid, t.tid = e.tid, t.n = e.n, t.d = e.d, t.an = e.an, t.atn = e.atn, t
    },dataUpdate: function(e, t) {
        if (e == Search.updateKeywords && t == undefined)
            return;
        Search.updateKeywords = e;
        var n = "";
        e == "" ? n = Core.API_VER + "/badge/fetch_pop" : n = Core.API_VER + "/search/ling/auto";
        if (e[0] == "%")
            return;
        $("#chartsArrLeft").length == 1 && ($("#instSchCttCtn").html(""), $("#instSchChange").remove()), $.ajax({url: n,data: {q: e,ps: Search.maxCount,st: 0,u: Signup.userDetail.id},success: function(t) {
                if (!t.success || Search.nowKeywords != e && e != "")
                    return;
                Search.count = t.result.length;
                if (Search.count == 0) {
                    Search.ntlgUpdate(e);
                    return
                }
                $("#ntlgInstCtn").hide();
                var n = "", r, i = $.makeArray($("#instSchCttCtn>.tipCtn")), s = t.result.length, o = s < i.length ? i.length : s;
                for (r = 0; r < o; ++r) {
                    if (r >= s) {
                        $(i[r]).remove();
                        continue
                    }
                    var u = t.result[r].fid;
                    u == null && (u = "");
                    var a = t.result[r].t, f = t.result[r].n, l = "", c = f;
                    a == "friend" ? (c = "@" + f, u == "" ? l = IMG_URL + "/defaults/avatar/100" + Retina.suffix + ".jpg" : u.indexOf("http://") != 0 ? l = $.id2url(u, "UM", "avatar") : l = u) : a == "artist" ? l = $.id2url(u, "SM", "artist") : l = Core.badgesUrl(u, 100);
                    var h = "";
                    r < i.length ? ($(i[r]).data("fid", u), $(i[r]).children().children("img").remove(), $(i[r]).children().children(".name").text(f), $(i[r]).children().children(".name").data("text", c), h = $(i[r])) : (n = '<a data-fid="' + u + '" class="tipCtn searchflyCtn" href="#">' + '<div class="tipCtt">' + '<div class="tipMask"></div>' + '<p class="name" data-text="' + c + '">' + f + "</p>" + "</div>" + "</a>", $("#instSchCttCtn").append(n), h = $("#instSchCttCtn").children().last()), h.children().children(".tipMask").after('<img class="tipPht" src="" />'), h = h.children().children("img"), a == "friend" && u.indexOf("http://") == 0 ? Core.imgLoad(h, "", l, 100, "searchTip") : h.attr({src: l,width: "100px",height: "100px"})
                }
                e == "" ? $("#instSchChange").length == 0 && $("#instSchCtn").append('<a href="#" id="instSchChange" class="instSchChng">换一批看看</a>') : $("#instSchChange").remove(), Search.resize()
            }})
    },ntlgUpdate: function(e) {
        $("#ntlgInstCtn").css("right", Core.bodyWidth - $("#schBxCtn").offset().left - 340 - 25 + "px"), Search.ntlgSt = 0, $("#instSchCttCtn").html(""), $.ajax({url: Core.API_VER + "/search/ling/ntlg_auto",data: {q: e,ps: 100,st: 0,u: Signup.userDetail.id},success: function(t) {
                if (!t.success || Interface.Current != Interface.SEARCH || Search.nowKeywords != e)
                    return;
                var n = t.result;
                if (n.length == 0) {
                    $("#ntlgInstCtn").hide();
                    return
                }
                var r = function() {
                    var e = "", t = !1, i = Search.ntlgColCount;
                    n.length > Search.ntlgColCount && (t = !0, --i);
                    for (var s = Search.ntlgSt; s < Search.ntlgSt + i; ) {
                        e += '<p class="ntlg">' + n[s].n + "</p>", ++s;
                        if (n[s] == undefined) {
                            t = !1;
                            break
                        }
                        if (s != i || !!t)
                            e += '<span class="splt"></span>'
                    }
                    Search.ntlgSt += i, t && (e += '<a class="ntlg more" href="#"><i class="icon"></i>加载更多</a>'), $("#ntlgInstCtn").html(e).show(), $("#ntlgInstCtn>.ntlg").click(function() {
                        return $(this).hasClass("more") ? r() : (Search.flyInput($(this).text(), !0), $("#ntlgInstCtn").hide(), Search.dataUpdate("")), !1
                    })
                };
                r()
            }})
    },flyObj: function(e, t) {
        var n = e.offset().left + e.width() / 2 - 25, r = e.offset().top + e.height() / 2 - 25;
        $("body").append('<img id="flySearchTip" src="' + Core.badgesUrl(t, 50) + '" class="ufo hide" style="left:' + n + "px; top:" + r + 'px;"/>'), n = $(".menuCtn").offset().left + 10, r = $(".menuCtn").offset().top + 40, $("#flySearchTip").show().animate({left: n + "px",top: r - 30 + "px"}, 1e3, function() {
            $(this).remove()
        })
    },fly: function(e, t, n, r, i) {
        if (Search.isFly)
            return !1;
        Flw.isFlw && Flw.toid != "" && $("#clsFlwLstn").click(), Search.isFly = !0, $("#schBxCtn").width() > 100 && (Search.oldStart = $("#schFld").val().length);
        var s = e.offset().left, o = e.offset().top;
        n == "随便听听" && (s -= e.width(), o -= e.height());
        var u = "";
        n[0] == "@" ? t == "" ? u = IMG_URL + "/defaults/avatar/50" + Retina.suffix + ".jpg" : t.indexOf("http://") != 0 ? u = $.id2url(t, "UT", "avatar") : u = t : t.indexOf(".") >= 0 ? u = $.id2url(t, "ST", "artist") : u = Core.badgesUrl(t, 50), $("body").append('<img id="flySearchTip" src="' + u + '" class="ufo hide" data-span="' + n + '" style="left:' + s + "px; top:" + o + 'px;"/>');
        var a = $("#schFld").offset().left, f = Core.bodyHeight - 55, l = $("#schFld").val(), c = Search.getStrWidth(l);
        c > $("#schFld").width() - 50 ? a += $("#schFld").width() / 2 : a += Search.getStrWidth(l.substring(0, Search.oldStart)), $("#schFld").offset().left == 0 && (a = $("#schBtn").offset().left + 10);
        var h = function(e) {
            var n = "";
            t == "guide" ? (n = $(this).data("span"), $(this).remove()) : (n = e.data("span"), e.remove()), r == 1 ? Search.flyInput(n, !0) : Search.setSchVal(n + " + "), i == 1 && ($(document).click(), Search.searchBtnClick()), Search.isFly = !1
        };
        return t == "guide" ? $("#flySearchTip").show().animate({left: a + "px",top: f - 30 + "px"}, 800, h) : $("#flySearchTip").show().animate({left: a + "px",top: f + "px"}, 800, function() {
            $("#flySearchTip").animate({top: f - 50 + "px"}, 400, function() {
                h($(this))
            })
        }), !1
    },flyInput: function(e, t, n) {
        n == undefined && (n = "+");
        var r = Core.inputConver($("#schFld").val()).replace(/&amp;/g, "&"), i, s = !1;
        for (var o = Search.oldStart; o != 0; --o)
            if (Symbol[r[o]] != undefined || o == 0) {
                i = r.substring(0, o + 1) + e, t && (Symbol[r[o]] != undefined ? i += " " + n + " " : i += " + "), s = !0;
                break
            }
        s || (i = e, t && (n != undefined ? i += " " + n + " " : i += " + "));
        for (var o = Search.oldStart; o < r.length; ++o)
            if (Symbol[r[o]] != undefined) {
                i += r.substring(o);
                break
            }
        r = i, r = Search.filterStr(r), t && (r = Search.deleteRepeat(r)), Search.setSchVal(r);
        var u = r.indexOf(e) + e.length;
        t && (u += 3), $("#schFld").setCursorPosition(u), Search.oldStart = u, $("#schFld").focus()
    },removeLastSymbol: function(e) {
        var t = e;
        for (var n = e.length - 1; n >= 0; --n) {
            if (e[n] != " " && Symbol[e[n]] == undefined)
                break;
            t = e.substring(0, n)
        }
        return t
    },filterStr: function(e) {
        var t = 1;
        for (var n = 0; n < e.length; ++n) {
            if (t == 1) {
                if (Symbol[e[n]] != undefined || e[n] == " ") {
                    e = e.substring(0, n) + e.substring(n + 1), --n;
                    continue
                }
                t = 0
            }
            if (Symbol[e[n]] != undefined) {
                var r = e[n];
                e[n - 1] != " " || e[n + 1] != " " ? e[n + 1] == " " ? (e = e.substring(0, n) + " " + r + e.substring(n + 1), n += 1) : e[n - 1] == " " ? (e = e.substring(0, n) + r + " " + e.substring(n + 1), n += 1) : (e = e.substring(0, n) + " " + r + " " + e.substring(n + 1), n += 2) : ++n, t = 1
            }
        }
        return e
    },deleteRepeat: function(e) {
        var t = e.split(/ \- | \+ /g);
        for (var n = 0; n < t.length - 1; ++n)
            for (var r = n + 1; r < t.length; ++r)
                if (t[n] == t[r]) {
                    var e = "";
                    for (var i = 0; i < t.length; ++i) {
                        if (i == r)
                            continue;
                        e += t[i], i != t.length - 1 && (e += " + ")
                    }
                    return e
                }
        return e
    },getStrWidth: function(e) {
        $("body").append("<div class='temp-tip'>" + e + "</div>");
        var t = $(".temp-tip").width();
        return $(".temp-tip").remove(), t
    },inputKeydown: function(e) {
        if (e.keyCode == 38 || e.keyCode == 40)
            return !1
    },inputKeyup: function(e) {
        var t = $(this).val(), n = "";
        if (t.length == 0 && Search.autoKeywords == "")
            return;
        var r = 1;
        t == Search.autoKeywords && (r = 0);
        if (e.keyCode == 38 || e.keyCode == 40 || e.keyCode == 13)
            r = 0;
        var i = t.substring(Search.oldStart - 1, Search.oldStart), s = "";
        $(".tipCtn").length == 1 && (s = $(".tipCtn>.tipCtt>.name").data("text"));
        if (r) {
            Search.autoKeywords = t;
            var o = new Array("+", "-", "&"), u = -1, a = -1;
            for (var f = 0; f < o.length; ++f) {
                var a = t.lastIndexOf(o[f]);
                a > u && (u = a)
            }
            n = t.substring(u + 1), n = $.trim(n), Search.nowKeywords = n, Search.dataUpdate(n)
        }
        if (Symbol[i] != undefined) {
            $("#atTipsCtn").hide(), Search.updateKeywords = "at", Search.dataUpdate("");
            if (s != "" && e.keyCode != 37 && e.keyCode != 39) {
                $(this).val($(this).val().substring(0, $(this).val().length - 1)), Search.flyInput(s, !0, Symbol[i]);
                return
            }
            if (Search.oldStart == 1) {
                $(this).val("");
                return
            }
            var l = t.substring(Search.oldStart - 4, Search.oldStart - 1);
            if (Symbol[l] != undefined && Symbol[l] != " " + Symbol[i] + " ") {
                var c = t.substring(0, Search.oldStart - 4) + " " + Symbol[i] + " ";
                $(this).val(c);
                return
            }
            if (Symbol[l] != undefined && Symbol[l] == " " + Symbol[i] + " ") {
                var c = t.substring(0, Search.oldStart - 1);
                $(this).val(c);
                return
            }
        }
        if (e.keyCode == 37) {
            if (Symbol[i] != undefined) {
                var h = 0;
                for (var f = 1; ; ++f) {
                    if (Search.oldStart - f == 0)
                        break;
                    var p = t.substring(Search.oldStart - f - 1, Search.oldStart - f);
                    if (Symbol[p]) {
                        $(this).setCursorPosition(Search.oldStart - f + 1), h = 1;
                        break
                    }
                }
                h || $(this).setCursorPosition(0)
            }
            return
        }
        if (e.keyCode == 39) {
            var l = t.substring(Search.oldStart - 4, Search.oldStart - 1);
            if (Search.oldStart == 1 || Symbol[l] != undefined)
                for (var f = 1; ; ++f) {
                    if (Search.oldStart + f + 1 >= t.length)
                        break;
                    var d = t.substring(Search.oldStart + f, Search.oldStart + f + 1);
                    if (Symbol[d] != undefined) {
                        $(this).setCursorPosition(Search.oldStart + f + 2);
                        break
                    }
                }
            else
                Search.oldStart == $("#schFld").val().length && s != "" && (Search.flyInput(s, !0), Search.dataUpdate(""));
            return
        }
        if (e.keyCode == 38) {
            if ($("#atTipsCtn").isDisplay()) {
                var v = $.makeArray($("#atTipsCtn").children());
                for (var f = 0; f < v.length; ++f)
                    if ($(v[f]).hasClass("selected")) {
                        $(v[f]).removeClass("selected"), f == 0 ? ($(v[v.length - 1]).addClass("selected"), Search.flyInput(Search.afterKeywords + "@" + $(v[v.length - 1]).children(".atName").children().text(), !1)) : ($(v[f - 1]).addClass("selected"), Search.flyInput(Search.afterKeywords + "@" + $(v[f - 1]).children(".atName").children().text(), !1));
                        return
                    }
            }
            return
        }
        if (e.keyCode == 40) {
            if ($("#atTipsCtn").isDisplay()) {
                var v = $.makeArray($("#atTipsCtn").children());
                for (var f = 0; f < v.length; ++f)
                    if ($(v[f]).hasClass("selected")) {
                        $(v[f]).removeClass("selected"), f == v.length - 1 ? ($(v[0]).addClass("selected"), Search.flyInput(Search.afterKeywords + "@" + $(v[0]).children(".atName").children().text(), !1)) : ($(v[f + 1]).addClass("selected"), Search.flyInput(Search.afterKeywords + "@" + $(v[f + 1]).children(".atName").children().text(), !1));
                        return
                    }
            }
            return
        }
        if (e.keyCode == 8) {
            if (Symbol[i] != undefined) {
                var h = 0, m = t.substring(Search.oldStart);
                for (var f = 1; ; ++f) {
                    if (Search.oldStart - f == 0)
                        break;
                    var p = t.substring(Search.oldStart - f - 1, Search.oldStart - f);
                    if (Symbol[p] != undefined) {
                        var g = t.substring(0, Search.oldStart - f + 1);
                        $(this).val(g + m), $(this).setCursorPosition(g.length), h = 1;
                        break
                    }
                }
                h || ($(this).val(m), $(this).setCursorPosition(0))
            }
            return
        }
        if (e.keyCode == 13) {
            _gaq.push(["_trackEvent", "Search", "EntrSch", "UseKeyBoardToSearch"]), Search.searchBtnClick(), $(document).click();
            return
        }
        if (Symbol[i] != undefined) {
            var g = t.substring(0, Search.oldStart - 1) + " " + Symbol[i] + " ", m = t.substring(Search.oldStart);
            $(this).val(g + m), $(this).setCursorPosition(g.length)
        }
    },update: function(e) {
        return Search.oldStart = Core.getSelectionStart(e), !0
    },setSchVal: function(e) {
        $("#schFld").val(e), Search.setSchHint()
    },hide: function() {
        $("#instSchCttCtn, #ntlgInstCtn").html("").hide(), $("#instSchChange").remove(), $("#instSchCtn").hide(), $("#tbCtn").css("overflow", "hidden"), $("#flyAblum, #flySmlAblum").show(), $("#schCtn").mouseleave(), Core.playerCDShow(), Search.setSchHint()
    },resize: function(e) {
        var t = Core.bodyWidth - 80, n = Core.bodyHeight - 235, r = (Core.bodyHeight - 70) / 2;
        Search.ntlgColCount = parseInt(r / 50), Search.rowCount = parseInt(t / Search.TIP_WIDTH), Search.colCount = parseInt(n / Search.TIP_HEIGHT), Search.maxCount = Search.rowCount * Search.colCount;
        if (e != undefined)
            return;
        $("#languageSearchCtn").remove(), Search.rowCount > Search.count && (Search.rowCount = Search.count);
        if (Search.rowCount == 0) {
            Search.colCount = 0, $("#instSchCttCtn").html('<p id="languageSearchCtn" class="ntLngTip">进行自然语言搜索...</p>'), $("#instSchCtn").css({width: "160px",height: "30px","margin-left": "-80px","margin-top": "-50px"}), $("#instSchCttCtn").css({width: "160px",height: "30px"});
            return
        }
        Search.colCount = Search.count / Search.rowCount + "";
        var i = Search.count / Search.rowCount + "";
        i.indexOf(".") >= 0 ? i = parseInt(i) + 1 : i = parseInt(i), Search.maxCount >= Search.rowCount * i ? Search.colCount = i : Search.colCount = Search.maxCount / Search.rowCount, Search.superWidth = parseInt((t - Search.TIP_WIDTH * Search.rowCount) / (Search.rowCount * 2)), Search.superHeight = parseInt((n - Search.TIP_HEIGHT * Search.colCount) / (Search.colCount * 2)), Search.superWidth < 0 && (Search.superWidth = 0), Search.superHeight < 0 && (Search.superHeight = 0);
        var s = Search.TIP_WIDTH * Search.rowCount + Search.superWidth * Search.rowCount, o = Search.TIP_HEIGHT * Search.colCount + Search.superHeight * Search.colCount;
        $("#instSchCtn").css({width: s + "px",height: o + "px","margin-left": -(s / 2) + "px","margin-top": -o / 2 - 50 + "px"}), $("#instSchCttCtn").css({width: s + "px",height: o + "px"}), $("#instSchChange").css({left: ($("#instSchCtn").width() - 70) / 2,top: $("#instSchCtn").height() + 30}), $("#instSchCttCtn>.tipCtn").css({width: Search.TIP_WIDTH + Search.superWidth + "px",height: Search.TIP_HEIGHT + Search.superHeight + "px"})
    }}, Jing.Player = {music: new Array,player: null,msgTone: null,pos: -1,heardTmo: 0,listenTmo: 0,isPlay: !1,isControl: !0,currentTime: 0,actualCurrentTime: 0,volume: .8,isNextResponse: !0,isVolumeDown: !1,seconds: 0,timeDot: undefined,isLoveAnimate: !1,isReady: !1,isMsgToneReady: !1,cdRotate: "",isPreload: !0,preloadMscList: null,isNextCount: 0,isNextTmo: 0,loveCount: 0,hateCount: 0,ipadInit: $("html").hasClass("ipad"),vlmHideTmo: 0,tid: 0,PLAYER_TYPE: "html, flash",msgTongType: "msg",switchSong: 0,isNetPause: !1,hbr: !1,isHalf: !1,span: null,errorCount: 0,errorNextCount: 0,MIN_VLM: .05,sp: "CC",delayCount: 0,init: function() {
        Player.autoPause = Core.getCookie("jing.autoPause"), Player.cdRotate = Core.opera || Core.ie69;
        var e = navigator.platform == "Win32" || navigator.platform == "Windows", t = navigator.platform == "Linux", n = isWin2000 = isWinXP = !1, r = navigator.userAgent;
        e || t ? swfobject.ua.pv[0] ? Player.PLAYER_TYPE = "flash" : Player.PLAYER_TYPE = "html, flash" : Player.PLAYER_TYPE = "html, flash";
        if (Core.ipad || !Core.webkit)
            Player.PLAYER_TYPE = "html, flash";
        Core.getCookie("jing.htmlPlayer") == "true" && (Player.PLAYER_TYPE = "html"), Player.player = $("#playerCore"), Player.msgTone = $("#msgTone"), $(document).on("click", ".timeDotEvent", function() {
            Player.addLoading(), Player.playSeconds(parseInt($(this).attr("id").replace("timeDot", "")) + 2)
        }), $(document).on("click", ".knowEvent", function() {
            var e = $(this).data("cookieid");
            e != undefined && e != "" && e != null && Core.setCookie(e, "true"), Gns.openGnsArr = new Array, Gns.empty(!0)
        }), $(document).on("click", ".recmdSearch", function() {
            $(this).hasClass("ok") && ($("#schFld").val($(this).data("cmbt")), $("#schBtn").click()), Gns.empty(!0)
        }), Player.msgTone.jPlayer({ready: function() {
                Player.msgTone.jPlayer("volume", "1"), Player.isMsgToneReady = !0
            },timeupdate: function(e) {
                var t = e.jPlayer.status.duration, n = e.jPlayer.status.currentTime;
                t - n < .5 && n > 0 && t > 0 && Player.msgTongType != "msg" && Player.pauseMsgTone()
            },swfPath: "http://player.jing.fm/player23.swf",solution: Player.PLAYER_TYPE,supplied: "m4a"}), Player.player.jPlayer({ready: function(e) {
                Player.isReady = !0
            },timeupdate: function(e) {
                Main.islog && console.log("---->>>>>> insert timeupdate <<<<<<<------");
                if (Player.music[Player.pos] == undefined)
                    return;
                var t = e.jPlayer.status.currentTime, n = Player.music[Player.pos].d;
                if (n == 0 || n == null || n == "" || isNaN(n) || n == undefined || n == "undefined")
                    n = e.jPlayer.status.duration;
                if (n == 0 || n == null || n == "" || isNaN(n) || n == undefined || n == "undefined")
                    n = 400;
                var r = -1;
                Player.player.children("audio")[0] != undefined && Player.player.children("audio")[0].buffered.length > 0 && (r = Player.player.children("audio")[0].buffered.end(0) - Player.player.children("audio")[0].buffered.start(0));
                if (Player.autoPause != "true" && !Search.isSearch && Player.switchSong == 0 && t > 2 && Player.isNextResponse && t + Player.seconds < n - 3 && $("#playCtl").hasClass("pause") && (t == Player.statusCurrentTime || r != -1 && r - t < 1)) {
                    Signup.userDetail.sts.hbr == "true" ? Core.getCookie("lowKnow") == "true" ? Gns.nowGns("你的网速很不给力，歌曲正在辛苦加载中，缓冲一会再点播放。", Gns.NOTIFIER) : Gns.nowGns('你的网速很不给力，歌曲正在辛苦加载中，缓冲一会再点播放。尝试使用低品质音乐，<a href="#" class="trg gnsStsDsply">设置</a>。<a href="#" class="trg knowEvent" data-cookieid="lowKnow">不再提醒</a>', Gns.NOTIFIER, "你的网速很不给力，歌曲正在辛苦加载中，缓冲一会再点播放。尝试使用低品质音乐") : Gns.nowGns("你的网络实在有点慢，低品质音乐也跑不动，耐心等待吧。", Gns.NOTIFIER), ++Player.delayCount, Player.playCtl(), Player.isNetPause = !0;
                    if (r != -1)
                        var i = setInterval(function() {
                            if (Player.isNetPause) {
                                var e = Player.player.children("audio")[0].buffered.end(0) - Player.player.children("audio")[0].buffered.start(0);
                                e - t > 5 && ($("#tstInShow").text().indexOf("你的网速很不给力，歌曲正在辛苦加载中") >= 0 && ($(".knowEvent").length > 0 ? $(".knowEvent").click() : Gns.closeGns()), Player.playCtl(), clearTimeout(i))
                            } else
                                clearTimeout(i)
                        }, 1e3);
                    return
                }
                Player.statusCurrentTime = t;
                if (t > .5 && t < 2.5 && Player.isNextResponse && $("#playCtl").hasClass("loading")) {
                    var s = (new Date).getTime() - Player.loadingTime;
                    s = s / 1e3 - t, Main.islog && console.warn("loadingTime--->" + s), Main.islog && Player.player.children("audio")[0] != undefined && console.warn("cacheTime--->" + (Player.player.children("audio")[0].buffered.end(0) - Player.player.children("audio")[0].buffered.start(0))), $("#playCtl").removeClass("loading"), $("#mscPlr").data("mouse") == "false" && $("#mscPlrMask").mouseleave(), Player.spin.data().spinner.stop(), Player.spin = null, Player.startRotate()
                }
                Main.screenId == "abt" && Signup.userDetail.id == Abt.abtObj.uid && Player.isPlay && Abt.startPt(), t = e.jPlayer.status.currentTime + parseInt(Player.seconds);
                if (Player.currentTime != parseInt(t) && Gns.timeDot != undefined && Player.currentTime > 5 && Gns.timeDot["timeDot" + Player.currentTime] != undefined) {
                    var o = Gns.timeDot, u = o["timeDot" + Player.currentTime][1];
                    o["timeDot" + Player.currentTime][1] = u.substring(0, u.indexOf("在")) + "正在演奏", Gns.openGnsArr[Gns.openGnsArr.length] = o["timeDot" + Player.currentTime], Gns.showGns()
                }
                Player.currentTime = parseInt(t), Player.currentTime > n / 2 && !Player.isHalf && (Player.isHalf = !0, $.ajax({url: Core.API_VER + "/music/post_half",data: {uid: Signup.userDetail.id,tid: Player.music[Player.pos].tid}}));
                var a = t / n * 100;
                a = Core.bodyWidth / 100 * a, $("#prgrsCtn>.crt").css({width: a + "px"});
                var f = parseInt(t / 60), l = parseInt(t % 60);
                f < 10 && (f = "0" + f), l < 10 && (l = "0" + l), $("#timeTps>p").text(f + ":" + l);
                var c = 32;
                a > Core.bodyWidth - 35 ? (c += a - (Core.bodyWidth - 35), c > 57 && (c = 57), a = Core.bodyWidth - 35) : a < 36 && (c = a, c < 3 && (c = 3), a = 36), c == 0 ? $("#timeTps>.tpsAr").css("left", "50%") : $("#timeTps>.tpsAr").css("left", c + "px"), $("#timeTps").css({top: "15px",left: a - 30 + "px"}), Lrc.show(t), Main.islog && console.log(n - t), n - t < .5 && t > 0 && !Player.isVolumeDown && Player.next(0);
                if (n - t < 60 && Player.isPreload && Player.music.length > Player.pos + 1) {
                    Player.isPreload = !1;
                    var h = new Image;
                    h.src = $.id2url(Player.music[Player.pos + 1].fid, "AM", "album")
                }
                if (t > 11 && t < 12) {
                    var h = new Image;
                    h.src = $.id2url(Player.music[Player.pos].fid, "AT", "album")
                }
            },error: function(e) {
                if (e.jPlayer.error.type != "e_flash") {
                    console.log("media error-->" + e.jPlayer.error.type + ", " + $.id2mediaUrl(Player.music[Player.pos].mid, "audio") + "?start=" + seconds);
                    var t = Player.errorCount;
                    if (t == 2) {
                        ++Player.errorNextCount;
                        if (Player.errorNextCount >= 4)
                            return;
                        Player.nextTmo = setTimeout(function() {
                            $("#playerNext").click()
                        }, 1e3);
                        var n = new Object;
                        n.uid = Signup.userDetail.id + "", n.c = "703", n.p = "web/" + Core.VERSION, n.t = (new Date).toGMTString() + "", n.ext = new Object, n.ext.tid = Player.music[Player.pos].tid, n.ext.d = e.jPlayer.error.type;
                        var r = new Array;
                        r[0] = n, $.ajax({type: "POST",url: "/feedbacks/post_error",data: JSON.stringify(r)})
                    } else
                        Player.sp = "WS", Player.play(), Player.sp = "CC", Player.errorCount = t + 1
                }
            },volume: Player.volume,swfPath: "http://player.jing.fm/player23.swf",solution: Player.PLAYER_TYPE,wmode: "window",supplied: "m4a"}), setTimeout(function() {
            Player.savePlayingData(!0)
        }, 1e4)
    },savePlayingData: function(e) {
        if (e == 1) {
            var t = 0;
            Player.currentTime < 30 ? t = 10 : t = 30, setTimeout(function() {
                Player.savePlayingData(!0)
            }, 1e3 * t)
        }
        if (Signup.userDetail.newbie != 0 || InsertPlay.isPlay)
            return;
        if (Player.isPlay && Player.music[Player.pos] != undefined) {
            var n = Search.keywords, r = Player.currentTime, i = Player.music[Player.pos].tid, s = Player.music[Player.pos].atn;
            $.ajax({url: Core.API_VER + "/click/playdata/post",data: {uid: Signup.userDetail.id,cmbt: n,tid: i,ct: r}}), Core.setCookie("jing.volume", Player.volume)
        }
        Player.music.length == 0 && $.ajax({url: Core.API_VER + "/click/playdata/post",data: {uid: Signup.userDetail.id,isclear: !0}})
    },load: function() {
        var e = "";
        Player.cdRotate ? e = '<div id="rotateCtn" class="cv"><div id="rotateFlash"></div></div>' : e = '<div id="rotateCD" class="cv"></div>';
        var t = "dspr";
        if ($("html").hasClass("ie6") || $("html").hasClass("ie7") || $("html").hasClass("ie8"))
            t = "";
        $("#mdCtn").prepend('<div id="prgrsCtn" class="prgrsCtn ' + t + '" style="height: 15px; opacity: 1; ">' + '<div id="timeTps" class="tps time hide">' + '<div class="tpsAr"></div>' + '<p class="ctt serif"></p>' + "</div>" + '<span class="prgrs"></span>' + '<span class="prgrs crt" style="width: 1px; "></span>' + "</div>" + '<div id="mdlHr" class="mdlHr"></div>' + '<div id="mscPlrCtn" class="mscPlrCtn">' + '<div id="mscPlrMask" class="mscPlrMask">' + '<div id="playCtl" class="playCtlCtn pause" style="opacity: 1; ">' + '<a href="#" class="playCtl"></a>' + "</div>" + "</div>" + '<div id="mscPlr" class="mscPlr">' + e + '<p class="tit">Jing 已经为你准备好，搜索你想听的</p>' + "</div>" + '<div class="mscPlrBtnCtn">' + '<div data-tps="喜欢" class="plrBtnBg love">' + '<a id="playerLove" href="#" class="plrBtn lwRt overlay"></a>' + "</div>" + '<div data-tps="讨厌" class="plrBtnBg hate">' + '<a id="playerHate" href="#" class="plrBtn lwRt overlay"></a>' + "</div>" + '<div data-tps="单曲循环" class="plrBtnBg rptOne">' + '<a id="playerRptOne" href="#" class="plrBtn lwRt overlay"></a>' + "</div>" + '<div data-tps="换歌" class="plrBtnBg next">' + '<a id="playerNext" href="#" class="plrBtn lwRt overlay"></a>' + "</div>" + "</div>" + "</div>").show(), $("#vlmCtrl").mousemove(function(e) {
            e = e || window.event;
            if (e.pageX || e.pageY)
                Player.x = e.pageX, Player.y = e.pageY;
            Player.x = e.clientX + document.body.scrollLeft - document.body.clientLeft, Player.y = e.clientY + document.body.scrollTop - document.body.clientTop
        }), Core.ie68 || ($("#vlmCtrl").css("opacity", "0.2"), $(".plyrBtns").css("opacity", "0.5")), $("#vlmCtrl").show().mouseenter(function() {
            clearTimeout(Player.vlmHideTmo), Core.ie68 || $(this).css("opacity", "1")
        }).mouseleave(function() {
            Core.ie68 || $(this).css("opacity", "0.2")
        }), $(".vlmCtn").click(function() {
            if (Flw.isFlw && !Flw.isServer)
                Gns.nowGns("你正在跟听状态中，将跟对方音量同步，不能自己调节");
            else {
                var e = Player.x - $(".vlmSlider").offset().left;
                e < 2.25 && (e = 2.25), e > 45 && (e = 45), $(".vlmSlider").css("width", e + "px"), Player.volume = e / 45, Player.player.jPlayer("volume", Player.volume)
            }
        }), $(".sldr").mousedown(function() {
            return Flw.isFlw && !Flw.isServer ? Gns.nowGns("你正在跟听状态中，将跟对方音量同步，不能自己调节") : (document.onmousemove = function(e) {
                e = e || window.event;
                var t, n;
                if (e.pageX || e.pageY)
                    t = e.pageX, n = e.pageY;
                t = e.clientX + document.body.scrollLeft - document.body.clientLeft, n = e.clientY + document.body.scrollTop - document.body.clientTop;
                var r = t - $(".vlmSlider").offset().left;
                return r < 2.25 && (r = 2.25), r > 45 && (r = 45), $(".vlmSlider").css("width", r + "px"), Player.volume = r / 45, Player.player.jPlayer("volume", Player.volume), !1
            }, document.onmouseup = function(e) {
                document.onmousemove = null, document.onmouseup = null
            }), !1
        });
        var n = Number(Core.getCookie("jing.volume"));
        if (n == null || isNaN(n) || n == "")
            n = 1;
        Player.setVolume(n, !1), $("#mscPlrMask").mouseenter(function() {
            $("#mscPlr").data("mouse", "true"), Core.ie68 ? $("#playCtl").show() : $("#playCtl").css("opacity", "0").css({opacity: "1"})
        }).mouseleave(function() {
            $("#mscPlr").data("mouse", "false");
            if ($("#playCtl").hasClass("loading") || $("#playCtl").hasClass("play"))
                return;
            Core.ie68 ? $("#playCtl").hide() : $("#playCtl").css({opacity: "0"})
        }), $("#mscPlrMask").mouseleave(), $("#playCtl").click(function() {
            if (Flw.isFlw && !Flw.isServer) {
                Gns.nowGns("你在跟听中，不能播放暂停");
                return
            }
            Player.playCtl(undefined)
        }), $("#playerNext").click(function() {
            if (!Player.isNextResponse)
                return;
            setTimeout(function() {
                Player.isNextResponse = !0
            }, 1e3), Player.isNextResponse = !1;
            if (Flw.isFlw && !Flw.isServer) {
                Gns.nowGns("你在跟听中，不能切换歌曲");
                return
            }
            $("#playerRptOne").hasClass("selected") && $("#playerRptOne").click();
            var e = $("#schFld").val();
            e = Search.filterStr(e), e = Search.removeLastSymbol(e), e == Search.keywords || e == "" ? (e == "" && Search.setSchVal(Search.keywords), Player.currentTime < 10 && (clearTimeout(Player.isNextTmo), Player.isNextTmo = setTimeout(function() {
                Player.isNextCount = 0
            }, 15e3), ++Player.isNextCount), Player.postNext(), clearTimeout(Gns.gnsRcmdTmo), Gns.gnsRcmdTmo = setInterval(Gns.rcmd, 6e5), Player.next(400), Player.isNextCount == 3 && (Player.isNextCount = 0, setTimeout(function() {
                Gns.rcmd()
            }, 500)), Player.music[Player.pos] != undefined && _gaq.push(["_trackEvent", "Player", "Next", Player.music[Player.pos].tid])) : (_gaq.push(["_trackEvent", "Search", "NxtSch", "NextToSearch"]), Search.searchBtnClick())
        }), $(document).on("click", "#clsRptOne", function() {
            $("#playerRptOne").click()
        }), $("#playerRptOne").click(function() {
            if (Flw.isFlw && Flw.toid != "") {
                Gns.nowGns("你正在跟听状态中，不能够单曲循环");
                return
            }
            $(this).hasClass("selected") ? ($(this).removeClass("selected"), $("#nowListen").html($("#nowListen").data("html"))) : (_gaq.push(["_trackEvent", "Player", "RptOne", Player.music[Player.pos].tid]), $("#nowListen").data("html", $("#nowListen").html()), $("#nowListen").html("单曲循环：" + Player.music[Player.pos].n + ' | <a id="closeRptOne" href="#">退出</a>'), $(this).addClass("selected"), $("#closeRptOne").click(function() {
                $("#playerRptOne").click()
            }))
        });
        var r = {wmode: "opaque"}, i = {}, s = {};
        swfobject.embedSWF("http://jing.fm/assets/vendor/rt.swf", "rotateFlash", "300", "300", "9.0.0", "", s, r, i), $("#rotateFlash").css("border-radius", "100%"), Player.resize(), $("#mscPlrCtn").animate({opacity: 1}, 500), $("#prgrsCtn").animate({opacity: 1}, 2e3), $("#playerHate").click(Player.hateClick), $("#playerLove").click(Player.loveClick);
        var o;
        $("#prgrsCtn").mouseenter(function() {
            if (Player.currentTime == 0)
                return;
            o = setTimeout(function() {
                $("#timeTps").show()
            }, 300)
        }).mouseleave(function() {
            clearTimeout(o), $("#timeTps").hide()
        }), Player.cdRotate || Player.ready()
    },ready: function() {
        Player.cdRotate && Player.swfObj.showCover(IMG_URL + "/defaults/cover/300" + Retina.suffix + ".png");
        var e = Signup.userDetail.pld;
        if (e != null) {
            $("#schFld").val(e.cmbt), Main.setNowListen("当前收听：" + e.cmbt), Search.setSchHint(), Player.music = new Array, Search.setMusic(e, 0), Player.pos = 0;
            var t = function() {
                Player.isReady ? Player.ipadInit ? ($("#playCtl").removeClass("loading").addClass("play"), Player.spin.data().spinner.stop(), Player.spin = null, Player.setPlayerUI()) : (Player.player.jPlayer("volume", Player.volume), $("#playCtl").removeClass("play").addClass("pause"), Player.play(parseInt(e.ct))) : setTimeout(t, 300)
            };
            t(), Search.searchByKeywords(e.cmbt, 1, 0)
        }
        var n = $.trim($.query.get("jing"));
        n != "" && setTimeout(function() {
            Gns.nowGns("你想听推荐的搜索 [" + n + '] 吗？<a href="#" class="trg recmdSearch ok" data-cmbt="' + n + '">是</a> | <a href="#" class="trg recmdSearch no">否</a>', Gns.level1)
        }, 3e3)
    },playSeconds: function(e) {
        Player.seconds = e, Player.setVolumeDown("jump", 50)
    },setPlay: function(e, t, n) {
        n = parseInt(n), Player.errorCount = 0, clearTimeout(Player.switchSong), Player.switchSong = setTimeout(function() {
            Player.switchSong = 0
        }, 2e3), e == undefined && (e = 0), Flw.isServer && Flw.send("play", e), Player.seconds = e;
        if (Player.statusCurrentTime >= 10) {
            var r = parseInt(Player.statusCurrentTime);
            r > Player.music[Player.pos].d && (r = Player.music[Player.pos].d), $.ajax({url: Core.API_VER + "/click/playduration/post",data: {uid: Signup.userDetail.id,tid: Player.music[Player.pos].tid,d: r}})
        }
        var i = "";
        Signup.userDetail.sts.hbr == "true" ? i = "NO" : i = "MM";
        if (Core.ipad) {
            var s = $.id2mediaUrl(t, "audio") + "?start=" + e;
            Player.player.jPlayer("setMedia", {m4a: s}).jPlayer("play"), e < 1 ? Player.player.jPlayer("volume", Player.volume) : Player.setVolumeUp()
        } else
            $.ajax({url: Core.API_VER + "/media/song/surl",data: {mid: t,type: i,isp: Player.sp},success: function(n) {
                    if (!n.success || Player.music[Player.pos] != undefined && Player.music[Player.pos].mid != t)
                        return;
                    Player.player.jPlayer("setMedia", {m4a: n.result + "?start=" + e}).jPlayer("play"), e < 1 ? Player.player.jPlayer("volume", Player.volume) : Player.setVolumeUp()
                }});
        $("#mscPlrCtn").data({tid: n,mid: t}), Player.tid = n, Player.currentTime = 0, Player.isPlay = !0, Player.isControl = !1
    },setPlayerUI: function() {
        if (Player.music[Player.pos] == undefined)
            return;
        var e = $("#mscPlr>p").text(), t = $("#mscPlr>p").data("fid");
        InsertPlay.type == "jingRd" && ($("#jingRdN").text(Player.music[Player.pos].n), $("#jingRdAtn").text(Player.music[Player.pos].atn));
        if (e == Player.music[Player.pos].n && t == Player.music[Player.pos].fid) {
            $("#playCtl").hasClass("play") && Player.playCtl();
            return
        }
        var n = $.id2url(Player.music[Player.pos].fid, "AM", "album");
        $("#mscPlr>p").text(Player.music[Player.pos].n).append('<a href="#" id="shrIcon" class="shrIcon"></a>'), $("#mscPlr>p").data("fid", Player.music[Player.pos].fid), Core.ie68 || $("#shrIcon").css("opacity", "0.5"), $("#shrIcon").mouseenter(function() {
            Core.ie68 || $(this).css("opacity", "1")
        }).mouseleave(function() {
            Core.ie68 || $(this).css("opacity", "0.5")
        }).click(function() {
            Core.objLength(Signup.userDetail.snstokens) == 0 ? Gns.nowGns('你还没绑定任何SNS，暂时不能分享。<a href="#" class="trg snsBind">需要绑定吗？</a>') : Main.menuClick("shr")
        }), Player.cdRotate ? (Player.swfObj.showCover(n), $("#playCtl").hasClass("play") && Player.playCtl()) : $("#rotateCD").animate({opacity: "0"}, 300, function() {
            $("#rotateCD").css({"background-image": 'url("' + n + '")'}), $(this).animate({opacity: "1"}, 300, function() {
                $("#playCtl").hasClass("play") && !Player.ipadInit && Player.playCtl()
            })
        })
    },play: function(e) {
        Player.music.length == 0 && Player.setPlayerDefault();
        var t = Player.music[Player.pos];
        if (Player.music.length <= Player.pos || t == undefined)
            return;
        $("#playerLove, #playerHate, #jingRdLove").removeClass("selected"), Player.ipadInit ? (Player.addLoading(), Player.ipadInit = !1) : Player.setPlayerUI(), e == undefined && (e = 0), Player.setPlay(e, t.mid, t.tid), Player.isPreload = !0, e == 0 && (Player.isHalf = !1), Player.hbr ? (Player.hbr == "true" ? Gns.nowGns("已经切换至高品质音乐") : Player.hbr == "false" && Gns.nowGns("已经切换至低品质音乐"), $("#playCtl").removeClass("play").addClass("pause"), Player.addLoading()) : (Lrc.empty(), $.ajax({url: Core.API_VER + "/music/fetch_track_infos",data: {uid: Signup.userDetail.id,tid: t.tid},success: Gns.mscInfoHtml}), clearTimeout(Player.heardTmo), Player.heardTmo = setTimeout(function() {
            $.ajax({url: Core.API_VER + "/music/post_heard_song",data: {uid: Signup.userDetail.id,tid: t.tid}})
        }, t.d / 2 * 1e3), clearTimeout(Player.listenTmo), Player.listenTmo = setTimeout(function() {
            Core.nowIsReady && now.postListening(Signup.userDetail.id, t.tid)
        }, 5e3)), Player.hbr = !1
    },closeGns: function() {
        var e = new Array;
        for (var t = 0; t < Gns.openGnsArr.length; ++t)
            Gns.openGnsArr[t][0] == "now" && (e[e.length] = Gns.openGnsArr[t]);
        Gns.openGnsArr = e, Gns.openGnsArr.length == 0 && (clearTimeout(Gns.closeGnsTmo), Gns.closeGns())
    },next: function(e) {
        if (Search.isSearch)
            return;
        Player.closeGns(), e != 0 && (e = 400), $("#playCtl").removeClass("play").addClass("pause"), Player.addLoading(), Player.loadingTime = (new Date).getTime(), Player.isControl = !0, $("#playerRptOne").hasClass("selected") || ++Player.pos;
        if (InsertPlay.isPlay) {
            InsertPlay.next(e);
            return
        }
        Player.music.length <= Player.pos ? Player.loveCount > 0 ? $.ajax({url: Core.API_VER + "/search/fetch_rcmd_next",data: {tid: Player.music[Player.music.length - 1].tid,uid: Signup.userDetail.id,cmbt: Search.keywords},success: function(t) {
                Player.loveCount = 0;
                if (!t.success || t.result.items.length == 0) {
                    Search.st = Search.st + Search.ps, Search.total <= Search.st && (Search.st = 0), Search.searchByKeywords(Search.keywords, 0, Search.st);
                    return
                }
                for (var n = 0; n < t.result.items.length; ++n)
                    Search.setMusic(t.result.items[n], n);
                Player.pos = 0, Player.setVolumeDown("play", e)
            }}) : (Search.st = Search.st + Search.ps, Search.total <= Search.st && (Search.st = 0), Search.searchByKeywords(Search.keywords, 0, Search.st)) : Player.setVolumeDown("play", e)
    },playCtl: function(e) {
        if (Player.music.length != 0 && !$("#playCtl").hasClass("loading") || typeof e == "string") {
            Player.isNetPause = !1, clearTimeout(Player.switchSong), Player.switchSong = setTimeout(function() {
                Player.switchSong = 0
            }, 2e3), $("#tps").hide();
            if ($("#playCtl").hasClass("play") || e == "play")
                Player.msgTongType != "msg" && ($("#menuVo").removeClass("selected"), Player.pauseMsgTone()), Player.playing(), $(".favPlayCtlEvent.selected").removeClass("pause"), $("#mscPlr").data("mouse") == "false" && $("#mscPlrMask").mouseleave();
            else {
                Main.screenId == "abt" && Signup.userDetail.id == Abt.abtObj.uid && Abt.stopPt(), Player.pause(), $(".favPlayCtlEvent.selected").addClass("pause");
                var t = $("#mscPlr").data("mouse");
                $("#mscPlrMask").mouseenter(), $("#mscPlr").data("mouse", t)
            }
            return !1
        }
        return
    },playing: function() {
        if (Player.isVolumeDown)
            return;
        Player.isPlay = !0, Flw.isServer && Flw.send("playing");
        if (Player.ipadInit) {
            Player.player.jPlayer("volume", Player.volume), Player.play(parseInt(Signup.userDetail.pld.ct));
            return
        }
        Player.isDisconnect ? (Player.isDisconnect = !1, Player.setPlay(Player.currentTime, Player.music[Player.pos].mid, Player.music[Player.pos].tid), $("#playCtl").removeClass("play").addClass("pause"), Player.addLoading()) : (Player.setVolumeUp(400), Player.player.jPlayer("play"), $("#playCtl").removeClass("play").addClass("pause"), Player.startRotate())
    },pause: function() {
        Flw.isServer && Flw.send("pause"), Player.isPlay = !1, $("#playCtl").removeClass("pause").addClass("play"), Player.stopRotate(), Player.setVolumeDown("pause", 400), Flw.isFlw && Flw.toid != "" ? Player.player.jPlayer("pause") : Player.setVolumeDown("pause", 400)
    },pauseMsgTone: function() {
        Player.msgTongType = "msg", $(".vcOvr").removeClass("selected"), Player.msgTone.jPlayer("pause"), Player.isPlay || Player.playCtl()
    },setVolumeDown: function(e, t) {
        if (e == "msgTone" && Signup.userDetail.sts.rmdTone != "true")
            return;
        var n = Player.MIN_VLM;
        e == "msgTone" && (n = .2), Player.isVolumeDown = !0;
        var r = 0, i, s = function() {
            ++r;
            var s = Player.player.jPlayer("option", "volume") - .02;
            if (s <= n || r >= t) {
                Player.isVolumeDown = !1, Player.player.jPlayer("volume", n), clearInterval(i), e == "pause" ? Player.player.jPlayer("pause") : e == "play" ? ($("#playerLove").removeClass("selected"), InsertPlay.type == "flw" ? Player.play(InsertPlay.sec) : Player.play()) : e == "jump" ? Player.setPlay(Player.seconds, Player.music[Player.pos].mid, Player.music[Player.pos].tid) : e == "msgTone" && (Player.msgTone.jPlayer("setMedia", {m4a: "http://player.jing.fm/msgTone.m4a"}).jPlayer("play"), setTimeout(function() {
                    Player.setVolumeUp()
                }, 1e3));
                return
            }
            Player.player.jPlayer("volume", s)
        };
        Player.isPlay || Player.player.jPlayer("volume", "0"), t == 0 || t == undefined ? s() : i = setInterval(s, t / 50)
    },setVolumeUp: function(e) {
        e = 0;
        var t = 0, n;
        if (Player.isVolumeDown)
            return;
        ++t;
        var r = Player.player.jPlayer("option", "volume") + .02;
        if (r >= Player.volume || t > e) {
            Player.player.jPlayer("volume", Player.volume);
            return
        }
        Player.player.jPlayer("volume", r)
    },setVolume: function(e) {
        if (Player.volume == e)
            return;
        Player.player.jPlayer("volume", e), $(".vlmSlider").css("width", .45 * e * 100 + "px"), Player.volume = e
    },volumeUp: function() {
        var e = Player.volume + .2;
        e > 1 && (e = 1), Flw.isServer && Flw.send("volume," + e), Player.setVolume(e)
    },volumeDown: function() {
        var e = Player.volume - .2;
        e < .2 && (e = Player.MIN_VLM), Flw.isServer && Flw.send("volume," + e), Player.setVolume(e)
    },musicUpdate: function(e) {
        var t = Player.music;
        Player.music = new Array, Player.music[0] = t[Player.pos];
        for (var n = 0; n < e.length; ++n)
            Search.setMusic(e[n], n + 1);
        Player.pos = 0
    },loveClick: function() {
        if (Player.pos == -1) {
            Gns.nowGns("你貌似还没有播放呢，在搜索框输入你想听的音乐吧！");
            return
        }
        if (Player.isLoveAnimate)
            return;
        if (Player.currentTime < 15 && !$("#playerLove").hasClass("selected")) {
            Gns.nowGns("如果你真的喜欢，至少会听15秒～");
            return
        }
        _gaq.push(["_trackEvent", "Player", "Love", Player.music[Player.pos].tid]), Player.hateCount = 0, clearTimeout(Gns.gnsRcmdTmo), Gns.gnsRcmdTmo = setInterval(Gns.rcmd, 6e5), $("#playerLove, #jingRdLove").toggleClass("selected"), $("#playerHate").removeClass("selected");
        var e = "";
        $("#playerLove").hasClass("selected") && (Flw.isFlw && Flw.toid != "" && Flw.send("love," + Signup.userDetail.nick), $("#fsapp").isDisplay() || ($("#fav").hasClass("ijaBtn") ? Player.loveAnimate(Core.bodyWidth - $("#fav").offset().left - 50, 15, 50) : Player.loveAnimate(Core.bodyWidth - $("#more").offset().left - 50, 15, 50)), ++Player.loveCount, InsertPlay.isPlay ? InsertPlay.type == "charts" ? e = "音乐榜单" : InsertPlay.type == "abt" ? e = "" : e = Menu[InsertPlay.type] : e = Search.keywords, e == undefined && (e = ""));
        var t = Player.music[Player.pos].tid, n = !0;
        Player.tidByCount == t ? n = !1 : Player.tidByCount = t, $.ajax({url: Core.API_VER + "/music/post_love_song",data: {uid: Signup.userDetail.id,tid: t,c: Player.loveCount,cmbt: e,moodTagIds: Search.moodids,m: Search.m,trs: n},success: function(e) {
                $("#playerLove").hasClass("selected") && (e.result.items.length > 0 ? Player.musicUpdate(e.result.items) : --Player.loveCount), Player.isLoveAnimate = !1
            }})
    },loveAnimate: function(e, t, n) {
        var r = $.id2url(Player.music[Player.pos].fid, "AT", "album"), i = Core.bodyWidth / 2 - 25, s = Core.bodyHeight / 2 + 35;
        Player.isLoveAnimate = !0, $("body").append("<div id='flyLoveTip' class='ufo hide' style='right:" + i + "px; bottom:" + s + "px; background-image:url(" + r + ");'/>"), $("#flyLoveTip").show().animate({right: "+=180",bottom: "+=160"}, 500, function() {
            $(this).animate({right: e + "px",bottom: t + "px"}, 600, function() {
                $(this).animate({opacity: "0"}, 500, function() {
                    $(this).remove(), $("body").append('<img id="flyPlusTip" class="plusOne" src="' + IMG_URL + "/plusOne" + Retina.suffix + '.png" style="right:' + (e + 15) + "px; bottom:" + (t + 14) + 'px;"/>'), Core.ie68 ? $("#flyPlusTip").animate({bottom: "+=" + n}, 1e3, function() {
                        $(this).remove(), Player.isLoveAnimate = !1
                    }) : $("#flyPlusTip").animate({bottom: "+=" + n,opacity: "0"}, 1e3, function() {
                        $(this).remove(), Player.isLoveAnimate = !1
                    })
                })
            })
        })
    },hateClick: function() {
        if (Player.pos == -1) {
            Gns.nowGns("你貌似还没有播放呢，在搜索框输入你想听的音乐吧！");
            return
        }
        if (Player.music[Player.pos] == undefined || $(this).hasClass("selected"))
            return;
        _gaq.push(["_trackEvent", "Player", "Hate", Player.music[Player.pos].tid]), ++Player.hateCount, Player.loveCount = 0;
        var e = Search.keywords;
        clearTimeout(Gns.gnsRcmdTmo), Gns.gnsRcmdTmo = setInterval(Gns.rcmd, 6e5), $(this).addClass("selected"), $("#playerLove").removeClass("selected"), $.ajax({url: Core.API_VER + "/music/post_hate_song",data: {uid: Signup.userDetail.id,tid: Player.music[Player.pos].tid,c: Player.hateCount,cmbt: e},success: function(e) {
                if (Flw.isFlw && Flw.toid != "") {
                    Core.getCookie("hateKnow") != "true" && Gns.nowGns('你在跟听状态，讨厌歌曲不会切换，但是已经记录了哦。<a href="#" class="trg knowEvent" data-cookieid="hateKnow">我知道了</a>'), Flw.send("hate," + Signup.userDetail.nick + "," + Signup.userDetail.fid);
                    return
                }
                e.result.items.length > 0 ? Player.musicUpdate(e.result.items) : --Player.hateCount, Player.next(), Player.savePlayingData()
            }})
    },startRotate: function() {
        if (Signup.userDetail.sts.rtCv == "false" || $("#playCtl").hasClass("loading"))
            return;
        Player.cdRotate ? Player.swfObj.isRotate() || Player.swfObj.beginRotate() : $("#rotateCD").removeClass("stRt").addClass("rt")
    },stopRotate: function() {
        Player.cdRotate ? Player.swfObj.isRotate() && Player.swfObj.stopRotate() : $("#rotateCD").addClass("stRt")
    },setRotate: function() {
        if (Player.music[Player.pos] == undefined)
            return;
        var e = $.id2url(Player.music[Player.pos].fid, "AM", "album");
        Player.cdRotate ? Player.swfObj.showCover(e) : $("#rotateCD").removeClass("rt")
    },postNext: function() {
        if (Player.music[Player.pos] == undefined)
            return;
        var e, t;
        Player.actualCurrentTime > 10 ? e = "true" : e = "false", Player.actualCurrentTime > Player.music[Player.pos].duration / 2 ? t = "true" : t = "false", $.ajax({url: Core.API_VER + "/music/post_next",data: {uid: Signup.userDetail.id,tid: Player.music[Player.pos].tid,next: e,half: t}})
    },setPlayerDefault: function() {
        Player.pause(), Player.cdRotate ? Player.swfObj.showCover(IMG_URL + "/defaults/cover/300" + Retina.suffix + ".png") : $("#rotateCD").css({background: 'url("' + IMG_URL + "/defaults/cover/300" + Retina.suffix + '.png") no-repeat scroll 0 0 #E3E3E1'}), $("#mscPlr").children("p").text("Jing 已经为你准备好，搜索你想听的"), Player.music = new Array, Player.savePlayingData()
    },addLoading: function() {
        $("#playCtl").addClass("loading");
        var e = $("#mscPlr").data("mouse");
        $("#mscPlrMask").mouseenter(), $("#mscPlr").data("mouse", e);
        var t = {lines: 8,length: 4,width: 4,radius: 5,corners: 1,rotate: 0,color: "#fff",speed: .8,trail: 10,shadow: !0,hwaccel: !1,className: "abtSpin",zIndex: 2e9,top: "21px",left: "21px"};
        Player.spin = $("#playCtl").spin(t), Player.stopRotate()
    },resize: function() {
    }}, Jing.Flw = {nick: "",toid: "",music: "",isFlw: !1,isServer: !1,cacheMusic: null,cacheSec: 0,users: null,serverTmo: 0,ACTION: 0,TID: 1,MID: 2,FID: 3,NAME: 4,DUR: 5,SEC: 6,VOLUME: 7,AN: 8,ATN: 9,init: function() {
        $(document).on("click", "#flwOK", function() {
            Gns.empty(!0), Flw.flwOK($(this).data("fuid"))
        }), $(document).on("click", "#flwNO", function() {
            Gns.empty(!0), clearTimeout(Flw.reqTmo), now.followListenResponseAuthorize(!1, $(this).data("fuid"), Signup.userDetail.id, null)
        }), $(document).on("click", "#flwOther", function() {
            Core.nowIsReady ? Flw.listenRequest($(this).data("fid"), $(this).data("fnick")) : Gns.nowGns("网络异常，暂时不能跟听，请重试或者刷新")
        }), $(document).on("mouseenter", "#flwLstBtn", function() {
            if ($("#flwLstCtn").length == 1)
                return;
            var e = '<div id="flwLstCtn" class="blckpCtn"><div style="width:100%; height:45px; position:absolute; bottom:-45px;"></div><div class="blckpHd"><h3 class="name">他们正在跟听你</h4><p class="desc">They are following your music stream</p><div class="splt"></div></div><div class="blckpBd">', t = new Array, n = 0;
            for (var r in Flw.users)
                t[n] = new Object, t[n].uid = r, t[n].nick = Flw.users[r][0], t[n].avatar = Flw.users[r][1], ++n;
            var i = t.length / 3 + "";
            i.indexOf(".") >= 0 ? i = parseInt(i) + 1 : i = parseInt(i);
            for (var n = 0; n < i; ++n) {
                var s = 0, o = 0, u = t.length - n * 3;
                u > 3 && (u = 3), s = (280 - u * 70) / (u + 1), n != 0 && (o = 20);
                for (var a = n * 3; a < (n + 1) * 3; ++a) {
                    if (t[a] == undefined)
                        break;
                    e += '<a class="avt flwLstKickEvent" data-uid="' + t[a].uid + '" style="margin-left:' + s + "px; margin-top:" + o + 'px" href="#">' + '<div class="avtCt">' + '<div class="avtMask"></div>' + '<img data-avatar="' + t[a].avatar + '" class="avtImg" src="">' + "</div>" + '<span class="name">' + t[a].nick + "</span>" + "</a>"
                }
            }
            e += "</div></div>", $(this).html(e), $("#flwLstCtn").css({left: "-20px",top: "-" + ($("#flwLstCtn").height() + 7) + "px"}), $(".flwLstKickEvent").click(function() {
                var e = $(this).data("uid");
                if (e == "")
                    return;
                now.notifyFollowListenKickLeave(Signup.userDetail.id, e), $(this).data("uid", ""), $(this).animate({opacity: "0"}, 300), delete Flw.users[e], Core.objLength(Flw.users) == 0 && Flw.empty()
            }), $("#flwLstCtn").find("img").each(function() {
                var e = $(this).data("avatar"), t = new Image;
                t.obj = $(this), t.onload = function() {
                    t.obj.attr("src", this.src)
                }, e.indexOf("http://") != 0 && (e = $.id2url(e, "U1", "avatar"), e.indexOf("?") >= 0 ? e = e.substring(0, e.indexOf("?")) + ".png" + e.substring(e.indexOf("?")) : e += ".png"), t.src = e
            })
        }), $(document).on("mouseleave", "#flwLstBtn", function() {
            $(this).html("")
        })
    },flwOK: function(e) {
        Gns.empty(!1), clearTimeout(Flw.reqTmo), Flw.isServer = !0, Flw.isFlw = !0, now.followListenResponseAuthorize(!0, e, Signup.userDetail.id, Flw.gnMusicStr(Player.currentTime, Player.isPlay))
    },gnMusicStr: function(e, t) {
        var n = new Object;
        return n = Player.music[Player.pos], n != undefined && n.tid == Player.tid ? Flw.returnResult(Player.music[Player.pos], e, t) : ($.ajax({url: Core.API_VER + "/media/song/meta",data: {id: Player.tid},success: function(r) {
                n = new Object, n.tid = r.result.tid, n.mid = r.result.mid, n.fid = r.result.fid, n.n = r.result.n, n.d = r.result.d, n.an = r.result.an, n.atn = r.result.atn, now.sendFollowListenMessage(Signup.userDetail.id, Flw.returnResult(n, e, t))
            }}), null)
    },returnResult: function(e, t, n) {
        e = Player.music[Player.pos];
        var r = "";
        return n == undefined || n == 1 ? r = "play" : r = "pausing", r + "," + e.tid + "," + e.mid + "," + e.fid + "," + e.n + "," + e.d + "," + t + "," + Player.volume + "," + e.an + "," + e.atn + "," + r + "" + e.tid + "" + e.mid + "" + e.fid + "" + e.n + "" + e.d + "" + t + "" + Player.volume + "" + e.an + "" + e.atn
    },listenRequest: function(e, t) {
        Flw.isFlw = !0, Flw.toid = e, Flw.nick = t, now.followListenRequest(Signup.userDetail.id, Flw.toid)
    },send: function(e, t) {
        var n = "";
        e == "play" ? n = Flw.gnMusicStr(t) : n = e, n != null && now.sendFollowListenMessage(Signup.userDetail.id, n)
    },leave: function() {
        now.notifyFollowListenLeave(Signup.userDetail.id)
    },play: function(e, t) {
        Player.closeGns();
        var n = new Array;
        e.indexOf("") >= 0 ? (n = e.split(""), n = n.slice(1)) : n = e.split(",");
        var r = new Object;
        r.tid = n[Flw.TID], r.fid = n[Flw.FID], r.mid = n[Flw.MID], r.n = n[Flw.NAME], r.d = parseInt(n[Flw.DUR]), r.an = n[Flw.AN], r.atn = n[Flw.ATN], InsertPlay.sec = parseInt(n[Flw.SEC]), InsertPlay.play("", "flw", r, "正在收听：" + Flw.nick + " 正在听的音乐"), Player.setVolume(n[Flw.VOLUME]), t && (setTimeout(function() {
            Player.pause()
        }, 1e3), setTimeout(function() {
            Gns.nowGns("你跟听的人，暂停播放了哦"
            , Gns.NOTIFIER)
        }, 3e3))
    },empty: function() {
        Flw.toid != "" && (Player.setVolume(Player.cacheVolume), Player.volume = Player.cacheVolume), Flw.isServer = !1, Flw.isFlw = !1, Flw.toid = "", Flw.nick = "", Flw.users = null, $("#flwLstBtn").hide(), clearTimeout(Flw.serverTmo)
    }}, Jing.Gns = {openGnsArr: new Array,closeGnsTmo: 0,isOver: !1,level1: "level1",NOTIFIER: "notifier",gnsRcmdTmo: 0,isInsertPlay: !1,isAnimate: !1,modelArr: new Array("mscPlrCtn", "mdlHr", "instSchCtn", "topApp", "guide", "appGuide", "rlsNote", "smlGuide", "psnRdGuide", "shrGuide"),timeDot: null,init: function() {
        $(document).on("click", ".ablumEvent", Gns.ablumEventClick), $(document).on("click", ".gnsSchSml", function() {
            Search.tid = $(this).data("tid"), Search.searchBtnClick()
        }), $(document).on("click", ".gnsTingOS", function() {
            Search.searchAfter($(this).data("keywords"), Search.response, 0, !0, !1)
        }), $(document).on("click", ".gnsMt", function() {
            Search.mt = $(this).data("mt"), Search.searchBtnClick()
        }), $(document).on("click", ".gnsSnsBind", function() {
            Apps.openSns(ConverSns[$(this).data("identify")])
        }), $(document).on("click", ".gnsFlyEvent", function() {
            Search.fly($(this), "CmbtFlyBadge", $(this).text(), !1, !1)
        }), $(document).on("click", ".gnsRdFlyEvent", function() {
            Search.fly($(this), "CmbtFlyBadge", $(this).text(), !1, !0)
        }), $(document).on("click", ".gnsAttrTextFly", function() {
            Search.fly($(this), "CmbtFlyBadge", $(this).data("text"), !1, !0)
        }), $(document).on("click", "#gnsSnsUpdate", function() {
            Core.setCookie("snsUpdateTime", (new Date).getTime()), Frd.olFrdObj = {uid: "ext"}, $("#abtCtn").isDisplay() && About.ouid == Signup.userDetail.id ? $("#abtMenu>.frds").click() : $("#about").click()
        }), $(document).on("click", ".closeFullScreenEvt", function() {
            $(".cls").each(function() {
                if ($(this).parent().isDisplay())
                    return $(this).click(), Gns.isOver = !1, Gns.closeGns(), !1
            })
        }), $(".cls").click(function() {
            $(".closeFullScreenEvt").length > 0 && Gns.closeGns()
        }), $(document).on("click", ".uappEvt", function() {
            $("#frdCt").hasClass("selected") ? Frd.jump(Frd.FRDS) : (Frd.tab = Frd.FRDS, $("#frdCt").click())
        }), $(document).on("click", ".gnsFlwd", function() {
            var e = $(this).data("nick");
            $.ajax({url: Core.API_VER + "/account/follow_frd",data: {uid: Signup.userDetail.id,frdid: $(this).data("frdid")},success: function(t) {
                    if (!t.success) {
                        Gns.nowGns(t.codemsg);
                        return
                    }
                    Gns.nowGns("你已成功关注了 " + e)
                }})
        }), $(document).on("click", "#tstInShow>a", function() {
            if ($(this).hasClass("know") > -1)
                return;
            Core.isFullScren && ($("#guide").isDisplay() ? $("#guideFinish").click() : $("#topApp").isDisplay() ? $("#topApp .cls").click() : $("#appGuide").isDisplay() && $("#appGuide .cls").click())
        }), $(document).on("click", ".gnsKnownEvent", function() {
            var e = $(this).data("n"), t = $(this).parent().children(".gnsFlyEvent").text();
            $.ajax({url: Core.API_VER + "/music/post_genius_rcmd",data: {uid: Signup.userDetail.id,rd: t,n: e}}), $(this).remove()
        }), $("#tstCtn").mouseenter(function() {
            Gns.isOver = !0
        }).mouseleave(function() {
            Gns.isOver = !1
        }), $(document).on("click", "#tstCtn", function() {
            return !1
        }), $(document).on("click", ".gnsStsDsply", function() {
            Main.menuClick("stngs")
        })
    },mscInfoHtml: function(e) {
        if (Player.music[Player.pos] == undefined || Player.music[Player.pos].tid == undefined || e.result.tid != Player.music[Player.pos].tid)
            return;
        Gns.mscInfo(e), Gns.timeDotHtml(e), Lrc.isLrc = e.result.lrc, e.result.lrc ? ($("#lrcBtn").show(), Lrc.getLrc(Player.music[Player.pos].mid)) : ($("#lrcBtn").hide(), $("#lrc").isDisplay() && Lrc.hideLoading());
        if (Signup.userDetail.sts.frdlvd == "true") {
            var t = Player.music[Player.pos].tid;
            $.ajax({url: Core.API_VER + "/music/fetch_frdlvd",data: {tid: t,uid: Signup.userDetail.id},success: function(e) {
                    if (e.result.items.length == 0 || t != Player.music[Player.pos].tid)
                        return;
                    Gns.friendLove(e)
                }})
        }
        $(".tmDtsCtn").remove(), e.result.lvd == "l" ? ($("#playerLove").addClass("selected"), InsertPlay.type == "jingRd" && $("#jingRdLove").addClass("selected")) : e.result.lvd == "h" && $("#playerHate").addClass("selected")
    },friendLove: function(e) {
        var t = "", n = e.result.items;
        for (var r = 0; r < n.length; ++r) {
            var i = n[r].nick, s = Search.keywords.toLowerCase().indexOf(i.toLowerCase());
            if (s >= 0 && Search.keywords.substring(s - 1, s) == "@")
                continue;
            var s = $("#prevHtml").text().toLowerCase().indexOf(i.toLowerCase());
            if (s >= 0)
                continue;
            t += '<a data-uid="' + n[r].uid + '" data-avatar="' + n[r].avatar + '" data-nick="' + i + '" data-frdshp="' + n[r].frdshp + '" data-ol="' + n[r].ol + '" href="#" class="trg abtEvent">' + i + "</a>、"
        }
        if (t == "")
            return;
        t = t.substring(0, t.length - 1) + " 喜欢过这首歌曲~", Gns.openGnsArr[Gns.openGnsArr.length] = new Array("love", t), Gns.showGns()
    },friendListen: function(e) {
        var t = "";
        for (var n = 0; n < e.items.length; ++n) {
            var r = e.items[n].avatar;
            t += '<a data-uid="' + e.items[n].uid + '" data-nick="' + e.items[n].nick + '" href="#" class="trg abtEvent">' + e.items[n].nick + "</a>、"
        }
        if (t == "")
            return;
        t = t.substring(0, t.length - 1) + " ", t += "正在听这首歌曲~", Gns.openGnsArr[Gns.openGnsArr.length] = new Array("listen", t), Gns.showGns()
    },mscInfo: function(e) {
        var t = e.result, n = "";
        for (var r in t) {
            if (Core.isEmpty(t[r]) || r == "ply_info" || r == "lvd" || r == "tid")
                continue;
            var i = "";
            switch (r) {
                case "feat":
                    var s = t[r].atst, o = t[r].ftw.split(","), u = "", a = 0;
                    s == "Various Artists" && (s = o[0], a = 1);
                    for (; a < o.length; ++a)
                        u += '<a class="gnsFlyEvent trg" href="#">' + o[a] + "</a>、";
                    if (u == "")
                        continue;
                    u = u.substring(0, u.length - 1);
                    var f = '<a class="gnsFlyEvent trg" href="#">' + s + "</a> 和 " + u + " 共同演艺这首歌噢！";
                    Gns.openGnsArr[Gns.openGnsArr.length] = new Array("feat", f);
                    break;
                case "vsn":
                    for (var a = 0; a < t[r].length; ++a) {
                        if (t[r][a] == "原版" || t[r][a] == "纯音乐")
                            continue;
                        n += '<a href="#" class="gnsFlyEvent trg">' + t[r][a] + "</a>、"
                    }
                    if (n == "")
                        continue;
                    n = n.substring(0, n.length - 1);
                    var f = "你正在收听 " + n + " 的 " + Player.music[Player.pos].n;
                    Gns.openGnsArr[Gns.openGnsArr.length] = new Array("vsn", f);
                    break;
                case "orgn":
                    for (var a = 0; a < t[r].length; ++a) {
                        var l = "";
                        if (t[r][a].tid == Player.music[Player.pos].tid)
                            continue;
                        !Core.isEmpty(t[r][a].mid) && (!Flw.isFlw || Flw.toid == "") && (l = '，<a class="ablumEvent trg" data-fid="' + t[r][a].fid + '" data-mid="' + t[r][a].mid + '" data-tid="' + t[r][a].tid + '" data-d="' + t[r][a].d + '" data-n="' + t[r][a].n + '" data-atn="' + t[r][a].atst + '" data-an="' + t[r][a].an + '" href="#">要听听</a> ？');
                        var f;
                        t["cmps_info"].singer == t[r][a].atst ? f = '<a class="gnsFlyEvent trg" href="#">' + t[r][a].atst + "</a> 还唱过另外一个版本的'" + Player.music[Player.pos].n + "'" + l : f = '<a class="gnsFlyEvent trg" href="#">' + t[r][a].atst + "</a> 也演艺过这首歌曲哦" + l, Gns.openGnsArr[Gns.openGnsArr.length] = new Array("orgn", f)
                    }
                    break;
                case "mov_info":
                    var c = "", h = "", p = 'target="_blank"', d = {};
                    for (var v in t[r]) {
                        if (Core.isEmpty(t[r][v]) || v == "movie_url")
                            continue;
                        v == "jingle" ? c = "广告歌曲、" : v == "in_song" ? c = "插曲、" : v == "ending_song" ? c = "片尾曲、" : v == "opening_song" ? c = "片头曲、" : v == "theme_song" && (c = "主题曲、"), d[t[r][v]] == undefined && (d[t[r][v]] = ""), d[t[r][v]] += c
                    }
                    var f = "";
                    for (var m in d) {
                        var g = m.split(","), y = "";
                        for (var a = 0; a < g.length; ++a)
                            y += "&lt;" + g[a] + "&gt;、";
                        f += '<a href="#" class="trg"> ' + y.substring(0, y.length - 1) + " </a> 的" + d[m]
                    }
                    f != "" && (f = f.substring(0, f.length - 1) + "哦！", Gns.openGnsArr[Gns.openGnsArr.length] = new Array("mov", f));
                    break;
                case "cmps_info":
                    var b = "", w = new Object;
                    t[r].occp == undefined && (t[r].occp = "");
                    var E = t[r].occp, S = t[r].singer;
                    for (var v in t[r]) {
                        if (Core.isEmpty(t[r][v]) || v == "occp" || v == "singer")
                            continue;
                        var x = "";
                        v == "composers" ? x = "作曲" : v == "songwriters" ? x = "作词" : v == "arrangers" ? x = "编曲" : v == "producers" && (x = "制作人");
                        var T = t[r][v].split(",");
                        for (var a = 0; a < T.length; ++a)
                            Search.keywords.indexOf(T[a]) >= 0 && (w[T[a]] == undefined ? w[T[a]] = x + "、" : w[T[a]] += x + "、")
                    }
                    var N = !0;
                    for (var r in w)
                        if (S.indexOf(r) >= 0) {
                            N = !1;
                            break
                        }
                    for (var r in w) {
                        var f = '这首歌是 <a class="gnsFlyEvent trg" href="#" >' + r + "</a> ，" + w[r].substring(0, w[r].length - 1);
                        E.indexOf(r) >= 0 && N && (Gns.openGnsArr[Gns.openGnsArr.length] = new Array("cmps", f))
                    }
            }
        }
        Gns.openGnsArr.length != 0 && Gns.showGns()
    },nowGns: function(e, t, n) {
        if (e == $("#tstInShow").text())
            return;
        var r = (new Date).getTime() - parseInt($("#tstCtn").data("time"));
        if (1500 > r && t != Gns.level1) {
            setTimeout(function() {
                Gns.nowGns(e, t, n)
            }, 2e3 - r);
            return
        }
        $("#tstCtn").data({time: (new Date).getTime()}), e == undefined && (e = "Jing 开了点小差，你过会儿再试试。");
        var i = "now";
        t != undefined && (i = t), Gns.stas == "opened" ? (clearTimeout(Gns.closeGnsTmo), Gns.openGnsArr = (new Array(new Array(i, e, n))).concat(Gns.openGnsArr), Gns.closeGns()) : (Gns.openGnsArr[0] = new Array(i, e, n), Gns.showGns())
    },showGns: function() {
        if (Gns.openGnsArr.length == 0)
            return;
        if (Gns.stas == "opened" || Gns.stas == "opening")
            return;
        if (Gns.stas == "closing") {
            setTimeout(Gns.showGns, 1e3);
            return
        }
        Gns.stas = "opening", $("#tstCtn").show().animate({opacity: "1"}, 300, function() {
            Gns.stas = "opened"
        }), Gns.nextGns()
    },nextGns: function() {
        clearTimeout(Gns.closeGnsTmo);
        if (Gns.openGnsArr.length == 0) {
            Gns.closeGns();
            return
        }
        if ($("#tstCtn").data("tag") == Gns.level1)
            return;
        $("#tstCtn").data({tag: Gns.openGnsArr[0][0],time: (new Date).getTime()}), $("#tstInShow").html(Gns.openGnsArr[0][1]);
        if ((document.webkitVisibilityState == "hidden" || document.visibilityState == "hidden") && (Gns.openGnsArr[0][0] == Gns.NOTIFIER || Gns.openGnsArr[0][0] == Gns.level1 && Gns.openGnsArr[0][2] != undefined)) {
            var e = Gns.openGnsArr[0][2];
            e == undefined && (e = Gns.openGnsArr[0][1]), Notifier.notify("http://image.jing.fm/assets/jing-beta/notify-icon.png", "Jing", e)
        }
        $("#tstCtn").css("margin-left", "-" + $("#tstCtn").width() / 2 + "px"), Gns.openGnsArr[0][0] != Gns.level1 && (Gns.closeGnsTmo = setTimeout(Gns.closeGns, 8e3)), Gns.openGnsArr = Gns.openGnsArr.slice(1, Gns.openGnsArr.length)
    },closeGns: function() {
        if ($("#gnsCtn").data("tag") == Gns.level1 || Gns.stas == "opening" || Gns.stas == "closing" || Gns.stas == "closed")
            return;
        if (Gns.isOver) {
            Gns.closeGnsTmo = setTimeout(Gns.closeGns, 3e3);
            return
        }
        Gns.openGnsArr.length != 0 ? Gns.nextGns() : ($("#tstCtn").data("tag", ""), Gns.stas = "closing", $("#tstCtn").animate({opacity: "0"}, 300, function() {
            $(this).hide(), $("#tstInShow").html(""), Gns.stas = "closed"
        }))
    },empty: function(e) {
        $("#tstCtn").data("tag", ""), e && (Gns.isOver = !1, Gns.closeGns())
    },converTime: function(e) {
        var t = parseInt(e / 60), n = parseInt(e % 60), r = "";
        return t > 0 ? (t < 10 && (t = "0" + t), n < 10 && (n = "0" + n), r = "在" + t + "分" + n + "秒出现") : r = "在" + n + "秒出现", r
    },timeDotHtml: function(response) {
        if (!response.success)
            return;
        Gns.timeDot = undefined;
        if (response.result.ply_info != null && response.result.ply_info != "") {
            var isShowGns = !1, info = eval("(" + response.result.ply_info + ")"), key, childKey;
            for (key in info.timeDot)
                for (var i = 0; i < info.timeDot[key].length; ++i) {
                    childKey = "";
                    var infoStr = "", pHtml = "", dotSeconds = 0;
                    if (typeof info.timeDot[key][i] == "string") {
                        dotSeconds = parseInt(info.timeDot[key][i]), infoStr = key + "从这里开始";
                        var listenHtml = ' <a href="#" id="timeDot' + dotSeconds + '" class="timeDotEvent trg">去听听</a>';
                        Flw.isFlw && Flw.toid != "" && (listenHtml = ""), pHtml = '<a href="#" class="gnsFlyEvent trg" >' + key + "</a> " + Gns.converTime(dotSeconds) + listenHtml
                    } else if (typeof info.timeDot[key][i] == "object")
                        for (childKey in info.timeDot[key][i]) {
                            dotSeconds = parseInt(info.timeDot[key][i][childKey]), infoStr = key + childKey + "从这里开始";
                            var listenHtml = ' <a href="#" id="timeDot' + dotSeconds + '" class="timeDotEvent trg">去听听</a>';
                            Flw.isFlw && Flw.toid != "" && (listenHtml = ""), childKey == "" && (childKey = key), pHtml = '<a href="#" class="gnsFlyEvent trg" >' + childKey + "</a> " + Gns.converTime(dotSeconds) + listenHtml
                        }
                    if (dotSeconds != 0 && !isNaN(dotSeconds)) {
                        isShowGns = !0;
                        var timeDotObj = new Object;
                        timeDotObj.action = "timedot", timeDotObj.classStyle = "play";
                        if (childKey != "" && (Search.keywords.indexOf(key) != -1 || Search.keywords.indexOf(childKey) != -1) || childKey == "" && Search.keywords.indexOf(key) != -1)
                            Gns.openGnsArr[Gns.openGnsArr.length] = new Array(timeDotObj, pHtml);
                        if (Gns.timeDot == null || Gns.timeDot == undefined)
                            Gns.timeDot = new Object;
                        Gns.timeDot["timeDot" + (dotSeconds - 2)] = new Array(timeDotObj, pHtml)
                    }
                }
            isShowGns && Gns.showGns()
        }
    },ablumEventClick: function() {
        var e = new Object;
        e.fid = $(this).data("fid"), e.mid = $(this).data("mid"), e.tid = $(this).data("tid"), e.n = $(this).data("n"), e.d = $(this).data("d"), e.an = $(this).data("an"), e.atn = $(this).data("atn"), InsertPlay.play("", "orgn", e, e.atn + "演唱的" + e.n)
    },rcmd: function() {
        if (Signup.userDetail.sts.rcmd != "true" || !$("#mainMenuCtn").isDisplay())
            return;
        $.ajax({url: Core.API_VER + "/music/fetch_genius_rcmd",data: {uid: Signup.userDetail.id,cmbt: Search.keywords},success: function(e) {
                if (!e.success || e.result.rd == null)
                    return;
                var t = e.result.rd, n = e.result.n;
                pHtml = Signup.userDetail.nick + '，试试 <a class="gnsRdFlyEvent trg" href="#">' + t + "</a> 的组合", Gns.openGnsArr[Gns.openGnsArr.length] = new Array("rcmd", pHtml), Gns.showGns()
            }})
    }}, Jing.Fav = {itemWH: 180,MARGIN_BOT: 40,MARGIN_RIGHT: 25,ITEM_WH: 180,colCount: 0,rowCount: 0,count: 0,init: function() {
        $(document).on("click", ".favPlayCtlEvent", function() {
            if ($(this).hasClass("plyCtl"))
                if ($(this).hasClass("selected"))
                    $(this).hasClass("pause") ? Player.isPlay || Player.playCtl() : ($(this).removeClass("selected").mouseleave(), InsertPlay.close());
                else {
                    var e = $(".favPlayCtlEvent.selected");
                    e.parents(".rndSqrCtn").removeClass("selected"), e.removeClass("selected").mouseleave(), $(this).parents(".rndSqrCtn").addClass("selected"), $(this).addClass("selected");
                    var t = $(this).data("music"), n = t.n;
                    Main.screenId == "top" && (n = "音乐瀑布"), InsertPlay.play("", Main.screenId, t, "正在收听：" + n)
                }
            else
                InsertPlay.play("/search/jing/fetch_pls?q=@" + Signup.userDetail.nick, "fav", "", "正在收听：自己喜欢的歌曲");
            return Tps.hide(), !1
        }), $(document).on("mouseenter", ".rndSqrCtn", function() {
            var e = $(this).children(".rndSqr").children(".love, .hate, .usrAvt, .insptCtn"), t = $(this).children(".rndSqr").children(".plyCtl");
            Core.ie68 ? (e.show(), t.show()) : (e.animate({opacity: "1"}, 300), t.animate({opacity: "0.8"}, 300))
        }), $(document).on("mouseleave", ".rndSqrCtn", function() {
            var e = $(this).children(".rndSqr").children(".love"), t = $(this).children(".rndSqr").children(".hate"), n = $(this).children(".rndSqr").children(".love, .hate, .usrAvt, .insptCtn"), r = $(this).children(".rndSqr").children(".plyCtl");
            if (r.hasClass("selected"))
                return;
            Main.screenId == "top" && e.hasClass("selected") ? n = null : Main.screenId == "fav" && !e.hasClass("selected") ? n = null : (Main.screenId == "hate" || Main.screenId == "mbl") && !t.hasClass("selected") && (n = null), Core.ie68 ? (n != null && n.hide(), r.hide()) : (n != null && n.animate({opacity: "0"}, 300), r.animate({opacity: "0"}, 300))
        }), $(document).on("click", ".rndSqr>.love", function() {
            var e = $(this).data("tid");
            $(this).hasClass("selected") ? $(this).removeClass("selected") : $(this).addClass("selected");
            if ($(this).hasClass("topEvent"))
                for (var t = 0; t < Top.items.length; ++t)
                    Top.items[t].tid == e && (Top.items[t].loved ? Top.items[t].loved = !1 : Top.items[t].loved = !0);
            var n = "";
            InsertPlay.isPlay && (InsertPlay.type == "charts" ? n = Charts.topObj[Charts.next][1] : n = Menu[InsertPlay.type]), n == undefined && (n = ""), $.ajax({url: Core.API_VER + "/music/post_love_song",data: {uid: Signup.userDetail.id,tid: e,cmbt: n}}), Tps.hide()
        }), $(document).on("click", "#scrlCtl", function() {
            InsertPlay.type == "top" && InsertPlay.close(), Main.closeFsapp()
        })
    },show: function() {
        $("#fsapp").append('<div class="scrlCtlCtn"><div id="scrlCtl" class="scrlCtl"><p>红心电台 | 退出</p><a id="lftSldrBtn" href="#" class="sldrBtn lft"><span class="splt"></span></a><a href="#" id="rghtSldrBtn" class="sldrBtn rght"><span class="splt"></span></a></div></div><div id="favCtn" class="fav" style="width:0px; margin-left:25px; margin-top:' + Fav.surplus + 'px"></div>'), $("#scrlCtl").css("margin-left", -$("#scrlCtl").width() / 2 + "px"), Fav.st = 0, Fav.fetchFav(Fav.st), $("#lftSldrBtn").click(function() {
            var e = -parseInt($("#favCtn").css("margin-left").replace("px", "")) + 25, t = (Fav.count / Fav.colCount - 1) * (Fav.itemWH + Fav.MARGIN_RIGHT);
            return e > t ? $("#favCtn").animate({"margin-left": "+=" + t + "px"}, 300) : $("#favCtn").animate({"margin-left": "+=" + e + "px"}, 300), !1
        }), $("#rghtSldrBtn").click(function() {
            var e = Fav.st, t = $("#favCtn").width() + parseInt($("#favCtn").css("margin-left").replace("px", "")) - Core.bodyWidth, n = (Fav.count / Fav.colCount - 1) * (Fav.itemWH + Fav.MARGIN_RIGHT);
            return t > n ? $("#favCtn").animate({"margin-left": "-=" + n + "px"}, 300) : t > 0 && (e += $("#favCtn>.rndSqrCol").length * Fav.colCount - 1, e >= Fav.total ? $("#favCtn").animate({"margin-left": "-=" + t + "px"}, 300) : Main.showLoading() && Fav.fetchFav(e, "right")), !1
        })
    },fetchFav: function(e, t) {
        Fav.direction = t;
        var n = Fav.count * 2;
        e == 0 && ++n, $.ajax({url: Core.API_VER + "/music/fetch_fav",data: {uid: Signup.userDetail.id,ouid: Signup.userDetail.id,st: e,ps: n},success: function(n) {
                var r = n.result.items;
                Fav.total = n.result.total;
                var i = r.length, s = "", o = 0;
                e == 0 && r.length != 0 && (s += '<a class="rndSqrCtn favPlayCtlEvent" href="#" style="width:' + Fav.itemWH + "px;height:" + Fav.itemWH + 'px;">' + '<div class="rndSqr stats"></div>' + '<h1 class="tit">' + Fav.total + "</h1>" + '<h3 class="name">你已经喜欢了' + Fav.total + "首歌曲</h3>" + '<p class="desc">点击播放所有喜欢的歌曲</p>' + "</a>", ++o, ++i), i % Fav.colCount != 0 && (i = r.length + (Fav.colCount - i % Fav.colCount));
                var u = parseInt((i + o) / Fav.colCount);
                Fav.nowWidth = u * (Fav.itemWH + Fav.MARGIN_RIGHT), $("#favCtn").css("width", "+=" + Fav.nowWidth);
                for (var a = 0; a < i; ++a) {
                    ++o;
                    var f = "";
                    Core.ie68 ? f = "hide" : f = "dspr";
                    var l = f;
                    r[a] == undefined ? s += '<div class="rndSqrCtn" style="width:' + Fav.itemWH + "px;height:" + Fav.itemWH + 'px;"></div>' : (InsertPlay.type == Main.screenId && r[a].tid == InsertPlay.music.tid && (l = "selected"), s += '<div class="rndSqrCtn" style="width:' + Fav.itemWH + "px;height:" + Fav.itemWH + 'px;">' + '<div class="rndSqr">' + '<a href="#" class="' + l + ' plyCtl favPlayCtlEvent"></a>' + '<a data-tid="' + r[a].tid + '" href="#" class="' + f + ' btn love selected"></a>' + "</div>" + '<img data-fid="' + r[a].fid + '" src="' + IMG_URL + "/defaults/album/300" + Retina.suffix + '.jpg" class="cv">' + '<h3 class="n">' + r[a].n + "</h3>" + '<p class="an">' + r[a].an + "</p>" + '<p class="atn">' + r[a].atn + "</p>" + "</div>"), o == Fav.colCount && ($("#favCtn").append('<div class="rndSqrCol" style="float:left; width:' + (Fav.itemWH + Fav.MARGIN_RIGHT) + 'px;">' + s + "</div>"), s = "", o = 0)
                }
                $(".rndSqrCol").length == 0 && $("#favCtn").append(Fav.gnEmpty()), Main.hideLoading(), t == "right" && $("#rghtSldrBtn").click(), $(".rndSqrCtn>img").each(function() {
                    var e = $(this).data("fid");
                    if (e == undefined || e == "")
                        return;
                    $(this).data("fid", "");
                    var t = new Image;
                    t.obj = $(this), t.onload = function() {
                        t.obj.attr("src", this.src)
                    }, t.src = $.id2url(e, "AM", "album")
                });
                var a = 0;
                $(".favPlayCtlEvent").each(function() {
                    $(this).hasClass("plyCtl") && $(this).data("music") == undefined && ($(this).data("music", Search.getMusic(r[a])), ++a)
                })
            }})
    },gnEmpty: function() {
        return '<div class="empty"><i class="empt"></i><p class="desc">' + EmptyDes[Main.screenId] + "</p></div>"
    },resize: function() {
        var e = Core.bodyWidth, t = Core.bodyHeight - 38 - 34 - 70 + 6;
        Fav.colCount = parseInt(t / (Fav.ITEM_WH + Fav.MARGIN_BOT)), Fav.colCount = Fav.colCount > 5 ? 5 : Fav.colCount, Fav.colCount = Fav.colCount < 2 ? 2 : Fav.colCount;
        var n = parseInt((t - Fav.colCount * (Fav.ITEM_WH + Fav.MARGIN_BOT)) / Fav.colCount);
        Fav.itemWH = Fav.ITEM_WH + n, Fav.itemWH > 250 && (Fav.surplus = Fav.itemWH - 250, Fav.surplus = Fav.surplus * Fav.colCount / 2, Fav.itemWH = 250), Fav.rowCount = parseInt(e / (Fav.itemWH + Fav.MARGIN_RIGHT)) + 1, Fav.count = Fav.rowCount * Fav.colCount, Main.screenId == "fav" && (Main.showLoading(), $("#fsapp").html(""), clearTimeout(Fav.resizeTmo), Fav.resizeTmo = setTimeout(function() {
            Fav.show()
        }, 200))
    }}, Jing.Hate = {itemWH: 180,MARGIN_BOT: 40,MARGIN_RIGHT: 25,ITEM_WH: 180,colCount: 0,rowCount: 0,count: 0,init: function() {
        $(document).on("click", ".rndSqr>.hateEvent", function() {
            $(this).hasClass("selected") ? $(this).removeClass("selected") : $(this).addClass("selected"), $.ajax({url: Core.API_VER + "/music/post_hate_song",data: {uid: Signup.userDetail.id,tid: $(this).data("tid")}}), Tps.hide()
        })
    },show: function() {
        $("#fsapp").append('<div class="scrlCtlCtn"><div id="scrlCtl" class="scrlCtl"><p>讨厌的音乐 | 退出</p><a id="lftSldrBtn" href="#" class="sldrBtn lft"><span class="splt"></span></a><a href="#" id="rghtSldrBtn" class="sldrBtn rght"><span class="splt"></span></a></div></div><div id="hateCtn" class="hates" style="width:0px; margin-left:25px; margin-top:' + Hate.surplus + 'px"></div>'), $("#scrlCtl").css("margin-left", -$("#scrlCtl").width() / 2 + "px"), Hate.st = 0, Hate.fetchHate(Hate.st), $("#lftSldrBtn").click(function() {
            var e = -parseInt($("#hateCtn").css("margin-left").replace("px", "")) + 25, t = (Hate.count / Hate.colCount - 1) * (Hate.itemWH + Hate.MARGIN_RIGHT);
            return e > t ? $("#hateCtn").animate({"margin-left": "+=" + t + "px"}, 300) : $("#hateCtn").animate({"margin-left": "+=" + e + "px"}, 300), !1
        }), $("#rghtSldrBtn").click(function() {
            var e = Hate.st, t = $("#hateCtn").width() + parseInt($("#hateCtn").css("margin-left").replace("px", "")) - Core.bodyWidth, n = (Hate.count / Hate.colCount - 1) * (Hate.itemWH + Hate.MARGIN_RIGHT);
            return t > n ? $("#hateCtn").animate({"margin-left": "-=" + n + "px"}, 300) : t > 0 && (e += $("#hateCtn>.rndSqrCol").length * Hate.colCount, e >= Hate.total ? $("#hateCtn").animate({"margin-left": "-=" + t + "px"}, 300) : Main.showLoading() && Hate.fetchHate(e, "right")), !1
        })
    },fetchHate: function(e, t) {
        Hate.direction = t;
        var n = Hate.count;
        $.ajax({url: Core.API_VER + "/music/fetch_hate",data: {uid: Signup.userDetail.id,ouid: Signup.userDetail.id,st: e,ps: n * 2},success: function(e) {
                var n = e.result.items;
                Hate.total = e.result.total;
                var r = n.length;
                n.length % Hate.colCount != 0 && (r = n.length + (Hate.colCount - n.length % Hate.colCount));
                var i = parseInt(r / Hate.colCount);
                Hate.nowWidth = i * (Hate.itemWH + Hate.MARGIN_RIGHT), $("#hateCtn").css("width", "+=" + Hate.nowWidth);
                var s = "", o = 0;
                for (var u = 0; u < r; ++u) {
                    ++o;
                    var a = "";
                    Core.ie68 ? a = "hide" : a = "dspr";
                    var f = a;
                    InsertPlay.type == Main.screenId && n[u].tid == InsertPlay.music.tid && (f = "selected"), n[u] == undefined ? s += '<div class="rndSqrCtn" style="width:' + Hate.itemWH + "px;height:" + Hate.itemWH + 'px;">' + '<img src="" class="cv">' + '<h3 class="n"></h3>' + '<p class="an"></p>' + '<p class="atn"></p>' + "</div>" : s += '<div class="rndSqrCtn" style="width:' + Hate.itemWH + "px;height:" + Hate.itemWH + 'px;">' + '<div class="rndSqr">' + '<a href="#" class="plyCtl favPlayCtlEvent ' + f + '"></a>' + '<a data-tid="' + n[u].tid + '" href="#" class="hateEvent btn ' + a + ' hate selected"></a>' + "</div>" + '<img data-fid="' + n[u].fid + '" src="' + IMG_URL + "/defaults/album/300" + Retina.suffix + '.jpg" class="cv">' + '<h3 class="n">' + n[u].n + "</h3>" + '<p class="an">' + n[u].an + "</p>" + '<p class="atn">' + n[u].atn + "</p>" + "</div>", o == Hate.colCount && ($("#hateCtn").append('<div class="rndSqrCol" style="float:left; width:' + (Hate.itemWH + Hate.MARGIN_RIGHT) + 'px;">' + s + "</div>"), s = "", o = 0)
                }
                $(".rndSqrCol").length == 0 && $("#hateCtn").append(Fav.gnEmpty()), Main.hideLoading(), t == "right" && $("#rghtSldrBtn").click(), $(".rndSqrCtn>img").each(function() {
                    var e = $(this).data("fid");
                    if (e == undefined || e == "")
                        return;
                    $(this).data("fid", "");
                    var t = new Image;
                    t.obj = $(this), t.onload = function() {
                        t.obj.attr("src", this.src)
                    }, t.src = $.id2url(e, "AM", "album")
                });
                var u = 0;
                $(".favPlayCtlEvent").each(function() {
                    $(this).hasClass("plyCtl") && $(this).data("music") == undefined && ($(this).data("music", Search.getMusic(n[u])), ++u)
                })
            }})
    },resize: function() {
        var e = Core.bodyWidth, t = Core.bodyHeight - 38 - 34 - 70 + 6;
        Hate.colCount = parseInt(t / (Hate.ITEM_WH + Hate.MARGIN_BOT)), Hate.colCount = Hate.colCount > 5 ? 5 : Hate.colCount, Hate.colCount = Hate.colCount < 2 ? 2 : Hate.colCount;
        var n = parseInt((t - Hate.colCount * (Hate.ITEM_WH + Hate.MARGIN_BOT)) / Hate.colCount);
        Hate.itemWH = Hate.ITEM_WH + n, Hate.itemWH > 250 && (Hate.surplus = Hate.itemWH - 250, Hate.surplus = Hate.surplus * Hate.colCount / 2, Hate.itemWH = 250), Hate.rowCount = parseInt(e / (Hate.itemWH + Hate.MARGIN_RIGHT)) + 1, Hate.count = Hate.rowCount * Hate.colCount, Main.screenId == "hate" && (Main.showLoading(), $("#fsapp").html(""), clearTimeout(Hate.resizeTmo), Hate.resizeTmo = setTimeout(function() {
            Hate.show()
        }, 200))
    }}, Jing.Top = {itemWH: 170,MARGIN: 3,ITEM_WH: 170,TOTAL: 100,CTN_MARGIN_TOP: 50,ctnMarginLeft: 0,ctnMarginTop: 50,ctnWidth: 0,ctnHeight: 0,offsetWidth: 0,colCount: 0,rowCount: 0,count: 0,items: "",st: 0,arr: "",init: function() {
        $(document).on("mouseenter", ".topUnitCt>.rndSqrCtn", function() {
            if ($(this).hasClass("selected"))
                return;
            var e = Top.itemWH * .1;
            $(this).css({width: e + Top.itemWH + "px",height: e + Top.itemWH + "px",left: "-=" + e / 2,top: "-=" + e / 2,"z-index": "9999"})
        }), $(document).on("mouseleave", ".topUnitCt>.rndSqrCtn", function() {
            if ($(this).hasClass("selected"))
                return;
            var e = Top.itemWH * .1;
            $(this).width() - Top.itemWH > 2 && $(this).css({width: Top.itemWH + "px",height: Top.itemWH + "px",left: "+=" + e / 2,top: "+=" + e / 2,"z-index": ""})
        })
    },show: function() {
        Top.arr = new Array, Top.arr[0] = -Top.ctnWidth + Top.offsetWidth, Top.arr[1] = Top.ctnMarginLeft, Top.arr[2] = Core.bodyWidth - Top.offsetWidth, $("#fsapp").append('<div class="scrlCtlCtn" style="margin-bottom:0px;"><div id="scrlCtl" class="scrlCtl"><p>音乐瀑布 | 退出</p><a id="lftSldrBtn" href="#" class="sldrBtn lft"><span class="splt"></span></a><a href="#" id="rghtSldrBtn" class="sldrBtn rght"><span class="splt"></span></a></div></div><div id="topCtn" class="top"></div>'), $("#scrlCtl").css("margin-left", -$("#scrlCtl").width() / 2 + "px"), $("#topCtn").css({"left:": Top.ctnMarginLeft + "px",top: Top.ctnMarginTop * .8 + 38 + "px"}), Top.st = 0, $.ajax({url: Core.API_VER + "/app/fetch_top_music",data: {uid: Signup.userDetail.id,ps: Top.TOTAL},success: function(e) {
                if (!e.success)
                    return;
                Top.items = e.result.top, Top.TOTAL = Top.items.length, Main.hideLoading();
                var t = "";
                for (var n = 0; n < 3; ++n)
                    t += '<div data-no="' + n + '" class="topCt" style="width:' + Top.ctnWidth + "px; height:" + Top.ctnHeight + "px; left:" + Top.arr[n] + 'px;">', t += Top.gnHtml(n * Top.count), t += "</div>";
                $("#topCtn").html(t), $(".favPlayCtlEvent").each(function() {
                    $(this).data("music") == undefined && $(this).data("music", Search.getMusic(Top.items[$(this).data("pos")]))
                })
            }}), $("#lftSldrBtn").click(function() {
            if (!Main.showLoading())
                return !1;
            var e = '<div class="topCt" style="width:' + Top.ctnWidth + "px; height:" + Top.ctnHeight + "px; left:" + (Top.arr[0] - Top.ctnWidth - Top.ctnMarginLeft + Top.offsetWidth) + 'px;">';
            e += Top.gnHtml(Top.st - Top.count), e += "</div>", $("#topCtn").prepend(e), $(".favPlayCtlEvent").each(function() {
                $(this).data("music") == undefined && $(this).data("music", Search.getMusic(Top.items[$(this).data("pos")]))
            });
            var t = Core.bodyWidth - Top.ctnMarginLeft - Top.offsetWidth;
            return $("#topCtn").animate({left: "+=" + t}, 300, function() {
                $(this).children().last().remove(), $("#topCtn").css("left", "0px"), $("#topCtn").children().css("left", "+=" + t), Main.hideLoading(), $(this).children(".topCt").each(function(e) {
                    $(this).data("no", e)
                })
            }), Top.st -= Top.count, Top.st >= Top.TOTAL && (Top.st -= Top.TOTAL), Top.st < 0 && (Top.st += Top.TOTAL), !1
        }), $("#rghtSldrBtn").click(function() {
            if (!Main.showLoading())
                return !1;
            var e = '<div class="topCt" style="width:' + Top.ctnWidth + "px; height:" + Top.ctnHeight + "px; left:" + (Top.arr[2] + Top.ctnWidth + Top.ctnMarginLeft - Top.offsetWidth) + 'px;">';
            e += Top.gnHtml(Top.st + Top.count * 3), e += "</div>", $("#topCtn").append(e), $(".favPlayCtlEvent").each(function() {
                $(this).data("music") == undefined && $(this).data("music", Search.getMusic(Top.items[$(this).data("pos")]))
            });
            var t = Core.bodyWidth - Top.ctnMarginLeft - Top.offsetWidth;
            return $("#topCtn").animate({left: "-=" + t}, 300, function() {
                $(this).children().first().remove(), $("#topCtn").css("left", "0px"), $("#topCtn").children().css("left", "-=" + t), Main.hideLoading(), $(this).children(".topCt").each(function(e) {
                    $(this).data("no", e)
                })
            }), Top.st += Top.count, Top.st >= Top.TOTAL && (Top.st -= Top.TOTAL), Top.st < 0 && (Top.st += Top.TOTAL), !1
        })
    },gnHtml: function(e) {
        var t = "";
        e < 0 && (e += Top.TOTAL), e >= Top.TOTAL && (e -= Top.TOTAL);
        for (var n = 0; n < Top.count; ++n) {
            e + n >= Top.TOTAL && (e = -n);
            var r = e + n, i = Top.items[r], s = "", o = "";
            Core.ie68 ? o = "hide" : o = "dspr";
            var u = o;
            i.loved && (s = "selected", u = "");
            var a = o;
            InsertPlay.type == Main.screenId && i.tid == InsertPlay.music.tid && (a = "selected"), t += '<div class="topUnitCt" style="width: ' + Top.itemWH + "px; height: " + Top.itemWH + 'px;"><div class="rndSqrCtn" style="width: ' + Top.itemWH + "px; height: " + Top.itemWH + 'px;">' + '<div class="rndSqr">' + '<a data-pos="' + r + '" href="#" class="plyCtl favPlayCtlEvent ' + a + '"></a>' + '<a href="#" class="btn topEvent love ' + s + " " + u + '" data-tid="' + i.tid + '"></a>' + "</div>" + '<img src="' + $.id2url(i.fid, "AM", "album") + '" class="cv">' + '<h3 class="n">' + i.n + "</h3>" + '<p class="atn">' + i.atn + "</p>" + "</div></div>"
        }
        return t += '<div class="shdw"></div>', t
    },resize: function(e) {
        Top.ctnMarginLeft = Core.bodyWidth * .1;
        var t = Core.bodyWidth - Top.ctnMarginLeft * 2, n = Core.bodyHeight - 38 - 70 - Top.CTN_MARGIN_TOP * 2;
        Top.rowCount = parseInt(t / (Top.ITEM_WH + Top.MARGIN)), Top.itemWH = (t - Top.rowCount * (Top.ITEM_WH + Top.MARGIN)) / Top.rowCount + Top.ITEM_WH, Top.colCount = parseInt(n / (Top.itemWH + Top.MARGIN)), Top.ctnMarginTop = Top.CTN_MARGIN_TOP + (n - Top.colCount * (Top.itemWH + Top.MARGIN)) / 2, Top.ctnWidth = (Top.itemWH + Top.MARGIN) * Top.rowCount, Top.ctnHeight = (Top.itemWH + Top.MARGIN) * Top.colCount, Top.count = Top.rowCount * Top.colCount, Top.offsetWidth = Top.itemWH * .3, Main.screenId == "top" && (Main.showLoading(), $("#fsapp").html(""), clearTimeout(Top.resizeTmo), Top.resizeTmo = setTimeout(function() {
            Top.show()
        }, 200))
    }}, Jing.JingRd = {init: function() {
    },show: function() {
        var e = "", t = "", n = "", r = "";
        InsertPlay.type == "jingRd" ? (e = Player.music[Player.pos].n, t = Player.music[Player.pos].atn, $("#playCtl").hasClass("pause") ? n = "pause" : n = "play", $("#playerLove").hasClass("selected") && (r = "selected")) : (e = "", t = "", n = "pause", Gns.nowGns("正在为你准备..."), clearTimeout(JingRd.tmo), JingRd.tmo = setTimeout(function() {
            InsertPlay.play("/search/jing/fetch_pls?q=可能喜欢的", "jingRd", "", "猜你可能喜欢")
        }, 3e3)), $("#fsapp").append('<div id="jingRdCtn" class="jingRdCtn"><div class="veil"><div class="led"><div class="ledRght"></div><h3 id="jingRdN" class="tit">' + e + "</h3>" + '<p id="jingRdAtn" class="desc">' + t + "</p>" + "</div>" + '<div class="plyCtrl">' + '<a id="jingRdLove" href="#" class="love ' + r + '"></a>' + '<a id="jingRdCtl" href="#" class="' + n + '"></a>' + '<a id="jingRdNext" href="#" class="next"></a>' + "</div>" + "</div>" + "</div>"), $("#jingRdCtl").click(function() {
            $("#playCtl").click(), $("#playCtl").hasClass("pause") ? $(this).removeClass("play").addClass("pause") : $(this).removeClass("pause").addClass("play")
        }), $("#jingRdLove").click(function() {
            $("#playerLove").click(), $("#playerLove").hasClass("selected") ? $(this).addClass("selected") : $(this).removeClass("selected")
        }), $("#jingRdNext").click(function() {
            $("#playerNext").click()
        }), JingRd.resize()
    },resize: function() {
        var e = Core.bodyHeight - 70;
        $("#jingRdCtn").css({"margin-left": "-" + ($("#jingRdCtn").width() + 60) / 2 + "px","margin-top": "-" + ($("#jingRdCtn").height() / 2 + 70) + "px"})
    }}, Jing.Tkrs = {itemWH: 180,MARGIN_BOT: 40,MARGIN_RIGHT: 25,ITEM_WH: 180,colCount: 0,rowCount: 0,count: 0,tkrsCount: 0,init: function() {
        $(document).on("mouseenter", ".rndSqr>.insptCtn", function() {
            $(this).parent().nextAll(".n, .an, .atn").hide(), $(this).animate({width: $(this).children(".cmbt").width() + 50 + "px"}, {speed: 300,queue: !1})
        }), $(document).on("mouseleave", ".rndSqr>.insptCtn", function() {
            $(this).parent().nextAll(".n, .an, .atn").show(), $(this).animate({width: "32px"}, {speed: 300,queue: !1})
        })
    },show: function() {
        $("#fsapp").append('<div class="scrlCtlCtn"><div id="scrlCtl" class="scrlCtl"><p>大家在听 | 退出</p><a id="lftSldrBtn" href="#" class="sldrBtn lft"><span class="splt"></span></a><a href="#" id="rghtSldrBtn" class="sldrBtn rght"><span class="splt"></span></a></div></div><div id="tkrsCtn" class="tkrs" style="width:0px; margin-left:25px; margin-top:' + Tkrs.surplus + 'px"></div>'), $("#scrlCtl").css("margin-left", -$("#scrlCtl").width() / 2 + "px"), Tkrs.st = 0, Tkrs.tkrsCount = 0, Tkrs.fetchTkers(Tkrs.st), $("#lftSldrBtn").click(function() {
            var e = -parseInt($("#tkrsCtn").css("margin-left").replace("px", "")) + 25, t = (Tkrs.count / Tkrs.colCount - 1) * (Tkrs.itemWH + Tkrs.MARGIN_RIGHT);
            return e > t ? $("#tkrsCtn").animate({"margin-left": "+=" + t + "px"}, 300) : $("#tkrsCtn").animate({"margin-left": "+=" + e + "px"}, 300), !1
        }), $("#rghtSldrBtn").click(function() {
            var e = Tkrs.st, t = $("#tkrsCtn").width() + parseInt($("#tkrsCtn").css("margin-left").replace("px", "")) - Core.bodyWidth, n = (Tkrs.count / Tkrs.colCount - 1) * (Tkrs.itemWH + Tkrs.MARGIN_RIGHT);
            return t > n ? $("#tkrsCtn").animate({"margin-left": "-=" + n + "px"}, 300) : t > 0 && (e += $("#tkrsCtn>.rndSqrCol").length * Tkrs.colCount, e >= Tkrs.total ? $("#tkrsCtn").animate({"margin-left": "-=" + t + "px"}, 300) : Main.showLoading() && Tkrs.fetchTkers(e, "right")), !1
        })
    },fetchTkers: function(e, t) {
        Tkrs.direction = t;
        var n = Tkrs.count;
        $.ajax({url: Core.API_VER + "/ticker/fetch_love_recents",data: {uid: Signup.userDetail.id,ouid: Signup.userDetail.id,st: e,ps: n * 2},success: function(e) {
                var n = e.result.items;
                Tkrs.total = e.result.total;
                var r = n.length;
                n.length % Tkrs.colCount != 0 && (r = n.length + (Tkrs.colCount - n.length % Tkrs.colCount));
                var i = parseInt(r / Tkrs.colCount);
                Tkrs.nowWidth = i * (Tkrs.itemWH + Tkrs.MARGIN_RIGHT), $("#tkrsCtn").css("width", "+=" + Tkrs.nowWidth);
                var s = "", o = 0;
                for (var u = 0; u < r; ++u) {
                    ++o;
                    var a = "";
                    Core.ie68 ? a = "hide" : a = "dspr";
                    var f = a;
                    InsertPlay.type == Main.screenId && n[u].tid == InsertPlay.music.tid && (f = "selected");
                    if (n[u] == undefined)
                        s += '<div class="rndSqrCtn" style="width:' + Tkrs.itemWH + "px;height:" + Tkrs.itemWH + 'px;">' + "</div>";
                    else {
                        var l = "";
                        n[u].q != undefined && n[u].q != "" && (l = '<a class="insptCtn ' + a + '">' + '<div href="#" class="inspt"></div>' + '<div class="cmbt">' + n[u].q + "</div>" + "</a>"), s += '<div class="rndSqrCtn" style="width:' + Tkrs.itemWH + "px;height:" + Tkrs.itemWH + 'px;">' + '<div class="rndSqr">' + '<div class="usrAvt ' + a + '">' + '<img data-avt="' + n[u].avt + '" src="' + IMG_URL + "/defaults/avatar/30" + Retina.suffix + '.jpg" class="usrAvtImg"><p>' + n[u].nick + " 喜欢了</p>" + "</div>" + l + '<a href="#" class="' + f + ' plyCtl favPlayCtlEvent"></a>' + "</div>" + '<img data-fid="' + n[u].fid + '" src="' + IMG_URL + "/defaults/album/300" + Retina.suffix + '.jpg" class="cv">' + '<h3 class="n">' + n[u].tit + "</h3>" + '<p class="an">' + n[u].an + "</p>" + '<p class="atn">' + n[u].atn + "</p>" + "</div>"
                    }
                    o == Tkrs.colCount && ($("#tkrsCtn").append('<div class="rndSqrCol" style="float:left; width:' + (Tkrs.itemWH + Tkrs.MARGIN_RIGHT) + 'px;">' + s + "</div>"), s = "", o = 0)
                }
                Main.hideLoading(), t == "right" && $("#rghtSldrBtn").click(), $(".rndSqrCtn>img").each(function() {
                    var e = $(this).data("fid");
                    if (e == undefined || 
                    e == "")
                        return;
                    $(this).data("fid", "");
                    var t = new Image;
                    t.obj = $(this), t.onload = function() {
                        t.obj.attr("src", this.src)
                    }, t.src = $.id2url(e, "AM", "album")
                }), $(".usrAvt").each(function() {
                    Core.ie68 && $(this).show(), $(this).css("width", $(this).children("p").width() + 50 + "px"), Core.imgLoad($(this).children("img"), "", $(this).children("img").data("avt"), 30), Core.ie68 && $(this).hide()
                });
                var u = 0;
                $(".favPlayCtlEvent").each(function() {
                    $(this).hasClass("plyCtl") && $(this).data("music") == undefined && (n[u].n = n[u].tit, $(this).data("music", Search.getMusic(n[u])), ++u)
                })
            }})
    },resize: function() {
        var e = Core.bodyWidth, t = Core.bodyHeight - 38 - 34 - 70 + 6;
        Tkrs.colCount = parseInt(t / (Tkrs.ITEM_WH + Tkrs.MARGIN_BOT)), Tkrs.colCount = Tkrs.colCount > 5 ? 5 : Tkrs.colCount, Tkrs.colCount = Tkrs.colCount < 2 ? 2 : Tkrs.colCount;
        var n = parseInt((t - Tkrs.colCount * (Tkrs.ITEM_WH + Tkrs.MARGIN_BOT)) / Tkrs.colCount);
        Tkrs.itemWH = Tkrs.ITEM_WH + n, Tkrs.itemWH > 250 && (Tkrs.surplus = Tkrs.itemWH - 250, Tkrs.surplus = Tkrs.surplus * Tkrs.colCount / 2, Tkrs.itemWH = 250), Tkrs.rowCount = parseInt(e / (Tkrs.itemWH + Tkrs.MARGIN_RIGHT)) + 1, Tkrs.count = Tkrs.rowCount * Tkrs.colCount, Main.screenId == "tkrs" && (Main.showLoading(), $("#fsapp").html(""), clearTimeout(Tkrs.resizeTmo), Tkrs.resizeTmo = setTimeout(function() {
            Tkrs.show()
        }, 200))
    }}, Jing.Charts = {itemH: 240,itemW: 240,MARGIN_BOT: 36,MARGIN_RIGHT: 36,ITEM_WH: 240,colCount: 0,rowCount: 0,count: 0,topObj: "",topChildObj: "",widthArr: null,next: "",init: function() {
    },show: function() {
        $("#fsapp").append('<div class="scrlCtlCtn"><div id="scrlCtl" class="scrlCtl"><p>音乐榜单 | 退出</p><a id="lftSldrBtn" href="#" class="sldrBtn lft"><span class="splt"></span></a><a href="#" id="rghtSldrBtn" class="sldrBtn rght"><span class="splt"></span></a></div></div><div id="chartsCtn" class="charts" style="width:0px; margin-left:25px; margin-top:' + Charts.surplus + 'px"></div>'), $("#scrlCtl").css("margin-left", -$("#scrlCtl").width() / 2 + "px"), Charts.next = "", Charts.fetchCharts(), $("#lftSldrBtn").click(function() {
            if (!Main.isAnimate) {
                var e = -parseInt($("#chartsCtn").css("margin-left").replace("px", "")) + 25, t = (Charts.count / Charts.colCount - 1) * (Charts.itemW + Charts.MARGIN_RIGHT);
                Main.isAnimate = !0, e > t ? $("#chartsCtn").animate({"margin-left": "+=" + t + "px"}, 300, function() {
                    Main.isAnimate = !1
                }) : $("#chartsCtn").animate({"margin-left": "+=" + e + "px"}, 300, function() {
                    Main.isAnimate = !1
                })
            }
            return !1
        }), $("#rghtSldrBtn").click(function() {
            if (!Main.isAnimate) {
                var e = $("#chartsCtn").width() + parseInt($("#chartsCtn").css("margin-left").replace("px", "")) - Core.bodyWidth, t = (Charts.count / Charts.colCount - 1) * (Charts.itemW + Charts.MARGIN_RIGHT);
                Main.isAnimate = !0, e > t ? $("#chartsCtn").animate({"margin-left": "-=" + t + "px"}, 300, function() {
                    Main.isAnimate = !1
                }) : $("#chartsCtn").animate({"margin-left": "-=" + e + "px"}, 300, function() {
                    Main.isAnimate = !1
                })
            }
            return !1
        })
    },fetchCharts: function() {
        $.ajax({url: Core.API_VER + "/chart/fetch",data: {uid: Signup.userDetail.id,nodeids: "0"},success: function(e) {
                Main.hideLoading();
                if (!e.success)
                    return;
                var t = "", n = e.result[0].items, r = n.length / Charts.colCount + "";
                r.indexOf(".") >= 0 ? r = parseInt(r) + 1 : r = parseInt(r), $("#chartsCtn").css("width", r * (Charts.itemW + Charts.MARGIN_RIGHT) + "px"), Charts.topObj = new Object, Charts.topChildObj = new Object;
                for (var i = 0; i < n.length; ++i) {
                    var s = n[i].next, o = n[i].fid, u = n[i].title, a = n[i].name;
                    Charts.topObj[s] = new Array(o, u, a), Charts.topChildObj[s] = new Object;
                    for (var f = 0; f < n[i].childs.length; ++f) {
                        var l = n[i].childs[f];
                        Charts.topChildObj[s][l.next] = new Array(l.fid, l.title, l.name, !1)
                    }
                    t += '<a href="#" data-next="' + s + '" class="chartCtn" style="width:' + Charts.itemW + "px;height:" + Charts.itemH + 'px;">' + '<img data-fid="' + o + '" src="" class="chartImg">' + "</a>"
                }
                $("#chartsCtn").html(t), $(".chartImg").each(function() {
                    var e = new Image;
                    e.obj = $(this), e.onload = function() {
                        this.obj.attr("src", this.src)
                    }, e.src = $.id2url($(this).data("fid"), "BC", "chart_cover")
                }), $(".chartCtn").click(function() {
                    $("#scrlCtl").parent().hide(), $("#chartsCtn").hide(), Charts.next = $(this).data("next"), Charts.showYear()
                })
            }})
    },showYear: function() {
        $("#fsapp").append('<div class="scrlCtlCtn"><div id="scrlYearCtl" class="scrlCtl"><p>' + Charts.topObj[Charts.next][1] + ' | 返回</p><a id="yearLftSldrBtn" href="#" class="sldrBtn lft"><span class="splt"></span></a><a href="#" id="yearRghtSldrBtn" class="sldrBtn rght"><span class="splt"></span></a></div></div><div id="chartsYearCtn" class="charts" style="width:0px; margin-left:25px; margin-top:' + Charts.yearSurplus + 'px"></div>'), $("#scrlYearCtl").css("margin-left", -$("#scrlYearCtl").width() / 2 + "px"), $("#scrlYearCtl").click(function() {
            $(this).parent().remove(), $("#chartsYearCtn").remove(), $("#scrlCtl").parent().show(), $("#chartsCtn").show(), Charts.next = ""
        }), $("#yearLftSldrBtn").click(function() {
            var e = -parseInt($("#chartsYearCtn").css("margin-left").replace("px", "")) + 25, t = 0;
            for (var n = Charts.pos - 1; n > 0; --n) {
                t += Charts.widthArr[n];
                if (t >= Core.bodyWidth) {
                    t -= Charts.widthArr[n], Charts.pos = n + 1;
                    break
                }
            }
            return e > Core.bodyWidth ? $("#chartsYearCtn").animate({"margin-left": "+=" + t + "px"}, 300) : (Charts.pos = 0, $("#chartsYearCtn").animate({"margin-left": "+=" + e + "px"}, 300)), !1
        }), $("#yearRghtSldrBtn").click(function() {
            var e = $("#chartsYearCtn").width() + parseInt($("#chartsYearCtn").css("margin-left").replace("px", "")) - Core.bodyWidth, t = 0;
            for (var n = Charts.pos; n < Charts.widthArr.length; ++n) {
                t += Charts.widthArr[n];
                if (t >= Core.bodyWidth) {
                    t -= Charts.widthArr[n], Charts.pos = n;
                    break
                }
            }
            return e > t ? $("#chartsYearCtn").animate({"margin-left": "-=" + t + "px"}, 300) : e > 0 && (Charts.pos = Charts.widthArr.length, $("#chartsYearCtn").animate({"margin-left": "-=" + e + "px"}, 300)), !1
        });
        var e = "", t = new Object;
        for (var n in Charts.topChildObj[Charts.next])
            e += n + ",";
        e = e.substring(0, e.length - 1);
        var r = e.split(",");
        Charts.widthArr = new Array, Charts.pos = 0, $.ajax({url: Core.API_VER + "/chart/fetch",data: {uid: Signup.userDetail.id,nodeids: e},success: function(e) {
                Main.hideLoading();
                var t = "", n = e.result;
                for (var i = 0; i < r.length; ++i) {
                    t += '<div class="chartDtl"><h3 class="year">' + n[r[i]].name + "</h3>";
                    var s = n[r[i]].items, o = "";
                    for (var u = 0; u < s.length; ) {
                        var a = "";
                        u % 2 == 1 && (a = "odd"), o += '<a data-parentnext="' + r[i] + '" data-next="' + s[u].next + '" class="chartsPlayEvent rctCtn ' + a + ' " href="#">' + '<div class="issCv" style="background-image:url(' + $.id2url(s[u].issueFid, "IN", "chart_issue") + ')"><div class="plyCtl"></div></div>' + '<div class="issCtn">' + '<h4 class="iss">' + s[u].name + "</h4>" + '<p class="topTrck">Top: ' + s[u].fristN + "</p>" + "</div>" + "</a>", ++u;
                        if (u % Charts.yearColCount == 0 || u == s.length) {
                            var f = 366;
                            u / Charts.yearColCount <= 1 && (f += 111), Charts.widthArr[Charts.widthArr.length] = f, t += '<div class="rctCtnCol">' + o + "</div>", o = ""
                        }
                    }
                    t += "</div>"
                }
                var f = 0;
                for (var u = 0; u < Charts.widthArr.length; ++u)
                    f += Charts.widthArr[u];
                $("#chartsYearCtn").css("width", f + 1 + "px"), $("#chartsYearCtn").html(t), $(".chartsPlayEvent").click(function() {
                    $(".chartsPlayEvent").find(".plyCtl").removeClass("selected"), $(this).find(".plyCtl").addClass("selected"), InsertPlay.play("/chart/fetch?q=" + $(this).data("next"), Main.screenId, "", "正收在听：" + Charts.topObj[Charts.next][1] + Charts.topChildObj[Charts.next][$(this).data("parentnext")][2] + "年" + $(this).find("h4").text())
                })
            }})
    },resize: function() {
        var e = Core.bodyWidth, t = Core.bodyHeight - 38 - 34 - 70;
        Charts.colCount = parseInt(t / (Charts.ITEM_WH + Charts.MARGIN_BOT)), Charts.colCount = Charts.colCount > 5 ? 5 : Charts.colCount, Charts.colCount = Charts.colCount < 2 ? 2 : Charts.colCount;
        var n = parseInt((t - Charts.colCount * (Charts.ITEM_WH + Charts.MARGIN_BOT)) / Charts.colCount);
        Charts.itemH = Charts.ITEM_WH + n, Charts.surplus = 0, Charts.itemH > 300 && (Charts.surplus = Charts.itemH - 300, Charts.surplus = Charts.surplus * Charts.colCount / 2, Charts.itemH = 300), Charts.itemW = Charts.itemH / 2 * 3, Charts.rowCount = parseInt(e / (Charts.itemW + Charts.MARGIN_RIGHT)) + 1, Charts.count = Charts.rowCount * Charts.colCount, t -= 34, Charts.yearColCount = parseInt(t / 77), Charts.yearSurplus = (t - Charts.yearColCount * 77) / 2, Main.screenId == "charts" && (Main.showLoading(), Charts.next == "" ? $("#fsapp").html("") : ($("#scrlYearCtl").parent().remove(), $("#chartsYearCtn").remove()), clearTimeout(Charts.resizeTmo), Charts.resizeTmo = setTimeout(function() {
            Charts.next == "" ? Charts.show() : (Charts.showYear(), $("#chartsCtn").css({"margin-top": Charts.surplus + "px","margin-left": "25px"}), $(".chartCtn").css({width: Charts.itemW + "px",height: Charts.itemH + "px"}))
        }, 200))
    }}, Jing.Ntlg = {colCount: 0,rowCount: 0,count: 0,surplus: 0,init: function() {
        $(document).on("click", ".ntlgCtn", function() {
            if (Ntlg.isAnimate)
                return;
            Ntlg.isAnimate = !0;
            var e = $(this).children(".desc").text();
            Search.flyObj($(this), "CmbtFlyBadge"), setTimeout(function() {
                Ntlg.isAnimate = !1, InsertPlay.play("/search/jing/fetch_pls?q=" + e, "ntlg", "", "正在收听：" + e)
            }, 1e3)
        })
    },show: function(e) {
        $("#fsapp").append('<div class="scrlCtlCtn"><div id="scrlCtl" class="scrlCtl"><p>自然语言推荐 | 退出</p><a id="lftSldrBtn" href="#" class="sldrBtn lft"><span class="splt"></span></a><a href="#" id="rghtSldrBtn" class="sldrBtn rght"><span class="splt"></span></a></div></div><div id="ntlgCtn" class="ntlg" style="position:absolute; top:' + (Ntlg.surplus + 72) + 'px"></div>'), $("#scrlCtl").css("margin-left", -$("#scrlCtl").width() / 2 + "px"), e == undefined ? Ntlg.fetchNtlg() : Ntlg.gnHtml(e, ""), $("#lftSldrBtn").click(function() {
            return !Main.isAnimate && Main.showLoading() && ($("#ntlgCtn").attr("id", "ntlgNewCtn"), $("#fsapp").append('<div id="ntlgCtn" class="ntlg" style="position:absolute; top:' + (Ntlg.surplus + 72) + 'px"></div>'), Ntlg.fetchNtlg("left")), !1
        }), $("#rghtSldrBtn").click(function() {
            return !Main.isAnimate && Main.showLoading() && ($("#ntlgCtn").attr("id", "ntlgNewCtn"), $("#fsapp").append('<div id="ntlgCtn" class="ntlg" style="position:absolute; top:' + (Ntlg.surplus + 72) + 'px"></div>'), Ntlg.fetchNtlg("right")), !1
        })
    },fetchNtlg: function(e) {
        $.ajax({url: Core.API_VER + "/app/fetch_natural",data: {uid: Signup.userDetail.id,ps: Ntlg.colCount * 10},success: function(t) {
                Main.hideLoading();
                if (!t.success)
                    return;
                Ntlg.items = t.result.items, Ntlg.gnHtml(Ntlg.items, e)
            }})
    },gnHtml: function(e, t) {
        Main.hideLoading();
        var n = "", r = 0;
        for (var i = 0; i < e.length; ) {
            n += '<div class="ntlgEmpt"><a class="ntlgCtn" href="#"><div class="ntlgRght"></div><p class="desc">' + e[i].sw + "</p>" + "</a></div>", ++i;
            if (i % Ntlg.colCount == 0 || i == e.length) {
                $("#ntlgCtn").append('<div class="ntlgCol">' + n + "</div>");
                var s = $.makeArray($("#ntlgCtn>.ntlgCol").last().children(".ntlgEmpt")), o = 0;
                for (var u = 0; u < s.length; ++u) {
                    var a = $(s[u]).children("a").width();
                    o < a && (o = a)
                }
                o += 5;
                for (var u = 0; u < s.length; ++u)
                    $(s[u]).css("width", o + "px");
                $("#ntlgCtn>.ntlgCol").last().css("width", o + "px"), r += o + 50;
                if (r >= Core.bodyWidth) {
                    r -= o + 50, $("#ntlgCtn>.ntlgCol").last().remove();
                    break
                }
                n = ""
            }
        }
        var f = parseInt((Core.bodyWidth - 50 - r) / 2) + 50;
        $("#ntlgCtn").css("width", r + "px"), t == "right" ? (Main.isAnimate = !0, $("#ntlgCtn").data("left", f), $("#ntlgCtn").css("left", Core.bodyWidth + "px"), $("#ntlgNewCtn").animate({left: -$("#ntlgNewCtn").width() + "px"}, 300, function() {
            $(this).remove(), Main.isAnimate = !1
        }), $("#ntlgCtn").animate({left: $("#ntlgCtn").data("left") + "px"}, 300)) : t == "left" ? (Main.isAnimate = !0, $("#ntlgCtn").data("left", f), $("#ntlgCtn").css("left", -$("#ntlgCtn").width() + "px"), $("#ntlgNewCtn").animate({left: Core.bodyWidth + "px"}, 300, function() {
            $(this).remove(), Main.isAnimate = !1
        }), $("#ntlgCtn").animate({left: $("#ntlgCtn").data("left") + "px"}, 300)) : $("#ntlgCtn").css("left", f + "px")
    },resize: function() {
        var e = Core.bodyWidth, t = Core.bodyHeight - 38 - 34 - 70 - 20;
        Ntlg.colCount = parseInt(t / 65), Ntlg.surplus = (t - Ntlg.colCount * 65) / 2, Main.screenId == "ntlg" && (Main.showLoading(), $("#fsapp").html(""), clearTimeout(Ntlg.resizeTmo), Ntlg.resizeTmo = setTimeout(function() {
            Ntlg.show(Ntlg.items)
        }, 200))
    }}, Jing.Pplr = {itemWH: 180,MARGIN_BOT: 40,MARGIN_RIGHT: 25,ITEM_WH: 180,colCount: 0,rowCount: 0,count: 0,init: function() {
        $(document).on("click", ".rndSqr>.Pplr", function() {
            $.ajax({url: Core.API_VER + "/music/post_Pplr_song",data: {uid: Signup.userDetail.id,tid: $(this).data("tid")}}), $(this).remove()
        })
    },show: function() {
        $("#fsapp").append('<div class="scrlCtlCtn"><div id="scrlCtl" class="scrlCtl"><p>最优听者 | 退出</p><a id="lftSldrBtn" href="#" class="sldrBtn lft"><span class="splt"></span></a><a href="#" id="rghtSldrBtn" class="sldrBtn rght"><span class="splt"></span></a></div></div><div id="pplrCtn" class="pplr" style="width:0px; margin-left:25px; margin-top:' + Pplr.surplus + 'px"></div>'), $("#scrlCtl").css("margin-left", -$("#scrlCtl").width() / 2 + "px"), Pplr.fetchPplr(), $("#lftSldrBtn").click(function() {
            var e = -parseInt($("#pplrCtn").css("margin-left").replace("px", "")) + 25, t = (Pplr.count / Pplr.colCount - 1) * (Pplr.itemWH + Pplr.MARGIN_RIGHT);
            return e > t ? $("#pplrCtn").animate({"margin-left": "+=" + t + "px"}, 300) : Main.showLoading() && Pplr.fetchPplr("left"), !1
        }), $("#rghtSldrBtn").click(function() {
            var e = $("#pplrCtn").width() + parseInt($("#pplrCtn").css("margin-left").replace("px", "")) - Core.bodyWidth, t = (Pplr.count / Pplr.colCount - 1) * (Pplr.itemWH + Pplr.MARGIN_RIGHT);
            return e > t ? $("#pplrCtn").animate({"margin-left": "-=" + t + "px"}, 300, "linear") : e > 0 && Main.showLoading() && Pplr.fetchPplr("right"), !1
        })
    },fetchPplr: function(e) {
        Pplr.direction = e;
        var t = Pplr.count;
        $.ajax({url: Core.API_VER + "/account/frequent",data: {uid: Signup.userDetail.id,ps: Pplr.count * 2},success: function(t) {
                Main.hideLoading();
                var n = t.result.items;
                Pplr.total = t.result.total;
                var r = n.length;
                n.length % Pplr.colCount != 0 && (r = n.length + (Pplr.colCount - n.length % Pplr.colCount));
                var i = parseInt(r / Pplr.colCount);
                Pplr.nowWidth = i * (Pplr.itemWH + Pplr.MARGIN_RIGHT), $("#pplrCtn").css("width", "+=" + Pplr.nowWidth), e == "left" && $("#pplrCtn").css("margin-left", "-=" + Pplr.nowWidth);
                var s = "", o = $("#pplrCtn").children().first();
                for (var u = 0; u < n.length; ) {
                    n[u].pt == null && (n[u].pt = 0);
                    var a = n[u].pt % 60 + " 秒";
                    n[u].pt / 60 > 1 && (a = parseInt(n[u].pt / 60) % 60 + " 分钟 " + a), n[u].pt / 60 / 60 > 1 && (a = parseInt(n[u].pt / 60 / 60) + " 小时 " + a), s += '<a href="#" data-uid="' + n[u].uid + '" data-nick="' + n[u].nick + '" class="rndSqrCtn abtEvent" style="width:' + Pplr.itemWH + "px; height:" + Pplr.itemWH + 'px">' + '<div class="rndSqr"></div>' + '<img data-cover="' + n[u].cover + '" src="" class="cv">' + '<h3 class="n">' + n[u].nick + "</h3>" + '<p class="an">Ta收听了 ' + a + "</p>" + "</a>", ++u, u % Pplr.colCount == 0 && (s = '<div class="rndSqrCol" style="float:left; width:' + (Pplr.itemWH + Pplr.MARGIN_RIGHT) + 'px;">' + s + "</div>", e == "left" ? o.before(s) : $("#pplrCtn").append(s), s = "")
                }
                e == "left" ? $("#lftSldrBtn").click() : e == "right" && $("#rghtSldrBtn").click(), $(".rndSqrCtn>img").each(function() {
                    var e = $(this).data("cover");
                    if (e == undefined || e == "")
                        return;
                    $(this).data("cover", "");
                    var t = new Image;
                    t.obj = $(this), t.onload = function() {
                        t.obj.attr("src", this.src)
                    }, t.src = $.id2url(e, "CP", "cover")
                })
            }})
    },resize: function() {
        var e = Core.bodyWidth, t = Core.bodyHeight - 38 - 34 - 70 + 6;
        Pplr.colCount = parseInt(t / (Pplr.ITEM_WH + Pplr.MARGIN_BOT)), Pplr.colCount = Pplr.colCount > 5 ? 5 : Pplr.colCount, Pplr.colCount = Pplr.colCount < 2 ? 2 : Pplr.colCount;
        var n = parseInt((t - Pplr.colCount * (Pplr.ITEM_WH + Pplr.MARGIN_BOT)) / Pplr.colCount);
        Pplr.itemWH = Pplr.ITEM_WH + n, Pplr.surplus = 0, Pplr.itemWH > 250 && (Pplr.surplus = Pplr.itemWH - 250, Pplr.surplus = Pplr.surplus * Pplr.colCount / 2, Pplr.itemWH = 250), Pplr.rowCount = parseInt(e / (Pplr.itemWH + Pplr.MARGIN_RIGHT)) + 1, Pplr.count = Pplr.rowCount * Pplr.colCount, Main.screenId == "pplr" && (Main.showLoading(), $("#fsapp").html(""), clearTimeout(Pplr.resizeTmo), Pplr.resizeTmo = setTimeout(function() {
            Pplr.show()
        }, 200))
    }}, Jing.Abt = {itemWH: 180,MARGIN_BOT: 40,MARGIN_RIGHT: 25,ITEM_WH: 180,colCount: 0,rowCount: 0,count: 0,abtObj: undefined,ptTms: 0,init: function() {
        $(document).on("mouseenter", ".rndSqr>.insptCtn", function() {
            $(this).parent().nextAll(".n, .an, .atn").hide(), $(this).animate({width: $(this).children(".cmbt").width() + 50 + "px"}, {speed: 300,queue: !1})
        }), $(document).on("mouseleave", ".rndSqr>.insptCtn", function() {
            $(this).parent().nextAll(".n, .an, .atn").show(), $(this).animate({width: "32px"}, {speed: 300,queue: !1})
        }), $(document).on("click", ".abtEvent", function() {
            if (!Main.showLoading())
                return;
            $(this).hasClass("avtMask") && Main.screenId == "frds" ? ($("#scrlCtl").attr("id", "frdsScrlCtl").parent().hide(), $("#frdsCtn").hide(), $("#lftSldrBtn").unbind("click").attr("id", "frdsLftSldrBtn"), $("#rghtSldrBtn").unbind("click").attr("id", "frdsRghtSldrBtn")) : $("#fsapp").html(""), Main.screenId == "" ? $("#fsapp").show().animate({opacity: "1"}, 300) : $("#" + Main.screenId).removeClass("selected"), $("#fsapp").removeClass(Main.screenId), $("#fsapp").addClass("abt"), Abt.resize(), Abt.show({uid: $(this).data("uid"),nick: $(this).data("nick")}), Main.screenId = "abt"
        })
    },show: function(e) {
        e == undefined ? (Abt.abtObj = new Object, Abt.abtObj.uid = Signup.userDetail.id, Abt.abtObj.nick = "个人主页") : Abt.abtObj = e;
        var t = "退出";
        $("#frdsScrlCtl").length == 1 && (t = "返回"), $("#fsapp").append('<div class="scrlCtlCtn"><div id="scrlCtl" class="scrlCtl"><p>' + Abt.abtObj.nick + " | " + t + '</p><a id="lftSldrBtn" href="#" class="sldrBtn lft"><span class="splt"></span></a><a href="#" id="rghtSldrBtn" class="sldrBtn rght"><span class="splt"></span></a></div></div><div id="abtCtn" class="abt" style="width:0px; margin-top:' + Abt.surplus + 'px; margin-left:0px;"></div>'), $("#scrlCtl").css("margin-left", -$("#scrlCtl").width() / 2 + "px"), $("#frdsScrlCtl").length == 1 && $("#scrlCtl").click(function() {
            return Main.screenId = "frds", $("#fsapp").removeClass("abt").addClass("frds"), $("#frds").addClass("selected"), $("#scrlCtl").parent().remove(), $("#abtCtn").remove(), $("#frdsScrlCtl").attr("id", "scrlCtl").parent().show(), $("#frdsCtn").show(), $("#frdsLftSldrBtn").attr("id", "lftSldrBtn").click(Frds.lftBtnClick), $("#frdsRghtSldrBtn").attr("id", "rghtSldrBtn").click(Frds.rghtBtnClick), !1
        }), Abt.st = 0, Abt.fetchAbt(Abt.st), $("#lftSldrBtn, #rghtSldrBtn").unbind("click"), $("#lftSldrBtn").click(function() {
            $("#avatarCtn").remove();
            var e = -parseInt($("#abtCtn").css("margin-left").replace("px", "")), t = (Abt.count / Abt.colCount - 1) * (Abt.itemWH + Abt.MARGIN_RIGHT);
            return e - t > 2 * (Abt.itemWH + Abt.MARGIN_RIGHT) ? $("#abtCtn").animate({"margin-left": "+=" + t + "px"}, 300) : $("#abtCtn").animate({"margin-left": "+=" + e + "px"}, 300), !1
        }), $("#rghtSldrBtn").click(function() {
            $("#avatarCtn").remove();
            var e = Abt.st, t = parseInt($("#abtCtn").css("margin-left").replace("px", "")), n = $("#abtCtn").width() + t - Core.bodyWidth, r;
            if (t == 0) {
                var i = parseInt((Core.bodyWidth - ($("#abtInfo").width() - Abt.itemWH / 2)) / (Abt.itemWH + Abt.MARGIN_RIGHT));
                r = $($.makeArray($(".rndSqrCol"))[i - 1]).offset().left + Abt.itemWH
            } else
                r = (Abt.count / Abt.colCount - 1) * (Abt.itemWH + Abt.MARGIN_RIGHT);
            return n > r ? $("#abtCtn").animate({"margin-left": "-=" + r + "px"}, 300) : n > 0 && (e += $("#abtCtn>.rndSqrCol").length * Abt.colCount, e >= Abt.total ? $("#abtCtn").animate({"margin-left": "-=" + n + "px"}, 300) : Main.showLoading() && $.ajax({url: Core.API_VER + "/personal/lovetickers",data: {uid: Signup.userDetail.id,ouid: Abt.abtObj.uid,st: e,ps: Abt.count},success: function(e) {
                    Abt.gnTkrsHtml(e.result.items, "right", !1)
                }})), !1
        })
    },fetchAbt: function(e, t) {
        Abt.direction = t;
        var n = Abt.count;
        $.ajax({url: Core.API_VER + "/personal/pmbases",data: {uid: Signup.userDetail.id,ouid: Abt.abtObj.uid,st: e,ps: n * 2},success: function(e) {
                var t = e.result.user, n = e.result.stat, r = e.result, i = "", s = "", o = '<span> <strong id="abtSec" class="serif">' + r.pt % 60 + "</strong> 秒</span>";
                r.pt / 60 < 1 && (s = "hide"), o = '<span class="' + s + '"> <strong id="abtMin" class="serif">' + parseInt(r.pt / 60) % 60 + "</strong> 分钟</span>" + o, s = "", r.pt / 60 / 60 < 1 && (s = "hide"), o = '<span class="' + s + '"> <strong id="abtHour" class="serif">' + parseInt(r.pt / 60 / 60) + "</strong> 小时</span>" + o;
                var u;
                r.cover == null && (r.cover = "chairs.jpg"), r.cover.length >= 17 ? u = $.id2url(r.cover, "CO", "cover") : u = IMG_URL + "/defaults/profile/" + r.cover.substring(0, r.cover.indexOf(".")) + "@2x.jpg", u.indexOf("?") >= 0 ? u = u.substring(0, u.indexOf("?")) + ".png" + u.substring(u.indexOf("?")) : u += ".png";
                if (t.bio == null || t.bio == "")
                    t.bio = "这个家伙很懒，什么都没留下。";
                var a = "";
                for (var f in r.usns) {
                    if (f == "Oicq")
                        continue;
                    a += '<a class="sns ' + ConverSns[f] + '" href="' + SnsAdd[f] + r.usns[f] + '" target="_blank"></a>'
                }
                var l = "", c = "hide", h = "hide", s = "";
                Core.ie68 && (s = "hide"), Signup.userDetail.id == Abt.abtObj.uid ? l = '<a href="#" class="btn ' + s + '"></a>' : (l = '<a id="abtPlyCtl" class="plyCtl ' + s + '" href="#"></a>', t.flwd ? h = "" : c = ""), i = '<div class="prflBg" style="margin-top:' + -(72 + Abt.surplus) + 'px">' + '<img id="abtCover" src="' + u + '" style="height:' + ((Abt.itemWH + Abt.MARGIN_BOT) * Abt.colCount - 6 + 72 + Abt.surplus * 2 + 1) + "px; width:" + ((Abt.itemWH + Abt.MARGIN_BOT) * Abt.colCount - 6 + 72 + Abt.surplus * 2 + 1) + 'px" class="prflCv">' + "</div>" + '<div id="prflPtrn" class="prflPtrn" style="height:100%; width:0px"></div>' + '<div class="prflCtt" style="margin-top:' + (72 + Abt.surplus * 2) + "px; height:" + ((Abt.itemWH + Abt.MARGIN_BOT) * Abt.colCount - 6) + 'px; width:90%">' + '<div id="abtAvtCtn" class="avt">' + '<img id="abtAvt" src="' + $.id2default("avatar", 100) + '" width="75">' + l + "</div>" + '<div class="prflHdr">' + '<h3 id="abtNick" class="name"><span>' + t.nick + '</span><a id="abtFlw" href="#" class="flw ' + c + '">关注Ta</a><a id="abtUnFlw" href="#" class="flw unflw ' + h + '">取消关注</a></h3>' + '<p class="lstTs">Ta 已经收听了 ' + o + "</p>" + "</div>" + '<div class="sclntwk">' + a + "</div>" + '<div class="bio">' + '<p id="abtBio">' + t.bio + "</p>" + "</div>" + '<div class="stats">' + '<div class="statsCtn" style="boder-left:none;">' + n.favTk + '<p class="desc">喜欢的歌曲</p></div>' + '<div class="statsCtn">' + n.frd + '<p class="desc">关注</p></div>' + '<div class="statsCtn">' + n.befrd + '<p class="desc">被关注</p></div>' + "</div>" + "</div>", $("#abtCtn").append('<div id="abtInfo" style="float:left; width:' + ((Abt.itemWH + Abt.MARGIN_BOT) * Abt.colCount - 6 + 72 + Abt.surplus * 2 + 1) + 'px; margin-right:25px">' + i + "</div>"), Abt.total = e.result.ticker.total, Abt.gnTkrsHtml(e.result.ticker.items, "", !0), Core.imgLoad($("#abtAvt"), "", t.avatar, 75), r.user.ol ? Signup.userDetail.id == Abt.abtObj.uid ? $("#playCtl").hasClass("pause") && Abt.startPt() : Abt.startPt() : Abt.stopPt(), $("#abtPlyCtl").click(function() {
                    $(this).addClass("selected"), InsertPlay.play("/search/jing/fetch_pls?q=@" + Abt.abtObj.nick, "abt", "", "正在收听：" + Abt.abtObj.nick + "喜欢的歌曲")
                }), $("#abtFlw").click(function() {
                    $(this).addClass("hide"), $.ajax({url: Core.API_VER + "/account/follow_frd",data: {frdid: Abt.abtObj.uid,uid: Signup.userDetail.id},success: function() {
                            Gns.nowGns("关注成功"), $("#abtUnFlw").removeClass("hide")
                        }})
                }), $("#abtUnFlw").click(function() {
                    $(this).addClass("hide"), $.ajax({url: Core.API_VER + "/account/unfollow_frd",data: {frdid: Abt.abtObj.uid,uid: Signup.userDetail.id},success: function() {
                            Gns.nowGns("取消成功"), $("#abtFlw").removeClass("hide")
                        }})
                });
                if (Signup.userDetail.id == Abt.abtObj.uid) {
                    var p = function() {
                        $("#abtNick").unbind("click"), $(this).html('<input id="abtEditNick" class="edit" type="text" value="' + Signup.userDetail.nick + '" />'), $("#abtEditNick").focus(), $("#abtEditNick").blur(function() {
                            Tps.hide();
                            var e = function(e) {
                                e == undefined && $.ajax({url: Core.API_VER + "/account/update_profile",data: {nick: Signup.userDetail.nick,uid: Signup.userDetail.id}}), $("#abtNick").html(""), $("#abtNick").text(Signup.userDetail.nick), setTimeout(function() {
                                    $("#abtNick").click(p)
                                }, 100)
                            };
                            Signup.userDetail.nick == $(this).val() ? e(!1) : Stngs.checkNick($(this), !0, e)
                        }).keyup(function(e) {
                            e.keyCode == 13 && $(this).blur()
                        })
                    };
                    $("#abtNick").click(p);
                    var d = function() {
                        $("#abtBio").unbind("click");
                        var e = $(this).text();
                        $(this).html('<textarea id="abtEditBio" class="edit" type="text">' + e + "</textarea>"), $("#abtEditBio").focus(), $("#abtEditBio").blur(function() {
                            var e = $("#abtEditBio").val();
                            $("#abtEditBio").remove();
                            if (e == null || e == "")
                                e = "这个家伙很懒，什么都没留下。";
                            $("#abtBio").html(e), e != t.bio && $.ajax({url: Core.API_VER + "/account/update_profile",data: {bio: e,uid: Signup.userDetail.id}}), setTimeout(function() {
                                $("#abtBio").click(d)
                            }, 100)
                        }).keydown(function(e) {
                            e.keyCode == 13 && $(this).blur()
                        })
                    };
                    $("#abtBio").click(d), $("#abtAvtCtn").click(Abt.avtClick)
                }
                Core.ie68 && $("#abtAvtCtn").mouseenter(function() {
                    $(this).children("a").show()
                }).mouseleave(function() {
                    $(this).children("a").hide()
                })
            }})
    },avtClick: function() {
        if (Abt.loadAvatar)
            return;
        if ($("#avatarCtn").length == 1) {
            $("#avatarCtn").remove();
            return
        }
        Abt.loadAvatar = !0, $.ajax({url: Core.API_VER + "/account/fetch_avatar",data: {uid: Signup.userDetail.id},success: function(e) {
                Abt.loadAvatar = !1;
                var t = e.result.items, n = [];
                for (var r = 0, i = 1; r < t.length; ++r)
                    t[r].type == "Local" ? n[0] = t[r] : (n[i] = t[r], ++i);
                t = n;
                var s = '<div id="avatarCtn" class="blckpCtn abt" style="z-index:9999"><form id="uploadCoverForm" style="position:absolute; z-index:9999;" action="' + Core.API_VER + '/personal/coverupload" name="uploadCoverForm" method="post" enctype="multipart/form-data" target="hidden">' + '<input id="uploadCover" style="display:none" class="upld" name="file" type="file" onchange="Abt.uploadCover();">' + '<input name="uid" type="hidden" value="' + Signup.userDetail.id + '">' + '<input name="functype" type="hidden" value="cover">' + '<input name="js" type="hidden" value="true">' + '<input name="atoken" type="hidden" value="' + Core.getCookie("jing.auth").split(",")[0] + '">' + '<input name="rtoken" type="hidden" value="' + Core.getCookie("jing.auth").split(",")[1] + '">' + "</form>" + '<form id="uploadAvtForm" style="position:absolute; z-index:9999; left:100px;" action="' + Core.API_VER + '/user/avatar/avatarupload" name="uploadAvtForm" method="post" enctype="multipart/form-data" target="hidden">' + '<input id="uploadAvt" style="display:none" class="upld" name="file" type="file" onchange="Abt.uploadPhoto();">' + '<input name="uid" type="hidden" value="' + Signup.userDetail.id + '">' + '<input name="functype" type="hidden" value="avatar">' + '<input name="js" type="hidden" value="true">' + '<input name="atoken" type="hidden" value="' + Core.getCookie("jing.auth").split(",")[0] + '">' + '<input name="rtoken" type="hidden" value="' + Core.getCookie("jing.auth").split(",")[1] + '">' + "</form>" + '<div class="blckpHd">' + '<h3 class="name">选择或上传头像</h3>' + '<p class="desc">Choose or upload your avatar</p>' + '<div class="upldBtns">' + '<a id="browseAvt" href="#" class="upld">上传头像</a>' + '<a id="browseCover" href="#" class="upld">上传封面</a>' + '<input id="uploadifyAvt" name="file" type="file">' + '<input id="uploadifyCover" name="file" type="file">' + "</div>" + '<div class="splt"></div>' + "</div>" + '<div class="blckpBd">', o = t.length / 3 + "";
                o.indexOf(".") >= 0 ? o = parseInt(o) + 1 : o = parseInt(o);
                for (var r = 0; r < o; ++r) {
                    var u = 0, a = 0, f = t.length - r * 3;
                    f > 3 && (f = 3), u = (280 - f * 70) / (f + 1), r != 0 && (a = 20);
                    for (var i = r * 3; i < (r + 1) * 3; ++i) {
                        if (t[i] == undefined)
                            break;
                        s += '<a class="avt avtSwitchEvent" data-type="' + t[i].type + '" style="margin-left:' + u + "px; margin-top:" + a + 'px" href="#">' + '<div class="avtCt">' + '<div class="avtMask"></div>' + '<img data-avatar="' + t[i].url + '" class="avtImg" src="">' + "</div>" + '<span class="name">' + Avatar[t[i].type] + "</span>" + "</a>"
                    }
                }
                s += "</div></div>", $("body").append(s), Core.ie ? ($("#browseAvt").remove(), $("#browseCover").remove(), Abt.uploadifyAvt(), Abt.uploadifyCover()) : ($("#uploadifyAvt").remove(), $("#uploadifyCover").remove()), $("#avatarCtn").css({left: "130px",top: $("#abtAvtCtn").offset().top + "px"}), $("#avatarCtn").find("img").each(function() {
                    var e = $(this).data("avatar");
                    Core.imgLoad($(this), "", e, 50)
                }), $(".avtSwitchEvent").click(function() {
                    if (!$(this).hasClass("selected")) {
                        $(".avtSwitchEvent").removeClass("selected"), $(this).addClass("selected");
                        var e = $(this), t = e.data("type");
                        $.ajax({url: Core.API_VER + "/account/change_avatar",data: {uid: Signup.userDetail.id,type: t},success: function(t) {
                                if (!t.success)
                                    return;
                                Signup.userDetail.fid = e.find("img").data("avatar"), Core.imgLoad($("#abtAvt"), "", Signup.userDetail.fid, 75)
                            }})
                    }
                }), $("#browseAvt").click(function(e) {
                    return $(this).hasClass("uploading") || $("#uploadAvt").click(), !1
                }), $("#browseCover").click(function(e) {
                    return $(this).hasClass("uploading") || $("#uploadCover").click(), !1
                })
            }})
    },uploadifyAvt: function() {
        $("#uploadifyAvt").uploadify({formData: {uid: Signup.userDetail.id,atoken: Core.getCookie("jing.auth").split(",")[0],rtoken: Core.getCookie("jing.auth").split(",")[1]},uploader: "/api/v1/user/avatar/avatarupload",swf: "http://jing.fm/assets/vendor/uploadify.swf",auto: !0,buttonText: "上传头像",fileObjName: "file",multi: !1,width: 50,height: 12,onSWFReady: function() {
                $("#SWFUpload_0").css({left: "0px",top: "0px",width: "80px",height: "30px"})
            },onDialogOpen: function() {
                $("#uploadifyAvt-button").addClass("selected"), $("#uploadifyAvt-button").children("span").text("正在打开")
            },onDialogClose: function() {
                $("#uploadifyAvt-button").removeClass("selected"), $("#uploadifyAvt-button").children("span").text("上传头像")
            },onUploadStart: function(e) {
                $("#uploadifyAvt-button").children("span").text("上传中")
            },onUploadSuccess: function(file, response, data) {
                var $obj = $("#uploadifyAvt-button").children("span");
                console.log(response), response = eval("(" + response + ")");
                if (response.success) {
                    $obj.text("上传头像"), Signup.userDetail.fid.indexOf("http://") != 0 && (Signup.userDetail.fid = response.result, Core.imgLoad($("#abtAvt"), "", Signup.userDetail.fid, 75));
                    if ($("#avatarCtn").find("img").length != 0) {
                        var $obj = $("#avatarCtn").find("img").first();
                        Core.imgLoad($obj, "", response.result, 50), $obj.data("avatar", response.result)
                    }
                }
            }})
    },uploadifyCover: function() {
        $("#uploadifyCover").uploadify({formData: {uid: Signup.userDetail.id,atoken: Core.getCookie("jing.auth").split(",")[0],rtoken: Core.getCookie("jing.auth").split(",")[1]},uploader: "/api/v1/personal/coverupload",swf: "http://jing.fm/assets/vendor/uploadify.swf",auto: !0,buttonText: "上传封面",fileObjName: "file",multi: !1,width: 50,height: 12,onSWFReady: function() {
                $("#SWFUpload_0").css({left: "0px",top: "0px",width: "80px",height: "30px"})
            },onDialogOpen: function() {
                $("#uploadifyCover-button").addClass("selected"), $("#uploadifyCover-button").children("span").text("正在打开")
            },onDialogClose: function() {
                $("#uploadifyCover-button").removeClass("selected"), $("#uploadifyCover-button").children("span").text("上传封面")
            },onUploadStart: function(e) {
                $("#uploadifyCover-button").children("span").text("上传中")
            },onUploadSuccess: function(file, response, data) {
                var $obj = $("#uploadifyCover-button").children("span");
                console.log(response), response = eval("(" + response + ")");
                if (response.success) {
                    $obj.text("上传封面");
                    var cover = response.result;
                    cover = $.id2url(cover, "CO", "cover"), cover.indexOf("?") >= 0 ? cover = cover.substring(0, cover.indexOf("?")) + ".png" + cover.substring(cover.indexOf("?")) : cover += ".png", $("#abtCover").attr("src", cover)
                } else
                    Gns.nowGns(response.codemsg)
            }})
    },uploadPhoto: function(e) {
        document.uploadAvtForm.submit(), $("#browseAvt").addClass("uploading").text("上传中"), $("#uploadAvtForm").show()
    },avtUploadCallback: function(e) {
        $("#browseAvt").removeClass("uploading").text("上传头像"), $("#uploadAvtForm").hide();
        if (e.success) {
            Signup.userDetail.fid.indexOf("http://") != 0 && (Signup.userDetail.fid = e.result, Core.imgLoad($("#abtAvt"), "", Signup.userDetail.fid, 75));
            if ($("#avatarCtn").find("img").length != 0) {
                var t = $("#avatarCtn").find("img").first();
                Core.imgLoad(t, "", e.result, 50), t.data("avatar", e.result)
            }
        } else
            Gns.nowGns(e.codemsg)
    },uploadCover: function(e) {
        document.uploadCoverForm.submit(), $("#browseCover").addClass("uploading").text("上传中"), $("#uploadCoverForm").show()
    },coverUploadCallback: function(e) {
        $("#browseCover").removeClass("uploading").text("上传封面");
        if (e.success) {
            var t = e.result;
            t = $.id2url(t, "CO", "cover"), t.indexOf("?") >= 0 ? t = t.substring(0, t.indexOf("?")) + ".png" + t.substring(t.indexOf("?")) : t += ".png", $("#abtCover").attr("src", t)
        } else
            Gns.nowGns(e.msg)
    },gnTkrsHtml: function(e, t, r) {
        var i = "", s = e.length;
        e.length % Abt.colCount != 0 && (s = e.length + (Abt.colCount - e.length % Abt.colCount));
        var o = parseInt(s / Abt.colCount);
        Abt.nowWidth = o * (Abt.itemWH + Abt.MARGIN_RIGHT) + 1, r && (Abt.nowWidth += $("#abtInfo").width() - (Abt.itemWH / 2 - 25)), $("#abtCtn").css("width", "+=" + Abt.nowWidth), $("#prflPtrn").css("width", $("#abtCtn").width() + "px"), $("#prflPtrn").width() < Core.bodyWidth && $("#prflPtrn").css("width", Core.bodyWidth + "px");
        for (var u = 0; u < s; ) {
            var a = "";
            Core.ie68 ? a = "hide" : a = "dspr";
            if (e[u] == undefined)
                i += '<div class="rndSqrCtn" style="width:' + Abt.itemWH + "px;height:" + Abt.itemWH + 'px;">' + "</div>";
            else {
                var f = "";
                e[u].q != undefined && e[u].q != "" && (f = '<a class="insptCtn ' + a + '">' + '<div href="#" class="inspt"></div>' + '<div class="cmbt">' + e[u].q + "</div>" + "</a>"), i += '<div class="rndSqrCtn" style="width:' + Abt.itemWH + "px;height:" + Abt.itemWH + 'px;">' + '<div class="rndSqr">' + f + '<a href="#" class="plyCtl favPlayCtlEvent ' + a + '"></a>' + "</div>" + '<img data-fid="' + e[u].fid + '" src="' + IMG_URL + "/defaults/album/300" + Retina.suffix + '.jpg" class="cv">' + '<h3 class="n">' + e[u].tit + "</h3>" + '<p class="an">' + e[u].an + "</p>" + '<p class="atn">' + e[u].atn + "</p>" + "</div>"
            }
            ++u;
            if (u % Abt.colCount == 0) {
                var l = 0;
                $(".rndSqrCol").length == 0 && (l = Abt.itemWH / 2), $("#abtCtn").append('<div class="rndSqrCol" style="float:left; width:' + (Abt.itemWH + Abt.MARGIN_RIGHT) + "px; margin-left:-" + l + 'px;">' + i + "</div>"), i = "", n = 0
            }
        }
        $(".rndSqrCol").length == 0 && $("#abtCtn").append(Fav.gnEmpty()), Main.hideLoading(), t == "right" && $("#rghtSldrBtn").click(), $(".rndSqrCtn>img").each(function() {
            var e = $(this).data("fid");
            if (e == undefined || e == "")
                return;
            $(this).data("fid", "");
            var t = new Image;
            t.obj = $(this), t.onload = function() {
                t.obj.attr("src", this.src)
            }, t.src = $.id2url(e, "AM", "album")
        }), $(".usrAvt").each(function() {
            $(this).css("width", $(this).children("p").width() + 50 + "px"), Core.imgLoad($(this).children("img"), "", $(this).children("img").data("avt"), 30)
        });
        var u = 0;
        $(".favPlayCtlEvent").each(function() {
            $(this).hasClass("plyCtl") && $(this).data("music") == undefined && (e[u].n = e[u].tit, $(this).data("music", Search.getMusic(e[u])), ++u)
        })
    },startPt: function() {
        Abt.ptTms == 0 && Main.screenId == "abt" && (Abt.ptTms = setInterval(function() {
            var e = parseInt($("#abtSec").text()) + 1, t = parseInt($("#abtMin").text()), n = parseInt($("#abtHour"
            ).text()), r = !1, i = !1;
            e == 60 && (r = !0, e = 0), r && (++t, t == 60 && (i = !0, t = 0)), i && ++n, $("#abtSec").text(e), r && $("#abtMin").parent().show(), $("#abtMin").text(t), i && $("#abtHour").parent().show(), $("#abtHour").text(n)
        }, 1e3))
    },stopPt: function() {
        clearTimeout(Abt.ptTms), Abt.ptTms = 0
    },resize: function() {
        var e = Core.bodyWidth, t = Core.bodyHeight - 72 - 70 + 6;
        Abt.colCount = parseInt(t / (Abt.ITEM_WH + Abt.MARGIN_BOT)), Abt.colCount = Abt.colCount > 5 ? 5 : Abt.colCount, Abt.colCount = Abt.colCount < 2 ? 2 : Abt.colCount;
        var n = parseInt((t - Abt.colCount * (Abt.ITEM_WH + Abt.MARGIN_BOT)) / Abt.colCount);
        Abt.itemWH = Abt.ITEM_WH + n, Abt.surplus = 0, Abt.itemWH > 250 && (Abt.surplus = Abt.itemWH - 250, Abt.surplus = Abt.surplus * Abt.colCount / 2, Abt.itemWH = 250), Abt.rowCount = parseInt(e / (Abt.itemWH + Abt.MARGIN_RIGHT)) + 1, Abt.count = Abt.rowCount * Abt.colCount, Main.screenId == "abt" && (Main.showLoading(), $("#fsapp").html(""), clearTimeout(Abt.resizeTmo), Abt.resizeTmo = setTimeout(function() {
            Abt.show(Abt.abtObj)
        }, 200))
    }}, Jing.Frds = {itemW: 360,itemH: 70,MARGIN_BOT: 20,MARGIN_RIGHT: 20,MENU_WIDTH: 100,colCount: 0,rowCount: 0,count: 0,widthArr: null,pokeIds: new Object,mid: "",init: function() {
        $(document).on("click", ".flwLstnEvent", function() {
            if (Flw.isFlw) {
                Flw.toid == "" ? Gns.nowGns('你正在被人跟听中，暂时不能跟听别人。<a href="#" id="showFlwUsers" class="trg">查看跟听我的人</a>') : Gns.nowGns("你正在跟听中，暂时不能做其他操作哦。");
                return
            }
            Core.nowIsReady ? Flw.listenRequest($(this).data("uid"), $(this).data("nick")) : Gns.nowGns("网络异常，暂时不能跟听，请重试或者刷新")
        }), $(document).on("click", ".chtEvent", function() {
            Notifier.requestPermission(), $(this).parent().children(".num").remove(), Cht.show($(this).data("uid"), $(this).data("nick"))
        }), $(document).on("click", ".flwFrdEvent", function() {
            var e = $(this), t = $(this).data("nick");
            $.ajax({url: Core.API_VER + "/account/follow_frd",data: {uid: Signup.userDetail.id,frdid: $(this).data("uid")},success: function(n) {
                    if (!n.success) {
                        Gns.nowGns(n.codemsg);
                        return
                    }
                    e.removeClass("flwFrdEvent").addClass("selected"), Gns.nowGns("你已成功关注了 " + t)
                }})
        }), $(document).on("click", ".pokeEvent", function() {
            var e = $(this).data("uid");
            if (Frds.pokeIds[e] != undefined)
                return;
            Frds.pokeIds[e] = 1, $.ajax({url: Core.API_VER + "/account/remind_frd",data: {uid: Signup.userDetail.id,frdid: $(this).data("uid")}}), Gns.nowGns("提醒已发送")
        }), $(document).on("click", ".invtEvent", function() {
            Gns.nowGns("正在发送邀请..."), $.ajax({url: Core.API_VER + "/oauth/invite_friend",data: {uid: Signup.userDetail.id,suid: $(this).data("uid"),nick: $(this).data("nick"),identify: ConverSns[Frd.mid + "1"]},success: function(e) {
                    if (!e.success) {
                        e.code == "802" ? Gns.nowGns("你的" + btnDes[ConverSns[Frd.mid + "1"]] + '绑定已过期，<a href="#" class="snsBind">请重新绑定</a>') : e.code == "804" ? Gns.nowGns("访问" + btnDes[ConverSns[Frd.mid + "1"]] + "的时候超时，请重试") : Gns.nowGns(e.msg);
                        return
                    }
                    setTimeout(function() {
                        Gns.nowGns("已经邀请成功")
                    }, 2e3)
                }})
        }), $(document).on("click", ".snsBind", function() {
            Frds.mid = "addSNS", Main.screenId == "frds" ? Frds.showSns() : Main.menuClick("addSNS")
        })
    },show: function(e) {
        $("#frds").children(".num").remove(), Main.showLoading(), $("#fsapp").html('<div class="scrlCtlCtn"><div id="scrlCtl" class="scrlCtl"><p>好友列表 | 退出</p><a id="lftSldrBtn" href="#" class="sldrBtn lft"><span class="splt"></span></a><a href="#" id="rghtSldrBtn" class="sldrBtn rght"><span class="splt"></span></a></div></div><div id="frdsCtn" class="frds" style="width:0px; margin-left:25px; margin-top:' + Frds.surplus + 'px"></div>');
        if (Frds.mid == "snsFrds" || ConverSns[e] != undefined)
            $("#scrlCtl>p").text("SNS好友 | 返回"), $("#scrlCtl").click(function() {
                return Frds.mid = "frds", Frds.show(), !1
            });
        $("#scrlCtl").css("margin-left", -$("#scrlCtl").width() / 2 + "px");
        var t = Signup.userDetail.snstokens, n = "";
        if (Frds.mid == "snsFrds" || ConverSns[e] != undefined) {
            n = '<div id="frdsMenu" class="frdsMenu">';
            var r = 0;
            for (var i in t) {
                ++r;
                if (ConverSns[i] == "oicq")
                    continue;
                n += '<a id="' + ConverSns[i] + '" href="#" class="menu ' + ConverSns[i] + ' selected"><span class="name">' + btnDes[i] + "</span></a>"
            }
            r != SnsArr.length && (n += '<a id="addSNS" href="#" class="menu addSNS selected"><span class="name">添加SNS</span></a>'), n += '</div><div id="frdsList" class="frdsList"></div>'
        } else {
            var s = "", o = "";
            Cht.offlineMes["0"] != undefined && (s = '<em class="num serif" style="left: 56px; top: -5px;">' + Cht.offlineMes[0].count + "</em>");
            if (Cht.offlineCount > 0) {
                var u = Cht.offlineCount;
                Cht.offlineMes["0"] != undefined && (u -= Cht.offlineMes[0].count), u > 0 && (o = '<em class="num serif" style="left: 56px; top: -5px;">' + u + "</em>")
            }
            n = '<div id="frdsMenu" class="frdsMenu"><a id="inHs" href="#" class="menu frds selected"><span class="name">最近联系</span>' + o + "</a>" + '<a id="mtFrds" href="#" class="menu frdsRcmd"><span class="name">猜你喜欢</span></a>' + '<a id="ntff" href="#" class="menu ntff"><span class="name">好友请求</span>' + s + "</a>" + '<a id="snsFrds" href="#" class="menu sns"><span class="name">社交网络</span></a>' + '<a id="srchFrds" href="#" class="menu srch"><span class="name">搜索好友</span></a>' + '</div><div id="frdsList" class="frdsList"></div>'
        }
        $("#frdsCtn").html(n), $("#frdsMenu>.menu").click(function() {
            $("#frdsList").html(""), $("#frdsMenu>.selected").removeClass("selected"), $(this).addClass("selected"), Frds.pos = 0, Frds.st = 0, Frds.index = undefined, Frds.widthArr = new Array, Frds.mid = $(this).attr("id"), $("#frdsCtn").css({width: "auto","margin-left": "25px"}), Frds.mid == "snsFrds" ? Core.objLength(t) > 0 ? Frds.show() : Frds.showSns() : Frds.mid == "addSNS" ? Frds.showSns() : Frds.mid == "srchFrds" ? (Main.hideLoading(), $("#frdsList").html('<div class="frdsCol"><div class="frdsSrchCtn"><input id="frdsSrchFld" class="frdsSrchFld" placeholder="搜索好友的名字或者邮箱"><a href="#" id="frdsSrchBtn" class="frdsSrchBtn"></a></div>'), $("#frdsSrchBtn").click(function() {
                var e = $("#frdsSrchFld").val();
                if (e == "")
                    return;
                if (!Main.showLoading())
                    return;
                var t = $.makeArray($("#frdsList>.frdsCol"));
                for (var n = 0; n < t.length; ++n)
                    n == 0 ? $(t[n]).children(".frdsCtn").remove() : $(t[n]).remove();
                $.ajax({url: Core.API_VER + "/search/fetch_nick",data: {u: Signup.userDetail.id,q: e,st: "0",ps: Frds.count - 1},success: Frds.result})
            }), $("#frdsSrchFld").keyup(function(e) {
                e.keyCode == 13 && $("#frdsSrchBtn").click()
            })) : Frds.fetchFrds(Frds.st), Frds.mid == "ntff" && Cht.offlineMes["0"] != undefined && (Cht.offlineCount -= Cht.offlineMes[0].count, delete Cht.offlineMes[0]), $(this).children(".num").remove()
        }), e == undefined ? $("#frdsMenu>.menu").first().click() : e == "addSNS" ? Frds.showSns() : $("#" + e).click(), $("#lftSldrBtn").click(Frds.lftBtnClick), $("#rghtSldrBtn").click(Frds.rghtBtnClick)
    },lftBtnClick: function() {
        var e = -parseInt($("#frdsCtn").css("margin-left").replace("px", "")) + 25, t = 0;
        for (var n = Frds.pos - 1; n > 0; --n) {
            t += Frds.widthArr[n];
            if (t >= Core.bodyWidth) {
                t -= Frds.widthArr[n], Frds.pos = n + 1;
                break
            }
        }
        return e > Core.bodyWidth ? $("#frdsCtn").animate({"margin-left": "+=" + t + "px"}, 300) : (Frds.pos = 0, $("#frdsCtn").animate({"margin-left": "+=" + e + "px"}, 300)), !1
    },rghtBtnClick: function() {
        var e = $("#frdsCtn").width() + parseInt($("#frdsCtn").css("margin-left").replace("px", "")) - Core.bodyWidth, t = 0, n = 0;
        for (var r = Frds.pos; r < Frds.widthArr.length; ++r) {
            t += Frds.widthArr[r];
            if (t >= Core.bodyWidth) {
                t -= Frds.widthArr[r], n = r;
                break
            }
        }
        if (e > t)
            Frds.pos = n, $("#frdsCtn").animate({"margin-left": "-=" + t + "px"}, 300);
        else if (e > 0) {
            var i = Frds.st;
            i += $(".frdsCtn").length, i >= Frds.total || Frds.mid == "srchFrds" ? (Frds.pos = Frds.widthArr.length, $("#frdsCtn").animate({"margin-left": "-=" + e + "px"}, 300)) : Main.showLoading() && Frds.fetchFrds(i, "right")
        }
        return !1
    },showSns: function() {
        Main.hideLoading(), $("#scrlCtl>p").text("扩展好友 | 返回"), $("#scrlCtl").unbind("click"), $("#scrlCtl").click(function() {
            return Core.objLength(Signup.userDetail.snstokens) > 0 ? Frds.show("snsFrds") : Frds.show(), !1
        });
        var e = '<div id="snsCtn" class="jingSltrCtn"><div class="sltrHdr"><h2 class="tit">选择你要绑定的社交网络</h2><p class="desc">Connect Your Social Network With Jing</p></div><div class="sltrIcons">', t = Core.bodyWidth * .05, n = 750 + 4 * t;
        for (var r = 0; r < SnsArr.length; ++r) {
            var i = "";
            for (var s in Signup.userDetail.snstokens)
                s == ConverSns[SnsArr[r] + "1"] && (i = "selected");
            r == SnsArr.length - 1 && (t = "0"), e += '<a data-snsid="' + SnsArr[r] + '" href="#" class="iconBg ' + i + '" style="margin-right:' + t + 'px">' + '<div class="icon ' + SnsArr[r] + '"></div>' + '<span class="desc">' + btnDes[ConverSns[SnsArr[r] + "1"]] + "</span>" + "</a>"
        }
        e += "</div></div>", $("#frdsCtn").html(e), $("#frdsCtn").css("margin-top", (Core.bodyHeight - 104 - 330) / 2 - 38 - 34 + "px"), $("#snsCtn").css({width: n + "px","margin-left": (Core.bodyWidth - n) / 2 - 25 + "px"}), $(".iconBg").click(function() {
            var e = $(this).data("snsid");
            return $(this).hasClass("selected") ? Frds.unbind(e, $(this)) : Frds.openSns(e), !1
        })
    },openSns: function(e) {
        var t = SnsWindowWh[e][0], n = SnsWindowWh[e][1], r = (Core.screenWidth - t) / 2, i = (Core.screenHeight - n - 68) / 2, s = ConverSns[e + "1"], o = Core.API_VER + "/oauth/proxyauthorize?action=BIND&identify=" + s + "&uid=" + Signup.userDetail.id + "&standalone=" + Core.standalone;
        window.open(o, "_blank", "width=" + t + "px, height=" + n + "px, left=" + r + "px, top=" + (Core.screenHeight - n - 68) / 2 + "px, directories=0, location=0, menubar=0, resizable=0, status=0, toolbar=0")
    },unbind: function(e, t) {
        if (!confirm("确定解除绑定吗？"))
            return !1;
        t.removeClass("selected"), $.ajax({url: Core.API_VER + "/oauth/remove_bind",data: {uid: Signup.userDetail.id,identify: ConverSns[e + "1"]},success: function(t) {
                if (!t.success) {
                    Gns.nowGns(t.msg);
                    return
                }
                delete Signup.userDetail.snstokens[ConverSns[e + "1"]]
            }})
    },fetchFrds: function(e, t) {
        Main.showLoading(), Frds.direction = t, Frds.mid == "ntff" ? $.ajax({url: resUrl[Frds.mid],data: {uid: Signup.userDetail.id,fuid: "0",st: e,ps: Frds.count},success: function(e) {
                Frds.result(e, t)
            }}) : Frds.index == undefined ? $.ajax({url: resUrl[Frds.mid],data: {uid: Signup.userDetail.id,ouid: Signup.userDetail.id,st: e,ps: Frds.count},success: function(e) {
                Frds.result(e, t)
            }}) : $.ajax({url: resUrl[Frds.mid],data: {uid: Signup.userDetail.id,ouid: Signup.userDetail.id,st: e,ps: Frds.count,index: Frds.index},success: function(e) {
                Frds.result(e, t)
            }})
    },result: function(e, t) {
        Main.hideLoading();
        var n = e.result.items;
        if (n.length == 0) {
            Frds.mid == "srchFrds" && Gns.nowGns("对不起，你的朋友还没有入驻jing哦，快去邀请TA吧～");
            return
        }
        Frds.index = e.result.index, Frds.total = e.result.total;
        var r = "", i = "";
        Frds.mid == "srchFrds" && (Frds.widthArr = new Array);
        for (var s = 0; s < n.length; ) {
            var o = "", u = "", a = "", f = "", l = "", c = "", h = "", p = "", d = "", v = "", m = "", g = "";
            n[s].inhs == 0 && (n[s].flwd = undefined);
            var y = n[s].frdshp, b = n[s].flwd, w = n[s].inhs, E = n[s].ol, S = n[s].uid, x = n[s].nick, T = n[s].avatar, N = n[s].device;
            N == "" && (N = "P");
            var C = "abtEvent", k = "";
            if (Frds.mid == "ntff") {
                var L = n[s].t;
                L == "flwd" ? (y = n[s].frdshp, b = n[s].me_flw, S = n[s].flwer_id, x = n[s].flwer, T = n[s].flw_avatar, k = x + "关注了你") : L == "rmnd" ? (y = n[s].frdshp, b = n[s].me_flw, S = n[s].frd_id, x = n[s].frd, T = n[s].avatar, k = x + "提醒你关注Ta") : L == "inhs" ? (y = n[s].frdshps[0], b = !0, S = n[s].frd_ids[0], x = n[s].frds, [0], T = n[s].avatars[0], k = "社交网络", T != null && (T.indexOf("sinaimg") >= 0 ? k = "新浪微博" : T.indexOf("renren") >= 0 ? k = "人人网" : T.indexOf("qq") >= 0 && (k = "腾讯微博")), k = x + " 从 " + k + " 入驻Jing") : k = "", k = '<p class="desc">' + k + "</p>"
            } else if (w == undefined || w == 1)
                i += S + ",", k = '<p data-isdata="no" class="lstTs">Ta已经收听了</p>';
            y && (a = '<a href="#" data-uid="' + S + '" data-nick="' + x + '" class="bgBtns chat chtEvent" data-tps="聊天"></a>'), E && (o = '<i class="onl" data-tps="' + Device[N][1] + '"></i>', y && (u = '<a href="#" data-uid="' + S + '" data-nick="' + x + '" class="bgBtns flwLst flwLstnEvent" data-tps="跟听"></a>')), !y && E && b && (v = '<a href="#" data-uid="' + S + '" data-nick="' + x + '" class="bgBtns poke pokeEvent" data-tps="提醒Ta"></a>'), b != undefined && !b && (c = '<a href="#" data-uid="' + S + '" data-nick="' + x + '" class="bgBtns addFrd flwFrdEvent" data-tps="关注"></a>'), ConverSns[Frds.mid] != undefined && !w && (k = "", C = ""), Cht.offlineMes[S] != undefined && a != "" && (g = '<em class="num serif">' + Cht.offlineMes[S].count + "</em>"), r += '<div class="frdsCtn"><div class="avt"><a data-uid="' + S + '" data-nick="' + x + '" class="avtMask ' + C + '" href="#"></a>' + '<div class="avtImgCtn">' + '<img data-avatar="' + T + '" src="' + $.id2default("avatar", 50) + '" class="avtImg" width="50">' + "</div>" + "</div>" + '<a class="frdsCtt" href="#">' + '<p class="name"><span>' + x + o + "</span></p>" + k + "</a>" + '<div class="frdsBtn">' + a + u + c + v + p + g + "</div>" + "</div>", ++s;
            var A = 0;
            if (Frds.mid == "srchFrds")
                $("#frdsList>.frdsCol").children().length != 1 || s % (Frds.colCount - 1) != 0 && s != n.length ? $("#frdsList>.frdsCol").children().length != 1 && (s - (Frds.colCount - 1)) % Frds.colCount == 0 ? A = 2 : s == n.length && (A = 2) : A = 1;
            else if (s % Frds.colCount == 0 || s == n.length)
                A = 2;
            if (A != 0) {
                var O = 0;
                Frds.widthArr.length == 0 && (O += Frds.MENU_WIDTH), O += Frds.itemW + Frds.MARGIN_RIGHT, Frds.widthArr[Frds.widthArr.length] = O, A == 1 ? $("#frdsList>.frdsCol").append(r) : $("#frdsList").append('<div class="frdsCol">' + r + "</div>"), r = ""
            }
        }
        var O = 0;
        for (var s = 0; s < Frds.widthArr.length; ++s)
            O += Frds.widthArr[s];
        $("#frdsCtn").css("width", O + "px"), t == "right" && $("#rghtSldrBtn").click(), $(".frdsBtn>.num").each(function() {
            var e = $(this).parent().children(".chtEvent"), t = e.position().left + 25;
            $(this).css({left: t + "px",top: "-10px"})
        }), $(".frdsCtn").find("img").each(function() {
            Core.imgLoad($(this), "", $(this).data("avatar"), 50), $(this).data("avatar", "")
        }), $objs = new Array, $(".frdsCtn").find(".lstTs").each(function() {
            $(this).data("isdata") == "no" && ($objs[$objs.length] = $(this), $(this).data("isdata", "ok"))
        }), $.ajax({url: Core.API_VER + "/account/fetch_users_pt",data: {uid: Signup.userDetail.id,uids: i.substring(0, i.length - 1)},success: function(e) {
                if (!e.success)
                    return;
                var t = e.result;
                for (var n = 0; n < t.length; ++n) {
                    if ($objs[n] == undefined || $objs[n].length != 1)
                        break;
                    var r = t[n], i = r % 60 + " 秒";
                    r / 60 > 1 && (i = parseInt(r / 60) % 60 + " 分钟 " + i), r / 60 / 60 > 1 && (i = parseInt(r / 60 / 60) + " 小时 " + i), $objs[n].text("Ta已经收听了 " + i)
                }
            }})
    },resize: function() {
        var e = Core.bodyWidth, t = Core.bodyHeight - 38 - 34 - 34 - 70;
        Frds.colCount = parseInt(t / (Frds.itemH + Frds.MARGIN_BOT)), Frds.rowCount = parseInt(e / (Frds.itemW + Frds.MARGIN_RIGHT)) + 1, Frds.count = Frds.colCount * Frds.rowCount, Frds.surplus = (t - Frds.colCount * (Frds.itemH + Frds.MARGIN_BOT)) / 2, Main.screenId == "frds" && (Main.showLoading(), $("#fsapp").html(""), clearTimeout(Frds.resizeTmo), Frds.resizeTmo = setTimeout(function() {
            Frds.show(Frds.mid)
        }, 200))
    }}, Jing.Cht = {fuid: "",nick: "",avt: "",scrollApi: null,pane: null,offlineMes: new Object,offlineCount: 0,isTyping: !1,PS: 5,isReinitialise: !1,init: function() {
        $(document).on("click", ".chtNickEvent", function() {
            Notifier.requestPermission(), Cht.show($(this).data("uid"), $(this).data("nick"))
        }), $(document).on("click", ".chtListEvent", function() {
            Notifier.requestPermission(), Menu.screenId == "frds" ? Frds.show("inHs") : Main.menuClick("frds")
        }), $(document).on("click", ".chtSysEvent", function() {
            Notifier.requestPermission(), Menu.screenId == "frds" ? Frds.show("ntff") : Main.menuClick("ntff")
        }), $(document).on("click", ".chtPlyCtl", function() {
            var e = $(this).data("music");
            InsertPlay.play("", "cht", e, "正在收听：" + e.n)
        })
    },show: function(e, t) {
        Cht.offlineMes[e] != undefined && (Cht.offlineCount -= Cht.offlineMes[e].count, delete Cht.offlineMes[e]), Main.screenId == "frds" && Frds.mid == "inHs" ? $(".frdsBtn>.chtEvent").each(function() {
            $(this).data("uid") == e && $(this).parent().children(".num").remove()
        }) : $(".frds.ijaBtn").length == 1 ? ($(".frds.ijaBtn").children(".num").remove(), Cht.offlineCount != 0 && $(".frds.ijaBtn").append('<em class="num serif" style="left: 33px; top: 8px;">' + Cht.offlineCount + "</em>")) : ($(".more.ijaBtn").children(".num").remove(), $(".frds.icon").children(".num").remove(), Cht.offlineCount != 0 && ($(".more.ijaBtn").append('<em class="num serif" style="left: 33px; top: 8px;">' + Cht.offlineCount + "</em>"), $(".frds.icon").append('<em class="num serif" style="left: 76px; top: 8px;">' + Cht.offlineCount + "</em>"))), Cht.fuid = e, Cht.nick = t, Cht.statusTop = 2, $("#chatCtn").remove();
        var n = Core.bodyHeight - 250, r = '<div id="chatCtn" class="chatCtn ' + Core.dspr + '" style="z-index:999">' + '<div class="chatHd">' + '<a id="chtCls" class="cls" href="#"></a>' + '<h4 class="name">正在与' + Cht.nick + "聊天</h4>" + '<p class="desc">Chatting with your friend now</p>' + "</div>" + '<div class="splt"></div>' + '<div id="chatBd" class="chatBd" style="height:' + n + 'px"></div>' + '<div class="splt"></div>' + '<div class="chatDg">' + '<textarea id="chtInput" class="typist" placeholder="在这里输入你想说的话"></textarea>' + '<a id="emjBtn" href="#" class="emjBtn"></a>' + "</div>" + '<div id="emjCtn" class="emjCtn hide" style="position:absolute; z-index:999; overflow:hidden; height:0px;">' + '<div class="emjos" style="width:992px; left:0px; position:absolute">';
        for (var i in Emj)
            r += '<a data-key="' + i + '" href="#" class="emj"><img src="' + IMG_URL + "/emoji/" + Emj[i] + Retina.suffix + '.png" style="width:42px; height:42px;"></a>';
        r += '</div><div class="emjSldr hide"><a data-left="0" class="sldr selected" href="#"></a><a data-left="-329" class="sldr" href="#"></a><a data-left="-656" class="sldr" href="#"></a></div></div></div>', $("body").append(r), Cht.isInit = !0, $("#emjCtn").css("bottom", "61px"), $("#emjCtn").mousewheel(function(e, t, n, r) {
            if (Cht.isMouseWheel)
                return;
            Cht.isMouseWheel = !0, setTimeout(function() {
                Cht.isMouseWheel = !1
            }, 500), t > 0 ? $(".emjSldr>.selected").prev().hasClass("sldr") && $(".emjSldr>.selected").prev().click() : $(".emjSldr>.selected").next().hasClass("sldr") && $(".emjSldr>.selected").next().click()
        }), Core.ie68 ? $("#chatCtn").show() : $("#chatCtn").animate({opacity: "1"}, 300), $(".emj").click(function() {
            var e = "" + $(this).data("key") + "";
            Core.nowIsReady && now.postChat(Signup.userDetail.id, Cht.fuid, e);
            var t = "";
            return t += Cht.rightDtl(e, !0), Cht.appendCht(t, "send"), $(".chat>.avt>img").each(function() {
                var e = $(this).data("fid");
                e != "" && e != undefined && (Core.imgLoad($(this), "", e, 35), $(this).data("fid", ""))
            }), $("#chtResend").data("ctt", Cht.resendCtt), $("#chtResend").attr("id", ""), $("#emjBtn").click(), !1
        }), $(".sldr").click(function() {
            $(this).hasClass("selected") || ($(".sldr").removeClass("selected"), $(this).addClass("selected"), $(".emjos").animate({left: $(this).data("left") + "px"}, {speed: 300,queue: !1}))
        }), $("#emjBtn").click(function() {
            if ($(this).hasClass("loading"))
                return;
            var e = $(this);
            $(this).hasClass("selected") ? ($(this).addClass("loading").removeClass("selected"), $("#emjCtn").children(".emjSldr").hide(), $("#emjCtn").animate({height: "0px"}, 300, function() {
                e.removeClass("loading"), $(this).hide()
            })) : ($(this).addClass("loading selected"), $("#emjCtn").show().animate({height: "126px"}, 300, function() {
                e.removeClass("loading"), $(this).children(".emjSldr").show()
            }))
        }), $("#chtCls").click(function() {
            Cht.fuid = "", Cht.avt = "", Cht.nick = "", Core.ie68 ? $("#chatCtn").hide() : $("#chatCtn").animate({opacity: "0"}, 300, function() {
                $(this).remove()
            })
        }), $("#chtInput").blur(function() {
            Cht.isTyping = !1, now.typing(Signup.userDetail.id, Cht.fuid, Cht.isTyping)
        }).keydown(function(e) {
            if (e.keyCode == 13) {
                var t = Core.inputConver($.trim($(this).val()));
                if (t.length > 240)
                    return Gns.nowGns("发送消息内容超长，请分条发送。"), !1;
                $("#emjBtn").hasClass("selected") && $("#emjBtn").click(), $(this).val(""), Cht.isTyping = !1, Cht.payload = null;
                if (t.indexOf("#分享#") >= 0 || t.indexOf("#playing#") >= 0)
                    t = t.replace(/#分享#/g, ""), t = t.replace(/#playing#/g, ""), Player.music[Player.pos] != undefined && (Cht.payload = Player.music[Player.pos], $.ajax({url: Core.API_VER + "/chat/post_share_track",data: {uid: Signup.userDetail.id,ouid: Cht.fuid,tid: Player.music[Player.pos].tid}}));
                Core.nowIsReady && now.postChat(Signup.userDetail.id, Cht.fuid, t);
                var n = "";
                return Cht.isInit && (Cht.isInit = !1, n += Cht.gnTime(Core.getDate())), n += Cht.rightDtl(t, !0), Cht.appendCht(n, "send"), Cht.payload != null && $("#chtPlyCtl").data("music", Cht.payload).attr("id", ""), $(".chat>.avt>img").each(function() {
                    var e = $(this).data("fid");
                    e != "" && e != undefined && (Core.imgLoad($(this), "", e, 35), $(this).data("fid", ""))
                }), $("#chtResend").data("ctt", Cht.resendCtt), $("#chtResend").attr("id", ""), !1
            }
            !Cht.isTyping && Core.nowIsReady && (Cht.isTyping = !0, now.typing(Signup.userDetail.id, Cht.fuid, Cht.isTyping))
        }), Cht.PS = parseInt(n / 40), $.ajax({url: Core.API_VER + "/chat/fetch_chatctt",data: {uid: Signup.userDetail.id,fuid: Cht.fuid,st: "0",ps: Cht.PS},success: function(e) {
                Cht.avt = e.result.fid;
                var t = e.result.items, n, r, i, s = new Array;
                s[0] = t.length - 1;
                for (var o = t.length - 2; o >= 0; --o)
                    n = parseInt(t[o].ts.split(" ")[0].split("-")[2]), r = parseInt(t[o].ts.split(" ")[1].split(":")[0]), i = parseInt(t[o].ts.split(" ")[1].split(":")[1]), n > parseInt(t[s[s.length - 1]].ts.split(" ")[0].split("-")[2]) ? s[s.length] = o : r > parseInt(t[s[s.length - 1]].ts.split(" ")[1].split(":")[0]) ? s[s.length] = o : i - parseInt(t[o].ts.split(" ")[1].split(":")[1]) > 30 && (s[s.length] = o);
                $("#chatBd").jScrollPane(), Cht.scrollApi = $("#chatBd").data("jsp"), Cht.pane = Cht.scrollApi.getContentPane();
                for (var o = t.length - 1, u = 0; o >= 0; --o) {
                    var a = "";
                    o == s[u] && (a = Cht.gnTime(t[o].ts), ++u), Cht.payload = null, t[o].payload != null && (Cht.payload = t[o].payload, t[o].ctt = ""), t[o].sf ? a += Cht.rightDtl(t[o].ctt) : a += Cht.leftDtl(t[o].ctt), Cht.pane.append(a), Cht.payload != null && $("#chtPlyCtl").data("music", Cht.payload).attr("id", "")
                }
                $(".chat>.avt>img").each(function() {
                    var e = $(this).data("fid");
                    e != "" && e != undefined && (Core.imgLoad($(this), "", e, 35), $(this).data("fid", ""))
                }), Cht.reinitialise(), Cht.scrollApi.scrollToY(99999), Cht.isAtBottom = !0, Cht.isAtTop = !1, $("#chatBd").bind("jsp-scroll-y", function(e, t, n, r) {
                    Cht.isAtBottom = r, Cht.isAtTop = n, n && Cht.statusTop == 2 && !Cht.isReinitialise && (Cht.statusTop = 1, Cht.more())
                })
            }})
    },more: function() {
        var e = Cht.pane.children(".chat").length;
        $.ajax({url: Core.API_VER + "/chat/fetch_chatctt",data: {uid: Signup.userDetail.id,fuid: Cht.fuid,st: e,ps: Cht.PS},success: function(e) {
                var t = e.result.items;
                t.length < Cht.PS && (Cht.statusTop = 0);
                if (t.length == 0)
                    return;
                var n, r, i, s = new Array;
                s[0] = t.length - 1;
                for (var o = t.length - 2; o >= 0; --o)
                    n = parseInt(t[o].ts.split(" ")[0].split("-")[2]), r = parseInt(t[o].ts.split(" ")[1].split(":")[0]), i = parseInt(t[o].ts.split(" ")[1].split(":")[1]), n > parseInt(t[s[s.length - 1]].ts.split(" ")[0].split("-")[2]) ? s[s.length] = o : r > parseInt(t[s[s.length - 1]].ts.split(" ")[1].split(":")[0]) ? s[s.length] = o : i - parseInt(t[o].ts.split(" ")[1].split(":")[1]) > 30 && (s[s.length] = o);
                var u = Cht.pane.children().first();
                for (var o = t.length - 1, a = 0; o >= 0; --o) {
                    var f = "";
                    o == s[a] && (f = Cht.gnTime(t[o].ts), ++a), Cht.payload = null, t[o].payload != null && (Cht.payload = t[o].payload, t[o].ctt = ""), t[o].sf ? f += Cht.rightDtl(t[o].ctt) : f += Cht.leftDtl(t[o].ctt), u.before(f), Cht.payload != null && $("#chtPlyCtl").data("music", Cht.payload).attr("id", "")
                }
                $(".chat>.avt>img").each(function() {
                    var e = $(this).data("fid");
                    e != "" && e != undefined && (Core.imgLoad($(this), "", e, 35), $(this).data("fid", ""))
                });
                var l = u.position().top;
                Cht.reinitialise(), Cht.scrollApi.scrollToY(l), Cht.statusTop = 2
            }})
    },receiveMessage: function(e) {
        e.fuid = Number(e.fuid);
        if (Cht.fuid == e.fuid) {
            Cht.payload = null, e.payload != null && (Cht.payload = e.payload, e.ctt = "");
            var t = "";
            Cht.isInit && (Cht.isInit = !1, t += Cht.gnTime(Core.getDate())), t += Cht.leftDtl(e.ctt), Cht.appendCht(t, "receive"), Cht.payload != null && $("#chtPlyCtl").data("music", Cht.payload).attr("id", ""), $(".chat>.avt>img").each(function() {
                var e = $(this).data("fid");
                e != "" && e != undefined && (Core.imgLoad($(this), "", e, 35), $(this).data("fid", ""))
            })
        } else {
            Player.setVolumeDown("msgTone", 100), Cht.offlineMes[e.fuid] == undefined && (Cht.offlineMes[e.fuid] = new Object, Cht.offlineMes[e.fuid].count = 0), Cht.offlineMes[e.fuid].nick = e.nick, Cht.offlineMes[e.fuid].count += 1, Cht.offlineCount += 1, e.ctt.indexOf("") >= 0 && (e.ctt = "表情"), e.ctt.length > 20 && (e.ctt = e.ctt.substring(0, 20) + "...");
            var n, r;
            e.payload != null ? (n = e.nick + " 给你分享了一首歌。", r = e.nick + ' 给你分享了一首歌，<a href="#" class="trg chtNickEvent" data-uid="' + e.fuid + '" data-nick="' + e.nick + '">去看看？</a>') : (n = e.nick + ' 对你说："' + e.ctt + '"', r = e.nick + ' 对你说："' + e.ctt + '"，<a href="#" class="trg chtNickEvent" data-uid="' + e.fuid + '" data-nick="' + e.nick + '">去看看？</a>'), Gns.nowGns(r, Gns.NOTIFIER, n), Main.screenId == "frds" && Frds.mid == "inHs" ? $(".frdsBtn>.chtEvent").each(function() {
                if ($(this).data("uid") == e.fuid) {
                    $(this).parent().children(".num").remove();
                    var t = $(this).position().left + 25;
                    $(this).after('<em class="num serif" style="left: ' + t + 'px; top: -10px;">' + Cht.offlineMes[e.fuid].count + "</em>")
                }
            }) : $(".frds.ijaBtn").length == 1 ? ($(".frds.ijaBtn").children(".num").remove(), $(".frds.ijaBtn").append('<em class="num serif" style="left: 33px; top: 8px;">' + Cht.offlineCount + "</em>")) : ($(".more.ijaBtn").children(".num").remove(), $(".frds.icon").children(".num").remove(), $(".more.ijaBtn").append('<em class="num serif" style="left: 33px; top: 8px;">' + Cht.offlineCount + "</em>"), $(".frds.icon").append('<em class="num serif" style="left: 76px; top: 8px;">' + Cht.offlineCount + "</em>"))
        }
    },typingMessage: function(e, t) {
        Cht.payload = null;
        var n = Cht.leftDtl("typing", "typing");
        t == "true" && $("#typing").length == 0 ? $("#typing").length == 0 && !Cht.isAddTyping && (Cht.isAddTyping = !0, setTimeout(function() {
            Cht.isAddTyping = !1
        }, 500), Cht.appendCht(n, "typing"), $(".chat>.avt>img").each(function() {
            var e = $(this).data("fid");
            e != "" && e != undefined && (Core.imgLoad($(this), "", e, 35), $(this).data("fid", ""))
        })) : $("#typing").remove()
    },appendCht: function(e, t) {
        t == "receive" && $("#typing").length != 0 && $("#typing").remove(), Cht.pane.append(e);
        var n = Cht.isAtBottom;
        Cht.reinitialise(), n && Cht.scrollApi.scrollToY(99999, !0)
    },leftDtl: function(e, t) {
        t == undefined && (t = "");
        var n = "";
        e = e.replace(/#([^"]*)#/g, ' <a href="#" class="chtCmbt chtFlyEvent">#$1#</a> '), e.indexOf("") >= 0 && (n = e.replace(/\007/g, ""));
        var r = "";
        Cht.payload != null && (r = '<div class="chat"><a data-uid="' + Cht.fuid + '" data-nick="' + Cht.nick + '" href="#" class="avtMask abtEvent"></a>' + '<div class="avtPos"></div>' + '<div class="avt">' + '<img data-fid="' + Cht.avt + '" src="" width="35" class="avtImg">' + "</div>" + '<div class="bbl">' + '<div class="shrTrck">' + '<div class="cv" style="background-image:url(' + $.id2url(Cht.payload.fid, "AT", "album") + ')">' + '<a id="chtPlyCtl" href="#" class="plyCtl chtPlyCtl"></a>' + "</div>" + '<div class="ctt">' + '<h5 class="name">' + Cht.payload.n + "</h5>" + '<p class="desc">' + Cht.payload.atn + "</p>" + "</div>" + "</div>" + "</div>" + "</div>");
        if (n != "" && Emj[n] != undefined)
            r += '<div class="chat lft emj"><a data-uid="' + Cht.fuid + '" data-nick="' + Cht.nick + '" href="#" class="avtMask abtEvent"></a>' + '<div class="avtPos"></div>' + '<div class="avt">' + '<img data-fid="' + Cht.avt + '" src="" width="35" class="avtImg">' + "</div>" + '<div class="bbl" style="height:75px">' + '<img src="' + IMG_URL + "/emoji/" + Emj[n] + Retina.suffix + '.png" width="75px" height="75px">' + "</div>" + "</div>";
        else if (e != "") {
            var i = "";
            t == "typing" ? (e = '<div class="typng"></div>', i = "typing") : e = '<p class="text">' + e + "</p>", r += '<div id="' + t + '" class="chat ' + i + '">' + '<a data-uid="' + Cht.fuid + '" data-nick="' + Cht.nick + '" href="#" class="avtMask abtEvent"></a>' + '<div class="avtPos"></div>' + '<div class="avt">' + '<img data-fid="' + Cht.avt + '" src="" width="35" class="avtImg">' + "</div>" + '<div class="bbl">' + e + "</div>" + "</div>"
        }
        return r
    },rightDtl: function(e, t) {
        e = e.replace(/#([^"]*)#/g, ' <a href="#" class="chtCmbt chtFlyEvent"><span>#</span>$1<span>#</span></a> ');
        var n = "";
        e.indexOf("") >= 0 && (n = e.replace(/\007/g, ""));
        var r = "";
        Cht.resendCtt = "";
        var i = "";
        return Cht.payload != null && (i = '<div class="chat rght"><div class="avtMask"></div><div class="avtPos"></div><div class="avt"><img data-fid="' + Signup.userDetail.fid + '" src="" width="35" class="avtImg">' + "</div>" + '<div class="bbl">' + '<div class="shrTrck">' + '<div class="cv" style="background-image:url(' + $.id2url(Cht.payload.fid, "AT", "album") + ')">' + '<a id="chtPlyCtl" href="#" class="plyCtl chtPlyCtl"></a>' + "</div>" + '<div class="ctt">' + '<h5 class="name">' + Cht.payload.n + "</h5>" + '<p class="desc">' + Cht.payload.atn + "</p>" + "</div>" + "</div>" + "</div>" + "</div>"), n != "" && Emj[n] != undefined ? i += '<div class="chat rght emj"><div class="avtMask"></div><div class="avtPos"></div><div class="avt"><img data-fid="' + Signup.userDetail.fid + '" src="" width="35" class="avtImg">' + "</div>" + '<div class="bbl" style="height:75px">' + '<img src="' + IMG_URL + "/emoji/" + Emj[n] + Retina.suffix + '.png" width="75px" height="75px">' + "</div>" + "</div>" : e != "" && (i += '<div class="chat rght"><div class="avtMask"></div><div class="avtPos"></div><div class="avt"><img data-fid="' + Signup.userDetail.fid + '" src="" width="35" class="avtImg">' + "</div>" + '<div class="bbl">' + '<p class="text">' + e + "</p>" + "</div>" + "</div>"), i
    },reinitialise: function() {
        Cht.isReinitialise = !0, Cht.scrollApi.reinitialise(), Cht.isReinitialise = !1
    },gnTime: function(e) {
        return '<div class="tstmp">' + e + "</div>"
    }}, Jing.Shr = {music: null,data: null,init: function() {
    },show: function() {
        $("#fsapp").append('<div class="scrlCtlCtn"><div id="scrlCtl" class="scrlCtl"><p>分享歌曲 | 退出</p><a id="lftSldrBtn" href="#" class="sldrBtn lft"><span class="splt"></span></a><a href="#" id="rghtSldrBtn" class="sldrBtn rght"><span class="splt"></span></a></div></div><div id="shrCtn" class="shrCtn"></div>'), $("#scrlCtl").css("margin-left", -$("#scrlCtl").width() / 2 + "px"), Shr.music = Player.music[Player.pos], Shr.data = {uid: Signup.userDetail.id,tid: Shr.music.tid,c: "",identifys: ""};
        if (Search.moods != null && !InsertPlay.isPlay) {
            var e = "";
            for (var t = 0; t < Search.moods.length; ++t)
                t + 2 == Search.moods.length ? e += Search.moods[t] + "和" : e += Search.moods[t] + "、";
            Shr.data.c = "我" + e.substring(0, e.length - 1) + "的时候喜欢听这首歌"
        } else
            Shr.data.c = "这首歌曲很好听，分享给你 ~";
        var n = '<div class="shrCtt"><div class="txtCtn"><textarea id="shrTxt" class="text" contenteditable="true">' + Shr.data.c + "</textarea>" + "</div>" + '<div class="cv"><img id="shrAlbum" src="' + $.id2default("album", 100) + '" width="110" /></div>' + '</div><div class="shrBar"><span class="text">分享到</span>';
        for (var r in Signup.userDetail.snstokens) {
            if (ConverSns[r] == "db")
                continue;
            n += '<a data-identify="' + r + '" href="#" class="shrBtn ' + ConverSns[r] + '"></a>'
        }
        n += '<a id="shrCnfm" href="#" class="shrCnfm">分享</a></div>', $("#shrCtn").html(n);
        var i = new Image;
        i.onload = function() {
            $("#shrAlbum").attr("src", this.src)
        }, i.src = $.id2url(Shr.music.fid, "AS", "album"), $(".shrBtn").click(function() {
            $(this).hasClass("selected") ? $(this).removeClass("selected") : $(this).addClass("selected")
        }), $("#shrCnfm").click(function() {
            var e = "";
            $(this).parent().children(".selected").each(function() {
                e += $(this).data("identify") + ","
            }), e == "" ? Gns.nowGns("请最少选择一个SNS进行分享") : (Shr.data.identifys = e.substring(0, e.length - 1), Shr.data.c = $("#shrTxt").val(), Gns.nowGns("正在分享..."), Main.menuClick("shr"), $.ajax({url: Core.API_VER + "/oauth/music/batchshare",data: Shr.data}))
        })
    },resultMsg: function(e) {
        var t = "", n = e.bresp, r = "", i = "", s = "";
        for (var o in n)
            n[o].success ? r += btnDes[o] + "、" : n[o].code == "802" ? s += btnDes[o] + "、" : i += btnDes[o] + "、";
        r != "" && (r = r.substring(0, r.length - 1) + "分享成功。"), s != "" && (s = s.substring(0, s.length - 1) + 'SNS过期，<a href="#" class="snsBind">是否重新绑定</a>。'), i != "" && (i = i.substring(0, i.length - 1) + "分享失败。"), Gns.nowGns(e.n + "：" + r + s + i)
    },resize: function() {
    }}, Jing.Stngs = {MARGIN_LEFT: 0,init: function() {
    },show: function() {
        $("#fsapp").append('<div class="scrlCtlCtn" style="margin-bottom:0px;"><div id="scrlCtl" class="scrlCtl"><p>设置 | 退出</p><a id="lftSldrBtn" href="#" class="sldrBtn lft"><span class="splt"></span></a><a href="#" id="rghtSldrBtn" class="sldrBtn rght"><span class="splt"></span></a></div></div><div id="stngsCtn" class="stngs"></div>'), $("#scrlCtl").css("margin-left", -$("#scrlCtl").width() / 2 + "px");
        var e = {rtCv: "开启封面旋转",lgA: "使用大字体显示",hbr: "使用高音质流媒体",rltd: "开启音乐信息提示",wb: "连接新浪微博",rr: "连接人人网",qq: "连接腾讯微博",oicq: "连接QQ空间",autoSnc: "开启一键分享",rstPw: "修改密码"}, t = "", n = 0, r = Stngs.MARGIN_TOP;
        for (var i in e) {
            var s = "";
            if (Signup.userDetail.sts[i] != undefined && Signup.userDetail.sts[i] == "true" || Signup.userDetail.snstokens[ConverSns[i + "1"]] != undefined)
                s = "selected";
            n == 5 && (r += 56), t += '<a data-mid="' + i + '" style="margin-left:' + Stngs.MARGIN_LEFT + "px; margin-top:" + r + 'px" href="#" class="swtch ' + i + " " + s + '"><span class="desc">' + e[i] + "</span></a>", ++n
        }
        $("#stngsCtn").html(t), $(".swtch").click(function() {
            var e = $(this).data("mid"), t;
            ConverSns[e] != undefined ? $(this).hasClass("selected") ? Frds.unbind(e, $(this)) : Frds.openSns(e) : ($(this).hasClass("selected") ? ($(this).removeClass("selected"), t = "false") : ($(this).addClass("selected"), t = "true"), Signup.userDetail.sts[e] != undefined && (Signup.userDetail.sts[e] = t, $.ajax({url: Core.API_VER + "/setting/post_settings",data: {uid: Signup.userDetail.id,n: e,v: t}})), e == "rtCv" ? t == "true" ? Player.startRotate() : (Player.stopRotate(), Player.setRotate()) : e == "hbr" ? Player.hbr = t : e == "lgA" && (t == "true" ? $("html").addClass("ftlg") : $("html").removeClass("ftlg")))
        })
    },checkNick: function(e, t, n) {
        var r = e.val();
        return Tps.hide(), r.length == 0 ? t && e.data("tps", "昵称不能为空") : /^[\u4E00-\u9FA5A-Za-z0-9_]+$/.test(r) ? r.length < 2 || r.length > 14 ? e.data("tps", "昵称只能2-14个字符") : e.data("tps", "") : e.data("tps", '支持中英文、数字、"_"'), e.data("tps") == "" ? ($.ajax({url: Core.API_VER + "/account/check_nick",data: {nick: r},success: function(t) {
                if (t.success) {
                    n != undefined && (Signup.userDetail.nick = r, n());
                    return
                }
                t.code == "253" ? e.data("tps", "昵称已被使用") : e.data("tps", "Jing开小差了"), Tps.show(e)
            }}), !0) : (Tps.show(e), !1)
    },checkEmail: function(e, t, n) {
        e.data("tps", ""), Tps.hide();
        var r = e.val();
        if (r == "")
            t && e.data("tps", "邮箱不能为空");
        else if (!/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(r))
            e.data("tps", "邮箱格式错误");
        else if (n)
            return $.ajax({url: Core.API_VER + "/account/check_email",data: {email: r},success: function(t) {
                    t.success || (e.data("tps", "邮箱已经被人注册"), Tps.show(e))
                }}), Tps.hide(), !0;
        return e.data("tps") == "" ? !0 : (Tps.show(e), !1)
    },checkPwd: function(e, t) {
        e.data("tps", ""), Tps.hide();
        var n = e.val();
        return n == "" ? t && e.data("tps", "密码不能为空") : n.length < 6 && e.data("tps", "密码必须6位以上"), e.data("tps") == "" ? !0 : (Tps.show(e), !1)
    },resize: function(e) {
        Stngs.MARGIN_LEFT = (Core.bodyWidth - 350) / 6;
        var t = Core.bodyHeight - 108;
        Stngs.MARGIN_TOP = (t - 252) / 3;
        var n = Stngs.MARGIN_TOP;
        $(".swtch").each(function(e) {
            e == 5 && (n += 56), $(this).css({"margin-left": Stngs.MARGIN_LEFT + "px","margin-top": n + "px"})
        })
    }}, Jing.Explr = {itemW: 100
    ,itemH: 141,margin_top: 40,margin_left: 80,MARGIN_TOP: 50,MARGIN_LEFT: 120,colCount: 0,rowCount: 0,count: 0,t: "",oldT: "",len: 0,init: function() {
        $(document).on("click", ".expCtn>a>.bdgImg", function() {
            var e = $(this).data("fid"), t = $(this).next().text();
            if ($("#" + Explr.t).next(".part").length == 0)
                $("#" + Explr.t).append('<div data-text="' + t + '" class="bdg hide"></div>'), $("#explrPlyCtl").click();
            else if (Main.showLoading()) {
                $("#explrCtn").append('<div id="ufo" class="ufo" style="left:' + ($(this).offset().left + 25) + "px; top:" + ($(this).offset().top - 38 + 25) + 'px;"><img src="' + Core.badgesUrl(e, 100) + '" width="50" /></div>');
                var n = $("#" + Explr.t);
                $("#ufo").animate({left: n.offset().left + 32 + "px",top: n.offset().top - 56 + "px"}, 500, function() {
                    $(this).remove(), n.html('<img data-text="' + t + '" class="bdg" src="' + Core.badgesUrl(e, 100) + '" width="50px"/>' + t), $("#explrPlyCtl").show()
                }), t == "纯音乐" ? (Explr.t = $("#" + Explr.t).next().next().attr("id"), $("#lang").html('<img data-text="都可以" class="bdg" src="' + Core.badgesUrl("WhateverBadge", 100) + '" width="50px"/>都可以')) : Explr.t = $("#" + Explr.t).next().attr("id"), $("#expCtn").children().removeClass("new").addClass("old"), Explr.fetch("right")
            }
        })
    },show: function() {
        Explr.t = "mood", $("#fsapp").append('<div class="scrlCtlCtn" style="margin-bottom:0px;"><div id="scrlCtl" class="scrlCtl"><p>音乐探索 | 退出</p><a id="lftSldrBtn" href="#" class="sldrBtn lft"><span class="splt"></span></a><a href="#" id="rghtSldrBtn" class="sldrBtn rght"><span class="splt"></span></a></div></div><div id="explrCtn" class="explr" style="width:100%; float:left;"></div>'), $("#scrlCtl").css("margin-left", -$("#scrlCtl").width() / 2 + "px");
        var e = (Explr.margin_top + Explr.itemH) * Explr.colCount + Explr.margin_top;
        $("#explrCtn").html('<div id="expCtn" class="expCtn"></div><div id="expNav" class="expNav" style="margin-top:' + e + 'px">' + '<div id="expArr" class="arr" style="left: 112px;"></div>' + '<a id="mood" href="#" class="part selected">情绪篇</a>' + '<a id="gend" href="#" class="part">形式篇</a>' + '<a id="lang" href="#" class="part">语言篇</a>' + '<a id="toy" href="#" class="part">调性篇</a>' + '<a id="mits" href="#" class="part">乐器篇</a>' + '<a id="explrPlyCtl" href="#" class="plyCtl"></a>' + "</div>" + '<div class="expCtt"></div>'), Main.showLoading(), Explr.fetch(), $("#explrPlyCtl").click(function() {
            var e = "";
            $(".part").each(function() {
                if ($(this).children(".bdg").length != 1)
                    return;
                var t = $(this).children(".bdg").data("text");
                if (t == "都可以")
                    return;
                e += t + " + "
            }), e = e.substring(0, e.length - 3), InsertPlay.play("/search/jing/fetch_pls?q=" + e, "explr", "", "音乐探索：" + e), $("#scrlCtl").click()
        }), $(".part").click(function() {
            $(this).hasClass("selected") || Gns.nowGns("至少选择一个，才能进入下一步")
        }), $("#lftSldrBtn").click(function() {
            return Explr.len == Explr.count && Main.showLoading() && ($("#expCtn").children().removeClass("new").addClass("old"), Explr.fetch("left")), !1
        }), $("#rghtSldrBtn").click(function() {
            return Explr.len == Explr.count && Main.showLoading() && ($("#expCtn").children().removeClass("new").addClass("old"), Explr.fetch("right")), !1
        })
    },fetch: function(e) {
        var t = Explr.count;
        Explr.t != "mood" && --t, $.ajax({url: Core.API_VER + "/badge/fetch_badges_byfilter",data: {t: Explr.t,ps: t,uid: Signup.userDetail.id},success: function(t) {
                if (!t.success)
                    return;
                var n = Explr.rowCount, r = Explr.colCount, i = t.result;
                Explr.t != "mood" && (i = (new Array({fid: "WhateverBadge",n: "都可以",t: "badge"})).concat(i)), Explr.len = i.length, Explr.resize(Explr.len);
                var s = "";
                for (var o = 0; o < i.length; ++o) {
                    var u = i[o].fid, a = parseInt(o % Explr.rowCount) * (Explr.margin_left + Explr.itemW) + Explr.margin_left, f = parseInt(o / Explr.rowCount) * (Explr.margin_top + Explr.itemH) + Explr.margin_top;
                    e == "right" ? a += Core.bodyWidth : e == "left" && (a -= Core.bodyWidth), s += '<a style="left:' + a + "px; top:" + f + 'px;" href="#" class="bdg anmt new">' + '<img data-fid="' + u + '" src="" class="bdgImg">' + '<span class="desc">' + i[o].n + "</span>" + "</a>"
                }
                $("#expCtn").append(s);
                var l = function() {
                    $(".bdg.new>.bdgImg").each(function() {
                        var e = new Image;
                        e.obj = $(this), e.onload = function() {
                            this.obj.attr("src", this.src), this.obj.addClass("anmt")
                        }, e.src = Core.badgesUrl($(this).data("fid"), 100)
                    })
                };
                if (e == "right") {
                    var c = function(e, t, n) {
                        setTimeout(function() {
                            $(e[n]).animate({left: "-=" + Core.bodyWidth}, 200)
                        }, t * 50)
                    }, h = $.makeArray($("#expCtn").children(".old"));
                    for (var o = 0; o < h.length / r; ++o)
                        for (var p = 0; p < r; ++p) {
                            var d = o + p * n;
                            c(h, o, d)
                        }
                    setTimeout(function() {
                        $("#expCtn").children(".old").remove();
                        var e = $.makeArray($("#expCtn").children(".new"));
                        for (var t = 0; t < e.length / Explr.colCount; ++t)
                            for (var n = 0; n < Explr.colCount; ++n) {
                                var r = t + n * Explr.rowCount;
                                c(e, t, r)
                            }
                    }, r * 50 + 300), setTimeout(function() {
                        Main.hideLoading()
                    }, (r * 50 + 300) * 2);
                    if (Explr.oldT != Explr.t) {
                        var a = 115;
                        Explr.oldT == "gend" && Explr.t == "toy" && (a = 230), $("#" + Explr.oldT).removeClass("selected"), $("#" + Explr.t).addClass("selected"), $("#expArr").animate({left: "+=" + a}, 300)
                    }
                } else if (e == "left") {
                    var c = function(e, t, n) {
                        setTimeout(function() {
                            $(e[n]).animate({left: "+=" + Core.bodyWidth}, 200)
                        }, t * 50)
                    }, h = $.makeArray($("#expCtn").children(".old"));
                    for (var o = 0; o < h.length / r; ++o)
                        for (var p = 0; p < r; ++p) {
                            var d = o + p * n;
                            c(h, n - o, d)
                        }
                    setTimeout(function() {
                        $("#expCtn").children(".old").remove();
                        var e = $.makeArray($("#expCtn").children(".new"));
                        for (var t = 0; t < e.length / Explr.colCount; ++t)
                            for (var n = 0; n < Explr.colCount; ++n) {
                                var r = t + n * Explr.rowCount;
                                c(e, Explr.rowCount - t, r)
                            }
                    }, r * 50 + 300), setTimeout(function() {
                        Main.hideLoading()
                    }, (r * 50 + 300) * 2)
                } else
                    Main.hideLoading();
                l(), Explr.oldT = Explr.t
            }})
    },resize: function(e) {
        var t = Core.bodyWidth, n = Core.bodyHeight - 38 - 93 - 70;
        Explr.rowCount = parseInt((t - Explr.MARGIN_LEFT) / (Explr.MARGIN_LEFT + Explr.itemW)), Explr.margin_left = (t - Explr.rowCount * Explr.itemW) / (Explr.rowCount + 1), Explr.colCount = parseInt((n - Explr.MARGIN_TOP) / (Explr.MARGIN_TOP + Explr.itemH)), Explr.margin_top = (n - Explr.colCount * Explr.itemH) / (Explr.colCount + 1), Explr.count = Explr.rowCount * Explr.colCount, e != undefined && e < Explr.count && (e < Explr.rowCount ? (Explr.colCount = 1, Explr.rowCount = e) : e % Explr.rowCount == 0 ? Explr.colCount = e / Explr.rowCount : (Explr.colCount = parseInt(e / Explr.rowCount) + 1, e % Explr.colCount == 0 ? Explr.rowCount = e / Explr.colCount : Explr.rowCount = parseInt(e / Explr.colCount) + 1), Explr.margin_left = (t - Explr.rowCount * Explr.itemW) / (Explr.rowCount + 1), Explr.margin_top = (n - Explr.colCount * Explr.itemH) / (Explr.colCount + 1)), Main.screenId == "explr" && e == undefined && (Main.showLoading(), $("#fsapp").html(""), clearTimeout(Explr.resizeTmo), Explr.resizeTmo = setTimeout(function() {
            Explr.show()
        }, 200))
    }}, Jing.Tps = {init: function() {
        $(document).on("mouseenter", ".ijaBtn", function() {
            Tps.show($(this))
        }), $(document).on("mouseleave", ".ijaBtn", Tps.hide), $(document).on("mouseenter", ".plrBtnBg", function() {
            Tps.show($(this))
        }), $(document).on("mouseleave", ".plrBtnBg", Tps.hide), $(document).on("mouseenter", ".auth", function() {
            Tps.show($(this))
        }), $(document).on("mouseleave", ".auth", Tps.hide), $(document).on("mouseenter", ".onl", function() {
            Tps.show($(this))
        }), $(document).on("mouseleave", ".onl", Tps.hide), $(document).on("mouseenter", ".bgBtns", function() {
            Tps.show($(this))
        }), $(document).on("mouseleave", ".bgBtns", Tps.hide), $(document).on("mouseenter", "#lgtBtn", function() {
            Tps.show($(this))
        }), $(document).on("mouseleave", "#lgtBtn", Tps.hide), $(document).on("mouseenter", ".btn", function() {
            $(this).hasClass("love selected") ? $(this).data("tps", "取消喜欢") : $(this).hasClass("love") && $(this).data("tps", "喜欢"), $(this).hasClass("hate selected") ? $(this).data("tps", "取消讨厌") : $(this).hasClass("hate") && $(this).data("tps", "讨厌"), $(this).hasClass("delEvent selected") ? $(this).data("tps", "移除") : $(this).hasClass("delEvent") && $(this).data("tps", "添加"), Tps.show($(this))
        }), $(document).on("mouseleave", ".btn", Tps.hide)
    },show: function(e) {
        var t = e.data("tps");
        if (t == undefined || t == "")
            return;
        var n = e.width(), r = e.offset().left, i = e.offset().top;
        $("#tps>.ctt").text(t), $("#tps").show();
        var s = $("#tps").width(), o = $("#tps").height() + 5, u = r + n / 2 - s / 2, a = i - o - 3;
        e.hasClass("input") ? a += 10 : e.hasClass("ijaBtn") && (a += 5), e.attr("id") == "lgtBtn" ? (a = i + o + 10, $("#tps").addClass("rvs")) : $("#tps").removeClass("rvs"), $("#tps").css({left: u + "px",top: a + "px"})
    },hide: function() {
        $("#tps").hide()
    }}, Jing.Mbl = {itemWH: 180,MARGIN_BOT: 40,MARGIN_RIGHT: 25,ITEM_WH: 180,colCount: 0,rowCount: 0,count: 0,st: 0,screenId: "",init: function() {
        $(document).on("click", ".rndSqr>.delEvent", function() {
            $(this).hasClass("selected") ? $(this).removeClass("selected") : $(this).addClass("selected");
            var e = "";
            $(".delEvent").each(function() {
                if (!$(this).hasClass("selected"))
                    return;
                e += $(this).data("tid") + ","
            }), $.ajax({url: Core.API_VER + "/media/song/offline_music",data: {u: Signup.userDetail.id,tids: e.substring(0, e.length - 1)}}), Tps.hide()
        })
    },show: function() {
        Mbl.st = 0, $.ajax({url: Core.API_VER + "/device/userdevices",data: {uid: Signup.userDetail.id},success: function(e) {
                if (!e.success)
                    return;
                var t = e.result, n = Mbl.device("ios", t), r = Mbl.device("android", t);
                n && r ? Mbl.showOfflineMusic() : Mbl.showDevices(e.result)
            }})
    },device: function(e, t) {
        if (e == "ios") {
            for (var n = 0; n < t.length; ++n)
                if (t[n] == "O" || t[n] == "D" || t[n] == "T")
                    return !0;
            return !1
        }
        if (e == "android") {
            for (var n = 0; n < t.length; ++n)
                if (t[n] == "R")
                    return !0;
            return !1
        }
    },showDevices: function(e) {
        Main.hideLoading(), Mbl.screenId = "device", $("#fsapp").html('<div class="scrlCtlCtn"><div id="scrlCtl" class="scrlCtl"><p>移动设备 | 退出</p><a id="lftSldrBtn" href="#" class="sldrBtn lft"><span class="splt"></span></a><a href="#" id="rghtSldrBtn" class="sldrBtn rght"><span class="splt"></span></a></div></div><div id="mblCtn" class="mbl"></div>'), $("#scrlCtl").css("margin-left", -$("#scrlCtl").width() / 2 + "px");
        var t = '<div id="devicesCtn" class="jingSltrCtn"><div class="sltrHdr"><h2 class="tit">选择已经绑定的手机</h2><p class="desc">Choose the Mobile Phone You have</p></div><div class="sltrIcons">', n = Core.bodyWidth * .15, r = "", i = "";
        Mbl.device("android", e) && (r = "selected"), Mbl.device("ios", e) && (i = "selected"), t += '<a data-deviceId="R" href="#" class="iconBg ' + r + '" style="margin-right:' + n + 'px">' + '<div class="icon andrd"></div>' + '<span class="desc">Android Mobile</span>' + "</a>", t += '<a data-deviceId="O" href="#" class="iconBg ' + i + '">' + '<div class="icon ios"></div>' + '<span class="desc">Apple Mobile</span>' + "</a>", t += "</div></div>", $("#mblCtn").html(t), $("#devicesCtn").css("margin-left", (Core.bodyWidth - $("#devicesCtn").width()) / 2 + "px"), $(".iconBg").click(function() {
            return $(this).hasClass("selected") ? Mbl.showOfflineMusic() : $(this).data("deviceId") == "R" ? window.open("https://play.google.com/store/apps/details?id=com.jingfm") : $(this).data("deviceId") == "O" && window.open("https://itunes.apple.com/cn/app/jing-dian-fu-yin-le-sou-suo/id581886398?mt=8"), !1
        })
    },showOfflineMusic: function() {
        Mbl.screenId = "offlineMusic", $("#fsapp").html('<div class="scrlCtlCtn"><div id="scrlCtl" class="scrlCtl"><p>缓存的歌 | 退出</p><a id="lftSldrBtn" href="#" class="sldrBtn lft"><span class="splt"></span></a><a href="#" id="rghtSldrBtn" class="sldrBtn rght"><span class="splt"></span></a></div></div><div id="mblCtn" class="mbl" style="width:0px; margin-left:25px; margin-top:' + Mbl.surplus + 'px"></div>'), $("#scrlCtl").css("margin-left", -$("#scrlCtl").width() / 2 + "px"), Mbl.fetchOffline(Mbl.st), $("#lftSldrBtn").click(function() {
            var e = -parseInt($("#mblCtn").css("margin-left").replace("px", "")) + 25, t = (Mbl.count / Mbl.colCount - 1) * (Mbl.itemWH + Mbl.MARGIN_RIGHT);
            return e > t ? $("#mblCtn").animate({"margin-left": "+=" + t + "px"}, 300) : $("#mblCtn").animate({"margin-left": "+=" + e + "px"}, 300), !1
        }), $("#rghtSldrBtn").click(function() {
            var e = $("#mblCtn").width() + parseInt($("#mblCtn").css("margin-left").replace("px", "")) - Core.bodyWidth, t = (Mbl.count / Mbl.colCount - 1) * (Mbl.itemWH + Mbl.MARGIN_RIGHT);
            return e > t ? $("#mblCtn").animate({"margin-left": "-=" + t + "px"}, 300) : e > 0 && $("#mblCtn").animate({"margin-left": "-=" + e + "px"}, 300), !1
        })
    },fetchOffline: function(e) {
        var t = Mbl.count;
        $.ajax({url: Core.API_VER + "/media/song/offline_music",data: {u: Signup.userDetail.id},success: function(t) {
                Main.hideLoading();
                var n = t.result.items, r = n.length;
                e == 0 && ++r, r % Mbl.colCount != 0 && (r += Mbl.colCount - r % Mbl.colCount);
                var i = parseInt(r / Mbl.colCount);
                Mbl.nowWidth = i * (Mbl.itemWH + Mbl.MARGIN_RIGHT), $("#mblCtn").css("width", "+=" + Mbl.nowWidth);
                var s = 0;
                for (var o = 0; o < r; ++o) {
                    if (n[o] == undefined)
                        break;
                    s += parseInt(n[o].d)
                }
                s = parseInt(s / 60);
                var u = "", a = 0;
                e == 0 && (u += '<div class="rndSqrCtn" style="width:' + Mbl.itemWH + "px;height:" + Mbl.itemWH + 'px;">' + '<div class="rndSqr stats"></div>' + '<h1 class="tit">已经缓存' + s + "分钟</h1>" + '<h3 class="name">实时同步云端缓存列表</h3>' + '<p class="desc">Offline list syncs on all mobile devices</p>' + "</div>", ++a);
                var f = "";
                Core.ie68 ? f = "hide" : f = "dspr";
                for (var o = 0; o < r; ++o)
                    ++a, n[o] == undefined ? u += '<div class="rndSqrCtn" style="width:' + Mbl.itemWH + "px;height:" + Mbl.itemWH + 'px;"></div>' : u += '<div class="rndSqrCtn" style="width:' + Mbl.itemWH + "px;height:" + Mbl.itemWH + 'px;">' + '<div class="rndSqr">' + '<a href="#" class="plyCtl favPlayCtlEvent ' + f + '"></a>' + '<a data-tid="' + n[o].tid + '" href="#" class="hate btn ' + f + ' delEvent selected"></a>' + "</div>" + '<img data-fid="' + n[o].fid + '" src="' + IMG_URL + "/defaults/album/300" + Retina.suffix + '.jpg" class="cv">' + '<h3 class="n">' + n[o].n + "</h3>" + '<p class="an">' + n[o].an + "</p>" + '<p class="atn">' + n[o].atn + "</p>" + "</div>", a == Mbl.colCount && ($("#mblCtn").append('<div class="rndSqrCol" style="float:left; width:' + (Mbl.itemWH + Mbl.MARGIN_RIGHT) + 'px;">' + u + "</div>"), u = "", a = 0);
                Main.hideLoading(), $(".rndSqrCtn>img").each(function() {
                    var e = $(this).data("fid");
                    if (e == undefined || e == "")
                        return;
                    $(this).data("fid", "");
                    var t = new Image;
                    t.obj = $(this), t.onload = function() {
                        t.obj.attr("src", this.src)
                    }, t.src = $.id2url(e, "AM", "album")
                });
                var o = 0;
                $(".favPlayCtlEvent").each(function() {
                    $(this).hasClass("plyCtl") && $(this).data("music") == undefined && ($(this).data("music", Search.getMusic(n[o])), ++o)
                })
            }})
    },resize: function() {
        var e = Core.bodyWidth, t = Core.bodyHeight - 38 - 34 - 70 + 6;
        Mbl.colCount = parseInt(t / (Mbl.ITEM_WH + Mbl.MARGIN_BOT)), Mbl.colCount = Mbl.colCount > 5 ? 5 : Mbl.colCount, Mbl.colCount = Mbl.colCount < 2 ? 2 : Mbl.colCount;
        var n = parseInt((t - Mbl.colCount * (Mbl.ITEM_WH + Mbl.MARGIN_BOT)) / Mbl.colCount);
        Mbl.itemWH = Mbl.ITEM_WH + n, Mbl.itemWH > 250 && (Mbl.surplus = Mbl.itemWH - 250, Mbl.surplus = Mbl.surplus * Mbl.colCount / 2, Mbl.itemWH = 250), Mbl.rowCount = parseInt(e / (Mbl.itemWH + Mbl.MARGIN_RIGHT)) + 1, Mbl.count = Mbl.rowCount * Mbl.colCount, Main.screenId == "mbl" && (Main.showLoading(), $("#fsapp").html(""), clearTimeout(Mbl.resizeTmo), Mbl.resizeTmo = setTimeout(function() {
            Mbl.screenId == "device" ? Mbl.show() : Mbl.showOfflineMusic()
        }, 200))
    }}, Jing.Fltr = {margin_bot: 35,margin_right: 36,MARGIN_BOT: 35,MARGIN_RIGHT: 36,ITEM_WH: 150,colCount: 0,rowCount: 0,count: 0,ctnLeft: 550,obj: !1,init: function() {
        $(document).on("mouseenter", ".tagEvent", function() {
            $(this).text("移除"), $(this).addClass("selected"), Fltr.obj = $(this)
        }), $(document).on("mouseleave", ".tagEvent", function() {
            $(this).text($(this).data("n")), $(this).removeClass("selected")
        }), $(document).on("click", ".tagEvent", function() {
            var e = $(this).data("tid");
            $.ajax({url: Core.API_VER + "/account/filter/remove_filter_tags",data: {uid: Signup.userDetail.id,tid: e}});
            for (var t = 0; t < Fltr.items.length; ++t)
                if (Fltr.items[t].id == e) {
                    Fltr.items = Fltr.items.slice(0, t).concat(Fltr.items.slice(t + 1));
                    break
                }
            Fltr.fetchFltr(Fltr.st), setTimeout(function() {
                Fltr.obj.mouseleave()
            }, 100)
        })
    },show: function() {
        $("#fsapp").html('<div class="scrlCtlCtn"><div id="scrlCtl" class="scrlCtl"><p>过滤器 | 退出</p><a id="lftSldrBtn" href="#" class="sldrBtn lft"><span class="splt"></span></a><a href="#" id="rghtSldrBtn" class="sldrBtn rght"><span class="splt"></span></a></div></div><div id="fltrCtn" class="fltr" style="margin-left:25px;"></div>'), $("#scrlCtl").css("margin-left", -$("#scrlCtl").width() / 2 + "px"), $("#fltrCtn").append('<div class="fltrInput"><input id="fltrInput" class="input" placeholder="输入你要过滤的音乐内容"><a id="fltrBtn" href="#" class="btn"></a></div>'), $("#fltrInput").placeholder(), $("#fltrInput").keyup(function(e) {
            e.keyCode == 13 && $("#fltrBtn").click()
        }), $("#fltrBtn").click(function() {
            var e = $("#fltrInput").val();
            $("#fltrInput").val("");
            if (e == "")
                return;
            $.ajax({url: Core.API_VER + "/account/filter/post_filter_tags",data: {uid: Signup.userDetail.id,tag: e},success: function(e) {
                    if (!e.success) {
                        Gns.nowGns(e.codemsg);
                        return
                    }
                    var t = e.result;
                    if ($(".tagEvent").length < Fltr.count) {
                        var n = '<a data-n="' + t.n + '" data-tid="' + t.id + '" href="#" class="ctt tagEvent" style="margin-right:' + Fltr.margin_right + "px; margin-bottom:" + Fltr.margin_bot + 'px;">' + t.n + "</a>";
                        ($("#tagsCtn").children().length == 0 || $("#tagsCtn").children().last().children().length == Fltr.colCount) && $("#tagsCtn").append('<div style="float:left; width:' + (Fltr.ITEM_WH + Fltr.margin_right) + 'px;"></div>'), $("#tagsCtn").children().last().append(n)
                    }
                    Fltr.items[Fltr.items.length] = t
                }})
        }), $("#fltrCtn").append('<div id="tagsCtn" class="fltrsCtn" style="left:' + Fltr.ctnLeft + "px; top:" + (38 + Fltr.margin_bot) + "px; width:" + (Core.bodyWidth - 500) + "px; height:" + (Core.bodyHeight - 38 - 70) + 'px;"></div>'), Fltr.st = 0, $.ajax({url: Core.API_VER + "/account/filter/fetch_filter_tags",data: {uid: Signup.userDetail.id},success: function(e) {
                if (!e.success)
                    return;
                Fltr.items = e.result.items, Fltr.fetchFltr(Fltr.st)
            }}), $("#lftSldrBtn").click(function() {
            return Fltr.st != 0 && (Fltr.st -= Fltr.count, Fltr.st < 0 && (Fltr.st = 0), Fltr.fetchFltr(Fltr.st)), !1
        }), $("#rghtSldrBtn").click(function() {
            return Fltr.st + Fltr.count < Fltr.items.length && (Fltr.st += Fltr.count, Fltr.fetchFltr(Fltr.st)), !1
        })
    },fetchFltr: function(e) {
        Main.hideLoading();
        var t = "", n = "";
        for (var r = e; r < e + Fltr.count; ) {
            if (Fltr.items[r] == undefined)
                break;
            n += '<a data-n="' + Fltr.items[r].n + '" data-tid="' + Fltr.items[r].id + '" href="#" class="ctt tagEvent" style="margin-right:' + Fltr.margin_right + "px; margin-bottom:" + Fltr.margin_bot + 'px;">' + Fltr.items[r].n + "</a>", ++r;
            if (r % Fltr.colCount == 0 || r == Fltr.items.length || r == e + Fltr.count)
                t += '<div style="float:left; width:' + (Fltr.ITEM_WH + Fltr.margin_right) + 'px;">' + n + "</div>", n = "";
            if (r == Fltr.items.length)
                break
        }
        $("#tagsCtn").html(t)
    },resize: function() {
        var e = Core.bodyWidth - Fltr.ctnLeft, t = Core.bodyHeight - 38 - 70 - Fltr.MARGIN_BOT;
        Fltr.colCount = parseInt(t / (Fltr.ITEM_WH + Fltr.MARGIN_BOT)), t += Fltr.MARGIN_BOT, Fltr.margin_bot = parseInt((t - Fltr.colCount * Fltr.ITEM_WH) / (Fltr.colCount + 1)), Fltr.rowCount = parseInt(e / (Fltr.ITEM_WH + Fltr.margin_bot)), Fltr.margin_right = Fltr.margin_bot, Fltr.count = Fltr.rowCount * Fltr.colCount, Main.screenId == "fltr" && (Main.showLoading(), $("#fsapp").html(""), clearTimeout(Fltr.resizeTmo), Fltr.resizeTmo = setTimeout(function() {
            Fltr.show()
        }, 200))
    }}, Jing.Rls = {init: function() {
    },show: function() {
        $("#fsapp").append('<div id="rlsCtn" class="rlsCtn"></div>'), $("#rlsCtn").html('<h3 class="rlsTit"><p class="rlsVer"></p></h3><ol class="rlsCttCtn"></ol><a href="#" class="cnfmBtn cncl"></a><a href="#" class="cnfmBtn cnfm"></a>'), $("#rlsCtn>.cnfmBtn").click(function() {
            $(this).hasClass("cncl") ? $("#jing").click() : window.location.reload(!0)
        }), $.ajax({url: Core.API_VER + "/app/fetch_release",data: {uid: Signup.userDetail.id},success: function(e) {
                if (!e.sucess && e.result == null)
                    return;
                var t = e.result, n = t.content.split("；"), r = "";
                for (var i = 0; i < n.length; ++i)
                    r += "<li>" + n[i] + "</li>";
                $("#rlsCtn>.rlsCttCtn").html(r), $("#rlsCtn>.rlsTit>.rlsVer").html(t.title), $("#rlsCtn").css({"margin-left": "-" + $("#rlsCtn").width() / 2 + "px","margin-top": "-" + ($("#rlsCtn").height() / 2 + 70) + "px"})
            }})
    },resize: function() {
    }}, Jing.Gd = {init: function() {
        Gd.step1()
    },step1: function() {
        Gd.resize(), $("#gd").show();
        var e = "", t = ["一个人孤单的旅行听什么？", "悲伤的安静的小清新英文歌曲。", "我想听中国人翻唱的英文歌曲有木有？", "我分手了心情不是很好，来点音乐听听！", "秋天来了，我怀念去年我们在一起的时候。", "我想听有吉他和钢琴的，安静一点的流行歌曲。"];
        for (var n = 0; n < t.length; ++n) {
            var r = "";
            n < 3 ? r = "left" : r = "rgt", e = '<a href="#" class="ntLngBlt ' + r + '" data-text="' + t[n] + '"><span class="ntLngBltHd"></span>' + t[n] + '<span class="ntLngBltTl"></span></a>', $("#gd").append(e)
        }
        $(".ntLngBlt").each(function(e) {
            var t = (Core.bodyHeight - 113 - 75 - 31) / 2 - 40 + 60 * (e % 3);
            e < 3 ? $(this).css({left: Core.bodyWidth / 2 - 56.5 - 48 - $(this).width(),top: t + "px","z-index": 6 - e}).hide() : $(this).css({left: Core.bodyWidth / 2 + 56.5 + 48,top: t + "px","z-index": 6 - e}).hide()
        }), $(".ntLngBlt").click(function() {
            Search.flyObj($(this), "CmbtFlyBadge");
            var e = $(this).data("text");
            setTimeout(function() {
                Search.setSchVal(e), Search.searchBtnClick()
            }, 1e3)
        }), $("#step1Tip").show().animate({left: (Core.bodyWidth - $("#step1Tip").width()) / 2 + "px"}, 1e3), $("#step1Ds").show().animate({left: (Core.bodyWidth - $("#step1Ds").width()) / 2 + "px"}, 600), $("#step1Btn").show().animate({left: (Core.bodyWidth - $("#step1Btn").width()) / 2 + "px"}, 800), $("#step1Btn>a").click(Gd.step2)
    },step2: function() {
        $("#step1Tip").animate({left: Core.bodyWidth + "px"}, 1200, function() {
            $(this).hide()
        }), $("#step1Ds").animate({left: Core.bodyWidth + "px"}, 800, function() {
            $(this).hide()
        }), $("#step1Btn").animate({left: Core.bodyWidth + "px"}, 1e3, function() {
            $(this).hide()
        }), $("#step2Tip").show().animate({left: (Core.bodyWidth - $("#step2Tip").width()) / 2 + "px"}, 1e3), $("#step2Ds").show().animate({left: (Core.bodyWidth - $("#step2Ds").width()) / 2 + "px"}, 600), $("#step2Btn").show().animate({left: (Core.bodyWidth - $("#step2Btn").width()) / 2 + "px"}, 800), $("#step2Btn>a").click(Gd.step3)
    },step3: function() {
        $("#step2Tip").animate({left: Core.bodyWidth + "px"}, 1200, function() {
            $(this).hide()
        }), $("#step2Ds").animate({left: Core.bodyWidth + "px"}, 800, function() {
            $(this).hide()
        }), $("#step2Btn").animate({left: Core.bodyWidth + "px"}, 1e3, function() {
            $(this).hide()
        }), $("#step3Ds").show().animate({left: Core.bodyWidth - 620 + "px"}, 600), $("#step3Tip").show().animate({left: (Core.bodyWidth - $("#step3Tip").width()) / 2 + "px"}, 1e3, function() {
            $(".ntLngBlt").show()
        })
    },finish: function() {
        var e = function() {
            $(this).hide()
        };
        Core.ie68 ? ($("#gd").hide(), e()) : $("#gd").animate({opacity: "0"}, 300, e), setTimeout(function() {
            Signup.userDetail.newbie = 0, $("#playCtl").removeClass("play").addClass("pause"), Player.startRotate()
        }, 2e3), $.ajax({url: Core.API_VER + "/account/register_completed",data: {uid: Signup.userDetail.id}})
    },resize: function() {
        var e = (Core.bodyHeight - 330 - 75) / 2;
        $("#step1Tip, #step2Tip").css("top", e + "px"), e += 173, $("#step1Ds, #step2Ds").css("top", e + "px"), e += 125, $("#step1Btn, #step2Btn").css("top", e + "px"), e = (Core.bodyHeight - 113 - 75 - 31) / 2, $("#step3Tip").css("top", e + "px");
        var t = new Array("step1Tip", "step1Ds", "step1Btn", "step2Tip", "step2Ds", "step2Btn", "step3Tip", "step3Ds");
        for (var n = 0; n < t.length; ++n)
            $obj = $("#" + t[n]), $obj.isDisplay() && $obj.css("left", (Core.bodyWidth - $obj.width()) / 2 + "px");
        $(".ntLngBlt").length == 6 && $(".ntLngBlt").each(function(e) {
            var t = (Core.bodyHeight - 113 - 75 - 31) / 2 - 40 + 60 * (e % 3);
            e < 3 ? $(this).css({left: Core.bodyWidth / 2 - 56.5 - 48 - $(this).width(),top: t + "px"}) : $(this).css({left: Core.bodyWidth / 2 + 56.5 + 48,top: t + "px"})
        })
    }}, Jing.Message = {isMessageAni: !1,isLoginInit: !1,msgOverObj: $("null"),init: function() {
    },send: function(e, t) {
        var n = "", r = "";
        if (e.t == "flwd") {
            var i = "";
            e.me_flw || (i = '，你也要 <a href="#" class="trg gnsFlwd" data-frdid="' + e.flwer_id + '" data-nick="' + e.flwer + '">关注</a> 吗？'), e.flw_id == Signup.userDetail.id ? (n = '<a data-uid="' + e.flwer_id + '" data-nick="' + e.flwer + '" href="#" class="trg abtEvent">' + e.flwer + "</a> 关注了你" + i, r = e.flwer + " 关注了你") : Signup.userDetail.id != e.flw_id && Signup.userDetail.id != e.flwer_id && (n = '你的好友 <a data-uid="' + e.flwer_id + '" data-nick="' + e.flwer + '" href="#" class="trg abtEvent">' + e.flwer + '</a> 关注了 <a data-uid="' + e.flw_id + '" data-nick="' + e.flw + '" href="#" class="trg abtEvent">' + e.flw + "</a>", r = e.flwer + " 关注了 " + e.flw)
        } else if (e.t == "inhs") {
            if (Message.isLoginInit) {
                Message.isLoginInit = !1, setTimeout(function() {
                    Message.send(e, t)
                }, 1e4);
                return
            }
            var s = e.frds.length > 10 ? 10 : e.frds.length;
            for (var o = 0; o < s; ++o) {
                n += '<a href="#" class="trg abtEvent" data-uid="' + e.frd_ids[o] + '" data-nick="' + e.frds[o] + '">' + e.frds[o] + "</a>，", r += e.frds[o] + "，";
                var u = Signup.userDetail.newview.b.length;
                Signup.userDetail.newview.b[u] = "frdCt-inHs-" + e.frd_ids[o]
            }
            n = "你的好友 " + n.substring(0, n.length - 1) + " 入驻Jing了。", r = "你的好友 " + r.substring(0, r.length - 1) + " 入驻Jing了。"
        } else if (e.t == "atfd") {
            var a = e.cmbt.split(","), f = "", l = "";
            for (var o = 0; o < a.length; ++o)
                f += '<a class="msgFlyEvent trg" href="#" data-fid="">' + a[o] + "</a>+", l += a[o] + "+";
            f != "" && (f = f.substring(0, f.length - 1), f = " " + f + " ", l = l.substring(0, l.length - 1), l = " " + l + " "), e.cmbt == "" && (f = "", l = ""), n = '<a data-uid="' + e.frd_id + '" data-nick="' + e.frd + '" href="#" class="trg abtEvent">' + e.frd + "</a> ", r = e.frd, t ? (n += "正在收听", r += "正在收听") : (n += "收听过", r += "收听过"), n += "你喜欢的" + f + "音乐。", r += "你喜欢的" + l + "音乐。"
        } else
            e.t == "rmnd" && (n = e.frd + ' 想要你关注Ta，<a href="#" class="trg gnsFlwd" data-frdid="' + e.frd_id + '" data-nick="' + e.frd + '">关注</a>', r = e.frd + " 想要你关注Ta");
        Player.setVolumeDown("msgTone", 100), Gns.nowGns(n, Gns.NOTIFIER, r)
    }}, Jing.Lrc = {timeArr: "",OFFSET: .5,pos: 0,isMouseWheel: 0,init: function() {
        $("#lrcBtn").click(function() {
            if ($("#lrc").isDisplay())
                return;
            $("#lrc").show().animate({opacity: "1"}, 300), $("#lrcBtn").hide()
        }), $("#lrcCls").click(function() {
            if (!$("#lrc").isDisplay())
                return;
            $("#lrc").animate({opacity: "0"}, 300, function() {
                $(this).hide()
            }), Lrc.isLrc && $("#lrcBtn").show()
        }), $("#lrcCtn").mousewheel(Lrc.mousewheel)
    },mousewheel: function(e, t, n, r) {
        t > 0 ? t < 2 ? t = 80 : t < 3 ? t = 120 : t < 4 ? t = 170 : t < 5 ? t = 200 : t = 250 : t > -2 ? t = -80 : t > -3 ? t = -120 : t > -4 ? t = -170 : t > -5 ? t = -200 : t = -250, clearTimeout(Lrc.isMouseWheel), Lrc.isMouseWheel = setTimeout(function() {
            Lrc.isMouseWheel = 0
        }, 5e3);
        var i = $("#lrcCtt").height(), s = parseInt($("#lrcCtt").css("margin-top").replace("px", "")), s = s + t;
        s > 0 ? s = 0 : s < Lrc.ctnH - i && (s = Lrc.ctnH - i), $("#lrcCtt").css("margin-top", s + "px")
    },getLrc: function(e) {
        Lrc.pos = 0;
        var t = e.substring(0, 4), n = e.substring(4, 8), r = e.substring(8, 10), i = e.substring(10, 12), s = "http://jing.fm/lyrics/" + t + "/" + n + "/" + r + "/" + i + "/" + e + ".lrc";
        $.ajax({url: s,dataType: "text",type: "GET",success: Lrc.dataAnalysis,error: Lrc.hideLoading})
    },hideLoading: function() {
        Main.hideLoading($("#lrcCtt")), $("#lrcCtt").html('<p class="text" style="margin-top:' + (Lrc.ctnH / 2 - 10) + 'px">暂无歌词</p>')
    },dataAnalysis: function(e) {
        var t = e, n = t.split("\n"), r, i, s = 0;
        Lrc.timeArr = new Array;
        for (var o = 0; o < n.length; ++o) {
            r = $.trim(n[o]);
            if (r == "" || r == undefined)
                continue;
            if (r.indexOf("[ar:") == 0)
                continue;
            if (r.indexOf("[al:") == 0)
                continue;
            if (r.indexOf("[ti:") == 0) {
                Lrc.timeArr[Lrc.timeArr.length] = new Array, Lrc.timeArr[Lrc.timeArr.length - 1][0] = 0, Lrc.timeArr[Lrc.timeArr.length - 1][1] = r.substring(4, r.length - 1), Lrc.timeArr[Lrc.timeArr.length - 1][2] = "ti", Lrc.timeArr[Lrc.timeArr.length] = new Array, Lrc.timeArr[Lrc.timeArr.length - 1][0] = 0, Lrc.timeArr[Lrc.timeArr.length - 1][1] = "By Jing", Lrc.timeArr[Lrc.timeArr.length - 1][2] = "by";
                continue
            }
            if (r.indexOf("[by:") == 0)
                continue;
            if (r.indexOf("歌曲") == 0)
                continue;
            if (r.indexOf("[offset:") == 0) {
                s = Number(r.substring(8, r.indexOf("]")));
                continue
            }
            if (r.indexOf("[") == 0 && r.indexOf(":") == 3) {
                i = $.trim(r.substring(r.lastIndexOf("]") + 1));
                var u = r.substring(1, r.lastIndexOf("]"));
                u = u.split("][");
                for (var a = 0; a < u.length; ++a) {
                    var f = parseInt(u[a].split(":")[0]), l = Number(u[a].split(":")[1]);
                    time = f * 60 + l + s, Lrc.timeArr[Lrc.timeArr.length] = new Array, Lrc.timeArr[Lrc.timeArr.length - 1][0] = time, Lrc.timeArr[Lrc.timeArr.length - 1][1] = i
                }
            }
        }
        var c = function(e, t) {
            return e[0] - t[0]
        };
        Lrc.timeArr = Lrc.timeArr.sort(c);
        for (var o = 0; o < Lrc.timeArr.length; ++o) {
            var h = "";
            Lrc.timeArr[o][2] == "ti" ? h = "tit" : Lrc.timeArr[o][2] == "by" && (h = "italic"), $("#lrcCtt").append('<p id="lrc' + o + '" class="text ' + h + '">' + Lrc.timeArr[o][1] + "</p>")
        }
        $("#lrcCtt").css({"margin-top": "0px"}), Lrc.cttH = Lrc.timeArr.length * 30 - 12, Main.hideLoading($("#lrcCtt"))
    },show: function(e) {
        if (Lrc.timeArr.length == 0)
            return;
        var t = !1;
        if (Lrc.pos == 0) {
            t = !0;
            if (e < Lrc.timeArr[0][0] - Lrc.OFFSET)
                Lrc.pos = 0;
            else if (e > Lrc.timeArr[Lrc.timeArr.length - 1][0])
                Lrc.pos = Lrc.timeArr.length - 1;
            else
                for (var n = 0; n < Lrc.timeArr.length - 1; ++n)
                    if (e > Lrc.timeArr[n][0] - Lrc.OFFSET && e < Lrc.timeArr[n + 1][0]) {
                        Lrc.pos = n;
                        break
                    }
        }
        Lrc.pos + 1 < Lrc.timeArr.length && e > Lrc.timeArr[Lrc.pos + 1][0] - Lrc.OFFSET && ($("#lrcCtt>.text").removeClass("selected"), ++Lrc.pos, t = !0);
        var r = parseInt(Lrc.ctnH / 30 / 2) - 1;
        $("#lrc" + Lrc.pos).addClass("selected");
        if (Lrc.isMouseWheel)
            return;
        if (Lrc.pos > r && t) {
            var i = Lrc.pos - r;
            i * 30 > Lrc.cttH - Lrc.ctnH ? $("#lrcCtt").animate({"margin-top": -(Lrc.cttH - Lrc.ctnH) + "px"}, 300) : $("#lrcCtt").animate({"margin-top": -i * 30 + "px"}, 300)
        }
    },empty: function() {
        Lrc.timeArr = new Array, Lrc.pos = 0, $("#lrcCtt").html("").css("margin-top", "0px"), Main.showLoading($("#lrcCtt"))
    },resize: function() {
        var e = Core.bodyHeight - 70 - 50 - 100, t = Core.bodyWidth / 2 - 200;
        Lrc.ctnH = e, $("#lrc").css({height: e + "px"}), $("#lrcCtn").css({height: e + "px"})
    }}, Jing.Notifier = {PERMISSION_DEFAULT: "default",PERMISSION_GRANTED: "granted",PERMISSION_DENIED: "denied",PERMISSION: new Array,init: function() {
        Notifier.PERMISSION = [Notifier.PERMISSION_GRANTED, Notifier.PERMISSION_DEFAULT, Notifier.PERMISSION_DENIED]
    },isSupported: function() {
        var e = !1;
        try {
            e = !!(window.Notification || window.webkitNotifications || navigator.mozNotification || window.external && window.external.msIsSiteMode() !== undefined)
        } catch (t) {
        }
        return e
    },requestPermission: function() {
        try {
            window.webkitNotifications && window.webkitNotifications.checkPermission ? window.webkitNotifications.requestPermission() : window.Notification && window.Notification.requestPermission && window.Notification.requestPermission()
        } catch (e) {
        }
    },permissionLevel: function() {
        var e;
        if (!Notifier.isSupported)
            return;
        return window.Notification && window.Notification.permissionLevel ? e = window.Notification.permissionLevel() : window.webkitNotifications && window.webkitNotifications.checkPermission ? e = Notifier.PERMISSION[window.webkitNotifications.checkPermission()] : navigator.mozNotification ? e = Notifier.PERMISSION_GRANTED : window.Notification && window.Notification.permission ? e = window.Notification.permission : window.external && window.external.msIsSiteMode() !== undefined && (e = window.external.msIsSiteMode() ? Notifier.PERMISSION_GRANTED : Notifier.PERMISSION_DEFAULT), e
    },getNotification: function(e, t, n, r) {
        var i;
        return window.Notification ? i = new window.Notification(t, {icon: e,body: n || "",tag: r || ""}) : window.webkitNotifications ? (i = window.webkitNotifications.createNotification(e, t, n), i.tag = r, i.show()) : navigator.mozNotification ? (i = navigator.mozNotification.createNotification(t, n, e), i.tag = r, i.show()) : window.external && window.external.msIsSiteMode() && (window.external.msSiteModeClearIconOverlay(), window.external.msSiteModeSetIconOverlay(e, t), window.external.msSiteModeActivate(), i = {ieVerification: ieVerification + 1}), i
    },notify: function(e, t, n) {
        if (Notifier.isSupported && Notifier.permissionLevel() == Notifier.PERMISSION_GRANTED) {
            var r = Notifier.getNotification(e, t, n, "jing");
            return setTimeout(function() {
                r.close()
            }, 5e3), !0
        }
        return !1
    }};
var Abt = Jing.Abt, Apps = Jing.Apps, Charts = Jing.Charts, Cht = Jing.Cht, Explr = Jing.Explr, Fav = Jing.Fav, Fltr = Jing.Fltr, Flw = Jing.Flw, Frds = Jing.Frds, Gd = Jing.Gd, Gns = Jing.Gns, GnsRd = Jing.GnsRd, Hate = Jing.Hate, JingRd = Jing.JingRd, Mbl = Jing.Mbl, Message = Jing.Message, Ntlg = Jing.Ntlg, Player = Jing.Player, Pplr = Jing.Pplr, Rls = Jing.Rls, Search = Jing.Search, Shr = Jing.Shr, Stngs = Jing.Stngs, Tkrs = Jing.Tkrs, Top = Jing.Top, Tps = Jing.Tps, Core = Jing.Core, InsertPlay = Jing.InsertPlay, Main = Jing.Main, Now = Jing.Now, Retina = Jing.Retina, Signup = Jing.Signup, Lrc = Jing.Lrc, Notifier = Jing.Notifier;
$(function() {
    $("input, textarea").placeholder();
    var e = ["22a8db", "280df9", "490917"];
    /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent) && (window.location.href = "http://jing.fm/tracks/" + e[parseInt(Math.random() * 3)] + ".html");
    try {
        _gaq.push()
    } catch (t) {
        _gaq = new Object, _gaq.push = function() {
        }
    }
    ($("html").data("now_time") == undefined || $("html").data("now_time") == "") && $("html").data("now_time", (new Date).getTime()), $.query.get(Core.JingATokenHeader) != "" && Core.setCookie("jing.auth", $.query.get(Core.JingATokenHeader) + "," + $.query.get(Core.JingRTokenHeader));
    var n = Core.getCookie("jing.auth"), r = "", i = "";
    n != null && n != "" && (r = n.split(",")[0], i = n.split(",")[1]), $.ajaxSetup({contentType: "application/x-www-form-urlencoded; charset=UTF-8",type: "POST",dataType: "json",headers: {"Jing-A-Token-Header": r,"Jing-R-Token-Header": i},async: !0}), !swfobject.ua.pv[0] && (Core.ie68 || Core.gecko || Core.opera) && (window.location.href = "/noflash.html"), Retina.init();
    if (window.console == undefined) {
        var s = ["log", "debug", "info", "warn", "error", "assert", "dir", "dirxml", "group", "groupEnd", "time", "timeEnd", "count", "trace", "profile", "profileEnd"];
        window.console = {};
        for (var o = 0; o < s.length; ++o)
            window.console[s[o]] = function() {
            }
    }
    setInterval(function() {
        if (Cht.offlineCount == 0) {
            document.title = "Jing+ Music";
            return
        }
        document.title == "[新消息] Jing+ Music" ? document.title = "Jing+ Music" : document.title = "[新消息] Jing+ Music"
    }, 2e3), Core.init(), Tps.init(), Signup.init(), $(document).click(function() {
        if (Core.pass) {
            Core.pass = !1;
            return
        }
        $("#tps").hide(), $("#more").hasClass("selected") && $("#more").click();
        switch (Interface.Current) {
            case Interface.MAIN:
                Gns.openGnsArr = new Array, Gns.closeGns();
                break;
            case Interface.SEARCH:
                Interface.Current = Interface.MAIN, Search.hide(), $("#schFld").blur()
        }
    }), key("delete", function() {
        $("#playerHate").click()
    }), key("c", function() {
        $("#more").click()
    }), key("s", function() {
        $("#schBtn").mouseover(), setTimeout(function() {
            $("#schBxCtn").click()
        }, 300)
    }), key("t", function() {
        $("#playerHate").click()
    }), key("x", function() {
        $("#playerLove").click()
    }), key("r", function() {
        $("#playerRptOne").click()
    }), key("space", function() {
        if (Flw.isFlw && !Flw.isServer) {
            Gns.nowGns("你正在跟听状态中，不能播放暂停");
            return
        }
        $("#jingRdCtn").length == 1 ? $("#jingRdCtl").click() : $("#playCtl").click()
    }), key("up", function() {
        if (Flw.isFlw && !Flw.isServer) {
            Gns.nowGns("你正在跟听状态中，将跟对方音量同步，不能自己调节");
            return
        }
        Player.volumeUp()
    }), key("down", function() {
        if (Flw.isFlw && !Flw.isServer) {
            Gns.nowGns("你正在跟听状态中，将跟对方音量同步，不能自己调节");
            return
        }
        Player.volumeDown()
    }), key("right", function() {
        if (Flw
        .isFlw && !Flw.isServer) {
            Gns.nowGns("你正在跟听状态中，不能切换歌曲");
            return
        }
        $("#playerNext").click()
    }), key("esc", function() {
        $("#scrlCtl").click()
    }), key("m", function() {
        if (Flw.isFlw && !Flw.isServer) {
            Gns.nowGns("你正在跟听状态中，将跟对方音量同步，不能自己调节");
            return
        }
        Player.setVolume(Player.MIN_VLM)
    })
});
var SnsArr = new Array("wb", "qq", "rr", "db", "oicq"), resData = {frdCt: [{mid: "inHs",name: "入驻好友",display: "true"}, {mid: "wb",name: "微博好友",display: "false"}, {mid: "rr",name: "人人好友",display: "false"}, {mid: "db",name: "豆瓣好友",display: "false"}, {mid: "qq",name: "腾讯好友",display: "false"}, {mid: "rbsFrd",name: "好友垃圾箱",display: "true"}],ext: [{mid: "mtFrds",name: "你可能认识的人",display: "true"}, {mid: "invt",name: "邀请",display: "true"}, {mid: "extWb",name: "连接微博",display: "true"}, {mid: "extRr",name: "连接人人",display: "true"}, {mid: "extDb",name: "连接豆瓣",display: "true"}, {mid: "extQq",name: "连接腾讯",display: "true"}, {mid: "gm",name: "邀请Gmail邮箱好友",display: "true"}, {mid: "yh",name: "邀请Yahoo!邮箱好友",display: "true"}, {mid: "ht",name: "邀请Hotmail邮箱好友",display: "true"}, {mid: "rbsFrd",name: "好友垃圾箱",display: "true"}]}, resUrl = new Object;
resUrl.qq = Core.API_VER + "/oauth/fetch_friends?identify=qq_weibo", resUrl.rr = Core.API_VER + "/oauth/fetch_friends?identify=renren", resUrl.db = Core.API_VER + "/oauth/fetch_friends?identify=douban", resUrl.wb = Core.API_VER + "/oauth/fetch_friends?identify=sina_weibo", resUrl.oicq = Core.API_VER + "/oauth/fetch_friends?identify=Oicq", resUrl.inHs = Core.API_VER + "/account/fetch_friends_order", resUrl.rbsFrd = Core.API_VER + "/account/fetch_block_friends", resUrl.mtFrds = Core.API_VER + "/account/fetch_mtknown_friends", resUrl.ntff = Core.API_VER + "/chat/fetch_personal_sysmessage", resUrl.invt = Core.API_VER + "/app/fetch_invitations";
var ConverSns = new Object;
ConverSns.extQq = "qq", ConverSns.extRr = "rr", ConverSns.extWb = "wb", ConverSns.extDb = "db", ConverSns.extOicq = "oicq", ConverSns.qq = "extQq", ConverSns.rr = "extRr", ConverSns.wb = "extWb", ConverSns.db = "extDb", ConverSns.oicq = "extOicq", ConverSns.qq1 = "qq_weibo", ConverSns.rr1 = "renren", ConverSns.db1 = "douban", ConverSns.wb1 = "sina_weibo", ConverSns.oicq1 = "Oicq", ConverSns.renren = "rr", ConverSns.sina_weibo = "wb", ConverSns.qq_weibo = "qq", ConverSns.douban = "db", ConverSns.Oicq = "oicq";
var Avatar = new Object;
Avatar.Qq = "腾讯微博", Avatar.Sina = "新浪微博", Avatar.Douban = "豆瓣", Avatar.Local = "Jing", Avatar.Renren = "人人", Avatar.Oicq = "QQ";
var SnsAdd = new Object;
SnsAdd.renren = "http://www.renren.com/", SnsAdd.sina_weibo = "http://www.weibo.com/u/", SnsAdd.qq_weibo = "http://t.qq.com/", SnsAdd.douban = "http://www.douban.com/people/";
var SnsWindowWh = new Object;
SnsWindowWh.qq = new Array(650, 480), SnsWindowWh.rr = new Array(981, 523), SnsWindowWh.wb = new Array(750, 555), SnsWindowWh.db = new Array(590, 435), SnsWindowWh.oicq = new Array(700, 410);
var resStyle = new Object;
resStyle.tkrs = new Array(250, 87, 3, 2, 50);
var Thm = new Array;
Thm[0] = new Array("jzwd", "爵士印象"), Thm[1] = new Array("rdpnk", "橙色年华"), Thm[2] = new Array("dflt", "淡淡时光"), Thm[3] = new Array("blkstn", "黑色迷墙"), Thm[4] = new Array("ctwd", "雕刻时光"), Thm[5] = new Array("rlwd", "一叶知秋");
var resEmail = new Object;
resEmail.gm = "Gmail", resEmail.yh = "Yahoo", resEmail.ht = "Hotmail";
var resSns = new Object;
resSns.extQq = "qq_weibo", resSns.extRr = "renren", resSns.extWb = "sina_weibo", resSns.extDb = "douban";
var btnDes = new Object;
btnDes.mscSch = "音乐中心", btnDes.gns = "Genius", btnDes.playCtlPlay = "播放", btnDes.playCtlPause = "暂停", btnDes.next = "换歌", btnDes.tkrs = "Ta们在听", btnDes.about = "个人主页", btnDes.frdCt = "好友中心", btnDes.menuMore = "下一页", btnDes.menuRfrsh = "刷新", btnDes.menuLove = "收听自己", btnDes.menuVo = "语音说明", btnDes.signUp = "注册", btnDes.signIn = "登录", btnDes.snsRenren = "人人网登录", btnDes.renren = "人人网", btnDes.snsSina = "微博登录", btnDes.sina_weibo = "新浪微博", btnDes.snsQQ = "腾讯登录", btnDes.qq_weibo = "腾讯微博", btnDes.snsDouban = "豆瓣登录", btnDes.douban = "豆瓣网", btnDes.snsOicq = "QQ登录", btnDes.Oicq = "QQ";
var St = {};
St.sns = {wb: "自动同步到" + btnDes.sina_weibo,qq: "自动同步到" + btnDes.qq_weibo,rr: "自动同步到" + btnDes.renren,db: "自动同步到" + btnDes.douban}, St.ntfct = {tckNtf: "自动提醒好友在听",rmdTone: "开启消息提醒声音",frdCntNtf: "自动提醒在线好友",tipNtf: "自动提示菜单Tip"}, St.gns = {timedot: "自动提示歌曲的演奏信息",rltd: "自动提示歌曲的周边信息，电影相关",frdlvd: "自动提示你的朋友也喜欢了这首歌",rcmd: "自动推荐搜索组合",ss: "自动开启智能推荐"}, St.dsply = {lgA: "开启大字体显示",rtCv: "开启封面旋转",autoSnc: "开启一键分享",hbr: "使用高品质音乐"}, St.snsDes = "社交网络设置", St.ntfctDes = "提醒设置", St.gnsDes = "Genius设置", St.dsplyDes = "辅助设置";
var StPrfl = {};
StPrfl.info = ["个人信息", 257], StPrfl.avatar = ["修改头像"], StPrfl.etpwd = ["修改密码", 125], StPrfl.thm = ["设置主题", 367], StPrfl.fltr = ["过滤器"];
var FrdDes = new Object;
FrdDes.olFrd = "好友在线", FrdDes.inHs = "入驻好友", FrdDes.rbsFrd = "被删除的好友", FrdDes.qq = "腾讯微博好友", FrdDes.rr = "人人好友", FrdDes.wb = "微博好友", FrdDes.db = "豆瓣好友", FrdDes.mtFrds = "你可能认识的人", FrdDes.invt = "邀请码";
var Symbol = new Object;
Symbol["+"] = "+", Symbol["="] = "+", Symbol["＋"] = "+", Symbol["＝"] = "+", Symbol["-"] = "-", Symbol["－"] = "-", Symbol["＿"] = "-", Symbol["&"] = "&", Symbol[" + "] = "", Symbol[" - "] = "", Symbol[" & "] = "";
var Emj = new Object;
Emj.tq = "1", Emj.zyj = "2", Emj.tst = "3", Emj.smm = "4", Emj.gg = "9", Emj.k = "10", Emj.zgl = "11", Emj.kbs = "12", Emj.sb = "17", Emj.bm = "18", Emj.fd = "19", Emj.hx = "20", Emj.wsbqf = "25", Emj.jy = "26", Emj.kh = "27", Emj.mny = "28", Emj.h = "5", Emj.sa = "6", Emj.kq = "7", Emj.sq = "8", Emj.sj = "13", Emj.yx = "14", Emj.lm = "15", Emj.bs = "16", Emj.zgws = "21", Emj.lshd = "22", Emj.tc = "23", Emj.sh = "24", Emj.tzz = "29", Emj.ggyx = "30";
var Device = new Object;
Device.P = new Array("webOl", "Web在线"), Device.O = new Array("iphnOl", "IOS在线"), Device.D = new Array("iphnOl", "IOS在线"), Device.T = new Array("iphnOl", "IOS在线"), Device.R = new Array("andrdOl", "ANDROID在线");
var Menu = new Object;
Menu.fav = "红心电台", Menu.jingRd = "猜你可能喜歡", Menu.explr = "音乐探索", Menu.tkrs = "大家在听", Menu.frds = "好友列表", Menu.charts = "音乐榜单", Menu.hate = "讨厌的音乐", Menu.pplr = "最优听者", Menu.ntlg = "自然语言推荐", Menu.fltr = "过滤器", Menu.top = "音乐瀑布", Menu.mbl = "移动设备", Menu.stngs = "设置";
var EmptyDes = new Object;
EmptyDes.fav = "Ta还没有喜欢过", EmptyDes.abt = "Ta还没有喜欢过", EmptyDes.hate = "Ta还没有讨厌过";
