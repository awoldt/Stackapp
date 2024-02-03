import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  createHotContext
} from "/build/_shared/chunk-J5J5OSJ4.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/styles/create.css
var create_default = "/build/_assets/create-T37CKH7E.css";

// app/utils/functions.client.ts
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/utils/functions.client.ts"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/utils/functions.client.ts"
  );
  import.meta.hot.lastModified = "1706887570904.099";
}
async function CreateStackFormSubmit(e, techSelected, formRef, editStack, stackId) {
  e.preventDefault();
  if (techSelected.languages.length === 0) {
    alert("you must select at least one programming language!");
  } else {
    const formBody = new FormData(formRef.current);
    const thumbnail1 = formBody.get("thumbnail_1");
    if (thumbnail1.size === 0) {
      alert("You must upload at least one thumbnail");
    } else {
      formBody.set("language", techSelected.languages[0]);
      if (techSelected.languages.length > 1) {
        for (let i = 1; i < techSelected.languages.length; i++) {
          formBody.append("language", techSelected.languages[i]);
        }
      }
      if (techSelected.databases[0] !== void 0) {
        formBody.set("database", techSelected.databases[0]);
        if (techSelected.databases.length > 1) {
          for (let i = 1; i < techSelected.databases.length; i++) {
            formBody.append("database", techSelected.databases[i]);
          }
        }
      } else {
        formBody.delete("database");
      }
      if (techSelected.apis[0] !== void 0) {
        formBody.set("api", techSelected.apis[0]);
        if (techSelected.apis.length > 1) {
          for (let i = 1; i < techSelected.apis.length; i++) {
            formBody.append("api", techSelected.apis[i]);
          }
        }
      } else {
        formBody.delete("api");
      }
      if (techSelected.frameworks[0] !== void 0) {
        formBody.set("framework", techSelected.frameworks[0]);
        if (techSelected.frameworks.length > 1) {
          for (let i = 1; i < techSelected.frameworks.length; i++) {
            formBody.append("framework", techSelected.frameworks[i]);
          }
        }
      } else {
        formBody.delete("framework");
      }
      if (techSelected.clouds[0] !== void 0) {
        formBody.set("cloud", techSelected.clouds[0]);
        if (techSelected.clouds.length > 1) {
          for (let i = 1; i < techSelected.clouds.length; i++) {
            formBody.append("cloud", techSelected.clouds[i]);
          }
        }
      } else {
        formBody.delete("cloud");
      }
      if (editStack) {
        const req = await fetch("/api?action=edit_stack&stack_id=" + stackId, {
          method: "post",
          body: formBody,
          headers: {
            Accept: "application/json"
          }
        });
        const res = await req.json();
        console.log(res);
        if (res.status === 200) {
          document.location.assign(`/stack/${stackId}`);
        } else {
          alert("There was an error while editing stack");
        }
      } else {
        const req = await fetch("/api?action=create_stack", {
          method: "post",
          body: formBody,
          headers: {
            Accept: "application/json"
          }
        });
        const res = await req.json();
        if (res.status === 200) {
          document.location.assign(`/stack/${res.stackId}?success=true`);
        } else {
          alert("There was an error while creating new stack");
        }
      }
    }
  }
}
_c = CreateStackFormSubmit;
var _c;
$RefreshReg$(_c, "CreateStackFormSubmit");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/create/ThumbnailInputs.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/create/ThumbnailInputs.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/create/ThumbnailInputs.tsx"
  );
  import.meta.hot.lastModified = "1706886695302.848";
}
function ThumbnailInputs() {
  function DisplayImage(e, elementId, nextImgInput) {
    const fileInput = e.target;
    if (fileInput.files && fileInput.files[0]) {
      if (fileInput.files[0].size > 5e6) {
        alert("File too large");
      } else {
        const reader = new FileReader();
        reader.readAsDataURL(fileInput.files[0]);
        reader.onload = (r) => {
          document.getElementById(elementId)?.setAttribute("src", String(r.target.result));
          if (nextImgInput !== null) {
            document.getElementById(`uploaded_app_icon_input_${nextImgInput}`).disabled = false;
          }
        };
      }
    }
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "imageHolder", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "file-label", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { id: "uploaded_app_icon_1", alt: "", style: {
        width: "50px",
        height: "50px",
        objectFit: "cover"
      } }, void 0, false, {
        fileName: "app/components/create/ThumbnailInputs.tsx",
        lineNumber: 50,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/create/ThumbnailInputs.tsx",
        lineNumber: 49,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Image\u2002" }, void 0, false, {
        fileName: "app/components/create/ThumbnailInputs.tsx",
        lineNumber: 56,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "/imgs/icons/plus.svg", alt: "plus", style: {
        width: "8px"
      } }, void 0, false, {
        fileName: "app/components/create/ThumbnailInputs.tsx",
        lineNumber: 58,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { accept: ".png, .jpeg, .jpg, .webp, .avif, .tiff, .tif", className: "inputFile", type: "file", name: "thumbnail_1", onChange: (e) => {
        DisplayImage(e, "uploaded_app_icon_1", "2");
      } }, void 0, false, {
        fileName: "app/components/create/ThumbnailInputs.tsx",
        lineNumber: 62,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/create/ThumbnailInputs.tsx",
      lineNumber: 48,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "file-label-inactive", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { id: "uploaded_app_icon_2", alt: "", style: {
        width: "50px",
        height: "50px",
        objectFit: "cover"
      } }, void 0, false, {
        fileName: "app/components/create/ThumbnailInputs.tsx",
        lineNumber: 69,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/create/ThumbnailInputs.tsx",
        lineNumber: 68,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Image\u2002" }, void 0, false, {
        fileName: "app/components/create/ThumbnailInputs.tsx",
        lineNumber: 75,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "/imgs/icons/plus.svg", alt: "plus", style: {
        width: "8px"
      } }, void 0, false, {
        fileName: "app/components/create/ThumbnailInputs.tsx",
        lineNumber: 76,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { id: "uploaded_app_icon_2", alt: "", style: {
        width: "5px",
        objectFit: "cover"
      } }, void 0, false, {
        fileName: "app/components/create/ThumbnailInputs.tsx",
        lineNumber: 79,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { accept: ".png, .jpeg, .jpg, .webp, .avif, .tiff, .tif", disabled: true, className: "inputFile", type: "file", id: "uploaded_app_icon_input_2", name: "thumbnail_2", onChange: (e) => {
        DisplayImage(e, "uploaded_app_icon_2", "3");
      } }, void 0, false, {
        fileName: "app/components/create/ThumbnailInputs.tsx",
        lineNumber: 83,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/create/ThumbnailInputs.tsx",
      lineNumber: 67,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "file-label-inactive", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { id: "uploaded_app_icon_3", alt: "", style: {
        width: "50px",
        height: "50px",
        objectFit: "cover"
      } }, void 0, false, {
        fileName: "app/components/create/ThumbnailInputs.tsx",
        lineNumber: 90,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/create/ThumbnailInputs.tsx",
        lineNumber: 89,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Image\u2002" }, void 0, false, {
        fileName: "app/components/create/ThumbnailInputs.tsx",
        lineNumber: 96,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "/imgs/icons/plus.svg", alt: "plus", style: {
        width: "8px"
      } }, void 0, false, {
        fileName: "app/components/create/ThumbnailInputs.tsx",
        lineNumber: 97,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { id: "uploaded_app_icon_3", alt: "", style: {
        width: "5px",
        objectFit: "cover"
      } }, void 0, false, {
        fileName: "app/components/create/ThumbnailInputs.tsx",
        lineNumber: 100,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { accept: ".png, .jpeg, .jpg, .webp, .avif, .tiff, .tif", disabled: true, className: "inputFile", type: "file", id: "uploaded_app_icon_input_3", name: "thumbnail_3", onChange: (e) => {
        DisplayImage(e, "uploaded_app_icon_3", "4");
      } }, void 0, false, {
        fileName: "app/components/create/ThumbnailInputs.tsx",
        lineNumber: 104,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/create/ThumbnailInputs.tsx",
      lineNumber: 88,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "file-label-inactive", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { id: "uploaded_app_icon_4", alt: "", style: {
        width: "50px",
        height: "50px",
        objectFit: "cover"
      } }, void 0, false, {
        fileName: "app/components/create/ThumbnailInputs.tsx",
        lineNumber: 111,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/create/ThumbnailInputs.tsx",
        lineNumber: 110,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Image\u2002" }, void 0, false, {
        fileName: "app/components/create/ThumbnailInputs.tsx",
        lineNumber: 117,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "/imgs/icons/plus.svg", alt: "plus", style: {
        width: "8px"
      } }, void 0, false, {
        fileName: "app/components/create/ThumbnailInputs.tsx",
        lineNumber: 118,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { id: "uploaded_app_icon_4", alt: "", style: {
        width: "5px",
        objectFit: "cover"
      } }, void 0, false, {
        fileName: "app/components/create/ThumbnailInputs.tsx",
        lineNumber: 121,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { accept: ".png, .jpeg, .jpg, .webp, .avif, .tiff, .tif", disabled: true, className: "inputFile", type: "file", id: "uploaded_app_icon_input_4", name: "thumbnail_4", onChange: (e) => {
        DisplayImage(e, "uploaded_app_icon_4", null);
      } }, void 0, false, {
        fileName: "app/components/create/ThumbnailInputs.tsx",
        lineNumber: 125,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/create/ThumbnailInputs.tsx",
      lineNumber: 109,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/create/ThumbnailInputs.tsx",
    lineNumber: 47,
    columnNumber: 10
  }, this);
}
_c2 = ThumbnailInputs;
var _c2;
$RefreshReg$(_c2, "ThumbnailInputs");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  create_default,
  CreateStackFormSubmit,
  ThumbnailInputs
};
//# sourceMappingURL=/build/_shared/chunk-WWXY7D7W.js.map
