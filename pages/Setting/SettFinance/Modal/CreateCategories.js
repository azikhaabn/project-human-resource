import React from "react";
import styles from "/styles/Setting/SettFinance/Modal/CreateCategories.module.css";

const createcategory = ({ closeModal }) => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={`${styles.modal} modal-content rounded-0`}>
          <div className={`${styles.modalContent} modal-header mt-2 ms-3 me-3`}>
            <h5 class="modal-title"> Create Category </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body ms-3">
            <div>
              <label
                for="select"
                className={`${styles["form-label"]} form-label`}
              >
                Name
              </label>
              <div className={`input-group`}>
                <input
                  type="text"
                  id="Loan"
                  className={`${styles.inputname} form-control`}
                ></input>
              </div>
            </div>
            <div className="form-check me-5 mt-3">
              <input
                className={`${styles.check} form-check-input`}
                type="checkbox"
                value=""
                id="flexCheckDefault"
              ></input>
              <label className={styles.LabelCheck}>
                Set limit amount per request
              </label>
            </div>
          </div>

          <div class="modal-footer">
            <button
              type="button"
              className={`${styles.btnBack}  me-3`}
              data-bs-dismiss="modal"
            >
              Back
            </button>
            <button
              type="button"
              className={`${styles.btnSave} btn btn-primary`}
            >
              Save
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default createcategory;
