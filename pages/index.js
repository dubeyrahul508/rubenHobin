import { useState, useEffect } from "react";
import React from "react";
import Slider from "@material-ui/core/Slider";

export default function Home() {
  const avg_percent_wrt_income = {
    1: {
      "2000": 15,
      "2001-4500": 15.2,
      "4501-6000": 15.4,
      6001: 15.6,
    },
    2: {
      "2000": 11.85,
      "2001-4500": 12.05,
      "4501-6000": 12.25,
      6001: 12.45,
    },
    3: {
      "2000": 9.6,
      "2001-4500": 9.8,
      "4501-6000": 10,
      6001: 10.2,
    },
    4: {
      "2000": 8.7,
      "2001-4500": 8.9,
      "4501-6000": 9.1,
      "6001": 9.3,
    },
  };
  const age_percent_data = {
    0: {
      15.6: 13.78,
      15.4: 13.61,
      15.2: 13.43,
      15: 13.25,
      12.45: 11,
      12.25: 10.82,
      12.05: 10.65,
      11.85: 10.47,
      10.2: 9.01,
      10: 8.83,
      9.8: 8.66,
      9.6: 8.48,
      9.3: 8.22,
      9.1: 8.04,
      8.9: 7.86,
      8.7: 7.69,
    },
    1: {
      15.6: 13.78,
      15.4: 13.61,
      15.2: 13.43,
      15: 13.25,
      12.45: 11,
      12.25: 10.82,
      12.05: 10.65,
      11.85: 10.47,
      10.2: 9.01,
      10: 8.83,
      9.8: 8.66,
      9.6: 8.48,
      9.3: 8.22,
      9.1: 8.04,
      8.9: 7.86,
      8.7: 7.69,
    },
    2: {
      15.6: 13.78,
      15.4: 13.61,
      15.2: 13.43,
      15: 13.25,
      12.45: 11,
      12.25: 10.82,
      12.05: 10.65,
      11.85: 10.47,
      10.2: 9.01,
      10: 8.83,
      9.8: 8.66,
      9.6: 8.48,
      9.3: 8.22,
      9.1: 8.04,
      8.9: 7.86,
      8.7: 7.69,
    },
    3: {
      15.6: 13.78,
      15.4: 13.61,
      15.2: 13.43,
      15: 13.25,
      12.45: 11,
      12.25: 10.82,
      12.05: 10.65,
      11.85: 10.47,
      10.2: 9.01,
      10: 8.83,
      9.8: 8.66,
      9.6: 8.48,
      9.3: 8.22,
      9.1: 8.04,
      8.9: 7.86,
      8.7: 7.69,
    },
    4: {
      15.6: 13.78,
      15.4: 13.61,
      15.2: 13.43,
      15: 13.25,
      12.45: 11,
      12.25: 10.82,
      12.05: 10.65,
      11.85: 10.47,
      10.2: 9.01,
      10: 8.83,
      9.8: 8.66,
      9.6: 8.48,
      9.3: 8.22,
      9.1: 8.04,
      8.9: 7.86,
      8.7: 7.69,
    },
    5: {
      15.6: 13.78,
      15.4: 13.61,
      15.2: 13.43,
      15: 13.25,
      12.45: 11,
      12.25: 10.82,
      12.05: 10.65,
      11.85: 10.47,
      10.2: 9.01,
      10: 8.83,
      9.8: 8.66,
      9.6: 8.48,
      9.3: 8.22,
      9.1: 8.04,
      8.9: 7.86,
      8.7: 7.69,
    },
    6: {
      15.6: 14.04,
      15.4: 13.08,
      15.2: 13.68,
      15: 13.5,
      12.45: 11.21,
      12.25: 11.03,
      12.05: 10.85,
      11.85: 10.67,
      10.2: 9.18,
      10: 9,
      9.8: 8.82,
      9.6: 8.64,
      9.3: 8.37,
      9.1: 8.19,
      8.9: 8.01,
      8.7: 7.83,
    },
    7: {
      15.6: 14.3,
      15.4: 14.12,
      15.2: 13.93,
      15: 13.75,
      12.45: 11.41,
      12.25: 11.23,
      12.05: 11.05,
      11.85: 10.86,
      10.2: 9.35,
      10: 9.17,
      9.8: 8.98,
      9.6: 8.8,
      9.3: 8.52,
      9.1: 8.34,
      8.9: 8.18,
      8.7: 7.97,
    },
    8: {
      15.6: 14.56,
      15.4: 14.37,
      15.2: 14.19,
      15: 14,
      12.45: 11.62,
      12.25: 11.43,
      12.05: 11.25,
      11.85: 11.06,
      10.2: 9.52,
      10: 9.33,
      9.8: 9.15,
      9.6: 8.96,
      9.3: 8.68,
      9.1: 8.49,
      8.9: 8.31,
      8.7: 8.12,
    },
    9: {
      15.6: 14.82,
      15.4: 14.63,
      15.2: 14.44,
      15: 14.25,
      12.45: 11.83,
      12.25: 11.64,
      12.05: 11.45,
      11.85: 11.26,
      10.2: 9.69,
      10: 9.5,
      9.8: 9.31,
      9.6: 9.12,
      9.3: 8.84,
      9.1: 8.65,
      8.9: 8.45,
      8.7: 8.27,
    },
    10: {
      15.6: 15.08,
      15.4: 14.89,
      15.2: 14.69,
      15: 14.5,
      12.45: 12.03,
      12.25: 11.84,
      12.05: 11.65,
      11.85: 11.45,
      10.2: 9.86,
      10: 9.67,
      9.8: 9.47,
      9.6: 9.28,
      9.3: 8.99,
      9.1: 8.8,
      8.9: 8.6,
      8.7: 8.41,
    },
    11: {
      15.6: 15.34,
      15.4: 15.14,
      15.2: 14.95,
      15: 14.75,
      12.45: 12.24,
      12.25: 12.05,
      12.05: 11.85,
      11.85: 11.65,
      10.2: 10.03,
      10: 9.83,
      9.8: 9.64,
      9.6: 9.44,
      9.3: 9.15,
      9.1: 8.95,
      8.9: 8.75,
      8.7: 8.56,
    },
    12: {
      15.6: 15.6,
      15.4: 15.4,
      15.2: 15.2,
      15: 15,
      12.45: 12.45,
      12.25: 12.25,
      12.05: 12.05,
      11.85: 11.85,
      10.2: 10.2,
      10: 10,
      9.8: 9.8,
      9.6: 9.6,
      9.3: 9.3,
      9.1: 8.1,
      8.9: 8.9,
      8.7: 8.7,
    },
    13: {
      15.6: 15.66,
      15.4: 15.66,
      15.2: 15.45,
      15: 15.25,
      12.45: 12.66,
      12.25: 12.45,
      12.05: 12.25,
      11.85: 12.05,
      10.2: 10.37,
      10: 10.17,
      9.8: 9.96,
      9.6: 9.76,
      9.3: 9.45,
      9.1: 9.25,
      8.9: 9.05,
      8.7: 8.84,
    },
    14: {
      15.6: 16.12,
      15.4: 15.91,
      15.2: 15.71,
      15: 15.5,
      12.45: 12.87,
      12.25: 12.66,
      12.05: 12.45,
      11.85: 12.25,
      10.2: 10.54,
      10: 10.33,
      9.8: 10.13,
      9.6: 9.92,
      9.3: 9.61,
      9.1: 9.4,
      8.9: 9.2,
      8.7: 8.99,
    },
    15: {
      15.6: 16.38,
      15.4: 16.17,
      15.2: 15.96,
      15: 15.75,
      12.45: 13.07,
      12.25: 12.86,
      12.05: 12.65,
      11.85: 12.44,
      10.2: 10.71,
      10: 10.5,
      9.8: 10.29,
      9.6: 10.08,
      9.3: 9.76,
      9.1: 9.55,
      8.9: 9.34,
      8.7: 9.13,
    },
    16: {
      15.6: 16.64,
      15.4: 16.43,
      15.2: 16.22,
      15: 16,
      12.45: 13.28,
      12.25: 13.07,
      12.05: 12.85,
      11.85: 12.64,
      10.2: 10.88,
      10: 10.67,
      9.8: 10.45,
      9.6: 10.24,
      9.3: 9.92,
      9.1: 9.71,
      8.9: 9.49,
      8.7: 9.28,
    },
    17: {
      15.6: 16.9,
      15.4: 16.66,
      15.2: 16.47,
      15: 16.25,
      12.45: 13.49,
      12.25: 13.27,
      12.05: 13.05,
      11.85: 12.84,
      10.2: 11.05,
      10: 10.83,
      9.8: 10.62,
      9.6: 10.4,
      9.3: 10.08,
      9.1: 9.86,
      8.9: 9.64,
      8.7: 9.43,
    },
    18: {
      15.6: 17.16,
      15.4: 16.94,
      15.2: 16.72,
      15: 16.5,
      12.45: 16.69,
      12.25: 13.47,
      12.05: 13.25,
      11.85: 13.03,
      10.2: 11.22,
      10: 11,
      9.8: 10.78,
      9.6: 10.56,
      9.3: 10.23,
      9.1: 10.01,
      8.9: 9.79,
      8.7: 9.57,
    },
    19: {
      15.6: 17.47,
      15.4: 17.2,
      15.2: 16.97,
      15: 16.75,
      12.45: 13.9,
      12.25: 13.68,
      12.05: 13.46,
      11.85: 13.23,
      10.2: 11.39,
      10: 11.17,
      9.8: 10.94,
      9.6: 10.62,
      9.3: 10.39,
      9.1: 10.16,
      8.9: 9.94,
      8.7: 9.72,
    },
    20: {
      15.6: 17.68,
      15.4: 17.45,
      15.2: 17.23,
      15: 17,
      12.45: 14.11,
      12.25: 13.88,
      12.05: 13.66,
      11.85: 13.43,
      10.2: 11.56,
      10: 11.33,
      9.8: 11.11,
      9.6: 10.88,
      9.3: 10.54,
      9.1: 10.31,
      8.9: 10.05,
      8.7: 9.86,
    },
    21: {
      15.6: 17.94,
      15.4: 17.71,
      15.2: 17.42,
      15: 17.25,
      12.45: 14.32,
      12.25: 14.09,
      12.05: 13.86,
      11.85: 13.63,
      10.2: 11.73,
      10: 11.5,
      9.8: 11.27,
      9.6: 11.04,
      9.3: 10.69,
      9.1: 10.4,
      8.9: 10.23,
      8.7: 10,
    },
    22: {
      15.6: 18.2,
      15.4: 17.97,
      15.2: 17.73,
      15: 17.5,
      12.45: 14.53,
      12.25: 14.29,
      12.05: 14.06,
      11.85: 13.83,
      10.2: 11.9,
      10: 11.67,
      9.8: 11.43,
      9.6: 11.2,
      9.3: 10.85,
      9.1: 10.62,
      8.9: 10.38,
      8.7: 10.15,
    },
    23: {
      15.6: 18.46,
      15.4: 18.22,
      15.2: 17.99,
      15: 17.73,
      12.45: 14.73,
      12.25: 14.5,
      12.05: 14.26,
      11.85: 14.02,
      10.2: 12.07,
      10: 11.83,
      9.8: 11.6,
      9.6: 11.36,
      9.3: 11,
      9.1: 10.77,
      8.9: 10.59,
      8.7: 10.29,
    },
    24: {
      15.6: 18.72,
      15.4: 18.48,
      15.2: 18.24,
      15: 18,
      12.45: 14.94,
      12.25: 14.7,
      12.05: 14.46,
      11.85: 14.22,
      10.2: 12.24,
      10: 12,
      9.8: 11.76,
      9.6: 11.52,
      9.3: 11.16,
      9.1: 10.92,
      8.9: 10.68,
      8.7: 10.44,
    },
  };
  const [husbandDetails, setHusbandDetails] = useState({
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
    schoolYear: 7,
    summerVacation: 31,
    christmasBreak: 7,
    easterHolidays: 7,
    autumnBreak: 7,
    springBreak: 7,
    totalDays: "",
    percentOfDays: "",
    crossNationalCosts: 0,
    totalContri: "",
    contriDebtor: 0,
    totalContriInKind: "",
  });
  const [wifeDetails, setWifeDetails] = useState({
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
    schoolYear: 7,
    summerVacation: 31,
    christmasBreak: 7,
    easterHolidays: 7,
    autumnBreak: 7,
    springBreak: 7,
    totalDays: "",
    percentOfDays: "",
    crossNationalCosts: 0,
    totalContri: "",
    contriDebtor: 0,
    totalContriInKind: "",
  });

  const [
    holidayArrangementIsSchoolYear,
    setholidayArrangementIsSchoolYear,
  ] = useState(true);

  const [liveInCostSharing, setLiveInCostSharing] = useState({
    husband: "",
    wife: "",
  });
  const [familyIncome, setFamilyIncome] = useState("");
  const [specialCircumstances, setSpecialCircumstances] = useState("");
  const [seperateSettlementChild, setSeperateSettlementChild] = useState(false);
  const [inputList, setInputList] = useState([{ childName: "", childAge: "" }]);
  const [subTotal, setSubTotal] = useState({
    husband: "",
    wife: "",
    total: "",
    childBenefits: "",
  });
  const [husbandEarningPercentB45, setHusbandEarningPercentB45] = useState("");
  const [wifeEarningPercentC46, setWifeEarningPercentC46] = useState("");
  const [valToShow, setValToShow] = useState({
    husbandResidualResources: "",
    wifeResidualResources: "",
    husbandShareInResidualResources: "",
    wifeShareInResidualResources: "",
  });
  const [
    effectiveShareOfHouseHoldIncome,
    setEffectiveShareOfHouseHoldIncome,
  ] = useState("");
  // FINAL AMOUNTS
  const [alimony, setAlimony] = useState("");

  // HANDLE INPUT FIELD OF CHILDRENS'
  const onChangeChildrenData = (e, index) => {
    const { name, value } = e.target;
    const childrenList = [...inputList];
    childrenList[index][name] = value;
    setInputList(childrenList);
  };

  // REMOVE CHILD FUNCTION
  const removeChild = (index) => {
    const childrenList = [...inputList];
    childrenList.splice(index, 1);
    setInputList(childrenList);
  };

  const onChangeHusbandLiveInCostSharing = (e) => {
    setLiveInCostSharing({ ...liveInCostSharing, husband: e.target.value });
    if (
      e.target.value === "Yes" &&
      (specialCircumstances === "" || specialCircumstances === "No")
    ) {
      setHusbandDetails({ ...husbandDetails, lumpSum: 470 });
    } else if (
      e.target.value === "No" &&
      (specialCircumstances === "" || specialCircumstances === "No")
    ) {
      setHusbandDetails({ ...husbandDetails, lumpSum: 940 });
    }
  };

  const onChangeWifeLiveInCostSharing = (e) => {
    setLiveInCostSharing({ ...liveInCostSharing, wife: e.target.value });
    if (
      e.target.value === "Yes" &&
      (specialCircumstances === "" || specialCircumstances === "No")
    ) {
      setWifeDetails({ ...wifeDetails, lumpSum: 470 });
    } else if (
      e.target.value === "No" &&
      (specialCircumstances === "" || specialCircumstances === "No")
    ) {
      setWifeDetails({ ...wifeDetails, lumpSum: 940 });
    }
  };

  const onChangeSpecialCircumstances = (e) => {
    setSpecialCircumstances(e.target.value);
    if (e.target.value === "Yes") {
      setHusbandDetails({ ...husbandDetails, lumpSum: 0 });
      setWifeDetails({ ...wifeDetails, lumpSum: 0 });
    } else if (e.target.value === "No") {
      setHusbandDetails({ ...husbandDetails, realCost: 0 });
      setWifeDetails({ ...wifeDetails, realCost: 0 });
    }
  };

  const onChangeSeperateSettlementChild = (state) => {
    setSeperateSettlementChild(state);
    if (state === true) {
      setHusbandDetails({ ...husbandDetails, contriDebtor: 0 });
      setWifeDetails({ ...wifeDetails, contriDebtor: 0 });
    }
  };

  const onClickCalCulateCrossNationalCosts = () => {
    if (husbandDetails.contriDebtor > 0) {
      setHusbandDetails({
        ...husbandDetails,
        crossNationalCosts: husbandDetails.contriDebtor,
      });
    }
    if (husbandDetails.contriDebtor === 0) {
      setHusbandDetails({
        ...husbandDetails,
        crossNationalCosts: 100 - Number(wifeDetails.contriDebtor) / 100,
      });
    }
    if (wifeDetails.contriDebtor > 0) {
      setWifeDetails({
        ...wifeDetails,
        crossNationalCosts: wifeDetails.contriDebtor,
      });
    }
    if (wifeDetails.contriDebtor === 0) {
      setWifeDetails({
        ...wifeDetails,
        crossNationalCosts: 1 - Number(husbandDetails.contriDebtor) / 100,
      });
    }
  };
  const onChangeHolidayArrIsSchool = () => {
    setHusbandDetails({
      ...husbandDetails,
      // schoolYear: 7,
      summerVacation: 31,
      christmasBreak: 7,
      easterHolidays: 7,
      autumnBreak: 7,
      springBreak: 7,
    });
    setWifeDetails({
      ...wifeDetails,
      // schoolYear: 7,
      summerVacation: 31,
      christmasBreak: 7,
      easterHolidays: 7,
      autumnBreak: 7,
      springBreak: 7,
    });
    setholidayArrangementIsSchoolYear(true);
  };

  const onChangeSchoolYear = (val) => {
    setHusbandDetails({
      ...husbandDetails,
      schoolYear: Number(val),
    });
    setWifeDetails({ ...wifeDetails, schoolYear: 14 - Number(val) });
  };
  const onChangeSummerVacation = (val) => {
    setHusbandDetails({
      ...husbandDetails,
      summerVacation: Number(val),
    });
    setWifeDetails({ ...wifeDetails, summerVacation: 62 - Number(val) });
  };
  const onChangeChristmasBreak = (val) => {
    setHusbandDetails({
      ...husbandDetails,
      christmasBreak: Number(val),
    });
    setWifeDetails({ ...wifeDetails, christmasBreak: 14 - Number(val) });
  };
  const onChangeEasterHolidays = (val) => {
    setHusbandDetails({
      ...husbandDetails,
      easterHolidays: Number(val),
    });
    setWifeDetails({ ...wifeDetails, easterHolidays: 14 - Number(val) });
  };
  const onChangeAutumnBreak = (val) => {
    setHusbandDetails({
      ...husbandDetails,
      autumnBreak: Number(val),
    });
    setWifeDetails({ ...wifeDetails, autumnBreak: 14 - Number(val) });
  };
  const onChangeSpringBreak = (val) => {
    setHusbandDetails({
      ...husbandDetails,
      springBreak: Number(val),
    });
    setWifeDetails({ ...wifeDetails, springBreak: 14 - Number(val) });
  };
  const handleSubmit = () => {
    const husbandContriDebtor = Number(husbandDetails.contriDebtor) / 100;
    const wifeContriDebtor = Number(wifeDetails.contriDebtor) / 100;

    // B41 = B32 + B33 + B34 + B35
    const subTotalHusband =
      Number(husbandDetails.netIncome) +
      Number(husbandDetails.mealVouchers) +
      Number(husbandDetails.companyCar) +
      Number(husbandDetails.tankCard);

    // C41 = C32 + C33 + C34 + C35
    const subTotalWife =
      Number(wifeDetails.netIncome) +
      Number(wifeDetails.mealVouchers) +
      Number(wifeDetails.companyCar) +
      Number(wifeDetails.tankCard);
    // B42 = B41 + C41
    const total = subTotalHusband + subTotalWife;

    // B43 = B42 + B38 + C38 + B39 + C39
    const totalChildBenefits =
      total +
      Number(husbandDetails.childBenefits) +
      Number(wifeDetails.childBenefits) +
      Number(husbandDetails.extraChildBenefits) +
      Number(wifeDetails.extraChildBenefits);
    setSubTotal({
      ...subTotal,
      total: total,
      wife: subTotalWife,
      husband: subTotalHusband,
      childBenefits: totalChildBenefits,
    });

    // B45 = 1 / B42 * B41
    const husbandEarningPercent = (1 / total) * subTotalHusband;
    setHusbandEarningPercentB45(husbandEarningPercent);

    // C45 = 1 / B42 * C41
    const wifeEarningPercent = (1 / total) * subTotalWife;
    setWifeEarningPercentC46(wifeEarningPercent);
    // B54 = B51 + B52
    const husbandLivingCost =
      Number(husbandDetails.lumpSum) + Number(husbandDetails.realCost);
    // C54 = C51 + C52
    const wifeLivingCost =
      Number(wifeDetails.lumpSum) + Number(wifeDetails.realCost);

    // B57 = B41 - B54
    const husbandResidualResources = subTotalHusband - husbandLivingCost;

    // C57 = C32 + C39 - C54
    const wifeResidualResources =
      Number(wifeDetails.netIncome) +
      Number(wifeDetails.extraChildBenefits) -
      wifeLivingCost;

    // B59 = 1 / ( B57 + C57 ) * B57
    const husbandShareInResidualResources =
      (1 / (husbandResidualResources + wifeResidualResources)) *
      husbandResidualResources;

    // C59 = 1 / ( B57 + C57 ) * C57
    const wifeShareInResidualResources =
      (1 / (husbandResidualResources + wifeResidualResources)) *
      wifeResidualResources;

    setValToShow({
      ...valToShow,
      husbandResidualResources: husbandResidualResources,
      wifeResidualResources: wifeResidualResources,
      husbandShareInResidualResources: husbandShareInResidualResources,
      wifeShareInResidualResources: wifeShareInResidualResources,
    });

    // B77 = SUM( B67 : B75 ) + ( B63 * 18.64286 )
    const husbandTotalDays =
      Number(husbandDetails.summerVacation) +
      Number(husbandDetails.christmasBreak) +
      Number(husbandDetails.easterHolidays) +
      Number(husbandDetails.autumnBreak) +
      Number(husbandDetails.springBreak);
    setHusbandDetails({ ...husbandDetails, totalDays: husbandTotalDays });

    // C77 = SUM( C67 : C75 ) + ( C63 * 18.64286 )
    const wifeTotalDays =
      Number(wifeDetails.summerVacation) +
      Number(wifeDetails.christmasBreak) +
      Number(wifeDetails.easterHolidays) +
      Number(wifeDetails.autumnBreak) +
      Number(wifeDetails.springBreak);
    setWifeDetails({ ...wifeDetails, totalDays: wifeTotalDays });

    // B79 = 1 / 365 * B77
    const husbandPercentageOfDays = (1 / 365) * husbandTotalDays;
    setHusbandDetails({
      ...husbandDetails,
      percentOfDays: husbandPercentageOfDays,
    });

    // C79 = 1 / 365 * C77
    const wifePercentageOfDays = (1 / 365) * wifeTotalDays;
    setWifeDetails({ ...wifeDetails, percentOfDays: wifePercentageOfDays });

    let husbandCrossNationalCost;
    let wifeCrossNationalCost;
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
    }

    // B93 = (B89 + B91)/2
    const husbandTotalContriInKind =
      (husbandContriDebtor + husbandCrossNationalCost) / 2;
    setHusbandDetails({
      ...husbandDetails,
      totalContriInKind: husbandTotalContriInKind,
    });

    // C93 = (C89 + C91)/2
    const wifeTotalContriInKind =
      (wifeContriDebtor + wifeCrossNationalCost) / 2;
    setWifeDetails({
      ...wifeDetails,
      totalContriInKind: wifeTotalContriInKind,
    });

    // B97 = B43 - C39
    const famIncome =
      totalChildBenefits - Number(wifeDetails.extraChildBenefits);
    setFamilyIncome(famIncome);
    const no_of_children = inputList.filter((val) => val.childName).length;

    // B100
    let effective_share_household_income;
    switch (no_of_children) {
      case 1:
        if (famIncome <= 2000) {
          effective_share_household_income = avg_percent_wrt_income[1]["2000"];
          console.log(effective_share_household_income, avg_percent_wrt_income[1]["2000"], "1 2000")
        } else if (2000 < famIncome && famIncome <= 4500) {
          effective_share_household_income =
            avg_percent_wrt_income[1]["2001-4500"];
            console.log(effective_share_household_income, avg_percent_wrt_income[1]["2001-4500"], "1 2001-4500")
        } else if (4500 < famIncome && famIncome <= 6000) {
          effective_share_household_income =
            avg_percent_wrt_income[1]["4501-6000"];
            console.log(effective_share_household_income, avg_percent_wrt_income[1]["4501-6000"], "1 4501-6000")
        } else if (6000 < famIncome) {
          effective_share_household_income = avg_percent_wrt_income[1]["6001"];
          console.log(effective_share_household_income, avg_percent_wrt_income[1]["6000"], "1 6001")
        }
        break;
      case 2:
        if (famIncome <= 2000) {
          effective_share_household_income = avg_percent_wrt_income[2]["2000"];
          console.log(effective_share_household_income, avg_percent_wrt_income[2]["2000"], "1 2000")
        } else if (2000 < famIncome && famIncome <= 4500) {
          effective_share_household_income =
            avg_percent_wrt_income[2]["2001-4500"];
            console.log(effective_share_household_income, avg_percent_wrt_income[2]["2001-4500"], "1 2001-4500")
        } else if (4500 < famIncome && famIncome <= 6000) {
          effective_share_household_income =
            avg_percent_wrt_income[2]["4501-6000"];
            console.log(effective_share_household_income, avg_percent_wrt_income[2]["4501-6000"], "1 4501-6000")
        } else if (6000 < famIncome) {
          effective_share_household_income = avg_percent_wrt_income[2]["6001"];
          console.log(effective_share_household_income, avg_percent_wrt_income[2]["6000"], "1 6001")
        }
        break;
      case 3:
        if (famIncome <= 2000) {
          effective_share_household_income = avg_percent_wrt_income[3]["2000"];
          console.log(effective_share_household_income, avg_percent_wrt_income[3]["2000"], "1 2000")
        } else if (2000 < famIncome && famIncome <= 4500) {
          effective_share_household_income =
            avg_percent_wrt_income[3]["2001-4500"];
            console.log(effective_share_household_income, avg_percent_wrt_income[3]["2001-4500"], "1 2001-4500")
        } else if (4500 < famIncome && famIncome <= 6000) {
          effective_share_household_income =
            avg_percent_wrt_income[3]["4501-6000"];
            console.log(effective_share_household_income, avg_percent_wrt_income[3]["4501-6000"], "1 4501-6000")
        } else if (6000 < famIncome) {
          effective_share_household_income = avg_percent_wrt_income[3]["6001"];
          console.log(effective_share_household_income, avg_percent_wrt_income[3]["6000"], "1 6001")
        }
        break;
      case 4:
        if (famIncome <= 2000) {
          effective_share_household_income = avg_percent_wrt_income[4]["2000"];
          console.log(effective_share_household_income, avg_percent_wrt_income[4]["2000"], "1 2000")
        } else if (2000 < famIncome && famIncome <= 4500) {
          effective_share_household_income =
            avg_percent_wrt_income[4]["2001-4500"];
            console.log(effective_share_household_income, avg_percent_wrt_income[4]["2001-4500"], "1 2001-4500")
        } else if (4500 < famIncome && famIncome <= 6000) {
          effective_share_household_income =
            avg_percent_wrt_income[4]["4501-6000"];
            console.log(effective_share_household_income, avg_percent_wrt_income[4]["4501-6000"], "1 4501-6000")
        } else if (6000 < famIncome) {
          effective_share_household_income = avg_percent_wrt_income[4]["6001"];
          console.log(effective_share_household_income, avg_percent_wrt_income[4]["6000"], "1 6001")
        }
        break;
    }
    setEffectiveShareOfHouseHoldIncome(effective_share_household_income);
    const share_based_on_child = inputList.map((val) => {
      if (val.childAge > 24) {
        return (
          (age_percent_data[24][effective_share_household_income] / 100) *
          famIncome
        );
      }
      return (
        (age_percent_data[val.childAge][effective_share_household_income] /
          100) *
        famIncome
      );
    });
    const total_child_share = share_based_on_child.reduce(
      (sum, val) => sum + val
    );
    const finalValue =
      (Number(total_child_share) - Number(wifeDetails.childBenefits)) *
        husbandShareInResidualResources -
      Number(total_child_share) * husbandTotalContriInKind;
    setAlimony(finalValue);
  };
  return (
    <>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark justify-content-between">
        <a className="navbar-brand" href="/#">
          RENARD
        </a>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="/#" className="nav-link">
              About Us
            </a>
          </li>
          <li className="nav-item">
            <a href="/#" className="nav-link">
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
      <div className="row justify-content-center mt-5">
        <div className="col-md-8">
          <div className="card customCard_style p-5 border-0">
            <h2 className="card-title text-center py-5">Hobin Calculation</h2>
            <div className="row my-3">
              <div className="col align-self-end">
                <p>
                  <strong>Name:</strong>
                </p>
              </div>
              <div className="col">
                <p className="text-center">
                  <strong>Husband</strong>
                </p>
                <input
                  className="form-control"
                  type="text"
                  value={husbandDetails.name}
                  name="husbandName"
                  onChange={(e) =>
                    setHusbandDetails({
                      ...husbandDetails,
                      name: e.target.value,
                    })
                  }
                />
              </div>
              <div className="col">
                <p className="text-center">
                  <strong>Wife</strong>
                </p>
                <input
                  className="form-control"
                  type="text"
                  value={wifeDetails.name}
                  name="wifeName"
                  onChange={(e) =>
                    setWifeDetails({ ...wifeDetails, name: e.target.value })
                  }
                />
              </div>
            </div>
            {inputList.map((val, i) => (
              <div className="row mb-3" key={i}>
                <div className="col-md-5">
                  <label>Child Name</label>
                  <input
                    className="form-control"
                    type="text"
                    value={val.childName}
                    name="childName"
                    onChange={(e) => onChangeChildrenData(e, i)}
                  />
                </div>
                <div className="col-md-5">
                  <label>Child Age</label>
                  <input
                    className="form-control"
                    type="number"
                    value={val.childAge}
                    name="childAge"
                    onChange={(e) => onChangeChildrenData(e, i)}
                  />
                </div>
                <div className="col-md-2 align-self-end">
                  {i === inputList.length - 1 ? (
                    <button
                      className="btn btn-success mr-3"
                      onClick={() =>
                        setInputList([
                          ...inputList,
                          { childName: "", childAge: "" },
                        ])
                      }
                    >
                      +
                    </button>
                  ) : (
                    <></>
                  )}

                  {inputList.length > 1 ? (
                    <button
                      className="btn btn-danger"
                      onClick={() => removeChild(i)}
                    >
                      &times;
                    </button>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            ))}
            <hr />
            <h5 className="mb-3">
              <strong>Income:</strong>
            </h5>
            <div className="row mb-3">
              <div className="col align-self-end">
                <p>
                  <strong>Net Income:</strong>
                </p>
              </div>
              <div className="col">
                <p className="text-center">
                  <strong>Husband</strong>
                </p>
                <input
                  className="form-control"
                  type="number"
                  value={husbandDetails.netIncome}
                  name="husbandNetIncome"
                  onChange={(e) =>
                    setHusbandDetails({
                      ...husbandDetails,
                      netIncome: e.target.value,
                    })
                  }
                />
              </div>
              <div className="col">
                <p className="text-center">
                  <strong>Wife</strong>
                </p>
                <input
                  className="form-control"
                  type="number"
                  value={wifeDetails.netIncome}
                  name="wifeNetIncome"
                  onChange={(e) =>
                    setWifeDetails({
                      ...wifeDetails,
                      netIncome: e.target.value,
                    })
                  }
                />
              </div>
            </div>
            {/* ////////////////////////////// */}
            <div className="row mb-3">
              <div className="col align-self-end">
                <p>
                  <strong>Meal Vouchers:</strong>
                </p>
              </div>
              <div className="col text-center">
                <input
                  type="checkbox"
                  value={husbandDetails.mealVouchers ? true : false}
                  name="husbandMealVoucher"
                  onChange={(e) =>
                    setHusbandDetails(
                      e.target.checked
                        ? { ...husbandDetails, mealVouchers: 100 }
                        : { ...husbandDetails, mealVouchers: "" }
                    )
                  }
                />
              </div>
              <div className="col text-center">
                <input
                  type="checkbox"
                  value={wifeDetails.mealVouchers ? true : false}
                  name="wifeMealVoucher"
                  onChange={(e) =>
                    setWifeDetails(
                      e.target.checked
                        ? { ...wifeDetails, mealVouchers: 100 }
                        : { ...wifeDetails, mealVouchers: "" }
                    )
                  }
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col align-self-end">
                <p>
                  <strong>Company Cars:</strong>
                </p>
              </div>
              <div className="col text-center">
                <input
                  type="checkbox"
                  value={husbandDetails.companyCar ? true : false}
                  name="husbandCompanyCar"
                  onChange={(e) =>
                    setHusbandDetails(
                      e.target.checked
                        ? { ...husbandDetails, companyCar: 350 }
                        : { ...husbandDetails, companyCar: "" }
                    )
                  }
                />
              </div>
              <div className="col text-center">
                <input
                  type="checkbox"
                  value={wifeDetails.companyCar ? true : false}
                  name="wifeCompanyCar"
                  onChange={(e) =>
                    setWifeDetails(
                      e.target.checked
                        ? { ...wifeDetails, companyCar: 350 }
                        : { ...wifeDetails, companyCar: "" }
                    )
                  }
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col align-self-end">
                <p>
                  <strong>Tank Card:</strong>
                </p>
              </div>
              <div className="col text-center">
                <input
                  type="checkbox"
                  value={husbandDetails.tankCard ? true : false}
                  name="husbandTankCard"
                  onChange={(e) =>
                    setHusbandDetails(
                      e.target.checked
                        ? { ...husbandDetails, tankCard: 100 }
                        : { ...husbandDetails, tankCard: "" }
                    )
                  }
                />
              </div>
              <div className="col text-center">
                <input
                  type="checkbox"
                  value={wifeDetails.tankCard ? true : false}
                  name="wifeTankCard"
                  onChange={(e) =>
                    setWifeDetails(
                      e.target.checked
                        ? { ...wifeDetails, tankCard: 100 }
                        : { ...wifeDetails, tankCard: "" }
                    )
                  }
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col align-self-end">
                <p>
                  <strong>Child Benefits:</strong>
                </p>
              </div>
              <div className="col">
                <input
                  className="form-control"
                  type="number"
                  value={husbandDetails.childBenefits}
                  name="husbandChildBenefits"
                  onChange={(e) =>
                    setHusbandDetails({
                      ...husbandDetails,
                      childBenefits: e.target.value,
                    })
                  }
                />
              </div>
              <div className="col">
                <input
                  className="form-control"
                  type="number"
                  value={wifeDetails.childBenefits}
                  name="wifeChildBenefits"
                  onChange={(e) =>
                    setWifeDetails({
                      ...wifeDetails,
                      childBenefits: e.target.value,
                    })
                  }
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col align-self-end">
                <p>
                  <strong>Extra Child Benefits:</strong>
                </p>
              </div>
              <div className="col">
                <input
                  className="form-control"
                  type="number"
                  value={husbandDetails.extraChildBenefits}
                  name="husbandExtraChildBenefits"
                  onChange={(e) =>
                    setHusbandDetails({
                      ...husbandDetails,
                      extraChildBenefits: e.target.value,
                    })
                  }
                />
              </div>
              <div className="col">
                <input
                  className="form-control"
                  type="number"
                  value={wifeDetails.extraChildBenefits}
                  name="wifeExtraChildBenefits"
                  onChange={(e) =>
                    setWifeDetails({
                      ...wifeDetails,
                      extraChildBenefits: e.target.value,
                    })
                  }
                />
              </div>
            </div>
            <hr />
            <div className="row mb-3">
              <div className="col align-self-end">
                <p>
                  <strong>Living on Cost-sharing Basis:</strong>
                </p>
              </div>
              <div className="col text-center">
                <div className="d-flex">
                  Yes
                  <input
                    className="mx-auto"
                    type="radio"
                    value="Yes"
                    name="husbandLiveInCostSharing"
                    onChange={onChangeHusbandLiveInCostSharing}
                  />
                  No
                  <input
                    className="mx-auto"
                    type="radio"
                    value="No"
                    name="husbandLiveInCostSharing"
                    onChange={onChangeHusbandLiveInCostSharing}
                  />
                </div>
              </div>
              <div className="col text-center">
                <div className="d-flex">
                  <span>Yes</span>
                  <input
                    className="mx-auto"
                    type="radio"
                    value="Yes"
                    name="wifeLiveInCostSharing"
                    onChange={onChangeWifeLiveInCostSharing}
                  />
                  <span>No</span>
                  <input
                    className="mx-auto"
                    type="radio"
                    value="No"
                    name="wifeLiveInCostSharing"
                    onChange={onChangeWifeLiveInCostSharing}
                  />
                </div>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col align-self-end">
                <p>
                  <strong>Special Circumstances M of V:</strong>
                </p>
              </div>
              <div className="col text-center">
                Yes
                <input
                  className="ml-3"
                  type="radio"
                  value="Yes"
                  name="specialCircumstances"
                  onChange={onChangeSpecialCircumstances}
                />
              </div>
              <div className="col text-center">
                No
                <input
                  className="ml-3"
                  type="radio"
                  value="No"
                  name="specialCircumstances"
                  onChange={onChangeSpecialCircumstances}
                />
              </div>
            </div>
            <hr />

            <div className="row mb-3">
              <div className="col align-self-end">
                <p>
                  <strong>Lump Sum:</strong>
                </p>
              </div>
              <div className="col">
                <p className="text-center">
                  <strong>Husband</strong>
                </p>
                <input
                  className="form-control"
                  type="number"
                  readOnly
                  value={husbandDetails.lumpSum}
                  name="husbandLumpsum"
                />
              </div>
              <div className="col">
                <p className="text-center">
                  <strong>Wife</strong>
                </p>
                <input
                  className="form-control"
                  type="number"
                  readOnly
                  value={wifeDetails.lumpSum}
                  name="wifeLumpsum"
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col align-self-end">
                <p>
                  <strong>Real Cost:</strong>
                </p>
              </div>
              <div className="col">
                <input
                  className="form-control"
                  type="number"
                  readOnly={specialCircumstances === "Yes" ? false : true}
                  value={husbandDetails.realCost}
                  name="husbandLumpsum"
                  onChange={(e) =>
                    setHusbandDetails({
                      ...husbandDetails,
                      realCost: e.target.value,
                    })
                  }
                />
              </div>
              <div className="col">
                <input
                  className="form-control"
                  type="number"
                  readOnly={specialCircumstances === "Yes" ? false : true}
                  value={wifeDetails.realCost}
                  name="wifeLumpsum"
                  onChange={(e) =>
                    setWifeDetails({ ...wifeDetails, realCost: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col align-self-end">
                <p>
                  <strong>Living Cost:</strong>
                </p>
              </div>
              <div className="col">
                <p>
                  {Number(husbandDetails.lumpSum) +
                    Number(husbandDetails.realCost)}
                </p>
              </div>
              <div className="col">
                <p>
                  {Number(wifeDetails.lumpSum) + Number(wifeDetails.realCost)}
                </p>
              </div>
            </div>
            <hr />
            <div className="row mb-3">
              <div className="col-md-4 my-auto">
                <p>
                  <strong>School Year:</strong>
                </p>
              </div>
              <div className="col-md-8">
                <div className="d-flex justify-content-between">
                  <p>
                    <strong>{`Husband (${husbandDetails.schoolYear})`}</strong>
                  </p>
                  <p>
                    <strong>{`Wife (${wifeDetails.schoolYear})`}</strong>
                  </p>
                </div>
                <Slider
                  defaultValue={7}
                  getAriaValueText={(v) => v}
                  aria-labelledby="discrete-slider"
                  valueLabelDisplay="auto"
                  step={1}
                  marks
                  onChange={(e, val) => onChangeSchoolYear(val)}
                  min={0}
                  max={14}
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
                <strong>Holiday Arragement = School year ?</strong>
              </div>
              <div className="col text-center">
                Yes
                <input
                  className="ml-3"
                  type="radio"
                  value="Yes"
                  name="holidayArrangementIsSchoolYear"
                  onChange={onChangeHolidayArrIsSchool}
                />
              </div>
              <div className="col text-center">
                No
                <input
                  className="ml-3"
                  type="radio"
                  value="No"
                  name="holidayArrangementIsSchoolYear"
                  onChange={() => setholidayArrangementIsSchoolYear(false)}
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-4 my-auto">
                <p>
                  <strong>Summer Vacation:</strong>
                </p>
              </div>
              <div className="col-md-8">
                <div className="d-flex justify-content-between">
                  <p>
                    <strong>{`Husband (${husbandDetails.summerVacation})`}</strong>
                  </p>
                  <p>
                    <strong>{`Wife (${wifeDetails.summerVacation})`}</strong>
                  </p>
                </div>
                <Slider
                  defaultValue={31}
                  getAriaValueText={(v) => v}
                  aria-labelledby="discrete-slider"
                  valueLabelDisplay="auto"
                  step={1}
                  marks
                  onChange={(e, val) => onChangeSummerVacation(val)}
                  min={0}
                  max={62}
                  disabled={holidayArrangementIsSchoolYear ? true : false}
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-4 my-auto">
                <p>
                  <strong>Christmas Break:</strong>
                </p>
              </div>
              <div className="col-md-8 my-auto">
                <div className="d-flex justify-content-between">
                  <p>
                    <strong>{`Husband (${husbandDetails.christmasBreak})`}</strong>
                  </p>
                  <p>
                    <strong>{`Wife (${wifeDetails.christmasBreak})`}</strong>
                  </p>
                </div>
                <Slider
                  defaultValue={7}
                  getAriaValueText={(v) => v}
                  aria-labelledby="discrete-slider"
                  valueLabelDisplay="auto"
                  step={1}
                  marks
                  onChange={(e, val) => onChangeChristmasBreak(val)}
                  min={0}
                  max={14}
                  disabled={holidayArrangementIsSchoolYear ? true : false}
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-4 my-auto">
                <p>
                  <strong>Easter Holidays:</strong>
                </p>
              </div>
              <div className="col-md-8">
                <div className="d-flex justify-content-between">
                  <p>
                    <strong>{`Husband (${husbandDetails.easterHolidays})`}</strong>
                  </p>
                  <p>
                    <strong>{`Wife (${wifeDetails.easterHolidays})`}</strong>
                  </p>
                </div>
                <Slider
                  defaultValue={7}
                  getAriaValueText={(v) => v}
                  aria-labelledby="discrete-slider"
                  valueLabelDisplay="auto"
                  step={1}
                  marks
                  onChange={(e, val) => onChangeEasterHolidays(val)}
                  min={0}
                  max={14}
                  disabled={holidayArrangementIsSchoolYear ? true : false}
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-4 my-auto">
                <p>
                  <strong>Autumn Break:</strong>
                </p>
              </div>
              <div className="col-md-8">
                <div className="d-flex justify-content-between">
                  <p>
                    <strong>{`Husband (${husbandDetails.autumnBreak})`}</strong>
                  </p>
                  <p>
                    <strong>{`Wife (${wifeDetails.autumnBreak})`}</strong>
                  </p>
                </div>
                <Slider
                  defaultValue={7}
                  getAriaValueText={(v) => v}
                  aria-labelledby="discrete-slider"
                  valueLabelDisplay="auto"
                  step={1}
                  marks
                  onChange={(e, val) => onChangeAutumnBreak(val)}
                  min={0}
                  max={14}
                  disabled={holidayArrangementIsSchoolYear ? true : false}
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-4 my-auto">
                <p>
                  <strong>Spring Break:</strong>
                </p>
              </div>
              <div className="col-md-8">
                <div className="d-flex justify-content-between">
                  <p>
                    <strong>{`Husband (${husbandDetails.springBreak})`}</strong>
                  </p>
                  <p>
                    <strong>{`Wife (${wifeDetails.springBreak})`}</strong>
                  </p>
                </div>
                <Slider
                  defaultValue={7}
                  getAriaValueText={(v) => v}
                  aria-labelledby="discrete-slider"
                  valueLabelDisplay="auto"
                  step={1}
                  marks
                  onChange={(e, val) => onChangeSpringBreak(val)}
                  min={0}
                  max={14}
                  disabled={holidayArrangementIsSchoolYear ? true : false}
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
                <p>
                  <strong>Total number of days:</strong>
                </p>
              </div>
              <div className="col">
                <p>
                  <strong>{husbandDetails.totalDays}</strong>
                </p>
              </div>
              <div className="col">
                <p>
                  <strong>{wifeDetails.totalDays}</strong>
                </p>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
                <p>
                  <strong>Percentage:</strong>
                </p>
              </div>
              <div className="col">
                <p>
                  <strong>{husbandDetails.percentOfDays}</strong>
                </p>
              </div>
              <div className="col">
                <p>
                  <strong>{wifeDetails.percentOfDays}</strong>
                </p>
              </div>
            </div>
            <hr />
            <div className="row mb-3">
              <div className="col">
                <strong>Seperate settlement for child: </strong>
              </div>
              <div className="col text-center">
                Yes
                <input
                  className="ml-3"
                  type="radio"
                  value="Yes"
                  name="seperateSettlementChild"
                  onChange={() => onChangeSeperateSettlementChild(true)}
                />
              </div>
              <div className="col text-center">
                No
                <input
                  className="ml-3"
                  type="radio"
                  value="No"
                  defaultChecked
                  name="seperateSettlementChild"
                  onChange={() => onChangeSeperateSettlementChild(false)}
                />
              </div>
            </div>
            {!seperateSettlementChild && (
              <div className="row mb-5">
                <div className="col">
                  <p>
                    <strong>Contribution By Debtor(%)</strong>
                  </p>
                </div>
                <div className="col">
                  <input
                    className="form-control"
                    type="number"
                    value={husbandDetails.contriDebtor}
                    name="contriDebtor"
                    onChange={(e) =>
                      setHusbandDetails({
                        ...husbandDetails,
                        contriDebtor: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="col">
                  <input
                    className="form-control"
                    type="number"
                    value={wifeDetails.contriDebtor}
                    name="contriDebtor"
                    onChange={(e) =>
                      setWifeDetails({
                        ...wifeDetails,
                        contriDebtor: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
            )}
            {!seperateSettlementChild && (
              <div className="row mb-5">
                <div className="col">
                  <p>
                    <strong>Cross-National Cost(%)</strong>
                  </p>
                </div>
                <div className="col">
                  <input
                    className="form-control"
                    type="number"
                    value={husbandDetails.crossNationalCosts}
                    readOnly
                    name="crossNationalCosts"
                  />
                </div>
                <div className="col">
                  <input
                    className="form-control"
                    type="number"
                    value={wifeDetails.crossNationalCosts}
                    readOnly
                    name="crossNationalCosts"
                  />
                </div>
                <div className="col">
                  <button
                    className="btn btn-primary"
                    onClick={onClickCalCulateCrossNationalCosts}
                  >
                    Re-calculate crossNationalCost
                  </button>
                </div>
              </div>
            )}
            <div className="row mb-5">
              <div className="col">
                <p>
                  <strong>Husband Sub Total(Income):</strong>
                </p>
                <p>
                  <strong>Wife Sub Total(Income):</strong>
                </p>
                <p>
                  <strong>Total(Income):</strong>
                </p>
                <p>
                  <strong>Total including child benefits(Income):</strong>
                </p>
                <p>
                  <strong>Husband Earning percentage:</strong>
                </p>
                <p>
                  <strong>Wife Earning percentage:</strong>
                </p>
                <p>
                  <strong>Husband Residual Resources:</strong>
                </p>
                <p>
                  <strong>Wife Residual Resources:</strong>
                </p>
                <p>
                  <strong>Husband Share in Residual Resources:</strong>
                </p>
                <p>
                  <strong>Wife Share in Residual Resources:</strong>
                </p>
              </div>
              <div className="col">
                <p>
                  <strong>{subTotal.husband}</strong>
                </p>
                <p>
                  <strong>{subTotal.wife}</strong>
                </p>
                <p>
                  <strong>{subTotal.total}</strong>
                </p>
                <p>
                  <strong>{subTotal.childBenefits}</strong>
                </p>
                <p>
                  <strong>{husbandEarningPercentB45}</strong>
                </p>
                <p>
                  <strong>{wifeEarningPercentC46}</strong>
                </p>
                <p>
                  <strong>{valToShow.husbandResidualResources}</strong>
                </p>
                <p>
                  <strong>{valToShow.wifeResidualResources}</strong>
                </p>
                <p>
                  <strong>{valToShow.husbandShareInResidualResources}</strong>
                </p>
                <p>
                  <strong>{valToShow.wifeShareInResidualResources}</strong>
                </p>
              </div>
            </div>
            <div className="row mb-5">
              <div className="col">
                <p>
                  <strong>Total Contribution in kind:</strong>
                </p>
              </div>
              <div className="col">{husbandDetails.totalContriInKind}</div>
              <div className="col">{wifeDetails.totalContriInKind}</div>
            </div>
            <div className="row mb-5">
              <div className="col">
                <p>
                  <strong>Total Contribution in kind:</strong>
                </p>
              </div>
              <div className="col">
                <p>
                  <strong>{familyIncome}</strong>
                </p>
              </div>
            </div>
            <div className="row mb-5">
              <div className="col">
                <p>
                  <strong>Total Number of Children:</strong>
                </p>
              </div>
              <div className="col">
                <p>
                  <strong>
                    {inputList.filter((val) => val.childName).length}
                  </strong>
                </p>
              </div>
            </div>
            <div className="row mb-5">
              <div className="col">
                <p>
                  <strong>Effective share of household income:</strong>
                </p>
              </div>
              <div className="col">
                <p>
                  <strong>{effectiveShareOfHouseHoldIncome}</strong>
                </p>
              </div>
            </div>
            <div className="row mb-5">
              <div className="col">
                <p>
                  <strong>Alimony:</strong>
                </p>
              </div>
              <div className="col">
                <p>
                  <strong>{alimony}</strong>
                </p>
              </div>
            </div>
            <button className="btn btn-outline-primary" onClick={handleSubmit}>
              Calculate
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
