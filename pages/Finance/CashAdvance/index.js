import React, { Component, useMemo, useState } from "react";
import styles from "/styles/Finance/CashAdvance/CashAdvance.module.css";
import Navbar from "../../Component/navbar";
import { useRouter } from "next/router";
import { COLUMNS } from "./Columns";
import MOCK_DATA from "./MOCK_DATA.json";
import { useGlobalFilter, useTable, usePagination } from "react-table";

export default function Cash() {
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
          <div className={`row`}>
            <div className={`pt-3 ps-4`}>
              <div class="d-flex justify-content-between">
                <div className={styles["header"]}>
                  <div className={`${styles["link"]} ms-2`}>
                    <a href="">Finance</a>
                  </div>
                  <h2 className={`${styles["all-cash-text"]} mb-3 ms-2`}>
                    Cash Advance
                  </h2>
                </div>
                <div
                  className={`${styles["btn-sett"]} d-flex justify-content-end me-3`}
                >
                  <a
                    href="/Setting/SettFinance/SettPolicies"
                    className={`${styles["setting-btn"]} btn btn-light`}
                  >
                    Settings
                  </a>
                </div>
              </div>
              <div className={`${styles["select-content"]} d-flex`}>
                <div class="col-2 ms-3">
                  <select
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>All Policy</option>
                  </select>
                </div>
                <div class="col-2 ms-3 mb-5">
                  <select
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>All Status</option>
                    <option value="1">Pending approval</option>
                    <option value="2">Rejected</option>
                    <option value="3">Need settlement</option>
                    <option value="4">settlement on review</option>
                    <option value="5">Canceled</option>
                    <option value="6">Completed</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <section class="section-table">
            <div className={`${styles.contentTable} container-fluid`}>
              <div class="row align-items-start mx-2">
                <table
                  {...getTableProps}
                  className="table rounded-0 border overflow-hidden align-middle mb-0 bg-white"
                >
                  <thead>
                    {headerGroups.map((headerGroup) => (
                      <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                          <th {...column.getHeaderProps()}>
                            {column.render("Header")}
                          </th>
                        ))}
                      </tr>
                    ))}
                  </thead>
                  {/* <tbody {...getTableBodyProps}>
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
                          </tr>
                        );
                      })}
                    </tbody> */}
                </table>
                <div
                  className={`${styles["content"]} d-flex justify-content-center text-center`}
                >
                  <div>
                    <img src="/image_580.png" />
                    <h4>No cash advance policy</h4>
                    <p>
                      To start using cash advance feature you need to create
                      <br></br>
                      policy in cash advance settings
                    </p>
                    <a href="/Setting/SettFinance/CreatePolicy" className={`${styles["btn-create"]} btn btn-primary`}>
                      Create Policy
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </main>
    </div>
  );
}
