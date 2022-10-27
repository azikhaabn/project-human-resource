import React from "react";
import styles from "/styles/CompanyPage/Reprimand/Filter.module.css";

const Filter = ({ closeModal }) => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={`${styles.modal} modal-content rounded-0`}>
          <div
            className={`${styles.modalContent} modal-header mt-2 ms-3 mb-2 me-3 border-bottom`}
          >
            <h3 class="modal-title">Search</h3>
          </div>

          <div class="modal-body ms-3">
            <div className={`col-5`}>
              <label className={styles.Label}>Assign To</label>
              <select
                className={`${styles["select-option"]} form-select`}
                aria-label="Default select example"
              >
                <option selected>--Select Employee--</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className={`col-5 mt-3`}>
              <label className={styles.Label}>Departement</label>
              <select
                className={`${styles["select-option"]} form-select`}
                aria-label="Default select example"
              >
                <option selected>--Select Departement--</option>
              </select>
            </div>
            <div className={`col-5 mt-3`}>
              <label className={styles.Label}>Type</label>
              <select
                className={`${styles["select-option"]} form-select`}
                aria-label="Default select example"
              >
                <option selected>--Select Type Reprimand--</option>
              </select>
            </div>
            <div className={`col-10 mt-3`}>
              <label className={styles.Label}>Started Date</label>
              <input
                type="date"
                id="taskName"
                placeholder="New Task"
                className={`${styles["input-date"]} form-control`}
              ></input>
            </div>
            <div className={`col-10 mt-3`}>
              <label className={styles.Label}>Expired Date</label>
              <input
                type="date"
                id="taskName"
                placeholder="New Task"
                className={`${styles["input-date"]} form-control`}
              ></input>
            </div>
            <div className={`col-5 mt-3`}>
              <label className={styles.Label}>Status</label>
              <select
                className={`${styles["select-option"]} form-select`}
                aria-label="Default select example"
              >
                <option selected>--Select Type Reprimand--</option>
              </select>
            </div>
            <div class="d-flex justify-content-between">
              <div class="col-10 mt-3">
                <label className={styles.Label}>Content</label>
                <div className={`input-group mb-3`}>
                  <input
                    type="text"
                    id="content"
                    className={`${styles.inputcontent} form-control`}
                  ></input>
                </div>
              </div>
            </div>
            <div class="col-10">
              <label className={styles.Label}>Feedback</label>
              <div className={`input-group mb-3`}>
                <input
                  type="text"
                  id="content"
                  className={`${styles.inputcontent} form-control`}
                ></input>
              </div>
            </div>
          </div>

          <div class="modal-footer border-top mb-2">
            <button
              type="button"
              className={`${styles.btnModal} btn btn-outline-secondary mt-2 me-2 btn-sm`}
              data-bs-dismiss="modal"
            >
              SEARCH
            </button>
            <button
              type="button"
              className={`${styles.btnModal} btn btn-outline-secondary mt-2 me-2 btn-sm`}
              data-bs-dismiss="modal"
            >
              RESET
            </button>
            <button
              type="button"
              className={`${styles.btnModal} btn btn-outline-secondary mt-2 me-2 btn-sm`}
              data-bs-dismiss="modal"
            >
              CANCEL
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Filter;
