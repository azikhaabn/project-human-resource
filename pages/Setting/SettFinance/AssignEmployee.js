import React from "react";
import Link from "next/link";
import styles from "/styles/Setting/SettFinance/AssignEmployee.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useTable, useRowSelect } from "react-table";
import {
  useGlobalFilter,
  usePagination,
  useRowSelectColumn,
} from "@lineup-lite/hooks";
import { useRouter } from "next/router";
import Navbar from "../../Component/navbar";
import TableSelectEmployee from "./Modal/TableSelectEmployee";

const AssignEmployee = () => {
  const data = React.useMemo(
    () => [
      // {
      //   ID:"h",
      //   Name:"j",
      //   Branch:"n",
      //   Organization:"n",
      //   Job_Position:"j",
      //   Job_Level:"j",
      //  },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: "ID",
        accessor: "ID",
      },
      {
        Header: "Name",
        accessor: "Name",
      },
      {
        Header: "Branch",
        accessor: "Branch",
      },
      {
        Header: "Organization",
        accessor: "Organization",
      },
      {
        Header: "Job Position",
        accessor: "Job_Position",
      },
      {
        Header: "Job Level",
        accessor: "Job_Level",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns,
        data,
      },
      useRowSelect,
      useRowSelectColumn
    );

  const {
    // getTableProps,
    // getTableBodyProps,
    // headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    setPageSize,
    // prepareRow,
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
          <div className={`container-fluid m-0`}>
            <div className={`row`}>
              <div className={`col-10 pt-3 ps-4`}>
                <div className={styles["task-header"]}>
                  <div className={styles.link}>
                    <a href="#">Settings</a> /<a href="#">Finance</a> /
                    <a href="#">Employee Enrollment</a>
                  </div>
                  <h2 className={`${styles["all-cash-text"]} mb-4`}>
                    Manage Employee Enrollment
                  </h2>
                </div>
                <div className={styles["form"]}>
                  <div className={`${styles["select-content"]} d-flex`}>
                    <div class="col-4 ms-1">
                      <label for="select" className={`${styles.Label} mb-2`}>
                        Policy Name
                      </label>
                      <select
                        class="form-select rounded-1"
                        aria-label="Default select example"
                      >
                        <option selected>Select Policy</option>
                      </select>
                    </div>
                    <div class="col-4 ms-3 mb-4">
                      <label for="select" className={`${styles.Label} mb-2`}>
                        Type
                      </label>
                      <select
                        class="form-select rounded-1"
                        aria-label="Default select example"
                      >
                        <option selected>Assign</option>
                        <option value="1">Expired</option>
                      </select>
                    </div>
                  </div>
                  <div class="d-flex justify-content-start ms-1">
                    <div className={`col-4 mt-1`}>
                      <label className={`${styles.Label}  mb-2`}>
                        Effective Date
                      </label>
                      <input
                        type="date"
                        id=""
                        className={`${styles["input-date"]} form-control rounded-1`}
                      ></input>
                    </div>
                    <div class="col-4 ms-1">
                      <label className={`${styles.Label} mt-1 ms-3`}>
                        Notes
                      </label>
                      <input
                        type="text"
                        id="name"
                        className={`${styles.inputnotes} form-control rounded-1 mt-2 ms-3`}
                      ></input>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between">
                    <div class="d-flex justify-content-start ms-1 mt-4">
                      <label className={`${styles.Label}  mb-2`}>
                        No Employee Selected
                      </label>
                      <button
                        type="button"
                        className={`${styles.btnselect} d-flex justify-content-start mt-5`}
                        data-bs-toggle="modal"
                        data-bs-target="#modalselected"
                      >
                        Select Employee
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-end">
              <div class="col-2 me-4">
                <div className={`input-group`}>
                  <span className={`${styles.spanIcon} input-group-text`}>
                    <FontAwesomeIcon
                      className={styles.searchIcon}
                      icon={faMagnifyingGlass}
                    />
                  </span>
                  <input
                    type="text"
                    placeholder="search"
                    className={`${styles.searchInput} form-control`}
                  ></input>
                </div>
              </div>
            </div>
            <section class="section-table">
              <div className={`${styles.contentTable} container-fluid mt-4`}>
                <div class="row align-items-start mx-2">
                  <table
                    {...getTableProps()}
                    className="table mb-3 border rounded-0 overflow-hidden align-middle mb-0 bg-white"
                  >
                    <thead>
                      {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                          {headerGroup.headers.map((column) => (
                            <th {...column.getHeaderProps()}>
                              {column.render("Header")}
                              {column.id === "selection" &&
                                column.render("Summary")}
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
                              return (
                                <td {...cell.getCellProps()}>
                                  {cell.render("Cell")}
                                </td>
                              );
                            })}
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
            <div
              className={`${styles.btnarea} d-flex justify-content-end me-4`}
            >
              <a
                href="/Setting/SettFinance/SettPolicies"
                role="button"
                className={`${styles.btnCancel}`}
              >
                Cancel
              </a>
              <a
                href="/Setting/SettFinance/SettEmployee"
                role="button"
                className={`${styles.btnsubmit} btn btn-primary mb-1 ms-4`}
              >
                Submit
              </a>
            </div>
          </div>
        </main>
        <div
          class="modal fade"
          id="modalselected"
          tabindex="-1"
          aria-labelledby="modalselected"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <TableSelectEmployee />
          </div>
        </div>
      </main>
    </div>
  );
};
export default AssignEmployee;
