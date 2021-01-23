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
    crossNationalCosts: 0,
    totalContri: "",
    contriDebtor: 0,
    totalContriInKind: ""
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
    crossNationalCosts: 0,
    totalContri: "",
    contriDebtor: 0,
    totalContriInKind: ""
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
      setWifeFinalAmt = _useState9[1]; // HANDLE INPUT FIELD OF CHILDRENS'


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

  var onChangeSeperateSettlementChild = function onChangeSeperateSettlementChild(state) {
    setSeperateSettlementChild(state);

    if (state === true) {
      setHusbandDetails(_objectSpread(_objectSpread({}, husbandDetails), {}, {
        contriDebtor: 0
      }));
      setWifeDetails(_objectSpread(_objectSpread({}, wifeDetails), {}, {
        contriDebtor: 0
      }));
    }
  };

  var onClickCalCulateCrossNationalCosts = function onClickCalCulateCrossNationalCosts() {
    if (husbandDetails.contriDebtor > 0) {
      setHusbandDetails(_objectSpread(_objectSpread({}, husbandDetails), {}, {
        crossNationalCosts: husbandDetails.contriDebtor
      }));
    }

    if (husbandDetails.contriDebtor === 0) {
      setHusbandDetails(_objectSpread(_objectSpread({}, husbandDetails), {}, {
        crossNationalCosts: 100 - Number(wifeDetails.contriDebtor) / 100
      }));
    }

    if (wifeDetails.contriDebtor > 0) {
      setWifeDetails(_objectSpread(_objectSpread({}, wifeDetails), {}, {
        crossNationalCosts: wifeDetails.contriDebtor
      }));
    }

    if (wifeDetails.contriDebtor === 0) {
      setWifeDetails(_objectSpread(_objectSpread({}, wifeDetails), {}, {
        crossNationalCosts: 1 - Number(husbandDetails.contriDebtor) / 100
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
    var husbandContriDebtor = Number(husbandDetails.contriDebtor) / 100;
    var wifeContriDebtor = Number(wifeDetails.contriDebtor) / 100; // B41 = B32 + B33 + B34 + B35

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
    }));
    var husbandCrossNationalCost;
    var wifeCrossNationalCost;

    if (husbandContriDebtor > 0) {
      husbandCrossNationalCost = husbandContriDebtor;
    }

    if (husbandContriDebtor === 0) {
      husbandCrossNationalCost = 100 - wifeContriDebtor;
    }

    if (wifeContriDebtor > 0) {
      wifeCrossNationalCost = wifeContriDebtor;
    }

    if (wifeContriDebtor === 0) {
      wifeCrossNationalCost = 1 - husbandContriDebtor;
    } // B93 = (B89 + B91)/2


    var husbandTotalContriInKind = (husbandContriDebtor + husbandCrossNationalCost) / 2;
    setHusbandDetails(_objectSpread(_objectSpread({}, husbandDetails), {}, {
      totalContriInKind: husbandTotalContriInKind
    })); // C93 = (C89 + C91)/2

    var wifeTotalContriInKind = (wifeContriDebtor + wifeCrossNationalCost) / 2;
    setWifeDetails(_objectSpread(_objectSpread({}, wifeDetails), {}, {
      totalContriInKind: wifeTotalContriInKind
    }));
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
        lineNumber: 296,
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
            lineNumber: 301,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 300,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          className: "nav-item",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "/#",
            className: "nav-link",
            children: "Contact Us"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 306,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 305,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 299,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 295,
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
            lineNumber: 315,
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
                  lineNumber: 319,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 318,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 317,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "text-center",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                  children: "Husband"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 324,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 323,
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
                lineNumber: 326,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 322,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "text-center",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                  children: "Wife"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 341,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 340,
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
                lineNumber: 343,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 339,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 316,
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
                  lineNumber: 357,
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
                  lineNumber: 358,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 356,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "col-md-5",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                  children: "Child Age"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 367,
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
                  lineNumber: 368,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 366,
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
                  lineNumber: 378,
                  columnNumber: 21
                }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false), inputList.length > 1 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                  className: "btn btn-danger",
                  onClick: function onClick() {
                    return removeChild(i);
                  },
                  children: "\xD7"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 394,
                  columnNumber: 21
                }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 376,
                columnNumber: 17
              }, _this)]
            }, i, true, {
              fileName: _jsxFileName,
              lineNumber: 355,
              columnNumber: 15
            }, _this);
          }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 406,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
            className: "mb-3",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
              children: "Income:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 408,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 407,
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
                  lineNumber: 413,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 412,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 411,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "text-center",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                  children: "Husband"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 418,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 417,
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
                lineNumber: 420,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 416,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "text-center",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                  children: "Wife"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 435,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 434,
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
                lineNumber: 437,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 433,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 410,
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
                  lineNumber: 455,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 454,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 453,
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
                lineNumber: 459,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 458,
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
                lineNumber: 473,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 472,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 452,
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
                  lineNumber: 490,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 489,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 488,
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
                lineNumber: 494,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 493,
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
                lineNumber: 508,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 507,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 487,
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
                  lineNumber: 525,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 524,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 523,
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
                lineNumber: 529,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 528,
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
                lineNumber: 543,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 542,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 522,
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
                  lineNumber: 560,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 559,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 558,
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
                lineNumber: 564,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 563,
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
                lineNumber: 578,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 577,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 557,
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
                  lineNumber: 595,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 594,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 593,
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
                lineNumber: 599,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 598,
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
                lineNumber: 613,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 612,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 592,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 627,
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
                  lineNumber: 631,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 630,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 629,
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
                lineNumber: 636,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 634,
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
                lineNumber: 646,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 644,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 628,
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
                  lineNumber: 658,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 657,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 656,
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
                lineNumber: 663,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 661,
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
                lineNumber: 673,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 671,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 655,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 682,
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
                  lineNumber: 687,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 686,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 685,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "text-center",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                  children: "Husband"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 692,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 691,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                className: "form-control",
                type: "number",
                readOnly: true,
                value: husbandDetails.lumpSum,
                name: "husbandLumpsum"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 694,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 690,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "text-center",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                  children: "Wife"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 704,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 703,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                className: "form-control",
                type: "number",
                readOnly: true,
                value: wifeDetails.lumpSum,
                name: "wifeLumpsum"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 706,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 702,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 684,
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
                  lineNumber: 718,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 717,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 716,
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
                lineNumber: 722,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 721,
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
                lineNumber: 737,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 736,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 715,
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
                  lineNumber: 752,
                  columnNumber: 19
                }, this)
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
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: Number(husbandDetails.lumpSum) + Number(husbandDetails.realCost)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 756,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 755,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: Number(wifeDetails.lumpSum) + Number(wifeDetails.realCost)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 762,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 761,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 749,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 767,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "row mb-3",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                children: "Holiday Arragement = School year ?"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 770,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 769,
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
                lineNumber: 774,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 772,
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
                lineNumber: 784,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 782,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 768,
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
                  lineNumber: 796,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 795,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 794,
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
                lineNumber: 800,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 799,
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
                lineNumber: 815,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 814,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 793,
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
                  lineNumber: 833,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 832,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 831,
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
                lineNumber: 837,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 836,
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
                lineNumber: 852,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 851,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 830,
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
                  lineNumber: 870,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 869,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 868,
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
                lineNumber: 874,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 873,
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
                lineNumber: 889,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 888,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 867,
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
                  lineNumber: 907,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 906,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 905,
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
                lineNumber: 911,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 910,
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
                lineNumber: 926,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 925,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 904,
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
                  lineNumber: 944,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 943,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 942,
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
                lineNumber: 948,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 947,
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
                lineNumber: 963,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 962,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 941,
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
                  lineNumber: 981,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 980,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 979,
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
                lineNumber: 985,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 984,
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
                lineNumber: 1000,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 999,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 978,
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
                  lineNumber: 1018,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1017,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 1016,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                  children: husbandDetails.totalDays
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1023,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1022,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 1021,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                  children: wifeDetails.totalDays
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1028,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1027,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 1026,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 1015,
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
                  lineNumber: 1035,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1034,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 1033,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                  children: husbandDetails.percentOfDays
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1040,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1039,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 1038,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                  children: wifeDetails.percentOfDays
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1045,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1044,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 1043,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 1032,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 1049,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "row mb-3",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                children: "Seperate settlement for child: "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1052,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 1051,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col text-center",
              children: ["Yes", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                className: "ml-3",
                type: "radio",
                value: "Yes",
                name: "seperateSettlementChild",
                onChange: function onChange() {
                  return onChangeSeperateSettlementChild(true);
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1056,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 1054,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col text-center",
              children: ["No", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                className: "ml-3",
                type: "radio",
                value: "No",
                defaultChecked: true,
                name: "seperateSettlementChild",
                onChange: function onChange() {
                  return onChangeSeperateSettlementChild(false);
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1066,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 1064,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 1050,
            columnNumber: 13
          }, this), seperateSettlementChild && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "row mb-5",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                  children: "Contribution By Debtor(%)"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1080,
                  columnNumber: 21
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1079,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 1078,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                className: "form-control",
                type: "number",
                value: husbandDetails.contriDebtor,
                name: "contriDebtor",
                onChange: function onChange(e) {
                  return setHusbandDetails(_objectSpread(_objectSpread({}, husbandDetails), {}, {
                    contriDebtor: e.target.value
                  }));
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1084,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 1083,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                className: "form-control",
                type: "number",
                value: wifeDetails.contriDebtor,
                name: "contriDebtor",
                onChange: function onChange(e) {
                  return setWifeDetails(_objectSpread(_objectSpread({}, wifeDetails), {}, {
                    contriDebtor: e.target.value
                  }));
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1098,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 1097,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 1077,
            columnNumber: 15
          }, this), seperateSettlementChild && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "row mb-5",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                  children: "Cross-National Cost(%)"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1117,
                  columnNumber: 21
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1116,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 1115,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                className: "form-control",
                type: "number",
                value: husbandDetails.crossNationalCosts,
                readOnly: true,
                name: "crossNationalCosts"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1121,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 1120,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                className: "form-control",
                type: "number",
                value: wifeDetails.crossNationalCosts,
                readOnly: true,
                name: "crossNationalCosts"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1130,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 1129,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: "btn btn-primary",
                onClick: onClickCalCulateCrossNationalCosts,
                children: "Re-calculate"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1139,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 1138,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 1114,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "row mb-5",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                  children: "Total Contribution in kind:"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1151,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1150,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 1149,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col",
              children: husbandDetails.totalContriInKind
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 1154,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col",
              children: wifeDetails.totalContriInKind
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 1155,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 1148,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            className: "btn btn-outline-primary",
            onClick: handleSubmit,
            children: "Calculate"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 1157,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 314,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 313,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 312,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s(Home, "AgEPM2DkBckIkiBu46BNMgpJ3oI=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInVzZVN0YXRlIiwibmFtZSIsIm5ldEluY29tZSIsImNoaWxkQmVuZWZpdHMiLCJleHRyYUNoaWxkQmVuZWZpdHMiLCJ0b3RhbEluY29tZSIsIm1lYWxWb3VjaGVycyIsImNvbXBhbnlDYXIiLCJ0YW5rQ2FyZCIsImx1bXBTdW0iLCJyZWFsQ29zdCIsInNjaG9vbFllYXIiLCJzdW1tZXJWYWNhdGlvbiIsImNocmlzdG1hc0JyZWFrIiwiZWFzdGVySG9saWRheXMiLCJhdXR1bW5CcmVhayIsInNwcmluZ0JyZWFrIiwidG90YWxEYXlzIiwicGVyY2VudE9mRGF5cyIsImNyb3NzTmF0aW9uYWxDb3N0cyIsInRvdGFsQ29udHJpIiwiY29udHJpRGVidG9yIiwidG90YWxDb250cmlJbktpbmQiLCJodXNiYW5kRGV0YWlscyIsInNldEh1c2JhbmREZXRhaWxzIiwid2lmZURldGFpbHMiLCJzZXRXaWZlRGV0YWlscyIsImhvbGlkYXlBcnJhbmdlbWVudElzU2Nob29sWWVhciIsInNldGhvbGlkYXlBcnJhbmdlbWVudElzU2Nob29sWWVhciIsImxpdmVJbkNvc3RTaGFyaW5nIiwic2V0TGl2ZUluQ29zdFNoYXJpbmciLCJzcGVjaWFsQ2lyY3Vtc3RhbmNlcyIsInNldFNwZWNpYWxDaXJjdW1zdGFuY2VzIiwic2VwZXJhdGVTZXR0bGVtZW50Q2hpbGQiLCJzZXRTZXBlcmF0ZVNldHRsZW1lbnRDaGlsZCIsImNoaWxkTmFtZSIsImNoaWxkQWdlIiwiaW5wdXRMaXN0Iiwic2V0SW5wdXRMaXN0IiwiY29udHJpXzEiLCJjb250cmlfMiIsImh1c2JhbmRGaW5hbEFtdCIsInNldEh1c2JhbmRGaW5hbEFtdCIsIndpZmVGaW5hbEFtdCIsInNldFdpZmVGaW5hbEFtdCIsIm9uQ2hhbmdlQ2hpbGRyZW5EYXRhIiwiZSIsImluZGV4IiwidGFyZ2V0IiwidmFsdWUiLCJjaGlsZHJlbkxpc3QiLCJyZW1vdmVDaGlsZCIsInNwbGljZSIsIm9uQ2hhbmdlTGl2ZUluQ29zdFNoYXJpbmciLCJvbkNoYW5nZVNwZWNpYWxDaXJjdW1zdGFuY2VzIiwib25DaGFuZ2VTZXBlcmF0ZVNldHRsZW1lbnRDaGlsZCIsInN0YXRlIiwib25DbGlja0NhbEN1bGF0ZUNyb3NzTmF0aW9uYWxDb3N0cyIsIk51bWJlciIsIm9uQ2hhbmdlSG9saWRheUFycklzU2Nob29sIiwiaGFuZGxlU3VibWl0IiwiaHVzYmFuZENvbnRyaURlYnRvciIsIndpZmVDb250cmlEZWJ0b3IiLCJzdWJUb3RhbEh1c2JhbmQiLCJzdWJUb3RhbFdpZmUiLCJ0b3RhbCIsInRvdGFsQ2hpbGRCZW5lZml0cyIsImh1c2JhbmRFYXJuaW5nUGVyY2VudCIsIndpZmVFYXJuaW5nUGVyY2VudCIsImh1c2JhbmRMaXZpbmdDb3N0Iiwid2lmZUxpdmluZ0Nvc3QiLCJodXNiYW5kUmVzaWR1YWxSZXNvdXJjZXMiLCJ3aWZlUmVzaWR1YWxSZXNvdXJjZXMiLCJodXNiYW5kU2hhcmVJblJlc2lkdWFsUmVzb3VyY2VzIiwid2lmZVNoYXJlSW5SZXNpZHVhbFJlc291cmNlcyIsImh1c2JhbmRUb3RhbERheXMiLCJ3aWZlVG90YWxEYXlzIiwiaHVzYmFuZFBlcmNlbnRhZ2VPZkRheXMiLCJ3aWZlUGVyY2VudGFnZU9mRGF5cyIsImh1c2JhbmRDcm9zc05hdGlvbmFsQ29zdCIsIndpZmVDcm9zc05hdGlvbmFsQ29zdCIsImh1c2JhbmRUb3RhbENvbnRyaUluS2luZCIsIndpZmVUb3RhbENvbnRyaUluS2luZCIsIm1hcCIsInZhbCIsImkiLCJsZW5ndGgiLCJjaGVja2VkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVlLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFBQTs7QUFBQSxrQkFDZUMsc0RBQVEsQ0FBQztBQUNuREMsUUFBSSxFQUFFLEVBRDZDO0FBRW5EQyxhQUFTLEVBQUUsRUFGd0M7QUFHbkRDLGlCQUFh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QTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWxCRjtBQUFBLGtCQURGO0FBdzJCRDs7R0Exb0N1QjdELEk7O0tBQUFBLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOTQ3MDJmYTQ1NGE3ODc1MzE0NmYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2h1c2JhbmREZXRhaWxzLCBzZXRIdXNiYW5kRGV0YWlsc10gPSB1c2VTdGF0ZSh7XG4gICAgbmFtZTogXCJcIixcbiAgICBuZXRJbmNvbWU6IFwiXCIsXG4gICAgY2hpbGRCZW5lZml0czogXCJcIixcbiAgICBleHRyYUNoaWxkQmVuZWZpdHM6IFwiXCIsXG4gICAgdG90YWxJbmNvbWU6IFwiXCIsXG4gICAgbWVhbFZvdWNoZXJzOiBcIlwiLFxuICAgIGNvbXBhbnlDYXI6IFwiXCIsXG4gICAgdGFua0NhcmQ6IFwiXCIsXG4gICAgbHVtcFN1bTogXCJcIixcbiAgICByZWFsQ29zdDogXCJcIixcbiAgICBzY2hvb2xZZWFyOiA3LjcsXG4gICAgc3VtbWVyVmFjYXRpb246IDMxLjMxLFxuICAgIGNocmlzdG1hc0JyZWFrOiA3LjcsXG4gICAgZWFzdGVySG9saWRheXM6IDcuNyxcbiAgICBhdXR1bW5CcmVhazogNy4wLFxuICAgIHNwcmluZ0JyZWFrOiAwLjcsXG4gICAgdG90YWxEYXlzOiBcIlwiLFxuICAgIHBlcmNlbnRPZkRheXM6IFwiXCIsXG4gICAgY3Jvc3NOYXRpb25hbENvc3RzOiAwLFxuICAgIHRvdGFsQ29udHJpOiBcIlwiLFxuICAgIGNvbnRyaURlYnRvcjogMCxcbiAgICB0b3RhbENvbnRyaUluS2luZDogXCJcIixcbiAgfSk7XG4gIGNvbnN0IFt3aWZlRGV0YWlscywgc2V0V2lmZURldGFpbHNdID0gdXNlU3RhdGUoe1xuICAgIG5hbWU6IFwiXCIsXG4gICAgbmV0SW5jb21lOiBcIlwiLFxuICAgIGNoaWxkQmVuZWZpdHM6IFwiXCIsXG4gICAgZXh0cmFDaGlsZEJlbmVmaXRzOiBcIlwiLFxuICAgIHRvdGFsSW5jb21lOiBcIlwiLFxuICAgIG1lYWxWb3VjaGVyczogXCJcIixcbiAgICBjb21wYW55Q2FyOiBcIlwiLFxuICAgIHRhbmtDYXJkOiBcIlwiLFxuICAgIGx1bXBTdW06IFwiXCIsXG4gICAgcmVhbENvc3Q6IFwiXCIsXG4gICAgc2Nob29sWWVhcjogNy43LFxuICAgIHN1bW1lclZhY2F0aW9uOiAzMS4zMSxcbiAgICBjaHJpc3RtYXNCcmVhazogNy43LFxuICAgIGVhc3RlckhvbGlkYXlzOiA3LjcsXG4gICAgYXV0dW1uQnJlYWs6IDcuMCxcbiAgICBzcHJpbmdCcmVhazogMC43LFxuICAgIHRvdGFsRGF5czogXCJcIixcbiAgICBwZXJjZW50T2ZEYXlzOiBcIlwiLFxuICAgIGNyb3NzTmF0aW9uYWxDb3N0czogMCxcbiAgICB0b3RhbENvbnRyaTogXCJcIixcbiAgICBjb250cmlEZWJ0b3I6IDAsXG4gICAgdG90YWxDb250cmlJbktpbmQ6IFwiXCIsXG4gIH0pO1xuXG4gIGNvbnN0IFtcbiAgICBob2xpZGF5QXJyYW5nZW1lbnRJc1NjaG9vbFllYXIsXG4gICAgc2V0aG9saWRheUFycmFuZ2VtZW50SXNTY2hvb2xZZWFyLFxuICBdID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgY29uc3QgW2xpdmVJbkNvc3RTaGFyaW5nLCBzZXRMaXZlSW5Db3N0U2hhcmluZ10gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3NwZWNpYWxDaXJjdW1zdGFuY2VzLCBzZXRTcGVjaWFsQ2lyY3Vtc3RhbmNlc10gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3NlcGVyYXRlU2V0dGxlbWVudENoaWxkLCBzZXRTZXBlcmF0ZVNldHRsZW1lbnRDaGlsZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpbnB1dExpc3QsIHNldElucHV0TGlzdF0gPSB1c2VTdGF0ZShbeyBjaGlsZE5hbWU6IFwiXCIsIGNoaWxkQWdlOiBcIlwiIH1dKTtcblxuICAvLyBGSU5BTCBBTU9VTlRTXG4gIGNvbnN0IFtodXNiYW5kRmluYWxBbXQsIHNldEh1c2JhbmRGaW5hbEFtdF0gPSB1c2VTdGF0ZSh7XG4gICAgY29udHJpXzE6IFwiXCIsXG4gICAgY29udHJpXzI6IFwiXCIsXG4gIH0pO1xuICBjb25zdCBbd2lmZUZpbmFsQW10LCBzZXRXaWZlRmluYWxBbXRdID0gdXNlU3RhdGUoe1xuICAgIGNvbnRyaV8xOiBcIlwiLFxuICAgIGNvbnRyaV8yOiBcIlwiLFxuICB9KTtcblxuICAvLyBIQU5ETEUgSU5QVVQgRklFTEQgT0YgQ0hJTERSRU5TJ1xuICBjb25zdCBvbkNoYW5nZUNoaWxkcmVuRGF0YSA9IChlLCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGUudGFyZ2V0O1xuICAgIGNvbnN0IGNoaWxkcmVuTGlzdCA9IFsuLi5pbnB1dExpc3RdO1xuICAgIGNoaWxkcmVuTGlzdFtpbmRleF1bbmFtZV0gPSB2YWx1ZTtcbiAgICBzZXRJbnB1dExpc3QoY2hpbGRyZW5MaXN0KTtcbiAgfTtcblxuICAvLyBSRU1PVkUgQ0hJTEQgRlVOQ1RJT05cbiAgY29uc3QgcmVtb3ZlQ2hpbGQgPSAoaW5kZXgpID0+IHtcbiAgICBjb25zdCBjaGlsZHJlbkxpc3QgPSBbLi4uaW5wdXRMaXN0XTtcbiAgICBjaGlsZHJlbkxpc3Quc3BsaWNlKGluZGV4LCAxKTtcbiAgICBzZXRJbnB1dExpc3QoY2hpbGRyZW5MaXN0KTtcbiAgfTtcblxuICBjb25zdCBvbkNoYW5nZUxpdmVJbkNvc3RTaGFyaW5nID0gKGUpID0+IHtcbiAgICBzZXRMaXZlSW5Db3N0U2hhcmluZyhlLnRhcmdldC52YWx1ZSk7XG4gICAgaWYgKFxuICAgICAgZS50YXJnZXQudmFsdWUgPT09IFwiWWVzXCIgJiZcbiAgICAgIChzcGVjaWFsQ2lyY3Vtc3RhbmNlcyA9PT0gXCJcIiB8fCBzcGVjaWFsQ2lyY3Vtc3RhbmNlcyA9PT0gXCJOb1wiKVxuICAgICkge1xuICAgICAgc2V0SHVzYmFuZERldGFpbHMoeyAuLi5odXNiYW5kRGV0YWlscywgbHVtcFN1bTogNDcwIH0pO1xuICAgICAgc2V0V2lmZURldGFpbHMoeyAuLi53aWZlRGV0YWlscywgbHVtcFN1bTogNDcwIH0pO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICBlLnRhcmdldC52YWx1ZSA9PT0gXCJOb1wiICYmXG4gICAgICAoc3BlY2lhbENpcmN1bXN0YW5jZXMgPT09IFwiXCIgfHwgc3BlY2lhbENpcmN1bXN0YW5jZXMgPT09IFwiTm9cIilcbiAgICApIHtcbiAgICAgIHNldEh1c2JhbmREZXRhaWxzKHsgLi4uaHVzYmFuZERldGFpbHMsIGx1bXBTdW06IDk0MCB9KTtcbiAgICAgIHNldFdpZmVEZXRhaWxzKHsgLi4ud2lmZURldGFpbHMsIGx1bXBTdW06IDk0MCB9KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgb25DaGFuZ2VTcGVjaWFsQ2lyY3Vtc3RhbmNlcyA9IChlKSA9PiB7XG4gICAgc2V0U3BlY2lhbENpcmN1bXN0YW5jZXMoZS50YXJnZXQudmFsdWUpO1xuICAgIGlmIChlLnRhcmdldC52YWx1ZSA9PT0gXCJZZXNcIikge1xuICAgICAgc2V0SHVzYmFuZERldGFpbHMoeyAuLi5odXNiYW5kRGV0YWlscywgbHVtcFN1bTogMCB9KTtcbiAgICAgIHNldFdpZmVEZXRhaWxzKHsgLi4ud2lmZURldGFpbHMsIGx1bXBTdW06IDAgfSk7XG4gICAgfSBlbHNlIGlmIChlLnRhcmdldC52YWx1ZSA9PT0gXCJOb1wiKSB7XG4gICAgICBzZXRIdXNiYW5kRGV0YWlscyh7IC4uLmh1c2JhbmREZXRhaWxzLCByZWFsQ29zdDogMCB9KTtcbiAgICAgIHNldFdpZmVEZXRhaWxzKHsgLi4ud2lmZURldGFpbHMsIHJlYWxDb3N0OiAwIH0pO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBvbkNoYW5nZVNlcGVyYXRlU2V0dGxlbWVudENoaWxkID0gKHN0YXRlKSA9PiB7XG4gICAgc2V0U2VwZXJhdGVTZXR0bGVtZW50Q2hpbGQoc3RhdGUpO1xuICAgIGlmIChzdGF0ZSA9PT0gdHJ1ZSkge1xuICAgICAgc2V0SHVzYmFuZERldGFpbHMoeyAuLi5odXNiYW5kRGV0YWlscywgY29udHJpRGVidG9yOiAwIH0pO1xuICAgICAgc2V0V2lmZURldGFpbHMoeyAuLi53aWZlRGV0YWlscywgY29udHJpRGVidG9yOiAwIH0pO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBvbkNsaWNrQ2FsQ3VsYXRlQ3Jvc3NOYXRpb25hbENvc3RzID0gKCkgPT4ge1xuICAgIGlmIChodXNiYW5kRGV0YWlscy5jb250cmlEZWJ0b3IgPiAwKSB7XG4gICAgICBzZXRIdXNiYW5kRGV0YWlscyh7XG4gICAgICAgIC4uLmh1c2JhbmREZXRhaWxzLFxuICAgICAgICBjcm9zc05hdGlvbmFsQ29zdHM6IGh1c2JhbmREZXRhaWxzLmNvbnRyaURlYnRvcixcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoaHVzYmFuZERldGFpbHMuY29udHJpRGVidG9yID09PSAwKSB7XG4gICAgICBzZXRIdXNiYW5kRGV0YWlscyh7XG4gICAgICAgIC4uLmh1c2JhbmREZXRhaWxzLFxuICAgICAgICBjcm9zc05hdGlvbmFsQ29zdHM6IDEwMCAtIE51bWJlcih3aWZlRGV0YWlscy5jb250cmlEZWJ0b3IpIC8gMTAwLFxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmICh3aWZlRGV0YWlscy5jb250cmlEZWJ0b3IgPiAwKSB7XG4gICAgICBzZXRXaWZlRGV0YWlscyh7XG4gICAgICAgIC4uLndpZmVEZXRhaWxzLFxuICAgICAgICBjcm9zc05hdGlvbmFsQ29zdHM6IHdpZmVEZXRhaWxzLmNvbnRyaURlYnRvcixcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAod2lmZURldGFpbHMuY29udHJpRGVidG9yID09PSAwKSB7XG4gICAgICBzZXRXaWZlRGV0YWlscyh7XG4gICAgICAgIC4uLndpZmVEZXRhaWxzLFxuICAgICAgICBjcm9zc05hdGlvbmFsQ29zdHM6IDEgLSBOdW1iZXIoaHVzYmFuZERldGFpbHMuY29udHJpRGVidG9yKSAvIDEwMCxcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbiAgY29uc3Qgb25DaGFuZ2VIb2xpZGF5QXJySXNTY2hvb2wgPSAoKSA9PiB7XG4gICAgc2V0SHVzYmFuZERldGFpbHMoe1xuICAgICAgLi4uaHVzYmFuZERldGFpbHMsXG4gICAgICBzY2hvb2xZZWFyOiA3LjcsXG4gICAgICBzdW1tZXJWYWNhdGlvbjogMzEuMzEsXG4gICAgICBjaHJpc3RtYXNCcmVhazogNy43LFxuICAgICAgZWFzdGVySG9saWRheXM6IDcuNyxcbiAgICAgIGF1dHVtbkJyZWFrOiA3LjAsXG4gICAgICBzcHJpbmdCcmVhazogMC43LFxuICAgIH0pO1xuICAgIHNldFdpZmVEZXRhaWxzKHtcbiAgICAgIC4uLndpZmVEZXRhaWxzLFxuICAgICAgc2Nob29sWWVhcjogNy43LFxuICAgICAgc3VtbWVyVmFjYXRpb246IDMxLjMxLFxuICAgICAgY2hyaXN0bWFzQnJlYWs6IDcuNyxcbiAgICAgIGVhc3RlckhvbGlkYXlzOiA3LjcsXG4gICAgICBhdXR1bW5CcmVhazogNy4wLFxuICAgICAgc3ByaW5nQnJlYWs6IDAuNyxcbiAgICB9KTtcbiAgICBzZXRob2xpZGF5QXJyYW5nZW1lbnRJc1NjaG9vbFllYXIodHJ1ZSk7XG4gIH07XG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9ICgpID0+IHtcbiAgICBjb25zdCBodXNiYW5kQ29udHJpRGVidG9yID0gTnVtYmVyKGh1c2JhbmREZXRhaWxzLmNvbnRyaURlYnRvcikgLyAxMDA7XG4gICAgY29uc3Qgd2lmZUNvbnRyaURlYnRvciA9IE51bWJlcih3aWZlRGV0YWlscy5jb250cmlEZWJ0b3IpIC8gMTAwO1xuXG4gICAgLy8gQjQxID0gQjMyICsgQjMzICsgQjM0ICsgQjM1XG4gICAgY29uc3Qgc3ViVG90YWxIdXNiYW5kID1cbiAgICAgIE51bWJlcihodXNiYW5kRGV0YWlscy5uZXRJbmNvbWUpICtcbiAgICAgIE51bWJlcihodXNiYW5kRGV0YWlscy5tZWFsVm91Y2hlcnMpICtcbiAgICAgIE51bWJlcihodXNiYW5kRGV0YWlscy5jb21wYW55Q2FyKSArXG4gICAgICBOdW1iZXIoaHVzYmFuZERldGFpbHMudGFua0NhcmQpO1xuXG4gICAgLy8gQzQxID0gQzMyICsgQzMzICsgQzM0ICsgQzM1XG4gICAgY29uc3Qgc3ViVG90YWxXaWZlID1cbiAgICAgIE51bWJlcih3aWZlRGV0YWlscy5uZXRJbmNvbWUpICtcbiAgICAgIE51bWJlcih3aWZlRGV0YWlscy5tZWFsVm91Y2hlcnMpICtcbiAgICAgIE51bWJlcih3aWZlRGV0YWlscy5jb21wYW55Q2FyKSArXG4gICAgICBOdW1iZXIod2lmZURldGFpbHMudGFua0NhcmQpO1xuXG4gICAgLy8gQjQyID0gQjQxICsgQzQxXG4gICAgY29uc3QgdG90YWwgPSBzdWJUb3RhbEh1c2JhbmQgKyBzdWJUb3RhbFdpZmU7XG5cbiAgICAvLyBCNDMgPSBCNDIgKyBCMzggKyBDMzggKyBCMzkgKyBDMzlcbiAgICBjb25zdCB0b3RhbENoaWxkQmVuZWZpdHMgPVxuICAgICAgdG90YWwgK1xuICAgICAgTnVtYmVyKGh1c2JhbmREZXRhaWxzLmNoaWxkQmVuZWZpdHMpICtcbiAgICAgIE51bWJlcih3aWZlRGV0YWlscy5jaGlsZEJlbmVmaXRzKSArXG4gICAgICBOdW1iZXIoaHVzYmFuZERldGFpbHMuZXh0cmFDaGlsZEJlbmVmaXRzKSArXG4gICAgICBOdW1iZXIod2lmZURldGFpbHMuZXh0cmFDaGlsZEJlbmVmaXRzKTtcblxuICAgIC8vIEI0NSA9IDEgLyBCNDIgKiBCNDFcbiAgICBjb25zdCBodXNiYW5kRWFybmluZ1BlcmNlbnQgPSAoMSAvIHRvdGFsKSAqIHN1YlRvdGFsSHVzYmFuZDtcblxuICAgIC8vIEM0NSA9IDEgLyBCNDIgKiBDNDFcbiAgICBjb25zdCB3aWZlRWFybmluZ1BlcmNlbnQgPSAoMSAvIHRvdGFsKSAqIHN1YlRvdGFsV2lmZTtcblxuICAgIC8vIEI1NCA9IEI1MSArIEI1MlxuICAgIGNvbnN0IGh1c2JhbmRMaXZpbmdDb3N0ID1cbiAgICAgIE51bWJlcihodXNiYW5kRGV0YWlscy5sdW1wU3VtKSArIE51bWJlcihodXNiYW5kRGV0YWlscy5yZWFsQ29zdCk7XG5cbiAgICAvLyBDNTQgPSBDNTEgKyBDNTJcbiAgICBjb25zdCB3aWZlTGl2aW5nQ29zdCA9XG4gICAgICBOdW1iZXIod2lmZURldGFpbHMubHVtcFN1bSkgKyBOdW1iZXIod2lmZURldGFpbHMucmVhbENvc3QpO1xuXG4gICAgLy8gQjU3ID0gQjQxIC0gQjU0XG4gICAgY29uc3QgaHVzYmFuZFJlc2lkdWFsUmVzb3VyY2VzID0gc3ViVG90YWxIdXNiYW5kIC0gaHVzYmFuZExpdmluZ0Nvc3Q7XG5cbiAgICAvLyBDNTcgPSBDMzIgKyBDMzkgLSBDNTRcbiAgICBjb25zdCB3aWZlUmVzaWR1YWxSZXNvdXJjZXMgPVxuICAgICAgTnVtYmVyKHdpZmVEZXRhaWxzLm5ldEluY29tZSkgK1xuICAgICAgTnVtYmVyKHdpZmVEZXRhaWxzLmV4dHJhQ2hpbGRCZW5lZml0cykgLVxuICAgICAgd2lmZUxpdmluZ0Nvc3Q7XG5cbiAgICAvLyBCNTkgPSAxIC8gKCBCNTcgKyBDNTcgKSAqIEI1N1xuICAgIGNvbnN0IGh1c2JhbmRTaGFyZUluUmVzaWR1YWxSZXNvdXJjZXMgPVxuICAgICAgKDEgLyAoaHVzYmFuZFJlc2lkdWFsUmVzb3VyY2VzICsgd2lmZVJlc2lkdWFsUmVzb3VyY2VzKSkgKlxuICAgICAgaHVzYmFuZFJlc2lkdWFsUmVzb3VyY2VzO1xuXG4gICAgLy8gQzU5ID0gMSAvICggQjU3ICsgQzU3ICkgKiBDNTdcbiAgICBjb25zdCB3aWZlU2hhcmVJblJlc2lkdWFsUmVzb3VyY2VzID1cbiAgICAgICgxIC8gKGh1c2JhbmRSZXNpZHVhbFJlc291cmNlcyArIHdpZmVSZXNpZHVhbFJlc291cmNlcykpICpcbiAgICAgIHdpZmVSZXNpZHVhbFJlc291cmNlcztcblxuICAgIC8vIEI3NyA9IFNVTSggQjY3IDogQjc1ICkgKyAoIEI2MyAqIDE4LjY0Mjg2IClcbiAgICBjb25zdCBodXNiYW5kVG90YWxEYXlzID1cbiAgICAgIE51bWJlcihodXNiYW5kRGV0YWlscy5zdW1tZXJWYWNhdGlvbikgK1xuICAgICAgTnVtYmVyKGh1c2JhbmREZXRhaWxzLmNocmlzdG1hc0JyZWFrKSArXG4gICAgICBOdW1iZXIoaHVzYmFuZERldGFpbHMuZWFzdGVySG9saWRheXMpICtcbiAgICAgIE51bWJlcihodXNiYW5kRGV0YWlscy5hdXR1bW5CcmVhaykgK1xuICAgICAgTnVtYmVyKGh1c2JhbmREZXRhaWxzLnNwcmluZ0JyZWFrKTtcbiAgICBzZXRIdXNiYW5kRGV0YWlscyh7IC4uLmh1c2JhbmREZXRhaWxzLCB0b3RhbERheXM6IGh1c2JhbmRUb3RhbERheXMgfSk7XG5cbiAgICAvLyBDNzcgPSBTVU0oIEM2NyA6IEM3NSApICsgKCBDNjMgKiAxOC42NDI4NiApXG4gICAgY29uc3Qgd2lmZVRvdGFsRGF5cyA9XG4gICAgICBOdW1iZXIod2lmZURldGFpbHMuc3VtbWVyVmFjYXRpb24pICtcbiAgICAgIE51bWJlcih3aWZlRGV0YWlscy5jaHJpc3RtYXNCcmVhaykgK1xuICAgICAgTnVtYmVyKHdpZmVEZXRhaWxzLmVhc3RlckhvbGlkYXlzKSArXG4gICAgICBOdW1iZXIod2lmZURldGFpbHMuYXV0dW1uQnJlYWspICtcbiAgICAgIE51bWJlcih3aWZlRGV0YWlscy5zcHJpbmdCcmVhayk7XG4gICAgc2V0V2lmZURldGFpbHMoeyAuLi53aWZlRGV0YWlscywgdG90YWxEYXlzOiB3aWZlVG90YWxEYXlzIH0pO1xuXG4gICAgLy8gQjc5ID0gMSAvIDM2NSAqIEI3N1xuICAgIGNvbnN0IGh1c2JhbmRQZXJjZW50YWdlT2ZEYXlzID0gKDEgLyAzNjUpICogaHVzYmFuZFRvdGFsRGF5cztcbiAgICBzZXRIdXNiYW5kRGV0YWlscyh7XG4gICAgICAuLi5odXNiYW5kRGV0YWlscyxcbiAgICAgIHBlcmNlbnRPZkRheXM6IGh1c2JhbmRQZXJjZW50YWdlT2ZEYXlzLFxuICAgIH0pO1xuXG4gICAgLy8gQzc5ID0gMSAvIDM2NSAqIEM3N1xuICAgIGNvbnN0IHdpZmVQZXJjZW50YWdlT2ZEYXlzID0gKDEgLyAzNjUpICogd2lmZVRvdGFsRGF5cztcbiAgICBzZXRXaWZlRGV0YWlscyh7IC4uLndpZmVEZXRhaWxzLCBwZXJjZW50T2ZEYXlzOiB3aWZlUGVyY2VudGFnZU9mRGF5cyB9KTtcblxuICAgIGxldCBodXNiYW5kQ3Jvc3NOYXRpb25hbENvc3Q7XG4gICAgbGV0IHdpZmVDcm9zc05hdGlvbmFsQ29zdDtcbiAgICBpZiAoaHVzYmFuZENvbnRyaURlYnRvciA+IDApIHtcbiAgICAgIGh1c2JhbmRDcm9zc05hdGlvbmFsQ29zdCA9IGh1c2JhbmRDb250cmlEZWJ0b3I7XG4gICAgfVxuICAgIGlmIChodXNiYW5kQ29udHJpRGVidG9yID09PSAwKSB7XG4gICAgICBodXNiYW5kQ3Jvc3NOYXRpb25hbENvc3QgPSAxMDAgLSB3aWZlQ29udHJpRGVidG9yO1xuICAgIH1cbiAgICBpZiAod2lmZUNvbnRyaURlYnRvciA+IDApIHtcbiAgICAgIHdpZmVDcm9zc05hdGlvbmFsQ29zdCA9IHdpZmVDb250cmlEZWJ0b3I7XG4gICAgfVxuICAgIGlmICh3aWZlQ29udHJpRGVidG9yID09PSAwKSB7XG4gICAgICB3aWZlQ3Jvc3NOYXRpb25hbENvc3QgPSAxIC0gaHVzYmFuZENvbnRyaURlYnRvcjtcbiAgICB9XG5cbiAgICAvLyBCOTMgPSAoQjg5ICsgQjkxKS8yXG4gICAgY29uc3QgaHVzYmFuZFRvdGFsQ29udHJpSW5LaW5kID1cbiAgICAgIChodXNiYW5kQ29udHJpRGVidG9yICsgaHVzYmFuZENyb3NzTmF0aW9uYWxDb3N0KSAvIDI7XG4gICAgc2V0SHVzYmFuZERldGFpbHMoe1xuICAgICAgLi4uaHVzYmFuZERldGFpbHMsXG4gICAgICB0b3RhbENvbnRyaUluS2luZDogaHVzYmFuZFRvdGFsQ29udHJpSW5LaW5kLFxuICAgIH0pO1xuXG4gICAgLy8gQzkzID0gKEM4OSArIEM5MSkvMlxuICAgIGNvbnN0IHdpZmVUb3RhbENvbnRyaUluS2luZCA9XG4gICAgICAod2lmZUNvbnRyaURlYnRvciArIHdpZmVDcm9zc05hdGlvbmFsQ29zdCkgLyAyO1xuICAgIHNldFdpZmVEZXRhaWxzKHtcbiAgICAgIC4uLndpZmVEZXRhaWxzLFxuICAgICAgdG90YWxDb250cmlJbktpbmQ6IHdpZmVUb3RhbENvbnRyaUluS2luZCxcbiAgICB9KTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXIgbmF2YmFyLWV4cGFuZC1zbSBiZy1kYXJrIG5hdmJhci1kYXJrIGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XG4gICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZFwiIGhyZWY9XCIvI1wiPlxuICAgICAgICAgIFJFTkFSRFxuICAgICAgICA8L2E+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZiYXItbmF2XCI+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICA8YSBocmVmPVwiLyNcIiBjbGFzc05hbWU9XCJuYXYtbGlua1wiPlxuICAgICAgICAgICAgICBBYm91dCBVc1xuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICA8YSBocmVmPVwiLyNcIiBjbGFzc05hbWU9XCJuYXYtbGlua1wiPlxuICAgICAgICAgICAgICBDb250YWN0IFVzXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvbmF2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cganVzdGlmeS1jb250ZW50LWNlbnRlciBtdC01XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLThcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY3VzdG9tQ2FyZF9zdHlsZSBwLTUgYm9yZGVyLTBcIj5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJjYXJkLXRpdGxlIHRleHQtY2VudGVyIHB5LTVcIj5Ib2JpbiBDYWxjdWxhdGlvbjwvaDI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBteS0zXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIGFsaWduLXNlbGYtZW5kXCI+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICA8c3Ryb25nPk5hbWU6PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgPHN0cm9uZz5IdXNiYW5kPC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtodXNiYW5kRGV0YWlscy5uYW1lfVxuICAgICAgICAgICAgICAgICAgbmFtZT1cImh1c2JhbmROYW1lXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgc2V0SHVzYmFuZERldGFpbHMoe1xuICAgICAgICAgICAgICAgICAgICAgIC4uLmh1c2JhbmREZXRhaWxzLFxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGUudGFyZ2V0LnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICA8c3Ryb25nPldpZmU8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3dpZmVEZXRhaWxzLm5hbWV9XG4gICAgICAgICAgICAgICAgICBuYW1lPVwid2lmZU5hbWVcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxuICAgICAgICAgICAgICAgICAgICBzZXRXaWZlRGV0YWlscyh7IC4uLndpZmVEZXRhaWxzLCBuYW1lOiBlLnRhcmdldC52YWx1ZSB9KVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7aW5wdXRMaXN0Lm1hcCgodmFsLCBpKSA9PiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1iLTNcIiBrZXk9e2l9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTVcIj5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbD5DaGlsZCBOYW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWwuY2hpbGROYW1lfVxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY2hpbGROYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbkNoYW5nZUNoaWxkcmVuRGF0YShlLCBpKX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNVwiPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsPkNoaWxkIEFnZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWwuY2hpbGRBZ2V9XG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjaGlsZEFnZVwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25DaGFuZ2VDaGlsZHJlbkRhdGEoZSwgaSl9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTIgYWxpZ24tc2VsZi1lbmRcIj5cbiAgICAgICAgICAgICAgICAgIHtpID09PSBpbnB1dExpc3QubGVuZ3RoIC0gMSA/IChcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2VzcyBtci0zXCJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0SW5wdXRMaXN0KFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uaW5wdXRMaXN0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IGNoaWxkTmFtZTogXCJcIiwgY2hpbGRBZ2U6IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgK1xuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgIDw+PC8+XG4gICAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgICB7aW5wdXRMaXN0Lmxlbmd0aCA+IDEgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlclwiXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcmVtb3ZlQ2hpbGQoaSl9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAmdGltZXM7XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgPD48Lz5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8aHIgLz5cbiAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJtYi0zXCI+XG4gICAgICAgICAgICAgIDxzdHJvbmc+SW5jb21lOjwvc3Ryb25nPlxuICAgICAgICAgICAgPC9oNT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1iLTNcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgYWxpZ24tc2VsZi1lbmRcIj5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgIDxzdHJvbmc+TmV0IEluY29tZTo8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICA8c3Ryb25nPkh1c2JhbmQ8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17aHVzYmFuZERldGFpbHMubmV0SW5jb21lfVxuICAgICAgICAgICAgICAgICAgbmFtZT1cImh1c2JhbmROZXRJbmNvbWVcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxuICAgICAgICAgICAgICAgICAgICBzZXRIdXNiYW5kRGV0YWlscyh7XG4gICAgICAgICAgICAgICAgICAgICAgLi4uaHVzYmFuZERldGFpbHMsXG4gICAgICAgICAgICAgICAgICAgICAgbmV0SW5jb21lOiBlLnRhcmdldC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgPHN0cm9uZz5XaWZlPC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3dpZmVEZXRhaWxzLm5ldEluY29tZX1cbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJ3aWZlTmV0SW5jb21lXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgc2V0V2lmZURldGFpbHMoe1xuICAgICAgICAgICAgICAgICAgICAgIC4uLndpZmVEZXRhaWxzLFxuICAgICAgICAgICAgICAgICAgICAgIG5ldEluY29tZTogZS50YXJnZXQudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHsvKiAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYi0zXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIGFsaWduLXNlbGYtZW5kXCI+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICA8c3Ryb25nPk1lYWwgVm91Y2hlcnM6PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17aHVzYmFuZERldGFpbHMubWVhbFZvdWNoZXJzID8gdHJ1ZSA6IGZhbHNlfVxuICAgICAgICAgICAgICAgICAgbmFtZT1cImh1c2JhbmRNZWFsVm91Y2hlclwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XG4gICAgICAgICAgICAgICAgICAgIHNldEh1c2JhbmREZXRhaWxzKFxuICAgICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LmNoZWNrZWRcbiAgICAgICAgICAgICAgICAgICAgICAgID8geyAuLi5odXNiYW5kRGV0YWlscywgbWVhbFZvdWNoZXJzOiAxMDAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgOiB7IC4uLmh1c2JhbmREZXRhaWxzLCBtZWFsVm91Y2hlcnM6IFwiXCIgfVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3dpZmVEZXRhaWxzLm1lYWxWb3VjaGVycyA/IHRydWUgOiBmYWxzZX1cbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJ3aWZlTWVhbFZvdWNoZXJcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxuICAgICAgICAgICAgICAgICAgICBzZXRXaWZlRGV0YWlscyhcbiAgICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC5jaGVja2VkXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHsgLi4ud2lmZURldGFpbHMsIG1lYWxWb3VjaGVyczogMTAwIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDogeyAuLi53aWZlRGV0YWlscywgbWVhbFZvdWNoZXJzOiBcIlwiIH1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYi0zXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIGFsaWduLXNlbGYtZW5kXCI+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICA8c3Ryb25nPkNvbXBhbnkgQ2Fyczo8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtodXNiYW5kRGV0YWlscy5jb21wYW55Q2FyID8gdHJ1ZSA6IGZhbHNlfVxuICAgICAgICAgICAgICAgICAgbmFtZT1cImh1c2JhbmRDb21wYW55Q2FyXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgc2V0SHVzYmFuZERldGFpbHMoXG4gICAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQuY2hlY2tlZFxuICAgICAgICAgICAgICAgICAgICAgICAgPyB7IC4uLmh1c2JhbmREZXRhaWxzLCBjb21wYW55Q2FyOiAzNTAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgOiB7IC4uLmh1c2JhbmREZXRhaWxzLCBjb21wYW55Q2FyOiBcIlwiIH1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt3aWZlRGV0YWlscy5jb21wYW55Q2FyID8gdHJ1ZSA6IGZhbHNlfVxuICAgICAgICAgICAgICAgICAgbmFtZT1cIndpZmVDb21wYW55Q2FyXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgc2V0V2lmZURldGFpbHMoXG4gICAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQuY2hlY2tlZFxuICAgICAgICAgICAgICAgICAgICAgICAgPyB7IC4uLndpZmVEZXRhaWxzLCBjb21wYW55Q2FyOiAzNTAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgOiB7IC4uLndpZmVEZXRhaWxzLCBjb21wYW55Q2FyOiBcIlwiIH1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYi0zXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIGFsaWduLXNlbGYtZW5kXCI+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICA8c3Ryb25nPlRhbmsgQ2FyZDo8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtodXNiYW5kRGV0YWlscy50YW5rQ2FyZCA/IHRydWUgOiBmYWxzZX1cbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJodXNiYW5kVGFua0NhcmRcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxuICAgICAgICAgICAgICAgICAgICBzZXRIdXNiYW5kRGV0YWlscyhcbiAgICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC5jaGVja2VkXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHsgLi4uaHVzYmFuZERldGFpbHMsIHRhbmtDYXJkOiAxMDAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgOiB7IC4uLmh1c2JhbmREZXRhaWxzLCB0YW5rQ2FyZDogXCJcIiB9XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17d2lmZURldGFpbHMudGFua0NhcmQgPyB0cnVlIDogZmFsc2V9XG4gICAgICAgICAgICAgICAgICBuYW1lPVwid2lmZVRhbmtDYXJkXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgc2V0V2lmZURldGFpbHMoXG4gICAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQuY2hlY2tlZFxuICAgICAgICAgICAgICAgICAgICAgICAgPyB7IC4uLndpZmVEZXRhaWxzLCB0YW5rQ2FyZDogMTAwIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDogeyAuLi53aWZlRGV0YWlscywgdGFua0NhcmQ6IFwiXCIgfVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1iLTNcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgYWxpZ24tc2VsZi1lbmRcIj5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgIDxzdHJvbmc+Q2hpbGQgQmVuZWZpdHM6PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtodXNiYW5kRGV0YWlscy5jaGlsZEJlbmVmaXRzfVxuICAgICAgICAgICAgICAgICAgbmFtZT1cImh1c2JhbmRDaGlsZEJlbmVmaXRzXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgc2V0SHVzYmFuZERldGFpbHMoe1xuICAgICAgICAgICAgICAgICAgICAgIC4uLmh1c2JhbmREZXRhaWxzLFxuICAgICAgICAgICAgICAgICAgICAgIGNoaWxkQmVuZWZpdHM6IGUudGFyZ2V0LnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3dpZmVEZXRhaWxzLmNoaWxkQmVuZWZpdHN9XG4gICAgICAgICAgICAgICAgICBuYW1lPVwid2lmZUNoaWxkQmVuZWZpdHNcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxuICAgICAgICAgICAgICAgICAgICBzZXRXaWZlRGV0YWlscyh7XG4gICAgICAgICAgICAgICAgICAgICAgLi4ud2lmZURldGFpbHMsXG4gICAgICAgICAgICAgICAgICAgICAgY2hpbGRCZW5lZml0czogZS50YXJnZXQudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1iLTNcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgYWxpZ24tc2VsZi1lbmRcIj5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgIDxzdHJvbmc+RXh0cmEgQ2hpbGQgQmVuZWZpdHM6PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtodXNiYW5kRGV0YWlscy5leHRyYUNoaWxkQmVuZWZpdHN9XG4gICAgICAgICAgICAgICAgICBuYW1lPVwiaHVzYmFuZEV4dHJhQ2hpbGRCZW5lZml0c1wiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XG4gICAgICAgICAgICAgICAgICAgIHNldEh1c2JhbmREZXRhaWxzKHtcbiAgICAgICAgICAgICAgICAgICAgICAuLi5odXNiYW5kRGV0YWlscyxcbiAgICAgICAgICAgICAgICAgICAgICBleHRyYUNoaWxkQmVuZWZpdHM6IGUudGFyZ2V0LnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3dpZmVEZXRhaWxzLmV4dHJhQ2hpbGRCZW5lZml0c31cbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJ3aWZlRXh0cmFDaGlsZEJlbmVmaXRzXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgc2V0V2lmZURldGFpbHMoe1xuICAgICAgICAgICAgICAgICAgICAgIC4uLndpZmVEZXRhaWxzLFxuICAgICAgICAgICAgICAgICAgICAgIGV4dHJhQ2hpbGRCZW5lZml0czogZS50YXJnZXQudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxociAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWItM1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBhbGlnbi1zZWxmLWVuZFwiPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgPHN0cm9uZz5MaXZpbmcgb24gQ29zdC1zaGFyaW5nIEJhc2lzOjwvc3Ryb25nPlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgWWVzXG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtbC0zXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT1cIlllc1wiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwibGl2ZUluQ29zdFNoYXJpbmdcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlTGl2ZUluQ29zdFNoYXJpbmd9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgTm9cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1sLTNcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPVwiTm9cIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cImxpdmVJbkNvc3RTaGFyaW5nXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUxpdmVJbkNvc3RTaGFyaW5nfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYi0zXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIGFsaWduLXNlbGYtZW5kXCI+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICA8c3Ryb25nPlNwZWNpYWwgQ2lyY3Vtc3RhbmNlcyBNIG9mIFY6PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICBZZXNcbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1sLTNcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPVwiWWVzXCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJzcGVjaWFsQ2lyY3Vtc3RhbmNlc1wiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VTcGVjaWFsQ2lyY3Vtc3RhbmNlc31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICBOb1xuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWwtM1wiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9XCJOb1wiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwic3BlY2lhbENpcmN1bXN0YW5jZXNcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlU3BlY2lhbENpcmN1bXN0YW5jZXN9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxociAvPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYi0zXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIGFsaWduLXNlbGYtZW5kXCI+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICA8c3Ryb25nPkx1bXAgU3VtOjwvc3Ryb25nPlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxzdHJvbmc+SHVzYmFuZDwvc3Ryb25nPlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgIHJlYWRPbmx5XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17aHVzYmFuZERldGFpbHMubHVtcFN1bX1cbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJodXNiYW5kTHVtcHN1bVwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxzdHJvbmc+V2lmZTwvc3Ryb25nPlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgIHJlYWRPbmx5XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17d2lmZURldGFpbHMubHVtcFN1bX1cbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJ3aWZlTHVtcHN1bVwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1iLTNcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgYWxpZ24tc2VsZi1lbmRcIj5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgIDxzdHJvbmc+UmVhbCBDb3N0Ojwvc3Ryb25nPlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICByZWFkT25seT17c3BlY2lhbENpcmN1bXN0YW5jZXMgPT09IFwiWWVzXCIgPyBmYWxzZSA6IHRydWV9XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17aHVzYmFuZERldGFpbHMucmVhbENvc3R9XG4gICAgICAgICAgICAgICAgICBuYW1lPVwiaHVzYmFuZEx1bXBzdW1cIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxuICAgICAgICAgICAgICAgICAgICBzZXRIdXNiYW5kRGV0YWlscyh7XG4gICAgICAgICAgICAgICAgICAgICAgLi4uaHVzYmFuZERldGFpbHMsXG4gICAgICAgICAgICAgICAgICAgICAgcmVhbENvc3Q6IGUudGFyZ2V0LnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgcmVhZE9ubHk9e3NwZWNpYWxDaXJjdW1zdGFuY2VzID09PSBcIlllc1wiID8gZmFsc2UgOiB0cnVlfVxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3dpZmVEZXRhaWxzLnJlYWxDb3N0fVxuICAgICAgICAgICAgICAgICAgbmFtZT1cIndpZmVMdW1wc3VtXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgc2V0V2lmZURldGFpbHMoeyAuLi53aWZlRGV0YWlscywgcmVhbENvc3Q6IGUudGFyZ2V0LnZhbHVlIH0pXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1iLTNcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgYWxpZ24tc2VsZi1lbmRcIj5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgIDxzdHJvbmc+TGl2aW5nIENvc3Q6PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgIHtOdW1iZXIoaHVzYmFuZERldGFpbHMubHVtcFN1bSkgK1xuICAgICAgICAgICAgICAgICAgICBOdW1iZXIoaHVzYmFuZERldGFpbHMucmVhbENvc3QpfVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICB7TnVtYmVyKHdpZmVEZXRhaWxzLmx1bXBTdW0pICsgTnVtYmVyKHdpZmVEZXRhaWxzLnJlYWxDb3N0KX1cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8aHIgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1iLTNcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICA8c3Ryb25nPkhvbGlkYXkgQXJyYWdlbWVudCA9IFNjaG9vbCB5ZWFyID88L3N0cm9uZz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgWWVzXG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtbC0zXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT1cIlllc1wiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwiaG9saWRheUFycmFuZ2VtZW50SXNTY2hvb2xZZWFyXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUhvbGlkYXlBcnJJc1NjaG9vbH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICBOb1xuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWwtM1wiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9XCJOb1wiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwiaG9saWRheUFycmFuZ2VtZW50SXNTY2hvb2xZZWFyXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiBzZXRob2xpZGF5QXJyYW5nZW1lbnRJc1NjaG9vbFllYXIoZmFsc2UpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYi0zXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICA8c3Ryb25nPlNjaG9vbCBZZWFyOjwvc3Ryb25nPlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICByZWFkT25seT17aG9saWRheUFycmFuZ2VtZW50SXNTY2hvb2xZZWFyID8gdHJ1ZSA6IGZhbHNlfVxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2h1c2JhbmREZXRhaWxzLnNjaG9vbFllYXJ9XG4gICAgICAgICAgICAgICAgICBuYW1lPVwic2Nob29sWWVhclwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XG4gICAgICAgICAgICAgICAgICAgIHNldEh1c2JhbmREZXRhaWxzKHtcbiAgICAgICAgICAgICAgICAgICAgICAuLi5odXNiYW5kRGV0YWlscyxcbiAgICAgICAgICAgICAgICAgICAgICBzY2hvb2xZZWFyOiBlLnRhcmdldC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgIHJlYWRPbmx5PXtob2xpZGF5QXJyYW5nZW1lbnRJc1NjaG9vbFllYXIgPyB0cnVlIDogZmFsc2V9XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17d2lmZURldGFpbHMuc2Nob29sWWVhcn1cbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJzY2hvb2xZZWFyXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgc2V0V2lmZURldGFpbHMoe1xuICAgICAgICAgICAgICAgICAgICAgIC4uLndpZmVEZXRhaWxzLFxuICAgICAgICAgICAgICAgICAgICAgIHNjaG9vbFllYXI6IGUudGFyZ2V0LnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYi0zXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICA8c3Ryb25nPlN1bW1lciBWYWNhdGlvbjo8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgcmVhZE9ubHk9e2hvbGlkYXlBcnJhbmdlbWVudElzU2Nob29sWWVhciA/IHRydWUgOiBmYWxzZX1cbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtodXNiYW5kRGV0YWlscy5zdW1tZXJWYWNhdGlvbn1cbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJzY2hvb2xZZWFyXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgc2V0SHVzYmFuZERldGFpbHMoe1xuICAgICAgICAgICAgICAgICAgICAgIC4uLmh1c2JhbmREZXRhaWxzLFxuICAgICAgICAgICAgICAgICAgICAgIHN1bW1lclZhY2F0aW9uOiBlLnRhcmdldC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgIHJlYWRPbmx5PXtob2xpZGF5QXJyYW5nZW1lbnRJc1NjaG9vbFllYXIgPyB0cnVlIDogZmFsc2V9XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17d2lmZURldGFpbHMuc3VtbWVyVmFjYXRpb259XG4gICAgICAgICAgICAgICAgICBuYW1lPVwic2Nob29sWWVhclwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XG4gICAgICAgICAgICAgICAgICAgIHNldFdpZmVEZXRhaWxzKHtcbiAgICAgICAgICAgICAgICAgICAgICAuLi53aWZlRGV0YWlscyxcbiAgICAgICAgICAgICAgICAgICAgICBzdW1tZXJWYWNhdGlvbjogZS50YXJnZXQudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1iLTNcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgIDxzdHJvbmc+Q2hyaXN0bWFzIEJyZWFrOjwvc3Ryb25nPlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICByZWFkT25seT17aG9saWRheUFycmFuZ2VtZW50SXNTY2hvb2xZZWFyID8gdHJ1ZSA6IGZhbHNlfVxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2h1c2JhbmREZXRhaWxzLmNocmlzdG1hc0JyZWFrfVxuICAgICAgICAgICAgICAgICAgbmFtZT1cInNjaG9vbFllYXJcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxuICAgICAgICAgICAgICAgICAgICBzZXRIdXNiYW5kRGV0YWlscyh7XG4gICAgICAgICAgICAgICAgICAgICAgLi4uaHVzYmFuZERldGFpbHMsXG4gICAgICAgICAgICAgICAgICAgICAgY2hyaXN0bWFzQnJlYWs6IGUudGFyZ2V0LnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgcmVhZE9ubHk9e2hvbGlkYXlBcnJhbmdlbWVudElzU2Nob29sWWVhciA/IHRydWUgOiBmYWxzZX1cbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt3aWZlRGV0YWlscy5jaHJpc3RtYXNCcmVha31cbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJzY2hvb2xZZWFyXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgc2V0V2lmZURldGFpbHMoe1xuICAgICAgICAgICAgICAgICAgICAgIC4uLndpZmVEZXRhaWxzLFxuICAgICAgICAgICAgICAgICAgICAgIGNocmlzdG1hc0JyZWFrOiBlLnRhcmdldC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWItM1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgPHN0cm9uZz5FYXN0ZXIgSG9saWRheXM6PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgIHJlYWRPbmx5PXtob2xpZGF5QXJyYW5nZW1lbnRJc1NjaG9vbFllYXIgPyB0cnVlIDogZmFsc2V9XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17aHVzYmFuZERldGFpbHMuZWFzdGVySG9saWRheXN9XG4gICAgICAgICAgICAgICAgICBuYW1lPVwic2Nob29sWWVhclwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XG4gICAgICAgICAgICAgICAgICAgIHNldEh1c2JhbmREZXRhaWxzKHtcbiAgICAgICAgICAgICAgICAgICAgICAuLi5odXNiYW5kRGV0YWlscyxcbiAgICAgICAgICAgICAgICAgICAgICBlYXN0ZXJIb2xpZGF5czogZS50YXJnZXQudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICByZWFkT25seT17aG9saWRheUFycmFuZ2VtZW50SXNTY2hvb2xZZWFyID8gdHJ1ZSA6IGZhbHNlfVxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3dpZmVEZXRhaWxzLmVhc3RlckhvbGlkYXlzfVxuICAgICAgICAgICAgICAgICAgbmFtZT1cInNjaG9vbFllYXJcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxuICAgICAgICAgICAgICAgICAgICBzZXRXaWZlRGV0YWlscyh7XG4gICAgICAgICAgICAgICAgICAgICAgLi4ud2lmZURldGFpbHMsXG4gICAgICAgICAgICAgICAgICAgICAgZWFzdGVySG9saWRheXM6IGUudGFyZ2V0LnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYi0zXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICA8c3Ryb25nPkF1dHVtbiBCcmVhazo8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgcmVhZE9ubHk9e2hvbGlkYXlBcnJhbmdlbWVudElzU2Nob29sWWVhciA/IHRydWUgOiBmYWxzZX1cbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtodXNiYW5kRGV0YWlscy5hdXR1bW5CcmVha31cbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJzY2hvb2xZZWFyXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgc2V0SHVzYmFuZERldGFpbHMoe1xuICAgICAgICAgICAgICAgICAgICAgIC4uLmh1c2JhbmREZXRhaWxzLFxuICAgICAgICAgICAgICAgICAgICAgIGF1dHVtbkJyZWFrOiBlLnRhcmdldC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgIHJlYWRPbmx5PXtob2xpZGF5QXJyYW5nZW1lbnRJc1NjaG9vbFllYXIgPyB0cnVlIDogZmFsc2V9XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17d2lmZURldGFpbHMuYXV0dW1uQnJlYWt9XG4gICAgICAgICAgICAgICAgICBuYW1lPVwic2Nob29sWWVhclwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XG4gICAgICAgICAgICAgICAgICAgIHNldFdpZmVEZXRhaWxzKHtcbiAgICAgICAgICAgICAgICAgICAgICAuLi53aWZlRGV0YWlscyxcbiAgICAgICAgICAgICAgICAgICAgICBhdXR1bW5CcmVhazogZS50YXJnZXQudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1iLTNcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgIDxzdHJvbmc+U3ByaW5nIEJyZWFrOjwvc3Ryb25nPlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICByZWFkT25seT17aG9saWRheUFycmFuZ2VtZW50SXNTY2hvb2xZZWFyID8gdHJ1ZSA6IGZhbHNlfVxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2h1c2JhbmREZXRhaWxzLnNwcmluZ0JyZWFrfVxuICAgICAgICAgICAgICAgICAgbmFtZT1cInNjaG9vbFllYXJcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxuICAgICAgICAgICAgICAgICAgICBzZXRIdXNiYW5kRGV0YWlscyh7XG4gICAgICAgICAgICAgICAgICAgICAgLi4uaHVzYmFuZERldGFpbHMsXG4gICAgICAgICAgICAgICAgICAgICAgc3ByaW5nQnJlYWs6IGUudGFyZ2V0LnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgcmVhZE9ubHk9e2hvbGlkYXlBcnJhbmdlbWVudElzU2Nob29sWWVhciA/IHRydWUgOiBmYWxzZX1cbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt3aWZlRGV0YWlscy5zcHJpbmdCcmVha31cbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJzY2hvb2xZZWFyXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgc2V0V2lmZURldGFpbHMoe1xuICAgICAgICAgICAgICAgICAgICAgIC4uLndpZmVEZXRhaWxzLFxuICAgICAgICAgICAgICAgICAgICAgIHNwcmluZ0JyZWFrOiBlLnRhcmdldC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWItM1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgPHN0cm9uZz5Ub3RhbCBudW1iZXIgb2YgZGF5czo8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgPHN0cm9uZz57aHVzYmFuZERldGFpbHMudG90YWxEYXlzfTwvc3Ryb25nPlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICA8c3Ryb25nPnt3aWZlRGV0YWlscy50b3RhbERheXN9PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWItM1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgPHN0cm9uZz5QZXJjZW50YWdlOjwvc3Ryb25nPlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICA8c3Ryb25nPntodXNiYW5kRGV0YWlscy5wZXJjZW50T2ZEYXlzfTwvc3Ryb25nPlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICA8c3Ryb25nPnt3aWZlRGV0YWlscy5wZXJjZW50T2ZEYXlzfTwvc3Ryb25nPlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxociAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWItM1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICAgIDxzdHJvbmc+U2VwZXJhdGUgc2V0dGxlbWVudCBmb3IgY2hpbGQ6IDwvc3Ryb25nPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICBZZXNcbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1sLTNcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPVwiWWVzXCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJzZXBlcmF0ZVNldHRsZW1lbnRDaGlsZFwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gb25DaGFuZ2VTZXBlcmF0ZVNldHRsZW1lbnRDaGlsZCh0cnVlKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICBOb1xuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWwtM1wiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9XCJOb1wiXG4gICAgICAgICAgICAgICAgICBkZWZhdWx0Q2hlY2tlZFxuICAgICAgICAgICAgICAgICAgbmFtZT1cInNlcGVyYXRlU2V0dGxlbWVudENoaWxkXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiBvbkNoYW5nZVNlcGVyYXRlU2V0dGxlbWVudENoaWxkKGZhbHNlKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge3NlcGVyYXRlU2V0dGxlbWVudENoaWxkICYmIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWItNVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5Db250cmlidXRpb24gQnkgRGVidG9yKCUpPC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2h1c2JhbmREZXRhaWxzLmNvbnRyaURlYnRvcn1cbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNvbnRyaURlYnRvclwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgICBzZXRIdXNiYW5kRGV0YWlscyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5odXNiYW5kRGV0YWlscyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyaURlYnRvcjogZS50YXJnZXQudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17d2lmZURldGFpbHMuY29udHJpRGVidG9yfVxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY29udHJpRGVidG9yXCJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxuICAgICAgICAgICAgICAgICAgICAgIHNldFdpZmVEZXRhaWxzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLndpZmVEZXRhaWxzLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJpRGVidG9yOiBlLnRhcmdldC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7c2VwZXJhdGVTZXR0bGVtZW50Q2hpbGQgJiYgKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYi01XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPkNyb3NzLU5hdGlvbmFsIENvc3QoJSk8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aHVzYmFuZERldGFpbHMuY3Jvc3NOYXRpb25hbENvc3RzfVxuICAgICAgICAgICAgICAgICAgICByZWFkT25seVxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY3Jvc3NOYXRpb25hbENvc3RzXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3dpZmVEZXRhaWxzLmNyb3NzTmF0aW9uYWxDb3N0c31cbiAgICAgICAgICAgICAgICAgICAgcmVhZE9ubHlcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNyb3NzTmF0aW9uYWxDb3N0c1wiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2xpY2tDYWxDdWxhdGVDcm9zc05hdGlvbmFsQ29zdHN9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIFJlLWNhbGN1bGF0ZVxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1iLTVcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgIDxzdHJvbmc+VG90YWwgQ29udHJpYnV0aW9uIGluIGtpbmQ6PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj57aHVzYmFuZERldGFpbHMudG90YWxDb250cmlJbktpbmR9PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+e3dpZmVEZXRhaWxzLnRvdGFsQ29udHJpSW5LaW5kfTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1wcmltYXJ5XCIgb25DbGljaz17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgICAgQ2FsY3VsYXRlXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=