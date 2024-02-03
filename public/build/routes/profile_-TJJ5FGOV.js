import {
  ProfileGrid,
  profile_default
} from "/build/_shared/chunk-6YNW354V.js";
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
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/profile_.tsx
var import_node = __toESM(require_node(), 1);
var import_functions = __toESM(require_functions(), 1);

// app/components/profile/Header.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/profile/Header.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/profile/Header.tsx"
  );
  import.meta.hot.lastModified = "1706989186553.883";
}
function ProfileHeader(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "header", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "profile", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { className: "profileImage", src: props.profileData.profile_img, width: "120", height: "120", alt: "profile-img" }, void 0, false, {
          fileName: "app/components/profile/Header.tsx",
          lineNumber: 25,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "profileTextHolder", children: [
          props.profileData.name && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "title", children: props.profileData.name }, void 0, false, {
            fileName: "app/components/profile/Header.tsx",
            lineNumber: 27,
            columnNumber: 40
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "profileTextUsername", children: [
            "@",
            props.profileData.username
          ] }, void 0, true, {
            fileName: "app/components/profile/Header.tsx",
            lineNumber: 28,
            columnNumber: 13
          }, this),
          props.profileData.bio && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: {
            marginTop: "10px"
          }, children: props.profileData.bio }, void 0, false, {
            fileName: "app/components/profile/Header.tsx",
            lineNumber: 31,
            columnNumber: 39
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/profile/Header.tsx",
          lineNumber: 26,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/profile/Header.tsx",
        lineNumber: 24,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "profileButtonHolder", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "settingsButton", onClick: async () => {
        const userConfirm = window.confirm("Are you sure you want to delete your account?");
        if (userConfirm) {
          const userConfirm2 = window.confirm("This action can not be undone. Are you sure?");
          if (userConfirm2) {
            const req = await fetch(`/api?action=delete_profile`, {
              method: "post"
            });
            const res = await req.json();
            alert(res.message);
            if (res.status == 200) {
              window.location.assign("/");
            }
          }
        }
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "/imgs/icons/trash.svg", alt: "trash icon", width: "10px", style: {
          marginRight: "10px"
        } }, void 0, false, {
          fileName: "app/components/profile/Header.tsx",
          lineNumber: 53,
          columnNumber: 13
        }, this),
        "Delete account"
      ] }, void 0, true, {
        fileName: "app/components/profile/Header.tsx",
        lineNumber: 37,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/profile/Header.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/profile/Header.tsx",
      lineNumber: 23,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "profileButtonHolder", style: {
      borderBottom: "1px solid #171d1c20"
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "buttonHolder", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "subtitle", style: {
        display: "flex",
        alignItems: "center"
      }, onClick: () => {
        props.viewData[1]("your_stacks");
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "/imgs/icons/dot.svg", width: "14px", height: "14px", alt: "three dots icon" }, void 0, false, {
          fileName: "app/components/profile/Header.tsx",
          lineNumber: 70,
          columnNumber: 13
        }, this),
        "YOUR STACKS"
      ] }, void 0, true, {
        fileName: "app/components/profile/Header.tsx",
        lineNumber: 64,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "subtitle", onClick: () => {
        props.viewData[1]("liked_stacks");
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "/imgs/icons/heart.svg", width: "12px", alt: "like icon" }, void 0, false, {
          fileName: "app/components/profile/Header.tsx",
          lineNumber: 77,
          columnNumber: 15
        }, this),
        "\xA0LIKES"
      ] }, void 0, true, {
        fileName: "app/components/profile/Header.tsx",
        lineNumber: 74,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/profile/Header.tsx",
        lineNumber: 73,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/profile/Header.tsx",
      lineNumber: 63,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/profile/Header.tsx",
      lineNumber: 60,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("hr", {}, void 0, false, {
      fileName: "app/components/profile/Header.tsx",
      lineNumber: 83,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/profile/Header.tsx",
    lineNumber: 22,
    columnNumber: 10
  }, this);
}
_c = ProfileHeader;
var _c;
$RefreshReg$(_c, "ProfileHeader");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/profile_.tsx
var import_react2 = __toESM(require_react(), 1);

