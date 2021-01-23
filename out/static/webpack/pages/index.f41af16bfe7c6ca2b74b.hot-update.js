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
    springBreak: 0.7,
    totalDays: "",
    percentOfDays: "",
    crossNationalCosts: "",
    totalContri: ""
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
    springBreak: 0.7,
    totalDays: "",
    percentOfDays: "",
    crossNationalCosts: "",
    totalContri: ""
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

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      seperateSettlementChild = _useState6[0],
      setSeperateSettlementChild = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([{
    childName: "",
    childAge: ""
  }]),
      inputList = _useState7[0],
      setInputList = _useState7[1]; // FINAL AMOUNTS


  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    contri_1: "",
    contri_2: ""
  }),
      husbandFinalAmt = _useState8[0],
      setHusbandFinalAmt = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    contri_1: "",
    contri_2: ""
  }),
      wifeFinalAmt = _useState9[0],
      setWifeFinalAmt = _useState9[1]; // ALL THEORETICAL COST BY AGE


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

    var wifeShareInResidualResources = 1 / (husbandResidualResources + wifeResidualResources) * wifeResidualResources; // B77 = SUM( B67 : B75 ) + ( B63 * 18.64286 )

    var husbandTotalDays = Number(husbandDetails.summerVacation) + Number(husbandDetails.christmasBreak) + Number(husbandDetails.easterHolidays) + Number(husbandDetails.autumnBreak) + Number(husbandDetails.springBreak);
    setHusbandDetails(_objectSpread(_objectSpread({}, husbandDetails), {}, {
      totalDays: husbandTotalDays
    })); // C77 = SUM( C67 : C75 ) + ( C63 * 18.64286 )

    var wifeTotalDays = Number(wifeDetails.summerVacation) + Number(wifeDetails.christmasBreak) + Number(wifeDetails.easterHolidays) + Number(wifeDetails.autumnBreak) + Number(wifeDetails.springBreak);
    setWifeDetails(_objectSpread(_objectSpread({}, wifeDetails), {}, {
      totalDays: wifeTotalDays
    })); // B79 = 1 / 365 * B77

    var husbandPercentageOfDays = 1 / 365 * husbandTotalDays;
    setHusbandDetails(_objectSpread(_objectSpread({}, husbandDetails), {}, {
      percentOfDays: husbandPercentageOfDays
    })); // C79 = 1 / 365 * C77

    var wifePercentageOfDays = 1 / 365 * wifeTotalDays;
    setWifeDetails(_objectSpread(_objectSpread({}, wifeDetails), {}, {
      percentOfDays: wifePercentageOfDays
    })); // 
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
        lineNumber: 253,
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
            lineNumber: 258,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 257,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          className: "nav-item",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "/#",
            className: "nav-link",
            children: "Contact Us"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 263,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 262,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 256,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 252,
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
            lineNumber: 272,
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
                  lineNumber: 276,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 275,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 274,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "text-center",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                  children: "Husband"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 281,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 280,
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
                lineNumber: 283,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 279,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "text-center",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                  children: "Wife"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 298,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 297,
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
                lineNumber: 300,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 296,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 273,
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
                  lineNumber: 314,
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
                  lineNumber: 315,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 313,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "col-md-5",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                  children: "Child Age"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 324,
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
                  lineNumber: 325,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 323,
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
                  lineNumber: 335,
                  columnNumber: 21
                }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false), inputList.length > 1 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                  className: "btn btn-danger",
                  onClick: function onClick() {
                    return removeChild(i);
                  },
                  children: "\xD7"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 351,
                  columnNumber: 21
                }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 333,
                columnNumber: 17
              }, _this)]
            }, i, true, {
              fileName: _jsxFileName,
              lineNumber: 312,
              columnNumber: 15
            }, _this);
          }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 363,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
            className: "mb-3",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
              children: "Income:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 365,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 364,
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
                  lineNumber: 370,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 369,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 368,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "text-center",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                  children: "Husband"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 375,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 374,
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
                lineNumber: 377,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 373,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "text-center",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                  children: "Wife"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 392,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 391,
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
                lineNumber: 394,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 390,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 367,
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
                  lineNumber: 412,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 411,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 410,
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
                lineNumber: 416,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 415,
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
                lineNumber: 430,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 429,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 409,
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
                  lineNumber: 447,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 446,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 445,
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
                lineNumber: 451,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 450,
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
                lineNumber: 465,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 464,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 444,
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
                  lineNumber: 482,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 481,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 480,
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
                lineNumber: 486,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 485,
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
                lineNumber: 500,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 499,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 479,
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
                  lineNumber: 517,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 516,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 515,
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
                lineNumber: 521,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 520,
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
                lineNumber: 535,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 534,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 514,
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
                  lineNumber: 552,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 551,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 550,
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
                lineNumber: 556,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 555,
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
                lineNumber: 570,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 569,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 549,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 584,
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
                  lineNumber: 588,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 587,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 586,
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
                lineNumber: 593,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 591,
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
                lineNumber: 603,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 601,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 585,
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
                  lineNumber: 615,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 614,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 613,
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
                lineNumber: 620,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 618,
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
                lineNumber: 630,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 628,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 612,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 639,
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
                  lineNumber: 644,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 643,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 642,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "text-center",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                  children: "Husband"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 649,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 648,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                className: "form-control",
                type: "number",
                readOnly: true,
                value: husbandDetails.lumpSum,
                name: "husbandLumpsum"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 651,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 647,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "text-center",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                  children: "Wife"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 661,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 660,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                className: "form-control",
                type: "number",
                readOnly: true,
                value: wifeDetails.lumpSum,
                name: "wifeLumpsum"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 663,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 659,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 641,
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
                  lineNumber: 675,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 674,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 673,
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
                lineNumber: 679,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 678,
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
                lineNumber: 694,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 693,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 672,
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
                  lineNumber: 709,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 708,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 707,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: Number(husbandDetails.lumpSum) + Number(husbandDetails.realCost)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 713,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 712,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: Number(wifeDetails.lumpSum) + Number(wifeDetails.realCost)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 719,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 718,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 706,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 724,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "row mb-3",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                children: "Holiday Arragement = School year ?"
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
              className: "col text-center",
              children: ["Yes", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                className: "ml-3",
                type: "radio",
                value: "Yes",
                name: "holidayArrangementIsSchoolYear",
                onChange: onChangeHolidayArrIsSchool
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 731,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 729,
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
                lineNumber: 741,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 739,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 725,
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
                  lineNumber: 753,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 752,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 751,
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
                  return setHusbandDetails(_objectSpread(_objectSpread({}, husbandDetails), {}, {
                    schoolYear: e.target.value
                  }));
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 757,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 756,
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
                lineNumber: 772,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 771,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 750,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "row mb-3",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                  children: "Summer Vacation:"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 790,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 789,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 788,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                className: "form-control",
                type: "number",
                readOnly: holidayArrangementIsSchoolYear ? true : false,
                value: husbandDetails.summerVacation,
                name: "schoolYear",
                onChange: function onChange(e) {
                  return setHusbandDetails(_objectSpread(_objectSpread({}, husbandDetails), {}, {
                    summerVacation: e.target.value
                  }));
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 794,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 793,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                className: "form-control",
                type: "number",
                readOnly: holidayArrangementIsSchoolYear ? true : false,
                value: wifeDetails.summerVacation,
                name: "schoolYear",
                onChange: function onChange(e) {
                  return setWifeDetails(_objectSpread(_objectSpread({}, wifeDetails), {}, {
                    summerVacation: e.target.value
                  }));
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 809,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 808,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 787,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "row mb-3",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                  children: "Christmas Break:"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 827,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 826,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 825,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                className: "form-control",
                type: "number",
                readOnly: holidayArrangementIsSchoolYear ? true : false,
                value: husbandDetails.christmasBreak,
                name: "schoolYear",
                onChange: function onChange(e) {
                  return setHusbandDetails(_objectSpread(_objectSpread({}, husbandDetails), {}, {
                    christmasBreak: e.target.value
                  }));
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 831,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 830,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                className: "form-control",
                type: "number",
                readOnly: holidayArrangementIsSchoolYear ? true : false,
                value: wifeDetails.christmasBreak,
                name: "schoolYear",
                onChange: function onChange(e) {
                  return setWifeDetails(_objectSpread(_objectSpread({}, wifeDetails), {}, {
                    christmasBreak: e.target.value
                  }));
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 846,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 845,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 824,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "row mb-3",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                  children: "Easter Holidays:"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 864,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 863,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 862,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                className: "form-control",
                type: "number",
                readOnly: holidayArrangementIsSchoolYear ? true : false,
                value: husbandDetails.easterHolidays,
                name: "schoolYear",
                onChange: function onChange(e) {
                  return setHusbandDetails(_objectSpread(_objectSpread({}, husbandDetails), {}, {
                    easterHolidays: e.target.value
                  }));
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 868,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 867,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                className: "form-control",
                type: "number",
                readOnly: holidayArrangementIsSchoolYear ? true : false,
                value: wifeDetails.easterHolidays,
                name: "schoolYear",
                onChange: function onChange(e) {
                  return setWifeDetails(_objectSpread(_objectSpread({}, wifeDetails), {}, {
                    easterHolidays: e.target.value
                  }));
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 883,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 882,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 861,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "row mb-3",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                  children: "Autumn Break:"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 901,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 900,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 899,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                className: "form-control",
                type: "number",
                readOnly: holidayArrangementIsSchoolYear ? true : false,
                value: husbandDetails.autumnBreak,
                name: "schoolYear",
                onChange: function onChange(e) {
                  return setHusbandDetails(_objectSpread(_objectSpread({}, husbandDetails), {}, {
                    autumnBreak: e.target.value
                  }));
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 905,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 904,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                className: "form-control",
                type: "number",
                readOnly: holidayArrangementIsSchoolYear ? true : false,
                value: wifeDetails.autumnBreak,
                name: "schoolYear",
                onChange: function onChange(e) {
                  return setWifeDetails(_objectSpread(_objectSpread({}, wifeDetails), {}, {
                    autumnBreak: e.target.value
                  }));
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 920,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 919,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 898,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "row mb-3",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                  children: "Spring Break:"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 938,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 937,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 936,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                className: "form-control",
                type: "number",
                readOnly: holidayArrangementIsSchoolYear ? true : false,
                value: husbandDetails.springBreak,
                name: "schoolYear",
                onChange: function onChange(e) {
                  return setHusbandDetails(_objectSpread(_objectSpread({}, husbandDetails), {}, {
                    springBreak: e.target.value
                  }));
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 942,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 941,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                className: "form-control",
                type: "number",
                readOnly: holidayArrangementIsSchoolYear ? true : false,
                value: wifeDetails.springBreak,
                name: "schoolYear",
                onChange: function onChange(e) {
                  return setWifeDetails(_objectSpread(_objectSpread({}, wifeDetails), {}, {
                    springBreak: e.target.value
                  }));
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 957,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 956,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 935,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "row mb-3",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                  children: "Total number of days:"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 975,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 974,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 973,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                  children: husbandDetails.totalDays
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 980,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 979,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 978,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                  children: wifeDetails.totalDays
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 985,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 984,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 983,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 972,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "row mb-3",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                  children: "Percentage:"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 992,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 991,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 990,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                  children: husbandDetails.percentOfDays
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 997,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 996,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 995,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                  children: wifeDetails.percentOfDays
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1002,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1001,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 1000,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 989,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 1006,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "row mb-3",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                children: "Seperate settlement for child: "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1009,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 1008,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col text-center",
              children: ["Yes", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                className: "ml-3",
                type: "radio",
                value: "Yes",
                name: "seperateSettlementChild",
                onChange: function onChange() {
                  return setSeperateSettlementChild(true);
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1013,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 1011,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col text-center",
              children: ["No", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                className: "ml-3",
                type: "radio",
                value: "No",
                name: "seperateSettlementChild",
                onChange: function onChange() {
                  return setSeperateSettlementChild(false);
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1023,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 1021,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 1007,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            className: "btn btn-outline-primary",
            onClick: handleSubmit,
            children: "Calculate"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 1033,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 271,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 270,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s(Home, "XK/TiRm8XbrpQPfegXRRyLjO/NA=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInVzZVN0YXRlIiwibmFtZSIsIm5ldEluY29tZSIsImNoaWxkQmVuZWZpdHMiLCJleHRyYUNoaWxkQmVuZWZpdHMiLCJ0b3RhbEluY29tZSIsIm1lYWxWb3VjaGVycyIsImNvbXBhbnlDYXIiLCJ0YW5rQ2FyZCIsImx1bXBTdW0iLCJyZWFsQ29zdCIsInNjaG9vbFllYXIiLCJzdW1tZXJWYWNhdGlvbiIsImNocmlzdG1hc0JyZWFrIiwiZWFzdGVySG9saWRheXMiLCJhdXR1bW5CcmVhayIsInNwcmluZ0JyZWFrIiwidG90YWxEYXlzIiwicGVyY2VudE9mRGF5cyIsImNyb3NzTmF0aW9uYWxDb3N0cyIsInRvdGFsQ29udHJpIiwiaHVzYmFuZERldGFpbHMiLCJzZXRIdXNiYW5kRGV0YWlscyIsIndpZmVEZXRhaWxzIiwic2V0V2lmZURldGFpbHMiLCJob2xpZGF5QXJyYW5nZW1lbnRJc1NjaG9vbFllYXIiLCJzZXRob2xpZGF5QXJyYW5nZW1lbnRJc1NjaG9vbFllYXIiLCJsaXZlSW5Db3N0U2hhcmluZyIsInNldExpdmVJbkNvc3RTaGFyaW5nIiwic3BlY2lhbENpcmN1bXN0YW5jZXMiLCJzZXRTcGVjaWFsQ2lyY3Vtc3RhbmNlcyIsInNlcGVyYXRlU2V0dGxlbWVudENoaWxkIiwic2V0U2VwZXJhdGVTZXR0bGVtZW50Q2hpbGQiLCJjaGlsZE5hbWUiLCJjaGlsZEFnZSIsImlucHV0TGlzdCIsInNldElucHV0TGlzdCIsImNvbnRyaV8xIiwiY29udHJpXzIiLCJodXNiYW5kRmluYWxBbXQiLCJzZXRIdXNiYW5kRmluYWxBbXQiLCJ3aWZlRmluYWxBbXQiLCJzZXRXaWZlRmluYWxBbXQiLCJ0aGVvcmV0aWNhbENvc3RCeUFnZSIsIm9uQ2hhbmdlQ2hpbGRyZW5EYXRhIiwiZSIsImluZGV4IiwidGFyZ2V0IiwidmFsdWUiLCJjaGlsZHJlbkxpc3QiLCJyZW1vdmVDaGlsZCIsInNwbGljZSIsIm9uQ2hhbmdlTGl2ZUluQ29zdFNoYXJpbmciLCJvbkNoYW5nZVNwZWNpYWxDaXJjdW1zdGFuY2VzIiwib25DaGFuZ2VIb2xpZGF5QXJySXNTY2hvb2wiLCJoYW5kbGVTdWJtaXQiLCJzdWJUb3RhbEh1c2JhbmQiLCJOdW1iZXIiLCJzdWJUb3RhbFdpZmUiLCJ0b3RhbCIsInRvdGFsQ2hpbGRCZW5lZml0cyIsImh1c2JhbmRFYXJuaW5nUGVyY2VudCIsIndpZmVFYXJuaW5nUGVyY2VudCIsImh1c2JhbmRMaXZpbmdDb3N0Iiwid2lmZUxpdmluZ0Nvc3QiLCJodXNiYW5kUmVzaWR1YWxSZXNvdXJjZXMiLCJ3aWZlUmVzaWR1YWxSZXNvdXJjZXMiLCJodXNiYW5kU2hhcmVJblJlc2lkdWFsUmVzb3VyY2VzIiwid2lmZVNoYXJlSW5SZXNpZHVhbFJlc291cmNlcyIsImh1c2JhbmRUb3RhbERheXMiLCJ3aWZlVG90YWxEYXlzIiwiaHVzYmFuZFBlcmNlbnRhZ2VPZkRheXMiLCJ3aWZlUGVyY2VudGFnZU9mRGF5cyIsIm1hcCIsInZhbCIsImkiLCJsZW5ndGgiLCJjaGVja2VkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVlLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFBQTs7QUFBQSxrQkFDZUMsc0RBQVEsQ0FBQztBQUNuREMsUUFBSSxFQUFFLEVBRDZDO0FBRW5EQyxhQUFTLEVBQUUsRUFGd0M7QUFHbkRDLGlCQUFhLEVBQUUsRUFIb0M7QUFJbkRDLHNCQUFrQixFQUFFLEVBSitCO0FBS25EQyxlQUFXLEVBQUUsRUFMc0M7QUFNbkRDLGdCQUFZLEVBQUUsRUFOcUM7QUFPbkRDLGNBQVUsRUFBRSxFQVB1QztBQVFuREMsWUFBUSxFQUFFLEVBUnlDO0FBU25EQyxXQUFPLEVBQUUsRUFUMEM7QUFVbkRDLFlBQVEsRUFBRSxFQVZ5QztBQVduREMsY0FBVSxFQUFFLEdBWHVDO0FBWW5EQyxrQkFBYyxFQUFFLEtBWm1DO0FBYW5EQyxrQkFB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QSxvQkFkRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBaHVCRixlQTB2QkU7QUFBUSxxQkFBUyxFQUFDLHlCQUFsQjtBQUE0QyxtQkFBTyxFQUFFdUIsWUFBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBMXZCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWxCRjtBQUFBLGtCQURGO0FBdXhCRDs7R0E5Z0N1QnhELEk7O0tBQUFBLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZjQxYWYxNmJmZTdjNmNhMmI3NGIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2h1c2JhbmREZXRhaWxzLCBzZXRIdXNiYW5kRGV0YWlsc10gPSB1c2VTdGF0ZSh7XG4gICAgbmFtZTogXCJcIixcbiAgICBuZXRJbmNvbWU6IFwiXCIsXG4gICAgY2hpbGRCZW5lZml0czogXCJcIixcbiAgICBleHRyYUNoaWxkQmVuZWZpdHM6IFwiXCIsXG4gICAgdG90YWxJbmNvbWU6IFwiXCIsXG4gICAgbWVhbFZvdWNoZXJzOiBcIlwiLFxuICAgIGNvbXBhbnlDYXI6IFwiXCIsXG4gICAgdGFua0NhcmQ6IFwiXCIsXG4gICAgbHVtcFN1bTogXCJcIixcbiAgICByZWFsQ29zdDogXCJcIixcbiAgICBzY2hvb2xZZWFyOiA3LjcsXG4gICAgc3VtbWVyVmFjYXRpb246IDMxLjMxLFxuICAgIGNocmlzdG1hc0JyZWFrOiA3LjcsXG4gICAgZWFzdGVySG9saWRheXM6IDcuNyxcbiAgICBhdXR1bW5CcmVhazogNy4wLFxuICAgIHNwcmluZ0JyZWFrOiAwLjcsXG4gICAgdG90YWxEYXlzOiBcIlwiLFxuICAgIHBlcmNlbnRPZkRheXM6XCJcIixcbiAgICBjcm9zc05hdGlvbmFsQ29zdHM6XCJcIixcbiAgICB0b3RhbENvbnRyaTogXCJcIlxuICB9KTtcbiAgY29uc3QgW3dpZmVEZXRhaWxzLCBzZXRXaWZlRGV0YWlsc10gPSB1c2VTdGF0ZSh7XG4gICAgbmFtZTogXCJcIixcbiAgICBuZXRJbmNvbWU6IFwiXCIsXG4gICAgY2hpbGRCZW5lZml0czogXCJcIixcbiAgICBleHRyYUNoaWxkQmVuZWZpdHM6IFwiXCIsXG4gICAgdG90YWxJbmNvbWU6IFwiXCIsXG4gICAgbWVhbFZvdWNoZXJzOiBcIlwiLFxuICAgIGNvbXBhbnlDYXI6IFwiXCIsXG4gICAgdGFua0NhcmQ6IFwiXCIsXG4gICAgbHVtcFN1bTogXCJcIixcbiAgICByZWFsQ29zdDogXCJcIixcbiAgICBzY2hvb2xZZWFyOiA3LjcsXG4gICAgc3VtbWVyVmFjYXRpb246IDMxLjMxLFxuICAgIGNocmlzdG1hc0JyZWFrOiA3LjcsXG4gICAgZWFzdGVySG9saWRheXM6IDcuNyxcbiAgICBhdXR1bW5CcmVhazogNy4wLFxuICAgIHNwcmluZ0JyZWFrOiAwLjcsXG4gICAgdG90YWxEYXlzOiBcIlwiLFxuICAgIHBlcmNlbnRPZkRheXM6XCJcIixcbiAgICBjcm9zc05hdGlvbmFsQ29zdHM6XCJcIixcbiAgICB0b3RhbENvbnRyaTogXCJcIlxuICB9KTtcblxuICBjb25zdCBbXG4gICAgaG9saWRheUFycmFuZ2VtZW50SXNTY2hvb2xZZWFyLFxuICAgIHNldGhvbGlkYXlBcnJhbmdlbWVudElzU2Nob29sWWVhcixcbiAgXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIGNvbnN0IFtsaXZlSW5Db3N0U2hhcmluZywgc2V0TGl2ZUluQ29zdFNoYXJpbmddID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtzcGVjaWFsQ2lyY3Vtc3RhbmNlcywgc2V0U3BlY2lhbENpcmN1bXN0YW5jZXNdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtzZXBlcmF0ZVNldHRsZW1lbnRDaGlsZCwgc2V0U2VwZXJhdGVTZXR0bGVtZW50Q2hpbGRdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtpbnB1dExpc3QsIHNldElucHV0TGlzdF0gPSB1c2VTdGF0ZShbeyBjaGlsZE5hbWU6IFwiXCIsIGNoaWxkQWdlOiBcIlwiIH1dKTtcblxuICAvLyBGSU5BTCBBTU9VTlRTXG4gIGNvbnN0IFtodXNiYW5kRmluYWxBbXQsIHNldEh1c2JhbmRGaW5hbEFtdF0gPSB1c2VTdGF0ZSh7XG4gICAgY29udHJpXzE6IFwiXCIsXG4gICAgY29udHJpXzI6IFwiXCIsXG4gIH0pO1xuICBjb25zdCBbd2lmZUZpbmFsQW10LCBzZXRXaWZlRmluYWxBbXRdID0gdXNlU3RhdGUoe1xuICAgIGNvbnRyaV8xOiBcIlwiLFxuICAgIGNvbnRyaV8yOiBcIlwiLFxuICB9KTtcblxuICAvLyBBTEwgVEhFT1JFVElDQUwgQ09TVCBCWSBBR0VcbiAgY29uc3QgdGhlb3JldGljYWxDb3N0QnlBZ2UgPSB7XG4gICAgMDogMC4xMzcsXG4gICAgMTogMC4xNDQsXG4gICAgMjogMC4xNTIsXG4gICAgMzogMC4xNTksXG4gICAgNDogMC4xNjYsXG4gICAgNTogMC4xNzMsXG4gICAgNjogMC4xODEsXG4gICAgNzogMC4xODgsXG4gICAgODogMC4xOTYsXG4gICAgOTogMC4yMDQsXG4gICAgMTA6IDAuMjEsXG4gICAgMTE6IDAuMjE4LFxuICAgIDEyOiAwLjIyNSxcbiAgICAxMzogMC4yMzMsXG4gICAgMTQ6IDAuMjQsXG4gICAgMTU6IDAuMjQ3LFxuICAgIDE2OiAwLjI1NSxcbiAgICAxNzogMC4yNjIsXG4gICAgMTg6IDAuMjcsXG4gICAgMTk6IDAuMjgsXG4gICAgMjA6IDAuMjksXG4gICAgMjE6IDAuMyxcbiAgICAyMjogMC4zMSxcbiAgICAyMzogMC4zMixcbiAgICAyNDogMC4zMyxcbiAgICAyNTogMC4zNCxcbiAgfTtcbiAgLy8gSEFORExFIElOUFVUIEZJRUxEIE9GIENISUxEUkVOUydcbiAgY29uc3Qgb25DaGFuZ2VDaGlsZHJlbkRhdGEgPSAoZSwgaW5kZXgpID0+IHtcbiAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBlLnRhcmdldDtcbiAgICBjb25zdCBjaGlsZHJlbkxpc3QgPSBbLi4uaW5wdXRMaXN0XTtcbiAgICBjaGlsZHJlbkxpc3RbaW5kZXhdW25hbWVdID0gdmFsdWU7XG4gICAgc2V0SW5wdXRMaXN0KGNoaWxkcmVuTGlzdCk7XG4gIH07XG5cbiAgLy8gUkVNT1ZFIENISUxEIEZVTkNUSU9OXG4gIGNvbnN0IHJlbW92ZUNoaWxkID0gKGluZGV4KSA9PiB7XG4gICAgY29uc3QgY2hpbGRyZW5MaXN0ID0gWy4uLmlucHV0TGlzdF07XG4gICAgY2hpbGRyZW5MaXN0LnNwbGljZShpbmRleCwgMSk7XG4gICAgc2V0SW5wdXRMaXN0KGNoaWxkcmVuTGlzdCk7XG4gIH07XG5cbiAgY29uc3Qgb25DaGFuZ2VMaXZlSW5Db3N0U2hhcmluZyA9IChlKSA9PiB7XG4gICAgc2V0TGl2ZUluQ29zdFNoYXJpbmcoZS50YXJnZXQudmFsdWUpO1xuICAgIGlmIChcbiAgICAgIGUudGFyZ2V0LnZhbHVlID09PSBcIlllc1wiICYmXG4gICAgICAoc3BlY2lhbENpcmN1bXN0YW5jZXMgPT09IFwiXCIgfHwgc3BlY2lhbENpcmN1bXN0YW5jZXMgPT09IFwiTm9cIilcbiAgICApIHtcbiAgICAgIHNldEh1c2JhbmREZXRhaWxzKHsgLi4uaHVzYmFuZERldGFpbHMsIGx1bXBTdW06IDQ3MCB9KTtcbiAgICAgIHNldFdpZmVEZXRhaWxzKHsgLi4ud2lmZURldGFpbHMsIGx1bXBTdW06IDQ3MCB9KTtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgZS50YXJnZXQudmFsdWUgPT09IFwiTm9cIiAmJlxuICAgICAgKHNwZWNpYWxDaXJjdW1zdGFuY2VzID09PSBcIlwiIHx8IHNwZWNpYWxDaXJjdW1zdGFuY2VzID09PSBcIk5vXCIpXG4gICAgKSB7XG4gICAgICBzZXRIdXNiYW5kRGV0YWlscyh7IC4uLmh1c2JhbmREZXRhaWxzLCBsdW1wU3VtOiA5NDAgfSk7XG4gICAgICBzZXRXaWZlRGV0YWlscyh7IC4uLndpZmVEZXRhaWxzLCBsdW1wU3VtOiA5NDAgfSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IG9uQ2hhbmdlU3BlY2lhbENpcmN1bXN0YW5jZXMgPSAoZSkgPT4ge1xuICAgIHNldFNwZWNpYWxDaXJjdW1zdGFuY2VzKGUudGFyZ2V0LnZhbHVlKTtcbiAgICBpZiAoZS50YXJnZXQudmFsdWUgPT09IFwiWWVzXCIpIHtcbiAgICAgIHNldEh1c2JhbmREZXRhaWxzKHsgLi4uaHVzYmFuZERldGFpbHMsIGx1bXBTdW06IDAgfSk7XG4gICAgICBzZXRXaWZlRGV0YWlscyh7IC4uLndpZmVEZXRhaWxzLCBsdW1wU3VtOiAwIH0pO1xuICAgIH0gZWxzZSBpZiAoZS50YXJnZXQudmFsdWUgPT09IFwiTm9cIikge1xuICAgICAgc2V0SHVzYmFuZERldGFpbHMoeyAuLi5odXNiYW5kRGV0YWlscywgcmVhbENvc3Q6IDAgfSk7XG4gICAgICBzZXRXaWZlRGV0YWlscyh7IC4uLndpZmVEZXRhaWxzLCByZWFsQ29zdDogMCB9KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgb25DaGFuZ2VIb2xpZGF5QXJySXNTY2hvb2wgPSAoKSA9PiB7XG4gICAgc2V0SHVzYmFuZERldGFpbHMoe1xuICAgICAgLi4uaHVzYmFuZERldGFpbHMsXG4gICAgICBzY2hvb2xZZWFyOiA3LjcsXG4gICAgICBzdW1tZXJWYWNhdGlvbjogMzEuMzEsXG4gICAgICBjaHJpc3RtYXNCcmVhazogNy43LFxuICAgICAgZWFzdGVySG9saWRheXM6IDcuNyxcbiAgICAgIGF1dHVtbkJyZWFrOiA3LjAsXG4gICAgICBzcHJpbmdCcmVhazogMC43LFxuICAgIH0pO1xuICAgIHNldFdpZmVEZXRhaWxzKHtcbiAgICAgIC4uLndpZmVEZXRhaWxzLFxuICAgICAgc2Nob29sWWVhcjogNy43LFxuICAgICAgc3VtbWVyVmFjYXRpb246IDMxLjMxLFxuICAgICAgY2hyaXN0bWFzQnJlYWs6IDcuNyxcbiAgICAgIGVhc3RlckhvbGlkYXlzOiA3LjcsXG4gICAgICBhdXR1bW5CcmVhazogNy4wLFxuICAgICAgc3ByaW5nQnJlYWs6IDAuNyxcbiAgICB9KTtcbiAgICBzZXRob2xpZGF5QXJyYW5nZW1lbnRJc1NjaG9vbFllYXIodHJ1ZSk7XG4gIH07XG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9ICgpID0+IHtcbiAgICAvLyBCNDEgPSBCMzIgKyBCMzMgKyBCMzQgKyBCMzVcbiAgICBjb25zdCBzdWJUb3RhbEh1c2JhbmQgPVxuICAgICAgTnVtYmVyKGh1c2JhbmREZXRhaWxzLm5ldEluY29tZSkgK1xuICAgICAgTnVtYmVyKGh1c2JhbmREZXRhaWxzLm1lYWxWb3VjaGVycykgK1xuICAgICAgTnVtYmVyKGh1c2JhbmREZXRhaWxzLmNvbXBhbnlDYXIpICtcbiAgICAgIE51bWJlcihodXNiYW5kRGV0YWlscy50YW5rQ2FyZCk7XG5cbiAgICAvLyBDNDEgPSBDMzIgKyBDMzMgKyBDMzQgKyBDMzVcbiAgICBjb25zdCBzdWJUb3RhbFdpZmUgPVxuICAgICAgTnVtYmVyKHdpZmVEZXRhaWxzLm5ldEluY29tZSkgK1xuICAgICAgTnVtYmVyKHdpZmVEZXRhaWxzLm1lYWxWb3VjaGVycykgK1xuICAgICAgTnVtYmVyKHdpZmVEZXRhaWxzLmNvbXBhbnlDYXIpICtcbiAgICAgIE51bWJlcih3aWZlRGV0YWlscy50YW5rQ2FyZCk7XG5cbiAgICAvLyBCNDIgPSBCNDEgKyBDNDFcbiAgICBjb25zdCB0b3RhbCA9IHN1YlRvdGFsSHVzYmFuZCArIHN1YlRvdGFsV2lmZTtcblxuICAgIC8vIEI0MyA9IEI0MiArIEIzOCArIEMzOCArIEIzOSArIEMzOVxuICAgIGNvbnN0IHRvdGFsQ2hpbGRCZW5lZml0cyA9XG4gICAgICB0b3RhbCArXG4gICAgICBOdW1iZXIoaHVzYmFuZERldGFpbHMuY2hpbGRCZW5lZml0cykgK1xuICAgICAgTnVtYmVyKHdpZmVEZXRhaWxzLmNoaWxkQmVuZWZpdHMpICtcbiAgICAgIE51bWJlcihodXNiYW5kRGV0YWlscy5leHRyYUNoaWxkQmVuZWZpdHMpICtcbiAgICAgIE51bWJlcih3aWZlRGV0YWlscy5leHRyYUNoaWxkQmVuZWZpdHMpO1xuXG4gICAgLy8gQjQ1ID0gMSAvIEI0MiAqIEI0MVxuICAgIGNvbnN0IGh1c2JhbmRFYXJuaW5nUGVyY2VudCA9ICgxIC8gdG90YWwpICogc3ViVG90YWxIdXNiYW5kO1xuXG4gICAgLy8gQzQ1ID0gMSAvIEI0MiAqIEM0MVxuICAgIGNvbnN0IHdpZmVFYXJuaW5nUGVyY2VudCA9ICgxIC8gdG90YWwpICogc3ViVG90YWxXaWZlO1xuXG4gICAgLy8gQjU0ID0gQjUxICsgQjUyXG4gICAgY29uc3QgaHVzYmFuZExpdmluZ0Nvc3QgPVxuICAgICAgTnVtYmVyKGh1c2JhbmREZXRhaWxzLmx1bXBTdW0pICsgTnVtYmVyKGh1c2JhbmREZXRhaWxzLnJlYWxDb3N0KTtcblxuICAgIC8vIEM1NCA9IEM1MSArIEM1MlxuICAgIGNvbnN0IHdpZmVMaXZpbmdDb3N0ID1cbiAgICAgIE51bWJlcih3aWZlRGV0YWlscy5sdW1wU3VtKSArIE51bWJlcih3aWZlRGV0YWlscy5yZWFsQ29zdCk7XG5cbiAgICAvLyBCNTcgPSBCNDEgLSBCNTRcbiAgICBjb25zdCBodXNiYW5kUmVzaWR1YWxSZXNvdXJjZXMgPSBzdWJUb3RhbEh1c2JhbmQgLSBodXNiYW5kTGl2aW5nQ29zdDtcblxuICAgIC8vIEM1NyA9IEMzMiArIEMzOSAtIEM1NFxuICAgIGNvbnN0IHdpZmVSZXNpZHVhbFJlc291cmNlcyA9XG4gICAgICBOdW1iZXIod2lmZURldGFpbHMubmV0SW5jb21lKSArXG4gICAgICBOdW1iZXIod2lmZURldGFpbHMuZXh0cmFDaGlsZEJlbmVmaXRzKSAtXG4gICAgICB3aWZlTGl2aW5nQ29zdDtcblxuICAgIC8vIEI1OSA9IDEgLyAoIEI1NyArIEM1NyApICogQjU3XG4gICAgY29uc3QgaHVzYmFuZFNoYXJlSW5SZXNpZHVhbFJlc291cmNlcyA9XG4gICAgICAoMSAvIChodXNiYW5kUmVzaWR1YWxSZXNvdXJjZXMgKyB3aWZlUmVzaWR1YWxSZXNvdXJjZXMpKSAqXG4gICAgICBodXNiYW5kUmVzaWR1YWxSZXNvdXJjZXM7XG5cbiAgICAvLyBDNTkgPSAxIC8gKCBCNTcgKyBDNTcgKSAqIEM1N1xuICAgIGNvbnN0IHdpZmVTaGFyZUluUmVzaWR1YWxSZXNvdXJjZXMgPVxuICAgICAgKDEgLyAoaHVzYmFuZFJlc2lkdWFsUmVzb3VyY2VzICsgd2lmZVJlc2lkdWFsUmVzb3VyY2VzKSkgKlxuICAgICAgd2lmZVJlc2lkdWFsUmVzb3VyY2VzO1xuXG4gICAgLy8gQjc3ID0gU1VNKCBCNjcgOiBCNzUgKSArICggQjYzICogMTguNjQyODYgKVxuICAgIGNvbnN0IGh1c2JhbmRUb3RhbERheXMgPVxuICAgICAgTnVtYmVyKGh1c2JhbmREZXRhaWxzLnN1bW1lclZhY2F0aW9uKSArXG4gICAgICBOdW1iZXIoaHVzYmFuZERldGFpbHMuY2hyaXN0bWFzQnJlYWspICtcbiAgICAgIE51bWJlcihodXNiYW5kRGV0YWlscy5lYXN0ZXJIb2xpZGF5cykgK1xuICAgICAgTnVtYmVyKGh1c2JhbmREZXRhaWxzLmF1dHVtbkJyZWFrKSArXG4gICAgICBOdW1iZXIoaHVzYmFuZERldGFpbHMuc3ByaW5nQnJlYWspO1xuICAgIHNldEh1c2JhbmREZXRhaWxzKHsgLi4uaHVzYmFuZERldGFpbHMsIHRvdGFsRGF5czogaHVzYmFuZFRvdGFsRGF5cyB9KTtcblxuICAgIC8vIEM3NyA9IFNVTSggQzY3IDogQzc1ICkgKyAoIEM2MyAqIDE4LjY0Mjg2IClcbiAgICBjb25zdCB3aWZlVG90YWxEYXlzID1cbiAgICAgIE51bWJlcih3aWZlRGV0YWlscy5zdW1tZXJWYWNhdGlvbikgK1xuICAgICAgTnVtYmVyKHdpZmVEZXRhaWxzLmNocmlzdG1hc0JyZWFrKSArXG4gICAgICBOdW1iZXIod2lmZURldGFpbHMuZWFzdGVySG9saWRheXMpICtcbiAgICAgIE51bWJlcih3aWZlRGV0YWlscy5hdXR1bW5CcmVhaykgK1xuICAgICAgTnVtYmVyKHdpZmVEZXRhaWxzLnNwcmluZ0JyZWFrKTtcbiAgICBzZXRXaWZlRGV0YWlscyh7IC4uLndpZmVEZXRhaWxzLCB0b3RhbERheXM6IHdpZmVUb3RhbERheXMgfSk7XG5cbiAgICAvLyBCNzkgPSAxIC8gMzY1ICogQjc3XG4gICAgY29uc3QgaHVzYmFuZFBlcmNlbnRhZ2VPZkRheXMgPSAxIC8gMzY1ICogaHVzYmFuZFRvdGFsRGF5c1xuICAgIHNldEh1c2JhbmREZXRhaWxzKHsuLi5odXNiYW5kRGV0YWlscywgcGVyY2VudE9mRGF5czogaHVzYmFuZFBlcmNlbnRhZ2VPZkRheXN9KVxuXG4gICAgLy8gQzc5ID0gMSAvIDM2NSAqIEM3N1xuICAgIGNvbnN0IHdpZmVQZXJjZW50YWdlT2ZEYXlzID0gMSAvIDM2NSAqIHdpZmVUb3RhbERheXNcbiAgICBzZXRXaWZlRGV0YWlscyh7Li4ud2lmZURldGFpbHMsIHBlcmNlbnRPZkRheXM6IHdpZmVQZXJjZW50YWdlT2ZEYXlzfSlcblxuICAgIC8vIFxuXG4gIH07XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIG5hdmJhci1leHBhbmQtc20gYmctZGFyayBuYXZiYXItZGFyayBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxuICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmRcIiBocmVmPVwiLyNcIj5cbiAgICAgICAgICBSRU5BUkRcbiAgICAgICAgPC9hPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2YmFyLW5hdlwiPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgPGEgaHJlZj1cIi8jXCIgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5cbiAgICAgICAgICAgICAgQWJvdXQgVXNcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgPGEgaHJlZj1cIi8jXCIgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5cbiAgICAgICAgICAgICAgQ29udGFjdCBVc1xuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L25hdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXIgbXQtNVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC04XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGN1c3RvbUNhcmRfc3R5bGUgcC01IGJvcmRlci0wXCI+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiY2FyZC10aXRsZSB0ZXh0LWNlbnRlciBweS01XCI+SG9iaW4gQ2FsY3VsYXRpb248L2gyPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbXktM1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBhbGlnbi1zZWxmLWVuZFwiPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgPHN0cm9uZz5OYW1lOjwvc3Ryb25nPlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxzdHJvbmc+SHVzYmFuZDwvc3Ryb25nPlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17aHVzYmFuZERldGFpbHMubmFtZX1cbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJodXNiYW5kTmFtZVwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XG4gICAgICAgICAgICAgICAgICAgIHNldEh1c2JhbmREZXRhaWxzKHtcbiAgICAgICAgICAgICAgICAgICAgICAuLi5odXNiYW5kRGV0YWlscyxcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBlLnRhcmdldC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgPHN0cm9uZz5XaWZlPC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt3aWZlRGV0YWlscy5uYW1lfVxuICAgICAgICAgICAgICAgICAgbmFtZT1cIndpZmVOYW1lXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgc2V0V2lmZURldGFpbHMoeyAuLi53aWZlRGV0YWlscywgbmFtZTogZS50YXJnZXQudmFsdWUgfSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge2lucHV0TGlzdC5tYXAoKHZhbCwgaSkgPT4gKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYi0zXCIga2V5PXtpfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC01XCI+XG4gICAgICAgICAgICAgICAgICA8bGFiZWw+Q2hpbGQgTmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsLmNoaWxkTmFtZX1cbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNoaWxkTmFtZVwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25DaGFuZ2VDaGlsZHJlbkRhdGEoZSwgaSl9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTVcIj5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbD5DaGlsZCBBZ2U8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsLmNoaWxkQWdlfVxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY2hpbGRBZ2VcIlxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uQ2hhbmdlQ2hpbGRyZW5EYXRhKGUsIGkpfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0yIGFsaWduLXNlbGYtZW5kXCI+XG4gICAgICAgICAgICAgICAgICB7aSA9PT0gaW5wdXRMaXN0Lmxlbmd0aCAtIDEgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3MgbXItM1wiXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHNldElucHV0TGlzdChbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC4uLmlucHV0TGlzdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBjaGlsZE5hbWU6IFwiXCIsIGNoaWxkQWdlOiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICtcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICA8PjwvPlxuICAgICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgICAge2lucHV0TGlzdC5sZW5ndGggPiAxID8gKFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXJcIlxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJlbW92ZUNoaWxkKGkpfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgJnRpbWVzO1xuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgIDw+PC8+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPGhyIC8+XG4gICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibWItM1wiPlxuICAgICAgICAgICAgICA8c3Ryb25nPkluY29tZTo8L3N0cm9uZz5cbiAgICAgICAgICAgIDwvaDU+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYi0zXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIGFsaWduLXNlbGYtZW5kXCI+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICA8c3Ryb25nPk5ldCBJbmNvbWU6PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgPHN0cm9uZz5IdXNiYW5kPC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2h1c2JhbmREZXRhaWxzLm5ldEluY29tZX1cbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJodXNiYW5kTmV0SW5jb21lXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgc2V0SHVzYmFuZERldGFpbHMoe1xuICAgICAgICAgICAgICAgICAgICAgIC4uLmh1c2JhbmREZXRhaWxzLFxuICAgICAgICAgICAgICAgICAgICAgIG5ldEluY29tZTogZS50YXJnZXQudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxzdHJvbmc+V2lmZTwvc3Ryb25nPlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt3aWZlRGV0YWlscy5uZXRJbmNvbWV9XG4gICAgICAgICAgICAgICAgICBuYW1lPVwid2lmZU5ldEluY29tZVwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XG4gICAgICAgICAgICAgICAgICAgIHNldFdpZmVEZXRhaWxzKHtcbiAgICAgICAgICAgICAgICAgICAgICAuLi53aWZlRGV0YWlscyxcbiAgICAgICAgICAgICAgICAgICAgICBuZXRJbmNvbWU6IGUudGFyZ2V0LnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7LyogLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWItM1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBhbGlnbi1zZWxmLWVuZFwiPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgPHN0cm9uZz5NZWFsIFZvdWNoZXJzOjwvc3Ryb25nPlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2h1c2JhbmREZXRhaWxzLm1lYWxWb3VjaGVycyA/IHRydWUgOiBmYWxzZX1cbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJodXNiYW5kTWVhbFZvdWNoZXJcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxuICAgICAgICAgICAgICAgICAgICBzZXRIdXNiYW5kRGV0YWlscyhcbiAgICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC5jaGVja2VkXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHsgLi4uaHVzYmFuZERldGFpbHMsIG1lYWxWb3VjaGVyczogMTAwIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDogeyAuLi5odXNiYW5kRGV0YWlscywgbWVhbFZvdWNoZXJzOiBcIlwiIH1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt3aWZlRGV0YWlscy5tZWFsVm91Y2hlcnMgPyB0cnVlIDogZmFsc2V9XG4gICAgICAgICAgICAgICAgICBuYW1lPVwid2lmZU1lYWxWb3VjaGVyXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgc2V0V2lmZURldGFpbHMoXG4gICAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQuY2hlY2tlZFxuICAgICAgICAgICAgICAgICAgICAgICAgPyB7IC4uLndpZmVEZXRhaWxzLCBtZWFsVm91Y2hlcnM6IDEwMCB9XG4gICAgICAgICAgICAgICAgICAgICAgICA6IHsgLi4ud2lmZURldGFpbHMsIG1lYWxWb3VjaGVyczogXCJcIiB9XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWItM1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBhbGlnbi1zZWxmLWVuZFwiPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgPHN0cm9uZz5Db21wYW55IENhcnM6PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17aHVzYmFuZERldGFpbHMuY29tcGFueUNhciA/IHRydWUgOiBmYWxzZX1cbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJodXNiYW5kQ29tcGFueUNhclwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XG4gICAgICAgICAgICAgICAgICAgIHNldEh1c2JhbmREZXRhaWxzKFxuICAgICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LmNoZWNrZWRcbiAgICAgICAgICAgICAgICAgICAgICAgID8geyAuLi5odXNiYW5kRGV0YWlscywgY29tcGFueUNhcjogMzUwIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDogeyAuLi5odXNiYW5kRGV0YWlscywgY29tcGFueUNhcjogXCJcIiB9XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17d2lmZURldGFpbHMuY29tcGFueUNhciA/IHRydWUgOiBmYWxzZX1cbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJ3aWZlQ29tcGFueUNhclwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XG4gICAgICAgICAgICAgICAgICAgIHNldFdpZmVEZXRhaWxzKFxuICAgICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LmNoZWNrZWRcbiAgICAgICAgICAgICAgICAgICAgICAgID8geyAuLi53aWZlRGV0YWlscywgY29tcGFueUNhcjogMzUwIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDogeyAuLi53aWZlRGV0YWlscywgY29tcGFueUNhcjogXCJcIiB9XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWItM1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBhbGlnbi1zZWxmLWVuZFwiPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgPHN0cm9uZz5UYW5rIENhcmQ6PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17aHVzYmFuZERldGFpbHMudGFua0NhcmQgPyB0cnVlIDogZmFsc2V9XG4gICAgICAgICAgICAgICAgICBuYW1lPVwiaHVzYmFuZFRhbmtDYXJkXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgc2V0SHVzYmFuZERldGFpbHMoXG4gICAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQuY2hlY2tlZFxuICAgICAgICAgICAgICAgICAgICAgICAgPyB7IC4uLmh1c2JhbmREZXRhaWxzLCB0YW5rQ2FyZDogMTAwIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDogeyAuLi5odXNiYW5kRGV0YWlscywgdGFua0NhcmQ6IFwiXCIgfVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3dpZmVEZXRhaWxzLnRhbmtDYXJkID8gdHJ1ZSA6IGZhbHNlfVxuICAgICAgICAgICAgICAgICAgbmFtZT1cIndpZmVUYW5rQ2FyZFwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XG4gICAgICAgICAgICAgICAgICAgIHNldFdpZmVEZXRhaWxzKFxuICAgICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LmNoZWNrZWRcbiAgICAgICAgICAgICAgICAgICAgICAgID8geyAuLi53aWZlRGV0YWlscywgdGFua0NhcmQ6IDEwMCB9XG4gICAgICAgICAgICAgICAgICAgICAgICA6IHsgLi4ud2lmZURldGFpbHMsIHRhbmtDYXJkOiBcIlwiIH1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYi0zXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIGFsaWduLXNlbGYtZW5kXCI+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICA8c3Ryb25nPkNoaWxkIEJlbmVmaXRzOjwvc3Ryb25nPlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17aHVzYmFuZERldGFpbHMuY2hpbGRCZW5lZml0c31cbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJodXNiYW5kQ2hpbGRCZW5lZml0c1wiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XG4gICAgICAgICAgICAgICAgICAgIHNldEh1c2JhbmREZXRhaWxzKHtcbiAgICAgICAgICAgICAgICAgICAgICAuLi5odXNiYW5kRGV0YWlscyxcbiAgICAgICAgICAgICAgICAgICAgICBjaGlsZEJlbmVmaXRzOiBlLnRhcmdldC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt3aWZlRGV0YWlscy5jaGlsZEJlbmVmaXRzfVxuICAgICAgICAgICAgICAgICAgbmFtZT1cIndpZmVDaGlsZEJlbmVmaXRzXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgc2V0V2lmZURldGFpbHMoe1xuICAgICAgICAgICAgICAgICAgICAgIC4uLndpZmVEZXRhaWxzLFxuICAgICAgICAgICAgICAgICAgICAgIGNoaWxkQmVuZWZpdHM6IGUudGFyZ2V0LnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYi0zXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIGFsaWduLXNlbGYtZW5kXCI+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICA8c3Ryb25nPkV4dHJhIENoaWxkIEJlbmVmaXRzOjwvc3Ryb25nPlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17aHVzYmFuZERldGFpbHMuZXh0cmFDaGlsZEJlbmVmaXRzfVxuICAgICAgICAgICAgICAgICAgbmFtZT1cImh1c2JhbmRFeHRyYUNoaWxkQmVuZWZpdHNcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxuICAgICAgICAgICAgICAgICAgICBzZXRIdXNiYW5kRGV0YWlscyh7XG4gICAgICAgICAgICAgICAgICAgICAgLi4uaHVzYmFuZERldGFpbHMsXG4gICAgICAgICAgICAgICAgICAgICAgZXh0cmFDaGlsZEJlbmVmaXRzOiBlLnRhcmdldC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt3aWZlRGV0YWlscy5leHRyYUNoaWxkQmVuZWZpdHN9XG4gICAgICAgICAgICAgICAgICBuYW1lPVwid2lmZUV4dHJhQ2hpbGRCZW5lZml0c1wiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XG4gICAgICAgICAgICAgICAgICAgIHNldFdpZmVEZXRhaWxzKHtcbiAgICAgICAgICAgICAgICAgICAgICAuLi53aWZlRGV0YWlscyxcbiAgICAgICAgICAgICAgICAgICAgICBleHRyYUNoaWxkQmVuZWZpdHM6IGUudGFyZ2V0LnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8aHIgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1iLTNcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgYWxpZ24tc2VsZi1lbmRcIj5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgIDxzdHJvbmc+TGl2aW5nIG9uIENvc3Qtc2hhcmluZyBCYXNpczo8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIFllc1xuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWwtM1wiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9XCJZZXNcIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cImxpdmVJbkNvc3RTaGFyaW5nXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUxpdmVJbkNvc3RTaGFyaW5nfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIE5vXG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtbC0zXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT1cIk5vXCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJsaXZlSW5Db3N0U2hhcmluZ1wiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VMaXZlSW5Db3N0U2hhcmluZ31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWItM1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBhbGlnbi1zZWxmLWVuZFwiPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgPHN0cm9uZz5TcGVjaWFsIENpcmN1bXN0YW5jZXMgTSBvZiBWOjwvc3Ryb25nPlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgWWVzXG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtbC0zXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT1cIlllc1wiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwic3BlY2lhbENpcmN1bXN0YW5jZXNcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlU3BlY2lhbENpcmN1bXN0YW5jZXN9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgTm9cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1sLTNcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPVwiTm9cIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cInNwZWNpYWxDaXJjdW1zdGFuY2VzXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZVNwZWNpYWxDaXJjdW1zdGFuY2VzfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8aHIgLz5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWItM1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBhbGlnbi1zZWxmLWVuZFwiPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgPHN0cm9uZz5MdW1wIFN1bTo8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICA8c3Ryb25nPkh1c2JhbmQ8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICByZWFkT25seVxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2h1c2JhbmREZXRhaWxzLmx1bXBTdW19XG4gICAgICAgICAgICAgICAgICBuYW1lPVwiaHVzYmFuZEx1bXBzdW1cIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICA8c3Ryb25nPldpZmU8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICByZWFkT25seVxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3dpZmVEZXRhaWxzLmx1bXBTdW19XG4gICAgICAgICAgICAgICAgICBuYW1lPVwid2lmZUx1bXBzdW1cIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYi0zXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIGFsaWduLXNlbGYtZW5kXCI+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICA8c3Ryb25nPlJlYWwgQ29zdDo8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgcmVhZE9ubHk9e3NwZWNpYWxDaXJjdW1zdGFuY2VzID09PSBcIlllc1wiID8gZmFsc2UgOiB0cnVlfVxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2h1c2JhbmREZXRhaWxzLnJlYWxDb3N0fVxuICAgICAgICAgICAgICAgICAgbmFtZT1cImh1c2JhbmRMdW1wc3VtXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgc2V0SHVzYmFuZERldGFpbHMoe1xuICAgICAgICAgICAgICAgICAgICAgIC4uLmh1c2JhbmREZXRhaWxzLFxuICAgICAgICAgICAgICAgICAgICAgIHJlYWxDb3N0OiBlLnRhcmdldC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgIHJlYWRPbmx5PXtzcGVjaWFsQ2lyY3Vtc3RhbmNlcyA9PT0gXCJZZXNcIiA/IGZhbHNlIDogdHJ1ZX1cbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt3aWZlRGV0YWlscy5yZWFsQ29zdH1cbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJ3aWZlTHVtcHN1bVwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XG4gICAgICAgICAgICAgICAgICAgIHNldFdpZmVEZXRhaWxzKHsgLi4ud2lmZURldGFpbHMsIHJlYWxDb3N0OiBlLnRhcmdldC52YWx1ZSB9KVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYi0zXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIGFsaWduLXNlbGYtZW5kXCI+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICA8c3Ryb25nPkxpdmluZyBDb3N0Ojwvc3Ryb25nPlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICB7TnVtYmVyKGh1c2JhbmREZXRhaWxzLmx1bXBTdW0pICtcbiAgICAgICAgICAgICAgICAgICAgTnVtYmVyKGh1c2JhbmREZXRhaWxzLnJlYWxDb3N0KX1cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAge051bWJlcih3aWZlRGV0YWlscy5sdW1wU3VtKSArIE51bWJlcih3aWZlRGV0YWlscy5yZWFsQ29zdCl9XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGhyIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYi0zXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgPHN0cm9uZz5Ib2xpZGF5IEFycmFnZW1lbnQgPSBTY2hvb2wgeWVhciA/PC9zdHJvbmc+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIFllc1xuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWwtM1wiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9XCJZZXNcIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cImhvbGlkYXlBcnJhbmdlbWVudElzU2Nob29sWWVhclwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VIb2xpZGF5QXJySXNTY2hvb2x9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgTm9cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1sLTNcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPVwiTm9cIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cImhvbGlkYXlBcnJhbmdlbWVudElzU2Nob29sWWVhclwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gc2V0aG9saWRheUFycmFuZ2VtZW50SXNTY2hvb2xZZWFyKGZhbHNlKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWItM1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgPHN0cm9uZz5TY2hvb2wgWWVhcjo8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgcmVhZE9ubHk9e2hvbGlkYXlBcnJhbmdlbWVudElzU2Nob29sWWVhciA/IHRydWUgOiBmYWxzZX1cbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtodXNiYW5kRGV0YWlscy5zY2hvb2xZZWFyfVxuICAgICAgICAgICAgICAgICAgbmFtZT1cInNjaG9vbFllYXJcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxuICAgICAgICAgICAgICAgICAgICBzZXRIdXNiYW5kRGV0YWlscyh7XG4gICAgICAgICAgICAgICAgICAgICAgLi4uaHVzYmFuZERldGFpbHMsXG4gICAgICAgICAgICAgICAgICAgICAgc2Nob29sWWVhcjogZS50YXJnZXQudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICByZWFkT25seT17aG9saWRheUFycmFuZ2VtZW50SXNTY2hvb2xZZWFyID8gdHJ1ZSA6IGZhbHNlfVxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3dpZmVEZXRhaWxzLnNjaG9vbFllYXJ9XG4gICAgICAgICAgICAgICAgICBuYW1lPVwic2Nob29sWWVhclwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XG4gICAgICAgICAgICAgICAgICAgIHNldFdpZmVEZXRhaWxzKHtcbiAgICAgICAgICAgICAgICAgICAgICAuLi53aWZlRGV0YWlscyxcbiAgICAgICAgICAgICAgICAgICAgICBzY2hvb2xZZWFyOiBlLnRhcmdldC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWItM1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgPHN0cm9uZz5TdW1tZXIgVmFjYXRpb246PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgIHJlYWRPbmx5PXtob2xpZGF5QXJyYW5nZW1lbnRJc1NjaG9vbFllYXIgPyB0cnVlIDogZmFsc2V9XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17aHVzYmFuZERldGFpbHMuc3VtbWVyVmFjYXRpb259XG4gICAgICAgICAgICAgICAgICBuYW1lPVwic2Nob29sWWVhclwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XG4gICAgICAgICAgICAgICAgICAgIHNldEh1c2JhbmREZXRhaWxzKHtcbiAgICAgICAgICAgICAgICAgICAgICAuLi5odXNiYW5kRGV0YWlscyxcbiAgICAgICAgICAgICAgICAgICAgICBzdW1tZXJWYWNhdGlvbjogZS50YXJnZXQudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICByZWFkT25seT17aG9saWRheUFycmFuZ2VtZW50SXNTY2hvb2xZZWFyID8gdHJ1ZSA6IGZhbHNlfVxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3dpZmVEZXRhaWxzLnN1bW1lclZhY2F0aW9ufVxuICAgICAgICAgICAgICAgICAgbmFtZT1cInNjaG9vbFllYXJcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxuICAgICAgICAgICAgICAgICAgICBzZXRXaWZlRGV0YWlscyh7XG4gICAgICAgICAgICAgICAgICAgICAgLi4ud2lmZURldGFpbHMsXG4gICAgICAgICAgICAgICAgICAgICAgc3VtbWVyVmFjYXRpb246IGUudGFyZ2V0LnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYi0zXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICA8c3Ryb25nPkNocmlzdG1hcyBCcmVhazo8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgcmVhZE9ubHk9e2hvbGlkYXlBcnJhbmdlbWVudElzU2Nob29sWWVhciA/IHRydWUgOiBmYWxzZX1cbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtodXNiYW5kRGV0YWlscy5jaHJpc3RtYXNCcmVha31cbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJzY2hvb2xZZWFyXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgc2V0SHVzYmFuZERldGFpbHMoe1xuICAgICAgICAgICAgICAgICAgICAgIC4uLmh1c2JhbmREZXRhaWxzLFxuICAgICAgICAgICAgICAgICAgICAgIGNocmlzdG1hc0JyZWFrOiBlLnRhcmdldC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgIHJlYWRPbmx5PXtob2xpZGF5QXJyYW5nZW1lbnRJc1NjaG9vbFllYXIgPyB0cnVlIDogZmFsc2V9XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17d2lmZURldGFpbHMuY2hyaXN0bWFzQnJlYWt9XG4gICAgICAgICAgICAgICAgICBuYW1lPVwic2Nob29sWWVhclwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XG4gICAgICAgICAgICAgICAgICAgIHNldFdpZmVEZXRhaWxzKHtcbiAgICAgICAgICAgICAgICAgICAgICAuLi53aWZlRGV0YWlscyxcbiAgICAgICAgICAgICAgICAgICAgICBjaHJpc3RtYXNCcmVhazogZS50YXJnZXQudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1iLTNcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgIDxzdHJvbmc+RWFzdGVyIEhvbGlkYXlzOjwvc3Ryb25nPlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICByZWFkT25seT17aG9saWRheUFycmFuZ2VtZW50SXNTY2hvb2xZZWFyID8gdHJ1ZSA6IGZhbHNlfVxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2h1c2JhbmREZXRhaWxzLmVhc3RlckhvbGlkYXlzfVxuICAgICAgICAgICAgICAgICAgbmFtZT1cInNjaG9vbFllYXJcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxuICAgICAgICAgICAgICAgICAgICBzZXRIdXNiYW5kRGV0YWlscyh7XG4gICAgICAgICAgICAgICAgICAgICAgLi4uaHVzYmFuZERldGFpbHMsXG4gICAgICAgICAgICAgICAgICAgICAgZWFzdGVySG9saWRheXM6IGUudGFyZ2V0LnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgcmVhZE9ubHk9e2hvbGlkYXlBcnJhbmdlbWVudElzU2Nob29sWWVhciA/IHRydWUgOiBmYWxzZX1cbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt3aWZlRGV0YWlscy5lYXN0ZXJIb2xpZGF5c31cbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJzY2hvb2xZZWFyXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgc2V0V2lmZURldGFpbHMoe1xuICAgICAgICAgICAgICAgICAgICAgIC4uLndpZmVEZXRhaWxzLFxuICAgICAgICAgICAgICAgICAgICAgIGVhc3RlckhvbGlkYXlzOiBlLnRhcmdldC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWItM1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgPHN0cm9uZz5BdXR1bW4gQnJlYWs6PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgIHJlYWRPbmx5PXtob2xpZGF5QXJyYW5nZW1lbnRJc1NjaG9vbFllYXIgPyB0cnVlIDogZmFsc2V9XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17aHVzYmFuZERldGFpbHMuYXV0dW1uQnJlYWt9XG4gICAgICAgICAgICAgICAgICBuYW1lPVwic2Nob29sWWVhclwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XG4gICAgICAgICAgICAgICAgICAgIHNldEh1c2JhbmREZXRhaWxzKHtcbiAgICAgICAgICAgICAgICAgICAgICAuLi5odXNiYW5kRGV0YWlscyxcbiAgICAgICAgICAgICAgICAgICAgICBhdXR1bW5CcmVhazogZS50YXJnZXQudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICByZWFkT25seT17aG9saWRheUFycmFuZ2VtZW50SXNTY2hvb2xZZWFyID8gdHJ1ZSA6IGZhbHNlfVxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3dpZmVEZXRhaWxzLmF1dHVtbkJyZWFrfVxuICAgICAgICAgICAgICAgICAgbmFtZT1cInNjaG9vbFllYXJcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxuICAgICAgICAgICAgICAgICAgICBzZXRXaWZlRGV0YWlscyh7XG4gICAgICAgICAgICAgICAgICAgICAgLi4ud2lmZURldGFpbHMsXG4gICAgICAgICAgICAgICAgICAgICAgYXV0dW1uQnJlYWs6IGUudGFyZ2V0LnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYi0zXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICA8c3Ryb25nPlNwcmluZyBCcmVhazo8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgcmVhZE9ubHk9e2hvbGlkYXlBcnJhbmdlbWVudElzU2Nob29sWWVhciA/IHRydWUgOiBmYWxzZX1cbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtodXNiYW5kRGV0YWlscy5zcHJpbmdCcmVha31cbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJzY2hvb2xZZWFyXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgc2V0SHVzYmFuZERldGFpbHMoe1xuICAgICAgICAgICAgICAgICAgICAgIC4uLmh1c2JhbmREZXRhaWxzLFxuICAgICAgICAgICAgICAgICAgICAgIHNwcmluZ0JyZWFrOiBlLnRhcmdldC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgIHJlYWRPbmx5PXtob2xpZGF5QXJyYW5nZW1lbnRJc1NjaG9vbFllYXIgPyB0cnVlIDogZmFsc2V9XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17d2lmZURldGFpbHMuc3ByaW5nQnJlYWt9XG4gICAgICAgICAgICAgICAgICBuYW1lPVwic2Nob29sWWVhclwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XG4gICAgICAgICAgICAgICAgICAgIHNldFdpZmVEZXRhaWxzKHtcbiAgICAgICAgICAgICAgICAgICAgICAuLi53aWZlRGV0YWlscyxcbiAgICAgICAgICAgICAgICAgICAgICBzcHJpbmdCcmVhazogZS50YXJnZXQudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1iLTNcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgIDxzdHJvbmc+VG90YWwgbnVtYmVyIG9mIGRheXM6PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgIDxzdHJvbmc+e2h1c2JhbmREZXRhaWxzLnRvdGFsRGF5c308L3N0cm9uZz5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgPHN0cm9uZz57d2lmZURldGFpbHMudG90YWxEYXlzfTwvc3Ryb25nPlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1iLTNcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgIDxzdHJvbmc+UGVyY2VudGFnZTo8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgPHN0cm9uZz57aHVzYmFuZERldGFpbHMucGVyY2VudE9mRGF5c308L3N0cm9uZz5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgPHN0cm9uZz57d2lmZURldGFpbHMucGVyY2VudE9mRGF5c308L3N0cm9uZz5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8aHIvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWItM1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICAgIDxzdHJvbmc+U2VwZXJhdGUgc2V0dGxlbWVudCBmb3IgY2hpbGQ6IDwvc3Ryb25nPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICBZZXNcbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1sLTNcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPVwiWWVzXCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJzZXBlcmF0ZVNldHRsZW1lbnRDaGlsZFwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCk9PnNldFNlcGVyYXRlU2V0dGxlbWVudENoaWxkKHRydWUpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIE5vXG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtbC0zXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT1cIk5vXCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJzZXBlcmF0ZVNldHRsZW1lbnRDaGlsZFwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gc2V0U2VwZXJhdGVTZXR0bGVtZW50Q2hpbGQoZmFsc2UpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXByaW1hcnlcIiBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgICBDYWxjdWxhdGVcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==