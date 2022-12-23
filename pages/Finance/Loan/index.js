import React, { Component, useMemo, useState } from "react";
import styles from "/styles/Finance/Loan/Loan.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faInfoCircle,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import Navbar from "../../Component/navbar";
import { useRouter } from "next/router";
import { COLUMNS } from "./Columns";
import MOCK_DATA from "./MOCK_DATA.json";
import { useGlobalFilter, useTable, usePagination } from "react-table";
import Pagination from "../../Component/pagination";
import ModalDelete from "../Loan/ModalDelete"

export default function Loan() {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    setPageSize,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable({ columns, data }, useGlobalFilter, usePagination);

  const { globalFilter, pageIndex, pageSize } = state;

  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <div className={styles.body}>
      <main className={styles.main} id="main">
        <Navbar />
        <main className={styles.mainContent}>
          <div className={styles.content}>
            <div className={`ps-4 pe-4`}>
              <div class="d-flex justify-content-start ms-4">
                <a
                  href="./Loan/BtnNew"
                  className={`${styles["btn"]} btn btn-light mt-5`}
                >
                  New
                </a>
                <a className={`${styles["btn"]} btn btn-light ms-2 mt-5`}>
                  Export
                </a>
                <button
                  className={`${styles["btnimport"]} btn btn-light ms-2 mt-5`}
                >
                  IMPORT
                  <input type="file"></input>
                </button>
              </div>
              <div class="row justify-content-end me-3">
                <div class="col-1">
                  <label
                    for="select"
                    className={`${styles.formLabel} form-label`}
                  >
                    Showing
                  </label>
                  <select className={`${styles.formSelect} form-select`}>
                    <option selected>10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="75">75</option>
                    <option value="100">100</option>
                  </select>
                </div>
                <div class="col-2">
                  <label
                    for="search"
                    className={`${styles.formLabel} form-label`}
                  >
                    Search
                  </label>
                  <div className={`input-group mb-4`}>
                    <span className={`${styles.spanIcon} input-group-text`}>
                      <FontAwesomeIcon
                        className={styles.searchIcon}
                        icon={faMagnifyingGlass}
                      />
                    </span>
                    <input
                      type="text"
                      className={`${styles.searchInput} form-control`}
                    ></input>
                  </div>
                </div>
              </div>

              <section class="section-table">
                <div className={`${styles.contentTable} container-fluid`}>
                  <div class="row align-items-start mx-2">
                    <table
                      {...getTableProps}
                      className="table rounded-0 overflow-hidden align-middle mb-0 bg-white"
                    >
                      <thead>
                        {headerGroups.map((headerGroup) => (
                          <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                              <th {...column.getHeaderProps()}>
                                {column.render("Header")}
                              </th>
                            ))}
                            <th>
                              <FontAwesomeIcon
                                className={styles.InfoIcon}
                                icon={faInfoCircle}
                              />
                            </th>
                          </tr>
                        ))}
                      </thead>
                      <tbody {...getTableBodyProps}>
                        {page.map((row) => {
                          prepareRow(row);
                          return (
                            <tr {...row.getRowProps()}>
                              {row.cells.map((cell) => {
                                return (
                                  <td {...cell.getCellProps()}>
                                    {cell.render("Cell")}
                                  </td>
                                );
                              })}
                              <td>
                                <FontAwesomeIcon
                                  className={styles.EditIcon}
                                  icon={faPenToSquare}
                                />
                                |
                                <button
                                  class={`${styles.delete} mt-2`}
                                  data-bs-toggle="modal"
                                  data-bs-target="#modaldelete"
                                >
                                   <FontAwesomeIcon
                                  className={styles.DeleteIcon}
                                  icon={faXmark}
                                />
                                </button>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>
              <Pagination />
            </div>
          </div>
          <div
            class="modal fade"
            id="modaldelete"
            tabindex="-1"
            aria-labelledby="modaldelete"
            aria-hidden="true"
          >
            <div class="modal-dialog">
             <ModalDelete />
            </div>
          </div>
        </main>
      </main>
    </div>
  );
}
