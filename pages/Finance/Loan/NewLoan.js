import React from "react";
import styles from "/styles/Finance/Loan/NewLoan.module.css";

const NewLoan = ({ closeModal }) => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={`${styles.modal} modal-content rounded-0 mt-5`}>
          <div
            className={`${styles.modalnewloan} modal-header mt-4 ms-4 mb-3 me-3`}
          >
            <h3 class="modal-title">Add New Loan Name</h3>
          </div>

          <div class="modal-body ms-3">
            <div class="col-10 mt-2">
              <label className={styles.Label}>Loan Name</label>
              <div className={`input-group mb-3`}>
                <input
                  type="text"
                  id="Loan"
                  className={`${styles.inputnewloan} form-control`}
                ></input>
              </div>
            </div>
          </div>

          <div class="modal-footer border-top mb-2">
            <button
              type="button"
              className={`${styles.btnModal} btn btn-outline-secondary mt-2 me-1 btn-sm`}
              onClick={() => closeModal(false)}
            >
              SAVE
            </button>
            <button
              type="button"
              className={`${styles.btnModal} btn btn-outline-secondary mt-2 me-2 btn-sm`}
              data-bs-dismiss="modal"
            >
              CLOSE
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NewLoan;
