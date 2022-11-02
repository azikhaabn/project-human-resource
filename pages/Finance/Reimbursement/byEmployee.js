import React, { Component, useMemo, useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp, faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import styles from "/styles/Finance/Reimbursement/ViewBalance.module.css";
import By_Employee from "./By_Employee.json";
import { useSortBy, useTable } from "react-table";
import ShowingSearch from "../../Component/showingSearch";

const ViewBalanceByEmployee = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: "Employee",
        accessor: "employee",
      },
      {
        Header: "Balance",
        accessor: "balance",
      },
    ],
    []
  );
  const data = useMemo(() => By_Employee, []);

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useSortBy
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;
  return (
    <div className={styles.container}>
      <div className={`${styles.modal} modal-content rounded-0`}>
        <div className={`${styles["modal-body"]} modal-body mx-3`}>
          <h2>Reimbursement by Employee Report Medical Claim</h2>

          <div className="input-group">
            <div className={`col-2 me-3`}>
              <select className={`${styles["input-group"]} form-select`} aria-label="Default select example">
                <option selected>Active</option>
                <option value="resign">Resign</option>
              </select>
            </div>
            <div className={`col-2`}>
              <select className={`${styles["input-group"]} form-select`} aria-label="Default select example">
                <option selected>All Branch</option>
                <option value="pusat">Pusat</option>
              </select>
            </div>
          </div>

          <div style={{ marginTop: "50px" }}>
            <button type="button" className={`${styles["btn-box"]} btn btn-outline-secondary btn-sm me-1`}>
              EXPORT
            </button>
            <button type="button" className={`${styles["btn-box"]} btn btn-outline-secondary btn-sm`} data-bs-dismiss="modal">
              BACK TO INDEX
            </button>
          </div>

          <div class="showing-search">
            <ShowingSearch />
          </div>

          <section className="section-table">
            <div className={`container-fluid`}>
              <div className={`${styles["content-table"]} row align-items-start`}>
                <table {...getTableProps()} className={`${styles["table"]} table mt-3`}>
                  <thead className={`${styles["table-thead"]}`}>
                    {headerGroups.map((headerGroup) => (
                      <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                          <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                            {column.isSorted ? (
                              column.isSortedDesc ? (
                                <span className={`${styles["icon-sorting"]} d-flex align-items-start flex-column position-absolute mt-2`}>
                                  <FontAwesomeIcon icon={faCaretDown} />
                                </span>
                              ) : (
                                <span className={`${styles["icon-sorting"]} d-flex align-items-start flex-column position-absolute`}>
                                  <FontAwesomeIcon icon={faCaretUp} className={`${styles["column-icon"]}`} />
                                </span>
                              )
                            ) : (
                              <span className={`${styles["icon"]} d-flex align-items-start flex-column position-absolute`}>
                                <FontAwesomeIcon icon={faCaretUp} className={`${styles["column-icon"]}`} />
                                <FontAwesomeIcon icon={faCaretDown} />
                              </span>
                            )}
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            {column.render("Header")}
                          </th>
                        ))}
                      </tr>
                    ))}
                  </thead>
                  <tbody className={`${styles["table-tbody"]}`}>
                    {rows.map((row) => {
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
              <div className={`${styles["row-paginate"]} d-flex justify-content-between`}>
                <div>
                  <p className={styles["text-show"]}>Showing 1 to 2 of 2 entries</p>
                </div>
                <div>
                  <Link href="#">
                    <FontAwesomeIcon icon={faAngleLeft} className={styles["arrow-icon"]} />
                  </Link>
                  &nbsp; &nbsp; <span className={styles["number-page"]}>1</span> &nbsp; &nbsp;
                  <Link href="#">
                    <FontAwesomeIcon icon={faAngleRight} className={styles["arrow-icon"]} />
                  </Link>
                </div>
                <div>
                  <ul class="pagination">
                    <li className={`${styles["prev-page"]} page-item disabled`}>
                      <a className={`${styles["page-link-prev"]} page-link`}>Previous</a>
                    </li>
                    <li className={`${styles["next-page"]} page-item`}>
                      <a className={`${styles["page-link-next"]} page-link`} href="#">
                        Go
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ViewBalanceByEmployee;
