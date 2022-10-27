import React from "react";
import styles from "/styles/CompanyPage/Reprimand/AddNewType.module.css";

const AddNewReprimandType = ({ closeModal }) => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={`${styles.modal} modal-content rounded-0 mt-5`}>
          <div
            className={`${styles.modalContent} modal-header mt-2 ms-3 mb-1 me-3 border-bottom`}
          >
            <h3 class="modal-title">Add New Reprimand Type</h3>
          </div>

          <div class="modal-body ms-3">
            <div class="col-10 mt-3">
              <label className={styles.Label}>Reprimand Type Name</label>
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
              className={`${styles.btnModal} btn btn-outline-secondary mt-2 me-1 btn-sm`}
              onClick={() => closeModal(false)}
            >
              SUBMIT
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

export default AddNewReprimandType;
