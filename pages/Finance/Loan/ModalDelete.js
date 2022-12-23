import React from "react";
import styles from "/styles/Finance/Loan/delete.module.css";

const ModalDelete = ({ closeModal }) => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={`${styles.modal} modal-content rounded-0`}>
          <div class="modal-body ms-3">
            <p className={styles.text}>
              Are you sure want to delete this transaction?
            </p>
          </div>

          <div class="modal-footer border-top mb-2">
            <button
              type="button"
              className={`${styles.btnModal} btn btn-outline-secondary mt-2 me-2 btn-sm`}
              onClick={() => closeModal(false)}
            >
              CONFIRM
            </button>
            <button
              type="button"
              className={`${styles.btnModal} btn btn-outline-secondary mt-2 me-3 btn-sm`}
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

export default ModalDelete;
