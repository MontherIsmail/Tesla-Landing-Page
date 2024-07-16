"use strict";
(() => {
var exports = {};
exports.id = 198;
exports.ids = [198];
exports.modules = {

/***/ 1518:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   search: () => (/* binding */ search)
/* harmony export */ });
const baseURL = "https://data.gov.il/api/3/action/datastore_search?resource_id=053cea08-09bc-40ec-8f7a-156f0677aff3&limit= 5&q=";
const search = async (carNumber)=>{
    try {
        const response = await fetch(`${baseURL}${carNumber}`);
        const data = await response.json();
        const { result } = data;
        const { records } = result;
        const { kinuy_mishari, shnat_yitzur, tozeret_nm } = records[0];
        return {
            carNumber,
            kinuy_mishari,
            shnat_yitzur,
            tozeret_nm
        };
    } catch (error) {
        console.log(error);
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(1518));
module.exports = __webpack_exports__;

})();