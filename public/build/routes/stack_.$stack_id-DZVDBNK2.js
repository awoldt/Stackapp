import {
  stack_stack_id_default
} from "/build/_shared/chunk-TPQXAG3C.js";
import {
  Nav,
  require_functions
} from "/build/_shared/chunk-JKZSTWR3.js";
import {
  Links,
  Meta,
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
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/stackpage/Tech.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/stackpage/Tech.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/stackpage/Tech.tsx"
  );
  import.meta.hot.lastModified = "1706988451382.52";
}
function TechUsed({
  stackData,
  descriptions
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "techContainer", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "techHolder", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
        display: "flex",
        alignItems: "center"
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "/imgs/icons/dot.svg", width: "14px", height: "14px", alt: "three dots icon" }, void 0, false, {
          fileName: "app/components/stackpage/Tech.tsx",
          lineNumber: 31,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "subtitle", children: "LANGUAGES" }, void 0, false, {
          fileName: "app/components/stackpage/Tech.tsx",
          lineNumber: 32,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/stackpage/Tech.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("hr", {}, void 0, false, {
        fileName: "app/components/stackpage/Tech.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "tech", children: stackData.languages_used.map((x, index) => {
        let description = null;
        let descriptionName = null;
        if (descriptions) {
          for (let i = 0; i < descriptions.length; i++) {
            if (x === descriptions[i].name) {
              description = descriptions[i].description;
              descriptionName = descriptions[i].name;
              break;
            }
          }
        }
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "techDetails", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { className: "techImage", src: `/imgs/tech/${x}.svg`, width: "60", height: "60", alt: `${x} logo` }, void 0, false, {
            fileName: "app/components/stackpage/Tech.tsx",
            lineNumber: 49,
            columnNumber: 17
          }, this),
          description && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "techTooltip", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "title", children: descriptionName }, void 0, false, {
              fileName: "app/components/stackpage/Tech.tsx",
              lineNumber: 52,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("hr", {}, void 0, false, {
              fileName: "app/components/stackpage/Tech.tsx",
              lineNumber: 53,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: description }, void 0, false, {
              fileName: "app/components/stackpage/Tech.tsx",
              lineNumber: 54,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/stackpage/Tech.tsx",
            lineNumber: 51,
            columnNumber: 33
          }, this)
        ] }, index, true, {
          fileName: "app/components/stackpage/Tech.tsx",
          lineNumber: 48,
          columnNumber: 18
        }, this);
      }) }, void 0, false, {
        fileName: "app/components/stackpage/Tech.tsx",
        lineNumber: 35,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/stackpage/Tech.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this),
    stackData.databases_used && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "techHolder", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
        display: "flex",
        alignItems: "center"
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "/imgs/icons/dot.svg", width: "14px", height: "14px", alt: "three dots icon" }, void 0, false, {
          fileName: "app/components/stackpage/Tech.tsx",
          lineNumber: 66,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "subtitle", children: "DATABASES" }, void 0, false, {
          fileName: "app/components/stackpage/Tech.tsx",
          lineNumber: 67,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/stackpage/Tech.tsx",
        lineNumber: 62,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("hr", {}, void 0, false, {
        fileName: "app/components/stackpage/Tech.tsx",
        lineNumber: 69,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "tech", children: stackData.databases_used.map((x, index) => {
        let description = null;
        let descriptionName = null;
        if (descriptions) {
          for (let i = 0; i < descriptions.length; i++) {
            if (x === descriptions[i].name) {
              description = descriptions[i].description;
              descriptionName = descriptions[i].name;
              break;
            }
          }
        }
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "techDetails", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { className: "techImage", src: `/imgs/tech/${x}.svg`, width: "60", height: "60", alt: `${x} logo` }, void 0, false, {
            fileName: "app/components/stackpage/Tech.tsx",
            lineNumber: 84,
            columnNumber: 19
          }, this),
          descriptions && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "techTooltip", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "title", children: descriptionName }, void 0, false, {
              fileName: "app/components/stackpage/Tech.tsx",
              lineNumber: 87,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("hr", {}, void 0, false, {
              fileName: "app/components/stackpage/Tech.tsx",
              lineNumber: 88,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: description }, void 0, false, {
              fileName: "app/components/stackpage/Tech.tsx",
              lineNumber: 89,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/stackpage/Tech.tsx",
            lineNumber: 86,
            columnNumber: 36
          }, this)
        ] }, index, true, {
          fileName: "app/components/stackpage/Tech.tsx",
          lineNumber: 83,
          columnNumber: 18
        }, this);
      }) }, void 0, false, {
        fileName: "app/components/stackpage/Tech.tsx",
        lineNumber: 70,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/stackpage/Tech.tsx",
      lineNumber: 61,
      columnNumber: 36
    }, this),
    stackData.apis_used && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "techHolder", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
        display: "flex",
        alignItems: "center"
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "/imgs/icons/dot.svg", width: "14px", height: "14px", alt: "three dots icon" }, void 0, false, {
          fileName: "app/components/stackpage/Tech.tsx",
          lineNumber: 100,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "subtitle", children: "APIS" }, void 0, false, {
          fileName: "app/components/stackpage/Tech.tsx",
          lineNumber: 101,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/stackpage/Tech.tsx",
        lineNumber: 96,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("hr", {}, void 0, false, {
        fileName: "app/components/stackpage/Tech.tsx",
        lineNumber: 103,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "tech", children: stackData.apis_used.map((x, index) => {
        let description = null;
        let descriptionName = null;
        if (descriptions) {
          for (let i = 0; i < descriptions.length; i++) {
            if (x === descriptions[i].name) {
              description = descriptions[i].description;
              descriptionName = descriptions[i].name;
              break;
            }
          }
        }
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "techDetails", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { className: "techImage", src: `/imgs/tech/${x}.svg`, width: "60", height: "60", alt: `${x} logo` }, void 0, false, {
            fileName: "app/components/stackpage/Tech.tsx",
            lineNumber: 118,
            columnNumber: 19
          }, this),
          descriptions && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "techTooltip", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "title", children: descriptionName }, void 0, false, {
              fileName: "app/components/stackpage/Tech.tsx",
              lineNumber: 121,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("hr", {}, void 0, false, {
              fileName: "app/components/stackpage/Tech.tsx",
              lineNumber: 122,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: description }, void 0, false, {
              fileName: "app/components/stackpage/Tech.tsx",
              lineNumber: 123,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/stackpage/Tech.tsx",
            lineNumber: 120,
            columnNumber: 36
          }, this)
        ] }, index, true, {
          fileName: "app/components/stackpage/Tech.tsx",
          lineNumber: 117,
          columnNumber: 18
        }, this);
      }) }, void 0, false, {
        fileName: "app/components/stackpage/Tech.tsx",
        lineNumber: 104,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/stackpage/Tech.tsx",
      lineNumber: 95,
      columnNumber: 31
    }, this),
    stackData.frameworks_used && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "techHolder", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
        display: "flex",
        alignItems: "center"
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "/imgs/icons/dot.svg", width: "14px", height: "14px", alt: "three dots icon" }, void 0, false, {
          fileName: "app/components/stackpage/Tech.tsx",
          lineNumber: 135,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "subtitle", children: "FRAMEWORKS" }, void 0, false, {
          fileName: "app/components/stackpage/Tech.tsx",
          lineNumber: 136,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/stackpage/Tech.tsx",
        lineNumber: 131,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("hr", {}, void 0, false, {
        fileName: "app/components/stackpage/Tech.tsx",
        lineNumber: 138,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "tech", children: stackData.frameworks_used.map((x, index) => {
        let description = null;
        let descriptionName = null;
        if (descriptions) {
          for (let i = 0; i < descriptions.length; i++) {
            if (x === descriptions[i].name) {
              description = descriptions[i].description;
              descriptionName = descriptions[i].name;
              break;
            }
          }
        }
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "techDetails", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { className: "techImage", src: `/imgs/tech/${x}.svg`, width: "60", height: "60", alt: `${x} logo` }, void 0, false, {
            fileName: "app/components/stackpage/Tech.tsx",
            lineNumber: 153,
            columnNumber: 19
          }, this),
          descriptions && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "techTooltip", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "title", children: descriptionName }, void 0, false, {
              fileName: "app/components/stackpage/Tech.tsx",
              lineNumber: 156,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("hr", {}, void 0, false, {
              fileName: "app/components/stackpage/Tech.tsx",
              lineNumber: 157,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: description }, void 0, false, {
              fileName: "app/components/stackpage/Tech.tsx",
              lineNumber: 158,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/stackpage/Tech.tsx",
            lineNumber: 155,
            columnNumber: 36
          }, this)
        ] }, index, true, {
          fileName: "app/components/stackpage/Tech.tsx",
          lineNumber: 152,
          columnNumber: 18
        }, this);
      }) }, void 0, false, {
        fileName: "app/components/stackpage/Tech.tsx",
        lineNumber: 139,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/stackpage/Tech.tsx",
      lineNumber: 130,
      columnNumber: 37
    }, this),
    stackData.clouds_used && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "techHolder", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
        display: "flex",
        alignItems: "center"
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "/imgs/icons/dot.svg", width: "14px", height: "14px", alt: "three dots icon" }, void 0, false, {
          fileName: "app/components/stackpage/Tech.tsx",
          lineNumber: 170,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "subtitle", children: "CLOUD SERVICES" }, void 0, false, {
          fileName: "app/components/stackpage/Tech.tsx",
          lineNumber: 171,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/stackpage/Tech.tsx",
        lineNumber: 166,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("hr", {}, void 0, false, {
        fileName: "app/components/stackpage/Tech.tsx",
        lineNumber: 173,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "tech", children: stackData.clouds_used.map((x, index) => {
        let description = null;
        let descriptionName = null;
        if (descriptions) {
          for (let i = 0; i < descriptions.length; i++) {
            if (x === descriptions[i].name) {
              description = descriptions[i].description;
              descriptionName = descriptions[i].name;
              break;
            }
          }
        }
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "techDetails", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { className: "techImage", src: `/imgs/tech/${x}.svg`, width: "60", height: "60", alt: `${x} logo` }, void 0, false, {
            fileName: "app/components/stackpage/Tech.tsx",
            lineNumber: 188,
            columnNumber: 19
          }, this),
          descriptions && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "techTooltip", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "title", children: descriptionName }, void 0, false, {
              fileName: "app/components/stackpage/Tech.tsx",
              lineNumber: 191,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("hr", {}, void 0, false, {
              fileName: "app/components/stackpage/Tech.tsx",
              lineNumber: 192,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: description }, void 0, false, {
              fileName: "app/components/stackpage/Tech.tsx",
              lineNumber: 193,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/stackpage/Tech.tsx",
            lineNumber: 190,
            columnNumber: 36
          }, this)
        ] }, index, true, {
          fileName: "app/components/stackpage/Tech.tsx",
          lineNumber: 187,
          columnNumber: 18
        }, this);
      }) }, void 0, false, {
        fileName: "app/components/stackpage/Tech.tsx",
        lineNumber: 174,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/stackpage/Tech.tsx",
      lineNumber: 165,
      columnNumber: 33
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/stackpage/Tech.tsx",
    lineNumber: 25,
    columnNumber: 10
  }, this);
}
_c = TechUsed;
var _c;
$RefreshReg$(_c, "TechUsed");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/stackpage/CommitHistory.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/stackpage/CommitHistory.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/stackpage/CommitHistory.tsx"
  );
  import.meta.hot.lastModified = "1706835034457.628";
}
function CommitHistory({
  commits,
  defaultBranch,
  toggleShowCommits,
  extraCommitsStyles,
  commitContainerStyles
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "commitContainer", style: commitContainerStyles, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "subtitle", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { style: {
      display: "flex",
      alignItems: "center"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: "/imgs/icons/dot.svg", width: "14px", height: "14px", alt: "three dots icon" }, void 0, false, {
        fileName: "app/components/stackpage/CommitHistory.tsx",
        lineNumber: 34,
        columnNumber: 11
      }, this),
      "COMMIT HISTORY"
    ] }, void 0, true, {
      fileName: "app/components/stackpage/CommitHistory.tsx",
      lineNumber: 30,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/stackpage/CommitHistory.tsx",
      lineNumber: 29,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("hr", {}, void 0, false, {
      fileName: "app/components/stackpage/CommitHistory.tsx",
      lineNumber: 38,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "profileButtonHolder", style: {
      marginTop: "0.4rem",
      gap: "0"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "commitBranch", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "commitBranchText", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: "/imgs/icons/branch.svg", alt: "branch icon", style: {
          width: "12px"
        } }, void 0, false, {
          fileName: "app/components/stackpage/CommitHistory.tsx",
          lineNumber: 46,
          columnNumber: 13
        }, this),
        "\u2002",
        defaultBranch
      ] }, void 0, true, {
        fileName: "app/components/stackpage/CommitHistory.tsx",
        lineNumber: 45,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/stackpage/CommitHistory.tsx",
        lineNumber: 44,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { onClick: toggleShowCommits, style: {
        fontSize: "12px"
      }, children: [
        "View More\xA0",
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("i", { className: "fa-solid fa-chevron-down fa-xs" }, void 0, false, {
          fileName: "app/components/stackpage/CommitHistory.tsx",
          lineNumber: 56,
          columnNumber: 26
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/stackpage/CommitHistory.tsx",
        lineNumber: 53,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/stackpage/CommitHistory.tsx",
      lineNumber: 40,
      columnNumber: 7
    }, this),
    commits.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "commitRow", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "commitRowMessage", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: "/imgs/icons/commit.svg", alt: "commit svg", style: {
          width: "12px"
        } }, void 0, false, {
          fileName: "app/components/stackpage/CommitHistory.tsx",
          lineNumber: 62,
          columnNumber: 13
        }, this),
        "\u2002",
        commits[0].message
      ] }, void 0, true, {
        fileName: "app/components/stackpage/CommitHistory.tsx",
        lineNumber: 61,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "commitRowSha", children: commits[0].url.split("/")[
          // eslint-disable-next-line no-unexpected-multiline
          commits[0].url.split("/").length - 1
        ].substring(0, 7) }, void 0, false, {
          fileName: "app/components/stackpage/CommitHistory.tsx",
          lineNumber: 69,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "commitRowDate", children: [
          "\u2002\xB7\u2002",
          commits[0].date
        ] }, void 0, true, {
          fileName: "app/components/stackpage/CommitHistory.tsx",
          lineNumber: 74,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { className: "commitRowButton", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: commits[0].url, target: "_blank", rel: "noreferrer", style: {
          padding: "0.6rem"
        }, children: [
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: "/imgs/icons/external-link.svg", alt: "external link icon", style: {
            width: "12px",
            color: "#2667ff"
          } }, void 0, false, {
            fileName: "app/components/stackpage/CommitHistory.tsx",
            lineNumber: 82,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/stackpage/CommitHistory.tsx",
          lineNumber: 78,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/components/stackpage/CommitHistory.tsx",
          lineNumber: 77,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/stackpage/CommitHistory.tsx",
        lineNumber: 68,
        columnNumber: 11
      }, this)
    ] }, 0, true, {
      fileName: "app/components/stackpage/CommitHistory.tsx",
      lineNumber: 60,
      columnNumber: 30
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "extraCommits", style: extraCommitsStyles, children: commits.slice(1, 5).map((x, index) => {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "commitRow", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "commitRowMessage", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: "/imgs/icons/commit.svg", alt: "commit svg", style: {
            width: "12px"
          } }, void 0, false, {
            fileName: "app/components/stackpage/CommitHistory.tsx",
            lineNumber: 95,
            columnNumber: 17
          }, this),
          "\u2002",
          x.message
        ] }, void 0, true, {
          fileName: "app/components/stackpage/CommitHistory.tsx",
          lineNumber: 94,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "commitRowSha", children: x.url.split("/")[
            // eslint-disable-next-line no-unexpected-multiline
            x.url.split("/").length - 1
          ].substring(0, 7) }, void 0, false, {
            fileName: "app/components/stackpage/CommitHistory.tsx",
            lineNumber: 102,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "commitRowDate", children: [
            "\u2002\xB7\u2002",
            x.date
          ] }, void 0, true, {
            fileName: "app/components/stackpage/CommitHistory.tsx",
            lineNumber: 107,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { className: "commitRowButton", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: x.url, target: "_blank", rel: "noreferrer", style: {
            padding: "0.6rem"
          }, children: [
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: "/imgs/icons/external-link.svg", alt: "external link icon", style: {
              width: "12px"
            } }, void 0, false, {
              fileName: "app/components/stackpage/CommitHistory.tsx",
              lineNumber: 113,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/stackpage/CommitHistory.tsx",
            lineNumber: 109,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/components/stackpage/CommitHistory.tsx",
            lineNumber: 108,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/stackpage/CommitHistory.tsx",
          lineNumber: 101,
          columnNumber: 15
        }, this)
      ] }, index, true, {
        fileName: "app/components/stackpage/CommitHistory.tsx",
        lineNumber: 93,
        columnNumber: 16
      }, this);
    }) }, void 0, false, {
      fileName: "app/components/stackpage/CommitHistory.tsx",
      lineNumber: 91,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/stackpage/CommitHistory.tsx",
    lineNumber: 28,
    columnNumber: 10
  }, this);
}
_c2 = CommitHistory;
var _c2;
$RefreshReg$(_c2, "CommitHistory");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/stackpage/LikeButton.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/stackpage/LikeButton.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/stackpage/LikeButton.tsx"
  );
  import.meta.hot.lastModified = "1706728571977.232";
}
function LikeButton({
  stackID,
  hasLiked,
  numberOfLikes
}) {
  _s();
  const [likeButton, setLikeButton] = (0, import_react.useState)(hasLiked ? "liked" : "unliked");
  const [likeNumber, setLikeNumber] = (0, import_react.useState)(numberOfLikes);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: [
    likeButton === "unliked" && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", { className: "likeButton", onClick: async () => {
        const req = await fetch("/api?action=like_stack&stack_id=" + stackID, {
          method: "post"
        });
        const res = await req.json();
        if (res.status === 200) {
          setLikeButton("liked");
          setLikeNumber((prev) => prev + 1);
        }
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("svg", { className: "svgLike", xmlns: "http://www.w3.org/2000/svg", width: "12", viewBox: "0 0 512 512", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("path", { d: "M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" }, void 0, false, {
        fileName: "app/components/stackpage/LikeButton.tsx",
        lineNumber: 45,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/stackpage/LikeButton.tsx",
        lineNumber: 44,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/stackpage/LikeButton.tsx",
        lineNumber: 33,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: likeNumber.toString() }, void 0, false, {
        fileName: "app/components/stackpage/LikeButton.tsx",
        lineNumber: 48,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/stackpage/LikeButton.tsx",
      lineNumber: 32,
      columnNumber: 36
    }, this),
    likeButton === "liked" && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", { className: "likeButtonActive", onClick: async () => {
        const req = await fetch("/api?action=unlike_stack&stack_id=" + stackID, {
          method: "post"
        });
        const res = await req.json();
        if (res.status === 200) {
          setLikeButton("unliked");
          setLikeNumber((prev) => prev - 1);
        }
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("svg", { className: "svgLikeActive", xmlns: "http://www.w3.org/2000/svg", width: "12", viewBox: "0 0 512 512", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("path", { d: "M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" }, void 0, false, {
        fileName: "app/components/stackpage/LikeButton.tsx",
        lineNumber: 63,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/stackpage/LikeButton.tsx",
        lineNumber: 62,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/stackpage/LikeButton.tsx",
        lineNumber: 51,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: likeNumber.toString() }, void 0, false, {
        fileName: "app/components/stackpage/LikeButton.tsx",
        lineNumber: 66,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/stackpage/LikeButton.tsx",
      lineNumber: 50,
      columnNumber: 34
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/stackpage/LikeButton.tsx",
    lineNumber: 31,
    columnNumber: 10
  }, this);
}
_s(LikeButton, "SNsvra/CK5jBnsbk4OxErcjEGWw=");
_c3 = LikeButton;
var _c3;
$RefreshReg$(_c3, "LikeButton");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/stackpage/Header.tsx
var import_react2 = __toESM(require_react(), 1);
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/stackpage/Header.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/stackpage/Header.tsx"
  );
  import.meta.hot.lastModified = "1706878447551.086";
}
function StackHeader(props) {
  _s2();
  const [extraCommits, setExtraCommits] = (0, import_react2.useState)(false);
  const [commitContainer, setCommitContainer] = (0, import_react2.useState)(false);
  const toggleShowCommits = () => {
    setExtraCommits(!extraCommits);
    setCommitContainer(!commitContainer);
  };
  const extraCommitsStyles = {
    maxHeight: extraCommits ? "fit-content" : "0rem",
    opacity: extraCommits ? 1 : 0,
    transition: extraCommits ? "500ms ease-in-out" : "150ms ease-in-out"
  };
  const commitContainerStyles = {
    height: commitContainer ? "22rem" : "8.75rem"
  };
  const [showSettings, setShowSettings] = (0, import_react2.useState)(false);
  const toggleShowSettings = () => {
    setShowSettings(!showSettings);
    console.log("test");
  };
  const showSettingsStyles = {
    display: showSettings ? "block" : "none"
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("dialog", { open: true, className: "dialogShare", style: showSettingsStyles, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "dialogContentHolder", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "dialogContent", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "profileButtonHolder", style: {
        gap: "1rem"
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("a", { href: `/stack/${props.stackData.stackData._id}/edit`, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { src: "/imgs/icons/edit.svg", alt: "edit icon", width: "12px" }, void 0, false, {
            fileName: "app/components/stackpage/Header.tsx",
            lineNumber: 60,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "\u2002Edit Stack" }, void 0, false, {
            fileName: "app/components/stackpage/Header.tsx",
            lineNumber: 62,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/stackpage/Header.tsx",
          lineNumber: 59,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/components/stackpage/Header.tsx",
          lineNumber: 58,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { style: {
          cursor: "pointer"
        }, className: "likeButtonActive", onClick: async () => {
          const userConfirm = window.confirm("Are you sure you want to delete this Stack?");
          if (userConfirm) {
            const userConfirm2 = window.confirm("This action can not be undone. Are you sure?");
            if (userConfirm2) {
              const req = await fetch(`/api?action=delete_stack&stack_id=${props.stackData.stackData._id}`, {
                method: "post"
              });
              const res = await req.json();
              if (res.status == 200) {
                window.location.assign("/profile");
              } else {
                alert(res.message);
              }
            }
          }
        }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { src: "/imgs/icons/trash.svg", alt: "trash icon", width: "12px" }, void 0, false, {
            fileName: "app/components/stackpage/Header.tsx",
            lineNumber: 86,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "\u2002Delete Stack" }, void 0, false, {
            fileName: "app/components/stackpage/Header.tsx",
            lineNumber: 88,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/stackpage/Header.tsx",
          lineNumber: 67,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/stackpage/Header.tsx",
        lineNumber: 55,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/stackpage/Header.tsx",
        lineNumber: 54,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/stackpage/Header.tsx",
        lineNumber: 53,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("button", { onClick: toggleShowSettings, className: "dialogButton", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("i", { className: "fa-solid fa-xmark" }, void 0, false, {
        fileName: "app/components/stackpage/Header.tsx",
        lineNumber: 94,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/stackpage/Header.tsx",
        lineNumber: 93,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/stackpage/Header.tsx",
      lineNumber: 52,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "headerHolder", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "header", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "profile", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("a", { href: `/profile/${props.stackData.profileData?.public_id}`, style: {
          padding: "0rem"
        }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { className: "profileImage", src: props.stackData.profileData?.profile_img === void 0 ? "/imgs/icons/noprofile.png" : props.stackData.profileData?.profile_img, width: "50", height: "50", alt: "profile" }, void 0, false, {
          fileName: "app/components/stackpage/Header.tsx",
          lineNumber: 104,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/components/stackpage/Header.tsx",
          lineNumber: 101,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "profileTextHolder", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "profileTextTitle", children: props.stackData.profileData?.name }, void 0, false, {
            fileName: "app/components/stackpage/Header.tsx",
            lineNumber: 107,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "profileTextUsername", children: [
            "@",
            props.stackData.profileData?.username
          ] }, void 0, true, {
            fileName: "app/components/stackpage/Header.tsx",
            lineNumber: 110,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/stackpage/Header.tsx",
          lineNumber: 106,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/stackpage/Header.tsx",
        lineNumber: 100,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "profileButtonHolder", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
          !props.isUsersStack && props.isSignedIn && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(LikeButton, { stackID: props.stackData.stackData._id, hasLiked: props.hasLiked, numberOfLikes: props.stackData.stackData.likes }, void 0, false, {
            fileName: "app/components/stackpage/Header.tsx",
            lineNumber: 117,
            columnNumber: 59
          }, this),
          !props.isSignedIn && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("button", { className: "likeButton", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("svg", { className: "svgLike", xmlns: "http://www.w3.org/2000/svg", width: "12", viewBox: "0 0 512 512", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("path", { d: "M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" }, void 0, false, {
              fileName: "app/components/stackpage/Header.tsx",
              lineNumber: 121,
              columnNumber: 23
            }, this) }, void 0, false, {
              fileName: "app/components/stackpage/Header.tsx",
              lineNumber: 120,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/components/stackpage/Header.tsx",
              lineNumber: 119,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { children: props.stackData.stackData.likes.toString() }, void 0, false, {
              fileName: "app/components/stackpage/Header.tsx",
              lineNumber: 124,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/stackpage/Header.tsx",
            lineNumber: 118,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/stackpage/Header.tsx",
          lineNumber: 116,
          columnNumber: 13
        }, this),
        props.isUsersStack && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("button", { className: "shareButton", onClick: toggleShowSettings, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { src: "/imgs/icons/gear.svg", alt: "gear icon", width: "12px" }, void 0, false, {
          fileName: "app/components/stackpage/Header.tsx",
          lineNumber: 130,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/components/stackpage/Header.tsx",
          lineNumber: 129,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/components/stackpage/Header.tsx",
          lineNumber: 128,
          columnNumber: 36
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/stackpage/Header.tsx",
        lineNumber: 115,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/stackpage/Header.tsx",
      lineNumber: 99,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/stackpage/Header.tsx",
      lineNumber: 98,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "content", style: {
      borderTop: "0px",
      marginTop: "0"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "0.8rem"
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { style: {
          display: "flex",
          flexWrap: "wrap",
          alignItems: "baseline",
          gap: "1rem"
        }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h1", { children: props.stackData.stackData.repo_name }, void 0, false, {
            fileName: "app/components/stackpage/Header.tsx",
            lineNumber: 154,
            columnNumber: 13
          }, this),
          props.stackData.stackData.website_url !== null && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { style: {
            display: "flex",
            alignItems: "center",
            width: "fit-content"
          }, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { src: "/imgs/icons/link.svg", alt: "external link icon", style: {
              width: "14px"
            } }, void 0, false, {
              fileName: "app/components/stackpage/Header.tsx",
              lineNumber: 160,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("a", { target: "_blank", rel: "noreferrer", href: props.stackData.stackData.website_url, style: {
              padding: "0",
              color: "#2667ff"
            }, children: [
              "\xA0",
              props.stackData.stackData.website_url
            ] }, void 0, true, {
              fileName: "app/components/stackpage/Header.tsx",
              lineNumber: 163,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/stackpage/Header.tsx",
            lineNumber: 155,
            columnNumber: 64
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/stackpage/Header.tsx",
          lineNumber: 148,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "topicHolder", children: props.stackData.stackData.repo_topics && props.stackData.stackData.repo_topics.map((x, index) => {
          return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "topic", children: x }, index, false, {
            fileName: "app/components/stackpage/Header.tsx",
            lineNumber: 174,
            columnNumber: 20
          }, this);
        }) }, void 0, false, {
          fileName: "app/components/stackpage/Header.tsx",
          lineNumber: 172,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/stackpage/Header.tsx",
        lineNumber: 141,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { style: {
        marginTop: "0.4rem"
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: props.stackData.stackData.repo_description }, void 0, false, {
        fileName: "app/components/stackpage/Header.tsx",
        lineNumber: 183,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/stackpage/Header.tsx",
        lineNumber: 180,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(CommitHistory, { commits: props.stackData.stackData.repo_commits, defaultBranch: props.stackData.stackData.repo_default_branch, toggleShowCommits, extraCommitsStyles, commitContainerStyles }, void 0, false, {
        fileName: "app/components/stackpage/Header.tsx",
        lineNumber: 186,
        columnNumber: 9
      }, this),
      props.stackData.stackData === void 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "There was an error while fetching technology used in your stack" }, void 0, false, {
        fileName: "app/components/stackpage/Header.tsx",
        lineNumber: 188,
        columnNumber: 53
      }, this),
      props.stackData.stackData !== void 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(TechUsed, { stackData: props.stackData.stackData, descriptions: props.techDescriptions }, void 0, false, {
        fileName: "app/components/stackpage/Header.tsx",
        lineNumber: 189,
        columnNumber: 53
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/stackpage/Header.tsx",
      lineNumber: 137,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/stackpage/Header.tsx",
    lineNumber: 51,
    columnNumber: 10
  }, this);
}
_s2(StackHeader, "3O343smI93OC29Jm+TfgptTL2bY=");
_c4 = StackHeader;
var _c4;
$RefreshReg$(_c4, "StackHeader");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/stackpage/Thumbnails.tsx
var import_react3 = __toESM(require_react(), 1);
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/stackpage/Thumbnails.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s3 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/stackpage/Thumbnails.tsx"
  );
  import.meta.hot.lastModified = "1706730845541.301";
}
function StackImages({
  thumbnails
}) {
  _s3();
  const imgMainRef = (0, import_react3.useRef)(null);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_jsx_dev_runtime5.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "content", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("img", { ref: imgMainRef, className: "imageMain", src: thumbnails[0], width: 0, height: 0, sizes: "100vw", alt: "profile-img" }, void 0, false, {
      fileName: "app/components/stackpage/Thumbnails.tsx",
      lineNumber: 30,
      columnNumber: 9
    }, this),
    thumbnails.length > 1 && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "imageThumbnailHolder", children: thumbnails?.map((x, index) => {
      return (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("img", { className: "img-thumbnail", src: `${x}`, width: "150", height: "100", alt: "profile-img", onClick: () => {
          imgMainRef.current.src = `${x}`;
        } }, index, false, {
          fileName: "app/components/stackpage/Thumbnails.tsx",
          lineNumber: 36,
          columnNumber: 13
        }, this)
      );
    }) }, void 0, false, {
      fileName: "app/components/stackpage/Thumbnails.tsx",
      lineNumber: 32,
      columnNumber: 35
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/stackpage/Thumbnails.tsx",
    lineNumber: 29,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/stackpage/Thumbnails.tsx",
    lineNumber: 28,
    columnNumber: 10
  }, this);
}
_s3(StackImages, "Y8XxwtuulUu1M0P0tAWGS8dCfBw=");
_c5 = StackImages;
var _c5;
$RefreshReg$(_c5, "StackImages");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/stackpage/MoreStacks.tsx
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/stackpage/MoreStacks.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/stackpage/MoreStacks.tsx"
  );
  import.meta.hot.lastModified = "1706889139390.52";
}
function StackMore({
  username,
  stacks
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_jsx_dev_runtime6.Fragment, { children: stacks && /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "content", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "subtitle", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { style: {
      display: "flex",
      alignItems: "center"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("img", { src: "/imgs/icons/dot.svg", width: "14px", height: "14px", alt: "three dots icon" }, void 0, false, {
        fileName: "app/components/stackpage/MoreStacks.tsx",
        lineNumber: 32,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "subtitle", children: [
        "MORE FROM @",
        username
      ] }, void 0, true, {
        fileName: "app/components/stackpage/MoreStacks.tsx",
        lineNumber: 33,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/stackpage/MoreStacks.tsx",
      lineNumber: 28,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/stackpage/MoreStacks.tsx",
      lineNumber: 27,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { style: {
      display: "flex",
      gap: "0rem",
      flexWrap: "wrap",
      justifyContent: "space-around"
    }, children: stacks.slice(0, 4).map((x, index) => {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { style: {
        display: "flex",
        flexDirection: "column",
        gap: "0.4rem"
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("a", { href: `/stack/${x.stackData._id}`, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("img", { src: `${x.stackData.thumbnails[0]}`, className: "img-thumbnail", width: "275", height: "175", alt: "profile-img", style: {
          objectFit: "cover",
          boxShadow: "0px 0px 10px 0px #00000010",
          marginBottom: "0.4rem"
        } }, void 0, false, {
          fileName: "app/components/stackpage/MoreStacks.tsx",
          lineNumber: 49,
          columnNumber: 23
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { style: {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          marginTop: "0.4rem"
        }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "title", children: x.stackData.repo_name }, void 0, false, {
          fileName: "app/components/stackpage/MoreStacks.tsx",
          lineNumber: 61,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/components/stackpage/MoreStacks.tsx",
          lineNumber: 54,
          columnNumber: 23
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/stackpage/MoreStacks.tsx",
        lineNumber: 48,
        columnNumber: 21
      }, this) }, index, false, {
        fileName: "app/components/stackpage/MoreStacks.tsx",
        lineNumber: 43,
        columnNumber: 18
      }, this);
    }) }, void 0, false, {
      fileName: "app/components/stackpage/MoreStacks.tsx",
      lineNumber: 36,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/stackpage/MoreStacks.tsx",
    lineNumber: 26,
    columnNumber: 18
  }, this) }, void 0, false, {
    fileName: "app/components/stackpage/MoreStacks.tsx",
    lineNumber: 25,
    columnNumber: 10
  }, this);
}
_c6 = StackMore;
var _c6;
$RefreshReg$(_c6, "StackMore");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/stack_.$stack_id.tsx
var import_functions = __toESM(require_functions(), 1);
var import_jsx_dev_runtime7 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/stack_.$stack_id.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s4 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/stack_.$stack_id.tsx"
  );
}
function Home() {
  _s4();
  const loaderData = useLoaderData();
  console.log(loaderData);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_jsx_dev_runtime7.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("main", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Nav, { isSignedIn: loaderData.isSignedIn, profileImg: loaderData.signedInUsersProfileImg }, void 0, false, {
      fileName: "app/routes/stack_.$stack_id.tsx",
      lineNumber: 35,
      columnNumber: 9
    }, this),
    loaderData.stackDetails === null && /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: "There was an error while fetching Stack data" }, void 0, false, {
      fileName: "app/routes/stack_.$stack_id.tsx",
      lineNumber: 37,
      columnNumber: 46
    }, this),
    loaderData.stackDetails !== null && /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_jsx_dev_runtime7.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "container", style: {
      paddingTop: "0rem"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(StackHeader, { isUsersStack: loaderData.isUsersStack, stackData: loaderData.stackDetails, hasLiked: loaderData.hasLikedStack, techDescriptions: loaderData.stackDetails.techDecriptions, isSignedIn: loaderData.isSignedIn }, void 0, false, {
        fileName: "app/routes/stack_.$stack_id.tsx",
        lineNumber: 43,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(StackImages, { thumbnails: loaderData.stackDetails.stackData.thumbnails }, void 0, false, {
        fileName: "app/routes/stack_.$stack_id.tsx",
        lineNumber: 45,
        columnNumber: 15
      }, this),
      loaderData.otherStacksByUser && loaderData.otherStacksByUser.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(StackMore, { username: loaderData.stackDetails.profileData.username, stacks: loaderData.otherStacksByUser }, void 0, false, {
        fileName: "app/routes/stack_.$stack_id.tsx",
        lineNumber: 47,
        columnNumber: 91
      }, this),
      loaderData.justCreated && /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("dialog", { open: true, className: "dialog", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "dialogContent", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "subtitle", style: {
          opacity: 1
        }, children: "Stack regularly pulls information from GitHub repositories, ensuring that all related content is kept up-to-date with the latest GitHub changes. Expect a delay of up to 30 minutes for any changes made on GitHub to be fully integrated and reflected on the Stack website. This delay might be due to scheduled synchronization intervals, processing time, or other factors involved in the data integration process. During this time frame, users should anticipate that the website's data will gradually align with the most recent updates from the GitHub repositories." }, void 0, false, {
          fileName: "app/routes/stack_.$stack_id.tsx",
          lineNumber: 53,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("form", { method: "dialog", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("button", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("img", { src: "/imgs/icons/x.svg", alt: "plus", style: {
          width: "10px"
        } }, void 0, false, {
          fileName: "app/routes/stack_.$stack_id.tsx",
          lineNumber: 70,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/routes/stack_.$stack_id.tsx",
          lineNumber: 69,
          columnNumber: 23
        }, this) }, void 0, false, {
          fileName: "app/routes/stack_.$stack_id.tsx",
          lineNumber: 68,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/stack_.$stack_id.tsx",
        lineNumber: 52,
        columnNumber: 19
      }, this) }, void 0, false, {
        fileName: "app/routes/stack_.$stack_id.tsx",
        lineNumber: 51,
        columnNumber: 42
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/stack_.$stack_id.tsx",
      lineNumber: 40,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/stack_.$stack_id.tsx",
      lineNumber: 39,
      columnNumber: 46
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/stack_.$stack_id.tsx",
    lineNumber: 34,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/stack_.$stack_id.tsx",
    lineNumber: 33,
    columnNumber: 10
  }, this);
}
_s4(Home, "ceKF1Gd7W4lGV+M78eBsU+KQIkw=", false, function() {
  return [useLoaderData];
});
_c7 = Home;
function links() {
  return [{
    rel: "stylesheet",
    href: stack_stack_id_default
  }];
}
function ErrorBoundary() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("title", { children: "Oh no!" }, void 0, false, {
        fileName: "app/routes/stack_.$stack_id.tsx",
        lineNumber: 130,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/routes/stack_.$stack_id.tsx",
        lineNumber: 131,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/routes/stack_.$stack_id.tsx",
        lineNumber: 132,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/stack_.$stack_id.tsx",
      lineNumber: 129,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("body", { style: {
      padding: "100px 0px 0px 25px"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Nav, { isSignedIn: false, profileImg: null }, void 0, false, {
        fileName: "app/routes/stack_.$stack_id.tsx",
        lineNumber: 137,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h1", { children: "Stack not found :(" }, void 0, false, {
        fileName: "app/routes/stack_.$stack_id.tsx",
        lineNumber: 138,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/stack_.$stack_id.tsx",
      lineNumber: 134,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/stack_.$stack_id.tsx",
    lineNumber: 128,
    columnNumber: 10
  }, this);
}
_c22 = ErrorBoundary;
var meta = ({
  data
}) => {
  if (data) {
    return [{
      title: `${data.stackDetails?.stackData.repo_name} Tech Stack | Stackapp`
    }, {
      name: "description",
      content: `Discover the technology used to build ${data.stackDetails?.stackData.repo_name} from user @${data.stackDetails?.profileData?.username} - including programming languages, databases, APIs and more.`
    }, {
      tagName: "link",
      rel: "canonical",
      href: `https://stackapp.xyz/stack/${data.stackDetails?.stackData._id}`
    }, {
      property: "og:title",
      content: `${data.stackDetails?.stackData.repo_name} Tech Stack | Stackapp`
    }, {
      property: "og:url",
      content: `https://stackapp.xyz/stack/${data.stackDetails?.stackData._id}`
    }, {
      property: "og:description",
      content: `Discover the technology used to build ${data.stackDetails?.stackData.repo_name} from user @${data.stackDetails?.profileData?.username} - including programming languages, databases, APIs and more.`
    }, {
      name: "twitter:card",
      content: "summary"
    }, {
      name: "twitter:title",
      content: `${data.stackDetails?.stackData.repo_name} Tech Stack | Stackapp`
    }, {
      name: "twitter:description",
      content: `Discover the technology used to build ${data.stackDetails?.stackData.repo_name} from user @${data.stackDetails?.profileData?.username} - including programming languages, databases, APIs and more.`
    }];
  }
  return [{
    title: "Stack Page"
  }];
};
var _c7;
var _c22;
$RefreshReg$(_c7, "Home");
$RefreshReg$(_c22, "ErrorBoundary");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ErrorBoundary,
  Home as default,
  links,
  meta
};
//# sourceMappingURL=/build/routes/stack_.$stack_id-DZVDBNK2.js.map
