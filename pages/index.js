import { useState, useEffect } from "react";

export default function Home() {
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
    totalContriInKind: "",
  });

  const [
    holidayArrangementIsSchoolYear,
    setholidayArrangementIsSchoolYear,
  ] = useState(true);

  const [liveInCostSharing, setLiveInCostSharing] = useState("");
  const [familyIncome, setFamilyIncome] = useState("");
  const [specialCircumstances, setSpecialCircumstances] = useState("");
  const [seperateSettlementChild, setSeperateSettlementChild] = useState(false);
  const [inputList, setInputList] = useState([{ childName: "", childAge: "" }]);

  // FINAL AMOUNTS
  const [husbandFinalAmt, setHusbandFinalAmt] = useState({
    contri_1: "",
    contri_2: "",
  });
  const [wifeFinalAmt, setWifeFinalAmt] = useState({
    contri_1: "",
    contri_2: "",
  });

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

  const onChangeLiveInCostSharing = (e) => {
    setLiveInCostSharing(e.target.value);
    if (
      e.target.value === "Yes" &&
      (specialCircumstances === "" || specialCircumstances === "No")
    ) {
      setHusbandDetails({ ...husbandDetails, lumpSum: 470 });
      setWifeDetails({ ...wifeDetails, lumpSum: 470 });
    } else if (
      e.target.value === "No" &&
      (specialCircumstances === "" || specialCircumstances === "No")
    ) {
      setHusbandDetails({ ...husbandDetails, lumpSum: 940 });
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
      schoolYear: 7.7,
      summerVacation: 31.31,
      christmasBreak: 7.7,
      easterHolidays: 7.7,
      autumnBreak: 7.0,
      springBreak: 0.7,
    });
    setWifeDetails({
      ...wifeDetails,
      schoolYear: 7.7,
      summerVacation: 31.31,
      christmasBreak: 7.7,
      easterHolidays: 7.7,
      autumnBreak: 7.0,
      springBreak: 0.7,
    });
    setholidayArrangementIsSchoolYear(true);
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

    // B45 = 1 / B42 * B41
    const husbandEarningPercent = (1 / total) * subTotalHusband;

    // C45 = 1 / B42 * C41
    const wifeEarningPercent = (1 / total) * subTotalWife;

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
                Yes
                <input
                  className="ml-3"
                  type="radio"
                  value="Yes"
                  name="liveInCostSharing"
                  onChange={onChangeLiveInCostSharing}
                />
              </div>
              <div className="col text-center">
                No
                <input
                  className="ml-3"
                  type="radio"
                  value="No"
                  name="liveInCostSharing"
                  onChange={onChangeLiveInCostSharing}
                />
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
              <div className="col">
                <p>
                  <strong>School Year:</strong>
                </p>
              </div>
              <div className="col">
                <input
                  className="form-control"
                  type="number"
                  readOnly={holidayArrangementIsSchoolYear ? true : false}
                  value={husbandDetails.schoolYear}
                  name="schoolYear"
                  onChange={(e) =>
                    setHusbandDetails({
                      ...husbandDetails,
                      schoolYear: e.target.value,
                    })
                  }
                />
              </div>
              <div className="col">
                <input
                  className="form-control"
                  type="number"
                  readOnly={holidayArrangementIsSchoolYear ? true : false}
                  value={wifeDetails.schoolYear}
                  name="schoolYear"
                  onChange={(e) =>
                    setWifeDetails({
                      ...wifeDetails,
                      schoolYear: e.target.value,
                    })
                  }
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
                <p>
                  <strong>Summer Vacation:</strong>
                </p>
              </div>
              <div className="col">
                <input
                  className="form-control"
                  type="number"
                  readOnly={holidayArrangementIsSchoolYear ? true : false}
                  value={husbandDetails.summerVacation}
                  name="schoolYear"
                  onChange={(e) =>
                    setHusbandDetails({
                      ...husbandDetails,
                      summerVacation: e.target.value,
                    })
                  }
                />
              </div>
              <div className="col">
                <input
                  className="form-control"
                  type="number"
                  readOnly={holidayArrangementIsSchoolYear ? true : false}
                  value={wifeDetails.summerVacation}
                  name="schoolYear"
                  onChange={(e) =>
                    setWifeDetails({
                      ...wifeDetails,
                      summerVacation: e.target.value,
                    })
                  }
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
                <p>
                  <strong>Christmas Break:</strong>
                </p>
              </div>
              <div className="col">
                <input
                  className="form-control"
                  type="number"
                  readOnly={holidayArrangementIsSchoolYear ? true : false}
                  value={husbandDetails.christmasBreak}
                  name="schoolYear"
                  onChange={(e) =>
                    setHusbandDetails({
                      ...husbandDetails,
                      christmasBreak: e.target.value,
                    })
                  }
                />
              </div>
              <div className="col">
                <input
                  className="form-control"
                  type="number"
                  readOnly={holidayArrangementIsSchoolYear ? true : false}
                  value={wifeDetails.christmasBreak}
                  name="schoolYear"
                  onChange={(e) =>
                    setWifeDetails({
                      ...wifeDetails,
                      christmasBreak: e.target.value,
                    })
                  }
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
                <p>
                  <strong>Easter Holidays:</strong>
                </p>
              </div>
              <div className="col">
                <input
                  className="form-control"
                  type="number"
                  readOnly={holidayArrangementIsSchoolYear ? true : false}
                  value={husbandDetails.easterHolidays}
                  name="schoolYear"
                  onChange={(e) =>
                    setHusbandDetails({
                      ...husbandDetails,
                      easterHolidays: e.target.value,
                    })
                  }
                />
              </div>
              <div className="col">
                <input
                  className="form-control"
                  type="number"
                  readOnly={holidayArrangementIsSchoolYear ? true : false}
                  value={wifeDetails.easterHolidays}
                  name="schoolYear"
                  onChange={(e) =>
                    setWifeDetails({
                      ...wifeDetails,
                      easterHolidays: e.target.value,
                    })
                  }
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
                <p>
                  <strong>Autumn Break:</strong>
                </p>
              </div>
              <div className="col">
                <input
                  className="form-control"
                  type="number"
                  readOnly={holidayArrangementIsSchoolYear ? true : false}
                  value={husbandDetails.autumnBreak}
                  name="schoolYear"
                  onChange={(e) =>
                    setHusbandDetails({
                      ...husbandDetails,
                      autumnBreak: e.target.value,
                    })
                  }
                />
              </div>
              <div className="col">
                <input
                  className="form-control"
                  type="number"
                  readOnly={holidayArrangementIsSchoolYear ? true : false}
                  value={wifeDetails.autumnBreak}
                  name="schoolYear"
                  onChange={(e) =>
                    setWifeDetails({
                      ...wifeDetails,
                      autumnBreak: e.target.value,
                    })
                  }
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
                <p>
                  <strong>Spring Break:</strong>
                </p>
              </div>
              <div className="col">
                <input
                  className="form-control"
                  type="number"
                  readOnly={holidayArrangementIsSchoolYear ? true : false}
                  value={husbandDetails.springBreak}
                  name="schoolYear"
                  onChange={(e) =>
                    setHusbandDetails({
                      ...husbandDetails,
                      springBreak: e.target.value,
                    })
                  }
                />
              </div>
              <div className="col">
                <input
                  className="form-control"
                  type="number"
                  readOnly={holidayArrangementIsSchoolYear ? true : false}
                  value={wifeDetails.springBreak}
                  name="schoolYear"
                  onChange={(e) =>
                    setWifeDetails({
                      ...wifeDetails,
                      springBreak: e.target.value,
                    })
                  }
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
            {seperateSettlementChild && (
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
            {seperateSettlementChild && (
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
                  <strong>{inputList.filter(val=>val.childName).length}</strong>
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
