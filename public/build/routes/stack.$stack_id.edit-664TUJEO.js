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

// app/routes/stack.$stack_id.edit.tsx
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
    window.$RefreshRuntime$.register(type, '"app/routes/stack.$stack_id.edit.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/stack.$stack_id.edit.tsx"
  );
}
function links() {
  return [{
    rel: "stylesheet",
    href: create_default
  }];
}
function EditStack() {
  _s();
  const loaderData = useLoaderData();
  const [techSelected, setTechSelected] = (0, import_react.useState)({
    languages: [],
    databases: [],
    apis: [],
    frameworks: [],
    clouds: []
  });
  const formRef = (0, import_react.useRef)(null);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav, { isSignedIn: true, profileImg: loaderData.navBarImg }, void 0, false, {
      fileName: "app/routes/stack.$stack_id.edit.tsx",
      lineNumber: 48,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { style: {
      alignItems: "center"
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container", style: {
      width: "25%",
      minWidth: "fit-content"
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "content", children: [
      loaderData.repoOptions === null || loaderData.techOffered === null && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "There was an error while loading edit stack page. Try again later." }, void 0, false, {
        fileName: "app/routes/stack.$stack_id.edit.tsx",
        lineNumber: 59,
        columnNumber: 84
      }, this),
      loaderData.repoOptions && loaderData.techOffered && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
          "You currently have ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", { children: loaderData.currentRepoName }, void 0, false, {
            fileName: "app/routes/stack.$stack_id.edit.tsx",
            lineNumber: 66,
            columnNumber: 38
          }, this),
          " ",
          "selected as your connected repository"
        ] }, void 0, true, {
          fileName: "app/routes/stack.$stack_id.edit.tsx",
          lineNumber: 65,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
          marginTop: "50px"
        }, children: [
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { encType: "multipart/form-data", method: "post", ref: formRef, onSubmit: (e) => {
            CreateStackFormSubmit(e, techSelected, formRef, true, loaderData.stackId);
          }, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
              "Select all of the ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", { children: "Languages" }, void 0, false, {
                fileName: "app/routes/stack.$stack_id.edit.tsx",
                lineNumber: 78,
                columnNumber: 41
              }, this),
              " used in the creation of your tech stack."
            ] }, void 0, true, {
              fileName: "app/routes/stack.$stack_id.edit.tsx",
              lineNumber: 77,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "required", children: "\u2003[Required]" }, void 0, false, {
              fileName: "app/routes/stack.$stack_id.edit.tsx",
              lineNumber: 81,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("hr", {}, void 0, false, {
              fileName: "app/routes/stack.$stack_id.edit.tsx",
              lineNumber: 82,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { name: "language", id: "", onChange: (e) => {
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
                fileName: "app/routes/stack.$stack_id.edit.tsx",
                lineNumber: 103,
                columnNumber: 23
              }, this),
              loaderData.techOffered.languages.map((x, index) => {
                if (!techSelected.languages.includes(x)) {
                  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: x, children: x }, index, false, {
                    fileName: "app/routes/stack.$stack_id.edit.tsx",
                    lineNumber: 108,
                    columnNumber: 30
                  }, this);
                }
              })
            ] }, void 0, true, {
              fileName: "app/routes/stack.$stack_id.edit.tsx",
              lineNumber: 83,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("hr", {}, void 0, false, {
              fileName: "app/routes/stack.$stack_id.edit.tsx",
              lineNumber: 114,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "selectedHolder", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "selected", children: "[Selected]" }, void 0, false, {
                fileName: "app/routes/stack.$stack_id.edit.tsx",
                lineNumber: 117,
                columnNumber: 23
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
                  fileName: "app/routes/stack.$stack_id.edit.tsx",
                  lineNumber: 138,
                  columnNumber: 29
                }, this)
              ] }, language, true, {
                fileName: "app/routes/stack.$stack_id.edit.tsx",
                lineNumber: 119,
                columnNumber: 65
              }, this)) }, void 0, false, {
                fileName: "app/routes/stack.$stack_id.edit.tsx",
                lineNumber: 118,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/stack.$stack_id.edit.tsx",
              lineNumber: 116,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
              "Select all of the ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", { children: "Databases" }, void 0, false, {
                fileName: "app/routes/stack.$stack_id.edit.tsx",
                lineNumber: 147,
                columnNumber: 41
              }, this),
              " used in the creation of your tech stack."
            ] }, void 0, true, {
              fileName: "app/routes/stack.$stack_id.edit.tsx",
              lineNumber: 146,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("hr", {}, void 0, false, {
              fileName: "app/routes/stack.$stack_id.edit.tsx",
              lineNumber: 150,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { name: "database", id: "", onChange: (e) => setTechSelected((prev) => {
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
                fileName: "app/routes/stack.$stack_id.edit.tsx",
                lineNumber: 170,
                columnNumber: 23
              }, this),
              loaderData.techOffered.databases.map((x, index) => {
                if (!techSelected.databases.includes(x)) {
                  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: x, children: x }, index, false, {
                    fileName: "app/routes/stack.$stack_id.edit.tsx",
                    lineNumber: 175,
                    columnNumber: 30
                  }, this);
                }
              })
            ] }, void 0, true, {
              fileName: "app/routes/stack.$stack_id.edit.tsx",
              lineNumber: 151,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("hr", {}, void 0, false, {
              fileName: "app/routes/stack.$stack_id.edit.tsx",
              lineNumber: 181,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "selectedHolder", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "selected", children: "[Selected]" }, void 0, false, {
                fileName: "app/routes/stack.$stack_id.edit.tsx",
                lineNumber: 184,
                columnNumber: 23
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
                  fileName: "app/routes/stack.$stack_id.edit.tsx",
                  lineNumber: 205,
                  columnNumber: 29
                }, this)
              ] }, database, true, {
                fileName: "app/routes/stack.$stack_id.edit.tsx",
                lineNumber: 186,
                columnNumber: 65
              }, this)) }, void 0, false, {
                fileName: "app/routes/stack.$stack_id.edit.tsx",
                lineNumber: 185,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/stack.$stack_id.edit.tsx",
              lineNumber: 183,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
              "Select all of the ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", { children: "APIs" }, void 0, false, {
                fileName: "app/routes/stack.$stack_id.edit.tsx",
                lineNumber: 214,
                columnNumber: 41
              }, this),
              " used in the creation of your tech stack."
            ] }, void 0, true, {
              fileName: "app/routes/stack.$stack_id.edit.tsx",
              lineNumber: 213,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("hr", {}, void 0, false, {
              fileName: "app/routes/stack.$stack_id.edit.tsx",
              lineNumber: 217,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { name: "api", id: "", onChange: (e) => {
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
                fileName: "app/routes/stack.$stack_id.edit.tsx",
                lineNumber: 238,
                columnNumber: 23
              }, this),
              loaderData.techOffered.apis.map((x, index) => {
                if (!techSelected.apis.includes(x)) {
                  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: x, children: x }, index, false, {
                    fileName: "app/routes/stack.$stack_id.edit.tsx",
                    lineNumber: 243,
                    columnNumber: 30
                  }, this);
                }
              })
            ] }, void 0, true, {
              fileName: "app/routes/stack.$stack_id.edit.tsx",
              lineNumber: 218,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("hr", {}, void 0, false, {
              fileName: "app/routes/stack.$stack_id.edit.tsx",
              lineNumber: 249,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "selectedHolder", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "selected", children: "[Selected]" }, void 0, false, {
                fileName: "app/routes/stack.$stack_id.edit.tsx",
                lineNumber: 252,
                columnNumber: 23
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
                  fileName: "app/routes/stack.$stack_id.edit.tsx",
                  lineNumber: 273,
                  columnNumber: 29
                }, this)
              ] }, API, true, {
                fileName: "app/routes/stack.$stack_id.edit.tsx",
                lineNumber: 254,
                columnNumber: 55
              }, this)) }, void 0, false, {
                fileName: "app/routes/stack.$stack_id.edit.tsx",
                lineNumber: 253,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/stack.$stack_id.edit.tsx",
              lineNumber: 251,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
              "Select all of the ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", { children: "Frameworks" }, void 0, false, {
                fileName: "app/routes/stack.$stack_id.edit.tsx",
                lineNumber: 282,
                columnNumber: 41
              }, this),
              " used in the creation of your tech stack."
            ] }, void 0, true, {
              fileName: "app/routes/stack.$stack_id.edit.tsx",
              lineNumber: 281,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("hr", {}, void 0, false, {
              fileName: "app/routes/stack.$stack_id.edit.tsx",
              lineNumber: 285,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { name: "framework", id: "", onChange: (e) => {
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
                fileName: "app/routes/stack.$stack_id.edit.tsx",
                lineNumber: 306,
                columnNumber: 23
              }, this),
              loaderData.techOffered.frameworks.map((x, index) => {
                if (!techSelected.frameworks.includes(x)) {
                  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: x, children: x }, index, false, {
                    fileName: "app/routes/stack.$stack_id.edit.tsx",
                    lineNumber: 311,
                    columnNumber: 30
                  }, this);
                }
              })
            ] }, void 0, true, {
              fileName: "app/routes/stack.$stack_id.edit.tsx",
              lineNumber: 286,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("hr", {}, void 0, false, {
              fileName: "app/routes/stack.$stack_id.edit.tsx",
              lineNumber: 317,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "selectedHolder", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "selected", children: "[Selected]" }, void 0, false, {
                fileName: "app/routes/stack.$stack_id.edit.tsx",
                lineNumber: 320,
                columnNumber: 23
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
                  fileName: "app/routes/stack.$stack_id.edit.tsx",
                  lineNumber: 341,
                  columnNumber: 29
                }, this)
              ] }, framework, true, {
                fileName: "app/routes/stack.$stack_id.edit.tsx",
                lineNumber: 322,
                columnNumber: 67
              }, this)) }, void 0, false, {
                fileName: "app/routes/stack.$stack_id.edit.tsx",
                lineNumber: 321,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/stack.$stack_id.edit.tsx",
              lineNumber: 319,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
              "Select all of the ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", { children: "Cloud Services" }, void 0, false, {
                fileName: "app/routes/stack.$stack_id.edit.tsx",
                lineNumber: 350,
                columnNumber: 41
              }, this),
              " used in the creation of your tech stack."
            ] }, void 0, true, {
              fileName: "app/routes/stack.$stack_id.edit.tsx",
              lineNumber: 349,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("hr", {}, void 0, false, {
              fileName: "app/routes/stack.$stack_id.edit.tsx",
              lineNumber: 353,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { name: "cloud", id: "", onChange: (e) => {
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
                fileName: "app/routes/stack.$stack_id.edit.tsx",
                lineNumber: 374,
                columnNumber: 23
              }, this),
              loaderData.techOffered.clouds.map((x, index) => {
                if (!techSelected.clouds.includes(x)) {
                  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: x, children: x }, index, false, {
                    fileName: "app/routes/stack.$stack_id.edit.tsx",
                    lineNumber: 379,
                    columnNumber: 30
                  }, this);
                }
              })
            ] }, void 0, true, {
              fileName: "app/routes/stack.$stack_id.edit.tsx",
              lineNumber: 354,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("hr", {}, void 0, false, {
              fileName: "app/routes/stack.$stack_id.edit.tsx",
              lineNumber: 385,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "selectedHolder", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "selected", children: "[Selected]" }, void 0, false, {
                fileName: "app/routes/stack.$stack_id.edit.tsx",
                lineNumber: 388,
                columnNumber: 23
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
                  fileName: "app/routes/stack.$stack_id.edit.tsx",
                  lineNumber: 409,
                  columnNumber: 29
                }, this)
              ] }, cloud, true, {
                fileName: "app/routes/stack.$stack_id.edit.tsx",
                lineNumber: 390,
                columnNumber: 59
              }, this)) }, void 0, false, {
                fileName: "app/routes/stack.$stack_id.edit.tsx",
                lineNumber: 389,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/stack.$stack_id.edit.tsx",
              lineNumber: 387,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
              "Select up to ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", { children: "4 Images" }, void 0, false, {
                fileName: "app/routes/stack.$stack_id.edit.tsx",
                lineNumber: 418,
                columnNumber: 36
              }, this),
              " that represent your tech stack."
            ] }, void 0, true, {
              fileName: "app/routes/stack.$stack_id.edit.tsx",
              lineNumber: 417,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("hr", {}, void 0, false, {
              fileName: "app/routes/stack.$stack_id.edit.tsx",
              lineNumber: 421,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("hr", {}, void 0, false, {
              fileName: "app/routes/stack.$stack_id.edit.tsx",
              lineNumber: 422,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ThumbnailInputs, {}, void 0, false, {
              fileName: "app/routes/stack.$stack_id.edit.tsx",
              lineNumber: 423,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "buttonHolder", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Create Stack\u2002" }, void 0, false, {
                fileName: "app/routes/stack.$stack_id.edit.tsx",
                lineNumber: 426,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "createButton", type: "submit", children: [
                " ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "/imgs/icons/plus.svg", alt: "plus", style: {
                  width: "12px"
                } }, void 0, false, {
                  fileName: "app/routes/stack.$stack_id.edit.tsx",
                  lineNumber: 429,
                  columnNumber: 25
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/stack.$stack_id.edit.tsx",
                lineNumber: 427,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/stack.$stack_id.edit.tsx",
              lineNumber: 425,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/stack.$stack_id.edit.tsx",
            lineNumber: 73,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/stack.$stack_id.edit.tsx",
          lineNumber: 69,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/stack.$stack_id.edit.tsx",
        lineNumber: 64,
        columnNumber: 66
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/stack.$stack_id.edit.tsx",
      lineNumber: 58,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/stack.$stack_id.edit.tsx",
      lineNumber: 53,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/stack.$stack_id.edit.tsx",
      lineNumber: 50,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/stack.$stack_id.edit.tsx",
    lineNumber: 47,
    columnNumber: 10
  }, this);
}
_s(EditStack, "Hhdu6W8xnBuzGjFR4eznWIJmq5o=", false, function() {
  return [useLoaderData];
});
_c = EditStack;
var meta = () => {
  return [{
    title: "Profile"
  }, {
    name: "robots",
    content: "noindex"
  }];
};
function ErrorBoundary() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("title", { children: "Oh no!" }, void 0, false, {
        fileName: "app/routes/stack.$stack_id.edit.tsx",
        lineNumber: 511,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/routes/stack.$stack_id.edit.tsx",
        lineNumber: 512,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/routes/stack.$stack_id.edit.tsx",
        lineNumber: 513,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/stack.$stack_id.edit.tsx",
      lineNumber: 510,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", { style: {
      padding: "100px 0px 0px 25px"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav, { isSignedIn: false, profileImg: null }, void 0, false, {
        fileName: "app/routes/stack.$stack_id.edit.tsx",
        lineNumber: 518,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "There was an error while loading edit page for stack :(" }, void 0, false, {
        fileName: "app/routes/stack.$stack_id.edit.tsx",
        lineNumber: 519,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/stack.$stack_id.edit.tsx",
      lineNumber: 515,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/stack.$stack_id.edit.tsx",
    lineNumber: 509,
    columnNumber: 10
  }, this);
}
_c2 = ErrorBoundary;
var _c;
var _c2;
$RefreshReg$(_c, "EditStack");
$RefreshReg$(_c2, "ErrorBoundary");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ErrorBoundary,
  EditStack as default,
  links,
  meta
};
//# sourceMappingURL=/build/routes/stack.$stack_id.edit-664TUJEO.js.map
