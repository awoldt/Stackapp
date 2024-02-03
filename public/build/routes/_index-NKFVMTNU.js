import {
  stack_stack_id_default
} from "/build/_shared/chunk-TPQXAG3C.js";
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

// app/routes/_index.tsx
var import_node = __toESM(require_node(), 1);

// app/styles/_index.css
var index_default = "/build/_assets/_index-3X6RKCQP.css";

// app/routes/_index.tsx
var import_functions = __toESM(require_functions(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_index.tsx"
  );
}
function links() {
  return [{
    rel: "stylesheet",
    href: index_default
  }, {
    rel: "stylesheet",
    href: stack_stack_id_default
  }];
}
function Home() {
  _s();
  const loaderData = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav, { isSignedIn: loaderData.signedIn, profileImg: !loaderData.signedIn ? "/imgs/icons/noprofile.png" : loaderData.profileImg }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 41,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { style: {
      alignItems: "center",
      flexDirection: "column",
      marginBottom: "4rem"
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container", style: {
      marginTop: "14rem"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "scrollbar" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 55,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "content", style: {
        background: "none",
        border: "1px solid transparent",
        backdropFilter: "none"
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "titleHolder", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { style: {
              lineHeight: "1.4"
            }, children: "Visualize Tech Stacks with Impact." }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 64,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("hr", {}, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 69,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Stackapp is a platform designed to help developers showcase their tech stacks." }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 70,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
              marginTop: "2rem",
              display: "flex",
              justifyContent: "left"
            }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: !loaderData.signedIn ? "/signin" : "/profile", className: "buttonLarge", children: "Sign In" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 80,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 74,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 63,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "/imgs/icons/test.svg", width: "400", height: "0", alt: "profile-img", style: {
            maxWidth: "100%",
            height: "auto"
          } }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 86,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 62,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
          marginTop: "10rem",
          display: "flex",
          justifyContent: "space-around",
          gap: "0.4rem",
          marginBottom: "14rem",
          flexWrap: "wrap"
        }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "/imgs/icons/githubtext.svg", width: "150", height: "0", alt: "profile-img", style: {
            maxWidth: "100%",
            height: "auto"
          } }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 102,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "/imgs/icons/remix.svg", width: "200", height: "0", alt: "profile-img", style: {
            maxWidth: "100%",
            height: "auto"
          } }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 108,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "/imgs/icons/mongo.svg", width: "200", height: "0", alt: "profile-img", style: {
            maxWidth: "100%",
            height: "auto",
            color: "red"
          } }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 113,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 93,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "fade", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hover", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "leftTop" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 123,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "leftBottom" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 124,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rightTop" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 125,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rightBottom" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 126,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hoverContainer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Stacks are visual representations of the technology used to build your applications and serve as a central place to show others behind the curtain how your app works and all the technical details that go into it" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 128,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 127,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 122,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 121,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "fade", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "subtitle", style: {
            display: "flex",
            alignItems: "center",
            opacity: 1,
            color: "#2667ff",
            fontSize: "32px"
          }, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "/imgs/icons/github.svg", width: "30", height: "0", alt: "profile-img", style: {
              maxWidth: "100%",
              height: "auto"
            } }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 147,
              columnNumber: 17
            }, this),
            "\xA0GitHub"
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 139,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("hr", {}, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 154,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
            "Stacks are specifically designed with GitHub in mind. Connect your repositories and display relevant, up-to-date information about your app. Changes to your repo will reflect on the Stacks you've made.",
            " "
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 155,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 138,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "fade", style: {
          marginTop: "14rem"
        }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hover", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "leftTop" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 168,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "leftBottom" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 169,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rightTop" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 170,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rightBottom" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 171,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hoverContainer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
            "Every Stack displays the five main building blocks of any application: programming language, database, API, framework, and cloud service",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 177,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 178,
              columnNumber: 21
            }, this),
            "Thumbnail uploads allow for Stacks to showcase exactly how your applications look to end users"
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 173,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 172,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 167,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 163,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "fade", style: {
          marginTop: "14rem",
          marginBottom: "2rem"
        }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "subtitle", style: {
            display: "flex",
            alignItems: "center",
            opacity: 1,
            color: "#2667ff",
            fontSize: "32px"
          }, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "/imgs/icons/smile.svg", width: "30", height: "0", alt: "profile-img", style: {
              maxWidth: "100%",
              height: "auto"
            } }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 199,
              columnNumber: 17
            }, this),
            "\xA0Community"
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 191,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("hr", {}, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 206,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Connect with other developers and explore popular Stacks from the community" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 207,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 186,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "fade", style: {
          marginTop: "1rem",
          display: "flex",
          gap: "1rem",
          flexWrap: "wrap",
          justifyContent: "space-around"
        }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hover", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "leftTop" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 222,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "leftBottom" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 223,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rightTop" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 224,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rightBottom" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 225,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hoverContainer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
              display: "flex",
              flexDirection: "column",
              gap: "0.4rem",
              alignItems: "center"
            }, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "/imgs/icons/image.png", width: "415", height: "265", alt: "profile-img", style: {
                objectFit: "cover",
                maxWidth: "100%"
              } }, void 0, false, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 234,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "415px",
                maxWidth: "100%"
              }, children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
                  display: "flex",
                  alignItems: "center"
                }, children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "/imgs/icons/noprofile.png", width: "25", height: "25", alt: "profile-img", style: {
                    borderRadius: "50px",
                    marginRight: "0.2rem"
                  } }, void 0, false, {
                    fileName: "app/routes/_index.tsx",
                    lineNumber: 252,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: {
                    fontWeight: "500",
                    fontSize: "16px"
                  }, children: "Stack" }, void 0, false, {
                    fileName: "app/routes/_index.tsx",
                    lineNumber: 257,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 247,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
                  display: "flex",
                  alignItems: "center"
                }, children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "/imgs/icons/heart.svg", width: "12", height: "0", alt: "profile-img", style: {
                    maxWidth: "100%",
                    height: "auto"
                  } }, void 0, false, {
                    fileName: "app/routes/_index.tsx",
                    lineNumber: 269,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: {
                    fontWeight: "500",
                    fontSize: "12px"
                  }, children: "\xA09.9k" }, void 0, false, {
                    fileName: "app/routes/_index.tsx",
                    lineNumber: 274,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 264,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 239,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 227,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 226,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 221,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hover", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "leftTop" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 287,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "leftBottom" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 288,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rightTop" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 289,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rightBottom" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 290,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hoverContainer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
              display: "flex",
              flexDirection: "column",
              gap: "0.4rem",
              alignItems: "center"
            }, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "/imgs/icons/image.png", width: "415", height: "265", alt: "profile-img", style: {
                objectFit: "cover",
                maxWidth: "100%"
              } }, void 0, false, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 299,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "415px",
                maxWidth: "100%"
              }, children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
                  display: "flex",
                  alignItems: "center"
                }, children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "/imgs/icons/noprofile.png", width: "25", height: "25", alt: "profile-img", style: {
                    borderRadius: "50px",
                    marginRight: "0.2rem"
                  } }, void 0, false, {
                    fileName: "app/routes/_index.tsx",
                    lineNumber: 317,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: {
                    fontWeight: "500",
                    fontSize: "16px"
                  }, children: "Stack" }, void 0, false, {
                    fileName: "app/routes/_index.tsx",
                    lineNumber: 322,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 312,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
                  display: "flex",
                  alignItems: "center"
                }, children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "/imgs/icons/heart.svg", width: "12", height: "0", alt: "profile-img", style: {
                    maxWidth: "100%",
                    height: "auto"
                  } }, void 0, false, {
                    fileName: "app/routes/_index.tsx",
                    lineNumber: 334,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: {
                    fontWeight: "500",
                    fontSize: "12px"
                  }, children: "\xA09.9k" }, void 0, false, {
                    fileName: "app/routes/_index.tsx",
                    lineNumber: 339,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 329,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 304,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 292,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 291,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 286,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 213,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "fade", style: {
          marginTop: "2rem",
          marginBottom: "1rem",
          display: "flex",
          justifyContent: "center"
        }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/explore", className: "buttonLarge", children: "Explore Stacks" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 359,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 352,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "fade", style: {
          marginTop: "14rem",
          marginBottom: "2rem"
        }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "subtitle", style: {
            display: "flex",
            alignItems: "center",
            opacity: 1,
            color: "#2667ff",
            fontSize: "32px"
          }, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "/imgs/icons/hands.svg", width: "30", height: "0", alt: "profile-img", style: {
              maxWidth: "100%",
              height: "auto"
            } }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 377,
              columnNumber: 17
            }, this),
            "\xA0Stack"
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 369,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("hr", {}, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 384,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
            "GitHub integration allows for a high standard for each and every Stack created.",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 388,
              columnNumber: 17
            }, this),
            "Sign in with GitHub to start Stacking today!"
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 385,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 364,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "fade", style: {
          marginTop: "2rem",
          marginBottom: "1rem",
          display: "flex"
        }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { className: "buttonLarge", href: !loaderData.signedIn ? "/signin" : "/profile", children: "Sign In" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 398,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 392,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 56,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 51,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 45,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 40,
    columnNumber: 10
  }, this);
}
_s(Home, "ceKF1Gd7W4lGV+M78eBsU+KQIkw=", false, function() {
  return [useLoaderData];
});
_c = Home;
var meta = () => {
  return [{
    title: "Stackapp - A Platform for Modern Tech Stack Visualization"
  }, {
    name: "description",
    content: "Stackapp offers developers a robust platform, enabling them to craft visually stunning web pages that highlight crucial details about their technological infrastructure. This includes information on coding languages, databases, frameworks, and various other components integral to their development environment."
  }, {
    tagName: "link",
    rel: "canonical",
    href: "https://stackapp.xyz"
  }, {
    property: "og:title",
    content: "Stackapp - A Platform for Modern Tech Stack Visualization"
  }, {
    property: "og:url",
    content: "https://stackapp.xyz"
  }, {
    property: "og:description",
    content: "Stackapp offers developers a robust platform, enabling them to craft visually stunning web pages that highlight crucial details about their technological infrastructure."
  }, {
    name: "twitter:card",
    content: "summary"
  }, {
    name: "twitter:title",
    content: "Stackapp - A Platform for Modern Tech Stack Visualization"
  }, {
    name: "twitter:description",
    content: "Stackapp offers developers a robust platform, enabling them to craft visually stunning web pages that highlight crucial details about their technological infrastructure."
  }];
};
var _c;
$RefreshReg$(_c, "Home");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Home as default,
  links,
  meta
};
//# sourceMappingURL=/build/routes/_index-NKFVMTNU.js.map
