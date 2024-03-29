/*! ruizeanTrader - v1.0.0 - 2017-03-08 */
function detectBrowser() {
    if (/Firefox[\/\s](\d+\.\d+)/.test(navigator.userAgent)) {
      browserName = "firefox";
      var a = new Number(RegExp.$1);
      browserVersion = Math.floor(a)
    }
    if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)) {
      browserName = "internet explorer";
      var b = new Number(RegExp.$1);
      browserVersion = Math.floor(b)
    }
    if (/Opera[\/\s](\d+\.\d+)/.test(navigator.userAgent)) {
      browserName = "opera";
      var c = new Number(RegExp.$1);
      browserVersion = Math.floor(c)
    }
    navigator.userAgent.toLowerCase().indexOf("chrome") > -1 && navigator.userAgent.toLowerCase().indexOf("safari") != -1 && (browserName = "chrome", browserVersion = ""), navigator.userAgent.toLowerCase().indexOf("chrome") == -1 && navigator.userAgent.toLowerCase().indexOf("safari") != -1 && (browserName = "safari", browserVersion = "")
  }
  
  function detectDevice() {
    deviceName = navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/iPad/i) ? "iosdevice" : navigator.userAgent.match(/Android/i) ? "android" : navigator.userAgent.match(/BlackBerry/i) ? "blackberry" : navigator.userAgent.match(/IEMobile/i) ? "iemobile" : navigator.userAgent.match(/Silk/i) ? "kindle" : "computer"
  }
  
  function RuiZeanTrader() {}
  
  function LoopScroll(a, b) {
    var b = void 0 != b ? b : {};
    return this.$ele = $(a), this.$eleWrapper = $(a).find("ul"), this.$eleItem = $(a).find("li"), this.len = 1, this.maxHeight = 470, this.stopRender = !1, this.initHeight = 0, this.speed = void 0 != b.speed ? b.speed : .5, this.init(), this
  }
  
  function SnapTxt(a, b) {
    var b = b || {};
    return this.ele = a, this.$ele = $(a), this.fontSize = b.fontSize || "100px", this.fontFamily = b.fontFamily || "'ADAM_CGPRO','Microsoft Yahei','STHeiti Light'", this.gradient = b.gradient || "l(0, 0, 1, 0)#E4C674-#F4E3A0-#E4C674", this.textAchor = b.textAchor || "start", this.fontWeight = b.fontWeight || "normal", $(this.ele).length && this.init(), this
  }
  
  function SnapPic(a, b) {
    var b = b || {};
    return this.ele = a, this.$ele = $(a), this.$parent = b.parentEle ? $(b.parentEle) : $(a).parent(), this.imgSrc = b.imgSrc || "none", this.imgWidth = b.imgWidth || 150, this.imgHeight = b.imgHeight || 100, this.offset = b.offset || 20, this.shadowOffset = 10, console.log(this.$parent), $(this.ele).length && this.init(), this
  }
  
  function SnapBtnBg(a, b) {
    var b = b || {};
    return this.ele = a, this.$ele = $(a), this.offset = parseInt(this.$ele.parent().css("padding-right")), this.gradient = b.gradient || "l(0, 0, 1, 0)#E4C674-#F4E3A0-#E4C674", this.gradient2 = b.gradient2 || "l(0, 0, 1, 0)#6FCBE0-#70B8DF", $(this.ele).length && this.init(), this
  }
  
  function SnapBtn1(a, b) {
    var b = b || {};
    return this.ele = a, this.$ele = $(a), this.height = b.height || 70, this.space = b.space || 40, this.font1 = b.font1 || "1", this.font1Color = b.font1Color || "#fff", this.font1ColorOver = b.font1ColorOver || "#fff", this.font1Size = b.font1Size || 30, this.font1Width = b.font1Width || 40, this.font2 = b.font2 || "按钮", this.font2Color = b.font2Color || "#dab76c", this.font2ColorOver = b.font2ColorOver || "#fff", this.font2Size = b.font2Size || 20, this.font2Width = b.font2Width || 270, this.lineY = b.lineY || 10, this.gradientOver = b.gradient || "l(0, 1, 1, 0)#E4C674-#F4E3A0-#E4C674", this.gradientOut = b.gradient || "l(0, 1, 1, 0)#fff-#fff-#fff", this.textAchor = b.textAchor || "middle", $(this.ele).length && this.init(), this
  }
  
  function SnapScrollBtn(a, b) {
    var b = b || {};
    return this.ele = a, this.$ele = $(a), this.width = b.width || 32, this.height = b.height || 46, this.strokeStyle = b.strokeStyle || "#fff", this.strokeWidth = b.strokeWidth || 2, this.lineSpace = b.linSpace || 4, this.lineHeight = b.lineHeight || 10, this.arcHeight = b.strokeArcHeight || 10, $(this.ele).length && this.init(), this
  }
  
  function SnapArrowBtn(a, b) {
    var b = b || {};
    return this.ele = a, this.$ele = $(a), this.width = b.width || 32, this.height = b.height || 46, this.num = b.num || 3, this.arrowDirection = b.arrowDirection || "prev", this.gradient = b.gradient || "l(0, 0, 1, 0)#E4C674-#F4E3A0-#E4C674", this.gradient2 = b.gradient2 || "l(0, 0, 1, 0)#F4E3A0-#E4C674-#F4E3A0", $(this.ele).length && this.init(), this
  }
  
  function SnapBtnBorder(a, b) {
    var b = b || {};
    return this.ele = a, this.$ele = $(a), this.$parentEle = $(a).parent(), this.gradient = b.gradient || "l(0, 0, 1, 0)#E4C674-#F4E3A0-#E4C674", this.gradient2 = b.gradient2 || "l(0, 0, 1, 0)#F4E3A0-#E4C674-#F4E3A0", this.strokeWidth = 2 * b.strokeWidth || 6, $(this.ele).length && this.init(), this
  }! function(a) {
    "use strict";
    a.matchMedia = a.matchMedia || function(a) {
      var b, c = a.documentElement,
        d = c.firstElementChild || c.firstChild,
        e = a.createElement("body"),
        f = a.createElement("div");
      return f.id = "mq-test-1", f.style.cssText = "position:absolute;top:-100em", e.style.background = "none", e.appendChild(f),
        function(a) {
          return f.innerHTML = '&shy;<style media="' + a + '"> #mq-test-1 { width: 42px; }</style>', c.insertBefore(e, d), b = 42 === f.offsetWidth, c.removeChild(e), {
            matches: b,
            media: a
          }
        }
    }(a.document)
  }(this),
  function(a) {
    "use strict";
  
    function b() {
      v(!0)
    }
    var c = {};
    a.respond = c, c.update = function() {};
    var d = [],
      e = function() {
        var b = !1;
        try {
          b = new a.XMLHttpRequest
        } catch (c) {
          b = new a.ActiveXObject("Microsoft.XMLHTTP")
        }
        return function() {
          return b
        }
      }(),
      f = function(a, b) {
        var c = e();
        c && (c.open("GET", a, !0), c.onreadystatechange = function() {
          4 !== c.readyState || 200 !== c.status && 304 !== c.status || b(c.responseText)
        }, 4 !== c.readyState && c.send(null))
      },
      g = function(a) {
        return a.replace(c.regex.minmaxwh, "").match(c.regex.other)
      };
    if (c.ajax = f, c.queue = d, c.unsupportedmq = g, c.regex = {
        media: /@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi,
        keyframes: /@(?:\-(?:o|moz|webkit)\-)?keyframes[^\{]+\{(?:[^\{\}]*\{[^\}\{]*\})+[^\}]*\}/gi,
        comments: /\/\*[^*]*\*+([^\/][^*]*\*+)*\//gi,
        urls: /(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,
        findStyles: /@media *([^\{]+)\{([\S\s]+?)$/,
        only: /(only\s+)?([a-zA-Z]+)\s?/,
        minw: /\(\s*min\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,
        maxw: /\(\s*max\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,
        minmaxwh: /\(\s*m(in|ax)\-(height|width)\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/gi,
        other: /\([^\)]*\)/g
      }, c.mediaQueriesSupported = a.matchMedia && null !== a.matchMedia("only all") && a.matchMedia("only all").matches, !c.mediaQueriesSupported) {
      var h, i, j, k = a.document,
        l = k.documentElement,
        m = [],
        n = [],
        o = [],
        p = {},
        q = 30,
        r = k.getElementsByTagName("head")[0] || l,
        s = k.getElementsByTagName("base")[0],
        t = r.getElementsByTagName("link"),
        u = function() {
          var a, b = k.createElement("div"),
            c = k.body,
            d = l.style.fontSize,
            e = c && c.style.fontSize,
            f = !1;
          return b.style.cssText = "position:absolute;font-size:1em;width:1em", c || (c = f = k.createElement("body"), c.style.background = "none"), l.style.fontSize = "100%", c.style.fontSize = "100%", c.appendChild(b), f && l.insertBefore(c, l.firstChild), a = b.offsetWidth, f ? l.removeChild(c) : c.removeChild(b), l.style.fontSize = d, e && (c.style.fontSize = e), a = j = parseFloat(a)
        },
        v = function(b) {
          var c = "clientWidth",
            d = l[c],
            e = "CSS1Compat" === k.compatMode && d || k.body[c] || d,
            f = {},
            g = t[t.length - 1],
            p = (new Date).getTime();
          if (b && h && q > p - h) return a.clearTimeout(i), void(i = a.setTimeout(v, q));
          h = p;
          for (var s in m)
            if (m.hasOwnProperty(s)) {
              var w = m[s],
                x = w.minw,
                y = w.maxw,
                z = null === x,
                A = null === y,
                B = "em";
              x && (x = parseFloat(x) * (x.indexOf(B) > -1 ? j || u() : 1)), y && (y = parseFloat(y) * (y.indexOf(B) > -1 ? j || u() : 1)), w.hasquery && (z && A || !(z || e >= x) || !(A || y >= e)) || (f[w.media] || (f[w.media] = []), f[w.media].push(n[w.rules]))
            }
          for (var C in o) o.hasOwnProperty(C) && o[C] && o[C].parentNode === r && r.removeChild(o[C]);
          o.length = 0;
          for (var D in f)
            if (f.hasOwnProperty(D)) {
              var E = k.createElement("style"),
                F = f[D].join("\n");
              E.type = "text/css", E.media = D, r.insertBefore(E, g.nextSibling), E.styleSheet ? E.styleSheet.cssText = F : E.appendChild(k.createTextNode(F)), o.push(E)
            }
        },
        w = function(a, b, d) {
          var e = a.replace(c.regex.comments, "").replace(c.regex.keyframes, "").match(c.regex.media),
            f = e && e.length || 0;
          b = b.substring(0, b.lastIndexOf("/"));
          var h = function(a) {
              return a.replace(c.regex.urls, "$1" + b + "$2$3")
            },
            i = !f && d;
          b.length && (b += "/"), i && (f = 1);
          for (var j = 0; f > j; j++) {
            var k, l, o, p;
            i ? (k = d, n.push(h(a))) : (k = e[j].match(c.regex.findStyles) && RegExp.$1, n.push(RegExp.$2 && h(RegExp.$2))), o = k.split(","), p = o.length;
            for (var q = 0; p > q; q++) l = o[q], g(l) || m.push({
              media: l.split("(")[0].match(c.regex.only) && RegExp.$2 || "all",
              rules: n.length - 1,
              hasquery: l.indexOf("(") > -1,
              minw: l.match(c.regex.minw) && parseFloat(RegExp.$1) + (RegExp.$2 || ""),
              maxw: l.match(c.regex.maxw) && parseFloat(RegExp.$1) + (RegExp.$2 || "")
            })
          }
          v()
        },
        x = function() {
          if (d.length) {
            var b = d.shift();
            f(b.href, function(c) {
              w(c, b.href, b.media), p[b.href] = !0, a.setTimeout(function() {
                x()
              }, 0)
            })
          }
        },
        y = function() {
          for (var b = 0; b < t.length; b++) {
            var c = t[b],
              e = c.href,
              f = c.media,
              g = c.rel && "stylesheet" === c.rel.toLowerCase();
            e && g && !p[e] && (c.styleSheet && c.styleSheet.rawCssText ? (w(c.styleSheet.rawCssText, e, f), p[e] = !0) : (!/^([a-zA-Z:]*\/\/)/.test(e) && !s || e.replace(RegExp.$1, "").split("/")[0] === a.location.host) && ("//" === e.substring(0, 2) && (e = a.location.protocol + e), d.push({
              href: e,
              media: f
            })))
          }
          x()
        };
      y(), c.update = y, c.getEmValue = u, a.addEventListener ? a.addEventListener("resize", b, !1) : a.attachEvent && a.attachEvent("onresize", b)
    }
  }(this),
  function(a) {
    "use strict";
  
    function b() {
      for (var a = navigator.plugins || [], b = 0; b < a.length; b++) {
        var c = a[b];
        if ("np-mswmp.dll" == c.filename) return !0
      }
      return !1
    }
  
    function c() {
      var b = "";
      for (var c in a.fn.media.defaults.players) b.length && (b += ","), b += a.fn.media.defaults.players[c].types;
      return new RegExp("\\.(" + b.replace(/,/gi, "|") + ")\\b")
    }
  
    function d(a) {
      return function(b, c) {
        return g(b, c, a)
      }
    }
  
    function e(a) {
      return "0123456789".indexOf(a) > -1
    }
  
    function f(b, c) {
      c = c || {};
      var d, e, f = a(b),
        g = b.className || "",
        h = a.metadata ? f.metadata() : a.meta ? f.data() : {};
      h = h || {};
      var i = h.width || parseInt((g.match(/\bw:(\d+)/) || [])[1] || 0, 10) || parseInt((g.match(/\bwidth:(\d+)/) || [])[1] || 0, 10),
        j = h.height || parseInt((g.match(/\bh:(\d+)/) || [])[1] || 0, 10) || parseInt((g.match(/\bheight:(\d+)/) || [])[1] || 0, 10);
      i && (h.width = i), j && (h.height = j), g && (h.cls = g);
      for (var k = "data-", l = 0; l < b.attributes.length; l++) {
        d = b.attributes[l], e = a.trim(d.name);
        var m = e.indexOf(k);
        0 === m && (e = e.substring(k.length), h[e] = d.value)
      }
      d = a.fn.media.defaults;
      var n = c,
        o = h,
        p = {
          params: {
            bgColor: c.bgColor || a.fn.media.defaults.bgColor
          }
        },
        q = a.extend({}, d, n, o);
      return a.each(["attrs", "params", "flashvars", "silverlight"], function(b, c) {
        q[c] = a.extend({}, p[c] || {}, d[c] || {}, n[c] || {}, o[c] || {})
      }), "undefined" == typeof q.caption && (q.caption = f.text()), q.src = q.src || f.attr("href") || f.attr("src") || "unknown", q
    }
  
    function g(b, c, d) {
      var e, f, g, h = a(b),
        k = a.fn.media.defaults.players[d];
      if ("iframe" == d) k = a('<iframe width="' + c.width + '" height="' + c.height + '" >'), k.attr("src", c.src), k.css("backgroundColor", k.bgColor);
      else if ("img" == d) k = a("<img>"), k.attr("src", c.src), c.width && k.attr("width", c.width), c.height && k.attr("height", c.height), k.css("backgroundColor", k.bgColor);
      else if (j) {
        e = ['<object width="' + c.width + '" height="' + c.height + '" '];
        for (f in c.attrs) e.push(f + '="' + c.attrs[f] + '" ');
        for (f in k.ieAttrs || {}) g = k.ieAttrs[f], "codebase" == f && "https:" == window.location.protocol && (g = g.replace("http", "https")), e.push(f + '="' + g + '" ');
        e.push("></object>");
        var l = ['<param name="' + (k.oUrl || "src") + '" value="' + c.src + '">'];
        for (f in c.params) l.push('<param name="' + f + '" value="' + c.params[f] + '">');
        k = document.createElement(e.join(""));
        for (var m = 0; m < l.length; m++) k.appendChild(document.createElement(l[m]))
      } else if (c.standards) {
        if (e = ['<object type="' + k.mimetype + '" width="' + c.width + '" height="' + c.height + '"'], c.src && e.push(' data="' + c.src + '" '), i)
          for (f in k.ieAttrs || {}) g = k.ieAttrs[f], "codebase" == f && "https:" == window.location.protocol && (g = g.replace("http", "https")), e.push(f + '="' + g + '" ');
        e.push(">"), e.push('<param name="' + (k.oUrl || "src") + '" value="' + c.src + '">');
        for (f in c.params) "wmode" == f && "flash" != d || e.push('<param name="' + f + '" value="' + c.params[f] + '">');
        e.push("<div><p><strong>" + k.title + " Required</strong></p><p>" + k.title + ' is required to view this media. <a href="' + k.pluginspage + '">Download Here</a>.</p></div>'), e.push("</object>")
      } else {
        e = ['<embed width="' + c.width + '" height="' + c.height + '" style="display:block"'], c.src && e.push(' src="' + c.src + '" ');
        for (f in c.attrs) e.push(f + '="' + c.attrs[f] + '" ');
        for (f in k.eAttrs || {}) e.push(f + '="' + k.eAttrs[f] + '" ');
        for (f in c.params) "wmode" == f && "flash" != d || e.push(f + '="' + c.params[f] + '" ');
        e.push("></embed>")
      }
      var n = b.id ? ' id="' + b.id + '"' : "",
        o = c.cls ? ' class="' + c.cls + '"' : "",
        p = a("<div" + n + o + ">");
      return h.after(p).remove(), j || "iframe" == d || "img" == d ? p.append(k) : p.html(e.join("")), c.caption && a("<div>").appendTo(p).html(c.caption), p
    }
    var h = document.documentMode || 0,
      i = /MSIE/.test(navigator.userAgent),
      j = i && (/MSIE (6|7|8)\.0/.test(navigator.userAgent) || h < 9);
    a.fn.media = function(b, d, g) {
      return "undo" == b ? this.each(function() {
        var b = a(this),
          c = b.data("media.origHTML");
        c && b.replaceWith(c)
      }) : this.each(function() {
        "function" == typeof b && (g = d, d = b, b = {});
        var h = f(this, b);
        "function" == typeof d && d(this, h);
        var i, j = c(),
          k = j.exec(h.src.toLowerCase()) || [""];
        h.type ? k[0] = h.type : k.shift();
        for (var l = 0; l < k.length; l++)
          if (i = k[l].toLowerCase(), e(i[0]) && (i = "fn" + i), a.fn.media[i]) {
            var m = a.fn.media[i + "_player"];
            if (h.params || (h.params = {}), m) {
              var n = "autostart" == m.autoplayAttr;
              h.params[m.autoplayAttr || "autoplay"] = n ? h.autoplay ? 1 : 0 : !!h.autoplay
            }
            var o = a.fn.media[i](this, h);
            if (o.css("backgroundColor", h.bgColor).width(h.width), h.canUndo) {
              var p = a("<div></div>").append(this);
              o.data("media.origHTML", p.html())
            }
            "function" == typeof g && g(this, o[0], h, m.name);
            break
          }
      })
    }, a.fn.media.mapFormat = function(b, c) {
      b && c && a.fn.media.defaults.players[c] && (b = b.toLowerCase(), e(b[0]) && (b = "fn" + b), a.fn.media[b] = a.fn.media[c], a.fn.media[b + "_player"] = a.fn.media.defaults.players[c])
    }, a.fn.media.defaults = {
      standards: !0,
      canUndo: !0,
      width: 400,
      height: 400,
      autoplay: 0,
      bgColor: "#ffffff",
      params: {
        wmode: "transparent"
      },
      attrs: {},
      flvKeyName: "file",
      flashvars: {},
      flashVersion: "7",
      expressInstaller: null,
      flvPlayer: "mediaplayer.swf",
      mp3Player: "mediaplayer.swf",
      silverlight: {
        inplaceInstallPrompt: "true",
        isWindowless: "true",
        framerate: "24",
        version: "0.9",
        onError: null,
        onLoad: null,
        initParams: null,
        userContext: null
      }
    }, a.fn.media.defaults.players = {
      flash: {
        name: "flash",
        title: "Flash",
        types: "flv,mp3,swf",
        mimetype: "application/x-shockwave-flash",
        pluginspage: "http://www.adobe.com/go/getflashplayer",
        ieAttrs: {
          classid: "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000",
          type: "application/x-oleobject",
          codebase: "http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=" + a.fn.media.defaults.flashVersion
        }
      },
      quicktime: {
        name: "quicktime",
        title: "QuickTime",
        mimetype: "video/quicktime",
        pluginspage: "http://www.apple.com/quicktime/download/",
        types: "aif,aiff,aac,au,bmp,gsm,mov,mid,midi,mpg,mpeg,mp4,m4a,psd,qt,qtif,qif,qti,snd,tif,tiff,wav,3g2,3gp",
        ieAttrs: {
          classid: "clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B",
          codebase: "http://www.apple.com/qtactivex/qtplugin.cab"
        }
      },
      realplayer: {
        name: "real",
        title: "RealPlayer",
        types: "ra,ram,rm,rpm,rv,smi,smil",
        mimetype: "audio/x-pn-realaudio-plugin",
        pluginspage: "http://www.real.com/player/",
        autoplayAttr: "autostart",
        ieAttrs: {
          classid: "clsid:CFCDAA03-8BE4-11cf-B84B-0020AFBBCCFA"
        }
      },
      winmedia: {
        name: "winmedia",
        title: "Windows Media",
        types: "asx,asf,avi,wma,wmv",
        mimetype: b() ? "application/x-ms-wmp" : "application/x-mplayer2",
        pluginspage: "http://www.microsoft.com/Windows/MediaPlayer/",
        autoplayAttr: "autostart",
        oUrl: "url",
        ieAttrs: {
          classid: "clsid:6BF52A52-394A-11d3-B153-00C04F79FAA6",
          type: "application/x-oleobject"
        }
      },
      img: {
        name: "img",
        title: "Image",
        types: "gif,png,jpg"
      },
      iframe: {
        name: "iframe",
        types: "html,pdf"
      },
      silverlight: {
        name: "silverlight",
        types: "xaml"
      }
    };
    var k = 1;
    for (var l in a.fn.media.defaults.players) {
      var m = a.fn.media.defaults.players[l].types;
      a.each(m.split(","), function(b, c) {
        e(c[0]) && (c = "fn" + c), a.fn.media[c] = a.fn.media[l] = d(l), a.fn.media[c + "_player"] = a.fn.media.defaults.players[l]
      })
    }
    a.fn.media.swf = function(b, c) {
      var d, e;
      if (!window.SWFObject && !window.swfobject) {
        if (c.flashvars) {
          var f = [];
          for (d in c.flashvars) f.push(d + "=" + c.flashvars[d]);
          c.params || (c.params = {}), c.params.flashvars = f.join("&")
        }
        return g(b, c, "flash")
      }
      var h = b.id ? ' id="' + b.id + '"' : "",
        i = c.cls ? ' class="' + c.cls + '"' : "",
        j = a("<div" + h + i + ">");
      if (window.swfobject) a(b).after(j).appendTo(j), b.id || (b.id = "movie_player_" + k++), window.swfobject.embedSWF(c.src, b.id, c.width, c.height, c.flashVersion, c.expressInstaller, c.flashvars, c.params, c.attrs);
      else {
        a(b).after(j).remove();
        var l = new SWFObject(c.src, "movie_player_" + k++, c.width, c.height, c.flashVersion, c.bgColor);
        c.expressInstaller && l.useExpressInstall(c.expressInstaller);
        for (e in c.params) "bgColor" != e && l.addParam(e, c.params[e]);
        for (d in c.flashvars) l.addVariable(d, c.flashvars[d]);
        l.write(j[0])
      }
      return c.caption && a("<div>").appendTo(j).html(c.caption), j
    }, a.fn.media.flv = a.fn.media.mp3 = function(b, c) {
      var d = c.src,
        e = /\.mp3\b/i.test(d) ? c.mp3Player : c.flvPlayer,
        f = c.flvKeyName;
      d = encodeURIComponent(d), c.src = e, c.src = c.src + "?" + f + "=" + d;
      var g = {};
      return g[f] = d, c.flashvars = a.extend({}, g, c.flashvars), a.fn.media.swf(b, c)
    }, a.fn.media.xaml = function(b, c) {
      if (!window.Sys || !window.Sys.Silverlight) {
        if (a.fn.media.xaml.warning) return;
        return a.fn.media.xaml.warning = 1, void alert("You must include the Silverlight.js script.")
      }
      var d = {
          width: c.width,
          height: c.height,
          background: c.bgColor,
          inplaceInstallPrompt: c.silverlight.inplaceInstallPrompt,
          isWindowless: c.silverlight.isWindowless,
          framerate: c.silverlight.framerate,
          version: c.silverlight.version
        },
        e = {
          onError: c.silverlight.onError,
          onLoad: c.silverlight.onLoad
        },
        f = b.id ? ' id="' + b.id + '"' : "",
        g = c.id || "AG" + k++,
        h = c.cls ? ' class="' + c.cls + '"' : "",
        i = a("<div" + f + h + ">");
      return a(b).after(i).remove(), Sys.Silverlight.createObjectEx({
        source: c.src,
        initParams: c.silverlight.initParams,
        userContext: c.silverlight.userContext,
        id: g,
        parentElement: i[0],
        properties: d,
        events: e
      }), c.caption && a("<div>").appendTo(i).html(c.caption), i
    }
  }(jQuery);
  var browserName, browserVersion;
  detectBrowser();
  var deviceName;
  detectDevice(), ! function(a) {
      "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : jQuery)
    }(function(a) {
      var b = function() {
          if (a && a.fn && a.fn.select2 && a.fn.select2.amd) var b = a.fn.select2.amd;
          var b;
          return function() {
            if (!b || !b.requirejs) {
              b ? c = b : b = {};
              var a, c, d;
              ! function(b) {
                function e(a, b) {
                  return u.call(a, b)
                }
  
                function f(a, b) {
                  var c, d, e, f, g, h, i, j, k, l, m, n = b && b.split("/"),
                    o = s.map,
                    p = o && o["*"] || {};
                  if (a && "." === a.charAt(0))
                    if (b) {
                      for (a = a.split("/"), g = a.length - 1, s.nodeIdCompat && w.test(a[g]) && (a[g] = a[g].replace(w, "")), a = n.slice(0, n.length - 1).concat(a), k = 0; k < a.length; k += 1)
                        if (m = a[k], "." === m) a.splice(k, 1), k -= 1;
                        else if (".." === m) {
                        if (1 === k && (".." === a[2] || ".." === a[0])) break;
                        k > 0 && (a.splice(k - 1, 2), k -= 2)
                      }
                      a = a.join("/")
                    } else 0 === a.indexOf("./") && (a = a.substring(2));
                  if ((n || p) && o) {
                    for (c = a.split("/"), k = c.length; k > 0; k -= 1) {
                      if (d = c.slice(0, k).join("/"), n)
                        for (l = n.length; l > 0; l -= 1)
                          if (e = o[n.slice(0, l).join("/")], e && (e = e[d])) {
                            f = e, h = k;
                            break
                          }
                      if (f) break;
                      !i && p && p[d] && (i = p[d], j = k)
                    }!f && i && (f = i, h = j), f && (c.splice(0, h, f), a = c.join("/"))
                  }
                  return a
                }
  
                function g(a, c) {
                  return function() {
                    var d = v.call(arguments, 0);
                    return "string" != typeof d[0] && 1 === d.length && d.push(null), n.apply(b, d.concat([a, c]))
                  }
                }
  
                function h(a) {
                  return function(b) {
                    return f(b, a)
                  }
                }
  
                function i(a) {
                  return function(b) {
                    q[a] = b
                  }
                }
  
                function j(a) {
                  if (e(r, a)) {
                    var c = r[a];
                    delete r[a], t[a] = !0, m.apply(b, c)
                  }
                  if (!e(q, a) && !e(t, a)) throw new Error("No " + a);
                  return q[a]
                }
  
                function k(a) {
                  var b, c = a ? a.indexOf("!") : -1;
                  return c > -1 && (b = a.substring(0, c), a = a.substring(c + 1, a.length)), [b, a]
                }
  
                function l(a) {
                  return function() {
                    return s && s.config && s.config[a] || {}
                  }
                }
                var m, n, o, p, q = {},
                  r = {},
                  s = {},
                  t = {},
                  u = Object.prototype.hasOwnProperty,
                  v = [].slice,
                  w = /\.js$/;
                o = function(a, b) {
                  var c, d = k(a),
                    e = d[0];
                  return a = d[1], e && (e = f(e, b), c = j(e)), e ? a = c && c.normalize ? c.normalize(a, h(b)) : f(a, b) : (a = f(a, b), d = k(a), e = d[0], a = d[1], e && (c = j(e))), {
                    f: e ? e + "!" + a : a,
                    n: a,
                    pr: e,
                    p: c
                  }
                }, p = {
                  require: function(a) {
                    return g(a)
                  },
                  exports: function(a) {
                    var b = q[a];
                    return "undefined" != typeof b ? b : q[a] = {}
                  },
                  module: function(a) {
                    return {
                      id: a,
                      uri: "",
                      exports: q[a],
                      config: l(a)
                    }
                  }
                }, m = function(a, c, d, f) {
                  var h, k, l, m, n, s, u = [],
                    v = typeof d;
                  if (f = f || a, "undefined" === v || "function" === v) {
                    for (c = !c.length && d.length ? ["require", "exports", "module"] : c, n = 0; n < c.length; n += 1)
                      if (m = o(c[n], f), k = m.f, "require" === k) u[n] = p.require(a);
                      else if ("exports" === k) u[n] = p.exports(a), s = !0;
                    else if ("module" === k) h = u[n] = p.module(a);
                    else if (e(q, k) || e(r, k) || e(t, k)) u[n] = j(k);
                    else {
                      if (!m.p) throw new Error(a + " missing " + k);
                      m.p.load(m.n, g(f, !0), i(k), {}), u[n] = q[k]
                    }
                    l = d ? d.apply(q[a], u) : void 0, a && (h && h.exports !== b && h.exports !== q[a] ? q[a] = h.exports : l === b && s || (q[a] = l))
                  } else a && (q[a] = d)
                }, a = c = n = function(a, c, d, e, f) {
                  if ("string" == typeof a) return p[a] ? p[a](c) : j(o(a, c).f);
                  if (!a.splice) {
                    if (s = a, s.deps && n(s.deps, s.callback), !c) return;
                    c.splice ? (a = c, c = d, d = null) : a = b
                  }
                  return c = c || function() {}, "function" == typeof d && (d = e, e = f), e ? m(b, a, c, d) : setTimeout(function() {
                    m(b, a, c, d)
                  }, 4), n
                }, n.config = function(a) {
                  return n(a)
                }, a._defined = q, d = function(a, b, c) {
                  if ("string" != typeof a) throw new Error("See almond README: incorrect module build, no module name");
                  b.splice || (c = b, b = []), e(q, a) || e(r, a) || (r[a] = [a, b, c])
                }, d.amd = {
                  jQuery: !0
                }
              }(), b.requirejs = a, b.require = c, b.define = d
            }
          }(), b.define("almond", function() {}), b.define("jquery", [], function() {
            var b = a || $;
            return null == b && console && console.error && console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."), b
          }), b.define("select2/utils", ["jquery"], function(a) {
            function b(a) {
              var b = a.prototype,
                c = [];
              for (var d in b) {
                var e = b[d];
                "function" == typeof e && "constructor" !== d && c.push(d)
              }
              return c
            }
            var c = {};
            c.Extend = function(a, b) {
              function c() {
                this.constructor = a
              }
              var d = {}.hasOwnProperty;
              for (var e in b) d.call(b, e) && (a[e] = b[e]);
              return c.prototype = b.prototype, a.prototype = new c, a.__super__ = b.prototype, a
            }, c.Decorate = function(a, c) {
              function d() {
                var b = Array.prototype.unshift,
                  d = c.prototype.constructor.length,
                  e = a.prototype.constructor;
                d > 0 && (b.call(arguments, a.prototype.constructor), e = c.prototype.constructor), e.apply(this, arguments)
              }
  
              function e() {
                this.constructor = d
              }
              var f = b(c),
                g = b(a);
              c.displayName = a.displayName, d.prototype = new e;
              for (var h = 0; h < g.length; h++) {
                var i = g[h];
                d.prototype[i] = a.prototype[i]
              }
              for (var j = (function(a) {
                  var b = function() {};
                  a in d.prototype && (b = d.prototype[a]);
                  var e = c.prototype[a];
                  return function() {
                    var a = Array.prototype.unshift;
                    return a.call(arguments, b), e.apply(this, arguments)
                  }
                }), k = 0; k < f.length; k++) {
                var l = f[k];
                d.prototype[l] = j(l)
              }
              return d
            };
            var d = function() {
              this.listeners = {}
            };
            return d.prototype.on = function(a, b) {
              this.listeners = this.listeners || {}, a in this.listeners ? this.listeners[a].push(b) : this.listeners[a] = [b]
            }, d.prototype.trigger = function(a) {
              var b = Array.prototype.slice,
                c = b.call(arguments, 1);
              this.listeners = this.listeners || {}, null == c && (c = []), 0 === c.length && c.push({}), c[0]._type = a, a in this.listeners && this.invoke(this.listeners[a], b.call(arguments, 1)), "*" in this.listeners && this.invoke(this.listeners["*"], arguments)
            }, d.prototype.invoke = function(a, b) {
              for (var c = 0, d = a.length; d > c; c++) a[c].apply(this, b)
            }, c.Observable = d, c.generateChars = function(a) {
              for (var b = "", c = 0; a > c; c++) {
                var d = Math.floor(36 * Math.random());
                b += d.toString(36)
              }
              return b
            }, c.bind = function(a, b) {
              return function() {
                a.apply(b, arguments)
              }
            }, c._convertData = function(a) {
              for (var b in a) {
                var c = b.split("-"),
                  d = a;
                if (1 !== c.length) {
                  for (var e = 0; e < c.length; e++) {
                    var f = c[e];
                    f = f.substring(0, 1).toLowerCase() + f.substring(1), f in d || (d[f] = {}), e == c.length - 1 && (d[f] = a[b]), d = d[f]
                  }
                  delete a[b]
                }
              }
              return a
            }, c.hasScroll = function(b, c) {
              var d = a(c),
                e = c.style.overflowX,
                f = c.style.overflowY;
              return (e !== f || "hidden" !== f && "visible" !== f) && ("scroll" === e || "scroll" === f || (d.innerHeight() < c.scrollHeight || d.innerWidth() < c.scrollWidth))
            }, c.escapeMarkup = function(a) {
              var b = {
                "\\": "&#92;",
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;",
                "/": "&#47;"
              };
              return "string" != typeof a ? a : String(a).replace(/[&<>"'\/\\]/g, function(a) {
                return b[a]
              })
            }, c.appendMany = function(b, c) {
              if ("1.7" === a.fn.jquery.substr(0, 3)) {
                var d = a();
                a.map(c, function(a) {
                  d = d.add(a)
                }), c = d
              }
              b.append(c)
            }, c
          }), b.define("select2/results", ["jquery", "./utils"], function(a, b) {
            function c(a, b, d) {
              this.$element = a, this.data = d, this.options = b, c.__super__.constructor.call(this)
            }
            return b.Extend(c, b.Observable), c.prototype.render = function() {
              var b = a('<ul class="select2-results__options" role="tree"></ul>');
              return this.options.get("multiple") && b.attr("aria-multiselectable", "true"), this.$results = b, b
            }, c.prototype.clear = function() {
              this.$results.empty()
            }, c.prototype.displayMessage = function(b) {
              var c = this.options.get("escapeMarkup");
              this.clear(), this.hideLoading();
              var d = a('<li role="treeitem" aria-live="assertive" class="select2-results__option"></li>'),
                e = this.options.get("translations").get(b.message);
              d.append(c(e(b.args))), d[0].className += " select2-results__message", this.$results.append(d)
            }, c.prototype.hideMessages = function() {
              this.$results.find(".select2-results__message").remove()
            }, c.prototype.append = function(a) {
              this.hideLoading();
              var b = [];
              if (null == a.results || 0 === a.results.length) return void(0 === this.$results.children().length && this.trigger("results:message", {
                message: "noResults"
              }));
              a.results = this.sort(a.results);
              for (var c = 0; c < a.results.length; c++) {
                var d = a.results[c],
                  e = this.option(d);
                b.push(e)
              }
              this.$results.append(b)
            }, c.prototype.position = function(a, b) {
              var c = b.find(".select2-results");
              c.append(a)
            }, c.prototype.sort = function(a) {
              var b = this.options.get("sorter");
              return b(a)
            }, c.prototype.highlightFirstItem = function() {
              var a = this.$results.find(".select2-results__option[aria-selected]"),
                b = a.filter("[aria-selected=true]");
              b.length > 0 ? b.first().trigger("mouseenter") : a.first().trigger("mouseenter"), this.ensureHighlightVisible()
            }, c.prototype.setClasses = function() {
              var b = this;
              this.data.current(function(c) {
                var d = a.map(c, function(a) {
                    return a.id.toString()
                  }),
                  e = b.$results.find(".select2-results__option[aria-selected]");
                e.each(function() {
                  var b = a(this),
                    c = a.data(this, "data"),
                    e = "" + c.id;
                  null != c.element && c.element.selected || null == c.element && a.inArray(e, d) > -1 ? b.attr("aria-selected", "true") : b.attr("aria-selected", "false")
                })
              })
            }, c.prototype.showLoading = function(a) {
              this.hideLoading();
              var b = this.options.get("translations").get("searching"),
                c = {
                  disabled: !0,
                  loading: !0,
                  text: b(a)
                },
                d = this.option(c);
              d.className += " loading-results", this.$results.prepend(d)
            }, c.prototype.hideLoading = function() {
              this.$results.find(".loading-results").remove()
            }, c.prototype.option = function(b) {
              var c = document.createElement("li");
              c.className = "select2-results__option";
              var d = {
                role: "treeitem",
                "aria-selected": "false"
              };
              b.disabled && (delete d["aria-selected"], d["aria-disabled"] = "true"), null == b.id && delete d["aria-selected"], null != b._resultId && (c.id = b._resultId), b.title && (c.title = b.title), b.children && (d.role = "group", d["aria-label"] = b.text, delete d["aria-selected"]);
              for (var e in d) {
                var f = d[e];
                c.setAttribute(e, f)
              }
              if (b.children) {
                var g = a(c),
                  h = document.createElement("strong");
                h.className = "select2-results__group", a(h), this.template(b, h);
                for (var i = [], j = 0; j < b.children.length; j++) {
                  var k = b.children[j],
                    l = this.option(k);
                  i.push(l)
                }
                var m = a("<ul></ul>", {
                  class: "select2-results__options select2-results__options--nested"
                });
                m.append(i), g.append(h), g.append(m)
              } else this.template(b, c);
              return a.data(c, "data", b), c
            }, c.prototype.bind = function(b, c) {
              var d = this,
                e = b.id + "-results";
              this.$results.attr("id", e), b.on("results:all", function(a) {
                d.clear(), d.append(a.data), b.isOpen() && (d.setClasses(), d.highlightFirstItem())
              }), b.on("results:append", function(a) {
                d.append(a.data), b.isOpen() && d.setClasses()
              }), b.on("query", function(a) {
                d.hideMessages(), d.showLoading(a)
              }), b.on("select", function() {
                b.isOpen() && (d.setClasses(), d.highlightFirstItem())
              }), b.on("unselect", function() {
                b.isOpen() && (d.setClasses(), d.highlightFirstItem())
              }), b.on("open", function() {
                d.$results.attr("aria-expanded", "true"), d.$results.attr("aria-hidden", "false"), d.setClasses(), d.ensureHighlightVisible()
              }), b.on("close", function() {
                d.$results.attr("aria-expanded", "false"), d.$results.attr("aria-hidden", "true"), d.$results.removeAttr("aria-activedescendant")
              }), b.on("results:toggle", function() {
                var a = d.getHighlightedResults();
                0 !== a.length && a.trigger("mouseup")
              }), b.on("results:select", function() {
                var a = d.getHighlightedResults();
                if (0 !== a.length) {
                  var b = a.data("data");
                  "true" == a.attr("aria-selected") ? d.trigger("close", {}) : d.trigger("select", {
                    data: b
                  })
                }
              }), b.on("results:previous", function() {
                var a = d.getHighlightedResults(),
                  b = d.$results.find("[aria-selected]"),
                  c = b.index(a);
                if (0 !== c) {
                  var e = c - 1;
                  0 === a.length && (e = 0);
                  var f = b.eq(e);
                  f.trigger("mouseenter");
                  var g = d.$results.offset().top,
                    h = f.offset().top,
                    i = d.$results.scrollTop() + (h - g);
                  0 === e ? d.$results.scrollTop(0) : 0 > h - g && d.$results.scrollTop(i)
                }
              }), b.on("results:next", function() {
                var a = d.getHighlightedResults(),
                  b = d.$results.find("[aria-selected]"),
                  c = b.index(a),
                  e = c + 1;
                if (!(e >= b.length)) {
                  var f = b.eq(e);
                  f.trigger("mouseenter");
                  var g = d.$results.offset().top + d.$results.outerHeight(!1),
                    h = f.offset().top + f.outerHeight(!1),
                    i = d.$results.scrollTop() + h - g;
                  0 === e ? d.$results.scrollTop(0) : h > g && d.$results.scrollTop(i)
                }
              }), b.on("results:focus", function(a) {
                a.element.addClass("select2-results__option--highlighted")
              }), b.on("results:message", function(a) {
                d.displayMessage(a)
              }), a.fn.mousewheel && this.$results.on("mousewheel", function(a) {
                var b = d.$results.scrollTop(),
                  c = d.$results.get(0).scrollHeight - b + a.deltaY,
                  e = a.deltaY > 0 && b - a.deltaY <= 0,
                  f = a.deltaY < 0 && c <= d.$results.height();
                e ? (d.$results.scrollTop(0), a.preventDefault(), a.stopPropagation()) : f && (d.$results.scrollTop(d.$results.get(0).scrollHeight - d.$results.height()), a.preventDefault(), a.stopPropagation())
              }), this.$results.on("mouseup", ".select2-results__option[aria-selected]", function(b) {
                var c = a(this),
                  e = c.data("data");
                return "true" === c.attr("aria-selected") ? void(d.options.get("multiple") ? d.trigger("unselect", {
                  originalEvent: b,
                  data: e
                }) : d.trigger("close", {})) : void d.trigger("select", {
                  originalEvent: b,
                  data: e
                })
              }), this.$results.on("mouseenter", ".select2-results__option[aria-selected]", function(b) {
                var c = a(this).data("data");
                d.getHighlightedResults().removeClass("select2-results__option--highlighted"), d.trigger("results:focus", {
                  data: c,
                  element: a(this)
                })
              })
            }, c.prototype.getHighlightedResults = function() {
              var a = this.$results.find(".select2-results__option--highlighted");
              return a
            }, c.prototype.destroy = function() {
              this.$results.remove()
            }, c.prototype.ensureHighlightVisible = function() {
              var a = this.getHighlightedResults();
              if (0 !== a.length) {
                var b = this.$results.find("[aria-selected]"),
                  c = b.index(a),
                  d = this.$results.offset().top,
                  e = a.offset().top,
                  f = this.$results.scrollTop() + (e - d),
                  g = e - d;
                f -= 2 * a.outerHeight(!1), 2 >= c ? this.$results.scrollTop(0) : (g > this.$results.outerHeight() || 0 > g) && this.$results.scrollTop(f)
              }
            }, c.prototype.template = function(b, c) {
              var d = this.options.get("templateResult"),
                e = this.options.get("escapeMarkup"),
                f = d(b, c);
              null == f ? c.style.display = "none" : "string" == typeof f ? c.innerHTML = e(f) : a(c).append(f)
            }, c
          }), b.define("select2/keys", [], function() {
            var a = {
              BACKSPACE: 8,
              TAB: 9,
              ENTER: 13,
              SHIFT: 16,
              CTRL: 17,
              ALT: 18,
              ESC: 27,
              SPACE: 32,
              PAGE_UP: 33,
              PAGE_DOWN: 34,
              END: 35,
              HOME: 36,
              LEFT: 37,
              UP: 38,
              RIGHT: 39,
              DOWN: 40,
              DELETE: 46
            };
            return a
          }), b.define("select2/selection/base", ["jquery", "../utils", "../keys"], function(a, b, c) {
            function d(a, b) {
              this.$element = a, this.options = b, d.__super__.constructor.call(this)
            }
            return b.Extend(d, b.Observable), d.prototype.render = function() {
              var b = a('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');
              return this._tabindex = 0, null != this.$element.data("old-tabindex") ? this._tabindex = this.$element.data("old-tabindex") : null != this.$element.attr("tabindex") && (this._tabindex = this.$element.attr("tabindex")), b.attr("title", this.$element.attr("title")), b.attr("tabindex", this._tabindex), this.$selection = b, b
            }, d.prototype.bind = function(a, b) {
              var d = this,
                e = (a.id + "-container", a.id + "-results");
              this.container = a, this.$selection.on("focus", function(a) {
                d.trigger("focus", a)
              }), this.$selection.on("blur", function(a) {
                d._handleBlur(a)
              }), this.$selection.on("keydown", function(a) {
                d.trigger("keypress", a), a.which === c.SPACE && a.preventDefault()
              }), a.on("results:focus", function(a) {
                d.$selection.attr("aria-activedescendant", a.data._resultId)
              }), a.on("selection:update", function(a) {
                d.update(a.data)
              }), a.on("open", function() {
                d.$selection.attr("aria-expanded", "true"), d.$selection.attr("aria-owns", e), d._attachCloseHandler(a)
              }), a.on("close", function() {
                d.$selection.attr("aria-expanded", "false"), d.$selection.removeAttr("aria-activedescendant"), d.$selection.removeAttr("aria-owns"), d.$selection.focus(), d._detachCloseHandler(a)
              }), a.on("enable", function() {
                d.$selection.attr("tabindex", d._tabindex)
              }), a.on("disable", function() {
                d.$selection.attr("tabindex", "-1")
              })
            }, d.prototype._handleBlur = function(b) {
              var c = this;
              window.setTimeout(function() {
                document.activeElement == c.$selection[0] || a.contains(c.$selection[0], document.activeElement) || c.trigger("blur", b)
              }, 1)
            }, d.prototype._attachCloseHandler = function(b) {
              a(document.body).on("mousedown.select2." + b.id, function(b) {
                var c = a(b.target),
                  d = c.closest(".select2"),
                  e = a(".select2.select2-container--open");
                e.each(function() {
                  var b = a(this);
                  if (this != d[0]) {
                    var c = b.data("element");
                    c.select2("close")
                  }
                })
              })
            }, d.prototype._detachCloseHandler = function(b) {
              a(document.body).off("mousedown.select2." + b.id)
            }, d.prototype.position = function(a, b) {
              var c = b.find(".selection");
              c.append(a)
            }, d.prototype.destroy = function() {
              this._detachCloseHandler(this.container)
            }, d.prototype.update = function(a) {
              throw new Error("The `update` method must be defined in child classes.")
            }, d
          }), b.define("select2/selection/single", ["jquery", "./base", "../utils", "../keys"], function(a, b, c, d) {
            function e() {
              e.__super__.constructor.apply(this, arguments)
            }
            return c.Extend(e, b), e.prototype.render = function() {
              var a = e.__super__.render.call(this);
              return a.addClass("select2-selection--single"), a.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'), a
            }, e.prototype.bind = function(a, b) {
              var c = this;
              e.__super__.bind.apply(this, arguments);
              var d = a.id + "-container";
              this.$selection.find(".select2-selection__rendered").attr("id", d), this.$selection.attr("aria-labelledby", d), this.$selection.on("mousedown", function(a) {
                1 === a.which && c.trigger("toggle", {
                  originalEvent: a
                })
              }), this.$selection.on("focus", function(a) {}), this.$selection.on("blur", function(a) {}), a.on("focus", function(b) {
                a.isOpen() || c.$selection.focus()
              }), a.on("selection:update", function(a) {
                c.update(a.data)
              })
            }, e.prototype.clear = function() {
              this.$selection.find(".select2-selection__rendered").empty()
            }, e.prototype.display = function(a, b) {
              var c = this.options.get("templateSelection"),
                d = this.options.get("escapeMarkup");
              return d(c(a, b))
            }, e.prototype.selectionContainer = function() {
              return a("<span></span>")
            }, e.prototype.update = function(a) {
              if (0 === a.length) return void this.clear();
              var b = a[0],
                c = this.$selection.find(".select2-selection__rendered"),
                d = this.display(b, c);
              c.empty().append(d), c.prop("title", b.title || b.text)
            }, e
          }), b.define("select2/selection/multiple", ["jquery", "./base", "../utils"], function(a, b, c) {
            function d(a, b) {
              d.__super__.constructor.apply(this, arguments)
            }
            return c.Extend(d, b), d.prototype.render = function() {
              var a = d.__super__.render.call(this);
              return a.addClass("select2-selection--multiple"), a.html('<ul class="select2-selection__rendered"></ul>'), a
            }, d.prototype.bind = function(b, c) {
              var e = this;
              d.__super__.bind.apply(this, arguments), this.$selection.on("click", function(a) {
                e.trigger("toggle", {
                  originalEvent: a
                })
              }), this.$selection.on("click", ".select2-selection__choice__remove", function(b) {
                if (!e.options.get("disabled")) {
                  var c = a(this),
                    d = c.parent(),
                    f = d.data("data");
                  e.trigger("unselect", {
                    originalEvent: b,
                    data: f
                  })
                }
              })
            }, d.prototype.clear = function() {
              this.$selection.find(".select2-selection__rendered").empty()
            }, d.prototype.display = function(a, b) {
              var c = this.options.get("templateSelection"),
                d = this.options.get("escapeMarkup");
              return d(c(a, b))
            }, d.prototype.selectionContainer = function() {
              var b = a('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>');
              return b
            }, d.prototype.update = function(a) {
              if (this.clear(), 0 !== a.length) {
                for (var b = [], d = 0; d < a.length; d++) {
                  var e = a[d],
                    f = this.selectionContainer(),
                    g = this.display(e, f);
                  f.append(g), f.prop("title", e.title || e.text), f.data("data", e), b.push(f)
                }
                var h = this.$selection.find(".select2-selection__rendered");
                c.appendMany(h, b)
              }
            }, d
          }), b.define("select2/selection/placeholder", ["../utils"], function(a) {
            function b(a, b, c) {
              this.placeholder = this.normalizePlaceholder(c.get("placeholder")), a.call(this, b, c)
            }
            return b.prototype.normalizePlaceholder = function(a, b) {
              return "string" == typeof b && (b = {
                id: "",
                text: b
              }), b
            }, b.prototype.createPlaceholder = function(a, b) {
              var c = this.selectionContainer();
              return c.html(this.display(b)), c.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"), c
            }, b.prototype.update = function(a, b) {
              var c = 1 == b.length && b[0].id != this.placeholder.id,
                d = b.length > 1;
              if (d || c) return a.call(this, b);
              this.clear();
              var e = this.createPlaceholder(this.placeholder);
              this.$selection.find(".select2-selection__rendered").append(e)
            }, b
          }), b.define("select2/selection/allowClear", ["jquery", "../keys"], function(a, b) {
            function c() {}
            return c.prototype.bind = function(a, b, c) {
              var d = this;
              a.call(this, b, c), null == this.placeholder && this.options.get("debug") && window.console && console.error && console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."), this.$selection.on("mousedown", ".select2-selection__clear", function(a) {
                d._handleClear(a)
              }), b.on("keypress", function(a) {
                d._handleKeyboardClear(a, b)
              })
            }, c.prototype._handleClear = function(a, b) {
              if (!this.options.get("disabled")) {
                var c = this.$selection.find(".select2-selection__clear");
                if (0 !== c.length) {
                  b.stopPropagation();
                  for (var d = c.data("data"), e = 0; e < d.length; e++) {
                    var f = {
                      data: d[e]
                    };
                    if (this.trigger("unselect", f), f.prevented) return
                  }
                  this.$element.val(this.placeholder.id).trigger("change"), this.trigger("toggle", {})
                }
              }
            }, c.prototype._handleKeyboardClear = function(a, c, d) {
              d.isOpen() || (c.which == b.DELETE || c.which == b.BACKSPACE) && this._handleClear(c)
            }, c.prototype.update = function(b, c) {
              if (b.call(this, c), !(this.$selection.find(".select2-selection__placeholder").length > 0 || 0 === c.length)) {
                var d = a('<span class="select2-selection__clear">&times;</span>');
                d.data("data", c), this.$selection.find(".select2-selection__rendered").prepend(d)
              }
            }, c
          }), b.define("select2/selection/search", ["jquery", "../utils", "../keys"], function(a, b, c) {
            function d(a, b, c) {
              a.call(this, b, c)
            }
            return d.prototype.render = function(b) {
              var c = a('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" aria-autocomplete="list" /></li>');
              this.$searchContainer = c, this.$search = c.find("input");
              var d = b.call(this);
              return this._transferTabIndex(), d
            }, d.prototype.bind = function(a, b, d) {
              var e = this;
              a.call(this, b, d), b.on("open", function() {
                e.$search.trigger("focus")
              }), b.on("close", function() {
                e.$search.val(""), e.$search.removeAttr("aria-activedescendant"), e.$search.trigger("focus")
              }), b.on("enable", function() {
                e.$search.prop("disabled", !1), e._transferTabIndex()
              }), b.on("disable", function() {
                e.$search.prop("disabled", !0)
              }), b.on("focus", function(a) {
                e.$search.trigger("focus")
              }), b.on("results:focus", function(a) {
                e.$search.attr("aria-activedescendant", a.id)
              }), this.$selection.on("focusin", ".select2-search--inline", function(a) {
                e.trigger("focus", a)
              }), this.$selection.on("focusout", ".select2-search--inline", function(a) {
                e._handleBlur(a)
              }), this.$selection.on("keydown", ".select2-search--inline", function(a) {
                a.stopPropagation(), e.trigger("keypress", a), e._keyUpPrevented = a.isDefaultPrevented();
                var b = a.which;
                if (b === c.BACKSPACE && "" === e.$search.val()) {
                  var d = e.$searchContainer.prev(".select2-selection__choice");
                  if (d.length > 0) {
                    var f = d.data("data");
                    e.searchRemoveChoice(f), a.preventDefault()
                  }
                }
              });
              var f = document.documentMode,
                g = f && 11 >= f;
              this.$selection.on("input.searchcheck", ".select2-search--inline", function(a) {
                return g ? void e.$selection.off("input.search input.searchcheck") : void e.$selection.off("keyup.search")
              }), this.$selection.on("keyup.search input.search", ".select2-search--inline", function(a) {
                if (g && "input" === a.type) return void e.$selection.off("input.search input.searchcheck");
                var b = a.which;
                b != c.SHIFT && b != c.CTRL && b != c.ALT && b != c.TAB && e.handleSearch(a)
              })
            }, d.prototype._transferTabIndex = function(a) {
              this.$search.attr("tabindex", this.$selection.attr("tabindex")), this.$selection.attr("tabindex", "-1")
            }, d.prototype.createPlaceholder = function(a, b) {
              this.$search.attr("placeholder", b.text)
            }, d.prototype.update = function(a, b) {
              var c = this.$search[0] == document.activeElement;
              this.$search.attr("placeholder", ""), a.call(this, b), this.$selection.find(".select2-selection__rendered").append(this.$searchContainer), this.resizeSearch(), c && this.$search.focus()
            }, d.prototype.handleSearch = function() {
              if (this.resizeSearch(), !this._keyUpPrevented) {
                var a = this.$search.val();
                this.trigger("query", {
                  term: a
                })
              }
              this._keyUpPrevented = !1
            }, d.prototype.searchRemoveChoice = function(a, b) {
              this.trigger("unselect", {
                data: b
              }), this.$search.val(b.text), this.handleSearch()
            }, d.prototype.resizeSearch = function() {
              this.$search.css("width", "25px");
              var a = "";
              if ("" !== this.$search.attr("placeholder")) a = this.$selection.find(".select2-selection__rendered").innerWidth();
              else {
                var b = this.$search.val().length + 1;
                a = .75 * b + "em"
              }
              this.$search.css("width", a)
            }, d
          }), b.define("select2/selection/eventRelay", ["jquery"], function(a) {
            function b() {}
            return b.prototype.bind = function(b, c, d) {
              var e = this,
                f = ["open", "opening", "close", "closing", "select", "selecting", "unselect", "unselecting"],
                g = ["opening", "closing", "selecting", "unselecting"];
              b.call(this, c, d), c.on("*", function(b, c) {
                if (-1 !== a.inArray(b, f)) {
                  c = c || {};
                  var d = a.Event("select2:" + b, {
                    params: c
                  });
                  e.$element.trigger(d), -1 !== a.inArray(b, g) && (c.prevented = d.isDefaultPrevented())
                }
              })
            }, b
          }), b.define("select2/translation", ["jquery", "require"], function(a, b) {
            function c(a) {
              this.dict = a || {}
            }
            return c.prototype.all = function() {
              return this.dict
            }, c.prototype.get = function(a) {
              return this.dict[a]
            }, c.prototype.extend = function(b) {
              this.dict = a.extend({}, b.all(), this.dict)
            }, c._cache = {}, c.loadPath = function(a) {
              if (!(a in c._cache)) {
                var d = b(a);
                c._cache[a] = d
              }
              return new c(c._cache[a])
            }, c
          }), b.define("select2/diacritics", [], function() {
            var a = {
              "Ⓐ": "A",
              "Ａ": "A",
              "À": "A",
              "Á": "A",
              "Â": "A",
              "Ầ": "A",
              "Ấ": "A",
              "Ẫ": "A",
              "Ẩ": "A",
              "Ã": "A",
              "Ā": "A",
              "Ă": "A",
              "Ằ": "A",
              "Ắ": "A",
              "Ẵ": "A",
              "Ẳ": "A",
              "Ȧ": "A",
              "Ǡ": "A",
              "Ä": "A",
              "Ǟ": "A",
              "Ả": "A",
              "Å": "A",
              "Ǻ": "A",
              "Ǎ": "A",
              "Ȁ": "A",
              "Ȃ": "A",
              "Ạ": "A",
              "Ậ": "A",
              "Ặ": "A",
              "Ḁ": "A",
              "Ą": "A",
              "Ⱥ": "A",
              "Ɐ": "A",
              "Ꜳ": "AA",
              "Æ": "AE",
              "Ǽ": "AE",
              "Ǣ": "AE",
              "Ꜵ": "AO",
              "Ꜷ": "AU",
              "Ꜹ": "AV",
              "Ꜻ": "AV",
              "Ꜽ": "AY",
              "Ⓑ": "B",
              "Ｂ": "B",
              "Ḃ": "B",
              "Ḅ": "B",
              "Ḇ": "B",
              "Ƀ": "B",
              "Ƃ": "B",
              "Ɓ": "B",
              "Ⓒ": "C",
              "Ｃ": "C",
              "Ć": "C",
              "Ĉ": "C",
              "Ċ": "C",
              "Č": "C",
              "Ç": "C",
              "Ḉ": "C",
              "Ƈ": "C",
              "Ȼ": "C",
              "Ꜿ": "C",
              "Ⓓ": "D",
              "Ｄ": "D",
              "Ḋ": "D",
              "Ď": "D",
              "Ḍ": "D",
              "Ḑ": "D",
              "Ḓ": "D",
              "Ḏ": "D",
              "Đ": "D",
              "Ƌ": "D",
              "Ɗ": "D",
              "Ɖ": "D",
              "Ꝺ": "D",
              "Ǳ": "DZ",
              "Ǆ": "DZ",
              "ǲ": "Dz",
              "ǅ": "Dz",
              "Ⓔ": "E",
              "Ｅ": "E",
              "È": "E",
              "É": "E",
              "Ê": "E",
              "Ề": "E",
              "Ế": "E",
              "Ễ": "E",
              "Ể": "E",
              "Ẽ": "E",
              "Ē": "E",
              "Ḕ": "E",
              "Ḗ": "E",
              "Ĕ": "E",
              "Ė": "E",
              "Ë": "E",
              "Ẻ": "E",
              "Ě": "E",
              "Ȅ": "E",
              "Ȇ": "E",
              "Ẹ": "E",
              "Ệ": "E",
              "Ȩ": "E",
              "Ḝ": "E",
              "Ę": "E",
              "Ḙ": "E",
              "Ḛ": "E",
              "Ɛ": "E",
              "Ǝ": "E",
              "Ⓕ": "F",
              "Ｆ": "F",
              "Ḟ": "F",
              "Ƒ": "F",
              "Ꝼ": "F",
              "Ⓖ": "G",
              "Ｇ": "G",
              "Ǵ": "G",
              "Ĝ": "G",
              "Ḡ": "G",
              "Ğ": "G",
              "Ġ": "G",
              "Ǧ": "G",
              "Ģ": "G",
              "Ǥ": "G",
              "Ɠ": "G",
              "Ꞡ": "G",
              "Ᵹ": "G",
              "Ꝿ": "G",
              "Ⓗ": "H",
              "Ｈ": "H",
              "Ĥ": "H",
              "Ḣ": "H",
              "Ḧ": "H",
              "Ȟ": "H",
              "Ḥ": "H",
              "Ḩ": "H",
              "Ḫ": "H",
              "Ħ": "H",
              "Ⱨ": "H",
              "Ⱶ": "H",
              "Ɥ": "H",
              "Ⓘ": "I",
              "Ｉ": "I",
              "Ì": "I",
              "Í": "I",
              "Î": "I",
              "Ĩ": "I",
              "Ī": "I",
              "Ĭ": "I",
              "İ": "I",
              "Ï": "I",
              "Ḯ": "I",
              "Ỉ": "I",
              "Ǐ": "I",
              "Ȉ": "I",
              "Ȋ": "I",
              "Ị": "I",
              "Į": "I",
              "Ḭ": "I",
              "Ɨ": "I",
              "Ⓙ": "J",
              "Ｊ": "J",
              "Ĵ": "J",
              "Ɉ": "J",
              "Ⓚ": "K",
              "Ｋ": "K",
              "Ḱ": "K",
              "Ǩ": "K",
              "Ḳ": "K",
              "Ķ": "K",
              "Ḵ": "K",
              "Ƙ": "K",
              "Ⱪ": "K",
              "Ꝁ": "K",
              "Ꝃ": "K",
              "Ꝅ": "K",
              "Ꞣ": "K",
              "Ⓛ": "L",
              "Ｌ": "L",
              "Ŀ": "L",
              "Ĺ": "L",
              "Ľ": "L",
              "Ḷ": "L",
              "Ḹ": "L",
              "Ļ": "L",
              "Ḽ": "L",
              "Ḻ": "L",
              "Ł": "L",
              "Ƚ": "L",
              "Ɫ": "L",
              "Ⱡ": "L",
              "Ꝉ": "L",
              "Ꝇ": "L",
              "Ꞁ": "L",
              "Ǉ": "LJ",
              "ǈ": "Lj",
              "Ⓜ": "M",
              "Ｍ": "M",
              "Ḿ": "M",
              "Ṁ": "M",
              "Ṃ": "M",
              "Ɱ": "M",
              "Ɯ": "M",
              "Ⓝ": "N",
              "Ｎ": "N",
              "Ǹ": "N",
              "Ń": "N",
              "Ñ": "N",
              "Ṅ": "N",
              "Ň": "N",
              "Ṇ": "N",
              "Ņ": "N",
              "Ṋ": "N",
              "Ṉ": "N",
              "Ƞ": "N",
              "Ɲ": "N",
              "Ꞑ": "N",
              "Ꞥ": "N",
              "Ǌ": "NJ",
              "ǋ": "Nj",
              "Ⓞ": "O",
              "Ｏ": "O",
              "Ò": "O",
              "Ó": "O",
              "Ô": "O",
              "Ồ": "O",
              "Ố": "O",
              "Ỗ": "O",
              "Ổ": "O",
              "Õ": "O",
              "Ṍ": "O",
              "Ȭ": "O",
              "Ṏ": "O",
              "Ō": "O",
              "Ṑ": "O",
              "Ṓ": "O",
              "Ŏ": "O",
              "Ȯ": "O",
              "Ȱ": "O",
              "Ö": "O",
              "Ȫ": "O",
              "Ỏ": "O",
              "Ő": "O",
              "Ǒ": "O",
              "Ȍ": "O",
              "Ȏ": "O",
              "Ơ": "O",
              "Ờ": "O",
              "Ớ": "O",
              "Ỡ": "O",
              "Ở": "O",
              "Ợ": "O",
              "Ọ": "O",
              "Ộ": "O",
              "Ǫ": "O",
              "Ǭ": "O",
              "Ø": "O",
              "Ǿ": "O",
              "Ɔ": "O",
              "Ɵ": "O",
              "Ꝋ": "O",
              "Ꝍ": "O",
              "Ƣ": "OI",
              "Ꝏ": "OO",
              "Ȣ": "OU",
              "Ⓟ": "P",
              "Ｐ": "P",
              "Ṕ": "P",
              "Ṗ": "P",
              "Ƥ": "P",
              "Ᵽ": "P",
              "Ꝑ": "P",
              "Ꝓ": "P",
              "Ꝕ": "P",
              "Ⓠ": "Q",
              "Ｑ": "Q",
              "Ꝗ": "Q",
              "Ꝙ": "Q",
              "Ɋ": "Q",
              "Ⓡ": "R",
              "Ｒ": "R",
              "Ŕ": "R",
              "Ṙ": "R",
              "Ř": "R",
              "Ȑ": "R",
              "Ȓ": "R",
              "Ṛ": "R",
              "Ṝ": "R",
              "Ŗ": "R",
              "Ṟ": "R",
              "Ɍ": "R",
              "Ɽ": "R",
              "Ꝛ": "R",
              "Ꞧ": "R",
              "Ꞃ": "R",
              "Ⓢ": "S",
              "Ｓ": "S",
              "ẞ": "S",
              "Ś": "S",
              "Ṥ": "S",
              "Ŝ": "S",
              "Ṡ": "S",
              "Š": "S",
              "Ṧ": "S",
              "Ṣ": "S",
              "Ṩ": "S",
              "Ș": "S",
              "Ş": "S",
              "Ȿ": "S",
              "Ꞩ": "S",
              "Ꞅ": "S",
              "Ⓣ": "T",
              "Ｔ": "T",
              "Ṫ": "T",
              "Ť": "T",
              "Ṭ": "T",
              "Ț": "T",
              "Ţ": "T",
              "Ṱ": "T",
              "Ṯ": "T",
              "Ŧ": "T",
              "Ƭ": "T",
              "Ʈ": "T",
              "Ⱦ": "T",
              "Ꞇ": "T",
              "Ꜩ": "TZ",
              "Ⓤ": "U",
              "Ｕ": "U",
              "Ù": "U",
              "Ú": "U",
              "Û": "U",
              "Ũ": "U",
              "Ṹ": "U",
              "Ū": "U",
              "Ṻ": "U",
              "Ŭ": "U",
              "Ü": "U",
              "Ǜ": "U",
              "Ǘ": "U",
              "Ǖ": "U",
              "Ǚ": "U",
              "Ủ": "U",
              "Ů": "U",
              "Ű": "U",
              "Ǔ": "U",
              "Ȕ": "U",
              "Ȗ": "U",
              "Ư": "U",
              "Ừ": "U",
              "Ứ": "U",
              "Ữ": "U",
              "Ử": "U",
              "Ự": "U",
              "Ụ": "U",
              "Ṳ": "U",
              "Ų": "U",
              "Ṷ": "U",
              "Ṵ": "U",
              "Ʉ": "U",
              "Ⓥ": "V",
              "Ｖ": "V",
              "Ṽ": "V",
              "Ṿ": "V",
              "Ʋ": "V",
              "Ꝟ": "V",
              "Ʌ": "V",
              "Ꝡ": "VY",
              "Ⓦ": "W",
              "Ｗ": "W",
              "Ẁ": "W",
              "Ẃ": "W",
              "Ŵ": "W",
              "Ẇ": "W",
              "Ẅ": "W",
              "Ẉ": "W",
              "Ⱳ": "W",
              "Ⓧ": "X",
              "Ｘ": "X",
              "Ẋ": "X",
              "Ẍ": "X",
              "Ⓨ": "Y",
              "Ｙ": "Y",
              "Ỳ": "Y",
              "Ý": "Y",
              "Ŷ": "Y",
              "Ỹ": "Y",
              "Ȳ": "Y",
              "Ẏ": "Y",
              "Ÿ": "Y",
              "Ỷ": "Y",
              "Ỵ": "Y",
              "Ƴ": "Y",
              "Ɏ": "Y",
              "Ỿ": "Y",
              "Ⓩ": "Z",
              "Ｚ": "Z",
              "Ź": "Z",
              "Ẑ": "Z",
              "Ż": "Z",
              "Ž": "Z",
              "Ẓ": "Z",
              "Ẕ": "Z",
              "Ƶ": "Z",
              "Ȥ": "Z",
              "Ɀ": "Z",
              "Ⱬ": "Z",
              "Ꝣ": "Z",
              "ⓐ": "a",
              "ａ": "a",
              "ẚ": "a",
              "à": "a",
              "á": "a",
              "â": "a",
              "ầ": "a",
              "ấ": "a",
              "ẫ": "a",
              "ẩ": "a",
              "ã": "a",
              "ā": "a",
              "ă": "a",
              "ằ": "a",
              "ắ": "a",
              "ẵ": "a",
              "ẳ": "a",
              "ȧ": "a",
              "ǡ": "a",
              "ä": "a",
              "ǟ": "a",
              "ả": "a",
              "å": "a",
              "ǻ": "a",
              "ǎ": "a",
              "ȁ": "a",
              "ȃ": "a",
              "ạ": "a",
              "ậ": "a",
              "ặ": "a",
              "ḁ": "a",
              "ą": "a",
              "ⱥ": "a",
              "ɐ": "a",
              "ꜳ": "aa",
              "æ": "ae",
              "ǽ": "ae",
              "ǣ": "ae",
              "ꜵ": "ao",
              "ꜷ": "au",
              "ꜹ": "av",
              "ꜻ": "av",
              "ꜽ": "ay",
              "ⓑ": "b",
              "ｂ": "b",
              "ḃ": "b",
              "ḅ": "b",
              "ḇ": "b",
              "ƀ": "b",
              "ƃ": "b",
              "ɓ": "b",
              "ⓒ": "c",
              "ｃ": "c",
              "ć": "c",
              "ĉ": "c",
              "ċ": "c",
              "č": "c",
              "ç": "c",
              "ḉ": "c",
              "ƈ": "c",
              "ȼ": "c",
              "ꜿ": "c",
              "ↄ": "c",
              "ⓓ": "d",
              "ｄ": "d",
              "ḋ": "d",
              "ď": "d",
              "ḍ": "d",
              "ḑ": "d",
              "ḓ": "d",
              "ḏ": "d",
              "đ": "d",
              "ƌ": "d",
              "ɖ": "d",
              "ɗ": "d",
              "ꝺ": "d",
              "ǳ": "dz",
              "ǆ": "dz",
              "ⓔ": "e",
              "ｅ": "e",
              "è": "e",
              "é": "e",
              "ê": "e",
              "ề": "e",
              "ế": "e",
              "ễ": "e",
              "ể": "e",
              "ẽ": "e",
              "ē": "e",
              "ḕ": "e",
              "ḗ": "e",
              "ĕ": "e",
              "ė": "e",
              "ë": "e",
              "ẻ": "e",
              "ě": "e",
              "ȅ": "e",
              "ȇ": "e",
              "ẹ": "e",
              "ệ": "e",
              "ȩ": "e",
              "ḝ": "e",
              "ę": "e",
              "ḙ": "e",
              "ḛ": "e",
              "ɇ": "e",
              "ɛ": "e",
              "ǝ": "e",
              "ⓕ": "f",
              "ｆ": "f",
              "ḟ": "f",
              "ƒ": "f",
              "ꝼ": "f",
              "ⓖ": "g",
              "ｇ": "g",
              "ǵ": "g",
              "ĝ": "g",
              "ḡ": "g",
              "ğ": "g",
              "ġ": "g",
              "ǧ": "g",
              "ģ": "g",
              "ǥ": "g",
              "ɠ": "g",
              "ꞡ": "g",
              "ᵹ": "g",
              "ꝿ": "g",
              "ⓗ": "h",
              "ｈ": "h",
              "ĥ": "h",
              "ḣ": "h",
              "ḧ": "h",
              "ȟ": "h",
              "ḥ": "h",
              "ḩ": "h",
              "ḫ": "h",
              "ẖ": "h",
              "ħ": "h",
              "ⱨ": "h",
              "ⱶ": "h",
              "ɥ": "h",
              "ƕ": "hv",
              "ⓘ": "i",
              "ｉ": "i",
              "ì": "i",
              "í": "i",
              "î": "i",
              "ĩ": "i",
              "ī": "i",
              "ĭ": "i",
              "ï": "i",
              "ḯ": "i",
              "ỉ": "i",
              "ǐ": "i",
              "ȉ": "i",
              "ȋ": "i",
              "ị": "i",
              "į": "i",
              "ḭ": "i",
              "ɨ": "i",
              "ı": "i",
              "ⓙ": "j",
              "ｊ": "j",
              "ĵ": "j",
              "ǰ": "j",
              "ɉ": "j",
              "ⓚ": "k",
              "ｋ": "k",
              "ḱ": "k",
              "ǩ": "k",
              "ḳ": "k",
              "ķ": "k",
              "ḵ": "k",
              "ƙ": "k",
              "ⱪ": "k",
              "ꝁ": "k",
              "ꝃ": "k",
              "ꝅ": "k",
              "ꞣ": "k",
              "ⓛ": "l",
              "ｌ": "l",
              "ŀ": "l",
              "ĺ": "l",
              "ľ": "l",
              "ḷ": "l",
              "ḹ": "l",
              "ļ": "l",
              "ḽ": "l",
              "ḻ": "l",
              "ſ": "l",
              "ł": "l",
              "ƚ": "l",
              "ɫ": "l",
              "ⱡ": "l",
              "ꝉ": "l",
              "ꞁ": "l",
              "ꝇ": "l",
              "ǉ": "lj",
              "ⓜ": "m",
              "ｍ": "m",
              "ḿ": "m",
              "ṁ": "m",
              "ṃ": "m",
              "ɱ": "m",
              "ɯ": "m",
              "ⓝ": "n",
              "ｎ": "n",
              "ǹ": "n",
              "ń": "n",
              "ñ": "n",
              "ṅ": "n",
              "ň": "n",
              "ṇ": "n",
              "ņ": "n",
              "ṋ": "n",
              "ṉ": "n",
              "ƞ": "n",
              "ɲ": "n",
              "ŉ": "n",
              "ꞑ": "n",
              "ꞥ": "n",
              "ǌ": "nj",
              "ⓞ": "o",
              "ｏ": "o",
              "ò": "o",
              "ó": "o",
              "ô": "o",
              "ồ": "o",
              "ố": "o",
              "ỗ": "o",
              "ổ": "o",
              "õ": "o",
              "ṍ": "o",
              "ȭ": "o",
              "ṏ": "o",
              "ō": "o",
              "ṑ": "o",
              "ṓ": "o",
              "ŏ": "o",
              "ȯ": "o",
              "ȱ": "o",
              "ö": "o",
              "ȫ": "o",
              "ỏ": "o",
              "ő": "o",
              "ǒ": "o",
              "ȍ": "o",
              "ȏ": "o",
              "ơ": "o",
              "ờ": "o",
              "ớ": "o",
              "ỡ": "o",
              "ở": "o",
              "ợ": "o",
              "ọ": "o",
              "ộ": "o",
              "ǫ": "o",
              "ǭ": "o",
              "ø": "o",
              "ǿ": "o",
              "ɔ": "o",
              "ꝋ": "o",
              "ꝍ": "o",
              "ɵ": "o",
              "ƣ": "oi",
              "ȣ": "ou",
              "ꝏ": "oo",
              "ⓟ": "p",
              "ｐ": "p",
              "ṕ": "p",
              "ṗ": "p",
              "ƥ": "p",
              "ᵽ": "p",
              "ꝑ": "p",
              "ꝓ": "p",
              "ꝕ": "p",
              "ⓠ": "q",
              "ｑ": "q",
              "ɋ": "q",
              "ꝗ": "q",
              "ꝙ": "q",
              "ⓡ": "r",
              "ｒ": "r",
              "ŕ": "r",
              "ṙ": "r",
              "ř": "r",
              "ȑ": "r",
              "ȓ": "r",
              "ṛ": "r",
              "ṝ": "r",
              "ŗ": "r",
              "ṟ": "r",
              "ɍ": "r",
              "ɽ": "r",
              "ꝛ": "r",
              "ꞧ": "r",
              "ꞃ": "r",
              "ⓢ": "s",
              "ｓ": "s",
              "ß": "s",
              "ś": "s",
              "ṥ": "s",
              "ŝ": "s",
              "ṡ": "s",
              "š": "s",
              "ṧ": "s",
              "ṣ": "s",
              "ṩ": "s",
              "ș": "s",
              "ş": "s",
              "ȿ": "s",
              "ꞩ": "s",
              "ꞅ": "s",
              "ẛ": "s",
              "ⓣ": "t",
              "ｔ": "t",
              "ṫ": "t",
              "ẗ": "t",
              "ť": "t",
              "ṭ": "t",
              "ț": "t",
              "ţ": "t",
              "ṱ": "t",
              "ṯ": "t",
              "ŧ": "t",
              "ƭ": "t",
              "ʈ": "t",
              "ⱦ": "t",
              "ꞇ": "t",
              "ꜩ": "tz",
              "ⓤ": "u",
              "ｕ": "u",
              "ù": "u",
              "ú": "u",
              "û": "u",
              "ũ": "u",
              "ṹ": "u",
              "ū": "u",
              "ṻ": "u",
              "ŭ": "u",
              "ü": "u",
              "ǜ": "u",
              "ǘ": "u",
              "ǖ": "u",
              "ǚ": "u",
              "ủ": "u",
              "ů": "u",
              "ű": "u",
              "ǔ": "u",
              "ȕ": "u",
              "ȗ": "u",
              "ư": "u",
              "ừ": "u",
              "ứ": "u",
              "ữ": "u",
              "ử": "u",
              "ự": "u",
              "ụ": "u",
              "ṳ": "u",
              "ų": "u",
              "ṷ": "u",
              "ṵ": "u",
              "ʉ": "u",
              "ⓥ": "v",
              "ｖ": "v",
              "ṽ": "v",
              "ṿ": "v",
              "ʋ": "v",
              "ꝟ": "v",
              "ʌ": "v",
              "ꝡ": "vy",
              "ⓦ": "w",
              "ｗ": "w",
              "ẁ": "w",
              "ẃ": "w",
              "ŵ": "w",
              "ẇ": "w",
              "ẅ": "w",
              "ẘ": "w",
              "ẉ": "w",
              "ⱳ": "w",
              "ⓧ": "x",
              "ｘ": "x",
              "ẋ": "x",
              "ẍ": "x",
              "ⓨ": "y",
              "ｙ": "y",
              "ỳ": "y",
              "ý": "y",
              "ŷ": "y",
              "ỹ": "y",
              "ȳ": "y",
              "ẏ": "y",
              "ÿ": "y",
              "ỷ": "y",
              "ẙ": "y",
              "ỵ": "y",
              "ƴ": "y",
              "ɏ": "y",
              "ỿ": "y",
              "ⓩ": "z",
              "ｚ": "z",
              "ź": "z",
              "ẑ": "z",
              "ż": "z",
              "ž": "z",
              "ẓ": "z",
              "ẕ": "z",
              "ƶ": "z",
              "ȥ": "z",
              "ɀ": "z",
              "ⱬ": "z",
              "ꝣ": "z",
              "Ά": "Α",
              "Έ": "Ε",
              "Ή": "Η",
              "Ί": "Ι",
              "Ϊ": "Ι",
              "Ό": "Ο",
              "Ύ": "Υ",
              "Ϋ": "Υ",
              "Ώ": "Ω",
              "ά": "α",
              "έ": "ε",
              "ή": "η",
              "ί": "ι",
              "ϊ": "ι",
              "ΐ": "ι",
              "ό": "ο",
              "ύ": "υ",
              "ϋ": "υ",
              "ΰ": "υ",
              "ω": "ω",
              "ς": "σ"
            };
            return a
          }), b.define("select2/data/base", ["../utils"], function(a) {
            function b(a, c) {
              b.__super__.constructor.call(this)
            }
            return a.Extend(b, a.Observable), b.prototype.current = function(a) {
              throw new Error("The `current` method must be defined in child classes.")
            }, b.prototype.query = function(a, b) {
              throw new Error("The `query` method must be defined in child classes.")
            }, b.prototype.bind = function(a, b) {}, b.prototype.destroy = function() {}, b.prototype.generateResultId = function(b, c) {
              var d = b.id + "-result-";
              return d += a.generateChars(4), d += null != c.id ? "-" + c.id.toString() : "-" + a.generateChars(4)
            }, b
          }), b.define("select2/data/select", ["./base", "../utils", "jquery"], function(a, b, c) {
            function d(a, b) {
              this.$element = a, this.options = b, d.__super__.constructor.call(this)
            }
            return b.Extend(d, a), d.prototype.current = function(a) {
              var b = [],
                d = this;
              this.$element.find(":selected").each(function() {
                var a = c(this),
                  e = d.item(a);
                b.push(e)
              }), a(b)
            }, d.prototype.select = function(a) {
              var b = this;
              if (a.selected = !0, c(a.element).is("option")) return a.element.selected = !0, void this.$element.trigger("change");
              if (this.$element.prop("multiple")) this.current(function(d) {
                var e = [];
                a = [a], a.push.apply(a, d);
                for (var f = 0; f < a.length; f++) {
                  var g = a[f].id; - 1 === c.inArray(g, e) && e.push(g)
                }
                b.$element.val(e), b.$element.trigger("change")
              });
              else {
                var d = a.id;
                this.$element.val(d), this.$element.trigger("change")
              }
            }, d.prototype.unselect = function(a) {
              var b = this;
              if (this.$element.prop("multiple")) return a.selected = !1, c(a.element).is("option") ? (a.element.selected = !1, void this.$element.trigger("change")) : void this.current(function(d) {
                for (var e = [], f = 0; f < d.length; f++) {
                  var g = d[f].id;
                  g !== a.id && -1 === c.inArray(g, e) && e.push(g)
                }
                b.$element.val(e), b.$element.trigger("change")
              })
            }, d.prototype.bind = function(a, b) {
              var c = this;
              this.container = a, a.on("select", function(a) {
                c.select(a.data)
              }), a.on("unselect", function(a) {
                c.unselect(a.data)
              })
            }, d.prototype.destroy = function() {
              this.$element.find("*").each(function() {
                c.removeData(this, "data")
              })
            }, d.prototype.query = function(a, b) {
              var d = [],
                e = this,
                f = this.$element.children();
              f.each(function() {
                var b = c(this);
                if (b.is("option") || b.is("optgroup")) {
                  var f = e.item(b),
                    g = e.matches(a, f);
                  null !== g && d.push(g)
                }
              }), b({
                results: d
              })
            }, d.prototype.addOptions = function(a) {
              b.appendMany(this.$element, a)
            }, d.prototype.option = function(a) {
              var b;
              a.children ? (b = document.createElement("optgroup"), b.label = a.text) : (b = document.createElement("option"), void 0 !== b.textContent ? b.textContent = a.text : b.innerText = a.text), a.id && (b.value = a.id), a.disabled && (b.disabled = !0), a.selected && (b.selected = !0), a.title && (b.title = a.title);
              var d = c(b),
                e = this._normalizeItem(a);
              return e.element = b, c.data(b, "data", e), d
            }, d.prototype.item = function(a) {
              var b = {};
              if (b = c.data(a[0], "data"), null != b) return b;
              if (a.is("option")) b = {
                id: a.val(),
                text: a.text(),
                disabled: a.prop("disabled"),
                selected: a.prop("selected"),
                title: a.prop("title")
              };
              else if (a.is("optgroup")) {
                b = {
                  text: a.prop("label"),
                  children: [],
                  title: a.prop("title")
                };
                for (var d = a.children("option"), e = [], f = 0; f < d.length; f++) {
                  var g = c(d[f]),
                    h = this.item(g);
                  e.push(h)
                }
                b.children = e
              }
              return b = this._normalizeItem(b), b.element = a[0], c.data(a[0], "data", b), b
            }, d.prototype._normalizeItem = function(a) {
              c.isPlainObject(a) || (a = {
                id: a,
                text: a
              }), a = c.extend({}, {
                text: ""
              }, a);
              var b = {
                selected: !1,
                disabled: !1
              };
              return null != a.id && (a.id = a.id.toString()), null != a.text && (a.text = a.text.toString()), null == a._resultId && a.id && null != this.container && (a._resultId = this.generateResultId(this.container, a)), c.extend({}, b, a)
            }, d.prototype.matches = function(a, b) {
              var c = this.options.get("matcher");
              return c(a, b)
            }, d
          }), b.define("select2/data/array", ["./select", "../utils", "jquery"], function(a, b, c) {
            function d(a, b) {
              var c = b.get("data") || [];
              d.__super__.constructor.call(this, a, b), this.addOptions(this.convertToOptions(c))
            }
            return b.Extend(d, a), d.prototype.select = function(a) {
              var b = this.$element.find("option").filter(function(b, c) {
                return c.value == a.id.toString()
              });
              0 === b.length && (b = this.option(a), this.addOptions(b)), d.__super__.select.call(this, a)
            }, d.prototype.convertToOptions = function(a) {
              function d(a) {
                return function() {
                  return c(this).val() == a.id
                }
              }
              for (var e = this, f = this.$element.find("option"), g = f.map(function() {
                  return e.item(c(this)).id
                }).get(), h = [], i = 0; i < a.length; i++) {
                var j = this._normalizeItem(a[i]);
                if (c.inArray(j.id, g) >= 0) {
                  var k = f.filter(d(j)),
                    l = this.item(k),
                    m = c.extend(!0, {}, j, l),
                    n = this.option(m);
                  k.replaceWith(n)
                } else {
                  var o = this.option(j);
                  if (j.children) {
                    var p = this.convertToOptions(j.children);
                    b.appendMany(o, p)
                  }
                  h.push(o)
                }
              }
              return h
            }, d
          }), b.define("select2/data/ajax", ["./array", "../utils", "jquery"], function(a, b, c) {
            function d(a, b) {
              this.ajaxOptions = this._applyDefaults(b.get("ajax")), null != this.ajaxOptions.processResults && (this.processResults = this.ajaxOptions.processResults), d.__super__.constructor.call(this, a, b)
            }
            return b.Extend(d, a), d.prototype._applyDefaults = function(a) {
              var b = {
                data: function(a) {
                  return c.extend({}, a, {
                    q: a.term
                  })
                },
                transport: function(a, b, d) {
                  var e = c.ajax(a);
                  return e.then(b), e.fail(d), e
                }
              };
              return c.extend({}, b, a, !0)
            }, d.prototype.processResults = function(a) {
              return a
            }, d.prototype.query = function(a, b) {
              function d() {
                var d = f.transport(f, function(d) {
                  var f = e.processResults(d, a);
                  e.options.get("debug") && window.console && console.error && (f && f.results && c.isArray(f.results) || console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")), b(f)
                }, function() {
                  d.status && "0" === d.status || e.trigger("results:message", {
                    message: "errorLoading"
                  })
                });
                e._request = d
              }
              var e = this;
              null != this._request && (c.isFunction(this._request.abort) && this._request.abort(), this._request = null);
              var f = c.extend({
                type: "GET"
              }, this.ajaxOptions);
              "function" == typeof f.url && (f.url = f.url.call(this.$element, a)), "function" == typeof f.data && (f.data = f.data.call(this.$element, a)), this.ajaxOptions.delay && null != a.term ? (this._queryTimeout && window.clearTimeout(this._queryTimeout), this._queryTimeout = window.setTimeout(d, this.ajaxOptions.delay)) : d()
            }, d
          }), b.define("select2/data/tags", ["jquery"], function(a) {
            function b(b, c, d) {
              var e = d.get("tags"),
                f = d.get("createTag");
              void 0 !== f && (this.createTag = f);
              var g = d.get("insertTag");
              if (void 0 !== g && (this.insertTag = g), b.call(this, c, d), a.isArray(e))
                for (var h = 0; h < e.length; h++) {
                  var i = e[h],
                    j = this._normalizeItem(i),
                    k = this.option(j);
                  this.$element.append(k)
                }
            }
            return b.prototype.query = function(a, b, c) {
              function d(a, f) {
                for (var g = a.results, h = 0; h < g.length; h++) {
                  var i = g[h],
                    j = null != i.children && !d({
                      results: i.children
                    }, !0),
                    k = i.text === b.term;
                  if (k || j) return !f && (a.data = g, void c(a))
                }
                if (f) return !0;
                var l = e.createTag(b);
                if (null != l) {
                  var m = e.option(l);
                  m.attr("data-select2-tag", !0), e.addOptions([m]), e.insertTag(g, l)
                }
                a.results = g, c(a)
              }
              var e = this;
              return this._removeOldTags(), null == b.term || null != b.page ? void a.call(this, b, c) : void a.call(this, b, d)
            }, b.prototype.createTag = function(b, c) {
              var d = a.trim(c.term);
              return "" === d ? null : {
                id: d,
                text: d
              }
            }, b.prototype.insertTag = function(a, b, c) {
              b.unshift(c)
            }, b.prototype._removeOldTags = function(b) {
              var c = (this._lastTag, this.$element.find("option[data-select2-tag]"));
              c.each(function() {
                this.selected || a(this).remove()
              })
            }, b
          }), b.define("select2/data/tokenizer", ["jquery"], function(a) {
            function b(a, b, c) {
              var d = c.get("tokenizer");
              void 0 !== d && (this.tokenizer = d), a.call(this, b, c)
            }
            return b.prototype.bind = function(a, b, c) {
              a.call(this, b, c), this.$search = b.dropdown.$search || b.selection.$search || c.find(".select2-search__field")
            }, b.prototype.query = function(b, c, d) {
              function e(b) {
                var c = g._normalizeItem(b),
                  d = g.$element.find("option").filter(function() {
                    return a(this).val() === c.id
                  });
                if (!d.length) {
                  var e = g.option(c);
                  e.attr("data-select2-tag", !0), g._removeOldTags(), g.addOptions([e])
                }
                f(c)
              }
  
              function f(a) {
                g.trigger("select", {
                  data: a
                })
              }
              var g = this;
              c.term = c.term || "";
              var h = this.tokenizer(c, this.options, e);
              h.term !== c.term && (this.$search.length && (this.$search.val(h.term), this.$search.focus()), c.term = h.term), b.call(this, c, d)
            }, b.prototype.tokenizer = function(b, c, d, e) {
              for (var f = d.get("tokenSeparators") || [], g = c.term, h = 0, i = this.createTag || function(a) {
                  return {
                    id: a.term,
                    text: a.term
                  }
                }; h < g.length;) {
                var j = g[h];
                if (-1 !== a.inArray(j, f)) {
                  var k = g.substr(0, h),
                    l = a.extend({}, c, {
                      term: k
                    }),
                    m = i(l);
                  null != m ? (e(m), g = g.substr(h + 1) || "", h = 0) : h++
                } else h++
              }
              return {
                term: g
              }
            }, b
          }), b.define("select2/data/minimumInputLength", [], function() {
            function a(a, b, c) {
              this.minimumInputLength = c.get("minimumInputLength"), a.call(this, b, c)
            }
            return a.prototype.query = function(a, b, c) {
              return b.term = b.term || "", b.term.length < this.minimumInputLength ? void this.trigger("results:message", {
                message: "inputTooShort",
                args: {
                  minimum: this.minimumInputLength,
                  input: b.term,
                  params: b
                }
              }) : void a.call(this, b, c)
            }, a
          }), b.define("select2/data/maximumInputLength", [], function() {
            function a(a, b, c) {
              this.maximumInputLength = c.get("maximumInputLength"), a.call(this, b, c)
            }
            return a.prototype.query = function(a, b, c) {
              return b.term = b.term || "", this.maximumInputLength > 0 && b.term.length > this.maximumInputLength ? void this.trigger("results:message", {
                message: "inputTooLong",
                args: {
                  maximum: this.maximumInputLength,
                  input: b.term,
                  params: b
                }
              }) : void a.call(this, b, c)
            }, a
          }), b.define("select2/data/maximumSelectionLength", [], function() {
            function a(a, b, c) {
              this.maximumSelectionLength = c.get("maximumSelectionLength"), a.call(this, b, c)
            }
            return a.prototype.query = function(a, b, c) {
              var d = this;
              this.current(function(e) {
                var f = null != e ? e.length : 0;
                return d.maximumSelectionLength > 0 && f >= d.maximumSelectionLength ? void d.trigger("results:message", {
                  message: "maximumSelected",
                  args: {
                    maximum: d.maximumSelectionLength
                  }
                }) : void a.call(d, b, c)
              })
            }, a
          }), b.define("select2/dropdown", ["jquery", "./utils"], function(a, b) {
            function c(a, b) {
              this.$element = a, this.options = b, c.__super__.constructor.call(this)
            }
            return b.Extend(c, b.Observable), c.prototype.render = function() {
              var b = a('<span class="select2-dropdown"><span class="select2-results"></span></span>');
              return b.attr("dir", this.options.get("dir")), this.$dropdown = b, b
            }, c.prototype.bind = function() {}, c.prototype.position = function(a, b) {}, c.prototype.destroy = function() {
              this.$dropdown.remove()
            }, c
          }), b.define("select2/dropdown/search", ["jquery", "../utils"], function(a, b) {
            function c() {}
            return c.prototype.render = function(b) {
              var c = b.call(this),
                d = a('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" /></span>');
              return this.$searchContainer = d, this.$search = d.find("input"), c.prepend(d), c
            }, c.prototype.bind = function(b, c, d) {
              var e = this;
              b.call(this, c, d), this.$search.on("keydown", function(a) {
                e.trigger("keypress", a), e._keyUpPrevented = a.isDefaultPrevented()
              }), this.$search.on("input", function(b) {
                a(this).off("keyup")
              }), this.$search.on("keyup input", function(a) {
                e.handleSearch(a)
              }), c.on("open", function() {
                e.$search.attr("tabindex", 0), e.$search.focus(), window.setTimeout(function() {
                  e.$search.focus()
                }, 0)
              }), c.on("close", function() {
                e.$search.attr("tabindex", -1), e.$search.val("")
              }), c.on("focus", function() {
                c.isOpen() && e.$search.focus()
              }), c.on("results:all", function(a) {
                if (null == a.query.term || "" === a.query.term) {
                  var b = e.showSearch(a);
                  b ? e.$searchContainer.removeClass("select2-search--hide") : e.$searchContainer.addClass("select2-search--hide")
                }
              })
            }, c.prototype.handleSearch = function(a) {
              if (!this._keyUpPrevented) {
                var b = this.$search.val();
                this.trigger("query", {
                  term: b
                })
              }
              this._keyUpPrevented = !1
            }, c.prototype.showSearch = function(a, b) {
              return !0
            }, c
          }), b.define("select2/dropdown/hidePlaceholder", [], function() {
            function a(a, b, c, d) {
              this.placeholder = this.normalizePlaceholder(c.get("placeholder")), a.call(this, b, c, d)
            }
            return a.prototype.append = function(a, b) {
              b.results = this.removePlaceholder(b.results), a.call(this, b)
            }, a.prototype.normalizePlaceholder = function(a, b) {
              return "string" == typeof b && (b = {
                id: "",
                text: b
              }), b
            }, a.prototype.removePlaceholder = function(a, b) {
              for (var c = b.slice(0), d = b.length - 1; d >= 0; d--) {
                var e = b[d];
                this.placeholder.id === e.id && c.splice(d, 1)
              }
              return c
            }, a
          }), b.define("select2/dropdown/infiniteScroll", ["jquery"], function(a) {
            function b(a, b, c, d) {
              this.lastParams = {}, a.call(this, b, c, d), this.$loadingMore = this.createLoadingMore(), this.loading = !1
            }
            return b.prototype.append = function(a, b) {
              this.$loadingMore.remove(), this.loading = !1, a.call(this, b), this.showLoadingMore(b) && this.$results.append(this.$loadingMore)
            }, b.prototype.bind = function(b, c, d) {
              var e = this;
              b.call(this, c, d), c.on("query", function(a) {
                e.lastParams = a, e.loading = !0
              }), c.on("query:append", function(a) {
                e.lastParams = a, e.loading = !0
              }), this.$results.on("scroll", function() {
                var b = a.contains(document.documentElement, e.$loadingMore[0]);
                if (!e.loading && b) {
                  var c = e.$results.offset().top + e.$results.outerHeight(!1),
                    d = e.$loadingMore.offset().top + e.$loadingMore.outerHeight(!1);
                  c + 50 >= d && e.loadMore()
                }
              })
            }, b.prototype.loadMore = function() {
              this.loading = !0;
              var b = a.extend({}, {
                page: 1
              }, this.lastParams);
              b.page++, this.trigger("query:append", b)
            }, b.prototype.showLoadingMore = function(a, b) {
              return b.pagination && b.pagination.more
            }, b.prototype.createLoadingMore = function() {
              var b = a('<li class="select2-results__option select2-results__option--load-more"role="treeitem" aria-disabled="true"></li>'),
                c = this.options.get("translations").get("loadingMore");
              return b.html(c(this.lastParams)), b
            }, b
          }), b.define("select2/dropdown/attachBody", ["jquery", "../utils"], function(a, b) {
            function c(b, c, d) {
              this.$dropdownParent = d.get("dropdownParent") || a(document.body), b.call(this, c, d)
            }
            return c.prototype.bind = function(a, b, c) {
              var d = this,
                e = !1;
              a.call(this, b, c), b.on("open", function() {
                d._showDropdown(), d._attachPositioningHandler(b), e || (e = !0, b.on("results:all", function() {
                  d._positionDropdown(), d._resizeDropdown()
                }), b.on("results:append", function() {
                  d._positionDropdown(), d._resizeDropdown()
                }))
              }), b.on("close", function() {
                d._hideDropdown(), d._detachPositioningHandler(b)
              }), this.$dropdownContainer.on("mousedown", function(a) {
                a.stopPropagation()
              })
            }, c.prototype.destroy = function(a) {
              a.call(this), this.$dropdownContainer.remove()
            }, c.prototype.position = function(a, b, c) {
              b.attr("class", c.attr("class")), b.removeClass("select2"), b.addClass("select2-container--open"), b.css({
                position: "absolute",
                top: -999999
              }), this.$container = c
            }, c.prototype.render = function(b) {
              var c = a("<span></span>"),
                d = b.call(this);
              return c.append(d), this.$dropdownContainer = c, c
            }, c.prototype._hideDropdown = function(a) {
              this.$dropdownContainer.detach()
            }, c.prototype._attachPositioningHandler = function(c, d) {
              var e = this,
                f = "scroll.select2." + d.id,
                g = "resize.select2." + d.id,
                h = "orientationchange.select2." + d.id,
                i = this.$container.parents().filter(b.hasScroll);
              i.each(function() {
                a(this).data("select2-scroll-position", {
                  x: a(this).scrollLeft(),
                  y: a(this).scrollTop()
                })
              }), i.on(f, function(b) {
                var c = a(this).data("select2-scroll-position");
                a(this).scrollTop(c.y)
              }), a(window).on(f + " " + g + " " + h, function(a) {
                e._positionDropdown(), e._resizeDropdown()
              })
            }, c.prototype._detachPositioningHandler = function(c, d) {
              var e = "scroll.select2." + d.id,
                f = "resize.select2." + d.id,
                g = "orientationchange.select2." + d.id,
                h = this.$container.parents().filter(b.hasScroll);
              h.off(e), a(window).off(e + " " + f + " " + g)
            }, c.prototype._positionDropdown = function() {
              var b = a(window),
                c = this.$dropdown.hasClass("select2-dropdown--above"),
                d = this.$dropdown.hasClass("select2-dropdown--below"),
                e = null,
                f = this.$container.offset();
              f.bottom = f.top + this.$container.outerHeight(!1);
              var g = {
                height: this.$container.outerHeight(!1)
              };
              g.top = f.top, g.bottom = f.top + g.height;
              var h = {
                  height: this.$dropdown.outerHeight(!1)
                },
                i = {
                  top: b.scrollTop(),
                  bottom: b.scrollTop() + b.height()
                },
                j = i.top < f.top - h.height,
                k = i.bottom > f.bottom + h.height,
                l = {
                  left: f.left,
                  top: g.bottom
                },
                m = this.$dropdownParent;
              "static" === m.css("position") && (m = m.offsetParent());
              var n = m.offset();
              l.top -= n.top, l.left -= n.left, c || d || (e = "below"), k || !j || c ? !j && k && c && (e = "below") : e = "above", ("above" == e || c && "below" !== e) && (l.top = g.top - n.top - h.height), null != e && (this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--" + e), this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--" + e)), this.$dropdownContainer.css(l)
            }, c.prototype._resizeDropdown = function() {
              var a = {
                width: this.$container.outerWidth(!1) + "px"
              };
              this.options.get("dropdownAutoWidth") && (a.minWidth = a.width, a.position = "relative", a.width = "auto"), this.$dropdown.css(a);
            }, c.prototype._showDropdown = function(a) {
              this.$dropdownContainer.appendTo(this.$dropdownParent), this._positionDropdown(), this._resizeDropdown()
            }, c
          }), b.define("select2/dropdown/minimumResultsForSearch", [], function() {
            function a(b) {
              for (var c = 0, d = 0; d < b.length; d++) {
                var e = b[d];
                e.children ? c += a(e.children) : c++
              }
              return c
            }
  
            function b(a, b, c, d) {
              this.minimumResultsForSearch = c.get("minimumResultsForSearch"), this.minimumResultsForSearch < 0 && (this.minimumResultsForSearch = 1 / 0), a.call(this, b, c, d)
            }
            return b.prototype.showSearch = function(b, c) {
              return !(a(c.data.results) < this.minimumResultsForSearch) && b.call(this, c)
            }, b
          }), b.define("select2/dropdown/selectOnClose", [], function() {
            function a() {}
            return a.prototype.bind = function(a, b, c) {
              var d = this;
              a.call(this, b, c), b.on("close", function(a) {
                d._handleSelectOnClose(a)
              })
            }, a.prototype._handleSelectOnClose = function(a, b) {
              if (b && null != b.originalSelect2Event) {
                var c = b.originalSelect2Event;
                if ("select" === c._type || "unselect" === c._type) return
              }
              var d = this.getHighlightedResults();
              if (!(d.length < 1)) {
                var e = d.data("data");
                null != e.element && e.element.selected || null == e.element && e.selected || this.trigger("select", {
                  data: e
                })
              }
            }, a
          }), b.define("select2/dropdown/closeOnSelect", [], function() {
            function a() {}
            return a.prototype.bind = function(a, b, c) {
              var d = this;
              a.call(this, b, c), b.on("select", function(a) {
                d._selectTriggered(a)
              }), b.on("unselect", function(a) {
                d._selectTriggered(a)
              })
            }, a.prototype._selectTriggered = function(a, b) {
              var c = b.originalEvent;
              c && c.ctrlKey || this.trigger("close", {
                originalEvent: c,
                originalSelect2Event: b
              })
            }, a
          }), b.define("select2/i18n/en", [], function() {
            return {
              errorLoading: function() {
                return "The results could not be loaded."
              },
              inputTooLong: function(a) {
                var b = a.input.length - a.maximum,
                  c = "Please delete " + b + " character";
                return 1 != b && (c += "s"), c
              },
              inputTooShort: function(a) {
                var b = a.minimum - a.input.length,
                  c = "Please enter " + b + " or more characters";
                return c
              },
              loadingMore: function() {
                return "Loading more results…"
              },
              maximumSelected: function(a) {
                var b = "You can only select " + a.maximum + " item";
                return 1 != a.maximum && (b += "s"), b
              },
              noResults: function() {
                return "No results found"
              },
              searching: function() {
                return "Searching…"
              }
            }
          }), b.define("select2/defaults", ["jquery", "require", "./results", "./selection/single", "./selection/multiple", "./selection/placeholder", "./selection/allowClear", "./selection/search", "./selection/eventRelay", "./utils", "./translation", "./diacritics", "./data/select", "./data/array", "./data/ajax", "./data/tags", "./data/tokenizer", "./data/minimumInputLength", "./data/maximumInputLength", "./data/maximumSelectionLength", "./dropdown", "./dropdown/search", "./dropdown/hidePlaceholder", "./dropdown/infiniteScroll", "./dropdown/attachBody", "./dropdown/minimumResultsForSearch", "./dropdown/selectOnClose", "./dropdown/closeOnSelect", "./i18n/en"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C) {
            function D() {
              this.reset()
            }
            D.prototype.apply = function(l) {
              if (l = a.extend(!0, {}, this.defaults, l), null == l.dataAdapter) {
                if (null != l.ajax ? l.dataAdapter = o : null != l.data ? l.dataAdapter = n : l.dataAdapter = m, l.minimumInputLength > 0 && (l.dataAdapter = j.Decorate(l.dataAdapter, r)), l.maximumInputLength > 0 && (l.dataAdapter = j.Decorate(l.dataAdapter, s)), l.maximumSelectionLength > 0 && (l.dataAdapter = j.Decorate(l.dataAdapter, t)), l.tags && (l.dataAdapter = j.Decorate(l.dataAdapter, p)), (null != l.tokenSeparators || null != l.tokenizer) && (l.dataAdapter = j.Decorate(l.dataAdapter, q)), null != l.query) {
                  var C = b(l.amdBase + "compat/query");
                  l.dataAdapter = j.Decorate(l.dataAdapter, C)
                }
                if (null != l.initSelection) {
                  var D = b(l.amdBase + "compat/initSelection");
                  l.dataAdapter = j.Decorate(l.dataAdapter, D)
                }
              }
              if (null == l.resultsAdapter && (l.resultsAdapter = c, null != l.ajax && (l.resultsAdapter = j.Decorate(l.resultsAdapter, x)), null != l.placeholder && (l.resultsAdapter = j.Decorate(l.resultsAdapter, w)), l.selectOnClose && (l.resultsAdapter = j.Decorate(l.resultsAdapter, A))), null == l.dropdownAdapter) {
                if (l.multiple) l.dropdownAdapter = u;
                else {
                  var E = j.Decorate(u, v);
                  l.dropdownAdapter = E
                }
                if (0 !== l.minimumResultsForSearch && (l.dropdownAdapter = j.Decorate(l.dropdownAdapter, z)), l.closeOnSelect && (l.dropdownAdapter = j.Decorate(l.dropdownAdapter, B)), null != l.dropdownCssClass || null != l.dropdownCss || null != l.adaptDropdownCssClass) {
                  var F = b(l.amdBase + "compat/dropdownCss");
                  l.dropdownAdapter = j.Decorate(l.dropdownAdapter, F)
                }
                l.dropdownAdapter = j.Decorate(l.dropdownAdapter, y)
              }
              if (null == l.selectionAdapter) {
                if (l.multiple ? l.selectionAdapter = e : l.selectionAdapter = d, null != l.placeholder && (l.selectionAdapter = j.Decorate(l.selectionAdapter, f)), l.allowClear && (l.selectionAdapter = j.Decorate(l.selectionAdapter, g)), l.multiple && (l.selectionAdapter = j.Decorate(l.selectionAdapter, h)), null != l.containerCssClass || null != l.containerCss || null != l.adaptContainerCssClass) {
                  var G = b(l.amdBase + "compat/containerCss");
                  l.selectionAdapter = j.Decorate(l.selectionAdapter, G)
                }
                l.selectionAdapter = j.Decorate(l.selectionAdapter, i)
              }
              if ("string" == typeof l.language)
                if (l.language.indexOf("-") > 0) {
                  var H = l.language.split("-"),
                    I = H[0];
                  l.language = [l.language, I]
                } else l.language = [l.language];
              if (a.isArray(l.language)) {
                var J = new k;
                l.language.push("en");
                for (var K = l.language, L = 0; L < K.length; L++) {
                  var M = K[L],
                    N = {};
                  try {
                    N = k.loadPath(M)
                  } catch (a) {
                    try {
                      M = this.defaults.amdLanguageBase + M, N = k.loadPath(M)
                    } catch (a) {
                      l.debug && window.console && console.warn && console.warn('Select2: The language file for "' + M + '" could not be automatically loaded. A fallback will be used instead.');
                      continue
                    }
                  }
                  J.extend(N)
                }
                l.translations = J
              } else {
                var O = k.loadPath(this.defaults.amdLanguageBase + "en"),
                  P = new k(l.language);
                P.extend(O), l.translations = P
              }
              return l
            }, D.prototype.reset = function() {
              function b(a) {
                function b(a) {
                  return l[a] || a
                }
                return a.replace(/[^\u0000-\u007E]/g, b)
              }
  
              function c(d, e) {
                if ("" === a.trim(d.term)) return e;
                if (e.children && e.children.length > 0) {
                  for (var f = a.extend(!0, {}, e), g = e.children.length - 1; g >= 0; g--) {
                    var h = e.children[g],
                      i = c(d, h);
                    null == i && f.children.splice(g, 1)
                  }
                  return f.children.length > 0 ? f : c(d, f)
                }
                var j = b(e.text).toUpperCase(),
                  k = b(d.term).toUpperCase();
                return j.indexOf(k) > -1 ? e : null
              }
              this.defaults = {
                amdBase: "./",
                amdLanguageBase: "./i18n/",
                closeOnSelect: !0,
                debug: !1,
                dropdownAutoWidth: !1,
                escapeMarkup: j.escapeMarkup,
                language: C,
                matcher: c,
                minimumInputLength: 0,
                maximumInputLength: 0,
                maximumSelectionLength: 0,
                minimumResultsForSearch: 0,
                selectOnClose: !1,
                sorter: function(a) {
                  return a
                },
                templateResult: function(a) {
                  return a.text
                },
                templateSelection: function(a) {
                  return a.text
                },
                theme: "default",
                width: "resolve"
              }
            }, D.prototype.set = function(b, c) {
              var d = a.camelCase(b),
                e = {};
              e[d] = c;
              var f = j._convertData(e);
              a.extend(this.defaults, f)
            };
            var E = new D;
            return E
          }), b.define("select2/options", ["require", "jquery", "./defaults", "./utils"], function(a, b, c, d) {
            function e(b, e) {
              if (this.options = b, null != e && this.fromElement(e), this.options = c.apply(this.options), e && e.is("input")) {
                var f = a(this.get("amdBase") + "compat/inputData");
                this.options.dataAdapter = d.Decorate(this.options.dataAdapter, f)
              }
            }
            return e.prototype.fromElement = function(a) {
              var c = ["select2"];
              null == this.options.multiple && (this.options.multiple = a.prop("multiple")), null == this.options.disabled && (this.options.disabled = a.prop("disabled")), null == this.options.language && (a.prop("lang") ? this.options.language = a.prop("lang").toLowerCase() : a.closest("[lang]").prop("lang") && (this.options.language = a.closest("[lang]").prop("lang"))), null == this.options.dir && (a.prop("dir") ? this.options.dir = a.prop("dir") : a.closest("[dir]").prop("dir") ? this.options.dir = a.closest("[dir]").prop("dir") : this.options.dir = "ltr"), a.prop("disabled", this.options.disabled), a.prop("multiple", this.options.multiple), a.data("select2Tags") && (this.options.debug && window.console && console.warn && console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'), a.data("data", a.data("select2Tags")), a.data("tags", !0)), a.data("ajaxUrl") && (this.options.debug && window.console && console.warn && console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."), a.attr("ajax--url", a.data("ajaxUrl")), a.data("ajax--url", a.data("ajaxUrl")));
              var e = {};
              e = b.fn.jquery && "1." == b.fn.jquery.substr(0, 2) && a[0].dataset ? b.extend(!0, {}, a[0].dataset, a.data()) : a.data();
              var f = b.extend(!0, {}, e);
              f = d._convertData(f);
              for (var g in f) b.inArray(g, c) > -1 || (b.isPlainObject(this.options[g]) ? b.extend(this.options[g], f[g]) : this.options[g] = f[g]);
              return this
            }, e.prototype.get = function(a) {
              return this.options[a]
            }, e.prototype.set = function(a, b) {
              this.options[a] = b
            }, e
          }), b.define("select2/core", ["jquery", "./options", "./utils", "./keys"], function(a, b, c, d) {
            var e = function(a, c) {
              null != a.data("select2") && a.data("select2").destroy(), this.$element = a, this.id = this._generateId(a), c = c || {}, this.options = new b(c, a), e.__super__.constructor.call(this);
              var d = a.attr("tabindex") || 0;
              a.data("old-tabindex", d), a.attr("tabindex", "-1");
              var f = this.options.get("dataAdapter");
              this.dataAdapter = new f(a, this.options);
              var g = this.render();
              this._placeContainer(g);
              var h = this.options.get("selectionAdapter");
              this.selection = new h(a, this.options), this.$selection = this.selection.render(), this.selection.position(this.$selection, g);
              var i = this.options.get("dropdownAdapter");
              this.dropdown = new i(a, this.options), this.$dropdown = this.dropdown.render(), this.dropdown.position(this.$dropdown, g);
              var j = this.options.get("resultsAdapter");
              this.results = new j(a, this.options, this.dataAdapter), this.$results = this.results.render(), this.results.position(this.$results, this.$dropdown);
              var k = this;
              this._bindAdapters(), this._registerDomEvents(), this._registerDataEvents(), this._registerSelectionEvents(), this._registerDropdownEvents(), this._registerResultsEvents(), this._registerEvents(), this.dataAdapter.current(function(a) {
                k.trigger("selection:update", {
                  data: a
                })
              }), a.addClass("select2-hidden-accessible"), a.attr("aria-hidden", "true"), this._syncAttributes(), a.data("select2", this)
            };
            return c.Extend(e, c.Observable), e.prototype._generateId = function(a) {
              var b = "";
              return b = null != a.attr("id") ? a.attr("id") : null != a.attr("name") ? a.attr("name") + "-" + c.generateChars(2) : c.generateChars(4), b = b.replace(/(:|\.|\[|\]|,)/g, ""), b = "select2-" + b
            }, e.prototype._placeContainer = function(a) {
              a.insertAfter(this.$element);
              var b = this._resolveWidth(this.$element, this.options.get("width"));
              null != b && a.css("width", b)
            }, e.prototype._resolveWidth = function(a, b) {
              var c = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
              if ("resolve" == b) {
                var d = this._resolveWidth(a, "style");
                return null != d ? d : this._resolveWidth(a, "element")
              }
              if ("element" == b) {
                var e = a.outerWidth(!1);
                return 0 >= e ? "auto" : e + "px"
              }
              if ("style" == b) {
                var f = a.attr("style");
                if ("string" != typeof f) return null;
                for (var g = f.split(";"), h = 0, i = g.length; i > h; h += 1) {
                  var j = g[h].replace(/\s/g, ""),
                    k = j.match(c);
                  if (null !== k && k.length >= 1) return k[1]
                }
                return null
              }
              return b
            }, e.prototype._bindAdapters = function() {
              this.dataAdapter.bind(this, this.$container), this.selection.bind(this, this.$container), this.dropdown.bind(this, this.$container), this.results.bind(this, this.$container)
            }, e.prototype._registerDomEvents = function() {
              var b = this;
              this.$element.on("change.select2", function() {
                b.dataAdapter.current(function(a) {
                  b.trigger("selection:update", {
                    data: a
                  })
                })
              }), this.$element.on("focus.select2", function(a) {
                b.trigger("focus", a)
              }), this._syncA = c.bind(this._syncAttributes, this), this._syncS = c.bind(this._syncSubtree, this), this.$element[0].attachEvent && this.$element[0].attachEvent("onpropertychange", this._syncA);
              var d = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
              null != d ? (this._observer = new d(function(c) {
                a.each(c, b._syncA), a.each(c, b._syncS)
              }), this._observer.observe(this.$element[0], {
                attributes: !0,
                childList: !0,
                subtree: !1
              })) : this.$element[0].addEventListener && (this.$element[0].addEventListener("DOMAttrModified", b._syncA, !1), this.$element[0].addEventListener("DOMNodeInserted", b._syncS, !1), this.$element[0].addEventListener("DOMNodeRemoved", b._syncS, !1))
            }, e.prototype._registerDataEvents = function() {
              var a = this;
              this.dataAdapter.on("*", function(b, c) {
                a.trigger(b, c)
              })
            }, e.prototype._registerSelectionEvents = function() {
              var b = this,
                c = ["toggle", "focus"];
              this.selection.on("toggle", function() {
                b.toggleDropdown()
              }), this.selection.on("focus", function(a) {
                b.focus(a)
              }), this.selection.on("*", function(d, e) {
                -1 === a.inArray(d, c) && b.trigger(d, e)
              })
            }, e.prototype._registerDropdownEvents = function() {
              var a = this;
              this.dropdown.on("*", function(b, c) {
                a.trigger(b, c)
              })
            }, e.prototype._registerResultsEvents = function() {
              var a = this;
              this.results.on("*", function(b, c) {
                a.trigger(b, c)
              })
            }, e.prototype._registerEvents = function() {
              var a = this;
              this.on("open", function() {
                a.$container.addClass("select2-container--open")
              }), this.on("close", function() {
                a.$container.removeClass("select2-container--open")
              }), this.on("enable", function() {
                a.$container.removeClass("select2-container--disabled")
              }), this.on("disable", function() {
                a.$container.addClass("select2-container--disabled")
              }), this.on("blur", function() {
                a.$container.removeClass("select2-container--focus")
              }), this.on("query", function(b) {
                a.isOpen() || a.trigger("open", {}), this.dataAdapter.query(b, function(c) {
                  a.trigger("results:all", {
                    data: c,
                    query: b
                  })
                })
              }), this.on("query:append", function(b) {
                this.dataAdapter.query(b, function(c) {
                  a.trigger("results:append", {
                    data: c,
                    query: b
                  })
                })
              }), this.on("keypress", function(b) {
                var c = b.which;
                a.isOpen() ? c === d.ESC || c === d.TAB || c === d.UP && b.altKey ? (a.close(), b.preventDefault()) : c === d.ENTER ? (a.trigger("results:select", {}), b.preventDefault()) : c === d.SPACE && b.ctrlKey ? (a.trigger("results:toggle", {}), b.preventDefault()) : c === d.UP ? (a.trigger("results:previous", {}), b.preventDefault()) : c === d.DOWN && (a.trigger("results:next", {}), b.preventDefault()) : (c === d.ENTER || c === d.SPACE || c === d.DOWN && b.altKey) && (a.open(), b.preventDefault())
              })
            }, e.prototype._syncAttributes = function() {
              this.options.set("disabled", this.$element.prop("disabled")), this.options.get("disabled") ? (this.isOpen() && this.close(), this.trigger("disable", {})) : this.trigger("enable", {})
            }, e.prototype._syncSubtree = function(a, b) {
              var c = !1,
                d = this;
              if (!a || !a.target || "OPTION" === a.target.nodeName || "OPTGROUP" === a.target.nodeName) {
                if (b)
                  if (b.addedNodes && b.addedNodes.length > 0)
                    for (var e = 0; e < b.addedNodes.length; e++) {
                      var f = b.addedNodes[e];
                      f.selected && (c = !0)
                    } else b.removedNodes && b.removedNodes.length > 0 && (c = !0);
                  else c = !0;
                c && this.dataAdapter.current(function(a) {
                  d.trigger("selection:update", {
                    data: a
                  })
                })
              }
            }, e.prototype.trigger = function(a, b) {
              var c = e.__super__.trigger,
                d = {
                  open: "opening",
                  close: "closing",
                  select: "selecting",
                  unselect: "unselecting"
                };
              if (void 0 === b && (b = {}), a in d) {
                var f = d[a],
                  g = {
                    prevented: !1,
                    name: a,
                    args: b
                  };
                if (c.call(this, f, g), g.prevented) return void(b.prevented = !0)
              }
              c.call(this, a, b)
            }, e.prototype.toggleDropdown = function() {
              this.options.get("disabled") || (this.isOpen() ? this.close() : this.open())
            }, e.prototype.open = function() {
              this.isOpen() || this.trigger("query", {})
            }, e.prototype.close = function() {
              this.isOpen() && this.trigger("close", {})
            }, e.prototype.isOpen = function() {
              return this.$container.hasClass("select2-container--open")
            }, e.prototype.hasFocus = function() {
              return this.$container.hasClass("select2-container--focus")
            }, e.prototype.focus = function(a) {
              this.hasFocus() || (this.$container.addClass("select2-container--focus"), this.trigger("focus", {}))
            }, e.prototype.enable = function(a) {
              this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'), (null == a || 0 === a.length) && (a = [!0]);
              var b = !a[0];
              this.$element.prop("disabled", b)
            }, e.prototype.data = function() {
              this.options.get("debug") && arguments.length > 0 && window.console && console.warn && console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');
              var a = [];
              return this.dataAdapter.current(function(b) {
                a = b
              }), a
            }, e.prototype.val = function(b) {
              if (this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'), null == b || 0 === b.length) return this.$element.val();
              var c = b[0];
              a.isArray(c) && (c = a.map(c, function(a) {
                return a.toString()
              })), this.$element.val(c).trigger("change")
            }, e.prototype.destroy = function() {
              this.$container.remove(), this.$element[0].detachEvent && this.$element[0].detachEvent("onpropertychange", this._syncA), null != this._observer ? (this._observer.disconnect(), this._observer = null) : this.$element[0].removeEventListener && (this.$element[0].removeEventListener("DOMAttrModified", this._syncA, !1), this.$element[0].removeEventListener("DOMNodeInserted", this._syncS, !1), this.$element[0].removeEventListener("DOMNodeRemoved", this._syncS, !1)), this._syncA = null, this._syncS = null, this.$element.off(".select2"), this.$element.attr("tabindex", this.$element.data("old-tabindex")), this.$element.removeClass("select2-hidden-accessible"), this.$element.attr("aria-hidden", "false"), this.$element.removeData("select2"), this.dataAdapter.destroy(), this.selection.destroy(), this.dropdown.destroy(), this.results.destroy(), this.dataAdapter = null, this.selection = null, this.dropdown = null, this.results = null
            }, e.prototype.render = function() {
              var b = a('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');
              return b.attr("dir", this.options.get("dir")), this.$container = b, this.$container.addClass("select2-container--" + this.options.get("theme")), b.data("element", this.$element), b
            }, e
          }), b.define("jquery-mousewheel", ["jquery"], function(a) {
            return a
          }), b.define("jquery.select2", ["jquery", "jquery-mousewheel", "./select2/core", "./select2/defaults"], function(a, b, c, d) {
            if (null == a.fn.select2) {
              var e = ["open", "close", "destroy"];
              a.fn.select2 = function(b) {
                if (b = b || {}, "object" == typeof b) return this.each(function() {
                  var d = a.extend(!0, {}, b);
                  new c(a(this), d)
                }), this;
                if ("string" == typeof b) {
                  var d, f = Array.prototype.slice.call(arguments, 1);
                  return this.each(function() {
                    var c = a(this).data("select2");
                    null == c && window.console && console.error && console.error("The select2('" + b + "') method was called on an element that is not using Select2."), d = c[b].apply(c, f)
                  }), a.inArray(b, e) > -1 ? this : d
                }
                throw new Error("Invalid arguments for Select2: " + b)
              }
            }
            return null == a.fn.select2.defaults && (a.fn.select2.defaults = d), c
          }), {
            define: b.define,
            require: b.require
          }
        }(),
        c = b.require("jquery.select2");
      return a.fn.select2.amd = b, c
    }),
    function(a, b) {
      "use strict";
      var c = "AxmTYklsjo190QW",
        d = "sans-serif",
        e = "serif",
        f = {
          tolerance: 2,
          delay: 100,
          glyphs: "",
          success: function() {},
          error: function() {},
          timeout: 5e3,
          weight: "400",
          style: "normal"
        },
        g = ["display:block", "position:absolute", "top:-999px", "left:-999px", "font-size:48px", "width:auto", "height:auto", "line-height:normal", "margin:0", "padding:0", "font-variant:normal", "white-space:nowrap"],
        h = '<div style="%s">' + c + "</div>",
        i = function() {
          this.fontFamily = "", this.appended = !1, this.serif = void 0, this.sansSerif = void 0, this.parent = void 0, this.options = {}
        };
      i.prototype.getMeasurements = function() {
        return {
          sansSerif: {
            width: this.sansSerif.offsetWidth,
            height: this.sansSerif.offsetHeight
          },
          serif: {
            width: this.serif.offsetWidth,
            height: this.serif.offsetHeight
          }
        }
      }, i.prototype.load = function() {
        function c(a) {
          return g.concat(["font-weight:" + q.weight, "font-style:" + q.style]).concat("font-family:" + a).join(";")
        }
  
        function f(a, b, c) {
          return Math.abs(a.width - b.offsetWidth) > c || Math.abs(a.height - b.offsetHeight) > c
        }
  
        function i() {
          return (new Date).getTime() - k.getTime() > q.timeout
        }
        var j, k = new Date,
          l = this,
          m = l.serif,
          n = l.sansSerif,
          o = l.parent,
          p = l.appended,
          q = l.options,
          r = q.reference,
          s = h.replace(/\%s/, c(d)),
          t = h.replace(/\%s/, c(e));
        o || (o = l.parent = b.createElement("div")), o.innerHTML = s + t, n = l.sansSerif = o.firstChild, m = l.serif = n.nextSibling, q.glyphs && (n.innerHTML += q.glyphs, m.innerHTML += q.glyphs),
          function c() {
            r || (r = b.body), !p && r && (r.appendChild(o), p = l.appended = !0, j = l.getMeasurements(), n.style.fontFamily = l.fontFamily + ", " + d, m.style.fontFamily = l.fontFamily + ", " + e), p && j && (f(j.sansSerif, n, q.tolerance) || f(j.serif, m, q.tolerance)) ? q.success() : i() ? q.error() : !p && "requestAnimationFrame" in window ? a.requestAnimationFrame(c) : a.setTimeout(c, q.delay)
          }()
      }, i.prototype.cleanFamilyName = function(a) {
        return a.replace(/[\'\"]/g, "").toLowerCase()
      }, i.prototype.cleanWeight = function(a) {
        var b = {
          normal: "400",
          bold: "700"
        };
        return "" + (b[a] || a)
      }, i.prototype.checkFontFaces = function(c) {
        var d = this;
        b.fonts.forEach(function(b) {
          d.cleanFamilyName(b.family) === d.cleanFamilyName(d.fontFamily) && d.cleanWeight(b.weight) === d.cleanWeight(d.options.weight) && b.style === d.options.style && b.load().then(function() {
            d.options.success(), a.clearTimeout(c)
          })
        })
      }, i.prototype.init = function(c, d) {
        var e;
        for (var g in f) d.hasOwnProperty(g) || (d[g] = f[g]);
        this.options = d, this.fontFamily = c, !d.glyphs && "fonts" in b ? (d.timeout && (e = a.setTimeout(function() {
          d.error()
        }, d.timeout)), this.checkFontFaces(e)) : this.load()
      };
      var j = function(a, b) {
        var c = new i;
        return c.init(a, b), c
      };
      a.FontFaceOnload = j
    }(this, this.document),
    function(a) {
      var b, c, d = "0.4.2",
        e = "hasOwnProperty",
        f = /[\.\/]/,
        g = /\s*,\s*/,
        h = "*",
        i = function(a, b) {
          return a - b
        },
        j = {
          n: {}
        },
        k = function() {
          for (var a = 0, b = this.length; a < b; a++)
            if ("undefined" != typeof this[a]) return this[a]
        },
        l = function() {
          for (var a = this.length; --a;)
            if ("undefined" != typeof this[a]) return this[a]
        },
        m = function(a, d) {
          a = String(a);
          var e, f = c,
            g = Array.prototype.slice.call(arguments, 2),
            h = m.listeners(a),
            j = 0,
            n = [],
            o = {},
            p = [],
            q = b;
          p.firstDefined = k, p.lastDefined = l, b = a, c = 0;
          for (var r = 0, s = h.length; r < s; r++) "zIndex" in h[r] && (n.push(h[r].zIndex), h[r].zIndex < 0 && (o[h[r].zIndex] = h[r]));
          for (n.sort(i); n[j] < 0;)
            if (e = o[n[j++]], p.push(e.apply(d, g)), c) return c = f, p;
          for (r = 0; r < s; r++)
            if (e = h[r], "zIndex" in e)
              if (e.zIndex == n[j]) {
                if (p.push(e.apply(d, g)), c) break;
                do
                  if (j++, e = o[n[j]], e && p.push(e.apply(d, g)), c) break; while (e)
              } else o[e.zIndex] = e;
          else if (p.push(e.apply(d, g)), c) break;
          return c = f, b = q, p
        };
      m._events = j, m.listeners = function(a) {
        var b, c, d, e, g, i, k, l, m = a.split(f),
          n = j,
          o = [n],
          p = [];
        for (e = 0, g = m.length; e < g; e++) {
          for (l = [], i = 0, k = o.length; i < k; i++)
            for (n = o[i].n, c = [n[m[e]], n[h]], d = 2; d--;) b = c[d], b && (l.push(b), p = p.concat(b.f || []));
          o = l
        }
        return p
      }, m.on = function(a, b) {
        if (a = String(a), "function" != typeof b) return function() {};
        for (var c = a.split(g), d = 0, e = c.length; d < e; d++) ! function(a) {
          for (var c, d = a.split(f), e = j, g = 0, h = d.length; g < h; g++) e = e.n, e = e.hasOwnProperty(d[g]) && e[d[g]] || (e[d[g]] = {
            n: {}
          });
          for (e.f = e.f || [], g = 0, h = e.f.length; g < h; g++)
            if (e.f[g] == b) {
              c = !0;
              break
            }!c && e.f.push(b)
        }(c[d]);
        return function(a) {
          +a == +a && (b.zIndex = +a)
        }
      }, m.f = function(a) {
        var b = [].slice.call(arguments, 1);
        return function() {
          m.apply(null, [a, null].concat(b).concat([].slice.call(arguments, 0)))
        }
      }, m.stop = function() {
        c = 1
      }, m.nt = function(a) {
        return a ? new RegExp("(?:\\.|\\/|^)" + a + "(?:\\.|\\/|$)").test(b) : b
      }, m.nts = function() {
        return b.split(f)
      }, m.off = m.unbind = function(a, b) {
        if (!a) return void(m._events = j = {
          n: {}
        });
        var c = a.split(g);
        if (c.length > 1)
          for (var d = 0, i = c.length; d < i; d++) m.off(c[d], b);
        else {
          c = a.split(f);
          var k, l, n, d, i, o, p, q = [j];
          for (d = 0, i = c.length; d < i; d++)
            for (o = 0; o < q.length; o += n.length - 2) {
              if (n = [o, 1], k = q[o].n, c[d] != h) k[c[d]] && n.push(k[c[d]]);
              else
                for (l in k) k[e](l) && n.push(k[l]);
              q.splice.apply(q, n)
            }
          for (d = 0, i = q.length; d < i; d++)
            for (k = q[d]; k.n;) {
              if (b) {
                if (k.f) {
                  for (o = 0, p = k.f.length; o < p; o++)
                    if (k.f[o] == b) {
                      k.f.splice(o, 1);
                      break
                    }!k.f.length && delete k.f
                }
                for (l in k.n)
                  if (k.n[e](l) && k.n[l].f) {
                    var r = k.n[l].f;
                    for (o = 0, p = r.length; o < p; o++)
                      if (r[o] == b) {
                        r.splice(o, 1);
                        break
                      }!r.length && delete k.n[l].f
                  }
              } else {
                delete k.f;
                for (l in k.n) k.n[e](l) && k.n[l].f && delete k.n[l].f
              }
              k = k.n
            }
        }
      }, m.once = function(a, b) {
        var c = function() {
          return m.unbind(a, c), b.apply(this, arguments)
        };
        return m.on(a, c)
      }, m.version = d, m.toString = function() {
        return "You are running Eve " + d
      }, "undefined" != typeof module && module.exports ? module.exports = m : "function" == typeof define && define.amd ? define("eve", [], function() {
        return m
      }) : a.eve = m
    }(this),
    function(a, b) {
      if ("function" == typeof define && define.amd) define(["eve"], function(c) {
        return b(a, c)
      });
      else if ("undefined" != typeof exports) {
        var c = require("eve");
        module.exports = b(a, c)
      } else b(a, a.eve)
    }(window || this, function(a, b) {
      var c = function(b) {
          var c = {},
            d = a.requestAnimationFrame || a.webkitRequestAnimationFrame || a.mozRequestAnimationFrame || a.oRequestAnimationFrame || a.msRequestAnimationFrame || function(a) {
              setTimeout(a, 16)
            },
            e = Array.isArray || function(a) {
              return a instanceof Array || "[object Array]" == Object.prototype.toString.call(a)
            },
            f = 0,
            g = "M" + (+new Date).toString(36),
            h = function() {
              return g + (f++).toString(36)
            },
            i = Date.now || function() {
              return +new Date
            },
            j = function(a) {
              var b = this;
              if (null == a) return b.s;
              var c = b.s - a;
              b.b += b.dur * c, b.B += b.dur * c, b.s = a
            },
            k = function(a) {
              var b = this;
              return null == a ? b.spd : void(b.spd = a)
            },
            l = function(a) {
              var b = this;
              return null == a ? b.dur : (b.s = b.s * a / b.dur, void(b.dur = a))
            },
            m = function() {
              var a = this;
              delete c[a.id], a.update(), b("mina.stop." + a.id, a)
            },
            n = function() {
              var a = this;
              a.pdif || (delete c[a.id], a.update(), a.pdif = a.get() - a.b)
            },
            o = function() {
              var a = this;
              a.pdif && (a.b = a.get() - a.pdif, delete a.pdif, c[a.id] = a)
            },
            p = function() {
              var a, b = this;
              if (e(b.start)) {
                a = [];
                for (var c = 0, d = b.start.length; c < d; c++) a[c] = +b.start[c] + (b.end[c] - b.start[c]) * b.easing(b.s)
              } else a = +b.start + (b.end - b.start) * b.easing(b.s);
              b.set(a)
            },
            q = function() {
              var a = 0;
              for (var e in c)
                if (c.hasOwnProperty(e)) {
                  var f = c[e],
                    g = f.get();
                  a++, f.s = (g - f.b) / (f.dur / f.spd), f.s >= 1 && (delete c[e], f.s = 1, a--, function(a) {
                    setTimeout(function() {
                      b("mina.finish." + a.id, a)
                    })
                  }(f)), f.update()
                }
              a && d(q)
            },
            r = function(a, b, e, f, g, i, s) {
              var t = {
                id: h(),
                start: a,
                end: b,
                b: e,
                s: 0,
                dur: f - e,
                spd: 1,
                get: g,
                set: i,
                easing: s || r.linear,
                status: j,
                speed: k,
                duration: l,
                stop: m,
                pause: n,
                resume: o,
                update: p
              };
              c[t.id] = t;
              var u, v = 0;
              for (u in c)
                if (c.hasOwnProperty(u) && (v++, 2 == v)) break;
              return 1 == v && d(q), t
            };
          return r.time = i, r.getById = function(a) {
            return c[a] || null
          }, r.linear = function(a) {
            return a
          }, r.easeout = function(a) {
            return Math.pow(a, 1.7)
          }, r.easein = function(a) {
            return Math.pow(a, .48)
          }, r.easeinout = function(a) {
            if (1 == a) return 1;
            if (0 == a) return 0;
            var b = .48 - a / 1.04,
              c = Math.sqrt(.1734 + b * b),
              d = c - b,
              e = Math.pow(Math.abs(d), 1 / 3) * (d < 0 ? -1 : 1),
              f = -c - b,
              g = Math.pow(Math.abs(f), 1 / 3) * (f < 0 ? -1 : 1),
              h = e + g + .5;
            return 3 * (1 - h) * h * h + h * h * h
          }, r.backin = function(a) {
            if (1 == a) return 1;
            var b = 1.70158;
            return a * a * ((b + 1) * a - b)
          }, r.backout = function(a) {
            if (0 == a) return 0;
            a -= 1;
            var b = 1.70158;
            return a * a * ((b + 1) * a + b) + 1
          }, r.elastic = function(a) {
            return a == !!a ? a : Math.pow(2, -10 * a) * Math.sin((a - .075) * (2 * Math.PI) / .3) + 1
          }, r.bounce = function(a) {
            var b, c = 7.5625,
              d = 2.75;
            return a < 1 / d ? b = c * a * a : a < 2 / d ? (a -= 1.5 / d, b = c * a * a + .75) : a < 2.5 / d ? (a -= 2.25 / d, b = c * a * a + .9375) : (a -= 2.625 / d, b = c * a * a + .984375), b
          }, a.mina = r, r
        }("undefined" == typeof b ? function() {} : b),
        d = function(a) {
          function c(a, b) {
            if (a) {
              if (a.nodeType) return w(a);
              if (e(a, "array") && c.set) return c.set.apply(c, a);
              if (a instanceof s) return a;
              if (null == b) return a = y.doc.querySelector(String(a)), w(a)
            }
            return a = null == a ? "100%" : a, b = null == b ? "100%" : b, new v(a, b)
          }
  
          function d(a, b) {
            if (b) {
              if ("#text" == a && (a = y.doc.createTextNode(b.text || b["#text"] || "")), "#comment" == a && (a = y.doc.createComment(b.text || b["#text"] || "")), "string" == typeof a && (a = d(a)), "string" == typeof b) return 1 == a.nodeType ? "xlink:" == b.substring(0, 6) ? a.getAttributeNS(T, b.substring(6)) : "xml:" == b.substring(0, 4) ? a.getAttributeNS(U, b.substring(4)) : a.getAttribute(b) : "text" == b ? a.nodeValue : null;
              if (1 == a.nodeType) {
                for (var c in b)
                  if (b[z](c)) {
                    var e = A(b[c]);
                    e ? "xlink:" == c.substring(0, 6) ? a.setAttributeNS(T, c.substring(6), e) : "xml:" == c.substring(0, 4) ? a.setAttributeNS(U, c.substring(4), e) : a.setAttribute(c, e) : a.removeAttribute(c)
                  }
              } else "text" in b && (a.nodeValue = b.text)
            } else a = y.doc.createElementNS(U, a);
            return a
          }
  
          function e(a, b) {
            return b = A.prototype.toLowerCase.call(b), "finite" == b ? isFinite(a) : !("array" != b || !(a instanceof Array || Array.isArray && Array.isArray(a))) || ("null" == b && null === a || b == typeof a && null !== a || "object" == b && a === Object(a) || J.call(a).slice(8, -1).toLowerCase() == b)
          }
  
          function f(a) {
            if ("function" == typeof a || Object(a) !== a) return a;
            var b = new a.constructor;
            for (var c in a) a[z](c) && (b[c] = f(a[c]));
            return b
          }
  
          function h(a, b) {
            for (var c = 0, d = a.length; c < d; c++)
              if (a[c] === b) return a.push(a.splice(c, 1)[0])
          }
  
          function i(a, b, c) {
            function d() {
              var e = Array.prototype.slice.call(arguments, 0),
                f = e.join("␀"),
                g = d.cache = d.cache || {},
                i = d.count = d.count || [];
              return g[z](f) ? (h(i, f), c ? c(g[f]) : g[f]) : (i.length >= 1e3 && delete g[i.shift()], i.push(f), g[f] = a.apply(b, e), c ? c(g[f]) : g[f])
            }
            return d
          }
  
          function j(a, b, c, d, e, f) {
            if (null == e) {
              var g = a - c,
                h = b - d;
              return g || h ? (180 + 180 * D.atan2(-h, -g) / H + 360) % 360 : 0
            }
            return j(a, b, e, f) - j(c, d, e, f)
          }
  
          function k(a) {
            return a % 360 * H / 180
          }
  
          function l(a) {
            return 180 * a / H % 360
          }
  
          function m(a) {
            var b = [];
            return a = a.replace(/(?:^|\s)(\w+)\(([^)]+)\)/g, function(a, c, d) {
              return d = d.split(/\s*,\s*|\s+/), "rotate" == c && 1 == d.length && d.push(0, 0), "scale" == c && (d.length > 2 ? d = d.slice(0, 2) : 2 == d.length && d.push(0, 0), 1 == d.length && d.push(d[0], 0, 0)), "skewX" == c ? b.push(["m", 1, 0, D.tan(k(d[0])), 1, 0, 0]) : "skewY" == c ? b.push(["m", 1, D.tan(k(d[0])), 0, 1, 0, 0]) : b.push([c.charAt(0)].concat(d)), a
            }), b
          }
  
          function n(a, b) {
            var d = aa(a),
              e = new c.Matrix;
            if (d)
              for (var f = 0, g = d.length; f < g; f++) {
                var h, i, j, k, l, m = d[f],
                  n = m.length,
                  o = A(m[0]).toLowerCase(),
                  p = m[0] != o,
                  q = p ? e.invert() : 0;
                "t" == o && 2 == n ? e.translate(m[1], 0) : "t" == o && 3 == n ? p ? (h = q.x(0, 0), i = q.y(0, 0), j = q.x(m[1], m[2]), k = q.y(m[1], m[2]), e.translate(j - h, k - i)) : e.translate(m[1], m[2]) : "r" == o ? 2 == n ? (l = l || b, e.rotate(m[1], l.x + l.width / 2, l.y + l.height / 2)) : 4 == n && (p ? (j = q.x(m[2], m[3]), k = q.y(m[2], m[3]), e.rotate(m[1], j, k)) : e.rotate(m[1], m[2], m[3])) : "s" == o ? 2 == n || 3 == n ? (l = l || b, e.scale(m[1], m[n - 1], l.x + l.width / 2, l.y + l.height / 2)) : 4 == n ? p ? (j = q.x(m[2], m[3]), k = q.y(m[2], m[3]), e.scale(m[1], m[1], j, k)) : e.scale(m[1], m[1], m[2], m[3]) : 5 == n && (p ? (j = q.x(m[3], m[4]), k = q.y(m[3], m[4]), e.scale(m[1], m[2], j, k)) : e.scale(m[1], m[2], m[3], m[4])) : "m" == o && 7 == n && e.add(m[1], m[2], m[3], m[4], m[5], m[6])
              }
            return e
          }
  
          function o(a) {
            var b = a.node.ownerSVGElement && w(a.node.ownerSVGElement) || a.node.parentNode && w(a.node.parentNode) || c.select("svg") || c(0, 0),
              d = b.select("defs"),
              e = null != d && d.node;
            return e || (e = u("defs", b.node).node), e
          }
  
          function p(a) {
            return a.node.ownerSVGElement && w(a.node.ownerSVGElement) || c.select("svg")
          }
  
          function q(a, b, c) {
            function e(a) {
              if (null == a) return I;
              if (a == +a) return a;
              d(j, {
                width: a
              });
              try {
                return j.getBBox().width
              } catch (a) {
                return 0
              }
            }
  
            function f(a) {
              if (null == a) return I;
              if (a == +a) return a;
              d(j, {
                height: a
              });
              try {
                return j.getBBox().height
              } catch (a) {
                return 0
              }
            }
  
            function g(d, e) {
              null == b ? i[d] = e(a.attr(d) || 0) : d == b && (i = e(null == c ? a.attr(d) || 0 : c))
            }
            var h = p(a).node,
              i = {},
              j = h.querySelector(".svg---mgr");
            switch (j || (j = d("rect"), d(j, {
              x: -9e9,
              y: -9e9,
              width: 10,
              height: 10,
              class: "svg---mgr",
              fill: "none"
            }), h.appendChild(j)), a.type) {
              case "rect":
                g("rx", e), g("ry", f);
              case "image":
                g("width", e), g("height", f);
              case "text":
                g("x", e), g("y", f);
                break;
              case "circle":
                g("cx", e), g("cy", f), g("r", e);
                break;
              case "ellipse":
                g("cx", e), g("cy", f), g("rx", e), g("ry", f);
                break;
              case "line":
                g("x1", e), g("x2", e), g("y1", f), g("y2", f);
                break;
              case "marker":
                g("refX", e), g("markerWidth", e), g("refY", f), g("markerHeight", f);
                break;
              case "radialGradient":
                g("fx", e), g("fy", f);
                break;
              case "tspan":
                g("dx", e), g("dy", f);
                break;
              default:
                g(b, e)
            }
            return h.removeChild(j), i
          }
  
          function r(a) {
            e(a, "array") || (a = Array.prototype.slice.call(arguments, 0));
            for (var b = 0, c = 0, d = this.node; this[b];) delete this[b++];
            for (b = 0; b < a.length; b++) "set" == a[b].type ? a[b].forEach(function(a) {
              d.appendChild(a.node)
            }) : d.appendChild(a[b].node);
            var f = d.childNodes;
            for (b = 0; b < f.length; b++) this[c++] = w(f[b]);
            return this
          }
  
          function s(a) {
            if (a.snap in V) return V[a.snap];
            var b;
            try {
              b = a.ownerSVGElement
            } catch (a) {}
            this.node = a, b && (this.paper = new v(b)), this.type = a.tagName || a.nodeName;
            var c = this.id = S(this);
            if (this.anims = {}, this._ = {
                transform: []
              }, a.snap = c, V[c] = this, "g" == this.type && (this.add = r), this.type in {
                g: 1,
                mask: 1,
                pattern: 1,
                symbol: 1
              })
              for (var d in v.prototype) v.prototype[z](d) && (this[d] = v.prototype[d])
          }
  
          function t(a) {
            this.node = a
          }
  
          function u(a, b) {
            var c = d(a);
            b.appendChild(c);
            var e = w(c);
            return e
          }
  
          function v(a, b) {
            var c, e, f, g = v.prototype;
            if (a && "svg" == a.tagName) {
              if (a.snap in V) return V[a.snap];
              var h = a.ownerDocument;
              c = new s(a), e = a.getElementsByTagName("desc")[0], f = a.getElementsByTagName("defs")[0], e || (e = d("desc"), e.appendChild(h.createTextNode("Created with Snap")), c.node.appendChild(e)), f || (f = d("defs"), c.node.appendChild(f)), c.defs = f;
              for (var i in g) g[z](i) && (c[i] = g[i]);
              c.paper = c.root = c
            } else c = u("svg", y.doc.body), d(c.node, {
              height: b,
              version: 1.1,
              width: a,
              xmlns: U
            });
            return c
          }
  
          function w(a) {
            return a ? a instanceof s || a instanceof t ? a : a.tagName && "svg" == a.tagName.toLowerCase() ? new v(a) : a.tagName && "object" == a.tagName.toLowerCase() && "image/svg+xml" == a.type ? new v(a.contentDocument.getElementsByTagName("svg")[0]) : new s(a) : a;
          }
  
          function x(a, b) {
            for (var c = 0, d = a.length; c < d; c++) {
              var e = {
                  type: a[c].type,
                  attr: a[c].attr()
                },
                f = a[c].children();
              b.push(e), f.length && x(f, e.childNodes = [])
            }
          }
          c.version = "0.4.0", c.toString = function() {
            return "Snap v" + this.version
          }, c._ = {};
          var y = {
            win: a.window,
            doc: a.window.document
          };
          c._.glob = y;
          var z = "hasOwnProperty",
            A = String,
            B = parseFloat,
            C = parseInt,
            D = Math,
            E = D.max,
            F = D.min,
            G = D.abs,
            H = (D.pow, D.PI),
            I = (D.round, ""),
            J = Object.prototype.toString,
            K = /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\))\s*$/i,
            L = (c._.separator = /[,\s]+/, /[\s]*,[\s]*/),
            M = {
              hs: 1,
              rg: 1
            },
            N = /([a-z])[\s,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\s]*,?[\s]*)+)/gi,
            O = /([rstm])[\s,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\s]*,?[\s]*)+)/gi,
            P = /(-?\d*\.?\d*(?:e[\-+]?\\d+)?)[\s]*,?[\s]*/gi,
            Q = 0,
            R = "S" + (+new Date).toString(36),
            S = function(a) {
              return (a && a.type ? a.type : I) + R + (Q++).toString(36)
            },
            T = "http://www.w3.org/1999/xlink",
            U = "http://www.w3.org/2000/svg",
            V = {};
          c.url = function(a) {
            return "url('#" + a + "')"
          };
          c._.$ = d, c._.id = S, c.format = function() {
            var a = /\{([^\}]+)\}/g,
              b = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,
              c = function(a, c, d) {
                var e = d;
                return c.replace(b, function(a, b, c, d, f) {
                  b = b || d, e && (b in e && (e = e[b]), "function" == typeof e && f && (e = e()))
                }), e = (null == e || e == d ? a : e) + ""
              };
            return function(b, d) {
              return A(b).replace(a, function(a, b) {
                return c(a, b, d)
              })
            }
          }(), c._.clone = f, c._.cacher = i, c.rad = k, c.deg = l, c.sin = function(a) {
            return D.sin(c.rad(a))
          }, c.tan = function(a) {
            return D.tan(c.rad(a))
          }, c.cos = function(a) {
            return D.cos(c.rad(a))
          }, c.asin = function(a) {
            return c.deg(D.asin(a))
          }, c.acos = function(a) {
            return c.deg(D.acos(a))
          }, c.atan = function(a) {
            return c.deg(D.atan(a))
          }, c.atan2 = function(a) {
            return c.deg(D.atan2(a))
          }, c.angle = j, c.len = function(a, b, d, e) {
            return Math.sqrt(c.len2(a, b, d, e))
          }, c.len2 = function(a, b, c, d) {
            return (a - c) * (a - c) + (b - d) * (b - d)
          }, c.closestPoint = function(a, b, c) {
            function d(a) {
              var d = a.x - b,
                e = a.y - c;
              return d * d + e * e
            }
            for (var e, f, g, h, i = a.node, j = i.getTotalLength(), k = j / i.pathSegList.numberOfItems * .125, l = 1 / 0, m = 0; m <= j; m += k)(h = d(g = i.getPointAtLength(m))) < l && (e = g, f = m, l = h);
            for (k *= .5; k > .5;) {
              var n, o, p, q, r, s;
              (p = f - k) >= 0 && (r = d(n = i.getPointAtLength(p))) < l ? (e = n, f = p, l = r) : (q = f + k) <= j && (s = d(o = i.getPointAtLength(q))) < l ? (e = o, f = q, l = s) : k *= .5
            }
            return e = {
              x: e.x,
              y: e.y,
              length: f,
              distance: Math.sqrt(l)
            }
          }, c.is = e, c.snapTo = function(a, b, c) {
            if (c = e(c, "finite") ? c : 10, e(a, "array")) {
              for (var d = a.length; d--;)
                if (G(a[d] - b) <= c) return a[d]
            } else {
              a = +a;
              var f = b % a;
              if (f < c) return b - f;
              if (f > a - c) return b - f + a
            }
            return b
          }, c.getRGB = i(function(a) {
            if (!a || (a = A(a)).indexOf("-") + 1) return {
              r: -1,
              g: -1,
              b: -1,
              hex: "none",
              error: 1,
              toString: Z
            };
            if ("none" == a) return {
              r: -1,
              g: -1,
              b: -1,
              hex: "none",
              toString: Z
            };
            if (!(M[z](a.toLowerCase().substring(0, 2)) || "#" == a.charAt()) && (a = W(a)), !a) return {
              r: -1,
              g: -1,
              b: -1,
              hex: "none",
              error: 1,
              toString: Z
            };
            var b, d, f, g, h, i, j = a.match(K);
            return j ? (j[2] && (f = C(j[2].substring(5), 16), d = C(j[2].substring(3, 5), 16), b = C(j[2].substring(1, 3), 16)), j[3] && (f = C((h = j[3].charAt(3)) + h, 16), d = C((h = j[3].charAt(2)) + h, 16), b = C((h = j[3].charAt(1)) + h, 16)), j[4] && (i = j[4].split(L), b = B(i[0]), "%" == i[0].slice(-1) && (b *= 2.55), d = B(i[1]), "%" == i[1].slice(-1) && (d *= 2.55), f = B(i[2]), "%" == i[2].slice(-1) && (f *= 2.55), "rgba" == j[1].toLowerCase().slice(0, 4) && (g = B(i[3])), i[3] && "%" == i[3].slice(-1) && (g /= 100)), j[5] ? (i = j[5].split(L), b = B(i[0]), "%" == i[0].slice(-1) && (b /= 100), d = B(i[1]), "%" == i[1].slice(-1) && (d /= 100), f = B(i[2]), "%" == i[2].slice(-1) && (f /= 100), ("deg" == i[0].slice(-3) || "°" == i[0].slice(-1)) && (b /= 360), "hsba" == j[1].toLowerCase().slice(0, 4) && (g = B(i[3])), i[3] && "%" == i[3].slice(-1) && (g /= 100), c.hsb2rgb(b, d, f, g)) : j[6] ? (i = j[6].split(L), b = B(i[0]), "%" == i[0].slice(-1) && (b /= 100), d = B(i[1]), "%" == i[1].slice(-1) && (d /= 100), f = B(i[2]), "%" == i[2].slice(-1) && (f /= 100), ("deg" == i[0].slice(-3) || "°" == i[0].slice(-1)) && (b /= 360), "hsla" == j[1].toLowerCase().slice(0, 4) && (g = B(i[3])), i[3] && "%" == i[3].slice(-1) && (g /= 100), c.hsl2rgb(b, d, f, g)) : (b = F(D.round(b), 255), d = F(D.round(d), 255), f = F(D.round(f), 255), g = F(E(g, 0), 1), j = {
              r: b,
              g: d,
              b: f,
              toString: Z
            }, j.hex = "#" + (16777216 | f | d << 8 | b << 16).toString(16).slice(1), j.opacity = e(g, "finite") ? g : 1, j)) : {
              r: -1,
              g: -1,
              b: -1,
              hex: "none",
              error: 1,
              toString: Z
            }
          }, c), c.hsb = i(function(a, b, d) {
            return c.hsb2rgb(a, b, d).hex
          }), c.hsl = i(function(a, b, d) {
            return c.hsl2rgb(a, b, d).hex
          }), c.rgb = i(function(a, b, c, d) {
            if (e(d, "finite")) {
              var f = D.round;
              return "rgba(" + [f(a), f(b), f(c), +d.toFixed(2)] + ")"
            }
            return "#" + (16777216 | c | b << 8 | a << 16).toString(16).slice(1)
          });
          var W = function(a) {
              var b = y.doc.getElementsByTagName("head")[0] || y.doc.getElementsByTagName("svg")[0],
                c = "rgb(255, 0, 0)";
              return (W = i(function(a) {
                if ("red" == a.toLowerCase()) return c;
                b.style.color = c, b.style.color = a;
                var d = y.doc.defaultView.getComputedStyle(b, I).getPropertyValue("color");
                return d == c ? null : d
              }))(a)
            },
            X = function() {
              return "hsb(" + [this.h, this.s, this.b] + ")"
            },
            Y = function() {
              return "hsl(" + [this.h, this.s, this.l] + ")"
            },
            Z = function() {
              return 1 == this.opacity || null == this.opacity ? this.hex : "rgba(" + [this.r, this.g, this.b, this.opacity] + ")"
            },
            $ = function(a, b, d) {
              if (null == b && e(a, "object") && "r" in a && "g" in a && "b" in a && (d = a.b, b = a.g, a = a.r), null == b && e(a, string)) {
                var f = c.getRGB(a);
                a = f.r, b = f.g, d = f.b
              }
              return (a > 1 || b > 1 || d > 1) && (a /= 255, b /= 255, d /= 255), [a, b, d]
            },
            _ = function(a, b, d, f) {
              a = D.round(255 * a), b = D.round(255 * b), d = D.round(255 * d);
              var g = {
                r: a,
                g: b,
                b: d,
                opacity: e(f, "finite") ? f : 1,
                hex: c.rgb(a, b, d),
                toString: Z
              };
              return e(f, "finite") && (g.opacity = f), g
            };
          c.color = function(a) {
            var b;
            return e(a, "object") && "h" in a && "s" in a && "b" in a ? (b = c.hsb2rgb(a), a.r = b.r, a.g = b.g, a.b = b.b, a.opacity = 1, a.hex = b.hex) : e(a, "object") && "h" in a && "s" in a && "l" in a ? (b = c.hsl2rgb(a), a.r = b.r, a.g = b.g, a.b = b.b, a.opacity = 1, a.hex = b.hex) : (e(a, "string") && (a = c.getRGB(a)), e(a, "object") && "r" in a && "g" in a && "b" in a && !("error" in a) ? (b = c.rgb2hsl(a), a.h = b.h, a.s = b.s, a.l = b.l, b = c.rgb2hsb(a), a.v = b.b) : (a = {
              hex: "none"
            }, a.r = a.g = a.b = a.h = a.s = a.v = a.l = -1, a.error = 1)), a.toString = Z, a
          }, c.hsb2rgb = function(a, b, c, d) {
            e(a, "object") && "h" in a && "s" in a && "b" in a && (c = a.b, b = a.s, d = a.o, a = a.h), a *= 360;
            var f, g, h, i, j;
            return a = a % 360 / 60, j = c * b, i = j * (1 - G(a % 2 - 1)), f = g = h = c - j, a = ~~a, f += [j, i, 0, 0, i, j][a], g += [i, j, j, i, 0, 0][a], h += [0, 0, i, j, j, i][a], _(f, g, h, d)
          }, c.hsl2rgb = function(a, b, c, d) {
            e(a, "object") && "h" in a && "s" in a && "l" in a && (c = a.l, b = a.s, a = a.h), (a > 1 || b > 1 || c > 1) && (a /= 360, b /= 100, c /= 100), a *= 360;
            var f, g, h, i, j;
            return a = a % 360 / 60, j = 2 * b * (c < .5 ? c : 1 - c), i = j * (1 - G(a % 2 - 1)), f = g = h = c - j / 2, a = ~~a, f += [j, i, 0, 0, i, j][a], g += [i, j, j, i, 0, 0][a], h += [0, 0, i, j, j, i][a], _(f, g, h, d)
          }, c.rgb2hsb = function(a, b, c) {
            c = $(a, b, c), a = c[0], b = c[1], c = c[2];
            var d, e, f, g;
            return f = E(a, b, c), g = f - F(a, b, c), d = 0 == g ? null : f == a ? (b - c) / g : f == b ? (c - a) / g + 2 : (a - b) / g + 4, d = (d + 360) % 6 * 60 / 360, e = 0 == g ? 0 : g / f, {
              h: d,
              s: e,
              b: f,
              toString: X
            }
          }, c.rgb2hsl = function(a, b, c) {
            c = $(a, b, c), a = c[0], b = c[1], c = c[2];
            var d, e, f, g, h, i;
            return g = E(a, b, c), h = F(a, b, c), i = g - h, d = 0 == i ? null : g == a ? (b - c) / i : g == b ? (c - a) / i + 2 : (a - b) / i + 4, d = (d + 360) % 6 * 60 / 360, f = (g + h) / 2, e = 0 == i ? 0 : f < .5 ? i / (2 * f) : i / (2 - 2 * f), {
              h: d,
              s: e,
              l: f,
              toString: Y
            }
          }, c.parsePathString = function(a) {
            if (!a) return null;
            var b = c.path(a);
            if (b.arr) return c.path.clone(b.arr);
            var d = {
                a: 7,
                c: 6,
                o: 2,
                h: 1,
                l: 2,
                m: 2,
                r: 4,
                q: 4,
                s: 4,
                t: 2,
                v: 1,
                u: 3,
                z: 0
              },
              f = [];
            return e(a, "array") && e(a[0], "array") && (f = c.path.clone(a)), f.length || A(a).replace(N, function(a, b, c) {
              var e = [],
                g = b.toLowerCase();
              if (c.replace(P, function(a, b) {
                  b && e.push(+b)
                }), "m" == g && e.length > 2 && (f.push([b].concat(e.splice(0, 2))), g = "l", b = "m" == b ? "l" : "L"), "o" == g && 1 == e.length && f.push([b, e[0]]), "r" == g) f.push([b].concat(e));
              else
                for (; e.length >= d[g] && (f.push([b].concat(e.splice(0, d[g]))), d[g]););
            }), f.toString = c.path.toString, b.arr = c.path.clone(f), f
          };
          var aa = c.parseTransformString = function(a) {
            if (!a) return null;
            var b = [];
            return e(a, "array") && e(a[0], "array") && (b = c.path.clone(a)), b.length || A(a).replace(O, function(a, c, d) {
              var e = [];
              c.toLowerCase();
              d.replace(P, function(a, b) {
                b && e.push(+b)
              }), b.push([c].concat(e))
            }), b.toString = c.path.toString, b
          };
          c._.svgTransform2string = m, c._.rgTransform = /^[a-z][\s]*-?\.?\d/i, c._.transform2matrix = n, c._unit2px = q;
          y.doc.contains || y.doc.compareDocumentPosition ? function(a, b) {
            var c = 9 == a.nodeType ? a.documentElement : a,
              d = b && b.parentNode;
            return a == d || !(!d || 1 != d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
          } : function(a, b) {
            if (b)
              for (; b;)
                if (b = b.parentNode, b == a) return !0;
            return !1
          };
          c._.getSomeDefs = o, c._.getSomeSVG = p, c.select = function(a) {
            return a = A(a).replace(/([^\\]):/g, "$1\\:"), w(y.doc.querySelector(a))
          }, c.selectAll = function(a) {
            for (var b = y.doc.querySelectorAll(a), d = (c.set || Array)(), e = 0; e < b.length; e++) d.push(w(b[e]));
            return d
          }, setInterval(function() {
            for (var a in V)
              if (V[z](a)) {
                var b = V[a],
                  c = b.node;
                ("svg" != b.type && !c.ownerSVGElement || "svg" == b.type && (!c.parentNode || "ownerSVGElement" in c.parentNode && !c.ownerSVGElement)) && delete V[a]
              }
          }, 1e4), s.prototype.attr = function(a, c) {
            var d = this,
              f = d.node;
            if (!a) {
              if (1 != f.nodeType) return {
                text: f.nodeValue
              };
              for (var g = f.attributes, h = {}, i = 0, j = g.length; i < j; i++) h[g[i].nodeName] = g[i].nodeValue;
              return h
            }
            if (e(a, "string")) {
              if (!(arguments.length > 1)) return b("snap.util.getattr." + a, d).firstDefined();
              var k = {};
              k[a] = c, a = k
            }
            for (var l in a) a[z](l) && b("snap.util.attr." + l, d, a[l]);
            return d
          }, c.parse = function(a) {
            var b = y.doc.createDocumentFragment(),
              c = !0,
              d = y.doc.createElement("div");
            if (a = A(a), a.match(/^\s*<\s*svg(?:\s|>)/) || (a = "<svg>" + a + "</svg>", c = !1), d.innerHTML = a, a = d.getElementsByTagName("svg")[0])
              if (c) b = a;
              else
                for (; a.firstChild;) b.appendChild(a.firstChild);
            return new t(b)
          }, c.fragment = function() {
            for (var a = Array.prototype.slice.call(arguments, 0), b = y.doc.createDocumentFragment(), d = 0, e = a.length; d < e; d++) {
              var f = a[d];
              f.node && f.node.nodeType && b.appendChild(f.node), f.nodeType && b.appendChild(f), "string" == typeof f && b.appendChild(c.parse(f).node)
            }
            return new t(b)
          }, c._.make = u, c._.wrap = w, v.prototype.el = function(a, b) {
            var c = u(a, this.node);
            return b && c.attr(b), c
          }, s.prototype.children = function() {
            for (var a = [], b = this.node.childNodes, d = 0, e = b.length; d < e; d++) a[d] = c(b[d]);
            return a
          }, s.prototype.toJSON = function() {
            var a = [];
            return x([this], a), a[0]
          }, b.on("snap.util.getattr", function() {
            var a = b.nt();
            a = a.substring(a.lastIndexOf(".") + 1);
            var c = a.replace(/[A-Z]/g, function(a) {
              return "-" + a.toLowerCase()
            });
            return ba[z](c) ? this.node.ownerDocument.defaultView.getComputedStyle(this.node, null).getPropertyValue(c) : d(this.node, a)
          });
          var ba = {
            "alignment-baseline": 0,
            "baseline-shift": 0,
            clip: 0,
            "clip-path": 0,
            "clip-rule": 0,
            color: 0,
            "color-interpolation": 0,
            "color-interpolation-filters": 0,
            "color-profile": 0,
            "color-rendering": 0,
            cursor: 0,
            direction: 0,
            display: 0,
            "dominant-baseline": 0,
            "enable-background": 0,
            fill: 0,
            "fill-opacity": 0,
            "fill-rule": 0,
            filter: 0,
            "flood-color": 0,
            "flood-opacity": 0,
            font: 0,
            "font-family": 0,
            "font-size": 0,
            "font-size-adjust": 0,
            "font-stretch": 0,
            "font-style": 0,
            "font-variant": 0,
            "font-weight": 0,
            "glyph-orientation-horizontal": 0,
            "glyph-orientation-vertical": 0,
            "image-rendering": 0,
            kerning: 0,
            "letter-spacing": 0,
            "lighting-color": 0,
            marker: 0,
            "marker-end": 0,
            "marker-mid": 0,
            "marker-start": 0,
            mask: 0,
            opacity: 0,
            overflow: 0,
            "pointer-events": 0,
            "shape-rendering": 0,
            "stop-color": 0,
            "stop-opacity": 0,
            stroke: 0,
            "stroke-dasharray": 0,
            "stroke-dashoffset": 0,
            "stroke-linecap": 0,
            "stroke-linejoin": 0,
            "stroke-miterlimit": 0,
            "stroke-opacity": 0,
            "stroke-width": 0,
            "text-anchor": 0,
            "text-decoration": 0,
            "text-rendering": 0,
            "unicode-bidi": 0,
            visibility: 0,
            "word-spacing": 0,
            "writing-mode": 0
          };
          b.on("snap.util.attr", function(a) {
              var c = b.nt(),
                e = {};
              c = c.substring(c.lastIndexOf(".") + 1), e[c] = a;
              var f = c.replace(/-(\w)/gi, function(a, b) {
                  return b.toUpperCase()
                }),
                g = c.replace(/[A-Z]/g, function(a) {
                  return "-" + a.toLowerCase()
                });
              ba[z](g) ? this.node.style[f] = null == a ? I : a : d(this.node, e)
            }),
            function(a) {}(v.prototype), c.ajax = function(a, c, d, f) {
              var g = new XMLHttpRequest,
                h = S();
              if (g) {
                if (e(c, "function")) f = d, d = c, c = null;
                else if (e(c, "object")) {
                  var i = [];
                  for (var j in c) c.hasOwnProperty(j) && i.push(encodeURIComponent(j) + "=" + encodeURIComponent(c[j]));
                  c = i.join("&")
                }
                return g.open(c ? "POST" : "GET", a, !0), c && (g.setRequestHeader("X-Requested-With", "XMLHttpRequest"), g.setRequestHeader("Content-type", "application/x-www-form-urlencoded")), d && (b.once("snap.ajax." + h + ".0", d), b.once("snap.ajax." + h + ".200", d), b.once("snap.ajax." + h + ".304", d)), g.onreadystatechange = function() {
                  4 == g.readyState && b("snap.ajax." + h + "." + g.status, f, g)
                }, 4 == g.readyState ? g : (g.send(c), g)
              }
            }, c.load = function(a, b, d) {
              c.ajax(a, function(a) {
                var e = c.parse(a.responseText);
                d ? b.call(d, e) : b(e)
              })
            };
          var ca = function(a) {
            var b = a.getBoundingClientRect(),
              c = a.ownerDocument,
              d = c.body,
              e = c.documentElement,
              f = e.clientTop || d.clientTop || 0,
              h = e.clientLeft || d.clientLeft || 0,
              i = b.top + (g.win.pageYOffset || e.scrollTop || d.scrollTop) - f,
              j = b.left + (g.win.pageXOffset || e.scrollLeft || d.scrollLeft) - h;
            return {
              y: i,
              x: j
            }
          };
          return c.getElementByPoint = function(a, b) {
            var c = this,
              d = (c.canvas, y.doc.elementFromPoint(a, b));
            if (y.win.opera && "svg" == d.tagName) {
              var e = ca(d),
                f = d.createSVGRect();
              f.x = a - e.x, f.y = b - e.y, f.width = f.height = 1;
              var g = d.getIntersectionList(f, null);
              g.length && (d = g[g.length - 1])
            }
            return d ? w(d) : null
          }, c.plugin = function(a) {
            a(c, s, v, y, t)
          }, y.win.Snap = c, c
        }(a || this);
      return d.plugin(function(d, e, f, g, h) {
        function i(a, b) {
          if (null == b) {
            var c = !0;
            if (b = "linearGradient" == a.type || "radialGradient" == a.type ? a.node.getAttribute("gradientTransform") : "pattern" == a.type ? a.node.getAttribute("patternTransform") : a.node.getAttribute("transform"), !b) return new d.Matrix;
            b = d._.svgTransform2string(b)
          } else b = d._.rgTransform.test(b) ? o(b).replace(/\.{3}|\u2026/g, a._.transform || "") : d._.svgTransform2string(b), n(b, "array") && (b = d.path ? d.path.toString.call(b) : o(b)), a._.transform = b;
          var e = d._.transform2matrix(b, a.getBBox(1));
          return c ? e : void(a.matrix = e)
        }
  
        function j(a) {
          function b(a, b) {
            var c = q(a.node, b);
            c = c && c.match(f), c = c && c[2], c && "#" == c.charAt() && (c = c.substring(1), c && (h[c] = (h[c] || []).concat(function(c) {
              var d = {};
              d[b] = URL(c), q(a.node, d)
            })))
          }
  
          function c(a) {
            var b = q(a.node, "xlink:href");
            b && "#" == b.charAt() && (b = b.substring(1), b && (h[b] = (h[b] || []).concat(function(b) {
              a.attr("xlink:href", "#" + b)
            })))
          }
          for (var d, e = a.selectAll("*"), f = /^\s*url\(("|'|)(.*)\1\)\s*$/, g = [], h = {}, i = 0, j = e.length; i < j; i++) {
            d = e[i], b(d, "fill"), b(d, "stroke"), b(d, "filter"), b(d, "mask"), b(d, "clip-path"), c(d);
            var k = q(d.node, "id");
            k && (q(d.node, {
              id: d.id
            }), g.push({
              old: k,
              id: d.id
            }))
          }
          for (i = 0, j = g.length; i < j; i++) {
            var l = h[g[i].old];
            if (l)
              for (var m = 0, n = l.length; m < n; m++) l[m](g[i].id)
          }
        }
  
        function k(a, b, c) {
          return function(d) {
            var e = d.slice(a, b);
            return 1 == e.length && (e = e[0]), c ? c(e) : e
          }
        }
  
        function l(a) {
          return function() {
            var b = a ? "<" + this.type : "",
              c = this.node.attributes,
              d = this.node.childNodes;
            if (a)
              for (var e = 0, f = c.length; e < f; e++) b += " " + c[e].name + '="' + c[e].value.replace(/"/g, '\\"') + '"';
            if (d.length) {
              for (a && (b += ">"), e = 0, f = d.length; e < f; e++) 3 == d[e].nodeType ? b += d[e].nodeValue : 1 == d[e].nodeType && (b += u(d[e]).toString());
              a && (b += "</" + this.type + ">")
            } else a && (b += "/>");
            return b
          }
        }
        var m = e.prototype,
          n = d.is,
          o = String,
          p = d._unit2px,
          q = d._.$,
          r = d._.make,
          s = d._.getSomeDefs,
          t = "hasOwnProperty",
          u = d._.wrap;
        m.getBBox = function(a) {
          if (!d.Matrix || !d.path) return this.node.getBBox();
          var b = this,
            c = new d.Matrix;
          if (b.removed) return d._.box();
          for (;
            "use" == b.type;)
            if (a || (c = c.add(b.transform().localMatrix.translate(b.attr("x") || 0, b.attr("y") || 0))), b.original) b = b.original;
            else {
              var e = b.attr("xlink:href");
              b = b.original = b.node.ownerDocument.getElementById(e.substring(e.indexOf("#") + 1))
            }
          var f = b._,
            g = d.path.get[b.type] || d.path.get.deflt;
          try {
            return a ? (f.bboxwt = g ? d.path.getBBox(b.realPath = g(b)) : d._.box(b.node.getBBox()), d._.box(f.bboxwt)) : (b.realPath = g(b), b.matrix = b.transform().localMatrix, f.bbox = d.path.getBBox(d.path.map(b.realPath, c.add(b.matrix))), d._.box(f.bbox))
          } catch (a) {
            return d._.box()
          }
        };
        var v = function() {
          return this.string
        };
        m.transform = function(a) {
          var b = this._;
          if (null == a) {
            for (var c, e = this, f = new d.Matrix(this.node.getCTM()), g = i(this), h = [g], j = new d.Matrix, k = g.toTransformString(), l = o(g) == o(this.matrix) ? o(b.transform) : k;
              "svg" != e.type && (e = e.parent());) h.push(i(e));
            for (c = h.length; c--;) j.add(h[c]);
            return {
              string: l,
              globalMatrix: f,
              totalMatrix: j,
              localMatrix: g,
              diffMatrix: f.clone().add(g.invert()),
              global: f.toTransformString(),
              total: j.toTransformString(),
              local: k,
              toString: v
            }
          }
          return a instanceof d.Matrix ? (this.matrix = a, this._.transform = a.toTransformString()) : i(this, a), this.node && ("linearGradient" == this.type || "radialGradient" == this.type ? q(this.node, {
            gradientTransform: this.matrix
          }) : "pattern" == this.type ? q(this.node, {
            patternTransform: this.matrix
          }) : q(this.node, {
            transform: this.matrix
          })), this
        }, m.parent = function() {
          return u(this.node.parentNode)
        }, m.append = m.add = function(a) {
          if (a) {
            if ("set" == a.type) {
              var b = this;
              return a.forEach(function(a) {
                b.add(a)
              }), this
            }
            a = u(a), this.node.appendChild(a.node), a.paper = this.paper
          }
          return this
        }, m.appendTo = function(a) {
          return a && (a = u(a), a.append(this)), this
        }, m.prepend = function(a) {
          if (a) {
            if ("set" == a.type) {
              var b, c = this;
              return a.forEach(function(a) {
                b ? b.after(a) : c.prepend(a), b = a
              }), this
            }
            a = u(a);
            var d = a.parent();
            this.node.insertBefore(a.node, this.node.firstChild), this.add && this.add(), a.paper = this.paper, this.parent() && this.parent().add(), d && d.add()
          }
          return this
        }, m.prependTo = function(a) {
          return a = u(a), a.prepend(this), this
        }, m.before = function(a) {
          if ("set" == a.type) {
            var b = this;
            return a.forEach(function(a) {
              var c = a.parent();
              b.node.parentNode.insertBefore(a.node, b.node), c && c.add()
            }), this.parent().add(), this
          }
          a = u(a);
          var c = a.parent();
          return this.node.parentNode.insertBefore(a.node, this.node), this.parent() && this.parent().add(), c && c.add(), a.paper = this.paper, this
        }, m.after = function(a) {
          a = u(a);
          var b = a.parent();
          return this.node.nextSibling ? this.node.parentNode.insertBefore(a.node, this.node.nextSibling) : this.node.parentNode.appendChild(a.node), this.parent() && this.parent().add(), b && b.add(), a.paper = this.paper, this
        }, m.insertBefore = function(a) {
          a = u(a);
          var b = this.parent();
          return a.node.parentNode.insertBefore(this.node, a.node), this.paper = a.paper, b && b.add(), a.parent() && a.parent().add(), this
        }, m.insertAfter = function(a) {
          a = u(a);
          var b = this.parent();
          return a.node.parentNode.insertBefore(this.node, a.node.nextSibling), this.paper = a.paper, b && b.add(), a.parent() && a.parent().add(), this
        }, m.remove = function() {
          var a = this.parent();
          return this.node.parentNode && this.node.parentNode.removeChild(this.node), delete this.paper, this.removed = !0, a && a.add(), this
        }, m.select = function(a) {
          return u(this.node.querySelector(a))
        }, m.selectAll = function(a) {
          for (var b = this.node.querySelectorAll(a), c = (d.set || Array)(), e = 0; e < b.length; e++) c.push(u(b[e]));
          return c
        }, m.asPX = function(a, b) {
          return null == b && (b = this.attr(a)), +p(this, a, b)
        }, m.use = function() {
          var a, b = this.node.id;
          return b || (b = this.id, q(this.node, {
            id: b
          })), a = "linearGradient" == this.type || "radialGradient" == this.type || "pattern" == this.type ? r(this.type, this.node.parentNode) : r("use", this.node.parentNode), q(a.node, {
            "xlink:href": "#" + b
          }), a.original = this, a
        }, m.clone = function() {
          var a = u(this.node.cloneNode(!0));
          return q(a.node, "id") && q(a.node, {
            id: a.id
          }), j(a), a.insertAfter(this), a
        }, m.toDefs = function() {
          var a = s(this);
          return a.appendChild(this.node), this
        }, m.pattern = m.toPattern = function(a, b, c, d) {
          var e = r("pattern", s(this));
          return null == a && (a = this.getBBox()), n(a, "object") && "x" in a && (b = a.y, c = a.width, d = a.height, a = a.x), q(e.node, {
            x: a,
            y: b,
            width: c,
            height: d,
            patternUnits: "userSpaceOnUse",
            id: e.id,
            viewBox: [a, b, c, d].join(" ")
          }), e.node.appendChild(this.node), e
        }, m.marker = function(a, b, c, d, e, f) {
          var g = r("marker", s(this));
          return null == a && (a = this.getBBox()), n(a, "object") && "x" in a && (b = a.y, c = a.width, d = a.height, e = a.refX || a.cx, f = a.refY || a.cy, a = a.x), q(g.node, {
            viewBox: [a, b, c, d].join(" "),
            markerWidth: c,
            markerHeight: d,
            orient: "auto",
            refX: e || 0,
            refY: f || 0,
            id: g.id
          }), g.node.appendChild(this.node), g
        };
        var w = function(a, b, d, e) {
          "function" != typeof d || d.length || (e = d, d = c.linear), this.attr = a, this.dur = b, d && (this.easing = d), e && (this.callback = e)
        };
        d._.Animation = w, d.animation = function(a, b, c, d) {
          return new w(a, b, c, d)
        }, m.inAnim = function() {
          var a = this,
            b = [];
          for (var c in a.anims) a.anims[t](c) && ! function(a) {
            b.push({
              anim: new w(a._attrs, a.dur, a.easing, a._callback),
              mina: a,
              curStatus: a.status(),
              status: function(b) {
                return a.status(b)
              },
              stop: function() {
                a.stop()
              }
            })
          }(a.anims[c]);
          return b
        }, d.animate = function(a, d, e, f, g, h) {
          "function" != typeof g || g.length || (h = g, g = c.linear);
          var i = c.time(),
            j = c(a, d, i, i + f, c.time, e, g);
          return h && b.once("mina.finish." + j.id, h), j
        }, m.stop = function() {
          for (var a = this.inAnim(), b = 0, c = a.length; b < c; b++) a[b].stop();
          return this
        }, m.animate = function(a, d, e, f) {
          "function" != typeof e || e.length || (f = e, e = c.linear), a instanceof w && (f = a.callback, e = a.easing, d = a.dur, a = a.attr);
          var g, h, i, j, l = [],
            m = [],
            p = {},
            q = this;
          for (var r in a)
            if (a[t](r)) {
              q.equal ? (j = q.equal(r, o(a[r])), g = j.from, h = j.to, i = j.f) : (g = +q.attr(r), h = +a[r]);
              var s = n(g, "array") ? g.length : 1;
              p[r] = k(l.length, l.length + s, i), l = l.concat(g), m = m.concat(h)
            }
          var u = c.time(),
            v = c(l, m, u, u + d, c.time, function(a) {
              var b = {};
              for (var c in p) p[t](c) && (b[c] = p[c](a));
              q.attr(b)
            }, e);
          return q.anims[v.id] = v, v._attrs = a, v._callback = f, b("snap.animcreated." + q.id, v), b.once("mina.finish." + v.id, function() {
            delete q.anims[v.id], f && f.call(q)
          }), b.once("mina.stop." + v.id, function() {
            delete q.anims[v.id]
          }), q
        };
        var x = {};
        m.data = function(a, c) {
          var e = x[this.id] = x[this.id] || {};
          if (0 == arguments.length) return b("snap.data.get." + this.id, this, e, null), e;
          if (1 == arguments.length) {
            if (d.is(a, "object")) {
              for (var f in a) a[t](f) && this.data(f, a[f]);
              return this
            }
            return b("snap.data.get." + this.id, this, e[a], a), e[a]
          }
          return e[a] = c, b("snap.data.set." + this.id, this, c, a), this
        }, m.removeData = function(a) {
          return null == a ? x[this.id] = {} : x[this.id] && delete x[this.id][a], this
        }, m.outerSVG = m.toString = l(1), m.innerSVG = l(), m.toDataURL = function() {
          if (a && a.btoa) {
            var b = this.getBBox(),
              c = d.format('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="{width}" height="{height}" viewBox="{x} {y} {width} {height}">{contents}</svg>', {
                x: +b.x.toFixed(3),
                y: +b.y.toFixed(3),
                width: +b.width.toFixed(3),
                height: +b.height.toFixed(3),
                contents: this.outerSVG()
              });
            return "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(c)))
          }
        }, h.prototype.select = m.select, h.prototype.selectAll = m.selectAll
      }), d.plugin(function(a, b, c, d, e) {
        function f(a, b, c, d, e, f) {
          return null == b && "[object SVGMatrix]" == g.call(a) ? (this.a = a.a, this.b = a.b, this.c = a.c, this.d = a.d, this.e = a.e, void(this.f = a.f)) : void(null != a ? (this.a = +a, this.b = +b, this.c = +c, this.d = +d, this.e = +e, this.f = +f) : (this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.e = 0, this.f = 0))
        }
        var g = Object.prototype.toString,
          h = String,
          i = Math,
          j = "";
        ! function(b) {
          function c(a) {
            return a[0] * a[0] + a[1] * a[1]
          }
  
          function d(a) {
            var b = i.sqrt(c(a));
            a[0] && (a[0] /= b), a[1] && (a[1] /= b)
          }
          b.add = function(a, b, c, d, e, g) {
            var h, i, j, k, l = [
                [],
                [],
                []
              ],
              m = [
                [this.a, this.c, this.e],
                [this.b, this.d, this.f],
                [0, 0, 1]
              ],
              n = [
                [a, c, e],
                [b, d, g],
                [0, 0, 1]
              ];
            for (a && a instanceof f && (n = [
                [a.a, a.c, a.e],
                [a.b, a.d, a.f],
                [0, 0, 1]
              ]), h = 0; h < 3; h++)
              for (i = 0; i < 3; i++) {
                for (k = 0, j = 0; j < 3; j++) k += m[h][j] * n[j][i];
                l[h][i] = k
              }
            return this.a = l[0][0], this.b = l[1][0], this.c = l[0][1], this.d = l[1][1], this.e = l[0][2], this.f = l[1][2], this
          }, b.invert = function() {
            var a = this,
              b = a.a * a.d - a.b * a.c;
            return new f(a.d / b, -a.b / b, -a.c / b, a.a / b, (a.c * a.f - a.d * a.e) / b, (a.b * a.e - a.a * a.f) / b)
          }, b.clone = function() {
            return new f(this.a, this.b, this.c, this.d, this.e, this.f)
          }, b.translate = function(a, b) {
            return this.add(1, 0, 0, 1, a, b)
          }, b.scale = function(a, b, c, d) {
            return null == b && (b = a), (c || d) && this.add(1, 0, 0, 1, c, d), this.add(a, 0, 0, b, 0, 0), (c || d) && this.add(1, 0, 0, 1, -c, -d), this
          }, b.rotate = function(b, c, d) {
            b = a.rad(b), c = c || 0, d = d || 0;
            var e = +i.cos(b).toFixed(9),
              f = +i.sin(b).toFixed(9);
            return this.add(e, f, -f, e, c, d), this.add(1, 0, 0, 1, -c, -d)
          }, b.x = function(a, b) {
            return a * this.a + b * this.c + this.e
          }, b.y = function(a, b) {
            return a * this.b + b * this.d + this.f
          }, b.get = function(a) {
            return +this[h.fromCharCode(97 + a)].toFixed(4)
          }, b.toString = function() {
            return "matrix(" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)].join() + ")"
          }, b.offset = function() {
            return [this.e.toFixed(4), this.f.toFixed(4)]
          }, b.determinant = function() {
            return this.a * this.d - this.b * this.c
          }, b.split = function() {
            var b = {};
            b.dx = this.e, b.dy = this.f;
            var e = [
              [this.a, this.c],
              [this.b, this.d]
            ];
            b.scalex = i.sqrt(c(e[0])), d(e[0]), b.shear = e[0][0] * e[1][0] + e[0][1] * e[1][1], e[1] = [e[1][0] - e[0][0] * b.shear, e[1][1] - e[0][1] * b.shear], b.scaley = i.sqrt(c(e[1])), d(e[1]), b.shear /= b.scaley, this.determinant() < 0 && (b.scalex = -b.scalex);
            var f = -e[0][1],
              g = e[1][1];
            return g < 0 ? (b.rotate = a.deg(i.acos(g)), f < 0 && (b.rotate = 360 - b.rotate)) : b.rotate = a.deg(i.asin(f)), b.isSimple = !(+b.shear.toFixed(9) || b.scalex.toFixed(9) != b.scaley.toFixed(9) && b.rotate), b.isSuperSimple = !+b.shear.toFixed(9) && b.scalex.toFixed(9) == b.scaley.toFixed(9) && !b.rotate, b.noRotation = !+b.shear.toFixed(9) && !b.rotate, b
          }, b.toTransformString = function(a) {
            var b = a || this.split();
            return +b.shear.toFixed(9) ? "m" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)] : (b.scalex = +b.scalex.toFixed(4), b.scaley = +b.scaley.toFixed(4), b.rotate = +b.rotate.toFixed(4), (b.dx || b.dy ? "t" + [+b.dx.toFixed(4), +b.dy.toFixed(4)] : j) + (1 != b.scalex || 1 != b.scaley ? "s" + [b.scalex, b.scaley, 0, 0] : j) + (b.rotate ? "r" + [+b.rotate.toFixed(4), 0, 0] : j))
          }
        }(f.prototype), a.Matrix = f, a.matrix = function(a, b, c, d, e, g) {
          return new f(a, b, c, d, e, g)
        }
      }), d.plugin(function(a, c, d, e, f) {
        function g(d) {
          return function(e) {
            if (b.stop(), e instanceof f && 1 == e.node.childNodes.length && ("radialGradient" == e.node.firstChild.tagName || "linearGradient" == e.node.firstChild.tagName || "pattern" == e.node.firstChild.tagName) && (e = e.node.firstChild, n(this).appendChild(e), e = l(e)), e instanceof c)
              if ("radialGradient" == e.type || "linearGradient" == e.type || "pattern" == e.type) {
                e.node.id || p(e.node, {
                  id: e.id
                });
                var g = q(e.node.id)
              } else g = e.attr(d);
            else if (g = a.color(e), g.error) {
              var h = a(n(this).ownerSVGElement).gradient(e);
              h ? (h.node.id || p(h.node, {
                id: h.id
              }), g = q(h.node.id)) : g = e
            } else g = r(g);
            var i = {};
            i[d] = g, p(this.node, i), this.node.style[d] = t
          }
        }
  
        function h(a) {
          b.stop(), a == +a && (a += "px"), this.node.style.fontSize = a
        }
  
        function i(a) {
          for (var b = [], c = a.childNodes, d = 0, e = c.length; d < e; d++) {
            var f = c[d];
            3 == f.nodeType && b.push(f.nodeValue), "tspan" == f.tagName && (1 == f.childNodes.length && 3 == f.firstChild.nodeType ? b.push(f.firstChild.nodeValue) : b.push(i(f)))
          }
          return b
        }
  
        function j() {
          return b.stop(), this.node.style.fontSize
        }
        var k = a._.make,
          l = a._.wrap,
          m = a.is,
          n = a._.getSomeDefs,
          o = /^url\(#?([^)]+)\)$/,
          p = a._.$,
          q = a.url,
          r = String,
          s = a._.separator,
          t = "";
        b.on("snap.util.attr.mask", function(a) {
            if (a instanceof c || a instanceof f) {
              if (b.stop(), a instanceof f && 1 == a.node.childNodes.length && (a = a.node.firstChild, n(this).appendChild(a), a = l(a)), "mask" == a.type) var d = a;
              else d = k("mask", n(this)), d.node.appendChild(a.node);
              !d.node.id && p(d.node, {
                id: d.id
              }), p(this.node, {
                mask: q(d.id)
              })
            }
          }),
          function(a) {
            b.on("snap.util.attr.clip", a), b.on("snap.util.attr.clip-path", a), b.on("snap.util.attr.clipPath", a)
          }(function(a) {
            if (a instanceof c || a instanceof f) {
              if (b.stop(), "clipPath" == a.type) var d = a;
              else d = k("clipPath", n(this)), d.node.appendChild(a.node), !d.node.id && p(d.node, {
                id: d.id
              });
              p(this.node, {
                "clip-path": q(d.node.id || d.id)
              })
            }
          }), b.on("snap.util.attr.fill", g("fill")), b.on("snap.util.attr.stroke", g("stroke"));
        var u = /^([lr])(?:\(([^)]*)\))?(.*)$/i;
        b.on("snap.util.grad.parse", function(a) {
            a = r(a);
            var b = a.match(u);
            if (!b) return null;
            var c = b[1],
              d = b[2],
              e = b[3];
            return d = d.split(/\s*,\s*/).map(function(a) {
              return +a == a ? +a : a
            }), 1 == d.length && 0 == d[0] && (d = []), e = e.split("-"), e = e.map(function(a) {
              a = a.split(":");
              var b = {
                color: a[0]
              };
              return a[1] && (b.offset = parseFloat(a[1])), b
            }), {
              type: c,
              params: d,
              stops: e
            }
          }), b.on("snap.util.attr.d", function(c) {
            b.stop(), m(c, "array") && m(c[0], "array") && (c = a.path.toString.call(c)), c = r(c), c.match(/[ruo]/i) && (c = a.path.toAbsolute(c)), p(this.node, {
              d: c
            })
          })(-1), b.on("snap.util.attr.#text", function(a) {
            b.stop(), a = r(a);
            for (var c = e.doc.createTextNode(a); this.node.firstChild;) this.node.removeChild(this.node.firstChild);
            this.node.appendChild(c)
          })(-1), b.on("snap.util.attr.path", function(a) {
            b.stop(), this.attr({
              d: a
            })
          })(-1), b.on("snap.util.attr.class", function(a) {
            b.stop(), this.node.className.baseVal = a
          })(-1), b.on("snap.util.attr.viewBox", function(a) {
            var c;
            c = m(a, "object") && "x" in a ? [a.x, a.y, a.width, a.height].join(" ") : m(a, "array") ? a.join(" ") : a, p(this.node, {
              viewBox: c
            }), b.stop()
          })(-1), b.on("snap.util.attr.transform", function(a) {
            this.transform(a), b.stop()
          })(-1), b.on("snap.util.attr.r", function(a) {
            "rect" == this.type && (b.stop(), p(this.node, {
              rx: a,
              ry: a
            }))
          })(-1), b.on("snap.util.attr.textpath", function(a) {
            if (b.stop(), "text" == this.type) {
              var d, e, f;
              if (!a && this.textPath) {
                for (e = this.textPath; e.node.firstChild;) this.node.appendChild(e.node.firstChild);
                return e.remove(), void delete this.textPath
              }
              if (m(a, "string")) {
                var g = n(this),
                  h = l(g.parentNode).path(a);
                g.appendChild(h.node), d = h.id, h.attr({
                  id: d
                })
              } else a = l(a), a instanceof c && (d = a.attr("id"), d || (d = a.id, a.attr({
                id: d
              })));
              if (d)
                if (e = this.textPath, f = this.node, e) e.attr({
                  "xlink:href": "#" + d
                });
                else {
                  for (e = p("textPath", {
                      "xlink:href": "#" + d
                    }); f.firstChild;) e.appendChild(f.firstChild);
                  f.appendChild(e), this.textPath = l(e)
                }
            }
          })(-1), b.on("snap.util.attr.text", function(a) {
            if ("text" == this.type) {
              for (var c = this.node, d = function(a) {
                  var b = p("tspan");
                  if (m(a, "array"))
                    for (var c = 0; c < a.length; c++) b.appendChild(d(a[c]));
                  else b.appendChild(e.doc.createTextNode(a));
                  return b.normalize && b.normalize(), b
                }; c.firstChild;) c.removeChild(c.firstChild);
              for (var f = d(a); f.firstChild;) c.appendChild(f.firstChild)
            }
            b.stop()
          })(-1), b.on("snap.util.attr.fontSize", h)(-1), b.on("snap.util.attr.font-size", h)(-1), b.on("snap.util.getattr.transform", function() {
            return b.stop(), this.transform()
          })(-1), b.on("snap.util.getattr.textpath", function() {
            return b.stop(), this.textPath
          })(-1),
          function() {
            function c(c) {
              return function() {
                b.stop();
                var d = e.doc.defaultView.getComputedStyle(this.node, null).getPropertyValue("marker-" + c);
                return "none" == d ? d : a(e.doc.getElementById(d.match(o)[1]))
              }
            }
  
            function d(a) {
              return function(c) {
                b.stop();
                var d = "marker" + a.charAt(0).toUpperCase() + a.substring(1);
                if ("" == c || !c) return void(this.node.style[d] = "none");
                if ("marker" == c.type) {
                  var e = c.node.id;
                  return e || p(c.node, {
                    id: c.id
                  }), void(this.node.style[d] = q(e))
                }
              }
            }
            b.on("snap.util.getattr.marker-end", c("end"))(-1), b.on("snap.util.getattr.markerEnd", c("end"))(-1), b.on("snap.util.getattr.marker-start", c("start"))(-1), b.on("snap.util.getattr.markerStart", c("start"))(-1), b.on("snap.util.getattr.marker-mid", c("mid"))(-1), b.on("snap.util.getattr.markerMid", c("mid"))(-1), b.on("snap.util.attr.marker-end", d("end"))(-1), b.on("snap.util.attr.markerEnd", d("end"))(-1), b.on("snap.util.attr.marker-start", d("start"))(-1), b.on("snap.util.attr.markerStart", d("start"))(-1), b.on("snap.util.attr.marker-mid", d("mid"))(-1), b.on("snap.util.attr.markerMid", d("mid"))(-1)
          }(), b.on("snap.util.getattr.r", function() {
            if ("rect" == this.type && p(this.node, "rx") == p(this.node, "ry")) return b.stop(), p(this.node, "rx")
          })(-1), b.on("snap.util.getattr.text", function() {
            if ("text" == this.type || "tspan" == this.type) {
              b.stop();
              var a = i(this.node);
              return 1 == a.length ? a[0] : a
            }
          })(-1), b.on("snap.util.getattr.#text", function() {
            return this.node.textContent
          })(-1), b.on("snap.util.getattr.viewBox", function() {
            b.stop();
            var c = p(this.node, "viewBox");
            return c ? (c = c.split(s), a._.box(+c[0], +c[1], +c[2], +c[3])) : void 0
          })(-1), b.on("snap.util.getattr.points", function() {
            var a = p(this.node, "points");
            return b.stop(), a ? a.split(s) : void 0
          })(-1), b.on("snap.util.getattr.path", function() {
            var a = p(this.node, "d");
            return b.stop(), a
          })(-1), b.on("snap.util.getattr.class", function() {
            return this.node.className.baseVal
          })(-1), b.on("snap.util.getattr.fontSize", j)(-1), b.on("snap.util.getattr.font-size", j)(-1)
      }), d.plugin(function(a, b, c, d, e) {
        var f = /\S+/g,
          g = String,
          h = b.prototype;
        h.addClass = function(a) {
          var b, c, d, e, h = g(a || "").match(f) || [],
            i = this.node,
            j = i.className.baseVal,
            k = j.match(f) || [];
          if (h.length) {
            for (b = 0; d = h[b++];) c = k.indexOf(d), ~c || k.push(d);
            e = k.join(" "), j != e && (i.className.baseVal = e)
          }
          return this
        }, h.removeClass = function(a) {
          var b, c, d, e, h = g(a || "").match(f) || [],
            i = this.node,
            j = i.className.baseVal,
            k = j.match(f) || [];
          if (k.length) {
            for (b = 0; d = h[b++];) c = k.indexOf(d), ~c && k.splice(c, 1);
            e = k.join(" "), j != e && (i.className.baseVal = e)
          }
          return this
        }, h.hasClass = function(a) {
          var b = this.node,
            c = b.className.baseVal,
            d = c.match(f) || [];
          return !!~d.indexOf(a)
        }, h.toggleClass = function(a, b) {
          if (null != b) return b ? this.addClass(a) : this.removeClass(a);
          var c, d, e, g, h = (a || "").match(f) || [],
            i = this.node,
            j = i.className.baseVal,
            k = j.match(f) || [];
          for (c = 0; e = h[c++];) d = k.indexOf(e), ~d ? k.splice(d, 1) : k.push(e);
          return g = k.join(" "), j != g && (i.className.baseVal = g), this
        }
      }), d.plugin(function(a, c, d, e, f) {
        function g(a) {
          return a
        }
  
        function h(a) {
          return function(b) {
            return +b.toFixed(3) + a
          }
        }
        var i = {
            "+": function(a, b) {
              return a + b
            },
            "-": function(a, b) {
              return a - b
            },
            "/": function(a, b) {
              return a / b
            },
            "*": function(a, b) {
              return a * b
            }
          },
          j = String,
          k = /[a-z]+$/i,
          l = /^\s*([+\-\/*])\s*=\s*([\d.eE+\-]+)\s*([^\d\s]+)?\s*$/;
        b.on("snap.util.attr", function(a) {
          var c = j(a).match(l);
          if (c) {
            var d = b.nt(),
              e = d.substring(d.lastIndexOf(".") + 1),
              f = this.attr(e),
              g = {};
            b.stop();
            var h = c[3] || "",
              m = f.match(k),
              n = i[c[1]];
            if (m && m == h ? a = n(parseFloat(f), +c[2]) : (f = this.asPX(e), a = n(this.asPX(e), this.asPX(e, c[2] + h))), isNaN(f) || isNaN(a)) return;
            g[e] = a, this.attr(g)
          }
        })(-10), b.on("snap.util.equal", function(a, c) {
          var d = j(this.attr(a) || ""),
            e = j(c).match(l);
          if (e) {
            b.stop();
            var f = e[3] || "",
              m = d.match(k),
              n = i[e[1]];
            return m && m == f ? {
              from: parseFloat(d),
              to: n(parseFloat(d), +e[2]),
              f: h(m)
            } : (d = this.asPX(a), {
              from: d,
              to: n(d, this.asPX(a, e[2] + f)),
              f: g
            })
          }
        })(-10)
      }), d.plugin(function(c, d, e, f, g) {
        var h = e.prototype,
          i = c.is;
        h.rect = function(a, b, c, d, e, f) {
          var g;
          return null == f && (f = e), i(a, "object") && "[object Object]" == a ? g = a : null != a && (g = {
            x: a,
            y: b,
            width: c,
            height: d
          }, null != e && (g.rx = e, g.ry = f)), this.el("rect", g)
        }, h.circle = function(a, b, c) {
          var d;
          return i(a, "object") && "[object Object]" == a ? d = a : null != a && (d = {
            cx: a,
            cy: b,
            r: c
          }), this.el("circle", d)
        };
        var j = function() {
          function a() {
            this.parentNode.removeChild(this)
          }
          return function(b, c) {
            var d = f.doc.createElement("img"),
              e = f.doc.body;
            d.style.cssText = "position:absolute;left:-9999em;top:-9999em", d.onload = function() {
              c.call(d), d.onload = d.onerror = null, e.removeChild(d)
            }, d.onerror = a, e.appendChild(d), d.src = b
          }
        }();
        h.image = function(a, b, d, e, f) {
            var g = this.el("image");
            if (i(a, "object") && "src" in a) g.attr(a);
            else if (null != a) {
              var h = {
                "xlink:href": a,
                preserveAspectRatio: "none"
              };
              null != b && null != d && (h.x = b, h.y = d), null != e && null != f ? (h.width = e, h.height = f) : j(a, function() {
                c._.$(g.node, {
                  width: this.offsetWidth,
                  height: this.offsetHeight
                })
              }), c._.$(g.node, h)
            }
            return g
          }, h.ellipse = function(a, b, c, d) {
            var e;
            return i(a, "object") && "[object Object]" == a ? e = a : null != a && (e = {
              cx: a,
              cy: b,
              rx: c,
              ry: d
            }), this.el("ellipse", e)
          }, h.path = function(a) {
            var b;
            return i(a, "object") && !i(a, "array") ? b = a : a && (b = {
              d: a
            }), this.el("path", b)
          }, h.group = h.g = function(a) {
            var b = this.el("g");
            return 1 == arguments.length && a && !a.type ? b.attr(a) : arguments.length && b.add(Array.prototype.slice.call(arguments, 0)), b
          }, h.svg = function(a, b, c, d, e, f, g, h) {
            var j = {};
            return i(a, "object") && null == b ? j = a : (null != a && (j.x = a), null != b && (j.y = b), null != c && (j.width = c), null != d && (j.height = d), null != e && null != f && null != g && null != h && (j.viewBox = [e, f, g, h])), this.el("svg", j)
          }, h.mask = function(a) {
            var b = this.el("mask");
            return 1 == arguments.length && a && !a.type ? b.attr(a) : arguments.length && b.add(Array.prototype.slice.call(arguments, 0)), b
          }, h.ptrn = function(a, b, c, d, e, f, g, h) {
            if (i(a, "object")) var j = a;
            else j = {
              patternUnits: "userSpaceOnUse"
            }, a && (j.x = a), b && (j.y = b), null != c && (j.width = c), null != d && (j.height = d), null != e && null != f && null != g && null != h ? j.viewBox = [e, f, g, h] : j.viewBox = [a || 0, b || 0, c || 0, d || 0];
            return this.el("pattern", j)
          }, h.use = function(a) {
            return null != a ? (a instanceof d && (a.attr("id") || a.attr({
              id: c._.id(a)
            }), a = a.attr("id")), "#" == String(a).charAt() && (a = a.substring(1)), this.el("use", {
              "xlink:href": "#" + a
            })) : d.prototype.use.call(this)
          }, h.symbol = function(a, b, c, d) {
            var e = {};
            return null != a && null != b && null != c && null != d && (e.viewBox = [a, b, c, d]), this.el("symbol", e)
          }, h.text = function(a, b, c) {
            var d = {};
            return i(a, "object") ? d = a : null != a && (d = {
              x: a,
              y: b,
              text: c || ""
            }), this.el("text", d)
          }, h.line = function(a, b, c, d) {
            var e = {};
            return i(a, "object") ? e = a : null != a && (e = {
              x1: a,
              x2: c,
              y1: b,
              y2: d
            }), this.el("line", e)
          }, h.polyline = function(a) {
            arguments.length > 1 && (a = Array.prototype.slice.call(arguments, 0));
            var b = {};
            return i(a, "object") && !i(a, "array") ? b = a : null != a && (b = {
              points: a
            }), this.el("polyline", b)
          }, h.polygon = function(a) {
            arguments.length > 1 && (a = Array.prototype.slice.call(arguments, 0));
            var b = {};
            return i(a, "object") && !i(a, "array") ? b = a : null != a && (b = {
              points: a
            }), this.el("polygon", b)
          },
          function() {
            function d() {
              return this.selectAll("stop")
            }
  
            function e(a, b) {
              var d = k("stop"),
                e = {
                  offset: +b + "%"
                };
              return a = c.color(a), e["stop-color"] = a.hex, a.opacity < 1 && (e["stop-opacity"] = a.opacity), k(d, e), this.node.appendChild(d), this
            }
  
            function f() {
              if ("linearGradient" == this.type) {
                var a = k(this.node, "x1") || 0,
                  b = k(this.node, "x2") || 1,
                  d = k(this.node, "y1") || 0,
                  e = k(this.node, "y2") || 0;
                return c._.box(a, d, math.abs(b - a), math.abs(e - d))
              }
              var f = this.node.cx || .5,
                g = this.node.cy || .5,
                h = this.node.r || 0;
              return c._.box(f - h, g - h, 2 * h, 2 * h)
            }
  
            function g(a, c) {
              function d(a, b) {
                for (var c = (b - l) / (a - m), d = m; d < a; d++) g[d].offset = +(+l + c * (d - m)).toFixed(2);
                m = a, l = b
              }
              var e, f = b("snap.util.grad.parse", null, c).firstDefined();
              if (!f) return null;
              f.params.unshift(a), e = "l" == f.type.toLowerCase() ? i.apply(0, f.params) : j.apply(0, f.params), f.type != f.type.toLowerCase() && k(e.node, {
                gradientUnits: "userSpaceOnUse"
              });
              var g = f.stops,
                h = g.length,
                l = 0,
                m = 0;
              h--;
              for (var n = 0; n < h; n++) "offset" in g[n] && d(n, g[n].offset);
              for (g[h].offset = g[h].offset || 100, d(h, g[h].offset), n = 0; n <= h; n++) {
                var o = g[n];
                e.addStop(o.color, o.offset)
              }
              return e
            }
  
            function i(a, b, g, h, i) {
              var j = c._.make("linearGradient", a);
              return j.stops = d, j.addStop = e, j.getBBox = f, null != b && k(j.node, {
                x1: b,
                y1: g,
                x2: h,
                y2: i
              }), j
            }
  
            function j(a, b, g, h, i, j) {
              var l = c._.make("radialGradient", a);
              return l.stops = d, l.addStop = e, l.getBBox = f, null != b && k(l.node, {
                cx: b,
                cy: g,
                r: h
              }), null != i && null != j && k(l.node, {
                fx: i,
                fy: j
              }), l
            }
            var k = c._.$;
            h.gradient = function(a) {
              return g(this.defs, a)
            }, h.gradientLinear = function(a, b, c, d) {
              return i(this.defs, a, b, c, d)
            }, h.gradientRadial = function(a, b, c, d, e) {
              return j(this.defs, a, b, c, d, e)
            }, h.toString = function() {
              var a, b = this.node.ownerDocument,
                d = b.createDocumentFragment(),
                e = b.createElement("div"),
                f = this.node.cloneNode(!0);
              return d.appendChild(e), e.appendChild(f), c._.$(f, {
                xmlns: "http://www.w3.org/2000/svg"
              }), a = e.innerHTML, d.removeChild(d.firstChild), a
            }, h.toDataURL = function() {
              if (a && a.btoa) return "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(this)))
            }, h.clear = function() {
              for (var a, b = this.node.firstChild; b;) a = b.nextSibling, "defs" != b.tagName ? b.parentNode.removeChild(b) : h.clear.call({
                node: b
              }), b = a
            }
          }()
      }), d.plugin(function(a, b, c, d) {
        function e(a) {
          var b = e.ps = e.ps || {};
          return b[a] ? b[a].sleep = 100 : b[a] = {
            sleep: 100
          }, setTimeout(function() {
            for (var c in b) b[M](c) && c != a && (b[c].sleep--, !b[c].sleep && delete b[c])
          }), b[a]
        }
  
        function f(a, b, c, d) {
          return null == a && (a = b = c = d = 0), null == b && (b = a.y, c = a.width, d = a.height, a = a.x), {
            x: a,
            y: b,
            width: c,
            w: c,
            height: d,
            h: d,
            x2: a + c,
            y2: b + d,
            cx: a + c / 2,
            cy: b + d / 2,
            r1: P.min(c, d) / 2,
            r2: P.max(c, d) / 2,
            r0: P.sqrt(c * c + d * d) / 2,
            path: y(a, b, c, d),
            vb: [a, b, c, d].join(" ")
          }
        }
  
        function g() {
          return this.join(",").replace(N, "$1")
        }
  
        function h(a) {
          var b = L(a);
          return b.toString = g, b
        }
  
        function i(a, b, c, d, e, f, g, h, i) {
          return null == i ? p(a, b, c, d, e, f, g, h) : k(a, b, c, d, e, f, g, h, q(a, b, c, d, e, f, g, h, i))
        }
  
        function j(c, d) {
          function e(a) {
            return +(+a).toFixed(3)
          }
          return a._.cacher(function(a, f, g) {
            a instanceof b && (a = a.attr("d")), a = G(a);
            for (var h, j, l, m, n, o = "", p = {}, q = 0, r = 0, s = a.length; r < s; r++) {
              if (l = a[r], "M" == l[0]) h = +l[1], j = +l[2];
              else {
                if (m = i(h, j, l[1], l[2], l[3], l[4], l[5], l[6]), q + m > f) {
                  if (d && !p.start) {
                    if (n = i(h, j, l[1], l[2], l[3], l[4], l[5], l[6], f - q), o += ["C" + e(n.start.x), e(n.start.y), e(n.m.x), e(n.m.y), e(n.x), e(n.y)], g) return o;
                    p.start = o, o = ["M" + e(n.x), e(n.y) + "C" + e(n.n.x), e(n.n.y), e(n.end.x), e(n.end.y), e(l[5]), e(l[6])].join(), q += m, h = +l[5], j = +l[6];
                    continue
                  }
                  if (!c && !d) return n = i(h, j, l[1], l[2], l[3], l[4], l[5], l[6], f - q)
                }
                q += m, h = +l[5], j = +l[6]
              }
              o += l.shift() + l
            }
            return p.end = o, n = c ? q : d ? p : k(h, j, l[0], l[1], l[2], l[3], l[4], l[5], 1)
          }, null, a._.clone)
        }
  
        function k(a, b, c, d, e, f, g, h, i) {
          var j = 1 - i,
            k = T(j, 3),
            l = T(j, 2),
            m = i * i,
            n = m * i,
            o = k * a + 3 * l * i * c + 3 * j * i * i * e + n * g,
            p = k * b + 3 * l * i * d + 3 * j * i * i * f + n * h,
            q = a + 2 * i * (c - a) + m * (e - 2 * c + a),
            r = b + 2 * i * (d - b) + m * (f - 2 * d + b),
            s = c + 2 * i * (e - c) + m * (g - 2 * e + c),
            t = d + 2 * i * (f - d) + m * (h - 2 * f + d),
            u = j * a + i * c,
            v = j * b + i * d,
            w = j * e + i * g,
            x = j * f + i * h,
            y = 90 - 180 * P.atan2(q - s, r - t) / Q;
          return {
            x: o,
            y: p,
            m: {
              x: q,
              y: r
            },
            n: {
              x: s,
              y: t
            },
            start: {
              x: u,
              y: v
            },
            end: {
              x: w,
              y: x
            },
            alpha: y
          }
        }
  
        function l(b, c, d, e, g, h, i, j) {
          a.is(b, "array") || (b = [b, c, d, e, g, h, i, j]);
          var k = F.apply(null, b);
          return f(k.min.x, k.min.y, k.max.x - k.min.x, k.max.y - k.min.y)
        }
  
        function m(a, b, c) {
          return b >= a.x && b <= a.x + a.width && c >= a.y && c <= a.y + a.height
        }
  
        function n(a, b) {
          return a = f(a), b = f(b), m(b, a.x, a.y) || m(b, a.x2, a.y) || m(b, a.x, a.y2) || m(b, a.x2, a.y2) || m(a, b.x, b.y) || m(a, b.x2, b.y) || m(a, b.x, b.y2) || m(a, b.x2, b.y2) || (a.x < b.x2 && a.x > b.x || b.x < a.x2 && b.x > a.x) && (a.y < b.y2 && a.y > b.y || b.y < a.y2 && b.y > a.y)
        }
  
        function o(a, b, c, d, e) {
          var f = -3 * b + 9 * c - 9 * d + 3 * e,
            g = a * f + 6 * b - 12 * c + 6 * d;
          return a * g - 3 * b + 3 * c
        }
  
        function p(a, b, c, d, e, f, g, h, i) {
          null == i && (i = 1), i = i > 1 ? 1 : i < 0 ? 0 : i;
          for (var j = i / 2, k = 12, l = [-.1252, .1252, -.3678, .3678, -.5873, .5873, -.7699, .7699, -.9041, .9041, -.9816, .9816], m = [.2491, .2491, .2335, .2335, .2032, .2032, .1601, .1601, .1069, .1069, .0472, .0472], n = 0, p = 0; p < k; p++) {
            var q = j * l[p] + j,
              r = o(q, a, c, e, g),
              s = o(q, b, d, f, h),
              t = r * r + s * s;
            n += m[p] * P.sqrt(t)
          }
          return j * n
        }
  
        function q(a, b, c, d, e, f, g, h, i) {
          if (!(i < 0 || p(a, b, c, d, e, f, g, h) < i)) {
            var j, k = 1,
              l = k / 2,
              m = k - l,
              n = .01;
            for (j = p(a, b, c, d, e, f, g, h, m); U(j - i) > n;) l /= 2, m += (j < i ? 1 : -1) * l, j = p(a, b, c, d, e, f, g, h, m);
            return m
          }
        }
  
        function r(a, b, c, d, e, f, g, h) {
          if (!(S(a, c) < R(e, g) || R(a, c) > S(e, g) || S(b, d) < R(f, h) || R(b, d) > S(f, h))) {
            var i = (a * d - b * c) * (e - g) - (a - c) * (e * h - f * g),
              j = (a * d - b * c) * (f - h) - (b - d) * (e * h - f * g),
              k = (a - c) * (f - h) - (b - d) * (e - g);
            if (k) {
              var l = i / k,
                m = j / k,
                n = +l.toFixed(2),
                o = +m.toFixed(2);
              if (!(n < +R(a, c).toFixed(2) || n > +S(a, c).toFixed(2) || n < +R(e, g).toFixed(2) || n > +S(e, g).toFixed(2) || o < +R(b, d).toFixed(2) || o > +S(b, d).toFixed(2) || o < +R(f, h).toFixed(2) || o > +S(f, h).toFixed(2))) return {
                x: l,
                y: m
              }
            }
          }
        }
  
        function s(a, b, c) {
          var d = l(a),
            e = l(b);
          if (!n(d, e)) return c ? 0 : [];
          for (var f = p.apply(0, a), g = p.apply(0, b), h = ~~(f / 8), i = ~~(g / 8), j = [], m = [], o = {}, q = c ? 0 : [], s = 0; s < h + 1; s++) {
            var t = k.apply(0, a.concat(s / h));
            j.push({
              x: t.x,
              y: t.y,
              t: s / h
            })
          }
          for (s = 0; s < i + 1; s++) t = k.apply(0, b.concat(s / i)), m.push({
            x: t.x,
            y: t.y,
            t: s / i
          });
          for (s = 0; s < h; s++)
            for (var u = 0; u < i; u++) {
              var v = j[s],
                w = j[s + 1],
                x = m[u],
                y = m[u + 1],
                z = U(w.x - v.x) < .001 ? "y" : "x",
                A = U(y.x - x.x) < .001 ? "y" : "x",
                B = r(v.x, v.y, w.x, w.y, x.x, x.y, y.x, y.y);
              if (B) {
                if (o[B.x.toFixed(4)] == B.y.toFixed(4)) continue;
                o[B.x.toFixed(4)] = B.y.toFixed(4);
                var C = v.t + U((B[z] - v[z]) / (w[z] - v[z])) * (w.t - v.t),
                  D = x.t + U((B[A] - x[A]) / (y[A] - x[A])) * (y.t - x.t);
                C >= 0 && C <= 1 && D >= 0 && D <= 1 && (c ? q++ : q.push({
                  x: B.x,
                  y: B.y,
                  t1: C,
                  t2: D
                }))
              }
            }
          return q
        }
  
        function t(a, b) {
          return v(a, b)
        }
  
        function u(a, b) {
          return v(a, b, 1)
        }
  
        function v(a, b, c) {
          a = G(a), b = G(b);
          for (var d, e, f, g, h, i, j, k, l, m, n = c ? 0 : [], o = 0, p = a.length; o < p; o++) {
            var q = a[o];
            if ("M" == q[0]) d = h = q[1], e = i = q[2];
            else {
              "C" == q[0] ? (l = [d, e].concat(q.slice(1)), d = l[6], e = l[7]) : (l = [d, e, d, e, h, i, h, i], d = h, e = i);
              for (var r = 0, t = b.length; r < t; r++) {
                var u = b[r];
                if ("M" == u[0]) f = j = u[1], g = k = u[2];
                else {
                  "C" == u[0] ? (m = [f, g].concat(u.slice(1)), f = m[6], g = m[7]) : (m = [f, g, f, g, j, k, j, k], f = j, g = k);
                  var v = s(l, m, c);
                  if (c) n += v;
                  else {
                    for (var w = 0, x = v.length; w < x; w++) v[w].segment1 = o, v[w].segment2 = r, v[w].bez1 = l, v[w].bez2 = m;
                    n = n.concat(v)
                  }
                }
              }
            }
          }
          return n
        }
  
        function w(a, b, c) {
          var d = x(a);
          return m(d, b, c) && v(a, [
            ["M", b, c],
            ["H", d.x2 + 10]
          ], 1) % 2 == 1
        }
  
        function x(a) {
          var b = e(a);
          if (b.bbox) return L(b.bbox);
          if (!a) return f();
          a = G(a);
          for (var c, d = 0, g = 0, h = [], i = [], j = 0, k = a.length; j < k; j++)
            if (c = a[j], "M" == c[0]) d = c[1], g = c[2], h.push(d), i.push(g);
            else {
              var l = F(d, g, c[1], c[2], c[3], c[4], c[5], c[6]);
              h = h.concat(l.min.x, l.max.x), i = i.concat(l.min.y, l.max.y), d = c[5], g = c[6]
            }
          var m = R.apply(0, h),
            n = R.apply(0, i),
            o = S.apply(0, h),
            p = S.apply(0, i),
            q = f(m, n, o - m, p - n);
          return b.bbox = L(q), q
        }
  
        function y(a, b, c, d, e) {
          if (e) return [
            ["M", +a + +e, b],
            ["l", c - 2 * e, 0],
            ["a", e, e, 0, 0, 1, e, e],
            ["l", 0, d - 2 * e],
            ["a", e, e, 0, 0, 1, -e, e],
            ["l", 2 * e - c, 0],
            ["a", e, e, 0, 0, 1, -e, -e],
            ["l", 0, 2 * e - d],
            ["a", e, e, 0, 0, 1, e, -e],
            ["z"]
          ];
          var f = [
            ["M", a, b],
            ["l", c, 0],
            ["l", 0, d],
            ["l", -c, 0],
            ["z"]
          ];
          return f.toString = g, f
        }
  
        function z(a, b, c, d, e) {
          if (null == e && null == d && (d = c), a = +a, b = +b, c = +c, d = +d, null != e) var f = Math.PI / 180,
            h = a + c * Math.cos(-d * f),
            i = a + c * Math.cos(-e * f),
            j = b + c * Math.sin(-d * f),
            k = b + c * Math.sin(-e * f),
            l = [
              ["M", h, j],
              ["A", c, c, 0, +(e - d > 180), 0, i, k]
            ];
          else l = [
            ["M", a, b],
            ["m", 0, -d],
            ["a", c, d, 0, 1, 1, 0, 2 * d],
            ["a", c, d, 0, 1, 1, 0, -2 * d],
            ["z"]
          ];
          return l.toString = g, l
        }
  
        function A(b) {
          var c = e(b),
            d = String.prototype.toLowerCase;
          if (c.rel) return h(c.rel);
          a.is(b, "array") && a.is(b && b[0], "array") || (b = a.parsePathString(b));
          var f = [],
            i = 0,
            j = 0,
            k = 0,
            l = 0,
            m = 0;
          "M" == b[0][0] && (i = b[0][1], j = b[0][2], k = i, l = j, m++, f.push(["M", i, j]));
          for (var n = m, o = b.length; n < o; n++) {
            var p = f[n] = [],
              q = b[n];
            if (q[0] != d.call(q[0])) switch (p[0] = d.call(q[0]), p[0]) {
              case "a":
                p[1] = q[1], p[2] = q[2], p[3] = q[3], p[4] = q[4], p[5] = q[5], p[6] = +(q[6] - i).toFixed(3), p[7] = +(q[7] - j).toFixed(3);
                break;
              case "v":
                p[1] = +(q[1] - j).toFixed(3);
                break;
              case "m":
                k = q[1], l = q[2];
              default:
                for (var r = 1, s = q.length; r < s; r++) p[r] = +(q[r] - (r % 2 ? i : j)).toFixed(3)
            } else {
              p = f[n] = [], "m" == q[0] && (k = q[1] + i, l = q[2] + j);
              for (var t = 0, u = q.length; t < u; t++) f[n][t] = q[t]
            }
            var v = f[n].length;
            switch (f[n][0]) {
              case "z":
                i = k, j = l;
                break;
              case "h":
                i += +f[n][v - 1];
                break;
              case "v":
                j += +f[n][v - 1];
                break;
              default:
                i += +f[n][v - 2], j += +f[n][v - 1]
            }
          }
          return f.toString = g, c.rel = h(f), f
        }
  
        function B(b) {
          var c = e(b);
          if (c.abs) return h(c.abs);
          if (K(b, "array") && K(b && b[0], "array") || (b = a.parsePathString(b)), !b || !b.length) return [
            ["M", 0, 0]
          ];
          var d, f = [],
            i = 0,
            j = 0,
            k = 0,
            l = 0,
            m = 0;
          "M" == b[0][0] && (i = +b[0][1], j = +b[0][2], k = i, l = j, m++, f[0] = ["M", i, j]);
          for (var n, o, p = 3 == b.length && "M" == b[0][0] && "R" == b[1][0].toUpperCase() && "Z" == b[2][0].toUpperCase(), q = m, r = b.length; q < r; q++) {
            if (f.push(n = []), o = b[q], d = o[0], d != d.toUpperCase()) switch (n[0] = d.toUpperCase(), n[0]) {
                case "A":
                  n[1] = o[1], n[2] = o[2], n[3] = o[3], n[4] = o[4], n[5] = o[5], n[6] = +o[6] + i, n[7] = +o[7] + j;
                  break;
                case "V":
                  n[1] = +o[1] + j;
                  break;
                case "H":
                  n[1] = +o[1] + i;
                  break;
                case "R":
                  for (var s = [i, j].concat(o.slice(1)), t = 2, u = s.length; t < u; t++) s[t] = +s[t] + i, s[++t] = +s[t] + j;
                  f.pop(), f = f.concat(I(s, p));
                  break;
                case "O":
                  f.pop(), s = z(i, j, o[1], o[2]), s.push(s[0]), f = f.concat(s);
                  break;
                case "U":
                  f.pop(), f = f.concat(z(i, j, o[1], o[2], o[3])), n = ["U"].concat(f[f.length - 1].slice(-2));
                  break;
                case "M":
                  k = +o[1] + i, l = +o[2] + j;
                default:
                  for (t = 1, u = o.length; t < u; t++) n[t] = +o[t] + (t % 2 ? i : j)
              } else if ("R" == d) s = [i, j].concat(o.slice(1)), f.pop(), f = f.concat(I(s, p)), n = ["R"].concat(o.slice(-2));
              else if ("O" == d) f.pop(), s = z(i, j, o[1], o[2]), s.push(s[0]), f = f.concat(s);
            else if ("U" == d) f.pop(), f = f.concat(z(i, j, o[1], o[2], o[3])), n = ["U"].concat(f[f.length - 1].slice(-2));
            else
              for (var v = 0, w = o.length; v < w; v++) n[v] = o[v];
            if (d = d.toUpperCase(), "O" != d) switch (n[0]) {
              case "Z":
                i = +k, j = +l;
                break;
              case "H":
                i = n[1];
                break;
              case "V":
                j = n[1];
                break;
              case "M":
                k = n[n.length - 2], l = n[n.length - 1];
              default:
                i = n[n.length - 2], j = n[n.length - 1]
            }
          }
          return f.toString = g, c.abs = h(f), f
        }
  
        function C(a, b, c, d) {
          return [a, b, c, d, c, d]
        }
  
        function D(a, b, c, d, e, f) {
          var g = 1 / 3,
            h = 2 / 3;
          return [g * a + h * c, g * b + h * d, g * e + h * c, g * f + h * d, e, f]
        }
  
        function E(b, c, d, e, f, g, h, i, j, k) {
          var l, m = 120 * Q / 180,
            n = Q / 180 * (+f || 0),
            o = [],
            p = a._.cacher(function(a, b, c) {
              var d = a * P.cos(c) - b * P.sin(c),
                e = a * P.sin(c) + b * P.cos(c);
              return {
                x: d,
                y: e
              }
            });
          if (k) y = k[0], z = k[1], w = k[2], x = k[3];
          else {
            l = p(b, c, -n), b = l.x, c = l.y, l = p(i, j, -n), i = l.x, j = l.y;
            var q = (P.cos(Q / 180 * f), P.sin(Q / 180 * f), (b - i) / 2),
              r = (c - j) / 2,
              s = q * q / (d * d) + r * r / (e * e);
            s > 1 && (s = P.sqrt(s), d *= s, e *= s);
            var t = d * d,
              u = e * e,
              v = (g == h ? -1 : 1) * P.sqrt(U((t * u - t * r * r - u * q * q) / (t * r * r + u * q * q))),
              w = v * d * r / e + (b + i) / 2,
              x = v * -e * q / d + (c + j) / 2,
              y = P.asin(((c - x) / e).toFixed(9)),
              z = P.asin(((j - x) / e).toFixed(9));
            y = b < w ? Q - y : y, z = i < w ? Q - z : z, y < 0 && (y = 2 * Q + y), z < 0 && (z = 2 * Q + z), h && y > z && (y -= 2 * Q), !h && z > y && (z -= 2 * Q)
          }
          var A = z - y;
          if (U(A) > m) {
            var B = z,
              C = i,
              D = j;
            z = y + m * (h && z > y ? 1 : -1), i = w + d * P.cos(z), j = x + e * P.sin(z), o = E(i, j, d, e, f, 0, h, C, D, [z, B, w, x])
          }
          A = z - y;
          var F = P.cos(y),
            G = P.sin(y),
            H = P.cos(z),
            I = P.sin(z),
            J = P.tan(A / 4),
            K = 4 / 3 * d * J,
            L = 4 / 3 * e * J,
            M = [b, c],
            N = [b + K * G, c - L * F],
            O = [i + K * I, j - L * H],
            R = [i, j];
          if (N[0] = 2 * M[0] - N[0], N[1] = 2 * M[1] - N[1], k) return [N, O, R].concat(o);
          o = [N, O, R].concat(o).join().split(",");
          for (var S = [], T = 0, V = o.length; T < V; T++) S[T] = T % 2 ? p(o[T - 1], o[T], n).y : p(o[T], o[T + 1], n).x;
          return S
        }
  
        function F(a, b, c, d, e, f, g, h) {
          for (var i, j, k, l, m, n, o, p, q = [], r = [
              [],
              []
            ], s = 0; s < 2; ++s)
            if (0 == s ? (j = 6 * a - 12 * c + 6 * e, i = -3 * a + 9 * c - 9 * e + 3 * g, k = 3 * c - 3 * a) : (j = 6 * b - 12 * d + 6 * f, i = -3 * b + 9 * d - 9 * f + 3 * h, k = 3 * d - 3 * b), U(i) < 1e-12) {
              if (U(j) < 1e-12) continue;
              l = -k / j, 0 < l && l < 1 && q.push(l)
            } else o = j * j - 4 * k * i, p = P.sqrt(o), o < 0 || (m = (-j + p) / (2 * i), 0 < m && m < 1 && q.push(m), n = (-j - p) / (2 * i), 0 < n && n < 1 && q.push(n));
          for (var t, u = q.length, v = u; u--;) l = q[u], t = 1 - l, r[0][u] = t * t * t * a + 3 * t * t * l * c + 3 * t * l * l * e + l * l * l * g, r[1][u] = t * t * t * b + 3 * t * t * l * d + 3 * t * l * l * f + l * l * l * h;
          return r[0][v] = a, r[1][v] = b, r[0][v + 1] = g, r[1][v + 1] = h, r[0].length = r[1].length = v + 2, {
            min: {
              x: R.apply(0, r[0]),
              y: R.apply(0, r[1])
            },
            max: {
              x: S.apply(0, r[0]),
              y: S.apply(0, r[1])
            }
          }
        }
  
        function G(a, b) {
          var c = !b && e(a);
          if (!b && c.curve) return h(c.curve);
          for (var d = B(a), f = b && B(b), g = {
              x: 0,
              y: 0,
              bx: 0,
              by: 0,
              X: 0,
              Y: 0,
              qx: null,
              qy: null
            }, i = {
              x: 0,
              y: 0,
              bx: 0,
              by: 0,
              X: 0,
              Y: 0,
              qx: null,
              qy: null
            }, j = (function(a, b, c) {
              var d, e;
              if (!a) return ["C", b.x, b.y, b.x, b.y, b.x, b.y];
              switch (!(a[0] in {
                T: 1,
                Q: 1
              }) && (b.qx = b.qy = null), a[0]) {
                case "M":
                  b.X = a[1], b.Y = a[2];
                  break;
                case "A":
                  a = ["C"].concat(E.apply(0, [b.x, b.y].concat(a.slice(1))));
                  break;
                case "S":
                  "C" == c || "S" == c ? (d = 2 * b.x - b.bx, e = 2 * b.y - b.by) : (d = b.x, e = b.y), a = ["C", d, e].concat(a.slice(1));
                  break;
                case "T":
                  "Q" == c || "T" == c ? (b.qx = 2 * b.x - b.qx, b.qy = 2 * b.y - b.qy) : (b.qx = b.x, b.qy = b.y), a = ["C"].concat(D(b.x, b.y, b.qx, b.qy, a[1], a[2]));
                  break;
                case "Q":
                  b.qx = a[1], b.qy = a[2], a = ["C"].concat(D(b.x, b.y, a[1], a[2], a[3], a[4]));
                  break;
                case "L":
                  a = ["C"].concat(C(b.x, b.y, a[1], a[2]));
                  break;
                case "H":
                  a = ["C"].concat(C(b.x, b.y, a[1], b.y));
                  break;
                case "V":
                  a = ["C"].concat(C(b.x, b.y, b.x, a[1]));
                  break;
                case "Z":
                  a = ["C"].concat(C(b.x, b.y, b.X, b.Y))
              }
              return a
            }), k = function(a, b) {
              if (a[b].length > 7) {
                a[b].shift();
                for (var c = a[b]; c.length;) m[b] = "A", f && (n[b] = "A"), a.splice(b++, 0, ["C"].concat(c.splice(0, 6)));
                a.splice(b, 1), r = S(d.length, f && f.length || 0)
              }
            }, l = function(a, b, c, e, g) {
              a && b && "M" == a[g][0] && "M" != b[g][0] && (b.splice(g, 0, ["M", e.x, e.y]), c.bx = 0, c.by = 0, c.x = a[g][1], c.y = a[g][2], r = S(d.length, f && f.length || 0))
            }, m = [], n = [], o = "", p = "", q = 0, r = S(d.length, f && f.length || 0); q < r; q++) {
            d[q] && (o = d[q][0]), "C" != o && (m[q] = o, q && (p = m[q - 1])), d[q] = j(d[q], g, p), "A" != m[q] && "C" == o && (m[q] = "C"), k(d, q), f && (f[q] && (o = f[q][0]), "C" != o && (n[q] = o, q && (p = n[q - 1])), f[q] = j(f[q], i, p), "A" != n[q] && "C" == o && (n[q] = "C"), k(f, q)), l(d, f, g, i, q), l(f, d, i, g, q);
            var s = d[q],
              t = f && f[q],
              u = s.length,
              v = f && t.length;
            g.x = s[u - 2], g.y = s[u - 1], g.bx = O(s[u - 4]) || g.x, g.by = O(s[u - 3]) || g.y, i.bx = f && (O(t[v - 4]) || i.x), i.by = f && (O(t[v - 3]) || i.y), i.x = f && t[v - 2], i.y = f && t[v - 1]
          }
          return f || (c.curve = h(d)), f ? [d, f] : d
        }
  
        function H(a, b) {
          if (!b) return a;
          var c, d, e, f, g, h, i;
          for (a = G(a), e = 0, g = a.length; e < g; e++)
            for (i = a[e], f = 1, h = i.length; f < h; f += 2) c = b.x(i[f], i[f + 1]), d = b.y(i[f], i[f + 1]), i[f] = c, i[f + 1] = d;
          return a
        }
  
        function I(a, b) {
          for (var c = [], d = 0, e = a.length; e - 2 * !b > d; d += 2) {
            var f = [{
              x: +a[d - 2],
              y: +a[d - 1]
            }, {
              x: +a[d],
              y: +a[d + 1]
            }, {
              x: +a[d + 2],
              y: +a[d + 3]
            }, {
              x: +a[d + 4],
              y: +a[d + 5]
            }];
            b ? d ? e - 4 == d ? f[3] = {
              x: +a[0],
              y: +a[1]
            } : e - 2 == d && (f[2] = {
              x: +a[0],
              y: +a[1]
            }, f[3] = {
              x: +a[2],
              y: +a[3]
            }) : f[0] = {
              x: +a[e - 2],
              y: +a[e - 1]
            } : e - 4 == d ? f[3] = f[2] : d || (f[0] = {
              x: +a[d],
              y: +a[d + 1]
            }), c.push(["C", (-f[0].x + 6 * f[1].x + f[2].x) / 6, (-f[0].y + 6 * f[1].y + f[2].y) / 6, (f[1].x + 6 * f[2].x - f[3].x) / 6, (f[1].y + 6 * f[2].y - f[3].y) / 6, f[2].x, f[2].y])
          }
          return c
        }
        var J = b.prototype,
          K = a.is,
          L = a._.clone,
          M = "hasOwnProperty",
          N = /,?([a-z]),?/gi,
          O = parseFloat,
          P = Math,
          Q = P.PI,
          R = P.min,
          S = P.max,
          T = P.pow,
          U = P.abs,
          V = j(1),
          W = j(),
          X = j(0, 1),
          Y = a._unit2px,
          Z = {
            path: function(a) {
              return a.attr("path")
            },
            circle: function(a) {
              var b = Y(a);
              return z(b.cx, b.cy, b.r)
            },
            ellipse: function(a) {
              var b = Y(a);
              return z(b.cx || 0, b.cy || 0, b.rx, b.ry)
            },
            rect: function(a) {
              var b = Y(a);
              return y(b.x || 0, b.y || 0, b.width, b.height, b.rx, b.ry)
            },
            image: function(a) {
              var b = Y(a);
              return y(b.x || 0, b.y || 0, b.width, b.height)
            },
            line: function(a) {
              return "M" + [a.attr("x1") || 0, a.attr("y1") || 0, a.attr("x2"), a.attr("y2")]
            },
            polyline: function(a) {
              return "M" + a.attr("points")
            },
            polygon: function(a) {
              return "M" + a.attr("points") + "z"
            },
            deflt: function(a) {
              var b = a.node.getBBox();
              return y(b.x, b.y, b.width, b.height)
            }
          };
        a.path = e, a.path.getTotalLength = V, a.path.getPointAtLength = W, a.path.getSubpath = function(a, b, c) {
          if (this.getTotalLength(a) - c < 1e-6) return X(a, b).end;
          var d = X(a, c, 1);
          return b ? X(d, b).end : d
        }, J.getTotalLength = function() {
          if (this.node.getTotalLength) return this.node.getTotalLength()
        }, J.getPointAtLength = function(a) {
          return W(this.attr("d"), a)
        }, J.getSubpath = function(b, c) {
          return a.path.getSubpath(this.attr("d"), b, c)
        }, a._.box = f, a.path.findDotsAtSegment = k, a.path.bezierBBox = l, a.path.isPointInsideBBox = m, a.closest = function(b, c, d, e) {
          for (var g = 100, h = f(b - g / 2, c - g / 2, g, g), i = [], j = d[0].hasOwnProperty("x") ? function(a) {
              return {
                x: d[a].x,
                y: d[a].y
              }
            } : function(a) {
              return {
                x: d[a],
                y: e[a]
              }
            }, k = 0; g <= 1e6 && !k;) {
            for (var l = 0, n = d.length; l < n; l++) {
              var o = j(l);
              if (m(h, o.x, o.y)) {
                k++, i.push(o);
                break
              }
            }
            k || (g *= 2, h = f(b - g / 2, c - g / 2, g, g))
          }
          if (1e6 != g) {
            var p, q = 1 / 0;
            for (l = 0, n = i.length; l < n; l++) {
              var r = a.len(b, c, i[l].x, i[l].y);
              q > r && (q = r, i[l].len = r, p = i[l])
            }
            return p
          }
        }, a.path.isBBoxIntersect = n, a.path.intersection = t, a.path.intersectionNumber = u, a.path.isPointInside = w, a.path.getBBox = x, a.path.get = Z, a.path.toRelative = A, a.path.toAbsolute = B, a.path.toCubic = G, a.path.map = H, a.path.toString = g, a.path.clone = h
      }), d.plugin(function(a, d, e, f) {
        var g = Math.max,
          h = Math.min,
          i = function(a) {
            if (this.items = [], this.bindings = {}, this.length = 0, this.type = "set", a)
              for (var b = 0, c = a.length; b < c; b++) a[b] && (this[this.items.length] = this.items[this.items.length] = a[b], this.length++)
          },
          j = i.prototype;
        j.push = function() {
          for (var a, b, c = 0, d = arguments.length; c < d; c++) a = arguments[c], a && (b = this.items.length, this[b] = this.items[b] = a, this.length++);
          return this
        }, j.pop = function() {
          return this.length && delete this[this.length--], this.items.pop()
        }, j.forEach = function(a, b) {
          for (var c = 0, d = this.items.length; c < d; c++)
            if (a.call(b, this.items[c], c) === !1) return this;
          return this
        }, j.animate = function(d, e, f, g) {
          "function" != typeof f || f.length || (g = f, f = c.linear), d instanceof a._.Animation && (g = d.callback, f = d.easing, e = f.dur, d = d.attr);
          var h = arguments;
          if (a.is(d, "array") && a.is(h[h.length - 1], "array")) var i = !0;
          var j, k = function() {
              j ? this.b = j : j = this.b
            },
            l = 0,
            m = this,
            n = g && function() {
              ++l == m.length && g.call(this)
            };
          return this.forEach(function(a, c) {
            b.once("snap.animcreated." + a.id, k), i ? h[c] && a.animate.apply(a, h[c]) : a.animate(d, e, f, n)
          })
        }, j.remove = function() {
          for (; this.length;) this.pop().remove();
          return this
        }, j.bind = function(a, b, c) {
          var d = {};
          if ("function" == typeof b) this.bindings[a] = b;
          else {
            var e = c || a;
            this.bindings[a] = function(a) {
              d[e] = a, b.attr(d)
            }
          }
          return this
        }, j.attr = function(a) {
          var b = {};
          for (var c in a) this.bindings[c] ? this.bindings[c](a[c]) : b[c] = a[c];
          for (var d = 0, e = this.items.length; d < e; d++) this.items[d].attr(b);
          return this
        }, j.clear = function() {
          for (; this.length;) this.pop()
        }, j.splice = function(a, b, c) {
          a = a < 0 ? g(this.length + a, 0) : a, b = g(0, h(this.length - a, b));
          var d, e = [],
            f = [],
            j = [];
          for (d = 2; d < arguments.length; d++) j.push(arguments[d]);
          for (d = 0; d < b; d++) f.push(this[a + d]);
          for (; d < this.length - a; d++) e.push(this[a + d]);
          var k = j.length;
          for (d = 0; d < k + e.length; d++) this.items[a + d] = this[a + d] = d < k ? j[d] : e[d - k];
          for (d = this.items.length = this.length -= b - k; this[d];) delete this[d++];
          return new i(f)
        }, j.exclude = function(a) {
          for (var b = 0, c = this.length; b < c; b++)
            if (this[b] == a) return this.splice(b, 1), !0;
          return !1
        }, j.insertAfter = function(a) {
          for (var b = this.items.length; b--;) this.items[b].insertAfter(a);
          return this
        }, j.getBBox = function() {
          for (var a = [], b = [], c = [], d = [], e = this.items.length; e--;)
            if (!this.items[e].removed) {
              var f = this.items[e].getBBox();
              a.push(f.x), b.push(f.y), c.push(f.x + f.width), d.push(f.y + f.height)
            }
          return a = h.apply(0, a), b = h.apply(0, b), c = g.apply(0, c), d = g.apply(0, d), {
            x: a,
            y: b,
            x2: c,
            y2: d,
            width: c - a,
            height: d - b,
            cx: a + (c - a) / 2,
            cy: b + (d - b) / 2
          }
        }, j.clone = function(a) {
          a = new i;
          for (var b = 0, c = this.items.length; b < c; b++) a.push(this.items[b].clone());
          return a
        }, j.toString = function() {
          return "Snap‘s set"
        }, j.type = "set", a.Set = i, a.set = function() {
          var a = new i;
          return arguments.length && a.push.apply(a, Array.prototype.slice.call(arguments, 0)), a
        }
      }), d.plugin(function(a, c, d, e) {
        function f(a) {
          var b = a[0];
          switch (b.toLowerCase()) {
            case "t":
              return [b, 0, 0];
            case "m":
              return [b, 1, 0, 0, 1, 0, 0];
            case "r":
              return 4 == a.length ? [b, 0, a[2], a[3]] : [b, 0];
            case "s":
              return 5 == a.length ? [b, 1, 1, a[3], a[4]] : 3 == a.length ? [b, 1, 1] : [b, 1]
          }
        }
  
        function g(b, c, d) {
          c = r(c).replace(/\.{3}|\u2026/g, b), b = a.parseTransformString(b) || [], c = a.parseTransformString(c) || [];
          for (var e, g, h, i, j = Math.max(b.length, c.length), k = [], n = [], o = 0; o < j; o++) {
            if (h = b[o] || f(c[o]), i = c[o] || f(h), h[0] != i[0] || "r" == h[0].toLowerCase() && (h[2] != i[2] || h[3] != i[3]) || "s" == h[0].toLowerCase() && (h[3] != i[3] || h[4] != i[4])) {
              b = a._.transform2matrix(b, d()), c = a._.transform2matrix(c, d()), k = [
                ["m", b.a, b.b, b.c, b.d, b.e, b.f]
              ], n = [
                ["m", c.a, c.b, c.c, c.d, c.e, c.f]
              ];
              break
            }
            for (k[o] = [], n[o] = [], e = 0, g = Math.max(h.length, i.length); e < g; e++) e in h && (k[o][e] = h[e]), e in i && (n[o][e] = i[e])
          }
          return {
            from: m(k),
            to: m(n),
            f: l(k)
          }
        }
  
        function h(a) {
          return a
        }
  
        function i(a) {
          return function(b) {
            return +b.toFixed(3) + a
          }
        }
  
        function j(a) {
          return a.join(" ")
        }
  
        function k(b) {
          return a.rgb(b[0], b[1], b[2])
        }
  
        function l(a) {
          var b, c, d, e, f, g, h = 0,
            i = [];
          for (b = 0, c = a.length; b < c; b++) {
            for (f = "[", g = ['"' + a[b][0] + '"'], d = 1, e = a[b].length; d < e; d++) g[d] = "val[" + h++ + "]";
            f += g + "]", i[b] = f
          }
          return Function("val", "return Snap.path.toString.call([" + i + "])")
        }
  
        function m(a) {
          for (var b = [], c = 0, d = a.length; c < d; c++)
            for (var e = 1, f = a[c].length; e < f; e++) b.push(a[c][e]);
          return b
        }
  
        function n(a) {
          return isFinite(parseFloat(a))
        }
  
        function o(b, c) {
          return !(!a.is(b, "array") || !a.is(c, "array")) && b.toString() == c.toString()
        }
        var p = {},
          q = /[a-z]+$/i,
          r = String;
        p.stroke = p.fill = "colour", c.prototype.equal = function(a, c) {
          return b("snap.util.equal", this, a, c).firstDefined()
        }, b.on("snap.util.equal", function(b, c) {
          var d, e, f = r(this.attr(b) || ""),
            s = this;
          if (n(f) && n(c)) return {
            from: parseFloat(f),
            to: parseFloat(c),
            f: h
          };
          if ("colour" == p[b]) return d = a.color(f), e = a.color(c), {
            from: [d.r, d.g, d.b, d.opacity],
            to: [e.r, e.g, e.b, e.opacity],
            f: k
          };
          if ("viewBox" == b) return d = this.attr(b).vb.split(" ").map(Number), e = c.split(" ").map(Number), {
            from: d,
            to: e,
            f: j
          };
          if ("transform" == b || "gradientTransform" == b || "patternTransform" == b) return c instanceof a.Matrix && (c = c.toTransformString()), a._.rgTransform.test(c) || (c = a._.svgTransform2string(c)), g(f, c, function() {
            return s.getBBox(1)
          });
          if ("d" == b || "path" == b) return d = a.path.toCubic(f, c), {
            from: m(d[0]),
            to: m(d[1]),
            f: l(d[0])
          };
          if ("points" == b) return d = r(f).split(a._.separator), e = r(c).split(a._.separator), {
            from: d,
            to: e,
            f: function(a) {
              return a
            }
          };
          var t = f.match(q),
            u = r(c).match(q);
          return t && o(t, u) ? {
            from: parseFloat(f),
            to: parseFloat(c),
            f: i(t)
          } : {
            from: this.asPX(b),
            to: this.asPX(b, c),
            f: h
          }
        })
      }), d.plugin(function(a, c, d, e) {
        for (var f = c.prototype, g = "hasOwnProperty", h = ("createTouch" in e.doc), i = ["click", "dblclick", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "touchstart", "touchmove", "touchend", "touchcancel"], j = {
            mousedown: "touchstart",
            mousemove: "touchmove",
            mouseup: "touchend"
          }, k = (function(a, b) {
            var c = "y" == a ? "scrollTop" : "scrollLeft",
              d = b && b.node ? b.node.ownerDocument : e.doc;
            return d[c in d.documentElement ? "documentElement" : "body"][c]
          }), l = function() {
            return this.originalEvent.preventDefault()
          }, m = function() {
            return this.originalEvent.stopPropagation()
          }, n = function(a, b, c, d) {
            var e = h && j[b] ? j[b] : b,
              f = function(e) {
                var f = k("y", d),
                  i = k("x", d);
                if (h && j[g](b))
                  for (var n = 0, o = e.targetTouches && e.targetTouches.length; n < o; n++)
                    if (e.targetTouches[n].target == a || a.contains(e.targetTouches[n].target)) {
                      var p = e;
                      e = e.targetTouches[n], e.originalEvent = p, e.preventDefault = l, e.stopPropagation = m;
                      break
                    }
                var q = e.clientX + i,
                  r = e.clientY + f;
                return c.call(d, e, q, r)
              };
            return b !== e && a.addEventListener(b, f, !1), a.addEventListener(e, f, !1),
              function() {
                return b !== e && a.removeEventListener(b, f, !1), a.removeEventListener(e, f, !1), !0
              }
          }, o = [], p = function(a) {
            for (var c, d = a.clientX, e = a.clientY, f = k("y"), g = k("x"), i = o.length; i--;) {
              if (c = o[i], h) {
                for (var j, l = a.touches && a.touches.length; l--;)
                  if (j = a.touches[l], j.identifier == c.el._drag.id || c.el.node.contains(j.target)) {
                    d = j.clientX, e = j.clientY, (a.originalEvent ? a.originalEvent : a).preventDefault();
                    break
                  }
              } else a.preventDefault();
              var m = c.el.node;
              m.nextSibling, m.parentNode, m.style.display;
              d += g, e += f, b("snap.drag.move." + c.el.id, c.move_scope || c.el, d - c.el._drag.x, e - c.el._drag.y, d, e, a)
            }
          }, q = function(c) {
            a.unmousemove(p).unmouseup(q);
            for (var d, e = o.length; e--;) d = o[e], d.el._drag = {}, b("snap.drag.end." + d.el.id, d.end_scope || d.start_scope || d.move_scope || d.el, c), b.off("snap.drag.*." + d.el.id);
            o = []
          }, r = i.length; r--;) ! function(b) {
          a[b] = f[b] = function(c, d) {
            if (a.is(c, "function")) this.events = this.events || [], this.events.push({
              name: b,
              f: c,
              unbind: n(this.node || document, b, c, d || this)
            });
            else
              for (var e = 0, f = this.events.length; e < f; e++)
                if (this.events[e].name == b) try {
                  this.events[e].f.call(this)
                } catch (a) {}
            return this
          }, a["un" + b] = f["un" + b] = function(a) {
            for (var c = this.events || [], d = c.length; d--;)
              if (c[d].name == b && (c[d].f == a || !a)) return c[d].unbind(), c.splice(d, 1), !c.length && delete this.events, this;
            return this
          }
        }(i[r]);
        f.hover = function(a, b, c, d) {
          return this.mouseover(a, c).mouseout(b, d || c)
        }, f.unhover = function(a, b) {
          return this.unmouseover(a).unmouseout(b)
        };
        var s = [];
        f.drag = function(c, d, e, f, g, h) {
          function i(i, j, l) {
            (i.originalEvent || i).preventDefault(), k._drag.x = j, k._drag.y = l, k._drag.id = i.identifier, !o.length && a.mousemove(p).mouseup(q), o.push({
              el: k,
              move_scope: f,
              start_scope: g,
              end_scope: h
            }), d && b.on("snap.drag.start." + k.id, d), c && b.on("snap.drag.move." + k.id, c), e && b.on("snap.drag.end." + k.id, e), b("snap.drag.start." + k.id, g || f || k, j, l, i)
          }
  
          function j(a, c, d) {
            b("snap.draginit." + k.id, k, a, c, d)
          }
          var k = this;
          if (!arguments.length) {
            var l;
            return k.drag(function(a, b) {
              this.attr({
                transform: l + (l ? "T" : "t") + [a, b]
              })
            }, function() {
              l = this.transform().local
            })
          }
          return b.on("snap.draginit." + k.id, i), k._drag = {}, s.push({
            el: k,
            start: i,
            init: j
          }), k.mousedown(j), k
        }, f.undrag = function() {
          for (var c = s.length; c--;) s[c].el == this && (this.unmousedown(s[c].init), s.splice(c, 1), b.unbind("snap.drag.*." + this.id), b.unbind("snap.draginit." + this.id));
          return !s.length && a.unmousemove(p).unmouseup(q), this
        }
      }), d.plugin(function(a, c, d, e) {
        var f = (c.prototype, d.prototype),
          g = /^\s*url\((.+)\)/,
          h = String,
          i = a._.$;
        a.filter = {}, f.filter = function(b) {
          var d = this;
          "svg" != d.type && (d = d.paper);
          var e = a.parse(h(b)),
            f = a._.id(),
            g = (d.node.offsetWidth, d.node.offsetHeight, i("filter"));
          return i(g, {
            id: f,
            filterUnits: "userSpaceOnUse"
          }), g.appendChild(e.node), d.defs.appendChild(g), new c(g)
        }, b.on("snap.util.getattr.filter", function() {
          b.stop();
          var c = i(this.node, "filter");
          if (c) {
            var d = h(c).match(g);
            return d && a.select(d[1])
          }
        }), b.on("snap.util.attr.filter", function(d) {
          if (d instanceof c && "filter" == d.type) {
            b.stop();
            var e = d.node.id;
            e || (i(d.node, {
              id: d.id
            }), e = d.id), i(this.node, {
              filter: a.url(e)
            })
          }
          d && "none" != d || (b.stop(), this.node.removeAttribute("filter"))
        }), a.filter.blur = function(b, c) {
          null == b && (b = 2);
          var d = null == c ? b : [b, c];
          return a.format('<feGaussianBlur stdDeviation="{def}"/>', {
            def: d
          })
        }, a.filter.blur.toString = function() {
          return this()
        }, a.filter.shadow = function(b, c, d, e, f) {
          return "string" == typeof d && (e = d, f = e, d = 4), "string" != typeof e && (f = e, e = "#000"), e = e || "#000", null == d && (d = 4), null == f && (f = 1), null == b && (b = 0, c = 2), null == c && (c = b), e = a.color(e), a.format('<feGaussianBlur in="SourceAlpha" stdDeviation="{blur}"/><feOffset dx="{dx}" dy="{dy}" result="offsetblur"/><feFlood flood-color="{color}"/><feComposite in2="offsetblur" operator="in"/><feComponentTransfer><feFuncA type="linear" slope="{opacity}"/></feComponentTransfer><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>', {
            color: e,
            dx: b,
            dy: c,
            blur: d,
            opacity: f
          })
        }, a.filter.shadow.toString = function() {
          return this()
        }, a.filter.grayscale = function(b) {
          return null == b && (b = 1), a.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {b} {h} 0 0 0 0 0 1 0"/>', {
            a: .2126 + .7874 * (1 - b),
            b: .7152 - .7152 * (1 - b),
            c: .0722 - .0722 * (1 - b),
            d: .2126 - .2126 * (1 - b),
            e: .7152 + .2848 * (1 - b),
            f: .0722 - .0722 * (1 - b),
            g: .2126 - .2126 * (1 - b),
            h: .0722 + .9278 * (1 - b)
          })
        }, a.filter.grayscale.toString = function() {
          return this()
        }, a.filter.sepia = function(b) {
          return null == b && (b = 1), a.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {h} {i} 0 0 0 0 0 1 0"/>', {
            a: .393 + .607 * (1 - b),
            b: .769 - .769 * (1 - b),
            c: .189 - .189 * (1 - b),
            d: .349 - .349 * (1 - b),
            e: .686 + .314 * (1 - b),
            f: .168 - .168 * (1 - b),
            g: .272 - .272 * (1 - b),
            h: .534 - .534 * (1 - b),
            i: .131 + .869 * (1 - b)
          })
        }, a.filter.sepia.toString = function() {
          return this()
        }, a.filter.saturate = function(b) {
          return null == b && (b = 1), a.format('<feColorMatrix type="saturate" values="{amount}"/>', {
            amount: 1 - b
          })
        }, a.filter.saturate.toString = function() {
          return this()
        }, a.filter.hueRotate = function(b) {
          return b = b || 0, a.format('<feColorMatrix type="hueRotate" values="{angle}"/>', {
            angle: b
          })
        }, a.filter.hueRotate.toString = function() {
          return this()
        }, a.filter.invert = function(b) {
          return null == b && (b = 1), a.format('<feComponentTransfer><feFuncR type="table" tableValues="{amount} {amount2}"/><feFuncG type="table" tableValues="{amount} {amount2}"/><feFuncB type="table" tableValues="{amount} {amount2}"/></feComponentTransfer>', {
            amount: b,
            amount2: 1 - b
          })
        }, a.filter.invert.toString = function() {
          return this()
        }, a.filter.brightness = function(b) {
          return null == b && (b = 1), a.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}"/><feFuncG type="linear" slope="{amount}"/><feFuncB type="linear" slope="{amount}"/></feComponentTransfer>', {
            amount: b
          })
        }, a.filter.brightness.toString = function() {
          return this()
        }, a.filter.contrast = function(b) {
          return null == b && (b = 1), a.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}" intercept="{amount2}"/><feFuncG type="linear" slope="{amount}" intercept="{amount2}"/><feFuncB type="linear" slope="{amount}" intercept="{amount2}"/></feComponentTransfer>', {
            amount: b,
            amount2: .5 - b / 2
          })
        }, a.filter.contrast.toString = function() {
          return this()
        }
      }), d.plugin(function(a, b, c, d, e) {
        var f = a._.box,
          g = a.is,
          h = /^[^a-z]*([tbmlrc])/i,
          i = function() {
            return "T" + this.dx + "," + this.dy
          };
        b.prototype.getAlign = function(a, b) {
          null == b && g(a, "string") && (b = a, a = null), a = a || this.paper;
          var c = a.getBBox ? a.getBBox() : f(a),
            d = this.getBBox(),
            e = {};
          switch (b = b && b.match(h), b = b ? b[1].toLowerCase() : "c") {
            case "t":
              e.dx = 0, e.dy = c.y - d.y;
              break;
            case "b":
              e.dx = 0, e.dy = c.y2 - d.y2;
              break;
            case "m":
              e.dx = 0, e.dy = c.cy - d.cy;
              break;
            case "l":
              e.dx = c.x - d.x, e.dy = 0;
              break;
            case "r":
              e.dx = c.x2 - d.x2, e.dy = 0;
              break;
            default:
              e.dx = c.cx - d.cx, e.dy = 0
          }
          return e.toString = i, e
        }, b.prototype.align = function(a, b) {
          return this.transform("..." + this.getAlign(a, b))
        }
      }), d
    }),
    function(a) {
      a.flexslider = function(b, c) {
        var d = a(b);
        d.vars = a.extend({}, a.flexslider.defaults, c);
        var e, f = d.vars.namespace,
          g = window.navigator && window.navigator.msPointerEnabled && window.MSGesture,
          h = ("ontouchstart" in window || g || window.DocumentTouch && document instanceof DocumentTouch) && d.vars.touch,
          i = "click touchend MSPointerUp keyup",
          j = "",
          k = "vertical" === d.vars.direction,
          l = d.vars.reverse,
          m = d.vars.itemWidth > 0,
          n = "fade" === d.vars.animation,
          o = "" !== d.vars.asNavFor,
          p = {},
          q = !0;
        a.data(b, "flexslider", d), p = {
          init: function() {
            d.animating = !1, d.currentSlide = parseInt(d.vars.startAt ? d.vars.startAt : 0, 10), isNaN(d.currentSlide) && (d.currentSlide = 0), d.animatingTo = d.currentSlide, d.atEnd = 0 === d.currentSlide || d.currentSlide === d.last, d.containerSelector = d.vars.selector.substr(0, d.vars.selector.search(" ")), d.slides = a(d.vars.selector, d), d.container = a(d.containerSelector, d), d.count = d.slides.length, d.syncExists = a(d.vars.sync).length > 0, "slide" === d.vars.animation && (d.vars.animation = "swing"), d.prop = k ? "top" : "marginLeft", d.args = {}, d.manualPause = !1, d.stopped = !1, d.started = !1, d.startTimeout = null, d.transitions = !d.vars.video && !n && d.vars.useCSS && function() {
              var a = document.createElement("div"),
                b = ["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
              for (var c in b)
                if (void 0 !== a.style[b[c]]) return d.pfx = b[c].replace("Perspective", "").toLowerCase(), d.prop = "-" + d.pfx + "-transform", !0;
              return !1
            }(), d.ensureAnimationEnd = "", "" !== d.vars.controlsContainer && (d.controlsContainer = a(d.vars.controlsContainer).length > 0 && a(d.vars.controlsContainer)), "" !== d.vars.manualControls && (d.manualControls = a(d.vars.manualControls).length > 0 && a(d.vars.manualControls)), "" !== d.vars.customDirectionNav && (d.customDirectionNav = 2 === a(d.vars.customDirectionNav).length && a(d.vars.customDirectionNav)), d.vars.randomize && (d.slides.sort(function() {
              return Math.round(Math.random()) - .5
            }), d.container.empty().append(d.slides)), d.doMath(), d.setup("init"), d.vars.controlNav && p.controlNav.setup(), d.vars.directionNav && p.directionNav.setup(), d.vars.keyboard && (1 === a(d.containerSelector).length || d.vars.multipleKeyboard) && a(document).bind("keyup", function(a) {
              var b = a.keyCode;
              if (!d.animating && (39 === b || 37 === b)) {
                var c = 39 === b ? d.getTarget("next") : 37 === b && d.getTarget("prev");
                d.flexAnimate(c, d.vars.pauseOnAction)
              }
            }), d.vars.mousewheel && d.bind("mousewheel", function(a, b, c, e) {
              a.preventDefault();
              var f = b < 0 ? d.getTarget("next") : d.getTarget("prev");
              d.flexAnimate(f, d.vars.pauseOnAction)
            }), d.vars.pausePlay && p.pausePlay.setup(), d.vars.slideshow && d.vars.pauseInvisible && p.pauseInvisible.init(), d.vars.slideshow && (d.vars.pauseOnHover && d.hover(function() {
              d.manualPlay || d.manualPause || d.pause()
            }, function() {
              d.manualPause || d.manualPlay || d.stopped || d.play()
            }), d.vars.pauseInvisible && p.pauseInvisible.isHidden() || (d.vars.initDelay > 0 ? d.startTimeout = setTimeout(d.play, d.vars.initDelay) : d.play())), o && p.asNav.setup(), h && d.vars.touch && p.touch(), (!n || n && d.vars.smoothHeight) && a(window).bind("resize orientationchange focus", p.resize), d.find("img").attr("draggable", "false"), setTimeout(function() {
              d.vars.start(d)
            }, 200)
          },
          asNav: {
            setup: function() {
              d.asNav = !0, d.animatingTo = Math.floor(d.currentSlide / d.move), d.currentItem = d.currentSlide, d.slides.removeClass(f + "active-slide").eq(d.currentItem).addClass(f + "active-slide"), g ? (b._slider = d, d.slides.each(function() {
                var b = this;
                b._gesture = new MSGesture, b._gesture.target = b, b.addEventListener("MSPointerDown", function(a) {
                  a.preventDefault(), a.currentTarget._gesture && a.currentTarget._gesture.addPointer(a.pointerId)
                }, !1), b.addEventListener("MSGestureTap", function(b) {
                  b.preventDefault();
                  var c = a(this),
                    e = c.index();
                  a(d.vars.asNavFor).data("flexslider").animating || c.hasClass("active") || (d.direction = d.currentItem < e ? "next" : "prev", d.flexAnimate(e, d.vars.pauseOnAction, !1, !0, !0))
                })
              })) : d.slides.on(i, function(b) {
                b.preventDefault();
                var c = a(this),
                  e = c.index(),
                  g = c.offset().left - a(d).scrollLeft();
                g <= 0 && c.hasClass(f + "active-slide") ? d.flexAnimate(d.getTarget("prev"), !0) : a(d.vars.asNavFor).data("flexslider").animating || c.hasClass(f + "active-slide") || (d.direction = d.currentItem < e ? "next" : "prev", d.flexAnimate(e, d.vars.pauseOnAction, !1, !0, !0))
              })
            }
          },
          controlNav: {
            setup: function() {
              d.manualControls ? p.controlNav.setupManual() : p.controlNav.setupPaging()
            },
            setupPaging: function() {
              var b, c, e = "thumbnails" === d.vars.controlNav ? "control-thumbs" : "control-paging",
                g = 1;
              if (d.controlNavScaffold = a('<ol class="' + f + "control-nav " + f + e + '"></ol>'), d.pagingCount > 1)
                for (var h = 0; h < d.pagingCount; h++) {
                  if (c = d.slides.eq(h), b = "thumbnails" === d.vars.controlNav ? '<img src="' + c.attr("data-thumb") + '"/>' : "<a>" + g + "</a>", "thumbnails" === d.vars.controlNav && !0 === d.vars.thumbCaptions) {
                    var k = c.attr("data-thumbcaption");
                    "" !== k && void 0 !== k && (b += '<span class="' + f + 'caption">' + k + "</span>")
                  }
                  d.controlNavScaffold.append("<li>" + b + "</li>"), g++
                }
              d.controlsContainer ? a(d.controlsContainer).append(d.controlNavScaffold) : d.append(d.controlNavScaffold), p.controlNav.set(), p.controlNav.active(), d.controlNavScaffold.delegate("a, img", i, function(b) {
                if (b.preventDefault(), "" === j || j === b.type) {
                  var c = a(this),
                    e = d.controlNav.index(c);
                  c.hasClass(f + "active") || (d.direction = e > d.currentSlide ? "next" : "prev", d.flexAnimate(e, d.vars.pauseOnAction))
                }
                "" === j && (j = b.type), p.setToClearWatchedEvent()
              })
            },
            setupManual: function() {
              d.controlNav = d.manualControls, p.controlNav.active(), d.controlNav.bind(i, function(b) {
                if (b.preventDefault(), "" === j || j === b.type) {
                  var c = a(this),
                    e = d.controlNav.index(c);
                  c.hasClass(f + "active") || (e > d.currentSlide ? d.direction = "next" : d.direction = "prev", d.flexAnimate(e, d.vars.pauseOnAction))
                }
                "" === j && (j = b.type), p.setToClearWatchedEvent()
              })
            },
            set: function() {
              var b = "thumbnails" === d.vars.controlNav ? "img" : "a";
              d.controlNav = a("." + f + "control-nav li " + b, d.controlsContainer ? d.controlsContainer : d)
            },
            active: function() {
              d.controlNav.removeClass(f + "active").eq(d.animatingTo).addClass(f + "active")
            },
            update: function(b, c) {
              d.pagingCount > 1 && "add" === b ? d.controlNavScaffold.append(a("<li><a>" + d.count + "</a></li>")) : 1 === d.pagingCount ? d.controlNavScaffold.find("li").remove() : d.controlNav.eq(c).closest("li").remove(), p.controlNav.set(), d.pagingCount > 1 && d.pagingCount !== d.controlNav.length ? d.update(c, b) : p.controlNav.active()
            }
          },
          directionNav: {
            setup: function() {
              var b = a('<ul class="' + f + 'direction-nav"><li class="' + f + 'nav-prev"><a class="' + f + 'prev" href="#">' + d.vars.prevText + '</a></li><li class="' + f + 'nav-next"><a class="' + f + 'next" href="#">' + d.vars.nextText + "</a></li></ul>");
              d.customDirectionNav ? d.directionNav = d.customDirectionNav : d.controlsContainer ? (a(d.controlsContainer).append(b), d.directionNav = a("." + f + "direction-nav li a", d.controlsContainer)) : (d.append(b), d.directionNav = a("." + f + "direction-nav li a", d)), p.directionNav.update(), d.directionNav.bind(i, function(b) {
                b.preventDefault();
                var c;
                "" !== j && j !== b.type || (c = a(this).hasClass(f + "next") ? d.getTarget("next") : d.getTarget("prev"), d.flexAnimate(c, d.vars.pauseOnAction)), "" === j && (j = b.type), p.setToClearWatchedEvent()
              })
            },
            update: function() {
              var a = f + "disabled";
              1 === d.pagingCount ? d.directionNav.addClass(a).attr("tabindex", "-1") : d.vars.animationLoop ? d.directionNav.removeClass(a).removeAttr("tabindex") : 0 === d.animatingTo ? d.directionNav.removeClass(a).filter("." + f + "prev").addClass(a).attr("tabindex", "-1") : d.animatingTo === d.last ? d.directionNav.removeClass(a).filter("." + f + "next").addClass(a).attr("tabindex", "-1") : d.directionNav.removeClass(a).removeAttr("tabindex")
            }
          },
          pausePlay: {
            setup: function() {
              var b = a('<div class="' + f + 'pauseplay"><a></a></div>');
              d.controlsContainer ? (d.controlsContainer.append(b), d.pausePlay = a("." + f + "pauseplay a", d.controlsContainer)) : (d.append(b), d.pausePlay = a("." + f + "pauseplay a", d)), p.pausePlay.update(d.vars.slideshow ? f + "pause" : f + "play"), d.pausePlay.bind(i, function(b) {
                b.preventDefault(), "" !== j && j !== b.type || (a(this).hasClass(f + "pause") ? (d.manualPause = !0, d.manualPlay = !1, d.pause()) : (d.manualPause = !1, d.manualPlay = !0, d.play())), "" === j && (j = b.type), p.setToClearWatchedEvent()
              })
            },
            update: function(a) {
              "play" === a ? d.pausePlay.removeClass(f + "pause").addClass(f + "play").html(d.vars.playText) : d.pausePlay.removeClass(f + "play").addClass(f + "pause").html(d.vars.pauseText)
            }
          },
          touch: function() {
            function a(a) {
              a.stopPropagation(), d.animating ? a.preventDefault() : (d.pause(), b._gesture.addPointer(a.pointerId), w = 0, j = k ? d.h : d.w, p = Number(new Date), i = m && l && d.animatingTo === d.last ? 0 : m && l ? d.limit - (d.itemW + d.vars.itemMargin) * d.move * d.animatingTo : m && d.currentSlide === d.last ? d.limit : m ? (d.itemW + d.vars.itemMargin) * d.move * d.currentSlide : l ? (d.last - d.currentSlide + d.cloneOffset) * j : (d.currentSlide + d.cloneOffset) * j)
            }
  
            function c(a) {
              a.stopPropagation();
              var c = a.target._slider;
              if (c) {
                var d = -a.translationX,
                  e = -a.translationY;
                return w += k ? e : d, o = w, t = k ? Math.abs(w) < Math.abs(-d) : Math.abs(w) < Math.abs(-e), a.detail === a.MSGESTURE_FLAG_INERTIA ? void setImmediate(function() {
                  b._gesture.stop()
                }) : void((!t || Number(new Date) - p > 500) && (a.preventDefault(), !n && c.transitions && (c.vars.animationLoop || (o = w / (0 === c.currentSlide && w < 0 || c.currentSlide === c.last && w > 0 ? Math.abs(w) / j + 2 : 1)), c.setProps(i + o, "setTouch"))))
              }
            }
  
            function e(a) {
              a.stopPropagation();
              var b = a.target._slider;
              if (b) {
                if (b.animatingTo === b.currentSlide && !t && null !== o) {
                  var c = l ? -o : o,
                    d = c > 0 ? b.getTarget("next") : b.getTarget("prev");
                  b.canAdvance(d) && (Number(new Date) - p < 550 && Math.abs(c) > 50 || Math.abs(c) > j / 2) ? b.flexAnimate(d, b.vars.pauseOnAction) : n || b.flexAnimate(b.currentSlide, b.vars.pauseOnAction, !0)
                }
                f = null, h = null, o = null, i = null, w = 0
              }
            }
            var f, h, i, j, o, p, q, r, s, t = !1,
              u = 0,
              v = 0,
              w = 0;
            g ? (b.style.msTouchAction = "none", b._gesture = new MSGesture, b._gesture.target = b, b.addEventListener("MSPointerDown", a, !1), b._slider = d, b.addEventListener("MSGestureChange", c, !1), b.addEventListener("MSGestureEnd", e, !1)) : (q = function(a) {
              d.animating ? a.preventDefault() : (window.navigator.msPointerEnabled || 1 === a.touches.length) && (d.pause(), j = k ? d.h : d.w, p = Number(new Date), u = a.touches[0].pageX, v = a.touches[0].pageY, i = m && l && d.animatingTo === d.last ? 0 : m && l ? d.limit - (d.itemW + d.vars.itemMargin) * d.move * d.animatingTo : m && d.currentSlide === d.last ? d.limit : m ? (d.itemW + d.vars.itemMargin) * d.move * d.currentSlide : l ? (d.last - d.currentSlide + d.cloneOffset) * j : (d.currentSlide + d.cloneOffset) * j, f = k ? v : u, h = k ? u : v, b.addEventListener("touchmove", r, !1), b.addEventListener("touchend", s, !1))
            }, r = function(a) {
              u = a.touches[0].pageX, v = a.touches[0].pageY, o = k ? f - v : f - u, t = k ? Math.abs(o) < Math.abs(u - h) : Math.abs(o) < Math.abs(v - h);
              var b = 500;
              (!t || Number(new Date) - p > b) && (a.preventDefault(), !n && d.transitions && (d.vars.animationLoop || (o /= 0 === d.currentSlide && o < 0 || d.currentSlide === d.last && o > 0 ? Math.abs(o) / j + 2 : 1), d.setProps(i + o, "setTouch")))
            }, s = function(a) {
              if (b.removeEventListener("touchmove", r, !1), d.animatingTo === d.currentSlide && !t && null !== o) {
                var c = l ? -o : o,
                  e = c > 0 ? d.getTarget("next") : d.getTarget("prev");
                d.canAdvance(e) && (Number(new Date) - p < 550 && Math.abs(c) > 50 || Math.abs(c) > j / 2) ? d.flexAnimate(e, d.vars.pauseOnAction) : n || d.flexAnimate(d.currentSlide, d.vars.pauseOnAction, !0)
              }
              b.removeEventListener("touchend", s, !1), f = null, h = null, o = null, i = null
            }, b.addEventListener("touchstart", q, !1))
          },
          resize: function() {
            !d.animating && d.is(":visible") && (m || d.doMath(), n ? p.smoothHeight() : m ? (d.slides.width(d.computedW), d.update(d.pagingCount), d.setProps()) : k ? (d.viewport.height(d.h), d.setProps(d.h, "setTotal")) : (d.vars.smoothHeight && p.smoothHeight(), d.newSlides.width(d.computedW), d.setProps(d.computedW, "setTotal")))
          },
          smoothHeight: function(a) {
            if (!k || n) {
              var b = n ? d : d.viewport;
              a ? b.animate({
                height: d.slides.eq(d.animatingTo).height()
              }, a) : b.height(d.slides.eq(d.animatingTo).height())
            }
          },
          sync: function(b) {
            var c = a(d.vars.sync).data("flexslider"),
              e = d.animatingTo;
            switch (b) {
              case "animate":
                c.flexAnimate(e, d.vars.pauseOnAction, !1, !0);
                break;
              case "play":
                c.playing || c.asNav || c.play();
                break;
              case "pause":
                c.pause()
            }
          },
          uniqueID: function(b) {
            return b.filter("[id]").add(b.find("[id]")).each(function() {
              var b = a(this);
              b.attr("id", b.attr("id") + "_clone")
            }), b
          },
          pauseInvisible: {
            visProp: null,
            init: function() {
              var a = p.pauseInvisible.getHiddenProp();
              if (a) {
                var b = a.replace(/[H|h]idden/, "") + "visibilitychange";
                document.addEventListener(b, function() {
                  p.pauseInvisible.isHidden() ? d.startTimeout ? clearTimeout(d.startTimeout) : d.pause() : d.started ? d.play() : d.vars.initDelay > 0 ? setTimeout(d.play, d.vars.initDelay) : d.play()
                })
              }
            },
            isHidden: function() {
              var a = p.pauseInvisible.getHiddenProp();
              return !!a && document[a]
            },
            getHiddenProp: function() {
              var a = ["webkit", "moz", "ms", "o"];
              if ("hidden" in document) return "hidden";
              for (var b = 0; b < a.length; b++)
                if (a[b] + "Hidden" in document) return a[b] + "Hidden";
              return null
            }
          },
          setToClearWatchedEvent: function() {
            clearTimeout(e), e = setTimeout(function() {
              j = ""
            }, 3e3)
          }
        }, d.flexAnimate = function(b, c, e, g, i) {
          if (d.vars.animationLoop || b === d.currentSlide || (d.direction = b > d.currentSlide ? "next" : "prev"), o && 1 === d.pagingCount && (d.direction = d.currentItem < b ? "next" : "prev"), !d.animating && (d.canAdvance(b, i) || e) && d.is(":visible")) {
            if (o && g) {
              var j = a(d.vars.asNavFor).data("flexslider");
              if (d.atEnd = 0 === b || b === d.count - 1, j.flexAnimate(b, !0, !1, !0, i), d.direction = d.currentItem < b ? "next" : "prev", j.direction = d.direction, Math.ceil((b + 1) / d.visible) - 1 === d.currentSlide || 0 === b) return d.currentItem = b, d.slides.removeClass(f + "active-slide").eq(b).addClass(f + "active-slide"), !1;
              d.currentItem = b, d.slides.removeClass(f + "active-slide").eq(b).addClass(f + "active-slide"), b = Math.floor(b / d.visible)
            }
            if (d.animating = !0, d.animatingTo = b, c && d.pause(), d.vars.before(d), d.syncExists && !i && p.sync("animate"), d.vars.controlNav && p.controlNav.active(), m || d.slides.removeClass(f + "active-slide").eq(b).addClass(f + "active-slide"), d.atEnd = 0 === b || b === d.last, d.vars.directionNav && p.directionNav.update(), b === d.last && (d.vars.end(d), d.vars.animationLoop || d.pause()), n) h ? (d.slides.eq(d.currentSlide).css({
              opacity: 0,
              zIndex: 1
            }), d.slides.eq(b).css({
              opacity: 1,
              zIndex: 2
            }), d.wrapup(t)) : (d.slides.eq(d.currentSlide).css({
              zIndex: 1
            }).animate({
              opacity: 0
            }, d.vars.animationSpeed, d.vars.easing), d.slides.eq(b).css({
              zIndex: 2
            }).animate({
              opacity: 1
            }, d.vars.animationSpeed, d.vars.easing, d.wrapup));
            else {
              var q, r, s, t = k ? d.slides.filter(":first").height() : d.computedW;
              m ? (q = d.vars.itemMargin, s = (d.itemW + q) * d.move * d.animatingTo, r = s > d.limit && 1 !== d.visible ? d.limit : s) : r = 0 === d.currentSlide && b === d.count - 1 && d.vars.animationLoop && "next" !== d.direction ? l ? (d.count + d.cloneOffset) * t : 0 : d.currentSlide === d.last && 0 === b && d.vars.animationLoop && "prev" !== d.direction ? l ? 0 : (d.count + 1) * t : l ? (d.count - 1 - b + d.cloneOffset) * t : (b + d.cloneOffset) * t, d.setProps(r, "", d.vars.animationSpeed), d.transitions ? (d.vars.animationLoop && d.atEnd || (d.animating = !1, d.currentSlide = d.animatingTo), d.container.unbind("webkitTransitionEnd transitionend"), d.container.bind("webkitTransitionEnd transitionend", function() {
                clearTimeout(d.ensureAnimationEnd), d.wrapup(t)
              }), clearTimeout(d.ensureAnimationEnd), d.ensureAnimationEnd = setTimeout(function() {
                d.wrapup(t)
              }, d.vars.animationSpeed + 100)) : d.container.animate(d.args, d.vars.animationSpeed, d.vars.easing, function() {
                d.wrapup(t)
              })
            }
            d.vars.smoothHeight && p.smoothHeight(d.vars.animationSpeed)
          }
        }, d.wrapup = function(a) {
          n || m || (0 === d.currentSlide && d.animatingTo === d.last && d.vars.animationLoop ? d.setProps(a, "jumpEnd") : d.currentSlide === d.last && 0 === d.animatingTo && d.vars.animationLoop && d.setProps(a, "jumpStart")), d.animating = !1, d.currentSlide = d.animatingTo, d.vars.after(d)
        }, d.animateSlides = function() {
          !d.animating && q && d.flexAnimate(d.getTarget("next"))
        }, d.pause = function() {
          clearInterval(d.animatedSlides), d.animatedSlides = null, d.playing = !1, d.vars.pausePlay && p.pausePlay.update("play"), d.syncExists && p.sync("pause")
        }, d.play = function() {
          d.playing && clearInterval(d.animatedSlides), d.animatedSlides = d.animatedSlides || setInterval(d.animateSlides, d.vars.slideshowSpeed), d.started = d.playing = !0, d.vars.pausePlay && p.pausePlay.update("pause"), d.syncExists && p.sync("play")
        }, d.stop = function() {
          d.pause(), d.stopped = !0
        }, d.canAdvance = function(a, b) {
          var c = o ? d.pagingCount - 1 : d.last;
          return !!b || (!(!o || d.currentItem !== d.count - 1 || 0 !== a || "prev" !== d.direction) || (!o || 0 !== d.currentItem || a !== d.pagingCount - 1 || "next" === d.direction) && (!(a === d.currentSlide && !o) && (!!d.vars.animationLoop || (!d.atEnd || 0 !== d.currentSlide || a !== c || "next" === d.direction) && (!d.atEnd || d.currentSlide !== c || 0 !== a || "next" !== d.direction))))
        }, d.getTarget = function(a) {
          return d.direction = a, "next" === a ? d.currentSlide === d.last ? 0 : d.currentSlide + 1 : 0 === d.currentSlide ? d.last : d.currentSlide - 1
        }, d.setProps = function(a, b, c) {
          var e = function() {
            var c = a ? a : (d.itemW + d.vars.itemMargin) * d.move * d.animatingTo,
              e = function() {
                if (m) return "setTouch" === b ? a : l && d.animatingTo === d.last ? 0 : l ? d.limit - (d.itemW + d.vars.itemMargin) * d.move * d.animatingTo : d.animatingTo === d.last ? d.limit : c;
                switch (b) {
                  case "setTotal":
                    return l ? (d.count - 1 - d.currentSlide + d.cloneOffset) * a : (d.currentSlide + d.cloneOffset) * a;
                  case "setTouch":
                    return l ? a : a;
                  case "jumpEnd":
                    return l ? a : d.count * a;
                  case "jumpStart":
                    return l ? d.count * a : a;
                  default:
                    return a
                }
              }();
            return e * -1 + "px"
          }();
          d.transitions && (e = k ? "translate3d(0," + e + ",0)" : "translate3d(" + e + ",0,0)", c = void 0 !== c ? c / 1e3 + "s" : "0s", d.container.css("-" + d.pfx + "-transition-duration", c), d.container.css("transition-duration", c)), d.args[d.prop] = e, (d.transitions || void 0 === c) && d.container.css(d.args), d.container.css("transform", e)
        }, d.setup = function(b) {
          if (n) d.slides.css({
            width: "100%",
            float: "left",
            marginRight: "-100%",
            position: "relative"
          }), "init" === b && (h ? d.slides.css({
            opacity: 0,
            display: "block",
            webkitTransition: "opacity " + d.vars.animationSpeed / 1e3 + "s ease",
            zIndex: 1
          }).eq(d.currentSlide).css({
            opacity: 1,
            zIndex: 2
          }) : 0 == d.vars.fadeFirstSlide ? d.slides.css({
            opacity: 0,
            display: "block",
            zIndex: 1
          }).eq(d.currentSlide).css({
            zIndex: 2
          }).css({
            opacity: 1
          }) : d.slides.css({
            opacity: 0,
            display: "block",
            zIndex: 1
          }).eq(d.currentSlide).css({
            zIndex: 2
          }).animate({
            opacity: 1
          }, d.vars.animationSpeed, d.vars.easing)), d.vars.smoothHeight && p.smoothHeight();
          else {
            var c, e;
            "init" === b && (d.viewport = a('<div class="' + f + 'viewport"></div>').css({
              overflow: "hidden",
              position: "relative"
            }).appendTo(d).append(d.container), d.cloneCount = 0, d.cloneOffset = 0, l && (e = a.makeArray(d.slides).reverse(), d.slides = a(e), d.container.empty().append(d.slides))), d.vars.animationLoop && !m && (d.cloneCount = 2, d.cloneOffset = 1, "init" !== b && d.container.find(".clone").remove(), d.container.append(p.uniqueID(d.slides.first().clone().addClass("clone")).attr("aria-hidden", "true")).prepend(p.uniqueID(d.slides.last().clone().addClass("clone")).attr("aria-hidden", "true"))), d.newSlides = a(d.vars.selector, d), c = l ? d.count - 1 - d.currentSlide + d.cloneOffset : d.currentSlide + d.cloneOffset, k && !m ? (d.container.height(200 * (d.count + d.cloneCount) + "%").css("position", "absolute").width("100%"), setTimeout(function() {
              d.newSlides.css({
                display: "block"
              }), d.doMath(), d.viewport.height(d.h), d.setProps(c * d.h, "init")
            }, "init" === b ? 100 : 0)) : (d.container.width(200 * (d.count + d.cloneCount) + "%"), d.setProps(c * d.computedW, "init"), setTimeout(function() {
              d.doMath(), d.newSlides.css({
                width: d.computedW,
                float: "left",
                display: "block"
              }), d.vars.smoothHeight && p.smoothHeight()
            }, "init" === b ? 100 : 0))
          }
          m || d.slides.removeClass(f + "active-slide").eq(d.currentSlide).addClass(f + "active-slide"), d.vars.init(d)
        }, d.doMath = function() {
          var a = d.slides.first(),
            b = d.vars.itemMargin,
            c = d.vars.minItems,
            e = d.vars.maxItems;
          d.w = void 0 === d.viewport ? d.width() : d.viewport.width(), d.h = a.height(), d.boxPadding = a.outerWidth() - a.width(), m ? (d.itemT = d.vars.itemWidth + b, d.minW = c ? c * d.itemT : d.w, d.maxW = e ? e * d.itemT - b : d.w, d.itemW = d.minW > d.w ? (d.w - b * (c - 1)) / c : d.maxW < d.w ? (d.w - b * (e - 1)) / e : d.vars.itemWidth > d.w ? d.w : d.vars.itemWidth, d.visible = Math.floor(d.w / d.itemW), d.move = d.vars.move > 0 && d.vars.move < d.visible ? d.vars.move : d.visible, d.pagingCount = Math.ceil((d.count - d.visible) / d.move + 1), d.last = d.pagingCount - 1, d.limit = 1 === d.pagingCount ? 0 : d.vars.itemWidth > d.w ? d.itemW * (d.count - 1) + b * (d.count - 1) : (d.itemW + b) * d.count - d.w - b) : (d.itemW = d.w, d.pagingCount = d.count, d.last = d.count - 1), d.computedW = d.itemW - d.boxPadding
        }, d.update = function(a, b) {
          d.doMath(), m || (a < d.currentSlide ? d.currentSlide += 1 : a <= d.currentSlide && 0 !== a && (d.currentSlide -= 1), d.animatingTo = d.currentSlide), d.vars.controlNav && !d.manualControls && ("add" === b && !m || d.pagingCount > d.controlNav.length ? p.controlNav.update("add") : ("remove" === b && !m || d.pagingCount < d.controlNav.length) && (m && d.currentSlide > d.last && (d.currentSlide -= 1, d.animatingTo -= 1), p.controlNav.update("remove", d.last))), d.vars.directionNav && p.directionNav.update()
        }, d.addSlide = function(b, c) {
          var e = a(b);
          d.count += 1, d.last = d.count - 1, k && l ? void 0 !== c ? d.slides.eq(d.count - c).after(e) : d.container.prepend(e) : void 0 !== c ? d.slides.eq(c).before(e) : d.container.append(e), d.update(c, "add"), d.slides = a(d.vars.selector + ":not(.clone)", d), d.setup(), d.vars.added(d)
        }, d.removeSlide = function(b) {
          var c = isNaN(b) ? d.slides.index(a(b)) : b;
          d.count -= 1, d.last = d.count - 1, isNaN(b) ? a(b, d.slides).remove() : k && l ? d.slides.eq(d.last).remove() : d.slides.eq(b).remove(), d.doMath(), d.update(c, "remove"), d.slides = a(d.vars.selector + ":not(.clone)", d), d.setup(), d.vars.removed(d)
        }, p.init()
      }, a(window).blur(function(a) {
        focused = !1
      }).focus(function(a) {
        focused = !0
      }), a.flexslider.defaults = {
        namespace: "flex-",
        selector: ".slides > li",
        animation: "fade",
        easing: "swing",
        direction: "horizontal",
        reverse: !1,
        animationLoop: !0,
        smoothHeight: !1,
        startAt: 0,
        slideshow: !0,
        slideshowSpeed: 7e3,
        animationSpeed: 600,
        initDelay: 0,
        randomize: !1,
        fadeFirstSlide: !0,
        thumbCaptions: !1,
        pauseOnAction: !0,
        pauseOnHover: !1,
        pauseInvisible: !0,
        useCSS: !0,
        touch: !0,
        video: !1,
        controlNav: !0,
        directionNav: !0,
        prevText: "Previous",
        nextText: "Next",
        keyboard: !0,
        multipleKeyboard: !1,
        mousewheel: !1,
        pausePlay: !1,
        pauseText: "Pause",
        playText: "Play",
        controlsContainer: "",
        manualControls: "",
        customDirectionNav: "",
        sync: "",
        asNavFor: "",
        itemWidth: 0,
        itemMargin: 0,
        minItems: 1,
        maxItems: 0,
        move: 0,
        allowOneSlide: !0,
        start: function() {},
        before: function() {},
        after: function() {},
        end: function() {},
        added: function() {},
        removed: function() {},
        init: function() {}
      }, a.fn.flexslider = function(b) {
        if (void 0 === b && (b = {}), "object" == typeof b) return this.each(function() {
          var c = a(this),
            d = b.selector ? b.selector : ".slides > li",
            e = c.find(d);
          1 === e.length && b.allowOneSlide === !0 || 0 === e.length ? (e.fadeIn(400), b.start && b.start(c)) : void 0 === c.data("flexslider") && new a.flexslider(this, b)
        });
        var c = a(this).data("flexslider");
        switch (b) {
          case "play":
            c.play();
            break;
          case "pause":
            c.pause();
            break;
          case "stop":
            c.stop();
            break;
          case "next":
            c.flexAnimate(c.getTarget("next"), !0);
            break;
          case "prev":
          case "previous":
            c.flexAnimate(c.getTarget("prev"), !0);
            break;
          default:
            "number" == typeof b && c.flexAnimate(b, !0)
        }
      }
    }(jQuery),
    function(a) {
      "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? module.exports = a : a(jQuery)
    }(function(a) {
      function b(b) {
        var g = b || window.event,
          h = i.call(arguments, 1),
          j = 0,
          k = 0,
          l = 0,
          m = 0;
        if (b = a.event.fix(g), b.type = "mousewheel", "detail" in g && (l = g.detail * -1), "wheelDelta" in g && (l = g.wheelDelta), "wheelDeltaY" in g && (l = g.wheelDeltaY), "wheelDeltaX" in g && (k = g.wheelDeltaX * -1), "axis" in g && g.axis === g.HORIZONTAL_AXIS && (k = l * -1, l = 0), j = 0 === l ? k : l, "deltaY" in g && (l = g.deltaY * -1, j = l), "deltaX" in g && (k = g.deltaX, 0 === l && (j = k * -1)), 0 !== l || 0 !== k) {
          if (1 === g.deltaMode) {
            var n = a.data(this, "mousewheel-line-height");
            j *= n, l *= n, k *= n
          } else if (2 === g.deltaMode) {
            var o = a.data(this, "mousewheel-page-height");
            j *= o, l *= o, k *= o
          }
          return m = Math.max(Math.abs(l), Math.abs(k)), (!f || m < f) && (f = m, d(g, m) && (f /= 40)), d(g, m) && (j /= 40, k /= 40, l /= 40), j = Math[j >= 1 ? "floor" : "ceil"](j / f), k = Math[k >= 1 ? "floor" : "ceil"](k / f), l = Math[l >= 1 ? "floor" : "ceil"](l / f), b.deltaX = k, b.deltaY = l, b.deltaFactor = f, b.deltaMode = 0, h.unshift(b, j, k, l), e && clearTimeout(e), e = setTimeout(c, 200), (a.event.dispatch || a.event.handle).apply(this, h)
        }
      }
  
      function c() {
        f = null
      }
  
      function d(a, b) {
        return k.settings.adjustOldDeltas && "mousewheel" === a.type && b % 120 === 0
      }
      var e, f, g = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
        h = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
        i = Array.prototype.slice;
      if (a.event.fixHooks)
        for (var j = g.length; j;) a.event.fixHooks[g[--j]] = a.event.mouseHooks;
      var k = a.event.special.mousewheel = {
        version: "3.1.9",
        setup: function() {
          if (this.addEventListener)
            for (var c = h.length; c;) this.addEventListener(h[--c], b, !1);
          else this.onmousewheel = b;
          a.data(this, "mousewheel-line-height", k.getLineHeight(this)), a.data(this, "mousewheel-page-height", k.getPageHeight(this))
        },
        teardown: function() {
          if (this.removeEventListener)
            for (var a = h.length; a;) this.removeEventListener(h[--a], b, !1);
          else this.onmousewheel = null
        },
        getLineHeight: function(b) {
          return parseInt(a(b)["offsetParent" in a.fn ? "offsetParent" : "parent"]().css("fontSize"), 10)
        },
        getPageHeight: function(b) {
          return a(b).height()
        },
        settings: {
          adjustOldDeltas: !0
        }
      };
      a.fn.extend({
        mousewheel: function(a) {
          return a ? this.bind("mousewheel", a) : this.trigger("mousewheel")
        },
        unmousewheel: function(a) {
          return this.unbind("mousewheel", a)
        }
      })
    }),
    function(a) {
      "use strict";
      "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : jQuery)
    }(function(a) {
      "use strict";
      var b = {
          wheelSpeed: 10,
          wheelPropagation: !1,
          minScrollbarLength: null,
          useBothWheelAxes: !1,
          useKeyboard: !0,
          suppressScrollX: !1,
          suppressScrollY: !1,
          scrollXMarginOffset: 0,
          scrollYMarginOffset: 0,
          includePadding: !0
        },
        c = function() {
          var a = 0;
          return function() {
            var b = a;
            return a += 1, ".perfect-scrollbar-" + b
          }
        }();
      a.fn.perfectScrollbar = function(d, e) {
        return this.each(function() {
          var f = a.extend(!0, {}, b),
            g = a(this);
          if ("object" == typeof d ? a.extend(!0, f, d) : e = d, "update" === e) return g.data("perfect-scrollbar-update") && g.data("perfect-scrollbar-update")(), g;
          if ("destroy" === e) return g.data("perfect-scrollbar-destroy") && g.data("perfect-scrollbar-destroy")(), g;
          if (g.data("perfect-scrollbar")) return g.data("perfect-scrollbar");
          g.addClass("ps-container");
          var h, i, j, k, l, m, n, o, p, q, r = a("<div class='ps-scrollbar-x-rail'></div>").appendTo(g),
            s = a("<div class='ps-scrollbar-y-rail'></div>").appendTo(g),
            t = a("<div class='ps-scrollbar-x'></div>").appendTo(r),
            u = a("<div class='ps-scrollbar-y'></div>").appendTo(s),
            v = parseInt(r.css("bottom"), 10),
            w = v === v,
            x = w ? null : parseInt(r.css("top"), 10),
            y = parseInt(s.css("right"), 10),
            z = y === y,
            A = z ? null : parseInt(s.css("left"), 10),
            B = "rtl" === g.css("direction"),
            C = c(),
            D = function(a, b) {
              var c = a + b,
                d = k - p;
              q = c < 0 ? 0 : c > d ? d : c;
              var e = parseInt(q * (m - k) / (k - p), 10);
              g.scrollTop(e), w ? r.css({
                bottom: v - e
              }) : r.css({
                top: x + e
              })
            },
            E = function(a, b) {
              var c = a + b,
                d = j - n;
              o = c < 0 ? 0 : c > d ? d : c;
              var e = parseInt(o * (l - j) / (j - n), 10);
              g.scrollLeft(e), z ? s.css({
                right: y - e
              }) : s.css({
                left: A + e
              })
            },
            F = function(a) {
              return f.minScrollbarLength && (a = Math.max(a, f.minScrollbarLength)), a
            },
            G = function() {
              var a = {
                width: j,
                display: h ? "inherit" : "none"
              };
              B ? a.left = g.scrollLeft() + j - l : a.left = g.scrollLeft(), w ? a.bottom = v - g.scrollTop() : a.top = x + g.scrollTop(), r.css(a);
              var b = {
                top: g.scrollTop(),
                height: k,
                display: i ? "inherit" : "none"
              };
              z ? B ? b.right = l - g.scrollLeft() - y - u.outerWidth() : b.right = y - g.scrollLeft() : B ? b.left = g.scrollLeft() + 2 * j - l - A - u.outerWidth() : b.left = A + g.scrollLeft(), s.css(b), t.css({
                left: o,
                width: n
              }), u.css({
                top: q,
                height: p
              })
            },
            H = function() {
              j = f.includePadding ? g.innerWidth() : g.width(), k = f.includePadding ? g.innerHeight() : g.height(), l = g.prop("scrollWidth"), m = g.prop("scrollHeight"), !f.suppressScrollX && j + f.scrollXMarginOffset < l ? (h = !0, n = F(parseInt(j * j / l, 10)), o = parseInt(g.scrollLeft() * (j - n) / (l - j), 10)) : (h = !1, n = 0, o = 0, g.scrollLeft(0)), !f.suppressScrollY && k + f.scrollYMarginOffset < m ? (i = !0, p = F(parseInt(k * k / m, 10)), q = parseInt(g.scrollTop() * (k - p) / (m - k), 10)) : (i = !1, p = 0, q = 0, g.scrollTop(0)), q >= k - p && (q = k - p), o >= j - n && (o = j - n), G()
            },
            I = function() {
              var b, c;
              t.bind("mousedown" + C, function(a) {
                c = a.pageX, b = t.position().left, r.addClass("in-scrolling"), a.stopPropagation(), a.preventDefault()
              }), a(document).bind("mousemove" + C, function(a) {
                r.hasClass("in-scrolling") && (E(b, a.pageX - c), a.stopPropagation(), a.preventDefault())
              }), a(document).bind("mouseup" + C, function(a) {
                r.hasClass("in-scrolling") && r.removeClass("in-scrolling")
              }), b = c = null
            },
            J = function() {
              var b, c;
              u.bind("mousedown" + C, function(a) {
                c = a.pageY, b = u.position().top, s.addClass("in-scrolling"), a.stopPropagation(), a.preventDefault()
              }), a(document).bind("mousemove" + C, function(a) {
                s.hasClass("in-scrolling") && (D(b, a.pageY - c), a.stopPropagation(), a.preventDefault())
              }), a(document).bind("mouseup" + C, function(a) {
                s.hasClass("in-scrolling") && s.removeClass("in-scrolling")
              }), b = c = null
            },
            K = function(a, b) {
              var c = g.scrollTop();
              if (0 === a) {
                if (!i) return !1;
                if (0 === c && b > 0 || c >= m - k && b < 0) return !f.wheelPropagation
              }
              var d = g.scrollLeft();
              if (0 === b) {
                if (!h) return !1;
                if (0 === d && a < 0 || d >= l - j && a > 0) return !f.wheelPropagation
              }
              return !0
            },
            L = function() {
              f.wheelSpeed /= 10;
              var a = !1;
              g.bind("mousewheel" + C, function(b, c, d, e) {
                var j = b.deltaX * b.deltaFactor || d,
                  k = b.deltaY * b.deltaFactor || e;
                a = !1, f.useBothWheelAxes ? i && !h ? (k ? g.scrollTop(g.scrollTop() - k * f.wheelSpeed) : g.scrollTop(g.scrollTop() + j * f.wheelSpeed), a = !0) : h && !i && (j ? g.scrollLeft(g.scrollLeft() + j * f.wheelSpeed) : g.scrollLeft(g.scrollLeft() - k * f.wheelSpeed), a = !0) : (g.scrollTop(g.scrollTop() - k * f.wheelSpeed), g.scrollLeft(g.scrollLeft() + j * f.wheelSpeed)), H(), a = a || K(j, k), a && (b.stopPropagation(), b.preventDefault())
              }), g.bind("MozMousePixelScroll" + C, function(b) {
                a && b.preventDefault()
              })
            },
            M = function() {
              var b = !1;
              g.bind("mouseenter" + C, function(a) {
                b = !0
              }), g.bind("mouseleave" + C, function(a) {
                b = !1
              });
              var c = !1;
              a(document).bind("keydown" + C, function(d) {
                if (b && !a(document.activeElement).is(":input,[contenteditable]")) {
                  var e = 0,
                    f = 0;
                  switch (d.which) {
                    case 37:
                      e = -30;
                      break;
                    case 38:
                      f = 30;
                      break;
                    case 39:
                      e = 30;
                      break;
                    case 40:
                      f = -30;
                      break;
                    case 33:
                      f = 90;
                      break;
                    case 32:
                    case 34:
                      f = -90;
                      break;
                    case 35:
                      f = -k;
                      break;
                    case 36:
                      f = k;
                      break;
                    default:
                      return
                  }
                  g.scrollTop(g.scrollTop() - f), g.scrollLeft(g.scrollLeft() + e), c = K(e, f), c && d.preventDefault()
                }
              })
            },
            N = function() {
              var a = function(a) {
                a.stopPropagation()
              };
              u.bind("click" + C, a), s.bind("click" + C, function(a) {
                var b = parseInt(p / 2, 10),
                  c = a.pageY - s.offset().top - b,
                  d = k - p,
                  e = c / d;
                e < 0 ? e = 0 : e > 1 && (e = 1), g.scrollTop((m - k) * e)
              }), t.bind("click" + C, a), r.bind("click" + C, function(a) {
                var b = parseInt(n / 2, 10),
                  c = a.pageX - r.offset().left - b,
                  d = j - n,
                  e = c / d;
                e < 0 ? e = 0 : e > 1 && (e = 1), g.scrollLeft((l - j) * e)
              })
            },
            O = function() {
              var b = function(a, b) {
                  g.scrollTop(g.scrollTop() - b), g.scrollLeft(g.scrollLeft() - a), H()
                },
                c = {},
                d = 0,
                e = {},
                f = null,
                h = !1;
              a(window).bind("touchstart" + C, function(a) {
                h = !0
              }), a(window).bind("touchend" + C, function(a) {
                h = !1
              }), g.bind("touchstart" + C, function(a) {
                var b = a.originalEvent.targetTouches[0];
                c.pageX = b.pageX, c.pageY = b.pageY, d = (new Date).getTime(), null !== f && clearInterval(f), a.stopPropagation()
              }), g.bind("touchmove" + C, function(a) {
                if (!h && 1 === a.originalEvent.targetTouches.length) {
                  var f = a.originalEvent.targetTouches[0],
                    g = {};
                  g.pageX = f.pageX, g.pageY = f.pageY;
                  var i = g.pageX - c.pageX,
                    j = g.pageY - c.pageY;
                  b(i, j), c = g;
                  var k = (new Date).getTime(),
                    l = k - d;
                  l > 0 && (e.x = i / l, e.y = j / l, d = k), a.preventDefault()
                }
              }), g.bind("touchend" + C, function(a) {
                clearInterval(f), f = setInterval(function() {
                  return Math.abs(e.x) < .01 && Math.abs(e.y) < .01 ? void clearInterval(f) : (b(30 * e.x, 30 * e.y), e.x *= .8, void(e.y *= .8))
                }, 10)
              })
            },
            P = function() {
              g.bind("scroll" + C, function(a) {
                H()
              })
            },
            Q = function() {
              g.unbind(C), a(window).unbind(C), a(document).unbind(C), g.data("perfect-scrollbar", null), g.data("perfect-scrollbar-update", null), g.data("perfect-scrollbar-destroy", null), t.remove(), u.remove(), r.remove(), s.remove(), r = s = t = u = h = i = j = k = l = m = n = o = v = w = x = p = q = y = z = A = B = C = null
            },
            R = function(b) {
              g.addClass("ie").addClass("ie" + b);
              var c = function() {
                  var b = function() {
                      a(this).addClass("hover")
                    },
                    c = function() {
                      a(this).removeClass("hover")
                    };
                  g.bind("mouseenter" + C, b).bind("mouseleave" + C, c), r.bind("mouseenter" + C, b).bind("mouseleave" + C, c), s.bind("mouseenter" + C, b).bind("mouseleave" + C, c), t.bind("mouseenter" + C, b).bind("mouseleave" + C, c), u.bind("mouseenter" + C, b).bind("mouseleave" + C, c)
                },
                d = function() {
                  G = function() {
                    var a = {
                      left: o + g.scrollLeft(),
                      width: n
                    };
                    w ? a.bottom = v : a.top = x, t.css(a);
                    var b = {
                      top: q + g.scrollTop(),
                      height: p
                    };
                    z ? b.right = y : b.left = A, u.css(b), t.hide().show(), u.hide().show()
                  }
                };
              6 === b && (c(), d())
            },
            S = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
            T = function() {
              var a = navigator.userAgent.toLowerCase().match(/(msie) ([\w.]+)/);
              a && "msie" === a[1] && R(parseInt(a[2], 10)),
                H(), P(), I(), J(), N(), S && O(), g.mousewheel && L(), f.useKeyboard && M(), g.data("perfect-scrollbar", g), g.data("perfect-scrollbar-update", H), g.data("perfect-scrollbar-destroy", Q)
            };
          return T(), g
        })
      }
    }), ! function() {
      "use strict";
  
      function a(a) {
        a.fn.swiper = function(b) {
          var d;
          return a(this).each(function() {
            var a = new c(this, b);
            d || (d = a)
          }), d
        }
      }
      var b, c = function(a, d) {
        function e(a) {
          return Math.floor(a)
        }
  
        function f() {
          t.autoplayTimeoutId = setTimeout(function() {
            t.params.loop ? (t.fixLoop(), t._slideNext(), t.emit("onAutoplay", t)) : t.isEnd ? d.autoplayStopOnLast ? t.stopAutoplay() : (t._slideTo(0), t.emit("onAutoplay", t)) : (t._slideNext(), t.emit("onAutoplay", t))
          }, t.params.autoplay)
        }
  
        function g(a, c) {
          var d = b(a.target);
          if (!d.is(c))
            if ("string" == typeof c) d = d.parents(c);
            else if (c.nodeType) {
            var e;
            return d.parents().each(function(a, b) {
              b === c && (e = c)
            }), e ? c : void 0
          }
          if (0 !== d.length) return d[0]
        }
  
        function h(a, b) {
          b = b || {};
          var c = window.MutationObserver || window.WebkitMutationObserver,
            d = new c(function(a) {
              a.forEach(function(a) {
                t.onResize(!0), t.emit("onObserverUpdate", t, a)
              })
            });
          d.observe(a, {
            attributes: "undefined" == typeof b.attributes || b.attributes,
            childList: "undefined" == typeof b.childList || b.childList,
            characterData: "undefined" == typeof b.characterData || b.characterData
          }), t.observers.push(d)
        }
  
        function i(a) {
          a.originalEvent && (a = a.originalEvent);
          var b = a.keyCode || a.charCode;
          if (!t.params.allowSwipeToNext && (t.isHorizontal() && 39 === b || !t.isHorizontal() && 40 === b)) return !1;
          if (!t.params.allowSwipeToPrev && (t.isHorizontal() && 37 === b || !t.isHorizontal() && 38 === b)) return !1;
          if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey || document.activeElement && document.activeElement.nodeName && ("input" === document.activeElement.nodeName.toLowerCase() || "textarea" === document.activeElement.nodeName.toLowerCase()))) {
            if (37 === b || 39 === b || 38 === b || 40 === b) {
              var c = !1;
              if (t.container.parents(".swiper-slide").length > 0 && 0 === t.container.parents(".swiper-slide-active").length) return;
              var d = {
                  left: window.pageXOffset,
                  top: window.pageYOffset
                },
                e = window.innerWidth,
                f = window.innerHeight,
                g = t.container.offset();
              t.rtl && (g.left = g.left - t.container[0].scrollLeft);
              for (var h = [
                  [g.left, g.top],
                  [g.left + t.width, g.top],
                  [g.left, g.top + t.height],
                  [g.left + t.width, g.top + t.height]
                ], i = 0; i < h.length; i++) {
                var j = h[i];
                j[0] >= d.left && j[0] <= d.left + e && j[1] >= d.top && j[1] <= d.top + f && (c = !0)
              }
              if (!c) return
            }
            t.isHorizontal() ? ((37 === b || 39 === b) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), (39 === b && !t.rtl || 37 === b && t.rtl) && t.slideNext(), (37 === b && !t.rtl || 39 === b && t.rtl) && t.slidePrev()) : ((38 === b || 40 === b) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), 40 === b && t.slideNext(), 38 === b && t.slidePrev())
          }
        }
  
        function j(a) {
          a.originalEvent && (a = a.originalEvent);
          var b = t.mousewheel.event,
            c = 0,
            d = t.rtl ? -1 : 1;
          if ("mousewheel" === b)
            if (t.params.mousewheelForceToAxis)
              if (t.isHorizontal()) {
                if (!(Math.abs(a.wheelDeltaX) > Math.abs(a.wheelDeltaY))) return;
                c = a.wheelDeltaX * d
              } else {
                if (!(Math.abs(a.wheelDeltaY) > Math.abs(a.wheelDeltaX))) return;
                c = a.wheelDeltaY
              }
          else c = Math.abs(a.wheelDeltaX) > Math.abs(a.wheelDeltaY) ? -a.wheelDeltaX * d : -a.wheelDeltaY;
          else if ("DOMMouseScroll" === b) c = -a.detail;
          else if ("wheel" === b)
            if (t.params.mousewheelForceToAxis)
              if (t.isHorizontal()) {
                if (!(Math.abs(a.deltaX) > Math.abs(a.deltaY))) return;
                c = -a.deltaX * d
              } else {
                if (!(Math.abs(a.deltaY) > Math.abs(a.deltaX))) return;
                c = -a.deltaY
              }
          else c = Math.abs(a.deltaX) > Math.abs(a.deltaY) ? -a.deltaX * d : -a.deltaY;
          if (0 !== c) {
            if (t.params.mousewheelInvert && (c = -c), t.params.freeMode) {
              var e = t.getWrapperTranslate() + c * t.params.mousewheelSensitivity,
                f = t.isBeginning,
                g = t.isEnd;
              if (e >= t.minTranslate() && (e = t.minTranslate()), e <= t.maxTranslate() && (e = t.maxTranslate()), t.setWrapperTransition(0), t.setWrapperTranslate(e), t.updateProgress(), t.updateActiveIndex(), (!f && t.isBeginning || !g && t.isEnd) && t.updateClasses(), t.params.freeModeSticky ? (clearTimeout(t.mousewheel.timeout), t.mousewheel.timeout = setTimeout(function() {
                  t.slideReset()
                }, 300)) : t.params.lazyLoading && t.lazy && t.lazy.load(), 0 === e || e === t.maxTranslate()) return
            } else {
              if ((new window.Date).getTime() - t.mousewheel.lastScrollTime > 60)
                if (0 > c)
                  if (t.isEnd && !t.params.loop || t.animating) {
                    if (t.params.mousewheelReleaseOnEdges) return !0
                  } else t.slideNext();
              else if (t.isBeginning && !t.params.loop || t.animating) {
                if (t.params.mousewheelReleaseOnEdges) return !0
              } else t.slidePrev();
              t.mousewheel.lastScrollTime = (new window.Date).getTime()
            }
            return t.params.autoplay && t.stopAutoplay(), a.preventDefault ? a.preventDefault() : a.returnValue = !1, !1
          }
        }
  
        function k(a, c) {
          a = b(a);
          var d, e, f, g = t.rtl ? -1 : 1;
          d = a.attr("data-swiper-parallax") || "0", e = a.attr("data-swiper-parallax-x"), f = a.attr("data-swiper-parallax-y"), e || f ? (e = e || "0", f = f || "0") : t.isHorizontal() ? (e = d, f = "0") : (f = d, e = "0"), e = e.indexOf("%") >= 0 ? parseInt(e, 10) * c * g + "%" : e * c * g + "px", f = f.indexOf("%") >= 0 ? parseInt(f, 10) * c + "%" : f * c + "px", a.transform("translate3d(" + e + ", " + f + ",0px)")
        }
  
        function l(a) {
          return 0 !== a.indexOf("on") && (a = a[0] !== a[0].toUpperCase() ? "on" + a[0].toUpperCase() + a.substring(1) : "on" + a), a
        }
        if (!(this instanceof c)) return new c(a, d);
        var m = {
            direction: "horizontal",
            touchEventsTarget: "container",
            initialSlide: 0,
            speed: 300,
            autoplay: !1,
            autoplayDisableOnInteraction: !0,
            autoplayStopOnLast: !1,
            iOSEdgeSwipeDetection: !1,
            iOSEdgeSwipeThreshold: 20,
            freeMode: !1,
            freeModeMomentum: !0,
            freeModeMomentumRatio: 1,
            freeModeMomentumBounce: !0,
            freeModeMomentumBounceRatio: 1,
            freeModeSticky: !1,
            freeModeMinimumVelocity: .02,
            autoHeight: !1,
            setWrapperSize: !1,
            virtualTranslate: !1,
            effect: "slide",
            coverflow: {
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: !0
            },
            flip: {
              slideShadows: !0,
              limitRotation: !0
            },
            cube: {
              slideShadows: !0,
              shadow: !0,
              shadowOffset: 20,
              shadowScale: .94
            },
            fade: {
              crossFade: !1
            },
            parallax: !1,
            scrollbar: null,
            scrollbarHide: !0,
            scrollbarDraggable: !1,
            scrollbarSnapOnRelease: !1,
            keyboardControl: !1,
            mousewheelControl: !1,
            mousewheelReleaseOnEdges: !1,
            mousewheelInvert: !1,
            mousewheelForceToAxis: !1,
            mousewheelSensitivity: 1,
            hashnav: !1,
            breakpoints: void 0,
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerColumnFill: "column",
            slidesPerGroup: 1,
            centeredSlides: !1,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            roundLengths: !1,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: !0,
            shortSwipes: !0,
            longSwipes: !0,
            longSwipesRatio: .5,
            longSwipesMs: 300,
            followFinger: !0,
            onlyExternal: !1,
            threshold: 0,
            touchMoveStopPropagation: !0,
            uniqueNavElements: !0,
            pagination: null,
            paginationElement: "span",
            paginationClickable: !1,
            paginationHide: !1,
            paginationBulletRender: null,
            paginationProgressRender: null,
            paginationFractionRender: null,
            paginationCustomRender: null,
            paginationType: "bullets",
            resistance: !0,
            resistanceRatio: .85,
            nextButton: null,
            prevButton: null,
            watchSlidesProgress: !1,
            watchSlidesVisibility: !1,
            grabCursor: !1,
            preventClicks: !0,
            preventClicksPropagation: !0,
            slideToClickedSlide: !1,
            lazyLoading: !1,
            lazyLoadingInPrevNext: !1,
            lazyLoadingInPrevNextAmount: 1,
            lazyLoadingOnTransitionStart: !1,
            preloadImages: !0,
            updateOnImagesReady: !0,
            loop: !1,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            control: void 0,
            controlInverse: !1,
            controlBy: "slide",
            allowSwipeToPrev: !0,
            allowSwipeToNext: !0,
            swipeHandler: null,
            noSwiping: !0,
            noSwipingClass: "swiper-no-swiping",
            slideClass: "swiper-slide",
            slideActiveClass: "swiper-slide-active",
            slideVisibleClass: "swiper-slide-visible",
            slideDuplicateClass: "swiper-slide-duplicate",
            slideNextClass: "swiper-slide-next",
            slidePrevClass: "swiper-slide-prev",
            wrapperClass: "swiper-wrapper",
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
            buttonDisabledClass: "swiper-button-disabled",
            paginationCurrentClass: "swiper-pagination-current",
            paginationTotalClass: "swiper-pagination-total",
            paginationHiddenClass: "swiper-pagination-hidden",
            paginationProgressbarClass: "swiper-pagination-progressbar",
            observer: !1,
            observeParents: !1,
            a11y: !1,
            prevSlideMessage: "Previous slide",
            nextSlideMessage: "Next slide",
            firstSlideMessage: "This is the first slide",
            lastSlideMessage: "This is the last slide",
            paginationBulletMessage: "Go to slide {{index}}",
            runCallbacksOnInit: !0
          },
          n = d && d.virtualTranslate;
        d = d || {};
        var o = {};
        for (var p in d)
          if ("object" != typeof d[p] || null === d[p] || d[p].nodeType || d[p] === window || d[p] === document || "undefined" != typeof Dom7 && d[p] instanceof Dom7 || "undefined" != typeof jQuery && d[p] instanceof jQuery) o[p] = d[p];
          else {
            o[p] = {};
            for (var q in d[p]) o[p][q] = d[p][q]
          }
        for (var r in m)
          if ("undefined" == typeof d[r]) d[r] = m[r];
          else if ("object" == typeof d[r])
          for (var s in m[r]) "undefined" == typeof d[r][s] && (d[r][s] = m[r][s]);
        var t = this;
        if (t.params = d, t.originalParams = o, t.classNames = [], "undefined" != typeof b && "undefined" != typeof Dom7 && (b = Dom7), ("undefined" != typeof b || (b = "undefined" == typeof Dom7 ? window.Dom7 || window.Zepto || window.jQuery : Dom7)) && (t.$ = b, t.currentBreakpoint = void 0, t.getActiveBreakpoint = function() {
            if (!t.params.breakpoints) return !1;
            var a, b = !1,
              c = [];
            for (a in t.params.breakpoints) t.params.breakpoints.hasOwnProperty(a) && c.push(a);
            c.sort(function(a, b) {
              return parseInt(a, 10) > parseInt(b, 10)
            });
            for (var d = 0; d < c.length; d++) a = c[d], a >= window.innerWidth && !b && (b = a);
            return b || "max"
          }, t.setBreakpoint = function() {
            var a = t.getActiveBreakpoint();
            if (a && t.currentBreakpoint !== a) {
              var b = a in t.params.breakpoints ? t.params.breakpoints[a] : t.originalParams,
                c = t.params.loop && b.slidesPerView !== t.params.slidesPerView;
              for (var d in b) t.params[d] = b[d];
              t.currentBreakpoint = a, c && t.destroyLoop && t.reLoop(!0)
            }
          }, t.params.breakpoints && t.setBreakpoint(), t.container = b(a), 0 !== t.container.length)) {
          if (t.container.length > 1) {
            var u = [];
            return t.container.each(function() {
              u.push(new c(this, d))
            }), u
          }
          t.container[0].swiper = t, t.container.data("swiper", t), t.classNames.push("swiper-container-" + t.params.direction), t.params.freeMode && t.classNames.push("swiper-container-free-mode"), t.support.flexbox || (t.classNames.push("swiper-container-no-flexbox"), t.params.slidesPerColumn = 1), t.params.autoHeight && t.classNames.push("swiper-container-autoheight"), (t.params.parallax || t.params.watchSlidesVisibility) && (t.params.watchSlidesProgress = !0), ["cube", "coverflow", "flip"].indexOf(t.params.effect) >= 0 && (t.support.transforms3d ? (t.params.watchSlidesProgress = !0, t.classNames.push("swiper-container-3d")) : t.params.effect = "slide"), "slide" !== t.params.effect && t.classNames.push("swiper-container-" + t.params.effect), "cube" === t.params.effect && (t.params.resistanceRatio = 0, t.params.slidesPerView = 1, t.params.slidesPerColumn = 1, t.params.slidesPerGroup = 1, t.params.centeredSlides = !1, t.params.spaceBetween = 0, t.params.virtualTranslate = !0, t.params.setWrapperSize = !1), ("fade" === t.params.effect || "flip" === t.params.effect) && (t.params.slidesPerView = 1, t.params.slidesPerColumn = 1, t.params.slidesPerGroup = 1, t.params.watchSlidesProgress = !0, t.params.spaceBetween = 0, t.params.setWrapperSize = !1, "undefined" == typeof n && (t.params.virtualTranslate = !0)), t.params.grabCursor && t.support.touch && (t.params.grabCursor = !1), t.wrapper = t.container.children("." + t.params.wrapperClass), t.params.pagination && (t.paginationContainer = b(t.params.pagination), t.params.uniqueNavElements && "string" == typeof t.params.pagination && t.paginationContainer.length > 1 && 1 === t.container.find(t.params.pagination).length && (t.paginationContainer = t.container.find(t.params.pagination)), "bullets" === t.params.paginationType && t.params.paginationClickable ? t.paginationContainer.addClass("swiper-pagination-clickable") : t.params.paginationClickable = !1, t.paginationContainer.addClass("swiper-pagination-" + t.params.paginationType)), (t.params.nextButton || t.params.prevButton) && (t.params.nextButton && (t.nextButton = b(t.params.nextButton), t.params.uniqueNavElements && "string" == typeof t.params.nextButton && t.nextButton.length > 1 && 1 === t.container.find(t.params.nextButton).length && (t.nextButton = t.container.find(t.params.nextButton))), t.params.prevButton && (t.prevButton = b(t.params.prevButton), t.params.uniqueNavElements && "string" == typeof t.params.prevButton && t.prevButton.length > 1 && 1 === t.container.find(t.params.prevButton).length && (t.prevButton = t.container.find(t.params.prevButton)))), t.isHorizontal = function() {
            return "horizontal" === t.params.direction
          }, t.rtl = t.isHorizontal() && ("rtl" === t.container[0].dir.toLowerCase() || "rtl" === t.container.css("direction")), t.rtl && t.classNames.push("swiper-container-rtl"), t.rtl && (t.wrongRTL = "-webkit-box" === t.wrapper.css("display")), t.params.slidesPerColumn > 1 && t.classNames.push("swiper-container-multirow"), t.device.android && t.classNames.push("swiper-container-android"), t.container.addClass(t.classNames.join(" ")), t.translate = 0, t.progress = 0, t.velocity = 0, t.lockSwipeToNext = function() {
            t.params.allowSwipeToNext = !1
          }, t.lockSwipeToPrev = function() {
            t.params.allowSwipeToPrev = !1
          }, t.lockSwipes = function() {
            t.params.allowSwipeToNext = t.params.allowSwipeToPrev = !1
          }, t.unlockSwipeToNext = function() {
            t.params.allowSwipeToNext = !0
          }, t.unlockSwipeToPrev = function() {
            t.params.allowSwipeToPrev = !0
          }, t.unlockSwipes = function() {
            t.params.allowSwipeToNext = t.params.allowSwipeToPrev = !0
          }, t.params.grabCursor && (t.container[0].style.cursor = "move", t.container[0].style.cursor = "-webkit-grab", t.container[0].style.cursor = "-moz-grab", t.container[0].style.cursor = "grab"), t.imagesToLoad = [], t.imagesLoaded = 0, t.loadImage = function(a, b, c, d, e) {
            function f() {
              e && e()
            }
            var g;
            a.complete && d ? f() : b ? (g = new window.Image, g.onload = f, g.onerror = f, c && (g.srcset = c), b && (g.src = b)) : f()
          }, t.preloadImages = function() {
            function a() {
              "undefined" != typeof t && null !== t && (void 0 !== t.imagesLoaded && t.imagesLoaded++, t.imagesLoaded === t.imagesToLoad.length && (t.params.updateOnImagesReady && t.update(), t.emit("onImagesReady", t)))
            }
            t.imagesToLoad = t.container.find("img");
            for (var b = 0; b < t.imagesToLoad.length; b++) t.loadImage(t.imagesToLoad[b], t.imagesToLoad[b].currentSrc || t.imagesToLoad[b].getAttribute("src"), t.imagesToLoad[b].srcset || t.imagesToLoad[b].getAttribute("srcset"), !0, a)
          }, t.autoplayTimeoutId = void 0, t.autoplaying = !1, t.autoplayPaused = !1, t.startAutoplay = function() {
            return "undefined" == typeof t.autoplayTimeoutId && (!!t.params.autoplay && (!t.autoplaying && (t.autoplaying = !0, t.emit("onAutoplayStart", t), void f())))
          }, t.stopAutoplay = function(a) {
            t.autoplayTimeoutId && (t.autoplayTimeoutId && clearTimeout(t.autoplayTimeoutId), t.autoplaying = !1, t.autoplayTimeoutId = void 0, t.emit("onAutoplayStop", t))
          }, t.pauseAutoplay = function(a) {
            t.autoplayPaused || (t.autoplayTimeoutId && clearTimeout(t.autoplayTimeoutId), t.autoplayPaused = !0, 0 === a ? (t.autoplayPaused = !1, f()) : t.wrapper.transitionEnd(function() {
              t && (t.autoplayPaused = !1, t.autoplaying ? f() : t.stopAutoplay())
            }))
          }, t.minTranslate = function() {
            return -t.snapGrid[0]
          }, t.maxTranslate = function() {
            return -t.snapGrid[t.snapGrid.length - 1]
          }, t.updateAutoHeight = function() {
            var a = t.slides.eq(t.activeIndex)[0];
            if ("undefined" != typeof a) {
              var b = a.offsetHeight;
              b && t.wrapper.css("height", b + "px")
            }
          }, t.updateContainerSize = function() {
            var a, b;
            a = "undefined" != typeof t.params.width ? t.params.width : t.container[0].clientWidth, b = "undefined" != typeof t.params.height ? t.params.height : t.container[0].clientHeight, 0 === a && t.isHorizontal() || 0 === b && !t.isHorizontal() || (a = a - parseInt(t.container.css("padding-left"), 10) - parseInt(t.container.css("padding-right"), 10), b = b - parseInt(t.container.css("padding-top"), 10) - parseInt(t.container.css("padding-bottom"), 10), t.width = a, t.height = b, t.size = t.isHorizontal() ? t.width : t.height)
          }, t.updateSlidesSize = function() {
            t.slides = t.wrapper.children("." + t.params.slideClass), t.snapGrid = [], t.slidesGrid = [], t.slidesSizesGrid = [];
            var a, b = t.params.spaceBetween,
              c = -t.params.slidesOffsetBefore,
              d = 0,
              f = 0;
            if ("undefined" != typeof t.size) {
              "string" == typeof b && b.indexOf("%") >= 0 && (b = parseFloat(b.replace("%", "")) / 100 * t.size), t.virtualSize = -b, t.rtl ? t.slides.css({
                marginLeft: "",
                marginTop: ""
              }) : t.slides.css({
                marginRight: "",
                marginBottom: ""
              });
              var g;
              t.params.slidesPerColumn > 1 && (g = Math.floor(t.slides.length / t.params.slidesPerColumn) === t.slides.length / t.params.slidesPerColumn ? t.slides.length : Math.ceil(t.slides.length / t.params.slidesPerColumn) * t.params.slidesPerColumn, "auto" !== t.params.slidesPerView && "row" === t.params.slidesPerColumnFill && (g = Math.max(g, t.params.slidesPerView * t.params.slidesPerColumn)));
              var h, i = t.params.slidesPerColumn,
                j = g / i,
                k = j - (t.params.slidesPerColumn * j - t.slides.length);
              for (a = 0; a < t.slides.length; a++) {
                h = 0;
                var l = t.slides.eq(a);
                if (t.params.slidesPerColumn > 1) {
                  var m, n, o;
                  "column" === t.params.slidesPerColumnFill ? (n = Math.floor(a / i), o = a - n * i, (n > k || n === k && o === i - 1) && ++o >= i && (o = 0, n++), m = n + o * g / i, l.css({
                    "-webkit-box-ordinal-group": m,
                    "-moz-box-ordinal-group": m,
                    "-ms-flex-order": m,
                    "-webkit-order": m,
                    order: m
                  })) : (o = Math.floor(a / j), n = a - o * j), l.css({
                    "margin-top": 0 !== o && t.params.spaceBetween && t.params.spaceBetween + "px"
                  }).attr("data-swiper-column", n).attr("data-swiper-row", o)
                }
                "none" !== l.css("display") && ("auto" === t.params.slidesPerView ? (h = t.isHorizontal() ? l.outerWidth(!0) : l.outerHeight(!0), t.params.roundLengths && (h = e(h))) : (h = (t.size - (t.params.slidesPerView - 1) * b) / t.params.slidesPerView, t.params.roundLengths && (h = e(h)), t.isHorizontal() ? t.slides[a].style.width = h + "px" : t.slides[a].style.height = h + "px"), t.slides[a].swiperSlideSize = h, t.slidesSizesGrid.push(h), t.params.centeredSlides ? (c = c + h / 2 + d / 2 + b, 0 === a && (c = c - t.size / 2 - b), Math.abs(c) < .001 && (c = 0), f % t.params.slidesPerGroup === 0 && t.snapGrid.push(c), t.slidesGrid.push(c)) : (f % t.params.slidesPerGroup === 0 && t.snapGrid.push(c), t.slidesGrid.push(c), c = c + h + b), t.virtualSize += h + b, d = h, f++)
              }
              t.virtualSize = Math.max(t.virtualSize, t.size) + t.params.slidesOffsetAfter;
              var p;
              if (t.rtl && t.wrongRTL && ("slide" === t.params.effect || "coverflow" === t.params.effect) && t.wrapper.css({
                  width: t.virtualSize + t.params.spaceBetween + "px"
                }), (!t.support.flexbox || t.params.setWrapperSize) && (t.isHorizontal() ? t.wrapper.css({
                  width: t.virtualSize + t.params.spaceBetween + "px"
                }) : t.wrapper.css({
                  height: t.virtualSize + t.params.spaceBetween + "px"
                })), t.params.slidesPerColumn > 1 && (t.virtualSize = (h + t.params.spaceBetween) * g, t.virtualSize = Math.ceil(t.virtualSize / t.params.slidesPerColumn) - t.params.spaceBetween, t.wrapper.css({
                  width: t.virtualSize + t.params.spaceBetween + "px"
                }), t.params.centeredSlides)) {
                for (p = [], a = 0; a < t.snapGrid.length; a++) t.snapGrid[a] < t.virtualSize + t.snapGrid[0] && p.push(t.snapGrid[a]);
                t.snapGrid = p
              }
              if (!t.params.centeredSlides) {
                for (p = [], a = 0; a < t.snapGrid.length; a++) t.snapGrid[a] <= t.virtualSize - t.size && p.push(t.snapGrid[a]);
                t.snapGrid = p, Math.floor(t.virtualSize - t.size) - Math.floor(t.snapGrid[t.snapGrid.length - 1]) > 1 && t.snapGrid.push(t.virtualSize - t.size)
              }
              0 === t.snapGrid.length && (t.snapGrid = [0]), 0 !== t.params.spaceBetween && (t.isHorizontal() ? t.rtl ? t.slides.css({
                marginLeft: b + "px"
              }) : t.slides.css({
                marginRight: b + "px"
              }) : t.slides.css({
                marginBottom: b + "px"
              })), t.params.watchSlidesProgress && t.updateSlidesOffset()
            }
          }, t.updateSlidesOffset = function() {
            for (var a = 0; a < t.slides.length; a++) t.slides[a].swiperSlideOffset = t.isHorizontal() ? t.slides[a].offsetLeft : t.slides[a].offsetTop
          }, t.updateSlidesProgress = function(a) {
            if ("undefined" == typeof a && (a = t.translate || 0), 0 !== t.slides.length) {
              "undefined" == typeof t.slides[0].swiperSlideOffset && t.updateSlidesOffset();
              var b = -a;
              t.rtl && (b = a), t.slides.removeClass(t.params.slideVisibleClass);
              for (var c = 0; c < t.slides.length; c++) {
                var d = t.slides[c],
                  e = (b - d.swiperSlideOffset) / (d.swiperSlideSize + t.params.spaceBetween);
                if (t.params.watchSlidesVisibility) {
                  var f = -(b - d.swiperSlideOffset),
                    g = f + t.slidesSizesGrid[c],
                    h = f >= 0 && f < t.size || g > 0 && g <= t.size || 0 >= f && g >= t.size;
                  h && t.slides.eq(c).addClass(t.params.slideVisibleClass)
                }
                d.progress = t.rtl ? -e : e
              }
            }
          }, t.updateProgress = function(a) {
            "undefined" == typeof a && (a = t.translate || 0);
            var b = t.maxTranslate() - t.minTranslate(),
              c = t.isBeginning,
              d = t.isEnd;
            0 === b ? (t.progress = 0, t.isBeginning = t.isEnd = !0) : (t.progress = (a - t.minTranslate()) / b, t.isBeginning = t.progress <= 0, t.isEnd = t.progress >= 1), t.isBeginning && !c && t.emit("onReachBeginning", t), t.isEnd && !d && t.emit("onReachEnd", t), t.params.watchSlidesProgress && t.updateSlidesProgress(a), t.emit("onProgress", t, t.progress)
          }, t.updateActiveIndex = function() {
            var a, b, c, d = t.rtl ? t.translate : -t.translate;
            for (b = 0; b < t.slidesGrid.length; b++) "undefined" != typeof t.slidesGrid[b + 1] ? d >= t.slidesGrid[b] && d < t.slidesGrid[b + 1] - (t.slidesGrid[b + 1] - t.slidesGrid[b]) / 2 ? a = b : d >= t.slidesGrid[b] && d < t.slidesGrid[b + 1] && (a = b + 1) : d >= t.slidesGrid[b] && (a = b);
            (0 > a || "undefined" == typeof a) && (a = 0), c = Math.floor(a / t.params.slidesPerGroup), c >= t.snapGrid.length && (c = t.snapGrid.length - 1), a !== t.activeIndex && (t.snapIndex = c, t.previousIndex = t.activeIndex, t.activeIndex = a, t.updateClasses())
          }, t.updateClasses = function() {
            t.slides.removeClass(t.params.slideActiveClass + " " + t.params.slideNextClass + " " + t.params.slidePrevClass);
            var a = t.slides.eq(t.activeIndex);
            a.addClass(t.params.slideActiveClass);
            var c = a.next("." + t.params.slideClass).addClass(t.params.slideNextClass);
            t.params.loop && 0 === c.length && t.slides.eq(0).addClass(t.params.slideNextClass);
            var d = a.prev("." + t.params.slideClass).addClass(t.params.slidePrevClass);
            if (t.params.loop && 0 === d.length && t.slides.eq(-1).addClass(t.params.slidePrevClass), t.paginationContainer && t.paginationContainer.length > 0) {
              var e, f = t.params.loop ? Math.ceil((t.slides.length - 2 * t.loopedSlides) / t.params.slidesPerGroup) : t.snapGrid.length;
              if (t.params.loop ? (e = Math.ceil((t.activeIndex - t.loopedSlides) / t.params.slidesPerGroup), e > t.slides.length - 1 - 2 * t.loopedSlides && (e -= t.slides.length - 2 * t.loopedSlides), e > f - 1 && (e -= f), 0 > e && "bullets" !== t.params.paginationType && (e = f + e)) : e = "undefined" != typeof t.snapIndex ? t.snapIndex : t.activeIndex || 0, "bullets" === t.params.paginationType && t.bullets && t.bullets.length > 0 && (t.bullets.removeClass(t.params.bulletActiveClass), t.paginationContainer.length > 1 ? t.bullets.each(function() {
                  b(this).index() === e && b(this).addClass(t.params.bulletActiveClass)
                }) : t.bullets.eq(e).addClass(t.params.bulletActiveClass)), "fraction" === t.params.paginationType && (t.paginationContainer.find("." + t.params.paginationCurrentClass).text(e + 1), t.paginationContainer.find("." + t.params.paginationTotalClass).text(f)), "progress" === t.params.paginationType) {
                var g = (e + 1) / f,
                  h = g,
                  i = 1;
                t.isHorizontal() || (i = g, h = 1), t.paginationContainer.find("." + t.params.paginationProgressbarClass).transform("translate3d(0,0,0) scaleX(" + h + ") scaleY(" + i + ")").transition(t.params.speed)
              }
              "custom" === t.params.paginationType && t.params.paginationCustomRender && (t.paginationContainer.html(t.params.paginationCustomRender(t, e + 1, f)), t.emit("onPaginationRendered", t, t.paginationContainer[0]))
            }
            t.params.loop || (t.params.prevButton && t.prevButton && t.prevButton.length > 0 && (t.isBeginning ? (t.prevButton.addClass(t.params.buttonDisabledClass), t.params.a11y && t.a11y && t.a11y.disable(t.prevButton)) : (t.prevButton.removeClass(t.params.buttonDisabledClass), t.params.a11y && t.a11y && t.a11y.enable(t.prevButton))), t.params.nextButton && t.nextButton && t.nextButton.length > 0 && (t.isEnd ? (t.nextButton.addClass(t.params.buttonDisabledClass), t.params.a11y && t.a11y && t.a11y.disable(t.nextButton)) : (t.nextButton.removeClass(t.params.buttonDisabledClass), t.params.a11y && t.a11y && t.a11y.enable(t.nextButton))))
          }, t.updatePagination = function() {
            if (t.params.pagination && t.paginationContainer && t.paginationContainer.length > 0) {
              var a = "";
              if ("bullets" === t.params.paginationType) {
                for (var b = t.params.loop ? Math.ceil((t.slides.length - 2 * t.loopedSlides) / t.params.slidesPerGroup) : t.snapGrid.length, c = 0; b > c; c++) a += t.params.paginationBulletRender ? t.params.paginationBulletRender(c, t.params.bulletClass) : "<" + t.params.paginationElement + ' class="' + t.params.bulletClass + '"></' + t.params.paginationElement + ">";
                t.paginationContainer.html(a), t.bullets = t.paginationContainer.find("." + t.params.bulletClass), t.params.paginationClickable && t.params.a11y && t.a11y && t.a11y.initPagination()
              }
              "fraction" === t.params.paginationType && (a = t.params.paginationFractionRender ? t.params.paginationFractionRender(t, t.params.paginationCurrentClass, t.params.paginationTotalClass) : '<span class="' + t.params.paginationCurrentClass + '"></span> / <span class="' + t.params.paginationTotalClass + '"></span>', t.paginationContainer.html(a)), "progress" === t.params.paginationType && (a = t.params.paginationProgressRender ? t.params.paginationProgressRender(t, t.params.paginationProgressbarClass) : '<span class="' + t.params.paginationProgressbarClass + '"></span>', t.paginationContainer.html(a)), "custom" !== t.params.paginationType && t.emit("onPaginationRendered", t, t.paginationContainer[0])
            }
          }, t.update = function(a) {
            function b() {
              d = Math.min(Math.max(t.translate, t.maxTranslate()), t.minTranslate()), t.setWrapperTranslate(d), t.updateActiveIndex(), t.updateClasses()
            }
            if (t.updateContainerSize(), t.updateSlidesSize(), t.updateProgress(), t.updatePagination(), t.updateClasses(), t.params.scrollbar && t.scrollbar && t.scrollbar.set(), a) {
              var c, d;
              t.controller && t.controller.spline && (t.controller.spline = void 0), t.params.freeMode ? (b(), t.params.autoHeight && t.updateAutoHeight()) : (c = ("auto" === t.params.slidesPerView || t.params.slidesPerView > 1) && t.isEnd && !t.params.centeredSlides ? t.slideTo(t.slides.length - 1, 0, !1, !0) : t.slideTo(t.activeIndex, 0, !1, !0), c || b())
            } else t.params.autoHeight && t.updateAutoHeight()
          }, t.onResize = function(a) {
            t.params.breakpoints && t.setBreakpoint();
            var b = t.params.allowSwipeToPrev,
              c = t.params.allowSwipeToNext;
            t.params.allowSwipeToPrev = t.params.allowSwipeToNext = !0, t.updateContainerSize(), t.updateSlidesSize(), ("auto" === t.params.slidesPerView || t.params.freeMode || a) && t.updatePagination(), t.params.scrollbar && t.scrollbar && t.scrollbar.set(), t.controller && t.controller.spline && (t.controller.spline = void 0);
            var d = !1;
            if (t.params.freeMode) {
              var e = Math.min(Math.max(t.translate, t.maxTranslate()), t.minTranslate());
              t.setWrapperTranslate(e), t.updateActiveIndex(), t.updateClasses(), t.params.autoHeight && t.updateAutoHeight()
            } else t.updateClasses(), d = ("auto" === t.params.slidesPerView || t.params.slidesPerView > 1) && t.isEnd && !t.params.centeredSlides ? t.slideTo(t.slides.length - 1, 0, !1, !0) : t.slideTo(t.activeIndex, 0, !1, !0);
            t.params.lazyLoading && !d && t.lazy && t.lazy.load(), t.params.allowSwipeToPrev = b, t.params.allowSwipeToNext = c
          };
          var v = ["mousedown", "mousemove", "mouseup"];
          window.navigator.pointerEnabled ? v = ["pointerdown", "pointermove", "pointerup"] : window.navigator.msPointerEnabled && (v = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), t.touchEvents = {
            start: t.support.touch || !t.params.simulateTouch ? "touchstart" : v[0],
            move: t.support.touch || !t.params.simulateTouch ? "touchmove" : v[1],
            end: t.support.touch || !t.params.simulateTouch ? "touchend" : v[2]
          }, (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && ("container" === t.params.touchEventsTarget ? t.container : t.wrapper).addClass("swiper-wp8-" + t.params.direction), t.initEvents = function(a) {
            var b = a ? "off" : "on",
              c = a ? "removeEventListener" : "addEventListener",
              e = "container" === t.params.touchEventsTarget ? t.container[0] : t.wrapper[0],
              f = t.support.touch ? e : document,
              g = !!t.params.nested;
            t.browser.ie ? (e[c](t.touchEvents.start, t.onTouchStart, !1), f[c](t.touchEvents.move, t.onTouchMove, g), f[c](t.touchEvents.end, t.onTouchEnd, !1)) : (t.support.touch && (e[c](t.touchEvents.start, t.onTouchStart, !1), e[c](t.touchEvents.move, t.onTouchMove, g), e[c](t.touchEvents.end, t.onTouchEnd, !1)), !d.simulateTouch || t.device.ios || t.device.android || (e[c]("mousedown", t.onTouchStart, !1), document[c]("mousemove", t.onTouchMove, g), document[c]("mouseup", t.onTouchEnd, !1))), window[c]("resize", t.onResize), t.params.nextButton && t.nextButton && t.nextButton.length > 0 && (t.nextButton[b]("click", t.onClickNext), t.params.a11y && t.a11y && t.nextButton[b]("keydown", t.a11y.onEnterKey)), t.params.prevButton && t.prevButton && t.prevButton.length > 0 && (t.prevButton[b]("click", t.onClickPrev), t.params.a11y && t.a11y && t.prevButton[b]("keydown", t.a11y.onEnterKey)), t.params.pagination && t.params.paginationClickable && (t.paginationContainer[b]("click", "." + t.params.bulletClass, t.onClickIndex), t.params.a11y && t.a11y && t.paginationContainer[b]("keydown", "." + t.params.bulletClass, t.a11y.onEnterKey)), (t.params.preventClicks || t.params.preventClicksPropagation) && e[c]("click", t.preventClicks, !0)
          }, t.attachEvents = function() {
            t.initEvents()
          }, t.detachEvents = function() {
            t.initEvents(!0)
          }, t.allowClick = !0, t.preventClicks = function(a) {
            t.allowClick || (t.params.preventClicks && a.preventDefault(), t.params.preventClicksPropagation && t.animating && (a.stopPropagation(), a.stopImmediatePropagation()))
          }, t.onClickNext = function(a) {
            a.preventDefault(), (!t.isEnd || t.params.loop) && t.slideNext()
          }, t.onClickPrev = function(a) {
            a.preventDefault(), (!t.isBeginning || t.params.loop) && t.slidePrev()
          }, t.onClickIndex = function(a) {
            a.preventDefault();
            var c = b(this).index() * t.params.slidesPerGroup;
            t.params.loop && (c += t.loopedSlides), t.slideTo(c)
          }, t.updateClickedSlide = function(a) {
            var c = g(a, "." + t.params.slideClass),
              d = !1;
            if (c)
              for (var e = 0; e < t.slides.length; e++) t.slides[e] === c && (d = !0);
            if (!c || !d) return t.clickedSlide = void 0, void(t.clickedIndex = void 0);
            if (t.clickedSlide = c, t.clickedIndex = b(c).index(), t.params.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex) {
              var f, h = t.clickedIndex;
              if (t.params.loop) {
                if (t.animating) return;
                f = b(t.clickedSlide).attr("data-swiper-slide-index"), t.params.centeredSlides ? h < t.loopedSlides - t.params.slidesPerView / 2 || h > t.slides.length - t.loopedSlides + t.params.slidesPerView / 2 ? (t.fixLoop(), h = t.wrapper.children("." + t.params.slideClass + '[data-swiper-slide-index="' + f + '"]:not(.swiper-slide-duplicate)').eq(0).index(), setTimeout(function() {
                  t.slideTo(h)
                }, 0)) : t.slideTo(h) : h > t.slides.length - t.params.slidesPerView ? (t.fixLoop(), h = t.wrapper.children("." + t.params.slideClass + '[data-swiper-slide-index="' + f + '"]:not(.swiper-slide-duplicate)').eq(0).index(), setTimeout(function() {
                  t.slideTo(h)
                }, 0)) : t.slideTo(h)
              } else t.slideTo(h)
            }
          };
          var w, x, y, z, A, B, C, D, E, F, G = "input, select, textarea, button",
            H = Date.now(),
            I = [];
          t.animating = !1, t.touches = {
            startX: 0,
            startY: 0,
            currentX: 0,
            currentY: 0,
            diff: 0
          };
          var J, K;
          if (t.onTouchStart = function(a) {
              if (a.originalEvent && (a = a.originalEvent), J = "touchstart" === a.type, J || !("which" in a) || 3 !== a.which) {
                if (t.params.noSwiping && g(a, "." + t.params.noSwipingClass)) return void(t.allowClick = !0);
                if (!t.params.swipeHandler || g(a, t.params.swipeHandler)) {
                  var c = t.touches.currentX = "touchstart" === a.type ? a.targetTouches[0].pageX : a.pageX,
                    d = t.touches.currentY = "touchstart" === a.type ? a.targetTouches[0].pageY : a.pageY;
                  if (!(t.device.ios && t.params.iOSEdgeSwipeDetection && c <= t.params.iOSEdgeSwipeThreshold)) {
                    if (w = !0, x = !1, y = !0, A = void 0, K = void 0, t.touches.startX = c, t.touches.startY = d, z = Date.now(), t.allowClick = !0, t.updateContainerSize(), t.swipeDirection = void 0, t.params.threshold > 0 && (D = !1), "touchstart" !== a.type) {
                      var e = !0;
                      b(a.target).is(G) && (e = !1), document.activeElement && b(document.activeElement).is(G) && document.activeElement.blur(), e && a.preventDefault()
                    }
                    t.emit("onTouchStart", t, a)
                  }
                }
              }
            }, t.onTouchMove = function(a) {
              if (a.originalEvent && (a = a.originalEvent), !J || "mousemove" !== a.type) {
                if (a.preventedByNestedSwiper) return t.touches.startX = "touchmove" === a.type ? a.targetTouches[0].pageX : a.pageX, void(t.touches.startY = "touchmove" === a.type ? a.targetTouches[0].pageY : a.pageY);
                if (t.params.onlyExternal) return t.allowClick = !1, void(w && (t.touches.startX = t.touches.currentX = "touchmove" === a.type ? a.targetTouches[0].pageX : a.pageX, t.touches.startY = t.touches.currentY = "touchmove" === a.type ? a.targetTouches[0].pageY : a.pageY, z = Date.now()));
                if (J && document.activeElement && a.target === document.activeElement && b(a.target).is(G)) return x = !0, void(t.allowClick = !1);
                if (y && t.emit("onTouchMove", t, a), !(a.targetTouches && a.targetTouches.length > 1)) {
                  if (t.touches.currentX = "touchmove" === a.type ? a.targetTouches[0].pageX : a.pageX, t.touches.currentY = "touchmove" === a.type ? a.targetTouches[0].pageY : a.pageY, "undefined" == typeof A) {
                    var c = 180 * Math.atan2(Math.abs(t.touches.currentY - t.touches.startY), Math.abs(t.touches.currentX - t.touches.startX)) / Math.PI;
                    A = t.isHorizontal() ? c > t.params.touchAngle : 90 - c > t.params.touchAngle
                  }
                  if (A && t.emit("onTouchMoveOpposite", t, a), "undefined" == typeof K && t.browser.ieTouch && (t.touches.currentX !== t.touches.startX || t.touches.currentY !== t.touches.startY) && (K = !0), w) {
                    if (A) return void(w = !1);
                    if (K || !t.browser.ieTouch) {
                      t.allowClick = !1, t.emit("onSliderMove", t, a), a.preventDefault(), t.params.touchMoveStopPropagation && !t.params.nested && a.stopPropagation(), x || (d.loop && t.fixLoop(), C = t.getWrapperTranslate(), t.setWrapperTransition(0), t.animating && t.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"), t.params.autoplay && t.autoplaying && (t.params.autoplayDisableOnInteraction ? t.stopAutoplay() : t.pauseAutoplay()), F = !1, t.params.grabCursor && (t.container[0].style.cursor = "move", t.container[0].style.cursor = "-webkit-grabbing", t.container[0].style.cursor = "-moz-grabbin", t.container[0].style.cursor = "grabbing")), x = !0;
                      var e = t.touches.diff = t.isHorizontal() ? t.touches.currentX - t.touches.startX : t.touches.currentY - t.touches.startY;
                      e *= t.params.touchRatio, t.rtl && (e = -e), t.swipeDirection = e > 0 ? "prev" : "next", B = e + C;
                      var f = !0;
                      if (e > 0 && B > t.minTranslate() ? (f = !1,
                          t.params.resistance && (B = t.minTranslate() - 1 + Math.pow(-t.minTranslate() + C + e, t.params.resistanceRatio))) : 0 > e && B < t.maxTranslate() && (f = !1, t.params.resistance && (B = t.maxTranslate() + 1 - Math.pow(t.maxTranslate() - C - e, t.params.resistanceRatio))), f && (a.preventedByNestedSwiper = !0), !t.params.allowSwipeToNext && "next" === t.swipeDirection && C > B && (B = C), !t.params.allowSwipeToPrev && "prev" === t.swipeDirection && B > C && (B = C), t.params.followFinger) {
                        if (t.params.threshold > 0) {
                          if (!(Math.abs(e) > t.params.threshold || D)) return void(B = C);
                          if (!D) return D = !0, t.touches.startX = t.touches.currentX, t.touches.startY = t.touches.currentY, B = C, void(t.touches.diff = t.isHorizontal() ? t.touches.currentX - t.touches.startX : t.touches.currentY - t.touches.startY)
                        }(t.params.freeMode || t.params.watchSlidesProgress) && t.updateActiveIndex(), t.params.freeMode && (0 === I.length && I.push({
                          position: t.touches[t.isHorizontal() ? "startX" : "startY"],
                          time: z
                        }), I.push({
                          position: t.touches[t.isHorizontal() ? "currentX" : "currentY"],
                          time: (new window.Date).getTime()
                        })), t.updateProgress(B), t.setWrapperTranslate(B)
                      }
                    }
                  }
                }
              }
            }, t.onTouchEnd = function(a) {
              if (a.originalEvent && (a = a.originalEvent), y && t.emit("onTouchEnd", t, a), y = !1, w) {
                t.params.grabCursor && x && w && (t.container[0].style.cursor = "move", t.container[0].style.cursor = "-webkit-grab", t.container[0].style.cursor = "-moz-grab", t.container[0].style.cursor = "grab");
                var c = Date.now(),
                  d = c - z;
                if (t.allowClick && (t.updateClickedSlide(a), t.emit("onTap", t, a), 300 > d && c - H > 300 && (E && clearTimeout(E), E = setTimeout(function() {
                    t && (t.params.paginationHide && t.paginationContainer.length > 0 && !b(a.target).hasClass(t.params.bulletClass) && t.paginationContainer.toggleClass(t.params.paginationHiddenClass), t.emit("onClick", t, a))
                  }, 300)), 300 > d && 300 > c - H && (E && clearTimeout(E), t.emit("onDoubleTap", t, a))), H = Date.now(), setTimeout(function() {
                    t && (t.allowClick = !0)
                  }, 0), !w || !x || !t.swipeDirection || 0 === t.touches.diff || B === C) return void(w = x = !1);
                w = x = !1;
                var e;
                if (e = t.params.followFinger ? t.rtl ? t.translate : -t.translate : -B, t.params.freeMode) {
                  if (e < -t.minTranslate()) return void t.slideTo(t.activeIndex);
                  if (e > -t.maxTranslate()) return void(t.slides.length < t.snapGrid.length ? t.slideTo(t.snapGrid.length - 1) : t.slideTo(t.slides.length - 1));
                  if (t.params.freeModeMomentum) {
                    if (I.length > 1) {
                      var f = I.pop(),
                        g = I.pop(),
                        h = f.position - g.position,
                        i = f.time - g.time;
                      t.velocity = h / i, t.velocity = t.velocity / 2, Math.abs(t.velocity) < t.params.freeModeMinimumVelocity && (t.velocity = 0), (i > 150 || (new window.Date).getTime() - f.time > 300) && (t.velocity = 0)
                    } else t.velocity = 0;
                    I.length = 0;
                    var j = 1e3 * t.params.freeModeMomentumRatio,
                      k = t.velocity * j,
                      l = t.translate + k;
                    t.rtl && (l = -l);
                    var m, n = !1,
                      o = 20 * Math.abs(t.velocity) * t.params.freeModeMomentumBounceRatio;
                    if (l < t.maxTranslate()) t.params.freeModeMomentumBounce ? (l + t.maxTranslate() < -o && (l = t.maxTranslate() - o), m = t.maxTranslate(), n = !0, F = !0) : l = t.maxTranslate();
                    else if (l > t.minTranslate()) t.params.freeModeMomentumBounce ? (l - t.minTranslate() > o && (l = t.minTranslate() + o), m = t.minTranslate(), n = !0, F = !0) : l = t.minTranslate();
                    else if (t.params.freeModeSticky) {
                      var p, q = 0;
                      for (q = 0; q < t.snapGrid.length; q += 1)
                        if (t.snapGrid[q] > -l) {
                          p = q;
                          break
                        }
                      l = Math.abs(t.snapGrid[p] - l) < Math.abs(t.snapGrid[p - 1] - l) || "next" === t.swipeDirection ? t.snapGrid[p] : t.snapGrid[p - 1], t.rtl || (l = -l)
                    }
                    if (0 !== t.velocity) j = t.rtl ? Math.abs((-l - t.translate) / t.velocity) : Math.abs((l - t.translate) / t.velocity);
                    else if (t.params.freeModeSticky) return void t.slideReset();
                    t.params.freeModeMomentumBounce && n ? (t.updateProgress(m), t.setWrapperTransition(j), t.setWrapperTranslate(l), t.onTransitionStart(), t.animating = !0, t.wrapper.transitionEnd(function() {
                      t && F && (t.emit("onMomentumBounce", t), t.setWrapperTransition(t.params.speed), t.setWrapperTranslate(m), t.wrapper.transitionEnd(function() {
                        t && t.onTransitionEnd()
                      }))
                    })) : t.velocity ? (t.updateProgress(l), t.setWrapperTransition(j), t.setWrapperTranslate(l), t.onTransitionStart(), t.animating || (t.animating = !0, t.wrapper.transitionEnd(function() {
                      t && t.onTransitionEnd()
                    }))) : t.updateProgress(l), t.updateActiveIndex()
                  }
                  return void((!t.params.freeModeMomentum || d >= t.params.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex()))
                }
                var r, s = 0,
                  u = t.slidesSizesGrid[0];
                for (r = 0; r < t.slidesGrid.length; r += t.params.slidesPerGroup) "undefined" != typeof t.slidesGrid[r + t.params.slidesPerGroup] ? e >= t.slidesGrid[r] && e < t.slidesGrid[r + t.params.slidesPerGroup] && (s = r, u = t.slidesGrid[r + t.params.slidesPerGroup] - t.slidesGrid[r]) : e >= t.slidesGrid[r] && (s = r, u = t.slidesGrid[t.slidesGrid.length - 1] - t.slidesGrid[t.slidesGrid.length - 2]);
                var v = (e - t.slidesGrid[s]) / u;
                if (d > t.params.longSwipesMs) {
                  if (!t.params.longSwipes) return void t.slideTo(t.activeIndex);
                  "next" === t.swipeDirection && (v >= t.params.longSwipesRatio ? t.slideTo(s + t.params.slidesPerGroup) : t.slideTo(s)), "prev" === t.swipeDirection && (v > 1 - t.params.longSwipesRatio ? t.slideTo(s + t.params.slidesPerGroup) : t.slideTo(s))
                } else {
                  if (!t.params.shortSwipes) return void t.slideTo(t.activeIndex);
                  "next" === t.swipeDirection && t.slideTo(s + t.params.slidesPerGroup), "prev" === t.swipeDirection && t.slideTo(s)
                }
              }
            }, t._slideTo = function(a, b) {
              return t.slideTo(a, b, !0, !0)
            }, t.slideTo = function(a, b, c, d) {
              "undefined" == typeof c && (c = !0), "undefined" == typeof a && (a = 0), 0 > a && (a = 0), t.snapIndex = Math.floor(a / t.params.slidesPerGroup), t.snapIndex >= t.snapGrid.length && (t.snapIndex = t.snapGrid.length - 1);
              var e = -t.snapGrid[t.snapIndex];
              t.params.autoplay && t.autoplaying && (d || !t.params.autoplayDisableOnInteraction ? t.pauseAutoplay(b) : t.stopAutoplay()), t.updateProgress(e);
              for (var f = 0; f < t.slidesGrid.length; f++) - Math.floor(100 * e) >= Math.floor(100 * t.slidesGrid[f]) && (a = f);
              return !(!t.params.allowSwipeToNext && e < t.translate && e < t.minTranslate()) && (!(!t.params.allowSwipeToPrev && e > t.translate && e > t.maxTranslate() && (t.activeIndex || 0) !== a) && ("undefined" == typeof b && (b = t.params.speed), t.previousIndex = t.activeIndex || 0, t.activeIndex = a, t.rtl && -e === t.translate || !t.rtl && e === t.translate ? (t.params.autoHeight && t.updateAutoHeight(), t.updateClasses(), "slide" !== t.params.effect && t.setWrapperTranslate(e), !1) : (t.updateClasses(), t.onTransitionStart(c), 0 === b ? (t.setWrapperTranslate(e), t.setWrapperTransition(0), t.onTransitionEnd(c)) : (t.setWrapperTranslate(e), t.setWrapperTransition(b), t.animating || (t.animating = !0, t.wrapper.transitionEnd(function() {
                t && t.onTransitionEnd(c)
              }))), !0)))
            }, t.onTransitionStart = function(a) {
              "undefined" == typeof a && (a = !0), t.params.autoHeight && t.updateAutoHeight(), t.lazy && t.lazy.onTransitionStart(), a && (t.emit("onTransitionStart", t), t.activeIndex !== t.previousIndex && (t.emit("onSlideChangeStart", t), t.activeIndex > t.previousIndex ? t.emit("onSlideNextStart", t) : t.emit("onSlidePrevStart", t)))
            }, t.onTransitionEnd = function(a) {
              t.animating = !1, t.setWrapperTransition(0), "undefined" == typeof a && (a = !0), t.lazy && t.lazy.onTransitionEnd(), a && (t.emit("onTransitionEnd", t), t.activeIndex !== t.previousIndex && (t.emit("onSlideChangeEnd", t), t.activeIndex > t.previousIndex ? t.emit("onSlideNextEnd", t) : t.emit("onSlidePrevEnd", t))), t.params.hashnav && t.hashnav && t.hashnav.setHash()
            }, t.slideNext = function(a, b, c) {
              return t.params.loop ? !t.animating && (t.fixLoop(), t.container[0].clientLeft, t.slideTo(t.activeIndex + t.params.slidesPerGroup, b, a, c)) : t.slideTo(t.activeIndex + t.params.slidesPerGroup, b, a, c)
            }, t._slideNext = function(a) {
              return t.slideNext(!0, a, !0)
            }, t.slidePrev = function(a, b, c) {
              return t.params.loop ? !t.animating && (t.fixLoop(), t.container[0].clientLeft, t.slideTo(t.activeIndex - 1, b, a, c)) : t.slideTo(t.activeIndex - 1, b, a, c)
            }, t._slidePrev = function(a) {
              return t.slidePrev(!0, a, !0)
            }, t.slideReset = function(a, b, c) {
              return t.slideTo(t.activeIndex, b, a)
            }, t.setWrapperTransition = function(a, b) {
              t.wrapper.transition(a), "slide" !== t.params.effect && t.effects[t.params.effect] && t.effects[t.params.effect].setTransition(a), t.params.parallax && t.parallax && t.parallax.setTransition(a), t.params.scrollbar && t.scrollbar && t.scrollbar.setTransition(a), t.params.control && t.controller && t.controller.setTransition(a, b), t.emit("onSetTransition", t, a)
            }, t.setWrapperTranslate = function(a, b, c) {
              var d = 0,
                f = 0,
                g = 0;
              t.isHorizontal() ? d = t.rtl ? -a : a : f = a, t.params.roundLengths && (d = e(d), f = e(f)), t.params.virtualTranslate || (t.support.transforms3d ? t.wrapper.transform("translate3d(" + d + "px, " + f + "px, " + g + "px)") : t.wrapper.transform("translate(" + d + "px, " + f + "px)")), t.translate = t.isHorizontal() ? d : f;
              var h, i = t.maxTranslate() - t.minTranslate();
              h = 0 === i ? 0 : (a - t.minTranslate()) / i, h !== t.progress && t.updateProgress(a), b && t.updateActiveIndex(), "slide" !== t.params.effect && t.effects[t.params.effect] && t.effects[t.params.effect].setTranslate(t.translate), t.params.parallax && t.parallax && t.parallax.setTranslate(t.translate), t.params.scrollbar && t.scrollbar && t.scrollbar.setTranslate(t.translate), t.params.control && t.controller && t.controller.setTranslate(t.translate, c), t.emit("onSetTranslate", t, t.translate)
            }, t.getTranslate = function(a, b) {
              var c, d, e, f;
              return "undefined" == typeof b && (b = "x"), t.params.virtualTranslate ? t.rtl ? -t.translate : t.translate : (e = window.getComputedStyle(a, null), window.WebKitCSSMatrix ? (d = e.transform || e.webkitTransform, d.split(",").length > 6 && (d = d.split(", ").map(function(a) {
                return a.replace(",", ".")
              }).join(", ")), f = new window.WebKitCSSMatrix("none" === d ? "" : d)) : (f = e.MozTransform || e.OTransform || e.MsTransform || e.msTransform || e.transform || e.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), c = f.toString().split(",")), "x" === b && (d = window.WebKitCSSMatrix ? f.m41 : 16 === c.length ? parseFloat(c[12]) : parseFloat(c[4])), "y" === b && (d = window.WebKitCSSMatrix ? f.m42 : 16 === c.length ? parseFloat(c[13]) : parseFloat(c[5])), t.rtl && d && (d = -d), d || 0)
            }, t.getWrapperTranslate = function(a) {
              return "undefined" == typeof a && (a = t.isHorizontal() ? "x" : "y"), t.getTranslate(t.wrapper[0], a)
            }, t.observers = [], t.initObservers = function() {
              if (t.params.observeParents)
                for (var a = t.container.parents(), b = 0; b < a.length; b++) h(a[b]);
              h(t.container[0], {
                childList: !1
              }), h(t.wrapper[0], {
                attributes: !1
              })
            }, t.disconnectObservers = function() {
              for (var a = 0; a < t.observers.length; a++) t.observers[a].disconnect();
              t.observers = []
            }, t.createLoop = function() {
              t.wrapper.children("." + t.params.slideClass + "." + t.params.slideDuplicateClass).remove();
              var a = t.wrapper.children("." + t.params.slideClass);
              "auto" !== t.params.slidesPerView || t.params.loopedSlides || (t.params.loopedSlides = a.length), t.loopedSlides = parseInt(t.params.loopedSlides || t.params.slidesPerView, 10), t.loopedSlides = t.loopedSlides + t.params.loopAdditionalSlides, t.loopedSlides > a.length && (t.loopedSlides = a.length);
              var c, d = [],
                e = [];
              for (a.each(function(c, f) {
                  var g = b(this);
                  c < t.loopedSlides && e.push(f), c < a.length && c >= a.length - t.loopedSlides && d.push(f), g.attr("data-swiper-slide-index", c)
                }), c = 0; c < e.length; c++) t.wrapper.append(b(e[c].cloneNode(!0)).addClass(t.params.slideDuplicateClass));
              for (c = d.length - 1; c >= 0; c--) t.wrapper.prepend(b(d[c].cloneNode(!0)).addClass(t.params.slideDuplicateClass))
            }, t.destroyLoop = function() {
              t.wrapper.children("." + t.params.slideClass + "." + t.params.slideDuplicateClass).remove(), t.slides.removeAttr("data-swiper-slide-index")
            }, t.reLoop = function(a) {
              var b = t.activeIndex - t.loopedSlides;
              t.destroyLoop(), t.createLoop(), t.updateSlidesSize(), a && t.slideTo(b + t.loopedSlides, 0, !1)
            }, t.fixLoop = function() {
              var a;
              t.activeIndex < t.loopedSlides ? (a = t.slides.length - 3 * t.loopedSlides + t.activeIndex, a += t.loopedSlides, t.slideTo(a, 0, !1, !0)) : ("auto" === t.params.slidesPerView && t.activeIndex >= 2 * t.loopedSlides || t.activeIndex > t.slides.length - 2 * t.params.slidesPerView) && (a = -t.slides.length + t.activeIndex + t.loopedSlides, a += t.loopedSlides, t.slideTo(a, 0, !1, !0))
            }, t.appendSlide = function(a) {
              if (t.params.loop && t.destroyLoop(), "object" == typeof a && a.length)
                for (var b = 0; b < a.length; b++) a[b] && t.wrapper.append(a[b]);
              else t.wrapper.append(a);
              t.params.loop && t.createLoop(), t.params.observer && t.support.observer || t.update(!0)
            }, t.prependSlide = function(a) {
              t.params.loop && t.destroyLoop();
              var b = t.activeIndex + 1;
              if ("object" == typeof a && a.length) {
                for (var c = 0; c < a.length; c++) a[c] && t.wrapper.prepend(a[c]);
                b = t.activeIndex + a.length
              } else t.wrapper.prepend(a);
              t.params.loop && t.createLoop(), t.params.observer && t.support.observer || t.update(!0), t.slideTo(b, 0, !1)
            }, t.removeSlide = function(a) {
              t.params.loop && (t.destroyLoop(), t.slides = t.wrapper.children("." + t.params.slideClass));
              var b, c = t.activeIndex;
              if ("object" == typeof a && a.length) {
                for (var d = 0; d < a.length; d++) b = a[d], t.slides[b] && t.slides.eq(b).remove(), c > b && c--;
                c = Math.max(c, 0)
              } else b = a, t.slides[b] && t.slides.eq(b).remove(), c > b && c--, c = Math.max(c, 0);
              t.params.loop && t.createLoop(), t.params.observer && t.support.observer || t.update(!0), t.params.loop ? t.slideTo(c + t.loopedSlides, 0, !1) : t.slideTo(c, 0, !1)
            }, t.removeAllSlides = function() {
              for (var a = [], b = 0; b < t.slides.length; b++) a.push(b);
              t.removeSlide(a)
            }, t.effects = {
              fade: {
                setTranslate: function() {
                  for (var a = 0; a < t.slides.length; a++) {
                    var b = t.slides.eq(a),
                      c = b[0].swiperSlideOffset,
                      d = -c;
                    t.params.virtualTranslate || (d -= t.translate);
                    var e = 0;
                    t.isHorizontal() || (e = d, d = 0);
                    var f = t.params.fade.crossFade ? Math.max(1 - Math.abs(b[0].progress), 0) : 1 + Math.min(Math.max(b[0].progress, -1), 0);
                    b.css({
                      opacity: f
                    }).transform("translate3d(" + d + "px, " + e + "px, 0px)")
                  }
                },
                setTransition: function(a) {
                  if (t.slides.transition(a), t.params.virtualTranslate && 0 !== a) {
                    var b = !1;
                    t.slides.transitionEnd(function() {
                      if (!b && t) {
                        b = !0, t.animating = !1;
                        for (var a = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], c = 0; c < a.length; c++) t.wrapper.trigger(a[c])
                      }
                    })
                  }
                }
              },
              flip: {
                setTranslate: function() {
                  for (var a = 0; a < t.slides.length; a++) {
                    var c = t.slides.eq(a),
                      d = c[0].progress;
                    t.params.flip.limitRotation && (d = Math.max(Math.min(c[0].progress, 1), -1));
                    var e = c[0].swiperSlideOffset,
                      f = -180 * d,
                      g = f,
                      h = 0,
                      i = -e,
                      j = 0;
                    if (t.isHorizontal() ? t.rtl && (g = -g) : (j = i, i = 0, h = -g, g = 0), c[0].style.zIndex = -Math.abs(Math.round(d)) + t.slides.length, t.params.flip.slideShadows) {
                      var k = t.isHorizontal() ? c.find(".swiper-slide-shadow-left") : c.find(".swiper-slide-shadow-top"),
                        l = t.isHorizontal() ? c.find(".swiper-slide-shadow-right") : c.find(".swiper-slide-shadow-bottom");
                      0 === k.length && (k = b('<div class="swiper-slide-shadow-' + (t.isHorizontal() ? "left" : "top") + '"></div>'), c.append(k)), 0 === l.length && (l = b('<div class="swiper-slide-shadow-' + (t.isHorizontal() ? "right" : "bottom") + '"></div>'), c.append(l)), k.length && (k[0].style.opacity = Math.max(-d, 0)), l.length && (l[0].style.opacity = Math.max(d, 0))
                    }
                    c.transform("translate3d(" + i + "px, " + j + "px, 0px) rotateX(" + h + "deg) rotateY(" + g + "deg)")
                  }
                },
                setTransition: function(a) {
                  if (t.slides.transition(a).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(a), t.params.virtualTranslate && 0 !== a) {
                    var c = !1;
                    t.slides.eq(t.activeIndex).transitionEnd(function() {
                      if (!c && t && b(this).hasClass(t.params.slideActiveClass)) {
                        c = !0, t.animating = !1;
                        for (var a = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], d = 0; d < a.length; d++) t.wrapper.trigger(a[d])
                      }
                    })
                  }
                }
              },
              cube: {
                setTranslate: function() {
                  var a, c = 0;
                  t.params.cube.shadow && (t.isHorizontal() ? (a = t.wrapper.find(".swiper-cube-shadow"), 0 === a.length && (a = b('<div class="swiper-cube-shadow"></div>'), t.wrapper.append(a)), a.css({
                    height: t.width + "px"
                  })) : (a = t.container.find(".swiper-cube-shadow"), 0 === a.length && (a = b('<div class="swiper-cube-shadow"></div>'), t.container.append(a))));
                  for (var d = 0; d < t.slides.length; d++) {
                    var e = t.slides.eq(d),
                      f = 90 * d,
                      g = Math.floor(f / 360);
                    t.rtl && (f = -f, g = Math.floor(-f / 360));
                    var h = Math.max(Math.min(e[0].progress, 1), -1),
                      i = 0,
                      j = 0,
                      k = 0;
                    d % 4 === 0 ? (i = 4 * -g * t.size, k = 0) : (d - 1) % 4 === 0 ? (i = 0, k = 4 * -g * t.size) : (d - 2) % 4 === 0 ? (i = t.size + 4 * g * t.size, k = t.size) : (d - 3) % 4 === 0 && (i = -t.size, k = 3 * t.size + 4 * t.size * g), t.rtl && (i = -i), t.isHorizontal() || (j = i, i = 0);
                    var l = "rotateX(" + (t.isHorizontal() ? 0 : -f) + "deg) rotateY(" + (t.isHorizontal() ? f : 0) + "deg) translate3d(" + i + "px, " + j + "px, " + k + "px)";
                    if (1 >= h && h > -1 && (c = 90 * d + 90 * h, t.rtl && (c = 90 * -d - 90 * h)), e.transform(l), t.params.cube.slideShadows) {
                      var m = t.isHorizontal() ? e.find(".swiper-slide-shadow-left") : e.find(".swiper-slide-shadow-top"),
                        n = t.isHorizontal() ? e.find(".swiper-slide-shadow-right") : e.find(".swiper-slide-shadow-bottom");
                      0 === m.length && (m = b('<div class="swiper-slide-shadow-' + (t.isHorizontal() ? "left" : "top") + '"></div>'), e.append(m)), 0 === n.length && (n = b('<div class="swiper-slide-shadow-' + (t.isHorizontal() ? "right" : "bottom") + '"></div>'), e.append(n)), m.length && (m[0].style.opacity = Math.max(-h, 0)), n.length && (n[0].style.opacity = Math.max(h, 0))
                    }
                  }
                  if (t.wrapper.css({
                      "-webkit-transform-origin": "50% 50% -" + t.size / 2 + "px",
                      "-moz-transform-origin": "50% 50% -" + t.size / 2 + "px",
                      "-ms-transform-origin": "50% 50% -" + t.size / 2 + "px",
                      "transform-origin": "50% 50% -" + t.size / 2 + "px"
                    }), t.params.cube.shadow)
                    if (t.isHorizontal()) a.transform("translate3d(0px, " + (t.width / 2 + t.params.cube.shadowOffset) + "px, " + -t.width / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + t.params.cube.shadowScale + ")");
                    else {
                      var o = Math.abs(c) - 90 * Math.floor(Math.abs(c) / 90),
                        p = 1.5 - (Math.sin(2 * o * Math.PI / 360) / 2 + Math.cos(2 * o * Math.PI / 360) / 2),
                        q = t.params.cube.shadowScale,
                        r = t.params.cube.shadowScale / p,
                        s = t.params.cube.shadowOffset;
                      a.transform("scale3d(" + q + ", 1, " + r + ") translate3d(0px, " + (t.height / 2 + s) + "px, " + -t.height / 2 / r + "px) rotateX(-90deg)")
                    }
                  var u = t.isSafari || t.isUiWebView ? -t.size / 2 : 0;
                  t.wrapper.transform("translate3d(0px,0," + u + "px) rotateX(" + (t.isHorizontal() ? 0 : c) + "deg) rotateY(" + (t.isHorizontal() ? -c : 0) + "deg)")
                },
                setTransition: function(a) {
                  t.slides.transition(a).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(a), t.params.cube.shadow && !t.isHorizontal() && t.container.find(".swiper-cube-shadow").transition(a)
                }
              },
              coverflow: {
                setTranslate: function() {
                  for (var a = t.translate, c = t.isHorizontal() ? -a + t.width / 2 : -a + t.height / 2, d = t.isHorizontal() ? t.params.coverflow.rotate : -t.params.coverflow.rotate, e = t.params.coverflow.depth, f = 0, g = t.slides.length; g > f; f++) {
                    var h = t.slides.eq(f),
                      i = t.slidesSizesGrid[f],
                      j = h[0].swiperSlideOffset,
                      k = (c - j - i / 2) / i * t.params.coverflow.modifier,
                      l = t.isHorizontal() ? d * k : 0,
                      m = t.isHorizontal() ? 0 : d * k,
                      n = -e * Math.abs(k),
                      o = t.isHorizontal() ? 0 : t.params.coverflow.stretch * k,
                      p = t.isHorizontal() ? t.params.coverflow.stretch * k : 0;
                    Math.abs(p) < .001 && (p = 0), Math.abs(o) < .001 && (o = 0), Math.abs(n) < .001 && (n = 0), Math.abs(l) < .001 && (l = 0), Math.abs(m) < .001 && (m = 0);
                    var q = "translate3d(" + p + "px," + o + "px," + n + "px)  rotateX(" + m + "deg) rotateY(" + l + "deg)";
                    if (h.transform(q), h[0].style.zIndex = -Math.abs(Math.round(k)) + 1, t.params.coverflow.slideShadows) {
                      var r = t.isHorizontal() ? h.find(".swiper-slide-shadow-left") : h.find(".swiper-slide-shadow-top"),
                        s = t.isHorizontal() ? h.find(".swiper-slide-shadow-right") : h.find(".swiper-slide-shadow-bottom");
                      0 === r.length && (r = b('<div class="swiper-slide-shadow-' + (t.isHorizontal() ? "left" : "top") + '"></div>'), h.append(r)), 0 === s.length && (s = b('<div class="swiper-slide-shadow-' + (t.isHorizontal() ? "right" : "bottom") + '"></div>'), h.append(s)), r.length && (r[0].style.opacity = k > 0 ? k : 0), s.length && (s[0].style.opacity = -k > 0 ? -k : 0)
                    }
                  }
                  if (t.browser.ie) {
                    var u = t.wrapper[0].style;
                    u.perspectiveOrigin = c + "px 50%"
                  }
                },
                setTransition: function(a) {
                  t.slides.transition(a).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(a)
                }
              }
            }, t.lazy = {
              initialImageLoaded: !1,
              loadImageInSlide: function(a, c) {
                if ("undefined" != typeof a && ("undefined" == typeof c && (c = !0), 0 !== t.slides.length)) {
                  var d = t.slides.eq(a),
                    e = d.find(".swiper-lazy:not(.swiper-lazy-loaded):not(.swiper-lazy-loading)");
                  !d.hasClass("swiper-lazy") || d.hasClass("swiper-lazy-loaded") || d.hasClass("swiper-lazy-loading") || (e = e.add(d[0])), 0 !== e.length && e.each(function() {
                    var a = b(this);
                    a.addClass("swiper-lazy-loading");
                    var e = a.attr("data-background"),
                      f = a.attr("data-src"),
                      g = a.attr("data-srcset");
                    t.loadImage(a[0], f || e, g, !1, function() {
                      if (e ? (a.css("background-image", 'url("' + e + '")'), a.removeAttr("data-background")) : (g && (a.attr("srcset", g), a.removeAttr("data-srcset")), f && (a.attr("src", f), a.removeAttr("data-src"))), a.addClass("swiper-lazy-loaded").removeClass("swiper-lazy-loading"), d.find(".swiper-lazy-preloader, .preloader").remove(), t.params.loop && c) {
                        var b = d.attr("data-swiper-slide-index");
                        if (d.hasClass(t.params.slideDuplicateClass)) {
                          var h = t.wrapper.children('[data-swiper-slide-index="' + b + '"]:not(.' + t.params.slideDuplicateClass + ")");
                          t.lazy.loadImageInSlide(h.index(), !1)
                        } else {
                          var i = t.wrapper.children("." + t.params.slideDuplicateClass + '[data-swiper-slide-index="' + b + '"]');
                          t.lazy.loadImageInSlide(i.index(), !1)
                        }
                      }
                      t.emit("onLazyImageReady", t, d[0], a[0])
                    }), t.emit("onLazyImageLoad", t, d[0], a[0])
                  })
                }
              },
              load: function() {
                var a;
                if (t.params.watchSlidesVisibility) t.wrapper.children("." + t.params.slideVisibleClass).each(function() {
                  t.lazy.loadImageInSlide(b(this).index())
                });
                else if (t.params.slidesPerView > 1)
                  for (a = t.activeIndex; a < t.activeIndex + t.params.slidesPerView; a++) t.slides[a] && t.lazy.loadImageInSlide(a);
                else t.lazy.loadImageInSlide(t.activeIndex);
                if (t.params.lazyLoadingInPrevNext)
                  if (t.params.slidesPerView > 1 || t.params.lazyLoadingInPrevNextAmount && t.params.lazyLoadingInPrevNextAmount > 1) {
                    var c = t.params.lazyLoadingInPrevNextAmount,
                      d = t.params.slidesPerView,
                      e = Math.min(t.activeIndex + d + Math.max(c, d), t.slides.length),
                      f = Math.max(t.activeIndex - Math.max(d, c), 0);
                    for (a = t.activeIndex + t.params.slidesPerView; e > a; a++) t.slides[a] && t.lazy.loadImageInSlide(a);
                    for (a = f; a < t.activeIndex; a++) t.slides[a] && t.lazy.loadImageInSlide(a)
                  } else {
                    var g = t.wrapper.children("." + t.params.slideNextClass);
                    g.length > 0 && t.lazy.loadImageInSlide(g.index());
                    var h = t.wrapper.children("." + t.params.slidePrevClass);
                    h.length > 0 && t.lazy.loadImageInSlide(h.index())
                  }
              },
              onTransitionStart: function() {
                t.params.lazyLoading && (t.params.lazyLoadingOnTransitionStart || !t.params.lazyLoadingOnTransitionStart && !t.lazy.initialImageLoaded) && t.lazy.load()
              },
              onTransitionEnd: function() {
                t.params.lazyLoading && !t.params.lazyLoadingOnTransitionStart && t.lazy.load()
              }
            }, t.scrollbar = {
              isTouched: !1,
              setDragPosition: function(a) {
                var b = t.scrollbar,
                  c = t.isHorizontal() ? "touchstart" === a.type || "touchmove" === a.type ? a.targetTouches[0].pageX : a.pageX || a.clientX : "touchstart" === a.type || "touchmove" === a.type ? a.targetTouches[0].pageY : a.pageY || a.clientY,
                  d = c - b.track.offset()[t.isHorizontal() ? "left" : "top"] - b.dragSize / 2,
                  e = -t.minTranslate() * b.moveDivider,
                  f = -t.maxTranslate() * b.moveDivider;
                e > d ? d = e : d > f && (d = f), d = -d / b.moveDivider, t.updateProgress(d), t.setWrapperTranslate(d, !0)
              },
              dragStart: function(a) {
                var b = t.scrollbar;
                b.isTouched = !0, a.preventDefault(), a.stopPropagation(), b.setDragPosition(a), clearTimeout(b.dragTimeout), b.track.transition(0), t.params.scrollbarHide && b.track.css("opacity", 1), t.wrapper.transition(100), b.drag.transition(100), t.emit("onScrollbarDragStart", t)
              },
              dragMove: function(a) {
                var b = t.scrollbar;
                b.isTouched && (a.preventDefault ? a.preventDefault() : a.returnValue = !1, b.setDragPosition(a), t.wrapper.transition(0), b.track.transition(0), b.drag.transition(0), t.emit("onScrollbarDragMove", t))
              },
              dragEnd: function(a) {
                var b = t.scrollbar;
                b.isTouched && (b.isTouched = !1, t.params.scrollbarHide && (clearTimeout(b.dragTimeout), b.dragTimeout = setTimeout(function() {
                  b.track.css("opacity", 0), b.track.transition(400)
                }, 1e3)), t.emit("onScrollbarDragEnd", t), t.params.scrollbarSnapOnRelease && t.slideReset())
              },
              enableDraggable: function() {
                var a = t.scrollbar,
                  c = t.support.touch ? a.track : document;
                b(a.track).on(t.touchEvents.start, a.dragStart), b(c).on(t.touchEvents.move, a.dragMove), b(c).on(t.touchEvents.end, a.dragEnd)
              },
              disableDraggable: function() {
                var a = t.scrollbar,
                  c = t.support.touch ? a.track : document;
                b(a.track).off(t.touchEvents.start, a.dragStart), b(c).off(t.touchEvents.move, a.dragMove), b(c).off(t.touchEvents.end, a.dragEnd)
              },
              set: function() {
                if (t.params.scrollbar) {
                  var a = t.scrollbar;
                  a.track = b(t.params.scrollbar), t.params.uniqueNavElements && "string" == typeof t.params.scrollbar && a.track.length > 1 && 1 === t.container.find(t.params.scrollbar).length && (a.track = t.container.find(t.params.scrollbar)), a.drag = a.track.find(".swiper-scrollbar-drag"), 0 === a.drag.length && (a.drag = b('<div class="swiper-scrollbar-drag"></div>'), a.track.append(a.drag)), a.drag[0].style.width = "", a.drag[0].style.height = "", a.trackSize = t.isHorizontal() ? a.track[0].offsetWidth : a.track[0].offsetHeight, a.divider = t.size / t.virtualSize, a.moveDivider = a.divider * (a.trackSize / t.size), a.dragSize = a.trackSize * a.divider, t.isHorizontal() ? a.drag[0].style.width = a.dragSize + "px" : a.drag[0].style.height = a.dragSize + "px", a.divider >= 1 ? a.track[0].style.display = "none" : a.track[0].style.display = "", t.params.scrollbarHide && (a.track[0].style.opacity = 0)
                }
              },
              setTranslate: function() {
                if (t.params.scrollbar) {
                  var a, b = t.scrollbar,
                    c = (t.translate || 0, b.dragSize);
                  a = (b.trackSize - b.dragSize) * t.progress, t.rtl && t.isHorizontal() ? (a = -a, a > 0 ? (c = b.dragSize - a, a = 0) : -a + b.dragSize > b.trackSize && (c = b.trackSize + a)) : 0 > a ? (c = b.dragSize + a, a = 0) : a + b.dragSize > b.trackSize && (c = b.trackSize - a), t.isHorizontal() ? (t.support.transforms3d ? b.drag.transform("translate3d(" + a + "px, 0, 0)") : b.drag.transform("translateX(" + a + "px)"), b.drag[0].style.width = c + "px") : (t.support.transforms3d ? b.drag.transform("translate3d(0px, " + a + "px, 0)") : b.drag.transform("translateY(" + a + "px)"), b.drag[0].style.height = c + "px"), t.params.scrollbarHide && (clearTimeout(b.timeout), b.track[0].style.opacity = 1, b.timeout = setTimeout(function() {
                    b.track[0].style.opacity = 0, b.track.transition(400)
                  }, 1e3))
                  console.log(c)
                }
              },
              setTransition: function(a) {
                t.params.scrollbar && t.scrollbar.drag.transition(a)
              }
            }, t.controller = {
              LinearSpline: function(a, b) {
                this.x = a, this.y = b, this.lastIndex = a.length - 1;
                var c, d;
                this.x.length, this.interpolate = function(a) {
                  return a ? (d = e(this.x, a), c = d - 1, (a - this.x[c]) * (this.y[d] - this.y[c]) / (this.x[d] - this.x[c]) + this.y[c]) : 0
                };
                var e = function() {
                  var a, b, c;
                  return function(d, e) {
                    for (b = -1, a = d.length; a - b > 1;) d[c = a + b >> 1] <= e ? b = c : a = c;
                    return a
                  }
                }()
              },
              getInterpolateFunction: function(a) {
                t.controller.spline || (t.controller.spline = t.params.loop ? new t.controller.LinearSpline(t.slidesGrid, a.slidesGrid) : new t.controller.LinearSpline(t.snapGrid, a.snapGrid))
              },
              setTranslate: function(a, b) {
                function d(b) {
                  a = b.rtl && "horizontal" === b.params.direction ? -t.translate : t.translate, "slide" === t.params.controlBy && (t.controller.getInterpolateFunction(b), f = -t.controller.spline.interpolate(-a)), f && "container" !== t.params.controlBy || (e = (b.maxTranslate() - b.minTranslate()) / (t.maxTranslate() - t.minTranslate()), f = (a - t.minTranslate()) * e + b.minTranslate()), t.params.controlInverse && (f = b.maxTranslate() - f), b.updateProgress(f), b.setWrapperTranslate(f, !1, t), b.updateActiveIndex()
                }
                var e, f, g = t.params.control;
                if (t.isArray(g))
                  for (var h = 0; h < g.length; h++) g[h] !== b && g[h] instanceof c && d(g[h]);
                else g instanceof c && b !== g && d(g)
              },
              setTransition: function(a, b) {
                function d(b) {
                  b.setWrapperTransition(a, t), 0 !== a && (b.onTransitionStart(), b.wrapper.transitionEnd(function() {
                    f && (b.params.loop && "slide" === t.params.controlBy && b.fixLoop(), b.onTransitionEnd())
                  }))
                }
                var e, f = t.params.control;
                if (t.isArray(f))
                  for (e = 0; e < f.length; e++) f[e] !== b && f[e] instanceof c && d(f[e]);
                else f instanceof c && b !== f && d(f)
              }
            }, t.hashnav = {
              init: function() {
                if (t.params.hashnav) {
                  t.hashnav.initialized = !0;
                  var a = document.location.hash.replace("#", "");
                  if (a)
                    for (var b = 0, c = 0, d = t.slides.length; d > c; c++) {
                      var e = t.slides.eq(c),
                        f = e.attr("data-hash");
                      if (f === a && !e.hasClass(t.params.slideDuplicateClass)) {
                        var g = e.index();
                        t.slideTo(g, b, t.params.runCallbacksOnInit, !0)
                      }
                    }
                }
              },
              setHash: function() {
                t.hashnav.initialized && t.params.hashnav && (document.location.hash = t.slides.eq(t.activeIndex).attr("data-hash") || "")
              }
            }, t.disableKeyboardControl = function() {
              t.params.keyboardControl = !1, b(document).off("keydown", i)
            }, t.enableKeyboardControl = function() {
              t.params.keyboardControl = !0, b(document).on("keydown", i)
            }, t.mousewheel = {
              event: !1,
              lastScrollTime: (new window.Date).getTime()
            }, t.params.mousewheelControl) {
            try {
              new window.WheelEvent("wheel"), t.mousewheel.event = "wheel"
            } catch (a) {
              (window.WheelEvent || t.container[0] && "wheel" in t.container[0]) && (t.mousewheel.event = "wheel")
            }!t.mousewheel.event && window.WheelEvent, t.mousewheel.event || void 0 === document.onmousewheel || (t.mousewheel.event = "mousewheel"), t.mousewheel.event || (t.mousewheel.event = "DOMMouseScroll")
          }
          t.disableMousewheelControl = function() {
            return !!t.mousewheel.event && (t.container.off(t.mousewheel.event, j), !0)
          }, t.enableMousewheelControl = function() {
            return !!t.mousewheel.event && (t.container.on(t.mousewheel.event, j), !0)
          }, t.parallax = {
            setTranslate: function() {
              t.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                k(this, t.progress)
              }), t.slides.each(function() {
                var a = b(this);
                a.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                  var b = Math.min(Math.max(a[0].progress, -1), 1);
                  k(this, b)
                })
              })
            },
            setTransition: function(a) {
              "undefined" == typeof a && (a = t.params.speed), t.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                var c = b(this),
                  d = parseInt(c.attr("data-swiper-parallax-duration"), 10) || a;
                0 === a && (d = 0), c.transition(d)
              })
            }
          }, t._plugins = [];
          for (var L in t.plugins) {
            var M = t.plugins[L](t, t.params[L]);
            M && t._plugins.push(M)
          }
          return t.callPlugins = function(a) {
            for (var b = 0; b < t._plugins.length; b++) a in t._plugins[b] && t._plugins[b][a](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
          }, t.emitterEventListeners = {}, t.emit = function(a) {
            t.params[a] && t.params[a](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
            var b;
            if (t.emitterEventListeners[a])
              for (b = 0; b < t.emitterEventListeners[a].length; b++) t.emitterEventListeners[a][b](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
            t.callPlugins && t.callPlugins(a, arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
          }, t.on = function(a, b) {
            return a = l(a), t.emitterEventListeners[a] || (t.emitterEventListeners[a] = []), t.emitterEventListeners[a].push(b), t
          }, t.off = function(a, b) {
            var c;
            if (a = l(a), "undefined" == typeof b) return t.emitterEventListeners[a] = [], t;
            if (t.emitterEventListeners[a] && 0 !== t.emitterEventListeners[a].length) {
              for (c = 0; c < t.emitterEventListeners[a].length; c++) t.emitterEventListeners[a][c] === b && t.emitterEventListeners[a].splice(c, 1);
              return t
            }
          }, t.once = function(a, b) {
            a = l(a);
            var c = function() {
              b(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]), t.off(a, c)
            };
            return t.on(a, c), t
          }, t.a11y = {
            makeFocusable: function(a) {
              return a.attr("tabIndex", "0"), a
            },
            addRole: function(a, b) {
              return a.attr("role", b), a
            },
            addLabel: function(a, b) {
              return a.attr("aria-label", b), a
            },
            disable: function(a) {
              return a.attr("aria-disabled", !0), a
            },
            enable: function(a) {
              return a.attr("aria-disabled", !1), a
            },
            onEnterKey: function(a) {
              13 === a.keyCode && (b(a.target).is(t.params.nextButton) ? (t.onClickNext(a), t.isEnd ? t.a11y.notify(t.params.lastSlideMessage) : t.a11y.notify(t.params.nextSlideMessage)) : b(a.target).is(t.params.prevButton) && (t.onClickPrev(a), t.isBeginning ? t.a11y.notify(t.params.firstSlideMessage) : t.a11y.notify(t.params.prevSlideMessage)), b(a.target).is("." + t.params.bulletClass) && b(a.target)[0].click())
            },
            liveRegion: b('<span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>'),
            notify: function(a) {
              var b = t.a11y.liveRegion;
              0 !== b.length && (b.html(""), b.html(a))
            },
            init: function() {
              t.params.nextButton && t.nextButton && t.nextButton.length > 0 && (t.a11y.makeFocusable(t.nextButton), t.a11y.addRole(t.nextButton, "button"), t.a11y.addLabel(t.nextButton, t.params.nextSlideMessage)), t.params.prevButton && t.prevButton && t.prevButton.length > 0 && (t.a11y.makeFocusable(t.prevButton), t.a11y.addRole(t.prevButton, "button"), t.a11y.addLabel(t.prevButton, t.params.prevSlideMessage)), b(t.container).append(t.a11y.liveRegion)
            },
            initPagination: function() {
              t.params.pagination && t.params.paginationClickable && t.bullets && t.bullets.length && t.bullets.each(function() {
                var a = b(this);
                t.a11y.makeFocusable(a), t.a11y.addRole(a, "button"), t.a11y.addLabel(a, t.params.paginationBulletMessage.replace(/{{index}}/, a.index() + 1))
              })
            },
            destroy: function() {
              t.a11y.liveRegion && t.a11y.liveRegion.length > 0 && t.a11y.liveRegion.remove()
            }
          }, t.init = function() {
            t.params.loop && t.createLoop(), t.updateContainerSize(), t.updateSlidesSize(), t.updatePagination(), t.params.scrollbar && t.scrollbar && (t.scrollbar.set(), t.params.scrollbarDraggable && t.scrollbar.enableDraggable()), "slide" !== t.params.effect && t.effects[t.params.effect] && (t.params.loop || t.updateProgress(), t.effects[t.params.effect].setTranslate()), t.params.loop ? t.slideTo(t.params.initialSlide + t.loopedSlides, 0, t.params.runCallbacksOnInit) : (t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit), 0 === t.params.initialSlide && (t.parallax && t.params.parallax && t.parallax.setTranslate(), t.lazy && t.params.lazyLoading && (t.lazy.load(), t.lazy.initialImageLoaded = !0))), t.attachEvents(), t.params.observer && t.support.observer && t.initObservers(),
              t.params.preloadImages && !t.params.lazyLoading && t.preloadImages(), t.params.autoplay && t.startAutoplay(), t.params.keyboardControl && t.enableKeyboardControl && t.enableKeyboardControl(), t.params.mousewheelControl && t.enableMousewheelControl && t.enableMousewheelControl(), t.params.hashnav && t.hashnav && t.hashnav.init(), t.params.a11y && t.a11y && t.a11y.init(), t.emit("onInit", t)
          }, t.cleanupStyles = function() {
            t.container.removeClass(t.classNames.join(" ")).removeAttr("style"), t.wrapper.removeAttr("style"), t.slides && t.slides.length && t.slides.removeClass([t.params.slideVisibleClass, t.params.slideActiveClass, t.params.slideNextClass, t.params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row"), t.paginationContainer && t.paginationContainer.length && t.paginationContainer.removeClass(t.params.paginationHiddenClass), t.bullets && t.bullets.length && t.bullets.removeClass(t.params.bulletActiveClass), t.params.prevButton && b(t.params.prevButton).removeClass(t.params.buttonDisabledClass), t.params.nextButton && b(t.params.nextButton).removeClass(t.params.buttonDisabledClass), t.params.scrollbar && t.scrollbar && (t.scrollbar.track && t.scrollbar.track.length && t.scrollbar.track.removeAttr("style"), t.scrollbar.drag && t.scrollbar.drag.length && t.scrollbar.drag.removeAttr("style"))
          }, t.destroy = function(a, b) {
            t.detachEvents(), t.stopAutoplay(), t.params.scrollbar && t.scrollbar && t.params.scrollbarDraggable && t.scrollbar.disableDraggable(), t.params.loop && t.destroyLoop(), b && t.cleanupStyles(), t.disconnectObservers(), t.params.keyboardControl && t.disableKeyboardControl && t.disableKeyboardControl(), t.params.mousewheelControl && t.disableMousewheelControl && t.disableMousewheelControl(), t.params.a11y && t.a11y && t.a11y.destroy(), t.emit("onDestroy"), a !== !1 && (t = null)
          }, t.init(), t
        }
      };
      c.prototype = {
        isSafari: function() {
          var a = navigator.userAgent.toLowerCase();
          return a.indexOf("safari") >= 0 && a.indexOf("chrome") < 0 && a.indexOf("android") < 0
        }(),
        isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent),
        isArray: function(a) {
          return "[object Array]" === Object.prototype.toString.apply(a)
        },
        browser: {
          ie: window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
          ieTouch: window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 1 || window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 1
        },
        device: function() {
          var a = navigator.userAgent,
            b = a.match(/(Android);?[\s\/]+([\d.]+)?/),
            c = a.match(/(iPad).*OS\s([\d_]+)/),
            d = a.match(/(iPod)(.*OS\s([\d_]+))?/),
            e = !c && a.match(/(iPhone\sOS)\s([\d_]+)/);
          return {
            ios: c || e || d,
            android: b
          }
        }(),
        support: {
          touch: window.Modernizr && Modernizr.touch === !0 || function() {
            return !!("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch)
          }(),
          transforms3d: window.Modernizr && Modernizr.csstransforms3d === !0 || function() {
            var a = document.createElement("div").style;
            return "webkitPerspective" in a || "MozPerspective" in a || "OPerspective" in a || "MsPerspective" in a || "perspective" in a
          }(),
          flexbox: function() {
            for (var a = document.createElement("div").style, b = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), c = 0; c < b.length; c++)
              if (b[c] in a) return !0
          }(),
          observer: function() {
            return "MutationObserver" in window || "WebkitMutationObserver" in window
          }()
        },
        plugins: {}
      };
      for (var d = ["jQuery", "Zepto", "Dom7"], e = 0; e < d.length; e++) window[d[e]] && a(window[d[e]]);
      var f;
      f = "undefined" == typeof Dom7 ? window.Dom7 || window.Zepto || window.jQuery : Dom7, f && ("transitionEnd" in f.fn || (f.fn.transitionEnd = function(a) {
        function b(f) {
          if (f.target === this)
            for (a.call(this, f), c = 0; c < d.length; c++) e.off(d[c], b)
        }
        var c, d = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"],
          e = this;
        if (a)
          for (c = 0; c < d.length; c++) e.on(d[c], b);
        return this
      }), "transform" in f.fn || (f.fn.transform = function(a) {
        for (var b = 0; b < this.length; b++) {
          var c = this[b].style;
          c.webkitTransform = c.MsTransform = c.msTransform = c.MozTransform = c.OTransform = c.transform = a
        }
        return this
      }), "transition" in f.fn || (f.fn.transition = function(a) {
        "string" != typeof a && (a += "ms");
        for (var b = 0; b < this.length; b++) {
          var c = this[b].style;
          c.webkitTransitionDuration = c.MsTransitionDuration = c.msTransitionDuration = c.MozTransitionDuration = c.OTransitionDuration = c.transitionDuration = a
        }
        return this
      })), window.Swiper = c
    }(), "undefined" != typeof module ? module.exports = window.Swiper : "function" == typeof define && define.amd && define([], function() {
      "use strict";
      return window.Swiper
    }), "function" != typeof Object.create && (Object.create = function(a) {
      function b() {}
      return b.prototype = a, new b
    }),
    function(a, b, c) {
      var d = {
        init: function(b, c) {
          this.$elem = a(c), this.options = a.extend({}, a.fn.owlCarousel.options, this.$elem.data(), b), this.userOptions = b, this.loadContent()
        },
        loadContent: function() {
          function b(a) {
            var b, c = "";
            if ("function" == typeof d.options.jsonSuccess) d.options.jsonSuccess.apply(this, [a]);
            else {
              for (b in a.owl) a.owl.hasOwnProperty(b) && (c += a.owl[b].item);
              d.$elem.html(c)
            }
            d.logIn()
          }
          var c, d = this;
          "function" == typeof d.options.beforeInit && d.options.beforeInit.apply(this, [d.$elem]), "string" == typeof d.options.jsonPath ? (c = d.options.jsonPath, a.getJSON(c, b)) : d.logIn()
        },
        logIn: function() {
          this.$elem.data("owl-originalStyles", this.$elem.attr("style")), this.$elem.data("owl-originalClasses", this.$elem.attr("class")), this.$elem.css({
            opacity: 0
          }), this.orignalItems = this.options.items, this.checkBrowser(), this.wrapperWidth = 0, this.checkVisible = null, this.setVars()
        },
        setVars: function() {
          return 0 !== this.$elem.children().length && (this.baseClass(), this.eventTypes(), this.$userItems = this.$elem.children(), this.itemsAmount = this.$userItems.length, this.wrapItems(), this.$owlItems = this.$elem.find(".owl-item"), this.$owlWrapper = this.$elem.find(".owl-wrapper"), this.playDirection = "next", this.prevItem = 0, this.prevArr = [0], this.currentItem = 0, this.customEvents(), void this.onStartup())
        },
        onStartup: function() {
          this.updateItems(), this.calculateAll(), this.buildControls(), this.updateControls(), this.response(), this.moveEvents(), this.stopOnHover(), this.owlStatus(), !1 !== this.options.transitionStyle && this.transitionTypes(this.options.transitionStyle), !0 === this.options.autoPlay && (this.options.autoPlay = 5e3), this.play(), this.$elem.find(".owl-wrapper").css("display", "block"), this.$elem.is(":visible") ? this.$elem.css("opacity", 1) : this.watchVisibility(), this.onstartup = !1, this.eachMoveUpdate(), "function" == typeof this.options.afterInit && this.options.afterInit.apply(this, [this.$elem])
        },
        eachMoveUpdate: function() {
          !0 === this.options.lazyLoad && this.lazyLoad(), !0 === this.options.autoHeight && this.autoHeight(), this.onVisibleItems(), "function" == typeof this.options.afterAction && this.options.afterAction.apply(this, [this.$elem])
        },
        updateVars: function() {
          "function" == typeof this.options.beforeUpdate && this.options.beforeUpdate.apply(this, [this.$elem]), this.watchVisibility(), this.updateItems(), this.calculateAll(), this.updatePosition(), this.updateControls(), this.eachMoveUpdate(), "function" == typeof this.options.afterUpdate && this.options.afterUpdate.apply(this, [this.$elem])
        },
        reload: function() {
          var a = this;
          b.setTimeout(function() {
            a.updateVars()
          }, 0)
        },
        watchVisibility: function() {
          var a = this;
          return !1 === a.$elem.is(":visible") && (a.$elem.css({
            opacity: 0
          }), b.clearInterval(a.autoPlayInterval), b.clearInterval(a.checkVisible), void(a.checkVisible = b.setInterval(function() {
            a.$elem.is(":visible") && (a.reload(), a.$elem.animate({
              opacity: 1
            }, 200), b.clearInterval(a.checkVisible))
          }, 500)))
        },
        wrapItems: function() {
          this.$userItems.wrapAll('<div class="owl-wrapper">').wrap('<div class="owl-item"></div>'), this.$elem.find(".owl-wrapper").wrap('<div class="owl-wrapper-outer">'), this.wrapperOuter = this.$elem.find(".owl-wrapper-outer"), this.$elem.css("display", "block")
        },
        baseClass: function() {
          var a = this.$elem.hasClass(this.options.baseClass),
            b = this.$elem.hasClass(this.options.theme);
          a || this.$elem.addClass(this.options.baseClass), b || this.$elem.addClass(this.options.theme)
        },
        updateItems: function() {
          var b, c;
          if (!1 === this.options.responsive) return !1;
          if (!0 === this.options.singleItem) return this.options.items = this.orignalItems = 1, this.options.itemsCustom = !1, this.options.itemsDesktop = !1, this.options.itemsDesktopSmall = !1, this.options.itemsTablet = !1, this.options.itemsTabletSmall = !1, this.options.itemsMobile = !1;
          if (b = a(this.options.responsiveBaseWidth).width(), b > (this.options.itemsDesktop[0] || this.orignalItems) && (this.options.items = this.orignalItems), !1 !== this.options.itemsCustom)
            for (this.options.itemsCustom.sort(function(a, b) {
                return a[0] - b[0]
              }), c = 0; c < this.options.itemsCustom.length; c += 1) this.options.itemsCustom[c][0] <= b && (this.options.items = this.options.itemsCustom[c][1]);
          else b <= this.options.itemsDesktop[0] && !1 !== this.options.itemsDesktop && (this.options.items = this.options.itemsDesktop[1]), b <= this.options.itemsDesktopSmall[0] && !1 !== this.options.itemsDesktopSmall && (this.options.items = this.options.itemsDesktopSmall[1]), b <= this.options.itemsTablet[0] && !1 !== this.options.itemsTablet && (this.options.items = this.options.itemsTablet[1]), b <= this.options.itemsTabletSmall[0] && !1 !== this.options.itemsTabletSmall && (this.options.items = this.options.itemsTabletSmall[1]), b <= this.options.itemsMobile[0] && !1 !== this.options.itemsMobile && (this.options.items = this.options.itemsMobile[1]);
          this.options.items > this.itemsAmount && !0 === this.options.itemsScaleUp && (this.options.items = this.itemsAmount)
        },
        response: function() {
          var c, d, e = this;
          return !0 === e.options.responsive && (d = a(b).width(), e.resizer = function() {
            a(b).width() !== d && (!1 !== e.options.autoPlay && b.clearInterval(e.autoPlayInterval), b.clearTimeout(c), c = b.setTimeout(function() {
              d = a(b).width(), e.updateVars()
            }, e.options.responsiveRefreshRate))
          }, void a(b).resize(e.resizer))
        },
        updatePosition: function() {
          this.jumpTo(this.currentItem), !1 !== this.options.autoPlay && this.checkAp()
        },
        appendItemsSizes: function() {
          var b = this,
            c = 0,
            d = b.itemsAmount - b.options.items;
          b.$owlItems.each(function(e) {
            var f = a(this);
            f.css({
              width: b.itemWidth
            }).data("owl-item", Number(e)), 0 !== e % b.options.items && e !== d || e > d || (c += 1), f.data("owl-roundPages", c)
          })
        },
        appendWrapperSizes: function() {
          this.$owlWrapper.css({
            width: this.$owlItems.length * this.itemWidth * 2,
            left: 0
          }), this.appendItemsSizes()
        },
        calculateAll: function() {
          this.calculateWidth(), this.appendWrapperSizes(), this.loops(), this.max()
        },
        calculateWidth: function() {
          this.itemWidth = Math.round(this.$elem.width() / this.options.items)
        },
        max: function() {
          var a = -1 * (this.itemsAmount * this.itemWidth - this.options.items * this.itemWidth);
          return this.options.items > this.itemsAmount ? this.maximumPixels = a = this.maximumItem = 0 : (this.maximumItem = this.itemsAmount - this.options.items, this.maximumPixels = a), a
        },
        min: function() {
          return 0
        },
        loops: function() {
          var b, c, d = 0,
            e = 0;
          for (this.positionsInArray = [0], this.pagesInArray = [], b = 0; b < this.itemsAmount; b += 1) e += this.itemWidth, this.positionsInArray.push(-e), !0 === this.options.scrollPerPage && (c = a(this.$owlItems[b]), c = c.data("owl-roundPages"), c !== d && (this.pagesInArray[d] = this.positionsInArray[b], d = c))
        },
        buildControls: function() {
          !0 !== this.options.navigation && !0 !== this.options.pagination || (this.owlControls = a('<div class="owl-controls"/>').toggleClass("clickable", !this.browser.isTouch).appendTo(this.$elem)), !0 === this.options.pagination && this.buildPagination(), !0 === this.options.navigation && this.buildButtons()
        },
        buildButtons: function() {
          var b = this,
            c = a('<div class="owl-buttons"/>');
          b.owlControls.append(c), b.buttonPrev = a("<div/>", {
            class: "owl-prev",
            html: b.options.navigationText[0] || ""
          }), b.buttonNext = a("<div/>", {
            class: "owl-next",
            html: b.options.navigationText[1] || ""
          }), c.append(b.buttonPrev).append(b.buttonNext), c.on("touchstart.owlControls mousedown.owlControls", 'div[class^="owl"]', function(a) {
            a.preventDefault()
          }), c.on("touchend.owlControls mouseup.owlControls", 'div[class^="owl"]', function(c) {
            c.preventDefault(), a(this).hasClass("owl-next") ? b.next() : b.prev()
          })
        },
        buildPagination: function() {
          var b = this;
          b.paginationWrapper = a('<div class="owl-pagination"/>'), b.owlControls.append(b.paginationWrapper), b.paginationWrapper.on("touchend.owlControls mouseup.owlControls", ".owl-page", function(c) {
            c.preventDefault(), Number(a(this).data("owl-page")) !== b.currentItem && b.goTo(Number(a(this).data("owl-page")), !0)
          })
        },
        updatePagination: function() {
          var b, c, d, e, f, g;
          if (!1 === this.options.pagination) return !1;
          for (this.paginationWrapper.html(""), b = 0, c = this.itemsAmount - this.itemsAmount % this.options.items, e = 0; e < this.itemsAmount; e += 1) 0 === e % this.options.items && (b += 1, c === e && (d = this.itemsAmount - this.options.items), f = a("<div/>", {
            class: "owl-page"
          }), g = a("<span></span>", {
            text: !0 === this.options.paginationNumbers ? b : "",
            class: !0 === this.options.paginationNumbers ? "owl-numbers" : ""
          }), f.append(g), f.data("owl-page", c === e ? d : e), f.data("owl-roundPages", b), this.paginationWrapper.append(f));
          this.checkPagination()
        },
        checkPagination: function() {
          var b = this;
          return !1 !== b.options.pagination && void b.paginationWrapper.find(".owl-page").each(function() {
            a(this).data("owl-roundPages") === a(b.$owlItems[b.currentItem]).data("owl-roundPages") && (b.paginationWrapper.find(".owl-page").removeClass("active"), a(this).addClass("active"))
          })
        },
        checkNavigation: function() {
          return !1 !== this.options.navigation && void(!1 === this.options.rewindNav && (0 === this.currentItem && 0 === this.maximumItem ? (this.buttonPrev.addClass("disabled"), this.buttonNext.addClass("disabled")) : 0 === this.currentItem && 0 !== this.maximumItem ? (this.buttonPrev.addClass("disabled"), this.buttonNext.removeClass("disabled")) : this.currentItem === this.maximumItem ? (this.buttonPrev.removeClass("disabled"), this.buttonNext.addClass("disabled")) : 0 !== this.currentItem && this.currentItem !== this.maximumItem && (this.buttonPrev.removeClass("disabled"), this.buttonNext.removeClass("disabled"))))
        },
        updateControls: function() {
          this.updatePagination(), this.checkNavigation(), this.owlControls && (this.options.items >= this.itemsAmount ? this.owlControls.hide() : this.owlControls.show())
        },
        destroyControls: function() {
          this.owlControls && this.owlControls.remove()
        },
        next: function(a) {
          if (this.isTransition) return !1;
          if (this.currentItem += !0 === this.options.scrollPerPage ? this.options.items : 1, this.currentItem > this.maximumItem + (!0 === this.options.scrollPerPage ? this.options.items - 1 : 0)) {
            if (!0 !== this.options.rewindNav) return this.currentItem = this.maximumItem, !1;
            this.currentItem = 0, a = "rewind"
          }
          this.goTo(this.currentItem, a)
        },
        prev: function(a) {
          if (this.isTransition) return !1;
          if (this.currentItem = !0 === this.options.scrollPerPage && 0 < this.currentItem && this.currentItem < this.options.items ? 0 : this.currentItem - (!0 === this.options.scrollPerPage ? this.options.items : 1), 0 > this.currentItem) {
            if (!0 !== this.options.rewindNav) return this.currentItem = 0, !1;
            this.currentItem = this.maximumItem, a = "rewind"
          }
          this.goTo(this.currentItem, a)
        },
        goTo: function(a, c, d) {
          var e = this;
          return !e.isTransition && ("function" == typeof e.options.beforeMove && e.options.beforeMove.apply(this, [e.$elem]), a >= e.maximumItem ? a = e.maximumItem : 0 >= a && (a = 0), e.currentItem = e.owl.currentItem = a, !1 !== e.options.transitionStyle && "drag" !== d && 1 === e.options.items && !0 === e.browser.support3d ? (e.swapSpeed(0), !0 === e.browser.support3d ? e.transition3d(e.positionsInArray[a]) : e.css2slide(e.positionsInArray[a], 1), e.afterGo(), e.singleItemTransition(), !1) : (a = e.positionsInArray[a], !0 === e.browser.support3d ? (e.isCss3Finish = !1, !0 === c ? (e.swapSpeed("paginationSpeed"), b.setTimeout(function() {
            e.isCss3Finish = !0
          }, e.options.paginationSpeed)) : "rewind" === c ? (e.swapSpeed(e.options.rewindSpeed), b.setTimeout(function() {
            e.isCss3Finish = !0
          }, e.options.rewindSpeed)) : (e.swapSpeed("slideSpeed"), b.setTimeout(function() {
            e.isCss3Finish = !0
          }, e.options.slideSpeed)), e.transition3d(a)) : !0 === c ? e.css2slide(a, e.options.paginationSpeed) : "rewind" === c ? e.css2slide(a, e.options.rewindSpeed) : e.css2slide(a, e.options.slideSpeed), void e.afterGo()))
        },
        jumpTo: function(a) {
          "function" == typeof this.options.beforeMove && this.options.beforeMove.apply(this, [this.$elem]), a >= this.maximumItem || -1 === a ? a = this.maximumItem : 0 >= a && (a = 0), this.swapSpeed(0), !0 === this.browser.support3d ? this.transition3d(this.positionsInArray[a]) : this.css2slide(this.positionsInArray[a], 1), this.currentItem = this.owl.currentItem = a, this.afterGo()
        },
        afterGo: function() {
          this.prevArr.push(this.currentItem), this.prevItem = this.owl.prevItem = this.prevArr[this.prevArr.length - 2], this.prevArr.shift(0), this.prevItem !== this.currentItem && (this.checkPagination(), this.checkNavigation(), this.eachMoveUpdate(), !1 !== this.options.autoPlay && this.checkAp()), "function" == typeof this.options.afterMove && this.prevItem !== this.currentItem && this.options.afterMove.apply(this, [this.$elem])
        },
        stop: function() {
          this.apStatus = "stop", b.clearInterval(this.autoPlayInterval)
        },
        checkAp: function() {
          "stop" !== this.apStatus && this.play()
        },
        play: function() {
          var a = this;
          return a.apStatus = "play", !1 !== a.options.autoPlay && (b.clearInterval(a.autoPlayInterval), void(a.autoPlayInterval = b.setInterval(function() {
            a.next(!0)
          }, a.options.autoPlay)))
        },
        swapSpeed: function(a) {
          "slideSpeed" === a ? this.$owlWrapper.css(this.addCssSpeed(this.options.slideSpeed)) : "paginationSpeed" === a ? this.$owlWrapper.css(this.addCssSpeed(this.options.paginationSpeed)) : "string" != typeof a && this.$owlWrapper.css(this.addCssSpeed(a))
        },
        addCssSpeed: function(a) {
          return {
            "-webkit-transition": "all " + a + "ms ease",
            "-moz-transition": "all " + a + "ms ease",
            "-o-transition": "all " + a + "ms ease",
            transition: "all " + a + "ms ease"
          }
        },
        removeTransition: function() {
          return {
            "-webkit-transition": "",
            "-moz-transition": "",
            "-o-transition": "",
            transition: ""
          }
        },
        doTranslate: function(a) {
          return {
            "-webkit-transform": "translate3d(" + a + "px, 0px, 0px)",
            "-moz-transform": "translate3d(" + a + "px, 0px, 0px)",
            "-o-transform": "translate3d(" + a + "px, 0px, 0px)",
            "-ms-transform": "translate3d(" + a + "px, 0px, 0px)",
            transform: "translate3d(" + a + "px, 0px,0px)"
          }
        },
        transition3d: function(a) {
          this.$owlWrapper.css(this.doTranslate(a))
        },
        css2move: function(a) {
          this.$owlWrapper.css({
            left: a
          })
        },
        css2slide: function(a, b) {
          var c = this;
          c.isCssFinish = !1, c.$owlWrapper.stop(!0, !0).animate({
            left: a
          }, {
            duration: b || c.options.slideSpeed,
            complete: function() {
              c.isCssFinish = !0
            }
          })
        },
        checkBrowser: function() {
          var a = c.createElement("div");
          a.style.cssText = "  -moz-transform:translate3d(0px, 0px, 0px); -ms-transform:translate3d(0px, 0px, 0px); -o-transform:translate3d(0px, 0px, 0px); -webkit-transform:translate3d(0px, 0px, 0px); transform:translate3d(0px, 0px, 0px)", a = a.style.cssText.match(/translate3d\(0px, 0px, 0px\)/g), this.browser = {
            support3d: null !== a && 1 === a.length,
            isTouch: "ontouchstart" in b || b.navigator.msMaxTouchPoints
          }
        },
        moveEvents: function() {
          !1 === this.options.mouseDrag && !1 === this.options.touchDrag || (this.gestures(), this.disabledEvents())
        },
        eventTypes: function() {
          var a = ["s", "e", "x"];
          this.ev_types = {}, !0 === this.options.mouseDrag && !0 === this.options.touchDrag ? a = ["touchstart.owl mousedown.owl", "touchmove.owl mousemove.owl", "touchend.owl touchcancel.owl mouseup.owl"] : !1 === this.options.mouseDrag && !0 === this.options.touchDrag ? a = ["touchstart.owl", "touchmove.owl", "touchend.owl touchcancel.owl"] : !0 === this.options.mouseDrag && !1 === this.options.touchDrag && (a = ["mousedown.owl", "mousemove.owl", "mouseup.owl"]), this.ev_types.start = a[0], this.ev_types.move = a[1], this.ev_types.end = a[2]
        },
        disabledEvents: function() {
          this.$elem.on("dragstart.owl", function(a) {
            a.preventDefault()
          }), this.$elem.on("mousedown.disableTextSelect", function(b) {
            return a(b.target).is("input, textarea, select, option")
          })
        },
        gestures: function() {
          function d(a) {
            if (void 0 !== a.touches) return {
              x: a.touches[0].pageX,
              y: a.touches[0].pageY
            };
            if (void 0 === a.touches) {
              if (void 0 !== a.pageX) return {
                x: a.pageX,
                y: a.pageY
              };
              if (void 0 === a.pageX) return {
                x: a.clientX,
                y: a.clientY
              }
            }
          }
  
          function e(b) {
            "on" === b ? (a(c).on(h.ev_types.move, f), a(c).on(h.ev_types.end, g)) : "off" === b && (a(c).off(h.ev_types.move), a(c).off(h.ev_types.end))
          }
  
          function f(e) {
            e = e.originalEvent || e || b.event, h.newPosX = d(e).x - i.offsetX, h.newPosY = d(e).y - i.offsetY, h.newRelativeX = h.newPosX - i.relativePos, "function" == typeof h.options.startDragging && !0 !== i.dragging && 0 !== h.newRelativeX && (i.dragging = !0, h.options.startDragging.apply(h, [h.$elem])), (8 < h.newRelativeX || -8 > h.newRelativeX) && !0 === h.browser.isTouch && (void 0 !== e.preventDefault ? e.preventDefault() : e.returnValue = !1, i.sliding = !0), (10 < h.newPosY || -10 > h.newPosY) && !1 === i.sliding && a(c).off("touchmove.owl"), h.newPosX = Math.max(Math.min(h.newPosX, h.newRelativeX / 5), h.maximumPixels + h.newRelativeX / 5), !0 === h.browser.support3d ? h.transition3d(h.newPosX) : h.css2move(h.newPosX)
          }
  
          function g(c) {
            c = c.originalEvent || c || b.event;
            var d;
            c.target = c.target || c.srcElement, i.dragging = !1, !0 !== h.browser.isTouch && h.$owlWrapper.removeClass("grabbing"), h.dragDirection = 0 > h.newRelativeX ? h.owl.dragDirection = "left" : h.owl.dragDirection = "right", 0 !== h.newRelativeX && (d = h.getNewPosition(), h.goTo(d, !1, "drag"), i.targetElement === c.target && !0 !== h.browser.isTouch && (a(c.target).on("click.disable", function(b) {
              b.stopImmediatePropagation(), b.stopPropagation(), b.preventDefault(), a(b.target).off("click.disable")
            }), c = a._data(c.target, "events").click, d = c.pop(), c.splice(0, 0, d))), e("off")
          }
          var h = this,
            i = {
              offsetX: 0,
              offsetY: 0,
              baseElWidth: 0,
              relativePos: 0,
              position: null,
              minSwipe: null,
              maxSwipe: null,
              sliding: null,
              dargging: null,
              targetElement: null
            };
          h.isCssFinish = !0, h.$elem.on(h.ev_types.start, ".owl-wrapper", function(c) {
            c = c.originalEvent || c || b.event;
            var f;
            if (3 === c.which) return !1;
            if (!(h.itemsAmount <= h.options.items)) {
              if (!1 === h.isCssFinish && !h.options.dragBeforeAnimFinish || !1 === h.isCss3Finish && !h.options.dragBeforeAnimFinish) return !1;
              !1 !== h.options.autoPlay && b.clearInterval(h.autoPlayInterval), !0 === h.browser.isTouch || h.$owlWrapper.hasClass("grabbing") || h.$owlWrapper.addClass("grabbing"), h.newPosX = 0, h.newRelativeX = 0, a(this).css(h.removeTransition()), f = a(this).position(), i.relativePos = f.left, i.offsetX = d(c).x - f.left, i.offsetY = d(c).y - f.top, e("on"), i.sliding = !1, i.targetElement = c.target || c.srcElement
            }
          })
        },
        getNewPosition: function() {
          var a = this.closestItem();
          return a > this.maximumItem ? a = this.currentItem = this.maximumItem : 0 <= this.newPosX && (this.currentItem = a = 0), a
        },
        closestItem: function() {
          var b = this,
            c = !0 === b.options.scrollPerPage ? b.pagesInArray : b.positionsInArray,
            d = b.newPosX,
            e = null;
          return a.each(c, function(f, g) {
            d - b.itemWidth / 20 > c[f + 1] && d - b.itemWidth / 20 < g && "left" === b.moveDirection() ? (e = g, b.currentItem = !0 === b.options.scrollPerPage ? a.inArray(e, b.positionsInArray) : f) : d + b.itemWidth / 20 < g && d + b.itemWidth / 20 > (c[f + 1] || c[f] - b.itemWidth) && "right" === b.moveDirection() && (!0 === b.options.scrollPerPage ? (e = c[f + 1] || c[c.length - 1], b.currentItem = a.inArray(e, b.positionsInArray)) : (e = c[f + 1], b.currentItem = f + 1))
          }), b.currentItem
        },
        moveDirection: function() {
          var a;
          return 0 > this.newRelativeX ? (a = "right", this.playDirection = "next") : (a = "left", this.playDirection = "prev"), a
        },
        customEvents: function() {
          var a = this;
          a.$elem.on("owl.next", function() {
            a.next()
          }), a.$elem.on("owl.prev", function() {
            a.prev()
          }), a.$elem.on("owl.play", function(b, c) {
            a.options.autoPlay = c, a.play(), a.hoverStatus = "play"
          }), a.$elem.on("owl.stop", function() {
            a.stop(), a.hoverStatus = "stop"
          }), a.$elem.on("owl.goTo", function(b, c) {
            a.goTo(c)
          }), a.$elem.on("owl.jumpTo", function(b, c) {
            a.jumpTo(c)
          })
        },
        stopOnHover: function() {
          var a = this;
          !0 === a.options.stopOnHover && !0 !== a.browser.isTouch && !1 !== a.options.autoPlay && (a.$elem.on("mouseover", function() {
            a.stop()
          }), a.$elem.on("mouseout", function() {
            "stop" !== a.hoverStatus && a.play()
          }))
        },
        lazyLoad: function() {
          var b, c, d, e, f;
          if (!1 === this.options.lazyLoad) return !1;
          for (b = 0; b < this.itemsAmount; b += 1) c = a(this.$owlItems[b]), "loaded" !== c.data("owl-loaded") && (d = c.data("owl-item"), e = c.find(".lazyOwl"), "string" != typeof e.data("src") ? c.data("owl-loaded", "loaded") : (void 0 === c.data("owl-loaded") && (e.hide(), c.addClass("loading").data("owl-loaded", "checked")), (f = !0 !== this.options.lazyFollow || d >= this.currentItem) && d < this.currentItem + this.options.items && e.length && this.lazyPreload(c, e)))
        },
        lazyPreload: function(a, c) {
          function d() {
            a.data("owl-loaded", "loaded").removeClass("loading"), c.removeAttr("data-src"), "fade" === g.options.lazyEffect ? c.fadeIn(400) : c.show(), "function" == typeof g.options.afterLazyLoad && g.options.afterLazyLoad.apply(this, [g.$elem])
          }
  
          function e() {
            h += 1, g.completeImg(c.get(0)) || !0 === f ? d() : 100 >= h ? b.setTimeout(e, 100) : d()
          }
          var f, g = this,
            h = 0;
          "DIV" === c.prop("tagName") ? (c.css("background-image", "url(" + c.data("src") + ")"), f = !0) : c[0].src = c.data("src"), e()
        },
        autoHeight: function() {
          function c() {
            var c = a(f.$owlItems[f.currentItem]).height();
            f.wrapperOuter.css("height", c + "px"), f.wrapperOuter.hasClass("autoHeight") || b.setTimeout(function() {
              f.wrapperOuter.addClass("autoHeight")
            }, 0)
          }
  
          function d() {
            e += 1, f.completeImg(g.get(0)) ? c() : 100 >= e ? b.setTimeout(d, 100) : f.wrapperOuter.css("height", "")
          }
          var e, f = this,
            g = a(f.$owlItems[f.currentItem]).find("img");
          void 0 !== g.get(0) ? (e = 0, d()) : c()
        },
        completeImg: function(a) {
          return !(!a.complete || "undefined" != typeof a.naturalWidth && 0 === a.naturalWidth)
        },
        onVisibleItems: function() {
          var b;
          for (!0 === this.options.addClassActive && this.$owlItems.removeClass("active"), this.visibleItems = [], b = this.currentItem; b < this.currentItem + this.options.items; b += 1) this.visibleItems.push(b), !0 === this.options.addClassActive && a(this.$owlItems[b]).addClass("active");
          this.owl.visibleItems = this.visibleItems
        },
        transitionTypes: function(a) {
          this.outClass = "owl-" + a + "-out", this.inClass = "owl-" + a + "-in"
        },
        singleItemTransition: function() {
          var a = this,
            b = a.outClass,
            c = a.inClass,
            d = a.$owlItems.eq(a.currentItem),
            e = a.$owlItems.eq(a.prevItem),
            f = Math.abs(a.positionsInArray[a.currentItem]) + a.positionsInArray[a.prevItem],
            g = Math.abs(a.positionsInArray[a.currentItem]) + a.itemWidth / 2;
          a.isTransition = !0, a.$owlWrapper.addClass("owl-origin").css({
            "-webkit-transform-origin": g + "px",
            "-moz-perspective-origin": g + "px",
            "perspective-origin": g + "px"
          }), e.css({
            position: "relative",
            left: f + "px"
          }).addClass(b).on("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend", function() {
            a.endPrev = !0, e.off("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend"), a.clearTransStyle(e, b)
          }), d.addClass(c).on("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend", function() {
            a.endCurrent = !0, d.off("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend"), a.clearTransStyle(d, c)
          })
        },
        clearTransStyle: function(a, b) {
          a.css({
            position: "",
            left: ""
          }).removeClass(b), this.endPrev && this.endCurrent && (this.$owlWrapper.removeClass("owl-origin"), this.isTransition = this.endCurrent = this.endPrev = !1)
        },
        owlStatus: function() {
          this.owl = {
            userOptions: this.userOptions,
            baseElement: this.$elem,
            userItems: this.$userItems,
            owlItems: this.$owlItems,
            currentItem: this.currentItem,
            prevItem: this.prevItem,
            visibleItems: this.visibleItems,
            isTouch: this.browser.isTouch,
            browser: this.browser,
            dragDirection: this.dragDirection
          }
        },
        clearEvents: function() {
          this.$elem.off(".owl owl mousedown.disableTextSelect"), a(c).off(".owl owl"), a(b).off("resize", this.resizer)
        },
        unWrap: function() {
          0 !== this.$elem.children().length && (this.$owlWrapper.unwrap(), this.$userItems.unwrap().unwrap(), this.owlControls && this.owlControls.remove()), this.clearEvents(), this.$elem.attr("style", this.$elem.data("owl-originalStyles") || "").attr("class", this.$elem.data("owl-originalClasses"))
        },
        destroy: function() {
          this.stop(), b.clearInterval(this.checkVisible), this.unWrap(), this.$elem.removeData()
        },
        reinit: function(b) {
          b = a.extend({}, this.userOptions, b), this.unWrap(), this.init(b, this.$elem)
        },
        addItem: function(a, b) {
          var c;
          return !!a && (0 === this.$elem.children().length ? (this.$elem.append(a), this.setVars(), !1) : (this.unWrap(), c = void 0 === b || -1 === b ? -1 : b, c >= this.$userItems.length || -1 === c ? this.$userItems.eq(-1).after(a) : this.$userItems.eq(c).before(a), void this.setVars()))
        },
        removeItem: function(a) {
          return 0 !== this.$elem.children().length && (a = void 0 === a || -1 === a ? -1 : a, this.unWrap(), this.$userItems.eq(a).remove(), void this.setVars())
        }
      };
      a.fn.owlCarousel = function(b) {
        return this.each(function() {
          if (!0 === a(this).data("owl-init")) return !1;
          a(this).data("owl-init", !0);
          var c = Object.create(d);
          c.init(b, this), a.data(this, "owlCarousel", c)
        })
      }, a.fn.owlCarousel.options = {
        items: 5,
        itemsCustom: !1,
        itemsDesktop: [1199, 4],
        itemsDesktopSmall: [979, 3],
        itemsTablet: [768, 2],
        itemsTabletSmall: !1,
        itemsMobile: [479, 1],
        singleItem: !1,
        itemsScaleUp: !1,
        slideSpeed: 200,
        paginationSpeed: 800,
        rewindSpeed: 1e3,
        autoPlay: !1,
        stopOnHover: !1,
        navigation: !1,
        navigationText: ["prev", "next"],
        rewindNav: !0,
        scrollPerPage: !1,
        pagination: !0,
        paginationNumbers: !1,
        responsive: !0,
        responsiveRefreshRate: 200,
        responsiveBaseWidth: b,
        baseClass: "owl-carousel",
        theme: "owl-theme",
        lazyLoad: !1,
        lazyFollow: !0,
        lazyEffect: "fade",
        autoHeight: !1,
        jsonPath: !1,
        jsonSuccess: !1,
        dragBeforeAnimFinish: !0,
        mouseDrag: !0,
        touchDrag: !0,
        addClassActive: !1,
        transitionStyle: !1,
        beforeUpdate: !1,
        afterUpdate: !1,
        beforeInit: !1,
        afterInit: !1,
        beforeMove: !1,
        afterMove: !1,
        afterAction: !1,
        startDragging: !1,
        afterLazyLoad: !1
      }
    }(jQuery, window, document),
    function(a) {
      a.extend(a.fn, {
        validate: function(b) {
          if (!this.length) return void(b && b.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));
          var c = a.data(this[0], "validator");
          return c ? c : (this.attr("novalidate", "novalidate"), c = new a.validator(b, this[0]), a.data(this[0], "validator", c), c.settings.onsubmit && (this.validateDelegate(":submit", "click", function(b) {
            c.settings.submitHandler && (c.submitButton = b.target), a(b.target).hasClass("cancel") && (c.cancelSubmit = !0), void 0 !== a(b.target).attr("formnovalidate") && (c.cancelSubmit = !0)
          }), this.submit(function(b) {
            function d() {
              var d;
              return !c.settings.submitHandler || (c.submitButton && (d = a("<input type='hidden'/>").attr("name", c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)), c.settings.submitHandler.call(c, c.currentForm, b), c.submitButton && d.remove(), !1)
            }
            return c.settings.debug && b.preventDefault(), c.cancelSubmit ? (c.cancelSubmit = !1, d()) : c.form() ? c.pendingRequest ? (c.formSubmitted = !0, !1) : d() : (c.focusInvalid(), !1)
          })), c)
        },
        valid: function() {
          if (a(this[0]).is("form")) return this.validate().form();
          var b = !0,
            c = a(this[0].form).validate();
          return this.each(function() {
            b = b && c.element(this)
          }), b
        },
        removeAttrs: function(b) {
          var c = {},
            d = this;
          return a.each(b.split(/\s/), function(a, b) {
            c[b] = d.attr(b), d.removeAttr(b)
          }), c
        },
        rules: function(b, c) {
          var d = this[0];
          if (b) {
            var e = a.data(d.form, "validator").settings,
              f = e.rules,
              g = a.validator.staticRules(d);
            switch (b) {
              case "add":
                a.extend(g, a.validator.normalizeRule(c)), delete g.messages, f[d.name] = g, c.messages && (e.messages[d.name] = a.extend(e.messages[d.name], c.messages));
                break;
              case "remove":
                if (!c) return delete f[d.name], g;
                var h = {};
                return a.each(c.split(/\s/), function(a, b) {
                  h[b] = g[b], delete g[b]
                }), h
            }
          }
          var i = a.validator.normalizeRules(a.extend({}, a.validator.classRules(d), a.validator.attributeRules(d), a.validator.dataRules(d), a.validator.staticRules(d)), d);
          if (i.required) {
            var j = i.required;
            delete i.required, i = a.extend({
              required: j
            }, i)
          }
          return i
        }
      }), a.extend(a.expr[":"], {
        blank: function(b) {
          return !a.trim("" + a(b).val())
        },
        filled: function(b) {
          return !!a.trim("" + a(b).val())
        },
        unchecked: function(b) {
          return !a(b).prop("checked")
        }
      }), a.validator = function(b, c) {
        this.settings = a.extend(!0, {}, a.validator.defaults, b), this.currentForm = c, this.init()
      }, a.validator.format = function(b, c) {
        return 1 === arguments.length ? function() {
          var c = a.makeArray(arguments);
          return c.unshift(b), a.validator.format.apply(this, c)
        } : (arguments.length > 2 && c.constructor !== Array && (c = a.makeArray(arguments).slice(1)), c.constructor !== Array && (c = [c]), a.each(c, function(a, c) {
          b = b.replace(new RegExp("\\{" + a + "\\}", "g"), function() {
            return c
          })
        }), b)
      }, a.extend(a.validator, {
        defaults: {
          messages: {},
          groups: {},
          rules: {},
          errorClass: "error",
          validClass: "valid",
          errorElement: "label",
          focusInvalid: !0,
          errorContainer: a([]),
          errorLabelContainer: a([]),
          onsubmit: !0,
          ignore: ":hidden",
          ignoreTitle: !1,
          onfocusin: function(a, b) {
            this.lastActive = a, this.settings.focusCleanup && !this.blockFocusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, a, this.settings.errorClass, this.settings.validClass), this.addWrapper(this.errorsFor(a)).hide())
          },
          onfocusout: function(a, b) {
            this.checkable(a) || !(a.name in this.submitted) && this.optional(a) || this.element(a)
          },
          onkeyup: function(a, b) {
            9 === b.which && "" === this.elementValue(a) || (a.name in this.submitted || a === this.lastElement) && this.element(a)
          },
          onclick: function(a, b) {
            a.name in this.submitted ? this.element(a) : a.parentNode.name in this.submitted && this.element(a.parentNode)
          },
          highlight: function(b, c, d) {
            "radio" === b.type ? this.findByName(b.name).addClass(c).removeClass(d) : a(b).addClass(c).removeClass(d)
          },
          unhighlight: function(b, c, d) {
            "radio" === b.type ? this.findByName(b.name).removeClass(c).addClass(d) : a(b).removeClass(c).addClass(d)
          }
        },
        setDefaults: function(b) {
          a.extend(a.validator.defaults, b)
        },
        messages: {
          required: "This field is required.",
          remote: "Please fix this field.",
          email: "Please enter a valid email address.",
          url: "Please enter a valid URL.",
          date: "Please enter a valid date.",
          dateISO: "Please enter a valid date (ISO).",
          number: "Please enter a valid number.",
          digits: "Please enter only digits.",
          creditcard: "Please enter a valid credit card number.",
          equalTo: "Please enter the same value again.",
          maxlength: a.validator.format("Please enter no more than {0} characters."),
          minlength: a.validator.format("Please enter at least {0} characters."),
          rangelength: a.validator.format("Please enter a value between {0} and {1} characters long."),
          range: a.validator.format("Please enter a value between {0} and {1}."),
          max: a.validator.format("Please enter a value less than or equal to {0}."),
          min: a.validator.format("Please enter a value greater than or equal to {0}.")
        },
        autoCreateRanges: !1,
        prototype: {
          init: function() {
            function b(b) {
              var c = a.data(this[0].form, "validator"),
                d = "on" + b.type.replace(/^validate/, "");
              c.settings[d] && c.settings[d].call(c, this[0], b)
            }
            this.labelContainer = a(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || a(this.currentForm), this.containers = a(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
            var c = this.groups = {};
            a.each(this.settings.groups, function(b, d) {
              "string" == typeof d && (d = d.split(/\s/)), a.each(d, function(a, d) {
                c[d] = b
              })
            });
            var d = this.settings.rules;
            a.each(d, function(b, c) {
              d[b] = a.validator.normalizeRule(c)
            }), a(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ", "focusin focusout keyup", b).validateDelegate("[type='radio'], [type='checkbox'], select, option", "click", b), this.settings.invalidHandler && a(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler)
          },
          form: function() {
            return this.checkForm(), a.extend(this.submitted, this.errorMap), this.invalid = a.extend({}, this.errorMap), this.valid() || a(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
          },
          checkForm: function() {
            this.prepareForm();
            for (var a = 0, b = this.currentElements = this.elements(); b[a]; a++) this.check(b[a]);
            return this.valid()
          },
          element: function(b) {
            b = this.validationTargetFor(this.clean(b)), this.lastElement = b, this.prepareElement(b), this.currentElements = a(b);
            var c = this.check(b) !== !1;
            return c ? delete this.invalid[b.name] : this.invalid[b.name] = !0, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), c
          },
          showErrors: function(b) {
            if (b) {
              a.extend(this.errorMap, b), this.errorList = [];
              for (var c in b) this.errorList.push({
                message: b[c],
                element: this.findByName(c)[0]
              });
              this.successList = a.grep(this.successList, function(a) {
                return !(a.name in b)
              })
            }
            this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
          },
          resetForm: function() {
            a.fn.resetForm && a(this.currentForm).resetForm(), this.submitted = {}, this.lastElement = null, this.prepareForm(), this.hideErrors(), this.elements().removeClass(this.settings.errorClass).removeData("previousValue")
          },
          numberOfInvalids: function() {
            return this.objectLength(this.invalid)
          },
          objectLength: function(a) {
            var b = 0;
            for (var c in a) b++;
            return b
          },
          hideErrors: function() {
            this.addWrapper(this.toHide).hide()
          },
          valid: function() {
            return 0 === this.size()
          },
          size: function() {
            return this.errorList.length
          },
          focusInvalid: function() {
            if (this.settings.focusInvalid) try {
              a(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
            } catch (a) {}
          },
          findLastActive: function() {
            var b = this.lastActive;
            return b && 1 === a.grep(this.errorList, function(a) {
              return a.element.name === b.name
            }).length && b
          },
          elements: function() {
            var b = this,
              c = {};
            return a(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function() {
              return !this.name && b.settings.debug && window.console && console.error("%o has no name assigned", this), !(this.name in c || !b.objectLength(a(this).rules())) && (c[this.name] = !0, !0)
            })
          },
          clean: function(b) {
            return a(b)[0]
          },
          errors: function() {
            var b = this.settings.errorClass.replace(" ", ".");
            return a(this.settings.errorElement + "." + b, this.errorContext)
          },
          reset: function() {
            this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = a([]), this.toHide = a([]), this.currentElements = a([])
          },
          prepareForm: function() {
            this.reset(), this.toHide = this.errors().add(this.containers)
          },
          prepareElement: function(a) {
            this.reset(), this.toHide = this.errorsFor(a)
          },
          elementValue: function(b) {
            var c = a(b).attr("type"),
              d = a(b).val();
            return "radio" === c || "checkbox" === c ? a("input[name='" + a(b).attr("name") + "']:checked").val() : "string" == typeof d ? d.replace(/\r/g, "") : d
          },
          check: function(b) {
            b = this.validationTargetFor(this.clean(b));
            var c, d = a(b).rules(),
              e = !1,
              f = this.elementValue(b);
            for (var g in d) {
              var h = {
                method: g,
                parameters: d[g]
              };
              try {
                if (c = a.validator.methods[g].call(this, f, b, h.parameters), "dependency-mismatch" === c) {
                  e = !0;
                  continue
                }
                if (e = !1, "pending" === c) return void(this.toHide = this.toHide.not(this.errorsFor(b)));
                if (!c) return this.formatAndAdd(b, h), !1
              } catch (a) {
                throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + b.id + ", check the '" + h.method + "' method.", a), a
              }
            }
            if (!e) return this.objectLength(d) && this.successList.push(b), !0
          },
          customDataMessage: function(b, c) {
            return a(b).data("msg-" + c.toLowerCase()) || b.attributes && a(b).attr("data-msg-" + c.toLowerCase())
          },
          customMessage: function(a, b) {
            var c = this.settings.messages[a];
            return c && (c.constructor === String ? c : c[b])
          },
          findDefined: function() {
            for (var a = 0; a < arguments.length; a++)
              if (void 0 !== arguments[a]) return arguments[a]
          },
          defaultMessage: function(b, c) {
            return this.findDefined(this.customMessage(b.name, c), this.customDataMessage(b, c), !this.settings.ignoreTitle && b.title || void 0, a.validator.messages[c], "<strong>Warning: No message defined for " + b.name + "</strong>")
          },
          formatAndAdd: function(b, c) {
            var d = this.defaultMessage(b, c.method),
              e = /\$?\{(\d+)\}/g;
            "function" == typeof d ? d = d.call(this, c.parameters, b) : e.test(d) && (d = a.validator.format(d.replace(e, "{$1}"), c.parameters)), this.errorList.push({
              message: d,
              element: b
            }), this.errorMap[b.name] = d, this.submitted[b.name] = d
          },
          addWrapper: function(a) {
            return this.settings.wrapper && (a = a.add(a.parent(this.settings.wrapper))), a
          },
          defaultShowErrors: function() {
            var a, b;
            for (a = 0; this.errorList[a]; a++) {
              var c = this.errorList[a];
              this.settings.highlight && this.settings.highlight.call(this, c.element, this.settings.errorClass, this.settings.validClass), this.showLabel(c.element, c.message)
            }
            if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
              for (a = 0; this.successList[a]; a++) this.showLabel(this.successList[a]);
            if (this.settings.unhighlight)
              for (a = 0, b = this.validElements(); b[a]; a++) this.settings.unhighlight.call(this, b[a], this.settings.errorClass, this.settings.validClass);
            this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
          },
          validElements: function() {
            return this.currentElements.not(this.invalidElements())
          },
          invalidElements: function() {
            return a(this.errorList).map(function() {
              return this.element
            })
          },
          showLabel: function(b, c) {
            var d = this.errorsFor(b);
            d.length ? (d.removeClass(this.settings.validClass).addClass(this.settings.errorClass), d.html(c)) : (d = a("<" + this.settings.errorElement + ">").attr("for", this.idOrName(b)).addClass(this.settings.errorClass).html(c || ""), this.settings.wrapper && (d = d.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.append(d).length || (this.settings.errorPlacement ? this.settings.errorPlacement(d, a(b)) : d.insertAfter(b))), !c && this.settings.success && (d.text(""), "string" == typeof this.settings.success ? d.addClass(this.settings.success) : this.settings.success(d, b)), this.toShow = this.toShow.add(d)
          },
          errorsFor: function(b) {
            var c = this.idOrName(b);
            return this.errors().filter(function() {
              return a(this).attr("for") === c
            })
          },
          idOrName: function(a) {
            return this.groups[a.name] || (this.checkable(a) ? a.name : a.id || a.name)
          },
          validationTargetFor: function(a) {
            return this.checkable(a) && (a = this.findByName(a.name).not(this.settings.ignore)[0]), a
          },
          checkable: function(a) {
            return /radio|checkbox/i.test(a.type)
          },
          findByName: function(b) {
            return a(this.currentForm).find("[name='" + b + "']")
          },
          getLength: function(b, c) {
            switch (c.nodeName.toLowerCase()) {
              case "select":
                return a("option:selected", c).length;
              case "input":
                if (this.checkable(c)) return this.findByName(c.name).filter(":checked").length
            }
            return b.length
          },
          depend: function(a, b) {
            return !this.dependTypes[typeof a] || this.dependTypes[typeof a](a, b)
          },
          dependTypes: {
            boolean: function(a, b) {
              return a
            },
            string: function(b, c) {
              return !!a(b, c.form).length
            },
            function: function(a, b) {
              return a(b)
            }
          },
          optional: function(b) {
            var c = this.elementValue(b);
            return !a.validator.methods.required.call(this, c, b) && "dependency-mismatch"
          },
          startRequest: function(a) {
            this.pending[a.name] || (this.pendingRequest++, this.pending[a.name] = !0)
          },
          stopRequest: function(b, c) {
            this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[b.name], c && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (a(this.currentForm).submit(), this.formSubmitted = !1) : !c && 0 === this.pendingRequest && this.formSubmitted && (a(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
          },
          previousValue: function(b) {
            return a.data(b, "previousValue") || a.data(b, "previousValue", {
              old: null,
              valid: !0,
              message: this.defaultMessage(b, "remote")
            })
          }
        },
        classRuleSettings: {
          required: {
            required: !0
          },
          email: {
            email: !0
          },
          url: {
            url: !0
          },
          date: {
            date: !0
          },
          dateISO: {
            dateISO: !0
          },
          number: {
            number: !0
          },
          digits: {
            digits: !0
          },
          creditcard: {
            creditcard: !0
          }
        },
        addClassRules: function(b, c) {
          b.constructor === String ? this.classRuleSettings[b] = c : a.extend(this.classRuleSettings, b)
        },
        classRules: function(b) {
          var c = {},
            d = a(b).attr("class");
          return d && a.each(d.split(" "), function() {
            this in a.validator.classRuleSettings && a.extend(c, a.validator.classRuleSettings[this])
          }), c
        },
        attributeRules: function(b) {
          var c = {},
            d = a(b),
            e = d[0].getAttribute("type");
          for (var f in a.validator.methods) {
            var g;
            "required" === f ? (g = d.get(0).getAttribute(f), "" === g && (g = !0), g = !!g) : g = d.attr(f), /min|max/.test(f) && (null === e || /number|range|text/.test(e)) && (g = Number(g)), g ? c[f] = g : e === f && "range" !== e && (c[f] = !0)
          }
          return c.maxlength && /-1|2147483647|524288/.test(c.maxlength) && delete c.maxlength, c
        },
        dataRules: function(b) {
          var c, d, e = {},
            f = a(b);
          for (c in a.validator.methods) d = f.data("rule-" + c.toLowerCase()), void 0 !== d && (e[c] = d);
          return e
        },
        staticRules: function(b) {
          var c = {},
            d = a.data(b.form, "validator");
          return d.settings.rules && (c = a.validator.normalizeRule(d.settings.rules[b.name]) || {}), c
        },
        normalizeRules: function(b, c) {
          return a.each(b, function(d, e) {
            if (e === !1) return void delete b[d];
            if (e.param || e.depends) {
              var f = !0;
              switch (typeof e.depends) {
                case "string":
                  f = !!a(e.depends, c.form).length;
                  break;
                case "function":
                  f = e.depends.call(c, c)
              }
              f ? b[d] = void 0 === e.param || e.param : delete b[d]
            }
          }), a.each(b, function(d, e) {
            b[d] = a.isFunction(e) ? e(c) : e
          }), a.each(["minlength", "maxlength"], function() {
            b[this] && (b[this] = Number(b[this]))
          }), a.each(["rangelength", "range"], function() {
            var c;
            b[this] && (a.isArray(b[this]) ? b[this] = [Number(b[this][0]), Number(b[this][1])] : "string" == typeof b[this] && (c = b[this].split(/[\s,]+/), b[this] = [Number(c[0]), Number(c[1])]))
          }), a.validator.autoCreateRanges && (b.min && b.max && (b.range = [b.min, b.max], delete b.min, delete b.max), b.minlength && b.maxlength && (b.rangelength = [b.minlength, b.maxlength], delete b.minlength, delete b.maxlength)), b
        },
        normalizeRule: function(b) {
          if ("string" == typeof b) {
            var c = {};
            a.each(b.split(/\s/), function() {
              c[this] = !0
            }), b = c
          }
          return b
        },
        addMethod: function(b, c, d) {
          a.validator.methods[b] = c, a.validator.messages[b] = void 0 !== d ? d : a.validator.messages[b], c.length < 3 && a.validator.addClassRules(b, a.validator.normalizeRule(b))
        },
        methods: {
          required: function(b, c, d) {
            if (!this.depend(d, c)) return "dependency-mismatch";
            if ("select" === c.nodeName.toLowerCase()) {
              var e = a(c).val();
              return e && e.length > 0
            }
            return this.checkable(c) ? this.getLength(b, c) > 0 : a.trim(b).length > 0
          },
          email: function(a, b) {
            return this.optional(b) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(a)
          },
          url: function(a, b) {
            return this.optional(b) || /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(a)
          },
          date: function(a, b) {
            return this.optional(b) || !/Invalid|NaN/.test(new Date(a).toString())
          },
          dateISO: function(a, b) {
            return this.optional(b) || /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(a)
          },
          number: function(a, b) {
            return this.optional(b) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)
          },
          digits: function(a, b) {
            return this.optional(b) || /^\d+$/.test(a)
          },
          creditcard: function(a, b) {
            if (this.optional(b)) return "dependency-mismatch";
            if (/[^0-9 \-]+/.test(a)) return !1;
            var c = 0,
              d = 0,
              e = !1;
            a = a.replace(/\D/g, "");
            for (var f = a.length - 1; f >= 0; f--) {
              var g = a.charAt(f);
              d = parseInt(g, 10), e && (d *= 2) > 9 && (d -= 9), c += d, e = !e
            }
            return c % 10 === 0
          },
          minlength: function(b, c, d) {
            var e = a.isArray(b) ? b.length : this.getLength(a.trim(b), c);
            return this.optional(c) || e >= d
          },
          maxlength: function(b, c, d) {
            var e = a.isArray(b) ? b.length : this.getLength(a.trim(b), c);
            return this.optional(c) || e <= d
          },
          rangelength: function(b, c, d) {
            var e = a.isArray(b) ? b.length : this.getLength(a.trim(b), c);
            return this.optional(c) || e >= d[0] && e <= d[1]
          },
          min: function(a, b, c) {
            return this.optional(b) || a >= c
          },
          max: function(a, b, c) {
            return this.optional(b) || a <= c
          },
          range: function(a, b, c) {
            return this.optional(b) || a >= c[0] && a <= c[1]
          },
          equalTo: function(b, c, d) {
            var e = a(d);
            return this.settings.onfocusout && e.unbind(".validate-equalTo").bind("blur.validate-equalTo", function() {
              a(c).valid()
            }), b === e.val()
          },
          remote: function(b, c, d) {
            if (this.optional(c)) return "dependency-mismatch";
            var e = this.previousValue(c);
            if (this.settings.messages[c.name] || (this.settings.messages[c.name] = {}), e.originalMessage = this.settings.messages[c.name].remote, this.settings.messages[c.name].remote = e.message, d = "string" == typeof d && {
                url: d
              } || d, e.old === b) return e.valid;
            e.old = b;
            var f = this;
            this.startRequest(c);
            var g = {};
            return g[c.name] = b, a.ajax(a.extend(!0, {
              url: d,
              mode: "abort",
              port: "validate" + c.name,
              dataType: "json",
              data: g,
              success: function(d) {
                f.settings.messages[c.name].remote = e.originalMessage;
                var g = d === !0 || "true" === d;
                if (g) {
                  var h = f.formSubmitted;
                  f.prepareElement(c), f.formSubmitted = h, f.successList.push(c), delete f.invalid[c.name], f.showErrors()
                } else {
                  var i = {},
                    j = d || f.defaultMessage(c, "remote");
                  i[c.name] = e.message = a.isFunction(j) ? j(b) : j, f.invalid[c.name] = !0, f.showErrors(i)
                }
                e.valid = g, f.stopRequest(c, g)
              }
            }, d)), "pending"
          }
        }
      }), a.format = a.validator.format
    }(jQuery),
    function(a) {
      var b = {};
      if (a.ajaxPrefilter) a.ajaxPrefilter(function(a, c, d) {
        var e = a.port;
        "abort" === a.mode && (b[e] && b[e].abort(), b[e] = d)
      });
      else {
        var c = a.ajax;
        a.ajax = function(d) {
          var e = ("mode" in d ? d : a.ajaxSettings).mode,
            f = ("port" in d ? d : a.ajaxSettings).port;
          return "abort" === e ? (b[f] && b[f].abort(), b[f] = c.apply(this, arguments), b[f]) : c.apply(this, arguments)
        }
      }
    }(jQuery),
    function(a) {
      a.extend(a.fn, {
        validateDelegate: function(b, c, d) {
          return this.bind(c, function(c) {
            var e = a(c.target);
            if (e.is(b)) return d.apply(e, arguments)
          })
        }
      })
    }(jQuery);
  var topNavIsShow = !1;
  RuiZeanTrader.prototype.ele = {
    win: $(window),
    html: $("body, html"),
    topBar: $(".top-bar"),
    header: $(".header"),
    banner: $(".banner"),
    hamburger: $(".hamburger"),
    nav: $(".nav"),
    topNav: $(".top-nav-list"),
    floatNav: $(".float-nav"),
    headerNav: $(".header-nav-list")
  }, RuiZeanTrader.prototype.getEle = function() {
    this.ele = {
      win: $(window),
      html: $("body, html"),
      topBar: $(".top-bar"),
      header: $(".header"),
      floatNav: $(".float-nav"),
      topNav: $(".top-nav-list"),
      banner: $(".banner"),
      hamburger: $(".hamburger")
    }
  }, RuiZeanTrader.prototype.backTop = function() {
    this.ele.html.animate({
      scrollTop: "0"
    }, 300)
  }, RuiZeanTrader.prototype.scrollDown = function() {
    this.ele.html.animate({
      scrollTop: $(window).height()
    }, 300)
  }, RuiZeanTrader.prototype.bannerSize = function() {
    this.ele.banner.css({
      height:"820px"
      // height: (Number($(window).height())*0.8).toString()
      // console.log((Number($(window).height())*0.8).toString())
    })
  }, RuiZeanTrader.prototype.openTopNav = function() {
    topNavIsShow = !0, this.ele.hamburger.addClass("active"), this.ele.topNav.css({
      visibility: "visible"
    }), this.ele.topNav.fadeIn(), "computer" != deviceName && $("body, html").css({
      overflow: "hidden"
    })
  }, RuiZeanTrader.prototype.closeTopNav = function() {
    topNavIsShow = !1, this.ele.hamburger.removeClass("active"), this.ele.topNav.fadeOut(), "computer" != deviceName && $("body, html").css({
      overflow: "auto"
    })
  }, RuiZeanTrader.prototype.mobileNav = function() {
    $(".nav5").length && $(".nav5").each(function() {
      $nav = $(this), $nav.on("click", ".li1 .tp1 .arrow", function() {
        var a = $(this).parent().parent().parent();
        return a.hasClass("active") ? (a.removeClass("active"), a.find(".bt1").slideUp("fast")) : (a.addClass("active"), a.find(".bt1").slideDown("fast")), !1
      })
    })
  }, RuiZeanTrader.prototype.select = function() {
    $(".form-select1-select2").select2({
      theme: "form-select1",
      minimumResultsForSearch: 1 / 0
    })
  }, RuiZeanTrader.prototype.floatNavAni = function() {
    var a = this.ele.win;
    this.ele.floatNav, a.scrollTop(), a.height()
  }, RuiZeanTrader.prototype.headerFixed = function() {
    var a = this.ele.win,
      b = this.ele.topBar,
      c = this.ele.header,
      d = this.ele.topNav,
      e = (this.ele.hamburger, a.scrollTop()),
      f = (b.outerHeight(!0), d.outerHeight(!0), c.outerHeight(!0));
    c.offset().top;
    e > 0 ? c.css({
      "-webkit-transform": "translate(0, " + -e + "px)",
      "-moz-transform": "translate(0, " + -e + "px)",
      "-ms-transform": "translate(0, " + -e + "px)",
      "-o-transform": "translate(0, " + -e + "px)",
      transform: "translate(0, " + -e + "px)"
    }) : c.css({
      "-webkit-transform": "translate(0, 0)",
      "-moz-transform": "translate(0, 0)",
      "-ms-transform": "translate(0, 0)",
      "-o-transform": "translate(0, 0)",
      transform: "translate(0, 0)"
    }), e >= f ? b.addClass("active") : b.removeClass("active")
  }, RuiZeanTrader.prototype.openApplyForm = function() {
    var a = $('<div class="form-mask" style="display:none;"></div>');
    $("body").append(a), a.fadeIn("300"), $(".form-apply").fadeIn("300")
  }, RuiZeanTrader.prototype.closeApplyForm = function() {
    $(".form-mask").fadeOut(300, function() {
      $(".form-mask").remove()
    }), $(".form-apply").fadeOut("300")
  }, RuiZeanTrader.prototype.pdfInit = function() {
    $(".pdf-content").length && $(".pdf-content").each(function() {
      var a = $(this),
        b = a.attr("data-pdf-src");
      console.log(b), "internet explorer" == browserName || "opera" == browserName ? a.html('<p>您的浏览器不支持 pdf预览，<a href="' + b + '">点击下载PDF</a></p>') : a.media({
        width: "100%",
        height: 400,
        autoplay: !0,
        src: b
      })
    })
  }, RuiZeanTrader.prototype.quickMenuScroll = function() {
    var a = this;
    if ($(".scrollFixed").length) {
      var b = $(".scrollFixed");
      b.each(function() {
        var b = $(this),
          c = b.outerHeight(!0),
          d = b.parent().offset().top,
          e = b.parent().outerHeight(!0),
          f = a.ele.topBar.outerHeight(!0),
          g = $(window).scrollTop();
        g >= d - f ? (b.addClass("scrolling"), b.hasClass("quick-menu-style2") && (b.removeClass("direction-horizontal"), b.addClass("direction-vertical")), e + d > c + g + f ? b.css({
          top: g - d + f
        }) : b.css({
          top: e - c
        })) : (b.removeClass("scrolling"), b.hasClass("quick-menu-style2") && (b.addClass("direction-horizontal"), b.removeClass("direction-vertical")), b.css({
          top: "0"
        }))
      })
    }
    if ($(".quick-menu").length) {
      var c = $(".quick-menu");
      c.each(function() {
        for (var b = $(this), c = b.find(".curValue"), d = b.hasClass("quick-menu-horizontal") ? b.outerHeight(!0) : 0, e = "", f = 0; f <= $("body").find(".qm-id").length - 1; f++) {
          var g = $("body").find(".qm-id").eq(f),
            h = $("body").find(".qm-id").eq(f + 1);
          if (void 0 != h) {
            if (g.offset().top - a.ele.win.scrollTop() <= a.ele.topBar.outerHeight(!0) + 10 + d && h.offset().top - a.ele.win.scrollTop() >= a.ele.topBar.outerHeight(!0) + 10 + d) {
              e = g.attr("id");
              break
            }
          } else if (g.offset().top - a.ele.win.scrollTop() <= a.ele.topBar.outerHeight(!0) + 10 + d) {
            e = g.attr("id");
            break
          }
        }
        for (var i = 0; i <= b.find("li").length - 1; i++) {
          var g = b.find("li").eq(i),
            j = g.attr("data-id");
          if (e == j) {
            g.addClass("active").siblings().removeClass("active"), c.html(g.html());
            break
          }
        }
      })
    }
  }, RuiZeanTrader.prototype.quickMenuInit = function() {
    var a = this;
    if ($(".quick-menu").length) {
      var b = $(".quick-menu"),
        c = b.find(".curValue"),
        d = b.hasClass("quick-menu-horizontal") ? b.outerHeight(!0) : 0;
      b.each(function() {
        var b = $(this);
        b.find("li").each(function() {
          $(this).bind("click", function() {
            c.html($(this).html()), $(this).addClass("active").siblings().removeClass("active");
            var b = $(this).attr("data-id");
            void 0 != b && ($("#" + b).click(), a.ele.html.stop().animate({
              scrollTop: $("#" + b).offset().top - a.ele.topBar.outerHeight(!0) - d
            }, 100))
          })
        })
      })
    }
    if ($(".quick-menu-mobile").length) {
      var b = $(".quick-menu-mobile"),
        d = b.hasClass("quick-menu-horizontal") ? b.outerHeight(!0) : 0;
      b.each(function() {
        var b = $(this);
        b.find("li").each(function() {
          $(this).bind("mouseover", function() {
            $(this).addClass("active").siblings().removeClass("active");
            var b = $(this).attr("data-id");
            void 0 != b && ($("#" + b).click(), a.ele.html.stop().animate({
              scrollTop: $("#" + b).offset().top - a.ele.topBar.outerHeight(!0) - d
            }, 0))
          })
        })
      })
    }
  }, RuiZeanTrader.prototype.diagramList = function() {
    if ($(".diagram-list").length) {
      var a = $(".diagram-list");
      a.each(function() {
        var a = $(this),
          b = a.find(".dl-hd1 .dh-item"),
          c = a.find(".dl-bd .db-item");
        b.eq(0).parent().addClass("active"), c.hide().eq(0).show(), b.each(function(a) {
          $(this).bind("click", function() {
            $(this).parent().addClass("active").siblings().removeClass("active"), c.hide(), c.eq(a).show()
          })
        })
      })
    }
  }, RuiZeanTrader.prototype.mainBdTab = function() {
    var a = this;
    $(".mainBd-tab").length && $(".mainBd-tab").each(function() {
      $(this).find("> .mainBd").eq(0).find("> .com-hd").addClass("active"), $(this).find("> .mainBd").eq(0).find("> .com-bd").show(), $(this).find("> .mainBd").each(function() {
        var b = $(this),
          c = b.find("> .com-hd"),
          d = b.find("> .com-bd");
        c.bind("click", function() {
          d.slideDown("fast"), c.addClass("active"), b.siblings().find("> .com-hd").removeClass("active"), b.siblings().find("> .com-bd").hide();
          var e = $("quick-menu-horizontal").length ? $("quick-menu-horizontal").outerHeight(!0) : 0;
          a.ele.html.animate({
            scrollTop: c.offset().top - a.ele.topBar.outerHeight(!0) - e
          }, 100)
        })
      })
    }), $(".mainBd-tab2").length && $(".mainBd-tab2").each(function() {
      $(this).find("> .mainBd").eq(0).find("> .com-hd").addClass("active"), $(this).find("> .mainBd").eq(0).find("> .com-bd").show(), $(this).find("> .mainBd").each(function() {
        var a = $(this),
          b = a.find("> .com-hd"),
          c = a.find("> .com-bd");
        b.bind("click", function() {
          c.slideDown("fast"), b.addClass("active"), a.siblings().find("> .com-hd").removeClass("active"), a.siblings().find("> .com-bd").slideUp("fast")
        })
      })
    })
  }, LoopScroll.prototype.init = function() {
    this.$eleHeight = this.$ele.outerHeight(!0), this.$eleHeight > this.maxHeight ? (this.$ele.css({
      height: this.maxHeight,
      overflow: "hidden"
    }), this.$eleWrapperHeight = this.$eleWrapper.outerHeight(!0), this.$eleWrapper.css({
      transform: "translate(0, " + this.initHeight + ")"
    }), this.$eleItem.length >= this.len && (this.len = this.$eleItem.length, this.$eleWrapper.append(this.$eleItem.clone())), this.render(), this.event()) : this.$ele.css({
      height: this.$eleHeight,
      overflow: "hidden"
    })
  }, LoopScroll.prototype.render = function() {
    var a = this;
    a.stopRender || (a.initHeight += a.speed, a.initHeight < a.$eleWrapperHeight ? (console.log(a.initHeight), a.$eleWrapper.css({
      transform: "translate(0, " + -a.initHeight + "px)"
    })) : (a.initHeight = 0, a.$eleWrapper.css({
      transform: "translate(0, 0)"
    }))), requestAnimationFrame(function() {
      a.render()
    })
  }, LoopScroll.prototype.event = function() {
    var a = this;
    a.$ele.bind("mouseenter", function() {
      a.stopRender = !0
    }), a.$ele.bind("mouseleave", function() {
      a.stopRender = !1
    })
  }, SnapTxt.prototype = {
    init: function() {
      this.snapTxt = Snap(this.ele), this.gl = this.snapTxt.gradient(this.gradient), this.txtArray = this.$ele.attr("data-txt").split(","), this.draw()
    },
    draw: function() {
      for (var a = 0, b = 0, c = 0; c <= this.txtArray.length - 1; c++) {
        var d = this.snapTxt.text(0, 0, this.txtArray[c]).attr({
          fill: this.gl,
          textAnchor: this.textAchor,
          fontSize: this.fontSize,
          fontFamily: this.fontFamily,
          fontWeight: this.fontWeight
        });
        a < d.getBBox().w && (a = d.getBBox().w), b += d.getBBox().h, d.attr({
          y: b - d.getBBox().y2
        })
      }
      this.$ele.attr({
        width: a,
        height: parseInt(b)
      }), this.$ele[0].setAttribute("viewBox", "0, 0, " + a + ", " + parseInt(b))
    }
  }, SnapPic.prototype = {
    init: function() {
      this.snapPic = Snap(this.ele), this.draw()
    },
    draw: function() {
      var a = this.snapPic.paper.filter(Snap.filter.shadow(-2, 2, 6, "#aaa")),
        b = this.snapPic.paper.path("M" + this.offset + " 0L" + this.imgWidth + " 0L" + (this.imgWidth - this.offset) + " " + this.imgHeight + "L0 " + this.imgHeight + "Z").attr({
          fill: "#fff"
        });
      this.snapPic.paper.polygon(this.offset, 0, this.imgWidth, 0, this.imgWidth - this.offset, this.imgHeight, 0, this.imgHeight).attr({
        fill: "#fff",
        filter: a
      }), this.snapPic.paper.image(this.imgSrc, 0, 0, this.imgWidth, this.imgHeight).attr({
        mask: b
      });
      this.$ele.attr({
        width: parseInt(this.imgWidth) + 2 * this.shadowOffset,
        height: parseInt(this.imgHeight) + 2 * this.shadowOffset
      }), this.$ele[0].setAttribute("viewBox", -this.shadowOffset + ", " + -this.shadowOffset + ", " + (parseInt(this.imgWidth) + 2 * this.shadowOffset) + ", " + (parseInt(this.imgHeight) + 2 * this.shadowOffset))
    }
  }, SnapBtnBg.prototype = {
    init: function() {
      this.snapBtnBg = Snap(this.ele), this.gl = this.snapBtnBg.gradient(this.gradient), this.gl2 = this.snapBtnBg.gradient(this.gradient2), this.points = {
        x1: 0,
        x2: this.offset,
        x3: this.$ele.parent().outerWidth(!0),
        x4: this.$ele.parent().outerWidth(!0) + 2 * this.offset,
        y1: 0,
        y2: this.$ele.parent().outerHeight(!0)
      }, this.draw()
    },
    path: function(a) {
      var b = "M" + a.x2 + " " + a.y1 + "L" + a.x4 + " " + a.y1 + " " + a.x4 + " " + a.y2 + " " + a.x1 + " " + a.y2 + "Z";
      return b
    },
    draw: function() {
      var a = this.snapBtnBg.paper.path(this.path(this.points)).attr({
          fill: this.gl,
          display: "block"
        }),
        b = this.snapBtnBg.paper.path(this.path(this.points)).attr({
          fill: this.gl2,
          display: "none"
        });
      this.$ele.css({
        width: this.points.x4,
        height: this.points.y2
      }), this.$ele.parent().hasClass("hoverBg") && (a.attr({
        display: "none"
      }), b.attr({
        display: "block"
      }), this.$ele.parent().bind("mouseover", function() {
        a.attr({
          display: "block"
        }), b.attr({
          display: "none"
        })
      }), this.$ele.parent().bind("mouseleave", function() {
        a.attr({
          display: "none"
        }), b.attr({
          display: "block"
        })
      })), this.$ele[0].setAttribute("viewBox", "0, 0, " + this.points.x4 + "," + this.points.y2)
    }
  }, SnapBtn1.prototype = {
    init: function() {
      this.snapBtn = Snap(this.ele), this.gl1 = this.snapBtn.gradient(this.gradientOver), this.gl2 = this.snapBtn.gradient(this.gradientOut), this.draw()
    },
    draw: function() {
      var a, b, c, d, e, f = this;
      "none" != this.font1 ? (a = "M" + this.space + " 0L" + (this.space + this.font1Width) + " 0L" + this.font1Width + " " + this.height + "L0 " + this.height + "Z", b = "M" + (this.space + this.font1Width) + " 0L" + (this.space + this.font1Width + this.font2Width) + " 0L" + (this.font1Width + this.font2Width) + " " + this.height + "L" + this.font1Width + " " + this.height + "Z", c = "M" + (this.space + this.font1Width) + " 0L" + this.font1Width + " " + this.height + "L" + (this.font1Width + this.font2Width) + " " + this.height + "L" + this.font1Width + " " + this.height + "Z") : (b = "M" + this.space + " 0L" + (this.space + this.font2Width) + " 0L" + this.font2Width + " " + this.height + "L0 " + this.height + "Z", c = "M" + this.space + " 0L0 " + this.height + "L" + this.font2Width + " " + this.height + "L0 " + this.height + "Z"), d = {
        x1: 0,
        y1: this.height / 2 - this.lineY,
        x2: this.lineY,
        y2: this.height / 2
      }, e = {
        x1: 0,
        y1: this.height / 2 + this.lineY,
        x2: this.lineY,
        y2: this.height / 2
      };
      var g, h, i, j;
      h = this.snapBtn.path(b).attr({
        fill: this.gl2
      }), i = this.snapBtn.path(c).attr({
        fill: this.gl1
      }), "none" != this.font1 ? (g = this.snapBtn.path(a).attr({
        fill: this.gl1
      }), j = this.snapBtn.g(g, h, i)) : j = this.snapBtn.g(h, i);
      var k, l, m, n, o;
      "none" != this.font1 ? (k = this.snapBtn.text((this.font1Width + this.space) / 2, this.height / 2, this.font1).attr({
        fill: this.font1Color,
        "font-size": this.font1Size + "px",
        "text-anchor": this.textAchor
      }), l = new Snap.Matrix, l.translate(0, this.height / 2 + k.getBBox().h / 2 - k.getBBox().y2), k.transform(l), m = this.snapBtn.text(this.font1Width + (this.font2Width + this.space) / 2, 0, this.font2).attr({
        fill: this.font2Color,
        "font-size": this.font2Size + "px",
        "text-anchor": this.textAchor
      }), n = new Snap.Matrix, n.translate(0, this.height / 2 + m.getBBox().h / 2 - m.getBBox().y2), m.transform(n), o = this.snapBtn.g(k, m)) : (m = this.snapBtn.text((this.font2Width + this.space) / 2, 0, this.font2).attr({
        fill: this.font2Color,
        "font-size": this.font2Size + "px",
        "text-anchor": this.textAchor
      }), n = new Snap.Matrix, n.translate(0, this.height / 2 + m.getBBox().h / 2 - m.getBBox().y2), m.transform(n));
      var p, q, r, s, t, u;
      p = this.snapBtn.line(d.x1, d.y1, d.x2, d.y2).attr({
        stroke: this.font2Color,
        strokeWidth: 2
      }), q = this.snapBtn.line(e.x1, e.y1, e.x2, e.y2).attr({
        stroke: this.font2Color,
        strokeWidth: 2
      }), r = this.snapBtn.line(d.x1, d.y1, d.x1, d.y1).attr({
        stroke: this.font2ColorOver,
        strokeWidth: 2
      }), s = this.snapBtn.line(e.x1, e.y1, e.x1, e.y1).attr({
        stroke: this.font2ColorOver,
        strokeWidth: 2
      }), t = this.snapBtn.g(p, q, r, s), u = new Snap.Matrix, "none" != this.font1 ? u.translate(this.font1Width + this.font2Width - this.space / 2, 0) : u.translate(this.font2Width - this.space / 2, 0), t.transform(u), "none" != this.font1 ? (this.$ele.attr({
        width: this.font1Width + this.font2Width + this.space,
        height: this.height
      }), this.$ele[0].setAttribute("viewBox", "0, 0, " + (this.font1Width + this.font2Width + this.space) + ", " + this.height)) : (this.$ele.attr({
        width: this.font2Width + this.space,
        height: this.height
      }), this.$ele[0].setAttribute("viewBox", "0, 0, " + (this.font2Width + this.space) + ", " + this.height)), this.$ele.bind("mouseover", function() {
        i.stop(), i.animate({
          path: b
        }, 500, mina.bounce), m.stop(), m.animate({
          fill: f.font2ColorOver
        }, 500, mina.bounce), r.stop(), r.animate({
          x2: d.x2,
          y2: d.y2
        }, 500, mina.bounce), s.stop(), s.animate({
          x2: e.x2,
          y2: e.y2
        }, 500, mina.bounce)
      }), this.$ele.bind("mouseout", function() {
        i.stop(), i.animate({
          path: c
        }, 100, mina.linear), m.stop(), m.animate({
          fill: f.font2Color
        }, 100, mina.linear), r.stop(), r.animate({
          x2: d.x1,
          y2: d.y1
        }, 100, mina.linear), s.stop(), s.animate({
          x2: e.x1,
          y2: e.y1
        }, 100, mina.linear)
      })
    }
  }, SnapScrollBtn.prototype = {
    init: function() {
      this.snapScrollBtn = Snap(this.ele), this.draw()
    },
    draw: function() {
      var a = {
          x1: 0 + this.strokeWidth,
          x2: this.width / 2,
          x3: this.width,
          x4: this.width / 9,
          x5: this.width - this.width / 9,
          y1: -this.arcHeight + this.strokeWidth,
          y2: this.arcHeight + this.strokeWidth,
          y3: this.height / 2 + this.strokeWidth,
          y4: this.height - this.arcHeight + this.strokeWidth,
          y8: -this.arcHeight / 3 + this.strokeWidth,
          y9: this.height + this.arcHeight / 3 + this.strokeWidth,
          y12: -this.arcHeight / 10 + this.strokeWidth,
          y13: this.height + this.arcHeight / 10 + this.strokeWidth,
          y6: this.lineSpace + this.strokeWidth,
          y7: this.lineSpace + this.lineHeight + this.strokeWidth,
          y10: this.height - this.lineHeight - this.lineSpace + this.strokeWidth,
          y11: this.height - this.lineSpace + this.strokeWidth
        },
        b = {
          out: {
            path1: "M" + a.x1 + " " + a.y4 + "L" + a.x1 + " " + a.y2 + "C" + a.x4 + " " + a.y8 + " " + a.x5 + " " + a.y8 + " " + a.x3 + " " + a.y2 + "L" + a.x3 + " " + a.y4 + "C" + a.x5 + " " + a.y9 + " " + a.x4 + " " + a.y9 + " " + a.x1 + " " + a.y4 + "Z",
            path2: "M" + a.x2 + " " + a.y6 + "L" + a.x2 + " " + a.y7
          },
          over: {
            path1: "M" + a.x1 + " " + a.y4 + "L" + a.x1 + " " + a.y2 + "C" + a.x4 + " " + a.y8 + " " + a.x5 + " " + a.y8 + " " + a.x3 + " " + a.y2 + "L" + a.x3 + " " + a.y4 + "C" + a.x5 + " " + a.y9 + " " + a.x4 + " " + a.y9 + " " + a.x1 + " " + a.y4 + "Z",
            path2: "M" + a.x2 + " " + a.y11 + "L" + a.x2 + " " + a.y10
          }
        },
        c = this.snapScrollBtn.path(b.out.path1).attr({
          fill: "none",
          stroke: this.strokeStyle,
          "stroke-width": this.strokeWidth
        }),
        d = this.snapScrollBtn.path(b.out.path2).attr({
          fill: "none",
          stroke: this.strokeStyle,
          "stroke-width": this.strokeWidth
        });
      this.$ele.bind("mouseover", function() {
        c.stop(), c.animate({
          path: b.over.path1
        }, 2e3, mina.bounce), d.stop(), d.animate({
          path: b.over.path2
        }, 500, mina.bounce)
      }), this.$ele.bind("mouseout", function() {
        c.stop(), c.animate({
          path: b.out.path1
        }, 500, mina.bounce), d.stop(), d.animate({
          path: b.out.path2
        }, 500, mina.bounce)
      }), this.$ele.attr({
        width: this.width + this.strokeWidth / 2,
        height: this.height + this.strokeWidth / 2
      }), this.$ele[0].setAttribute("viewBox", "0, 0, " + (this.width + this.strokeWidth / 2 + this.strokeWidth) + ", " + (this.height + this.strokeWidth / 2 + this.strokeWidth))
    }
  }, SnapArrowBtn.prototype = {
    init: function() {
      this.snapArrowBtn = Snap(this.ele), this.gl = this.snapArrowBtn.gradient(this.gradient), this.gl2 = this.snapArrowBtn.gradient(this.gradient2), this.draw()
    },
    draw: function() {
      var a = [];
      a = "prev" == this.arrowDirection ? [0, this.height / 2, this.width, 0, this.width, this.height, 0, this.height / 2] : [this.width, this.height / 2, 0, 0, 0, this.height, this.width, this.height / 2];
      this.snapArrowBtn.polygon(a).attr({
        fill: this.gl
      });
      this.$ele.attr({
        width: this.width,
        height: this.height
      }), this.$ele[0].setAttribute("viewBox", "0, 0, " + this.width + ", " + this.height)
    }
  }, SnapBtnBorder.prototype = {
    init: function() {
      this.SnapBtnBorder = Snap(this.ele), this.gl = this.SnapBtnBorder.gradient(this.gradient), this.gl2 = this.SnapBtnBorder.gradient(this.gradient2), this.draw()
    },
    draw: function() {
      var a = this;
      a.w = a.$parentEle.outerWidth(!0), a.h = a.$parentEle.outerHeight(!0);
      var b = "M0 0L" + a.w + " 0L" + a.w + " " + a.h + "L0 " + a.h + "L0 0 Z",
        c = a.SnapBtnBorder.path(b).attr({
          stroke: a.gl,
          fill: "none",
          "stroke-width": a.strokeWidth
        });
      c.attr({
        "stroke-dasharray": c.getTotalLength(),
        "stroke-dashoffset": c.getTotalLength()
      }), a.$ele.attr({
        width: a.w,
        height: a.h
      }), a.$ele[0].setAttribute("viewBox", "0, 0, " + a.w + ", " + a.h)
    }
  }, RuiZeanTrader.prototype.snapInit = function() {
    $(".svg-hdTitle").each(function() {
      new SnapTxt("#" + $(this).attr("id"), {
        fontSize: "18px",
        fontFamily: "'Microsoft Yahei','STHeiti Light'",
        gradient: "l(0, 0, 1, 0)#E4C674-#F4E3A0-#E4C674",
        fontWeight: "bold"
      })
    }), $(".svg-hdTitle2").each(function() {
      new SnapTxt("#" + $(this).attr("id"), {
        fontSize: "20px",
        fontFamily: "'Microsoft Yahei','STHeiti Light'",
        gradient: "l(0, 0, 1, 0)#E4C674-#F4E3A0-#E4C674",
        fontWeight: "bold"
      })
    }), $(".svg-hdTitle3").each(function() {
      new SnapTxt("#" + $(this).attr("id"), {
        fontSize: "12px",
        fontFamily: "'Microsoft Yahei','STHeiti Light'",
        gradient: "l(0, 0, 1, 0)#E4C674-#F4E3A0-#E4C674",
        fontWeight: "bold"
      })
    }), $(".svg-hdTitle4").each(function() {
      new SnapTxt("#" + $(this).attr("id"), {
        fontSize: "16px",
        fontFamily: "'Microsoft Yahei','STHeiti Light'",
        gradient: "l(0, 0, 1, 0)#E4C674-#F4E3A0-#E4C674",
        fontWeight: "bold"
      })
    }), $(".svg-hdTitle5").each(function() {
      new SnapTxt("#" + $(this).attr("id"), {
        fontSize: "18px",
        fontFamily: "'Microsoft Yahei','STHeiti Light'",
        gradient: "l(0, 0, 1, 0)#E4C674-#F4E3A0-#E4C674"
      })
    }), $(".svg-hdTitle6").each(function() {
      new SnapTxt("#" + $(this).attr("id"), {
        fontSize: "22px",
        fontFamily: "'Microsoft Yahei','STHeiti Light'",
        gradient: "l(0, 0, 1, 0)#E4C674-#F4E3A0-#E4C674",
        fontWeight: "bold"
      })
    }), $(".svg-hdTitle7").each(function() {
      new SnapTxt("#" + $(this).attr("id"), {
        fontSize: "14px",
        fontFamily: "'Microsoft Yahei','STHeiti Light'",
        gradient: "l(0, 0, 1, 0)#E4C674-#F4E3A0-#E4C674",
        fontWeight: "bold"
      })
    }), $(".svg-pic1").each(function() {
      new SnapPic("#" + $(this).attr("id"), {
        imgSrc: $(this).attr("data-src"),
        imgWidth: $(this).attr("data-width"),
        imgHeight: $(this).attr("data-height"),
        offset: $(this).attr("data-offset")
      })
    }), $(".svg-btnBg").each(function() {
      new SnapBtnBg("#" + $(this).attr("id"), {})
    }), $(".svg-btnBd").each(function() {
      new SnapBtnBorder("#" + $(this).attr("id"), {})
    }), $(".svg-num").each(function() {
      new SnapNumChange("#" + $(this).attr("id"), {})
    })
  }, RuiZeanTrader.prototype.init = function() {
    var a = this;
    if (a.bannerSize(), a.headerFixed(), a.floatNavAni(), a.select(), a.pdfInit(), a.quickMenuInit(), a.quickMenuScroll(), a.diagramList(), a.mainBdTab(), a.mobileNav(), $(".loopScroll").length) {
      new LoopScroll(".loopScroll")
    }
    if ($(".loopScroll2").length) {
      new LoopScroll(".loopScroll2", {
        speed: .1
      })
    }
    $(".notice .b").flexslider({
      animation: "slide",
      direction: "vertical",
      animationLoop: !0,
      pauseOnHover: !0,
      controlNav: !1
    }), $(".news-list3 .item").eq(0).addClass("active"), $(".news-list3 .item").eq(0).find(".b").slideDown("fade"), $(".news-list3 .item").each(function() {
      var a = $(this);
      a.find(".h").bind("click", function() {
        a.addClass("active"), a.find(".b").slideDown("fade"), a.siblings().removeClass("active"), a.siblings().find(".b").slideUp("fade")
      })
    }), $(".bannerScrollBtn").bind("click", function() {
      a.scrollDown()
    }), $(".backTop").bind("click", function() {
      a.backTop()
    }), $(".hamburger").bind("click", function() {
      topNavIsShow ? a.closeTopNav() : a.openTopNav()
    }), $(".svg-ele").each(function(a) {
      $(this).attr("id", "svg-ele" + a)
    }), a.snapInit(), $(".onlineform").on("click", function() {
      $("#livechat-compact-container").css({
        transform: "translate(0, 100%)"
      })
    }), $("body").on("click", function() {
      a.closeTopNav()
    }), $(".top-nav-list, .hamburger").on("click", function(a) {
      a.stopPropagation()
    }), $(".top-nav-list, .header-nav-list").hide(), $(".nav li").each(function() {
      var a = $(this),
        b = a.find("a").attr("data-nav3");
      void 0 != b ? a.bind("mouseover", function() {
        $(".header-nav-list").css({
          visibility: "visible",
          top: $(".header").offset().top + $(".header").outerHeight(!0) - $(window).scrollTop()
        }), $(".header-nav-list").stop(!0, !0).fadeIn(100), $("#" + b).show().siblings().hide()
      }) : a.bind("mouseover", function() {
        $(".header-nav-list").stop(!0, !0).fadeOut(100)
      })
    }), $(".header-nav-list").bind("mouseleave", function() {
      $(".header-nav-list").stop(!0, !0).fadeOut(100)
    }), $(".account-changebtn .chb-item").eq(0).find("a").addClass("active"), $(".account-changeinfo ul").eq(0).siblings().hide(), $(".account-changebtn .chb-item").each(function(a) {
      var b = $(this),
        a = a,
        c = $(".account-changeinfo ul");
      b.bind("mouseover", function() {
        b.find("a").addClass("active"), b.siblings().find("a").removeClass("active"), c.eq(a).show(), c.eq(a).siblings().hide()
      })
    })
  };
  var rzt = new RuiZeanTrader;
  $(function() {
    rzt.init()
  }), $(window).scroll(function() {
    rzt.headerFixed(), rzt.floatNavAni(), rzt.quickMenuScroll(), $(".header-nav-list").hide()
  }), $(window).resize(function() {
    rzt.bannerSize(), rzt.quickMenuScroll()
  });