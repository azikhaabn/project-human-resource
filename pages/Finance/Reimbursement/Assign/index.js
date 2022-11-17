import React, { Component, useState } from "react";
import Link from "next/link";
import styles from "/styles/Finance/Reimbursement/Rtransaction.module.css";
import Navbar from "../../../Component/navbar";
import Pagination from "../../../Component/pagination";
import ShowingSearch from "../../../Component/showingSearch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp, faCaretDown, faXmark, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
// import { faCircleUser, faPenToSquare } from "@fortawesome/free-regular-svg-icons";

export default function ReimbursementTransaction() {
  return (
    <div className={styles.body}>
      <main className={styles.main} id="main">
        <Navbar />
        <div className={`${styles["content"]}`}>
          <div className={`${styles["header"]}`}>
            <Link href="/Finance/Reimbursement">
              <a type="button" className={`${styles["btn-img"]}`}>
                BACK TO REIMBURSEMENT MENU
              </a>
            </Link>
            <img src="/image_618.png" className={styles.image} />
          </div>
          <div class="mx-3">
            <div>
              <Link href="Assign/NewBtn">
                <a type="button" className={`${styles["btn-box"]} btn btn-outline-secondary`}>
                  NEW
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
                      <span className={`ms-3`}>Type</span>
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
                      <span className={`ms-3`}>Description</span>
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
                    <th>1</th>
                    <td>202206001</td>
                    <td>Assigne</td>
                    <td>Medical Claim</td>
                    <td>Assign Pertama</td>
                    <td className={`${styles["modal-list"]}`}>
                      <ul>
                        <li>
                          <Link href="Assign/NewBtn">
                            <a>
                              <FontAwesomeIcon icon={faPenToSquare} style={{ color: "#A21517", marginRight: 10 }} />
                            </a>
                          </Link>
                        </li>
                        <li>
                          <a>
                            <FontAwesomeIcon icon={faXmark} style={{ color: "#A21517", marginRight: 10 }} />
                          </a>
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <th>2</th>
                    <td>202206002</td>
                    <td>Assigne</td>
                    <td>Transportasi</td>
                    <td>Assign Pertama</td>
                    <td className={`${styles["modal-list"]}`}>
                      <ul>
                        <li>
                          <Link href="Assign/NewBtn">
                            <a>
                              <FontAwesomeIcon icon={faPenToSquare} style={{ color: "#A21517", marginRight: 10 }} />
                            </a>
                          </Link>
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
      </main>
    </div>
  );
}
