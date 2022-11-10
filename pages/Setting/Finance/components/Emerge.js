import React, { useState } from "react";
import styles from "/styles/Setting/Finance/ReimbursementSettings.module.css";
import RadioButton from "./RadioButton";
import Formula from "../formula";

export const Emerge = () => {
  const [reimLimit, setReimLimit] = useState("Amount");
  const [optionMonth, setOptionMonth] = useState("january");
  // const [taxable, setTaxable] = useState("Yes");

  const onChangeValue = (event) => {
    setReimLimit(event.target.value);
    console.log(event.target.value);
  };
  return (
    <div>
      <section className={`${styles["expiry-date"]}`}>
        <h5>Emerge</h5>
        <ul onChange={onChangeValue}>
          <li className={`d-flex justify-content-start`}>
            <div>
              <div className={`${styles["form-check"]} form-check`}>
                <input className={`${styles["check-radio"]}`} type="radio" name="emerge" id="month" />
                <label className={`${styles["form-label"]} form-check-label ms-2`} for="month">
                  Annually
                </label>
              </div>
            </div>

            <div className={`col-1`}>
              <div className={`ms-3`}>
                <label for="day" className={`${styles["form-label"]} form-label`} style={{ width: "100px" }}>
                  Day Emerge Annually
                </label>
                <div className={`input-group mb-3`}>
                  <div className={`input-group mb-3`}>
                    <select className={`${styles["input-group"]} form-select`}>
                      <option slected>1</option>
                      <option value="2">2</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className={`col-2`}>
              <div className={`mb-3 ms-3`}>
                <label for="month" className={`${styles["form-label"]} form-label`} style={{ width: "100px" }}>
                  Month Emerge Annually
                </label>
                <div className={`input-group`}>
                  <select
                    className={`${styles["input-group"]} form-select`}
                    onChange={(e) => {
                      const selectedMonth = e.target.value;
                      setOptionMonth(selectedMonth);
                    }}
                  >
                    <option selected="true">January</option>
                    <option value="february">February</option>
                    <option value="march">March</option>
                    <option value="april">April</option>
                    <option value="may">May</option>
                    <option value="june">June</option>
                    <option value="july">July</option>
                    <option value="august">August</option>
                    <option value="september">September</option>
                    <option value="october">October</option>
                    <option value="november">November</option>
                    <option value="desember">Desember</option>
                  </select>
                </div>
              </div>
            </div>
            <div className={`col-1 ms-3`}>
              <label for="yearEmmerge" className={`${styles["form-label"]} form-label`} style={{ width: "100px" }}>
                Year Emerge Annually
              </label>
              <div className={`input-group mb-3`}>
                <input type="text" id="yearEmmerge" className={`${styles["input-group"]} form-control`}></input>
              </div>
            </div>

            <div class="ms-3">
              <h5 style={{ fontSize: "15px" }}>Reimbursement Limit</h5>
              <ul onChange={onChangeValue}>
                <li className="mb-2">
                  <ul className="d-flex justify-content-start">
                    <li>
                      <RadioButton id="amount" children="Amount" value="Amount" checked={reimLimit === "Amount"} />
                    </li>
                    <li>
                      <div className={`col-10 ms-3`}>
                        <div className={`input-group mb-3 mt-3`}>
                          <input type="text" id="reimName" className={`${styles["input-group"]} form-control`} style={{ marginTop: "-20px" }}></input>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
                <li>
                  <ul className="d-flex justify-content-start">
                    <li>
                      <RadioButton id="formula" children="Formula" value="Formula" checked={reimLimit === "Formula"} />
                    </li>
                    <li>
                      {reimLimit === "Formula" ? (
                        <button type="button" className={`${styles["btn-box"]} btn btn-outline-secondary btn-sm ms-3`} data-bs-toggle="modal" data-bs-target="#viewFormula" style={{ marginTop: "2px" }}>
                          FORMULA
                        </button>
                      ) : (
                        <></>
                      )}
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </li>

          <li>
            <div>
              <div className={`${styles["form-check"]} form-check`}>
                <input className={`${styles["check-radio"]}`} type="radio" name="emerge" id="month" />
                <label className={`${styles["form-label"]} form-check-label ms-2`} for="month">
                  Anniversary
                </label>
              </div>
            </div>
          </li>

          <li className="d-flex justify-content-start">
            <div>
              <div className={`${styles["form-check"]} form-check`}>
                <input className={`${styles["check-radio"]}`} type="radio" name="emerge" id="month" />
                <label className={`${styles["form-label"]} form-check-label ms-2`} for="month">
                  Monthly
                </label>
              </div>
            </div>

            <div class="ms-3">
              <h5 style={{ fontSize: "15px" }}>Emerge Day</h5>
              <ul onChange={onChangeValue}>
                <li>
                  <ul className="d-flex justify-content-start">
                    <li>
                      <RadioButton id="formula" children="Aniversary" value="Formula" checked={reimLimit === "Formula"} />
                    </li>
                  </ul>
                </li>

                <li className="mb-2">
                  <ul className="d-flex justify-content-start">
                    <li>
                      <RadioButton id="amount" children="Custom" value="Amount" checked={reimLimit === "Amount"} />
                    </li>
                    <li>
                      <div className={`col-10 ms-3`}>
                        <div className={`input-group mb-3 mt-3`}>
                          <input type="text" id="reimName" className={`${styles["input-group"]} form-control`} style={{ marginTop: "-20px" }} placeholder="Day(s)"></input>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </section>

      {/* MODAL FORMULA NO EXPIRY DATE */}
      <div class="modal fade" id="viewFormula" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <Formula />
        </div>
      </div>
    </div>
  );
};
