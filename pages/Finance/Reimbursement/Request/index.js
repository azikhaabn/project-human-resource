import React, { Component, useState } from "react";
import Link from "next/link";
import styles from "/styles/Finance/Reimbursement/Request.module.css";
import Navbar from "../../../Component/navbar";
import Pagination from "../../../Component/pagination";
import ShowingSearch from "../../../Component/showingSearch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp, faCaretDown, faXmark, faCircleInfo, faPencil } from "@fortawesome/free-solid-svg-icons";
// import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import NewRequest from "./newRequest";

export default function Request() {
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
                        Select Month Periode
                      </label>
                      <select className={`${styles["input-group"]} form-select`} id="select">
                        <option selected>--All--</option>
                        <option value="january">January</option>
                        <option value="february">February</option>
                        <option value="march">March</option>
                        <option value="april">April</option>
                        <option value="may">May</option>
                        <option value="june">June</option>
                        <option value="july">July</option>
                        <option value="august">August</option>
                        <option value="september">September</option>
                        <option value="october">October</option>
                        <option value="november">November</option>
                        <option value="december">December</option>
                      </select>
                    </div>

                    <div className={`col-3`}>
                      <label for="select" className={`${styles["form-label"]} form-label`}>
                        Select Year Periode
                      </label>
                      <select className={`${styles["input-group"]} form-select`} id="select">
                        <option selected>--All--</option>
                        <option value="2010">2010</option>
                        <option value="2011">2011</option>
                        <option value="2012">2012</option>
                        <option value="2013">2013</option>
                        <option value="2014">2014</option>
                        <option value="2015">2015</option>
                        <option value="2016">2016</option>
                        <option value="2017">2017</option>
                        <option value="2018">2018</option>
                        <option value="2019">2019</option>
                        <option value="2020">2020</option>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                      </select>
                    </div>
                  </div>
                </div>
              </section>

              <div class="mx-4">
                <div>
                  <Link href="Assign/NewBtn">
                    <a type="button" className={`${styles["btn-box"]} btn btn-sm btn-outline-secondary`} data-bs-toggle="modal" data-bs-target="#exampleModal">
                      <span>CREATE REIMBURSEMENT REQUEST</span>
                    </a>
                  </Link>
                </div>
                <ShowingSearch />

                <section class="section-table">
                  <table class="table">
                    <thead className={`${styles["table-head"]}`}>
                      <tr>
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
                          <span className={`${styles["icon-sorting"]} d-flex align-items-start flex-column position-absolute`}>
                            <FontAwesomeIcon icon={faCaretUp} className={`${styles["column-icon"]}`} />
                          </span>
                          <span className={`${styles["icon-sorting"]} d-flex align-items-start flex-column position-absolute mt-2`}>
                            <FontAwesomeIcon icon={faCaretDown} />
                          </span>
                          <span className={`ms-3`}>Transaction ID</span>
                        </th>
                        <th scope="col">
                          <span className={`${styles["icon-sorting"]} d-flex align-items-start flex-column position-absolute`}>
                            <FontAwesomeIcon icon={faCaretUp} className={`${styles["column-icon"]}`} />
                          </span>
                          <span className={`${styles["icon-sorting"]} d-flex align-items-start flex-column position-absolute mt-2`}>
                            <FontAwesomeIcon icon={faCaretDown} />
                          </span>
                          <span className={`ms-3`}>Employee</span>
                        </th>
                        <th scope="col">
                          <span className={`${styles["icon-sorting"]} d-flex align-items-start flex-column position-absolute`}>
                            <FontAwesomeIcon icon={faCaretUp} className={`${styles["column-icon"]}`} />
                          </span>
                          <span className={`${styles["icon-sorting"]} d-flex align-items-start flex-column position-absolute mt-2`}>
                            <FontAwesomeIcon icon={faCaretDown} />
                          </span>
                          <span className={`ms-3`}>Reimbursement Name</span>
                        </th>
                        <th scope="col">
                          <span className={`${styles["icon-sorting"]} d-flex align-items-start flex-column position-absolute`}>
                            <FontAwesomeIcon icon={faCaretUp} className={`${styles["column-icon"]}`} />
                          </span>
                          <span className={`${styles["icon-sorting"]} d-flex align-items-start flex-column position-absolute mt-2`}>
                            <FontAwesomeIcon icon={faCaretDown} />
                          </span>
                          <span className={`ms-3`}>Effective Date</span>
                        </th>
                        <th scope="col">
                          <span className={`${styles["icon-sorting"]} d-flex align-items-start flex-column position-absolute`}>
                            <FontAwesomeIcon icon={faCaretUp} className={`${styles["column-icon"]}`} />
                          </span>
                          <span className={`${styles["icon-sorting"]} d-flex align-items-start flex-column position-absolute mt-2`}>
                            <FontAwesomeIcon icon={faCaretDown} />
                          </span>
                          <span className={`ms-3`}>Description</span>
                        </th>
                        <th scope="col">
                          <span className={`${styles["icon-sorting"]} d-flex align-items-start flex-column position-absolute`}>
                            <FontAwesomeIcon icon={faCaretUp} className={`${styles["column-icon"]}`} />
                          </span>
                          <span className={`${styles["icon-sorting"]} d-flex align-items-start flex-column position-absolute mt-2`}>
                            <FontAwesomeIcon icon={faCaretDown} />
                          </span>
                          <span className={`ms-3`}>
                            <FontAwesomeIcon icon={faCircleInfo} style={{ color: "#039BE5" }} />
                          </span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className={`${styles["table-body"]}`}>
                      <tr>
                        <th>1</th>
                        <td>202206001</td>
                        <td>T002-Mahmud Derawan</td>
                        <td>Medical Claim</td>
                        <td>2022-06-06</td>
                        <td>Radang Tenggorokan</td>
                        <td className={`${styles["modal-list"]}`}>
                          <ul>
                            <li>
                              <a>
                                <FontAwesomeIcon icon={faPencil} style={{ color: "#A21517", marginRight: 10 }} />
                              </a>
                            </li>
                            <li>
                              <a>
                                <FontAwesomeIcon icon={faXmark} style={{ color: "#A21517", marginRight: 10 }} />
                              </a>
                            </li>
                          </ul>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </section>

                <Pagination />
              </div>
            </div>
          </div>
        </div>

        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered">
            <NewRequest />
          </div>
        </div>
      </main>
    </div>
  );
}
