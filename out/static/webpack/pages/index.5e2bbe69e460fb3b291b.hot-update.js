webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);





var _jsxFileName = "D:\\_work\\rubenvolckaeFiverr\\hobin_calculation\\pages\\index.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


function Home() {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    name: "",
    netIncome: "",
    childBenefits: "",
    extraChildBenefits: "",
    totalIncome: "",
    mealVouchers: "",
    companyCar: "",
    tankCard: "",
    lumpSum: "",
    realCost: "",
    schoolYear: 7.7,
    summerVacation: 31.31,
    christmasBreak: 7.7,
    easterHolidays: 7.7,
    autumnBreak: 7.0,
    springBreak: 0.7
  }),
      husbandDetails = _useState[0],
      setHusbandDetails = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    name: "",
    netIncome: "",
    childBenefits: "",
    extraChildBenefits: "",
    totalIncome: "",
    mealVouchers: "",
    companyCar: "",
    tankCard: "",
    lumpSum: "",
    realCost: "",
    schoolYear: 7.7,
    summerVacation: 31.31,
    christmasBreak: 7.7,
    easterHolidays: 7.7,
    autumnBreak: 7.0,
    springBreak: 0.7
  }),
      wifeDetails = _useState2[0],
      setWifeDetails = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(true),
      holidayArrangementIsSchoolYear = _useState3[0],
      setholidayArrangementIsSchoolYear = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      liveInCostSharing = _useState4[0],
      setLiveInCostSharing = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      specialCircumstances = _useState5[0],
      setSpecialCircumstances = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([{
    childName: "",
    childAge: ""
  }]),
      inputList = _useState6[0],
      setInputList = _useState6[1]; // FINAL AMOUNTS


  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    contri_1: "",
    contri_2: ""
  }),
      husbandFinalAmt = _useState7[0],
      setHusbandFinalAmt = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    contri_1: "",
    contri_2: ""
  }),
      wifeFinalAmt = _useState8[0],
      setWifeFinalAmt = _useState8[1]; // ALL THEORETICAL COST BY AGE


  var theoreticalCostByAge = {
    0: 0.137,
    1: 0.144,
    2: 0.152,
    3: 0.159,
    4: 0.166,
    5: 0.173,
    6: 0.181,
    7: 0.188,
    8: 0.196,
    9: 0.204,
    10: 0.21,
    11: 0.218,
    12: 0.225,
    13: 0.233,
    14: 0.24,
    15: 0.247,
    16: 0.255,
    17: 0.262,
    18: 0.27,
    19: 0.28,
    20: 0.29,
    21: 0.3,
    22: 0.31,
    23: 0.32,
    24: 0.33,
    25: 0.34
  }; // HANDLE INPUT FIELD OF CHILDRENS'

  var onChangeChildrenData = function onChangeChildrenData(e, index) {
    var _e$target = e.target,
        name = _e$target.name,
        value = _e$target.value;

    var childrenList = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(inputList);

    childrenList[index][name] = value;
    setInputList(childrenList);
  }; // REMOVE CHILD FUNCTION


  var removeChild = function removeChild(index) {
    var childrenList = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(inputList);

    childrenList.splice(index, 1);
    setInputList(childrenList);
  };

  var onChangeLiveInCostSharing = function onChangeLiveInCostSharing(e) {
    setLiveInCostSharing(e.target.value);

    if (e.target.value === "Yes" && (specialCircumstances === "" || specialCircumstances === "No")) {
      setHusbandDetails(_objectSpread(_objectSpread({}, husbandDetails), {}, {
        lumpSum: 470
      }));
      setWifeDetails(_objectSpread(_objectSpread({}, wifeDetails), {}, {
        lumpSum: 470
      }));
    } else if (e.target.value === "No" && (specialCircumstances === "" || specialCircumstances === "No")) {
      setHusbandDetails(_objectSpread(_objectSpread({}, husbandDetails), {}, {
        lumpSum: 940
      }));
      setWifeDetails(_objectSpread(_objectSpread({}, wifeDetails), {}, {
        lumpSum: 940
      }));
    }
  };

  var onChangeSpecialCircumstances = function onChangeSpecialCircumstances(e) {
    setSpecialCircumstances(e.target.value);

    if (e.target.value === "Yes") {
      setHusbandDetails(_objectSpread(_objectSpread({}, husbandDetails), {}, {
        lumpSum: 0
      }));
      setWifeDetails(_objectSpread(_objectSpread({}, wifeDetails), {}, {
        lumpSum: 0
      }));
    } else if (e.target.value === "No") {
      setHusbandDetails(_objectSpread(_objectSpread({}, husbandDetails), {}, {
        realCost: 0
      }));
      setWifeDetails(_objectSpread(_objectSpread({}, wifeDetails), {}, {
        realCost: 0
      }));
    }
  };

  var onChangeHolidayArrIsSchool = function onChangeHolidayArrIsSchool() {
    setHusbandDetails(_objectSpread(_objectSpread({}, husbandDetails), {}, {
      schoolYear: 7.7,
      summerVacation: 31.31,
      christmasBreak: 7.7,
      easterHolidays: 7.7,
      autumnBreak: 7.0,
      springBreak: 0.7
    }));
    setWifeDetails(_objectSpread(_objectSpread({}, wifeDetails), {}, {
      schoolYear: 7.7,
      summerVacation: 31.31,
      christmasBreak: 7.7,
      easterHolidays: 7.7,
      autumnBreak: 7.0,
      springBreak: 0.7
    }));
    setholidayArrangementIsSchoolYear(true);
  };

  var handleSubmit = function handleSubmit() {
    // B41 = B32 + B33 + B34 + B35
    var subTotalHusband = Number(husbandDetails.netIncome) + Number(husbandDetails.mealVouchers) + Number(husbandDetails.companyCar) + Number(husbandDetails.tankCard); // C41 = C32 + C33 + C34 + C35

    var subTotalWife = Number(wifeDetails.netIncome) + Number(wifeDetails.mealVouchers) + Number(wifeDetails.companyCar) + Number(wifeDetails.tankCard); // B42 = B41 + C41

    var total = subTotalHusband + subTotalWife; // B43 = B42 + B38 + C38 + B39 + C39

    var totalChildBenefits = total + Number(husbandDetails.childBenefits) + Number(wifeDetails.childBenefits) + Number(husbandDetails.extraChildBenefits) + Number(wifeDetails.extraChildBenefits); // B45 = 1 / B42 * B41

    var husbandEarningPercent = 1 / total * subTotalHusband; // C45 = 1 / B42 * C41

    var wifeEarningPercent = 1 / total * subTotalWife; // B54 = B51 + B52

    var husbandLivingCost = Number(husbandDetails.lumpSum) + Number(husbandDetails.realCost); // C54 = C51 + C52

    var wifeLivingCost = Number(wifeDetails.lumpSum) + Number(wifeDetails.realCost); // B57 = B41 - B54

    var husbandResidualResources = subTotalHusband - husbandLivingCost; // C57 = C32 + C39 - C54

    var wifeResidualResources = Number(wifeDetails.netIncome) + Number(wifeDetails.extraChildBenefits) - wifeLivingCost; // B59 = 1 / ( B57 + C57 ) * B57

    var husbandShareInResidualResources = 1 / (husbandResidualResources + wifeResidualResources) * husbandResidualResources; // C59 = 1 / ( B57 + C57 ) * C57

    var wifeShareInResidualResources = 1 / (husbandResidualResources + wifeResidualResources) * wifeResidualResources;
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
      className: "navbar navbar-expand-sm bg-dark navbar-dark justify-content-between",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        className: "navbar-brand",
        href: "/#",
        children: "RENARD"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 216,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
        className: "navbar-nav",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          className: "nav-item",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "/#",
            className: "nav-link",
            children: "About Us"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 221,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 220,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          className: "nav-item",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "/#",
            className: "nav-link",
            children: "Contact Us"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 226,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 225,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 219,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "row justify-content-center mt-5",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-md-8",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "card customCard_style p-5 border-0",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            className: "card-title text-center py-5",
            children: "Hobin Calculation"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 235,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "row my-3",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col align-self-end",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                  children: "Name:"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 239,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 238,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 237,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "text-center",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                  children: "Husband"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 244,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 243,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                className: "form-control",
                type: "text",
                value: husbandDetails.name,
                name: "husbandName",
                onChange: function onChange(e) {
                  return setHusbandDetails(_objectSpread(_objectSpread({}, husbandDetails), {}, {
                    name: e.target.value
                  }));
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 246,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 242,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "text-center",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                  children: "Wife"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 261,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 260,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                className: "form-control",
                type: "text",
                value: wifeDetails.name,
                name: "wifeName",
                onChange: function onChange(e) {
                  return setWifeDetails(_objectSpread(_objectSpread({}, wifeDetails), {}, {
                    name: e.target.value
                  }));
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 263,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 259,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 236,
            columnNumber: 13
          }, this), inputList.map(function (val, i) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "row mb-3",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "col-md-5",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                  children: "Child Name"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 277,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                  className: "form-control",
                  type: "text",
                  value: val.childName,
                  name: "childName",
                  onChange: function onChange(e) {
                    return onChangeChildrenData(e, i);
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 278,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 276,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "col-md-5",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                  children: "Child Age"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 287,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                  className: "form-control",
                  type: "number",
                  value: val.childAge,
                  name: "childAge",
                  onChange: function onChange(e) {
                    return onChangeChildrenData(e, i);
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 288,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 286,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "col-md-2 align-self-end",
                children: [i === inputList.length - 1 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                  className: "btn btn-success mr-3",
                  onClick: function onClick() {
                    return setInputList([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(inputList), [{
                      childName: "",
                      childAge: ""
                    }]));
                  },
                  children: "+"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 298,
                  columnNumber: 21
                }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false), inputList.length > 1 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                  className: "btn btn-danger",
                  onClick: function onClick() {
                    return removeChild(i);
                  },
                  children: "\xD7"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 314,
                  columnNumber: 21
                }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 296,
                columnNumber: 17
              }, _this)]
            }, i, true, {
              fileName: _jsxFileName,
              lineNumber: 275,
              columnNumber: 15
            }, _this);
          }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 326,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
            className: "mb-3",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
              children: "Income:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 328,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 327,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "row mb-3",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col align-self-end",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                  children: "Net Income:"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 333,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 332,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 331,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "text-center",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                  children: "Husband"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 338,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 337,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                className: "form-control",
                type: "number",
                value: husbandDetails.netIncome,
                name: "husbandNetIncome",
                onChange: function onChange(e) {
                  return setHusbandDetails(_objectSpread(_objectSpread({}, husbandDetails), {}, {
                    netIncome: e.target.value
                  }));
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 340,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 336,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "text-center",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                  children: "Wife"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 355,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 354,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                className: "form-control",
                type: "number",
                value: wifeDetails.netIncome,
                name: "wifeNetIncome",
                onChange: function onChange(e) {
                  return setWifeDetails(_objectSpread(_objectSpread({}, wifeDetails), {}, {
                    netIncome: e.target.value
                  }));
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 357,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 353,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 330,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "row mb-3",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col align-self-end",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                  children: "Meal Vouchers:"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 375,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 374,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 373,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col text-center",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "checkbox",
                value: husbandDetails.mealVouchers ? true : false,
                name: "husbandMealVoucher",
                onChange: function onChange(e) {
                  return setHusbandDetails(e.target.checked ? _objectSpread(_objectSpread({}, husbandDetails), {}, {
                    mealVouchers: 100
                  }) : _objectSpread(_objectSpread({}, husbandDetails), {}, {
                    mealVouchers: ""
                  }));
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 379,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 378,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col text-center",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "checkbox",
                value: wifeDetails.mealVouchers ? true : false,
                name: "wifeMealVoucher",
                onChange: function onChange(e) {
                  return setWifeDetails(e.target.checked ? _objectSpread(_objectSpread({}, wifeDetails), {}, {
                    mealVouchers: 100
                  }) : _objectSpread(_objectSpread({}, wifeDetails), {}, {
                    mealVouchers: ""
                  }));
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 393,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 392,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 372,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "row mb-3",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col align-self-end",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                  children: "Company Cars:"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 410,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 409,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 408,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col text-center",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "checkbox",
                value: husbandDetails.companyCar ? true : false,
                name: "husbandCompanyCar",
                onChange: function onChange(e) {
                  return setHusbandDetails(e.target.checked ? _objectSpread(_objectSpread({}, husbandDetails), {}, {
                    companyCar: 350
                  }) : _objectSpread(_objectSpread({}, husbandDetails), {}, {
                    companyCar: ""
                  }));
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 414,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 413,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col text-center",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "checkbox",
                value: wifeDetails.companyCar ? true : false,
                name: "wifeCompanyCar",
                onChange: function onChange(e) {
                  return setWifeDetails(e.target.checked ? _objectSpread(_objectSpread({}, wifeDetails), {}, {
                    companyCar: 350
                  }) : _objectSpread(_objectSpread({}, wifeDetails), {}, {
                    companyCar: ""
                  }));
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 428,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 427,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 407,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "row mb-3",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col align-self-end",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                  children: "Tank Card:"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 445,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 444,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 443,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col text-center",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "checkbox",
                value: husbandDetails.tankCard ? true : false,
                name: "husbandTankCard",
                onChange: function onChange(e) {
                  return setHusbandDetails(e.target.checked ? _objectSpread(_objectSpread({}, husbandDetails), {}, {
                    tankCard: 100
                  }) : _objectSpread(_objectSpread({}, husbandDetails), {}, {
                    tankCard: ""
                  }));
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 449,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 448,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col text-center",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "checkbox",
                value: wifeDetails.tankCard ? true : false,
                name: "wifeTankCard",
                onChange: function onChange(e) {
                  return setWifeDetails(e.target.checked ? _objectSpread(_objectSpread({}, wifeDetails), {}, {
                    tankCard: 100
                  }) : _objectSpread(_objectSpread({}, wifeDetails), {}, {
                    tankCard: ""
                  }));
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 463,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 462,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 442,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "row mb-3",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col align-self-end",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                  children: "Child Benefits:"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 480,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 479,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 478,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                className: "form-control",
                type: "number",
                value: husbandDetails.childBenefits,
                name: "husbandChildBenefits",
                onChange: function onChange(e) {
                  return setHusbandDetails(_objectSpread(_objectSpread({}, husbandDetails), {}, {
                    childBenefits: e.target.value
                  }));
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 484,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 483,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                className: "form-control",
                type: "number",
                value: wifeDetails.childBenefits,
                name: "wifeChildBenefits",
                onChange: function onChange(e) {
                  return setWifeDetails(_objectSpread(_objectSpread({}, wifeDetails), {}, {
                    childBenefits: e.target.value
                  }));
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 498,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 497,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 477,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "row mb-3",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col align-self-end",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                  children: "Extra Child Benefits:"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 515,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 514,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 513,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                className: "form-control",
                type: "number",
                value: husbandDetails.extraChildBenefits,
                name: "husbandExtraChildBenefits",
                onChange: function onChange(e) {
                  return setHusbandDetails(_objectSpread(_objectSpread({}, husbandDetails), {}, {
                    extraChildBenefits: e.target.value
                  }));
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 519,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 518,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                className: "form-control",
                type: "number",
                value: wifeDetails.extraChildBenefits,
                name: "wifeExtraChildBenefits",
                onChange: function onChange(e) {
                  return setWifeDetails(_objectSpread(_objectSpread({}, wifeDetails), {}, {
                    extraChildBenefits: e.target.value
                  }));
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 533,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 532,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 512,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 547,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "row mb-3",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col align-self-end",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                  children: "Living on Cost-sharing Basis:"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 551,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 550,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 549,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col text-center",
              children: ["Yes", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                className: "ml-3",
                type: "radio",
                value: "Yes",
                name: "liveInCostSharing",
                onChange: onChangeLiveInCostSharing
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 556,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 554,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col text-center",
              children: ["No", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                className: "ml-3",
                type: "radio",
                value: "No",
                name: "liveInCostSharing",
                onChange: onChangeLiveInCostSharing
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 566,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 564,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 548,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "row mb-3",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col align-self-end",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                  children: "Special Circumstances M of V:"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 578,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 577,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 576,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col text-center",
              children: ["Yes", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                className: "ml-3",
                type: "radio",
                value: "Yes",
                name: "specialCircumstances",
                onChange: onChangeSpecialCircumstances
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 583,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 581,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col text-center",
              children: ["No", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                className: "ml-3",
                type: "radio",
                value: "No",
                name: "specialCircumstances",
                onChange: onChangeSpecialCircumstances
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 593,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 591,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 575,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 602,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "row mb-3",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col align-self-end",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                  children: "Lump Sum:"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 607,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 606,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 605,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "text-center",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                  children: "Husband"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 612,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 611,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                className: "form-control",
                type: "number",
                readOnly: true,
                value: husbandDetails.lumpSum,
                name: "husbandLumpsum"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 614,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 610,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "text-center",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                  children: "Wife"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 624,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 623,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                className: "form-control",
                type: "number",
                readOnly: true,
                value: wifeDetails.lumpSum,
                name: "wifeLumpsum"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 626,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 622,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 604,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "row mb-3",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col align-self-end",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                  children: "Real Cost:"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 638,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 637,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 636,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                className: "form-control",
                type: "number",
                readOnly: specialCircumstances === "Yes" ? false : true,
                value: husbandDetails.realCost,
                name: "husbandLumpsum",
                onChange: function onChange(e) {
                  return setHusbandDetails(_objectSpread(_objectSpread({}, husbandDetails), {}, {
                    realCost: e.target.value
                  }));
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 642,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 641,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                className: "form-control",
                type: "number",
                readOnly: specialCircumstances === "Yes" ? false : true,
                value: wifeDetails.realCost,
                name: "wifeLumpsum",
                onChange: function onChange(e) {
                  return setWifeDetails(_objectSpread(_objectSpread({}, wifeDetails), {}, {
                    realCost: e.target.value
                  }));
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 657,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 656,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 635,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "row mb-3",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col align-self-end",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                  children: "Living Cost:"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 672,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 671,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 670,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: Number(husbandDetails.lumpSum) + Number(husbandDetails.realCost)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 676,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 675,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: Number(wifeDetails.lumpSum) + Number(wifeDetails.realCost)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 682,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 681,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 669,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 687,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "row mb-3",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                children: "Holiday Arragement = School year ?"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 690,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 689,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col text-center",
              children: ["Yes", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                className: "ml-3",
                type: "radio",
                value: "Yes",
                name: "holidayArrangementIsSchoolYear",
                onChange: onChangeHolidayArrIsSchool
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 694,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 692,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col text-center",
              children: ["No", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                className: "ml-3",
                type: "radio",
                value: "No",
                name: "holidayArrangementIsSchoolYear",
                onChange: function onChange() {
                  return setholidayArrangementIsSchoolYear(false);
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 704,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 702,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 688,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "row mb-3",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                  children: "School Year:"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 716,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 715,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 714,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                className: "form-control",
                type: "number",
                readOnly: holidayArrangementIsSchoolYear ? true : false,
                value: husbandDetails.schoolYear,
                name: "schoolYear",
                onChange: function onChange(e) {
                  return setWifeDetails(_objectSpread(_objectSpread({}, wifeDetails), {}, {
                    schoolYear: e.target.value
                  }));
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 720,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 719,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                className: "form-control",
                type: "number",
                readOnly: holidayArrangementIsSchoolYear ? true : false,
                value: wifeDetails.schoolYear,
                name: "schoolYear",
                onChange: function onChange(e) {
                  return setWifeDetails(_objectSpread(_objectSpread({}, wifeDetails), {}, {
                    schoolYear: e.target.value
                  }));
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 732,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 731,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 713,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "row mb-3",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                  children: "School Year:"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 747,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 746,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 745,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                className: "form-control",
                type: "number",
                readOnly: holidayArrangementIsSchoolYear ? true : false,
                value: husbandDetails.schoolYear,
                name: "schoolYear",
                onChange: function onChange(e) {
                  return setWifeDetails(_objectSpread(_objectSpread({}, wifeDetails), {}, {
                    schoolYear: e.target.value
                  }));
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 751,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 750,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                className: "form-control",
                type: "number",
                readOnly: holidayArrangementIsSchoolYear ? true : false,
                value: wifeDetails.schoolYear,
                name: "schoolYear",
                onChange: function onChange(e) {
                  return setWifeDetails(_objectSpread(_objectSpread({}, wifeDetails), {}, {
                    schoolYear: e.target.value
                  }));
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 763,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 762,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 744,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            className: "btn btn-outline-primary",
            onClick: handleSubmit,
            children: "Calculate"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 775,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 234,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 233,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s(Home, "U+ByP8BX+XZElwpud+OrZ6PbOLo=");

_c = Home;

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInVzZVN0YXRlIiwibmFtZSIsIm5ldEluY29tZSIsImNoaWxkQmVuZWZpdHMiLCJleHRyYUNoaWxkQmVuZWZpdHMiLCJ0b3RhbEluY29tZSIsIm1lYWxWb3VjaGVycyIsImNvbXBhbnlDYXIiLCJ0YW5rQ2FyZCIsImx1bXBTdW0iLCJyZWFsQ29zdCIsInNjaG9vbFllYXIiLCJzdW1tZXJWYWNhdGlvbiIsImNocmlzdG1hc0JyZWFrIiwiZWFzdGVySG9saWRheXMiLCJhdXR1bW5CcmVhayIsInNwcmluZ0JyZWFrIiwiaHVzYmFuZERldGFpbHMiLCJzZXRIdXNiYW5kRGV0YWlscyIsIndpZmVEZXRhaWxzIiwic2V0V2lmZURldGFpbHMiLCJob2xpZGF5QXJyYW5nZW1lbnRJc1NjaG9vbFllYXIiLCJzZXRob2xpZGF5QXJyYW5nZW1lbnRJc1NjaG9vbFllYXIiLCJsaXZlSW5Db3N0U2hhcmluZyIsInNldExpdmVJbkNvc3RTaGFyaW5nIiwic3BlY2lhbENpcmN1bXN0YW5jZXMiLCJzZXRTcGVjaWFsQ2lyY3Vtc3RhbmNlcyIsImNoaWxkTmFtZSIsImNoaWxkQWdlIiwiaW5wdXRMaXN0Iiwic2V0SW5wdXRMaXN0IiwiY29udHJpXzEiLCJjb250cmlfMiIsImh1c2JhbmRGaW5hbEFtdCIsInNldEh1c2JhbmRGaW5hbEFtdCIsIndpZmVGaW5hbEFtdCIsInNldFdpZmVGaW5hbEFtdCIsInRoZW9yZXRpY2FsQ29zdEJ5QWdlIiwib25DaGFuZ2VDaGlsZHJlbkRhdGEiLCJlIiwiaW5kZXgiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNoaWxkcmVuTGlzdCIsInJlbW92ZUNoaWxkIiwic3BsaWNlIiwib25DaGFuZ2VMaXZlSW5Db3N0U2hhcmluZyIsIm9uQ2hhbmdlU3BlY2lhbENpcmN1bXN0YW5jZXMiLCJvbkNoYW5nZUhvbGlkYXlBcnJJc1NjaG9vbCIsImhhbmRsZVN1Ym1pdCIsInN1YlRvdGFsSHVzYmFuZCIsIk51bWJlciIsInN1YlRvdGFsV2lmZSIsInRvdGFsIiwidG90YWxDaGlsZEJlbmVmaXRzIiwiaHVzYmFuZEVhcm5pbmdQZXJjZW50Iiwid2lmZUVhcm5pbmdQZXJjZW50IiwiaHVzYmFuZExpdmluZ0Nvc3QiLCJ3aWZlTGl2aW5nQ29zdCIsImh1c2JhbmRSZXNpZHVhbFJlc291cmNlcyIsIndpZmVSZXNpZHVhbFJlc291cmNlcyIsImh1c2JhbmRTaGFyZUluUmVzaWR1YWxSZXNvdXJjZXMiLCJ3aWZlU2hhcmVJblJlc2lkdWFsUmVzb3VyY2VzIiwibWFwIiwidmFsIiwiaSIsImxlbmd0aCIsImNoZWNrZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRWUsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUFBOztBQUFBLGtCQUNlQyxzREFBUSxDQUFDO0FBQ25EQyxRQUFJLEVBQUUsRUFENkM7QUFFbkRDLGFBQVMsRUFBRSxFQUZ3QztBQUduREMsaUJBQWEsRUFBRSxFQUhvQztBQUluREMsc0JBQWtCLEVBQUUsRUFKK0I7QUFLbkRDLGVBQVcsRUFBRSxFQUxzQztBQU1uREMsZ0JBQVksRUFBRSxFQU5xQztBQU9uREMsY0FBVSxFQUFFLEVBUHVDO0FBUW5EQyxZQUFRLEVBQUUsRUFSeUM7QUFTbkRDLFdBQU8sRUFBRSxFQVQwQztBQVVuREMsWUFBUSxFQUFFLEVBVnlDO0FBV25EQyxjQUFVLEVBQUUsR0FYdUM7QUFZbkRDLGtCQUFjLEVBQUUsS0FabUM7QUFhbkRDLGtCQUFjLEVBQUUsR0FibUM7QUFjbkRDLGtCQUFjLEVBQUUsR0FkbUM7QUFlbkRDLGVBQVcsRUFBRSxHQWZzQztBQWdCbkRDLGVBQVcsRUFBRTtBQWhCc0MsR0FBRCxDQUR2QjtBQUFBLE1BQ3RCQyxjQURzQjtBQUFBLE1BQ05DLGlCQURNOztBQUFBLG1CQW1CU2xCLHNEQUFRLENBQUM7QUFDN0NDLFFBQUksRUFBRSxFQUR1QztBQUU3Q0MsYUFBUyxFQUFFLEVBRmtD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WUFMUDtBQU1FLHdCQUFRLEVBQUUsa0JBQUM0QixDQUFEO0FBQUEseUJBQ1JuQixjQUFjLGlDQUFNRCxXQUFOO0FBQW1CUiw4QkFBVSxFQUFFNEIsQ0FBQyxDQUFDRSxNQUFGLENBQVNDO0FBQXhDLHFCQUROO0FBQUE7QUFOWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFORixlQWtCRTtBQUFLLHVCQUFTLEVBQUMsS0FBZjtBQUFBLHFDQUNFO0FBQ0UseUJBQVMsRUFBQyxjQURaO0FBRUUsb0JBQUksRUFBQyxRQUZQO0FBR0Usd0JBQVEsRUFBRXJCLDhCQUE4QixHQUFHLElBQUgsR0FBVSxLQUhwRDtBQUlFLHFCQUFLLEVBQUVGLFdBQVcsQ0FBQ1IsVUFKckI7QUFLRSxvQkFBSSxFQUFDLFlBTFA7QUFNRSx3QkFBUSxFQUFFLGtCQUFDNEIsQ0FBRDtBQUFBLHlCQUNSbkIsY0FBYyxpQ0FBTUQsV0FBTjtBQUFtQlIsOEJBQVUsRUFBRTRCLENBQUMsQ0FBQ0UsTUFBRixDQUFTQztBQUF4QyxxQkFETjtBQUFBO0FBTlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBbEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkE5ZkYsZUE2aEJFO0FBQVEscUJBQVMsRUFBQyx5QkFBbEI7QUFBNEMsbUJBQU8sRUFBRU8sWUFBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBN2hCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWxCRjtBQUFBLGtCQURGO0FBMGpCRDs7R0E1d0J1QmxELEk7O0tBQUFBLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNWUyYmJlNjllNDYwZmIzYjI5MWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2h1c2JhbmREZXRhaWxzLCBzZXRIdXNiYW5kRGV0YWlsc10gPSB1c2VTdGF0ZSh7XG4gICAgbmFtZTogXCJcIixcbiAgICBuZXRJbmNvbWU6IFwiXCIsXG4gICAgY2hpbGRCZW5lZml0czogXCJcIixcbiAgICBleHRyYUNoaWxkQmVuZWZpdHM6IFwiXCIsXG4gICAgdG90YWxJbmNvbWU6IFwiXCIsXG4gICAgbWVhbFZvdWNoZXJzOiBcIlwiLFxuICAgIGNvbXBhbnlDYXI6IFwiXCIsXG4gICAgdGFua0NhcmQ6IFwiXCIsXG4gICAgbHVtcFN1bTogXCJcIixcbiAgICByZWFsQ29zdDogXCJcIixcbiAgICBzY2hvb2xZZWFyOiA3LjcsXG4gICAgc3VtbWVyVmFjYXRpb246IDMxLjMxLFxuICAgIGNocmlzdG1hc0JyZWFrOiA3LjcsXG4gICAgZWFzdGVySG9saWRheXM6IDcuNyxcbiAgICBhdXR1bW5CcmVhazogNy4wLFxuICAgIHNwcmluZ0JyZWFrOiAwLjcsXG4gIH0pO1xuICBjb25zdCBbd2lmZURldGFpbHMsIHNldFdpZmVEZXRhaWxzXSA9IHVzZVN0YXRlKHtcbiAgICBuYW1lOiBcIlwiLFxuICAgIG5ldEluY29tZTogXCJcIixcbiAgICBjaGlsZEJlbmVmaXRzOiBcIlwiLFxuICAgIGV4dHJhQ2hpbGRCZW5lZml0czogXCJcIixcbiAgICB0b3RhbEluY29tZTogXCJcIixcbiAgICBtZWFsVm91Y2hlcnM6IFwiXCIsXG4gICAgY29tcGFueUNhcjogXCJcIixcbiAgICB0YW5rQ2FyZDogXCJcIixcbiAgICBsdW1wU3VtOiBcIlwiLFxuICAgIHJlYWxDb3N0OiBcIlwiLFxuICAgIHNjaG9vbFllYXI6IDcuNyxcbiAgICBzdW1tZXJWYWNhdGlvbjogMzEuMzEsXG4gICAgY2hyaXN0bWFzQnJlYWs6IDcuNyxcbiAgICBlYXN0ZXJIb2xpZGF5czogNy43LFxuICAgIGF1dHVtbkJyZWFrOiA3LjAsXG4gICAgc3ByaW5nQnJlYWs6IDAuNyxcbiAgfSk7XG5cbiAgY29uc3QgW1xuICAgIGhvbGlkYXlBcnJhbmdlbWVudElzU2Nob29sWWVhcixcbiAgICBzZXRob2xpZGF5QXJyYW5nZW1lbnRJc1NjaG9vbFllYXIsXG4gIF0gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICBjb25zdCBbbGl2ZUluQ29zdFNoYXJpbmcsIHNldExpdmVJbkNvc3RTaGFyaW5nXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbc3BlY2lhbENpcmN1bXN0YW5jZXMsIHNldFNwZWNpYWxDaXJjdW1zdGFuY2VzXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGNvbnN0IFtpbnB1dExpc3QsIHNldElucHV0TGlzdF0gPSB1c2VTdGF0ZShbeyBjaGlsZE5hbWU6IFwiXCIsIGNoaWxkQWdlOiBcIlwiIH1dKTtcblxuICAvLyBGSU5BTCBBTU9VTlRTXG4gIGNvbnN0IFtodXNiYW5kRmluYWxBbXQsIHNldEh1c2JhbmRGaW5hbEFtdF0gPSB1c2VTdGF0ZSh7XG4gICAgY29udHJpXzE6IFwiXCIsXG4gICAgY29udHJpXzI6IFwiXCIsXG4gIH0pO1xuICBjb25zdCBbd2lmZUZpbmFsQW10LCBzZXRXaWZlRmluYWxBbXRdID0gdXNlU3RhdGUoe1xuICAgIGNvbnRyaV8xOiBcIlwiLFxuICAgIGNvbnRyaV8yOiBcIlwiLFxuICB9KTtcblxuICAvLyBBTEwgVEhFT1JFVElDQUwgQ09TVCBCWSBBR0VcbiAgY29uc3QgdGhlb3JldGljYWxDb3N0QnlBZ2UgPSB7XG4gICAgMDogMC4xMzcsXG4gICAgMTogMC4xNDQsXG4gICAgMjogMC4xNTIsXG4gICAgMzogMC4xNTksXG4gICAgNDogMC4xNjYsXG4gICAgNTogMC4xNzMsXG4gICAgNjogMC4xODEsXG4gICAgNzogMC4xODgsXG4gICAgODogMC4xOTYsXG4gICAgOTogMC4yMDQsXG4gICAgMTA6IDAuMjEsXG4gICAgMTE6IDAuMjE4LFxuICAgIDEyOiAwLjIyNSxcbiAgICAxMzogMC4yMzMsXG4gICAgMTQ6IDAuMjQsXG4gICAgMTU6IDAuMjQ3LFxuICAgIDE2OiAwLjI1NSxcbiAgICAxNzogMC4yNjIsXG4gICAgMTg6IDAuMjcsXG4gICAgMTk6IDAuMjgsXG4gICAgMjA6IDAuMjksXG4gICAgMjE6IDAuMyxcbiAgICAyMjogMC4zMSxcbiAgICAyMzogMC4zMixcbiAgICAyNDogMC4zMyxcbiAgICAyNTogMC4zNCxcbiAgfTtcbiAgLy8gSEFORExFIElOUFVUIEZJRUxEIE9GIENISUxEUkVOUydcbiAgY29uc3Qgb25DaGFuZ2VDaGlsZHJlbkRhdGEgPSAoZSwgaW5kZXgpID0+IHtcbiAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBlLnRhcmdldDtcbiAgICBjb25zdCBjaGlsZHJlbkxpc3QgPSBbLi4uaW5wdXRMaXN0XTtcbiAgICBjaGlsZHJlbkxpc3RbaW5kZXhdW25hbWVdID0gdmFsdWU7XG4gICAgc2V0SW5wdXRMaXN0KGNoaWxkcmVuTGlzdCk7XG4gIH07XG5cbiAgLy8gUkVNT1ZFIENISUxEIEZVTkNUSU9OXG4gIGNvbnN0IHJlbW92ZUNoaWxkID0gKGluZGV4KSA9PiB7XG4gICAgY29uc3QgY2hpbGRyZW5MaXN0ID0gWy4uLmlucHV0TGlzdF07XG4gICAgY2hpbGRyZW5MaXN0LnNwbGljZShpbmRleCwgMSk7XG4gICAgc2V0SW5wdXRMaXN0KGNoaWxkcmVuTGlzdCk7XG4gIH07XG5cbiAgY29uc3Qgb25DaGFuZ2VMaXZlSW5Db3N0U2hhcmluZyA9IChlKSA9PiB7XG4gICAgc2V0TGl2ZUluQ29zdFNoYXJpbmcoZS50YXJnZXQudmFsdWUpO1xuICAgIGlmIChcbiAgICAgIGUudGFyZ2V0LnZhbHVlID09PSBcIlllc1wiICYmXG4gICAgICAoc3BlY2lhbENpcmN1bXN0YW5jZXMgPT09IFwiXCIgfHwgc3BlY2lhbENpcmN1bXN0YW5jZXMgPT09IFwiTm9cIilcbiAgICApIHtcbiAgICAgIHNldEh1c2JhbmREZXRhaWxzKHsgLi4uaHVzYmFuZERldGFpbHMsIGx1bXBTdW06IDQ3MCB9KTtcbiAgICAgIHNldFdpZmVEZXRhaWxzKHsgLi4ud2lmZURldGFpbHMsIGx1bXBTdW06IDQ3MCB9KTtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgZS50YXJnZXQudmFsdWUgPT09IFwiTm9cIiAmJlxuICAgICAgKHNwZWNpYWxDaXJjdW1zdGFuY2VzID09PSBcIlwiIHx8IHNwZWNpYWxDaXJjdW1zdGFuY2VzID09PSBcIk5vXCIpXG4gICAgKSB7XG4gICAgICBzZXRIdXNiYW5kRGV0YWlscyh7IC4uLmh1c2JhbmREZXRhaWxzLCBsdW1wU3VtOiA5NDAgfSk7XG4gICAgICBzZXRXaWZlRGV0YWlscyh7IC4uLndpZmVEZXRhaWxzLCBsdW1wU3VtOiA5NDAgfSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IG9uQ2hhbmdlU3BlY2lhbENpcmN1bXN0YW5jZXMgPSAoZSkgPT4ge1xuICAgIHNldFNwZWNpYWxDaXJjdW1zdGFuY2VzKGUudGFyZ2V0LnZhbHVlKTtcbiAgICBpZiAoZS50YXJnZXQudmFsdWUgPT09IFwiWWVzXCIpIHtcbiAgICAgIHNldEh1c2JhbmREZXRhaWxzKHsgLi4uaHVzYmFuZERldGFpbHMsIGx1bXBTdW06IDAgfSk7XG4gICAgICBzZXRXaWZlRGV0YWlscyh7IC4uLndpZmVEZXRhaWxzLCBsdW1wU3VtOiAwIH0pO1xuICAgIH0gZWxzZSBpZiAoZS50YXJnZXQudmFsdWUgPT09IFwiTm9cIikge1xuICAgICAgc2V0SHVzYmFuZERldGFpbHMoeyAuLi5odXNiYW5kRGV0YWlscywgcmVhbENvc3Q6IDAgfSk7XG4gICAgICBzZXRXaWZlRGV0YWlscyh7IC4uLndpZmVEZXRhaWxzLCByZWFsQ29zdDogMCB9KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgb25DaGFuZ2VIb2xpZGF5QXJySXNTY2hvb2wgPSAoKSA9PiB7XG4gICAgc2V0SHVzYmFuZERldGFpbHMoe1xuICAgICAgLi4uaHVzYmFuZERldGFpbHMsXG4gICAgICBzY2hvb2xZZWFyOiA3LjcsXG4gICAgICBzdW1tZXJWYWNhdGlvbjogMzEuMzEsXG4gICAgICBjaHJpc3RtYXNCcmVhazogNy43LFxuICAgICAgZWFzdGVySG9saWRheXM6IDcuNyxcbiAgICAgIGF1dHVtbkJyZWFrOiA3LjAsXG4gICAgICBzcHJpbmdCcmVhazogMC43LFxuICAgIH0pO1xuICAgIHNldFdpZmVEZXRhaWxzKHtcbiAgICAgIC4uLndpZmVEZXRhaWxzLFxuICAgICAgc2Nob29sWWVhcjogNy43LFxuICAgICAgc3VtbWVyVmFjYXRpb246IDMxLjMxLFxuICAgICAgY2hyaXN0bWFzQnJlYWs6IDcuNyxcbiAgICAgIGVhc3RlckhvbGlkYXlzOiA3LjcsXG4gICAgICBhdXR1bW5CcmVhazogNy4wLFxuICAgICAgc3ByaW5nQnJlYWs6IDAuNyxcbiAgICB9KTtcbiAgICBzZXRob2xpZGF5QXJyYW5nZW1lbnRJc1NjaG9vbFllYXIodHJ1ZSk7XG4gIH07XG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9ICgpID0+IHtcbiAgICAvLyBCNDEgPSBCMzIgKyBCMzMgKyBCMzQgKyBCMzVcbiAgICBjb25zdCBzdWJUb3RhbEh1c2JhbmQgPVxuICAgICAgTnVtYmVyKGh1c2JhbmREZXRhaWxzLm5ldEluY29tZSkgK1xuICAgICAgTnVtYmVyKGh1c2JhbmREZXRhaWxzLm1lYWxWb3VjaGVycykgK1xuICAgICAgTnVtYmVyKGh1c2JhbmREZXRhaWxzLmNvbXBhbnlDYXIpICtcbiAgICAgIE51bWJlcihodXNiYW5kRGV0YWlscy50YW5rQ2FyZCk7XG5cbiAgICAvLyBDNDEgPSBDMzIgKyBDMzMgKyBDMzQgKyBDMzVcbiAgICBjb25zdCBzdWJUb3RhbFdpZmUgPVxuICAgICAgTnVtYmVyKHdpZmVEZXRhaWxzLm5ldEluY29tZSkgK1xuICAgICAgTnVtYmVyKHdpZmVEZXRhaWxzLm1lYWxWb3VjaGVycykgK1xuICAgICAgTnVtYmVyKHdpZmVEZXRhaWxzLmNvbXBhbnlDYXIpICtcbiAgICAgIE51bWJlcih3aWZlRGV0YWlscy50YW5rQ2FyZCk7XG5cbiAgICAvLyBCNDIgPSBCNDEgKyBDNDFcbiAgICBjb25zdCB0b3RhbCA9IHN1YlRvdGFsSHVzYmFuZCArIHN1YlRvdGFsV2lmZTtcblxuICAgIC8vIEI0MyA9IEI0MiArIEIzOCArIEMzOCArIEIzOSArIEMzOVxuICAgIGNvbnN0IHRvdGFsQ2hpbGRCZW5lZml0cyA9XG4gICAgICB0b3RhbCArXG4gICAgICBOdW1iZXIoaHVzYmFuZERldGFpbHMuY2hpbGRCZW5lZml0cykgK1xuICAgICAgTnVtYmVyKHdpZmVEZXRhaWxzLmNoaWxkQmVuZWZpdHMpICtcbiAgICAgIE51bWJlcihodXNiYW5kRGV0YWlscy5leHRyYUNoaWxkQmVuZWZpdHMpICtcbiAgICAgIE51bWJlcih3aWZlRGV0YWlscy5leHRyYUNoaWxkQmVuZWZpdHMpO1xuXG4gICAgLy8gQjQ1ID0gMSAvIEI0MiAqIEI0MVxuICAgIGNvbnN0IGh1c2JhbmRFYXJuaW5nUGVyY2VudCA9ICgxIC8gdG90YWwpICogc3ViVG90YWxIdXNiYW5kO1xuXG4gICAgLy8gQzQ1ID0gMSAvIEI0MiAqIEM0MVxuICAgIGNvbnN0IHdpZmVFYXJuaW5nUGVyY2VudCA9ICgxIC8gdG90YWwpICogc3ViVG90YWxXaWZlO1xuXG4gICAgLy8gQjU0ID0gQjUxICsgQjUyXG4gICAgY29uc3QgaHVzYmFuZExpdmluZ0Nvc3QgPVxuICAgICAgTnVtYmVyKGh1c2JhbmREZXRhaWxzLmx1bXBTdW0pICsgTnVtYmVyKGh1c2JhbmREZXRhaWxzLnJlYWxDb3N0KTtcblxuICAgIC8vIEM1NCA9IEM1MSArIEM1MlxuICAgIGNvbnN0IHdpZmVMaXZpbmdDb3N0ID1cbiAgICAgIE51bWJlcih3aWZlRGV0YWlscy5sdW1wU3VtKSArIE51bWJlcih3aWZlRGV0YWlscy5yZWFsQ29zdCk7XG5cbiAgICAvLyBCNTcgPSBCNDEgLSBCNTRcbiAgICBjb25zdCBodXNiYW5kUmVzaWR1YWxSZXNvdXJjZXMgPSBzdWJUb3RhbEh1c2JhbmQgLSBodXNiYW5kTGl2aW5nQ29zdDtcblxuICAgIC8vIEM1NyA9IEMzMiArIEMzOSAtIEM1NFxuICAgIGNvbnN0IHdpZmVSZXNpZHVhbFJlc291cmNlcyA9XG4gICAgICBOdW1iZXIod2lmZURldGFpbHMubmV0SW5jb21lKSArXG4gICAgICBOdW1iZXIod2lmZURldGFpbHMuZXh0cmFDaGlsZEJlbmVmaXRzKSAtXG4gICAgICB3aWZlTGl2aW5nQ29zdDtcblxuICAgIC8vIEI1OSA9IDEgLyAoIEI1NyArIEM1NyApICogQjU3XG4gICAgY29uc3QgaHVzYmFuZFNoYXJlSW5SZXNpZHVhbFJlc291cmNlcyA9XG4gICAgICAoMSAvIChodXNiYW5kUmVzaWR1YWxSZXNvdXJjZXMgKyB3aWZlUmVzaWR1YWxSZXNvdXJjZXMpKSAqXG4gICAgICBodXNiYW5kUmVzaWR1YWxSZXNvdXJjZXM7XG5cbiAgICAvLyBDNTkgPSAxIC8gKCBCNTcgKyBDNTcgKSAqIEM1N1xuICAgIGNvbnN0IHdpZmVTaGFyZUluUmVzaWR1YWxSZXNvdXJjZXMgPVxuICAgICAgKDEgLyAoaHVzYmFuZFJlc2lkdWFsUmVzb3VyY2VzICsgd2lmZVJlc2lkdWFsUmVzb3VyY2VzKSkgKlxuICAgICAgd2lmZVJlc2lkdWFsUmVzb3VyY2VzO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItZXhwYW5kLXNtIGJnLWRhcmsgbmF2YmFyLWRhcmsganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cbiAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kXCIgaHJlZj1cIi8jXCI+XG4gICAgICAgICAgUkVOQVJEXG4gICAgICAgIDwvYT5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmJhci1uYXZcIj5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIvI1wiIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+XG4gICAgICAgICAgICAgIEFib3V0IFVzXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIvI1wiIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+XG4gICAgICAgICAgICAgIENvbnRhY3QgVXNcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgPC9uYXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIG10LTVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtOFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBjdXN0b21DYXJkX3N0eWxlIHAtNSBib3JkZXItMFwiPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImNhcmQtdGl0bGUgdGV4dC1jZW50ZXIgcHktNVwiPkhvYmluIENhbGN1bGF0aW9uPC9oMj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG15LTNcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgYWxpZ24tc2VsZi1lbmRcIj5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgIDxzdHJvbmc+TmFtZTo8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICA8c3Ryb25nPkh1c2JhbmQ8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2h1c2JhbmREZXRhaWxzLm5hbWV9XG4gICAgICAgICAgICAgICAgICBuYW1lPVwiaHVzYmFuZE5hbWVcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxuICAgICAgICAgICAgICAgICAgICBzZXRIdXNiYW5kRGV0YWlscyh7XG4gICAgICAgICAgICAgICAgICAgICAgLi4uaHVzYmFuZERldGFpbHMsXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZTogZS50YXJnZXQudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxzdHJvbmc+V2lmZTwvc3Ryb25nPlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17d2lmZURldGFpbHMubmFtZX1cbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJ3aWZlTmFtZVwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XG4gICAgICAgICAgICAgICAgICAgIHNldFdpZmVEZXRhaWxzKHsgLi4ud2lmZURldGFpbHMsIG5hbWU6IGUudGFyZ2V0LnZhbHVlIH0pXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHtpbnB1dExpc3QubWFwKCh2YWwsIGkpID0+IChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWItM1wiIGtleT17aX0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNVwiPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsPkNoaWxkIE5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbC5jaGlsZE5hbWV9XG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjaGlsZE5hbWVcIlxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uQ2hhbmdlQ2hpbGRyZW5EYXRhKGUsIGkpfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC01XCI+XG4gICAgICAgICAgICAgICAgICA8bGFiZWw+Q2hpbGQgQWdlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbC5jaGlsZEFnZX1cbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNoaWxkQWdlXCJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbkNoYW5nZUNoaWxkcmVuRGF0YShlLCBpKX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMiBhbGlnbi1zZWxmLWVuZFwiPlxuICAgICAgICAgICAgICAgICAge2kgPT09IGlucHV0TGlzdC5sZW5ndGggLSAxID8gKFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdWNjZXNzIG1yLTNcIlxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRJbnB1dExpc3QoW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5pbnB1dExpc3QsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgY2hpbGROYW1lOiBcIlwiLCBjaGlsZEFnZTogXCJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICArXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgPD48Lz5cbiAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICAgIHtpbnB1dExpc3QubGVuZ3RoID4gMSA/IChcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyXCJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByZW1vdmVDaGlsZChpKX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICZ0aW1lcztcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICA8PjwvPlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDxociAvPlxuICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1iLTNcIj5cbiAgICAgICAgICAgICAgPHN0cm9uZz5JbmNvbWU6PC9zdHJvbmc+XG4gICAgICAgICAgICA8L2g1PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWItM1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBhbGlnbi1zZWxmLWVuZFwiPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgPHN0cm9uZz5OZXQgSW5jb21lOjwvc3Ryb25nPlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxzdHJvbmc+SHVzYmFuZDwvc3Ryb25nPlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtodXNiYW5kRGV0YWlscy5uZXRJbmNvbWV9XG4gICAgICAgICAgICAgICAgICBuYW1lPVwiaHVzYmFuZE5ldEluY29tZVwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XG4gICAgICAgICAgICAgICAgICAgIHNldEh1c2JhbmREZXRhaWxzKHtcbiAgICAgICAgICAgICAgICAgICAgICAuLi5odXNiYW5kRGV0YWlscyxcbiAgICAgICAgICAgICAgICAgICAgICBuZXRJbmNvbWU6IGUudGFyZ2V0LnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICA8c3Ryb25nPldpZmU8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17d2lmZURldGFpbHMubmV0SW5jb21lfVxuICAgICAgICAgICAgICAgICAgbmFtZT1cIndpZmVOZXRJbmNvbWVcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxuICAgICAgICAgICAgICAgICAgICBzZXRXaWZlRGV0YWlscyh7XG4gICAgICAgICAgICAgICAgICAgICAgLi4ud2lmZURldGFpbHMsXG4gICAgICAgICAgICAgICAgICAgICAgbmV0SW5jb21lOiBlLnRhcmdldC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgey8qIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1iLTNcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgYWxpZ24tc2VsZi1lbmRcIj5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgIDxzdHJvbmc+TWVhbCBWb3VjaGVyczo8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtodXNiYW5kRGV0YWlscy5tZWFsVm91Y2hlcnMgPyB0cnVlIDogZmFsc2V9XG4gICAgICAgICAgICAgICAgICBuYW1lPVwiaHVzYmFuZE1lYWxWb3VjaGVyXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgc2V0SHVzYmFuZERldGFpbHMoXG4gICAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQuY2hlY2tlZFxuICAgICAgICAgICAgICAgICAgICAgICAgPyB7IC4uLmh1c2JhbmREZXRhaWxzLCBtZWFsVm91Y2hlcnM6IDEwMCB9XG4gICAgICAgICAgICAgICAgICAgICAgICA6IHsgLi4uaHVzYmFuZERldGFpbHMsIG1lYWxWb3VjaGVyczogXCJcIiB9XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17d2lmZURldGFpbHMubWVhbFZvdWNoZXJzID8gdHJ1ZSA6IGZhbHNlfVxuICAgICAgICAgICAgICAgICAgbmFtZT1cIndpZmVNZWFsVm91Y2hlclwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XG4gICAgICAgICAgICAgICAgICAgIHNldFdpZmVEZXRhaWxzKFxuICAgICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LmNoZWNrZWRcbiAgICAgICAgICAgICAgICAgICAgICAgID8geyAuLi53aWZlRGV0YWlscywgbWVhbFZvdWNoZXJzOiAxMDAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgOiB7IC4uLndpZmVEZXRhaWxzLCBtZWFsVm91Y2hlcnM6IFwiXCIgfVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1iLTNcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgYWxpZ24tc2VsZi1lbmRcIj5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgIDxzdHJvbmc+Q29tcGFueSBDYXJzOjwvc3Ryb25nPlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2h1c2JhbmREZXRhaWxzLmNvbXBhbnlDYXIgPyB0cnVlIDogZmFsc2V9XG4gICAgICAgICAgICAgICAgICBuYW1lPVwiaHVzYmFuZENvbXBhbnlDYXJcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxuICAgICAgICAgICAgICAgICAgICBzZXRIdXNiYW5kRGV0YWlscyhcbiAgICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC5jaGVja2VkXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHsgLi4uaHVzYmFuZERldGFpbHMsIGNvbXBhbnlDYXI6IDM1MCB9XG4gICAgICAgICAgICAgICAgICAgICAgICA6IHsgLi4uaHVzYmFuZERldGFpbHMsIGNvbXBhbnlDYXI6IFwiXCIgfVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3dpZmVEZXRhaWxzLmNvbXBhbnlDYXIgPyB0cnVlIDogZmFsc2V9XG4gICAgICAgICAgICAgICAgICBuYW1lPVwid2lmZUNvbXBhbnlDYXJcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxuICAgICAgICAgICAgICAgICAgICBzZXRXaWZlRGV0YWlscyhcbiAgICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC5jaGVja2VkXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHsgLi4ud2lmZURldGFpbHMsIGNvbXBhbnlDYXI6IDM1MCB9XG4gICAgICAgICAgICAgICAgICAgICAgICA6IHsgLi4ud2lmZURldGFpbHMsIGNvbXBhbnlDYXI6IFwiXCIgfVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1iLTNcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgYWxpZ24tc2VsZi1lbmRcIj5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgIDxzdHJvbmc+VGFuayBDYXJkOjwvc3Ryb25nPlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2h1c2JhbmREZXRhaWxzLnRhbmtDYXJkID8gdHJ1ZSA6IGZhbHNlfVxuICAgICAgICAgICAgICAgICAgbmFtZT1cImh1c2JhbmRUYW5rQ2FyZFwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XG4gICAgICAgICAgICAgICAgICAgIHNldEh1c2JhbmREZXRhaWxzKFxuICAgICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LmNoZWNrZWRcbiAgICAgICAgICAgICAgICAgICAgICAgID8geyAuLi5odXNiYW5kRGV0YWlscywgdGFua0NhcmQ6IDEwMCB9XG4gICAgICAgICAgICAgICAgICAgICAgICA6IHsgLi4uaHVzYmFuZERldGFpbHMsIHRhbmtDYXJkOiBcIlwiIH1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt3aWZlRGV0YWlscy50YW5rQ2FyZCA/IHRydWUgOiBmYWxzZX1cbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJ3aWZlVGFua0NhcmRcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxuICAgICAgICAgICAgICAgICAgICBzZXRXaWZlRGV0YWlscyhcbiAgICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC5jaGVja2VkXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHsgLi4ud2lmZURldGFpbHMsIHRhbmtDYXJkOiAxMDAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgOiB7IC4uLndpZmVEZXRhaWxzLCB0YW5rQ2FyZDogXCJcIiB9XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWItM1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBhbGlnbi1zZWxmLWVuZFwiPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgPHN0cm9uZz5DaGlsZCBCZW5lZml0czo8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2h1c2JhbmREZXRhaWxzLmNoaWxkQmVuZWZpdHN9XG4gICAgICAgICAgICAgICAgICBuYW1lPVwiaHVzYmFuZENoaWxkQmVuZWZpdHNcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxuICAgICAgICAgICAgICAgICAgICBzZXRIdXNiYW5kRGV0YWlscyh7XG4gICAgICAgICAgICAgICAgICAgICAgLi4uaHVzYmFuZERldGFpbHMsXG4gICAgICAgICAgICAgICAgICAgICAgY2hpbGRCZW5lZml0czogZS50YXJnZXQudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17d2lmZURldGFpbHMuY2hpbGRCZW5lZml0c31cbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJ3aWZlQ2hpbGRCZW5lZml0c1wiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XG4gICAgICAgICAgICAgICAgICAgIHNldFdpZmVEZXRhaWxzKHtcbiAgICAgICAgICAgICAgICAgICAgICAuLi53aWZlRGV0YWlscyxcbiAgICAgICAgICAgICAgICAgICAgICBjaGlsZEJlbmVmaXRzOiBlLnRhcmdldC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWItM1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBhbGlnbi1zZWxmLWVuZFwiPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgPHN0cm9uZz5FeHRyYSBDaGlsZCBCZW5lZml0czo8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2h1c2JhbmREZXRhaWxzLmV4dHJhQ2hpbGRCZW5lZml0c31cbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJodXNiYW5kRXh0cmFDaGlsZEJlbmVmaXRzXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgc2V0SHVzYmFuZERldGFpbHMoe1xuICAgICAgICAgICAgICAgICAgICAgIC4uLmh1c2JhbmREZXRhaWxzLFxuICAgICAgICAgICAgICAgICAgICAgIGV4dHJhQ2hpbGRCZW5lZml0czogZS50YXJnZXQudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17d2lmZURldGFpbHMuZXh0cmFDaGlsZEJlbmVmaXRzfVxuICAgICAgICAgICAgICAgICAgbmFtZT1cIndpZmVFeHRyYUNoaWxkQmVuZWZpdHNcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxuICAgICAgICAgICAgICAgICAgICBzZXRXaWZlRGV0YWlscyh7XG4gICAgICAgICAgICAgICAgICAgICAgLi4ud2lmZURldGFpbHMsXG4gICAgICAgICAgICAgICAgICAgICAgZXh0cmFDaGlsZEJlbmVmaXRzOiBlLnRhcmdldC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGhyIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYi0zXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIGFsaWduLXNlbGYtZW5kXCI+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICA8c3Ryb25nPkxpdmluZyBvbiBDb3N0LXNoYXJpbmcgQmFzaXM6PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICBZZXNcbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1sLTNcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPVwiWWVzXCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJsaXZlSW5Db3N0U2hhcmluZ1wiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VMaXZlSW5Db3N0U2hhcmluZ31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICBOb1xuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWwtM1wiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9XCJOb1wiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwibGl2ZUluQ29zdFNoYXJpbmdcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlTGl2ZUluQ29zdFNoYXJpbmd9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1iLTNcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgYWxpZ24tc2VsZi1lbmRcIj5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgIDxzdHJvbmc+U3BlY2lhbCBDaXJjdW1zdGFuY2VzIE0gb2YgVjo8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIFllc1xuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWwtM1wiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9XCJZZXNcIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cInNwZWNpYWxDaXJjdW1zdGFuY2VzXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZVNwZWNpYWxDaXJjdW1zdGFuY2VzfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIE5vXG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtbC0zXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT1cIk5vXCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJzcGVjaWFsQ2lyY3Vtc3RhbmNlc1wiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VTcGVjaWFsQ2lyY3Vtc3RhbmNlc31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGhyIC8+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1iLTNcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgYWxpZ24tc2VsZi1lbmRcIj5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgIDxzdHJvbmc+THVtcCBTdW06PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgPHN0cm9uZz5IdXNiYW5kPC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgcmVhZE9ubHlcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtodXNiYW5kRGV0YWlscy5sdW1wU3VtfVxuICAgICAgICAgICAgICAgICAgbmFtZT1cImh1c2JhbmRMdW1wc3VtXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgPHN0cm9uZz5XaWZlPC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgcmVhZE9ubHlcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt3aWZlRGV0YWlscy5sdW1wU3VtfVxuICAgICAgICAgICAgICAgICAgbmFtZT1cIndpZmVMdW1wc3VtXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWItM1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBhbGlnbi1zZWxmLWVuZFwiPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgPHN0cm9uZz5SZWFsIENvc3Q6PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgIHJlYWRPbmx5PXtzcGVjaWFsQ2lyY3Vtc3RhbmNlcyA9PT0gXCJZZXNcIiA/IGZhbHNlIDogdHJ1ZX1cbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtodXNiYW5kRGV0YWlscy5yZWFsQ29zdH1cbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJodXNiYW5kTHVtcHN1bVwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XG4gICAgICAgICAgICAgICAgICAgIHNldEh1c2JhbmREZXRhaWxzKHtcbiAgICAgICAgICAgICAgICAgICAgICAuLi5odXNiYW5kRGV0YWlscyxcbiAgICAgICAgICAgICAgICAgICAgICByZWFsQ29zdDogZS50YXJnZXQudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICByZWFkT25seT17c3BlY2lhbENpcmN1bXN0YW5jZXMgPT09IFwiWWVzXCIgPyBmYWxzZSA6IHRydWV9XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17d2lmZURldGFpbHMucmVhbENvc3R9XG4gICAgICAgICAgICAgICAgICBuYW1lPVwid2lmZUx1bXBzdW1cIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxuICAgICAgICAgICAgICAgICAgICBzZXRXaWZlRGV0YWlscyh7IC4uLndpZmVEZXRhaWxzLCByZWFsQ29zdDogZS50YXJnZXQudmFsdWUgfSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWItM1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBhbGlnbi1zZWxmLWVuZFwiPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgPHN0cm9uZz5MaXZpbmcgQ29zdDo8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAge051bWJlcihodXNiYW5kRGV0YWlscy5sdW1wU3VtKSArXG4gICAgICAgICAgICAgICAgICAgIE51bWJlcihodXNiYW5kRGV0YWlscy5yZWFsQ29zdCl9XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgIHtOdW1iZXIod2lmZURldGFpbHMubHVtcFN1bSkgKyBOdW1iZXIod2lmZURldGFpbHMucmVhbENvc3QpfVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxociAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWItM1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICAgIDxzdHJvbmc+SG9saWRheSBBcnJhZ2VtZW50ID0gU2Nob29sIHllYXIgPzwvc3Ryb25nPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICBZZXNcbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1sLTNcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPVwiWWVzXCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJob2xpZGF5QXJyYW5nZW1lbnRJc1NjaG9vbFllYXJcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlSG9saWRheUFycklzU2Nob29sfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIE5vXG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtbC0zXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT1cIk5vXCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJob2xpZGF5QXJyYW5nZW1lbnRJc1NjaG9vbFllYXJcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHNldGhvbGlkYXlBcnJhbmdlbWVudElzU2Nob29sWWVhcihmYWxzZSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1iLTNcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgIDxzdHJvbmc+U2Nob29sIFllYXI6PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgIHJlYWRPbmx5PXtob2xpZGF5QXJyYW5nZW1lbnRJc1NjaG9vbFllYXIgPyB0cnVlIDogZmFsc2V9XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17aHVzYmFuZERldGFpbHMuc2Nob29sWWVhcn1cbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJzY2hvb2xZZWFyXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgc2V0V2lmZURldGFpbHMoeyAuLi53aWZlRGV0YWlscywgc2Nob29sWWVhcjogZS50YXJnZXQudmFsdWUgfSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgIHJlYWRPbmx5PXtob2xpZGF5QXJyYW5nZW1lbnRJc1NjaG9vbFllYXIgPyB0cnVlIDogZmFsc2V9XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17d2lmZURldGFpbHMuc2Nob29sWWVhcn1cbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJzY2hvb2xZZWFyXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgc2V0V2lmZURldGFpbHMoeyAuLi53aWZlRGV0YWlscywgc2Nob29sWWVhcjogZS50YXJnZXQudmFsdWUgfSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWItM1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgPHN0cm9uZz5TY2hvb2wgWWVhcjo8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgcmVhZE9ubHk9e2hvbGlkYXlBcnJhbmdlbWVudElzU2Nob29sWWVhciA/IHRydWUgOiBmYWxzZX1cbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtodXNiYW5kRGV0YWlscy5zY2hvb2xZZWFyfVxuICAgICAgICAgICAgICAgICAgbmFtZT1cInNjaG9vbFllYXJcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxuICAgICAgICAgICAgICAgICAgICBzZXRXaWZlRGV0YWlscyh7IC4uLndpZmVEZXRhaWxzLCBzY2hvb2xZZWFyOiBlLnRhcmdldC52YWx1ZSB9KVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgcmVhZE9ubHk9e2hvbGlkYXlBcnJhbmdlbWVudElzU2Nob29sWWVhciA/IHRydWUgOiBmYWxzZX1cbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt3aWZlRGV0YWlscy5zY2hvb2xZZWFyfVxuICAgICAgICAgICAgICAgICAgbmFtZT1cInNjaG9vbFllYXJcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxuICAgICAgICAgICAgICAgICAgICBzZXRXaWZlRGV0YWlscyh7IC4uLndpZmVEZXRhaWxzLCBzY2hvb2xZZWFyOiBlLnRhcmdldC52YWx1ZSB9KVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1wcmltYXJ5XCIgb25DbGljaz17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgICAgQ2FsY3VsYXRlXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=