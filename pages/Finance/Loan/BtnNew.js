import React from "react";
import Link from "next/link";
import styles from "/styles/Finance/Loan/New.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightArrowLeft,
  faCirclePlus,
  faDownload,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { useTable } from "react-table";
import { useGlobalFilter, usePagination } from "@lineup-lite/hooks";
import Navbar from "../../Component/navbar";
import { useRouter } from "next/router";
import NewLoan from "./NewLoan";
import Pagination from "../../Component/pagination";

export default function New() {
  const data = React.useMemo(
    () => [
      // {
      //   Name: "Accounting",
      //   Effective_Date: "BOD",
      // },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: "Installment",
        accessor: "Installment",
      },
      {
        Header: "Payment Date",
        accessor: "Payment_Date",
      },
      {
        Header: "Basic Payment",
        accessor: "Basic_Payment",
      },
      {
        Header: "Interest",
        accessor: "Interest",
      },
      {
        Header: "Total",
        accessor: "Total",
      },
      {
        Header: "Remaining Loan",
        accessor: "Remaining_Loan",
      },
    ],
    []
  );
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });
  const {
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    setPageSize,
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
            <div class="d-flex justify-content-start ms-4">
              <div className={`col-2 mt-3`}>
                <label>Effective Date</label>
                <input
                  type="date"
                  id="btnnew"
                  className={`${styles["input-date"]} form-control`}
                ></input>
              </div>
              <div className={`col-3 ms-4 mt-4`}>
                <div className={`input-group `}>
                  <input
                    type="text"
                    id="new"
                    placeholder="Choose the employee"
                    className={`${styles.inputcontent} form-control`}
                  ></input>
                </div>
              </div>
            </div>
            <div class="d-flex justify-content-start ms-4">
              <div className={`col-2 mt-4`}>
                <label className={styles.Label}>Loan Name</label>
                <select
                  class={`${styles.inputselect} form-select`}
                  aria-label="Default select example"
                >
                  <option selected>Select Loan Name</option>
                  <option value="">Personal Loan</option>
                </select>
              </div>
              <div class="col-2 mt-4 ms-4">
                <label className={styles.Label}>Amount</label>
                <div className={`input-number`}>
                  <input
                    type="number"
                    placeholder="0"
                    className={`${styles.inputamount} form-control`}
                  ></input>
                </div>
              </div>
              <div class="col-1 mt-4 ms-3">
                <label className={styles.Label}>Installment</label>
                <div className={`input-number`}>
                  <input
                    className={`${styles.inputamount} form-control`}
                    type="number"
                    placeholder="0"
                    min="0"
                    max=""
                  ></input>
                </div>
              </div>
              <div className={`col-1 mt-4 ms-3`}>
                <label className={styles.Label}>Interest Type</label>
                <select
                  class={`${styles.inputselect} form-select`}
                  aria-label="Default select example"
                >
                  <option selected>Flat</option>
                </select>
              </div>
              <div class="col-1 mt-4 ms-3">
                <label className={styles.Label}>Interest(%)</label>
                <div className={`input-number`}>
                  <input
                    className={`${styles.inputamount} form-control`}
                    type="number"
                    placeholder="0"
                    min="0"
                    max=""
                  ></input>
                </div>
              </div>
            </div>
            <div class="d-flex justify-content-start ms-4">
              <FontAwesomeIcon className={styles.icon} icon={faCirclePlus} />
              <a
                type="button"
                class={`${styles.newloan} mt-2`}
                data-bs-toggle="modal"
                data-bs-target="#modalCreate"
              >
                Add new loan name
              </a>
            </div>
            <div class="col-4 mt-2 ms-4">
              <label className={styles.Label}>Description</label>
              <div className={`input-group`}>
                <input
                  type="text"
                  id="Loan"
                  className={`${styles.inputdeskripsi} form-control`}
                ></input>
              </div>
            </div>
            <div className={`${styles.upload} ms-4 mt-5`}>
              <button className={styles.btnimport}>
                <FontAwesomeIcon
                  className={styles.iconarrow}
                  icon={faArrowRightArrowLeft}
                />
                IMPORT
                <input type="file"></input>
              </button>
              <button className={`${styles.btnexport} ms-4 `}>
                <FontAwesomeIcon
                  className={styles.iconarrow}
                  icon={faDownload}
                />
                EXPORT
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
                <div className={`input-group mb-3`}>
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
              <div className={`${styles.contentTable} container-fluid mt-3`}>
                <div class="row align-items-start mx-2 ">
                  <table
                    {...getTableProps()}
                    className="table mb-2 rounded-0 overflow-hidden align-middle border mb-0 bg-white"
                  >
                    <thead>
                      {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                          {headerGroup.headers.map((column) => (
                            <th {...column.getHeaderProps()}>
                              {column.render("Header")}
                            </th>
                          ))}
                          <th></th>
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
                            <div className="d-flex justify-content-end me-2"></div>
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
          <div
            class="modal fade"
            id="modalCreate"
            tabindex="-1"
            aria-labelledby="modalCreate"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <NewLoan />
            </div>
          </div>
        </main>
      </main>
    </div>
  );
}
