import React from "react";
import styles from "/styles/CompanyPage/Reprimand/ResetCancelDelete.module.css";

const reset = ({ closeModal }) => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={`${styles.modal} modal-content rounded-0`}>
          <div class="modal-body ms-3">
            <p className={styles.text}>
              Are You Sure Want To Reset The Search?
            </p>
          </div>

          <div class="modal-footer border-top mb-2">
            <button
              type="button"
              className={`${styles.btnModal} btn btn-outline-secondary mt-2 me-2 btn-sm`}
              onClick={() => closeModal(false)}
            >
              YES
            </button>
            <button
              type="button"
              className={`${styles.btnModal} btn btn-outline-secondary mt-2 me-3 btn-sm`}
              data-bs-dismiss="modal"
            >
              NO
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default reset;
