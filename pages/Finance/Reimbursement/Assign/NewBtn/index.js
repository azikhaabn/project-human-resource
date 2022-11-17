import React, { Component, useState } from "react";
import Link from "next/link";
import styles from "/styles/Finance/Reimbursement/NewBtn.module.css";
import Navbar from "../../../../Component/navbar";
import Pagination from "../../../../Component/pagination";
import ShowingSearch from "../../../../Component/showingSearch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightArrowLeft, faArrowUpFromBracket, faScrewdriver, faTrash, faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import AddNewBtn from "./addNew";

export default function NewBtn() {
  return (
    <div className={styles.body}>
      <main className={styles.main} id="main">
        <Navbar />

        <div className={`${styles.container}`}>
          <div className={`${styles["content"]}`}>
            <div className={`${styles["header"]}`}>
              <Link href="/Finance/Reimbursement">
                <a type="button" className={`${styles["btn-img"]}`}>
                  BACK TO REIMBURSEMENT MENU
                </a>
              </Link>
              <img src="/image_618.png" className={styles.image} />
            </div>
            <div className={`${styles["box"]}`}>
              <section className={`${styles["section-option"]} section-sellect-search mb-4 mt-4`}>
                <div class="container-fluid">
                  <div class="row mt-3">
                    <div className={`col-3`}>
                      <label for="select" className={`${styles["form-label"]} form-label`}>
                        Reimbursement Name
                      </label>
                      <select className={`${styles["input-group"]} form-select`} id="select">
                        <option selected>--Choose--</option>
                      </select>
                    </div>
                  </div>

                  <div class="row mt-3">
                    <div className={`col-3`}>
                      <label for="select" className={`${styles["form-label"]} form-label`}>
                        Type
                      </label>
                      <select className={`${styles["input-group"]} form-select`} id="select">
                        <option selected>--Choose--</option>
                        <option value="Assign">Assign</option>
                        <option value="update">Update</option>
                        <option value="expired">Expired</option>
                      </select>
                    </div>
                    <div className={`col-9`}>
                      <label for="select" className={`${styles["form-label"]} form-label`}>
                        Description
                      </label>
                      <div className={`input-group mb-3`}>
                        <input type="text" className={`${styles["input-group"]} form-control col-xs-12`} id="description"></input>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <div className={`${styles["btn"]}`}>
                <ul>
                  <li>
                    <button type="button" className={`${styles["btn-box"]}`} data-bs-toggle="modal" data-bs-target="#addBtnNew">
                      <FontAwesomeIcon icon={faScrewdriver} /> &nbsp;
                      <span>ADD</span>
                    </button>
                  </li>
                  <li>
                    <button type="button" className={`${styles["btn-import"]}`}>
                      <FontAwesomeIcon icon={faArrowRightArrowLeft} /> &nbsp;
                      <span>IMPORT</span>
                      <input type="file" />
                    </button>
                  </li>
                  <li>
                    <button type="button" className={`${styles["btn-box"]}`}>
                      <FontAwesomeIcon icon={faArrowUpFromBracket} /> &nbsp;
                      <span>EXPORT</span>
                    </button>
                  </li>
                  <li>
                    <button type="button" className={`${styles["btn-box"]}`} data-bs-toggle="modal" data-bs-target="#deleteBtn">
                      <FontAwesomeIcon icon={faTrash} /> &nbsp;
                      <span>DELETE</span>
                    </button>
                  </li>
                </ul>
              </div>

              <div>
                <ShowingSearch />
              </div>

              <section class="section-table">
                <table class="table">
                  <thead className={`${styles["table-head"]}`}>
                    <tr>
                      <th scope="col">
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        </div>
                      </th>
                      <th scope="col">
                        <span className={`${styles["icon-sorting"]} d-flex align-items-start flex-column position-absolute`}>
                          <FontAwesomeIcon icon={faCaretUp} className={`${styles["column-icon"]}`} />
                        </span>
                        <span className={`${styles["icon-sorting"]} d-flex align-items-start flex-column position-absolute mt-2`}>
                          <FontAwesomeIcon icon={faCaretDown} />
                        </span>
                        <span className={`ms-3`}>No</span>
                      </th>
                      <th scope="col">
                        <span className={`ms-3`}>Employee ID</span>
                      </th>
                      <th scope="col">
                        <span className={`${styles["icon-sorting"]} d-flex align-items-start flex-column position-absolute`}>
                          <FontAwesomeIcon icon={faCaretUp} className={`${styles["column-icon"]}`} />
                        </span>
                        <span className={`${styles["icon-sorting"]} d-flex align-items-start flex-column position-absolute mt-2`}>
                          <FontAwesomeIcon icon={faCaretDown} />
                        </span>
                        <span className={`ms-3`}>Full Name</span>
                      </th>
                      <th scope="col">
                        <span className={`${styles["icon-sorting"]} d-flex align-items-start flex-column position-absolute`}>
                          <FontAwesomeIcon icon={faCaretUp} className={`${styles["column-icon"]}`} />
                        </span>
                        <span className={`${styles["icon-sorting"]} d-flex align-items-start flex-column position-absolute mt-2`}>
                          <FontAwesomeIcon icon={faCaretDown} />
                        </span>
                        <span className={`ms-3`}>Balance</span>
                      </th>
                      <th scope="col">
                        <span className={`${styles["icon-sorting"]} d-flex align-items-start flex-column position-absolute`}>
                          <FontAwesomeIcon icon={faCaretUp} className={`${styles["column-icon"]}`} />
                        </span>
                        <span className={`${styles["icon-sorting"]} d-flex align-items-start flex-column position-absolute mt-2`}>
                          <FontAwesomeIcon icon={faCaretDown} />
                        </span>
                        <span className={`ms-3`}>Start Date</span>
                      </th>
                      <th scope="col">
                        <span className={`${styles["icon-sorting"]} d-flex align-items-start flex-column position-absolute`}>
                          <FontAwesomeIcon icon={faCaretUp} className={`${styles["column-icon"]}`} />
                        </span>
                        <span className={`${styles["icon-sorting"]} d-flex align-items-start flex-column position-absolute mt-2`}>
                          <FontAwesomeIcon icon={faCaretDown} />
                        </span>
                        <span className={`ms-3`}>End Date</span>
                      </th>
                      <th scope="col">
                        <span className={`${styles["icon-sorting"]} d-flex align-items-start flex-column position-absolute`}>
                          <FontAwesomeIcon icon={faCaretUp} className={`${styles["column-icon"]}`} />
                        </span>
                        <span className={`${styles["icon-sorting"]} d-flex align-items-start flex-column position-absolute mt-2`}>
                          <FontAwesomeIcon icon={faCaretDown} />
                        </span>
                        <span className={`ms-3`}>Action</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className={`${styles["table-body"]}`}>
                    <tr>
                      <th></th>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>No data available in table</td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </section>

              <div>
                <Pagination />
              </div>
            </div>
          </div>
        </div>

        {/* MODAL ADD */}
        <div class="modal fade" id="addBtnNew" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered">
            <AddNewBtn />
          </div>
        </div>

        {/* MODAL DELETE */}
        <div class="modal fade" id="deleteBtn" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered">
            <div className={`${styles.modal} modal-content rounded-0`}>
              <div class="modal-body mt-3 ms-3">
                <p>Are you sure to delete these selected reimbursement?</p>
              </div>
              <div class="modal-footer">
                <button type="button" className={`${styles["btn-modal"]} btn btn-sm btn-outline-secondary`}>
                  YES
                </button>
                <button type="button" className={`${styles["btn-modal"]} btn btn-sm btn-outline-secondary`} data-bs-dismiss="modal">
                  NO
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
