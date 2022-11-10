import React from "react";
import { useState } from "react";
import styles from "/styles/Setting/Finance/ReimbursementSettings.module.css";

export const NoExpiryDate = () => {
  const [minExpiry, setMinExpiry] = useState(false);
  const [optionMonth, setOptionMonth] = useState("january");

  return (
    <div>
      <h5 style={{ fontSize: "15px", marginLeft: "-20px" }}>Expired In</h5>
      <div className={`d-flex justify-content-start mb-4`}>
        <div className={`${styles["form-check"]} form-check`}>
          <input className={`${styles["check-radio"]}`} type="radio" name="expiredIn" id="month" />
          <label className={`${styles["form-label"]} form-check-label col-5 ms-2`} for="month">
            <input className={`${styles["input-group"]} form-control`} type="text" />
          </label>
        </div>
        <h5 style={{ marginLeft: "-80px", fontSize: "15px" }}>Month</h5>
      </div>

      <div className={`d-flex justify-content-start ms-1`}>
        <div className={`d-flex justify-content-start`} style={{ marginLeft: "24px" }}>
          <input
            className={`${styles["check-radio"]}`}
            type="radio"
            name="expiredIn"
            style={{ marginBottom: "20px" }}
            onClick={() => {
              setMinExpiry(!minExpiry);
            }}
          />
          <div className={`col-12 me-1 ms-2`}>
            <div className={`mb-3`}>
              <label for="day" className={`${styles["form-label"]} form-label`}>
                Day
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
        </div>

        <div className={`col-5 ms-4`}>
          <div className={`mb-3`}>
            <label for="month" className={`${styles["form-label"]} form-label`}>
              Month
            </label>
            <div className={`input-group mb-3`}>
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
      </div>

      {/* {minExpiry ? ( */}
      <div className={`d-flex justify-content-start ms-3`}>
        <h5 class="ms-5" style={{ fontSize: "15px", marginTop: "27px" }}>
          Minimum expiry
        </h5>
        <div className={`col-5`}>
          <div className={`mb-3 ms-3`}>
            <label for="month" className={`${styles["form-label"]} form-label`}>
              Month(s)
            </label>
            <div className={`input-group mb-3`}>
              <input type="text" id="month" className={`${styles["input-group"]} form-control`} placeholder="0" />
            </div>
          </div>
        </div>
      </div>
      {/* ) : (
        <></>
      )} */}
    </div>
  );
};
