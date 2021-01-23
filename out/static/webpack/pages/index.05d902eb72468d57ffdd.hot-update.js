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
        lineNumber: 277,
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
            lineNumber: 282,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 281,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          className: "nav-item",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "/#",
            className: "nav-link",
            children: "Contact Us"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 287,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 286,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 280,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 276,
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
            lineNumber: 296,
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
                  lineNumber: 300,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 299,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 298,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "text-center",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                  children: "Husband"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 305,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 304,
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
                lineNumber: 307,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 303,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "text-center",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                  children: "Wife"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 322,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 321,
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
                lineNumber: 324,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 320,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 297,
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
                  lineNumber: 338,
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
                  lineNumber: 339,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 337,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "col-md-5",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                  children: "Child Age"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 348,
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
                  lineNumber: 349,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 347,
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
                  lineNumber: 359,
                  columnNumber: 21
                }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false), inputList.length > 1 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                  className: "btn btn-danger",
                  onClick: function onClick() {
                    return removeChild(i);
                  },
                  children: "\xD7"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 375,
                  columnNumber: 21
                }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 357,
                columnNumber: 17
              }, _this)]
            }, i, true, {
              fileName: _jsxFileName,
              lineNumber: 336,
              columnNumber: 15
            }, _this);
          }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 387,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
            className: "mb-3",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
              children: "Income:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 389,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 388,
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
                  lineNumber: 394,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 393,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 392,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "text-center",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                  children: "Husband"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 399,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 398,
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
                lineNumber: 401,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 397,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "text-center",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                  children: "Wife"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 416,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 415,
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
                lineNumber: 418,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 414,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 391,
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
                  lineNumber: 436,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 435,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 434,
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
                lineNumber: 440,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 439,
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
                lineNumber: 454,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 453,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 433,
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
                  lineNumber: 471,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 470,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 469,
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
                lineNumber: 475,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 474,
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
                lineNumber: 489,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 488,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 468,
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
                  lineNumber: 506,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 505,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 504,
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
                lineNumber: 510,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 509,
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
                lineNumber: 524,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 523,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 503,
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
                  lineNumber: 541,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 540,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 539,
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
                lineNumber: 545,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 544,
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
                lineNumber: 559,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 558,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 538,
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
                  lineNumber: 576,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 575,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 574,
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
                lineNumber: 580,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 579,
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
                lineNumber: 594,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 593,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 573,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 608,
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
                  lineNumber: 612,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 611,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 610,
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
                lineNumber: 617,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 615,
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
                lineNumber: 627,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 625,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 609,
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
                  lineNumber: 639,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 638,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 637,
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
                lineNumber: 644,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 642,
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
                lineNumber: 654,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 652,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 636,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 663,
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
                  lineNumber: 668,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 667,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 666,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "text-center",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                  children: "Husband"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 673,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 672,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                className: "form-control",
                type: "number",
                readOnly: true,
                value: husbandDetails.lumpSum,
                name: "husbandLumpsum"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 675,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 671,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "text-center",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                  children: "Wife"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 685,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 684,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                className: "form-control",
                type: "number",
                readOnly: true,
                value: wifeDetails.lumpSum,
                name: "wifeLumpsum"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 687,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 683,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 665,
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
                  lineNumber: 699,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 698,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 697,
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
                lineNumber: 703,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 702,
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
                lineNumber: 718,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 717,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 696,
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
                  lineNumber: 733,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 732,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 731,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: Number(husbandDetails.lumpSum) + Number(husbandDetails.realCost)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 737,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 736,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: Number(wifeDetails.lumpSum) + Number(wifeDetails.realCost)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 743,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 742,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 730,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 748,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "row mb-3",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                children: "Holiday Arragement = School year ?"
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
              className: "col text-center",
              children: ["Yes", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                className: "ml-3",
                type: "radio",
                value: "Yes",
                name: "holidayArrangementIsSchoolYear",
                onChange: onChangeHolidayArrIsSchool
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 755,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 753,
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
                lineNumber: 765,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 763,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 749,
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
                  lineNumber: 777,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 776,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 775,
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
                lineNumber: 781,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 780,
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
                lineNumber: 796,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 795,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 774,
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
                  lineNumber: 814,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 813,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 812,
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
                lineNumber: 818,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 817,
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
                lineNumber: 833,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 832,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 811,
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
                  lineNumber: 851,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 850,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 849,
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
                lineNumber: 855,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 854,
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
                lineNumber: 870,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 869,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 848,
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
                  lineNumber: 888,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 887,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 886,
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
                lineNumber: 892,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 891,
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
                lineNumber: 907,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 906,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 885,
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
                  lineNumber: 925,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 924,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 923,
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
                lineNumber: 929,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 928,
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
                lineNumber: 944,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 943,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 922,
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
                  lineNumber: 962,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 961,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 960,
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
                lineNumber: 966,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 965,
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
                lineNumber: 981,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 980,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 959,
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
                  lineNumber: 999,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 998,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 997,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                  children: husbandDetails.totalDays
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1004,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1003,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 1002,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                  children: wifeDetails.totalDays
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1009,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1008,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 1007,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 996,
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
                  lineNumber: 1016,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1015,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 1014,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                  children: husbandDetails.percentOfDays
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1021,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1020,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 1019,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                  children: wifeDetails.percentOfDays
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1026,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1025,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 1024,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 1013,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 1030,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "row mb-3",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                children: "Seperate settlement for child: "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1033,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 1032,
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
                lineNumber: 1037,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 1035,
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
                lineNumber: 1047,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 1045,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 1031,
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
                  lineNumber: 1061,
                  columnNumber: 21
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1060,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 1059,
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
                lineNumber: 1065,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 1064,
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
                lineNumber: 1079,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 1078,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 1058,
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
                  lineNumber: 1097,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1096,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 1095,
              columnNumber: 15
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
                lineNumber: 1101,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 1100,
              columnNumber: 15
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
                lineNumber: 1110,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 1109,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: "btn btn-primary",
                onClick: onClickCalCulateCrossNationalCosts,
                children: "Re-calculate"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1118,
                columnNumber: 36
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 1118,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 1094,
            columnNumber: 39
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "row mb-5",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                  children: "Total Contribution in kind:"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1121,
                  columnNumber: 39
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1121,
                columnNumber: 36
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 1121,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 1122,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 1123,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 1120,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            className: "btn btn-outline-primary",
            onClick: handleSubmit,
            children: "Calculate"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 1125,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 295,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 294,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 293,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s(Home, "Q9FF2nIUDOgIZ2myJm+lyweDdTI=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInVzZVN0YXRlIiwibmFtZSIsIm5ldEluY29tZSIsImNoaWxkQmVuZWZpdHMiLCJleHRyYUNoaWxkQmVuZWZpdHMiLCJ0b3RhbEluY29tZSIsIm1lYWxWb3VjaGVycyIsImNvbXBhbnlDYXIiLCJ0YW5rQ2FyZCIsImx1bXBTdW0iLCJyZWFsQ29zdCIsInNjaG9vbFllYXIiLCJzdW1tZXJWYWNhdGlvbiIsImNocmlzdG1hc0JyZWFrIiwiZWFzdGVySG9saWRheXMiLCJhdXR1bW5CcmVhayIsInNwcmluZ0JyZWFrIiwidG90YWxEYXlzIiwicGVyY2VudE9mRGF5cyIsImNyb3NzTmF0aW9uYWxDb3N0cyIsInRvdGFsQ29udHJpIiwiY29udHJpRGVidG9yIiwidG90YWxDb250cmlJbktpbmQiLCJodXNiYW5kRGV0YWlscyIsInNldEh1c2JhbmREZXRhaWxzIiwid2lmZURldGFpbHMiLCJzZXRXaWZlRGV0YWlscyIsImhvbGlkYXlBcnJhbmdlbWVudElzU2Nob29sWWVhciIsInNldGhvbGlkYXlBcnJhbmdlbWVudElzU2Nob29sWWVhciIsImxpdmVJbkNvc3RTaGFyaW5nIiwic2V0TGl2ZUluQ29zdFNoYXJpbmciLCJzcGVjaWFsQ2lyY3Vtc3RhbmNlcyIsInNldFNwZWNpYWxDaXJjdW1zdGFuY2VzIiwic2VwZXJhdGVTZXR0bGVtZW50Q2hpbGQiLCJzZXRTZXBlcmF0ZVNldHRsZW1lbnRDaGlsZCIsImNoaWxkTmFtZSIsImNoaWxkQWdlIiwiaW5wdXRMaXN0Iiwic2V0SW5wdXRMaXN0IiwiY29udHJpXzEiLCJjb250cmlfMiIsImh1c2JhbmRGaW5hbEFtdCIsInNldEh1c2JhbmRGaW5hbEFtdCIsIndpZmVGaW5hbEFtdCIsInNldFdpZmVGaW5hbEFtdCIsIm9uQ2hhbmdlQ2hpbGRyZW5EYXRhIiwiZSIsImluZGV4IiwidGFyZ2V0IiwidmFsdWUiLCJjaGlsZHJlbkxpc3QiLCJyZW1vdmVDaGlsZCIsInNwbGljZSIsIm9uQ2hhbmdlTGl2ZUluQ29zdFNoYXJpbmciLCJvbkNoYW5nZVNwZWNpYWxDaXJjdW1zdGFuY2VzIiwib25DaGFuZ2VTZXBlcmF0ZVNldHRsZW1lbnRDaGlsZCIsInN0YXRlIiwib25DbGlja0NhbEN1bGF0ZUNyb3NzTmF0aW9uYWxDb3N0cyIsIk51bWJlciIsIm9uQ2hhbmdlSG9saWRheUFycklzU2Nob29sIiwiaGFuZGxlU3VibWl0IiwiaHVzYmFuZENvbnRyaURlYnRvciIsIndpZmVDb250cmlEZWJ0b3IiLCJzdWJUb3RhbEh1c2JhbmQiLCJzdWJUb3RhbFdpZmUiLCJ0b3RhbCIsInRvdGFsQ2hpbGRCZW5lZml0cyIsImh1c2JhbmRFYXJuaW5nUGVyY2VudCIsIndpZmVFYXJuaW5nUGVyY2VudCIsImh1c2JhbmRMaXZpbmdDb3N0Iiwid2lmZUxpdmluZ0Nvc3QiLCJodXNiYW5kUmVzaWR1YWxSZXNvdXJjZXMiLCJ3aWZlUmVzaWR1YWxSZXNvdXJjZXMiLCJodXNiYW5kU2hhcmVJblJlc2lkdWFsUmVzb3VyY2VzIiwid2lmZVNoYXJlSW5SZXNpZHVhbFJlc291cmNlcyIsImh1c2JhbmRUb3RhbERheXMiLCJ3aWZlVG90YWxEYXlzIiwiaHVzYmFuZFBlcmNlbnRhZ2VPZkRheXMiLCJ3aWZlUGVyY2VudGFnZU9mRGF5cyIsImh1c2JhbmRDcm9zc05hdGlvbmFsQ29zdCIsIndpZmVDcm9zc05hdGlvbmFsQ29zdCIsImh1c2JhbmRUb3RhbENvbnRyaUluS2luZCIsIndpZmVUb3RhbENvbnRyaUluS2luZCIsIm1hcCIsInZhbCIsImkiLCJsZW5ndGgiLCJjaGVja2VkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVlLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFBQTs7QUFBQSxrQkFDZUMsc0RBQVEsQ0FBQztBQUNuREMsUUFBSSxFQUFFLEVBRDZDO0FBRW5EQyxhQUFTLEVBQUUsRUFGd0M7QUFHbkRDLGlCQUFh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a0JBREY7QUEyMUJEOztHQTFtQ3VCN0QsSTs7S0FBQUEsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wNWQ5MDJlYjcyNDY4ZDU3ZmZkZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbaHVzYmFuZERldGFpbHMsIHNldEh1c2JhbmREZXRhaWxzXSA9IHVzZVN0YXRlKHtcbiAgICBuYW1lOiBcIlwiLFxuICAgIG5ldEluY29tZTogXCJcIixcbiAgICBjaGlsZEJlbmVmaXRzOiBcIlwiLFxuICAgIGV4dHJhQ2hpbGRCZW5lZml0czogXCJcIixcbiAgICB0b3RhbEluY29tZTogXCJcIixcbiAgICBtZWFsVm91Y2hlcnM6IFwiXCIsXG4gICAgY29tcGFueUNhcjogXCJcIixcbiAgICB0YW5rQ2FyZDogXCJcIixcbiAgICBsdW1wU3VtOiBcIlwiLFxuICAgIHJlYWxDb3N0OiBcIlwiLFxuICAgIHNjaG9vbFllYXI6IDcuNyxcbiAgICBzdW1tZXJWYWNhdGlvbjogMzEuMzEsXG4gICAgY2hyaXN0bWFzQnJlYWs6IDcuNyxcbiAgICBlYXN0ZXJIb2xpZGF5czogNy43LFxuICAgIGF1dHVtbkJyZWFrOiA3LjAsXG4gICAgc3ByaW5nQnJlYWs6IDAuNyxcbiAgICB0b3RhbERheXM6IFwiXCIsXG4gICAgcGVyY2VudE9mRGF5czogXCJcIixcbiAgICBjcm9zc05hdGlvbmFsQ29zdHM6IDAsXG4gICAgdG90YWxDb250cmk6IFwiXCIsXG4gICAgY29udHJpRGVidG9yOiAwLFxuICAgIHRvdGFsQ29udHJpSW5LaW5kOlwiXCIsXG5cbiAgfSk7XG4gIGNvbnN0IFt3aWZlRGV0YWlscywgc2V0V2lmZURldGFpbHNdID0gdXNlU3RhdGUoe1xuICAgIG5hbWU6IFwiXCIsXG4gICAgbmV0SW5jb21lOiBcIlwiLFxuICAgIGNoaWxkQmVuZWZpdHM6IFwiXCIsXG4gICAgZXh0cmFDaGlsZEJlbmVmaXRzOiBcIlwiLFxuICAgIHRvdGFsSW5jb21lOiBcIlwiLFxuICAgIG1lYWxWb3VjaGVyczogXCJcIixcbiAgICBjb21wYW55Q2FyOiBcIlwiLFxuICAgIHRhbmtDYXJkOiBcIlwiLFxuICAgIGx1bXBTdW06IFwiXCIsXG4gICAgcmVhbENvc3Q6IFwiXCIsXG4gICAgc2Nob29sWWVhcjogNy43LFxuICAgIHN1bW1lclZhY2F0aW9uOiAzMS4zMSxcbiAgICBjaHJpc3RtYXNCcmVhazogNy43LFxuICAgIGVhc3RlckhvbGlkYXlzOiA3LjcsXG4gICAgYXV0dW1uQnJlYWs6IDcuMCxcbiAgICBzcHJpbmdCcmVhazogMC43LFxuICAgIHRvdGFsRGF5czogXCJcIixcbiAgICBwZXJjZW50T2ZEYXlzOiBcIlwiLFxuICAgIGNyb3NzTmF0aW9uYWxDb3N0czogMCxcbiAgICB0b3RhbENvbnRyaTogXCJcIixcbiAgICBjb250cmlEZWJ0b3I6IDAsXG4gICAgdG90YWxDb250cmlJbktpbmQ6XCJcIlxuICB9KTtcblxuICBjb25zdCBbXG4gICAgaG9saWRheUFycmFuZ2VtZW50SXNTY2hvb2xZZWFyLFxuICAgIHNldGhvbGlkYXlBcnJhbmdlbWVudElzU2Nob29sWWVhcixcbiAgXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIGNvbnN0IFtsaXZlSW5Db3N0U2hhcmluZywgc2V0TGl2ZUluQ29zdFNoYXJpbmddID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtzcGVjaWFsQ2lyY3Vtc3RhbmNlcywgc2V0U3BlY2lhbENpcmN1bXN0YW5jZXNdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtzZXBlcmF0ZVNldHRsZW1lbnRDaGlsZCwgc2V0U2VwZXJhdGVTZXR0bGVtZW50Q2hpbGRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaW5wdXRMaXN0LCBzZXRJbnB1dExpc3RdID0gdXNlU3RhdGUoW3sgY2hpbGROYW1lOiBcIlwiLCBjaGlsZEFnZTogXCJcIiB9XSk7XG5cbiAgLy8gRklOQUwgQU1PVU5UU1xuICBjb25zdCBbaHVzYmFuZEZpbmFsQW10LCBzZXRIdXNiYW5kRmluYWxBbXRdID0gdXNlU3RhdGUoe1xuICAgIGNvbnRyaV8xOiBcIlwiLFxuICAgIGNvbnRyaV8yOiBcIlwiLFxuICB9KTtcbiAgY29uc3QgW3dpZmVGaW5hbEFtdCwgc2V0V2lmZUZpbmFsQW10XSA9IHVzZVN0YXRlKHtcbiAgICBjb250cmlfMTogXCJcIixcbiAgICBjb250cmlfMjogXCJcIixcbiAgfSk7XG5cbiAgLy8gSEFORExFIElOUFVUIEZJRUxEIE9GIENISUxEUkVOUydcbiAgY29uc3Qgb25DaGFuZ2VDaGlsZHJlbkRhdGEgPSAoZSwgaW5kZXgpID0+IHtcbiAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBlLnRhcmdldDtcbiAgICBjb25zdCBjaGlsZHJlbkxpc3QgPSBbLi4uaW5wdXRMaXN0XTtcbiAgICBjaGlsZHJlbkxpc3RbaW5kZXhdW25hbWVdID0gdmFsdWU7XG4gICAgc2V0SW5wdXRMaXN0KGNoaWxkcmVuTGlzdCk7XG4gIH07XG5cbiAgLy8gUkVNT1ZFIENISUxEIEZVTkNUSU9OXG4gIGNvbnN0IHJlbW92ZUNoaWxkID0gKGluZGV4KSA9PiB7XG4gICAgY29uc3QgY2hpbGRyZW5MaXN0ID0gWy4uLmlucHV0TGlzdF07XG4gICAgY2hpbGRyZW5MaXN0LnNwbGljZShpbmRleCwgMSk7XG4gICAgc2V0SW5wdXRMaXN0KGNoaWxkcmVuTGlzdCk7XG4gIH07XG5cbiAgY29uc3Qgb25DaGFuZ2VMaXZlSW5Db3N0U2hhcmluZyA9IChlKSA9PiB7XG4gICAgc2V0TGl2ZUluQ29zdFNoYXJpbmcoZS50YXJnZXQudmFsdWUpO1xuICAgIGlmIChcbiAgICAgIGUudGFyZ2V0LnZhbHVlID09PSBcIlllc1wiICYmXG4gICAgICAoc3BlY2lhbENpcmN1bXN0YW5jZXMgPT09IFwiXCIgfHwgc3BlY2lhbENpcmN1bXN0YW5jZXMgPT09IFwiTm9cIilcbiAgICApIHtcbiAgICAgIHNldEh1c2JhbmREZXRhaWxzKHsgLi4uaHVzYmFuZERldGFpbHMsIGx1bXBTdW06IDQ3MCB9KTtcbiAgICAgIHNldFdpZmVEZXRhaWxzKHsgLi4ud2lmZURldGFpbHMsIGx1bXBTdW06IDQ3MCB9KTtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgZS50YXJnZXQudmFsdWUgPT09IFwiTm9cIiAmJlxuICAgICAgKHNwZWNpYWxDaXJjdW1zdGFuY2VzID09PSBcIlwiIHx8IHNwZWNpYWxDaXJjdW1zdGFuY2VzID09PSBcIk5vXCIpXG4gICAgKSB7XG4gICAgICBzZXRIdXNiYW5kRGV0YWlscyh7IC4uLmh1c2JhbmREZXRhaWxzLCBsdW1wU3VtOiA5NDAgfSk7XG4gICAgICBzZXRXaWZlRGV0YWlscyh7IC4uLndpZmVEZXRhaWxzLCBsdW1wU3VtOiA5NDAgfSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IG9uQ2hhbmdlU3BlY2lhbENpcmN1bXN0YW5jZXMgPSAoZSkgPT4ge1xuICAgIHNldFNwZWNpYWxDaXJjdW1zdGFuY2VzKGUudGFyZ2V0LnZhbHVlKTtcbiAgICBpZiAoZS50YXJnZXQudmFsdWUgPT09IFwiWWVzXCIpIHtcbiAgICAgIHNldEh1c2JhbmREZXRhaWxzKHsgLi4uaHVzYmFuZERldGFpbHMsIGx1bXBTdW06IDAgfSk7XG4gICAgICBzZXRXaWZlRGV0YWlscyh7IC4uLndpZmVEZXRhaWxzLCBsdW1wU3VtOiAwIH0pO1xuICAgIH0gZWxzZSBpZiAoZS50YXJnZXQudmFsdWUgPT09IFwiTm9cIikge1xuICAgICAgc2V0SHVzYmFuZERldGFpbHMoeyAuLi5odXNiYW5kRGV0YWlscywgcmVhbENvc3Q6IDAgfSk7XG4gICAgICBzZXRXaWZlRGV0YWlscyh7IC4uLndpZmVEZXRhaWxzLCByZWFsQ29zdDogMCB9KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgb25DaGFuZ2VTZXBlcmF0ZVNldHRsZW1lbnRDaGlsZCA9IChzdGF0ZSkgPT4ge1xuICAgIHNldFNlcGVyYXRlU2V0dGxlbWVudENoaWxkKHN0YXRlKTtcbiAgICBpZiAoc3RhdGUgPT09IHRydWUpIHtcbiAgICAgIHNldEh1c2JhbmREZXRhaWxzKHsgLi4uaHVzYmFuZERldGFpbHMsIGNvbnRyaURlYnRvcjogMCB9KTtcbiAgICAgIHNldFdpZmVEZXRhaWxzKHsgLi4ud2lmZURldGFpbHMsIGNvbnRyaURlYnRvcjogMCB9KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgb25DbGlja0NhbEN1bGF0ZUNyb3NzTmF0aW9uYWxDb3N0cyA9ICgpPT57XG4gICAgaWYoaHVzYmFuZERldGFpbHMuY29udHJpRGVidG9yPjApe1xuICAgICAgc2V0SHVzYmFuZERldGFpbHMoey4uLmh1c2JhbmREZXRhaWxzLCBjcm9zc05hdGlvbmFsQ29zdHM6IGh1c2JhbmREZXRhaWxzLmNvbnRyaURlYnRvcn0pXG4gICAgfVxuICAgIGlmKGh1c2JhbmREZXRhaWxzLmNvbnRyaURlYnRvcj09PTApe1xuICAgICAgc2V0SHVzYmFuZERldGFpbHMoey4uLmh1c2JhbmREZXRhaWxzLCBjcm9zc05hdGlvbmFsQ29zdHM6IDEwMC0oTnVtYmVyKHdpZmVEZXRhaWxzLmNvbnRyaURlYnRvcikvMTAwKX0pXG4gICAgfVxuICAgIGlmKHdpZmVEZXRhaWxzLmNvbnRyaURlYnRvcj4wKXtcbiAgICAgIHNldFdpZmVEZXRhaWxzKHsuLi53aWZlRGV0YWlscywgY3Jvc3NOYXRpb25hbENvc3RzOiB3aWZlRGV0YWlscy5jb250cmlEZWJ0b3J9KVxuICAgIH1cbiAgICBpZih3aWZlRGV0YWlscy5jb250cmlEZWJ0b3I9PT0wKXtcbiAgICAgIHNldFdpZmVEZXRhaWxzKHsuLi53aWZlRGV0YWlscywgY3Jvc3NOYXRpb25hbENvc3RzOiAxLShOdW1iZXIoaHVzYmFuZERldGFpbHMuY29udHJpRGVidG9yKS8xMDApfSlcbiAgICB9XG4gIH1cbiAgY29uc3Qgb25DaGFuZ2VIb2xpZGF5QXJySXNTY2hvb2wgPSAoKSA9PiB7XG4gICAgc2V0SHVzYmFuZERldGFpbHMoe1xuICAgICAgLi4uaHVzYmFuZERldGFpbHMsXG4gICAgICBzY2hvb2xZZWFyOiA3LjcsXG4gICAgICBzdW1tZXJWYWNhdGlvbjogMzEuMzEsXG4gICAgICBjaHJpc3RtYXNCcmVhazogNy43LFxuICAgICAgZWFzdGVySG9saWRheXM6IDcuNyxcbiAgICAgIGF1dHVtbkJyZWFrOiA3LjAsXG4gICAgICBzcHJpbmdCcmVhazogMC43LFxuICAgIH0pO1xuICAgIHNldFdpZmVEZXRhaWxzKHtcbiAgICAgIC4uLndpZmVEZXRhaWxzLFxuICAgICAgc2Nob29sWWVhcjogNy43LFxuICAgICAgc3VtbWVyVmFjYXRpb246IDMxLjMxLFxuICAgICAgY2hyaXN0bWFzQnJlYWs6IDcuNyxcbiAgICAgIGVhc3RlckhvbGlkYXlzOiA3LjcsXG4gICAgICBhdXR1bW5CcmVhazogNy4wLFxuICAgICAgc3ByaW5nQnJlYWs6IDAuNyxcbiAgICB9KTtcbiAgICBzZXRob2xpZGF5QXJyYW5nZW1lbnRJc1NjaG9vbFllYXIodHJ1ZSk7XG4gIH07XG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9ICgpID0+IHtcbiAgICBjb25zdCBodXNiYW5kQ29udHJpRGVidG9yID0gTnVtYmVyKGh1c2JhbmREZXRhaWxzLmNvbnRyaURlYnRvcikgLyAxMDA7XG4gICAgY29uc3Qgd2lmZUNvbnRyaURlYnRvciA9IE51bWJlcih3aWZlRGV0YWlscy5jb250cmlEZWJ0b3IpIC8gMTAwO1xuXG4gICAgLy8gQjQxID0gQjMyICsgQjMzICsgQjM0ICsgQjM1XG4gICAgY29uc3Qgc3ViVG90YWxIdXNiYW5kID1cbiAgICAgIE51bWJlcihodXNiYW5kRGV0YWlscy5uZXRJbmNvbWUpICtcbiAgICAgIE51bWJlcihodXNiYW5kRGV0YWlscy5tZWFsVm91Y2hlcnMpICtcbiAgICAgIE51bWJlcihodXNiYW5kRGV0YWlscy5jb21wYW55Q2FyKSArXG4gICAgICBOdW1iZXIoaHVzYmFuZERldGFpbHMudGFua0NhcmQpO1xuXG4gICAgLy8gQzQxID0gQzMyICsgQzMzICsgQzM0ICsgQzM1XG4gICAgY29uc3Qgc3ViVG90YWxXaWZlID1cbiAgICAgIE51bWJlcih3aWZlRGV0YWlscy5uZXRJbmNvbWUpICtcbiAgICAgIE51bWJlcih3aWZlRGV0YWlscy5tZWFsVm91Y2hlcnMpICtcbiAgICAgIE51bWJlcih3aWZlRGV0YWlscy5jb21wYW55Q2FyKSArXG4gICAgICBOdW1iZXIod2lmZURldGFpbHMudGFua0NhcmQpO1xuXG4gICAgLy8gQjQyID0gQjQxICsgQzQxXG4gICAgY29uc3QgdG90YWwgPSBzdWJUb3RhbEh1c2JhbmQgKyBzdWJUb3RhbFdpZmU7XG5cbiAgICAvLyBCNDMgPSBCNDIgKyBCMzggKyBDMzggKyBCMzkgKyBDMzlcbiAgICBjb25zdCB0b3RhbENoaWxkQmVuZWZpdHMgPVxuICAgICAgdG90YWwgK1xuICAgICAgTnVtYmVyKGh1c2JhbmREZXRhaWxzLmNoaWxkQmVuZWZpdHMpICtcbiAgICAgIE51bWJlcih3aWZlRGV0YWlscy5jaGlsZEJlbmVmaXRzKSArXG4gICAgICBOdW1iZXIoaHVzYmFuZERldGFpbHMuZXh0cmFDaGlsZEJlbmVmaXRzKSArXG4gICAgICBOdW1iZXIod2lmZURldGFpbHMuZXh0cmFDaGlsZEJlbmVmaXRzKTtcblxuICAgIC8vIEI0NSA9IDEgLyBCNDIgKiBCNDFcbiAgICBjb25zdCBodXNiYW5kRWFybmluZ1BlcmNlbnQgPSAoMSAvIHRvdGFsKSAqIHN1YlRvdGFsSHVzYmFuZDtcblxuICAgIC8vIEM0NSA9IDEgLyBCNDIgKiBDNDFcbiAgICBjb25zdCB3aWZlRWFybmluZ1BlcmNlbnQgPSAoMSAvIHRvdGFsKSAqIHN1YlRvdGFsV2lmZTtcblxuICAgIC8vIEI1NCA9IEI1MSArIEI1MlxuICAgIGNvbnN0IGh1c2JhbmRMaXZpbmdDb3N0ID1cbiAgICAgIE51bWJlcihodXNiYW5kRGV0YWlscy5sdW1wU3VtKSArIE51bWJlcihodXNiYW5kRGV0YWlscy5yZWFsQ29zdCk7XG5cbiAgICAvLyBDNTQgPSBDNTEgKyBDNTJcbiAgICBjb25zdCB3aWZlTGl2aW5nQ29zdCA9XG4gICAgICBOdW1iZXIod2lmZURldGFpbHMubHVtcFN1bSkgKyBOdW1iZXIod2lmZURldGFpbHMucmVhbENvc3QpO1xuXG4gICAgLy8gQjU3ID0gQjQxIC0gQjU0XG4gICAgY29uc3QgaHVzYmFuZFJlc2lkdWFsUmVzb3VyY2VzID0gc3ViVG90YWxIdXNiYW5kIC0gaHVzYmFuZExpdmluZ0Nvc3Q7XG5cbiAgICAvLyBDNTcgPSBDMzIgKyBDMzkgLSBDNTRcbiAgICBjb25zdCB3aWZlUmVzaWR1YWxSZXNvdXJjZXMgPVxuICAgICAgTnVtYmVyKHdpZmVEZXRhaWxzLm5ldEluY29tZSkgK1xuICAgICAgTnVtYmVyKHdpZmVEZXRhaWxzLmV4dHJhQ2hpbGRCZW5lZml0cykgLVxuICAgICAgd2lmZUxpdmluZ0Nvc3Q7XG5cbiAgICAvLyBCNTkgPSAxIC8gKCBCNTcgKyBDNTcgKSAqIEI1N1xuICAgIGNvbnN0IGh1c2JhbmRTaGFyZUluUmVzaWR1YWxSZXNvdXJjZXMgPVxuICAgICAgKDEgLyAoaHVzYmFuZFJlc2lkdWFsUmVzb3VyY2VzICsgd2lmZVJlc2lkdWFsUmVzb3VyY2VzKSkgKlxuICAgICAgaHVzYmFuZFJlc2lkdWFsUmVzb3VyY2VzO1xuXG4gICAgLy8gQzU5ID0gMSAvICggQjU3ICsgQzU3ICkgKiBDNTdcbiAgICBjb25zdCB3aWZlU2hhcmVJblJlc2lkdWFsUmVzb3VyY2VzID1cbiAgICAgICgxIC8gKGh1c2JhbmRSZXNpZHVhbFJlc291cmNlcyArIHdpZmVSZXNpZHVhbFJlc291cmNlcykpICpcbiAgICAgIHdpZmVSZXNpZHVhbFJlc291cmNlcztcblxuICAgIC8vIEI3NyA9IFNVTSggQjY3IDogQjc1ICkgKyAoIEI2MyAqIDE4LjY0Mjg2IClcbiAgICBjb25zdCBodXNiYW5kVG90YWxEYXlzID1cbiAgICAgIE51bWJlcihodXNiYW5kRGV0YWlscy5zdW1tZXJWYWNhdGlvbikgK1xuICAgICAgTnVtYmVyKGh1c2JhbmREZXRhaWxzLmNocmlzdG1hc0JyZWFrKSArXG4gICAgICBOdW1iZXIoaHVzYmFuZERldGFpbHMuZWFzdGVySG9saWRheXMpICtcbiAgICAgIE51bWJlcihodXNiYW5kRGV0YWlscy5hdXR1bW5CcmVhaykgK1xuICAgICAgTnVtYmVyKGh1c2JhbmREZXRhaWxzLnNwcmluZ0JyZWFrKTtcbiAgICBzZXRIdXNiYW5kRGV0YWlscyh7IC4uLmh1c2JhbmREZXRhaWxzLCB0b3RhbERheXM6IGh1c2JhbmRUb3RhbERheXMgfSk7XG5cbiAgICAvLyBDNzcgPSBTVU0oIEM2NyA6IEM3NSApICsgKCBDNjMgKiAxOC42NDI4NiApXG4gICAgY29uc3Qgd2lmZVRvdGFsRGF5cyA9XG4gICAgICBOdW1iZXIod2lmZURldGFpbHMuc3VtbWVyVmFjYXRpb24pICtcbiAgICAgIE51bWJlcih3aWZlRGV0YWlscy5jaHJpc3RtYXNCcmVhaykgK1xuICAgICAgTnVtYmVyKHdpZmVEZXRhaWxzLmVhc3RlckhvbGlkYXlzKSArXG4gICAgICBOdW1iZXIod2lmZURldGFpbHMuYXV0dW1uQnJlYWspICtcbiAgICAgIE51bWJlcih3aWZlRGV0YWlscy5zcHJpbmdCcmVhayk7XG4gICAgc2V0V2lmZURldGFpbHMoeyAuLi53aWZlRGV0YWlscywgdG90YWxEYXlzOiB3aWZlVG90YWxEYXlzIH0pO1xuXG4gICAgLy8gQjc5ID0gMSAvIDM2NSAqIEI3N1xuICAgIGNvbnN0IGh1c2JhbmRQZXJjZW50YWdlT2ZEYXlzID0gKDEgLyAzNjUpICogaHVzYmFuZFRvdGFsRGF5cztcbiAgICBzZXRIdXNiYW5kRGV0YWlscyh7XG4gICAgICAuLi5odXNiYW5kRGV0YWlscyxcbiAgICAgIHBlcmNlbnRPZkRheXM6IGh1c2JhbmRQZXJjZW50YWdlT2ZEYXlzLFxuICAgIH0pO1xuXG4gICAgLy8gQzc5ID0gMSAvIDM2NSAqIEM3N1xuICAgIGNvbnN0IHdpZmVQZXJjZW50YWdlT2ZEYXlzID0gKDEgLyAzNjUpICogd2lmZVRvdGFsRGF5cztcbiAgICBzZXRXaWZlRGV0YWlscyh7IC4uLndpZmVEZXRhaWxzLCBwZXJjZW50T2ZEYXlzOiB3aWZlUGVyY2VudGFnZU9mRGF5cyB9KTtcblxuICAgIGxldCBodXNiYW5kQ3Jvc3NOYXRpb25hbENvc3Q7XG4gICAgbGV0IHdpZmVDcm9zc05hdGlvbmFsQ29zdDtcbiAgICBpZihodXNiYW5kQ29udHJpRGVidG9yPjApe1xuICAgICAgaHVzYmFuZENyb3NzTmF0aW9uYWxDb3N0ID0gaHVzYmFuZENvbnRyaURlYnRvcjtcbiAgICB9XG4gICAgaWYoaHVzYmFuZENvbnRyaURlYnRvcj09PTApe1xuICAgICAgaHVzYmFuZENyb3NzTmF0aW9uYWxDb3N0ID0gMTAwIC0gd2lmZUNvbnRyaURlYnRvcjtcbiAgICB9XG4gICAgaWYod2lmZUNvbnRyaURlYnRvcj4wKXtcbiAgICAgIHdpZmVDcm9zc05hdGlvbmFsQ29zdCA9IHdpZmVDb250cmlEZWJ0b3I7XG4gICAgfVxuICAgIGlmKHdpZmVDb250cmlEZWJ0b3I9PT0wKXtcbiAgICAgIHdpZmVDcm9zc05hdGlvbmFsQ29zdCA9IDEgLSBodXNiYW5kQ29udHJpRGVidG9yXG4gICAgfVxuXG4gICAgLy8gQjkzID0gKEI4OSArIEI5MSkvMiBcbiAgICBjb25zdCBodXNiYW5kVG90YWxDb250cmlJbktpbmQgPSAoaHVzYmFuZENvbnRyaURlYnRvciArIGh1c2JhbmRDcm9zc05hdGlvbmFsQ29zdCkvMjtcbiAgICBzZXRIdXNiYW5kRGV0YWlscyh7Li4uaHVzYmFuZERldGFpbHMsIHRvdGFsQ29udHJpSW5LaW5kOiBodXNiYW5kVG90YWxDb250cmlJbktpbmR9KTtcblxuICAgIC8vIEM5MyA9IChDODkgKyBDOTEpLzJcbiAgICBjb25zdCB3aWZlVG90YWxDb250cmlJbktpbmQgPSAod2lmZUNvbnRyaURlYnRvciArIHdpZmVDcm9zc05hdGlvbmFsQ29zdCkvMjtcbiAgICBzZXRXaWZlRGV0YWlscyh7Li4ud2lmZURldGFpbHMsIHRvdGFsQ29udHJpSW5LaW5kOiB3aWZlVG90YWxDb250cmlJbktpbmR9KTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXIgbmF2YmFyLWV4cGFuZC1zbSBiZy1kYXJrIG5hdmJhci1kYXJrIGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XG4gICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZFwiIGhyZWY9XCIvI1wiPlxuICAgICAgICAgIFJFTkFSRFxuICAgICAgICA8L2E+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZiYXItbmF2XCI+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICA8YSBocmVmPVwiLyNcIiBjbGFzc05hbWU9XCJuYXYtbGlua1wiPlxuICAgICAgICAgICAgICBBYm91dCBVc1xuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICA8YSBocmVmPVwiLyNcIiBjbGFzc05hbWU9XCJuYXYtbGlua1wiPlxuICAgICAgICAgICAgICBDb250YWN0IFVzXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvbmF2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cganVzdGlmeS1jb250ZW50LWNlbnRlciBtdC01XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLThcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY3VzdG9tQ2FyZF9zdHlsZSBwLTUgYm9yZGVyLTBcIj5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJjYXJkLXRpdGxlIHRleHQtY2VudGVyIHB5LTVcIj5Ib2JpbiBDYWxjdWxhdGlvbjwvaDI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBteS0zXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIGFsaWduLXNlbGYtZW5kXCI+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICA8c3Ryb25nPk5hbWU6PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgPHN0cm9uZz5IdXNiYW5kPC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtodXNiYW5kRGV0YWlscy5uYW1lfVxuICAgICAgICAgICAgICAgICAgbmFtZT1cImh1c2JhbmROYW1lXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgc2V0SHVzYmFuZERldGFpbHMoe1xuICAgICAgICAgICAgICAgICAgICAgIC4uLmh1c2JhbmREZXRhaWxzLFxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGUudGFyZ2V0LnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICA8c3Ryb25nPldpZmU8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3dpZmVEZXRhaWxzLm5hbWV9XG4gICAgICAgICAgICAgICAgICBuYW1lPVwid2lmZU5hbWVcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxuICAgICAgICAgICAgICAgICAgICBzZXRXaWZlRGV0YWlscyh7IC4uLndpZmVEZXRhaWxzLCBuYW1lOiBlLnRhcmdldC52YWx1ZSB9KVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7aW5wdXRMaXN0Lm1hcCgodmFsLCBpKSA9PiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1iLTNcIiBrZXk9e2l9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTVcIj5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbD5DaGlsZCBOYW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWwuY2hpbGROYW1lfVxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY2hpbGROYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbkNoYW5nZUNoaWxkcmVuRGF0YShlLCBpKX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNVwiPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsPkNoaWxkIEFnZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWwuY2hpbGRBZ2V9XG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjaGlsZEFnZVwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25DaGFuZ2VDaGlsZHJlbkRhdGEoZSwgaSl9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTIgYWxpZ24tc2VsZi1lbmRcIj5cbiAgICAgICAgICAgICAgICAgIHtpID09PSBpbnB1dExpc3QubGVuZ3RoIC0gMSA/IChcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2VzcyBtci0zXCJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0SW5wdXRMaXN0KFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uaW5wdXRMaXN0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IGNoaWxkTmFtZTogXCJcIiwgY2hpbGRBZ2U6IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgK1xuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgIDw+PC8+XG4gICAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgICB7aW5wdXRMaXN0Lmxlbmd0aCA+IDEgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlclwiXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcmVtb3ZlQ2hpbGQoaSl9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAmdGltZXM7XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgPD48Lz5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8aHIgLz5cbiAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJtYi0zXCI+XG4gICAgICAgICAgICAgIDxzdHJvbmc+SW5jb21lOjwvc3Ryb25nPlxuICAgICAgICAgICAgPC9oNT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1iLTNcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgYWxpZ24tc2VsZi1lbmRcIj5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgIDxzdHJvbmc+TmV0IEluY29tZTo8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICA8c3Ryb25nPkh1c2JhbmQ8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17aHVzYmFuZERldGFpbHMubmV0SW5jb21lfVxuICAgICAgICAgICAgICAgICAgbmFtZT1cImh1c2JhbmROZXRJbmNvbWVcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxuICAgICAgICAgICAgICAgICAgICBzZXRIdXNiYW5kRGV0YWlscyh7XG4gICAgICAgICAgICAgICAgICAgICAgLi4uaHVzYmFuZERldGFpbHMsXG4gICAgICAgICAgICAgICAgICAgICAgbmV0SW5jb21lOiBlLnRhcmdldC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgPHN0cm9uZz5XaWZlPC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3dpZmVEZXRhaWxzLm5ldEluY29tZX1cbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJ3aWZlTmV0SW5jb21lXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgc2V0V2lmZURldGFpbHMoe1xuICAgICAgICAgICAgICAgICAgICAgIC4uLndpZmVEZXRhaWxzLFxuICAgICAgICAgICAgICAgICAgICAgIG5ldEluY29tZTogZS50YXJnZXQudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHsvKiAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYi0zXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIGFsaWduLXNlbGYtZW5kXCI+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICA8c3Ryb25nPk1lYWwgVm91Y2hlcnM6PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17aHVzYmFuZERldGFpbHMubWVhbFZvdWNoZXJzID8gdHJ1ZSA6IGZhbHNlfVxuICAgICAgICAgICAgICAgICAgbmFtZT1cImh1c2JhbmRNZWFsVm91Y2hlclwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XG4gICAgICAgICAgICAgICAgICAgIHNldEh1c2JhbmREZXRhaWxzKFxuICAgICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LmNoZWNrZWRcbiAgICAgICAgICAgICAgICAgICAgICAgID8geyAuLi5odXNiYW5kRGV0YWlscywgbWVhbFZvdWNoZXJzOiAxMDAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgOiB7IC4uLmh1c2JhbmREZXRhaWxzLCBtZWFsVm91Y2hlcnM6IFwiXCIgfVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3dpZmVEZXRhaWxzLm1lYWxWb3VjaGVycyA/IHRydWUgOiBmYWxzZX1cbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJ3aWZlTWVhbFZvdWNoZXJcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxuICAgICAgICAgICAgICAgICAgICBzZXRXaWZlRGV0YWlscyhcbiAgICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC5jaGVja2VkXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHsgLi4ud2lmZURldGFpbHMsIG1lYWxWb3VjaGVyczogMTAwIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDogeyAuLi53aWZlRGV0YWlscywgbWVhbFZvdWNoZXJzOiBcIlwiIH1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYi0zXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIGFsaWduLXNlbGYtZW5kXCI+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICA8c3Ryb25nPkNvbXBhbnkgQ2Fyczo8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtodXNiYW5kRGV0YWlscy5jb21wYW55Q2FyID8gdHJ1ZSA6IGZhbHNlfVxuICAgICAgICAgICAgICAgICAgbmFtZT1cImh1c2JhbmRDb21wYW55Q2FyXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgc2V0SHVzYmFuZERldGFpbHMoXG4gICAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQuY2hlY2tlZFxuICAgICAgICAgICAgICAgICAgICAgICAgPyB7IC4uLmh1c2JhbmREZXRhaWxzLCBjb21wYW55Q2FyOiAzNTAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgOiB7IC4uLmh1c2JhbmREZXRhaWxzLCBjb21wYW55Q2FyOiBcIlwiIH1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt3aWZlRGV0YWlscy5jb21wYW55Q2FyID8gdHJ1ZSA6IGZhbHNlfVxuICAgICAgICAgICAgICAgICAgbmFtZT1cIndpZmVDb21wYW55Q2FyXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgc2V0V2lmZURldGFpbHMoXG4gICAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQuY2hlY2tlZFxuICAgICAgICAgICAgICAgICAgICAgICAgPyB7IC4uLndpZmVEZXRhaWxzLCBjb21wYW55Q2FyOiAzNTAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgOiB7IC4uLndpZmVEZXRhaWxzLCBjb21wYW55Q2FyOiBcIlwiIH1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYi0zXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIGFsaWduLXNlbGYtZW5kXCI+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICA8c3Ryb25nPlRhbmsgQ2FyZDo8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtodXNiYW5kRGV0YWlscy50YW5rQ2FyZCA/IHRydWUgOiBmYWxzZX1cbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJodXNiYW5kVGFua0NhcmRcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxuICAgICAgICAgICAgICAgICAgICBzZXRIdXNiYW5kRGV0YWlscyhcbiAgICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC5jaGVja2VkXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHsgLi4uaHVzYmFuZERldGFpbHMsIHRhbmtDYXJkOiAxMDAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgOiB7IC4uLmh1c2JhbmREZXRhaWxzLCB0YW5rQ2FyZDogXCJcIiB9XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17d2lmZURldGFpbHMudGFua0NhcmQgPyB0cnVlIDogZmFsc2V9XG4gICAgICAgICAgICAgICAgICBuYW1lPVwid2lmZVRhbmtDYXJkXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgc2V0V2lmZURldGFpbHMoXG4gICAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQuY2hlY2tlZFxuICAgICAgICAgICAgICAgICAgICAgICAgPyB7IC4uLndpZmVEZXRhaWxzLCB0YW5rQ2FyZDogMTAwIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDogeyAuLi53aWZlRGV0YWlscywgdGFua0NhcmQ6IFwiXCIgfVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1iLTNcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgYWxpZ24tc2VsZi1lbmRcIj5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgIDxzdHJvbmc+Q2hpbGQgQmVuZWZpdHM6PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtodXNiYW5kRGV0YWlscy5jaGlsZEJlbmVmaXRzfVxuICAgICAgICAgICAgICAgICAgbmFtZT1cImh1c2JhbmRDaGlsZEJlbmVmaXRzXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgc2V0SHVzYmFuZERldGFpbHMoe1xuICAgICAgICAgICAgICAgICAgICAgIC4uLmh1c2JhbmREZXRhaWxzLFxuICAgICAgICAgICAgICAgICAgICAgIGNoaWxkQmVuZWZpdHM6IGUudGFyZ2V0LnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3dpZmVEZXRhaWxzLmNoaWxkQmVuZWZpdHN9XG4gICAgICAgICAgICAgICAgICBuYW1lPVwid2lmZUNoaWxkQmVuZWZpdHNcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxuICAgICAgICAgICAgICAgICAgICBzZXRXaWZlRGV0YWlscyh7XG4gICAgICAgICAgICAgICAgICAgICAgLi4ud2lmZURldGFpbHMsXG4gICAgICAgICAgICAgICAgICAgICAgY2hpbGRCZW5lZml0czogZS50YXJnZXQudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1iLTNcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgYWxpZ24tc2VsZi1lbmRcIj5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgIDxzdHJvbmc+RXh0cmEgQ2hpbGQgQmVuZWZpdHM6PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtodXNiYW5kRGV0YWlscy5leHRyYUNoaWxkQmVuZWZpdHN9XG4gICAgICAgICAgICAgICAgICBuYW1lPVwiaHVzYmFuZEV4dHJhQ2hpbGRCZW5lZml0c1wiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XG4gICAgICAgICAgICAgICAgICAgIHNldEh1c2JhbmREZXRhaWxzKHtcbiAgICAgICAgICAgICAgICAgICAgICAuLi5odXNiYW5kRGV0YWlscyxcbiAgICAgICAgICAgICAgICAgICAgICBleHRyYUNoaWxkQmVuZWZpdHM6IGUudGFyZ2V0LnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3dpZmVEZXRhaWxzLmV4dHJhQ2hpbGRCZW5lZml0c31cbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJ3aWZlRXh0cmFDaGlsZEJlbmVmaXRzXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgc2V0V2lmZURldGFpbHMoe1xuICAgICAgICAgICAgICAgICAgICAgIC4uLndpZmVEZXRhaWxzLFxuICAgICAgICAgICAgICAgICAgICAgIGV4dHJhQ2hpbGRCZW5lZml0czogZS50YXJnZXQudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxociAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWItM1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBhbGlnbi1zZWxmLWVuZFwiPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgPHN0cm9uZz5MaXZpbmcgb24gQ29zdC1zaGFyaW5nIEJhc2lzOjwvc3Ryb25nPlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgWWVzXG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtbC0zXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT1cIlllc1wiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwibGl2ZUluQ29zdFNoYXJpbmdcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlTGl2ZUluQ29zdFNoYXJpbmd9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgTm9cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1sLTNcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPVwiTm9cIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cImxpdmVJbkNvc3RTaGFyaW5nXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUxpdmVJbkNvc3RTaGFyaW5nfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYi0zXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIGFsaWduLXNlbGYtZW5kXCI+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICA8c3Ryb25nPlNwZWNpYWwgQ2lyY3Vtc3RhbmNlcyBNIG9mIFY6PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICBZZXNcbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1sLTNcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPVwiWWVzXCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJzcGVjaWFsQ2lyY3Vtc3RhbmNlc1wiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VTcGVjaWFsQ2lyY3Vtc3RhbmNlc31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICBOb1xuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWwtM1wiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9XCJOb1wiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwic3BlY2lhbENpcmN1bXN0YW5jZXNcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlU3BlY2lhbENpcmN1bXN0YW5jZXN9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxociAvPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYi0zXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIGFsaWduLXNlbGYtZW5kXCI+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICA8c3Ryb25nPkx1bXAgU3VtOjwvc3Ryb25nPlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxzdHJvbmc+SHVzYmFuZDwvc3Ryb25nPlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgIHJlYWRPbmx5XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17aHVzYmFuZERldGFpbHMubHVtcFN1bX1cbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJodXNiYW5kTHVtcHN1bVwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxzdHJvbmc+V2lmZTwvc3Ryb25nPlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgIHJlYWRPbmx5XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17d2lmZURldGFpbHMubHVtcFN1bX1cbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJ3aWZlTHVtcHN1bVwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1iLTNcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgYWxpZ24tc2VsZi1lbmRcIj5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgIDxzdHJvbmc+UmVhbCBDb3N0Ojwvc3Ryb25nPlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICByZWFkT25seT17c3BlY2lhbENpcmN1bXN0YW5jZXMgPT09IFwiWWVzXCIgPyBmYWxzZSA6IHRydWV9XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17aHVzYmFuZERldGFpbHMucmVhbENvc3R9XG4gICAgICAgICAgICAgICAgICBuYW1lPVwiaHVzYmFuZEx1bXBzdW1cIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxuICAgICAgICAgICAgICAgICAgICBzZXRIdXNiYW5kRGV0YWlscyh7XG4gICAgICAgICAgICAgICAgICAgICAgLi4uaHVzYmFuZERldGFpbHMsXG4gICAgICAgICAgICAgICAgICAgICAgcmVhbENvc3Q6IGUudGFyZ2V0LnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgcmVhZE9ubHk9e3NwZWNpYWxDaXJjdW1zdGFuY2VzID09PSBcIlllc1wiID8gZmFsc2UgOiB0cnVlfVxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3dpZmVEZXRhaWxzLnJlYWxDb3N0fVxuICAgICAgICAgICAgICAgICAgbmFtZT1cIndpZmVMdW1wc3VtXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgc2V0V2lmZURldGFpbHMoeyAuLi53aWZlRGV0YWlscywgcmVhbENvc3Q6IGUudGFyZ2V0LnZhbHVlIH0pXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1iLTNcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgYWxpZ24tc2VsZi1lbmRcIj5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgIDxzdHJvbmc+TGl2aW5nIENvc3Q6PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgIHtOdW1iZXIoaHVzYmFuZERldGFpbHMubHVtcFN1bSkgK1xuICAgICAgICAgICAgICAgICAgICBOdW1iZXIoaHVzYmFuZERldGFpbHMucmVhbENvc3QpfVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICB7TnVtYmVyKHdpZmVEZXRhaWxzLmx1bXBTdW0pICsgTnVtYmVyKHdpZmVEZXRhaWxzLnJlYWxDb3N0KX1cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8aHIgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1iLTNcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICA8c3Ryb25nPkhvbGlkYXkgQXJyYWdlbWVudCA9IFNjaG9vbCB5ZWFyID88L3N0cm9uZz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgWWVzXG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtbC0zXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT1cIlllc1wiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwiaG9saWRheUFycmFuZ2VtZW50SXNTY2hvb2xZZWFyXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUhvbGlkYXlBcnJJc1NjaG9vbH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICBOb1xuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWwtM1wiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9XCJOb1wiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwiaG9saWRheUFycmFuZ2VtZW50SXNTY2hvb2xZZWFyXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiBzZXRob2xpZGF5QXJyYW5nZW1lbnRJc1NjaG9vbFllYXIoZmFsc2UpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYi0zXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICA8c3Ryb25nPlNjaG9vbCBZZWFyOjwvc3Ryb25nPlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICByZWFkT25seT17aG9saWRheUFycmFuZ2VtZW50SXNTY2hvb2xZZWFyID8gdHJ1ZSA6IGZhbHNlfVxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2h1c2JhbmREZXRhaWxzLnNjaG9vbFllYXJ9XG4gICAgICAgICAgICAgICAgICBuYW1lPVwic2Nob29sWWVhclwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XG4gICAgICAgICAgICAgICAgICAgIHNldEh1c2JhbmREZXRhaWxzKHtcbiAgICAgICAgICAgICAgICAgICAgICAuLi5odXNiYW5kRGV0YWlscyxcbiAgICAgICAgICAgICAgICAgICAgICBzY2hvb2xZZWFyOiBlLnRhcmdldC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgIHJlYWRPbmx5PXtob2xpZGF5QXJyYW5nZW1lbnRJc1NjaG9vbFllYXIgPyB0cnVlIDogZmFsc2V9XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17d2lmZURldGFpbHMuc2Nob29sWWVhcn1cbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJzY2hvb2xZZWFyXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgc2V0V2lmZURldGFpbHMoe1xuICAgICAgICAgICAgICAgICAgICAgIC4uLndpZmVEZXRhaWxzLFxuICAgICAgICAgICAgICAgICAgICAgIHNjaG9vbFllYXI6IGUudGFyZ2V0LnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYi0zXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICA8c3Ryb25nPlN1bW1lciBWYWNhdGlvbjo8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgcmVhZE9ubHk9e2hvbGlkYXlBcnJhbmdlbWVudElzU2Nob29sWWVhciA/IHRydWUgOiBmYWxzZX1cbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtodXNiYW5kRGV0YWlscy5zdW1tZXJWYWNhdGlvbn1cbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJzY2hvb2xZZWFyXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgc2V0SHVzYmFuZERldGFpbHMoe1xuICAgICAgICAgICAgICAgICAgICAgIC4uLmh1c2JhbmREZXRhaWxzLFxuICAgICAgICAgICAgICAgICAgICAgIHN1bW1lclZhY2F0aW9uOiBlLnRhcmdldC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgIHJlYWRPbmx5PXtob2xpZGF5QXJyYW5nZW1lbnRJc1NjaG9vbFllYXIgPyB0cnVlIDogZmFsc2V9XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17d2lmZURldGFpbHMuc3VtbWVyVmFjYXRpb259XG4gICAgICAgICAgICAgICAgICBuYW1lPVwic2Nob29sWWVhclwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XG4gICAgICAgICAgICAgICAgICAgIHNldFdpZmVEZXRhaWxzKHtcbiAgICAgICAgICAgICAgICAgICAgICAuLi53aWZlRGV0YWlscyxcbiAgICAgICAgICAgICAgICAgICAgICBzdW1tZXJWYWNhdGlvbjogZS50YXJnZXQudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1iLTNcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgIDxzdHJvbmc+Q2hyaXN0bWFzIEJyZWFrOjwvc3Ryb25nPlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICByZWFkT25seT17aG9saWRheUFycmFuZ2VtZW50SXNTY2hvb2xZZWFyID8gdHJ1ZSA6IGZhbHNlfVxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2h1c2JhbmREZXRhaWxzLmNocmlzdG1hc0JyZWFrfVxuICAgICAgICAgICAgICAgICAgbmFtZT1cInNjaG9vbFllYXJcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxuICAgICAgICAgICAgICAgICAgICBzZXRIdXNiYW5kRGV0YWlscyh7XG4gICAgICAgICAgICAgICAgICAgICAgLi4uaHVzYmFuZERldGFpbHMsXG4gICAgICAgICAgICAgICAgICAgICAgY2hyaXN0bWFzQnJlYWs6IGUudGFyZ2V0LnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgcmVhZE9ubHk9e2hvbGlkYXlBcnJhbmdlbWVudElzU2Nob29sWWVhciA/IHRydWUgOiBmYWxzZX1cbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt3aWZlRGV0YWlscy5jaHJpc3RtYXNCcmVha31cbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJzY2hvb2xZZWFyXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgc2V0V2lmZURldGFpbHMoe1xuICAgICAgICAgICAgICAgICAgICAgIC4uLndpZmVEZXRhaWxzLFxuICAgICAgICAgICAgICAgICAgICAgIGNocmlzdG1hc0JyZWFrOiBlLnRhcmdldC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWItM1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgPHN0cm9uZz5FYXN0ZXIgSG9saWRheXM6PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgIHJlYWRPbmx5PXtob2xpZGF5QXJyYW5nZW1lbnRJc1NjaG9vbFllYXIgPyB0cnVlIDogZmFsc2V9XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17aHVzYmFuZERldGFpbHMuZWFzdGVySG9saWRheXN9XG4gICAgICAgICAgICAgICAgICBuYW1lPVwic2Nob29sWWVhclwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XG4gICAgICAgICAgICAgICAgICAgIHNldEh1c2JhbmREZXRhaWxzKHtcbiAgICAgICAgICAgICAgICAgICAgICAuLi5odXNiYW5kRGV0YWlscyxcbiAgICAgICAgICAgICAgICAgICAgICBlYXN0ZXJIb2xpZGF5czogZS50YXJnZXQudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICByZWFkT25seT17aG9saWRheUFycmFuZ2VtZW50SXNTY2hvb2xZZWFyID8gdHJ1ZSA6IGZhbHNlfVxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3dpZmVEZXRhaWxzLmVhc3RlckhvbGlkYXlzfVxuICAgICAgICAgICAgICAgICAgbmFtZT1cInNjaG9vbFllYXJcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxuICAgICAgICAgICAgICAgICAgICBzZXRXaWZlRGV0YWlscyh7XG4gICAgICAgICAgICAgICAgICAgICAgLi4ud2lmZURldGFpbHMsXG4gICAgICAgICAgICAgICAgICAgICAgZWFzdGVySG9saWRheXM6IGUudGFyZ2V0LnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYi0zXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICA8c3Ryb25nPkF1dHVtbiBCcmVhazo8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgcmVhZE9ubHk9e2hvbGlkYXlBcnJhbmdlbWVudElzU2Nob29sWWVhciA/IHRydWUgOiBmYWxzZX1cbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtodXNiYW5kRGV0YWlscy5hdXR1bW5CcmVha31cbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJzY2hvb2xZZWFyXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgc2V0SHVzYmFuZERldGFpbHMoe1xuICAgICAgICAgICAgICAgICAgICAgIC4uLmh1c2JhbmREZXRhaWxzLFxuICAgICAgICAgICAgICAgICAgICAgIGF1dHVtbkJyZWFrOiBlLnRhcmdldC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgIHJlYWRPbmx5PXtob2xpZGF5QXJyYW5nZW1lbnRJc1NjaG9vbFllYXIgPyB0cnVlIDogZmFsc2V9XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17d2lmZURldGFpbHMuYXV0dW1uQnJlYWt9XG4gICAgICAgICAgICAgICAgICBuYW1lPVwic2Nob29sWWVhclwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XG4gICAgICAgICAgICAgICAgICAgIHNldFdpZmVEZXRhaWxzKHtcbiAgICAgICAgICAgICAgICAgICAgICAuLi53aWZlRGV0YWlscyxcbiAgICAgICAgICAgICAgICAgICAgICBhdXR1bW5CcmVhazogZS50YXJnZXQudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1iLTNcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgIDxzdHJvbmc+U3ByaW5nIEJyZWFrOjwvc3Ryb25nPlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICByZWFkT25seT17aG9saWRheUFycmFuZ2VtZW50SXNTY2hvb2xZZWFyID8gdHJ1ZSA6IGZhbHNlfVxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2h1c2JhbmREZXRhaWxzLnNwcmluZ0JyZWFrfVxuICAgICAgICAgICAgICAgICAgbmFtZT1cInNjaG9vbFllYXJcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxuICAgICAgICAgICAgICAgICAgICBzZXRIdXNiYW5kRGV0YWlscyh7XG4gICAgICAgICAgICAgICAgICAgICAgLi4uaHVzYmFuZERldGFpbHMsXG4gICAgICAgICAgICAgICAgICAgICAgc3ByaW5nQnJlYWs6IGUudGFyZ2V0LnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgcmVhZE9ubHk9e2hvbGlkYXlBcnJhbmdlbWVudElzU2Nob29sWWVhciA/IHRydWUgOiBmYWxzZX1cbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt3aWZlRGV0YWlscy5zcHJpbmdCcmVha31cbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJzY2hvb2xZZWFyXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgc2V0V2lmZURldGFpbHMoe1xuICAgICAgICAgICAgICAgICAgICAgIC4uLndpZmVEZXRhaWxzLFxuICAgICAgICAgICAgICAgICAgICAgIHNwcmluZ0JyZWFrOiBlLnRhcmdldC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWItM1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgPHN0cm9uZz5Ub3RhbCBudW1iZXIgb2YgZGF5czo8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgPHN0cm9uZz57aHVzYmFuZERldGFpbHMudG90YWxEYXlzfTwvc3Ryb25nPlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICA8c3Ryb25nPnt3aWZlRGV0YWlscy50b3RhbERheXN9PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWItM1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgPHN0cm9uZz5QZXJjZW50YWdlOjwvc3Ryb25nPlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICA8c3Ryb25nPntodXNiYW5kRGV0YWlscy5wZXJjZW50T2ZEYXlzfTwvc3Ryb25nPlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICA8c3Ryb25nPnt3aWZlRGV0YWlscy5wZXJjZW50T2ZEYXlzfTwvc3Ryb25nPlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxociAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWItM1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICAgIDxzdHJvbmc+U2VwZXJhdGUgc2V0dGxlbWVudCBmb3IgY2hpbGQ6IDwvc3Ryb25nPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICBZZXNcbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1sLTNcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPVwiWWVzXCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJzZXBlcmF0ZVNldHRsZW1lbnRDaGlsZFwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gb25DaGFuZ2VTZXBlcmF0ZVNldHRsZW1lbnRDaGlsZCh0cnVlKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICBOb1xuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWwtM1wiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9XCJOb1wiXG4gICAgICAgICAgICAgICAgICBkZWZhdWx0Q2hlY2tlZFxuICAgICAgICAgICAgICAgICAgbmFtZT1cInNlcGVyYXRlU2V0dGxlbWVudENoaWxkXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiBvbkNoYW5nZVNlcGVyYXRlU2V0dGxlbWVudENoaWxkKGZhbHNlKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge3NlcGVyYXRlU2V0dGxlbWVudENoaWxkICYmIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWItNVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5Db250cmlidXRpb24gQnkgRGVidG9yKCUpPC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2h1c2JhbmREZXRhaWxzLmNvbnRyaURlYnRvcn1cbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNvbnRyaURlYnRvclwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgICBzZXRIdXNiYW5kRGV0YWlscyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5odXNiYW5kRGV0YWlscyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyaURlYnRvcjogZS50YXJnZXQudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17d2lmZURldGFpbHMuY29udHJpRGVidG9yfVxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY29udHJpRGVidG9yXCJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxuICAgICAgICAgICAgICAgICAgICAgIHNldFdpZmVEZXRhaWxzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLndpZmVEZXRhaWxzLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJpRGVidG9yOiBlLnRhcmdldC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7c2VwZXJhdGVTZXR0bGVtZW50Q2hpbGQmJjxkaXYgY2xhc3NOYW1lPVwicm93IG1iLTVcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgIDxzdHJvbmc+Q3Jvc3MtTmF0aW9uYWwgQ29zdCglKTwvc3Ryb25nPlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17aHVzYmFuZERldGFpbHMuY3Jvc3NOYXRpb25hbENvc3RzfVxuICAgICAgICAgICAgICAgICAgcmVhZE9ubHlcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJjcm9zc05hdGlvbmFsQ29zdHNcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3dpZmVEZXRhaWxzLmNyb3NzTmF0aW9uYWxDb3N0c31cbiAgICAgICAgICAgICAgICAgIHJlYWRPbmx5XG4gICAgICAgICAgICAgICAgICBuYW1lPVwiY3Jvc3NOYXRpb25hbENvc3RzXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj48YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIG9uQ2xpY2s9e29uQ2xpY2tDYWxDdWxhdGVDcm9zc05hdGlvbmFsQ29zdHN9PlJlLWNhbGN1bGF0ZTwvYnV0dG9uPjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+fVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWItNVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPjxwPjxzdHJvbmc+VG90YWwgQ29udHJpYnV0aW9uIGluIGtpbmQ6PC9zdHJvbmc+PC9wPjwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPjwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1wcmltYXJ5XCIgb25DbGljaz17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgICAgQ2FsY3VsYXRlXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=