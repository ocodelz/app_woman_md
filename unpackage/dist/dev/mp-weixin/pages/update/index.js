(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/update/index"],{

/***/ 249:
/*!*****************************************************************************!*\
  !*** E:/SK.PwGuard.App/app_woman/main.js?{"page":"pages%2Fupdate%2Findex"} ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);__webpack_require__(/*! @dcloudio/uni-stat */ 5);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _index = _interopRequireDefault(__webpack_require__(/*! ./pages/update/index.vue */ 250));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_index.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 250:
/*!**********************************************************!*\
  !*** E:/SK.PwGuard.App/app_woman/pages/update/index.vue ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_0e7ddb05_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=0e7ddb05&scoped=true& */ 251);
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ 253);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _index_vue_vue_type_style_index_0_id_0e7ddb05_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=0e7ddb05&scoped=true&lang=css& */ 255);
/* harmony import */ var _D_InstallCatalog_HBuilderX_HBuilderX_3_1_18_20210609_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 17);

var renderjs





/* normalize component */

var component = Object(_D_InstallCatalog_HBuilderX_HBuilderX_3_1_18_20210609_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_0e7ddb05_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_0e7ddb05_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0e7ddb05",
  null,
  false,
  _index_vue_vue_type_template_id_0e7ddb05_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/update/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 251:
/*!*****************************************************************************************************!*\
  !*** E:/SK.PwGuard.App/app_woman/pages/update/index.vue?vue&type=template&id=0e7ddb05&scoped=true& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_InstallCatalog_HBuilderX_HBuilderX_3_1_18_20210609_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_InstallCatalog_HBuilderX_HBuilderX_3_1_18_20210609_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_InstallCatalog_HBuilderX_HBuilderX_3_1_18_20210609_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_InstallCatalog_HBuilderX_HBuilderX_3_1_18_20210609_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_InstallCatalog_HBuilderX_HBuilderX_3_1_18_20210609_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_InstallCatalog_HBuilderX_HBuilderX_3_1_18_20210609_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_template_id_0e7ddb05_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./index.vue?vue&type=template&id=0e7ddb05&scoped=true& */ 252);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_InstallCatalog_HBuilderX_HBuilderX_3_1_18_20210609_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_InstallCatalog_HBuilderX_HBuilderX_3_1_18_20210609_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_InstallCatalog_HBuilderX_HBuilderX_3_1_18_20210609_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_InstallCatalog_HBuilderX_HBuilderX_3_1_18_20210609_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_InstallCatalog_HBuilderX_HBuilderX_3_1_18_20210609_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_InstallCatalog_HBuilderX_HBuilderX_3_1_18_20210609_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_template_id_0e7ddb05_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_InstallCatalog_HBuilderX_HBuilderX_3_1_18_20210609_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_InstallCatalog_HBuilderX_HBuilderX_3_1_18_20210609_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_InstallCatalog_HBuilderX_HBuilderX_3_1_18_20210609_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_InstallCatalog_HBuilderX_HBuilderX_3_1_18_20210609_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_InstallCatalog_HBuilderX_HBuilderX_3_1_18_20210609_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_InstallCatalog_HBuilderX_HBuilderX_3_1_18_20210609_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_template_id_0e7ddb05_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_InstallCatalog_HBuilderX_HBuilderX_3_1_18_20210609_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_InstallCatalog_HBuilderX_HBuilderX_3_1_18_20210609_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_InstallCatalog_HBuilderX_HBuilderX_3_1_18_20210609_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_InstallCatalog_HBuilderX_HBuilderX_3_1_18_20210609_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_InstallCatalog_HBuilderX_HBuilderX_3_1_18_20210609_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_InstallCatalog_HBuilderX_HBuilderX_3_1_18_20210609_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_template_id_0e7ddb05_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_InstallCatalog_HBuilderX_HBuilderX_3_1_18_20210609_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_InstallCatalog_HBuilderX_HBuilderX_3_1_18_20210609_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_InstallCatalog_HBuilderX_HBuilderX_3_1_18_20210609_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_InstallCatalog_HBuilderX_HBuilderX_3_1_18_20210609_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_InstallCatalog_HBuilderX_HBuilderX_3_1_18_20210609_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_InstallCatalog_HBuilderX_HBuilderX_3_1_18_20210609_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_template_id_0e7ddb05_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 252:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/SK.PwGuard.App/app_woman/pages/update/index.vue?vue&type=template&id=0e7ddb05&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 253:
