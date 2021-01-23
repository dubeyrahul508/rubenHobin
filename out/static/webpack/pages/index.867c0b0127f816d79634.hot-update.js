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
    contriDebtor: 0
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
    contriDebtor: 0
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
        crossNationalCosts: 100 - Number(husbandDetails.contriDebtor) / 100
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
                  return onChangeSeperateSettlementChild(true);
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
                defaultChecked: true,
                name: "seperateSettlementChild",
                onChange: function onChange() {
                  return onChangeSeperateSettlementChild(false);
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
          }, this), seperateSettlementChild && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "row mb-5",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                  children: "Contribution By Debtor(%)"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1037,
                  columnNumber: 21
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1036,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 1035,
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
                lineNumber: 1041,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 1040,
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
                lineNumber: 1055,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 1054,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 1034,
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
                  lineNumber: 1073,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1072,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 1071,
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
                lineNumber: 1077,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 1076,
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
                lineNumber: 1086,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 1085,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: "btn btn-primary",
                onClick: onClickCalCulateCrossNationalCosts,
                children: "Re-calculate"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1094,
                columnNumber: 36
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 1094,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 1070,
            columnNumber: 39
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            className: "btn btn-outline-primary",
            onClick: handleSubmit,
            children: "Calculate"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 1096,
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

