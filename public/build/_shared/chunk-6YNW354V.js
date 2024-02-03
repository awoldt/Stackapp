import {
  TechUsedDisplay
} from "/build/_shared/chunk-VXANB2DS.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  createHotContext
} from "/build/_shared/chunk-J5J5OSJ4.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/styles/profile.css
var profile_default = "/build/_assets/profile-2SYEXCDM.css";

// app/components/profile/Grid.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/profile/Grid.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/profile/Grid.tsx"
  );
  import.meta.hot.lastModified = "1706890883849.537";
}
function ProfileGrid({
  stacks
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    stacks === null && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Error while getting users Stacks" }, void 0, false, {
      fileName: "app/components/profile/Grid.tsx",
      lineNumber: 26,
      columnNumber: 27
    }, this),
    stacks !== null && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
      stacks.length === 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container1", style: {
        display: "flex",
        justifyContent: "center",
        width: "100%"
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "content", style: {
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        alignItems: "center",
        background: "none",
        border: "0px",
        backdropFilter: "none"
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "/imgs/icons/plus.svg", width: "64px", style: {
          borderRadius: "100px",
          padding: "1rem",
          paddingLeft: "1.1rem",
          paddingRight: "1.1rem",
          border: "1px solid #171d1c40;",
          marginBottom: "1rem"
        }, alt: "plus icon" }, void 0, false, {
          fileName: "app/components/profile/Grid.tsx",
          lineNumber: 42,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
          lineHeight: 1.4
        }, children: "Create Stack" }, void 0, false, {
          fileName: "app/components/profile/Grid.tsx",
          lineNumber: 50,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "When you create Stacks, they will appear on your profile." }, void 0, false, {
          fileName: "app/components/profile/Grid.tsx",
          lineNumber: 53,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
          marginTop: "2rem"
        }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/create", style: {
          color: "blue"
        }, children: "Create your first Stack" }, void 0, false, {
          fileName: "app/components/profile/Grid.tsx",
          lineNumber: 57,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/components/profile/Grid.tsx",
          lineNumber: 54,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/profile/Grid.tsx",
        lineNumber: 33,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/profile/Grid.tsx",
        lineNumber: 28,
        columnNumber: 35
      }, this),
      stacks.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "cardHolder", children: stacks.map((x, index) => {
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "card", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: `/stack/${x.stackData._id}`, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "cardContent", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: `${x.stackData.thumbnails[0]}`, className: "img-thumbnail", width: "415", height: "265", alt: "stack thumbnail", style: {
              marginBottom: "10px"
            } }, void 0, false, {
              fileName: "app/components/profile/Grid.tsx",
              lineNumber: 70,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "cardTitleHolder", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "cardTitle", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "title", style: {
                marginBottom: "25px"
              }, children: x.stackData.repo_name }, void 0, false, {
                fileName: "app/components/profile/Grid.tsx",
                lineNumber: 75,
                columnNumber: 29
              }, this) }, void 0, false, {
                fileName: "app/components/profile/Grid.tsx",
                lineNumber: 74,
                columnNumber: 27
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "cardTitleHolder", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "likeHolder", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "/imgs/icons/heart.svg", width: "14", alt: "like icon" }, void 0, false, {
                  fileName: "app/components/profile/Grid.tsx",
                  lineNumber: 84,
                  columnNumber: 31
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "likeText", children: [
                  "\xA0",
                  x.stackData.likes
                ] }, void 0, true, {
                  fileName: "app/components/profile/Grid.tsx",
                  lineNumber: 85,
                  columnNumber: 31
                }, this)
              ] }, void 0, true, {
                fileName: "app/components/profile/Grid.tsx",
                lineNumber: 83,
                columnNumber: 29
              }, this) }, void 0, false, {
                fileName: "app/components/profile/Grid.tsx",
                lineNumber: 82,
                columnNumber: 27
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/profile/Grid.tsx",
              lineNumber: 73,
              columnNumber: 25
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/profile/Grid.tsx",
            lineNumber: 69,
            columnNumber: 23
          }, this),
          x.techUsedDisplay && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TechUsedDisplay, { t: x.techUsedDisplay }, void 0, false, {
            fileName: "app/components/profile/Grid.tsx",
            lineNumber: 92,
            columnNumber: 45
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/profile/Grid.tsx",
          lineNumber: 68,
          columnNumber: 21
        }, this) }, index, false, {
          fileName: "app/components/profile/Grid.tsx",
          lineNumber: 67,
          columnNumber: 18
        }, this);
      }) }, void 0, false, {
        fileName: "app/components/profile/Grid.tsx",
        lineNumber: 65,
        columnNumber: 33
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/profile/Grid.tsx",
      lineNumber: 27,
      columnNumber: 27
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/profile/Grid.tsx",
    lineNumber: 25,
    columnNumber: 10
  }, this);
}
_c = ProfileGrid;
var _c;
$RefreshReg$(_c, "ProfileGrid");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  profile_default,
  ProfileGrid
};
//# sourceMappingURL=/build/_shared/chunk-6YNW354V.js.map
