import React from "react";
import styles from "/styles/CompanyPage/Task/CreateNew.module.css";

export default function EditProject() {
  return (
    <div>
      <main className={styles.main}>
        <div class="modal-content rounded-0">
          <div class="modal-header border-bottom mt-2 mb-3">
            <h5 class="modal-title ms-3">Edit Project</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>

          <div className={`${styles["form-label"]} modal-body ms-3 me-3`}>
            <div>
              <label for="name" className={`form-label`}>
                Name
              </label>
              <div className={`input-group mb-3`}>
                <input type="text" id="name" placeholder="New Project" className={`${styles.inputAssetsCategory} form-control`}></input>
              </div>
            </div>

            <div>
              <label for="name" className={`form-label`}>
                Color
              </label>
              <div className={`input-group mb-3`}>
                <input type="color" id="name" placeholder="New Project" className={`${styles.inputAssetsCategory} form-control`}></input>
              </div>
            </div>
          </div>

          <div class="modal-footer mb-2 mt-5">
            <button type="button" className={`${styles["btn-can"]} btn btn-light me-2`} data-bs-dismiss="modal">
              Cancel
            </button>
            <button type="button" class="btn btn-primary me-3">
              Save
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}