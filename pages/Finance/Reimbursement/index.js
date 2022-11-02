import React, { Component, useState } from "react";
import Link from "next/link";
import styles from "/styles/Finance/Reimbursement/Reimbursement.module.css";
import Navbar from "../../Component/navbar";
import Pagination from "../../Component/pagination";
import ShowingSearch from "../../Component/showingSearch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faCaretUp, faCaretDown, faCircleInfo, faXmark, faBars, faUser } from "@fortawesome/free-solid-svg-icons";
import ReimbursementSimulation from "./ReimSimulation";
import ViewReimbursement from "./viewReim";
import ViewBalance from "./viewBalance";
import ViewBalanceByEmployee from "./byEmployee";

export default function Reimbursement() {
  return (
    <div className={styles.body}>
      <main className={styles.main} id="main">
        <Navbar />

        <div className={`${styles.container}`}>
          <div className={`${styles["content"]}`}>
            <div>
              <img src="/image_618.png" className={styles.image}></img>
            </div>
            <div className={`${styles["box"]} mx-3`}>
              <div className={`${styles["first-box-content"]} d-flex justify-content-between`}>
                <div>
                  <h5>ASSIGN/UPDATE/REQUEST REIMBURSEMENT</h5>
                  <Link href="Reimbursement/Assign">
                    <a type="button" className={`${styles["btn-box"]} btn btn-sm btn-outline-secondary`}>
                      ASSIGN OR UPDATE
                    </a>
                  </Link>
                  <Link href="Reimbursement/Request">
                    <a type="button" className={`${styles["btn-box"]} btn btn-sm btn-outline-secondary`}>
                      REQUEST
                    </a>
                  </Link>
                </div>
                <div>
                  <h5>UPDATE REIMBURSEMENT BALANCE VIA EXCEL</h5>
                  <button type="button" className={`${styles["btn-box"]} btn btn-sm btn-outline-secondary`}>
                    EXPORT
                  </button>
                  <button type="button" className={`${styles["btn-box"]} btn btn-sm btn-outline-secondary`}>
                    IMPORT
                  </button>
                </div>
              </div>

              <div className={`${styles["second-box-content"]} d-flex justify-content-between`}>
                <div>
                  <h5>CREATE OR VIEW SETTING REIMBURSEMENT</h5>
                  <button type="button" className={`${styles["btn-box"]} btn btn-sm btn-outline-secondary`}>
                    NEW
                  </button>
                  <Link href="Reimbursement/ViewSetting">
                    <a type="button" className={`${styles["btn-box"]} btn btn-sm btn-outline-secondary`}>
                      VIEW SETTING
                    </a>
                  </Link>
                </div>
                <div className={`${styles["btn"]}`}>
                  <button type="button" className={`${styles["btn-box"]} btn btn-sm btn-outline-secondary`} data-bs-toggle="modal" data-bs-target="#reimSimulation">
                    REIMBURSEMENT SIMULATION
                  </button>
                </div>
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
                        <span className={`ms-3`}>Reimbursement Name</span>
                      </th>
                      <th scope="col">
                        <span className={`${styles["icon-sorting"]} d-flex align-items-start flex-column position-absolute`}>
                          <FontAwesomeIcon icon={faCaretUp} className={`${styles["column-icon"]}`} />
                        </span>
                        <span className={`${styles["icon-sorting"]} d-flex align-items-start flex-column position-absolute mt-2`}>
                          <FontAwesomeIcon icon={faCaretDown} />
                        </span>
                        <span className={`ms-3`}>Reimbursement Limit</span>
                      </th>
                      <th scope="col">
                        <span className={`${styles["icon-sorting"]} d-flex align-items-start flex-column position-absolute`}>
                          <FontAwesomeIcon icon={faCaretUp} className={`${styles["column-icon"]}`} />
                        </span>
                        <span className={`${styles["icon-sorting"]} d-flex align-items-start flex-column position-absolute mt-2`}>
                          <FontAwesomeIcon icon={faCaretDown} />
                        </span>
                        <span className={`ms-3`}>Expired In</span>
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
                        <span className={`ms-3`}>
                          <FontAwesomeIcon icon={faCircleInfo} style={{ color: "#039BE5" }} />
                        </span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className={`${styles["table-body"]}`}>
                    <tr>
                      <th>1</th>
                      <td>Medical Claim</td>
                      <td>1000000</td>
                      <td>31 Desember</td>
                      <td>2000-01-01</td>
                      <td className={`${styles["modal-list"]}`}>
                        <ul>
                          <li>
                            <a className={`${styles["button"]} btn`} data-bs-toggle="modal" data-bs-target="#viewReim">
                              <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "#A21517", marginRight: 10 }} />
                            </a>
                          </li>
                          <li>
                            <a className={`${styles["button"]} btn`}>
                              <FontAwesomeIcon icon={faXmark} style={{ color: "#8C8C8C", marginRight: 10 }} />
                            </a>
                          </li>
                          <li>
                            <a className={`${styles["button"]} btn`} data-bs-toggle="modal" data-bs-target="#viewBalance">
                              <FontAwesomeIcon icon={faBars} style={{ color: "#A21517", marginRight: 10 }} />
                            </a>
                          </li>
                          <li>
                            <a className={`${styles["button"]} btn`} data-bs-toggle="modal" data-bs-target="#byEmployee">
                              <FontAwesomeIcon icon={faUser} style={{ color: "#A21517" }} />
                            </a>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <th>2</th>
                      <td>Transportasi</td>
                      <td>UNLIMITED</td>
                      <td>UNLIMITED</td>
                      <td>2000-01-01</td>
                      <td className={`${styles["modal-list"]}`}>
                        <ul>
                          <li>
                            <a className={`${styles["button"]} btn`} data-bs-toggle="modal" data-bs-target="#viewReim">
                              <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "#A21517", marginRight: 10 }} />
                            </a>
                          </li>
                          <li>
                            <a className={`${styles["button"]} btn`}>
                              <FontAwesomeIcon icon={faXmark} style={{ color: "#8C8C8C", marginRight: 10 }} />
                            </a>
                          </li>
                          <li>
                            <a className={`${styles["button"]} btn`}>
                              <FontAwesomeIcon icon={faBars} style={{ color: "#A21517", marginRight: 10 }} />
                            </a>
                          </li>
                          <li>
                            <a className={`${styles["button"]} btn`}>
                              <FontAwesomeIcon icon={faUser} style={{ color: "#A21517" }} />
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

        {/* MODAL REIMBURSEMENT SIMULATION */}
        <div class="modal fade" id="reimSimulation" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <ReimbursementSimulation />
          </div>
        </div>


        {/* MODAL VIEW REiMBURSEMENT */}
        <div class="modal fade" id="viewReim" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <ViewReimbursement />
          </div>
        </div>

        {/* MODAL VIEW BALANCE */}
        <div class="modal fade" id="viewBalance" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <ViewBalance />
          </div>
        </div>

        {/* MODAL VIEW BALANCE BY EMPLOYEE*/}
        <div class="modal fade" id="byEmployee" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <ViewBalanceByEmployee />
          </div>
        </div>
      </main>
    </div>
  );
}
