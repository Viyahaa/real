(function (e) {
  function t(t) {
    for (
      var a, i, o = t[0], c = t[1], d = t[2], u = 0, l = [];
      u < o.length;
      u++
    )
      (i = o[u]),
        Object.prototype.hasOwnProperty.call(r, i) && r[i] && l.push(r[i][0]),
        (r[i] = 0);
    for (a in c) Object.prototype.hasOwnProperty.call(c, a) && (e[a] = c[a]);
    p && p(t);
    while (l.length) l.shift()();
    return s.push.apply(s, d || []), n();
  }
  function n() {
    for (var e, t = 0; t < s.length; t++) {
      for (var n = s[t], a = !0, i = 1; i < n.length; i++) {
        var o = n[i];
        0 !== r[o] && (a = !1);
      }
      a && (s.splice(t--, 1), (e = c((c.s = n[0]))));
    }
    return e;
  }
  var a = {},
    i = { app: 0 },
    r = { app: 0 },
    k = [];
    s = [];
  function o(e) {
    return (
      c.p +
      "js/" +
      ({
        BoardroomPool: "BoardroomPool",
        "Boardroom~liquidity~tradeReward": "Boardroom~liquidity~tradeReward",
        Boardroom: "Boardroom",
        "liquidity~tradeReward": "liquidity~tradeReward",
        liquidity: "liquidity",
        tradeReward: "tradeReward",
        Bridge: "Bridge",
        Home: "Home",
        Ecommerce: "Ecommerce",
        introduce: "introduce",
      }[e] || e) +
      "." +
      {
        BoardroomPool: "f8db7f3f",
        "Boardroom~liquidity~tradeReward": "d8c5254d",
        Boardroom: "781c667e",
        "liquidity~tradeReward": "f5dca6da",
        liquidity: "5273f8b8",
        tradeReward: "c4bd08fc",
        Bridge: "21b09d33",
        Home: "9da9f8e1",
        Ecommerce: "Ecommerce",
        introduce: "71a4c126",
      }[e] +
      ".js"
    );
  }
  function c(t) {
    if (a[t]) return a[t].exports;
    var n = (a[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, c), (n.l = !0), n.exports;
  }
  (c.e = function (e) {
    var t = [],
      n = {
        BoardroomPool: 1,
        "Boardroom~liquidity~tradeReward": 1,
        Boardroom: 1,
        "liquidity~tradeReward": 1,
        liquidity: 1,
        tradeReward: 1,
        Bridge: 1,
        Home: 1,
        Ecommerce: 1,
        introduce: 1,
      };
    i[e]
      ? t.push(i[e])
      : 0 !== i[e] &&
        n[e] &&
        t.push(
          (i[e] = new Promise(function (t, n) {
            for (
              var a =
                  "css/" +
                  ({
                    BoardroomPool: "BoardroomPool",
                    "Boardroom~liquidity~tradeReward":
                      "Boardroom~liquidity~tradeReward",
                    Boardroom: "Boardroom",
                    "liquidity~tradeReward": "liquidity~tradeReward",
                    liquidity: "liquidity",
                    tradeReward: "tradeReward",
                    Bridge: "Bridge",
                    Home: "Home",
                    introduce: "introduce",
                  }[e] || e) +
                  "." +
                  {
                    BoardroomPool: "8599eb3c",
                    "Boardroom~liquidity~tradeReward": "cd16a17c",
                    Boardroom: "687f32c8",
                    "liquidity~tradeReward": "247289fa",
                    liquidity: "0713c9d0",
                    tradeReward: "0579a18f",
                    Bridge: "f97d0c5b",
                    Home: "db266e59",
                    introduce: "f46d6f06",
                  }[e] +
                  ".css",
                r = c.p + a,
                s = document.getElementsByTagName("link"),
                o = 0;
              o < s.length;
              o++
            ) {
              var d = s[o],
                u = d.getAttribute("data-href") || d.getAttribute("href");
              if ("stylesheet" === d.rel && (u === a || u === r)) return t();
            }
            var l = document.getElementsByTagName("style");
            for (o = 0; o < l.length; o++) {
              (d = l[o]), (u = d.getAttribute("data-href"));
              if (u === a || u === r) return t();
            }
            var p = document.createElement("link");
            (p.rel = "stylesheet"),
              (p.type = "text/css"),
              (p.onload = t),
              (p.onerror = function (t) {
                var a = (t && t.target && t.target.src) || r,
                  s = new Error(
                    "Loading CSS chunk " + e + " failed.\n(" + a + ")"
                  );
                (s.code = "CSS_CHUNK_LOAD_FAILED"),
                  (s.request = a),
                  delete i[e],
                  p.parentNode.removeChild(p),
                  n(s);
              }),
              (p.href = r);
            var m = document.getElementsByTagName("head")[0];
            m.appendChild(p);
          }).then(function () {
            i[e] = 0;
          }))
        );
    var a = r[e];
    if (0 !== a)
      if (a) t.push(a[2]);
      else {
        var s = new Promise(function (t, n) {
          a = r[e] = [t, n];
        });
        t.push((a[2] = s));
        var d,
          u = document.createElement("script");
        (u.charset = "utf-8"),
          (u.timeout = 120),
          c.nc && u.setAttribute("nonce", c.nc),
          (u.src = o(e));
        var l = new Error();
        d = function (t) {
          (u.onerror = u.onload = null), clearTimeout(p);
          var n = r[e];
          if (0 !== n) {
            if (n) {
              var a = t && ("load" === t.type ? "missing" : t.type),
                i = t && t.target && t.target.src;
              (l.message =
                "Loading chunk " + e + " failed.\n(" + a + ": " + i + ")"),
                (l.name = "ChunkLoadError"),
                (l.type = a),
                (l.request = i),
                n[1](l);
            }
            r[e] = void 0;
          }
        };
        var p = setTimeout(function () {
          d({ type: "timeout", target: u });
        }, 12e4);
        (u.onerror = u.onload = d), document.head.appendChild(u);
      }
    return Promise.all(t);
  }),
    (c.m = e),
    (c.c = a),
    (c.d = function (e, t, n) {
      c.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (c.r = function (e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (c.t = function (e, t) {
      if ((1 & t && (e = c(e)), 8 & t)) return e;
      if (4 & t && "object" === typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (c.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var a in e)
          c.d(
            n,
            a,
            function (t) {
              return e[t];
            }.bind(null, a)
          );
      return n;
    }),
    (c.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e["default"];
            }
          : function () {
              return e;
            };
      return c.d(t, "a", t), t;
    }),
    (c.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (c.p = "https://cdn.jsdelivr.net/gh/EmevineFinance/homepage@main/"),
    (c.oe = function (e) {
      throw (console.error(e), e);
    });
  var d = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    u = d.push.bind(d);
  (d.push = t), (d = d.slice());
  for (var l = 0; l < d.length; l++) t(d[l]);
  var p = u;
  s.push([0, "chunk-vendors"]), n();
})({
  0: function (e, t, n) {
    e.exports = n("56d7");
  },
  "0131": function (e, t) {
    e.exports =
      "data:image/png;base64,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";
  },
  "0147": function (e, t, n) {},
  "0386": function (e, t) {
    e.exports =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAoCAYAAACIC2hQAAAFKklEQVRYR8WZeahVVRTGf18DBWJFFDRYEWYjihUNRtkcZYEVGc1z0kQFzdM/zYM2W6EWFRU0ENkfhWRq9k9hA6Rlgg3QJI2YZXMrvss+l/PuO/vcc9/z2YLHg3v2Xus7a6291rf2EQOUiBgBTAT2BrYANk//1wW+Br5J/z8AZkn6cICmWtvUy+aI2Ai4ADgW2L2XvcAnwEvAg5I+73FvM6ARsR5wIXAdsHGvRjrW/wE8BNwi6Yemurp6NCIOBh4FtmmqtOG6FcCVkqY3WV8LNCIuAu4B1mmibIBrHgYulvR33f5KoBFhYNOAyQM03uu2ecBxkn7MbcwBNUgfmjUpC4BDJP1VZbQf0Ig4D3A4/g+ZKencrkAjYn9gzhDnZDcHOF8f6FzU9mjKy8XADt00DfHzVcAoSW4abSkD7SXk/wJzAefVb8BlwGaZF5gKLAF2S51sywYvOkNSn4PcAhoRw4BlNcYK3f8ADsu9wHjgBG8HPk77XcDtEbfR4cDWwMik9113JWA/wOD9LCe2M1qSX7AlBVB3HSupky+SRwzC7fN9YKEkK+0qEWE+cGB6kfnAzNSKc3sfk3R2J9DXXBq6WPNpfNrekvRzV2SZBRFh52wCrA18BqyfWfq9I1E4QolofJvClbP/HbCVJPfp1SYR4fZZWY6SkfGS3myFPiJOSp6qAzBF0hWrDWFSFBG7Au/V6L1bkg9qC+iUdGrrcIyRtGh1A7W+iHCuj83onifpoALoM8CJNSCWSRo1FCAT0GtN+TL6l0rasQDqE+iOlJP7JF1a9TAitkt735bkZtFH0hRwGLBI0sKMjp2BHPtfKWmDAuhSYPsaoJMkvVABwiOIWY9PrSnaREmvFOsiwlEwuA1TrT1L0uMZsB5bcg1juKRfnKMu1nVtc4SkryqAulT5IBYyR9KhJaCduf+RpF0yQJ8Fjs84a5ikVQbqVuhCXCWrJLlr9ZOIeBI4tfRgtqTDS0DvMIMvPc/mekR4xLm5wswKSZ7TWqf+KeDkDNDFkkZngLq0vJFapevrBEl+6ZZEhEcXh35TwNxgsiSPNFUvfQzwYsWjJZKcwy2gdwK5GrlAUvagpcOyD/COpE87DUWEQR4AOOzZcTki9gLeqgA6V5JnthbQScBzGY++LqlPa42InYDlkn7K7Kn9OSL2MImRtLLkfZegNgEpKbhd0jUFULMct0iPxJ3iijBW0u8lpWsBV6cLh1nA/G6DWURsCxwN2PvTJLkktiUiXMJmV9gfJ6nl6YI9uawckXGF89Clx+NtWbk967c9yqFPBMMkw4TXJcvlyX9e57sAF3XzzF879BwJ+NR3HtrlvnmRZBrZBnqOldTEzOXpRsDUqz3WRoQvEs5vkAIe2Eww2nkYEa7dNwFOvaoh8xFJbd2FR+0Bh7mOzBrPlylEzicX8hsagCyWmM/elmzsC4xLVK9KxZ+ORPmAlkeR04AnejA8lEvvl3RJ2UAZqA+JmcyYoUTQQLdJ+UhJJs5t6ZMbqXR4YMux7gZ2Br3kDEn9Ilt1AdGESA8aTUbBVEmXVz3LXencmkrPUAGq0vuqS50kt9t+kgPq331Cr1pDSN04TjGdy9nrdu1osuKxdihz1tG7vijsAwLqTRGxpws9UMklB+Fxdx7fMz3fREfXG+cE1qXr9NSd/JFhMGIychfgCbNPO61T2ghooSAinAJnphsO0z/fmjQR92tf6fhjw3RJJkE9SU9Ay5ojwi10Qunzja9s/Fd8vik+4fjzzctV40wvSP8DyCK8OMjwxA0AAAAASUVORK5CYII=";
  },
  "0506": function (e) {
    e.exports = JSON.parse(
	'[{"inputs":[{"internalType":"address","name":"_factory","type":"address"},{"internalType":"address","name":"_WETH","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"WETH","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"amountADesired","type":"uint256"},{"internalType":"uint256","name":"amountBDesired","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"addLiquidity","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"},{"internalType":"uint256","name":"liquidity","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amountTokenDesired","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"addLiquidityETH","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"},{"internalType":"uint256","name":"liquidity","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"reserveIn","type":"uint256"},{"internalType":"uint256","name":"reserveOut","type":"uint256"}],"name":"getAmountIn","outputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"reserveIn","type":"uint256"},{"internalType":"uint256","name":"reserveOut","type":"uint256"}],"name":"getAmountOut","outputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"}],"name":"getAmountsIn","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"}],"name":"getAmountsOut","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"reserveA","type":"uint256"},{"internalType":"uint256","name":"reserveB","type":"uint256"}],"name":"quote","outputs":[{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidity","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidityETH","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidityETHSupportingFeeOnTransferTokens","outputs":[{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityETHWithPermit","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityETHWithPermitSupportingFeeOnTransferTokens","outputs":[{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityWithPermit","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapETHForExactTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactETHForTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactETHForTokensSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForETH","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForETHSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForTokensSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"amountInMax","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapTokensForExactETH","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"amountInMax","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapTokensForExactTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]'
	  );
  },
  "07b2": function (e, t) {
    e.exports =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAoCAYAAACFFRgXAAAD5klEQVRYR9WZWcivUxTGf48xU86NYyqdxIU7yTzeOBGHyHxHOYbIVG6QjJekzEMHUUgyn9NBXJgSEmXI0EkyhEwhhEfP136/3u8/fO/+D1/5r9t3Dc9ee++1nrVfMabY3g5YBRwC7AzsCOwEbA18A3wFfA18AjwDvCbp3zHDzZtpFAe2twLOAk4ADgA2GsH++wL8HkmvjmC3QLUKsO1NgNXAlcAO4wZr2T0FXCbp/VF9dQK2fRBwL7D7qM479HM87gYukvRHre9FAds+E7gV2KzW4Rh6bwLHS/qyxnYgYNsbAzcB59c4mYJOLmdAv9HlaxjggL2wy3jK338G9pf00WJ++wDbThW4c8pgat19Cuwn6YdhBgsA2z4MeB7YtDbCEui9BKyU9M8g3/OAbQdkysy0q8E4azpb0l1dgM8DbhnH+xLYpFPuJum3Xt9zGba9DfAZkHb7f5GrJF09DPAlwA1LjDTZerQ0odTc1zsS9AuwXNKfbVxNhl8GDl4iwOEN6ZSPSPq1iWH7HWDPjpirJD27ALDt5YVVjUJkutYWpvYAsEbSx73KhZskg1t0OApRCoeZF5X2m54+qfwFPB2QwPqmLNlOIhL0RUmhmrkzewFvVwT8NrS1TUsD+HbgnArjYSrvlS1/UFIo5LwUYOEid0i6v3UcEi9xa2SFpM8bxQB+Eji2xrKl8yPwUNnyvkzZDom/FjgDOEXS+p6F5EyfXhnzQEm5oHMSwGFLe1cYhw6+ULL5eO/tbWXvOODmwvCOkjRoQR8Ae1TEjMqJkh5rA84FyXgzTH4qzC0X6IthSrZ3KUCzW+EER0pKbV8gtrcFskOdXLwYXiApCZjPcGpiZrFhssBgAIBQ0TC7a4CMUNmxoyV9N8ih7cMLX6lMMH2Au45ESEgI0ROpApKyI3Nie9/C7Jp6ug44aVBLbdlcDlxXi3bQkRjl0rlkMDbZlXNbg+h9KV+S/l4MjO3Mc8eMALjv0k1a1hL7eklX1ICwHWKzfY1u0ekra5nbJmkcGyTtWgPA9gpgQ41u0RnYOCZtzW9J2qcGhO2TwylqdItOf2sul2cS8vOcpCOKn7wCLZOUFt0ntsMIwwxrJdVmbVu5YWsXAzfWeunRe1jSabZXlkqyZanHl/Y2F9uvAHnnqJFF6eUkBP620gHTqjdvIXkXOLWZgkdgaI2L4QS+bOe4I9LvQLI6SELaU/jXjNgwFh+RCuClHEI/LO1/Wc1ZALqH0AJ6dsb8ZuUz9ZDSAj07T1XlaMzWY2Ar07Px3Nq+yTP1oN3K9Oz8MujJ9mz8lBlCZJrfXocWMh9Cn9mw+e2VV/VMJ1P97fUfe6SSOFvlIjsAAAAASUVORK5CYII=";
  },
  "092d": function (e, t, n) {},
  "0dcc": function (e, t, n) {
    e.exports = n.p + "img/h5_success.b97a70d1.gif";
  },
  "0e0b": function (e, t) {
    e.exports =
      "data:image/png;base64,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";
  },
  "131d": function (e, t) {
    e.exports =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAARESURBVFhHzZlLKH1BHMcHeUaSZ/IoRWw88kghWSDJho1Hwk6UUh6pm2JlYWMhhfJ+lIWdshGRKHksrsfiEgtCEpE85z+/ub/LGWfOff3PLZ/6dmbO/GZ+v5l75szMuW6UQf4w7nh1mN3dXTI5OUkKCgqIj48PcXNzE+Tv709KS0vJ/Pw8MRqNWMsJYATt5e3tjQ4ODtLo6GgYdYeUmJhIp6ensSX7sTvA8fFxGhgYKHXuiKKioujS0hK2ahu7AszMzJQ6+x8VFhZi69axGuDl5aW0cb3k7u5OX15e0JsczQD39vakjbpCJpMJvaqRBnh0dCRtyJW6urpC7yKqAGHIAwICVA1ERESo7jmryMhI1T2Y5TJUAZaXl6sqp6Wl8bLj42Pa0dFBvby8VDa2BG+A/v5+en5+Tj8/P6WD0NTUxP0oEQJcWVlRVQK1tLSgxQ/Nzc28rKioiBoMBjoyMkJHR0e5IN3Z2Ulzc3O5TW9vL9b6oaqqSvBh0enpKVqYEQIMDw+XVhoeHkYL/Whra5P6ys7ORgsz30sde3mS6+trzIl8fX1hSj9gOZSxtbVFDg4OMMfAQGlqaqq0R6Camhq00o/i4mKpL1BFRQVa4Qg+Pj6S/f19SEqJiYnBlH4EBQVhSs3i4iKmGBDlwsKCtCeg0NBQ3hNXIPNn0fr6OrfhI7i5uQkXKX19fZjSn56eHkyp+X4OIcqMjAxpL0Cu5P7+XuoTVFdXx214BB4eHlIjkKuR+QSlpKTwcv4Tszc7XP4UbMXhV6e3/K7m6emJX/9sgMHBwfzKA/T19eUZGVqrix6srq5iSg079/ArD5DNYp6RMTU1hSn9EV7Iv2BrsjkBM6W7u1s6k0BsqPlscgUyfxYNDQ1xG5sjeHd3RyYmJjCnH11dXZiSk5WVZU5AlB8fH9JeKLWxscF7pAdwhJX5sMjb2xstFfvBnJwcqbFSra2taO089fX10raVUu6svwPc2dkRjCzA1kd5H9TY2EjZA05fX1/56Gvx/v5O2fuMsonGt2y/29HS2dkZtqAIEEhPTxcMjUYjvw8jp7yv1O3tLbeR4czRtaysDGubEQI8PDxUVbAQHx+vKmtvb8dSbbTOHlq6ubnBmmaEAAH4/ZUVamtr+X34ueATiKenJ3+Iw8LC6Pb2Ni+zxsDAgNCeNYHtb1QBAklJSUJFJXDAhk8i9jIzMyO0paW8vDysISINEEYLRslSOTY2FkscZ3Z2VghEppCQELRWo/mFFXYT7HCNOTPsoEPy8/N5+uHhgbDni7B9G89rMTc3R6qrqzGnxs/Pjzw/P2NOAg/TCtA7MJNpbW0NrbSxNoJxcXFopY3N7RZ7jZCGhgbMiWidbe3BYDAQk8mEOStgoDaBGZuQkCCMwPLyMpZqMzY2JtRJTk6mJycnWGobuwO0wPZwtKSkhDuDVcIWFxcX3LayspKvVo7yx/+GIOQfyHYnQsDgtZgAAAAASUVORK5CYII=";  },
  1470: function (e, t) {
    e.exports =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAclBMVEUAAACBj7eAj7aAj7aAj7aHlLyAjraTl7+Bj7WAjraAjrWDkreAjraAj7aCj7WDj7eSpMSPkr6BjrWBj7aBj7aCj7aCj7eEkriBjraBjraBj7aAjraCkLiBkLeBjrWBj7aAj7aBkbeDkLeFj7mCk7eAjrXwTUW2AAAAJXRSTlMAf/S/1BelDOjZgyL5q3JSCBDieW1lXSXLsZiRVz/wqaBRSDEuuv7eWAAAAVBJREFUOMudVenSgyAMjIAoarWt9/V9vXj/VyxemIoO0+4PxtlZTEw2ET4RxpwKQgTlcQiHcAMmEVjg7so8h8gNiOOZusSXO/CTrc6RB3AA43yShzidkRDrTKUR1xo9kRYkc118m9D3UGB7cJfYhWToUSAPcHXKfHkOlJDtqiLeA8BL9x0g3JNV2QUGdJoJITZUf+1zSD1VR6vJGPhGRruxZUVVqpNqmgP9zH+ya0mZO1iArPdBrPn/P2aLpBEdc3xKDQFkeZnKf0LPZD05JkeV1MLHLLs0UjYw4Ya+EIQOXAyv7HzkFoZDU1RkmtXqzPUU4WIY5YnusKBHNDcKzkEjRXRstLAFjRrRIQAzrJeXk/C6ssy0WaYikmI0KmID07jFePHmAdyxcc1RmK+JFzQ4n+Phiio8XN+Nq30BfLlS7Evqh7VnX6T21fzzsrf/Pt4xB5Pgb9PVgwAAAABJRU5ErkJggg==";
  },
  "1d805": function (e, t) {
    e.exports =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAARVBMVEUAAAD////////////////////////////////////////////////////////////MzMzOzs7z8/Pe3t719fXY2Nj6+voleSlBAAAAD3RSTlMADMXG9+HbrqWcgTFGAkf28X3oAAABI0lEQVRIx53W25LCIAyA4fRMD+4GaX3/R93MVo0zzK9jckGZ0s9gQYNYrPPYD9Mmb2Obhn6c1//+Zfk9IzUMmnR/aLmIiIl7tA2K9vnQIrLaxQ0Kj1Vma28lH/tpWOxHLje7zjJaW1Q1X09D4ppVtVhnlN7arLVx0T2FZuv1Mlh7KBvPYXFYd5DJ2j2/mK6hHJp360+y+S3PU+fw4U0kVTe7xnNUg8k/qDIuqimAYYGGBRsUbFCwQcGGBSwBCza0vGy0FIUcbBRygCHBxomLD6Y8REHxmUQnFv/68ZfMS+kmsmEi2zKy+YM/MRZdi4b/LsCwECHDgg0P8FD6bspJ5OfrYuEliV5/VZIChQ/Ka228vAaKeOCoEDiQBI49gcNV4Aj3B7OFVqNHEYGQAAAAAElFTkSuQmCC";
  },
  "236d": function (e, t, n) {},
  2395: function (e, t, n) {},
  "23ac": function (e, t) {
    e.exports =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAnFBMVEUAAAAB0KsB0KsB0KoE0awB0KoH06wB0KoC0aoI060B0KsD0asC0KsC0asE0qwB0KsC0asC0KsE0qsL1a0Z37QB0KsB0KoC0KsD0awD0KsG0q0i3boD0asD0asE0awI060O1bJA/78B0KsC0KsF060B0KoB0KsC0KsC0KsC0KsD0KsB0KoC0KoC0asD0asT2KwC0KsC0KsC0KsBz6r9H5LKAAAAM3RSTlMA+fXwQOklr2cc7UuWazblmnBEFgq+s3ZZViwHT0c8IBEE2Z4wz7iokoRSyKSJYA1/eoyqIUPoAAACaElEQVRIx82X2XqqMBCAAyibKOAKimLRqiDaevL+73a+ZmGgo5DSm84VDPm/ZJbMDOSvyds6/gzOSyvIw2L2I3JvWwatSRZEG0V0YmkUiXtLFVDzTF+I1YXPPNgVif5oPfzApa2SHV+zdm1bbXHIx0VhP7z3Gj38EEs3UbhuRMer1hjnaF9zfgIujLkqzSjV7jX2VNn2+UG+iZPr/FvBWZ+tg2WBPK/3NClS6+ujP2cR8fnSygNjadWOvJDR1T2ZwNZ2ngqr3h3SLsDSsbRJxGg5V2cfUnMQ+3az66FgV5VG2Ov0YMmS+3mizoaQlVzxrw9LFjyt9l3sUbJj0DnCik7WxSxZcW9tVFlbauDUQS92zpNr1FGcDMSCr3Vx6nSyaWXvoIMrYfF7WVLqD7pYc+kvRE5cmPbGnkN2iO13difZiNnpfwWWl0NLhB1STZ8+ZzXGklhEFpwdy4qA6Z3eYInN3jz2fGXPO37fdEwPJBsLxZ29HhBMtpIePGdh5wAdG9NTyRZESs4Ul4bDJK0BXWMTQpqVI0ehYoWuRm+BBTlBpkGSYLpiG7mbgZMgPTGtPWNNrpw1LwamgUU3OENXEtE4W2VovZZikAga52rK1SNUhhCNWVLyrd5QAUS0zBWQI2Vy6Si9iUGpy1kUZN0hHUXfGduo294ppNRP282Ee8IFC9UbnTNEDUO5xTpitskgqsrNfeKLadAEnepYEclbApFXHWhMi6JO1TVK4bES0kNpiJvZpwrVQvXxMQ5v5ZWCGNtfDK5m75HZeMz7DuvaZdb3N8E4mD1/UIZlNO/xa7QsvVVikr8n/wFc1d3tFkKhgAAAAABJRU5ErkJggg==";
  },
  "23e5": function (e, t, n) {
    e.exports = n.p + "img/pc-success.7dae1245.gif";
  },
  "2a5e": function (e, t, n) {
    "use strict";
    n.d(t, "c", function () {
      return r;
    }),
      n.d(t, "b", function () {
        return s;
      }),
      n.d(t, "a", function () {
        return o;
      });
    n("d3b7"), n("25f0"), n("ac1f"), n("5319"), n("b680");
    var a = n("901e"),
      i = n.n(a),
      r = function (e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 18;
        return new i.a(e).times(new i.a(10).pow(t)).toString(10);
      },
      s = function (e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 18,
          n = e.dividedBy(new i.a(10).pow(t));
        return n.toNumber();
      },
      o = function (e, t, n) {
        var a = 0;
        a =
          "round" == n
            ? Math.round(e * Math.pow(10, t)) / Math.pow(10, t)
            : Math.floor(e * Math.pow(10, t)) / Math.pow(10, t);
        var i = a.toString();
        i.indexOf(".") < 0 && (i += ".");
        for (var r = i.length - i.indexOf("."); r <= t; r++) i += "0";
        return i;
      };
  },
  "2f79": function (e, t, n) {},
  3035: function (e, t) {
    e.exports = Web3;
  },
  "340c": function (e, t, n) {
    e.exports = n.p + "img/h5_pending.8f63d254.gif";
  },
  3809: function (e, t) {
    e.exports =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACFUlEQVRYR+2XMWhTQRzGv+/eSy1oaaJikYJowUWhW0dBcW9txIAgdBBdxMZFXTOJglhTF3WwOIhITFIXETq4Shc7unVREHQQq2hr7j5Ja0Iiab1LKqHQgzfce9//u9/7/+/u3SPaaMnyVPK7zLiggQhcGK3snytkMrYNKzA06ODrmd4PX75ekHN7arFRZOaXT2VfhnpV9UEAuVzO3BjuP+uEw38Pxjh68Wts8m0oRBBAbzl/suLcsbVBjEgtShr607cJcObH6cn3IRDeAD3P7xx15JkG87lxO/hmNv44IdkDa0xcSpq+h5/Hzi/5QjQB9MxOH3FWE6IOtTDYBcGs3icEoDZIBGFnXU8sA6tXQ+MKgYVUKr7/6cSlb01Pap24fO+45F5B2uFLH6oj+C61Ox5phKhnIC7l5yWNhJqG6kleraSzt2txdYComF8BlAg1DNaTT2w6e64FwN1qXf9/Iwo2fSWzRQDIxzTmKaDgbVZWfQRygoabF0RABhKJaOjn6OXFdusSl6avS+5m2wAgCpGJitZZFwphxH4B1wQ1b9tbaw6EvraPfjsDIRkgUTJgwW6wDA3NXieXg7DPpwLVie29Efkuw6iYfwDo4qYDgHxE8hmIdZehcRiwcrcADG4+gJdjoCikBIHWfvL1Abr8Oe76gaTrR7JqAf9xKPWrcUuVx6G0A/eOQr3/CzoaZYPgbYCuZ+A3zqoDMNLrAzsAAAAASUVORK5CYII=";
  },
  4027: function (e, t, n) {
    "use strict";
    var a = function () {
        var e = this,
          t = e.$createElement,
          a = e._self._c || t;
        return a("section", { staticClass: "dialog" }, [
          a("div", { staticClass: "dialog-mark" }),
          a("div", { staticClass: "dialog-box" }, [
            a("img", {
              staticClass: "close-icon",
              attrs: { src: n("c2f4") },
              on: { click: e.close },
            }),
            a("div", { staticClass: "dialog-logos" }, [
              a(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: "loading" === e.type,
                      expression: "type === 'loading'",
                    },
                  ],
                  staticClass: "loading",
                },
                [a("div")]
              ),
              a(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: "success" === e.type,
                      expression: "type === 'success'",
                    },
                  ],
                  staticClass: "img",
                },
                [a("img", { attrs: { src: n("f7bb"), alt: "" } })]
              ),
              a(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: "error" === e.type,
                      expression: "type === 'error'",
                    },
                  ],
                  staticClass: "img",
                },
                [a("img", { attrs: { src: n("96d6"), alt: "" } })]
              ),
            ]),
            "error" !== e.type
              ? a("div", [
                  "loading" === e.type && e.flag
                    ? a("div", { staticClass: "dialog-name" }, [
                        e._v(e._s(e.global.$t("underConfirmation"))),
                      ])
                    : e._e(),
                  e.content
                    ? a("div", { staticClass: "dialog-name" }, [
                        e._v(e._s(e.global.$t("" + e.content))),
                      ])
                    : e._e(),
                ])
              : e._e(),
            a(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: e.title,
                    expression: "title",
                  },
                ],
                class: {
                  "loading-msg": "loading" === e.type,
                  "dialog-status ": "loading" !== e.type,
                },
              },
              [e._v(" " + e._s(e.title) + " ")]
            ),
            a(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: e.msg,
                    expression: "msg",
                  },
                ],
                class: {
                  "loading-text": "loading" === e.type,
                  "dialog-warn ": "loading" !== e.type,
                },
                style: { color: e.warnColor },
              },
              [e._v(" " + e._s(e.msg) + " ")]
            ),
            a(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: "success" === e.type || "error" === e.type,
                    expression: "type === 'success' || type === 'error'",
                  },
                ],
                staticClass: "dialog-button",
                style: { background: e.warnColor },
                on: { click: e.close },
              },
              [e._v(" " + e._s(e.buttonText) + " ")]
            ),
          ]),
        ]);
      },
      i = [],
      r = {
        name: "tipDialog",
        props: {
          type: { type: String, default: "loading" },
          flag: { type: Boolean, default: !0 },
          title: { type: String, default: "" },
          msg: { type: String, default: "" },
          buttonText: { type: String, default: "Close" },
          content: { type: String, default: "" },
        },
        data: function () {
          return { global: window.$v };
        },
        computed: {
          warnColor: function () {
            var e = "";
            switch (this.type) {
              case "success":
                e = "#02C09F";
                break;
              case "error":
                e = "#FF6971";
                break;
              default:
                e = "";
            }
            return e;
          },
        },
        methods: {
          close: function () {
            this.$el &&
              this.$el.parentNode &&
              this.$el.parentNode.removeChild(this.$el),
              this.$destroy();
          },
        },
      },
      s = r,
      o = (n("65dc"), n("2877")),
      c = Object(o["a"])(s, a, i, !1, null, "4f9a4d6a", null);
    t["a"] = c.exports;
  },
  "405d": function (e, t, n) {},
  4313: function (e, t) {
    e.exports =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAFFUlEQVRYR9VZXWgcVRQ+351dkuy2+BBroVqrSVCkFbFV0RcxPolabaNuTbKZmQVBEAW1ghW1TRPwQS3+UiiCc2c3JrrxL+6D6ItW/EMrWl0r1oqUQkuiaaTpGtnszJEbdsNmk925myZVBxYW7nfO+eace8859wxokY+UshXA7b7vbwKwhohKP6XxODOfAKB+XwJ4zzTN3xZjCvUIJZPJ85j5fmbeyswb6pEFkAXwTjgcfrGrq+sPXVktgul0esXU1NR2Zn6EmVfoKq+CmySiZ6LR6HOxWOx0kK5AgslkssPzvL1EtDpIWT3rAMaY+d5EIvFuLbmqBJkZyWRyJzPvUv/rMa6LBcBKfyKR6K8ms6DhdDrdlMvlXCK6S9fYGeKGo9GoFYvFpir1zCOovCWlfOMskitxGk4kErFAgq7r7vJ9v/cMPbJY8Z2V4Z7jQXUgfN9/c7n2XBDr4p7sKD84swRVKsnlckeW+rQGkZoXUmAsEom0llLQLMFlCO0kAAfA10Q0zsxrmXkbEd1YRuokEXlEtKqC6GyoZwgODg6uzufzR6olYQCfEdE5utUDwHeGYdzc09NzotJDUsrHmPk6AK5hGAcLhcJBIopU4CYbGhpaVMWZISil7GfmJ2qEY2tDQ8On+Xz+fWa+KiBsk42Njes7OzuP1cKNjIysnJiY+JCZLyzW8TlwIUS/ZVk7SwSzzLy+arIE2mzb/jWTyUTGx8f3MXO8BvZ527YfCtp7AwMDVzPzqUKh8BQRdSywF3+0bXuDynmtzKwOR9VHCLHRsqxvSwDHcbYAUF6f1zAYhnGTaZofBBE8cOBAOJvN7mXme6phDcNogeu6D/u+v6eWQgCP2rb9dDlGpSLXdVWl2cHMV5bWhBBXWJb1fRBB13X7fN9/MsAxDyoPDjJzZ4DC36PRaEu17mNoaGjN9PT0tcy8JhQKZbq7u48GEZRSvlLLe0oewOuK4EfMfEOAB9NEdGzdunU72tvbC0HGddallKog3BGA3a8I/szMl9QChsPha+LxuMpnS/bo2CWiXxTByaAmFECfbdu7lopdOp1elcvlxoL0ATgNx3FOEdHKgBD/HQqFNsXj8UNBSnXWHce5m4iGNLCTWiEuKjoaCoW6enp6PtdQXBOis++Lh+Sw1iEpWpsGoCrJQCKRGF4sSSnlembO6sgD+FiF+DUi6tIRMAzjNtM0MzrYahgpZYaZb9XUMaiVqMuUHQdwvSp7mgbmwKSUncw8qCsrhNiuVeoqFI4CeDwSiaRisVhe11gqlWrzPO8LZj5XVwZAW6lZ+EG3lSopB/CTEOIWnYlBMpm82PO8/US0tg5yWdu2L58hqFMXy4ipDf5qc3Pzvs2bN/8VZDCVSm30PO8tZr4oCFu+PqfdqtWwAvhECPGC53knDcM4ZJpmYIJVhhzHaSSiXgBqIhGqh5xK0EKIVmVLq+UHcBjAS77vqxTzZy1jKo0QUXexZ9QOaYX3ei3L2j2TC0sLmpcmlQtVK/WVmmAR0QQzrwRwPhFdQESXMvNl9XhrAexoNBptm3dpUsD/wrVTCHGnaZpvz+75yjdYhtudtkOFELOhrUrw3xx92La9TV3ey9/o/zc8KrE/W+M3ALtN0+yr9FzVEFdumOUaYBLRqGEY95UfiIU2q9ZgcilHwDNdMvBsU1PTniUZAZe/lRqi+77/ABFtWUTtnhmiA3hZtxrNSdTauaAIDPoMUfwUcVwI8Q0zjyy2RfsHW4GYTyBViroAAAAASUVORK5CYII=";
  },
  "47c5": function (e, t) {
    e.exports =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAB8klEQVRYR+2Xv2tTYRSGn/dGibaKQoIpCNIWXFR0usVBseDm5mBBEDrpf6CuGRWcRR0UBxEJCi6l0KGOkog6ulVQB0m22qGh9zuSGENCaHrPTSEUerd773nf83C+X+cTGR5bnT7O5MZ1oAR85fv8ihYqSQYr5BXZ6vQhJjZugxW62khVxfUlr1cr3gVg5XLEtcc3sXB6IFmk94rrX7wQPoBq6SqWXO4kMaJojRBm2+8iIeRf6OKvnx6I1ABWnTqLbd3omodohR9XPjLzYZFgpzoQ6zR5pkuN9bQQfQD2eeoMydYiMDNgYBwBi/59lyE6SSyHMdmNF5ugzT690WxP1gk90bn6n95/XQCrFeeBZczyaendcdI3DivuhegFqGIWu03dAt3VXOPRf1kPQKGJcdDt5xboleYatwYBqgVze2URSBXFjYU9A/CSXO41Af82G3GUEMqYne8rlKsC+QOzuvB7LUulWxr7VLhP4EF2AKmC6S0RwQ9hxwjcA+vftl0V8GfdWbEPsLcqIN6BKkhDlmEoElQGO7HzBGidY56NKOUytFrxKWZ3dh9APEe5N9iQZRiFEok9BE7uPkAqR2eQawic3qnCtwWojfs4rhXH3ZCMuSVrn17DmtJUA7xNUJqmdBT/UbSp7wWjJBmm3QcYewX+AnWt6SEcENFcAAAAAElFTkSuQmCC";
  },
  "4c2a": function (e, t, n) {},
  "4c8d": function (e) {
    e.exports = JSON.parse(
	'[{"inputs":[{"internalType":"address","name":"_factory","type":"address"},{"internalType":"address","name":"_WETH","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"WETH","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"amountADesired","type":"uint256"},{"internalType":"uint256","name":"amountBDesired","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"addLiquidity","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"},{"internalType":"uint256","name":"liquidity","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amountTokenDesired","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"addLiquidityETH","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"},{"internalType":"uint256","name":"liquidity","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"reserveIn","type":"uint256"},{"internalType":"uint256","name":"reserveOut","type":"uint256"}],"name":"getAmountIn","outputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"reserveIn","type":"uint256"},{"internalType":"uint256","name":"reserveOut","type":"uint256"}],"name":"getAmountOut","outputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"}],"name":"getAmountsIn","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"}],"name":"getAmountsOut","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"reserveA","type":"uint256"},{"internalType":"uint256","name":"reserveB","type":"uint256"}],"name":"quote","outputs":[{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidity","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidityETH","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidityETHSupportingFeeOnTransferTokens","outputs":[{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityETHWithPermit","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityETHWithPermitSupportingFeeOnTransferTokens","outputs":[{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityWithPermit","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapETHForExactTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactETHForTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactETHForTokensSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForETH","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForETHSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForTokensSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"amountInMax","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapTokensForExactETH","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"amountInMax","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapTokensForExactTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]'
	  );
  },
  "4e15": function (e, t) {
    e.exports =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAflBMVEUAAACAj7aBj7eAj7WAj7aBj7aTlcCAjraBjraEkreDj7eJlLqBj7aAjraCj7WUo8eDlLqDj7aEkLeBj7aBjraBjraAj7aAj7aCj7aCkLeDkLeKl72AjraBjreCj7aqqsyAjraAj7aAj7eAjrWBjrWBkLeBkLeDj7eEkbmAjrUY/+bsAAAAKXRSTlMA837TwOkM2asjUheCpXIJIE8r+uHLsZJqVzMUp4l4Be3lm4NvX0hAOsgcxrQAAAFmSURBVDjLnZXZkoMgEEVbRQngFk3UbGbPDP//gxONNCha1OQ8dbw3NkUvwhiWJoR6HiXHRw6LiDiQBkF8mLVFvicneH5k+3goZwjXU58vF/DBJFvJRVYZaNA367TyOrNz6WA93EvoMobRYmKvfr4a8g4uISYXwz2TwCiKgI624qxXva5Gd3WQwxbfl2O5ttf+SfyO1YsYZMkQ1qDYF6tPCgCmXrMHgPXnXy80nm+DmkOqjG2v7Lr8BRpjpT4gmdwBCN7oVrwp9QgEw9MZdbu2BKg+o41WKWC3xmBz0BXQxrKwjTvDSDHe/FpGgiI14rLaTXyFRAgkVjdpKq0lkErkyqwTIikws++e5lWyiyExgPHQ66LkG/N5X079M81035g+GevGJfxHAJKdylHDC2MUaBPhtZw21hyaw1Vua79p6ypYGC73uPL/LQD3SvliSbnXnnuR8m9WMyLuk2UvLIv9+UhSNlb+AF3Vj00PfUAxAAAAAElFTkSuQmCC";
  },
  "4f22": function (e, t, n) {
    "use strict";
    n.d(t, "i", function () {
      return m;
    }),
      n.d(t, "h", function () {
        return A;
      }),
      n.d(t, "g", function () {
        return f;
      }),
      n.d(t, "e", function () {
        return h;
      }),
      n.d(t, "b", function () {
        return y;
      }),
      n.d(t, "c", function () {
        return b;
      }),
      n.d(t, "d", function () {
        return g;
      }),
      n.d(t, "a", function () {
        return C;
      }),
      n.d(t, "f", function () {
        return w;
      });
    var a = n("1da1"),
      i = (n("96cf"), n("99af"), n("fb6a"), n("d3b7"), n("25f0"), n("3035")),
      r = n.n(i),
      s = n("901e"),
      o = n.n(s),
      c = n("8c3f"),
      d = n("837b"),
      u = n("9c45"),
      l = null,
      p = "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
      m = function (e, t, n) {
        var a =
          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : p;
        try {
          sessionStorage.setItem(
            "Allowanc-"
              .concat(e.slice(0, 10))
              .concat(t.slice(0, 10))
              .concat(n.slice(0, 10))
              .concat(m.slice(0, 10))
              .concat(o.slice(0, 10))
              .concat(y.slice(0, 10)),
            a
          );
        } catch (i) {
          console.log("setLocalAllowance:", i);
        }
      },
      A = function (e) {
        return r.a.utils.isAddress(e);
      },
      f = function (e, t, n) {
        return sessionStorage.getItem(
          "Allowanc-"
            .concat(e.slice(0, 10))
            .concat(t.slice(0, 10))
            .concat(n.slice(0, 10))
            .concat(m.slice(0, 10))
            .concat(o.slice(0, 10))
            .concat(y.slice(0, 10))
        );
      },
      h = (function () {
        var e = Object(a["a"])(
          regeneratorRuntime.mark(function e(t, n, a) {
            var i,
              s,
              o,
              c = arguments;
            return regeneratorRuntime.wrap(function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (
                      ((i = c.length > 3 && void 0 !== c[3] && c[3]),
                      (s = window.ethereum || window.web3.currentProvider),
                      (l = l || new r.a(s)),
                      !i)
                    ) {
                      e.next = 5;
                      break;
                    }
                    return e.abrupt(
                      "return",
                      new l.eth.Contract(n, t, { from: a })
                    );
                  case 5:
                    if (!a) {
                      e.next = 12;
                      break;
                    }
                    return (e.next = 8), l.eth.getGasPrice();
                  case 8:
                    return (
                      (o = e.sent),
                      e.abrupt(
                        "return",
                        new l.eth.Contract(n, t, { from: a, gasPrice: o })
                      )
                    );
                  case 12:
                    return e.abrupt("return", new l.eth.Contract(n, t));
                  case 13:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        );
        return function (t, n, a) {
          return e.apply(this, arguments);
        };
      })(),
      y = (function () {
        var e = Object(a["a"])(
          regeneratorRuntime.mark(function e() {
            var t, n;
            return regeneratorRuntime.wrap(function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (t = window.ethereum || window.web3.currentProvider),
                      (l = l || new r.a(t)),
                      (e.next = 4),
                      l.eth.getAccounts()
                    );
                  case 4:
                    return (n = e.sent), e.abrupt("return", n);
                  case 6:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        );
        return function () {
          return e.apply(this, arguments);
        };
      })(),
      b = (function () {
        var e = Object(a["a"])(
          regeneratorRuntime.mark(function e(t, n, a) {
            var i, r;
            return regeneratorRuntime.wrap(function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), h(t, c);
                  case 2:
                    return (
                      (i = e.sent),
                      (e.next = 5),
                      i.methods.allowance(n, a).call()
                    );
                  case 5:
                    return (r = e.sent), m(t, n, a, r), e.abrupt("return", r);
                  case 8:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        );
        return function (t, n, a) {
          return e.apply(this, arguments);
        };
      })(),
      g = (function () {
        var e = Object(a["a"])(
          regeneratorRuntime.mark(function e(t, n) {
            var a,
              i,
              r,
              s = arguments;
            return regeneratorRuntime.wrap(function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (a = s.length > 2 && void 0 !== s[2] ? s[2] : 18),
                      (e.next = 3),
                      h(t, c)
                    );
                  case 3:
                    return (
                      (i = e.sent), (e.next = 6), i.methods.balanceOf(n).call()
                    );
                  case 6:
                    return (
                      (r = e.sent),
                      e.abrupt(
                        "return",
                        new o.a(r).div(new o.a(10).pow(a)).toString(10)
                      )
                    );
                  case 8:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        );
        return function (t, n) {
          return e.apply(this, arguments);
        };
      })(),
      C = (function () {
        var e = Object(a["a"])(
          regeneratorRuntime.mark(function e(t, n, a) {
            var i;
            return regeneratorRuntime.wrap(function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), h(t, c, n);
                  case 2:
                    return (
                      (i = e.sent),
                      e.abrupt(
                        "return",
                        i.methods.approve(a, p).send({ from: n })
                      )
                    );
                  case 4:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        );
        return function (t, n, a) {
          return e.apply(this, arguments);
        };
      })(),
      w = function (e, t, n) {
        var i = d["a"][e][t][n],
          r = u["a"][e][t];
        return {
          fetchLPAllowance: function (e, t) {
            return Object(a["a"])(
              regeneratorRuntime.mark(function n() {
                var a, r;
                return regeneratorRuntime.wrap(function (n) {
                  while (1)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (n.next = 2), h(e, c);
                      case 2:
                        return (
                          (a = n.sent),
                          (n.next = 5),
                          a.methods.allowance(t, i).call()
                        );
                      case 5:
                        return (
                          (r = n.sent), m(e, t, i, r), n.abrupt("return", r)
                        );
                      case 8:
                      case "end":
                        return n.stop();
                    }
                }, n);
              })
            )();
          },
          fetchLocalAllowance: function (e, t) {
            return f(e, t, i);
          },
          saveLocalAllowance: function (e, t) {
            var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : p;
            m(e, t, i, n);
          },
          getStakeValue: function (e, t) {
            var n = arguments;
            return Object(a["a"])(
              regeneratorRuntime.mark(function a() {
                var s, c, d, u;
                return regeneratorRuntime.wrap(function (a) {
                  while (1)
                    switch ((a.prev = a.next)) {
                      case 0:
                        return (
                          (s = n.length > 2 && void 0 !== n[2] ? n[2] : 18),
                          (a.next = 3),
                          h(i, r)
                        );
                      case 3:
                        return (
                          (c = a.sent),
                          (a.next = 6),
                          c.methods.userInfo(e, t).call()
                        );
                      case 6:
                        return (
                          (d = a.sent),
                          (u = d.amount),
                          a.abrupt("return", new o.a(u).div(new o.a(10).pow(s)))
                        );
                      case 9:
                      case "end":
                        return a.stop();
                    }
                }, a);
              })
            )();
          },
          despoitValue: function (e, t, n) {
            var s = arguments;
            return Object(a["a"])(
              regeneratorRuntime.mark(function a() {
                var c, d, u;
                return regeneratorRuntime.wrap(
                  function (a) {
                    while (1)
                      switch ((a.prev = a.next)) {
                        case 0:
                          return (
                            (c = s.length > 3 && void 0 !== s[3] ? s[3] : 18),
                            (a.prev = 1),
                            (a.next = 4),
                            h(i, r, n)
                          );
                        case 4:
                          return (
                            (d = a.sent),
                            (u = new o.a(t)
                              .times(new o.a(10).pow(c))
                              .toString(10)),
                            a.abrupt(
                              "return",
                              d.methods.deposit(e, u).send({ from: n })
                            )
                          );
                        case 9:
                          (a.prev = 9),
                            (a.t0 = a["catch"](1)),
                            console.error("despoitValue", a.t0);
                        case 12:
                        case "end":
                          return a.stop();
                      }
                  },
                  a,
                  null,
                  [[1, 9]]
                );
              })
            )();
          },
          approveToken: function (e, t) {
            return Object(a["a"])(
              regeneratorRuntime.mark(function n() {
                var a;
                return regeneratorRuntime.wrap(function (n) {
                  while (1)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (n.next = 2), h(e, c, t);
                      case 2:
                        return (
                          (a = n.sent),
                          n.abrupt(
                            "return",
                            a.methods.approve(i, p).send({ from: t })
                          )
                        );
                      case 4:
                      case "end":
                        return n.stop();
                    }
                }, n);
              })
            )();
          },
          getReward: function (e, n) {
            var s = arguments;
            return Object(a["a"])(
              regeneratorRuntime.mark(function a() {
                var c, d, u;
                return regeneratorRuntime.wrap(function (a) {
                  while (1)
                    switch ((a.prev = a.next)) {
                      case 0:
                        return (
                          (c = s.length > 2 && void 0 !== s[2] ? s[2] : 18),
                          (a.next = 3),
                          h(i, r)
                        );
                      case 3:
                        return (
                          (d = a.sent),
                          (a.next = 6),
                          d.methods.pending(n, e).call()
                        );
                      case 6:
                        if (((u = a.sent), "liquidity" != t)) {
                          a.next = 11;
                          break;
                        }
                        return a.abrupt(
                          "return",
                          new o.a(u[0]).div(new o.a(10).pow(c))
                        );
                      case 11:
                        return a.abrupt(
                          "return",
                          new o.a(u).div(new o.a(10).pow(c))
                        );
                      case 12:
                      case "end":
                        return a.stop();
                    }
                }, a);
              })
            )();
          },
          unStake: function (e, t, n) {
            var s = arguments;
            return Object(a["a"])(
              regeneratorRuntime.mark(function a() {
                var c, d, u;
                return regeneratorRuntime.wrap(function (a) {
                  while (1)
                    switch ((a.prev = a.next)) {
                      case 0:
                        return (
                          (c = s.length > 3 && void 0 !== s[3] ? s[3] : 18),
                          (a.next = 3),
                          h(i, r, n)
                        );
                      case 3:
                        return (
                          (d = a.sent),
                          (u = new o.a(t)
                            .times(new o.a(10).pow(c))
                            .toString(10)),
                          a.abrupt(
                            "return",
                            d.methods.withdraw(e, u).send({ from: n })
                          )
                        );
                      case 6:
                      case "end":
                        return a.stop();
                    }
                }, a);
              })
            )();
          },
          emergencyWithdraw: function (e, t) {
            return Object(a["a"])(
              regeneratorRuntime.mark(function n() {
                var a;
                return regeneratorRuntime.wrap(function (n) {
                  while (1)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (n.next = 2), h(i, r, t);
                      case 2:
                        return (
                          (a = n.sent),
                          n.abrupt(
                            "return",
                            a.methods.emergencyWithdraw(e).send({ from: t })
                          )
                        );
                      case 4:
                      case "end":
                        return n.stop();
                    }
                }, n);
              })
            )();
          },
        };
      };
  },
  "4f3e": function (e, t) {
    e.exports =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAflBMVEUAAACAj7aAj7aAjrWAj7WBkLeAj7aBj7eBj7aElr2Ll7qLormEkreAjraBjraCj7WVlb+Llb2WpMWDj7eAj7aCkLaBj7aDkLimpsyBj7aBj7eBj7aBj7eCkLeDkLiBjrWAj7WBjraCj7eCkLaDkbaDkbeDkLmAjrWCjreAjrVJ5j29AAAAKXRSTlMAo/To02O/f4MbFgsj2apyDBAIUp1+bTkFs5SMW1BA7t/McGtLLyjFeDL2nucAAAFvSURBVDjLlZXreoIwDIbTUgtyEPAIU1Cnbuv93+BoCpQUGez7Y/PklZBDA1DFKZMJ54lkaQyTCgOhBhJB+BaLDlw54n425ipPvZG3c7mDmpBPsO1GTWqzBSvKueR8XDd6pWbUZhR5c6CX2cCiAJTsvUdAffTBQ1PnPaCefbFztANjhHg0+jRk10WG1rG1goFHfaFr1VontFjXd4BYdVqhq/BaDwFVDKkFTQt+TCpbCqbALLiutC/nmMqFggzkAPxG5xlrICkoIRmAJoO1TqX2KJgAH4Jl6xXAHJBT0JTopR45d0ESuutPmT/UKLQkIA8xcRAuKEl5sFdaJ+WCDFIKXnGi9iMwHbTwknezkfERGNuhEBHO3q3AwXBAYcfsGgMUUj8Y4N78lHTM7ODWOMQ3/eeXzjKCvp9dMXx9PEeoujk+mze495d5b+9htvRywW7ZdcXgf8pfulL+t6Rmo/vgaDezSK0yf2Y1L1z2iz8fvwR8ksp1MMKjAAAAAElFTkSuQmCC";
  },
  "50f3": function (e, t, n) {},
  "551e": function (e, t) {
    e.exports =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAflBMVEUAAACiosqAjraAj7aBj7aAj7aBj7aAjraBj7aGlLmDkLeFkriAj7aAj7aBj7aAj7aCj7aCkbaSl8GCj7aBj7aBj7eCj7aKk7+Bj7aAj7aBj7aCkLeCj7iAjraBjraBj7aBkLeBjraBj7aDj7eGkLqAj7WBj7aGlbuBj7iAjrVPUuWRAAAAKXRSTlMABfjz6KjcyaEcOim7kYqFd1gMcWhdRRDBtJlJP9TNbWKvfDUY7+whS4IcTusAAAGoSURBVDjLhZTZmoIwDIXTQoHKLoqyDOI+ef8XHGtTZKDIf9OaHtucJB/wnzATR8+5/0TBTsIiMvFwhJ9trbJDwnGCe2Jz3f6BFrzNVJegHd7DmG2Fi8RjIenspOvvEvvBB36HX6kuD1zBnz3siNOF613W1/chnr/7wQdZcbtEwSVv2ia/BFVxODmmnGx8oS+b/gkfnvtW/oyuHPq7OUwbxrYNnQmA8JOxDbrSYZAh0VuFJzotQZhiLcwUWc3gSMIK7FTU8cHLTsfbInyvG1phZ9yYUoUmzNUuf616FMnsEe5ki0zSXKmEAh1yUREZ/52O+jRWEQn1Vv2gFc862nD0bipFB11KMkZFAgHSPzSy1GW6lQcdoEIXxlWtYlc6JLYlG2xfQZIrFWNp/ctMn5s6uA1Pu5S/svV+Mjw7vkiLVHRO1771sXlwaLa7Y694h4aHVPX0qNUqExeNVKRn/NClwhz5NCCrtDptb013Bs2Gf9e5Eogel6HpIOL1DwWRLt9HOsOeL+Q3+0BefZuukjAnn5XJb8EKy4UzerQuYRlWZrE4RkFSTHP7A8eZisXTfgrWAAAAAElFTkSuQmCC";
  },
  "553e": function (e, t, n) {
    e.exports = n.p + "img/HVINE.32d0d749.png";
  },
  "56d7": function (e, t, n) {
    "use strict";
    n.r(t);
    n("1951"), n("450d");
    var a = n("eedf"),
      i = n.n(a),
      r = (n("5466"), n("ecdf")),
      s = n.n(r),
      o = (n("38a0"), n("ad41")),
      c = n.n(o),
      d =
        (n("e260"),
        n("e6cf"),
        n("cca6"),
        n("a79d"),
        n("b0c0"),
        n("e811"),
        n("77ed"),
        n("8bbf")),
      u = n.n(d),
      l = n("a925"),
      p = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "div",
          { attrs: { id: "app" } },
          [
            n("AHeader"),
            n(
              "transition",
              [n("router-view", { staticClass: "router-view" })],
              1
            ),
            n("AFooter"),
          ],
          1
        );
      },
      m = [],
      A = n("1da1"),
      f =
        (n("96cf"),
        n("ac1f"),
        n("1276"),
        n("5319"),
        function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a(
            "header",
            {
              staticClass: "header",
              class:
                "/" == e.routerName && "Bsc" == e.chainName
                  ? "Bsc-home"
                  : e.chainName,
            },
            [
              e.showSet
                ? a("div", { staticClass: "header-tip" }, [
                    a("div", { staticClass: "h-tip-body" }, [
                      a(
                        "div",
                        {
                          staticClass: "close",
                          on: {
                            click: function (t) {
                              e.showSet = !1;
                            },
                          },
                        },
                        [a("img", { attrs: { src: n("1d805"), alt: "" } })]
                      ),
                      a("div", { staticClass: "h-view-set" }, [
                        a("div", { staticClass: "selete-language" }, [
                          a(
                            "div",
                            {
                              staticClass: "sele-info ",
                              class: {
                                left: "en" !== e.$i18n.locale,
                                "left-select": "en" === e.$i18n.locale,
                              },
                              on: {
                                click: function (t) {
                                  return e.changeLanguage("en");
                                },
                              },
                            },
                            [e._v(" English ")]
                          ),
                          a(
                            "div",
                            {
                              staticClass: "sele-info ",
                              class: {
                                rigth: "en" !== e.$i18n.locale,
                                "rigth-select": "en" === e.$i18n.locale,
                              },
                              on: {
                                click: function (t) {
                                  return e.changeLanguage("en");
                                },
                              },
                            },
                            [e._v(" 中文 ")]
                          ),
                        ]),
                        a("div", { staticClass: "show-img-info" }, [
                          a("div", [
                            a(
                              "a",
                              {
                                attrs: {
                                  href: "https://github.com/EmevineFinance",
                                  target: "_blank",
                                },
                              },
                              [
                                a("img", {
                                  directives: [
                                    {
                                      name: "show",
                                      rawName: "v-show",
                                      value: "Heco" == e.chainName,
                                      expression: "chainName=='Heco'",
                                    },
                                  ],
                                  attrs: { src: n("b70b"), alt: "" },
                                }),
                                a("img", {
                                  directives: [
                                    {
                                      name: "show",
                                      rawName: "v-show",
                                      value: "Bsc" == e.chainName,
                                      expression: "chainName=='Bsc'",
                                    },
                                  ],
                                  attrs: { src: n("131d"), alt: "" },
                                }),
                                a("span", [e._v("Github")]),
                              ]
                            ),
                          ]),
                          a("div", [
                            a(
                              "a",
                              {
                                attrs: {
                                  href: "https://emevinefinance.medium.com/",
                                  target: "_blank",
                                },
                              },
                              [
                                a("img", {
                                  directives: [
                                    {
                                      name: "show",
                                      rawName: "v-show",
                                      value: "Heco" == e.chainName,
                                      expression: "chainName=='Heco'",
                                    },
                                  ],
                                  attrs: { src: n("4f3e"), alt: "" },
                                }),
                                a("img", {
                                  directives: [
                                    {
                                      name: "show",
                                      rawName: "v-show",
                                      value: "Bsc" == e.chainName,
                                      expression: "chainName=='Bsc'",
                                    },
                                  ],
                                  attrs: { src: n("7913"), alt: "" },
                                }),
                                a("span", [e._v("Medium")]),
                              ]
                            ),
                          ]),
                          a("div", [
                            a(
                              "a",
                              {
                                attrs: {
                                  href: e.getTelegram,
                                  target: "_blank",
                                },
                              },
                              [
                                a("img", {
                                  directives: [
                                    {
                                      name: "show",
                                      rawName: "v-show",
                                      value: "Heco" == e.chainName,
                                      expression: "chainName=='Heco'",
                                    },
                                  ],
                                  attrs: { src: n("1470"), alt: "" },
                                }),
                                a("img", {
                                  directives: [
                                    {
                                      name: "show",
                                      rawName: "v-show",
                                      value: "Bsc" == e.chainName,
                                      expression: "chainName=='Bsc'",
                                    },
                                  ],
                                  attrs: { src: n("86fa"), alt: "" },
                                }),
                                a("span", [e._v("Telegram")]),
                              ]
                            ),
                          ]),
                          a("div", [
                            a(
                              "a",
                              {
                                attrs: {
                                  href: "https://twitter.com/emevinefinance",
                                  target: "_blank",
                                },
                              },
                              [
                                a("img", {
                                  directives: [
                                    {
                                      name: "show",
                                      rawName: "v-show",
                                      value: "Heco" == e.chainName,
                                      expression: "chainName=='Heco'",
                                    },
                                  ],
                                  attrs: { src: n("4e15"), alt: "" },
                                }),
                                a("img", {
                                  directives: [
                                    {
                                      name: "show",
                                      rawName: "v-show",
                                      value: "Bsc" == e.chainName,
                                      expression: "chainName=='Bsc'",
                                    },
                                  ],
                                  attrs: { src: n("4313"), alt: "" },
                                }),
                                a("span", [e._v("Twitter")]),
                              ]
                            ),
                          ]),
                          a("div", [
                            a(
                              "a",
                              {
                                attrs: {
                                  href: "https://discord.com/invite/",
                                  target: "_blank",
                                },
                              },
                              [
                                a("img", {
                                  directives: [
                                    {
                                      name: "show",
                                      rawName: "v-show",
                                      value: "Heco" == e.chainName,
                                      expression: "chainName=='Heco'",
                                    },
                                  ],
                                  attrs: { src: n("551e"), alt: "" },
                                }),
                                a("img", {
                                  directives: [
                                    {
                                      name: "show",
                                      rawName: "v-show",
                                      value: "Bsc" == e.chainName,
                                      expression: "chainName=='Bsc'",
                                    },
                                  ],
                                  attrs: { src: n("7ded"), alt: "" },
                                }),
                                a("span", [e._v("Discord")]),
                              ]
                            ),
                          ]),
                          a("div", [
                            a("img", {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: "Heco" == e.chainName,
                                  expression: "chainName=='Heco'",
                                },
                              ],
                              attrs: { src: n("f64c"), alt: "" },
                            }),
                            a("img", {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: "Bsc" == e.chainName,
                                  expression: "chainName=='Bsc'",
                                },
                              ],
                              attrs: { src: n("cf88"), alt: "" },
                            }),
                            a("span", [e._v(e._s(e.$t("Ecological")))]),
                          ]),
                          a("div", [
                            a(
                              "a",
                              {
                                attrs: {
                                  href: "https://emevinefinance.zendesk.com/hc/en/sections/360013068171-FAQ",
                                  target: "_blank",
                                },
                              },
                              [
                                a("img", {
                                  directives: [
                                    {
                                      name: "show",
                                      rawName: "v-show",
                                      value: "Heco" == e.chainName,
                                      expression: "chainName=='Heco'",
                                    },
                                  ],
                                  attrs: { src: n("5739"), alt: "" },
                                }),
                                a("img", {
                                  directives: [
                                    {
                                      name: "show",
                                      rawName: "v-show",
                                      value: "Bsc" == e.chainName,
                                      expression: "chainName=='Bsc'",
                                    },
                                  ],
                                  attrs: { src: n("aa22"), alt: "" },
                                }),
                                a("span", [e._v("FAQ")]),
                              ]
                            ),
                          ]),
                        ]),
                        a(
                          "a",
                          {
                            attrs: { href: e.getAfficheUrl, target: "_blank" },
                          },
                          [
                            a("div", { staticClass: "aff-info" }, [
                              a("div", [
                                a("img", {
                                  directives: [
                                    {
                                      name: "show",
                                      rawName: "v-show",
                                      value: "Heco" == e.chainName,
                                      expression: "chainName=='Heco'",
                                    },
                                  ],
                                  staticClass: "info-img",
                                  attrs: { src: n("f6e3"), alt: "" },
                                }),
                                a("img", {
                                  directives: [
                                    {
                                      name: "show",
                                      rawName: "v-show",
                                      value: "Bsc" == e.chainName,
                                      expression: "chainName=='Bsc'",
                                    },
                                  ],
                                  staticClass: "info-img",
                                  attrs: { src: n("0e0b"), alt: "" },
                                }),
                                a("span", [
                                  e._v(e._s(e.$t("ChangeNotice")) + " "),
                                ]),
                              ]),
                              a("img", {
                                staticClass: "link-img",
                                attrs: { src: n("7acc"), alt: "" },
                              }),
                            ]),
                          ]
                        ),
                        a("div", { staticClass: "aff-emai" }, [
                          a("span", [
                            e._v(
                              " " +
                                e._s(e.$t("BusinessCooperation")) +
                                "：business@emevinefinance.com"
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ])
                : e._e(),
              a("div", { staticClass: "header-left" }, [
                a(
                  "div",
                  { staticClass: "header-logo" },
                  [
                    a("router-link", { attrs: { to: "/" } }, [
                      e.onresizeIsPC
                        ? a("img", { attrs: { src: n("cf05") } })
                        : e._e(),
                    ]),
                  ],
                  1
                ),
                e.isPC
                  ? a(
                      "nav",
                      { staticClass: "header-nav" },
                      [
                        a(
                          "router-link",
                          {
                            staticClass: "nav__list-item",
                            attrs: { to: "/", exact: "" },
                          },
                          [e._v(e._s(e.$t("Home")) + " ")]
                        ),
                        a(
                          "a",
                          {
                            staticClass: "nav__list-item",
                            attrs: {
                              href: e.chainConfig.exchangeUrl + e.getLang,
                            },
                          },
                          [e._v(e._s(e.$t("Swap")) + " ")]
                        ),
                        a(
                          "a",
                          {
                            staticClass: "nav__list-item",
                            attrs: { href: e.chainConfig.fundUrl + e.getLang },
                          },
                          [e._v(e._s(e.$t("capitalPool")))]
                        ),
                        a(
                          "router-link",
                          {
                            staticClass: "nav__list-item",
                            attrs: { to: "/liquidity", exact: "" },
                          },
                          [e._v(e._s(e.$t("Pool")))]
                        ),
                        a(
                          "router-link",
                          {
                            staticClass: "nav__list-item",
                            attrs: { to: "/trading", exact: "" },
                          },
                          [e._v(e._s(e.$t("TradePool")))]
                        ),
                        a(
                          "router-link",
                          {
                            staticClass: "nav__list-item",
                            attrs: { to: "/boardroom" },
                          },
                          [e._v(e._s(e.$t("Directors")))]
                        ),
						a(
                          "router-link",
                          {
                            staticClass: "nav__list-item",
                            attrs: { to: "/Launchpad" },
                          },
                          [e._v(e._s(e.$t("Launchpad")))]
                        ),
                        a(
                          "router-link",
                          {
                            staticClass: "nav__list-item",
                            attrs: { to: "/bridge" },
                          },
                          [e._v(e._s(e.$t("crossChain")))]
                        ),
						
						a(
                          "a",
                          {
                            staticClass: "nav__list-item",
                            attrs: {
                              href: e.chainConfig.exchangeUrl + e.getLang,
                            },
                          },
                          [e._v(e._s(e.$t("Ecommerce")) + " ")]
                        ),
                        a(
                          "a",
                          {
                            staticClass: "nav__list-item",
                            attrs: {
                              href:
                                "Heco" == e.chainName
                                  ? "https://info.emevinefinance.com"
                                  : "https://bsc-info.emevinefinance.com",
                            },
                          },
                          [e._v(e._s(e.$t("Quotes")))]
                        ),
                        a("div", { staticClass: "affiche " }, [
                          a(
                            "a",
                            {
                              attrs: {
                                href: e.getAfficheUrl,
                                target: "_blank",
                              },
                            },
                            [
                              e._v(" " + e._s(e.$t("Notice")) + " "),
                              a("img", {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value: "Bsc" == e.chainName,
                                    expression: "chainName=='Bsc'",
                                  },
                                ],
                                attrs: { src: n("47c5") },
                              }),
                              a("img", {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value: "Heco" == e.chainName,
                                    expression: "chainName=='Heco'",
                                  },
                                ],
                                attrs: { src: n("3809") },
                              }),
                            ]
                          ),
                        ]),
                      ],
                      1
                    )
                  : e._e(),
              ]),
              a(
                "div",
                { staticClass: "header-configs" },
                [
                  56 === e.chainId
                    ? a(
                        "div",
                      )
                    : e._e(),
                  a(
                    "Select",
                    {
                      staticClass: "header__config-chain",
                      attrs: {
                        value: e.chainId,
                        color: e.isPC ? e.SelectColor[e.chainName] : "white",
                      },
                      on: { change: e.changeChain },
                    },
                    e._l(e.chainList, function (e, t) {
                      return a("Option", {
                        key: t,
                        attrs: { value: e.id, label: e.label },
                      });
                    }),
                    1
                  ),
                  e.isPC && !e.isLogin
                    ? a(
                        "div",
                        {
                          staticClass: "header__config-button",
                          on: { click: e.handleWallet },
                        },
                        [
                          e._v(
                            " " +
                              e._s(e.isLogin ? "已连接" : e.$t("connect")) +
                              " "
                          ),
                        ]
                      )
                    : e._e(),
                  e.isMobile
                    ? a(
                        "div",
                        {
                          staticClass: "header__config-button",
                          on: {
                            click: function (t) {
                              e.showSet = !0;
                            },
                          },
                        },
                        [a("img", { attrs: { src: n("fce9"), alt: "" } })]
                      )
                    : e._e(),
                  e.onresizeIsPC
                    ? a(
                        {
                          staticClass: "header__config-language",
                          attrs: { value: e.language },
                          on: { change: e.changeLanguage },
                        },
                        [
                          a("Option", {
                            attrs: { value: "en", label: "简体中文" },
                          }),
                          a("Option", {
                            attrs: { value: "en", label: "English" },
                          }),
                        ],
                        1
                      )
                    : e._e(),
                ],
                1
              ),
              a("h5alert", { ref: "showAlert" }),
            ],
            1
          );
        }),
      h = [],
      y =
        (n("466d"),
        n("7db0"),
        function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return e.isShow
            ? a(
                "div",
                { staticClass: "model" },
                [
                  a("div", { staticClass: "modal-mask" }, [
                    a("div", { staticClass: "content" }, [
                      a(
                        "div",
                        { staticClass: "head_top" },
                        [
                          a("P", { staticClass: "price" }, [
                            e._v(e._s(e.$t("ClaimAirdrop"))),
                          ]),
                          a("P", { staticClass: "num" }, [
                            e._v(e._s(e.nums + ".00") + " VINE"),
                          ]),
                        ],
                        1
                      ),
                      a(
                        "div",
                        { staticClass: "head_bottom" },
                        [
                          a(
                            "div",
                            { staticClass: "tag" },
                            e._l(e.list, function (t, n) {
                              return a(
                                "div",
                                {
                                  key: n,
                                  class: [
                                    "_tag ",
                                    e.check === n
                                      ? "tag_select"
                                      : "tag_noSelect",
                                  ],
                                  on: {
                                    click: function (t) {
                                      return e.select(n);
                                    },
                                  },
                                },
                                [e._v(" " + e._s(e.$t("" + t)) + " ")]
                              );
                            }),
                            0
                          ),
                          a("p", { staticClass: "noteText" }, [
                            a("img", { attrs: { src: n("d119"), alt: "" } }),
                            e._v(" " + e._s(e.$t("modalNotice")) + " "),
                          ]),
                          a("div", { staticClass: "serch_reward" }, [
                            a("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: e.msg,
                                  expression: "msg",
                                },
                              ],
                              attrs: {
                                type: "text",
                                placeholder: e.$t("inputAdress"),
                              },
                              domProps: { value: e.msg },
                              on: {
                                input: [
                                  function (t) {
                                    t.target.composing ||
                                      (e.msg = t.target.value);
                                  },
                                  e.input,
                                ],
                              },
                            }),
                          ]),
                          a(
                            "el-button",
                            {
                              class: [e.disabled ? "disabled" : "search"],
                              attrs: { loading: e.isload },
                              on: { click: e.seach },
                            },
                            [
                              e._v(
                                " " +
                                  e._s(
                                    e.success
                                      ? e.$t("" + e.content)
                                      : e.$t("noun") +
                                          e.nums +
                                          "VINE" +
                                          e.$t("ClaimedSuccessfully")
                                  )
                              ),
                            ]
                          ),
                        ],
                        1
                      ),
                      a(
                        "div",
                        { staticClass: "img", on: { click: e.cancle } },
                        [a("img", { attrs: { src: n("753b"), alt: "" } })]
                      ),
                    ]),
                  ]),
                  a("airdrop", { ref: "airdrop" }),
                ],
                1
              )
            : e._e();
        }),
      b = [],
      g = (n("caad"), n("99af"), n("498a"), n("4f22")),
      C = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: e.isShow,
                expression: "isShow",
              },
            ],
            staticClass: "model",
          },
          [n("img", { attrs: { src: e.url, alt: "" } })]
        );
      },
      w = [],
      v =
        (n("d3b7"),
        {
          name: "airDrop",
          data: function () {
            return { url: null, timeid: null, isShow: !1 };
          },
          methods: {
            show: function (e) {
              var t = this,
                n =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1],
                a =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : 2e3;
              return (
                (this.url = e),
                (this.isShow = !0),
                new Promise(function (e) {
                  t.timeid = setTimeout(function () {
                    n && t.close(), e();
                  }, a);
                })
              );
            },
            close: function () {
              clearTimeout(this.timeid), (this.isShow = !1);
            },
          },
        }),
      B = v,
      T = (n("aab2"), n("2877")),
      D = Object(T["a"])(B, C, w, !1, null, "179cf406", null),
      E = D.exports,
      x = {
        components: { airdrop: E },
        data: function () {
          return {
            success: !0,
            timeID: "",
            isload: !1,
            content: "Check",
            msg: "",
            nums: "0",
            disabled: !0,
            isShow: !1,
            check: 0,
            list: ["MillionAirdropRewards"],
            pcgif: { pending: n("6bab"), leave: n("23e5") },
            h5gif: { pending: n("340c"), leave: n("0dcc") },
          };
        },
        computed: {
          isPC: function () {
            return this.$store.getters.isPC;
          },
        },
        methods: {
          init: function () {
            (this.content = "Check"),
              (this.nums = "0"),
              (this.disabled = !0),
              (this.success = !0);
          },
          seach: function (e) {
            if (Object(g["h"])(this.msg)) {
              var t = "https:// airdrop.emevinefinance.cc/airdrop/";
              this.getCheck(t),
                ["Claim VINE", "Claim VINE"].includes(e.target.innerText) &&
                  this.getClaim(t);
            } else
              this.$overalltip({
                type: "error",
                msg: "".concat(window.$v.$t("addrTip")),
              });
          },
          getCheck: function (e) {
            var t = this;
            return Object(A["a"])(
              regeneratorRuntime.mark(function n() {
                var a, i, r, s, o;
                return regeneratorRuntime.wrap(function (n) {
                  while (1)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (
                          (t.isload = !0),
                          (n.next = 3),
                          t.axios.get(
                            ""
                              .concat(e, "check?address=")
                              .concat(t.msg.trim(), "&&type=")
                              .concat(t.check)
                          )
                        );
                      case 3:
                        (a = n.sent),
                          (t.isload = !1),
                          (i = a.data),
                          (r = i.code),
                          (s = i.message),
                          (o = i.result),
                          0 === r
                            ? ((t.nums = o.quantity),
                              (t.content = "ClaimPrice"))
                            : 1004 === r
                            ? ((t.content = "AirdropClaimed"),
                              (t.disabled = !0))
                            : 1002 === r
                            ? t.$overalltip({
                                type: "error",
                                msg: "".concat(window.$v.$t("NoAirdrop")),
                              })
                            : t.$overalltip({ type: "error", msg: s });
                      case 7:
                      case "end":
                        return n.stop();
                    }
                }, n);
              })
            )();
          },
          getClaim: function (e) {
            var t = this;
            return Object(A["a"])(
              regeneratorRuntime.mark(function n() {
                var a;
                return regeneratorRuntime.wrap(function (n) {
                  while (1)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (
                          (t.isload = !0),
                          (n.next = 3),
                          t.axios.get(
                            ""
                              .concat(e, "claim?address=")
                              .concat(t.msg.trim(), "&&type=")
                              .concat(t.check)
                          )
                        );
                      case 3:
                        (a = n.sent),
                          (t.isload = !1),
                          t.$refs.airdrop.show(
                            t.isPC ? t.pcgif.pending : t.h5gif.pending
                          ),
                          0 === a.data.code
                            ? t.$refs.airdrop
                                .show(
                                  t.isPC ? t.pcgif.leave : t.h5gif.leave,
                                  !0,
                                  4e3
                                )
                                .then(function () {
                                  (t.disabled = !0), (t.success = !1);
                                })
                            : 1004 === a.data.code
                            ? ((t.disabled = !0),
                              (t.content = "AirdropClaimed"))
                            : t.$refs.airdrop
                                .show(
                                  t.isPC ? t.pcgif.leave : t.h5gif.leave,
                                  !0,
                                  4e3
                                )
                                .then(function () {
                                  (t.disabled = !0),
                                    (t.content = "AirdropClaimed");
                                });
                      case 7:
                      case "end":
                        return n.stop();
                    }
                }, n);
              })
            )();
          },
          input: function () {
            (this.disabled = "" === this.msg),
              (this.success = !0),
              (this.content = "Check");
          },
          select: function (e) {
            this.check = e;
          },
          show: function () {
            this.isShow = !0;
          },
          cancle: function () {
            this.isShow = !1;
          },
        },
        watch: {
          msg: function () {
            "" === this.msg && this.init();
          },
        },
      },
      M = x,
      k = (n("f511"), Object(T["a"])(M, y, b, !1, null, "85a37bd8", null)),
      R = k.exports,
      L = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "div",
          {
            directives: [
              {
                name: "click-outside",
                rawName: "v-click-outside",
                value: e.handleClose,
                expression: "handleClose",
              },
            ],
            staticClass: "v-select",
            class: [{ "is-options__show": e.isOptionsShow }],
            on: { click: e.handleClick },
          },
          [
            n(
              "div",
              { staticClass: "v-select-inner", class: ["v-select-" + e.color] },
              [
                n("span", [e._v(e._s(e.currentLabel))]),
                n("span", {
                  staticClass: "arrow",
                  class: { rotate: e.isOptionsShow },
                }),
              ]
            ),
            n("transition", { attrs: { name: "v-options-animation" } }, [
              n(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: e.isOptionsShow,
                      expression: "isOptionsShow",
                    },
                  ],
                  staticClass: "v-options",
                },
                [e._t("default")],
                2
              ),
            ]),
          ],
          1
        );
      },
      P = [],
      S = (n("a9e3"), n("4de4"), n("e67d")),
      U = n.n(S),
      O = {
        name: "VSelect",
        model: { prop: "value", event: "change" },
        directives: { ClickOutside: U.a },
        provide: function () {
          return { select: this };
        },
        props: {
          disabled: { type: Boolean, default: !1 },
          value: { type: [String, Number, Boolean], default: "" },
          color: { type: String, default: "white" },
        },
        data: function () {
          return { isOptionsShow: !1, options: [], selectValue: this.value };
        },
        computed: {
          currentLabel: function () {
            var e,
              t = this;
            return (
              (null ===
                (e = this.options.find(function (e) {
                  return e.value === t.selectValue;
                })) || void 0 === e
                ? void 0
                : e.label) || ""
            );
          },
        },
        watch: {
          selectValue: function (e) {
            this.value !== e && this.$emit("change", e);
          },
          value: function (e) {
            this.selectValue = e;
          },
        },
        created: function () {
          var e = this;
          this.$on("changeValue", function (t) {
            (e.selectValue = t), e.handleClose();
          }),
            this.$on("add", function (t) {
              e.options.push(t);
            }),
            this.$on("remove", function (t) {
              e.options = e.options.filter(function (e) {
                return e !== t;
              });
            });
        },
        methods: {
          handleClick: function () {
            this.disabled || (this.isOptionsShow = !this.isOptionsShow);
          },
          handleClose: function () {
            this.isOptionsShow = !1;
          },
        },
      },
      F = O,
      j = (n("a516"), Object(T["a"])(F, L, P, !1, null, null, null)),
      I = j.exports,
      N = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "div",
          {
            staticClass: "v-option-item",
            class: { "is-disabled": e.disabled, "is-active": e.isActive },
            on: {
              click: function (t) {
                return t.stopPropagation(), e.handleClick(t);
              },
            },
          },
          [
            n(
              "div",
              { staticClass: "v-options-item__slot" },
              [e._t("default", [n("span", [e._v(e._s(e.label))])])],
              2
            ),
          ]
        );
      },
      X = [],
      H = {
        name: "VOption",
        props: {
          value: { type: [String, Number, Object], require: !0, default: "" },
          label: { type: [String, Number], require: !0, default: "" },
          disabled: { type: Boolean, default: !1 },
        },
        inject: { select: { default: "" } },
        computed: {
          isActive: function () {
            var e;
            return (
              (null === (e = this.select) || void 0 === e
                ? void 0
                : e.selectValue) === this.value
            );
          },
        },
        created: function () {
          var e, t;
          null === (e = (t = this.select).$emit) ||
            void 0 === e ||
            e.call(t, "add", this);
        },
        destroyed: function () {
          var e, t;
          null === (e = (t = this.select).$emit) ||
            void 0 === e ||
            e.call(t, "remove", this);
        },
        methods: {
          handleClick: function () {
            var e,
              t,
              n = this;
            if (!this.disabled)
              if ("en" != this.value && "en" != this.value)
                switch (this.value) {
                  case 1:
                    alert(window.$v.$t("ethAlert"));
                    break;
                  case 56:
                    ethereum
                      .request({
                        method: "wallet_addEthereumChain",
                        params: [
                          {
                            chainId: "0x38",
                            chainName: "BSC Mainnet",
                            nativeCurrency: {
                              name: "BSC",
                              symbol: "BNB",
                              decimals: 18,
                            },
                            rpcUrls: ["https://bsc-dataseed.binance.org"],
                            blockExplorerUrls: ["https://bscscan.com/"],
                          },
                        ],
                      })
                      .then(function (e) {
                        var t, a;
                        null === (t = (a = n.select).$emit) ||
                          void 0 === t ||
                          t.call(a, "changeValue", n.value);
                      });
                    break;
                  case 128:
                    ethereum
                      .request({
                        method: "wallet_addEthereumChain",
                        params: [
                          {
                            chainId: "0x80",
                            chainName: "Heco Mainnet",
                            nativeCurrency: {
                              name: "Heco",
                              symbol: "HT",
                              decimals: 18,
                            },
                            rpcUrls: [
                              "https://http-mainnet-node.huobichain.com",
                            ],
                            blockExplorerUrls: ["https://hecoinfo.com"],
                          },
                        ],
                      })
                      .then(function (e) {
                        var t, a;
                        null === (t = (a = n.select).$emit) ||
                          void 0 === t ||
                          t.call(a, "changeValue", n.value);
                      });
                    break;
					case 250:
                    ethereum
                      .request({
                        method: "wallet_addEthereumChain",
                        params: [
                          {
                            chainId: "250",
                            chainName: "Fantom Mainnet",
                            nativeCurrency: {
                              name: "Fantom",
                              symbol: "FTM",
                              decimals: 18,
                            },
                            rpcUrls: [
                              "https://rpc.ftm.tools",
                            ],
                            blockExplorerUrls: ["https://ftmscan.com"],
                          },
                        ],
                      })
                      .then(function (e) {
                        var t, a;
                        null === (t = (a = n.select).$emit) ||
                          void 0 === t ||
                          t.call(a, "changeValue", n.value);
                      });
                    break;
					case 88:
                    ethereum
                      .request({
                        method: "wallet_addEthereumChain",
                        params: [
                          {
                            chainId: "88",
                            chainName: "TomoChain Mainnet",
                            nativeCurrency: {
                              name: "TomoChain",
                              symbol: "TOMO",
                              decimals: 18,
                            },
                            rpcUrls: [
                              "https://rpc.tomochain.com",
                            ],
                            blockExplorerUrls: ["https://tomocoin.io"],
                          },
                        ],
                      })
                      .then(function (e) {
                        var t, a;
                        null === (t = (a = n.select).$emit) ||
                          void 0 === t ||
                          t.call(a, "changeValue", n.value);
                      });
                    break;
					case 1666600000:
                    ethereum
                      .request({
                        method: "wallet_addEthereumChain",
                        params: [
                          {
                            chainId: "1666600000",
                            chainName: "Harmony Mainnet",
                            nativeCurrency: {
                              name: "Harmony",
                              symbol: "ONE",
                              decimals: 18,
                            },
                            rpcUrls: [
                              "https://api.harmony.one",
                            ],
                            blockExplorerUrls: ["https://explorer.harmony.one"],
                          },
                        ],
                      })
                      .then(function (e) {
                        var t, a;
                        null === (t = (a = n.select).$emit) ||
                          void 0 === t ||
                          t.call(a, "changeValue", n.value);
                      });
                    break;
                }
              else
                null === (e = (t = this.select).$emit) ||
                  void 0 === e ||
                  e.call(t, "changeValue", this.value);
          },
        },
      },
      W = H,
      K = (n("bb7d"), Object(T["a"])(W, N, X, !1, null, null, null)),
      z = K.exports,
      q = {
        name: "Header",
        data: function () {
          return {
            onresizeIsPC: !navigator.userAgent.match(
              /(iPhone|iPod|Android|ios)/i
            ),
            showSet: !1,
            SelectColor: { Heco: "green", Bsc: "yellow" },
          };
        },
        components: { Select: I, Option: z, H5alert: R },
        mounted: function () {
          var e = this;
          return Object(A["a"])(
            regeneratorRuntime.mark(function t() {
              return regeneratorRuntime.wrap(function (t) {
                while (1)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (window.onresize = function () {
                          e.onresizeIsPC = !navigator.userAgent.match(
                            /(iPhone|iPod|Android|ios)/i
                          );
                        }),
                        sessionStorage.removeItem("MdxData"),
                        (t.next = 4),
                        window.ethereum.enable()
                      );
                    case 4:
                      e.$store.dispatch("onConnect");
                    case 5:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          )();
        },
        computed: {
          getTelegram: function () {
            return "en" == this.$store.state.language
              ? "https://t.me/EmevineFinance"
              : "https://t.me/EmevineFinance";
          },
          routerName: function () {
            return this.$store.state.routerName;
          },
          getLang: function () {
            return "?lang=".concat(this.$store.state.language);
          },
          chainConfig: function () {
            var e = this,
              t = this.chainList.find(function (t) {
                return t.id == e.chainId;
              });
            if (
              (this.$store.dispatch("crossChain/getAssetslist"), void 0 == t)
            ) {
              var n = this.chainList.find(function (e) {
                return 128 == e.id;
              });
              return n;
            }
            return t;
          },
          getAfficheUrl: function () {
            return "en" == this.$store.state.language
              ? "https://emevinefinance.zendesk.com/hc/en-gb"
              : "https://emevinefinance.zendesk.com/hc/en";
          },
          language: function () {
            return (
              "en-US" == this.$i18n.locale && this.changeLanguage("en"),
              "en-US" == this.$store.state.language
                ? "en"
                : this.$store.state.language
            );
          },
          chainId: function () {
            return this.$store.state.chainId;
          },
          isMobile: function () {
            return this.$store.getters.isMobile;
          },
          isPC: function () {
            return this.$store.getters.isPC;
          },
          isLogin: function () {
            return this.$store.getters.isLogin;
          },
        },
        methods: {
          handelClick: function () {
            this.$refs.showAlert.isShow = !0;
          },
          changeLanguage: function (e) {
            this.$store.commit("setLanguage", e), (this.$i18n.locale = e);
          },
          handleWallet: function () {
            var e = this;
            return Object(A["a"])(
              regeneratorRuntime.mark(function t() {
                return regeneratorRuntime.wrap(function (t) {
                  while (1)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (!e.isLogin) {
                          t.next = 2;
                          break;
                        }
                        return t.abrupt("return");
                      case 2:
                        return (t.next = 4), window.ethereum.enable();
                      case 4:
                        e.$store.dispatch("onConnect");
                      case 5:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
          changeChain: function (e) {
            if (e != this.chainId) {
              var t = this.chainList.find(function (t) {
                return t.id == e;
              });
              this.$store.commit("setChainId", t.id),
                this.$store.commit("setChainName", t.name);
            }
          },
        },
      },
      V = q,
      G = (n("f071"), Object(T["a"])(V, f, h, !1, null, "1d1a4c16", null)),
      Q = G.exports,
      J = function () {
        var e = this,
          t = e.$createElement,
          a = e._self._c || t;
        return a("footer", { staticClass: "footer", class: e.chainName }, [
          e.onresizeIsPC
            ? a("div", { staticClass: "footer-pc" }, [
                a("div", { staticClass: "foot-text-img" }, [
                  e._m(0),
                  a("p", [
                    e._m(1),
                    e._m(2),
                    a(
                      "a",
                      { attrs: { href: e.getTelegram, target: "_blank" } },
                      [
                        a("img", {
                          staticClass: "foot-img",
                          attrs: { src: n("07b2") },
                        }),
                      ]
                    ),
                    e._m(3),
                    e._m(4),
                  ]),
                  a("p", [
                    e._v("©2021 EmevineFinance.com.All rights reserved"),
                  ]),
                ]),
                a("div", { staticClass: "foot-text-info" }, [
                  a("div", { staticClass: "text-link" }, [
                    a("p", [e._v(e._s(e.$t("Application")))]),
                    a("p", [
                      a(
                        "a",
                        {
                          attrs: {
                            href: "https://docs.google.com/forms/d/e/1FAIpQLSem595jWpO5_A5fRj9W4-wX_3mg3ypqqNiXcC_yi-tpcbOaqA/viewform",
                            target: "_blank",
                          },
                        },
                        [e._v(e._s(e.$t("ListYourToken")))]
                      ),
                    ]),
                    a("p", [
                      a(
                        "a",
                        {
                          attrs: {
                            href: "https://docs.google.com/forms/d/e/1FAIpQLSem595jWpO5_A5fRj9W4-wX_3mg3ypqqNiXcC_yi-tpcbOaqA/viewform",
                            target: "_blank",
                          },
                        },
                        [e._v(e._s(e.$t("ClaimYourLiquidity")))]
                      ),
                    ]),
                    a("p", [
                      a(
                        "a",
                        {
                          attrs: {
                            href: " https://forms.gle/b6SCc4cXzn7apFhk7",
                            target: "_blank",
                          },
                        },
                        [e._v(e._s(e.$t("Vinepad Application")))]
                      ),
                    ]),
                  ]),
                  a("div", { staticClass: "text-link" }, [
                    a("p", [e._v(e._s(e.$t("Guide")))]),
                    a("p", [
                      a(
                        "a",
                        {
                          attrs: {
                            href: e.chainConfig.exchangeUrl + e.getLang,
                          },
                        },
                        [e._v(e._s(e.$t("Swap")))]
                      ),
                    ]),
                    a("p", [
                      a(
                        "a",
                        { attrs: { href: e.chainConfig.fundUrl + e.getLang } },
                        [e._v(e._s(e.$t("capitalPool")))]
                      ),
                    ]),
                    a(
                      "p",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: "Bsc" == e.chainName,
                            expression: "chainName == 'Bsc'",
                          },
                        ],
                      },
                      [
                        a(
                          "a",
                          {
                            attrs: {
                              href: "https://bsc-info.emevinefinance.com/#/home",
                            },
                          },
                          [e._v(e._s(e.$t("guideinfo")))]
                        ),
                      ]
                    ),
                    a(
                      "p",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: "Heco" == e.chainName,
                            expression: "chainName == 'Heco'",
                          },
                        ],
                      },
                      [
                        a(
                          "a",
                          {
                            attrs: {
                              href: "https://info.emevinefinance.com/",
                              target: "_blank",
                            },
                          },
                          [e._v(e._s(e.$t("guideinfo")))]
                        ),
                      ]
                    ),
                    a("p", [
                      a(
                        "a",
                        {
                          attrs: {
                            href:
                              "https://emevinefinance.com/#/liquidity" +
                              e.getLang,
                          },
                        },
                        [e._v(e._s(e.$t("Pool")))]
                      ),
                    ]),
                    a("p", [
                      a(
                        "a",
                        {
                          attrs: {
                            href:
                              "https://emevinefinance.com/#/boardroom" +
                              e.getLang,
                          },
                        },
                        [e._v(e._s(e.$t("Boardroom")))]
                      ),
                    ]),
                    a("p", [
                      a(
                        "a",
                        {
                          attrs: {
                            href:
                              "https://emevinefinance.com/#/trading" +
                              e.getLang,
                          },
                        },
                        [e._v(e._s(e.$t("TradePool")))]
                      ),
                    ]),
                  ]),
                  a("div", { staticClass: "text-link" }, [
                    a("p", [e._v(e._s(e.$t("Doc")))]),
                    e._m(5),
                  ]),
                  a("div", { staticClass: "text-link" }, [
                    a("p", [e._v(e._s(e.$t("About")))]),
                    a("p", [
                      a(
                        "a",
                        { attrs: { href: e.Announcement, target: "_blank" } },
                        [e._v(e._s(e.$t("Announcement")))]
                      ),
                    ]),
                    a("p", [
                      a(
                        "a",
                        {
                          attrs: { href: e.AdjustmentofPool, target: "_blank" },
                        },
                        [e._v(e._s(e.$t("AdjustmentofPool")))]
                      ),
                    ]),
                    a("p", [e._v(e._s(e.$t("Ecological")))]),
                    a("p", [
                      e._v(
                        e._s(e.$t("ContactUS")) +
                          ": business@emevinefinance.com"
                      ),
                    ]),
                  ]),
                ]),
              ])
            : e._e(),
          e.onresizeIsMobile
            ? a(
                "nav",
                { staticClass: "footer-nav" },
                [
                  a(
                    "router-link",
                    {
                      staticClass: "footer__nav-item",
                      attrs: { to: "/", tag: "div", exact: "" },
                    },
                    [
                      a("span", { staticClass: "footer__nav-item-icon home" }),
                      a("span", { staticClass: "footer__nav-item-text" }, [
                        e._v(e._s(e.$t("Home"))),
                      ]),
                    ]
                  ),
                  a("div", { staticClass: "footer__nav-item" }, [
                    a(
                      "a",
                      {
                        attrs: {
                          href:
                            "Heco" == e.chainName
                              ? "https://ht.emevinefinance.com/#/swap?" +
                                e.globalLanguage
                              : "https://ht.emevinefinance.com/#/swap?" +
                                e.globalLanguage,
                        },
                      },
                      [
                        a("span", {
                          staticClass: "footer__nav-item-icon exchange",
                        }),
                        a(
                          "span",
                          { staticClass: "footer__nav-item-text info-text" },
                          [e._v(e._s(e.$t("Swap")))]
                        ),
                      ]
                    ),
                  ]),
                  a(
                    "div",
                    {
                      staticClass: "footer__nav-item",
                      on: { click: e.toMiningPool },
                    },
                    [
                      a("span", {
                        staticClass: "footer__nav-item-icon",
                        class: {
                          "farm-active": e.miningPoolActive,
                          farm: !e.miningPoolActive,
                        },
                      }),
                      a(
                        "span",
                        {
                          staticClass: "footer__nav-item-text",
                          class: { "router-active": e.miningPoolActive },
                        },
                        [e._v(e._s(e.$t("miningPool")))]
                      ),
                    ]
                  ),
                  a(
                    "router-link",
                    {
                      staticClass: "footer__nav-item",
                      attrs: { to: "/boardroom", tag: "div" },
                    },
                    [
                      a("span", {
                        staticClass: "footer__nav-item-icon boardroom",
                      }),
                      a("span", { staticClass: "footer__nav-item-text" }, [
                        e._v(e._s(e.$t("Directors"))),
                      ]),
                    ]
                  ),
                  a("div", { staticClass: "footer__nav-item" }, [
                    a(
                      "a",
                      {
                        attrs: {
                          href:
                            "Heco" == e.chainName
                              ? "https://info.emevinefinance.com"
                              : "https://bsc-info.emevinefinance.com",
                        },
                      },
                      [
                        a("span", {
                          staticClass: "footer__nav-item-icon marker",
                        }),
                        a(
                          "span",
                          { staticClass: "footer__nav-item-text info-text" },
                          [e._v(e._s(e.$t("Quotes")))]
                        ),
                      ]
                    ),
                  ]),
                ],
                1
              )
            : e._e(),
        ]);
      },
      Z = [
        function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a("p", [
            a("a", { attrs: { href: "" } }, [
              a("img", { attrs: { src: n("553e") } }),
            ]),
          ]);
        },
        function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a(
            "a",
            {
              attrs: {
                href: "https://github.com/EmevineFinance",
                target: "_blank",
              },
            },
            [a("img", { staticClass: "foot-img", attrs: { src: n("f257") } })]
          );
        },
        function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a(
            "a",
            {
              attrs: {
                href: "https://emevinefinance.medium.com/",
                target: "_blank",
              },
            },
            [a("img", { staticClass: "foot-img", attrs: { src: n("f571") } })]
          );
        },
        function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a(
            "a",
            {
              attrs: { href: "https://twitter.com/EmevineFinance", target: "_blank" },
            },
            [a("img", { staticClass: "foot-img", attrs: { src: n("67eb") } })]
          );
        },
        function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a(
            "a",
            {
              attrs: { href: "https://discord.com/invite/", target: "_blank" },
            },
            [a("img", { staticClass: "foot-img", attrs: { src: n("0386") } })]
          );
        },
        function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n("p", [
            n(
              "a",
              {
                attrs: {
                  href: "https://emevinefinance.zendesk.com/hc/en/sections/360013068171-FAQ",
                  target: "_blank",
                },
              },
              [e._v("")]
            ),
          ]);
        },
      ],
      Y = {
        name: "Footer",
        data: function () {
          return {
            act1: !1,
            act2: !1,
            act3: !1,
            act4: !1,
            act5: !1,
            act6: !1,
            act7: !1,
            miningPoolActive: !1,
            onresizeIsPC: !navigator.userAgent.match(
              /(iPhone|iPod|Android|ios)/i
            ),
            onresizeIsMobile: !!navigator.userAgent.match(
              /(iPhone|iPod|Android|ios)/i
            ),
          };
        },
        watch: {
          $route: function (e, t) {
            if (!this.isPC)
              return ["/trading", "/liquidity"].includes(e.path) ||
                e.path.indexOf("/poo") > -1
                ? (this.miningPoolActive = !0)
                : void (this.miningPoolActive = !1);
          },
        },
        methods: {
          onmouseove: function (e) {
            this["act" + e] = !0;
          },
          onmouseout: function (e) {
            this["act" + e] = !1;
          },
          toMiningPool: function () {
            this.miningPoolActive || this.$router.push("/liquidity");
          },
        },
        mounted: function () {
          var e = this;
          window.onresize = function () {
            (e.onresizeIsPC = !navigator.userAgent.match(
              /(iPhone|iPod|Android|ios)/i
            )),
              (e.onresizeIsMobile = !!navigator.userAgent.match(
                /(iPhone|iPod|Android|ios)/i
              ));
          };
        },
        computed: {
          chainConfig: function () {
            var e = this,
              t = this.chainList.find(function (t) {
                return t.id == e.$store.state.chainId;
              });
            if (void 0 == t) {
              var n = this.chainList.find(function (e) {
                return 128 == e.id;
              });
              return n;
            }
            return t;
          },
          getLang: function () {
            return "?lang=".concat(this.$store.state.language);
          },
          getTelegram: function () {
            return "en" == this.$store.state.language
              ? "https://t.me/EmevineFinance"
              : "https://t.me/EmevineFinance";
          },
          chainName: function () {
            return this.$store.state.chainName;
          },
          isMobile: function () {
            return this.$store.getters.isMobile;
          },
          isPC: function () {
            return this.$store.getters.isPC;
          },
          Announcement: function () {
            return "en" == this.$store.state.language
              ? "https://emevinefinance.zendesk.com/hc/en"
              : "https://emevinefinance.zendesk.com/hc/en-gb/sections/360012110652-Announcement";
          },
          AdjustmentofPool: function () {
            return "en" == this.$store.state.language
              ? "https://emevinefinance.zendesk.com/hc/en/sections/360012110672"
              : "https://emevinefinance.zendesk.com/hc/en-gb/sections/360012110672-Adjustment-of-Pool";
          },
        },
      },
      _ = Y,
      $ = (n("9bfd"), Object(T["a"])(_, J, Z, !1, null, "526e60d4", null)),
      ee = $.exports,
      te = {
        data: function () {
          return { direction: "slide-right" };
        },
        components: { AHeader: Q, AFooter: ee },
        watch: {
          $route: function (e, t) {
            this.$store.commit("setRouterName", e.path);
            var n = e.path.split("/").length,
              a = t.path.split("/").length;
            "/" == e.path
              ? (this.direction = "slide-right")
              : "/" == t.path
              ? (this.direction = "slide-left")
              : (this.direction = n < a ? "slide-right" : "slide-left");
          },
          chainId: function () {
            this.$store.dispatch("initData");
          },
        },
        computed: {
          isPC: function () {
            return this.$store.getters.isPC;
          },
          isMobile: function () {
            return this.$store.getters.isMobile;
          },
          chainId: function () {
            return this.$store.state.chainId;
          },
          isLogin: function () {
            return this.$store.getters.isLogin;
          },
        },
        beforeCreate: function () {
          var e = this;
          return Object(A["a"])(
            regeneratorRuntime.mark(function t() {
              return regeneratorRuntime.wrap(function (t) {
                while (1)
                  switch ((t.prev = t.next)) {
                    case 0:
                      window.ethereum.on("chainChanged", function (t) {
                        switch ((sessionStorage.removeItem("EmevineData"), t)) {
                          case "0x1":
                            e.$store.commit("setChainId", 1);
                            break;
                          case "0x80":
                            e.$store.commit("setChainId", 128);
                            break;
                          case "0x38":
                            e.$store.commit("setChainId", 56);
                            break;
                        }
                      }),
                        window.ethereum.on("accountsChanged", function (e) {
                          sessionStorage.removeItem("EmevineData");
                        });
                    case 2:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          )();
        },
        created: function () {
          var e = this;
          return Object(A["a"])(
            regeneratorRuntime.mark(function t() {
              return regeneratorRuntime.wrap(function (t) {
                while (1)
                  switch ((t.prev = t.next)) {
                    case 0:
                      ethereum.on("connect", function (t) {
                        switch (
                          (sessionStorage.removeItem("EmevineData"), t.chainId)
                        ) {
                          case "0x1":
                            e.$store.commit("setChainId", 1);
                            break;
                          case "0x80":
                            e.$store.commit("setChainId", 128);
                            break;
                          case "0x38":
                            e.$store.commit("setChainId", 56);
                            break;
						  case "250":
                            e.$store.commit("setChainId", 250);
                            break;
						  case "88":
                            e.$store.commit("setChainId", 88);
                            break;
						  case "1666600000":
                            e.$store.commit("setChainId", 1666600000);
                            break;
                        }
                      });
                    case 1:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          )();
        },
        mounted: function () {
          var e = this,
            t = function (e) {
              var t = window.location.href.split("?");
              if (1 == t.length) return !1;
              for (var n = t[1].split("&"), a = 0; a < n.length; a++) {
                var i = n[a].split("=");
                if (i[0] == e) return i[1];
              }
              return !1;
            };
          try {
            var n = window.ethereum.networkVersion || window.ethereum.chainId;
            if (n) this.$store.commit("setChainId", n);
            else {
              var a = t("chainId");
              a && this.$store.commit("setChainId", a);
            }
          } catch (s) {}
          this.$store.dispatch("initData");
          var i = t("lang");
          if (i) {
            var r = -1 == i.indexOf("zh-") ? "en" : "en";
            this.$store.commit("setLanguage", r), (this.$i18n.locale = r);
          }
          setTimeout(function () {
            i && e.$router.replace(e.$route.path);
          }, 1e3);
        },
        beforeDestroy: function () {
          this.$store.commit("setChainId", 128);
        },
      },
      ne = te,
      ae = (n("7c55"), Object(T["a"])(ne, p, m, !1, null, null, null)),
      ie = ae.exports,
      re = (n("3ca3"), n("ddb0"), n("6389")),
      se = n.n(re);
    u.a.use(se.a);
    var oe = [
        { path: "*", redirect: "/" },
        {
          path: "/",
          name: "Home",
          component: function () {
            return n.e("Home").then(n.bind(null, "b3d7"));
          },
        },
        {
          path: "/boardroom",
          name: "Boardroom",
          component: function () {
            return Promise.all([
              n.e("Boardroom~liquidity~tradeReward"),
              n.e("Boardroom"),
            ]).then(n.bind(null, "fcf9"));
          },
        },
        {
          path: "/pool/:type/:earn/:id",
          name: "BoardroomPool",
          component: function () {
            return n.e("BoardroomPool").then(n.bind(null, "bf1f"));
          },
          alias: "/boardroom",
        },
        {
          path: "/liquidity",
          name: "liquidity",
          component: function () {
            return Promise.all([
              n.e("Boardroom~liquidity~tradeReward"),
              n.e("liquidity~tradeReward"),
              n.e("liquidity"),
            ]).then(n.bind(null, "b7b7"));
          },
        },
        {
          path: "/trading",
          name: "trading",
          component: function () {
            return Promise.all([
              n.e("Boardroom~liquidity~tradeReward"),
              n.e("liquidity~tradeReward"),
              n.e("tradeReward"),
            ]).then(n.bind(null, "fc00"));
          },
        },
        {
          path: "/bridge",
          name: "bridge",
          component: function () {
            return n.e("Bridge").then(n.bind(null, "7643"));
          },
        },
        {
          path: "/introduce",
          name: "introduce",
          component: function () {
            return n.e("introduce").then(n.bind(null, "67df"));
          },
        },
      ],
      ce = new se.a({
        mode: "hash",
        base: "https://cdn.jsdelivr.net/gh/EmevineFinance/homepage@main/",
        routes: oe,
      }),
      de = ce,
      ue = n("6169"),
      le = n.n(ue),
      pe = n("0e44"),
      me = {
        namespaced: !0,
        state: { address: "", totalSupply: 0 },
        getters: {
          isLogin: function (e) {
            return !!e.address;
          },
        },
        actions: {},
      },
      Ae = n("5530"),
      fe =
        (n("b64b"),
        n("159b"),
        n("13d5"),
        n("07ac"),
        n("25f0"),
        n("2532"),
        {
          wht: [
            {
              lpAddress: "0x615e6285c5944540fd8bd921c9c8c56739fd1e13",
              name: "VINE-USDT LP",
              pid: 0,
              earnedToken: "WHT",
            },
            {
              lpAddress: "0x090A0f8eC4D96d4DBE34187b4790191a40726319",
              name: "VINE",
              pid: 1,
              earnedToken: "WHT",
            },
            {
              lpAddress: "0x6Dd2993B50b365c707718b0807fC4e344c072eC2",
              name: "VINE-WHT LP",
              pid: 2,
              earnedToken: "WHT",
            },
          ],
          vine: [
            {
              lpAddress: "0x090A0f8eC4D96d4DBE34187b4790191a40726319",
              name: "VINE",
              pid: 0,
              earnedToken: "VINE",
            },
            {
              lpAddress: "0x2Fb4bE0F2785bD6009A383f3290CC97A4e3bD46B",
              name: "VINE-HBTC LP",
              pid: 1,
              earnedToken: "VINE",
            },
            {
              lpAddress: "0xb55569893b397324c0d048c9709F40c23445540E",
              name: "VINE-ETH LP",
              pid: 2,
              earnedToken: "VINE",
            },
            {
              lpAddress: "0x59fc9ff2efe186f07e2b9f6c83f78086613e95f2",
              name: "VINE-HUSD LP",
              pid: 3,
              earnedToken: "VINE",
            },
            {
              lpAddress: "0x1986309EC4f23883EA4a407C38ca161C526B9A08",
              name: "VINE/HBCH LP",
              pid: 4,
              earnedToken: "VINE",
            },
            {
              lpAddress: "0xfc021c1Ec170C7B320cfD4DE99E83a91e7eAabBc",
              name: "VINE/HFIL LP",
              pid: 6,
              earnedToken: "VINE",
            },
          ],
          hoo: [
            {
              lpAddress: "0x090A0f8eC4D96d4DBE34187b4790191a40726319",
              name: "VINE",
              pid: 0,
              earnedToken: "HOO",
            },
          ],
          oldhoo: [
            {
              lpAddress: "0x090A0f8eC4D96d4DBE34187b4790191a40726319",
              name: "VINE",
              pid: 0,
              earnedToken: "HOO",
            },
          ],
          jt: [
            {
              lpAddress: "0x090A0f8eC4D96d4DBE34187b4790191a40726319",
              name: "VINE",
              pid: 0,
              earnedToken: "JT",
            },
          ],
          one: [
            {
              lpAddress: "0x090A0f8eC4D96d4DBE34187b4790191a40726319",
              name: "VINE",
              pid: 0,
              earnedToken: "ONE",
            },
          ],
        }),
      he = {
        hmdx: [
          {
            lpAddress: "0x9C65AB58d8d978DB963e63f2bfB7121627e3a739",
            name: "VINE",
            pid: 0,
            earnedToken: "HVINE",
          },
          {
            lpAddress: "0xAf9Aa53146C5752BF6068A84B970E9fBB22a87bc",
            name: "VINE/WBNB LP",
            pid: 1,
            earnedToken: "HVINE",
          },
        ],
        vine: [
          {
            lpAddress: "0x5E23fADEE9d8b5689F89104f10118C956Df3a286",
            name: "VINE/HVINE LP",
            pid: 0,
            earnedToken: "VINE",
          },
          {
            lpAddress: "0xe1cBe92b5375ee6AfE1B22b555D257B4357F6C68",
            name: "VINE/USDT LP",
            pid: 1,
            earnedToken: "VINE",
          },
        ],
      },
      ye = { 128: fe, 56: he },
      be = n("cebe"),
      ge = n.n(be),
      Ce = n("ed08"),
      we = ge.a.create({ baseURL: "".concat(Ce["a"]) }),
      ve = we,
      Be = function (e) {
        return ve({
          url: "/boardroom/repurch/list?emevinefinance_chainid=".concat(e),
          method: "get",
        });
      },
      Te = null,
      De = {
        destroyList: [],
        account: "",
        allowance: 0,
        lpBalance: 0,
        stakedValue: 0,
        earn: 0,
        rewardeData: {
          rewardAmount: 0,
          destroyAmount: 0,
          destoryPrice: 0,
          totalDestroy: 0,
          totalBuy: 0,
          rewardPool: {},
          rewardMdx: {},
          totalReward: 0,
        },
        poolReward: {},
      },
      Ee = {
        changeRewardeData: function (e, t) {
          e.rewardeData = t;
        },
        changeDestroyList: function (e, t) {
          e.destroyList = t;
        },
        changeAccount: function (e, t) {
          e.account = t;
        },
        changeAllowance: function (e, t) {
          e.allowance = t;
        },
        changeLpBalance: function (e, t) {
          e.lpBalance = t;
        },
        changeStakedValue: function (e, t) {
          e.stakedValue = t;
        },
        changeEarn: function (e, t) {
          e.earn = t;
        },
        changReward: function (e, t) {
          e.poolReward = t;
        },
      },
      xe = {
        getInfo: function (e) {
          var t = e.commit,
            n = e.dispatch,
            a = e.rootState,
            i = 0,
            r = a.chainId,
            s = ye[1 == r ? 128 : r],
            o = Object.keys(s);
          o.forEach(function (e) {
            var t = "boardroom_".concat(e),
              n = a.homeData[t];
            i = Object.values(n).reduce(function (e, t) {
              return e + 1 * JSON.parse(t).total_amount;
            }, i);
          }),
            t("changeRewardeData", {
              rewardAmount: a.homeData.reward_amount,
              destroyAmount: a.homeData.destroy_amount,
              destoryPrice: a.homeData.destory_price,
              totalDestroy: a.homeData.total_destroy,
              totalBuy: a.homeData.total_buy,
              totalReward: i,
            }),
            n("getReward");
        },
        getReward: function (e) {
          var t = this;
          return Object(A["a"])(
            regeneratorRuntime.mark(function n() {
              var a, i, r, s, o, c;
              return regeneratorRuntime.wrap(function (n) {
                while (1)
                  switch ((n.prev = n.next)) {
                    case 0:
                      (a = e.commit),
                        (i = e.rootState),
                        (r = i.chainId),
                        (s = { vine: {} }),
                        (o = i.account.address),
                        (n.t0 = r),
                        (n.next = 56 === n.t0 ? 7 : 128 === n.t0 ? 9 : 11);
                      break;
                    case 7:
                      return (
                        Object.assign(s, { hmdx: {} }), n.abrupt("break", 12)
                      );
                    case 9:
                      return (
                        Object.assign(s, {
                          wht: {},
                          hoo: {},
                          oldhoo: {},
                          jt: {},
                          one: {},
                        }),
                        n.abrupt("break", 12)
                      );
                    case 11:
                      return n.abrupt("return");
                    case 12:
                      (c =
                        t.getters["boardRoom/currentChainBoardRoomData"]
                          .allData),
                        c.forEach(
                          (function () {
                            var e = Object(A["a"])(
                              regeneratorRuntime.mark(function e(t) {
                                var n, i, d, u, l, p, m, A, f, h, y, b, C, w;
                                return regeneratorRuntime.wrap(function (e) {
                                  while (1)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        if (
                                          ((n = t.lpAddress),
                                          (i = t.pid),
                                          (d =
                                            t.earned_token.toLocaleLowerCase()),
                                          !o)
                                        ) {
                                          e.next = 27;
                                          break;
                                        }
                                        if (
                                          ((u = Object(g["f"])(
                                            r,
                                            "boardroom",
                                            d
                                          )),
                                          (l = u.fetchLPAllowance),
                                          (p = u.getReward),
                                          (m = u.fetchLocalAllowance),
                                          (A = u.saveLocalAllowance),
                                          (f = 0),
                                          (h = m(n, o)),
                                          !h)
                                        ) {
                                          e.next = 11;
                                          break;
                                        }
                                        (f = h), (e.next = 15);
                                        break;
                                      case 11:
                                        return (e.next = 13), l(n, o);
                                      case 13:
                                        (f = e.sent), A(n, o, f);
                                      case 15:
                                        if (!(f > 0)) {
                                          e.next = 24;
                                          break;
                                        }
                                        return (
                                          (y = 18),
                                          "hoo" == d && (y = 8),
                                          (e.next = 20),
                                          p(o, i, y)
                                        );
                                      case 20:
                                        (b = e.sent),
                                          (s[d][t.pid] = Number(
                                            b.toString(10)
                                          )),
                                          (e.next = 25);
                                        break;
                                      case 24:
                                        s[d][t.pid] = 0;
                                      case 25:
                                        e.next = 28;
                                        break;
                                      case 27:
                                        s[d][t.pid] = 0;
                                      case 28:
                                        (C = 0),
                                          (w = Object.keys(s)),
                                          w.forEach(function (e) {
                                            C += Object.keys(s[e]).length;
                                          }),
                                          C == c.length && a("changReward", s);
                                      case 32:
                                      case "end":
                                        return e.stop();
                                    }
                                }, e);
                              })
                            );
                            return function (t) {
                              return e.apply(this, arguments);
                            };
                          })()
                        );
                    case 14:
                    case "end":
                      return n.stop();
                  }
              }, n);
            })
          )();
        },
        getDestroyList: function (e) {
          var t = e.commit,
            n = (e.dispatch, e.rootState),
            a = n.chainId;
          Be(a).then(function (e) {
            0 == e.data.code && t("changeDestroyList", e.data.result);
          });
        },
        getWalletData: function (e) {
          var t = arguments;
          return Object(A["a"])(
            regeneratorRuntime.mark(function n() {
              var a,
                i,
                r,
                s,
                o,
                c,
                d,
                u,
                l,
                p,
                m,
                A,
                f,
                h,
                y,
                b,
                C,
                w,
                v,
                B,
                T,
                D;
              return regeneratorRuntime.wrap(
                function (n) {
                  while (1)
                    switch ((n.prev = n.next)) {
                      case 0:
                        if (
                          ((a = e.commit),
                          e.dispatch,
                          (i = e.rootState),
                          (r = t.length > 1 && void 0 !== t[1] ? t[1] : {}),
                          (s = i.chainId),
                          1 != s)
                        ) {
                          n.next = 5;
                          break;
                        }
                        return n.abrupt("return");
                      case 5:
                        return (
                          (o = r.type),
                          (c = r.lpAddress),
                          (d = r.pid),
                          (u = r.earn),
                          (l = Object(g["f"])(s, o, u)),
                          (p = l.fetchLPAllowance),
                          (m = l.getStakeValue),
                          (A = l.getReward),
                          (f = l.fetchLocalAllowance),
                          (h = l.saveLocalAllowance),
                          clearInterval(Te),
                          (n.next = 11),
                          Object(g["b"])()
                        );
                      case 11:
                        if (((y = n.sent), (n.prev = 12), !y.length)) {
                          n.next = 46;
                          break;
                        }
                        if (
                          ((b = y[0]),
                          a("changeAccount", b),
                          (C = 0),
                          (w = f(c, b)),
                          !w)
                        ) {
                          n.next = 22;
                          break;
                        }
                        (C = w), (n.next = 26);
                        break;
                      case 22:
                        return (n.next = 24), p(c, b);
                      case 24:
                        (C = n.sent), h(c, b, C);
                      case 26:
                        return (
                          a("changeAllowance", C),
                          (n.next = 29),
                          Object(g["d"])(c, b)
                        );
                      case 29:
                        if (
                          ((v = n.sent),
                          a("changeLpBalance", v.toString(10)),
                          !(C > 0))
                        ) {
                          n.next = 44;
                          break;
                        }
                        return (n.next = 34), m(d, b);
                      case 34:
                        return (
                          (B = n.sent),
                          a("changeStakedValue", B.toString(10)),
                          (T = 18),
                          "hoo" == u && (T = 8),
                          (n.next = 40),
                          A(b, d, T)
                        );
                      case 40:
                        (D = n.sent),
                          a("changeEarn", D.toString(10)),
                          (n.next = 46);
                        break;
                      case 44:
                        a("changeStakedValue", 0), a("changeEarn", 0);
                      case 46:
                        n.next = 51;
                        break;
                      case 48:
                        (n.prev = 48),
                          (n.t0 = n["catch"](12)),
                          console.log("getData:", n.t0);
                      case 51:
                      case "end":
                        return n.stop();
                    }
                },
                n,
                null,
                [[12, 48]]
              );
            })
          )();
        },
      },
      Me = {
        currentChainBoardRoomData: function (e, t, n) {
          var a = n.chainId,
            i = ye[1 == a ? 128 : a],
            r = Object.keys(i),
            s = [],
            o = {};
          r.forEach(function (e) {
            var t = "boardroom_".concat(e),
              a = n.homeData[t],
              r = i[e];
            a &&
              Object.keys(a).length === r.length &&
              ((o[e] = []),
              r.forEach(function (t) {
                var n = JSON.parse(a[t.pid]);
                s.push(Object(Ae["a"])(Object(Ae["a"])({}, n), t)),
                  o[e].push(Object(Ae["a"])(Object(Ae["a"])({}, n), t));
              }));
          });
          var c = s.filter(function (e) {
              return e.name.includes(" LP");
            }),
            d = s.filter(function (e) {
              return !e.name.includes(" LP");
            });
          return Object(Ae["a"])({ LP: c, single: d, allData: s }, o);
        },
        currentChainBoardRoomDataLP: function (e, t) {
          var n;
          return (
            (null === (n = t.currentChainBoardRoomData) || void 0 === n
              ? void 0
              : n.LP) || []
          );
        },
        currentChainBoardRoomDataSingle: function (e, t) {
          var n;
          return (
            (null === (n = t.currentChainBoardRoomData) || void 0 === n
              ? void 0
              : n.single) || []
          );
        },
        currentChainBoardRoomDataAll: function (e, t) {
          var n;
          return (
            (null === (n = t.currentChainBoardRoomData) || void 0 === n
              ? void 0
              : n.allData) || []
          );
        },
      },
      ke = {
        namespaced: !0,
        state: De,
        mutations: Ee,
        actions: xe,
        getters: Me,
      },
      Re = [
        {
          pid: 16,
          lpAddress: "0x615E6285c5944540fd8bd921c9c8c56739Fd1E13",
          name: "VINE/USDT LP",
        },
        {
          pid: 32,
          lpAddress: "0x2Fb4bE0F2785bD6009A383f3290CC97A4e3bD46B",
          name: "BTC/VINE LP",
        },
        {
          pid: 33,
          lpAddress: "0xb55569893b397324c0d048c9709F40c23445540E",
          name: "ETH/VINE LP",
        },
        {
          pid: 19,
          lpAddress: "0x6Dd2993B50b365c707718b0807fC4e344c072eC2",
          name: "VINE/WHT LP",
        },
        {
          pid: 29,
          lpAddress: "0xBFff969A85e355eE0851b019Dba1e87C7780F40d",
          name: "HBTC/WHT LP",
        },
        {
          pid: 30,
          lpAddress: "0x53E458aD1CFEB9582736db6BdE9aF89948e3bc3d",
          name: "ETH/WHT LP",
        },
        {
          pid: 31,
          lpAddress: "0x793c2a814e23EE38aB46412Be65E94Fe47D4B397",
          name: "HBTC/ETH LP",
        },
        {
          pid: 17,
          lpAddress: "0x499B6E03749B4bAF95F9E70EeD5355b138EA6C31",
          name: "WHT/USDT LP",
        },
        {
          pid: 15,
          lpAddress: "0x3375afF2CAcF683b8FC34807B9443EB32e7Afff6",
          name: "WHT/HUSD LP",
        },
        {
          pid: 8,
          lpAddress: "0xFBe7b74623e4be82279027a286fa3A5b5280F77c",
          name: "HBTC/USDT LP",
        },
        {
          pid: 9,
          lpAddress: "0x78C90d3f8A64474982417cDB490E840c01E516D4",
          name: "ETH/USDT LP",
        },
        {
          pid: 10,
          lpAddress: "0xdff86B408284dff30A7CAD7688fEdB465734501C",
          name: "HUSD/USDT LP",
        },
        {
          pid: 11,
          lpAddress: "0x060B4bfcE16D15A943ec83C56C87940613e162eB",
          name: "HLTC/USDT LP",
        },
        {
          pid: 12,
          lpAddress: "0x1f0eC8e0096e145f2bf2Cb4950Ed7b52d1cbd35f",
          name: "HBCH/USDT LP",
        },
        {
          pid: 13,
          lpAddress: "0x5484ab0DF3E51187f83F7f6b1a13f7a7Ee98C368",
          name: "HDOT/USDT LP",
        },
        {
          pid: 14,
          lpAddress: "0x600072aF0470d9Ed1D83885D03d17368943fF22A",
          name: "HFIL/USDT LP",
        },
        {
          pid: 18,
          lpAddress: "0xdE5b574925EE475c41b99a7591EC43E92dCD2fc1",
          name: "HPT/USDT LP",
        },
        {
          pid: 21,
          lpAddress: "0x7964e55bbdaecde48c2c8ef86e433ed47fecb519",
          name: "FILDA/HUSD LP",
        },
        {
          pid: 22,
          lpAddress: "0x023f375a51af8645d7446ba5942baedc53b0582d",
          name: "LHB/USDT LP",
        },
        {
          pid: 23,
          lpAddress: "0xfAfeAafeFc5F92F22415506e78D9AB1E33C03257",
          name: "AAVE/USDT LP",
        },
        {
          pid: 24,
          lpAddress: "0xc7A4C808a29fc8Cd3A8a6848f7F18bED9924C692",
          name: "SNX/USDT LP",
        },
        {
          pid: 25,
          lpAddress: "0x84455d880af684eb29997B82832dd71EF29c1354",
          name: "UNI/USDT LP",
        },
        {
          pid: 26,
          lpAddress: "0x52a342015BAa2496A90A9bB6069D7692564132e6",
          name: "LINK/USDT LP",
        },
        {
          pid: 27,
          lpAddress: "0xB6A77CDD31771A4F439622aA36b20cb53C19868C",
          name: "BAL/USDT LP",
        },
        {
          pid: 28,
          lpAddress: "0x64Af3564C6D6BEc5883358c560211EcD0f8d1AC7",
          name: "YFI/USDT LP",
        },
        {
          pid: 34,
          lpAddress: "0x18B83288237fCe1c44f332Ed6Ca851584f66E2a4",
          name: "MKR/USDT LP",
        },
        {
          pid: 35,
          lpAddress: "0x78B3c20c56D4B3Ef133FD4f00a0293c10b380E40",
          name: "COMP/USDT LP",
        },
        {
          pid: 36,
          lpAddress: "0xCf9Bb6F88c5B6dDb5c067a0C6d6Ae872f895B033",
          name: "SLNV2/USDT LP",
        },
        {
          pid: 37,
          lpAddress: "0xb8314524e92B3228cA09fF2AD3e0ab08F4622673",
          name: "BEE/VINE LP",
        },
        {
          pid: 38,
          lpAddress: "0xA4493e679Aec8Ec0F140D86900d982036F9e9Aa5",
          name: "CAN/VINE LP",
        },
        {
          pid: 39,
          lpAddress: "0x1986309EC4f23883EA4a407C38ca161C526B9A08",
          name: "VINE/HBCH LP",
        },
        {
          pid: 40,
          lpAddress: "0xC717De167C41456a2ae8579B557a6bEEc2553019",
          name: "VINE/HLTC LP",
        },
        {
          pid: 41,
          lpAddress: "0x640aeCF73Ca21f1bCAE74c7187CecF77F47c60Ac",
          name: "VINE/HDOT LP",
        },
        {
          pid: 42,
          lpAddress: "0x401D97029e3EFaDD4245428A8E388f354Ee475af",
          name: "HPT/WHT LP",
        },
        {
          pid: 43,
          lpAddress: "0x86d4Dc8A4325245F0b03e438Bc0c1395Cb163AA5",
          name: "WHT/HBCH LP",
        },
        {
          pid: 44,
          lpAddress: "0x1f75220584419d06290226d6f06f0a7907a954d9",
          name: "HBTC/HUSD LP",
        },
        {
          pid: 45,
          lpAddress: "0x73f67d9cd8a9c03bcf3a35a559c3a275c30eba8a",
          name: "ETH/HUSD LP",
        },
        {
          pid: 46,
          lpAddress: "0x9c1cac97ab98f9cd6383122db7591de1be71c9ac",
          name: "BXH/USDT LP",
        },
        {
          pid: 47,
          lpAddress: "0xc1d38a3ee432f906691ea66b9c54b65acbf35458",
          name: "HFIL/WHT LP",
        },
        {
          pid: 48,
          lpAddress: "0xcd9a26b6af1445cd48f86bd583c70e46ea6e474b",
          name: "HDOT/WHT LP",
        },
        {
          pid: 49,
          lpAddress: "0x45351f135629386f4c57d6ea011cc437f2cc9049",
          name: "HLTC/WHT LP",
        },
        {
          pid: 50,
          lpAddress: "0x9ff32e7c3c22c291e0bf8b262b2504b3081cbdc3",
          name: "PIPI/USDT LP",
        },
        {
          pid: 51,
          lpAddress: "0x1eb0f9f1621d6f81bfc7bded5b634578b2660aea",
          name: "SH/HUSD LP",
        },
        {
          pid: 52,
          lpAddress: "0x87a88060dc9c53805d308423878c894c0458295b",
          name: "PTD/VINE LP",
        },
        {
          pid: 53,
          lpAddress: "0x2d13e46d212d6aeb0c92ced4fb3d63f022132dcc",
          name: "HGT/HUSD LP",
        },
        {
          pid: 54,
          lpAddress: "0xbebb01b1b126683bfe67607b24a803754de9a6fe",
          name: "CON/USDT LP",
        },
        {
          pid: 55,
          lpAddress: "0xc95239fe2baabdbd15eec26805156e219b12ffce",
          name: "DEP/HUSD LP",
        },
        {
          pid: 56,
          lpAddress: "0x16565e04813bd675a117ca87564480f1ea743e0d",
          name: "SOVI/WHT LP",
        },
        {
          pid: 57,
          lpAddress: "0x7d4c254e6be63ff4508c545ec6ce10a392958b3e",
          name: "VINE/SHT LP",
        },
        {
          pid: 58,
          lpAddress: "0x76c29511b545ab6adc2d0890da76126f01806030",
          name: "VINE/HFI LP",
        },
        {
          pid: 59,
          lpAddress: "0xfed180001c0a85a0b6d4559be5ce63330e7ca9b6",
          name: "EDC/USDT LP",
        },
        {
          pid: 60,
          lpAddress: "0x27f1bEA6fc230D5162Bb42B2C97CAe896cc397db",
          name: "VINE/FEI LP",
        },
        {
          pid: 61,
          lpAddress: "0xC126C78D743C9E938Cfc77025B14f1aCE443F9bB",
          name: "TRIBE/USDT LP",
        },
        {
          pid: 62,
          lpAddress: "0xc71c2B3E0634bFA0B89e287B466eEfF05c5b93D7",
          name: "HOO/USDT LP",
        },
        {
          pid: 63,
          lpAddress: "0xAd67Dd95926bD56094908917Fa44529933B6F831",
          name: "DOGE/USDT LP",
        },
        {
          pid: 64,
          lpAddress: "0x4bB6826E1Db889AE30657FA19E1a80D9aE332da5",
          name: "EOS/USDT LP",
        },
        {
          pid: 65,
          lpAddress: "0x8d0e7BcF9Cf3B5B3Face8C440b3c71c6Cd5dbBC9",
          name: "ADA/USDT LP",
        },
        {
          pid: 66,
          lpAddress: "0x9dbe263c92faaEC700980089E73d2764614Ed8EE",
          name: "XRP/USDT LP",
        },
        {
          pid: 67,
          lpAddress: "0xcE2651055947e7bFCd2e221a1aE5e06C4121F803",
          name: "JT/USDT LP",
        },
        {
          pid: 68,
          lpAddress: "0x72e7831e70C4F59316Bd70596D1875f49a326798",
          name: "ZT/USDT LP",
        },
        {
          pid: 69,
          lpAddress: "0x3bebAe287c7BAA1c25b38CBfCDa667021f9932BA",
          name: "ONE/USDT LP",
        },
        {
          pid: 70,
          lpAddress: "0x6E9DBfab4D3623F529359921d16877D329183220",
          name: "BOO/VINE LP",
        },
        {
          pid: 71,
          lpAddress: "0x1c85dD9E5FeE4c40786bd6278255D977946A364b",
          name: "SHIB/USDT LP",
        },
        {
          pid: 0,
          lpAddress: "0x5545153ccfca01fbd7dd11c0b23ba694d9509a6f",
          name: "WHT",
        },
        {
          pid: 1,
          lpAddress: "0x66a79d23e58475d2738179ca52cd0b41d73f0bea",
          name: "HBTC",
        },
        {
          pid: 2,
          lpAddress: "0x0298c2b32eae4da002a15f36fdf7615bea3da047",
          name: "HUSD",
        },
        {
          pid: 3,
          lpAddress: "0x64ff637fb478863b7468bc97d30a5bf3a428a1fd",
          name: "ETH",
        },
        {
          pid: 4,
          lpAddress: "0xa71edc38d189767582c38a3145b5873052c3e47a",
          name: "USDT",
        },
        {
          pid: 5,
          lpAddress: "0xef3cebd77e0c52cb6f60875d9306397b5caca375",
          name: "HBCH",
        },
        {
          pid: 6,
          lpAddress: "0xa2c49cee16a5e5bdefde931107dc1fae9f7773e3",
          name: "HDOT",
        },
        {
          pid: 7,
          lpAddress: "0xecb56cf772b5c9a6907fb7d32387da2fcbfb63b4",
          name: "HLTC",
        },
      ],
      Le = [
        {
          pid: 0,
          lpAddress: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
          name: "WBNB",
        },
        {
          pid: 1,
          lpAddress: "0xe9e7cea3dedca5984780bafc599bd69add087d56",
          name: "BUSD",
        },
        {
          pid: 2,
          lpAddress: "0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c",
          name: "BTCB",
        },
        {
          pid: 3,
          lpAddress: "0x2170ed0880ac9a755fd29b2688956bd959f933f8",
          name: "ETH",
        },
        {
          pid: 4,
          lpAddress: "0x55d398326f99059ff775485246999027b3197955",
          name: "USDT",
        },
        {
          pid: 5,
          lpAddress: "0x250632378E573c6Be1AC2f97Fcdf00515d0Aa91B",
          name: "BETH",
        },
        {
          pid: 6,
          lpAddress: "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d",
          name: "USDC",
        },
        {
          pid: 7,
          lpAddress: "0xaee4164c1ee46ed0bbc34790f1a3d1fc87796668",
          name: "HVINE",
        },
        {
          pid: 8,
          lpAddress: "0x47bead2563dcbf3bf2c9407fea4dc236faba485a",
          name: "SXP",
        },
        {
          pid: 9,
          lpAddress: "0x7083609fce4d1d8dc0c979aab8c869ea2c873402",
          name: "DOT",
        },
        {
          pid: 10,
          lpAddress: "0x3ee2200efb3400fabb9aacf31297cbdd1d435d47",
          name: "ADA",
        },
        {
          pid: 11,
          lpAddress: "0xf8a0bf9cf54bb92f17374d9e9a321e6a111a51bd",
          name: "LINK",
        },
        {
          pid: 12,
          lpAddress: "0x4338665cbb7b2485a8855a139b75d5e34ab0db94",
          name: "LTC",
        },
        {
          pid: 13,
          lpAddress: "0x1d2f0da169ceb9fc7b3144628db156f3f6c60dbe",
          name: "XRP",
        },
        {
          pid: 14,
          lpAddress: "0x0D8Ce2A99Bb6e3B7Db580eD848240e4a0F9aE153",
          name: "FIL",
        },
        {
          pid: 15,
          lpAddress: "0xbf5140a22578168fd562dccf235e5d43a02ce9b1",
          name: "UNI",
        },
        {
          pid: 16,
          lpAddress: "0x947950BcC74888a40Ffa2593C5798F11Fc9124C4",
          name: "SUSHI",
        },
        {
          pid: 17,
          lpAddress: "0x8ff795a6f4d97e7887c79bea79aba5cc76444adf",
          name: "BCH",
        },
        {
          pid: 18,
          lpAddress: "0x56b6fb708fc5732dec1afc8d8556423a2edccbd6",
          name: "EOS",
        },
        {
          pid: 19,
          lpAddress: "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82",
          name: "CAKE",
        },
        {
          pid: 20,
          lpAddress: "0xa184088a740c695E156F91f5cC086a06bb78b827",
          name: "AUTO",
        },
        {
          pid: 21,
          lpAddress: "0xcf6bb5389c92bdda8a3747ddb454cb7a64626c63",
          name: "XVS",
        },
        {
          pid: 22,
          lpAddress: "0xE0e514c71282b6f4e823703a39374Cf58dc3eA4f",
          name: "BELT",
        },
        {
          pid: 23,
          lpAddress: "0xa7f552078dcc247c2684336020c03648500c6d9f",
          name: "EPS",
        },
        {
          pid: 24,
          lpAddress: "0x8F0528cE5eF7B51152A59745bEfDD91D97091d2F",
          name: "ALPACA",
        },
        {
          pid: 25,
          lpAddress: "0x3FdA9383A84C05eC8f7630Fe10AdF1fAC13241CC",
          name: "DEGO",
        },
        {
          pid: 26,
          lpAddress: "0xa2B726B1145A4773F68593CF171187d8EBe4d495",
          name: "INJ",
        },
        {
          pid: 27,
          lpAddress: "0x948d2a81086A075b3130BAc19e4c6DEe1D2E3fE8",
          name: "HELMET",
        },
        {
          pid: 28,
          lpAddress: "0xda28Eb7ABa389C1Ea226A420bCE04Cb565Aafb85",
          name: "BTCB/USDT LP",
        },
        {
          pid: 29,
          lpAddress: "0x0FB881c078434b1C0E4d0B64d8c64d12078b7Ce2",
          name: "ETH/USDT LP",
        },
        {
          pid: 30,
          lpAddress: "0x577d005912C49B1679B4c21E334FdB650E92C077",
          name: "ETH/BTCB LP",
        },
        {
          pid: 31,
          lpAddress: "0x09CB618bf5eF305FadfD2C8fc0C26EeCf8c6D5fd",
          name: "WBNB/USDT LP",
        },
        {
          pid: 32,
          lpAddress: "0x62c1dEC1fF328DCdC157Ae0068Bb21aF3967aCd9",
          name: "BUSD/USDT LP",
        },
        {
          pid: 33,
          lpAddress: "0x9f4Da89774570E27170873BefD139a79CB1A3da2",
          name: "USDC/USDT LP",
        },
        {
          pid: 34,
          lpAddress: "0xCAABda10a3ac99Fc15f5B636Aa18E6B4Fd8db16D",
          name: "FIL/USDT LP",
        },
        {
          pid: 35,
          lpAddress: "0x86746cc10BA1422CB17483748105d1d1DF5A2876",
          name: "XRP/USDT LP",
        },
        {
          pid: 36,
          lpAddress: "0xBcD49db9AA7D3e6C7F06AcffABdc4E42b402bF82",
          name: "LTC/USDT LP",
        },
        {
          pid: 37,
          lpAddress: "0x59B76b5D39370ba2Aa7e723c639861266e85BFEc",
          name: "DAI/USDT LP",
        },
        {
          pid: 38,
          lpAddress: "0x17632dCDA12c522Ec2bC8a08c6419aB16F249d35",
          name: "ADA/USDT LP",
        },
        {
          pid: 39,
          lpAddress: "0xFf44e10662E1CD4f7AfE399144636c74B0D05D80",
          name: "DOT/USDT LP",
        },
        {
          pid: 40,
          lpAddress: "0x223740a259E461aBeE12D84A9FFF5Da69Ff071dD",
          name: "VINE/BUSD LP",
        },
        {
          pid: 41,
          lpAddress: "0x5E23fADEE9d8b5689F89104f10118C956Df3a286",
          name: "VINE/HVINE LP",
        },
        {
          pid: 42,
          lpAddress: "0xAf9Aa53146C5752BF6068A84B970E9fBB22a87bc",
          name: "VINE/WBNB LP",
        },
        {
          pid: 43,
          lpAddress: "0xe1cBe92b5375ee6AfE1B22b555D257B4357F6C68",
          name: "VINE/USDT LP",
        },
        {
          pid: 44,
          lpAddress: "0x4fb8253432FB3e92109c91E3Ff2b85FfA0f6A1F4",
          name: "BTCB/BUSD LP",
        },
        {
          pid: 45,
          lpAddress: "0xc0BA2569e473974e9004CEEEae76Aeaea521525c",
          name: "ETH/BUSD LP",
        },
        {
          pid: 46,
          lpAddress: "0x3fe3DeE31cC404Aa4C8de6A6a3cbBcb60358FcB0",
          name: "BETH/ETH LP",
        },
        {
          pid: 47,
          lpAddress: "0x9fee39a59F60CDCcd81163d37a63C2E0B761Ccd4",
          name: "LINK/BUSD LP",
        },
        {
          pid: 48,
          lpAddress: "0x3Bb17b5BDbA4408AC23B1D63fB48E22D24134cd6",
          name: "EOS/BUSD LP",
        },
        {
          pid: 49,
          lpAddress: "0x72F1d53B2E4bDE565fE54AF13697857e71193dDf",
          name: "UNI/BUSD LP",
        },
        {
          pid: 50,
          lpAddress: "0x706937dC141231168Be1694d5ea9dCD04739Bb41",
          name: "SUSHI/BUSD LP",
        },
        {
          pid: 51,
          lpAddress: "0x3720DAD44398f745067b54ea786BB66CB97f68e9",
          name: "BCH/BUSD LP",
        },
        {
          pid: 52,
          lpAddress: "0xE16699481Cb5DC79CA491F8437182d73eb0dd09D",
          name: "HVINE/USDT LP",
        },
        {
          pid: 53,
          lpAddress: "0x340192D37d95fB609874B1db6145ED26d1e47744",
          name: "WBNB/BUSD LP",
        },
        {
          pid: 54,
          lpAddress: "0x82E8F9e7624fA038DfF4a39960F5197A43fa76aa",
          name: "WBNB/ETH LP",
        },
        {
          pid: 55,
          lpAddress: "0x969f2556F786a576F32AeF6c1D6618f0221Ec70e",
          name: "BTCB/WBNB LP",
        },
        {
          pid: 56,
          lpAddress: "0x83d8E2E030cD820dfdD94723c3bcf2BC52e1701A",
          name: "HELMET/WBNB LP",
        },
        {
          pid: 57,
          lpAddress: "0x8fe32329C4dbE8d29B9c8874Ef0F52CcD8c7D3F0",
          name: "AUTO/BUSD LP",
        },
        {
          pid: 58,
          lpAddress: "0x091331f2231Cc9b87Cac33663371A8484a0a5197",
          name: "SXP/BUSD LP",
        },
        {
          pid: 59,
          lpAddress: "0xfA4f77C240EB9c1ce45344Ce4B6d4b4bACc7c09b",
          name: "XVS/BUSD LP",
        },
        {
          pid: 60,
          lpAddress: "0xcf7ca5e4968CF0d1dD26645e4cf3Cf4ED86b867F",
          name: "ALPACA/BUSD LP",
        },
        {
          pid: 61,
          lpAddress: "0x67268Bb3Aece3efE5B36F6bAbd4662f947C1A9A6",
          name: "BELT/BUSD LP",
        },
        {
          pid: 62,
          lpAddress: "0xA13aFe2DF0fA0bb11F2aeAAAF98aC1D591E108d1",
          name: "CAKE/WBNB LP",
        },
        {
          pid: 63,
          lpAddress: "0x91bbcF7518bdf2D94b2806C4bFd6B90eb8e40B03",
          name: "INJ/BUSD LP",
        },
        {
          pid: 64,
          lpAddress: "0x05Bc53aBE321Ece4330E500C1693C490E2Af1E84",
          name: "EPS/BUSD LP",
        },
        {
          pid: 65,
          lpAddress: "0x6b35eb6CF670452Fa3Be8396b54678b1727aFA6b",
          name: "BCH/WBNB LP",
        },
        {
          pid: 66,
          lpAddress: "0xBDaDe5C2C966EE5558d2e0BDd3d9276bEA2c6007",
          name: "DOT/WBNB LP",
        },
        {
          pid: 67,
          lpAddress: "0xeF315887FD450e0B50ceA0fF7C24d4f846a5b94e",
          name: "BELT/WBNB LP",
        },
        {
          pid: 68,
          lpAddress: "0xe4276043484881C19c78D0276DEE1350eB36cDB5",
          name: "FIL/WBNB LP",
        },
        {
          pid: 69,
          lpAddress: "0x428daB4F52C5f76b86eD964e03E7c93D02f2E3bB",
          name: "ADA/WBNB LP",
        },
        {
          pid: 70,
          lpAddress: "0x27fb3ce8c9C7cdca5deeB5E3E486913b97f9D189",
          name: "XRP/WBNB LP",
        },
        {
          pid: 71,
          lpAddress: "0x014A03F7202fC31C4537147CC8060F735BF6243c",
          name: "LTC/WBNB LP",
        },
        {
          pid: 72,
          lpAddress: "0x244CB20eFF76c3636C6B0d431aB748D47b326d0c",
          name: "SXP/WBNB LP",
        },
        {
          pid: 73,
          lpAddress: "0x9bDa8bdE8F2F3C5a267a610CD2410cDA69d59a98",
          name: "LINK/WBNB LP",
        },
        {
          pid: 74,
          lpAddress: "0x79B0DE721bCf2D6d03708D5e7f5eEca8d4df5F88",
          name: "EOS/WBNB LP",
        },
        {
          pid: 75,
          lpAddress: "0x26c56ca50c3317C6c30bF94bf1E26876d405B18f",
          name: "UNI/WBNB LP",
        },
        {
          pid: 76,
          lpAddress: "0x22671dfd5eda964a94D398A205346C23975D3FBA",
          name: "BETH/WBNB LP",
        },
        {
          pid: 77,
          lpAddress: "0xBA68d6beE4f433630DeE22C248A236c8f6EAe246",
          name: "VINE/ETH LP",
        },
        {
          pid: 78,
          lpAddress: "0x1c0276642f2A7cbcf6624d511F34811cDC65212C",
          name: "VINE/BTCB LP",
        },
        {
          pid: 79,
          lpAddress: "0xF8E9b725e0De8a9546916861c2904b0Eb8805b96",
          name: "DOGE/USDT LP",
        },
        {
          pid: 80,
          lpAddress: "0x4282Cc326bB04Cd5F9503AC8cB2407C9b2aAed1d",
          name: "BRY/USDT LP",
        },
        {
          pid: 81,
          lpAddress: "0x7B2566F78250B742484611aF6aaf0cdE56788cd6",
          name: "WATCH/BUSD LP",
        },
        {
          pid: 82,
          lpAddress: "0x4Babdf099abd0DA59F317Ce450cff7D4D5697E86",
          name: "VBSWAP/BUSD LP",
        },
        {
          pid: 83,
          lpAddress: "0x9595AcEc209Cec24898f24B35683429c83Aaa2fD",
          name: "FRONT/BUSD LP",
        },
        {
          pid: 84,
          lpAddress: "0xcB5aA12DfD55B7cFc29a8d7175f6309Dd7Af9a9f",
          name: "DEGO/BUSD LP",
        },
      ],
      Pe = { 128: Re, 56: Le },
      Se = function (e) {
        return ve({
          url: "/mingpool/lps?emevinefinance_chainid=".concat(e),
          method: "get",
        });
      },
      Ue = { apylist: {}, poolReward: {} },
      Oe = {
        changeApy: function (e, t) {
          e.apylist = t;
        },
        changReward: function (e, t) {
          e.poolReward = t;
        },
      },
      Fe = {
        getApyList: function (e) {
          var t = e.commit,
            n = e.dispatch,
            a = e.rootState,
            i = a.chainId;
          Se(1 == i ? 128 : i).then(function (e) {
            0 === e.data.code &&
              (t("changeApy", e.data.result), 1 != a.chainId && n("getReward"));
          });
        },
        getReward: function (e) {
          var t = this;
          return Object(A["a"])(
            regeneratorRuntime.mark(function n() {
              var a, i, r, s, o, c, d, u, l, p;
              return regeneratorRuntime.wrap(function (n) {
                while (1)
                  switch ((n.prev = n.next)) {
                    case 0:
                      (a = e.commit),
                        (i = e.rootState),
                        (r = t.getters["liquidity/poolList"]),
                        (s = {}),
                        (o = i.account.address),
                        (c = Object(g["f"])(i.chainId, "liquidity", "vine")),
                        (d = c.fetchLPAllowance),
                        (u = c.getReward),
                        (l = c.fetchLocalAllowance),
                        (p = c.saveLocalAllowance),
                        r.forEach(
                          (function () {
                            var e = Object(A["a"])(
                              regeneratorRuntime.mark(function e(t) {
                                var n, c, m, A, f;
                                return regeneratorRuntime.wrap(
                                  function (e) {
                                    while (1)
                                      switch ((e.prev = e.next)) {
                                        case 0:
                                          if (
                                            ((e.prev = 0),
                                            (n = t.lpAddress),
                                            (c = t.pid),
                                            !o ||
                                              !(
                                                (c > 7 && 128 == i.chainId) ||
                                                128 != i.chainId
                                              ))
                                          ) {
                                            e.next = 23;
                                            break;
                                          }
                                          if (((m = 0), (A = l(n, o)), !A)) {
                                            e.next = 9;
                                            break;
                                          }
                                          (m = A), (e.next = 13);
                                          break;
                                        case 9:
                                          return (e.next = 11), d(n, o);
                                        case 11:
                                          (m = e.sent), p(n, o, m);
                                        case 13:
                                          if (!(m > 0)) {
                                            e.next = 20;
                                            break;
                                          }
                                          return (e.next = 16), u(o, c);
                                        case 16:
                                          (f = e.sent),
                                            (s[t.pid] = Number(f.toString(10))),
                                            (e.next = 21);
                                          break;
                                        case 20:
                                          s[t.pid] = 0;
                                        case 21:
                                          e.next = 24;
                                          break;
                                        case 23:
                                          s[t.pid] = 0;
                                        case 24:
                                          Object.keys(s).length == r.length &&
                                            a("changReward", s),
                                            (e.next = 30);
                                          break;
                                        case 27:
                                          (e.prev = 27),
                                            (e.t0 = e["catch"](0)),
                                            console.log(t, "getReward", e.t0);
                                        case 30:
                                        case "end":
                                          return e.stop();
                                      }
                                  },
                                  e,
                                  null,
                                  [[0, 27]]
                                );
                              })
                            );
                            return function (t) {
                              return e.apply(this, arguments);
                            };
                          })()
                        );
                    case 7:
                    case "end":
                      return n.stop();
                  }
              }, n);
            })
          )();
        },
      },
      je = {
        poolList: function (e, t, n) {
          var a = n.chainId;
          return Pe[1 == a ? 128 : a];
        },
      },
      Ie = {
        namespaced: !0,
        state: Ue,
        mutations: Oe,
        actions: Fe,
        getters: je,
      },
      Ne = (n("d81d"), n("837b")),
      Xe = n("4c8d"),
      He = function (e) {
        return ve({ url: "/cross/record/save", method: "post", data: e });
      },
      We = function (e) {
        return ve({
          url: "/cross/tokens?src_chainid=".concat(e),
          method: "get",
        });
      },
      Ke = function (e, t) {
        return ve({
          url: "/cross/record/list?src_chainid="
            .concat(e, "&account=")
            .concat(t),
          method: "get",
        });
      },
      ze = function (e) {
        return ve({ url: "/cross/record/info?hash=".concat(e), method: "get" });
      },
      qe = {
        assetslist: [],
        chainHistory: { transactions: [] },
        oneChainHistory: [],
        tokenAllowance: 0,
      },
      Ve = {
        changeAssetslist: function (e, t) {
          e.assetslist = t;
        },
        changeChainHistory: function (e, t) {
          e.chainHistory = t;
        },
        changeOneChainHistory: function (e, t) {
          e.oneChainHistory = t;
        },
        changeTokenBalance: function (e, t) {
          e.tokenBalance = t;
        },
        changeTokenAllowance: function (e, t) {
          e.tokenAllowance = t;
        },
      },
      Ge = {
        getAssetslist: function (e) {
          var t = e.commit,
            n = (e.dispatch, e.rootState),
            a = n.chainId;
          We(a).then(
            (function () {
              var e = Object(A["a"])(
                regeneratorRuntime.mark(function e(a) {
                  var i, r;
                  return regeneratorRuntime.wrap(
                    function (e) {
                      while (1)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (0 !== a.data.code) {
                              e.next = 12;
                              break;
                            }
                            return (
                              (e.prev = 1),
                              (i = n.account.address || n.boardRoom.account),
                              (e.next = 5),
                              Promise.all(
                                a.data.result.map(
                                  (function () {
                                    var e = Object(A["a"])(
                                      regeneratorRuntime.mark(function e(t) {
                                        var n;
                                        return regeneratorRuntime.wrap(
                                          function (e) {
                                            while (1)
                                              switch ((e.prev = e.next)) {
                                                case 0:
                                                  return (
                                                    (e.next = 2),
                                                    Object(g["d"])(
                                                      "0x".concat(t.address),
                                                      i
                                                    )
                                                  );
                                                case 2:
                                                  return (
                                                    (n = e.sent),
                                                    e.abrupt(
                                                      "return",
                                                      Object(Ae["a"])(
                                                        Object(Ae["a"])({}, t),
                                                        {},
                                                        { balance: n }
                                                      )
                                                    )
                                                  );
                                                case 4:
                                                case "end":
                                                  return e.stop();
                                              }
                                          },
                                          e
                                        );
                                      })
                                    );
                                    return function (t) {
                                      return e.apply(this, arguments);
                                    };
                                  })()
                                )
                              )
                            );
                          case 5:
                            (r = e.sent),
                              t("changeAssetslist", r),
                              (e.next = 12);
                            break;
                          case 9:
                            (e.prev = 9),
                              (e.t0 = e["catch"](1)),
                              console.log("get Assetslist", e.t0);
                          case 12:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[1, 9]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })()
          );
        },
        saveHash: function (e, t) {
          e.commit, e.dispatch;
          var n = e.rootState,
            a = n.chainId,
            i = n.account.address || n.boardRoom.account;
          He(Object(Ae["a"])({ mdex_chainid: a, account: i }, t));
        },
        getchainHistory: function (e, t) {
          var n = e.commit,
            a = (e.dispatch, e.rootState),
            i = a.chainId,
            r = a.account.address || a.boardRoom.account;
          r &&
            Ke(i, r.replace("0x", "")).then(function (e) {
              0 === e.data.code &&
                (console.log("changeChainHistory", e.data.result),
                n("changeChainHistory", e.data.result));
            });
        },
        getOneChainHistory: function (e, t) {
          var n = e.commit;
          e.dispatch, e.rootState;
          ze(t).then(function (e) {
            0 === e.data.code && n("changeOneChainHistory", e.data.result);
          });
        },
        getTokenAllowance: function (e, t) {
          return Object(A["a"])(
            regeneratorRuntime.mark(function n() {
              var a, i, r, s, o, c, d;
              return regeneratorRuntime.wrap(
                function (n) {
                  while (1)
                    switch ((n.prev = n.next)) {
                      case 0:
                        if (
                          ((a = e.commit),
                          e.dispatch,
                          (i = e.rootState),
                          (n.prev = 1),
                          (r = i.account.address || i.boardRoom.account),
                          (s = i.chainId),
                          (o = Ne["a"][s].cross),
                          (c = 0),
                          (d = Object(g["g"])(t, r, o)),
                          !d)
                        ) {
                          n.next = 11;
                          break;
                        }
                        (c = d), (n.next = 15);
                        break;
                      case 11:
                        return (n.next = 13), Object(g["c"])(t, r, o);
                      case 13:
                        (c = n.sent), Object(g["i"])(t, r, o, c);
                      case 15:
                        a("changeTokenAllowance", c), (n.next = 21);
                        break;
                      case 18:
                        (n.prev = 18),
                          (n.t0 = n["catch"](1)),
                          console.log("getAllowance:", n.t0);
                      case 21:
                      case "end":
                        return n.stop();
                    }
                },
                n,
                null,
                [[1, 18]]
              );
            })
          )();
        },
      },
      Qe = {
        currentCrossAddress: function (e, t, n) {
          var a = n.chainId;
          return Ne["a"][a].cross;
        },
        lockContract: function (e, t, n) {
          var a = n.account.address || n.boardRoom.account;
          return Object(g["e"])(t.currentCrossAddress, Xe, a);
        },
      },
      Je = {
        namespaced: !0,
        state: qe,
        mutations: Ve,
        actions: Ge,
        getters: Qe,
      },
      Ze = n("b85c"),
      Ye = n("9c45"),
      _e = function (e) {
        return ve({
          url: "/mingpool/swap?emevinefinance_chainid=".concat(e),
          method: "get",
        });
      },
      $e = { tradelist: [], rewardList: {}, miningContract: null },
      et = {
        changeList: function (e, t) {
          e.tradelist = t;
        },
        changerewardList: function (e, t) {
          e.rewardList = t;
        },
        initContract: function (e, t) {
          e.miningContract = t;
        },
      },
      tt = {
        getTradeList: function (e) {
          var t = e.commit,
            n = e.dispatch,
            a = e.rootState,
            i = a.chainId;
          _e(1 == i ? 128 : i).then(function (e) {
            0 === e.data.code &&
              (t("changeList", e.data.result),
              1 != a.chainId && n("getUserReward", e.data.result));
          });
        },
        getUserReward: function (e) {
          var t = arguments;
          return Object(A["a"])(
            regeneratorRuntime.mark(function n() {
              var a, i, r, s, o, c, d, u, l, p, m, A, f, h, y, b, C;
              return regeneratorRuntime.wrap(
                function (n) {
                  while (1)
                    switch ((n.prev = n.next)) {
                      case 0:
                        if (
                          ((a = e.commit),
                          (i = e.rootState),
                          (r = t.length > 1 && void 0 !== t[1] ? t[1] : []),
                          (s = i.chainId),
                          (o = Ne["a"][s].mining),
                          (c = Ye["a"][s].mining),
                          (d = i.account.address || i.boardRoom.account),
                          !d)
                        ) {
                          n.next = 44;
                          break;
                        }
                        return (n.next = 9), Object(g["e"])(o, c, d);
                      case 9:
                        return (
                          (u = n.sent),
                          a("initContract", u),
                          (n.next = 13),
                          Object(g["e"])(o, c, d, !0)
                        );
                      case 13:
                        (l = n.sent),
                          (p = {}),
                          (m = Object(Ze["a"])(r)),
                          (n.prev = 16),
                          m.s();
                      case 18:
                        if ((A = m.n()).done) {
                          n.next = 36;
                          break;
                        }
                        return (
                          (f = A.value),
                          (n.prev = 20),
                          (n.next = 23),
                          l.methods.getUserReward(f.pool_id).call()
                        );
                      case 23:
                        (h = n.sent),
                          (y = Number(h[0].toString() / 1e18)),
                          (b = Number(h[1].toString() / 1e18)),
                          (p[f.pool_id] = { userReward: y, userMint: b }),
                          (n.next = 32);
                        break;
                      case 29:
                        (n.prev = 29),
                          (n.t0 = n["catch"](20)),
                          console.log("rewardList error:", n.t0);
                      case 32:
                        (C = Object.keys(p).length),
                          C == r.length && a("changerewardList", p);
                      case 34:
                        n.next = 18;
                        break;
                      case 36:
                        n.next = 41;
                        break;
                      case 38:
                        (n.prev = 38), (n.t1 = n["catch"](16)), m.e(n.t1);
                      case 41:
                        return (n.prev = 41), m.f(), n.finish(41);
                      case 44:
                      case "end":
                        return n.stop();
                    }
                },
                n,
                null,
                [
                  [16, 38, 41, 44],
                  [20, 29],
                ]
              );
            })
          )();
        },
      },
      nt = { namespaced: !0, state: $e, mutations: et, actions: tt },
      at = function (e) {
        return ve({
          url: "/emevinefinance/tokens?emevinefinance_chainid=".concat(e),
          method: "get",
        });
      },
      it = function (e) {
        return ve({
          url: "/emevinefinance/charts?emevinefinance_chainid=".concat(e),
          method: "get",
        });
      },
      rt = n("8c3f"),
      st = [
        {
          id: 128,
          label: "HECO",
          name: "Heco",
          exchangeUrl: "https://friendly-lumiere-8a1ce0.netlify.app/",
          fundUrl: "https://ht.emevinefinance.com/#/pool",
          transactionUrl: "https://ht.emevinefinance.com/#/swap",
          CheckHashUrl: "https://hecoinfo.com/tx/",
        },
        {
          id: 1,
          label: "ETH",
          name: "ETH",
          exchangeUrl: "http://127.0.0.1:5502/homepage/#/ethswap",
          fundUrl: "http://127.0.0.1:5502/homepage/#ethpool",
          transactionUrl: "http://127.0.0.1:5502/homepage/#/ethswap",
          CheckHashUrl: "https://hecoinfo.com/tx/",
        },
        {
          id: 56,
          label: "BSC",
          name: "Bsc",
          exchangeUrl: "https://bsc.emevinefinance.com/#/swap",
          fundUrl: "https://bsc.emevinefinance.com/#/bscpool",
          transactionUrl: "https://bsc.emevinefinance.com/#/bscswap",
          CheckHashUrl: " https://bscscan.com/tx/",
        },
        {
          id: 250,
          label: "FTM",
          name: "FTM",
          exchangeUrl: "http://127.0.0.1:5502/homepage/#/ftmswap",
          fundUrl: "http://127.0.0.1:5502/homepage/#/tmpool",
          transactionUrl: "http://127.0.0.1:5502/homepage/#/ftmswap",
          CheckHashUrl: "https://ftmscan.com/tx/",
        },
		{
          id: 88,
          label: "TOMO",
          name: "TOMOCHAIN",
          exchangeUrl: "http://127.0.0.1:5502/#/tomoswap",
          fundUrl: "http://127.0.0.1:5502/#/tomopool",
          transactionUrl: "http://127.0.0.1:5502/#/tomoswap",
          CheckHashUrl: "https://tomocoin.io/tx/",
        },
		{
          id: 1666600000,
          label: "ONE",
          name: "HARMONY",
          exchangeUrl: "http://127.0.0.1:5502/#/harmonyswap",
          fundUrl: "http://127.0.0.1:5502/#/harmonypool",
          transactionUrl: "http://127.0.0.1:5502/#/harmonyswap",
          CheckHashUrl: "https://explorer.harmony.one/tx/",
        },
      ],
      ot = st,
      ct = null;
    u.a.use(le.a);
    var dt = le.a.Store({
        modules: {
          account: me,
          boardRoom: ke,
          liquidity: Ie,
          reward: nt,
          crossChain: Je,
        },
        plugins: [
          Object(pe["a"])({
            storage: window.sessionStorage,
            overwrite: !0,
            key: "EmevineData",
          }),
        ],
        state: {
          routerName: "",
          CurrencyPrice: {},
          title: "EmevineFinance",
          walletConnected: "",
          account: {},
          wallets: [
            { id: "injected", name: "Metamask", ico: n("ba67") },
            { id: "walletconnect", name: "Wallet Connect", ico: n("0131") },
          ],
          txStatus: { pending: !1, hash: "", text: "" },
          showLoding: !1,
          language: localStorage.getItem("language") || "en",
          chainId: 128,
          chainName: "Heco",
          homeData: {},
          address: Ne["a"],
          balance: null,
          wthPrice: 0,
        },
        getters: {
          isPC: function () {
            return !navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i);
          },
          isMobile: function () {
            return !!navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i);
          },
          chainId: function (e) {
            return e.chainId;
          },
          currentAddress: function (e) {
            return e.address[e.chainId];
          },
          isLogin: function (e) {
            return !!e.account.address || !!e.boardRoom.account;
          },
        },
        actions: {
          resetConnect: function () {},
          onConnect: function () {
            var e = this;
            return Object(A["a"])(
              regeneratorRuntime.mark(function t() {
                var n;
                return regeneratorRuntime.wrap(
                  function (t) {
                    while (1)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (t.prev = 0), (t.next = 3), Object(g["b"])();
                        case 3:
                          (n = t.sent),
                            n.length && (e.state.account.address = n[0]),
                            (t.next = 9);
                          break;
                        case 7:
                          (t.prev = 7), (t.t0 = t["catch"](0));
                        case 9:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[0, 7]]
                );
              })
            )();
          },
          getCurrencyPrice: function (e) {
            var t = e.commit,
              n = e.state,
              a = n.chainId;
            1 != a &&
              at(a).then(function (e) {
                0 === e.data.code && t("setCurrencyPrice", e.data.result);
              });
          },
          initData: function (e) {
            var t = e.dispatch;
            t("getHomeData"),
              t("getBalance"),
              t("getCurrencyPrice"),
              t("liquidity/getApyList"),
              clearInterval(ct),
              (ct = setInterval(function () {
                t("getHomeData");
              }, 9e3));
          },
          getHomeData: function (e) {
            var t = e.dispatch,
              n = e.commit,
              a = e.state,
              i = a.chainId;
            it(1 == i ? 128 : i).then(function (e) {
              if (0 === e.data.code) {
                var a = e.data.result;
                (a.mdex_tvl = Number(a.mdex_tvl)),
                  n("changeHomeData", a),
                  t("boardRoom/getInfo");
              }
            });
          },
          getBalance: function (e) {
            return Object(A["a"])(
              regeneratorRuntime.mark(function t() {
                var n, a, i, r, s, o;
                return regeneratorRuntime.wrap(
                  function (t) {
                    while (1)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (
                            ((n = e.commit),
                            (a = e.state),
                            (i = e.getters),
                            (t.prev = 1),
                            1 != a.chainId)
                          ) {
                            t.next = 4;
                            break;
                          }
                          return t.abrupt("return");
                        case 4:
                          return (
                            (t.next = 6),
                            Object(g["e"])(i.currentAddress.vine, rt)
                          );
                        case 6:
                          if (
                            ((r = t.sent),
                            (s = a.account.address || a.boardRoom.account),
                            !s)
                          ) {
                            t.next = 13;
                            break;
                          }
                          return (t.next = 11), r.methods.balanceOf(s).call();
                        case 11:
                          (o = t.sent), n("changeBalance", o / 1e18);
                        case 13:
                          t.next = 18;
                          break;
                        case 15:
                          (t.prev = 15),
                            (t.t0 = t["catch"](1)),
                            console.error("getBalance error:", t.t0);
                        case 18:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[1, 15]]
                );
              })
            )();
          },
        },
        mutations: {
          setChainId: function (e, t) {
            e.chainId = Number(t);
            var n = ot.find(function (e) {
              return e.id == t;
            });
            e.chainName = n.name;
          },
          setChainName: function (e, t) {
            e.chainName = t;
          },
          setRouterName: function (e, t) {
            e.routerName = t;
          },
          setCurrencyPrice: function (e, t) {
            e.CurrencyPrice = t;
          },
          setLoding: function (e, t) {
            e.showLoding = t.show;
          },
          setTerminal: function (e, t) {
            e.terminal = t;
          },
          setLanguage: function (e, t) {
            localStorage.setItem("language", t), (e.language = t);
          },
          changeHomeData: function (e, t) {
            e.homeData = t;
          },
          changeBalance: function (e, t) {
            e.balance = t;
          },
          changeWthPrice: function (e, t) {
            e.wthPrice = t;
          },
        },
      }),
      ut = n("4027"),
      lt = u.a.extend(ut["a"]);
    lt.prototype.closes = function () {
      this.$el &&
        this.$el.parentNode &&
        this.$el.parentNode.removeChild(this.$el),
        this.$destroy();
    };
    var pt = function (e) {
        var t = new lt({ el: document.createElement("div"), propsData: e });
        return document.body.appendChild(t.$el), t;
      },
      mt = pt,
      At = function () {
        var e = this,
          t = e.$createElement,
          a = e._self._c || t;
        return a("section", { staticClass: "dialog" }, [
          a(
            "div",
            {
              staticClass: "dialog-main",
              on: {
                click: function (t) {
                  return t.target !== t.currentTarget ? null : e.close(t);
                },
              },
            },
            [
              a("div", { staticClass: "dialog-box" }, [
                a("p", { staticClass: "p-img" }, [
                  a("img", {
                    staticClass: "close-icon",
                    attrs: { src: n("c2f4") },
                    on: {
                      click: function (t) {
                        return t.stopPropagation(), e.close(t);
                      },
                    },
                  }),
                ]),
                a("div", { staticClass: "dialog-body" }, [
                  a("div", { staticClass: "show-icon" }, [
                    a("img", {
                      staticClass: "close-icon",
                      attrs: { src: n("23ac") },
                      on: { click: e.close },
                    }),
                  ]),
                  a("div", { staticClass: "div-p" }, [
                    a("p", [e._v(e._s(e.title))]),
                    a("p", [
                      a(
                        "a",
                        {
                          attrs: {
                            target: "_blank",
                            href:
                              "https://hecoinfo.com/tx/" +
                              e.url +
                              "?" +
                              e.globalLanguage,
                          },
                        },
                        [e._v(e._s(e.info))]
                      ),
                    ]),
                  ]),
                ]),
              ]),
            ]
          ),
        ]);
      },
      ft = [],
      ht = {
        name: "tipDialog",
        props: {
          title: { type: String, default: "" },
          info: { type: String, default: "View on Scan" },
          url: { type: String, default: "" },
        },
        computed: {
          warnColor: function () {
            var e = "";
            switch (this.type) {
              case "success":
                e = "#02C09F";
                break;
              case "error":
                e = "#FF6971";
                break;
              default:
                e = "";
            }
            return e;
          },
        },
        methods: {
          close: function () {
            this.$el &&
              this.$el.parentNode &&
              this.$el.parentNode.removeChild(this.$el),
              this.$destroy();
          },
        },
      },
      yt = ht,
      bt = (n("6e9e"), Object(T["a"])(yt, At, ft, !1, null, "32a8e8a8", null)),
      gt = bt.exports,
      Ct = u.a.extend(gt);
    Ct.prototype.closes = function () {
      this.$el &&
        this.$el.parentNode &&
        this.$el.parentNode.removeChild(this.$el),
        this.$destroy();
    };
    var wt = function (e) {
        var t = new Ct({ el: document.createElement("div"), propsData: e });
        return document.body.appendChild(t.$el), t;
      },
      vt = wt,
      Bt = (n("b680"), n("fb6a"), n("901e")),
      Tt = n.n(Bt),
      Dt = n("2a5e"),
      Et = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n("div", e._g({ staticClass: "card" }, e.$listeners || {}), [
          n("div", { staticClass: "card-inner" }, [e._t("default")], 2),
        ]);
      },
      xt = [],
      Mt = { name: "card" },
      kt = Mt,
      Rt = (n("a0a5"), Object(T["a"])(kt, Et, xt, !1, null, "4e819d9b", null)),
      Lt = Rt.exports,
      Pt = n("6deb"),
      St = n("87f4"),
      Ut = n.n(St);
    u.a.component(Lt.name, Lt),
      u.a.component(Pt["a"].name, Pt["a"]),
      (Ut.a.props.options.default = function () {
        return { decimalPlaces: 2, useEasing: !0, useGrouping: !0 };
      }),
      (Ut.a.props.delay.default = 2),
      u.a.component("CountUp", Ut.a);
    var Ot = /(\d{3})(?=\d)/g;
    u.a.filter("currency", function (e) {
      var t =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
      if (
        (e instanceof Tt.a && (e = e.toNumber()),
        (e = parseFloat(e)),
        !isFinite(e) || (!e && 0 !== e))
      )
        return "";
      var n = Math.abs(e).toFixed(t),
        a = t ? n.slice(0, -1 - t) : n,
        i = a.length % 3,
        r = i > 0 ? a.slice(0, i) + (a.length > 3 ? "," : "") : "",
        s = t ? n.slice(-1 - t) : "",
        o = e < 0 ? "-" : "";
      return o + r + a.slice(i).replace(Ot, "$1,") + s;
    }),
      u.a.filter("balanceNum", function (e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3,
          n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return (
          e instanceof Tt.a || (e = new Tt.a(e)),
          u.a.filter("currency")(Object(Dt["b"])(e, n), t)
        );
      }),
      u.a.filter("ellipsis", function (e, t, n) {
        if (e.length <= t + n) return e;
        var a = e.substr(0, t),
          i = e.substr(e.length - n, e.length);
        return a + "..." + i;
      });
    n("a7c1");
    var Ft = {
      data: function () {
        return { chainList: ot };
      },
      computed: {
        chainName: function () {
          return this.$store.state.chainName;
        },
        globalGetImgUrl: function () {
          var e = this;
          return function (t) {
            var n = e.$store.state.chainName;
            return t
              ? "https://emevinefinance.com/token-icons/"
                  .concat(n.toLocaleLowerCase(), "/lp/")
                  .concat(t.toLocaleLowerCase(), ".png")
              : "";
          };
        },
        getglobalGetConfig: function () {
          var e = this,
            t = this.chainList.find(function (t) {
              return t.id == e.$store.state.chainId;
            });
          return t;
        },
        globalGetTokenConfig: function () {
          var e = this;
          return function (t) {
            var n,
              a,
              i = e.getglobalGetConfig;
            return (
              void 0 == t.token0 || void 0 == t.token1
                ? ((n = Ne["a"][e.$store.state.chainId].token0),
                  (a = t.lpAddress ? t.lpAddress : t.address))
                : ((n = t.token0), (a = t.token1)),
              ""
                .concat(i.transactionUrl, "?inputCurrency=")
                .concat(n, "&outputCurrency=")
                .concat(a, "&lang=")
                .concat(e.$store.state.language)
            );
          };
        },
        globalCheckHashUrl: function () {
          return this.getglobalGetConfig.CheckHashUrl;
        },
        globalLanguage: function () {
          return "lang=".concat(this.$store.state.language);
        },
        getGlobalAcrossUrl: function () {
          var e = this;
          return function (t) {
            if ("" == t || !t) return "";
            var n = e.getglobalGetConfig.name;
            return "https://emevinefinance.com/token-icons/"
              .concat(n.toLocaleLowerCase(), "/0x")
              .concat(t.toLocaleLowerCase(), ".png");
          };
        },
      },
    };
    (u.a.config.productionTip = !1),
      (u.a.prototype.$overalltip = mt),
      (u.a.prototype.$toatMsg = vt),
      (u.a.prototype.axios = ge.a),
      u.a.component(c.a.name, c.a),
      u.a.component(s.a.name, s.a),
      u.a.component(i.a.name, i.a),
      u.a.use(l["a"]),
      u.a.mixin(Ft);
    var jt = new l["a"]({
      locale: dt.language,
      messages: { en: n("f379"), en: n("c2e7") },
    });
    (window.$s = dt),
      (window.$v = new u.a({
        store: dt,
        router: de,
        i18n: jt,
        render: function (e) {
          return e(ie);
        },
      }).$mount("#app"));
  },
  5739: function (e, t) {
    e.exports =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAFPUlEQVRYR72ZbWxTVRjH/8+5Gx1rHSwDZNMYJIGoEfggRnlJdAGCW++ARLOJ8SULkPGy3YWJsLZLINp2DIS42w0wQEyIQpxZYtLbKaKRiLIQMX4xKhISjcnAgDKYIKO79zG3o6Rsbe9tS3o/7jz/5//bc+55zrmnhCyf9n3aTEOnlWzwPAIqAJQzUEHgKEAXGRgg4gGA+gki7FWqL2djRZmIdnVHpkdHeCMTVoF5TgZaA8BpEPU6JhcefOv15Tfsam0Bdhz+9oHojcEtxHiTwU67yZPGEV0SoB0L5hQfrqysHLHKZQnYHuqr01lXwZhmlSzD8XNCEm94G91n0ulSAjIzBUIRP5i9GRrbDieiYRDW+prkD1OJkgLuPnLceXsw+hEzr7TtllOg2OVTqluJiMemGQdoVi4YinzKzCty8sxUTPR2myJvtwQMhCJBNgxPpvnvRzxB1Pma3T2Jue6pYKBLe5l1PnY/zLLKQbgpQVrsUap/jOvvAqpqX8l11i8AmJIi+QfOElfL5vrKwYCqbWPmneOmg9DvU2oWpoPb+f6JSSO3hvcAvCZZHIHO+JrlZ8cB+lUtkG7FOktcpSacKcwF0NTH+uq/V6+n/EeEeKmtyd1rjscq2BH6oiLKw+fBKE4lml0uF9TWkn4/AO/kMMwFmdyPzi+a63zCbOSxAH9nuB1Aa7qpWTTXVRjv/LlW0BoQgKDatib5kxhgQA3/wozH0gFOLSqf0NAwP5qfCppzS8faFPkVCnZFZhu6cc5q1c0uf9RRW/vk7XwBEtG1KY7pUykYCm81DHRYAT5U4ppYX195K1+Apo9EtIz8qnYUzKutAIvLy4pbahf+l09AIrGVAmr4JDOeswKcWlTubGiYfzOfgILoPfJ3ar8BPMsK0FE6wRU/aOZlFY82wY/Jr4aHwHBZARa6Sku2rVk8NLaCBPzFwIOxfDZ2krhPQNXS9MHRKCI6RQFVG2TmSVaAJSRNUpTqWPcPhCKbwbyHgE4XROsQeDXD6AbT2bZm2fJ1sdUHRwG/Nqf4Z4AftwIsKCqa3Nqw7JoZ175PK8WImJG4qe86EJ4VZXL4Nsg/WeW6szmMO/uN1RFwlAKd4S8ZWGKVNHEvtoq1M25niiHoXfMdPALGa1ZJi52FZS1rX/jHKs7uuB1AEqKF/CFtIwzutkospIlTvI1L/7aKsztuB1BIBQupQ+17OMr6nzYSm9+2SR8iSvt1mPrUktrV7A5eRa64c5rRzgL8lA3IvIUQ4ZBPqVk3eprpDHsYCKZz9ymySPbVlS2x1RRLEFWeZvfnMUDzGK4P37rAjLJUhvkEJOB7ryI/Yxbk7rtjNl82jL2pABMPC9lWLa5T1T7HddZjJ6NkjyRQ6WmqOWmOJX40OYbY+JXBM5KJzI3bBbE9vptkCzl6z3N1BxgtKZZcX1uz7I6P3bP62kPh53WDTgBckC1ALjoiuuwQ9PSWRvcfSQHNP/pDkfUwjP25GGWjJaIoAUu8inwqUZ+0fwU6tW4Gb8zGKFsNQazzNbsPjdUnBezpYen8xchuBm/O1tCubrRyvMmr1BxMpkm7AwRDkXrDMA4AmGDXMMO4KwWSeLG10f1NKp3lBWaw67MFhqHvB/O8DM3ThhPRcVEorfdsqPo9XaAloClmZhEMaa+C8Q4Dj+QGSj+QJG3zNVZ9ZSePLcB4IrPBDkGvA9MqJl6e7qpkjPkVItJIUK9nU3Ukky0zI8BE0709pyfevDS4VIDnMdj8GSL2UwQA8/bhIoEHGDQgCeqfOa36u/i9jp2qJcb8D3OBdIlCiwU3AAAAAElFTkSuQmCC";
  },
  6389: function (e, t) {
    e.exports = VueRouter;
  },
  "65dc": function (e, t, n) {
    "use strict";
    n("2f79");
  },
  "67eb": function (e, t) {
    e.exports =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAoCAYAAACFFRgXAAAEVUlEQVRYR9WZWexdUxTGfx9CzCG0oTU8tJHwJEGrhgcJakqRkjSpKNqkVCSiL6JFgsQshqJKSI0JgtZUQSKiKRIPHowRomaNGhJTwpKPfW7Ovffcc/b5/0/TWo/3ruE7+6y91rfWEeOQiNgDOBk4GpgE7AXsDewEfAt8BXwNfAA8C6yT9Pc4QqK2xhGxA7AAmA3MALZq4WMD8Bxwl6Q3W9j1VLMBR8Q2wLnAlekkxxKvbPMUsETSe20cZQGOiOnAA8ABbZxn6Do9lgMXS/ojQ785JSJiHnA3sF2OwzHqrANOl+R8r5WRJxwRzs0b/fRNTjr63xf0VElv1/mrA3wDsLgjMLluNgLTJX00yqAScEqD+3OjdKz3YQL9Y5XfIcARcQTwKrBtx0DauHsJOFHSX4NGfYAjYmvgXeDANt43ke4CSfc2AXZDuKdDAC5bq4EXgM+BXYGjgPmlN2idT4CpA3F9CadI+q38e++EI2JH4OOaprA+nf5JmQ/0M3CaJKdXn6S6fl3qeg8BdwKzKvxeKunaUYAvBG6vAbMEcOVwgDMyQM+R9FiTXkRckrpnADsP6PviTZT0Z/F7+YRfAY6pCTBL0qqIsI3BXwE456vkfUmN9yAiJqT7sjvwBFQ2shMkvdgHOCJ2A74DzBdGyVxJDxd/RsQhwDXAcRUGN0vyyTVKRJjtPVJxuoWtidIFg4DPAlY2eF8p6eyKfDwcWAocW3rgxZJuakIbEVMA1906xvclsI8kp8x/ryAibgUuagjgmniQJAcYkohw/rmG72sQkl7LAHwk8HqTnn1K8qXvAX488ds6W5enX4DzJbkCjFsi4hRgVYYjt+t/+XNxwm8kMl5ne44kU8zOJCIuA67OcOjy+HQZ8KfA/g2GT0rylNGZRIQbyswMh4skuVb3TjgHsPVN/57JCNCoEhHbA98AuzQqwxDgnJSwX+fuQkmPZgSpVYmI84AhrjDCaCglci5d4etl4HlgWbkDtX2AiHgHODjT7rCC2Lcpa4XvyyVdlRmoUi0i5qRmketmsiTX414O5zSOwvnv3kVIcitvLRGxJ+BJ2TuNHPGcN2mwceS05rJzU77rgVsk/ZQT1TppVeDylMv4bLZc0sIiRhvyU4XLM9jsKgo5qJzA+rK2LY0zJa2pArwIuCPztL4AHjQdzRnNE7m6z/w403+h5rc3YRS9rCPwzjkzs+8TWVlf5FQTgIg4E7jNvLZJt+L/pZL6OuHgTFc3Inm5t8wboIKIjAKQeK6BzgWmjQGoTTwiTZX0a9l+LEOoaZ4Zm8nIZ8APichPThvM/YBDa8h9Lv75kpxGfbKljvkumcc3jvnFo2zmRYq3PqaTrkBDsqWtqjx0Tmu9qkpF/v+1DBxIj029bn0r7TBcGWplcy+0PSeuSAttc5RGyQKcUqTrTwae5bzZ6f6TQfmxO/go469JKyStbTzONlUix1nDZy+PP6aGzkvv7Ax07Xg/e/0DmwKEOJv1KO8AAAAASUVORK5CYII=";
  },
  "6bab": function (e, t, n) {
    e.exports = n.p + "img/pc-pending.5226b126.gif";
  },
  "6deb": function (e, t, n) {
    "use strict";
    var a = function () {
        var e,
          t = this,
          n = t.$createElement,
          a = t._self._c || n;
        return a(
          "span",
          t._g(
            t._b(
              {
                class:
                  ((e = { disabled: t.disabled }),
                  (e[t.btnCls] = !0),
                  (e["icon-button"] = !!t.icon),
                  e),
              },
              "span",
              t.$attrs,
              !1
            ),
            t.disabled ? {} : Object.assign({}, t.$listeners)
          ),
          [
            t.icon
              ? a("i", { staticClass: "icon" }, [
                  a("img", { attrs: { src: t.iconEl } }),
                ])
              : t._e(),
            t._t("default"),
          ],
          2
        );
      },
      i = [],
      r = {
        name: "Button",
        computed: {
          btnCls: function () {
            switch (this.type) {
              case "flat":
                return "flat-button";
              default:
                return "main-button";
            }
          },
          iconEl: function () {
            switch (this.icon) {
              case "plus":
                return n("e359");
              default:
                return "";
            }
          },
        },
        props: {
          disabled: Boolean,
          type: { type: String, default: "main" },
          icon: String,
        },
      },
      s = r,
      o = n("2877"),
      c = Object(o["a"])(s, a, i, !1, null, null, null);
    t["a"] = c.exports;
  },
  "6e9e": function (e, t, n) {
    "use strict";
    n("092d");
  },
  "753b": function (e, t, n) {
    e.exports = n.p + "img/Close.04c4eced.svg";
  },
  7913: function (e, t) {
    e.exports =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAFMklEQVRYR81ZXWgcVRQ+524iZLeiEPCnQitNEUQTKiZ9aH2w4IMUo1V0BePO3KvxwX/aWBDRNm2RgliVWvpS69w7GqFT//ogLUJpXxQqUQkNlkoLoqU/glRtdtef7Dlyl9kymZ1kZ3dNycDAcn/O/eY753z33LsILT5jY2PLpqen1xHRnYi4GABqr7V41r7MfFYI8S0zH5BSnm5lKWxmku/71zHzc8z8IDPf3sxcRJxExM8QcZfjOL+mnZsKoO/7OSIaAYCNzLworfGkcYg4hYhvdnV17cjn81ONbDUEaIyxbO1m5hsaGWuy/0Imk3nGcZxP55o3K0BmRmPMawAwan83uXiq4YjIiLjFcZyt9nci40mNQRB0FYtFAwCPpFqp/UH7c7mcm8/ny3FTdcxYtrTW+64guBqm/VLKR+NM1gHUWm9i5i3tk9K8BSHEqOu6M9aeATBMiE/mK+YaQbbsCSEejibOZYChlJyah2xthCvefyGXyy2vSdBlgLO49ofe3t4V/f39/yatorU+wsx3N0KAiC9KKXcmjTPG7CSi56N9UVdXAdodgohOJ4kwIu6VUg4nGfd9f22lUvliTh1DLHd2dt40NDR0MT7O87zXAeCVusxFnBJC9NgdpwrQGLOViKzmJT6IuEFK+Xa8M9TK48x82xxzfSmlmwDOspbIqh0rhNjmuu6mKkCttV1k1r0VEStCiF7HcU7EF9JaK2Z+fzaAHR0dqwuFwtcJ8wwzO3N82KSUstdqXg8zn2oUR0KIJ13XrQMSBMFVpVLpJ2a+McFV1UVmid85Ado5iLjcbmcbiGhHI4CIOMzMY1LKfxCRouM9z3sZALYn2HgBAPYopf5qlsHQzSPoed4YADyWBiAiHiKiAaXU5zGA1yLiL9EkQ8QyMy8WQtznuu6HrQAEgI+si9NKxXAIMFBKrU5Y8C1mXl9rR0QtpVSe5x1VStVJkdY6jYuPWoAnmfmWJhg8g4h3SSm/is4xxixhZitVHaF7VjFzJwDsk1LWxWdKgD9agJfSFKE2BkMGzwDAAaXUugTpqIXLcaVUn9b6AwC4pw2AUzYG/wSAq5tkkDOZzK2FQuFkjMU7iOg7RLTHgjFEPAcAv7cKEAAuteTiUALek1I+lRCLB7LZrFMulwtE9C4inm8VICJWXdxsklgX2+dvALhZKXU+CjIIgmvy+fwfWusJZu5rE+DRVmSmBtAK6XYpZd1eaoxZSUTHQqZbZrAqM80IdSRJqqQh4sVsNrskfjrTWu9h5mqB0Q6DQoiR1FsdIj6ezWYPFovF32Jxt14p9U6tLQiCRaVS6VxNGdoBWN3qrOEUxcIJIcSA4zhFrfUuZn42Isg/L126tGfNmjXTts0YM0xEeyL9LbnYHvSrxUIIcBszv5okNdaNmUxmZaFQqBYU4+PjnZOTk19GC1XLrpTSaqD92GPMvDIC8KCUcm2CZqYvt2YrWBHRsnKvlPJwTO+6iegbAFgWtk8opVYYY/qIaCIC7nB3d/f9g4ODpaSPN8a8QUQb43329mFGwRq6ZjMRjUYH2ysKW34nGa9UKgMAcKTWJ4QYZOa1zPx0mBzfM/OqpEomas/zvL0A8ES0ra7kt502uIvFonXj9UmArmBb8qHJAvB9/yEi+nhBHjtrDBlj6lx9pdhreHC3QBb81UcYjwv38qjmTsuk7/v2nmbzfMVky9dv0ZiziVOpVHbPQ3a3d4EZBWklqFwujzDzS2mq77mS6n+/Ao6xaa9I7Ba1bkFdoicxYg/8iPjAfP8N8R+IKjtc73VccwAAAABJRU5ErkJggg==";
  },
  "7acc": function (e, t) {
    e.exports =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAYCAYAAADKx8xXAAACKUlEQVQ4T5WTQWgTURCGZ96maiO2CArNGt2sFAveJNjdqIUeqhIEi0JAjwoWvPTiQSwVQSiIB09e7KEXKQhRi1CkWARBTLLxEioUhMZsNMkGQRRLsZVkf8mWluwmG3VOy5v/m/+9mVnuU/Q4E6bJCTFuFdNzm9+dg0OK9gWE8KaM6yzoilUwHv8n6MhtQXytUjRmOsEsR7RRG/SUCIEmIZjpumVmH/nB3EiEFP0i2H5CoK5mWAgarxSyD9vBDtgIWdXPA3YSoB3NQiZxwypmHnjhbbCRcDrMeA5gV7NQMN+qmMY9d0FPKVnVTsOmFyB0u1LMd6qmcXfrzOW4dRiO6MM12PNEtNvlImjKKmQnncH5dU0+rJ2ybXpJwB63s7hfNTM3fcGG+EBE0+uEBQL1ut4sxGhHEADLqj4L4LL7yuK2L5hIJKS37z9PE3DV06TVgKBoWzAaHesqf8vNEijhHgF/l5jjJTNjtIDhWKy7btnPAMTdTlQNCOlM6VP6Q0tX+/u1nrUazQMYcjkxFyVJjJTy6ZWWOcpHhvdh49cCCFE3RB9FgEfKK0apZXMODpyUa+u1RRCOeqBcUAqczedTX1t2VRkYVDfW+TURVE/F1E4OnjPNNz/aLQmHlMF3IDrhedPi/p7eC0tLr9b8Nov7ItrP5rViprm9QeXS8nLytx/kdDWk6lOw7QlHxDwzdPzQWDKZrHeCtschK7FjzIyymcr9Dej4W/0L/Af5eMZi1w5ZKQAAAABJRU5ErkJggg==";
  },
  "7c55": function (e, t, n) {
    "use strict";
    n("2395");
  },
  "7ded": function (e, t) {
    e.exports =
      "data:image/png;base64,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";
  },
  "837b": function (e, t, n) {
    "use strict";
    var a = {
      128: {
        vine: "0x090A0f8eC4D96d4DBE34187b4790191a40726319", // Contract address
        wht: "0x5545153ccfca01fbd7dd11c0b23ba694d9509a6f", //wht address
        base: "0x5545153ccfca01fbd7dd11c0b23ba694d9509a6f",
        hoo: "0xe1d1f66215998786110ba0102ef558b22224c016",
        oldhoo: "0xe1d1f66215998786110ba0102ef558b22224c016",
        jt: "0xc0ecc17c6c87b32b2a86d9f4a783974cb1e6507c",
        zt: "0x2b116651f2e4d50b53b3299d11cb2d96d97ae24a",
        one: "0x04baf95fd4c52fd09a56d840baee0ab8d7357bf0",
        boardroom: {
          wht: "0x68363abF41AE07B89630e9dFC4090C705BE7eBC2", //Airdrop address
          vine: "0x96005cde2477259AdA034c81e82cc99ed49E2CfC", //Airdropvine address
          hoo: "0x10b4eD4FCfd810554E465902CD5acC50441C4aE0",
          oldhoo: "0xca8c672abc97b362738fb77ffb5b2b72f6e46161",
          jt: "0x2FE93f0B9D397E30ac341BF78693f5ce51E2396f",
          zt: "0xaCB0126A1fe6104881443B427792809EDBc90D7e",
          one: "0x18F735dB04247De046161e31C3D6522429A98DD4",
        },
        liquidity: { vine: "0xac91d6D9c8daA66e699B52F58b09038179a25BAA" }, //Hecopool address
        mining: "0x7373c42502874C88954bDd6D50b53061F018422e", //SwapMining address
        cross: "0x4fE451186c0D69205ACc1fA00FD75fc6d71e47eE",
        token0: "0xa71edc38d189767582c38a3145b5873052c3e47a", //heco-peg usdt Constant
      },
      56: {
        vine: "0x9C65AB58d8d978DB963e63f2bfB7121627e3a739",
        wbnb: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
        base: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
        hmdx: "0xaee4164c1ee46ed0bbc34790f1a3d1fc87796668",
        boardroom: {
          vine: "0x6aEE12e5Eb987B3bE1BA8e621BE7C4804925bA68",
          hmdx: "0x55c11417C7D9789161A3F8478b8B9057830a6fc9",
        },
        liquidity: { vine: "0xc48FE252Aa631017dF253578B1405ea399728A50" },
        mining: "0x782395303692aBeD877d2737Aa7982345eB44c11",
        cross: "0xE3D0FB6E3cB5DA61EB18b06D035052441009d1E6",
        token0: "0x55d398326f99059ff775485246999027b3197955",
      },
      1: { cross: "0x2aA63cd0b28FB4C31fA8e4E95Ec11815Be07b9Ac" },
    };
    t["a"] = a;
  },
  "86fa": function (e, t) {
    e.exports =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAErUlEQVRYR82ZTWxUVRTHz/92nNApJi7UGllSXSBscKcLdUfqAjFklCHz3h1NiAFFY43R+AEoiUYlRjEqGnzvDe1oJoRSja6UYoIbU6JoWUAwpgZJcFGN0A870/s3t5mHz2Gm702nQF8yyeTd8/Gbc+8995w7kAU+vu+vBLDeGHMngFtFJPxYi+fsh+Q5pdRxkkNa618W4gqtKBWLxZuNMU+IyAMkV7eiC2BURA4rpfY6jvNHUt1EgOVyefnU1FQfyWdILk9qvJEcgIsA3urs7NyTzWYvxtmKBSwWiw/Ozs6+LyLdccZaHD/f0dGx1XGcQ/PpNQUkiWKx+DLJHfZ7i84TiQMggF2O47xivzeMeKOX5XK5c3JyskhyYyJPbQoBOJjJZJxsNjtVb+qyyNhoBUFQvlpwIZCFdF03Wx/JywCDINhhjNnZZlAWpK6U2um67q6o8v8A7YYwxhy8UmsujtpGTym1MbpxLgHaVDIxMXHmCuzWOK768fNdXV09YQq6BHgtp7aeMDrVc4ClUql7ZmbmTLtJuNVQNZO3yTydTvfkcrnzc4C+779K8sXFctDkBPmVpJdOpz+rVqv3GGM+njdBA7u11i+FgKMk71hsQADTJA8B+MR13SNhCunv719TqVR+igE8qbVeDVuVkLSbY9EeAD+IyH6SA4VC4a96w57nPSwin8Y5BNBjk/LTxpg9ccJx4wD+FJEBkvsLhcKPoXypVLqxUqk86jjOmwBMbUm9TfKpOJtKqT54njcgIrk44Sbryp6f31io7u7uwd7e3n+ickEQuMaY7alUKpfP50+FY57nfScidyXwWbJTPEzy3gTCl0QA/FZb8N7mzZvH6nUHBgZum5mZ+VBEblq2bNm6TZs22QJ27hkeHk6NjY39TbIzzieAoxbwFMnb44RFxEbncG3Bfx1OV1RvZGTkutHR0WdFxGaE70mur1+DBw4cWFutVo8n8CcATlvAC/PlPwC/i8gbmUymP5vNjjcz7Pv+3SQ/EpFVAAZJ5gqFwnSDDfKYiHyQEPBiLGBHR8f9juN81cyg53k3iMjrALbUzvB9WuutjSJc2yAeSZ0EUEQuxE5xLZd9AWCI5JfRKfN9Pysi75C8xTpsVI00iOBJG+UkgOEUt7JJKgC+Jfm5iKwTkV7rCMAsgG2u6+6bz/HQ0ND14+PjNi+qhIBH20ozNbhpADnXdQfjnAZBcJ8x5kicXGS81HaiBtCvtc4ncep53nMi8loS2dqS6Wv7qAPwrtb6ySROfd8/RHJDEtna7PSExcLPrTbioZPoxgiC4BEROea67ulGEL7vnyW5IgmgbfS11msWo9zaXigU9vq+/wLJ3baWE5FtWutiFCQIghXGmLNJ4GrR+6/caqdgVUrlSa4i+XzUOYCiUso25hP2fRAEG4wx8zbpob79kUqplfaKZDFK/kkRyTSJzKlUKvVQPp8/4fv+PpJbkkTwspLfKl2ppglAVUROiMjahN1i46bJQi7ptjMM/bXs7mIbdwu55K8+autx6V4ehVO9pK/foqlgyV5gRiGX9BVwFLR24jwuIhtabfQB2EJ1MJ1Ov2evNJIk7LkjL6lgvdzV+hviX7W9oU2GeBcpAAAAAElFTkSuQmCC";
  },
  "8bbf": function (e, t) {
    e.exports = Vue;
  },
  "8c3f": function (e) {
    e.exports = JSON.parse(
      '[{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]'
    );
  },
  "96d6": function (e, t) {
    e.exports =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANwAAADICAMAAAC0w38+AAAAllBMVEUAAAD/aXH/lJT/aXH/enr/aXL/anH/bHT/anL/bnf/fYr/anL/anL/aXH/b3j/b3z/anL/anH/anH/anL/a3P/bHX/bHT/anH/anL/anL/anL/anL/a3P/a3T/bXX/bXX/aXH/anL/anL/anL/a3P/aXL/aXL/anL/a3P/aXH/anL/anP/anL/anL/bHP/anL/anL/aXGSKcs9AAAAMXRSTlMA+wLnCO6zPPMSBfeh4xcNe9bPmUIpI8mIWMOBSDEeG9qujmY33qdfTr5wU5NrLbl3Th/gYwAABkBJREFUeNrtnety2jAQhdfGgAn3O5RQKOGW0Cbs+79cZ9qZSKoQSF7PeDfV95tkOLEi7dk9AohEIpFIJBKJRGSRnQfjj2H9MPo4Li4b+EL0lz9y1Jlfv4q+1q6NFknnHeSTXet4k2TcA+FMuuik1gTRvCR4h+QXyCXd4QPGGQjlqYEP+SZV3U/0oAMiOaEXbyCQdRsNRqvzurV5n6zmCeokExBHq2seajP4ZDM25NXlVSsd1PiYgsF3Y6tpgDAmqLFLrUNihRpLEEV2QMXNo3qJiloLJLHQnxvcZCX1PFhrO8brE9wk/YEKQTtmOsJP8u/goFVTrzrIKVSuxj+ck4uxdoUwa2u1YwputAMhWYMMXrX3PIU7bHKtgHkCCbygYhDyUgH0tLbC8MHjSL+p17ZnwB9th0/28IBpWzszgD3nsC1wgIoXYE5fMwPdvodbH2r2gHs7bIyKZ/BgrxUzP4A1zfCCcYeKCzAm24Yvsv7BWMh8WRQxac+oGANb3hPNfBcz7Wyb0OncMAPetLRjf8vVHrwVbdgtUbEAlnzXyuB5CiF8aFUNz9GW8Q5Jfxd+nFCxgkB+8W5B90i7QjpnbQ+OqGhSTxFm6CfxTyjAChUnYIVlBoLJ+NoDfRR3ptfcR2CE7luO5fyB2FCO4+x3WdqDkjaDs7EpMWGqTwZKOk4SJvbA0Z+jdgV5NGkdpRO9hGOAXvSO0lI78dVT6jRj1mZlD0o2mm+c7EGr5m8Gmo1ardEkzC0JkBMZE5/OeTJ4NHFmk+EIaMs1E78TbMElw5Ed/PMWDc/nkW2ZZDhCWuG1z3cM95nwyHCsQ4YY6qVhw5SKeBpZ6TSqODvD0YcKsAaHweJYZzimRiKDLM49eqZBNwNTKFVcr15hhsOOWQSLY53h2Bh/3LLFpa/GsqBAT2QQxJEiVnToG5otjh6Oo0OIE5LEmYdovgECxEQGQRyh/CFALP/o4mBRQYbDKtwJ4giWgwDBcgWI42gPTLNMFUe3+Yry49l0cYwi3uYJVEAc4wyH1Voki2MU8Q5oCtPFbbza2dUnMtSPFR1EXIEAYRBDEMco4n30MQN0cfThH334SRfHKOJtja3J4hhFvC0zQBXHKOJNiIoQxMGOkOEghHyKiWOZ4bASGVRxjCLeVrCOKo5RxNuKZ9PF0cOclcezSxAHJ5c9qDye7RDHKOJt/XaqOEYRb9MM0MRxy3BYlzao4uj7GZt4ti2OUcTbOkWp4hhFvK36hyyOUcTbSh9TxTGKeDvi2VRxdMfFJp6ti2MU8bb+kaniGEW8HR0asjh6f4pRPBs/4RPxtrqidHFsIt7mR5ZUL87s5rOJZxPEuTMcXOLZHuIIEzRyIoOHOMfskxrP5iGurIj3xDADXMTZeQN6PJuPOCspQo9n8xFnZTjI8WxO4gj2gJAsI0Tvqbt4tUM/dWmikkQkvRKgX3ehZ1mryeEO/qhLBtWkkOkJavoVM/obFJB9L578F3BrofidDQn3TQpv5yJuChW9JyXijldghoN1/La04lfIvcpitkXIjdhC0ycxd5mJrQLmt9Bpd/Bt3m40lziWX0Xac606ITUQfsOfTiOg27+43dBlZ3m0DIf3Ybdp327FczOrjmHG1Kdes4covNoMpj3wPQ62eiJDhjh9gJhnfiP1DoCMZWnkES5eE+LkzxEnYENRG8WjR/Lq2Hj49VAcj24LTtLcjpswP8T/tTEtcDFTq5KtRb1Fptbl2mM/GYEoXj2q57McO2By9PBoJxkG/N6O8vL1xC080iQXSd/XcXtZnjxc+xBEocrLyZc7Cp6UCZ2BizSR0hlyrbjk6c7j5flhw/5N5K1XAyXh9wHmTnq5VxtlJuZrZBzd/z3cYSjwy/y0Rms39Yz81oUszF5Xiwb7Ll8c8vp4dgf9OXpvFANUdHl+XYfBdBiQ6c5qqMhfqv9A3vssc1TUWz4pAcXwwnLa/5f0eY4618c/0UCDeme537BTmLamy10XDeYZPKQ/RJF0e+DBrI4CyT13v0kbxZGcvc/8Lgqj/hxw6s9RFKOg/njWQUF0Mghj/w2FMDxDOGcRZ8KhYBWVNhdbZE3emaSUwvTamXfzBJmR1Lfz49ueXeUUiUQikUgkEolEIpFIJBKJRCL/M78BiaB1NacpyG8AAAAASUVORK5CYII=";
  },
  "9aed": function (e) {
    e.exports = JSON.parse(
      '[{"inputs":[{"internalType":"contract IMdx","name":"_mdx","type":"address"},{"internalType":"uint256","name":"_mdxPerBlock","type":"uint256"},{"internalType":"uint256","name":"_startBlock","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"LpOfPid","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"contract IERC20","name":"_lpToken","type":"address"},{"internalType":"bool","name":"_withUpdate","type":"bool"}],"name":"add","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_addLP","type":"address"}],"name":"addMultLP","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_lastRewardBlock","type":"uint256"}],"name":"getMdxBlockReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"getMultLPAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMultLPLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"halvingPeriod","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_LP","type":"address"}],"name":"isMultLP","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"massUpdatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"vine","outputs":[{"internalType":"contract IMdx","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"mdxPerBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"multLpChef","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"multLpToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"pending","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"blockNumber","type":"uint256"}],"name":"phase","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolCorrespond","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"contract IERC20","name":"lpToken","type":"address"},{"internalType":"uint256","name":"allocPoint","type":"uint256"},{"internalType":"uint256","name":"lastRewardBlock","type":"uint256"},{"internalType":"uint256","name":"accMdxPerShare","type":"uint256"},{"internalType":"uint256","name":"accMultLpPerShare","type":"uint256"},{"internalType":"uint256","name":"totalAmount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_multLpToken","type":"address"},{"internalType":"address","name":"_multLpChef","type":"address"}],"name":"replaceMultLP","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"blockNumber","type":"uint256"}],"name":"reward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"bool","name":"_withUpdate","type":"bool"}],"name":"set","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_block","type":"uint256"}],"name":"setHalvingPeriod","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newPerBlock","type":"uint256"}],"name":"setMdxPerBlock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_multLpToken","type":"address"},{"internalType":"address","name":"_multLpChef","type":"address"}],"name":"setMultLP","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"setPause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_sid","type":"uint256"}],"name":"setPoolCorr","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAllocPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"updatePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"},{"internalType":"uint256","name":"multLpRewardDebt","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]'
    );
  },
  "9bfd": function (e, t, n) {
    "use strict";
    n("b9c7");
  },
  "9c45": function (e, t, n) {
    "use strict";
    var a = n("c25c"),
      i = n("9aed"),
      r = n("0506"),
      s = n("9e0f"),
      o = {
        128: { liquidity: i, boardroom: a, mining: r },
        56: { liquidity: s, boardroom: a, mining: r },
		250: { liquidity: s, boardroom: a, mining: r },
      };
    t["a"] = o;
  },
  "9e0f": function (e) {
    e.exports = JSON.parse(
      '[{"inputs":[{"internalType":"contract IMdx","name":"_mdx","type":"address"},{"internalType":"uint256","name":"_mdxPerBlock","type":"uint256"},{"internalType":"uint256","name":"_startBlock","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"LpOfPid","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"contract IERC20","name":"_lpToken","type":"address"},{"internalType":"bool","name":"_withUpdate","type":"bool"}],"name":"add","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_bad","type":"address"}],"name":"addBadAddress","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_addLP","type":"address"}],"name":"addMultLP","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_bad","type":"address"}],"name":"delBadAddress","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_index","type":"uint256"}],"name":"getBadAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getBlackListLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_lastRewardBlock","type":"uint256"}],"name":"getMdxBlockReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"getMultLPAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMultLPLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"halvingPeriod","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isBadAddress","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_LP","type":"address"}],"name":"isMultLP","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"massUpdatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"vine","outputs":[{"internalType":"contract IMdx","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"mdxPerBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"multLpChef","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"multLpToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"pending","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"blockNumber","type":"uint256"}],"name":"phase","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolCorrespond","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"contract IERC20","name":"lpToken","type":"address"},{"internalType":"uint256","name":"allocPoint","type":"uint256"},{"internalType":"uint256","name":"lastRewardBlock","type":"uint256"},{"internalType":"uint256","name":"accMdxPerShare","type":"uint256"},{"internalType":"uint256","name":"accMultLpPerShare","type":"uint256"},{"internalType":"uint256","name":"totalAmount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_multLpToken","type":"address"},{"internalType":"address","name":"_multLpChef","type":"address"}],"name":"replaceMultLP","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"blockNumber","type":"uint256"}],"name":"reward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"bool","name":"_withUpdate","type":"bool"}],"name":"set","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_block","type":"uint256"}],"name":"setHalvingPeriod","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newPerBlock","type":"uint256"}],"name":"setMdxPerBlock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_multLpToken","type":"address"},{"internalType":"address","name":"_multLpChef","type":"address"}],"name":"setMultLP","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"setPause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_sid","type":"uint256"}],"name":"setPoolCorr","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAllocPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"updatePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"},{"internalType":"uint256","name":"multLpRewardDebt","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]'
    );
  },
  a0a5: function (e, t, n) {
    "use strict";
    n("d356");
  },
  a516: function (e, t, n) {
    "use strict";
    n("236d");
  },
  a7c1: function (e, t, n) {},
  aa22: function (e, t) {
    e.exports =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAE40lEQVRYR72Zf2gcRRTH35u7JCRbG5vGqEHCIVRUOPzDiFoEDVVEJKagbNQkuzNoodS/jNKm/tPij/qzokJRaGV3w12DJwGDNii2KBYNxYr/iFqLoAjWSzWxFs/Tu5snc82Ga3J7s7fX3kL+ybzve597s/PmzQ5CxCedTl9dKBSGiOgGAOhFxCuJqBcACoh4ioh+RUT1N9fe3v6+aZqno4TCekSO41zBGNsmpdwMAMk6tBIRvyCi6Vgstt+yrL/DakMBzszMXLK4uPgkADxBREZY59XsEPE3RNzd19f39sDAQFHnSwvoed4wEb1BRD06Z3WOn4jFYrZlWcdq6QIBiQhd130WAJ6qM3A95v8yxh61bTsVJKoKODk5aZRKpTQADNUTLaotIr5k2/YEItJKH6sAVeY8z3uPiO6LGjCKDhGf5pzv0gK6rruHiHZGCdKoBhGHOeeZSj/nZdBxnAcBYKrRQA3oc4yx22zb/tr3sQyYSqXWFovFH4moO6A8OEQ0LoT40/O8HVLKF1ZNB+Ic53xjLcBMJtOZy+X2EtEjAXbHhBC3rAJ0HOc5zYpdp+CUsBFApVd1dWFh4a/AlYv4AOd8Wo2XMzg1NdWbz+dPAkBHkMgwjLhpmqULAah8uK4r1YIMiHcykUhcrwp52cDzvOellBO1piaRSLT4lb/RDIYAVCamEOLdMqDrut8R0bW1AJPJZGt/f3+hSRkERJzinD+sat41UsoTupVnGEabaZr/NQsQAM4kk8nL1Ha2nYhe1AECQLsQIt9EQGCM3aUADxLRQzpAwzA6TNP8p5mAALAdHcf5FABu1wF2d3cbg4ODuWYCIuJrCvAHANigA4zFYmv8RrNJq1ghvaOm+CwRrdEBdnV1rR0aGjpbJYNZALi8XFRD7CR+HE0d9M2Oqgyq3aFTB9jS0tI5Ojparv6u6z4OAHsB4PWenp6JbDar3uF9iHicc659XULWQfWDP1EZ/JaIrtMBGoZxqWmaZ5RdOp1eVywWE5Wbejqd3lAqldosy/pG50uNO46zqverojuoAA8T0aYQTpf34hC2WpMwU4yIr6hCPSmlHNN5NAxjvWmaCzq7sOMhAccVoDpG7tM5Zox127b9h84u7HgYQMbYRkylUlcVCoVfQjiWQTaIWPN0WKNrqRU2yznv9ZuF40R0YwjIppkg4gHO+RYfcCcR7akVnXPOqp26ohKHmOJ7hBAflgGX2nDV7q8PCthkwC855zerhCy/O6r4EtGrQYCVzULUrPm62dnZtmw2W+6MAp4BIYTqEc61/OpRovn5+e+JKFFNpDbueDy+y99NokIunUd2A8B4gI9ZIcS9/tjKY+cdiPgxEcWjAjSoO93a2nrTyMjIz1UB1T8dx9kKAG82GCiKvBCPxzeNjY0drRRXrV+O46jCvS1KlKgaxtgW27YPrNRXBcxkMrFcLvcyEamu5WI/6iD2mBBif9V3v1Z013UFALxFRK0XgxIRfweA+znnnwX5D/MB81YppXon1bfoC/l8BABbhRA/1XKqBVRiImKe540CwDNE1NcIJSJ+BQA7OOdHwvgJBeg7WqqVwwCwmYjurvWp5LyVeG4qP0DEacuyDtWzZdYFWBk0k8m05/P5O6WU5WsIdQWhriLUNQQAnAKA8jUEEc11dHR87n/XCZO1Spv/ASIQgrNC4wu+AAAAAElFTkSuQmCC";
  },
  aab2: function (e, t, n) {
    "use strict";
    n("50f3");
  },
  ace5: function (e, t, n) {
    "use strict";
    n("fb6a");
    var a = function (e) {
      return e ? e.slice(0, 6) + "..." + e.slice(-6) : "";
    };
    t["a"] = a;
  },
  b70b: function (e, t) {
    e.exports =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAh1BMVEUAAACAjraBj7azs9yDkLaRnL6Bj7aBj7aBj7iQlLuBj7aAjraAj7aBj7eAj7aBj7aAj7aBj7WBkLeCj7aGkrmIlr6Aj7WAj7aBkbiEj7eFkriBj7aBj7aBj7eBkLeAjrWAkLaBj7eCj7aCj7iDkLiCj7eCkraHlLmHkbuBjrWAj7aBj7aAjrUbTm9LAAAALHRSTlMA+doDTgmimEoO5raRXvPRzch0bSMT76lBMynFnGdj64aBd1g+OS8bGL6vigehV7oAAAGVSURBVDjLfZTZmoMgDIWDdd/Hvdbu+zTv/3wzQmhRoedGJP8HyYEAU91L92mlqfV0yzsYFRQ/qOinCLTYqtzjTPtyteQ6CzWyujm3ZagV2063jdGoWN2eOAP54RL8qkRya55fFOeLUtzN+EnXBGZ89gbQD6IAUVj7H/f5KBPcWUR5zpeT/3AAnEd38sf/GrnOvGJhYAhaNSKH1aeSVMs5Sj0RjSsd2FMwAnAYVehoV8zogBywUagDrdYUtsGjOwUGUWaeHJxM4E4mScdxMYFUTg6hGPQmsEaymanmmEFG1uPVBFYi3gB1wNYEnslmoMb7NYED2Sd9ZJUhRSZ9TPDrku77VlRIKox2kys5ko6Lbl8VSMrHjkbEzN2Pf/6U6zYotQOAIEVsnZpPWrEtKf+lPB0Nv4PFWH0QiPmjBA+oqIR307jQN6I5SI6yYEazF4bIari12SbRvR5MnC9tPhidwXJqqxdMQVtynmrYSKZR296W4DC194Vc/gI8wkx2qANDGxYKPDYHGeU91+MQXpWODg93JfgHiQFv4ck8C10AAAAASUVORK5CYII=";
  },
  b9c7: function (e, t, n) {},
  ba67: function (e, t, n) {
    e.exports = n.p + "img/metamask.ffdd70f6.png";
  },
  bb7d: function (e, t, n) {
    "use strict";
    n("405d");
  },
  c25c: function (e) {
    e.exports = JSON.parse(
      '[{"inputs":[{"internalType":"contract IWHT","name":"_wht","type":"address"},{"internalType":"uint256","name":"_cycle","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"contract IERC20","name":"_lpToken","type":"address"},{"internalType":"bool","name":"_withUpdate","type":"bool"}],"name":"add","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"cycle","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"endBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"massUpdatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_whtAmount","type":"uint256"},{"internalType":"uint256","name":"_newPerBlock","type":"uint256"},{"internalType":"uint256","name":"_startBlock","type":"uint256"}],"name":"newAirdrop","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"pending","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"contract IERC20","name":"lpToken","type":"address"},{"internalType":"uint256","name":"allocPoint","type":"uint256"},{"internalType":"uint256","name":"lastRewardBlock","type":"uint256"},{"internalType":"uint256","name":"accWhtPerShare","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"bool","name":"_withUpdate","type":"bool"}],"name":"set","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newCycle","type":"uint256"}],"name":"setCycle","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAllocPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"updatePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"wht","outputs":[{"internalType":"contract IWHT","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"whtPerBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]'
    );
  },
  c2e7: function (e, t, n) {
    var a,
      i = n("9523").default;
    e.exports =
      ((a = {
        language: { name: "English" },
        noun: "You claimed ",
        addToken: { text: "Add {token} to wallet" },
        guideinfo: "Info",
        UnlockWallet: "Unlock Wallet",
        ClaimPrice: "Claim VINE",
        Check: "Check",
        Pending: "Pending",
        ClaimedSuccessfully: " successfully",
        ViewRecords: "View Records",
        Home: "Home",
        lightText: "Trading made easy. The first All-In-One platform",
        boardroomText: "Staking VINE & VINE-USDT LP to claim your HT rewards",
        MDXtotal: "Total",
        MDXtotals: "Total Value Locked",
        CurrentBlockReward: "Current block rewards",
        block: "Block",
        halvingTime: "Halving block",
        TransactionWeight: "Transaction Weight",
        DailyOutput: "Daily Stake Output",
        DailyOutput1: "Daily Trading Output",
        LiquidityMiningWeight: "Liquidity Mining Weight",
        GoTradingMining: "Trading Mining",
        DeLiquidityMining: "Liquidity mining",
        LiquidityMining: "Liquidity",
        CurrentLiquidity: "Mining Output(VINE)",
        CurrentMDEXPrice: "Current Price",
        PlatformTransactionVolume: "Volume(24h)",
        CumulativeTransactionVolume: "Cumulative Volume",
        HandlingFee: "  Fee(24h)",
        CumulativeHandlingFee: "Cumulative Fee",
        CooperativePartner: "Partner S",
        RepurchaseAmount: "Buyback Amount",
        MDXUsageScenarios: "Announcement",
        Repurchase: "Buyback",
        Dividends: "Rewards",
        RepurchaseDesc: "Transaction fee for VINE buyback and burn",
        DividendsDesc: "Give rewards to those who pledge VINE",
        DaoDesc: "Community proposal and voting",
        Swap: "Swap",
        Pool: "Liquidity",
        Quotes: "Chart",
        Notice: "News",
        ChangeNotice: "Notice",
        BusinessCooperation: "Business cooperation",
        YouProject: "Your project",
        CreateLiquidity: "Create liquidity for your tokens",
        ApplyNow: "Apply now",
        TradePool: "Trading",
        MDXCheck: "Audit(SOON*) ",
        Boardroom: "Dividends",
        RepurchaseAndDestruction: "Buyback & Burn",
        TotalRepurchaseAndDestructionQuantity: "Total Buyback and Burned",
        AmountToBeRepurchased: "BuyBack",
        RepurchasePrice: "Buyback Price(72h average)",
        TotalRepurchaseAmount: "Total amount buyback",
        MarketCap: "Mining Output Value",
        Yourbalance: "VINE Balance",
        infoP: "Data and blocks are synchronizing",
        infoPc:
          "Block data set bg and thus only those from the past 24 hours is presented",
        empptyData: "No Record",
        buyHistory: "Buyback Records",
        seeMore: "More",
        notOpen: "To be opened",
        text1: "Notes on the rules of buyback and rewards",
        text2_heco: "Buyback and burn (accounting for 30%)",
        text2_bsc: "Buyback and burn (accounting for 10%)",
        text3_heco:
          "EmevineFinance will inject the corresponding proportion of daily platform income into the pool of funds to be repurchased, and the repurchase will be automatically executed when the smart contract is triggered by the repurchase price (72-hour VINE average price). If it is not triggered, it will continue to accumulate into the repurchase fund pool.",
        text3_bsc:
          "EmevineFinance will transfer the corresponding proportion of daily platform income into the fund pool to be repurchased. When the repurchase price (72-hour VINE average price) is triggered, the smart contract will automatically execute the repurchase and destroy it. If it is not triggered, it will continue to accumulate into the repurchase fund pool.Note: When repurchasing from the secondary market, low-priced HVINE or VINE will be purchased first for destruction.",
        text4_heco: "Rewards mechanism (accounting for 70%)",
        text4_bsc: "Rewards mechanism (accounting for 90%)",
        text5_heco:
          "EmevineFinance will inject a corresponding proportion of daily platform income into the waiting-for-vacation investment gold pool. Users can pledge to receive rewards through vine/usdt LP, vine/bnb LP, and VINE single currency. We will receive the rewards in the form of HT. The current amount of mining output and circulation can be determined by the amount of vine pledged, which is dynamically adjusted through smart contracts. The vine/ht LP and VINE single currency collection pool will be gradually opened according to the release of the tokens. In the future, more currencies and VINE liquidity LP pledge will be opened.",
        text5_bsc:
          "EmevineFinance will inject a corresponding proportion of daily platform income into the waiting-for-vacation investment gold pool. Users can pledge to receive rewards through vine/usdt LP, vine/bnb LP, and VINE single currency. We will receive the rewards in the form of WBNB、VINE、HVINE. The current amount of mining output and circulation can be determined by the amount of vine pledged, which is dynamically adjusted through smart contracts. The vine/bnb LP and VINE single currency collection pool will be gradually opened according to the release of the tokens. In the future, more currencies and VINE liquidity LP pledge will be opened.",
        text6:
          "All Boardroom mechanisms are open, transparent, and fair, and displayed in real time on the chain.",
        text7:
          "After VINE is fully released, Boardroom's equity voting governance will be conducted through the on-chain DAO method. Boardroom members will be elected to enjoy more rights and interests, and we sincerely invite continued attention.",
        text8:
          "Open and Transparent Data, Smart Contracts Driven Rule Execution",
        text9:
          "Provide EmevineFinance holders Benefits and Governance Rights",
        seeRule: "Rules",
        DeflationRate: "Deflation ",
        strongText: "",
        bannerTitle:
          "Trade with a superior, quicker interface at cost-efficient price",
        Countdown: "Halving Countdown",
        airdrop: "",
        HT: "",
        Directors: "Boardroom",
        hash: "Transaction Hash",
        time: "Time",
        send: "Sender",
        receive: "Receiver",
        price: "Price",
        amount: "Amount",
        currency: "Single",
        search: "Search Vine LP & Single Token",
        all: "All",
        RewardDay: "Daily rewards",
        RewardMonth: "Monthly rewards",
        poolTitle: " EmevineFinance Pool",
        poolDescribe1:
          "Note: We only support Heco now, please do not transfer other  assets of Ethereum mainnet",
        transaction: "Stake",
        capitalPool: "Pool",
        connect: "Connect your wallet",
        Ecological: "Ecological Fund",
        miningPool: "Farm",
        airdropRewards: "Rewards",
      }),
      i(a, "Repurchase", ""),
      i(a, "unit", "10K"),
      i(a, "searchText", "search"),
      i(a, "operation", "Action"),
      i(a, "mining", "Mining"),
      i(
        a,
        "MDEForEcoEurrencyTrading1",
        "Heco Trade on the Best Multi-Chain DEX"
      ),
      i(
        a,
        "MDEForEcoEurrencyTrading2",
        "BSC Trade on the Best Multi-Chain DEX"
      ),
      i(
        a,
        "MDEForEcoEurrencyTrading3",
        "Ethereum Trade on the Best Multi-Chain DEX"
      ),
      i(
        a,
        "MDEForEcoEurrencyTrading4",
        "Fantom Trade on the Best Multi-Chain DEX"
      ),
      i(a, "TotalRewardOfCurrentPool", "Total rewards of the pool"),
      i(a, "CurrentIndividualWithdrawableBonus", "Current withdrawable"),
      i(a, "CashWithdrawalReward", "Withdrawal rewards"),
      i(a, "YieldYearDay", "ROI(Annual/Daily)"),
      i(a, "YieldYearDays", "Yield"),
      i(a, "CurrentTotalAwards", "Total rewards"),
      i(a, "TotalTransactionAmount", "Total  volume"),
      i(a, "CurrentTransactionVolume", "Current  volume"),
      i(a, "PersonalTurnover", "Your volume"),
      i(a, "PersonalReward", "Your Reward"),
      i(a, "CurrencyDailyOutput", "Daily output of the token"),
      i(a, "MonthlyOutput", "Monthly output"),
      i(a, "PledgeFund", "Value Locked"),
      i(a, "ProvideLiquidity", "Provide liquidity"),
      i(
        a,
        "CurrentTransacObtainCurrencytionVolume",
        "Earn VINE By Staking LP & Tokens"
      ),
      i(a, "TotalLockIn", "Total Value Locked "),
      i(a, "SingleCurrency", "Single"),
      i(a, "DailyProduction", "Daily Output"),
      i(a, "Boardroom", "Boardroom"),
      i(a, "SettleWithdraw", "Withdraw all"),
      i(a, "TotalRewardAmountOfTheDay", "Total Daily Rewards"),
      i(a, "EstimatedTotalRewardAmountOfTheMonth", "Expected monthly rewards"),
      i(a, "Trades", "LP"),
      i(a, "Stakeds", "Stake"),
      i(a, "Staked", "LP"),
      i(a, "Earned", "Earned"),
      i(a, "Earneds", "Income"),
      i(a, "APY", "APY"),
      i(a, "Claim", "Withdraw"),
      i(a, "Cancel", "Cancel"),
      i(a, "Confirm", "Confirm"),
      i(a, "Available", "Balance"),
      i(a, "Withdraw", "Withdraw"),
      i(a, "Deposit", "Deposit"),
      i(a, "TradesLP", "Name"),
      i(a, "seeMores", "See More"),
      i(a, "PersonalPledge", "Personal staking"),
      i(a, "Pledged", "Staked only"),
      i(a, "Reward", "Rewards"),
      i(a, "DailyReward", "Daily Rewards"),
      i(a, "from", "From"),
      i(a, "to", "To"),
      i(a, "crossChainBridge", "Bridge"),
      i(
        a,
        "ChooseTheCrossChainBridgeAsset",
        "Choose the cross-chain bridge asset"
      ),
      i(a, "ReceivinAddress", "Receiving address"),
      i(a, "InputAmountOfAssetNeeded", " Amount"),
      i(a, "MinimumAmountForTransfer", "Minimum amount is "),
      i(a, "Usable", "Balance"),
      i(a, "ConnectWallet", "Connect your wallet"),
      i(a, "DailyLimitForTransfer", "Daily cross-chain limit"),
      i(a, "Maximum", "Max"),
      i(a, "AmountToBeTrasferred", "Amount to be trasferred"),
      i(a, "AmountReceived", "Amount received"),
      i(a, "TransactionFee", "Transaction fee"),
      i(a, "Authorization", "Trasferred"),
      i(a, "Return", "Return"),
      i(
        a,
        "BinanceSmartChainAddress",
        "Input the receiving address in Binance Smart Network"
      ),
      i(
        a,
        "AreOfEquivalentValue",
        "Through the VINE cross-chain bridge, you will receive VINE-mapped tokens on the mapping network."
      ),
      i(
        a,
        "BinanceSmartChainNetwork",
        "You will migrate from Huobi ECO Chain Network to Binance Smart Chain Network"
      ),
      i(a, "CrossChainTransfer", "Exceed the single maximum limit"),
      i(a, "AvailableAmount", "Exceed the available limit of the day"),
      i(a, "Next", "Next"),
      i(a, "MinimumAmount", "Below the single minimum limit"),
      i(a, "transactions", "Trade"),
      i(a, "TransactionHistory", "Transaction History"),
      i(a, "unitB", "B"),
      i(a, "unitM", "M"),
      i(a, "AcrossChainRecord", "Across the chain record"),
      i(a, "NoRecord", "No record"),
      i(a, "details", "Details"),
      i(a, "finish", "Completed"),
      i(a, "finish1", "Finish"),
      i(a, "BeingProcessed", "Processed"),
      i(a, "AcrossTheChainAssets", "Assets"),
      i(a, "NumberOfAssets", "Amount"),
      i(a, "ServiceCharge", "Fee"),
      i(a, "CheckTheHash", "Check the hash"),
      i(a, "Approve", "Approve"),
      i(a, "InsufficientAccountBalance", "Insufficient balance"),
      i(a, "ExcessOfAvailableBalance", "Excess of available balance"),
      i(a, "crossChain", "Bridge"),
      i(a, "NoData", "no data"),
      i(
        a,
        "addrTip",
        "Please enter the correct ERC20 address, wrong address will UNABLE to receive(Not the exchange/contact address)"
      ),
      i(a, "addrTip1", "Please enter the correct"),
      i(a, "addrTip2", "Address, wrong address will UNABLE to receive"),
      i(a, "TargetReceivinAddress", "Destination address"),
      i(
        a,
        "DailyCrossChainLimitDescription",
        "Daily cross-chain limit description"
      ),
      i(
        a,
        "DailyCrossChainInfo",
        "Since the circulation of VINE tokens in the initial stage of BSC's launch is small, in order to protect the interest of users, EmevineFinance limits the total amount of VINE cross-chain daily. When the VINE circulation of the BSC network is sufficient, this restriction will be lifted"
      ),
      i(a, "FeeDescription", "Fee description"),
      i(
        a,
        "FeeDescriptionInfo",
        "You need to pay the gas fee of the target network as a cross-chain handling fee. The handling fee is charged by the cross-chain service provider. EmevinFinance does not charge user handling fees."
      ),
      i(a, "invalidDestionationAddress", "invalid destionation address"),
      i(a, "underConfirmation", "under confirmation"),
      i(
        a,
        "tradeTitle",
        "Trading just like mining，Get VINE rewards on every trade! "
      ),
      i(
        a,
        "modalNotice",
        "In the block snapshot at 4:00 (UTC) on April 8th, WBNB  balance > 0.1,Besides, during 10:00 (UTC) April 10th -- 10:00 (UTC) April 19th, provided liquidity for any LP pairs."
      ),
      i(a, "Innovation", "Innovation"),
      i(a, "gasFeeRebateRate", "Trade fee rewards"),
      i(
        a,
        "JoinTheDecentralized1",
        "Join the Best Multi-Chain Decentralized Exchange with the trade largest volume."
      ),
      i(
        a,
        "JoinTheDecentralized2",
        "EmevineFinance, bring more transaction volume to your project Token"
      ),
      i(
        a,
        "JoinTheDecentralized",
        "Join EmevineFinance the Best Ecosystem That Supports Different Blockchains, to Enjoy More Benefits for Your Token"
      ),
      i(a, "ListYourToken", "Listing Token"),
      i(a, "ClaimYourLiquidity", "Liquidity Mining Whitelist"),
      i(a, "ClaimYourTransaction", "Trading Mining Whitelist"),
      i(a, "ToCrossChain", "Cross Chain Whitelist"),
      i(a, "JoinJointMining", "Join Joint Mining"),
      i(a, "Applicatio", "Application"),
      i(a, "Guide", "Guide"),
      i(a, "Doc", ""),
      i(a, "About", "About"),
      i(a, "Announcement", "Announcement"),
      i(a, "AdjustmentofPool", "Adjustment of Pool"),
      i(a, "ethAlert", "Please change the Chain to Ethereum by yourself"),
      i(a, "ftmAlert", "Please change the Chain to Fantom by yourself"),
      i(a, "gasFeeRebateRate", "Trade fee rewards"),
      i(
        a,
        "introduce",
        "Go listed on EmevineFinance, which boasts the largest transaction volume in HECO and BSC"
      ),
      i(
        a,
        "introduceDSC",
        "to attract more users and increase your transaction volume"
      ),
      i(a, "joinMdex ", "Join EmevineFinance Token List"),
      i(
        a,
        "joinMdexDSC",
        "Join EmevineFinance token list so that users can find your project easily. They just need to search your <br>token name to do transactions."
      ),
      i(a, "joinLiquidity", "Join EmevineFinance Liquidity Mining"),
      i(
        a,
        "joinLiquidityDsc",
        "Join EmevineFinance Liquidity Mining so that LPs can provide sufficient liquidity rewards. In this process LPs will <br>also receive VINE bonus."
      ),
      i(a, "joinunit", "Join EmevineFinance joint mining"),
      i(
        a,
        "joinunitDsc",
        "Join EmevineFinance joint mining to gain more exposure for your project. Users can earn rewards from your<br> project by staking VINE"
      ),
      i(a, "IMOApplication", " "),
      i(a, "ContactUS", "Contact us"),
      i(a, "ApplyToJoin", "Apply to join"),
      i(a, "joinnow", "Join now"),
      i(
        a,
        "introduceComplete",
        "Go listed on EmevineFinance, the best DEX in HECO and BSC, to attract more users and increase your transaction volume"
      ),
      a);
  },
  c2f4: function (e, t) {
    e.exports =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUBAMAAAB/pwA+AAAAFVBMVEUAAACxxMS8vMm2ws65wMy4vsy4vsyaylFoAAAABnRSTlMADRMVadNlkglKAAAAUklEQVQI12MQUWAAAyZHBrdgCNM0hUE11QDEYg4LAmKwsClIBExABMCkKUQZkIKqAglDBUHCUEGQMEwQmYlQgKQNYRiSFQiLkZyD5EgkpyM8BADEsxkb26/ApwAAAABJRU5ErkJggg==";
  },
  cebe: function (e, t) {
    e.exports = axios;
  },
  cf05: function (e, t) {
    e.exports =
    "data:image/png;base64,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";
  },
  cf88: function (e, t) {
    e.exports =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAoCAYAAACIC2hQAAAFf0lEQVRYR9WZXWwUVRTHz7nb3RILhEIkijExajUqVg01iqIRH4whEUKQJtjdvXeeED8SNAgRSTDxA/wO8QNEk5m72qAbY5Qq+mQJEvEJggpGAbXBiKVAjJWtAjt/c+vOZnY6OzvT2KLz0u7cc8785px7zj33DtMoL631BQDmM/NsADMAnM/MM4ioGcARZv7F/CWi/U1NTVtzudzuUT5qWI2TKNu2PUUIcR+AhQA6kugy889E9CERbVRK7UuiGxvUtu0JzPwAEa0G0Jr0IQF5l5l1c3Pz2iVLlhyOa6uhR23bvpOINhPRhXGNxpFj5j+JaJ2U8glmRiOdSFDHcVYAeIaIRCNDox1n5q2tra3ZBQsWDEbZCAUtFouZoaGhN13XzY0WIIkeM+9Lp9Pzu7q6fqinFwqqtS6MF6QHxsyHmPkGKeXxMNgRoFrrVa7rrk/gkdPMvJmZP2bmw+VyeSIRXU9E9xLRlQnsEDNvnzlz5h0dHR2ng3o1oIVC4a5yufxB3DnJzHuYWUkpvwoaNtPn5MmTa5l5FYBUAuDXLcsyL1lzVUF7enrOOXbs2AEiMkX7nyLLvA+AW/k5JZD5fel0uj2bzf4eBeE4zmMAngzIfO37Pc3/THNfCHGLlHKnX6cKGmZw6tSpk71s1FpnXdd9q/ICAHC7ZVnbG3mqWCymSqXSTgA3erKWZfmfuwzAazVQzF8qpWaPAC0Wi+eWSqWDACb7ByNAdymlbvLLmoicOHFiHoBvgyuP1nqh67rvxwWteHWxlPK9anTNP7ZtP05Ea4PeqQcqhHhOSrnSL+84zucA5jBzOZVK3ZrL5b7wxguFwvRyudyfBJSIdluWNSsIapLh6rigzLxGKfWUJ9/b29vU19c3BKCpMjUeUUo9741v27atub+/36xEw1ej0HtymUzmoq6urr5hm93d3RefOnXqUNhciwj9JqXUsoBHXwFwPzMfEULcnM/nf/TGHce5BMDBpKBCiOVSyg3DoI7jPATgxYSgh6SUbcE1esuWLTPa2toGgnXQcZyahInrUVNXlVJzh0Ft2+4monuSgBrZVCq1KJ/PVxMkTN/cM2E/evToHgBXJPUoEQ1aljWc4MajvQBuSwrKzMdNT2pZ1k/1ICuJuomIlvpl4nrU6LS0tEzq7Oz8w4B+B+CypKAV+QEhhJRSfhLU11pPA7AJwN3BsSSgQojLpZTfG9BBAGZ9HnEFkqnddd0CEV0TIrqXmXuIyHjXrGDXEdEiABP8sqZ0EVFRKVWdasH5G2J7rllYzBw1S+CkRqDeeKFQmOe67qOmZkaFPDD2FxE5mUzm2WArFxs0KvTpdPqqbDa7PwxIaz3HABPRvAjgQWbeCOAly7J+DZOzbdvU49X1bPhDXzeZKqF6RwixPp/Pf1MHuB2AAV7s65IGmHkDgFcty/otqAdAaK3N3DWRuTYqMtVkiipPngFTLwF8JIQwe5xdYYYrRd2MfdbS0mJ1dnYOBeUqrZ9k5pUALo0xdWrKU92CH2aImXcAWGdZ1qfBcdu2TZf+tlKqpm8oFosTS6XSUgAPB1u6KNiagh+1hDYwsoeIliuldnhyYaBaa7PFNpvExNvsmiXUPMRxnL0A2mOEokaEmV9QSq2IAnUc5wiA85LaNvI1TYm5Ua/Na2R8jEFHtnn1GuezCSqEGNk4V8IftreJZB0rj3K9rYihCdvcnS2PRm7uDNQotstjkUzR22XPe0kOIP7t0Mc+gPDBxjrSEUK8nEql1nh6Z86cMWXu3XQ6/bTv3gEA02NMo2RHOsag6coHBgbeGK/zp1Efknlv/58/dvSH6X9xkOtbGk2n/iAzm7Ys8ZodmJ9jczQe8G71YwMRzQLQ8Gjd0x+Xjw1hGTven2/+BuseoFaWiKNYAAAAAElFTkSuQmCC";
  },
  d119: function (e, t) {
    e.exports =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAFRUlEQVRIS72Vf2hWVRjHv+fc3/fdu+3dprm56UxXajkrZhKijkwtWSmE64/QjAgqykpFU7LeQMIyLZQsRSMSBZsYtbJSaGmKuGFErhVubtJ+6X5v73vf+/ucuO822XT5A8QH7j0X7jnP5zzP833OIbhDRu4QB7cM4tEoRUmLgO9zfBKNspvd6C2Bdu3i0oqp65cQt3MVS5v4/rLN646UlRH/ZmC3BIr9/sVUxT73qUSaij06udwfU/ymOm7ehdsK4pxT68y7z0qRrD1C3gzZu3gm5sYTK7QZ678hhPAbwW46IqNmX7boNm+W86YsR2QB0H4YbmvLZ1bmnI2puTM7bw+Ic2JWrZkthXP2CfnzxkGdDhin4P57+rxnGMv0GdHK2wJqbNymjW7rWiXnFmzC6EUAwgDrBFrKYXe3v1rtPLG7qKjIvR7sBqnjwX9inX3vbuj6DmX8zMehFQEIhEaB+En4rX+Vub6+tvzcS401NeDRKDhwbc2SoFjtkVFy+7ExMrVkT0hX4dsyiC+Lqir7NCwSmRTS0NjXkT0nApoFwAMgA14jcPlUu2d1fy7Cr/EtyxM82/LAHdEnJmzLdiCbVt7i5iSo7Zf128NofVSJ5Oicygq4L3HCZSLKElF0kegRGVmFgJQ/kJ1AZBQAA5x6oLcWzOzlxHNcBI/vO+Dc5p7teO0XYr18VHkS1Fq+vDoj1HefOKkENC2v3wmhgCADog6IKQDVB5wHkMGMJzMLwAKYBfgOwGyABRF78Drr4FbvR2c8VJNc0fTrO0uJ37JRH3v/NC33Ych6FpKtEZSICAPOhrbK0NIG38GcwPojZWBw4o3oqz+ORNMf55g8fvOVFQ2V2+YKseoNSuSu+al5DxE5nAsqSv2QILokMBiHQJLs4BXUvx/luybsrlr01J/2zY6mo65a8MGUBVuOD1Nd7Ynto2S36gVRoqvTxuZnyVnTIWkZA84HIYPpGoQEY7AZDifeCqulEp0Nf1+2E+6HKWzKl3mlH3cNzBiu/n9O7g2r1qmnJNlanZ6pP6jnTAfUbICoABEHJg/CgsPbB1gC8NoQb6lG18XGs0a3+VEiNPG7oid3Jwa9j9hHFRUVYoG7dW5Y7NiZOj77Hh65FxAiAA0BROlPIfcBHoggBrAeEKsZvS2x6p5LbGVl4rkTpaWlw071/21Y/nX+mEQ45Wc9J1TIMnIBSQOIDEKkZM049wAeqMwCuAtqdsPs4FWaJ5eQWUfbrj4lRgQFl1vv1IPzQmHnWyFD11gkHUSSAEpBAjEkBcHAGQP8IDIGYhlwe/2EY+mLtp5Y+Fv0qktxRNClLYUhdYL5RlrY3uSpEkhYAZHEoD3hugyuyyEpBJJMIXAGFsBsDwKjMK30NdplupOUnjaHRjUiqO/w5EwwtjesxBZ7IgEUAo9TmCaDaXP4nCZ1oWkEKUE/Uw64DAKVYNgZB0Nqzstk9g/dNwTZh6ZN9v3EMZX15toAbMZh+RSGL8KCUskl6SgkUqLAeSBELIREHzplEEQZCZJWK4jyQm3hnw3XBfGKYrGruePpFHQdSBgWNTwCTxRgCUo7NH2H60oH7EylNUS9XMLoMhY3X9E9I0NxLOhB9CHddzx1ScUz034sJWVXlHdN6i59VRgyjL63dcTfSjAKR1Rcpig/iYq8RbYSVROev2gN7rSholi1jdgjfsJZQ2Px+aJtSrpKkUDqBjUl8knekDpdA2rclqvFNPoaIWwt0dTzUOU9gusc2l9XF49Gk3oYZjwKWj/rsbBtdCxlPcaLftycBEjrdCbsK1hZF2Q+af8BLF5GlzdtDuQAAAAASUVORK5CYII=";
  },
  d356: function (e, t, n) {},
  e359: function (e, t) {
    e.exports =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAKKADAAQAAAABAAAAKAAAAAB65masAAAA60lEQVRYCe2W0QkCMQyGTekYOo/cIo6h6Bguctw+jiEXzUmlCoGUpNCHv08hJH/Tr3n4aRd0pitPvK53kaOUTvOF5gjpHCEiGjIcM+83vc+ghwjtFCEiGt/h/mKvftiA3kG0fgyokbHmQdBKSqsDQY2MNQ+CVlJaHQhqZKx5ELSS0upAUCNjzVNxwrWfszb3rCOihzjz/OOEe97YqL0Bezvz8XdQMArOxgd2Ly9fTFE3Hc9PrrWWWw7RHv+L61ePGIOg91dAEAS9BLz92EEQ9BLw9mMHQdBKoDa9dWzt1+rCdrA48+KEtQtb8y+tfTlq0kCsugAAAABJRU5ErkJggg==";
  },
  ed08: function (e, t, n) {
    "use strict";
    n.d(t, "c", function () {
      return i;
    }),
      n.d(t, "b", function () {
        return r;
      }),
      n.d(t, "f", function () {
        return s;
      }),
      n.d(t, "d", function () {
        return o;
      }),
      n.d(t, "e", function () {
        return c;
      }),
      n.d(t, "a", function () {
        return d;
      });
    n("d3b7"),
      n("25f0"),
      n("99af"),
      n("ac1f"),
      n("1276"),
      n("a9e3"),
      n("5319"),
      n("9129"),
      n("843c"),
      n("ace5");
    function a(e) {
      return 1 === e.toString().length ? "0" + e : e;
    }
    function i(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "-",
        n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ":";
      if (!e) return {};
      var a = new Date(e),
        i = a.getFullYear(),
        r = a.getMonth() + 1,
        s = r < 10 ? "0".concat(r) : r,
        o = a.getDate(),
        c = o < 10 ? "0".concat(o) : o,
        d = a.getHours(),
        u = a.getMinutes() < 10 ? "0".concat(a.getMinutes()) : a.getMinutes(),
        l = a.getSeconds() < 10 ? "0".concat(a.getSeconds()) : a.getSeconds();
      return {
        y: i,
        m: s,
        d: o,
        ymd: "".concat(i).concat(t).concat(s).concat(t).concat(c),
        ym: "".concat(i).concat(t).concat(s),
        md: "".concat(s).concat(t).concat(c),
        ymdhms: ""
          .concat(i)
          .concat(t)
          .concat(s)
          .concat(t)
          .concat(c, " ")
          .concat(d)
          .concat(n)
          .concat(u)
          .concat(n)
          .concat(l),
      };
    }
    function r(e, t) {
      if (!e) return 0;
      if (!t) return 0;
      var n = 0,
        a = 0,
        i = e.toString(),
        r = t.toString();
      try {
        n = i.split(".")[1].length;
      } catch (s) {}
      try {
        a = r.split(".")[1].length;
      } catch (s) {}
      return (
        Number(i.replace(".", "")) /
        Number(r.replace(".", "")) /
        Math.pow(10, Math.abs(a - n))
      );
    }
    function s(e) {
      var t =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
      if (Number.isNaN(e)) return e;
      if (!e) return e;
      if ("0" === e) return e;
      if (0 === t) return parseInt(e, 10);
      if (e.toString().indexOf(".") > -1) {
        var n = e.toString().split(".");
        if (n[1].length < t) {
          var a = "".padEnd(t - n[1].length, "0");
          return e + a;
        }
        var i = n[1].substring(0, t);
        return "".concat(n[0], ".").concat(i);
      }
      var r = ".".padEnd(t, "0");
      return e + r;
    }
    function o(e) {
      var t = a(parseInt(e / 3600)),
        n = a(parseInt((e % 3600) / 60)),
        i = a(e % 60);
      return {
        hms: "".concat(t, ":").concat(n, ":").concat(i),
        ms: "".concat(n, ":").concat(i),
        s: i,
        m: n,
        h: t,
      };
    }
    function c(e) {
      var t, n;
      if (parseInt(e / 3600) > 24) {
        n = a(parseInt(e / 3600 / 24));
        var i = e / 3600 - 24 * n;
        t = a(parseInt(i));
      } else (t = a(parseInt(e / 3600))), (n = 0);
      var r = a(parseInt((e % 3600) / 60)),
        s = a(e % 60);
      return {
        hms: "".concat(t, ":").concat(r, ":").concat(s),
        ms: "".concat(r, ":").concat(s),
        s: s,
        m: r,
        h: t,
        d: n,
      };
    }
    var d = "  https://gateway.emevinefinance.cc/v2";
  },
  f071: function (e, t, n) {
    "use strict";
    n("4c2a");
  },
  f257: function (e, t) {
    e.exports =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAoCAYAAACIC2hQAAAE5UlEQVRYR7WZWahVdRTGf1+jZVSIQTYPBo1SltlMRVkqGmWRNEJBZULQQyRFD5Eh9hBEUdIEWVRqg2hoUEE20xwNRGFFRkEpDdBo9cV32luOx7P3Pvdcz4J9H/Zew/dfZ/3XdEWfZHs0MB04CdgdGAPsBowAvgO+LZ4PgaWSPurTVEtMQxG2vR1wGXAecAKw5RDkPweeBhZI+nIIcr0Dtb0FcAlwC7DHUI108P8F3A3MlbSuV12NHrV9NHA/cFivSnvk+xm4SdKdvfDXArV9AfBAEXe96OuHZyFwhaQ/64S7ArWd9/mZb+zHch8yrwFnS/q+SrYK6K3ADX0YHI7IB8Bxkn7rpmQToLbPBZYMx+IwZBdJmtkI1HYuzOvAyA7mVcB7wMTiSRbol34AXgb+BeKUTpojaX7ny408avst4KguwpMkPZf3tvcGrgFmA9t28K4H8mzfRcebRdyvlPSP7R2An7rk4r+BQyR91q5jA1DbM4AnKtw0StKP7d9sHwpE5l0g8bW2jC/bWwE7AwcARxbg75MUL24g25Eb18XmYknnbwLUdipMStyBXYTWS9qm39+5Ts52HJPDdpJzQEkJtxa1PGr7QuCRGqUjmvJcPwexnbR0bIXsMklndQJdBkyrMXaspDf6AdPg0TQuaWa6UWJ9tKRfWh61ncBfC6Th6EZRNm4odbnXA9m+B7iqhn+mpEUl0Lh3aQ3zDElP9Wp8KHxFN5bbXdXoPCopYdnyaDqZWRUGPgUOlpTgHgjZvha4vUL5Oknpe1tAnwGmVjDOkzTQUmp7T+DrGi+MTNoL0HeA8RWM0yUtH4gr25TaXlPz84+VtDpA627eREmpKAMl228XhaGbnRMlvRKg6bi3rkAyQVKUDJRsxxkTKoyk/VsaoBkHRlUwTZb07EBR/l9wvgD2rbBzmqQXAjRD19gKphskzRskUNtxUjqqqo5sfEppgKatO6YCzCpJJw8YaPrPx2ps7CVpTYAuAK6sYTxcUrqcgVCDoxKWuySPB2jG4IdqUKRpPrWzRdscqG1fDGS4q6LlkrLkaCX8/YDVDYbnS5qzOcCVOmwfAbwI7Fij93pJt7WA5k9Deij13AVcJ+mP4QK2PQlYDOxUoytNdpJ9a6tSAr28WDKUch8DyZ9nALu2KUuGSEnNLikjw5DI9kGF/EU9CGZkmVLylUAzzH1TjA/5lrKZ5UNSRtqsMzsUZwmWjivx+2QdaNsZRSYXOo7vAWDJMk1S+pAWtc9MGdjuaFOULdwpwK/AqxX9wEJJl9YZt31ODjMEgGHdJC22A83clEGtfdhaIWlqMXkm37Z341kUjCk78AawVbNRN7F09kmJn7R/7ByXk/hfaqv9Ceh9knBt75+lFpDbmv5gSXkjm7xlOzH5cBNf8T1bvtjZiLptSpL8UwRKSgx2WxT0aLeVVTJaJ5SaaEVmt245u2r3lFSUBUNJuVCzOmf7Jqvl92I7nXpeR8k02T21hrlGj4ahWNxmb3l1m8DvQCbRGExIPFhuT5oA9wA0JXqKpPTGXalpP5q149wK2dmSMm81UgPQ57OEaLqUvWycTwfuzaXqQDRcoFncxgkpz7nptdQItAiFFISbi2m1XIANB2i8GPmNFmF1SHsC2nYp0uQmK+TJevDxJk8UB82/dL4CVqaoSHq/F7l2nv8AqKK6OBfhaToAAAAASUVORK5CYII=";
  },
  f379: function (e, t, n) {
    var a,
      i = n("9523").default;
    e.exports =
      ((a = {
        language: { name: "English" },
        noun: "Guest officer,",
        addToken: { text: "Add {token} to the wallet" },
        guideinfo: "info",
        UnlockWallet: "Link Wallet",
        MillionAirdropRewards: "Millions of Rewards",
        ClaimPrice: "Claim VINE",
        ClaimHead: "Claim",
        inputAdress: "Please enter the address to view your award",
        Check: "Query",
        ClaimAirdrop: "Claim Reward",
        NoAirdrop: "There is no reward to claim",
        AirdropClaimed: "Reward already claimed",
        Pending: "Receiving rewards",
        ViewRecords: "View Transaction Records",
        ClaimedSuccessfully: "claimed successfully",
        Home: "Home",
        lightText:
          "The best Multi-Chain platform integrating Decentralized Exchange, Mining, and E-Commerce in the DeFi ecosystem",
        boardroomText: "Stake VINE and VINE-USDT LP to get rewards",
        VINEtotal: "Current Pledge",
        VINEtotals: "Total liquidity bet",
        CurrentBlockReward: "Current Block Reward",
        block: "Block",
        halvingTime: "Estimated halving block",
        TransactionWeight: "Transaction Weight",
        DailyOutput: "Pledge Daily Output",
        DailyOutput1: "Transaction Daily Output",
        LiquidityMiningWeight: "Liquidity Mining Weight",
        GoTradingMining: "Go trading mining",
        DeLiquidityMining: "De-Liquidity Mining",
        LiquidityMining: "Liquidity Mining",
        CurrentLiquidity: "Current mining output (VINE)",
        CurrentMDEXPrice: "Current Price",
        PlatformTransactionVolume: "24H transaction volume",
        CumulativeTransactionVolume: "Cumulative Transaction Volume",
        HandlingFee: "24H handling fee",
        CumulativeHandlingFee: "Cumulative Handling Fee",
        CooperativePartner: "Cooperative Partner",
        RepurchaseAmount: "Repurchase Amount",
        MDXUsageScenarios: "Announcement",
        Repurchase: "Repurchase",
        Dividends: "Reward",
        RepurchaseDesc: "Used to repurchase and destroy VINE",
        DividendsDesc: "Reward the person who pledged VINE",
        DaoDesc: "Community Proposal and Voting",
        Swap: "Exchange",
        Pool: "Liquid Mining",
        Quotes: "Quotes",
        Notice: "Notice",
        ChangeNotice: "Notice",
        BusinessCooperation: "Business Cooperation",
        YouProject: "Your Project",
        CreateLiquidity: "Create liquidity for your tokens",
        ApplyNow: "Apply now",
        TradePool: "Trade Mining",
        MDXCheck: "Audit Organization(SOON)",
        Boardroom: "Dividends",
        AirdropRewards: "Reward",
        AirdropCountdown: "Countdown:",
        PendingAirdropRewards: "Pending Reward Amount",
        CurrentAirdropRewards: "Reward amount of the day",
        MounthAirdropRewards: "Estimated reward amount for the month",
        TotalAirdropRewards: "Total Rewards",
        RepurchaseAndDestruction: "Buyback and burned",
        AmountToBeRepurchased: "Amount to be repurchased",
        TotalRepurchaseAndDestructionQuantity:
          "Total Buyback and burned Quantity",
      }),
      i(a, "AmountToBeRepurchased", "Amount to be repurchased"),
      i(a, "RepurchasePrice", "Repurchase Price (72-hour average price)"),
      i(a, "TotalRepurchaseAmount", "Total Repurchase Amount"),
      i(a, "MarketCap", "Market Value of Mining Output"),
      i(a, "Yourbalance", "Vine balance"),
      i(a, "infoP", "Data is being synchronized, currently synchronized block"),
      i(
        a,
        "infoPc",
        "The amount of data in the block is relatively large, temporarily only showing the data 24 hours ago"
      ),
      i(a, "empptyData", "No record yet"),
      i(a, "buyHistory", "Repurchase Record"),
      i(a, "seeMore", "More"),
      i(a, "notOpen", "to be opened"),
      i(a, "text1", "Explanation on repurchase and reward rules"),
      i(a, "text2_heco", "Buyback and burned (accounting for 30%)"),
      i(a, "text2_bsc", "Buyback and burned (10%)"),
      i(
        a,
        "text3_heco",
        "EmevineFinance will inject the corresponding proportion of daily platform income into the pool of funds to be repurchased, and the smart contract will automatically execute the repurchase and destruction when the repurchase price (72-hour Vine average price) is triggered. If it is not triggered, it will continue to accumulate to Pool of repurchase funds."
      ),
      i(
        a,
        "text3_bsc",
        "MDEX将把每日对应比例的平台收入注入待回购资金池，当触发回购价格（72小时MDX均价）时，由智能合约自动执行回购并销毁。如未被触发，则会持续累计进入到回购资金池。注：从二级市场回购时，将优先购买价格更低的HMDX或MDX进行销毁。"
      ),
      i(a, "text4_heco", "奖励机制（占比70%）"),
      i(a, "text4_bsc", "奖励机制（占比90%）"),
      i(
        a,
        "text5_heco",
        "MDEX将每日对应比例的平台收入注入待奖励资金池，用户通过mdx/usdt LP、mdx/bnb LP、MDX单币可质押领取奖励，我们将奖励HT形式领取，不同待领取池的奖励比重由当前挖矿产出数量和流通量可质押mdx的数量决定，通过智能合约动态调节。mdx/ht LP、MDX单币领取池将根据代币释放情况逐步开启，未来也将开放更多币种和MDX的流动性LP质押。"
      ),
      i(
        a,
        "text5_bsc",
        "MDEX将每日对应比例的平台收入注入待奖励资金池，用户通过mdx/usdt LP、mdx/bnb LP、MDX单币可质押领取奖励，我们将奖励WBNB、MDX、HMDX，不同待领取池的奖励比重由当前挖矿产出数量和流通量可质押mdx的数量决定，通过智能合约动态调节。mdx/bnb LP、MDX单币领取池将根据代币释放情况逐步开启，未来也将开放更多币种和MDX的流动性LP质押。"
      ),
      i(a, "text6", "Boardroom所有机制公开、透明、公正，链上实时显示。"),
      i(
        a,
        "text7",
        "待MDX充分释放后，会通过链上DAO方式进行Boardroom的权益投票治理，届时会选举Boardroom成员享有更多权益，诚邀持续关注。"
      ),
      i(a, "text8", "让数据公开透明 让规则合约执行！"),
      i(a, "text9", "让EmevineFinance持有者享受生态长期收益与治理权"),
      i(a, "seeRule", "查看规则"),
      i(a, "DeflationRate", "实时通缩率"),
      i(a, "Countdown", "减半倒计时"),
      i(a, "airdrop", "奖励"),
      i(a, "HT", "质押MDX奖励"),
      i(a, "Directors", "董事会"),
      i(a, "hash", "交易哈希值"),
      i(a, "time", "时间"),
      i(a, "send", "发送方"),
      i(a, "receive", "接收方"),
      i(a, "price", "价格"),
      i(a, "amount", "数量"),
      i(a, "currency", "单币种"),
      i(a, "search", "搜索 EmevineFinance LP 和 单币种"),
      i(a, "all", "全部"),
      i(a, "RewardDay", "当日奖励"),
      i(a, "RewardMonth"),
      i(a, "poolTitle", "EmevineFinance 矿池"),
      i(
        a,
        "poolDescribe1",
        "注意：我们现在仅支持Heco，请勿转让ETHEREUM主网代币"
      ),
      i(
        a,
        "poolDescribe2",
        "注意：我们现在仅支持BSC，请勿转让ETHEREUM主网代币"
      ),
      i(
        a,
        "poolDescribe3",
        "注意：我们现在仅支持Ethereum，请勿转让ETHEREUM主网代币"
      ),
      i(a, "transaction", "质押"),
      i(a, "transactions", "交易"),
      i(a, "capitalPool", "资金池"),
      i(a, "connect", "链接钱包"),
      i(a, "Ecological", "生态基金"),
      i(a, "miningPool", "矿池"),
      i(a, "airdropRewards", "奖励"),
      i(a, "Repurchase", "回购销毁"),
      i(a, "unit", "万"),
      i(a, "searchText", "搜索"),
      i(a, "operation", "操作"),
      i(a, "mining", "挖矿"),
      i(
        a,
        "MDEForEcoEurrencyTrading1",
        "Heco生态币种交易  多快好省就选MDEX.COM"
      ),
      i(
        a,
        "MDEForEcoEurrencyTrading2",
        "BSC生态币种交易  多快好省就选MDEX.COM"
      ),
      i(
        a,
        "MDEForEcoEurrencyTrading3",
        "Ethereum生态币种交易  多快好省就选MDEX.COM"
      ),
      i(a, "TotalRewardOfCurrentPool", "当前池子总奖励"),
      i(a, "CurrentIndividualWithdrawableBonus", "当前个人可提现奖励"),
      i(a, "CashWithdrawalReward", "提现奖励"),
      i(a, "YieldYearDay", "收益率(年/日) "),
      i(a, "YieldYearDays", "年化收益率"),
      i(a, "CurrentTotalAwards", "当前总奖励"),
      i(a, "TotalTransactionAmount", "交易总额"),
      i(a, "CurrentTransactionVolume", "当前交易额"),
      i(a, "PersonalTurnover", "个人交易额 "),
      i(a, "PersonalReward", "个人奖励"),
      i(a, "CurrencyDailyOutput", "币种每日产量"),
      i(a, "MonthlyOutput", "每月产量"),
      i(a, "PledgeFund", "质押资金"),
      i(a, "ProvideLiquidity", "添加流动性"),
      i(
        a,
        "CurrentTransacObtainCurrencytionVolume",
        "通过抵押Mdex LP & 单币种获取MDX"
      ),
      i(a, "TotalLockIn", "总锁仓量  "),
      i(a, "SingleCurrency", "单币种"),
      i(a, "DailyProduction", "日产量"),
      i(a, "Boardroom", "董事会"),
      i(a, "SettleWithdraw", "全部提取"),
      i(a, "TotalRewardAmountOfTheDay", "当日总奖励金额"),
      i(a, "EstimatedTotalRewardAmountOfTheMonth", "当月预计总奖励金额"),
      i(a, "Trades", "交易对"),
      i(a, "TradesLP", "币种"),
      i(a, "Stakeds", "挖矿"),
      i(a, "Staked", "交易对"),
      i(a, "Earned", "产出币种"),
      i(a, "Earneds", "收益"),
      i(a, "APY", "年化收益率"),
      i(a, "Claim", "提取"),
      i(a, "from", "从"),
      i(a, "to", "到"),
      i(a, "Cancel", "取消"),
      i(a, "Confirm", "确认"),
      i(a, "Available", "余额"),
      i(a, "Withdraw", "提取"),
      i(a, "Deposit", "质押"),
      i(a, "Pledged", "只看我参与的"),
      i(a, "seeMores", "查看更多"),
      i(a, "PersonalPledge", "个人质押"),
      i(a, "Reward", "个人收益"),
      i(a, "DailyReward", "日奖励"),
      i(a, "crossChainBridge", "跨链桥"),
      i(a, "ChooseTheCrossChainBridgeAsset", "请选择跨链资产"),
      i(a, "ReceivinAddress", "收款地址"),
      i(a, "InputAmountOfAssetNeeded", "跨链数量"),
      i(a, "MinimumAmountForTransfer", "单笔最小限额"),
      i(a, "Usable", "余额"),
      i(a, "ConnectWallet", "链接钱包"),
      i(a, "DailyLimitForTransfer", "每日跨链限额"),
      i(a, "Maximum", "最大"),
      i(a, "AmountToBeTrasferred", "跨链转账金额"),
      i(a, "AmountReceived", "实际到账"),
      i(a, "TransactionFee", "手续费"),
      i(a, "Authorization", "转账"),
      i(a, "Return", "返回"),
      i(a, "BinanceSmartChainAddress", "请输入收款地址"),
      i(
        a,
        "AreOfEquivalentValue",
        "通过MDX跨链桥，您将在映射网络收到MDX映射的代币"
      ),
      i(
        a,
        "BinanceSmartChainNetwork",
        "您将从 Huobi ECO Chain Network 跨链到 Binance Smart Chain Network"
      ),
      i(a, "CrossChainTransfer", "超过单笔最大限额"),
      i(a, "AvailableAmount", "超过当天可用限额"),
      i(a, "Next", "下一步"),
      i(a, "MinimumAmount", "低于单笔最小限额"),
      i(a, "TransactionHistory", "查看记录"),
      i(a, "unitB", "亿"),
      i(a, "unitM", "万"),
      i(a, "AcrossChainRecord", "跨链记录"),
      i(a, "NoRecord", "暂无记录"),
      i(a, "details", "详情"),
      i(a, "finish", "完成"),
      i(a, "finish1", "完成"),
      i(a, "BeingProcessed", "处理中"),
      i(a, "AcrossTheChainAssets", " 跨链资产"),
      i(a, "NumberOfAssets", "资产数量"),
      i(a, "ServiceCharge", "手续费"),
      i(a, "CheckTheHash", "查看哈希"),
      i(a, "Approve", "授权"),
      i(a, "InsufficientAccountBalance", "账户余额不足"),
      i(a, "ExcessOfAvailableBalance", "超过当天可用余额"),
      i(a, "crossChain", "跨链桥"),
      i(a, "NoData", "暂无数据"),
      i(
        a,
        "addrTip",
        "请输入正确的的ERC20收款地址，地址错误将导致无法到账(请勿填入合约地址或交易所充值地址)"
      ),
      i(a, "addrTip1", "请输入正确的"),
      i(a, "addrTip2", "收款地址，地址错误将导致无法到账"),
      i(a, "TargetReceivinAddress", "目标链收款地址"),
      i(a, "DailyCrossChainLimitDescription", "每日跨链限额说明"),
      i(
        a,
        "DailyCrossChainInfo",
        "由于BSC上线初期MDX代币流通量较少，为保证用户利益，MDEX限制每日跨链的MDX总量，当BSC网络的MDX流通量充足后，将取消此限制"
      ),
      i(a, "FeeDescription", "手续费说明"),
      i(
        a,
        "FeeDescriptionInfo",
        "您需要支付目标网络的gas费作为跨链手续费，手续费由跨链服务商收取，Mdex不收取用户手续费。"
      ),
      i(a, "invalidDestionationAddress", "目标链地址无效"),
      i(a, "underConfirmation", "等待确认中"),
      i(a, "tradeTitle", "交易即挖矿 交易就送MDX"),
      i(
        a,
        "modalNotice",
        "4月8日12:00 UTC+8 区块快照下，钱包地址WBNB余额大于0.1,并且4月10日18:00至4月19日18:00 UTC+8 期间,添加任意一笔流动性的地址可领取10MDX奖励"
      ),
      i(a, "Innovation", "创新区"),
      i(a, "gasFeeRebateRate", "手续费返还"),
      i(
        a,
        "JoinTheDecentralized1",
        "加入 HECO 和 BSC 生态交易量最大的去中心化交易所"
      ),
      i(a, "JoinTheDecentralized2", "MDEX，为您的项目Token带来更多的交易量"),
      i(
        a,
        "JoinTheDecentralized",
        "加入 HECO 和 BSC 生态交易量最大的去中心化交易所MDEX，为您的项目Token带来更多的交易量"
      ),
      i(a, "ListYourToken", "上币申请"),
      i(a, "ClaimYourLiquidity", "申请流动性激励"),
      i(a, "ClaimYourTransaction", "申请交易激励"),
      i(a, "ToCrossChain", "申请跨链"),
      i(a, "JoinJointMining", "申请联合挖矿"),
      i(a, "Applicatio", "申请"),
      i(a, "Guide", "网站导航"),
      i(a, "Doc", "文档"),
      i(a, "About", "关于"),
      i(a, "Announcement", "公告"),
      i(a, "AdjustmentofPool", "矿池调整"),
      i(a, "ethAlert", "请手动将当前网络设置为Ethereum"),
      i(a, "introduce", "Log into EmevineFinance, the Best All-In-One DEX"),
      i(a, "introduceDsc", "为您的项目Token带来更多的交易量"),
      i(a, "joinmedx", "加入Mdex Token List"),
      i(
        a,
        "joinmedxDsc",
        "加入Mdex Token List，用户将可以直接通过搜索您的代币名称进行交易。"
      ),
      i(a, "joinLiquidity", "加入Mdex Liquidity Mining"),
      i(
        a,
        "joinLiquidityDsc",
        "加入Mdex Liquidity Mining List，流动性提供上LP将获得MDX奖励，为您的项目提供充足的流动性奖励。"
      ),
      i(a, "joinunit", "加入Mdex 联合挖矿"),
      i(
        a,
        "joinunitDsc",
        "加入Mdex 联合挖矿 List，为您的项目增加更多曝光量，用户可以通过质押MDX获取您的项目奖励。"
      ),
      i(a, "IMOApplication", "IMO申请"),
      i(a, "ContactUS", "商务合作"),
      i(a, "ApplyToJoin", "申请加入"),
      i(a, "joinnow", "立即申请"),
      a);
  },
  f511: function (e, t, n) {
    "use strict";
    n("0147");
  },
  f571: function (e, t) {
    e.exports =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAoCAYAAACFFRgXAAAEg0lEQVRYR9WZV6geVRSFv2XFKCKKikYjRg2CChKMESyYGBMjF0VCHiRE0Ac1GgQLKLGB2MDyYOyCgkIeRBDEaBSJiA+J7UHBXsASOyoKiliWrMvMz9z55+//TeKG+3Bnztlnzfr32XudfcQIZns/YAI4GTiw+DsA2B34FvgG+Br4CHgW2Czp3xGWRINOtr0HcCGwDDgB2GEAH98XwB+RtHmAea2hfQO2vXMB9Hpg/2EWq815Glgj6YNBfPUF2PYpwKPAYYM472PsP8CDwJWS/uxjfO+QsH0RsBYIw9NlCY9zJCXuu1pHhm3vBNwDrOrlZEzvtwBnS3qrm79ugO8DLhkTmH7d/ATMl/RJpwmNgG1fCtzb7ypjHvdhso+kX5r8tgG2fRqwAUhIbCt7EVjalLOnALa9C5A0c+i2QlpZ9wJJj9Vx1AFfDtxdG/QdMEfSr00fYTvjM6+XvSTp9A4+5gL1zZZNeISkP6pzWoBt7wV8Cuzd4DQhMiEpeXOK2T4Y+KyPEFou6amG+amWzwNZv27XSrq1E+Crgdu70LRW0mUdGHocWNllbvLrLEl/VcfYngW8C6TcN9nPqarVeVWGXwOO7/G7nikpbNRZPgZ4p8vcWyRd1zBvMfBCjzWXSMomnLRJwLZnAl+W/3dxcJukNR1Yzoec0fAu6my2pM+HBPyApFY9KAHnQQpFL5sEbHuGpN9rP+8CYGODg/WSJmzvVt9AtvthOPL0IEmuMhxhc34vtEAJeLWktsJi+3VgXs3PWcVmDuApmaBPwHE3U1KAt0IiWWDJAIA/Bo6uKyzby4EnK34SZsnpdwFPjAB4nqQ3q4CzYbJxelnJ8G+FJHy4FhYR8zldlDL0BuAOIDl18QiAI4qeqQL+EdinF9pKSARwjj9H1sun7ai7+4G/gUOAhWEXOG4EwKskRTe3QmIYwMmdbcUgmwtIRnhV0jLbrwA5AIwV8DAhEcBvSGrL3bZzjEpe/wJ4v/jlRgHcFhKDbrqERFmdFkp6uRbLewIZcydwxRgAt226QdNaFfAGSUsbisKuxWYr98YoDLeltUELRxVwsB4r6e0ay+cC6yrPhgXcWDj6Lc03SrrJdiRnmiilrZO0ogY4YXLqGAC3l+Y47VClqhjSBJkraUvDESop7PBSL9ieA+SoU7VhGW4XPwXga5JnO+Ti9AwWSNpUvrf9UNFYKR+15KftFIurKr5+KCpjPrplhbx8r2htNS3dVV52E/DnSUryry6WPkWkYURPLGIo+jbx/RWwb/E8MbhIUpnepgCzfSLwHJDMUrfOAr5guemIlI2TXlqTJQNUGbq5CIXy4/LLHCUpJ5mOZvukFJragO5HpALw/+sQWoBeVBzzd+zGyjS/6++YX4Kwvbrop00zrkb3gzVSKqCjuLZWX61cdrhWVREa6fyka3nxVqJ5tGZghekAThdz+263VlktGtppG80eM9vjb2hXmA7DaW5H61Z1xLDfMH1XBjW2o4MDPJcy87fbS5kmGm3ncibXXqlUUXy58sr114yGa6/1wKZRr73+A5UEE0cOuStzAAAAAElFTkSuQmCC";
  },
  f64c: function (e, t) {
    e.exports =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAoCAMAAAC/1ZhiAAAAe1BMVEUAAACNm8WAj7aAj7aBj7aAjraBjrWBjraBj7aBj7aGkbmRkbmBj7eCkLeBjraAj7aBj7WBjraFlLumptOAj7aAj7aEkLiHlLuBjraAjraBj7aDj7eCkLeEkLiWm72FkLiBj7aAj7aBj7aAj7aBjraDkbiBjraBjraAjrXYLRWCAAAAKHRSTlMADN2BaOfx0pZ6Iw5zXPjFoYwdBc3APhTi16VTSCsHL+uyqoduObxNoNih5gAAAY5JREFUOMuVlemWgjAMhZWllGUAZVFARUVn8v5POHSxTRHo4f7QnuQ7kLY3YWfq6OW/DUmd7On2uxXFYQlIZ3pdAG8Jgany4xx5OcOMUvebTGBBj70JFjksKogMNIcVOSdEhrg6erm+Xw1mq0KRfyhc9qKiAbP0Q+59VlEQnNlZxvpNIsqSUOPguM8fEZMqMgAY/z2WzUTsRBQqQvuO31KHUOg46oJGDyyQAbzZIzBacjRAaMjenAIk7KIxCuyGI1Co3CoFP+IJjL7YjWLUEU7k5+gZaDUuW4xCp43WGCgZl5WB3pXrKGhUAg1CGXsRJ/iECTqWTxTaB8JJrpe0KV+2CK01yu2dGb6JdhhVBcg2qh8yQwZpvUEXUMllK+G+ZRWH0jZdCXpbrW6Nt0hH9+dNOMZzVJJMmqoS23dc7prExyl+f1hl/UFDAlgvYReswwf1wdBRmtCOltLaNlR7I7SjmWpDK1qr5rahFI2MdbQqZgcRjePYGcYfHw8ipJt1vG0fmvZRvH3Ab/9s2D9G/+WTi8ZMxSaMAAAAAElFTkSuQmCC";
  },
  f6e3: function (e, t) {
    e.exports =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAFBUlEQVRYR+2YbWyTVRTH/+c+T7ut24AWyuY0UYnRrZaxBTWIGopjAkYSoyEKEYSoSNRIwmBGDFJjfAHZEhSiQCTMN4Yz+sWEyMvYjIp8aHADugFBfJlT3jbQrd3W9R7zdLR9Uto+ZS0LH7ifmt5z//d3zrn39pwSrvFB1zgfrgOmm6GMRNDtdosP6psfDQJOIdCB/Oyvug7u+jddOG192oA2R4WD5WA9AxN1QKfMqlJ55kjjyXQh0wK0FU97joENDOTEAWm80N5cYQR4by3n/Nfpn6MwOltqLD/E2g8L0Dp5xmj2BbaCMTcsSAQfQ2wG5EtgmADIPOv4vI4DDf5EkM4V/aXgwA4wHACxiVTnoZosr97+igFtJa4pkrED4FsicMBhEuqTXd59XmvJtE5m3KDNqZRddK7tu79jAZmZJq30L5OS3wU4a+isUZCEWta6PuvIsAC1i7ChvqmaCW+CWY1GTnw4uoCX/9bU1Kd9ZwR498qeQr+k7WCeGdWgXgK/2FqTVzesFNsdrsIA41Mwz4gIELoVKM+cb2v8Ri+aDHDS8t5HJHgbA3YdnEewMr+lNvt4vKNgmGKbwzVLStY8Gx9NKf0Ioc7v9u79I1Y0EeCkat89wSAfALMIrSGSxPSe+Y6c1Z7nKZDonEYAb3LMtPXK/qkAFUWjxKXM/ILuOZKC6O0Kp93d0NAQjCeaCLC0yjdPsvzi0nn7S6hiQcu6nP1GtzwEaL3zwTksg3VgWJN40qko6lPnju5LKpoIcPb7nNXxu28lAJGXb9l4wE1dRnAhZ8aVVxYF/QNtDIxKCEf0bY4Fizs9TeeMRI0uidH6yy6JzTFtsZTYdmniFAF7oikmCaC5u62pPlXhjAOOKXatAditAQhBb3R5m0KfhzsyDmhzuNxS8prrgADKlvumBsELQTAbZ4jbx+bn1tJIRtBZ1XMWjHHGcEMWgrBopAGPDhUGqQ2FMGtEActfZXsg0DeTENSqnaRDkeLYL7WWn0YU0Agq3vy1D2gtnr6EITeHflZCdR19HfZEyqGH+kL7/uZUvc/4O1hQ+tCt/QMDbeHCMS4I0cdZJvOy0627e41AMw6obTjW4VoUlPgoGSSBjqlCnXfWu/dQMshEgM5VXIB+Xx2BBZFY3brectDI2UtZHTLTIjkwEKgkwZFyS0o4AX48IkQYEKBXznv3byAijrdB4nKr91nJvDW0KdEgMdyPjbK843aHjlHCYViwjimZvpDAm5g5L6xChF1mU9ai0627z8QqJyxYX/PdKPvkYdaVdET43qyKBZ61lssK38heqYTZ7nDdFpChRumuKCT9Qyye7mpv3K3XSHYGy6v8NwcgPwPz/TqACwJiaUutZWfcZyYVQM1m8uQlpl99J95ilit0FTYTqGZC7u2rPJ4tobLd6JLM/ZKV9p99q0B4nfXNF2jz4drcpbE8himOXWArqahkBD9h5sLoHHlMZJp3tm3PCSPA8JrSat8UHuTPGTwh/J1C4oHY5v2KATWxwvLZ9v4+33ZmPKxLeQ8IG5m5KtS4Ew2OKUB+uB2Nl6n7qjn/YtC/CSwXgHDepFDpoXW5nXrbYQFqAlrzbXVMfxmMtQmep5T++tC0yqt7i7Itlr54fcqwAcNe2h2uskGJHQwu1t3yP1WYK7SUp3rGE9mlDRi5QP7jT4B5IlicRK6ys9uz92K6cNr6jABmAuSqRvA64NWMQLra/wP66qbbrxOyeAAAAABJRU5ErkJggg==";
  },
  f7bb: function (e, t) {
    e.exports =
      "data:image/png;base64,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";
  },
  fce9: function (e, t) {
    e.exports =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAflBMVEUAAAAEF0MAE0QEGEMEGEMDGEMEGEMEGEMAE0IDGEIDGEIEGEIAGkIAEUEEGEIFFkIAFz8AADsEGEIDGUMEGEMEGEMEGUIEGEMEF0IEF0IEGEMEGEMEF0MEGEMEF0MDGEMEGEMFGEQDGEMDGEIDGEMEF0MEFkMFGUUAFEEEGEPhWz+OAAAAKXRSTlMA+wiPttjMfBtgVdMTD70vIATynImBPvXFenZzxsG4loJvaOqdXTk0J4sN8yoAAAEDSURBVCjPbZHXksIwDEWvXNMJIaGXha33/39wZWAYM3Ce5LF8JEt4ULiVHP7wypFKjSdmsTRGpDGf7Off8Rd3StHUHT3QMQZSLvd84cKTtEAk6U+UHyQiFzA27DScb9ypheV4M9EbZJjA8y2o1aIUVVVAmehbJJotnVqskGLnwIExGfo1yQkqFuckvb2QcizQcQijQSGyBJYiahu9qEN4FVYaKo7V1c7V+4uWclVNyFVmDAM79HuS57z4B8l1n4Qbhrxdx23z9oOWtXk/Es8yG6Kb0u0uWIMF49PYx1td/0WZZYvapg4CNzUpZb7ahkPbDmxMGTU/Z01lj1f6biVd/zj+A78FGF5Mv1LpAAAAAElFTkSuQmCC";
  },
});
