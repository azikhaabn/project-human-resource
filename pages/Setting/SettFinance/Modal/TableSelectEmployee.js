import React from "react";
import Link from "next/link";
import styles from "/styles/Setting/SettFinance/Modal/TableSelectEmployee.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { useTable, useRowSelect } from "react-table";
import {
  useGlobalFilter,
  usePagination,
  useRowSelectColumn,
} from "@lineup-lite/hooks";
import { useRouter } from "next/router";

const selectEmployee = ({ closeModal }) => {
  const data = React.useMemo(
    () => [
      {
        ID: "a",
        Name: "b",
        Branch: "c",
        Organization: "d",
        Job_Position: "e",
        Job_Level: "f",
      },
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
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={`${styles.modal} modal-content rounded-0`}>
          <div className={`${styles.modalContent} modal-header mt-2 ms-3 me-3`}>
            <h6 class="modal-title"> Add Employee </h6>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body ms-3">
            <div className={styles["form"]}>
              <div className={`${styles["select-content"]} d-flex`}>
                <div class="col-3">
                  <select
                    class="form-select rounded-1"
                    aria-label="Default select example"
                  >
                    <option selected>All Branch</option>
                    <option value="1">Pusat</option>
                  </select>
                </div>
                <div class="col-3 ms-3 mb-4">
                  <select
                    class="form-select rounded-1"
                    aria-label="Default select example"
                  >
                    <option selected>All Organization</option>
                    <option value="1">BOD</option>
                    <option value="2">HRD & GA</option>
                    <option value="3">HRD</option>
                    <option value="4">GA</option>
                    <option value="5">Finance & Accounting</option>
                    <option value="6">Finance</option>
                    <option value="7">Accounting</option>
                    <option value="8">IT Division</option>
                    <option value="9">Sales & Marketing</option>
                    <option value="10">Sales</option>
                    <option value="11">Marketing</option>
                  </select>
                </div>
                <div className="d-flex justify-content-end">
                  <div class="col-7 ms-5">
                    <div className={`input-group ms-5`}>
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
              </div>
            </div>

            <section class="section-table">
              <div className={`${styles.contentTable} container-fluid mt-2`}>
                <div class="row align-items-start me-2">
                  <table
                    {...getTableProps()}
                    className="table mb-3 border rounded-0 align-middle mb-0 bg-white"
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
            <div className={styles["paginate"]}>
              <div className={`${styles["paginate-content"]} d-flex`}>
                <div className={`${styles["pagination"]}`}>
                  <p>
                    Show &nbsp;
                    <select
                      value={pageSize}
                      onChange={(e) => {
                        setPageSize(Number(e.target.value));
                      }}
                    >
                      {[10, 25, 50, "all"].map((pageSize) => (
                        <option key={pageSize} value={pageSize}>
                          {pageSize}
                        </option>
                      ))}
                    </select>
                    &nbsp; entries
                  </p>
                </div>
                <div class="d-flex justify-content-center ms-5 col-4">
                  <p>Showing 0 to 0 of 0 entries</p>
                </div>
                <div className="d-flex justify-content-end ms-5">
                  <div className={styles.IconPagination}>
                    <FontAwesomeIcon
                      className={styles.icon}
                      icon={faAngleLeft}
                    />
                    <FontAwesomeIcon
                      className={styles.icon}
                      icon={faAngleRight}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="modal-footer">
            <button
              type="button"
              className={`${styles.btnBack}  me-3`}
              data-bs-dismiss="modal"
            >
              Back
            </button>
            <button
              type="button"
              className={`${styles.btnSave} btn btn-primary`}
            >
              Save
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default selectEmployee;
