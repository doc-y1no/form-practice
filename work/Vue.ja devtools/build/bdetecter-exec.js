(()=>{
  "use strict";
  var e = {
      23236: (e,t)=>{
          function o() {}
          t.w = void 0,
          t.w = o
      }
  }
    , t = {};
  function o(n) {
      var _ = t[n];
      if (void 0 !== _)
          return _.exports;
      var d = t[n] = {
          exports: {}
      };
      return e[n](d, d.exports, o),
      d.exports
  }
  (()=>{
      var e = o(23236);
      function t(e) {
          window.postMessage({
              key: "_vue-devtools-send-message",
              message: e
          })
      }
      function n() {
          let e = 1e3
            , o = 10;
          function n() {
              const _ = !(!window.__NUXT__ && !window.$nuxt);
              if (_) {
                  let e;
                  return window.$nuxt && (e = window.$nuxt.$root && window.$nuxt.$root.constructor),
                  void t({
                      devtoolsEnabled: e && e.config.devtools || window.__VUE_DEVTOOLS_GLOBAL_HOOK__ && window.__VUE_DEVTOOLS_GLOBAL_HOOK__.enabled,
                      vueDetected: !0,
                      nuxtDetected: !0
                  }, "*")
              }
              const d = !!window.__VUE__;
              if (d)
                  return void t({
                      devtoolsEnabled: window.__VUE_DEVTOOLS_GLOBAL_HOOK__ && window.__VUE_DEVTOOLS_GLOBAL_HOOK__.enabled,
                      vueDetected: !0
                  }, "*");
              const i = document.querySelectorAll("*");
              let s;
              for (let e = 0; e < i.length; e++)
                  if (i[e].__vue__) {
                      s = i[e];
                      break
                  }
              if (s) {
                  let e = Object.getPrototypeOf(s.__vue__).constructor;
                  while (e.super)
                      e = e.super;
                  t({
                      devtoolsEnabled: e.config.devtools,
                      vueDetected: !0
                  }, "*")
              } else
                  o > 0 && (o--,
                  setTimeout((()=>{
                      n()
                  }
                  ), e),
                  e *= 5)
          }
          setTimeout((()=>{
              n()
          }
          ), 100)
      }
      document instanceof HTMLDocument && (n(),
      (0,
      e.w)())
  }
  )()
}
)();
