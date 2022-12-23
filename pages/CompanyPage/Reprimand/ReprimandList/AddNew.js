import React from "react";
import styles from "/styles/CompanyPage/Reprimand/AddNew.module.css";

const AddNewReprimandList = ({ closeModal }) => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={`${styles.modal} modal-content rounded-0`}>
          <div
            className={`${styles.modalContent} modal-header mt-2 ms-3 mb-1 me-3 border-bottom`}
          >
            <h3 class="modal-title">Add New Reprimand</h3>
          </div>

          <div class="modal-body ms-3">
            <div className={`col-5`}>
              <label className={styles.Label}>Assign To</label>
              <select
                className={`${styles["select-option"]} form-select`}
                aria-label="Default select example"
              >
                <option selected>--Select Employee--</option>
              </select>
            </div>
            
            <button
              type="button"
              className={`${styles.btnFile} btn btn-outline-secondary mt-4 me-1 btn-sm`}
             
            >
              ATTACH FILE (MAX 10 MB)
              <input type="file"></input>
            </button>
           
            <div class="d-flex justify-content-start mt-4">
              <div className="form-check me-5">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                ></input>
                <label className={styles.Label}>Set By Sistem</label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                ></input>
                <label className={styles.Label}>Send Email</label>
              </div>
            </div>
            <div className={`col-5 mt-3`}>
              <label className={styles.Label}>Type</label>
              <select
                className={`${styles["select-option"]} form-select`}
                aria-label="Default select example"
              >
                <option selected>SP1</option>
              </select>
            </div>
            <div className={`col-10 mt-3`}>
              <label className={styles.Label}>Started Date</label>
              <input
                type="date"
                id="taskName"
                placeholder="New Task"
                className={`${styles["input-date"]} form-control`}
              ></input>
            </div>
            <div className={`col-10 mt-3`}>
              <label className={styles.Label}>Expired Date</label>

              <input
                type="date"
                id="taskName"
                placeholder="New Task"
                className={`${styles["input-date"]} form-control`}
              ></input>
            </div>
            <div class="d-flex justify-content-between">
              <div class="col-10 mt-3">
                <label className={styles.Label}>Content</label>
                <div className={`input-group mb-3`}>
                  <input
                    type="text"
                    id="content"
                    className={`${styles.inputcontent} form-control`}
                  ></input>
                </div>
              </div>
            </div>
            <div class="d-flex justify-content-between">
              <div class="col-10">
                <label className={styles.Label}>Feedback</label>
                <div className={`input-group mb-3`}>
                  <input
                    type="text"
                    id="content"
                    className={`${styles.inputcontent} form-control`}
                  ></input>
                </div>
              </div>
            </div>
          </div>

          <div class="modal-footer border-top mb-2">
            <button
              type="button"
              className={`${styles.btnModal} btn btn-outline-secondary mt-2 me-1 btn-sm`}
              onClick={() => closeModal(false)}
            >
              SUBMIT REPRIMAND
            </button>
            <button
              type="button"
              className={`${styles.btnModal} btn btn-outline-secondary mt-2 me-2 btn-sm`}
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

export default AddNewReprimandList;
