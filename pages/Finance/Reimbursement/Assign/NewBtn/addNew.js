import React, { Component, useMemo, useState } from "react";
import styles from "/styles/Finance/Reimbursement/AddNewBtn.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import { COLUMNS } from "./columns";
import { useTable, useRowSelect } from "react-table";
import { useRowSelectColumn } from "@lineup-lite/hooks";
import ADDNEWBTN from "./AddNewBtn.json";

const AddNewBtn = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => ADDNEWBTN, []);

  // Use the state and functions returned from useTable to build your UI
  const { getTableProps, getTableBodyProps, headerGroups, page, rows, prepareRow, state } = useTable(
    {
      columns,
      data,
    },
    useRowSelect,
    useRowSelectColumn
  );

  //   const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={`${styles.modal} modal-content rounded-0`}>
        <div className={`${styles["modal-body"]} modal-body mx-3`}>
          <div class="d-flex justify-content-start">
            <div class="col-3">
              <label for="inputBalance" className={`${styles["form-label"]} form-label`}>
                Input Balance
              </label>
              <div className={`input-group mb-3`}>
                <input type="text" id="inputBalance" className={`${styles["input-group"]} form-control`}></input>
              </div>
            </div>
            <div class="col-3 ms-2">
              <label for="startDate" className={`${styles["form-label"]} form-label`}>
                Start Date
              </label>
              <div className={`input-group mb-3`}>
                <input type="date" id="startDate" className={`${styles["input-group"]} form-control`}></input>
              </div>
            </div>
            <div class="col-3 ms-2">
              <label for="endDate" className={`${styles["form-label"]} form-label`}>
                End Date
              </label>
              <div className={`input-group mb-3`}>
                <input type="date" id="endDate" className={`${styles["input-group"]} form-control`}></input>
              </div>
            </div>
          </div>

          <section class="section-sellect-search my-5">
            <div class="container-fluid">
              <div className={`${styles["input"]} row justify-content-end mt-3`}>
                <div class="col-3">
                  <label for="search" className={`${styles["form-label"]} form-label`}>
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
                  <label for="select" className={`${styles["form-label"]} form-label`}>
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

          <section class="section-table">
            <div className={`${styles.contentTable} container-fluid`}>
              <div class="row align-items-start mx-2">
                <table {...getTableProps()} className="table mb-3 shadow-sm rounded-0 overflow-hidden align-middle mb-0 bg-white">
                  <thead className="bg-light">
                    {headerGroups.map((headerGroup) => (
                      <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                          <th {...column.getHeaderProps()}>
                            {column.render("Header")}
                            {column.id === "selection" && column.render("Summary")}
                          </th>
                        ))}
                      </tr>
                    ))}
                  </thead>
                  <tbody {...getTableBodyProps()}>
                    {rows.map((row, i) => {
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
        </div>
        <div class="modal-footer border-top mb-2">
          <button type="button" className={`${styles["btn-box"]} btn btn-outline-secondary me-2 btn-sm`}>
            YES
          </button>
          <button type="button" className={`${styles["btn-box"]} btn btn-outline-secondary me-1 btn-sm`} data-bs-dismiss="modal">
            NO
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddNewBtn;
