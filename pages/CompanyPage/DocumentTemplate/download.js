import React from "react";
import styles from "/styles/CompanyPage/DocumentTemplate/download.module.css";

const DownloadTemplate = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={`${styles.modal} modal-content rounded-0`}>
          <div className={`${styles.modalContent} modal-header mt-2 ms-3 mb-3 me-3 border-bottom`}>
            <h5 class="modal-title" id="exampleModalLabel">
              Download Template
            </h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div>
              <label for="select" className={`${styles["form-label"]} form-label`}>
                For employee
              </label>
              <select className={`${styles["form-select"]} form-select`} id="select">
                <option selected>Select employee</option>
                <option value="1">Viona Vahsa</option>
                <option value="2">Mahmud Derawan</option>
                <option value="3">Linda Maria</option>
                <option value="4">Nurul Setia</option>
              </select>
            </div>
          </div>

          <div class="modal-footer">
            <button type="button" className={`${styles.btnCancel}  me-3`} data-bs-dismiss="modal">
              Cancel
            </button>
            <button type="button" className={`${styles.btnDownload} btn btn-primary`}>
              Download
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DownloadTemplate;