import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  createHotContext
} from "/build/_shared/chunk-J5J5OSJ4.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/TechUsedDisplay.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/TechUsedDisplay.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/TechUsedDisplay.tsx"
  );
  import.meta.hot.lastModified = "1706837939275.738";
}
function TechUsedDisplay({
  t
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
    display: "flex",
    gap: "0.4rem",
    flexDirection: "row"
  }, children: t.map((y, index2) => {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: y, alt: y.split("/")[3].split(".")[0] + " icon", style: {
      width: "25px",
      marginRight: "10px"
    } }, index2, false, {
      fileName: "app/components/TechUsedDisplay.tsx",
      lineNumber: 31,
      columnNumber: 16
    }, this);
  }) }, void 0, false, {
    fileName: "app/components/TechUsedDisplay.tsx",
    lineNumber: 25,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/TechUsedDisplay.tsx",
    lineNumber: 24,
    columnNumber: 10
  }, this);
}
_c = TechUsedDisplay;
var _c;
$RefreshReg$(_c, "TechUsedDisplay");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  TechUsedDisplay
};
//# sourceMappingURL=/build/_shared/chunk-VXANB2DS.js.map
