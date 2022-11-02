import React from "react";
import styles from "/styles/Finance/Reimbursement/NewRequest.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const NewRequest = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.modal} modal-content rounded-0`}>
        <div class="modal-header">
          <h5 class="modal-title" style={{ color: "#9F0111" }}>
            New Reimbursement Request
          </h5>
        </div>
        <div className={`${styles["modal-body"]} modal-body mx-3`}>
          <div class="d-flex justify-content-start">
            <div class="col-5">
              <label for="inputBalance" className={`${styles["form-label"]} form-label`}>
                Transaction ID
              </label>
              <div className={`input-group mb-3`}>
                <input type="text" id="inputBalance" className={`${styles["input-group-tr"]} form-control`}></input>
              </div>
            </div>
            <div className={`mt-2 ms-4`}>
              {/* <div class="col-4">
                <div className={`input-group mb-3`}>
                  <input type="file" id="startDate" className={`btn form-control mt-4`}></input>
                </div>
              </div> */}
              <button type="button" className={`${styles["btn-box"]} btn btn-sm btn-outline-secondary`}>
                ATTACH FILE
              </button>
            </div>
          </div>
          <div className={`d-flex justify-content-between mt-3`}>
            <div class="col-5">
              <label for="startDate" className={`${styles["form-label"]} form-label`}>
                Effective Date
              </label>
              <div className={`input-group mb-3`}>
                <input type="date" id="startDate" className={`${styles["input-group"]} form-control mt-4`}></input>
              </div>
            </div>
            <div className={`col-6`}>
              <label for="select" className={`${styles["form-label"]} form-label`}>
                Description
              </label>
              <div className={`input-group mb-3`}>
                <textarea type="text" className={`${styles["input-group"]} form-control col-xs-12`} id="description"></textarea>
              </div>
            </div>
          </div>
          <div className={`col-5 mt-3`}>
            <label for="select" className={`${styles["form-label"]} form-label`}>
              Type
            </label>
            <select className={`${styles["input-group"]} form-select`} id="select">
              <option selected>--Choose--</option>
              <option value="Assign">Medical Claim</option>
              <option value="update">Trasportasi</option>
            </select>
          </div>

          <div class="border-bottom my-5">
            <div class="col-5">
              <label for="startDate" className={`${styles["form-label"]} form-label`}>
                Employee
              </label>
              <div className={`input-group mb-3`}>
                <input type="text" id="startDate" className={`${styles["input-group"]} form-control`}></input>
              </div>
            </div>
          </div>

          <section class="section-table">
            <h3>Total Paid:</h3>
            <table className={`${styles.table} table`}>
              <thead className={`${styles["table-head"]}`}>
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">Benefit Name</th>
                  <th scope="col">Request Amount</th>
                  <th scope="col">Paid Amount</th>
                  <th scope="col">Description</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody className={`${styles["table-body"]}`}>
                <tr>
                  <td>1</td>
                  <td>
                    <div className={`col-15`}>
                      <select className={`${styles["input-group"]} form-select`} id="select">
                        <option selected>Rawat Jalan</option>
                      </select>
                    </div>
                  </td>
                  <td>
                    <div class="col-15 ms-4">
                      <div className={`input-group mb-3`}>
                        <input type="text" className={`${styles["input-group"]} form-control`}></input>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="col-15">
                      <div className={`input-group mb-3`}>
                        <input type="text" className={`${styles["input-group"]} form-control`}></input>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="col-15">
                      <div className={`input-group mb-3`}>
                        <input type="text" className={`${styles["input-group"]} form-control`}></input>
                      </div>
                    </div>
                  </td>
                  <td><FontAwesomeIcon icon={faXmark} style={{ color: "#a21517" }} /></td>
                </tr>
              </tbody>
            </table>

            <div>
              <button type="button" className={`${styles["btn-box"]} btn btn-sm btn-outline-secondary`}>
                ADD BENEFIT
              </button>
            </div>
          </section>
        </div>
        <div class="modal-footer border-top mb-2">
          <button type="button" className={`${styles["btn-box"]} btn btn-outline-secondary me-2 btn-sm`}>
            SUBMIT
          </button>
          <button type="button" className={`${styles["btn-box"]} btn btn-outline-secondary me-1 btn-sm`} data-bs-dismiss="modal">
            CANCEL
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewRequest;
