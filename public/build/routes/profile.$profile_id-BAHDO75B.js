import {
  ProfileGrid,
  profile_default
} from "/build/_shared/chunk-6YNW354V.js";
import "/build/_shared/chunk-VXANB2DS.js";
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
import "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/profile.$profile_id.tsx
var import_node = __toESM(require_node(), 1);
var import_functions = __toESM(require_functions(), 1);

// app/components/profile/PublicHeader.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/profile/PublicHeader.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/profile/PublicHeader.tsx"
  );
  import.meta.hot.lastModified = "1706877562640.118";
}
function ProfileHeader({
  profileData
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "header", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "profile", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { className: "profileImage", src: profileData.profile_img, width: "120", height: "120", alt: "profile-img" }, void 0, false, {
        fileName: "app/components/profile/PublicHeader.tsx",
        lineNumber: 27,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "profileTextHolder", children: [
        profileData.name && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "title", children: profileData.name }, void 0, false, {
          fileName: "app/components/profile/PublicHeader.tsx",
          lineNumber: 29,
          columnNumber: 34
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "profileTextUsername", children: [
          "@",
          profileData.username
        ] }, void 0, true, {
          fileName: "app/components/profile/PublicHeader.tsx",
          lineNumber: 30,
          columnNumber: 13
        }, this),
        profileData.bio && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: profileData.bio }, void 0, false, {
          fileName: "app/components/profile/PublicHeader.tsx",
          lineNumber: 31,
          columnNumber: 33
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/profile/PublicHeader.tsx",
        lineNumber: 28,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/profile/PublicHeader.tsx",
      lineNumber: 26,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/profile/PublicHeader.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("hr", { style: {
      color: "lightgrey",
      border: "1px solid",
      marginTop: "10px"
    } }, void 0, false, {
      fileName: "app/components/profile/PublicHeader.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/profile/PublicHeader.tsx",
    lineNumber: 24,
    columnNumber: 10
  }, this);
}
_c = ProfileHeader;
var _c;
$RefreshReg$(_c, "ProfileHeader");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/profile.$profile_id.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/profile.$profile_id.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/profile.$profile_id.tsx"
  );
}
function links() {
  return [{
    rel: "stylesheet",
    href: profile_default
  }];
}
function PublicProfilePage() {
  _s();
  const loaderData = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("main", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Nav, { isSignedIn: true, profileImg: loaderData.profileImg }, void 0, false, {
      fileName: "app/routes/profile.$profile_id.tsx",
      lineNumber: 40,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "container", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ProfileHeader, { profileData: loaderData.profileData }, void 0, false, {
        fileName: "app/routes/profile.$profile_id.tsx",
        lineNumber: 42,
        columnNumber: 11
      }, this),
      loaderData.stacks && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
        loaderData.stacks.length === 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "User has not created any stacks yet" }, void 0, false, {
          fileName: "app/routes/profile.$profile_id.tsx",
          lineNumber: 44,
          columnNumber: 50
        }, this),
        loaderData.stacks.length === 1 && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "1 Stack created" }, void 0, false, {
          fileName: "app/routes/profile.$profile_id.tsx",
          lineNumber: 46,
          columnNumber: 50
        }, this),
        loaderData.stacks.length > 1 && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: [
          loaderData.stacks.length,
          " Stacks created"
        ] }, void 0, true, {
          fileName: "app/routes/profile.$profile_id.tsx",
          lineNumber: 47,
          columnNumber: 48
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/profile.$profile_id.tsx",
        lineNumber: 43,
        columnNumber: 33
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ProfileGrid, { stacks: loaderData.stacks }, void 0, false, {
        fileName: "app/routes/profile.$profile_id.tsx",
        lineNumber: 52,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/profile.$profile_id.tsx",
      lineNumber: 41,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/profile.$profile_id.tsx",
    lineNumber: 39,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/profile.$profile_id.tsx",
    lineNumber: 38,
    columnNumber: 10
  }, this);
}
_s(PublicProfilePage, "ceKF1Gd7W4lGV+M78eBsU+KQIkw=", false, function() {
  return [useLoaderData];
});
_c2 = PublicProfilePage;
function ErrorBoundary() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("title", { children: "Oh no!" }, void 0, false, {
        fileName: "app/routes/profile.$profile_id.tsx",
        lineNumber: 92,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/routes/profile.$profile_id.tsx",
        lineNumber: 93,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/routes/profile.$profile_id.tsx",
        lineNumber: 94,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/profile.$profile_id.tsx",
      lineNumber: 91,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { style: {
      padding: "100px 0px 0px 25px"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { children: "Profile does not exist" }, void 0, false, {
        fileName: "app/routes/profile.$profile_id.tsx",
        lineNumber: 99,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "/", children: "Return to homepage" }, void 0, false, {
        fileName: "app/routes/profile.$profile_id.tsx",
        lineNumber: 100,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/profile.$profile_id.tsx",
      lineNumber: 96,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/profile.$profile_id.tsx",
    lineNumber: 90,
    columnNumber: 10
  }, this);
}
_c22 = ErrorBoundary;
var meta = ({
  data
}) => {
  if (data) {
    return [{
      title: `@${data.profileData.username} | Stackapp`
    }, {
      name: "description",
      content: `Explore ${data.profileData.name ?? `@${data.profileData.username}`} application's tech stacks including programming languages, databases, apis, frameworks, and more.`
    }, {
      tagName: "link",
      rel: "canonical",
      href: `https://stackapp.xyz/profile/${data.profileData.public_id}`
    }, {
      property: "og:title",
      content: `Explore ${data.profileData.name ?? `@${data.profileData.username}`} application's tech stacks`
    }, {
      property: "og:url",
      content: `https://stackapp.xyz/profile/${data.profileData.public_id}`
    }, {
      property: "og:description",
      content: `Explore @${data.profileData.username}'s tech stacks`
    }, {
      name: "twitter:card",
      content: "summary"
    }, {
      name: "twitter:title",
      content: `Explore ${data.profileData.name ?? `@${data.profileData.username}`} application's tech stacks`
    }, {
      name: "twitter:description",
      content: `Explore @${data.profileData.username}'s tech stacks`
    }];
  }
  return [{
    title: "Profile"
  }];
};
var _c2;
var _c22;
$RefreshReg$(_c2, "PublicProfilePage");
$RefreshReg$(_c22, "ErrorBoundary");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ErrorBoundary,
  PublicProfilePage as default,
  links,
  meta
};
//# sourceMappingURL=/build/routes/profile.$profile_id-BAHDO75B.js.map
