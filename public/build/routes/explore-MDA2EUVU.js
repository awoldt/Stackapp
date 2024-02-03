import {
  TechUsedDisplay
} from "/build/_shared/chunk-VXANB2DS.js";
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

// app/styles/explore.css
var explore_default = "/build/_assets/explore-2HIVHWVJ.css";

// app/routes/explore.tsx
var import_functions = __toESM(require_functions(), 1);
var import_node = __toESM(require_node(), 1);

// app/components/explore/Grid.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/explore/Grid.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/explore/Grid.tsx"
  );
  import.meta.hot.lastModified = "1706889402818.229";
}
function ExploreGrid({
  recentStacks
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: recentStacks && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "content", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "cardHolder", children: recentStacks.map((x, index) => {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "card", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "cardContent", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: `/stack/${x.stackData._id}`, style: {
        padding: 0,
        opacity: 1
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: `${x.stackData.thumbnails[0]}`, className: "img-thumbnail", width: "415", height: "265", alt: "profile-img" }, void 0, false, {
        fileName: "app/components/explore/Grid.tsx",
        lineNumber: 35,
        columnNumber: 23
      }, this) }, void 0, false, {
        fileName: "app/components/explore/Grid.tsx",
        lineNumber: 31,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "cardTitleHolder", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "cardTitle", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: `/profile/${x.githubProfileData.public_id}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { className: "cardProfileImage", src: x.githubProfileData.profile_img, width: "25", height: "25", alt: "profile-img" }, void 0, false, {
            fileName: "app/components/explore/Grid.tsx",
            lineNumber: 41,
            columnNumber: 27
          }, this) }, void 0, false, {
            fileName: "app/components/explore/Grid.tsx",
            lineNumber: 40,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "title", children: x.stackData.repo_name }, void 0, false, {
            fileName: "app/components/explore/Grid.tsx",
            lineNumber: 44,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/explore/Grid.tsx",
          lineNumber: 39,
          columnNumber: 23
        }, this),
        x.techUsedDisplay && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TechUsedDisplay, { t: x.techUsedDisplay }, void 0, false, {
          fileName: "app/components/explore/Grid.tsx",
          lineNumber: 47,
          columnNumber: 45
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/explore/Grid.tsx",
        lineNumber: 38,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/explore/Grid.tsx",
      lineNumber: 30,
      columnNumber: 19
    }, this) }, index, false, {
      fileName: "app/components/explore/Grid.tsx",
      lineNumber: 29,
      columnNumber: 18
    }, this);
  }) }, void 0, false, {
    fileName: "app/components/explore/Grid.tsx",
    lineNumber: 27,
    columnNumber: 11
  }, this) }, void 0, false, {
    fileName: "app/components/explore/Grid.tsx",
    lineNumber: 26,
    columnNumber: 24
  }, this) }, void 0, false, {
    fileName: "app/components/explore/Grid.tsx",
    lineNumber: 25,
    columnNumber: 10
  }, this);
}
_c = ExploreGrid;
var _c;
$RefreshReg$(_c, "ExploreGrid");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/explore.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/explore.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/explore.tsx"
  );
}
function links() {
  return [{
    rel: "stylesheet",
    href: explore_default
  }];
}
function Explore() {
  _s();
  const loaderData = useLoaderData();
  console.log(loaderData);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("main", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Nav, { isSignedIn: loaderData.isSignedIn, profileImg: loaderData.profileImg }, void 0, false, {
      fileName: "app/routes/explore.tsx",
      lineNumber: 40,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "container", style: {
      width: "100%"
    }, children: [
      loaderData.recentStacks === null && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "There was an error while getting recently created stacks" }, void 0, false, {
        fileName: "app/routes/explore.tsx",
        lineNumber: 46,
        columnNumber: 48
      }, this),
      loaderData.recentStacks !== null && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
        loaderData.recentStacks.length === 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "There are no Stacks at this time" }, void 0, false, {
          fileName: "app/routes/explore.tsx",
          lineNumber: 49,
          columnNumber: 56
        }, this),
        loaderData.recentStacks.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ExploreGrid, { recentStacks: loaderData.recentStacks }, void 0, false, {
          fileName: "app/routes/explore.tsx",
          lineNumber: 51,
          columnNumber: 54
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/explore.tsx",
        lineNumber: 48,
        columnNumber: 48
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/explore.tsx",
      lineNumber: 43,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/explore.tsx",
    lineNumber: 39,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/explore.tsx",
    lineNumber: 38,
    columnNumber: 10
  }, this);
}
_s(Explore, "ceKF1Gd7W4lGV+M78eBsU+KQIkw=", false, function() {
  return [useLoaderData];
});
_c2 = Explore;
var meta = () => {
  return [{
    title: "Explore Application's Tech Stacks - Stackapp"
  }, {
    name: "description",
    content: "Explore diverse tech stacks. Uncover databases, languages, APIs, frameworks, and construction insights from fellow Stackapp creators."
  }, {
    tagName: "link",
    rel: "canonical",
    href: "https://stackapp.xyz/explore"
  }, {
    property: "og:title",
    content: "Explore Stacks Made by the Community"
  }, {
    property: "og:url",
    content: "https://stackapp.xyz/explore"
  }, {
    property: "og:description",
    content: "Explore diverse tech stacks. Uncover databases, languages, APIs, frameworks, and construction insights from fellow Stackapp creators."
  }, {
    name: "twitter:card",
    content: "summary"
  }, {
    name: "twitter:title",
    content: "Explore Stacks"
  }, {
    name: "twitter:description",
    content: "Explore diverse tech stacks. Uncover databases, languages, APIs, frameworks, and construction insights from fellow Stackapp creators."
  }];
};
var _c2;
$RefreshReg$(_c2, "Explore");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Explore as default,
  links,
  meta
};
//# sourceMappingURL=/build/routes/explore-MDA2EUVU.js.map