// app/components/profile/LikedGrid.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/profile/LikedGrid.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/profile/LikedGrid.tsx"
  );
  import.meta.hot.lastModified = "1706989419041.82";
}
function LikedGrid({
  stacks
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
    stacks === null && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "Error while getting your liked stacks" }, void 0, false, {
      fileName: "app/components/profile/LikedGrid.tsx",
      lineNumber: 26,
      columnNumber: 27
    }, this),
    stacks !== null && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
      stacks === "no_liked_stacks" && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "container1", style: {
        display: "flex",
        justifyContent: "center",
        width: "100%"
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "content", style: {
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        alignItems: "center",
        background: "none",
        border: "0px",
        backdropFilter: "none"
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "When you like a Stack, they will appear on your profile." }, void 0, false, {
        fileName: "app/components/profile/LikedGrid.tsx",
        lineNumber: 42,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/components/profile/LikedGrid.tsx",
        lineNumber: 33,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/profile/LikedGrid.tsx",
        lineNumber: 28,
        columnNumber: 44
      }, this),
      Array.isArray(stacks) && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
        stacks.length === 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "container1", style: {
          display: "flex",
          justifyContent: "center",
          width: "100%"
        }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "content", style: {
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          alignItems: "center",
          background: "none",
          border: "0px",
          backdropFilter: "none"
        }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: "/imgs/icons/plus.svg", width: "64px", style: {
            borderRadius: "100px",
            padding: "1rem",
            paddingLeft: "1.1rem",
            paddingRight: "1.1rem",
            border: "1px solid #171d1c40;",
            marginBottom: "1rem"
          }, alt: "plus icon" }, void 0, false, {
            fileName: "app/components/profile/LikedGrid.tsx",
            lineNumber: 62,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { style: {
            lineHeight: 1.4
          }, children: "Create Stack" }, void 0, false, {
            fileName: "app/components/profile/LikedGrid.tsx",
            lineNumber: 70,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "When you create Stacks, they will appear on your profile." }, void 0, false, {
            fileName: "app/components/profile/LikedGrid.tsx",
            lineNumber: 73,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { style: {
            marginTop: "2rem"
          }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "/create", style: {
            color: "blue"
          }, children: "Create your first Stack" }, void 0, false, {
            fileName: "app/components/profile/LikedGrid.tsx",
            lineNumber: 79,
            columnNumber: 23
          }, this) }, void 0, false, {
            fileName: "app/components/profile/LikedGrid.tsx",
            lineNumber: 76,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/profile/LikedGrid.tsx",
          lineNumber: 53,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/components/profile/LikedGrid.tsx",
          lineNumber: 48,
          columnNumber: 39
        }, this),
        stacks.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "cardHolder", children: stacks.map((x, index) => {
          return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "card", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: `/stack/${x.stackData._id}`, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "cardContent", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: `${x.stackData.thumbnails[0]}`, className: "img-thumbnail", width: "415", height: "265", alt: "stack thumbnail", style: {
                marginBottom: "10px"
              } }, void 0, false, {
                fileName: "app/components/profile/LikedGrid.tsx",
                lineNumber: 92,
                columnNumber: 29
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "cardTitleHolder", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "cardTitle", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "title", style: {
                  marginBottom: "25px"
                }, children: x.stackData.repo_name }, void 0, false, {
                  fileName: "app/components/profile/LikedGrid.tsx",
                  lineNumber: 97,
                  columnNumber: 33
                }, this) }, void 0, false, {
                  fileName: "app/components/profile/LikedGrid.tsx",
                  lineNumber: 96,
                  columnNumber: 31
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "cardTitleHolder", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "likeHolder", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: "/imgs/icons/heart.svg", width: "14", alt: "like icon" }, void 0, false, {
                    fileName: "app/components/profile/LikedGrid.tsx",
                    lineNumber: 106,
                    columnNumber: 35
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "likeText", children: [
                    "\xA0",
                    x.stackData.likes
                  ] }, void 0, true, {
                    fileName: "app/components/profile/LikedGrid.tsx",
                    lineNumber: 107,
                    columnNumber: 35
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/components/profile/LikedGrid.tsx",
                  lineNumber: 105,
                  columnNumber: 33
                }, this) }, void 0, false, {
                  fileName: "app/components/profile/LikedGrid.tsx",
                  lineNumber: 104,
                  columnNumber: 31
                }, this)
              ] }, void 0, true, {
                fileName: "app/components/profile/LikedGrid.tsx",
                lineNumber: 95,
                columnNumber: 29
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/profile/LikedGrid.tsx",
              lineNumber: 91,
              columnNumber: 27
            }, this),
            x.techUsedDisplay && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TechUsedDisplay, { t: x.techUsedDisplay }, void 0, false, {
              fileName: "app/components/profile/LikedGrid.tsx",
              lineNumber: 114,
              columnNumber: 49
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/profile/LikedGrid.tsx",
            lineNumber: 90,
            columnNumber: 25
          }, this) }, index, false, {
            fileName: "app/components/profile/LikedGrid.tsx",
            lineNumber: 89,
            columnNumber: 20
          }, this);
        }) }, void 0, false, {
          fileName: "app/components/profile/LikedGrid.tsx",
          lineNumber: 87,
          columnNumber: 37
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/profile/LikedGrid.tsx",
        lineNumber: 47,
        columnNumber: 37
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/profile/LikedGrid.tsx",
      lineNumber: 27,
      columnNumber: 27
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/profile/LikedGrid.tsx",
    lineNumber: 25,
    columnNumber: 10
  }, this);
}
_c2 = LikedGrid;
var _c2;
$RefreshReg$(_c2, "LikedGrid");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/profile_.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/profile_.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/profile_.tsx"
  );
}
function links() {
  return [{
    rel: "stylesheet",
    href: profile_default
  }];
}
function ProfilePage() {
  _s();
  const loaderData = useLoaderData();
  const [view, setView] = (0, import_react2.useState)("your_stacks");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("main", { children: [
    loaderData.profileData === null && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: "There was an error while fetching profile data" }, void 0, false, {
      fileName: "app/routes/profile_.tsx",
      lineNumber: 43,
      columnNumber: 45
    }, this),
    loaderData.profileData !== null && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav, { isSignedIn: true, profileImg: loaderData.profileData.profile_img }, void 0, false, {
        fileName: "app/routes/profile_.tsx",
        lineNumber: 46,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "container", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ProfileHeader, { profileData: loaderData.profileData, viewData: [view, setView] }, void 0, false, {
          fileName: "app/routes/profile_.tsx",
          lineNumber: 50,
          columnNumber: 15
        }, this),
        view === "your_stacks" && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: [
          loaderData.userStacks === null && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: "There was an error while fetching your stacks" }, void 0, false, {
            fileName: "app/routes/profile_.tsx",
            lineNumber: 54,
            columnNumber: 54
          }, this),
          loaderData.userStacks !== null && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ProfileGrid, { stacks: loaderData.userStacks }, void 0, false, {
            fileName: "app/routes/profile_.tsx",
            lineNumber: 57,
            columnNumber: 23
          }, this) }, void 0, false, {
            fileName: "app/routes/profile_.tsx",
            lineNumber: 56,
            columnNumber: 54
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/profile_.tsx",
          lineNumber: 53,
          columnNumber: 42
        }, this),
        view === "liked_stacks" && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(LikedGrid, { stacks: loaderData.userLikedStacks }, void 0, false, {
          fileName: "app/routes/profile_.tsx",
          lineNumber: 63,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/profile_.tsx",
          lineNumber: 62,
          columnNumber: 43
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/profile_.tsx",
        lineNumber: 49,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/profile_.tsx",
      lineNumber: 45,
      columnNumber: 45
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/profile_.tsx",
    lineNumber: 42,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/profile_.tsx",
    lineNumber: 41,
    columnNumber: 10
  }, this);
}
_s(ProfilePage, "t1tR1syxDpT39iY+4OCqm9AjhKE=", false, function() {
  return [useLoaderData];
});
_c3 = ProfilePage;
var meta = () => {
  return [{
    title: "Profile"
  }, {
    name: "robots",
    content: "noindex"
  }];
};
var _c3;
$RefreshReg$(_c3, "ProfilePage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ProfilePage as default,
  links,
  meta
};
//# sourceMappingURL=/build/routes/profile_-TJJ5FGOV.js.map
