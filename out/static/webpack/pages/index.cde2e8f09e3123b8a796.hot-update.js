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
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                className: "form-control",
                type: "number",
                readOnly: holidayArrangementIsSchoolYear ? true : false,
                value: wifeDetails.realCost,
                name: "wifeLumpsum",
                onChange: function onChange(e) {
                  return setWifeDetails(_objectSpread(_objectSpread({}, wifeDetails), {}, {
                    realCost: e.target.value
                  }));
                }
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
                value: wifeDetails.realCost,
                name: "wifeLumpsum",
                onChange: function onChange(e) {
                  return setWifeDetails(_objectSpread(_objectSpread({}, wifeDetails), {}, {
                    realCost: e.target.value
                  }));
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 727,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 726,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                className: "form-control",
                type: "number",
                readOnly: holidayArrangementIsSchoolYear ? true : false,
                value: wifeDetails.realCost,
                name: "wifeLumpsum",
                onChange: function onChange(e) {
                  return setWifeDetails(_objectSpread(_objectSpread({}, wifeDetails), {}, {
                    realCost: e.target.value
                  }));
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 739,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 738,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 713,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            className: "btn btn-outline-primary",
            onClick: handleSubmit,
            children: "Calculate"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 751,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInVzZVN0YXRlIiwibmFtZSIsIm5ldEluY29tZSIsImNoaWxkQmVuZWZpdHMiLCJleHRyYUNoaWxkQmVuZWZpdHMiLCJ0b3RhbEluY29tZSIsIm1lYWxWb3VjaGVycyIsImNvbXBhbnlDYXIiLCJ0YW5rQ2FyZCIsImx1bXBTdW0iLCJyZWFsQ29zdCIsInNjaG9vbFllYXIiLCJzdW1tZXJWYWNhdGlvbiIsImNocmlzdG1hc0JyZWFrIiwiZWFzdGVySG9saWRheXMiLCJhdXR1bW5CcmVhayIsInNwcmluZ0JyZWFrIiwiaHVzYmFuZERldGFpbHMiLCJzZXRIdXNiYW5kRGV0YWlscyIsIndpZmVEZXRhaWxzIiwic2V0V2lmZURldGFpbHMiLCJob2xpZGF5QXJyYW5nZW1lbnRJc1NjaG9vbFllYXIiLCJzZXRob2xpZGF5QXJyYW5nZW1lbnRJc1NjaG9vbFllYXIiLCJsaXZlSW5Db3N0U2hhcmluZyIsInNldExpdmVJbkNvc3RTaGFyaW5nIiwic3BlY2lhbENpcmN1bXN0YW5jZXMiLCJzZXRTcGVjaWFsQ2lyY3Vtc3RhbmNlcyIsImNoaWxkTmFtZSIsImNoaWxkQWdlIiwiaW5wdXRMaXN0Iiwic2V0SW5wdXRMaXN0IiwiY29udHJpXzEiLCJjb250cmlfMiIsImh1c2JhbmRGaW5hbEFtdCIsInNldEh1c2JhbmRGaW5hbEFtdCIsIndpZmVGaW5hbEFtdCIsInNldFdpZmVGaW5hbEFtdCIsInRoZW9yZXRpY2FsQ29zdEJ5QWdlIiwib25DaGFuZ2VDaGlsZHJlbkRhdGEiLCJlIiwiaW5kZXgiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNoaWxkcmVuTGlzdCIsInJlbW92ZUNoaWxkIiwic3BsaWNlIiwib25DaGFuZ2VMaXZlSW5Db3N0U2hhcmluZyIsIm9uQ2hhbmdlU3BlY2lhbENpcmN1bXN0YW5jZXMiLCJvbkNoYW5nZUhvbGlkYXlBcnJJc1NjaG9vbCIsImhhbmRsZVN1Ym1pdCIsInN1YlRvdGFsSHVzYmFuZCIsIk51bWJlciIsInN1YlRvdGFsV2lmZSIsInRvdGFsIiwidG90YWxDaGlsZEJlbmVmaXRzIiwiaHVzYmFuZEVhcm5pbmdQZXJjZW50Iiwid2lmZUVhcm5pbmdQZXJjZW50IiwiaHVzYmFuZExpdmluZ0Nvc3QiLCJ3aWZlTGl2aW5nQ29zdCIsImh1c2JhbmRSZXNpZHVhbFJlc291cmNlcyIsIndpZmVSZXNpZHVhbFJlc291cmNlcyIsImh1c2JhbmRTaGFyZUluUmVzaWR1YWxSZXNvdXJjZXMiLCJ3aWZlU2hhcmVJblJlc2lkdWFsUmVzb3VyY2VzIiwibWFwIiwidmFsIiwiaSIsImxlbmd0aCIsImNoZWNrZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRWUsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUFBOztBQUFBLGtCQUNlQyxzREFBUSxDQUFDO0FBQ25EQyxRQUFJLEVBQUUsRUFENkM7QUFFbkRDLGFBQVMsRUFBRSxFQUZ3QztBQUduREMsaUJBQWEsRUFBRSxFQUhvQztBQUluREMsc0JBQWtCLEVBQUUsRUFKK0I7QUFLbkRDLGVBQVcsRUFBRSxFQUxzQztBQU1uREMsZ0JBQVksRUFBRSxFQU5xQztBQU9uREMsY0FBVSxFQUFFLEVBUHVDO0FBUW5EQyxZQUFRLEVBQUUsRUFSeUM7QUFTbkRDLFdBQU8sRUFBRSxFQVQwQztBQVVuREMsWUFBUSxFQUFFLEVBVnlDO0FBV25EQyxjQUFVLEVBQUUsR0FYdUM7QUFZbkRDLGtCQUFjLEVBQUUsS0FabUM7QUFhbkRDLGtCQUFjLEVBQUUsR0FibUM7QUFjbkRDLGtCQUFjLEVBQUUsR0FkbUM7QUFlbkRDLGVBQVcsRUFBRSxHQWZzQztBQWdCbkRDLGVBQVcsRUFBRTtBQWhCc0MsR0FBRCxDQUR2QjtBQUFBLE1BQ3RCQyxjQURzQjtBQUFBLE1BQ05DLGlCQURNOztBQUFBLG1CQW1CU2xCLHNEQUFRLENBQUM7QUFDN0NDLFFBQUksRUFBRSxFQUR1QztBQUU3Q0MsYUFBUyxFQUFFLEVBRmtD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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFsQkY7QUFBQSxrQkFERjtBQWtpQkQ7O0dBcHZCdUJsRCxJOztLQUFBQSxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmNkZTJlOGYwOWUzMTIzYjhhNzk2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtodXNiYW5kRGV0YWlscywgc2V0SHVzYmFuZERldGFpbHNdID0gdXNlU3RhdGUoe1xuICAgIG5hbWU6IFwiXCIsXG4gICAgbmV0SW5jb21lOiBcIlwiLFxuICAgIGNoaWxkQmVuZWZpdHM6IFwiXCIsXG4gICAgZXh0cmFDaGlsZEJlbmVmaXRzOiBcIlwiLFxuICAgIHRvdGFsSW5jb21lOiBcIlwiLFxuICAgIG1lYWxWb3VjaGVyczogXCJcIixcbiAgICBjb21wYW55Q2FyOiBcIlwiLFxuICAgIHRhbmtDYXJkOiBcIlwiLFxuICAgIGx1bXBTdW06IFwiXCIsXG4gICAgcmVhbENvc3Q6IFwiXCIsXG4gICAgc2Nob29sWWVhcjogNy43LFxuICAgIHN1bW1lclZhY2F0aW9uOiAzMS4zMSxcbiAgICBjaHJpc3RtYXNCcmVhazogNy43LFxuICAgIGVhc3RlckhvbGlkYXlzOiA3LjcsXG4gICAgYXV0dW1uQnJlYWs6IDcuMCxcbiAgICBzcHJpbmdCcmVhazogMC43LFxuICB9KTtcbiAgY29uc3QgW3dpZmVEZXRhaWxzLCBzZXRXaWZlRGV0YWlsc10gPSB1c2VTdGF0ZSh7XG4gICAgbmFtZTogXCJcIixcbiAgICBuZXRJbmNvbWU6IFwiXCIsXG4gICAgY2hpbGRCZW5lZml0czogXCJcIixcbiAgICBleHRyYUNoaWxkQmVuZWZpdHM6IFwiXCIsXG4gICAgdG90YWxJbmNvbWU6IFwiXCIsXG4gICAgbWVhbFZvdWNoZXJzOiBcIlwiLFxuICAgIGNvbXBhbnlDYXI6IFwiXCIsXG4gICAgdGFua0NhcmQ6IFwiXCIsXG4gICAgbHVtcFN1bTogXCJcIixcbiAgICByZWFsQ29zdDogXCJcIixcbiAgICBzY2hvb2xZZWFyOiA3LjcsXG4gICAgc3VtbWVyVmFjYXRpb246IDMxLjMxLFxuICAgIGNocmlzdG1hc0JyZWFrOiA3LjcsXG4gICAgZWFzdGVySG9saWRheXM6IDcuNyxcbiAgICBhdXR1bW5CcmVhazogNy4wLFxuICAgIHNwcmluZ0JyZWFrOiAwLjcsXG4gIH0pO1xuXG4gIGNvbnN0IFtcbiAgICBob2xpZGF5QXJyYW5nZW1lbnRJc1NjaG9vbFllYXIsXG4gICAgc2V0aG9saWRheUFycmFuZ2VtZW50SXNTY2hvb2xZZWFyLFxuICBdID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgY29uc3QgW2xpdmVJbkNvc3RTaGFyaW5nLCBzZXRMaXZlSW5Db3N0U2hhcmluZ10gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3NwZWNpYWxDaXJjdW1zdGFuY2VzLCBzZXRTcGVjaWFsQ2lyY3Vtc3RhbmNlc10gPSB1c2VTdGF0ZShcIlwiKTtcblxuICBjb25zdCBbaW5wdXRMaXN0LCBzZXRJbnB1dExpc3RdID0gdXNlU3RhdGUoW3sgY2hpbGROYW1lOiBcIlwiLCBjaGlsZEFnZTogXCJcIiB9XSk7XG5cbiAgLy8gRklOQUwgQU1PVU5UU1xuICBjb25zdCBbaHVzYmFuZEZpbmFsQW10LCBzZXRIdXNiYW5kRmluYWxBbXRdID0gdXNlU3RhdGUoe1xuICAgIGNvbnRyaV8xOiBcIlwiLFxuICAgIGNvbnRyaV8yOiBcIlwiLFxuICB9KTtcbiAgY29uc3QgW3dpZmVGaW5hbEFtdCwgc2V0V2lmZUZpbmFsQW10XSA9IHVzZVN0YXRlKHtcbiAgICBjb250cmlfMTogXCJcIixcbiAgICBjb250cmlfMjogXCJcIixcbiAgfSk7XG5cbiAgLy8gQUxMIFRIRU9SRVRJQ0FMIENPU1QgQlkgQUdFXG4gIGNvbnN0IHRoZW9yZXRpY2FsQ29zdEJ5QWdlID0ge1xuICAgIDA6IDAuMTM3LFxuICAgIDE6IDAuMTQ0LFxuICAgIDI6IDAuMTUyLFxuICAgIDM6IDAuMTU5LFxuICAgIDQ6IDAuMTY2LFxuICAgIDU6IDAuMTczLFxuICAgIDY6IDAuMTgxLFxuICAgIDc6IDAuMTg4LFxuICAgIDg6IDAuMTk2LFxuICAgIDk6IDAuMjA0LFxuICAgIDEwOiAwLjIxLFxuICAgIDExOiAwLjIxOCxcbiAgICAxMjogMC4yMjUsXG4gICAgMTM6IDAuMjMzLFxuICAgIDE0OiAwLjI0LFxuICAgIDE1OiAwLjI0NyxcbiAgICAxNjogMC4yNTUsXG4gICAgMTc6IDAuMjYyLFxuICAgIDE4OiAwLjI3LFxuICAgIDE5OiAwLjI4LFxuICAgIDIwOiAwLjI5LFxuICAgIDIxOiAwLjMsXG4gICAgMjI6IDAuMzEsXG4gICAgMjM6IDAuMzIsXG4gICAgMjQ6IDAuMzMsXG4gICAgMjU6IDAuMzQsXG4gIH07XG4gIC8vIEhBTkRMRSBJTlBVVCBGSUVMRCBPRiBDSElMRFJFTlMnXG4gIGNvbnN0IG9uQ2hhbmdlQ2hpbGRyZW5EYXRhID0gKGUsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZS50YXJnZXQ7XG4gICAgY29uc3QgY2hpbGRyZW5MaXN0ID0gWy4uLmlucHV0TGlzdF07XG4gICAgY2hpbGRyZW5MaXN0W2luZGV4XVtuYW1lXSA9IHZhbHVlO1xuICAgIHNldElucHV0TGlzdChjaGlsZHJlbkxpc3QpO1xuICB9O1xuXG4gIC8vIFJFTU9WRSBDSElMRCBGVU5DVElPTlxuICBjb25zdCByZW1vdmVDaGlsZCA9IChpbmRleCkgPT4ge1xuICAgIGNvbnN0IGNoaWxkcmVuTGlzdCA9IFsuLi5pbnB1dExpc3RdO1xuICAgIGNoaWxkcmVuTGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIHNldElucHV0TGlzdChjaGlsZHJlbkxpc3QpO1xuICB9O1xuXG4gIGNvbnN0IG9uQ2hhbmdlTGl2ZUluQ29zdFNoYXJpbmcgPSAoZSkgPT4ge1xuICAgIHNldExpdmVJbkNvc3RTaGFyaW5nKGUudGFyZ2V0LnZhbHVlKTtcbiAgICBpZiAoXG4gICAgICBlLnRhcmdldC52YWx1ZSA9PT0gXCJZZXNcIiAmJlxuICAgICAgKHNwZWNpYWxDaXJjdW1zdGFuY2VzID09PSBcIlwiIHx8IHNwZWNpYWxDaXJjdW1zdGFuY2VzID09PSBcIk5vXCIpXG4gICAgKSB7XG4gICAgICBzZXRIdXNiYW5kRGV0YWlscyh7IC4uLmh1c2JhbmREZXRhaWxzLCBsdW1wU3VtOiA0NzAgfSk7XG4gICAgICBzZXRXaWZlRGV0YWlscyh7IC4uLndpZmVEZXRhaWxzLCBsdW1wU3VtOiA0NzAgfSk7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIGUudGFyZ2V0LnZhbHVlID09PSBcIk5vXCIgJiZcbiAgICAgIChzcGVjaWFsQ2lyY3Vtc3RhbmNlcyA9PT0gXCJcIiB8fCBzcGVjaWFsQ2lyY3Vtc3RhbmNlcyA9PT0gXCJOb1wiKVxuICAgICkge1xuICAgICAgc2V0SHVzYmFuZERldGFpbHMoeyAuLi5odXNiYW5kRGV0YWlscywgbHVtcFN1bTogOTQwIH0pO1xuICAgICAgc2V0V2lmZURldGFpbHMoeyAuLi53aWZlRGV0YWlscywgbHVtcFN1bTogOTQwIH0pO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBvbkNoYW5nZVNwZWNpYWxDaXJjdW1zdGFuY2VzID0gKGUpID0+IHtcbiAgICBzZXRTcGVjaWFsQ2lyY3Vtc3RhbmNlcyhlLnRhcmdldC52YWx1ZSk7XG4gICAgaWYgKGUudGFyZ2V0LnZhbHVlID09PSBcIlllc1wiKSB7XG4gICAgICBzZXRIdXNiYW5kRGV0YWlscyh7IC4uLmh1c2JhbmREZXRhaWxzLCBsdW1wU3VtOiAwIH0pO1xuICAgICAgc2V0V2lmZURldGFpbHMoeyAuLi53aWZlRGV0YWlscywgbHVtcFN1bTogMCB9KTtcbiAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LnZhbHVlID09PSBcIk5vXCIpIHtcbiAgICAgIHNldEh1c2JhbmREZXRhaWxzKHsgLi4uaHVzYmFuZERldGFpbHMsIHJlYWxDb3N0OiAwIH0pO1xuICAgICAgc2V0V2lmZURldGFpbHMoeyAuLi53aWZlRGV0YWlscywgcmVhbENvc3Q6IDAgfSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IG9uQ2hhbmdlSG9saWRheUFycklzU2Nob29sID0gKCkgPT4ge1xuICAgIHNldEh1c2JhbmREZXRhaWxzKHtcbiAgICAgIC4uLmh1c2JhbmREZXRhaWxzLFxuICAgICAgc2Nob29sWWVhcjogNy43LFxuICAgICAgc3VtbWVyVmFjYXRpb246IDMxLjMxLFxuICAgICAgY2hyaXN0bWFzQnJlYWs6IDcuNyxcbiAgICAgIGVhc3RlckhvbGlkYXlzOiA3LjcsXG4gICAgICBhdXR1bW5CcmVhazogNy4wLFxuICAgICAgc3ByaW5nQnJlYWs6IDAuN1xuICAgIH0pO1xuICAgIHNldFdpZmVEZXRhaWxzKHtcbiAgICAgIC4uLndpZmVEZXRhaWxzLFxuICAgICAgc2Nob29sWWVhcjogNy43LFxuICAgICAgc3VtbWVyVmFjYXRpb246IDMxLjMxLFxuICAgICAgY2hyaXN0bWFzQnJlYWs6IDcuNyxcbiAgICAgIGVhc3RlckhvbGlkYXlzOiA3LjcsXG4gICAgICBhdXR1bW5CcmVhazogNy4wLFxuICAgICAgc3ByaW5nQnJlYWs6IDAuN1xuICAgIH0pO1xuICAgIHNldGhvbGlkYXlBcnJhbmdlbWVudElzU2Nob29sWWVhcih0cnVlKTtcbiAgfTtcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKCkgPT4ge1xuICAgIC8vIEI0MSA9IEIzMiArIEIzMyArIEIzNCArIEIzNVxuICAgIGNvbnN0IHN1YlRvdGFsSHVzYmFuZCA9XG4gICAgICBOdW1iZXIoaHVzYmFuZERldGFpbHMubmV0SW5jb21lKSArXG4gICAgICBOdW1iZXIoaHVzYmFuZERldGFpbHMubWVhbFZvdWNoZXJzKSArXG4gICAgICBOdW1iZXIoaHVzYmFuZERldGFpbHMuY29tcGFueUNhcikgK1xuICAgICAgTnVtYmVyKGh1c2JhbmREZXRhaWxzLnRhbmtDYXJkKTtcblxuICAgIC8vIEM0MSA9IEMzMiArIEMzMyArIEMzNCArIEMzNVxuICAgIGNvbnN0IHN1YlRvdGFsV2lmZSA9XG4gICAgICBOdW1iZXIod2lmZURldGFpbHMubmV0SW5jb21lKSArXG4gICAgICBOdW1iZXIod2lmZURldGFpbHMubWVhbFZvdWNoZXJzKSArXG4gICAgICBOdW1iZXIod2lmZURldGFpbHMuY29tcGFueUNhcikgK1xuICAgICAgTnVtYmVyKHdpZmVEZXRhaWxzLnRhbmtDYXJkKTtcblxuICAgIC8vIEI0MiA9IEI0MSArIEM0MVxuICAgIGNvbnN0IHRvdGFsID0gc3ViVG90YWxIdXNiYW5kICsgc3ViVG90YWxXaWZlO1xuXG4gICAgLy8gQjQzID0gQjQyICsgQjM4ICsgQzM4ICsgQjM5ICsgQzM5XG4gICAgY29uc3QgdG90YWxDaGlsZEJlbmVmaXRzID1cbiAgICAgIHRvdGFsICtcbiAgICAgIE51bWJlcihodXNiYW5kRGV0YWlscy5jaGlsZEJlbmVmaXRzKSArXG4gICAgICBOdW1iZXIod2lmZURldGFpbHMuY2hpbGRCZW5lZml0cykgK1xuICAgICAgTnVtYmVyKGh1c2JhbmREZXRhaWxzLmV4dHJhQ2hpbGRCZW5lZml0cykgK1xuICAgICAgTnVtYmVyKHdpZmVEZXRhaWxzLmV4dHJhQ2hpbGRCZW5lZml0cyk7XG5cbiAgICAvLyBCNDUgPSAxIC8gQjQyICogQjQxXG4gICAgY29uc3QgaHVzYmFuZEVhcm5pbmdQZXJjZW50ID0gKDEgLyB0b3RhbCkgKiBzdWJUb3RhbEh1c2JhbmQ7XG5cbiAgICAvLyBDNDUgPSAxIC8gQjQyICogQzQxXG4gICAgY29uc3Qgd2lmZUVhcm5pbmdQZXJjZW50ID0gKDEgLyB0b3RhbCkgKiBzdWJUb3RhbFdpZmU7XG5cbiAgICAvLyBCNTQgPSBCNTEgKyBCNTJcbiAgICBjb25zdCBodXNiYW5kTGl2aW5nQ29zdCA9XG4gICAgICBOdW1iZXIoaHVzYmFuZERldGFpbHMubHVtcFN1bSkgKyBOdW1iZXIoaHVzYmFuZERldGFpbHMucmVhbENvc3QpO1xuXG4gICAgLy8gQzU0ID0gQzUxICsgQzUyXG4gICAgY29uc3Qgd2lmZUxpdmluZ0Nvc3QgPVxuICAgICAgTnVtYmVyKHdpZmVEZXRhaWxzLmx1bXBTdW0pICsgTnVtYmVyKHdpZmVEZXRhaWxzLnJlYWxDb3N0KTtcblxuICAgIC8vIEI1NyA9IEI0MSAtIEI1NFxuICAgIGNvbnN0IGh1c2JhbmRSZXNpZHVhbFJlc291cmNlcyA9IHN1YlRvdGFsSHVzYmFuZCAtIGh1c2JhbmRMaXZpbmdDb3N0O1xuXG4gICAgLy8gQzU3ID0gQzMyICsgQzM5IC0gQzU0XG4gICAgY29uc3Qgd2lmZVJlc2lkdWFsUmVzb3VyY2VzID1cbiAgICAgIE51bWJlcih3aWZlRGV0YWlscy5uZXRJbmNvbWUpICtcbiAgICAgIE51bWJlcih3aWZlRGV0YWlscy5leHRyYUNoaWxkQmVuZWZpdHMpIC1cbiAgICAgIHdpZmVMaXZpbmdDb3N0O1xuXG4gICAgLy8gQjU5ID0gMSAvICggQjU3ICsgQzU3ICkgKiBCNTdcbiAgICBjb25zdCBodXNiYW5kU2hhcmVJblJlc2lkdWFsUmVzb3VyY2VzID1cbiAgICAgICgxIC8gKGh1c2JhbmRSZXNpZHVhbFJlc291cmNlcyArIHdpZmVSZXNpZHVhbFJlc291cmNlcykpICpcbiAgICAgIGh1c2JhbmRSZXNpZHVhbFJlc291cmNlcztcblxuICAgIC8vIEM1OSA9IDEgLyAoIEI1NyArIEM1NyApICogQzU3XG4gICAgY29uc3Qgd2lmZVNoYXJlSW5SZXNpZHVhbFJlc291cmNlcyA9XG4gICAgICAoMSAvIChodXNiYW5kUmVzaWR1YWxSZXNvdXJjZXMgKyB3aWZlUmVzaWR1YWxSZXNvdXJjZXMpKSAqXG4gICAgICB3aWZlUmVzaWR1YWxSZXNvdXJjZXM7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIG5hdmJhci1leHBhbmQtc20gYmctZGFyayBuYXZiYXItZGFyayBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxuICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmRcIiBocmVmPVwiLyNcIj5cbiAgICAgICAgICBSRU5BUkRcbiAgICAgICAgPC9hPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2YmFyLW5hdlwiPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgPGEgaHJlZj1cIi8jXCIgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5cbiAgICAgICAgICAgICAgQWJvdXQgVXNcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgPGEgaHJlZj1cIi8jXCIgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5cbiAgICAgICAgICAgICAgQ29udGFjdCBVc1xuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L25hdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXIgbXQtNVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC04XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGN1c3RvbUNhcmRfc3R5bGUgcC01IGJvcmRlci0wXCI+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiY2FyZC10aXRsZSB0ZXh0LWNlbnRlciBweS01XCI+SG9iaW4gQ2FsY3VsYXRpb248L2gyPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbXktM1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBhbGlnbi1zZWxmLWVuZFwiPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgPHN0cm9uZz5OYW1lOjwvc3Ryb25nPlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxzdHJvbmc+SHVzYmFuZDwvc3Ryb25nPlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17aHVzYmFuZERldGFpbHMubmFtZX1cbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJodXNiYW5kTmFtZVwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XG4gICAgICAgICAgICAgICAgICAgIHNldEh1c2JhbmREZXRhaWxzKHtcbiAgICAgICAgICAgICAgICAgICAgICAuLi5odXNiYW5kRGV0YWlscyxcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBlLnRhcmdldC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgPHN0cm9uZz5XaWZlPC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt3aWZlRGV0YWlscy5uYW1lfVxuICAgICAgICAgICAgICAgICAgbmFtZT1cIndpZmVOYW1lXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgc2V0V2lmZURldGFpbHMoeyAuLi53aWZlRGV0YWlscywgbmFtZTogZS50YXJnZXQudmFsdWUgfSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge2lucHV0TGlzdC5tYXAoKHZhbCwgaSkgPT4gKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYi0zXCIga2V5PXtpfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC01XCI+XG4gICAgICAgICAgICAgICAgICA8bGFiZWw+Q2hpbGQgTmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsLmNoaWxkTmFtZX1cbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNoaWxkTmFtZVwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25DaGFuZ2VDaGlsZHJlbkRhdGEoZSwgaSl9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTVcIj5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbD5DaGlsZCBBZ2U8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsLmNoaWxkQWdlfVxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY2hpbGRBZ2VcIlxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uQ2hhbmdlQ2hpbGRyZW5EYXRhKGUsIGkpfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0yIGFsaWduLXNlbGYtZW5kXCI+XG4gICAgICAgICAgICAgICAgICB7aSA9PT0gaW5wdXRMaXN0Lmxlbmd0aCAtIDEgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3MgbXItM1wiXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHNldElucHV0TGlzdChbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC4uLmlucHV0TGlzdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBjaGlsZE5hbWU6IFwiXCIsIGNoaWxkQWdlOiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICtcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICA8PjwvPlxuICAgICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgICAge2lucHV0TGlzdC5sZW5ndGggPiAxID8gKFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXJcIlxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJlbW92ZUNoaWxkKGkpfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgJnRpbWVzO1xuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgIDw+PC8+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPGhyIC8+XG4gICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibWItM1wiPlxuICAgICAgICAgICAgICA8c3Ryb25nPkluY29tZTo8L3N0cm9uZz5cbiAgICAgICAgICAgIDwvaDU+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYi0zXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIGFsaWduLXNlbGYtZW5kXCI+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICA8c3Ryb25nPk5ldCBJbmNvbWU6PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgPHN0cm9uZz5IdXNiYW5kPC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2h1c2JhbmREZXRhaWxzLm5ldEluY29tZX1cbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJodXNiYW5kTmV0SW5jb21lXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgc2V0SHVzYmFuZERldGFpbHMoe1xuICAgICAgICAgICAgICAgICAgICAgIC4uLmh1c2JhbmREZXRhaWxzLFxuICAgICAgICAgICAgICAgICAgICAgIG5ldEluY29tZTogZS50YXJnZXQudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxzdHJvbmc+V2lmZTwvc3Ryb25nPlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt3aWZlRGV0YWlscy5uZXRJbmNvbWV9XG4gICAgICAgICAgICAgICAgICBuYW1lPVwid2lmZU5ldEluY29tZVwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XG4gICAgICAgICAgICAgICAgICAgIHNldFdpZmVEZXRhaWxzKHtcbiAgICAgICAgICAgICAgICAgICAgICAuLi53aWZlRGV0YWlscyxcbiAgICAgICAgICAgICAgICAgICAgICBuZXRJbmNvbWU6IGUudGFyZ2V0LnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7LyogLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWItM1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBhbGlnbi1zZWxmLWVuZFwiPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgPHN0cm9uZz5NZWFsIFZvdWNoZXJzOjwvc3Ryb25nPlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2h1c2JhbmREZXRhaWxzLm1lYWxWb3VjaGVycyA/IHRydWUgOiBmYWxzZX1cbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJodXNiYW5kTWVhbFZvdWNoZXJcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxuICAgICAgICAgICAgICAgICAgICBzZXRIdXNiYW5kRGV0YWlscyhcbiAgICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC5jaGVja2VkXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHsgLi4uaHVzYmFuZERldGFpbHMsIG1lYWxWb3VjaGVyczogMTAwIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDogeyAuLi5odXNiYW5kRGV0YWlscywgbWVhbFZvdWNoZXJzOiBcIlwiIH1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt3aWZlRGV0YWlscy5tZWFsVm91Y2hlcnMgPyB0cnVlIDogZmFsc2V9XG4gICAgICAgICAgICAgICAgICBuYW1lPVwid2lmZU1lYWxWb3VjaGVyXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgc2V0V2lmZURldGFpbHMoXG4gICAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQuY2hlY2tlZFxuICAgICAgICAgICAgICAgICAgICAgICAgPyB7IC4uLndpZmVEZXRhaWxzLCBtZWFsVm91Y2hlcnM6IDEwMCB9XG4gICAgICAgICAgICAgICAgICAgICAgICA6IHsgLi4ud2lmZURldGFpbHMsIG1lYWxWb3VjaGVyczogXCJcIiB9XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWItM1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBhbGlnbi1zZWxmLWVuZFwiPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgPHN0cm9uZz5Db21wYW55IENhcnM6PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17aHVzYmFuZERldGFpbHMuY29tcGFueUNhciA/IHRydWUgOiBmYWxzZX1cbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJodXNiYW5kQ29tcGFueUNhclwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XG4gICAgICAgICAgICAgICAgICAgIHNldEh1c2JhbmREZXRhaWxzKFxuICAgICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LmNoZWNrZWRcbiAgICAgICAgICAgICAgICAgICAgICAgID8geyAuLi5odXNiYW5kRGV0YWlscywgY29tcGFueUNhcjogMzUwIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDogeyAuLi5odXNiYW5kRGV0YWlscywgY29tcGFueUNhcjogXCJcIiB9XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17d2lmZURldGFpbHMuY29tcGFueUNhciA/IHRydWUgOiBmYWxzZX1cbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJ3aWZlQ29tcGFueUNhclwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XG4gICAgICAgICAgICAgICAgICAgIHNldFdpZmVEZXRhaWxzKFxuICAgICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LmNoZWNrZWRcbiAgICAgICAgICAgICAgICAgICAgICAgID8geyAuLi53aWZlRGV0YWlscywgY29tcGFueUNhcjogMzUwIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDogeyAuLi53aWZlRGV0YWlscywgY29tcGFueUNhcjogXCJcIiB9XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWItM1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBhbGlnbi1zZWxmLWVuZFwiPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgPHN0cm9uZz5UYW5rIENhcmQ6PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17aHVzYmFuZERldGFpbHMudGFua0NhcmQgPyB0cnVlIDogZmFsc2V9XG4gICAgICAgICAgICAgICAgICBuYW1lPVwiaHVzYmFuZFRhbmtDYXJkXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgc2V0SHVzYmFuZERldGFpbHMoXG4gICAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQuY2hlY2tlZFxuICAgICAgICAgICAgICAgICAgICAgICAgPyB7IC4uLmh1c2JhbmREZXRhaWxzLCB0YW5rQ2FyZDogMTAwIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDogeyAuLi5odXNiYW5kRGV0YWlscywgdGFua0NhcmQ6IFwiXCIgfVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3dpZmVEZXRhaWxzLnRhbmtDYXJkID8gdHJ1ZSA6IGZhbHNlfVxuICAgICAgICAgICAgICAgICAgbmFtZT1cIndpZmVUYW5rQ2FyZFwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XG4gICAgICAgICAgICAgICAgICAgIHNldFdpZmVEZXRhaWxzKFxuICAgICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LmNoZWNrZWRcbiAgICAgICAgICAgICAgICAgICAgICAgID8geyAuLi53aWZlRGV0YWlscywgdGFua0NhcmQ6IDEwMCB9XG4gICAgICAgICAgICAgICAgICAgICAgICA6IHsgLi4ud2lmZURldGFpbHMsIHRhbmtDYXJkOiBcIlwiIH1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYi0zXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIGFsaWduLXNlbGYtZW5kXCI+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICA8c3Ryb25nPkNoaWxkIEJlbmVmaXRzOjwvc3Ryb25nPlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17aHVzYmFuZERldGFpbHMuY2hpbGRCZW5lZml0c31cbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJodXNiYW5kQ2hpbGRCZW5lZml0c1wiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XG4gICAgICAgICAgICAgICAgICAgIHNldEh1c2JhbmREZXRhaWxzKHtcbiAgICAgICAgICAgICAgICAgICAgICAuLi5odXNiYW5kRGV0YWlscyxcbiAgICAgICAgICAgICAgICAgICAgICBjaGlsZEJlbmVmaXRzOiBlLnRhcmdldC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt3aWZlRGV0YWlscy5jaGlsZEJlbmVmaXRzfVxuICAgICAgICAgICAgICAgICAgbmFtZT1cIndpZmVDaGlsZEJlbmVmaXRzXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgc2V0V2lmZURldGFpbHMoe1xuICAgICAgICAgICAgICAgICAgICAgIC4uLndpZmVEZXRhaWxzLFxuICAgICAgICAgICAgICAgICAgICAgIGNoaWxkQmVuZWZpdHM6IGUudGFyZ2V0LnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYi0zXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIGFsaWduLXNlbGYtZW5kXCI+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICA8c3Ryb25nPkV4dHJhIENoaWxkIEJlbmVmaXRzOjwvc3Ryb25nPlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17aHVzYmFuZERldGFpbHMuZXh0cmFDaGlsZEJlbmVmaXRzfVxuICAgICAgICAgICAgICAgICAgbmFtZT1cImh1c2JhbmRFeHRyYUNoaWxkQmVuZWZpdHNcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxuICAgICAgICAgICAgICAgICAgICBzZXRIdXNiYW5kRGV0YWlscyh7XG4gICAgICAgICAgICAgICAgICAgICAgLi4uaHVzYmFuZERldGFpbHMsXG4gICAgICAgICAgICAgICAgICAgICAgZXh0cmFDaGlsZEJlbmVmaXRzOiBlLnRhcmdldC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt3aWZlRGV0YWlscy5leHRyYUNoaWxkQmVuZWZpdHN9XG4gICAgICAgICAgICAgICAgICBuYW1lPVwid2lmZUV4dHJhQ2hpbGRCZW5lZml0c1wiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XG4gICAgICAgICAgICAgICAgICAgIHNldFdpZmVEZXRhaWxzKHtcbiAgICAgICAgICAgICAgICAgICAgICAuLi53aWZlRGV0YWlscyxcbiAgICAgICAgICAgICAgICAgICAgICBleHRyYUNoaWxkQmVuZWZpdHM6IGUudGFyZ2V0LnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8aHIgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1iLTNcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgYWxpZ24tc2VsZi1lbmRcIj5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgIDxzdHJvbmc+TGl2aW5nIG9uIENvc3Qtc2hhcmluZyBCYXNpczo8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIFllc1xuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWwtM1wiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9XCJZZXNcIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cImxpdmVJbkNvc3RTaGFyaW5nXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUxpdmVJbkNvc3RTaGFyaW5nfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIE5vXG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtbC0zXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT1cIk5vXCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJsaXZlSW5Db3N0U2hhcmluZ1wiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VMaXZlSW5Db3N0U2hhcmluZ31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWItM1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBhbGlnbi1zZWxmLWVuZFwiPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgPHN0cm9uZz5TcGVjaWFsIENpcmN1bXN0YW5jZXMgTSBvZiBWOjwvc3Ryb25nPlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgWWVzXG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtbC0zXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT1cIlllc1wiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwic3BlY2lhbENpcmN1bXN0YW5jZXNcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlU3BlY2lhbENpcmN1bXN0YW5jZXN9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgTm9cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1sLTNcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPVwiTm9cIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cInNwZWNpYWxDaXJjdW1zdGFuY2VzXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZVNwZWNpYWxDaXJjdW1zdGFuY2VzfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8aHIgLz5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWItM1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBhbGlnbi1zZWxmLWVuZFwiPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgPHN0cm9uZz5MdW1wIFN1bTo8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICA8c3Ryb25nPkh1c2JhbmQ8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICByZWFkT25seVxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2h1c2JhbmREZXRhaWxzLmx1bXBTdW19XG4gICAgICAgICAgICAgICAgICBuYW1lPVwiaHVzYmFuZEx1bXBzdW1cIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICA8c3Ryb25nPldpZmU8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICByZWFkT25seVxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3dpZmVEZXRhaWxzLmx1bXBTdW19XG4gICAgICAgICAgICAgICAgICBuYW1lPVwid2lmZUx1bXBzdW1cIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYi0zXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIGFsaWduLXNlbGYtZW5kXCI+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICA8c3Ryb25nPlJlYWwgQ29zdDo8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgcmVhZE9ubHk9e3NwZWNpYWxDaXJjdW1zdGFuY2VzID09PSBcIlllc1wiID8gZmFsc2UgOiB0cnVlfVxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2h1c2JhbmREZXRhaWxzLnJlYWxDb3N0fVxuICAgICAgICAgICAgICAgICAgbmFtZT1cImh1c2JhbmRMdW1wc3VtXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgc2V0SHVzYmFuZERldGFpbHMoe1xuICAgICAgICAgICAgICAgICAgICAgIC4uLmh1c2JhbmREZXRhaWxzLFxuICAgICAgICAgICAgICAgICAgICAgIHJlYWxDb3N0OiBlLnRhcmdldC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgIHJlYWRPbmx5PXtzcGVjaWFsQ2lyY3Vtc3RhbmNlcyA9PT0gXCJZZXNcIiA/IGZhbHNlIDogdHJ1ZX1cbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt3aWZlRGV0YWlscy5yZWFsQ29zdH1cbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJ3aWZlTHVtcHN1bVwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XG4gICAgICAgICAgICAgICAgICAgIHNldFdpZmVEZXRhaWxzKHsgLi4ud2lmZURldGFpbHMsIHJlYWxDb3N0OiBlLnRhcmdldC52YWx1ZSB9KVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYi0zXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIGFsaWduLXNlbGYtZW5kXCI+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICA8c3Ryb25nPkxpdmluZyBDb3N0Ojwvc3Ryb25nPlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICB7TnVtYmVyKGh1c2JhbmREZXRhaWxzLmx1bXBTdW0pICtcbiAgICAgICAgICAgICAgICAgICAgTnVtYmVyKGh1c2JhbmREZXRhaWxzLnJlYWxDb3N0KX1cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAge051bWJlcih3aWZlRGV0YWlscy5sdW1wU3VtKSArIE51bWJlcih3aWZlRGV0YWlscy5yZWFsQ29zdCl9XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGhyIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYi0zXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgPHN0cm9uZz5Ib2xpZGF5IEFycmFnZW1lbnQgPSBTY2hvb2wgeWVhciA/PC9zdHJvbmc+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIFllc1xuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWwtM1wiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9XCJZZXNcIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cImhvbGlkYXlBcnJhbmdlbWVudElzU2Nob29sWWVhclwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VIb2xpZGF5QXJySXNTY2hvb2x9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgTm9cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1sLTNcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPVwiTm9cIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cImhvbGlkYXlBcnJhbmdlbWVudElzU2Nob29sWWVhclwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gc2V0aG9saWRheUFycmFuZ2VtZW50SXNTY2hvb2xZZWFyKGZhbHNlKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWItM1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgcmVhZE9ubHk9e2hvbGlkYXlBcnJhbmdlbWVudElzU2Nob29sWWVhciA/IHRydWUgOiBmYWxzZX1cbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt3aWZlRGV0YWlscy5yZWFsQ29zdH1cbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJ3aWZlTHVtcHN1bVwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XG4gICAgICAgICAgICAgICAgICAgIHNldFdpZmVEZXRhaWxzKHsgLi4ud2lmZURldGFpbHMsIHJlYWxDb3N0OiBlLnRhcmdldC52YWx1ZSB9KVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgcmVhZE9ubHk9e2hvbGlkYXlBcnJhbmdlbWVudElzU2Nob29sWWVhciA/IHRydWUgOiBmYWxzZX1cbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt3aWZlRGV0YWlscy5yZWFsQ29zdH1cbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJ3aWZlTHVtcHN1bVwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XG4gICAgICAgICAgICAgICAgICAgIHNldFdpZmVEZXRhaWxzKHsgLi4ud2lmZURldGFpbHMsIHJlYWxDb3N0OiBlLnRhcmdldC52YWx1ZSB9KVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgcmVhZE9ubHk9e2hvbGlkYXlBcnJhbmdlbWVudElzU2Nob29sWWVhciA/IHRydWUgOiBmYWxzZX1cbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt3aWZlRGV0YWlscy5yZWFsQ29zdH1cbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJ3aWZlTHVtcHN1bVwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XG4gICAgICAgICAgICAgICAgICAgIHNldFdpZmVEZXRhaWxzKHsgLi4ud2lmZURldGFpbHMsIHJlYWxDb3N0OiBlLnRhcmdldC52YWx1ZSB9KVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1wcmltYXJ5XCIgb25DbGljaz17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgICAgQ2FsY3VsYXRlXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=