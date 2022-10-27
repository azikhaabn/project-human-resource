import React, { Component, useMemo, useState } from "react";
import Link from "next/link";
import styles from "/styles/CompanyPage/Files/Cfiles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import { COLUMNS } from "./columns";
import COMPANY_FILES from "../Company_Files.json";
import InputFilter from "./InputFilter";
import { useGlobalFilter, usePagination, useTable } from "react-table";
import ModalEmployeeFiles from "./modal";
import Navbar from "../../../Component/navbar";

export default function CompanyFiles() {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => COMPANY_FILES, []);

  const { getTableProps, getTableBodyProps, headerGroups, page, nextPage, previousPage, canNextPage, canPreviousPage, setPageSize, prepareRow, state, setGlobalFilter } = useTable({ columns, data }, useGlobalFilter, usePagination);

  const { globalFilter, pageIndex, pageSize } = state;

  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <div className={styles.body}>
      <main className={styles.main} id="main">
        <Navbar />

        <img src="/files.png" className={styles.image}></img>
        {/* <a type="button" class="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#modalFiles">
          Employee files
        </a> */}

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
                  <h3 className={`mt-5`}>Your Employee Files</h3>
                </div>

                <section class="section-sellect-search mb-4">
                  <div class="container-fluid">
                    <div class="row mt-3 justify-content-end me-1">
                      <div class="col-1">
                        <label for="select" className={`${styles["form-label"]} form-label`}>
                          Showing
                        </label>
                        <select value={pageSize} onChange={(e) => setPageSize(Number(e.target.value))} className={`${styles["input-group"]} form-select`} id="select">
                          {[10, 25, 50, 75, 100].map((pageSize) => (
                            <option key={pageSize} value={pageSize}>
                              {pageSize}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div class="col-2">
                        <InputFilter filter={globalFilter} setFilter={setGlobalFilter} />
                      </div>
                    </div>
                  </div>
                </section>

                <section class="section-table">
                  <div className={`${styles.contentTable} container-fluid`}>
                    <div className={`${styles["scroll-table"]} row align-items-start mx-2`}>
                      <table {...getTableProps} className={`${styles["table"]} table mb-3 rounded-3 overflow-hidden align-middle mb-0 bg-white`}>
                        <thead className={`${styles["table-thead"]}`}>
                          {headerGroups.map((headerGroup) => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                              {headerGroup.headers.map((column) => (
                                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
                              ))}
                            </tr>
                          ))}
                        </thead>
                        <tbody {...getTableBodyProps}>
                          {page.map((row) => {
                            prepareRow(row);
                            return (
                              <tr {...row.getRowProps()}>
                                {row.cells.map((cell) => {
                                  return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
                                })}
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </section>

                <section class="section-paginate mt-3">
                  <div className={`container-fluid`}>
                    <div className={`${styles.rowPaginate}`}>
                      <p className={styles.textShow}>
                        Showing 1 to {pageSize} of {pageSize} entries
                      </p>
                      <div>
                        <Link href="#">
                          <FontAwesomeIcon onClick={() => previousPage()} icon={faAngleLeft} className={`${!canPreviousPage ? styles["arrow-icon-disabled"] : styles["arrow-icon"]} `} />
                        </Link>
                        &nbsp; &nbsp; <span className={styles.numberPage}>{pageIndex + 1}</span> &nbsp; &nbsp;
                        <Link href="#">
                          <FontAwesomeIcon onClick={() => nextPage()} icon={faAngleRight} className={`${!canNextPage ? styles["arrow-icon-disabled"] : styles["arrow-icon"]} `} />
                        </Link>
                      </div>
                      <ul class="pagination">
                        <li className="page-item">
                          <button onClick={() => previousPage()} className={`text-uppercase page-link ${!canPreviousPage ? "disabled" : ""}`}>
                            Previous
                          </button>
                        </li>
                        <li className="page-item">
                          <button onClick={() => nextPage()} className={`text-uppercase page-link ${!canNextPage ? "disabled" : ""}`}>
                            Go
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>

          <div class="modal fade" id="modalFiles" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
              <ModalEmployeeFiles />
            </div>
          </div>

        </main>
      </main>
    </div>
  );
}
