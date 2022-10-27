import React from "react";
import Link from "next/link";
import styles from "/styles/CompanyPage/Files/ModalFiles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faAngleLeft, faAngleRight, faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";

const ModalEmployeeFiles = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.modal} modal-content rounded-0`}>
        <div className={`${styles["modal-body"]} modal-body ms-3`}>
          <div class="me-3">
            <section class="section-sellect-search mb-4">
              <div class="container-fluid">
                <div className={`${styles["input"]} row justify-content-end mt-3`}>
                  <div class="col-3">
                    <label for="search" className={`${styles.formLabel} form-label`}>
                      Search
                    </label>
                    <div className={`input-group mb-3`}>
                      <span className={`${styles["input-group"]} input-group-text`}>
                        <FontAwesomeIcon className={styles["search-icon"]} icon={faMagnifyingGlass} />
                      </span>
                      <input type="text" className={`${styles["input-group"]} form-control`}></input>
                    </div>
                  </div>
                  <div class="col-2">
                    <label for="select" className={`${styles.formLabel} form-label`}>
                      Showing
                    </label>
                    <select className={`${styles["input-group"]} form-select`} id="select">
                      <option selected>10</option>
                      <option value="25">25</option>
                      <option value="50">50</option>
                      <option value="75">75</option>
                      <option value="100">100</option>
                    </select>
                  </div>
                </div>
              </div>
            </section>

            <div className={styles["table"]}>
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">
                      <span className={`${styles["icon-sorting"]} d-flex align-items-start flex-column position-absolute`}>
                        <FontAwesomeIcon icon={faCaretUp} className={`${styles["column-icon"]}`} />
                      </span>
                      <span className={`${styles["icon-sorting"]} d-flex align-items-start flex-column position-absolute mt-2`}>
                        <FontAwesomeIcon icon={faCaretDown} />
                      </span>
                      <span class="ms-3">Category</span>
                    </th>
                    <th scope="col">
                      <span className={`${styles["icon-sorting"]} d-flex align-items-start flex-column position-absolute`}>
                        <FontAwesomeIcon icon={faCaretUp} className={`${styles["column-icon"]}`} />
                      </span>
                      <span className={`${styles["icon-sorting"]} d-flex align-items-start flex-column position-absolute mt-2`}>
                        <FontAwesomeIcon icon={faCaretDown} />
                      </span>
                      <span class="ms-3">Description</span>
                    </th>
                    <th scope="col">
                      <span className={`${styles["icon-sorting"]} d-flex align-items-start flex-column position-absolute`}>
                        <FontAwesomeIcon icon={faCaretUp} className={`${styles["column-icon"]}`} />
                      </span>
                      <span className={`${styles["icon-sorting"]} d-flex align-items-start flex-column position-absolute mt-2`}>
                        <FontAwesomeIcon icon={faCaretDown} />
                      </span>
                      <span class="ms-3">Update Date</span>
                    </th>
                    <th scope="col">
                      <span className={`${styles["icon-sorting"]} d-flex align-items-start flex-column position-absolute`}>
                        <FontAwesomeIcon icon={faCaretUp} className={`${styles["column-icon"]}`} />
                      </span>
                      <span className={`${styles["icon-sorting"]} d-flex align-items-start flex-column position-absolute mt-2`}>
                        <FontAwesomeIcon icon={faCaretDown} />
                      </span>
                      <span class="ms-3"></span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Company File</td>
                    <td>Ketentuan Reimbursement</td>
                    <td>2022-08-04 14:53:42</td>
                    <td>
                      <button type="button" className={`btn btn-sm btn-outline-secondary`}>
                        DOWNLOAD FILE
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <section class="section-paginate mt-3">
              <div className={`container-fluid`}>
                <div className={`${styles.rowPaginate}`}>
                  <p className={styles.textShow}>Showing 1 to 1 of 1 entries</p>
                  <div>
                    <Link href="#">
                      <FontAwesomeIcon icon={faAngleLeft} className={styles.arrowIcon} />
                    </Link>
                    &nbsp; &nbsp; <span className={styles.numberPage}>1</span> &nbsp; &nbsp;
                    <Link href="#">
                      <FontAwesomeIcon icon={faAngleRight} className={styles.arrowIcon} />
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div class="modal-footer border-top">
          <button type="button" className={`${styles["btn-edit"]} btn btn-outline-secondary me-1 btn-sm`} data-bs-dismiss="modal">
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalEmployeeFiles;