/*!***********************************************************************************!*\
  !*** E:/SK.PwGuard.App/app_woman/pages/update/index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_InstallCatalog_HBuilderX_HBuilderX_3_1_18_20210609_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_InstallCatalog_HBuilderX_HBuilderX_3_1_18_20210609_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_InstallCatalog_HBuilderX_HBuilderX_3_1_18_20210609_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_InstallCatalog_HBuilderX_HBuilderX_3_1_18_20210609_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_InstallCatalog_HBuilderX_HBuilderX_3_1_18_20210609_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./index.vue?vue&type=script&lang=js& */ 254);
/* harmony import */ var _D_InstallCatalog_HBuilderX_HBuilderX_3_1_18_20210609_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_InstallCatalog_HBuilderX_HBuilderX_3_1_18_20210609_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_InstallCatalog_HBuilderX_HBuilderX_3_1_18_20210609_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_InstallCatalog_HBuilderX_HBuilderX_3_1_18_20210609_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_InstallCatalog_HBuilderX_HBuilderX_3_1_18_20210609_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_InstallCatalog_HBuilderX_HBuilderX_3_1_18_20210609_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_InstallCatalog_HBuilderX_HBuilderX_3_1_18_20210609_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_InstallCatalog_HBuilderX_HBuilderX_3_1_18_20210609_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_InstallCatalog_HBuilderX_HBuilderX_3_1_18_20210609_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_InstallCatalog_HBuilderX_HBuilderX_3_1_18_20210609_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_InstallCatalog_HBuilderX_HBuilderX_3_1_18_20210609_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_InstallCatalog_HBuilderX_HBuilderX_3_1_18_20210609_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_InstallCatalog_HBuilderX_HBuilderX_3_1_18_20210609_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_InstallCatalog_HBuilderX_HBuilderX_3_1_18_20210609_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_InstallCatalog_HBuilderX_HBuilderX_3_1_18_20210609_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_InstallCatalog_HBuilderX_HBuilderX_3_1_18_20210609_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_InstallCatalog_HBuilderX_HBuilderX_3_1_18_20210609_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_InstallCatalog_HBuilderX_HBuilderX_3_1_18_20210609_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_InstallCatalog_HBuilderX_HBuilderX_3_1_18_20210609_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_InstallCatalog_HBuilderX_HBuilderX_3_1_18_20210609_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_InstallCatalog_HBuilderX_HBuilderX_3_1_18_20210609_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_InstallCatalog_HBuilderX_HBuilderX_3_1_18_20210609_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_InstallCatalog_HBuilderX_HBuilderX_3_1_18_20210609_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_InstallCatalog_HBuilderX_HBuilderX_3_1_18_20210609_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_InstallCatalog_HBuilderX_HBuilderX_3_1_18_20210609_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 254:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/SK.PwGuard.App/app_woman/pages/update/index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

































































