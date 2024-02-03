import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  Nav,
  require_functions
} from "/build/_shared/chunk-JKZSTWR3.js";
import {
  useLoaderData
} from "/build/_shared/chunk-SNU2Q44D.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  createHotContext
} from "/build/_shared/chunk-J5J5OSJ4.js";
import "/build/_shared/chunk-UWV35TSL.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/signin.tsx
var import_node = __toESM(require_node(), 1);
var import_functions = __toESM(require_functions(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/signin.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/signin.tsx"
  );
  import.meta.hot.lastModified = "1706735347432.008";
}
function SignUpPage() {
  _s();
  const githubClientId = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { style: {
    alignItems: "center"
  }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav, { isSignedIn: false, profileImg: null }, void 0, false, {
      fileName: "app/routes/signin.tsx",
      lineNumber: 34,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "content", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      textAlign: "center"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
        marginBottom: "1rem",
        fontSize: "large"
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { className: "fa-brands fa-github fa-2xl" }, void 0, false, {
        fileName: "app/routes/signin.tsx",
        lineNumber: 46,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/signin.tsx",
        lineNumber: 42,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
        "Stack is powered by GitHub.",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
          fileName: "app/routes/signin.tsx",
          lineNumber: 50,
          columnNumber: 15
        }, this),
        "Sign in with GitHub to start Stacking."
      ] }, void 0, true, {
        fileName: "app/routes/signin.tsx",
        lineNumber: 48,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: `https://github.com/login/oauth/authorize?client_id=${githubClientId}`, style: {
        border: "1px solid #171d1c40",
        marginTop: "1rem",
        marginBottom: "1rem",
        background: "white"
      }, children: "Sign In" }, void 0, false, {
        fileName: "app/routes/signin.tsx",
        lineNumber: 54,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "New to GitHub?" }, void 0, false, {
          fileName: "app/routes/signin.tsx",
          lineNumber: 63,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "https://github.com/signup", target: "_blank", style: {
          color: "blue",
          paddingLeft: "0.4rem"
        }, rel: "noreferrer", children: "Create an Account." }, void 0, false, {
          fileName: "app/routes/signin.tsx",
          lineNumber: 64,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/signin.tsx",
        lineNumber: 62,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/signin.tsx",
      lineNumber: 36,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/signin.tsx",
      lineNumber: 35,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/signin.tsx",
    lineNumber: 31,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/signin.tsx",
    lineNumber: 30,
    columnNumber: 10
  }, this);
}
_s(SignUpPage, "ZTShI0yhrQEDRjvKLvEvtrY5Hj8=", false, function() {
  return [useLoaderData];
});
_c = SignUpPage;
var meta = () => {
  return [{
    title: "Sign in - Stackapp"
  }, {
    name: "description",
    content: "Connect your GitHub and create a free Stackapp account. Use our integration with GitHub to display up-to-date information about your repositories."
  }, {
    tagName: "link",
    rel: "canonical",
    href: "https://stackapp.xyz/signin"
  }, {
    property: "og:title",
    content: "Sign in - Stackapp"
  }, {
    property: "og:url",
    content: "https://stackapp.xyz/signin"
  }, {
    property: "og:description",
    content: "Connect your GitHub and create a free Stackapp account. Use our integration with GitHub to display up-to-date information about your repositories."
  }, {
    name: "twitter:card",
    content: "summary"
  }, {
    name: "twitter:title",
    content: "Sign in - Stackapp"
  }, {
    name: "twitter:description",
    content: "Connect your GitHub and create a free Stackapp account. Use our integration with GitHub to display up-to-date information about your repositories."
  }];
};
var _c;
$RefreshReg$(_c, "SignUpPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  SignUpPage as default,
  meta
};
//# sourceMappingURL=/build/routes/signin-CYMFVVZD.js.map
