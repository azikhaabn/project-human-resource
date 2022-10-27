import React, { Component, useMemo, useState } from "react";
import Link from "next/link";
import styles from "/styles/CompanyPage/Files/Cfiles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight, faMagnifyingGlass, faTrashCan, faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import Navbar from "../../../Component/navbar";
import ShowingSearch from "../../../Component/showingSearch"
import Pagination from "../../../Component/pagination"

export default function OtherFiles() {
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <div className={styles.body}>
      <main className={styles.main} id="main">
        <Navbar />

        <img src="/files.png" className={styles.image}></img>

        <main className={styles.mainContent}>
          <div className={`${styles["bg-content"]} mt-5`}>
            <div className={`ms-1`}>
              <div className={`${styles.container}`}>
                <div className={`${styles["main-toggle"]}`}>
                  <section class="section-link-assets">
                    <Link href="./CompanyFiles">
                      <div className={currentRoute === "/CompanyPage/Files/CompanyFiles" ? `${styles["btn-head"]} ${styles["btn-head-active"]}` : `${styles["btn-head"]}`}>
                        <a>Company Files</a>
                      </div>
                    </Link>
                    <Link href="./EmployeeFiles">
                      <div className={currentRoute === "/CompanyPage/Files/EmployeeFiles" ? `${styles["btn-head"]} ${styles["btn-head-active"]}` : `${styles["btn-head"]}`}>
                        <a>Employee Files</a>
                      </div>
                    </Link>
                    <Link href="./OtherFiles">
                      <div className={currentRoute === "/CompanyPage/Files/OtherFiles" ? `${styles["btn-head"]} ${styles["btn-head-active"]}` : `${styles["btn-head"]}`}>
                        <a>Other Files</a>
                      </div>
                    </Link>
                  </section>
                </div>
              </div>

              <div className={`${styles["content"]} mt-5 ms-3`}>
                <div className={`mb-3`}>
                  <h3 className={`mt-5`}>Your Company has 2 Files</h3>
                  <p className={`text-secondary`}><i>This Company Files</i></p>
                </div>

                <h5 className={`${styles["text-h5"]}`}>Drop files here, paste or <span className={`text-primary`}>browse</span></h5>

                <div>
                  <ShowingSearch />
                </div>

                <section class="section-table">
                  <div className={`${styles.contentTable} container-fluid`}>
                    <div className={`${styles["scroll-table"]} row align-items-start mx-2`}>
                      <table class="table">
                        <thead className={`${styles["table-thead"]}`}>
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
                              <span className={`ms-3`}>File Name</span>
                            </th>
                            <th scope="col">
                              <span className={`${styles["icon-sorting"]} d-flex align-items-start flex-column position-absolute`}>
                                <FontAwesomeIcon icon={faCaretUp} className={`${styles["column-icon"]}`} />
                              </span>
                              <span className={`${styles["icon-sorting"]} d-flex align-items-start flex-column position-absolute mt-2`}>
                                <FontAwesomeIcon icon={faCaretDown} />
                              </span>
                              <span className={`ms-3`}>Type File</span>
                            </th>
                            <th scope="col">
                              <span className={`${styles["icon-sorting"]} d-flex align-items-start flex-column position-absolute`}>
                                <FontAwesomeIcon icon={faCaretUp} className={`${styles["column-icon"]}`} />
                              </span>
                              <span className={`${styles["icon-sorting"]} d-flex align-items-start flex-column position-absolute mt-2`}>
                                <FontAwesomeIcon icon={faCaretDown} />
                              </span>
                              <span className={`ms-3`}>Uploader</span>
                            </th>
                            <th scope="col">
                              <span className={`${styles["icon-sorting"]} d-flex align-items-start flex-column position-absolute`}>
                                <FontAwesomeIcon icon={faCaretUp} className={`${styles["column-icon"]}`} />
                              </span>
                              <span className={`${styles["icon-sorting"]} d-flex align-items-start flex-column position-absolute mt-2`}>
                                <FontAwesomeIcon icon={faCaretDown} />
                              </span>
                              <span className={`ms-3`}>Date Created</span>
                            </th>
                          </tr>
                        </thead>
                        <tbody className={`${styles["table-tbody"]}`}>
                          <tr>
                            <th scope="row">
                              <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                              </div>
                            </th>
                            <td>Ketentuan Reimbursment</td>
                            <td>Company</td>
                            <td>Viona Pasha</td>
                            <td>Thu Nov 01, 2018</td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                              </div>
                            </th>
                            <td>Form Pengajuan Cash Advance dummy.docs</td>
                            <td>Company</td>
                            <td>Viona Pasha</td>
                            <td>Thu Sep 29, 2020</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </section>

                <Pagination />
              </div>
            </div>
          </div>

          <div class="modal fade" id="deleteFiles" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
              <div className={`${styles["modal-delete"]} modal-content rounded-0`}>
                <div class="modal-body mt-3 ms-3">
                  <p>Are you sure want to delete this file?</p>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-primary">
                    YES
                  </button>
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                    NO
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </main>
    </div>
  );
}