_s(Home, "QW0Pu9TqMWcCxa6xzXNt9nFDVik=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInVzZVN0YXRlIiwibmFtZSIsIm5ldEluY29tZSIsImNoaWxkQmVuZWZpdHMiLCJleHRyYUNoaWxkQmVuZWZpdHMiLCJ0b3RhbEluY29tZSIsIm1lYWxWb3VjaGVycyIsImNvbXBhbnlDYXIiLCJ0YW5rQ2FyZCIsImx1bXBTdW0iLCJyZWFsQ29zdCIsInNjaG9vbFllYXIiLCJzdW1tZXJWYWNhdGlvbiIsImNocmlzdG1hc0JyZWFrIiwiZWFzdGVySG9saWRheXMiLCJhdXR1bW5CcmVhayIsInNwcmluZ0JyZWFrIiwidG90YWxEYXlzIiwicGVyY2VudE9mRGF5cyIsImNyb3NzTmF0aW9uYWxDb3N0cyIsInRvdGFsQ29udHJpIiwiY29udHJpRGVidG9yIiwiaHVzYmFuZERldGFpbHMiLCJzZXRIdXNiYW5kRGV0YWlscyIsIndpZmVEZXRhaWxzIiwic2V0V2lmZURldGFpbHMiLCJob2xpZGF5QXJyYW5nZW1lbnRJc1NjaG9vbFllYXIiLCJzZXRob2xpZGF5QXJyYW5nZW1lbnRJc1NjaG9vbFllYXIiLCJsaXZlSW5Db3N0U2hhcmluZyIsInNldExpdmVJbkNvc3RTaGFyaW5nIiwic3BlY2lhbENpcmN1bXN0YW5jZXMiLCJzZXRTcGVjaWFsQ2lyY3Vtc3RhbmNlcyIsInNlcGVyYXRlU2V0dGxlbWVudENoaWxkIiwic2V0U2VwZXJhdGVTZXR0bGVtZW50Q2hpbGQiLCJjaGlsZE5hbWUiLCJjaGlsZEFnZSIsImlucHV0TGlzdCIsInNldElucHV0TGlzdCIsImNvbnRyaV8xIiwiY29udHJpXzIiLCJodXNiYW5kRmluYWxBbXQiLCJzZXRIdXNiYW5kRmluYWxBbXQiLCJ3aWZlRmluYWxBbXQiLCJzZXRXaWZlRmluYWxBbXQiLCJvbkNoYW5nZUNoaWxkcmVuRGF0YSIsImUiLCJpbmRleCIsInRhcmdldCIsInZhbHVlIiwiY2hpbGRyZW5MaXN0IiwicmVtb3ZlQ2hpbGQiLCJzcGxpY2UiLCJvbkNoYW5nZUxpdmVJbkNvc3RTaGFyaW5nIiwib25DaGFuZ2VTcGVjaWFsQ2lyY3Vtc3RhbmNlcyIsIm9uQ2hhbmdlU2VwZXJhdGVTZXR0bGVtZW50Q2hpbGQiLCJzdGF0ZSIsIm9uQ2xpY2tDYWxDdWxhdGVDcm9zc05hdGlvbmFsQ29zdHMiLCJOdW1iZXIiLCJvbkNoYW5nZUhvbGlkYXlBcnJJc1NjaG9vbCIsImhhbmRsZVN1Ym1pdCIsImh1c2JhbmRDb250cmlEZWJ0b3IiLCJ3aWZlQ29udHJpRGVidG9yIiwic3ViVG90YWxIdXNiYW5kIiwic3ViVG90YWxXaWZlIiwidG90YWwiLCJ0b3RhbENoaWxkQmVuZWZpdHMiLCJodXNiYW5kRWFybmluZ1BlcmNlbnQiLCJ3aWZlRWFybmluZ1BlcmNlbnQiLCJodXNiYW5kTGl2aW5nQ29zdCIsIndpZmVMaXZpbmdDb3N0IiwiaHVzYmFuZFJlc2lkdWFsUmVzb3VyY2VzIiwid2lmZVJlc2lkdWFsUmVzb3VyY2VzIiwiaHVzYmFuZFNoYXJlSW5SZXNpZHVhbFJlc291cmNlcyIsIndpZmVTaGFyZUluUmVzaWR1YWxSZXNvdXJjZXMiLCJodXNiYW5kVG90YWxEYXlzIiwid2lmZVRvdGFsRGF5cyIsImh1c2JhbmRQZXJjZW50YWdlT2ZEYXlzIiwid2lmZVBlcmNlbnRhZ2VPZkRheXMiLCJtYXAiLCJ2YWwiLCJpIiwibGVuZ3RoIiwiY2hlY2tlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFZSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ2VDLHNEQUFRLENBQUM7QUFDbkRDLFFBQUksRUFBRSxFQUQ2QztBQUVuREMsYUFBUyxFQUFFLEVBRndDO0FBR25EQyxpQkFBYSxFQUFFLEVBSG9DO0FBSW5EQyxzQkFBa0IsRUFBRSxFQUorQjtBQUtuREMsZUFBVyxFQUFFLEVBTHNDO0FBTW5EQyxnQkFBWSxFQUFFLEVBTnFDO0FBT25EQyxjQUFVLEVBQUUsRUFQdUM7QUFRbkRDLFlBQVEsRUFB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QURaO0FBRUUsb0JBQUksRUFBQyxRQUZQO0FBR0UscUJBQUssRUFBRVYsY0FBYyxDQUFDSCxrQkFIeEI7QUFJRSx3QkFBUSxNQUpWO0FBS0Usb0JBQUksRUFBQztBQUxQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQU53QixlQWV4QjtBQUFLLHVCQUFTLEVBQUMsS0FBZjtBQUFBLHFDQUNFO0FBQ0UseUJBQVMsRUFBQyxjQURaO0FBRUUsb0JBQUksRUFBQyxRQUZQO0FBR0UscUJBQUssRUFBRUssV0FBVyxDQUFDTCxrQkFIckI7QUFJRSx3QkFBUSxNQUpWO0FBS0Usb0JBQUksRUFBQztBQUxQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQWZ3QixlQXdCeEI7QUFBSyx1QkFBUyxFQUFDLEtBQWY7QUFBQSxxQ0FBcUI7QUFBUSx5QkFBUyxFQUFDLGlCQUFsQjtBQUFvQyx1QkFBTyxFQUFFcUMsa0NBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBeEJ3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBL3hCNUIsZUF5ekJFO0FBQVEscUJBQVMsRUFBQyx5QkFBbEI7QUFBNEMsbUJBQU8sRUFBRUcsWUFBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBenpCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWxCRjtBQUFBLGtCQURGO0FBczFCRDs7R0E3a0N1QjVELEk7O0tBQUFBLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguODY3YzBiMDEyN2Y4MTZkNzk2MzQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2h1c2JhbmREZXRhaWxzLCBzZXRIdXNiYW5kRGV0YWlsc10gPSB1c2VTdGF0ZSh7XG4gICAgbmFtZTogXCJcIixcbiAgICBuZXRJbmNvbWU6IFwiXCIsXG4gICAgY2hpbGRCZW5lZml0czogXCJcIixcbiAgICBleHRyYUNoaWxkQmVuZWZpdHM6IFwiXCIsXG4gICAgdG90YWxJbmNvbWU6IFwiXCIsXG4gICAgbWVhbFZvdWNoZXJzOiBcIlwiLFxuICAgIGNvbXBhbnlDYXI6IFwiXCIsXG4gICAgdGFua0NhcmQ6IFwiXCIsXG4gICAgbHVtcFN1bTogXCJcIixcbiAgICByZWFsQ29zdDogXCJcIixcbiAgICBzY2hvb2xZZWFyOiA3LjcsXG4gICAgc3VtbWVyVmFjYXRpb246IDMxLjMxLFxuICAgIGNocmlzdG1hc0JyZWFrOiA3LjcsXG4gICAgZWFzdGVySG9saWRheXM6IDcuNyxcbiAgICBhdXR1bW5CcmVhazogNy4wLFxuICAgIHNwcmluZ0JyZWFrOiAwLjcsXG4gICAgdG90YWxEYXlzOiBcIlwiLFxuICAgIHBlcmNlbnRPZkRheXM6IFwiXCIsXG4gICAgY3Jvc3NOYXRpb25hbENvc3RzOiAwLFxuICAgIHRvdGFsQ29udHJpOiBcIlwiLFxuICAgIGNvbnRyaURlYnRvcjogMCxcbiAgfSk7XG4gIGNvbnN0IFt3aWZlRGV0YWlscywgc2V0V2lmZURldGFpbHNdID0gdXNlU3RhdGUoe1xuICAgIG5hbWU6IFwiXCIsXG4gICAgbmV0SW5jb21lOiBcIlwiLFxuICAgIGNoaWxkQmVuZWZpdHM6IFwiXCIsXG4gICAgZXh0cmFDaGlsZEJlbmVmaXRzOiBcIlwiLFxuICAgIHRvdGFsSW5jb21lOiBcIlwiLFxuICAgIG1lYWxWb3VjaGVyczogXCJcIixcbiAgICBjb21wYW55Q2FyOiBcIlwiLFxuICAgIHRhbmtDYXJkOiBcIlwiLFxuICAgIGx1bXBTdW06IFwiXCIsXG4gICAgcmVhbENvc3Q6IFwiXCIsXG4gICAgc2Nob29sWWVhcjogNy43LFxuICAgIHN1bW1lclZhY2F0aW9uOiAzMS4zMSxcbiAgICBjaHJpc3RtYXNCcmVhazogNy43LFxuICAgIGVhc3RlckhvbGlkYXlzOiA3LjcsXG4gICAgYXV0dW1uQnJlYWs6IDcuMCxcbiAgICBzcHJpbmdCcmVhazogMC43LFxuICAgIHRvdGFsRGF5czogXCJcIixcbiAgICBwZXJjZW50T2ZEYXlzOiBcIlwiLFxuICAgIGNyb3NzTmF0aW9uYWxDb3N0czogMCxcbiAgICB0b3RhbENvbnRyaTogXCJcIixcbiAgICBjb250cmlEZWJ0b3I6IDAsXG4gIH0pO1xuXG4gIGNvbnN0IFtcbiAgICBob2xpZGF5QXJyYW5nZW1lbnRJc1NjaG9vbFllYXIsXG4gICAgc2V0aG9saWRheUFycmFuZ2VtZW50SXNTY2hvb2xZZWFyLFxuICBdID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgY29uc3QgW2xpdmVJbkNvc3RTaGFyaW5nLCBzZXRMaXZlSW5Db3N0U2hhcmluZ10gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3NwZWNpYWxDaXJjdW1zdGFuY2VzLCBzZXRTcGVjaWFsQ2lyY3Vtc3RhbmNlc10gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3NlcGVyYXRlU2V0dGxlbWVudENoaWxkLCBzZXRTZXBlcmF0ZVNldHRsZW1lbnRDaGlsZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpbnB1dExpc3QsIHNldElucHV0TGlzdF0gPSB1c2VTdGF0ZShbeyBjaGlsZE5hbWU6IFwiXCIsIGNoaWxkQWdlOiBcIlwiIH1dKTtcblxuICAvLyBGSU5BTCBBTU9VTlRTXG4gIGNvbnN0IFtodXNiYW5kRmluYWxBbXQsIHNldEh1c2JhbmRGaW5hbEFtdF0gPSB1c2VTdGF0ZSh7XG4gICAgY29udHJpXzE6IFwiXCIsXG4gICAgY29udHJpXzI6IFwiXCIsXG4gIH0pO1xuICBjb25zdCBbd2lmZUZpbmFsQW10LCBzZXRXaWZlRmluYWxBbXRdID0gdXNlU3RhdGUoe1xuICAgIGNvbnRyaV8xOiBcIlwiLFxuICAgIGNvbnRyaV8yOiBcIlwiLFxuICB9KTtcblxuICAvLyBIQU5ETEUgSU5QVVQgRklFTEQgT0YgQ0hJTERSRU5TJ1xuICBjb25zdCBvbkNoYW5nZUNoaWxkcmVuRGF0YSA9IChlLCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGUudGFyZ2V0O1xuICAgIGNvbnN0IGNoaWxkcmVuTGlzdCA9IFsuLi5pbnB1dExpc3RdO1xuICAgIGNoaWxkcmVuTGlzdFtpbmRleF1bbmFtZV0gPSB2YWx1ZTtcbiAgICBzZXRJbnB1dExpc3QoY2hpbGRyZW5MaXN0KTtcbiAgfTtcblxuICAvLyBSRU1PVkUgQ0hJTEQgRlVOQ1RJT05cbiAgY29uc3QgcmVtb3ZlQ2hpbGQgPSAoaW5kZXgpID0+IHtcbiAgICBjb25zdCBjaGlsZHJlbkxpc3QgPSBbLi4uaW5wdXRMaXN0XTtcbiAgICBjaGlsZHJlbkxpc3Quc3BsaWNlKGluZGV4LCAxKTtcbiAgICBzZXRJbnB1dExpc3QoY2hpbGRyZW5MaXN0KTtcbiAgfTtcblxuICBjb25zdCBvbkNoYW5nZUxpdmVJbkNvc3RTaGFyaW5nID0gKGUpID0+IHtcbiAgICBzZXRMaXZlSW5Db3N0U2hhcmluZyhlLnRhcmdldC52YWx1ZSk7XG4gICAgaWYgKFxuICAgICAgZS50YXJnZXQudmFsdWUgPT09IFwiWWVzXCIgJiZcbiAgICAgIChzcGVjaWFsQ2lyY3Vtc3RhbmNlcyA9PT0gXCJcIiB8fCBzcGVjaWFsQ2lyY3Vtc3RhbmNlcyA9PT0gXCJOb1wiKVxuICAgICkge1xuICAgICAgc2V0SHVzYmFuZERldGFpbHMoeyAuLi5odXNiYW5kRGV0YWlscywgbHVtcFN1bTogNDcwIH0pO1xuICAgICAgc2V0V2lmZURldGFpbHMoeyAuLi53aWZlRGV0YWlscywgbHVtcFN1bTogNDcwIH0pO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICBlLnRhcmdldC52YWx1ZSA9PT0gXCJOb1wiICYmXG4gICAgICAoc3BlY2lhbENpcmN1bXN0YW5jZXMgPT09IFwiXCIgfHwgc3BlY2lhbENpcmN1bXN0YW5jZXMgPT09IFwiTm9cIilcbiAgICApIHtcbiAgICAgIHNldEh1c2JhbmREZXRhaWxzKHsgLi4uaHVzYmFuZERldGFpbHMsIGx1bXBTdW06IDk0MCB9KTtcbiAgICAgIHNldFdpZmVEZXRhaWxzKHsgLi4ud2lmZURldGFpbHMsIGx1bXBTdW06IDk0MCB9KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgb25DaGFuZ2VTcGVjaWFsQ2lyY3Vtc3RhbmNlcyA9IChlKSA9PiB7XG4gICAgc2V0U3BlY2lhbENpcmN1bXN0YW5jZXMoZS50YXJnZXQudmFsdWUpO1xuICAgIGlmIChlLnRhcmdldC52YWx1ZSA9PT0gXCJZZXNcIikge1xuICAgICAgc2V0SHVzYmFuZERldGFpbHMoeyAuLi5odXNiYW5kRGV0YWlscywgbHVtcFN1bTogMCB9KTtcbiAgICAgIHNldFdpZmVEZXRhaWxzKHsgLi4ud2lmZURldGFpbHMsIGx1bXBTdW06IDAgfSk7XG4gICAgfSBlbHNlIGlmIChlLnRhcmdldC52YWx1ZSA9PT0gXCJOb1wiKSB7XG4gICAgICBzZXRIdXNiYW5kRGV0YWlscyh7IC4uLmh1c2JhbmREZXRhaWxzLCByZWFsQ29zdDogMCB9KTtcbiAgICAgIHNldFdpZmVEZXRhaWxzKHsgLi4ud2lmZURldGFpbHMsIHJlYWxDb3N0OiAwIH0pO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBvbkNoYW5nZVNlcGVyYXRlU2V0dGxlbWVudENoaWxkID0gKHN0YXRlKSA9PiB7XG4gICAgc2V0U2VwZXJhdGVTZXR0bGVtZW50Q2hpbGQoc3RhdGUpO1xuICAgIGlmIChzdGF0ZSA9PT0gdHJ1ZSkge1xuICAgICAgc2V0SHVzYmFuZERldGFpbHMoeyAuLi5odXNiYW5kRGV0YWlscywgY29udHJpRGVidG9yOiAwIH0pO1xuICAgICAgc2V0V2lmZURldGFpbHMoeyAuLi53aWZlRGV0YWlscywgY29udHJpRGVidG9yOiAwIH0pO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBvbkNsaWNrQ2FsQ3VsYXRlQ3Jvc3NOYXRpb25hbENvc3RzID0gKCk9PntcbiAgICBpZihodXNiYW5kRGV0YWlscy5jb250cmlEZWJ0b3I+MCl7XG4gICAgICBzZXRIdXNiYW5kRGV0YWlscyh7Li4uaHVzYmFuZERldGFpbHMsIGNyb3NzTmF0aW9uYWxDb3N0czogaHVzYmFuZERldGFpbHMuY29udHJpRGVidG9yfSlcbiAgICB9XG4gICAgaWYoaHVzYmFuZERldGFpbHMuY29udHJpRGVidG9yPT09MCl7XG4gICAgICBzZXRIdXNiYW5kRGV0YWlscyh7Li4uaHVzYmFuZERldGFpbHMsIGNyb3NzTmF0aW9uYWxDb3N0czogMTAwLShOdW1iZXIod2lmZURldGFpbHMuY29udHJpRGVidG9yKS8xMDApfSlcbiAgICB9XG4gICAgaWYod2lmZURldGFpbHMuY29udHJpRGVidG9yPjApe1xuICAgICAgc2V0V2lmZURldGFpbHMoey4uLndpZmVEZXRhaWxzLCBjcm9zc05hdGlvbmFsQ29zdHM6IHdpZmVEZXRhaWxzLmNvbnRyaURlYnRvcn0pXG4gICAgfVxuICAgIGlmKHdpZmVEZXRhaWxzLmNvbnRyaURlYnRvcj09PTApe1xuICAgICAgc2V0V2lmZURldGFpbHMoey4uLndpZmVEZXRhaWxzLCBjcm9zc05hdGlvbmFsQ29zdHM6IDEwMC0oTnVtYmVyKGh1c2JhbmREZXRhaWxzLmNvbnRyaURlYnRvcikvMTAwKX0pXG4gICAgfVxuICB9XG4gIGNvbnN0IG9uQ2hhbmdlSG9saWRheUFycklzU2Nob29sID0gKCkgPT4ge1xuICAgIHNldEh1c2JhbmREZXRhaWxzKHtcbiAgICAgIC4uLmh1c2JhbmREZXRhaWxzLFxuICAgICAgc2Nob29sWWVhcjogNy43LFxuICAgICAgc3VtbWVyVmFjYXRpb246IDMxLjMxLFxuICAgICAgY2hyaXN0bWFzQnJlYWs6IDcuNyxcbiAgICAgIGVhc3RlckhvbGlkYXlzOiA3LjcsXG4gICAgICBhdXR1bW5CcmVhazogNy4wLFxuICAgICAgc3ByaW5nQnJlYWs6IDAuNyxcbiAgICB9KTtcbiAgICBzZXRXaWZlRGV0YWlscyh7XG4gICAgICAuLi53aWZlRGV0YWlscyxcbiAgICAgIHNjaG9vbFllYXI6IDcuNyxcbiAgICAgIHN1bW1lclZhY2F0aW9uOiAzMS4zMSxcbiAgICAgIGNocmlzdG1hc0JyZWFrOiA3LjcsXG4gICAgICBlYXN0ZXJIb2xpZGF5czogNy43LFxuICAgICAgYXV0dW1uQnJlYWs6IDcuMCxcbiAgICAgIHNwcmluZ0JyZWFrOiAwLjcsXG4gICAgfSk7XG4gICAgc2V0aG9saWRheUFycmFuZ2VtZW50SXNTY2hvb2xZZWFyKHRydWUpO1xuICB9O1xuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoKSA9PiB7XG4gICAgY29uc3QgaHVzYmFuZENvbnRyaURlYnRvciA9IE51bWJlcihodXNiYW5kRGV0YWlscy5jb250cmlEZWJ0b3IpIC8gMTAwO1xuICAgIGNvbnN0IHdpZmVDb250cmlEZWJ0b3IgPSBOdW1iZXIod2lmZURldGFpbHMuY29udHJpRGVidG9yKSAvIDEwMDtcblxuICAgIC8vIEI0MSA9IEIzMiArIEIzMyArIEIzNCArIEIzNVxuICAgIGNvbnN0IHN1YlRvdGFsSHVzYmFuZCA9XG4gICAgICBOdW1iZXIoaHVzYmFuZERldGFpbHMubmV0SW5jb21lKSArXG4gICAgICBOdW1iZXIoaHVzYmFuZERldGFpbHMubWVhbFZvdWNoZXJzKSArXG4gICAgICBOdW1iZXIoaHVzYmFuZERldGFpbHMuY29tcGFueUNhcikgK1xuICAgICAgTnVtYmVyKGh1c2JhbmREZXRhaWxzLnRhbmtDYXJkKTtcblxuICAgIC8vIEM0MSA9IEMzMiArIEMzMyArIEMzNCArIEMzNVxuICAgIGNvbnN0IHN1YlRvdGFsV2lmZSA9XG4gICAgICBOdW1iZXIod2lmZURldGFpbHMubmV0SW5jb21lKSArXG4gICAgICBOdW1iZXIod2lmZURldGFpbHMubWVhbFZvdWNoZXJzKSArXG4gICAgICBOdW1iZXIod2lmZURldGFpbHMuY29tcGFueUNhcikgK1xuICAgICAgTnVtYmVyKHdpZmVEZXRhaWxzLnRhbmtDYXJkKTtcblxuICAgIC8vIEI0MiA9IEI0MSArIEM0MVxuICAgIGNvbnN0IHRvdGFsID0gc3ViVG90YWxIdXNiYW5kICsgc3ViVG90YWxXaWZlO1xuXG4gICAgLy8gQjQzID0gQjQyICsgQjM4ICsgQzM4ICsgQjM5ICsgQzM5XG4gICAgY29uc3QgdG90YWxDaGlsZEJlbmVmaXRzID1cbiAgICAgIHRvdGFsICtcbiAgICAgIE51bWJlcihodXNiYW5kRGV0YWlscy5jaGlsZEJlbmVmaXRzKSArXG4gICAgICBOdW1iZXIod2lmZURldGFpbHMuY2hpbGRCZW5lZml0cykgK1xuICAgICAgTnVtYmVyKGh1c2JhbmREZXRhaWxzLmV4dHJhQ2hpbGRCZW5lZml0cykgK1xuICAgICAgTnVtYmVyKHdpZmVEZXRhaWxzLmV4dHJhQ2hpbGRCZW5lZml0cyk7XG5cbiAgICAvLyBCNDUgPSAxIC8gQjQyICogQjQxXG4gICAgY29uc3QgaHVzYmFuZEVhcm5pbmdQZXJjZW50ID0gKDEgLyB0b3RhbCkgKiBzdWJUb3RhbEh1c2JhbmQ7XG5cbiAgICAvLyBDNDUgPSAxIC8gQjQyICogQzQxXG4gICAgY29uc3Qgd2lmZUVhcm5pbmdQZXJjZW50ID0gKDEgLyB0b3RhbCkgKiBzdWJUb3RhbFdpZmU7XG5cbiAgICAvLyBCNTQgPSBCNTEgKyBCNTJcbiAgICBjb25zdCBodXNiYW5kTGl2aW5nQ29zdCA9XG4gICAgICBOdW1iZXIoaHVzYmFuZERldGFpbHMubHVtcFN1bSkgKyBOdW1iZXIoaHVzYmFuZERldGFpbHMucmVhbENvc3QpO1xuXG4gICAgLy8gQzU0ID0gQzUxICsgQzUyXG4gICAgY29uc3Qgd2lmZUxpdmluZ0Nvc3QgPVxuICAgICAgTnVtYmVyKHdpZmVEZXRhaWxzLmx1bXBTdW0pICsgTnVtYmVyKHdpZmVEZXRhaWxzLnJlYWxDb3N0KTtcblxuICAgIC8vIEI1NyA9IEI0MSAtIEI1NFxuICAgIGNvbnN0IGh1c2JhbmRSZXNpZHVhbFJlc291cmNlcyA9IHN1YlRvdGFsSHVzYmFuZCAtIGh1c2JhbmRMaXZpbmdDb3N0O1xuXG4gICAgLy8gQzU3ID0gQzMyICsgQzM5IC0gQzU0XG4gICAgY29uc3Qgd2lmZVJlc2lkdWFsUmVzb3VyY2VzID1cbiAgICAgIE51bWJlcih3aWZlRGV0YWlscy5uZXRJbmNvbWUpICtcbiAgICAgIE51bWJlcih3aWZlRGV0YWlscy5leHRyYUNoaWxkQmVuZWZpdHMpIC1cbiAgICAgIHdpZmVMaXZpbmdDb3N0O1xuXG4gICAgLy8gQjU5ID0gMSAvICggQjU3ICsgQzU3ICkgKiBCNTdcbiAgICBjb25zdCBodXNiYW5kU2hhcmVJblJlc2lkdWFsUmVzb3VyY2VzID1cbiAgICAgICgxIC8gKGh1c2JhbmRSZXNpZHVhbFJlc291cmNlcyArIHdpZmVSZXNpZHVhbFJlc291cmNlcykpICpcbiAgICAgIGh1c2JhbmRSZXNpZHVhbFJlc291cmNlcztcblxuICAgIC8vIEM1OSA9IDEgLyAoIEI1NyArIEM1NyApICogQzU3XG4gICAgY29uc3Qgd2lmZVNoYXJlSW5SZXNpZHVhbFJlc291cmNlcyA9XG4gICAgICAoMSAvIChodXNiYW5kUmVzaWR1YWxSZXNvdXJjZXMgKyB3aWZlUmVzaWR1YWxSZXNvdXJjZXMpKSAqXG4gICAgICB3aWZlUmVzaWR1YWxSZXNvdXJjZXM7XG5cbiAgICAvLyBCNzcgPSBTVU0oIEI2NyA6IEI3NSApICsgKCBCNjMgKiAxOC42NDI4NiApXG4gICAgY29uc3QgaHVzYmFuZFRvdGFsRGF5cyA9XG4gICAgICBOdW1iZXIoaHVzYmFuZERldGFpbHMuc3VtbWVyVmFjYXRpb24pICtcbiAgICAgIE51bWJlcihodXNiYW5kRGV0YWlscy5jaHJpc3RtYXNCcmVhaykgK1xuICAgICAgTnVtYmVyKGh1c2JhbmREZXRhaWxzLmVhc3RlckhvbGlkYXlzKSArXG4gICAgICBOdW1iZXIoaHVzYmFuZERldGFpbHMuYXV0dW1uQnJlYWspICtcbiAgICAgIE51bWJlcihodXNiYW5kRGV0YWlscy5zcHJpbmdCcmVhayk7XG4gICAgc2V0SHVzYmFuZERldGFpbHMoeyAuLi5odXNiYW5kRGV0YWlscywgdG90YWxEYXlzOiBodXNiYW5kVG90YWxEYXlzIH0pO1xuXG4gICAgLy8gQzc3ID0gU1VNKCBDNjcgOiBDNzUgKSArICggQzYzICogMTguNjQyODYgKVxuICAgIGNvbnN0IHdpZmVUb3RhbERheXMgPVxuICAgICAgTnVtYmVyKHdpZmVEZXRhaWxzLnN1bW1lclZhY2F0aW9uKSArXG4gICAgICBOdW1iZXIod2lmZURldGFpbHMuY2hyaXN0bWFzQnJlYWspICtcbiAgICAgIE51bWJlcih3aWZlRGV0YWlscy5lYXN0ZXJIb2xpZGF5cykgK1xuICAgICAgTnVtYmVyKHdpZmVEZXRhaWxzLmF1dHVtbkJyZWFrKSArXG4gICAgICBOdW1iZXIod2lmZURldGFpbHMuc3ByaW5nQnJlYWspO1xuICAgIHNldFdpZmVEZXRhaWxzKHsgLi4ud2lmZURldGFpbHMsIHRvdGFsRGF5czogd2lmZVRvdGFsRGF5cyB9KTtcblxuICAgIC8vIEI3OSA9IDEgLyAzNjUgKiBCNzdcbiAgICBjb25zdCBodXNiYW5kUGVyY2VudGFnZU9mRGF5cyA9ICgxIC8gMzY1KSAqIGh1c2JhbmRUb3RhbERheXM7XG4gICAgc2V0SHVzYmFuZERldGFpbHMoe1xuICAgICAgLi4uaHVzYmFuZERldGFpbHMsXG4gICAgICBwZXJjZW50T2ZEYXlzOiBodXNiYW5kUGVyY2VudGFnZU9mRGF5cyxcbiAgICB9KTtcblxuICAgIC8vIEM3OSA9IDEgLyAzNjUgKiBDNzdcbiAgICBjb25zdCB3aWZlUGVyY2VudGFnZU9mRGF5cyA9ICgxIC8gMzY1KSAqIHdpZmVUb3RhbERheXM7XG4gICAgc2V0V2lmZURldGFpbHMoeyAuLi53aWZlRGV0YWlscywgcGVyY2VudE9mRGF5czogd2lmZVBlcmNlbnRhZ2VPZkRheXMgfSk7XG5cbiAgICAvL1xuICB9O1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItZXhwYW5kLXNtIGJnLWRhcmsgbmF2YmFyLWRhcmsganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cbiAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kXCIgaHJlZj1cIi8jXCI+XG4gICAgICAgICAgUkVOQVJEXG4gICAgICAgIDwvYT5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmJhci1uYXZcIj5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIvI1wiIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+XG4gICAgICAgICAgICAgIEFib3V0IFVzXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIvI1wiIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+XG4gICAgICAgICAgICAgIENvbnRhY3QgVXNcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgPC9uYXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIG10LTVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtOFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBjdXN0b21DYXJkX3N0eWxlIHAtNSBib3JkZXItMFwiPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImNhcmQtdGl0bGUgdGV4dC1jZW50ZXIgcHktNVwiPkhvYmluIENhbGN1bGF0aW9uPC9oMj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG15LTNcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgYWxpZ24tc2VsZi1lbmRcIj5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgIDxzdHJvbmc+TmFtZTo8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICA8c3Ryb25nPkh1c2JhbmQ8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2h1c2JhbmREZXRhaWxzLm5hbWV9XG4gICAgICAgICAgICAgICAgICBuYW1lPVwiaHVzYmFuZE5hbWVcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxuICAgICAgICAgICAgICAgICAgICBzZXRIdXNiYW5kRGV0YWlscyh7XG4gICAgICAgICAgICAgICAgICAgICAgLi4uaHVzYmFuZERldGFpbHMsXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZTogZS50YXJnZXQudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxzdHJvbmc+V2lmZTwvc3Ryb25nPlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17d2lmZURldGFpbHMubmFtZX1cbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJ3aWZlTmFtZVwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XG4gICAgICAgICAgICAgICAgICAgIHNldFdpZmVEZXRhaWxzKHsgLi4ud2lmZURldGFpbHMsIG5hbWU6IGUudGFyZ2V0LnZhbHVlIH0pXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHtpbnB1dExpc3QubWFwKCh2YWwsIGkpID0+IChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWItM1wiIGtleT17aX0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNVwiPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsPkNoaWxkIE5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbC5jaGlsZE5hbWV9XG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjaGlsZE5hbWVcIlxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uQ2hhbmdlQ2hpbGRyZW5EYXRhKGUsIGkpfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC01XCI+XG4gICAgICAgICAgICAgICAgICA8bGFiZWw+Q2hpbGQgQWdlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbC5jaGlsZEFnZX1cbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNoaWxkQWdlXCJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbkNoYW5nZUNoaWxkcmVuRGF0YShlLCBpKX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMiBhbGlnbi1zZWxmLWVuZFwiPlxuICAgICAgICAgICAgICAgICAge2kgPT09IGlucHV0TGlzdC5sZW5ndGggLSAxID8gKFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdWNjZXNzIG1yLTNcIlxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRJbnB1dExpc3QoW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5pbnB1dExpc3QsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgY2hpbGROYW1lOiBcIlwiLCBjaGlsZEFnZTogXCJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICArXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgPD48Lz5cbiAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICAgIHtpbnB1dExpc3QubGVuZ3RoID4gMSA/IChcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyXCJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByZW1vdmVDaGlsZChpKX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICZ0aW1lcztcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICA8PjwvPlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDxociAvPlxuICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1iLTNcIj5cbiAgICAgICAgICAgICAgPHN0cm9uZz5JbmNvbWU6PC9zdHJvbmc+XG4gICAgICAgICAgICA8L2g1PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWItM1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBhbGlnbi1zZWxmLWVuZFwiPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgPHN0cm9uZz5OZXQgSW5jb21lOjwvc3Ryb25nPlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxzdHJvbmc+SHVzYmFuZDwvc3Ryb25nPlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtodXNiYW5kRGV0YWlscy5uZXRJbmNvbWV9XG4gICAgICAgICAgICAgICAgICBuYW1lPVwiaHVzYmFuZE5ldEluY29tZVwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XG4gICAgICAgICAgICAgICAgICAgIHNldEh1c2JhbmREZXRhaWxzKHtcbiAgICAgICAgICAgICAgICAgICAgICAuLi5odXNiYW5kRGV0YWlscyxcbiAgICAgICAgICAgICAgICAgICAgICBuZXRJbmNvbWU6IGUudGFyZ2V0LnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICA8c3Ryb25nPldpZmU8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17d2lmZURldGFpbHMubmV0SW5jb21lfVxuICAgICAgICAgICAgICAgICAgbmFtZT1cIndpZmVOZXRJbmNvbWVcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxuICAgICAgICAgICAgICAgICAgICBzZXRXaWZlRGV0YWlscyh7XG4gICAgICAgICAgICAgICAgICAgICAgLi4ud2lmZURldGFpbHMsXG4gICAgICAgICAgICAgICAgICAgICAgbmV0SW5jb21lOiBlLnRhcmdldC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgey8qIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1iLTNcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgYWxpZ24tc2VsZi1lbmRcIj5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgIDxzdHJvbmc+TWVhbCBWb3VjaGVyczo8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtodXNiYW5kRGV0YWlscy5tZWFsVm91Y2hlcnMgPyB0cnVlIDogZmFsc2V9XG4gICAgICAgICAgICAgICAgICBuYW1lPVwiaHVzYmFuZE1lYWxWb3VjaGVyXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgc2V0SHVzYmFuZERldGFpbHMoXG4gICAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQuY2hlY2tlZFxuICAgICAgICAgICAgICAgICAgICAgICAgPyB7IC4uLmh1c2JhbmREZXRhaWxzLCBtZWFsVm91Y2hlcnM6IDEwMCB9XG4gICAgICAgICAgICAgICAgICAgICAgICA6IHsgLi4uaHVzYmFuZERldGFpbHMsIG1lYWxWb3VjaGVyczogXCJcIiB9XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17d2lmZURldGFpbHMubWVhbFZvdWNoZXJzID8gdHJ1ZSA6IGZhbHNlfVxuICAgICAgICAgICAgICAgICAgbmFtZT1cIndpZmVNZWFsVm91Y2hlclwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XG4gICAgICAgICAgICAgICAgICAgIHNldFdpZmVEZXRhaWxzKFxuICAgICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LmNoZWNrZWRcbiAgICAgICAgICAgICAgICAgICAgICAgID8geyAuLi53aWZlRGV0YWlscywgbWVhbFZvdWNoZXJzOiAxMDAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgOiB7IC4uLndpZmVEZXRhaWxzLCBtZWFsVm91Y2hlcnM6IFwiXCIgfVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1iLTNcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgYWxpZ24tc2VsZi1lbmRcIj5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgIDxzdHJvbmc+Q29tcGFueSBDYXJzOjwvc3Ryb25nPlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2h1c2JhbmREZXRhaWxzLmNvbXBhbnlDYXIgPyB0cnVlIDogZmFsc2V9XG4gICAgICAgICAgICAgICAgICBuYW1lPVwiaHVzYmFuZENvbXBhbnlDYXJcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxuICAgICAgICAgICAgICAgICAgICBzZXRIdXNiYW5kRGV0YWlscyhcbiAgICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC5jaGVja2VkXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHsgLi4uaHVzYmFuZERldGFpbHMsIGNvbXBhbnlDYXI6IDM1MCB9XG4gICAgICAgICAgICAgICAgICAgICAgICA6IHsgLi4uaHVzYmFuZERldGFpbHMsIGNvbXBhbnlDYXI6IFwiXCIgfVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3dpZmVEZXRhaWxzLmNvbXBhbnlDYXIgPyB0cnVlIDogZmFsc2V9XG4gICAgICAgICAgICAgICAgICBuYW1lPVwid2lmZUNvbXBhbnlDYXJcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxuICAgICAgICAgICAgICAgICAgICBzZXRXaWZlRGV0YWlscyhcbiAgICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC5jaGVja2VkXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHsgLi4ud2lmZURldGFpbHMsIGNvbXBhbnlDYXI6IDM1MCB9XG4gICAgICAgICAgICAgICAgICAgICAgICA6IHsgLi4ud2lmZURldGFpbHMsIGNvbXBhbnlDYXI6IFwiXCIgfVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1iLTNcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgYWxpZ24tc2VsZi1lbmRcIj5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgIDxzdHJvbmc+VGFuayBDYXJkOjwvc3Ryb25nPlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2h1c2JhbmREZXRhaWxzLnRhbmtDYXJkID8gdHJ1ZSA6IGZhbHNlfVxuICAgICAgICAgICAgICAgICAgbmFtZT1cImh1c2JhbmRUYW5rQ2FyZFwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XG4gICAgICAgICAgICAgICAgICAgIHNldEh1c2JhbmREZXRhaWxzKFxuICAgICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LmNoZWNrZWRcbiAgICAgICAgICAgICAgICAgICAgICAgID8geyAuLi5odXNiYW5kRGV0YWlscywgdGFua0NhcmQ6IDEwMCB9XG4gICAgICAgICAgICAgICAgICAgICAgICA6IHsgLi4uaHVzYmFuZERldGFpbHMsIHRhbmtDYXJkOiBcIlwiIH1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt3aWZlRGV0YWlscy50YW5rQ2FyZCA/IHRydWUgOiBmYWxzZX1cbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJ3aWZlVGFua0NhcmRcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxuICAgICAgICAgICAgICAgICAgICBzZXRXaWZlRGV0YWlscyhcbiAgICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC5jaGVja2VkXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHsgLi4ud2lmZURldGFpbHMsIHRhbmtDYXJkOiAxMDAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgOiB7IC4uLndpZmVEZXRhaWxzLCB0YW5rQ2FyZDogXCJcIiB9XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWItM1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBhbGlnbi1zZWxmLWVuZFwiPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgPHN0cm9uZz5DaGlsZCBCZW5lZml0czo8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2h1c2JhbmREZXRhaWxzLmNoaWxkQmVuZWZpdHN9XG4gICAgICAgICAgICAgICAgICBuYW1lPVwiaHVzYmFuZENoaWxkQmVuZWZpdHNcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxuICAgICAgICAgICAgICAgICAgICBzZXRIdXNiYW5kRGV0YWlscyh7XG4gICAgICAgICAgICAgICAgICAgICAgLi4uaHVzYmFuZERldGFpbHMsXG4gICAgICAgICAgICAgICAgICAgICAgY2hpbGRCZW5lZml0czogZS50YXJnZXQudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17d2lmZURldGFpbHMuY2hpbGRCZW5lZml0c31cbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJ3aWZlQ2hpbGRCZW5lZml0c1wiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XG4gICAgICAgICAgICAgICAgICAgIHNldFdpZmVEZXRhaWxzKHtcbiAgICAgICAgICAgICAgICAgICAgICAuLi53aWZlRGV0YWlscyxcbiAgICAgICAgICAgICAgICAgICAgICBjaGlsZEJlbmVmaXRzOiBlLnRhcmdldC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWItM1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBhbGlnbi1zZWxmLWVuZFwiPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgPHN0cm9uZz5FeHRyYSBDaGlsZCBCZW5lZml0czo8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2h1c2JhbmREZXRhaWxzLmV4dHJhQ2hpbGRCZW5lZml0c31cbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJodXNiYW5kRXh0cmFDaGlsZEJlbmVmaXRzXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgc2V0SHVzYmFuZERldGFpbHMoe1xuICAgICAgICAgICAgICAgICAgICAgIC4uLmh1c2JhbmREZXRhaWxzLFxuICAgICAgICAgICAgICAgICAgICAgIGV4dHJhQ2hpbGRCZW5lZml0czogZS50YXJnZXQudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17d2lmZURldGFpbHMuZXh0cmFDaGlsZEJlbmVmaXRzfVxuICAgICAgICAgICAgICAgICAgbmFtZT1cIndpZmVFeHRyYUNoaWxkQmVuZWZpdHNcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxuICAgICAgICAgICAgICAgICAgICBzZXRXaWZlRGV0YWlscyh7XG4gICAgICAgICAgICAgICAgICAgICAgLi4ud2lmZURldGFpbHMsXG4gICAgICAgICAgICAgICAgICAgICAgZXh0cmFDaGlsZEJlbmVmaXRzOiBlLnRhcmdldC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGhyIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYi0zXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIGFsaWduLXNlbGYtZW5kXCI+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICA8c3Ryb25nPkxpdmluZyBvbiBDb3N0LXNoYXJpbmcgQmFzaXM6PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICBZZXNcbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1sLTNcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPVwiWWVzXCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJsaXZlSW5Db3N0U2hhcmluZ1wiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VMaXZlSW5Db3N0U2hhcmluZ31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICBOb1xuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWwtM1wiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9XCJOb1wiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwibGl2ZUluQ29zdFNoYXJpbmdcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlTGl2ZUluQ29zdFNoYXJpbmd9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1iLTNcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgYWxpZ24tc2VsZi1lbmRcIj5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgIDxzdHJvbmc+U3BlY2lhbCBDaXJjdW1zdGFuY2VzIE0gb2YgVjo8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIFllc1xuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWwtM1wiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9XCJZZXNcIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cInNwZWNpYWxDaXJjdW1zdGFuY2VzXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZVNwZWNpYWxDaXJjdW1zdGFuY2VzfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIE5vXG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtbC0zXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT1cIk5vXCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJzcGVjaWFsQ2lyY3Vtc3RhbmNlc1wiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VTcGVjaWFsQ2lyY3Vtc3RhbmNlc31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGhyIC8+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1iLTNcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgYWxpZ24tc2VsZi1lbmRcIj5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgIDxzdHJvbmc+THVtcCBTdW06PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgPHN0cm9uZz5IdXNiYW5kPC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgcmVhZE9ubHlcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtodXNiYW5kRGV0YWlscy5sdW1wU3VtfVxuICAgICAgICAgICAgICAgICAgbmFtZT1cImh1c2JhbmRMdW1wc3VtXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgPHN0cm9uZz5XaWZlPC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgcmVhZE9ubHlcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt3aWZlRGV0YWlscy5sdW1wU3VtfVxuICAgICAgICAgICAgICAgICAgbmFtZT1cIndpZmVMdW1wc3VtXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWItM1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBhbGlnbi1zZWxmLWVuZFwiPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgPHN0cm9uZz5SZWFsIENvc3Q6PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgIHJlYWRPbmx5PXtzcGVjaWFsQ2lyY3Vtc3RhbmNlcyA9PT0gXCJZZXNcIiA/IGZhbHNlIDogdHJ1ZX1cbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtodXNiYW5kRGV0YWlscy5yZWFsQ29zdH1cbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJodXNiYW5kTHVtcHN1bVwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XG4gICAgICAgICAgICAgICAgICAgIHNldEh1c2JhbmREZXRhaWxzKHtcbiAgICAgICAgICAgICAgICAgICAgICAuLi5odXNiYW5kRGV0YWlscyxcbiAgICAgICAgICAgICAgICAgICAgICByZWFsQ29zdDogZS50YXJnZXQudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICByZWFkT25seT17c3BlY2lhbENpcmN1bXN0YW5jZXMgPT09IFwiWWVzXCIgPyBmYWxzZSA6IHRydWV9XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17d2lmZURldGFpbHMucmVhbENvc3R9XG4gICAgICAgICAgICAgICAgICBuYW1lPVwid2lmZUx1bXBzdW1cIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxuICAgICAgICAgICAgICAgICAgICBzZXRXaWZlRGV0YWlscyh7IC4uLndpZmVEZXRhaWxzLCByZWFsQ29zdDogZS50YXJnZXQudmFsdWUgfSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWItM1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBhbGlnbi1zZWxmLWVuZFwiPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgPHN0cm9uZz5MaXZpbmcgQ29zdDo8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAge051bWJlcihodXNiYW5kRGV0YWlscy5sdW1wU3VtKSArXG4gICAgICAgICAgICAgICAgICAgIE51bWJlcihodXNiYW5kRGV0YWlscy5yZWFsQ29zdCl9XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgIHtOdW1iZXIod2lmZURldGFpbHMubHVtcFN1bSkgKyBOdW1iZXIod2lmZURldGFpbHMucmVhbENvc3QpfVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxociAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWItM1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICAgIDxzdHJvbmc+SG9saWRheSBBcnJhZ2VtZW50ID0gU2Nob29sIHllYXIgPzwvc3Ryb25nPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICBZZXNcbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1sLTNcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPVwiWWVzXCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJob2xpZGF5QXJyYW5nZW1lbnRJc1NjaG9vbFllYXJcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlSG9saWRheUFycklzU2Nob29sfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIE5vXG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtbC0zXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT1cIk5vXCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJob2xpZGF5QXJyYW5nZW1lbnRJc1NjaG9vbFllYXJcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHNldGhvbGlkYXlBcnJhbmdlbWVudElzU2Nob29sWWVhcihmYWxzZSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1iLTNcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgIDxzdHJvbmc+U2Nob29sIFllYXI6PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgIHJlYWRPbmx5PXtob2xpZGF5QXJyYW5nZW1lbnRJc1NjaG9vbFllYXIgPyB0cnVlIDogZmFsc2V9XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17aHVzYmFuZERldGFpbHMuc2Nob29sWWVhcn1cbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJzY2hvb2xZZWFyXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgc2V0SHVzYmFuZERldGFpbHMoe1xuICAgICAgICAgICAgICAgICAgICAgIC4uLmh1c2JhbmREZXRhaWxzLFxuICAgICAgICAgICAgICAgICAgICAgIHNjaG9vbFllYXI6IGUudGFyZ2V0LnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgcmVhZE9ubHk9e2hvbGlkYXlBcnJhbmdlbWVudElzU2Nob29sWWVhciA/IHRydWUgOiBmYWxzZX1cbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt3aWZlRGV0YWlscy5zY2hvb2xZZWFyfVxuICAgICAgICAgICAgICAgICAgbmFtZT1cInNjaG9vbFllYXJcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxuICAgICAgICAgICAgICAgICAgICBzZXRXaWZlRGV0YWlscyh7XG4gICAgICAgICAgICAgICAgICAgICAgLi4ud2lmZURldGFpbHMsXG4gICAgICAgICAgICAgICAgICAgICAgc2Nob29sWWVhcjogZS50YXJnZXQudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1iLTNcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgIDxzdHJvbmc+U3VtbWVyIFZhY2F0aW9uOjwvc3Ryb25nPlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICByZWFkT25seT17aG9saWRheUFycmFuZ2VtZW50SXNTY2hvb2xZZWFyID8gdHJ1ZSA6IGZhbHNlfVxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2h1c2JhbmREZXRhaWxzLnN1bW1lclZhY2F0aW9ufVxuICAgICAgICAgICAgICAgICAgbmFtZT1cInNjaG9vbFllYXJcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxuICAgICAgICAgICAgICAgICAgICBzZXRIdXNiYW5kRGV0YWlscyh7XG4gICAgICAgICAgICAgICAgICAgICAgLi4uaHVzYmFuZERldGFpbHMsXG4gICAgICAgICAgICAgICAgICAgICAgc3VtbWVyVmFjYXRpb246IGUudGFyZ2V0LnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgcmVhZE9ubHk9e2hvbGlkYXlBcnJhbmdlbWVudElzU2Nob29sWWVhciA/IHRydWUgOiBmYWxzZX1cbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt3aWZlRGV0YWlscy5zdW1tZXJWYWNhdGlvbn1cbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJzY2hvb2xZZWFyXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgc2V0V2lmZURldGFpbHMoe1xuICAgICAgICAgICAgICAgICAgICAgIC4uLndpZmVEZXRhaWxzLFxuICAgICAgICAgICAgICAgICAgICAgIHN1bW1lclZhY2F0aW9uOiBlLnRhcmdldC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWItM1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgPHN0cm9uZz5DaHJpc3RtYXMgQnJlYWs6PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgIHJlYWRPbmx5PXtob2xpZGF5QXJyYW5nZW1lbnRJc1NjaG9vbFllYXIgPyB0cnVlIDogZmFsc2V9XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17aHVzYmFuZERldGFpbHMuY2hyaXN0bWFzQnJlYWt9XG4gICAgICAgICAgICAgICAgICBuYW1lPVwic2Nob29sWWVhclwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XG4gICAgICAgICAgICAgICAgICAgIHNldEh1c2JhbmREZXRhaWxzKHtcbiAgICAgICAgICAgICAgICAgICAgICAuLi5odXNiYW5kRGV0YWlscyxcbiAgICAgICAgICAgICAgICAgICAgICBjaHJpc3RtYXNCcmVhazogZS50YXJnZXQudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICByZWFkT25seT17aG9saWRheUFycmFuZ2VtZW50SXNTY2hvb2xZZWFyID8gdHJ1ZSA6IGZhbHNlfVxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3dpZmVEZXRhaWxzLmNocmlzdG1hc0JyZWFrfVxuICAgICAgICAgICAgICAgICAgbmFtZT1cInNjaG9vbFllYXJcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxuICAgICAgICAgICAgICAgICAgICBzZXRXaWZlRGV0YWlscyh7XG4gICAgICAgICAgICAgICAgICAgICAgLi4ud2lmZURldGFpbHMsXG4gICAgICAgICAgICAgICAgICAgICAgY2hyaXN0bWFzQnJlYWs6IGUudGFyZ2V0LnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYi0zXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICA8c3Ryb25nPkVhc3RlciBIb2xpZGF5czo8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgcmVhZE9ubHk9e2hvbGlkYXlBcnJhbmdlbWVudElzU2Nob29sWWVhciA/IHRydWUgOiBmYWxzZX1cbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtodXNiYW5kRGV0YWlscy5lYXN0ZXJIb2xpZGF5c31cbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJzY2hvb2xZZWFyXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgc2V0SHVzYmFuZERldGFpbHMoe1xuICAgICAgICAgICAgICAgICAgICAgIC4uLmh1c2JhbmREZXRhaWxzLFxuICAgICAgICAgICAgICAgICAgICAgIGVhc3RlckhvbGlkYXlzOiBlLnRhcmdldC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgIHJlYWRPbmx5PXtob2xpZGF5QXJyYW5nZW1lbnRJc1NjaG9vbFllYXIgPyB0cnVlIDogZmFsc2V9XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17d2lmZURldGFpbHMuZWFzdGVySG9saWRheXN9XG4gICAgICAgICAgICAgICAgICBuYW1lPVwic2Nob29sWWVhclwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XG4gICAgICAgICAgICAgICAgICAgIHNldFdpZmVEZXRhaWxzKHtcbiAgICAgICAgICAgICAgICAgICAgICAuLi53aWZlRGV0YWlscyxcbiAgICAgICAgICAgICAgICAgICAgICBlYXN0ZXJIb2xpZGF5czogZS50YXJnZXQudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1iLTNcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgIDxzdHJvbmc+QXV0dW1uIEJyZWFrOjwvc3Ryb25nPlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICByZWFkT25seT17aG9saWRheUFycmFuZ2VtZW50SXNTY2hvb2xZZWFyID8gdHJ1ZSA6IGZhbHNlfVxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2h1c2JhbmREZXRhaWxzLmF1dHVtbkJyZWFrfVxuICAgICAgICAgICAgICAgICAgbmFtZT1cInNjaG9vbFllYXJcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxuICAgICAgICAgICAgICAgICAgICBzZXRIdXNiYW5kRGV0YWlscyh7XG4gICAgICAgICAgICAgICAgICAgICAgLi4uaHVzYmFuZERldGFpbHMsXG4gICAgICAgICAgICAgICAgICAgICAgYXV0dW1uQnJlYWs6IGUudGFyZ2V0LnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgcmVhZE9ubHk9e2hvbGlkYXlBcnJhbmdlbWVudElzU2Nob29sWWVhciA/IHRydWUgOiBmYWxzZX1cbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt3aWZlRGV0YWlscy5hdXR1bW5CcmVha31cbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJzY2hvb2xZZWFyXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgc2V0V2lmZURldGFpbHMoe1xuICAgICAgICAgICAgICAgICAgICAgIC4uLndpZmVEZXRhaWxzLFxuICAgICAgICAgICAgICAgICAgICAgIGF1dHVtbkJyZWFrOiBlLnRhcmdldC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWItM1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgPHN0cm9uZz5TcHJpbmcgQnJlYWs6PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgIHJlYWRPbmx5PXtob2xpZGF5QXJyYW5nZW1lbnRJc1NjaG9vbFllYXIgPyB0cnVlIDogZmFsc2V9XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17aHVzYmFuZERldGFpbHMuc3ByaW5nQnJlYWt9XG4gICAgICAgICAgICAgICAgICBuYW1lPVwic2Nob29sWWVhclwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XG4gICAgICAgICAgICAgICAgICAgIHNldEh1c2JhbmREZXRhaWxzKHtcbiAgICAgICAgICAgICAgICAgICAgICAuLi5odXNiYW5kRGV0YWlscyxcbiAgICAgICAgICAgICAgICAgICAgICBzcHJpbmdCcmVhazogZS50YXJnZXQudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICByZWFkT25seT17aG9saWRheUFycmFuZ2VtZW50SXNTY2hvb2xZZWFyID8gdHJ1ZSA6IGZhbHNlfVxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3dpZmVEZXRhaWxzLnNwcmluZ0JyZWFrfVxuICAgICAgICAgICAgICAgICAgbmFtZT1cInNjaG9vbFllYXJcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxuICAgICAgICAgICAgICAgICAgICBzZXRXaWZlRGV0YWlscyh7XG4gICAgICAgICAgICAgICAgICAgICAgLi4ud2lmZURldGFpbHMsXG4gICAgICAgICAgICAgICAgICAgICAgc3ByaW5nQnJlYWs6IGUudGFyZ2V0LnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYi0zXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICA8c3Ryb25nPlRvdGFsIG51bWJlciBvZiBkYXlzOjwvc3Ryb25nPlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICA8c3Ryb25nPntodXNiYW5kRGV0YWlscy50b3RhbERheXN9PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgIDxzdHJvbmc+e3dpZmVEZXRhaWxzLnRvdGFsRGF5c308L3N0cm9uZz5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYi0zXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICA8c3Ryb25nPlBlcmNlbnRhZ2U6PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgIDxzdHJvbmc+e2h1c2JhbmREZXRhaWxzLnBlcmNlbnRPZkRheXN9PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgIDxzdHJvbmc+e3dpZmVEZXRhaWxzLnBlcmNlbnRPZkRheXN9PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGhyIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYi0zXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgPHN0cm9uZz5TZXBlcmF0ZSBzZXR0bGVtZW50IGZvciBjaGlsZDogPC9zdHJvbmc+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIFllc1xuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWwtM1wiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9XCJZZXNcIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cInNlcGVyYXRlU2V0dGxlbWVudENoaWxkXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiBvbkNoYW5nZVNlcGVyYXRlU2V0dGxlbWVudENoaWxkKHRydWUpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIE5vXG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtbC0zXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT1cIk5vXCJcbiAgICAgICAgICAgICAgICAgIGRlZmF1bHRDaGVja2VkXG4gICAgICAgICAgICAgICAgICBuYW1lPVwic2VwZXJhdGVTZXR0bGVtZW50Q2hpbGRcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IG9uQ2hhbmdlU2VwZXJhdGVTZXR0bGVtZW50Q2hpbGQoZmFsc2UpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7c2VwZXJhdGVTZXR0bGVtZW50Q2hpbGQgJiYgKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYi01XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPkNvbnRyaWJ1dGlvbiBCeSBEZWJ0b3IoJSk8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aHVzYmFuZERldGFpbHMuY29udHJpRGVidG9yfVxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY29udHJpRGVidG9yXCJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxuICAgICAgICAgICAgICAgICAgICAgIHNldEh1c2JhbmREZXRhaWxzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLmh1c2JhbmREZXRhaWxzLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJpRGVidG9yOiBlLnRhcmdldC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt3aWZlRGV0YWlscy5jb250cmlEZWJ0b3J9XG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjb250cmlEZWJ0b3JcIlxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XG4gICAgICAgICAgICAgICAgICAgICAgc2V0V2lmZURldGFpbHMoe1xuICAgICAgICAgICAgICAgICAgICAgICAgLi4ud2lmZURldGFpbHMsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cmlEZWJ0b3I6IGUudGFyZ2V0LnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHtzZXBlcmF0ZVNldHRsZW1lbnRDaGlsZCYmPGRpdiBjbGFzc05hbWU9XCJyb3cgbWItNVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgPHN0cm9uZz5Dcm9zcy1OYXRpb25hbCBDb3N0KCUpPC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtodXNiYW5kRGV0YWlscy5jcm9zc05hdGlvbmFsQ29zdHN9XG4gICAgICAgICAgICAgICAgICByZWFkT25seVxuICAgICAgICAgICAgICAgICAgbmFtZT1cImNyb3NzTmF0aW9uYWxDb3N0c1wiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17d2lmZURldGFpbHMuY3Jvc3NOYXRpb25hbENvc3RzfVxuICAgICAgICAgICAgICAgICAgcmVhZE9ubHlcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJjcm9zc05hdGlvbmFsQ29zdHNcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPjxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgb25DbGljaz17b25DbGlja0NhbEN1bGF0ZUNyb3NzTmF0aW9uYWxDb3N0c30+UmUtY2FsY3VsYXRlPC9idXR0b24+PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj59XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1wcmltYXJ5XCIgb25DbGljaz17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgICAgQ2FsY3VsYXRlXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=