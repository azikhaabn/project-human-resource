import React from "react";
import styles from "/styles/CompanyPage/Files/EditFiles.module.css";

const EditFiles = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.modal} modal-content`}>
        <div className={`${styles["modal-content"]} modal-header mt-2 ms-3 mb-3 me-3 border-bottom`}>
          <h3 class="modal-title">Edit Files</h3>
        </div>

        <div className={`${styles["modal-body"]} modal-body ms-3`}>
          <div class="me-3">
            <div>
              <label for="fileName" className={`${styles["form-label"]} form-label`}>
                File Name
              </label>
              <div className={`input-group mb-2`}>
                <input type="text" id="fileName" className={`${styles["input-group"]} form-control`}></input>
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
            <div>
              <button type="button" className={`${styles["btn-edit"]} btn btn-outline-secondary mt-3 me-2`}>
                DOWNLOAD FILE
              </button>
            </div>

            <div class="mt-4 mb-5">
              <label>
                Selected
              </label>
              <div>
                <p>Viona Pasha, Mahmud Derawan, Linda Maria, Nurul Setia, Derry York</p>
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

export default EditFiles;
