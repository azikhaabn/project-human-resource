import React from "react";
import styles from "/styles/Setting/Finance/Formula.module.css";
import AddParent from "./addParent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Formula = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.modal} modal-content rounded-0`}>
        <div className={`${styles["modal-header"]} modal-header`}>
          <h3 class="modal-title ms-3" style={{ color: "#910111" }}>
            Formula
          </h3>
        </div>

        <div className={`${styles["modal-body"]} modal-body mt-3`}>
          <div className="d-grid gap-2">
            <button type="button" className={`${styles["btn-add"]}`} data-bs-toggle="modal" data-bs-target="#exampleModal3">
              <FontAwesomeIcon icon={faPlus} /> &nbsp; ADD PARENT
            </button>
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

      <div class="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <AddParent />
        </div>
      </div>
    </div>
  );
};

export default Formula;