var _ServerInfo = __webpack_require__(/*! @/service/ServerInfo.js */ 13); //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var updaterServerAddress = _ServerInfo.updateUrl + '/versioninfopwguard.txt';var _default = { components: {}, data: function data() {return { bGotoAppStore: false, bShowAppStoreUptCont: false, appStoreVersion: '', appStoreReleasedate: '', appStoreUpdateContent: '', info: '????????????', // ????????????????????????
      Minfo: '?????????', // ???????????????????????????
      Mtip: '', // ???????????????
      updateInfo: '?????????????????????????????????', // ????????????
      latest: null, // ????????????
      packgeSize: null, // ???????????????
      packgePath: null, // ????????????????????????
      downloadTask: null, // ????????????
      downloadProgress: 0, // ????????????
      buttonLoading: false, // ?????? - ??????
      installed: false, // ????????????????????? - ??????
      startProgress: false, // ???????????? - ??????
      currentIsLatest: true // ?????????????????????????????? - ??????
    };}, onReady: function onReady() {//if (uni.getSystemInfoSync().platform != 'ios') {
    console.log('onReady-1');this.getLatest();var updated = uni.getStorageSync('updated');if (updated.packgePath) {this.packgePath = updated.packgePath;}uni.setNavigationBarTitle({ title: '????????????' }); //}
  }, // ???????????????????????????????????????????????????app??????????????????
  onShow: function onShow() {if (this.installed === true && this.packgePath) {this.installed = false;this.haveDownloaded();} /*if (uni.getSystemInfoSync().platform != 'ios') {
                                                                                                                             	if (this.installed === true && this.packgePath) {
                                                                                                                             		this.installed = false;
                                                                                                                             		this.haveDownloaded();
                                                                                                                             	}
                                                                                                                             } else {
                                                                                                                             	this.appStoreVersion = this.$current.appstoreversion||'??????';
                                                                                                                             	this.appStoreReleasedate = this.$current.appstorereleasedate||'??????'
                                                                                                                             	
                                                                                                                             	this.appStoreUpdateContent = this.$current.appstoreupdatecontent;
                                                                                                                             	if (this.$current.appstoreversion !== this.$current.appcurrentversion) {
                                                                                                                             		this.bGotoAppStore = true;
                                                                                                                             	} else {
                                                                                                                             		this.bGotoAppStore = false;
                                                                                                                             	}
                                                                                                                             	this.bShowAppStoreUptCont = true;
                                                                                                                             }*/}, // ???????????????????????????????????????????????????
  onUnload: function onUnload() {//if (uni.getSystemInfoSync().platform != 'ios') {
    if (this.downloadTask) {this.closeTask(); //this.showToast('???????????????');
    } //}
  }, // ??????????????????
  onPullDownRefresh: function onPullDownRefresh() {//if (uni.getSystemInfoSync().platform != 'ios') {
    this.getLatest();uni.stopPullDownRefresh(); //}
  }, methods: { gotoAppStore: function gotoAppStore() {var appUrl = 'itms-apps://itunes.apple.com/cn/app/id1471975642?mt=8'; // XXXX????????????AppID
      plus.runtime.openURL(appUrl);}, // ?????????Toast?????????
    showToast: function showToast(text) {uni.showToast({ title: text, duration: 3000, icon: 'none' });}, installPackge: function installPackge() {var _this2 = this; // ????????????
      plus.runtime.install(this.packgePath, { force: true });this.installed = true; // ?????????????????????stroage?????????????????????app??????????????????
      uni.setStorage({ key: 'updated', data: {
          completed: true,
          packgePath: this.packgePath },

        success: function success(res) {
          //console.log('????????????????????????');
          uni.setStorageSync('localVersionID', { id: _this2.latest.id });
          //console.log('localVersionID?????????,' + this.latest.id);
        } });

      // ?????????????????????????????????????????????????????????.wgt???
      if (this.packgePath.match(RegExp(/.wgt/))) {
        this.installed = false;
        uni.showModal({
          title: '??????',
          content: '??????????????????????????????',
          showCancel: false,
          complete: function complete() {
            plus.runtime.restart();
          } });

      }
    },
    // ??????????????????????????????????????????
    haveDownloaded: function haveDownloaded() {
      var _this = this;
      uni.showModal({
        title: '??????????????????',
        content: '????????????????????????????????????????????????????????????????????????????????????????????????',
        success: function success(res) {
          if (res.confirm) {
            // ??????
            _this.installPackge();
          } else if (res.cancel) {
            _this.showToast('???????????????');
          }
        } });

    },
    // ????????????????????????????????????
    getLatest: function getLatest() {
      var _this = this;
      this.info = '????????????'; // ????????????????????????
      this.Minfo = '??????'; // ???????????????????????????
      this.updateInfo = '???'; // ????????????

      this.buttonLoading = true;
      this.latest = null;
      console.log(updaterServerAddress);
      try {
        uni.downloadFile({
          url: updaterServerAddress, //????????????????????????????????????
          complete: function complete(res) {
            if (res.statusCode === 200) {
              //_this.showToast('??????????????????');

              var tmpPath = res.tempFilePath;
              var index = tmpPath.lastIndexOf('/');
              var fileName = tmpPath.substr(index + 1);
              var path = tmpPath.substr(0, index);
              //_this.showToast('????????????' + path + ',' + '?????????' + fileName);

              plus.io.resolveLocalFileSystemURL(
              tmpPath,
              function (entry) {
                entry.file(function (file) {
                  //??????????????????
                  var read = new plus.io.FileReader();
                  read.onerror = function (res) {
                    _this.showToast('onerror=' + JSON.stringify(res));
                  };
                  read.onloadend = function (res) {
                    //	_this.showToast('onload=' + JSON.stringify(res));
                  };
                  read.onload = function (res) {
                    var fileContent = JSON.parse(res.target.result);
                    //_this.showToast('?????????????????????' + JSON.stringify(fileContent));
                    _this.latest = fileContent.latest.info;
                    //this.showToast('downloadFile id=' + _this.latest.id)

                    _this.buttonLoading = false;
                    //this.test()
                    _this.checkLatest();
                  };
                  read.readAsText(file, 'UTF-8');
                });
              },
              function (e) {
                _this.showToast('Resolve file URL failed: ' + e.message);
              });

            }
          } });

      } catch (err) {
        _this.showToast('getLatest ??????' + err.message);
      }
    },
    test: function test() {
      console.log('test');
      //this.showToast('checkLatest2 id=' + this.latest.id);
    },
    // ????????????
    checkLatest: function checkLatest() {
      //this.showToast('checkLatest2 id=' + this.latest.id);

      if (!this.latest.id) {
        this.Mtip = '?????????????????????';
      } else if (this.$current.id != this.latest.id) {
        // ?????????????????????????????????$current???main.js??????
        this.currentIsLatest = false;
        this.Mtip = '???????????????';
        this.info = this.latest.name + ' ' + this.latest.number; //?????? ?????????
        this.updateInfo = this.latest.info;
        this.packgeSize = (this.latest.packgeSize / 1048576).toFixed(2) + 'MB'; // ???????????????packgeSize????????????????????????????????????????????????MB
        this.setMinfo(this.latest.type);
        // this.showToast('???????????????,??????????????????[????????????]??????????????????!');
      } else {
        //this.showToast('?????????????????????');
        this.currentIsLatest = true;
        this.Mtip = '??????????????????';
        this.info = this.latest.name + ' ' + this.latest.number; //?????? ?????????
        this.updateInfo = this.latest.info;
        this.setMinfo(this.latest.type);
        this.showToast('???????????????????????????!');
      }
    },
    // ????????????????????????????????????????????????
    setMinfo: function setMinfo(type) {
      switch (type) {
        case 'base':
          this.Minfo = '?????????';
          break;
        case 'alpha':
          this.Minfo = '?????????';
          break;
        case 'beta':
          this.Minfo = '?????????';
          break;
        case 'rc':
          this.Minfo = '?????????';
          break;
        case 'release':
          this.Minfo = '?????????';
          break;
        default:
          this.Minfo = '??????';}

    },
    // ??????????????????
    closeTask: function closeTask() {
      this.downloadTask.abort();
      this.downloadTask = null;
      this.startProgress = false;
    },
    // ??????????????????
    createTask: function createTask(downloadLink) {var _this3 = this;
      var _this = this;
      //??????????????????????????????
      if (this.packgePath) {
        this.haveDownloaded();
      } else {
        this.downloadProgress = 0;
        this.startProgress = true;
        // ????????????????????????
        this.downloadTask = uni.downloadFile({
          url: downloadLink,
          success: function success(res) {
            if (res.statusCode === 200) {
              // ????????????????????????
              uni.saveFile({
                tempFilePath: res.tempFilePath,
                success: function success(res) {
                  _this.packgePath = res.savedFilePath;
                  // ????????????
                  _this.installPackge();
                  // ?????????????????????????????????
                  _this.closeTask();
                } });

            }
          } });

        // ???????????????
        this.downloadTask.onProgressUpdate(function (res) {
          _this3.downloadProgress = res.progress;
        });
      }
    },
    handleUpdate: function handleUpdate() {
      // ??????????????????
      if (plus.os.name.toLowerCase() === 'android') {
        if (this.latest.androidLink && this.latest.androidLink !== '#') {
          // ???????????????#????????????????????????????????????????????????
          // ???????????????????????????
          this.createTask(this.latest.androidLink);
        } else {
          this.showToast('?????????????????????');
        }
      } else {
        if (this.latest.iosLink && this.latest.iosLink !== '#') {
          // ???????????????#????????????????????????????????????????????????
          // ??????(A)???????????????????????????iosLink???wgt?????????????????????????????????????????????????????????.wgt
          if (this.latest.iosLink.match(RegExp(/.wgt/))) {
            this.createTask(this.latest.iosLink);
          } else {
            // ??????(B)??????????????????????????????iosLink???????????????????????????
            plus.runtime.openURL(this.latest.iosLink);
          }
        } else {
          this.showToast('?????????ios????????????');
        }
      }
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 255:
/*!*******************************************************************************************************************!*\
  !*** E:/SK.PwGuard.App/app_woman/pages/update/index.vue?vue&type=style&index=0&id=0e7ddb05&scoped=true&lang=css& ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_InstallCatalog_HBuilderX_HBuilderX_3_1_18_20210609_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_InstallCatalog_HBuilderX_HBuilderX_3_1_18_20210609_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_InstallCatalog_HBuilderX_HBuilderX_3_1_18_20210609_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_InstallCatalog_HBuilderX_HBuilderX_3_1_18_20210609_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_InstallCatalog_HBuilderX_HBuilderX_3_1_18_20210609_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_InstallCatalog_HBuilderX_HBuilderX_3_1_18_20210609_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_InstallCatalog_HBuilderX_HBuilderX_3_1_18_20210609_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_style_index_0_id_0e7ddb05_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./index.vue?vue&type=style&index=0&id=0e7ddb05&scoped=true&lang=css& */ 256);
/* harmony import */ var _D_InstallCatalog_HBuilderX_HBuilderX_3_1_18_20210609_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_InstallCatalog_HBuilderX_HBuilderX_3_1_18_20210609_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_InstallCatalog_HBuilderX_HBuilderX_3_1_18_20210609_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_InstallCatalog_HBuilderX_HBuilderX_3_1_18_20210609_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_InstallCatalog_HBuilderX_HBuilderX_3_1_18_20210609_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_InstallCatalog_HBuilderX_HBuilderX_3_1_18_20210609_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_InstallCatalog_HBuilderX_HBuilderX_3_1_18_20210609_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_style_index_0_id_0e7ddb05_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_InstallCatalog_HBuilderX_HBuilderX_3_1_18_20210609_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_InstallCatalog_HBuilderX_HBuilderX_3_1_18_20210609_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_InstallCatalog_HBuilderX_HBuilderX_3_1_18_20210609_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_InstallCatalog_HBuilderX_HBuilderX_3_1_18_20210609_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_InstallCatalog_HBuilderX_HBuilderX_3_1_18_20210609_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_InstallCatalog_HBuilderX_HBuilderX_3_1_18_20210609_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_InstallCatalog_HBuilderX_HBuilderX_3_1_18_20210609_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_style_index_0_id_0e7ddb05_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_InstallCatalog_HBuilderX_HBuilderX_3_1_18_20210609_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_InstallCatalog_HBuilderX_HBuilderX_3_1_18_20210609_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_InstallCatalog_HBuilderX_HBuilderX_3_1_18_20210609_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_InstallCatalog_HBuilderX_HBuilderX_3_1_18_20210609_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_InstallCatalog_HBuilderX_HBuilderX_3_1_18_20210609_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_InstallCatalog_HBuilderX_HBuilderX_3_1_18_20210609_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_InstallCatalog_HBuilderX_HBuilderX_3_1_18_20210609_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_style_index_0_id_0e7ddb05_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_InstallCatalog_HBuilderX_HBuilderX_3_1_18_20210609_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_InstallCatalog_HBuilderX_HBuilderX_3_1_18_20210609_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_InstallCatalog_HBuilderX_HBuilderX_3_1_18_20210609_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_InstallCatalog_HBuilderX_HBuilderX_3_1_18_20210609_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_InstallCatalog_HBuilderX_HBuilderX_3_1_18_20210609_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_InstallCatalog_HBuilderX_HBuilderX_3_1_18_20210609_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_InstallCatalog_HBuilderX_HBuilderX_3_1_18_20210609_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_style_index_0_id_0e7ddb05_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_InstallCatalog_HBuilderX_HBuilderX_3_1_18_20210609_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_InstallCatalog_HBuilderX_HBuilderX_3_1_18_20210609_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_InstallCatalog_HBuilderX_HBuilderX_3_1_18_20210609_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_InstallCatalog_HBuilderX_HBuilderX_3_1_18_20210609_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_InstallCatalog_HBuilderX_HBuilderX_3_1_18_20210609_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_InstallCatalog_HBuilderX_HBuilderX_3_1_18_20210609_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_InstallCatalog_HBuilderX_HBuilderX_3_1_18_20210609_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_style_index_0_id_0e7ddb05_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 256:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/SK.PwGuard.App/app_woman/pages/update/index.vue?vue&type=style&index=0&id=0e7ddb05&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[249,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/update/index.js.map