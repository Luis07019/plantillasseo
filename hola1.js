var wstrm = function() {
    "use strict";
    function Gt() {
        const e = document.querySelector("#trigger-menu")
          , t = document.body;
        if (!e)
            return;
        const n = e.querySelector(".icon-menu")
          , o = document.querySelector(".hder__right");
        e.addEventListener("click", function(s) {
            o.classList.toggle("is-visible"),
            n.classList.toggle("is-toggle"),
            t.classList.toggle("wrapper-overlay")
        }),
        t.addEventListener("click", s => {
            s.target.classList.contains("wrapper-overlay") && (o.classList.remove("is-visible"),
            n.classList.remove("is-toggle"),
            t.classList.remove("wrapper-overlay"),
            t.classList.remove("turnoff-light"))
        }
        )
    }
    function Ut() {
        const e = document.querySelector(".menu");
        if (!e)
            return;
        [...e.querySelectorAll("ul li")].map(n => {
            const o = n.querySelector("a")
              , s = o.parentNode
              , i = s.querySelector(".sub-menu");
            if (i) {
                const r = document.createElement("span");
                r.classList.add("has-child-ico"),
                r.innerHTML = '<svg class="i i-angle-down" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"></path></svg>',
                o.classList.add("has-child"),
                o.appendChild(r),
                r.addEventListener("click", a => {
                    a.stopPropagation(),
                    a.preventDefault(),
                    i.classList.toggle("is-visible"),
                    o.classList.toggle("is-selected")
                }
                )
            }
        }
        )
    }
    function Kt() {
        const e = document.querySelector(".hder-search #open-search");
        if (!e)
            return;
        const t = document.querySelector(".hder-search__wrapper")
          , n = t.querySelector("input");
        e.addEventListener("click", function() {
            t.classList.toggle("is-visible"),
            n.focus()
        })
    }
    function Wt() {
        const e = document.querySelectorAll(".section__headline.is-tab button")
          , t = document.querySelectorAll(".section__tabItem");
        [...e].forEach(n => {
            n.addEventListener("click", function() {
                const o = n.getAttribute("data-id")
                  , s = document.getElementById(o);
                [...e].forEach(i => i.classList.remove("is-active")),
                n.classList.add("is-active"),
                s && (t.forEach(i => i.classList.remove("is-active")),
                s.classList.add("is-active"))
            })
        }
        )
    }
    function _e(e) {
        return typeof e == "number"
    }
    function Oe(e) {
        return typeof e == "string"
    }
    function ke(e) {
        return typeof e == "boolean"
    }
    function Je(e) {
        return Object.prototype.toString.call(e) === "[object Object]"
    }
    function O(e) {
        return Math.abs(e)
    }
    function Ce(e) {
        return Math.sign(e)
    }
    function ce(e, t) {
        return O(e - t)
    }
    function Qt(e, t) {
        if (e === 0 || t === 0 || O(e) <= O(t))
            return 0;
        const n = ce(O(e), O(t));
        return O(n / e)
    }
    function ae(e) {
        return ue(e).map(Number)
    }
    function $(e) {
        return e[le(e)]
    }
    function le(e) {
        return Math.max(0, e.length - 1)
    }
    function De(e, t) {
        return t === le(e)
    }
    function Ye(e, t=0) {
        return Array.from(Array(e), (n, o) => t + o)
    }
    function ue(e) {
        return Object.keys(e)
    }
    function Ze(e, t) {
        return [e, t].reduce( (n, o) => (ue(o).forEach(s => {
            const i = n[s]
              , r = o[s]
              , a = Je(i) && Je(r);
            n[s] = a ? Ze(i, r) : r
        }
        ),
        n), {})
    }
    function et(e, t) {
        return typeof t.MouseEvent < "u" && e instanceof t.MouseEvent
    }
    function Xt(e, t) {
        const n = {
            start: o,
            center: s,
            end: i
        };
        function o() {
            return 0
        }
        function s(c) {
            return i(c) / 2
        }
        function i(c) {
            return t - c
        }
        function r(c, l) {
            return Oe(e) ? n[e](c) : e(t, c, l)
        }
        return {
            measure: r
        }
    }
    function de() {
        let e = [];
        function t(s, i, r, a={
            passive: !0
        }) {
            let c;
            if ("addEventListener"in s)
                s.addEventListener(i, r, a),
                c = () => s.removeEventListener(i, r, a);
            else {
                const l = s;
                l.addListener(r),
                c = () => l.removeListener(r)
            }
            return e.push(c),
            o
        }
        function n() {
            e = e.filter(s => s())
        }
        const o = {
            add: t,
            clear: n
        };
        return o
    }
    function Jt(e, t, n, o) {
        const s = de()
          , i = 1e3 / 60;
        let r = null
          , a = 0
          , c = 0;
        function l() {
            s.add(e, "visibilitychange", () => {
                e.hidden && p()
            }
            )
        }
        function d() {
            v(),
            s.clear()
        }
        function u(b) {
            if (!c)
                return;
            r || (r = b);
            const f = b - r;
            for (r = b,
            a += f; a >= i; )
                n(),
                a -= i;
            const h = O(a / i);
            o(h),
            c && t.requestAnimationFrame(u)
        }
        function g() {
            c || (c = t.requestAnimationFrame(u))
        }
        function v() {
            t.cancelAnimationFrame(c),
            r = null,
            a = 0,
            c = 0
        }
        function p() {
            r = null,
            a = 0
        }
        return {
            init: l,
            destroy: d,
            start: g,
            stop: v,
            update: n,
            render: o
        }
    }
    function Yt(e, t) {
        const n = t === "rtl"
          , o = e === "y"
          , s = o ? "y" : "x"
          , i = o ? "x" : "y"
          , r = !o && n ? -1 : 1
          , a = d()
          , c = u();
        function l(p) {
            const {height: m, width: b} = p;
            return o ? m : b
        }
        function d() {
            return o ? "top" : n ? "right" : "left"
        }
        function u() {
            return o ? "bottom" : n ? "left" : "right"
        }
        function g(p) {
            return p * r
        }
        return {
            scroll: s,
            cross: i,
            startEdge: a,
            endEdge: c,
            measureSize: l,
            direction: g
        }
    }
    function Z(e=0, t=0) {
        const n = O(e - t);
        function o(l) {
            return l < e
        }
        function s(l) {
            return l > t
        }
        function i(l) {
            return o(l) || s(l)
        }
        function r(l) {
            return i(l) ? o(l) ? e : t : l
        }
        function a(l) {
            return n ? l - n * Math.ceil((l - t) / n) : l
        }
        return {
            length: n,
            max: t,
            min: e,
            constrain: r,
            reachedAny: i,
            reachedMax: s,
            reachedMin: o,
            removeOffset: a
        }
    }
    function tt(e, t, n) {
        const {constrain: o} = Z(0, e)
          , s = e + 1;
        let i = r(t);
        function r(g) {
            return n ? O((s + g) % s) : o(g)
        }
        function a() {
            return i
        }
        function c(g) {
            return i = r(g),
            u
        }
        function l(g) {
            return d().set(a() + g)
        }
        function d() {
            return tt(e, a(), n)
        }
        const u = {
            get: a,
            set: c,
            add: l,
            clone: d
        };
        return u
    }
    function Zt(e, t, n, o, s, i, r, a, c, l, d, u, g, v, p, m, b, f, h) {
        const {cross: y, direction: x} = e
          , L = ["INPUT", "SELECT", "TEXTAREA"]
          , E = {
            passive: !1
        }
          , w = de()
          , A = de()
          , T = Z(50, 225).constrain(v.measure(20))
          , M = {
            mouse: 300,
            touch: 400
        }
          , _ = {
            mouse: 500,
            touch: 600
        }
          , q = p ? 43 : 25;
        let j = !1
          , D = 0
          , P = 0
          , te = !1
          , G = !1
          , Y = !1
          , U = !1;
        function ne(S) {
            if (!h)
                return;
            function I(N) {
                (ke(h) || h(S, N)) && H(N)
            }
            const C = t;
            w.add(C, "dragstart", N => N.preventDefault(), E).add(C, "touchmove", () => {}
            , E).add(C, "touchend", () => {}
            ).add(C, "touchstart", I).add(C, "mousedown", I).add(C, "touchcancel", F).add(C, "contextmenu", F).add(C, "click", ie, !0)
        }
        function K() {
            w.clear(),
            A.clear()
        }
        function re() {
            const S = U ? n : t;
            A.add(S, "touchmove", V, E).add(S, "touchend", F).add(S, "mousemove", V, E).add(S, "mouseup", F)
        }
        function W(S) {
            const I = S.nodeName || "";
            return L.includes(I)
        }
        function xe() {
            return (p ? _ : M)[U ? "mouse" : "touch"]
        }
        function Se(S, I) {
            const C = u.add(Ce(S) * -1)
              , N = d.byDistance(S, !p).distance;
            return p || O(S) < T ? N : b && I ? N * .5 : d.byIndex(C.get(), 0).distance
        }
        function H(S) {
            const I = et(S, o);
            U = I,
            Y = p && I && !S.buttons && j,
            j = ce(s.get(), r.get()) >= 2,
            !(I && S.button !== 0) && (W(S.target) || (te = !0,
            i.pointerDown(S),
            l.useFriction(0).useDuration(0),
            s.set(r),
            re(),
            D = i.readPoint(S),
            P = i.readPoint(S, y),
            g.emit("pointerDown")))
        }
        function V(S) {
            const I = i.readPoint(S)
              , C = i.readPoint(S, y)
              , N = ce(I, D)
              , Q = ce(C, P);
            if (!G && !U && (!S.cancelable || (G = N > Q,
            !G)))
                return F(S);
            const B = i.pointerMove(S);
            N > m && (Y = !0),
            l.useFriction(.3).useDuration(1),
            a.start(),
            s.add(x(B)),
            S.preventDefault()
        }
        function F(S) {
            const C = d.byDistance(0, !1).index !== u.get()
              , N = i.pointerUp(S) * xe()
              , Q = Se(x(N), C)
              , B = Qt(N, Q)
              , X = q - 10 * B
              , oe = f + B / 50;
            G = !1,
            te = !1,
            A.clear(),
            l.useDuration(X).useFriction(oe),
            c.distance(Q, !p),
            U = !1,
            g.emit("pointerUp")
        }
        function ie(S) {
            Y && (S.stopPropagation(),
            S.preventDefault(),
            Y = !1)
        }
        function R() {
            return te
        }
        return {
            init: ne,
            pointerDown: R,
            destroy: K
        }
    }
    function en(e, t) {
        let o, s;
        function i(u) {
            return u.timeStamp
        }
        function r(u, g) {
            const p = `client${(g || e.scroll) === "x" ? "X" : "Y"}`;
            return (et(u, t) ? u : u.touches[0])[p]
        }
        function a(u) {
            return o = u,
            s = u,
            r(u)
        }
        function c(u) {
            const g = r(u) - r(s)
              , v = i(u) - i(o) > 170;
            return s = u,
            v && (o = u),
            g
        }
        function l(u) {
            if (!o || !s)
                return 0;
            const g = r(s) - r(o)
              , v = i(u) - i(o)
              , p = i(u) - i(s) > 170
              , m = g / v;
            return v && !p && O(m) > .1 ? m : 0
        }
        return {
            pointerDown: a,
            pointerMove: c,
            pointerUp: l,
            readPoint: r
        }
    }
    function tn() {
        function e(n) {
            const {offsetTop: o, offsetLeft: s, offsetWidth: i, offsetHeight: r} = n;
            return {
                top: o,
                right: s + i,
                bottom: o + r,
                left: s,
                width: i,
                height: r
            }
        }
        return {
            measure: e
        }
    }
    function nn(e) {
        function t(o) {
            return e * (o / 100)
        }
        return {
            measure: t
        }
    }
    function on(e, t, n, o, s, i, r) {
        let a, c, l = [], d = !1;
        function u(m) {
            return s.measureSize(r.measure(m))
        }
        function g(m) {
            if (!i)
                return;
            c = u(e),
            l = o.map(u);
            function b(h) {
                for (const y of h) {
                    const x = y.target === e
                      , L = o.indexOf(y.target)
                      , E = x ? c : l[L]
                      , w = u(x ? e : o[L]);
                    if (O(w - E) >= .5) {
                        n.requestAnimationFrame( () => {
                            m.reInit(),
                            t.emit("resize")
                        }
                        );
                        break
                    }
                }
            }
            a = new ResizeObserver(h => {
                d || (ke(i) || i(m, h)) && b(h)
            }
            ),
            [e].concat(o).forEach(h => a.observe(h))
        }
        function v() {
            a && a.disconnect(),
            d = !0
        }
        return {
            init: g,
            destroy: v
        }
    }
    function sn(e, t, n, o, s) {
        let i = 0
          , r = 0
          , a = o
          , c = s
          , l = e.get()
          , d = 0;
        function u() {
            const L = n.get() - e.get()
              , E = !a;
            let w = 0;
            return E ? (i = 0,
            e.set(n),
            w = L) : (i += L / a,
            i *= c,
            l += i,
            e.add(i),
            w = l - d),
            r = Ce(w),
            d = l,
            x
        }
        function g() {
            const L = n.get() - t.get();
            return O(L) < .001
        }
        function v() {
            return a
        }
        function p() {
            return r
        }
        function m() {
            return i
        }
        function b() {
            return h(o)
        }
        function f() {
            return y(s)
        }
        function h(L) {
            return a = L,
            x
        }
        function y(L) {
            return c = L,
            x
        }
        const x = {
            direction: p,
            duration: v,
            velocity: m,
            seek: u,
            settled: g,
            useBaseFriction: f,
            useBaseDuration: b,
            useFriction: y,
            useDuration: h
        };
        return x
    }
    function rn(e, t, n, o, s) {
        const i = s.measure(10)
          , r = s.measure(50)
          , a = Z(.1, .99);
        let c = !1;
        function l() {
            return !(c || !e.reachedAny(n.get()) || !e.reachedAny(t.get()))
        }
        function d(v) {
            if (!l())
                return;
            const p = e.reachedMin(t.get()) ? "min" : "max"
              , m = O(e[p] - t.get())
              , b = n.get() - t.get()
              , f = a.constrain(m / r);
            n.subtract(b * f),
            !v && O(b) < i && (n.set(e.constrain(n.get())),
            o.useDuration(25).useBaseFriction())
        }
        function u(v) {
            c = !v
        }
        return {
            constrain: d,
            toggleActive: u
        }
    }
    function cn(e, t, n, o, s) {
        const i = Z(-t + e, 0)
          , r = u()
          , a = d()
          , c = g();
        function l(p, m) {
            return ce(p, m) < 1
        }
        function d() {
            const p = r[0]
              , m = $(r)
              , b = r.lastIndexOf(p)
              , f = r.indexOf(m) + 1;
            return Z(b, f)
        }
        function u() {
            return n.map( (p, m) => {
                const {min: b, max: f} = i
                  , h = i.constrain(p)
                  , y = !m
                  , x = De(n, m);
                return y ? f : x || l(b, h) ? b : l(f, h) ? f : h
            }
            ).map(p => parseFloat(p.toFixed(3)))
        }
        function g() {
            if (t <= e + s)
                return [i.max];
            if (o === "keepSnaps")
                return r;
            const {min: p, max: m} = a;
            return r.slice(p, m)
        }
        return {
            snapsContained: c,
            scrollContainLimit: a
        }
    }
    function an(e, t, n) {
        const o = t[0]
          , s = n ? o - e : $(t);
        return {
            limit: Z(s, o)
        }
    }
    function ln(e, t, n, o) {
        const i = t.min + .1
          , r = t.max + .1
          , {reachedMin: a, reachedMax: c} = Z(i, r);
        function l(g) {
            return g === 1 ? c(n.get()) : g === -1 ? a(n.get()) : !1
        }
        function d(g) {
            if (!l(g))
                return;
            const v = e * (g * -1);
            o.forEach(p => p.add(v))
        }
        return {
            loop: d
        }
    }
    function un(e) {
        const {max: t, length: n} = e;
        function o(i) {
            const r = i - t;
            return n ? r / -n : 0
        }
        return {
            get: o
        }
    }
    function dn(e, t, n, o, s) {
        const {startEdge: i, endEdge: r} = e
          , {groupSlides: a} = s
          , c = u().map(t.measure)
          , l = g()
          , d = v();
        function u() {
            return a(o).map(m => $(m)[r] - m[0][i]).map(O)
        }
        function g() {
            return o.map(m => n[i] - m[i]).map(m => -O(m))
        }
        function v() {
            return a(l).map(m => m[0]).map( (m, b) => m + c[b])
        }
        return {
            snaps: l,
            snapsAligned: d
        }
    }
    function fn(e, t, n, o, s, i) {
        const {groupSlides: r} = s
          , {min: a, max: c} = o
          , l = d();
        function d() {
            const g = r(i)
              , v = !e || t === "keepSnaps";
            return n.length === 1 ? [i] : v ? g : g.slice(a, c).map( (p, m, b) => {
                const f = !m
                  , h = De(b, m);
                if (f) {
                    const y = $(b[0]) + 1;
                    return Ye(y)
                }
                if (h) {
                    const y = le(i) - $(b)[0] + 1;
                    return Ye(y, $(b)[0])
                }
                return p
            }
            )
        }
        return {
            slideRegistry: l
        }
    }
    function pn(e, t, n, o, s) {
        const {reachedAny: i, removeOffset: r, constrain: a} = o;
        function c(p) {
            return p.concat().sort( (m, b) => O(m) - O(b))[0]
        }
        function l(p) {
            const m = e ? r(p) : a(p)
              , b = t.map( (h, y) => ({
                diff: d(h - m, 0),
                index: y
            })).sort( (h, y) => O(h.diff) - O(y.diff))
              , {index: f} = b[0];
            return {
                index: f,
                distance: m
            }
        }
        function d(p, m) {
            const b = [p, p + n, p - n];
            if (!e)
                return b[0];
            if (!m)
                return c(b);
            const f = b.filter(h => Ce(h) === m);
            return f.length ? c(f) : $(b) - n
        }
        function u(p, m) {
            const b = t[p] - s.get()
              , f = d(b, m);
            return {
                index: p,
                distance: f
            }
        }
        function g(p, m) {
            const b = s.get() + p
              , {index: f, distance: h} = l(b)
              , y = !e && i(b);
            if (!m || y)
                return {
                    index: f,
                    distance: p
                };
            const x = t[f] - h
              , L = p + d(x, 0);
            return {
                index: f,
                distance: L
            }
        }
        return {
            byDistance: g,
            byIndex: u,
            shortcut: d
        }
    }
    function mn(e, t, n, o, s, i, r) {
        function a(u) {
            const g = u.distance
              , v = u.index !== t.get();
            i.add(g),
            g && (o.duration() ? e.start() : (e.update(),
            e.render(1),
            e.update())),
            v && (n.set(t.get()),
            t.set(u.index),
            r.emit("select"))
        }
        function c(u, g) {
            const v = s.byDistance(u, g);
            a(v)
        }
        function l(u, g) {
            const v = t.clone().set(u)
              , p = s.byIndex(v.get(), g);
            a(p)
        }
        return {
            distance: c,
            index: l
        }
    }
    function gn(e, t, n, o, s, i) {
        let r = 0;
        function a() {
            i.add(document, "keydown", c, !1),
            t.forEach(l)
        }
        function c(u) {
            u.code === "Tab" && (r = new Date().getTime())
        }
        function l(u) {
            const g = () => {
                if (new Date().getTime() - r > 10)
                    return;
                e.scrollLeft = 0;
                const m = t.indexOf(u)
                  , b = n.findIndex(f => f.includes(m));
                _e(b) && (s.useDuration(0),
                o.index(b, 0))
            }
            ;
            i.add(u, "focus", g, {
                passive: !0,
                capture: !0
            })
        }
        return {
            init: a
        }
    }
    function Le(e) {
        let t = e;
        function n() {
            return t
        }
        function o(c) {
            t = r(c)
        }
        function s(c) {
            t += r(c)
        }
        function i(c) {
            t -= r(c)
        }
        function r(c) {
            return _e(c) ? c : c.get()
        }
        return {
            get: n,
            set: o,
            add: s,
            subtract: i
        }
    }
    function nt(e, t) {
        const n = e.scroll === "x" ? i : r
          , o = t.style;
        let s = !1;
        function i(u) {
            return `translate3d(${u}px,0px,0px)`
        }
        function r(u) {
            return `translate3d(0px,${u}px,0px)`
        }
        function a(u) {
            s || (o.transform = n(e.direction(u)))
        }
        function c(u) {
            s = !u
        }
        function l() {
            s || (o.transform = "",
            t.getAttribute("style") || t.removeAttribute("style"))
        }
        return {
            clear: l,
            to: a,
            toggleActive: c
        }
    }
    function hn(e, t, n, o, s, i, r, a, c) {
        const d = ae(s)
          , u = ae(s).reverse()
          , g = f().concat(h());
        function v(w, A) {
            return w.reduce( (T, M) => T - s[M], A)
        }
        function p(w, A) {
            return w.reduce( (T, M) => v(T, A) > 0 ? T.concat([M]) : T, [])
        }
        function m(w) {
            return i.map( (A, T) => ({
                start: A - o[T] + .5 + w,
                end: A + t - .5 + w
            }))
        }
        function b(w, A, T) {
            const M = m(A);
            return w.map(_ => {
                const q = T ? 0 : -n
                  , j = T ? n : 0
                  , D = T ? "end" : "start"
                  , P = M[_][D];
                return {
                    index: _,
                    loopPoint: P,
                    slideLocation: Le(-1),
                    translate: nt(e, c[_]),
                    target: () => a.get() > P ? q : j
                }
            }
            )
        }
        function f() {
            const w = r[0]
              , A = p(u, w);
            return b(A, n, !1)
        }
        function h() {
            const w = t - r[0] - 1
              , A = p(d, w);
            return b(A, -n, !0)
        }
        function y() {
            return g.every( ({index: w}) => {
                const A = d.filter(T => T !== w);
                return v(A, t) <= .1
            }
            )
        }
        function x() {
            g.forEach(w => {
                const {target: A, translate: T, slideLocation: M} = w
                  , _ = A();
                _ !== M.get() && (T.to(_),
                M.set(_))
            }
            )
        }
        function L() {
            g.forEach(w => w.translate.clear())
        }
        return {
            canLoop: y,
            clear: L,
            loop: x,
            loopPoints: g
        }
    }
    function bn(e, t, n) {
        let o, s = !1;
        function i(c) {
            if (!n)
                return;
            function l(d) {
                for (const u of d)
                    if (u.type === "childList") {
                        c.reInit(),
                        t.emit("slidesChanged");
                        break
                    }
            }
            o = new MutationObserver(d => {
                s || (ke(n) || n(c, d)) && l(d)
            }
            ),
            o.observe(e, {
                childList: !0
            })
        }
        function r() {
            o && o.disconnect(),
            s = !0
        }
        return {
            init: i,
            destroy: r
        }
    }
    function yn(e, t, n, o) {
        const s = {};
        let i = null, r = null, a, c = !1;
        function l() {
            a = new IntersectionObserver(p => {
                c || (p.forEach(m => {
                    const b = t.indexOf(m.target);
                    s[b] = m
                }
                ),
                i = null,
                r = null,
                n.emit("slidesInView"))
            }
            ,{
                root: e.parentElement,
                threshold: o
            }),
            t.forEach(p => a.observe(p))
        }
        function d() {
            a && a.disconnect(),
            c = !0
        }
        function u(p) {
            return ue(s).reduce( (m, b) => {
                const f = parseInt(b)
                  , {isIntersecting: h} = s[f];
                return (p && h || !p && !h) && m.push(f),
                m
            }
            , [])
        }
        function g(p=!0) {
            if (p && i)
                return i;
            if (!p && r)
                return r;
            const m = u(p);
            return p && (i = m),
            p || (r = m),
            m
        }
        return {
            init: l,
            destroy: d,
            get: g
        }
    }
    function vn(e, t, n, o, s, i) {
        const {measureSize: r, startEdge: a, endEdge: c} = e
          , l = n[0] && s
          , d = p()
          , u = m()
          , g = n.map(r)
          , v = b();
        function p() {
            if (!l)
                return 0;
            const h = n[0];
            return O(t[a] - h[a])
        }
        function m() {
            if (!l)
                return 0;
            const h = i.getComputedStyle($(o));
            return parseFloat(h.getPropertyValue(`margin-${c}`))
        }
        function b() {
            return n.map( (h, y, x) => {
                const L = !y
                  , E = De(x, y);
                return L ? g[y] + d : E ? g[y] + u : x[y + 1][a] - h[a]
            }
            ).map(O)
        }
        return {
            slideSizes: g,
            slideSizesWithGaps: v,
            startGap: d,
            endGap: u
        }
    }
    function xn(e, t, n, o, s, i, r, a, c) {
        const {startEdge: l, endEdge: d, direction: u} = e
          , g = _e(n);
        function v(f, h) {
            return ae(f).filter(y => y % h === 0).map(y => f.slice(y, y + h))
        }
        function p(f) {
            return f.length ? ae(f).reduce( (h, y, x) => {
                const L = $(h) || 0
                  , E = L === 0
                  , w = y === le(f)
                  , A = s[l] - i[L][l]
                  , T = s[l] - i[y][d]
                  , M = !o && E ? u(r) : 0
                  , _ = !o && w ? u(a) : 0
                  , q = O(T - _ - (A + M));
                return x && q > t + c && h.push(y),
                w && h.push(f.length),
                h
            }
            , []).map( (h, y, x) => {
                const L = Math.max(x[y - 1] || 0);
                return f.slice(L, h)
            }
            ) : []
        }
        function m(f) {
            return g ? v(f, n) : p(f)
        }
        return {
            groupSlides: m
        }
    }
    function Sn(e, t, n, o, s, i, r) {
        const {align: a, axis: c, direction: l, startIndex: d, loop: u, duration: g, dragFree: v, dragThreshold: p, inViewThreshold: m, slidesToScroll: b, skipSnaps: f, containScroll: h, watchResize: y, watchSlides: x, watchDrag: L} = i
          , E = 2
          , w = tn()
          , A = w.measure(t)
          , T = n.map(w.measure)
          , M = Yt(c, l)
          , _ = M.measureSize(A)
          , q = nn(_)
          , j = Xt(a, _)
          , D = !u && !!h
          , P = u || !!h
          , {slideSizes: te, slideSizesWithGaps: G, startGap: Y, endGap: U} = vn(M, A, T, n, P, s)
          , ne = xn(M, _, b, u, A, T, Y, U, E)
          , {snaps: K, snapsAligned: re} = dn(M, j, A, T, ne)
          , W = -$(K) + $(G)
          , {snapsContained: xe, scrollContainLimit: Se} = cn(_, W, re, h, E)
          , H = D ? xe : re
          , {limit: V} = an(W, H, u)
          , F = tt(le(H), d, u)
          , ie = F.clone()
          , R = ae(n)
          , k = ({dragHandler: se, scrollBody: Qe, scrollBounds: Xe, options: {loop: Ie}}) => {
            Ie || Xe.constrain(se.pointerDown()),
            Qe.seek()
        }
          , S = ({scrollBody: se, translate: Qe, location: Xe, offsetLocation: Ie, scrollLooper: Zo, slideLooper: es, dragHandler: ts, animation: ns, eventHandler: Bt, options: {loop: os}}, ss) => {
            const Vt = se.velocity()
              , zt = se.settled();
            zt && !ts.pointerDown() && (ns.stop(),
            Bt.emit("settle")),
            zt || Bt.emit("scroll"),
            Ie.set(Xe.get() - Vt + Vt * ss),
            os && (Zo.loop(se.direction()),
            es.loop()),
            Qe.to(Ie.get())
        }
          , I = Jt(o, s, () => k(We), se => S(We, se))
          , C = .68
          , N = H[F.get()]
          , Q = Le(N)
          , B = Le(N)
          , X = Le(N)
          , oe = sn(Q, B, X, g, C)
          , Ue = pn(u, H, W, V, X)
          , Ke = mn(I, F, ie, oe, Ue, X, r)
          , Ht = un(V)
          , $t = de()
          , Jo = yn(t, n, r, m)
          , {slideRegistry: Rt} = fn(D, h, H, Se, ne, R)
          , Yo = gn(e, n, Rt, Ke, oe, $t)
          , We = {
            ownerDocument: o,
            ownerWindow: s,
            eventHandler: r,
            containerRect: A,
            slideRects: T,
            animation: I,
            axis: M,
            dragHandler: Zt(M, e, o, s, X, en(M, s), Q, I, Ke, oe, Ue, F, r, q, v, p, f, C, L),
            eventStore: $t,
            percentOfView: q,
            index: F,
            indexPrevious: ie,
            limit: V,
            location: Q,
            offsetLocation: B,
            options: i,
            resizeHandler: on(t, r, s, n, M, y, w),
            scrollBody: oe,
            scrollBounds: rn(V, B, X, oe, q),
            scrollLooper: ln(W, V, B, [Q, B, X]),
            scrollProgress: Ht,
            scrollSnapList: H.map(Ht.get),
            scrollSnaps: H,
            scrollTarget: Ue,
            scrollTo: Ke,
            slideLooper: hn(M, _, W, te, G, K, H, B, n),
            slideFocus: Yo,
            slidesHandler: bn(t, r, x),
            slidesInView: Jo,
            slideIndexes: R,
            slideRegistry: Rt,
            slidesToScroll: ne,
            target: X,
            translate: nt(M, t)
        };
        return We
    }
    function Ln() {
        const e = {};
        let t;
        function n(c) {
            t = c
        }
        function o(c) {
            return e[c] || []
        }
        function s(c) {
            return o(c).forEach(l => l(t, c)),
            a
        }
        function i(c, l) {
            return e[c] = o(c).concat([l]),
            a
        }
        function r(c, l) {
            return e[c] = o(c).filter(d => d !== l),
            a
        }
        const a = {
            init: n,
            emit: s,
            off: r,
            on: i
        };
        return a
    }
    const wn = {
        align: "center",
        axis: "x",
        container: null,
        slides: null,
        containScroll: "trimSnaps",
        direction: "ltr",
        slidesToScroll: 1,
        inViewThreshold: 0,
        breakpoints: {},
        dragFree: !1,
        dragThreshold: 10,
        loop: !1,
        skipSnaps: !1,
        duration: 25,
        startIndex: 0,
        active: !0,
        watchDrag: !0,
        watchResize: !0,
        watchSlides: !0
    };
    function En(e) {
        function t(i, r) {
            return Ze(i, r || {})
        }
        function n(i) {
            const r = i.breakpoints || {}
              , a = ue(r).filter(c => e.matchMedia(c).matches).map(c => r[c]).reduce( (c, l) => t(c, l), {});
            return t(i, a)
        }
        function o(i) {
            return i.map(r => ue(r.breakpoints || {})).reduce( (r, a) => r.concat(a), []).map(e.matchMedia)
        }
        return {
            mergeOptions: t,
            optionsAtMedia: n,
            optionsMediaQueries: o
        }
    }
    function An(e) {
        let t = [];
        function n(i, r) {
            return t = r.filter( ({options: a}) => e.optionsAtMedia(a).active !== !1),
            t.forEach(a => a.init(i, e)),
            r.reduce( (a, c) => Object.assign(a, {
                [c.name]: c
            }), {})
        }
        function o() {
            t = t.filter(i => i.destroy())
        }
        return {
            init: n,
            destroy: o
        }
    }
    function fe(e, t, n) {
        const o = e.ownerDocument
          , s = o.defaultView
          , i = En(s)
          , r = An(i)
          , a = de()
          , c = Ln()
          , {mergeOptions: l, optionsAtMedia: d, optionsMediaQueries: u} = i
          , {on: g, off: v, emit: p} = c
          , m = _;
        let b = !1, f, h = l(wn, fe.globalOptions), y = l(h), x = [], L, E, w;
        function A() {
            const {container: k, slides: S} = y;
            E = (Oe(k) ? e.querySelector(k) : k) || e.children[0];
            const C = Oe(S) ? E.querySelectorAll(S) : S;
            w = [].slice.call(C || E.children)
        }
        function T(k) {
            const S = Sn(e, E, w, o, s, k, c);
            if (k.loop && !S.slideLooper.canLoop()) {
                const I = Object.assign({}, k, {
                    loop: !1
                });
                return T(I)
            }
            return S
        }
        function M(k, S) {
            b || (h = l(h, k),
            y = d(h),
            x = S || x,
            A(),
            f = T(y),
            u([h, ...x.map( ({options: I}) => I)]).forEach(I => a.add(I, "change", _)),
            y.active && (f.translate.to(f.location.get()),
            f.animation.init(),
            f.slidesInView.init(),
            f.slideFocus.init(),
            f.eventHandler.init(R),
            f.resizeHandler.init(R),
            f.slidesHandler.init(R),
            f.options.loop && f.slideLooper.loop(),
            E.offsetParent && w.length && f.dragHandler.init(R),
            L = r.init(R, x)))
        }
        function _(k, S) {
            const I = K();
            q(),
            M(l({
                startIndex: I
            }, k), S),
            c.emit("reInit")
        }
        function q() {
            f.dragHandler.destroy(),
            f.eventStore.clear(),
            f.translate.clear(),
            f.slideLooper.clear(),
            f.resizeHandler.destroy(),
            f.slidesHandler.destroy(),
            f.slidesInView.destroy(),
            f.animation.destroy(),
            r.destroy(),
            a.clear()
        }
        function j() {
            b || (b = !0,
            a.clear(),
            q(),
            c.emit("destroy"))
        }
        function D(k, S, I) {
            !y.active || b || (f.scrollBody.useBaseFriction().useDuration(S === !0 ? 0 : y.duration),
            f.scrollTo.index(k, I || 0))
        }
        function P(k) {
            const S = f.index.add(1).get();
            D(S, k, -1)
        }
        function te(k) {
            const S = f.index.add(-1).get();
            D(S, k, 1)
        }
        function G() {
            return f.index.add(1).get() !== K()
        }
        function Y() {
            return f.index.add(-1).get() !== K()
        }
        function U() {
            return f.scrollSnapList
        }
        function ne() {
            return f.scrollProgress.get(f.location.get())
        }
        function K() {
            return f.index.get()
        }
        function re() {
            return f.indexPrevious.get()
        }
        function W() {
            return f.slidesInView.get()
        }
        function xe() {
            return f.slidesInView.get(!1)
        }
        function Se() {
            return L
        }
        function H() {
            return f
        }
        function V() {
            return e
        }
        function F() {
            return E
        }
        function ie() {
            return w
        }
        const R = {
            canScrollNext: G,
            canScrollPrev: Y,
            containerNode: F,
            internalEngine: H,
            destroy: j,
            off: v,
            on: g,
            emit: p,
            plugins: Se,
            previousScrollSnap: re,
            reInit: m,
            rootNode: V,
            scrollNext: P,
            scrollPrev: te,
            scrollProgress: ne,
            scrollSnapList: U,
            scrollTo: D,
            selectedScrollSnap: K,
            slideNodes: ie,
            slidesInView: W,
            slidesNotInView: xe
        };
        return M(t, n),
        setTimeout( () => c.emit("init"), 0),
        R
    }
    fe.globalOptions = void 0;
    const Mn = {
        active: !0,
        breakpoints: {},
        delay: 4e3,
        jump: !1,
        playOnInit: !0,
        stopOnFocusIn: !0,
        stopOnInteraction: !0,
        stopOnMouseEnter: !1,
        stopOnLastSnap: !1,
        rootNode: null
    };
    function pe(e={}) {
        let t, n, o, s = !1, i = !0, r = !1, a = 0;
        function c(x, L) {
            n = x;
            const {mergeOptions: E, optionsAtMedia: w} = L
              , A = E(Mn, pe.globalOptions)
              , T = E(A, e);
            if (t = w(T),
            n.scrollSnapList().length <= 1)
                return;
            r = t.jump,
            o = !1;
            const {eventStore: M, ownerDocument: _} = n.internalEngine()
              , q = n.rootNode()
              , j = t.rootNode && t.rootNode(q) || q
              , D = n.containerNode();
            n.on("pointerDown", u),
            t.stopOnInteraction || n.on("pointerUp", d),
            t.stopOnMouseEnter && (M.add(j, "mouseenter", () => {
                i = !1,
                u()
            }
            ),
            t.stopOnInteraction || M.add(j, "mouseleave", () => {
                i = !0,
                d()
            }
            )),
            t.stopOnFocusIn && (M.add(D, "focusin", u),
            t.stopOnInteraction || M.add(D, "focusout", d)),
            M.add(_, "visibilitychange", g),
            t.playOnInit && !v() && d()
        }
        function l() {
            n.off("pointerDown", u).off("pointerUp", d),
            u(),
            o = !0,
            s = !1
        }
        function d() {
            if (o || !i)
                return;
            s || n.emit("autoplay:play");
            const {ownerWindow: x} = n.internalEngine();
            x.clearInterval(a),
            a = x.setInterval(h, t.delay),
            s = !0
        }
        function u() {
            if (o)
                return;
            s && n.emit("autoplay:stop");
            const {ownerWindow: x} = n.internalEngine();
            x.clearInterval(a),
            a = 0,
            s = !1
        }
        function g() {
            if (v())
                return i = s,
                u();
            i && d()
        }
        function v() {
            const {ownerDocument: x} = n.internalEngine();
            return x.visibilityState === "hidden"
        }
        function p(x) {
            typeof x < "u" && (r = x),
            i = !0,
            d()
        }
        function m() {
            s && u()
        }
        function b() {
            s && p()
        }
        function f() {
            return s
        }
        function h() {
            const {index: x} = n.internalEngine()
              , L = x.clone().add(1).get()
              , E = n.scrollSnapList().length - 1;
            t.stopOnLastSnap && L === E && u(),
            n.canScrollNext() ? n.scrollNext(r) : n.scrollTo(0, r)
        }
        return {
            name: "autoplay",
            options: e,
            init: c,
            destroy: l,
            play: p,
            stop: m,
            reset: b,
            isPlaying: f
        }
    }
    pe.globalOptions = void 0;
    function z(e, t, n) {
        e.canScrollPrev() ? t.removeAttribute("disabled") : t.setAttribute("disabled", "disabled"),
        e.canScrollNext() ? n.removeAttribute("disabled") : n.setAttribute("disabled", "disabled")
    }
    function Tn() {
        const e = document.querySelector(".embla.embla--featured");
        if (!e)
            return;
        const t = document.querySelector(".embla-btnPrev-featured")
          , n = document.querySelector(".embla-btnNext-featured")
          , s = fe(e, {
            loop: !1,
            slidesToScroll: 1,
            duration: 20,
            align: "start",
            skipSnaps: !0,
            containScroll: !0
        }, [pe()]);
        s.on("select", () => z(s, t, n)).on("init", () => z(s, t, n)).on("reInit", () => z(s, t, n)),
        t.addEventListener("click", s.scrollPrev, !1),
        n.addEventListener("click", s.scrollNext, !1)
    }
    function In() {
        const e = document.querySelector(".embla.embla--popular");
        if (!e)
            return;
        const t = document.querySelector(".embla-btnPrev-popular")
          , n = document.querySelector(".embla-btnNext-popular")
          , s = fe(e, {
            loop: !1,
            slidesToScroll: 1,
            duration: 20,
            align: "start",
            skipSnaps: !0,
            containScroll: !0
        }, [pe()]);
        s.on("select", () => z(s, t, n)).on("init", () => z(s, t, n)).on("reInit", () => z(s, t, n)),
        t.addEventListener("click", s.scrollPrev, !1),
        n.addEventListener("click", s.scrollNext, !1)
    }
    function ot(e, t) {
        var n = {};
        for (var o in e)
            Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
        if (e != null && typeof Object.getOwnPropertySymbols == "function")
            for (var s = 0, o = Object.getOwnPropertySymbols(e); s < o.length; s++)
                t.indexOf(o[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[s]) && (n[o[s]] = e[o[s]]);
        return n
    }
    var st = function() {};
    const qe = (e, t, n) => Math.min(Math.max(n, e), t)
      , Ne = .001
      , _n = .01
      , On = 10
      , kn = .05
      , Cn = 1;
    function Dn({duration: e=800, bounce: t=.25, velocity: n=0, mass: o=1}) {
        let s, i, r = 1 - t;
        r = qe(kn, Cn, r),
        e = qe(_n, On, e / 1e3),
        r < 1 ? (s = l => {
            const d = l * r
              , u = d * e
              , g = d - n
              , v = Fe(l, r)
              , p = Math.exp(-u);
            return Ne - g / v * p
        }
        ,
        i = l => {
            const u = l * r * e
              , g = u * n + n
              , v = Math.pow(r, 2) * Math.pow(l, 2) * e
              , p = Math.exp(-u)
              , m = Fe(Math.pow(l, 2), r);
            return (-s(l) + Ne > 0 ? -1 : 1) * ((g - v) * p) / m
        }
        ) : (s = l => {
            const d = Math.exp(-l * e)
              , u = (l - n) * e + 1;
            return -Ne + d * u
        }
        ,
        i = l => {
            const d = Math.exp(-l * e)
              , u = (n - l) * (e * e);
            return d * u
        }
        );
        const a = 5 / e
          , c = Nn(s, i, a);
        if (e = e * 1e3,
        isNaN(c))
            return {
                stiffness: 100,
                damping: 10,
                duration: e
            };
        {
            const l = Math.pow(c, 2) * o;
            return {
                stiffness: l,
                damping: r * 2 * Math.sqrt(o * l),
                duration: e
            }
        }
    }
    const qn = 12;
    function Nn(e, t, n) {
        let o = n;
        for (let s = 1; s < qn; s++)
            o = o - e(o) / t(o);
        return o
    }
    function Fe(e, t) {
        return e * Math.sqrt(1 - t * t)
    }
    const Fn = ["duration", "bounce"]
      , jn = ["stiffness", "damping", "mass"];
    function rt(e, t) {
        return t.some(n => e[n] !== void 0)
    }
    function Pn(e) {
        let t = Object.assign({
            velocity: 0,
            stiffness: 100,
            damping: 10,
            mass: 1,
            isResolvedFromDuration: !1
        }, e);
        if (!rt(e, jn) && rt(e, Fn)) {
            const n = Dn(e);
            t = Object.assign(Object.assign(Object.assign({}, t), n), {
                velocity: 0,
                mass: 1
            }),
            t.isResolvedFromDuration = !0
        }
        return t
    }
    function je(e) {
        var {from: t=0, to: n=1, restSpeed: o=2, restDelta: s} = e
          , i = ot(e, ["from", "to", "restSpeed", "restDelta"]);
        const r = {
            done: !1,
            value: t
        };
        let {stiffness: a, damping: c, mass: l, velocity: d, duration: u, isResolvedFromDuration: g} = Pn(i)
          , v = it
          , p = it;
        function m() {
            const b = d ? -(d / 1e3) : 0
              , f = n - t
              , h = c / (2 * Math.sqrt(a * l))
              , y = Math.sqrt(a / l) / 1e3;
            if (s === void 0 && (s = Math.min(Math.abs(n - t) / 100, .4)),
            h < 1) {
                const x = Fe(y, h);
                v = L => {
                    const E = Math.exp(-h * y * L);
                    return n - E * ((b + h * y * f) / x * Math.sin(x * L) + f * Math.cos(x * L))
                }
                ,
                p = L => {
                    const E = Math.exp(-h * y * L);
                    return h * y * E * (Math.sin(x * L) * (b + h * y * f) / x + f * Math.cos(x * L)) - E * (Math.cos(x * L) * (b + h * y * f) - x * f * Math.sin(x * L))
                }
            } else if (h === 1)
                v = x => n - Math.exp(-y * x) * (f + (b + y * f) * x);
            else {
                const x = y * Math.sqrt(h * h - 1);
                v = L => {
                    const E = Math.exp(-h * y * L)
                      , w = Math.min(x * L, 300);
                    return n - E * ((b + h * y * f) * Math.sinh(w) + x * f * Math.cosh(w)) / x
                }
            }
        }
        return m(),
        {
            next: b => {
                const f = v(b);
                if (g)
                    r.done = b >= u;
                else {
                    const h = p(b) * 1e3
                      , y = Math.abs(h) <= o
                      , x = Math.abs(n - f) <= s;
                    r.done = y && x
                }
                return r.value = r.done ? n : f,
                r
            }
            ,
            flipTarget: () => {
                d = -d,
                [t,n] = [n, t],
                m()
            }
        }
    }
    je.needsInterpolation = (e, t) => typeof e == "string" || typeof t == "string";
    const it = e => 0
      , ct = (e, t, n) => {
        const o = t - e;
        return o === 0 ? 1 : (n - e) / o
    }
      , Pe = (e, t, n) => -n * e + n * t + e
      , at = (e, t) => n => Math.max(Math.min(n, t), e)
      , me = e => e % 1 ? Number(e.toFixed(5)) : e
      , we = /(-)?([\d]*\.?[\d])+/g
      , He = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi
      , Hn = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
    function ge(e) {
        return typeof e == "string"
    }
    const Ee = {
        test: e => typeof e == "number",
        parse: parseFloat,
        transform: e => e
    }
      , lt = Object.assign(Object.assign({}, Ee), {
        transform: at(0, 1)
    });
    Object.assign(Object.assign({}, Ee), {
        default: 1
    });
    const he = (e => ({
        test: t => ge(t) && t.endsWith(e) && t.split(" ").length === 1,
        parse: parseFloat,
        transform: t => `${t}${e}`
    }))("%");
    Object.assign(Object.assign({}, he), {
        parse: e => he.parse(e) / 100,
        transform: e => he.transform(e * 100)
    });
    const $e = (e, t) => n => !!(ge(n) && Hn.test(n) && n.startsWith(e) || t && Object.prototype.hasOwnProperty.call(n, t))
      , ut = (e, t, n) => o => {
        if (!ge(o))
            return o;
        const [s,i,r,a] = o.match(we);
        return {
            [e]: parseFloat(s),
            [t]: parseFloat(i),
            [n]: parseFloat(r),
            alpha: a !== void 0 ? parseFloat(a) : 1
        }
    }
      , ee = {
        test: $e("hsl", "hue"),
        parse: ut("hue", "saturation", "lightness"),
        transform: ({hue: e, saturation: t, lightness: n, alpha: o=1}) => "hsla(" + Math.round(e) + ", " + he.transform(me(t)) + ", " + he.transform(me(n)) + ", " + me(lt.transform(o)) + ")"
    }
      , $n = at(0, 255)
      , Re = Object.assign(Object.assign({}, Ee), {
        transform: e => Math.round($n(e))
    })
      , J = {
        test: $e("rgb", "red"),
        parse: ut("red", "green", "blue"),
        transform: ({red: e, green: t, blue: n, alpha: o=1}) => "rgba(" + Re.transform(e) + ", " + Re.transform(t) + ", " + Re.transform(n) + ", " + me(lt.transform(o)) + ")"
    };
    function Rn(e) {
        let t = ""
          , n = ""
          , o = ""
          , s = "";
        return e.length > 5 ? (t = e.substr(1, 2),
        n = e.substr(3, 2),
        o = e.substr(5, 2),
        s = e.substr(7, 2)) : (t = e.substr(1, 1),
        n = e.substr(2, 1),
        o = e.substr(3, 1),
        s = e.substr(4, 1),
        t += t,
        n += n,
        o += o,
        s += s),
        {
            red: parseInt(t, 16),
            green: parseInt(n, 16),
            blue: parseInt(o, 16),
            alpha: s ? parseInt(s, 16) / 255 : 1
        }
    }
    const Be = {
        test: $e("#"),
        parse: Rn,
        transform: J.transform
    }
      , Ae = {
        test: e => J.test(e) || Be.test(e) || ee.test(e),
        parse: e => J.test(e) ? J.parse(e) : ee.test(e) ? ee.parse(e) : Be.parse(e),
        transform: e => ge(e) ? e : e.hasOwnProperty("red") ? J.transform(e) : ee.transform(e)
    }
      , dt = "${c}"
      , ft = "${n}";
    function Bn(e) {
        var t, n, o, s;
        return isNaN(e) && ge(e) && ((n = (t = e.match(we)) === null || t === void 0 ? void 0 : t.length) !== null && n !== void 0 ? n : 0) + ((s = (o = e.match(He)) === null || o === void 0 ? void 0 : o.length) !== null && s !== void 0 ? s : 0) > 0
    }
    function pt(e) {
        typeof e == "number" && (e = `${e}`);
        const t = [];
        let n = 0;
        const o = e.match(He);
        o && (n = o.length,
        e = e.replace(He, dt),
        t.push(...o.map(Ae.parse)));
        const s = e.match(we);
        return s && (e = e.replace(we, ft),
        t.push(...s.map(Ee.parse))),
        {
            values: t,
            numColors: n,
            tokenised: e
        }
    }
    function mt(e) {
        return pt(e).values
    }
    function gt(e) {
        const {values: t, numColors: n, tokenised: o} = pt(e)
          , s = t.length;
        return i => {
            let r = o;
            for (let a = 0; a < s; a++)
                r = r.replace(a < n ? dt : ft, a < n ? Ae.transform(i[a]) : me(i[a]));
            return r
        }
    }
    const Vn = e => typeof e == "number" ? 0 : e;
    function zn(e) {
        const t = mt(e);
        return gt(e)(t.map(Vn))
    }
    const ht = {
        test: Bn,
        parse: mt,
        createTransformer: gt,
        getAnimatableNone: zn
    };
    function Ve(e, t, n) {
        return n < 0 && (n += 1),
        n > 1 && (n -= 1),
        n < .16666666666666666 ? e + (t - e) * 6 * n : n < .5 ? t : n < .6666666666666666 ? e + (t - e) * (.6666666666666666 - n) * 6 : e
    }
    function bt({hue: e, saturation: t, lightness: n, alpha: o}) {
        e /= 360,
        t /= 100,
        n /= 100;
        let s = 0
          , i = 0
          , r = 0;
        if (!t)
            s = i = r = n;
        else {
            const a = n < .5 ? n * (1 + t) : n + t - n * t
              , c = 2 * n - a;
            s = Ve(c, a, e + .3333333333333333),
            i = Ve(c, a, e),
            r = Ve(c, a, e - .3333333333333333)
        }
        return {
            red: Math.round(s * 255),
            green: Math.round(i * 255),
            blue: Math.round(r * 255),
            alpha: o
        }
    }
    const Gn = (e, t, n) => {
        const o = e * e
          , s = t * t;
        return Math.sqrt(Math.max(0, n * (s - o) + o))
    }
      , Un = [Be, J, ee]
      , yt = e => Un.find(t => t.test(e))
      , vt = (e, t) => {
        let n = yt(e)
          , o = yt(t)
          , s = n.parse(e)
          , i = o.parse(t);
        n === ee && (s = bt(s),
        n = J),
        o === ee && (i = bt(i),
        o = J);
        const r = Object.assign({}, s);
        return a => {
            for (const c in r)
                c !== "alpha" && (r[c] = Gn(s[c], i[c], a));
            return r.alpha = Pe(s.alpha, i.alpha, a),
            n.transform(r)
        }
    }
      , Kn = e => typeof e == "number"
      , Wn = (e, t) => n => t(e(n))
      , xt = (...e) => e.reduce(Wn);
    function St(e, t) {
        return Kn(e) ? n => Pe(e, t, n) : Ae.test(e) ? vt(e, t) : Et(e, t)
    }
    const Lt = (e, t) => {
        const n = [...e]
          , o = n.length
          , s = e.map( (i, r) => St(i, t[r]));
        return i => {
            for (let r = 0; r < o; r++)
                n[r] = s[r](i);
            return n
        }
    }
      , Qn = (e, t) => {
        const n = Object.assign(Object.assign({}, e), t)
          , o = {};
        for (const s in n)
            e[s] !== void 0 && t[s] !== void 0 && (o[s] = St(e[s], t[s]));
        return s => {
            for (const i in o)
                n[i] = o[i](s);
            return n
        }
    }
    ;
    function wt(e) {
        const t = ht.parse(e)
          , n = t.length;
        let o = 0
          , s = 0
          , i = 0;
        for (let r = 0; r < n; r++)
            o || typeof t[r] == "number" ? o++ : t[r].hue !== void 0 ? i++ : s++;
        return {
            parsed: t,
            numNumbers: o,
            numRGB: s,
            numHSL: i
        }
    }
    const Et = (e, t) => {
        const n = ht.createTransformer(t)
          , o = wt(e)
          , s = wt(t);
        return o.numHSL === s.numHSL && o.numRGB === s.numRGB && o.numNumbers >= s.numNumbers ? xt(Lt(o.parsed, s.parsed), n) : r => `${r > 0 ? t : e}`
    }
      , Xn = (e, t) => n => Pe(e, t, n);
    function Jn(e) {
        if (typeof e == "number")
            return Xn;
        if (typeof e == "string")
            return Ae.test(e) ? vt : Et;
        if (Array.isArray(e))
            return Lt;
        if (typeof e == "object")
            return Qn
    }
    function Yn(e, t, n) {
        const o = []
          , s = n || Jn(e[0])
          , i = e.length - 1;
        for (let r = 0; r < i; r++) {
            let a = s(e[r], e[r + 1]);
            if (t) {
                const c = Array.isArray(t) ? t[r] : t;
                a = xt(c, a)
            }
            o.push(a)
        }
        return o
    }
    function Zn([e,t], [n]) {
        return o => n(ct(e, t, o))
    }
    function eo(e, t) {
        const n = e.length
          , o = n - 1;
        return s => {
            let i = 0
              , r = !1;
            if (s <= e[0] ? r = !0 : s >= e[o] && (i = o - 1,
            r = !0),
            !r) {
                let c = 1;
                for (; c < n && !(e[c] > s || c === o); c++)
                    ;
                i = c - 1
            }
            const a = ct(e[i], e[i + 1], s);
            return t[i](a)
        }
    }
    function At(e, t, {clamp: n=!0, ease: o, mixer: s}={}) {
        const i = e.length;
        st(i === t.length),
        st(!o || !Array.isArray(o) || o.length === i - 1),
        e[0] > e[i - 1] && (e = [].concat(e),
        t = [].concat(t),
        e.reverse(),
        t.reverse());
        const r = Yn(t, o, s)
          , a = i === 2 ? Zn(e, r) : eo(e, r);
        return n ? c => a(qe(e[0], e[i - 1], c)) : a
    }
    const to = e => t => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2
      , no = e => t => Math.pow(t, e)
      , oo = e => t => t * t * ((e + 1) * t - e)
      , so = e => {
        const t = oo(e);
        return n => (n *= 2) < 1 ? .5 * t(n) : .5 * (2 - Math.pow(2, -10 * (n - 1)))
    }
      , ro = 1.525
      , io = e => e
      , co = no(2)
      , Mt = to(co);
    so(ro);
    function ao(e, t) {
        return e.map( () => t || Mt).splice(0, e.length - 1)
    }
    function lo(e) {
        const t = e.length;
        return e.map( (n, o) => o !== 0 ? o / (t - 1) : 0)
    }
    function uo(e, t) {
        return e.map(n => n * t)
    }
    function Me({from: e=0, to: t=1, ease: n, offset: o, duration: s=300}) {
        const i = {
            done: !1,
            value: e
        }
          , r = Array.isArray(t) ? t : [e, t]
          , a = uo(o && o.length === r.length ? o : lo(r), s);
        function c() {
            return At(a, r, {
                ease: Array.isArray(n) ? n : ao(r, n)
            })
        }
        let l = c();
        return {
            next: d => (i.value = l(d),
            i.done = d >= s,
            i),
            flipTarget: () => {
                r.reverse(),
                l = c()
            }
        }
    }
    function fo({velocity: e=0, from: t=0, power: n=.8, timeConstant: o=350, restDelta: s=.5, modifyTarget: i}) {
        const r = {
            done: !1,
            value: t
        };
        let a = n * e;
        const c = t + a
          , l = i === void 0 ? c : i(c);
        return l !== c && (a = l - t),
        {
            next: d => {
                const u = -a * Math.exp(-d / o);
                return r.done = !(u > s || u < -s),
                r.value = r.done ? l : l + u,
                r
            }
            ,
            flipTarget: () => {}
        }
    }
    const Tt = {
        keyframes: Me,
        spring: je,
        decay: fo
    };
    function po(e) {
        if (Array.isArray(e.to))
            return Me;
        if (Tt[e.type])
            return Tt[e.type];
        const t = new Set(Object.keys(e));
        return t.has("ease") || t.has("duration") && !t.has("dampingRatio") ? Me : t.has("dampingRatio") || t.has("stiffness") || t.has("mass") || t.has("damping") || t.has("restSpeed") || t.has("restDelta") ? je : Me
    }
    const It = 1 / 60 * 1e3
      , mo = typeof performance < "u" ? () => performance.now() : () => Date.now()
      , _t = typeof window < "u" ? e => window.requestAnimationFrame(e) : e => setTimeout( () => e(mo()), It);
    function go(e) {
        let t = []
          , n = []
          , o = 0
          , s = !1
          , i = !1;
        const r = new WeakSet
          , a = {
            schedule: (c, l=!1, d=!1) => {
                const u = d && s
                  , g = u ? t : n;
                return l && r.add(c),
                g.indexOf(c) === -1 && (g.push(c),
                u && s && (o = t.length)),
                c
            }
            ,
            cancel: c => {
                const l = n.indexOf(c);
                l !== -1 && n.splice(l, 1),
                r.delete(c)
            }
            ,
            process: c => {
                if (s) {
                    i = !0;
                    return
                }
                if (s = !0,
                [t,n] = [n, t],
                n.length = 0,
                o = t.length,
                o)
                    for (let l = 0; l < o; l++) {
                        const d = t[l];
                        d(c),
                        r.has(d) && (a.schedule(d),
                        e())
                    }
                s = !1,
                i && (i = !1,
                a.process(c))
            }
        };
        return a
    }
    const ho = 40;
    let ze = !0
      , be = !1
      , Ge = !1;
    const ye = {
        delta: 0,
        timestamp: 0
    }
      , ve = ["read", "update", "preRender", "render", "postRender"]
      , Te = ve.reduce( (e, t) => (e[t] = go( () => be = !0),
    e), {})
      , bo = ve.reduce( (e, t) => {
        const n = Te[t];
        return e[t] = (o, s=!1, i=!1) => (be || xo(),
        n.schedule(o, s, i)),
        e
    }
    , {})
      , yo = ve.reduce( (e, t) => (e[t] = Te[t].cancel,
    e), {});
    ve.reduce( (e, t) => (e[t] = () => Te[t].process(ye),
    e), {});
    const vo = e => Te[e].process(ye)
      , Ot = e => {
        be = !1,
        ye.delta = ze ? It : Math.max(Math.min(e - ye.timestamp, ho), 1),
        ye.timestamp = e,
        Ge = !0,
        ve.forEach(vo),
        Ge = !1,
        be && (ze = !1,
        _t(Ot))
    }
      , xo = () => {
        be = !0,
        ze = !0,
        Ge || _t(Ot)
    }
    ;
    function kt(e, t, n=0) {
        return e - t - n
    }
    function So(e, t, n=0, o=!0) {
        return o ? kt(t + -e, t, n) : t - (e - t) + n
    }
    function Lo(e, t, n, o) {
        return o ? e >= t + n : e <= -n
    }
    const wo = e => {
        const t = ({delta: n}) => e(n);
        return {
            start: () => bo.update(t, !0),
            stop: () => yo.update(t)
        }
    }
    ;
    function Eo(e) {
        var t, n, {from: o, autoplay: s=!0, driver: i=wo, elapsed: r=0, repeat: a=0, repeatType: c="loop", repeatDelay: l=0, onPlay: d, onStop: u, onComplete: g, onRepeat: v, onUpdate: p} = e, m = ot(e, ["from", "autoplay", "driver", "elapsed", "repeat", "repeatType", "repeatDelay", "onPlay", "onStop", "onComplete", "onRepeat", "onUpdate"]);
        let {to: b} = m, f, h = 0, y = m.duration, x, L = !1, E = !0, w;
        const A = po(m);
        !((n = (t = A).needsInterpolation) === null || n === void 0) && n.call(t, o, b) && (w = At([0, 100], [o, b], {
            clamp: !1
        }),
        o = 0,
        b = 100);
        const T = A(Object.assign(Object.assign({}, m), {
            from: o,
            to: b
        }));
        function M() {
            h++,
            c === "reverse" ? (E = h % 2 === 0,
            r = So(r, y, l, E)) : (r = kt(r, y, l),
            c === "mirror" && T.flipTarget()),
            L = !1,
            v && v()
        }
        function _() {
            f.stop(),
            g && g()
        }
        function q(D) {
            if (E || (D = -D),
            r += D,
            !L) {
                const P = T.next(Math.max(0, r));
                x = P.value,
                w && (x = w(x)),
                L = E ? P.done : r <= 0
            }
            p?.(x),
            L && (h === 0 && (y ?? (y = r)),
            h < a ? Lo(r, y, l, E) && M() : _())
        }
        function j() {
            d?.(),
            f = i(q),
            f.start()
        }
        return s && j(),
        {
            stop: () => {
                u?.(),
                f.stop()
            }
        }
    }
    function Ct(e, t, n=!1) {
        const o = e.offsetWidth
          , s = e.offsetHeight
          , i = e.offsetLeft
          , r = e.offsetTop;
        n ? t.classList.add("is-initial") : t.classList.remove("is-initial"),
        n || Eo({
            to: i,
            type: "spring",
            ease: [io, Mt],
            duration: 500,
            onUpdate: a => t.style.left = a + "px"
        }),
        t.setAttribute("style", `width: ${o}px;height:${s}px;${n ? `left: ${i}px;` : ""}top:${r}px;`)
    }
    function Ao() {
        const e = document.querySelector(".post-tabs");
        if (!e)
            return;
        const t = [...e.querySelectorAll("button")]
          , n = [...document.querySelectorAll(".post-tabs__item")]
          , o = e.querySelector(".ptabs__indicator");
        Ct(t.find(s => s.classList.contains("is-active")), o, !0),
        t.forEach(s => {
            s.addEventListener("click", () => {
                const i = s.getAttribute("data-id")
                  , r = document.getElementById(i);
                t.forEach(a => a.classList.remove("is-active")),
                n.forEach(a => a.classList.remove("is-active")),
                Ct(s, o, !1),
                s.classList.add("is-active"),
                r.classList.add("is-active")
            }
            )
        }
        )
    }
    function Mo(e, t, n) {
        return [...e].filter(s => s.getAttribute("data-episode") == t && s.getAttribute("data-season") == n)
    }
    function To() {
        const e = document.querySelector(".eps-search");
        if (!e)
            return;
        const t = e.querySelector("input")
          , n = document.querySelector(".eps-list")
          , o = document.querySelector(".eps-search__result");
        t.addEventListener("input", () => {
            const s = n.querySelectorAll("li")
              , i = Mo(n.querySelectorAll("li"), t.value, n.getAttribute("data-season"))[0];
            t.value != "" && Number(t.value) <= s.length && i ? (o.innerHTML = i.outerHTML,
            n.classList.add("display-result")) : (o.innerHTML = "",
            n.classList.remove("display-result"))
        }
        )
    }
    function Dt(e) {
        const t = document.createElement("li")
          , n = document.createElement("div")
          , o = document.createElement("img")
          , s = document.createElement("div")
          , i = document.createElement("span")
          , r = document.createElement("span")
          , a = document.createElement("h3")
          , c = document.createElement("div")
          , l = document.createElement("a");
        return t.classList.add("lep"),
        n.classList.add("lep__thumbnail"),
        s.classList.add("lep__body"),
        i.classList.add("lep__season"),
        r.classList.add("lep__episode"),
        a.classList.add("lep__title"),
        c.classList.add("lep__play"),
        t.setAttribute("data-episode", e.episode_number),
        t.setAttribute("data-season", e.season_number),
        o.setAttribute("width", "100%"),
        o.setAttribute("height", "100%"),
        o.setAttribute("loading", "lazy"),
        o.src = `https://image.tmdb.org/t/p/w92/${e.episode_image}`,
        l.href = e.permalink ?? "#",
        i.innerHTML = "S" + e.season_number,
        r.innerHTML = corvutils.i18n.episode + " " + e.episode_number,
        a.innerHTML = e.title,
        c.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="play" class="lucide lucide-play"><polygon points="6 3 20 12 6 21 6 3"></polygon></svg>',
        l.innerHTML = corvutils.i18n.watchEpisode,
        n.appendChild(o),
        t.appendChild(n),
        s.appendChild(i),
        s.appendChild(r),
        s.appendChild(a),
        t.appendChild(s),
        t.appendChild(c),
        t.appendChild(l),
        t
    }
    function qt(e) {
        const t = new FormData;
        return t.append("action", "corvus_get_episodes"),
        t.append("nonce", e.nonce),
        t.append("post_id", e.id),
        t.append("season", e.seasonNumber),
        t.append("results", e.results),
        t.append("offset", e.offset),
        t.append("order", e.order),
        t
    }
    function Io() {
        const e = document.querySelector(".eps");
        if (!e)
            return;
        let t = e.getAttribute("data-offset") ?? 0;
        const n = document.querySelectorAll(".eps-ssns button");
        e.addEventListener("click", async function(o) {
            const s = o.target;
            if (s.matches("button#load-eps")) {
                const i = e.getAttribute("data-results")
                  , r = e.getAttribute("data-ajaxurl")
                  , a = e.getAttribute("data-nonce")
                  , c = e.getAttribute("data-season-number")
                  , l = e.getAttribute("data-tmdb-id")
                  , d = e.getAttribute("data-order")
                  , u = e.querySelector(".eps-list");
                t++;
                const g = Number(i) * t;
                e.setAttribute("data-offset", g);
                const v = qt({
                    id: l,
                    nonce: a,
                    results: i,
                    seasonNumber: c,
                    offset: g,
                    order: d
                });
                let p = await fetch(`${r}admin-ajax.php`, {
                    method: "POST",
                    body: v
                });
                if (p = await p.json(),
                p.success) {
                    let m = 0;
                    p.data.results.forEach(b => {
                        m++,
                        setTimeout(function() {
                            u.appendChild(Dt(b))
                        }, 0 + 25 * m)
                    }
                    ),
                    p.data.hasMore || (s.setAttribute("disabled", "disabled"),
                    t = 0)
                }
            }
        }),
        [...n].forEach(o => o.addEventListener("click", () => t = 0))
    }
    function _o() {
        const e = document.querySelector(".eps-ssns");
        if (!e)
            return;
        const t = document.querySelector(".eps")
          , n = t.querySelector("button#load-eps")
          , o = t.querySelector(".eps-list")
          , s = t.getAttribute("data-ajaxurl")
          , i = t.getAttribute("data-nonce")
          , r = t.getAttribute("data-results")
          , a = t.getAttribute("data-order");
        e.addEventListener("click", async function(c) {
            const l = c.target;
            if (l.matches("button")) {
                const d = l.getAttribute("data-season")
                  , u = l.getAttribute("data-series-id")
                  , g = qt({
                    id: u,
                    nonce: i,
                    results: r,
                    seasonNumber: d,
                    offset: 0,
                    order: a
                });
                let v = await fetch(`${s}admin-ajax.php`, {
                    method: "POST",
                    body: g
                });
                v = await v.json(),
                o.innerHTML = "",
                t.setAttribute("data-season-number", d),
                o.setAttribute("data-season", d),
                v.success && (v.data.results.forEach(p => {
                    o.appendChild(Dt(p))
                }
                ),
                v.data.hasMore ? n.removeAttribute("disabled") : (n.setAttribute("disabled", "disabled"),
                count = 0))
            }
        })
    }
    function Oo(e) {
        const t = {};
        if (!Array.isArray(e))
            return !1;
        if (e.some(n => n.lang === ""))
            return e;
        for (const n of e) {
            const {lang: o} = n;
            t[o] || (t[o] = []),
            t[o].push(n)
        }
        return t
    }
    function Nt(e, t) {
        let n;
        return t == "video" ? (n = document.createElement("video"),
        n.setAttribute("controls", ""),
        n.src = e) : (n = document.createElement("iframe"),
        n.setAttribute("allowfullscreen", ""),
        n.src = e),
        n
    }
    function ko(e) {
        const t = new FormData;
        return t.append("action", "corvus_get_servers"),
        t.append("nonce", e.nonce),
        t.append("post_id", e.id),
        t
    }
    async function Ft(e) {
        let t = await fetch(`${corvutils.ajaxurl}admin-ajax.php`, {
            method: "POST",
            body: ko(e)
        });
        return t = await t.json(),
        t
    }
    const jt = {
        es: "https://flagicons.lipis.dev/flags/4x3/es.svg",
        lat: "https://flagicons.lipis.dev/flags/4x3/mx.svg",
        sub: "https://flagicons.lipis.dev/flags/4x3/eu.svg",
        en: "https://flagicons.lipis.dev/flags/4x3/gb.svg"
    };
    function Co(e) {
        const t = document.createElement("div");
        if (t.classList.add("opts"),
        Array.isArray(e))
            e.forEach(n => {
                const o = document.createElement("div");
                o.classList.add("opts-item");
                const s = n.name.split(":");
                o.classList.add("opts-item__link"),
                o.setAttribute("data-u", n.link),
                o.innerHTML = `${s[0]} ${s[1] ? `<span>${s[1]}</span>` : ""}`,
                t.appendChild(o)
            }
            );
        else
            for (const n in e)
                if (Object.hasOwnProperty.call(e, n)) {
                    const o = e[n]
                      , s = document.createElement("div")
                      , i = document.createElement("div")
                      , r = document.createElement("div")
                      , a = typeof _CRV_FLAGS > "u" ? jt : {
                        ...jt,
                        ..._CRV_FLAGS
                    };
                    s.classList.add("opts-item"),
                    i.classList.add("opts-item__body"),
                    r.classList.add("opts-item__action"),
                    r.innerHTML = `<img src="${a[n]}"/> ${corvutils.i18n[n]} <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg></span>`,
                    o.forEach(c => {
                        const l = document.createElement("button")
                          , d = c.name.split(":");
                        l.classList.add("opts-item__link"),
                        l.setAttribute("data-u", c.link),
                        l.setAttribute("data-t", c.type),
                        l.innerHTML = `${d[0]} ${d[1] ? `<span>${d[1]}</span>` : ""}`,
                        i.appendChild(l)
                    }
                    ),
                    s.appendChild(r),
                    s.appendChild(i),
                    t.appendChild(s)
                }
        return t
    }
    async function Do() {
        const e = document.querySelector(".ep__dropdown, .servers");
        if (!e)
            return;
        const t = document.querySelector(".player")
          , n = t.querySelector(".fke-player")
          , o = e.getAttribute("data-id")
          , s = e.getAttribute("data-nonce")
          , i = await Ft({
            id: o,
            nonce: s
        })
          , r = Oo(i);
        r && (e.innerHTML = "",
        e.appendChild(Co(r)),
        e.addEventListener("click", function(a) {
            const c = a.target;
            if (c.matches(".opts-item__action") && (c.nextElementSibling.classList.toggle("is-visible"),
            c.classList.toggle("is-active")),
            c.matches(".opts-item__link")) {
                const l = c.getAttribute("data-u")
                  , d = c.getAttribute("data-t");
                t.innerHTML = "",
                t.appendChild(Nt(l, d))
            }
        }),
        n.addEventListener("click", async function() {
            const a = e.getAttribute("data-id")
              , c = e.getAttribute("data-nonce")
              , l = await Ft({
                id: a,
                nonce: c
            });
            l[0] && (t.innerHTML = "",
            t.appendChild(Nt(l[0].link, l[0].type)))
        }))
    }
    function qo() {
        const e = document.querySelector("#open-download-list");
        if (!e)
            return;
        const t = document.querySelector(".downloads");
        e.addEventListener("click", function() {
            t.classList.toggle("is-visible")
        })
    }
    function No() {
        const e = document.querySelector("#expand-player");
        if (!e)
            return;
        const t = document.querySelector("#cont-expand")
          , n = document.querySelector(".aside")
          , o = t.querySelector(".player")
          , s = t.querySelector(".ep__header");
        e.addEventListener("click", function() {
            t.classList.contains("cont--expanded") ? (t.classList.remove("cont--expanded"),
            n.removeAttribute("style"),
            window.scrollTo(0, 0)) : (t.classList.add("cont--expanded"),
            o.setAttribute("style", `--container-width: ${t.offsetWidth}px`),
            n.setAttribute("style", `--margin-top: ${o.scrollHeight + (s.scrollHeight + 24) + 16}px;`),
            window.scrollTo(0, o.offsetTop - 16))
        }),
        window.addEventListener("resize", function() {
            t.classList.contains("cont--expanded") && (o.setAttribute("style", `--container-width: ${t.offsetWidth}px`),
            n.setAttribute("style", `--margin-top: ${o.scrollHeight + (s.scrollHeight + 24) + 16}px;`))
        })
    }
    function Fo() {
        const e = document.body
          , t = document.querySelector("#turnoff-trigger");
        t && t.addEventListener("click", function() {
            e.classList.add("wrapper-overlay"),
            e.classList.add("turnoff-light")
        })
    }
    function jo() {
        const e = document.querySelectorAll(".synopsis");
        e && [...e].forEach(t => {
            const n = t.querySelector("p");
            if (n) {
                const o = t.querySelector("span");
                o.addEventListener("click", () => {
                    n.style.display == "block" ? (n.style.display = null,
                    n.classList.remove("is-full"),
                    o.innerHTML = `${corvutils.i18n.showMore}`) : (n.classList.add("is-full"),
                    n.style.display = "block",
                    o.innerHTML = `${corvutils.i18n.showLess}`)
                }
                )
            }
        }
        )
    }
    function Po() {
        const e = document.querySelector("#expand-player");
        if (!e)
            return;
        const t = document.querySelector(".hero__body")
          , n = document.querySelector(".player");
        e.addEventListener("click", () => {
            t.classList.contains("is-expanded") ? (t.classList.remove("is-expanded"),
            window.scrollTo(0, 0)) : (t.classList.add("is-expanded"),
            window.scrollTo(0, n.offsetTop - 24))
        }
        )
    }
    function Pt(e="Modal", t, n) {
        const o = document.createElement("div")
          , s = document.createElement("div")
          , i = document.createElement("div")
          , r = document.createElement("span")
          , a = document.createElement("h2");
        return o.classList.add("crv-modal"),
        s.classList.add("crv-modal__wrapper"),
        i.classList.add("crv-modal__headline"),
        r.classList.add("crv-modal__close"),
        r.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>',
        t ? (a.innerHTML = e,
        i.appendChild(a),
        i.appendChild(r),
        s.appendChild(i)) : (s.classList.add("no-title"),
        s.appendChild(r)),
        s.appendChild(n),
        r.addEventListener("click", function() {
            o.remove()
        }),
        o.addEventListener("click", c => {
            c.target.classList.contains("crv-modal") && o.remove()
        }
        ),
        o.appendChild(s),
        o
    }
    function Ho(e) {
        const t = new FormData;
        return t.append("action", "corvus_get_downloads"),
        t.append("nonce", e.nonce),
        t.append("post_id", e.id),
        t
    }
    async function $o(e) {
        let t = await fetch(`${corvutils.ajaxurl}admin-ajax.php`, {
            method: "POST",
            body: Ho(e)
        });
        return t = await t.json(),
        t
    }
    function Ro(e) {
        const t = e.map(r => {
            const a = Object.keys(r)
              , c = a.shift();
            a.push(c);
            const l = {};
            return a.forEach(d => {
                l[d] = r[d]
            }
            ),
            l
        }
        )
          , n = document.createElement("table")
          , s = n.createTHead().insertRow()
          , i = n.createTBody();
        return Object.keys(t[0]).forEach(function(r) {
            var a = document.createElement("th")
              , c = document.createTextNode(r == "name" ? corvutils.i18n.server : corvutils.i18n[r]);
            a.appendChild(c),
            s.appendChild(a)
        }),
        t.forEach(function(r) {
            var a = i.insertRow();
            for (const c in r)
                if (Object.hasOwnProperty.call(r, c)) {
                    const l = r[c]
                      , d = a.insertCell();
                    c !== "link" && (d.innerHTML = l),
                    c == "link" && (d.innerHTML = `<a href="${l}" class="btn is-small" target="_target">${corvutils.i18n.download}</a>`)
                }
        }),
        n
    }
    function Bo(e) {
        const t = document.createElement("div");
        return t.classList.add("downloads__table"),
        Array.isArray(e) ? t.appendChild(Ro(e)) : t.innerHTML = `<p class="no-videos"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-download"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>${corvutils.i18n.downloadNotAvailable}</p>`,
        t
    }
    function Vo() {
        const e = document.querySelector("#open-download-list");
        if (!e)
            return;
        const t = document.createElement("div")
          , n = Pt(corvutils.i18n.availableDownloads, !0, t);
        e.addEventListener("click", async function() {
            const o = e.getAttribute("data-id")
              , s = e.getAttribute("data-nonce")
              , i = await $o({
                id: o,
                nonce: s
            });
            t.innerHTML = "",
            t.appendChild(Bo(i)),
            document.body.appendChild(n)
        })
    }
    function zo(e) {
        const t = document.createElement("iframe");
        return t.src = e,
        t
    }
    function Go() {
        const e = document.body
          , t = document.querySelectorAll("button[data-youtube-id]");
        t && [...t].forEach(n => {
            n.addEventListener("click", () => {
                const s = `https://www.youtube.com/embed/${n.getAttribute("data-youtube-id")}`
                  , i = Pt("", !1, zo(s));
                i.classList.add("crv-modal--youtube"),
                e.appendChild(i)
            }
            )
        }
        )
    }
    function Uo() {
        const e = document.querySelector(".embla.embla--hero");
        if (!e)
            return;
        const t = document.querySelector(".embla-btnPrev-hero")
          , n = document.querySelector(".embla-btnNext-hero")
          , s = fe(e, {
            loop: !1,
            slidesToScroll: 1,
            duration: 25,
            align: "start",
            skipSnaps: !0,
            containScroll: !0
        }, [pe({
            delay: 4500
        })]);
        s.on("select", () => z(s, t, n)).on("init", () => z(s, t, n)).on("reInit", () => z(s, t, n)),
        t.addEventListener("click", s.scrollPrev, !1),
        n.addEventListener("click", s.scrollNext, !1)
    }
    function Ko(e) {
        const t = document.createElement("li")
          , n = document.createElement("a")
          , o = document.createTextNode(e.name)
          , s = document.createElement(e.profile_image ? "img" : "span");
        return t.classList.add("cod__item"),
        n.href = e.url,
        e.profile_image ? (s.src = "https://image.tmdb.org/t/p/w45" + e.profile_image,
        s.width = "100%",
        s.height = "100%",
        s.loading = "lazy") : s.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="user" class="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>',
        n.appendChild(s),
        n.appendChild(o),
        t.appendChild(n),
        t
    }
    function Wo() {
        if (typeof _CAST > "u")
            return;
        const e = document.querySelector(".cod__loadMore button");
        if (!e)
            return;
        const t = document.querySelector(".cod.cod--cast")
          , n = t.getAttribute("data-limit") ? parseInt(t.getAttribute("data-limit")) : 6
          , o = JSON.parse(_CAST);
        let s = 0;
        e.addEventListener("click", () => {
            const i = s + n;
            o.slice(s, i).forEach(r => {
                t.appendChild(Ko(r))
            }
            ),
            s = i,
            s >= o.length && (e.style.display = "none")
        }
        )
    }
    function Qo() {
        const e = document.querySelector("button.footer__goUp");
        e && e.addEventListener("click", function() {
            window.scroll({
                top: 0,
                behavior: "smooth"
            })
        })
    }
    var Xo = ( () => {
        document.addEventListener("DOMContentLoaded", function() {
            const e = document.body;
            typeof window.lucide < "u" && lucide.createIcons(),
            Gt(),
            Ut(),
            Kt(),
            Qo(),
            Wt(),
            Go(),
            Tn(),
            In(),
            Uo(),
            e.classList.contains("single") && (Ao(),
            Wo(),
            jo(),
            Do(),
            Fo()),
            e.classList.contains("single-serie") && (To(),
            Io(),
            _o()),
            e.classList.contains("single-movie") && (Po(),
            Vo()),
            e.classList.contains("single-episodes") && (No(),
            qo())
        })
    }
    )();
    return Xo
}();
