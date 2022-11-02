import React from "react";
import styles from "/styles/Finance/Reimbursement/ReimSimulation.module.css";

const ReimbursementSimulation = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.modal} modal-content rounded-0`}>
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel" style={{ color: "#9F0111" }}>
            Reimbursement Simulation
          </h1>
        </div>
        <div className={`${styles["modal-body"]} modal-body ms-3`}>
          <div>
            <div className={`mb-3`}>
              <label className={`${styles["form-label"]} form-label`}>
                Employee
              </label>
              <div className={`input-group mb-3`}>
                <select className={`${styles["input-group"]} form-select`} aria-label="Default select example">
                  <option selected>--Select Employee--</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
            <div className={`mb-3`}>
              <label for="currentDate" className={`${styles["form-label"]} form-label`}>
                Current Date
              </label>
              <div className={`input-group mb-3`}>
                <input type="date" id="currentDate" className={`${styles["input-group"]} form-control`}></input>
              </div>
            </div>
            <div>
              <label className={`${styles["form-label"]} form-label`}>
                Policy
              </label>
              <div className={`input-group mb-3`}>
                <select className={`${styles["input-group"]} form-select`} aria-label="Default select example">
                  <option selected>--Chosee--</option>
                  <option value="medicalClaim">Medical Claim</option>
                  <option value="transportasi">Transportasi</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer border-top mb-2">
          <button type="button" className={`${styles["btn-box"]} btn btn-outline-secondary me-1 btn-sm`} data-bs-dismiss="modal">
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReimbursementSimulation;
