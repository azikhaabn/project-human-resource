import React from "react";
import styles from "/styles/Setting/Finance/AddParent.module.css";

const AddParent = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.modal} modal-content rounded-0`}>
        <div className={`${styles["modal-header"]} modal-header`}>
          <h3 class="modal-title ms-3" style={{ color: "#910111" }}>
            Select Component
          </h3>
        </div>

        <div className={`${styles["modal-body"]} modal-body mt-3`}>
          <div className="input-group">
            <select className={`${styles["input-group"]} form-select`} aria-label="Default select example">
              <option selected="true">Job Level</option>
              <option value="else">Else</option>
              <option value="function">Function</option>
              <option value="branch">Branch</option>
              <option value="organization">Organization</option>
              <option value="jobPosition">Job Position</option>
            </select>
          </div>
        </div>

        <div class="modal-footer mt-5">
          <button type="button" className={`${styles["btn-box"]} btn btn-sm btn-outline-secondary`}>
            SAVE
          </button>
          <button type="button" className={`${styles["btn-box"]} btn btn-sm btn-outline-secondary`} data-bs-dismiss="modal">
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddParent;
