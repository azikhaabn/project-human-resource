import React from "react";
import styles from "/styles/CompanyPage/Files/EditFiles.module.css";

const AddFiles = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.modal} modal-content`}>
        <div className={`${styles["modal-content"]} modal-header mt-2 ms-3 mb-3 me-3 border-bottom`}>
          <h3 class="modal-title">Add New Files</h3>
        </div>

        <div className={`${styles["modal-body"]} modal-body ms-3`}>
          <div class="me-3">
            <div>
              <label for="fileName" className={`${styles["form-label"]} form-label`}>
                File Name
              </label>
              <div className={`input-group mb-2`}>
                <input type="text" placeholder="File Name" id="fileName" className={`${styles["input-group"]} form-control`}></input>
              </div>
            </div>

            <div>
              <label for="publishDate" className={`${styles["form-label"]} form-label`}>
                Publish Date
              </label>
              <div className={`input-group mb-3`}>
                <input type="date" id="publishDate" className={`${styles["input-group"]} form-control`}></input>
              </div>
            </div>

            <div>
              <button type="button" className={`${styles["btn-edit"]} btn btn-outline-secondary my-2 me-2`}>
                CHOOSE FILES
              </button>
            </div>

            <div className={`${styles["form-select"]} mt-4 mb-5`}>
              <label for="shareTo" className={`${styles["form-label"]} form-label`}>Share To</label>
              <div className={`input-group mb-3`}>
                <select className={`${styles["input-group"]} form-select`} aria-label="Default select example">
                  <option selected>All Employee</option>
                  <option value="selectEmployee">Select Employee</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div class="modal-footer border-top my-2">
          <button type="button" className={`${styles["btn-edit"]} btn btn-outline-secondary mt-2 me-1 btn-sm`} data-bs-dismiss="modal">
            CLOSE
          </button>
          <button type="button" className={`${styles["btn-edit"]} btn btn-outline-secondary mt-2 me-2 btn-sm`}>
            UPDATE
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddFiles;
