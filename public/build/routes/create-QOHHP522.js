import {
  CreateStackFormSubmit,
  ThumbnailInputs,
  create_default
} from "/build/_shared/chunk-WWXY7D7W.js";
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
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/create.tsx
var import_react = __toESM(require_react(), 1);
var import_node = __toESM(require_node(), 1);
var import_functions = __toESM(require_functions(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/create.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/create.tsx"
  );
}
function links() {
  return [{
    rel: "stylesheet",
    href: create_default
  }];
}
function CreateForm() {
  _s();
  const loaderData = useLoaderData();
  console.log(loaderData);
  const githubClientId = useLoaderData();
  const DISABLEDFORM = loaderData.isSignedIn ? false : true;
  const [techSelected, setTechSelected] = (0, import_react.useState)({
    languages: [],
    databases: [],
    apis: [],
    frameworks: [],
    clouds: []
  });
  const formRef = (0, import_react.useRef)(null);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav, { isSignedIn: loaderData.isSignedIn, profileImg: loaderData.navBarImg ?? "/imgs/icons/noprofile.png" }, void 0, false, {
      fileName: "app/routes/create.tsx",
      lineNumber: 51,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { style: {
      alignItems: "center"
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container", style: {
      width: "25%",
      minWidth: "fit-content"
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "content", children: [
      !loaderData.isSignedIn && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center"
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
          marginBottom: "1rem",
          fontSize: "large"
        }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { className: "fa-brands fa-github fa-2xl" }, void 0, false, {
          fileName: "app/routes/create.tsx",
          lineNumber: 76,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/create.tsx",
          lineNumber: 71,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
          "Stack is powered by GitHub.",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
            fileName: "app/routes/create.tsx",
            lineNumber: 80,
            columnNumber: 19
          }, this),
          "Sign in with GitHub to create your first Stack"
        ] }, void 0, true, {
          fileName: "app/routes/create.tsx",
          lineNumber: 78,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: `https://github.com/login/oauth/authorize?client_id=${githubClientId}`, style: {
          border: "1px solid #171d1c40",
          marginTop: "1rem",
          marginBottom: "1rem",
          background: "white"
        }, children: "Sign In" }, void 0, false, {
          fileName: "app/routes/create.tsx",
          lineNumber: 84,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "New to GitHub?" }, void 0, false, {
            fileName: "app/routes/create.tsx",
            lineNumber: 94,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "https://github.com/signup", target: "_blank", style: {
            color: "blue",
            paddingLeft: "0.4rem"
          }, rel: "noreferrer", children: "Create an Account." }, void 0, false, {
            fileName: "app/routes/create.tsx",
            lineNumber: 95,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/create.tsx",
          lineNumber: 93,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/create.tsx",
        lineNumber: 64,
        columnNumber: 40
      }, this),
      loaderData.isSignedIn && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
        loaderData.repoOptions === null || loaderData.techOffered === null && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "There was an error while loading create page. Try again later." }, void 0, false, {
          fileName: "app/routes/create.tsx",
          lineNumber: 108,
          columnNumber: 88
        }, this),
        loaderData.repoOptions && loaderData.techOffered && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
          loaderData.repoOptions.length === 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "You don't have any repos available to create a Stack with. Make sure all your repos are public. This can also be becuase you have used up all your pubilc repos with other Stacks." }, void 0, false, {
            fileName: "app/routes/create.tsx",
            lineNumber: 114,
            columnNumber: 61
          }, this),
          loaderData.repoOptions.length !== 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { encType: "multipart/form-data", method: "post", ref: formRef, onSubmit: (e) => {
            CreateStackFormSubmit(e, techSelected, formRef);
          }, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
              "Select a ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", { children: "GitHub Repository." }, void 0, false, {
                fileName: "app/routes/create.tsx",
                lineNumber: 126,
                columnNumber: 36
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/create.tsx",
              lineNumber: 125,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "required", children: "\u2003[Required]" }, void 0, false, {
              fileName: "app/routes/create.tsx",
              lineNumber: 128,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("hr", {}, void 0, false, {
              fileName: "app/routes/create.tsx",
              lineNumber: 129,
              columnNumber: 25
            }, this),
            loaderData.repoOptions.length === 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "There are no more repos for you to use" }, void 0, false, {
              fileName: "app/routes/create.tsx",
              lineNumber: 130,
              columnNumber: 65
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { name: "repo", id: "", style: {
              marginBottom: "3rem"
            }, required: true, disabled: DISABLEDFORM, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "", selected: true, disabled: true, hidden: true, children: "---" }, void 0, false, {
                fileName: "app/routes/create.tsx",
                lineNumber: 137,
                columnNumber: 27
              }, this),
              loaderData.repoOptions.map((x, index) => {
                return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: x.name, children: x.name }, index, false, {
                  fileName: "app/routes/create.tsx",
                  lineNumber: 141,
                  columnNumber: 28
                }, this);
              })
            ] }, void 0, true, {
              fileName: "app/routes/create.tsx",
              lineNumber: 133,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
              "Select all of the ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", { children: "Languages" }, void 0, false, {
                fileName: "app/routes/create.tsx",
                lineNumber: 148,
                columnNumber: 45
              }, this),
              " used in the creation of your tech stack."
            ] }, void 0, true, {
              fileName: "app/routes/create.tsx",
              lineNumber: 147,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "required", children: "\u2003[Required]" }, void 0, false, {
              fileName: "app/routes/create.tsx",
              lineNumber: 151,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("hr", {}, void 0, false, {
              fileName: "app/routes/create.tsx",
              lineNumber: 152,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { disabled: DISABLEDFORM, name: "language", id: "", onChange: (e) => {
              setTechSelected((prev) => {
                const {
                  languages,
                  databases,
                  apis,
                  frameworks,
                  clouds
                } = prev;
                const r = {
                  languages: [...languages, e.target.value],
                  databases,
                  apis,
                  frameworks,
                  clouds
                };
                return r;
              });
            }, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "", selected: true, children: "---" }, void 0, false, {
                fileName: "app/routes/create.tsx",
                lineNumber: 173,
                columnNumber: 27
              }, this),
              loaderData.techOffered.languages.map((x, index) => {
                if (!techSelected.languages.includes(x)) {
                  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: x, children: x }, index, false, {
                    fileName: "app/routes/create.tsx",
                    lineNumber: 178,
                    columnNumber: 30
                  }, this);
                }
              })
            ] }, void 0, true, {
              fileName: "app/routes/create.tsx",
              lineNumber: 153,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("hr", {}, void 0, false, {
              fileName: "app/routes/create.tsx",
              lineNumber: 184,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "selectedHolder", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "selected", children: "[Selected]" }, void 0, false, {
                fileName: "app/routes/create.tsx",
                lineNumber: 187,
                columnNumber: 27
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "holder", children: techSelected.languages.map((language) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "inputSelected", onClick: () => {
                const {
                  databases,
                  apis,
                  frameworks,
                  clouds
                } = techSelected;
                const t = [...techSelected.languages];
                t.splice(t.indexOf(language), 1);
                setTechSelected({
                  languages: t,
                  databases,
                  apis,
                  frameworks,
                  clouds
                });
              }, children: [
                language,
                "\u2002",
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "/imgs/icons/x.svg", alt: "x", style: {
                  width: "6px"
                } }, void 0, false, {
                  fileName: "app/routes/create.tsx",
                  lineNumber: 208,
                  columnNumber: 33
                }, this)
              ] }, language, true, {
                fileName: "app/routes/create.tsx",
                lineNumber: 189,
                columnNumber: 69
              }, this)) }, void 0, false, {
                fileName: "app/routes/create.tsx",
                lineNumber: 188,
                columnNumber: 27
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/create.tsx",
              lineNumber: 186,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
              "Select all of the ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", { children: "Databases" }, void 0, false, {
                fileName: "app/routes/create.tsx",
                lineNumber: 217,
                columnNumber: 45
              }, this),
              " used in the creation of your tech stack."
            ] }, void 0, true, {
              fileName: "app/routes/create.tsx",
              lineNumber: 216,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("hr", {}, void 0, false, {
              fileName: "app/routes/create.tsx",
              lineNumber: 220,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { disabled: DISABLEDFORM, name: "database", id: "", onChange: (e) => setTechSelected((prev) => {
              const {
                languages,
                databases,
                apis,
                frameworks,
                clouds
              } = prev;
              const r = {
                languages,
                databases: databases === null ? [e.target.value] : [...databases, e.target.value],
                apis,
                frameworks,
                clouds
              };
              return r;
            }), children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "", selected: true, children: "---" }, void 0, false, {
                fileName: "app/routes/create.tsx",
                lineNumber: 240,
                columnNumber: 27
              }, this),
              loaderData.techOffered.databases.map((x, index) => {
                if (!techSelected.databases.includes(x)) {
                  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: x, children: x }, index, false, {
                    fileName: "app/routes/create.tsx",
                    lineNumber: 245,
                    columnNumber: 30
                  }, this);
                }
              })
            ] }, void 0, true, {
              fileName: "app/routes/create.tsx",
              lineNumber: 221,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("hr", {}, void 0, false, {
              fileName: "app/routes/create.tsx",
              lineNumber: 251,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "selectedHolder", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "selected", children: "[Selected]" }, void 0, false, {
                fileName: "app/routes/create.tsx",
                lineNumber: 254,
                columnNumber: 27
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "holder", children: techSelected.databases.map((database) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "inputSelected", onClick: () => {
                const {
                  languages,
                  apis,
                  frameworks,
                  clouds
                } = techSelected;
                const t = [...techSelected.databases];
                t.splice(t.indexOf(database), 1);
                setTechSelected({
                  languages,
                  databases: t,
                  apis,
                  frameworks,
                  clouds
                });
              }, children: [
                database,
                "\u2002",
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "/imgs/icons/x.svg", alt: "x", style: {
                  width: "6px"
                } }, void 0, false, {
                  fileName: "app/routes/create.tsx",
                  lineNumber: 275,
                  columnNumber: 33
                }, this)
              ] }, database, true, {
                fileName: "app/routes/create.tsx",
                lineNumber: 256,
                columnNumber: 69
              }, this)) }, void 0, false, {
                fileName: "app/routes/create.tsx",
                lineNumber: 255,
                columnNumber: 27
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/create.tsx",
              lineNumber: 253,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
              "Select all of the ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", { children: "APIs" }, void 0, false, {
                fileName: "app/routes/create.tsx",
                lineNumber: 284,
                columnNumber: 45
              }, this),
              " used in the creation of your tech stack."
            ] }, void 0, true, {
              fileName: "app/routes/create.tsx",
              lineNumber: 283,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("hr", {}, void 0, false, {
              fileName: "app/routes/create.tsx",
              lineNumber: 287,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { disabled: DISABLEDFORM, name: "api", id: "", onChange: (e) => {
              setTechSelected((prev) => {
                const {
                  languages,
                  databases,
                  apis,
                  frameworks,
                  clouds
                } = prev;
                const r = {
                  languages,
                  databases,
                  apis: apis === null ? [e.target.value] : [...apis, e.target.value],
                  frameworks,
                  clouds
                };
                return r;
              });
            }, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "", selected: true, children: "---" }, void 0, false, {
                fileName: "app/routes/create.tsx",
                lineNumber: 308,
                columnNumber: 27
              }, this),
              loaderData.techOffered.apis.map((x, index) => {
                if (!techSelected.apis.includes(x)) {
                  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: x, children: x }, index, false, {
                    fileName: "app/routes/create.tsx",
                    lineNumber: 313,
                    columnNumber: 30
                  }, this);
                }
              })
            ] }, void 0, true, {
              fileName: "app/routes/create.tsx",
              lineNumber: 288,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("hr", {}, void 0, false, {
              fileName: "app/routes/create.tsx",
              lineNumber: 319,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "selectedHolder", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "selected", children: "[Selected]" }, void 0, false, {
                fileName: "app/routes/create.tsx",
                lineNumber: 322,
                columnNumber: 27
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "holder", children: techSelected.apis.map((API) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "inputSelected", onClick: () => {
                const {
                  languages,
                  databases,
                  frameworks,
                  clouds
                } = techSelected;
                const t = [...techSelected.apis];
                t.splice(t.indexOf(API), 1);
                setTechSelected({
                  languages,
                  databases,
                  apis: t,
                  frameworks,
                  clouds
                });
              }, children: [
                API,
                "\u2002",
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "/imgs/icons/x.svg", alt: "x", style: {
                  width: "6px"
                } }, void 0, false, {
                  fileName: "app/routes/create.tsx",
                  lineNumber: 343,
                  columnNumber: 33
                }, this)
              ] }, API, true, {
                fileName: "app/routes/create.tsx",
                lineNumber: 324,
                columnNumber: 59
              }, this)) }, void 0, false, {
                fileName: "app/routes/create.tsx",
                lineNumber: 323,
                columnNumber: 27
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/create.tsx",
              lineNumber: 321,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
              "Select all of the ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", { children: "Frameworks" }, void 0, false, {
                fileName: "app/routes/create.tsx",
                lineNumber: 352,
                columnNumber: 45
              }, this),
              " used in the creation of your tech stack."
            ] }, void 0, true, {
              fileName: "app/routes/create.tsx",
              lineNumber: 351,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("hr", {}, void 0, false, {
              fileName: "app/routes/create.tsx",
              lineNumber: 355,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { disabled: DISABLEDFORM, name: "framework", id: "", onChange: (e) => {
              setTechSelected((prev) => {
                const {
                  languages,
                  databases,
                  apis,
                  frameworks,
                  clouds
                } = prev;
                const r = {
                  languages,
                  databases,
                  apis,
                  frameworks: frameworks === null ? [e.target.value] : [...frameworks, e.target.value],
                  clouds
                };
                return r;
              });
            }, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "", selected: true, children: "---" }, void 0, false, {
                fileName: "app/routes/create.tsx",
                lineNumber: 376,
                columnNumber: 27
              }, this),
              loaderData.techOffered.frameworks.map((x, index) => {
                if (!techSelected.frameworks.includes(x)) {
                  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: x, children: x }, index, false, {
                    fileName: "app/routes/create.tsx",
                    lineNumber: 381,
                    columnNumber: 30
                  }, this);
                }
              })
            ] }, void 0, true, {
              fileName: "app/routes/create.tsx",
              lineNumber: 356,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("hr", {}, void 0, false, {
              fileName: "app/routes/create.tsx",
              lineNumber: 387,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "selectedHolder", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "selected", children: "[Selected]" }, void 0, false, {
                fileName: "app/routes/create.tsx",
                lineNumber: 390,
                columnNumber: 27
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "holder", children: techSelected.frameworks.map((framework) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "inputSelected", onClick: () => {
                const {
                  languages,
                  databases,
                  apis,
                  clouds
                } = techSelected;
                const t = [...techSelected.frameworks];
                t.splice(t.indexOf(framework), 1);
                setTechSelected({
                  languages,
                  databases,
                  apis,
                  frameworks: t,
                  clouds
                });
              }, children: [
                framework,
                "\u2002",
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "/imgs/icons/x.svg", alt: "x", style: {
                  width: "6px"
                } }, void 0, false, {
                  fileName: "app/routes/create.tsx",
                  lineNumber: 411,
                  columnNumber: 33
                }, this)
              ] }, framework, true, {
                fileName: "app/routes/create.tsx",
                lineNumber: 392,
                columnNumber: 71
              }, this)) }, void 0, false, {
                fileName: "app/routes/create.tsx",
                lineNumber: 391,
                columnNumber: 27
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/create.tsx",
              lineNumber: 389,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
              "Select all of the ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", { children: "Cloud Services" }, void 0, false, {
                fileName: "app/routes/create.tsx",
                lineNumber: 420,
                columnNumber: 45
              }, this),
              " used in the creation of your tech stack."
            ] }, void 0, true, {
              fileName: "app/routes/create.tsx",
              lineNumber: 419,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("hr", {}, void 0, false, {
              fileName: "app/routes/create.tsx",
              lineNumber: 423,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { disabled: DISABLEDFORM, name: "cloud", id: "", onChange: (e) => {
              setTechSelected((prev) => {
                const {
                  languages,
                  databases,
                  apis,
                  frameworks,
                  clouds
                } = prev;
                const r = {
                  languages,
                  databases,
                  apis,
                  frameworks,
                  clouds: clouds === null ? [e.target.value] : [...clouds, e.target.value]
                };
                return r;
              });
            }, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "", selected: true, children: "---" }, void 0, false, {
                fileName: "app/routes/create.tsx",
                lineNumber: 444,
                columnNumber: 27
              }, this),
              loaderData.techOffered.clouds.map((x, index) => {
                if (!techSelected.clouds.includes(x)) {
                  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: x, children: x }, index, false, {
                    fileName: "app/routes/create.tsx",
                    lineNumber: 449,
                    columnNumber: 30
                  }, this);
                }
              })
            ] }, void 0, true, {
              fileName: "app/routes/create.tsx",
              lineNumber: 424,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("hr", {}, void 0, false, {
              fileName: "app/routes/create.tsx",
              lineNumber: 455,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "selectedHolder", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "selected", children: "[Selected]" }, void 0, false, {
                fileName: "app/routes/create.tsx",
                lineNumber: 458,
                columnNumber: 27
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "holder", children: techSelected.clouds.map((cloud) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "inputSelected", onClick: () => {
                const {
                  languages,
                  databases,
                  apis,
                  frameworks
                } = techSelected;
                const t = [...techSelected.clouds];
                t.splice(t.indexOf(cloud), 1);
                setTechSelected({
                  languages,
                  databases,
                  apis,
                  frameworks,
                  clouds: t
                });
              }, children: [
                cloud,
                "\u2002",
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "/imgs/icons/x.svg", alt: "x", style: {
                  width: "6px"
                } }, void 0, false, {
                  fileName: "app/routes/create.tsx",
                  lineNumber: 479,
                  columnNumber: 33
                }, this)
              ] }, cloud, true, {
                fileName: "app/routes/create.tsx",
                lineNumber: 460,
                columnNumber: 63
              }, this)) }, void 0, false, {
                fileName: "app/routes/create.tsx",
                lineNumber: 459,
                columnNumber: 27
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/create.tsx",
              lineNumber: 457,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
              "Select up to ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", { children: "4 Images" }, void 0, false, {
                fileName: "app/routes/create.tsx",
                lineNumber: 488,
                columnNumber: 40
              }, this),
              " that represent your tech stack."
            ] }, void 0, true, {
              fileName: "app/routes/create.tsx",
              lineNumber: 487,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("hr", {}, void 0, false, {
              fileName: "app/routes/create.tsx",
              lineNumber: 491,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("hr", {}, void 0, false, {
              fileName: "app/routes/create.tsx",
              lineNumber: 492,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ThumbnailInputs, {}, void 0, false, {
              fileName: "app/routes/create.tsx",
              lineNumber: 493,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "buttonHolder", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Create Stack\u2002" }, void 0, false, {
                fileName: "app/routes/create.tsx",
                lineNumber: 496,
                columnNumber: 27
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "createButton", type: "submit", children: [
                " ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "/imgs/icons/plus.svg", alt: "plus", style: {
                  width: "12px"
                } }, void 0, false, {
                  fileName: "app/routes/create.tsx",
                  lineNumber: 499,
                  columnNumber: 29
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/create.tsx",
                lineNumber: 497,
                columnNumber: 27
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/create.tsx",
              lineNumber: 495,
              columnNumber: 25
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/create.tsx",
            lineNumber: 121,
            columnNumber: 61
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/create.tsx",
          lineNumber: 113,
          columnNumber: 70
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/create.tsx",
        lineNumber: 107,
        columnNumber: 39
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/create.tsx",
      lineNumber: 62,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/create.tsx",
      lineNumber: 57,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/create.tsx",
      lineNumber: 54,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/create.tsx",
    lineNumber: 50,
    columnNumber: 10
  }, this);
}
_s(CreateForm, "C2mmVbWIvtu4mAuHxV8uxmgfU+o=", false, function() {
  return [useLoaderData, useLoaderData];
});
_c = CreateForm;
var meta = () => {
  return [{
    title: "Create a Stack"
  }, {
    name: "description",
    content: "Create a Stack for your profile and showcase all the technology that went into building your app. Connect a GitHub repo and display recent commits, name, website url, and much more."
  }, {
    tagName: "link",
    rel: "canonical",
    href: "https://stackapp.xyz/create"
  }, {
    property: "og:title",
    content: "Create a Stack"
  }, {
    property: "og:url",
    content: "https://stackapp.xyz/create"
  }, {
    property: "og:description",
    content: "Create a Stack for your profile and showcase all the technology that went into building your app."
  }, {
    name: "twitter:card",
    content: "summary"
  }, {
    name: "twitter:title",
    content: "Create a Stack"
  }, {
    name: "twitter:description",
    content: "Create a Stack for your profile and showcase all the technology that went into building your app."
  }];
};
var _c;
$RefreshReg$(_c, "CreateForm");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  CreateForm as default,
  links,
  meta
};
//# sourceMappingURL=/build/routes/create-QOHHP522.js.map
