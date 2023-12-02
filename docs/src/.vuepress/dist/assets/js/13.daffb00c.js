(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{302:function(s,t,a){"use strict";a.r(t);var r=a(17),e=Object(r.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"all-stories-in-a-nx-workspace"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#all-stories-in-a-nx-workspace"}},[s._v("#")]),s._v(" All stories in a nx workspace")]),s._v(" "),t("h2",{attrs:{id:"_1-generate-a-wrapper-library"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-generate-a-wrapper-library"}},[s._v("#")]),s._v(" 1 Generate a wrapper library")]),s._v(" "),t("p",[s._v("This library has the lone responsbility of settilng up a storybook that includes all the stories in your workspace")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("nx generate @nrwl/angular:storybook-configuration "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--name")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("all-stories\n")])])]),t("h2",{attrs:{id:"_2-modify-main-js"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-modify-main-js"}},[s._v("#")]),s._v(" 2 Modify main.js")]),s._v(" "),t("p",[s._v("We want "),t("code",[s._v("main.js")]),s._v(" to include stories for the whole solution. So we change the "),t("code",[s._v("stories")]),s._v("-value to")]),s._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ./libs/all-stories/.storybook/main.js")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" allStories "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'../../**/*.stories.ts'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nmodule"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("stories")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" allStories\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("h2",{attrs:{id:"_3-modify-your-typescript-config"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-modify-your-typescript-config"}},[s._v("#")]),s._v(" 3 Modify your typescript config")]),s._v(" "),t("p",[s._v("We want to include files from the root of the workspace so we modify the "),t("code",[s._v('"include"')]),s._v("-array in "),t("code",[s._v("tsconfig.json")])]),s._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ./libs/all-stories/.storybook/tsconfig.json")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  ...\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"include"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"../../../**/*.ts"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*.js"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  ...\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("h2",{attrs:{id:"_4-thats-it-🎉"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-thats-it-🎉"}},[s._v("#")]),s._v(" 4 Thats it! 🎉")]),s._v(" "),t("p",[s._v("Run this and your good to go")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("nx storybook all-stories\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);