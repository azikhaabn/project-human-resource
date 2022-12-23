import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "/styles/Setting/SettFinance/SettEmployee.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faInfoCircle,
  faPen,
  faXmark,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { useTable } from "react-table";
import { useGlobalFilter, usePagination } from "@lineup-lite/hooks";
import { useRouter } from "next/router";
import Navbar from "../../Component/navbar";
import SettingSidebar from "../SettingSidebar";

const EmployeeEnrollment = () => {
  const data = React.useMemo(
    () => [
      // {
      //   ID:"2022110001",
      //   Policy:"zikk",
      //   Created_Date:"17 Nov 2022",
      //   Type:"Assign"
      // },
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
        Header: "Policy",
        accessor: "Policy",
      },
      {
        Header: "Created Date",
        accessor: "Created_Date",
      },
      {
        Header: "Type",
        accessor: "Type",
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
          <div className={`container-fluid m-0`}>
            <div className={`row`}>
              <div className={`${styles["sidebar"]} col-2 pt-4`}>
                <SettingSidebar />
              </div>

              <div className={`col-10 pt-3 ps-4`}>
                <div class="d-flex justify-content-between">
                  <div className={styles["task-header"]}>
                    <div className={styles.link}>
                      <a href="">Settings</a> /<a href="">Finance</a>
                    </div>
                    <h2 className={`${styles["all-cash-text"]} mb-4`}>
                      Cash Advance
                    </h2>
                  </div>
                  {/* <div
                    className={`${styles["create-categories"]} d-flex justify-content-end`}
                  >
                    <button
                      type="button"
                      className="btn btn-primary"
                    >
                       Add, edit or remove employees
                    </button>
                  </div> */}
                </div>
                <div className={styles.borderbottom}>
                  <div className={`${styles["main-toggle"]}`}>
                    <section class="section-link-assets">
                      <Link href="./SettPolicies">
                        <div
                          className={
                            currentRoute === "/Setting/SettFinance/SettPolicies"
                              ? `${styles["btn-head"]} ${styles["btn-head-active"]}`
                              : `${styles["btn-head"]}`
                          }
                        >
                          <a>Policies</a>
                        </div>
                      </Link>
                      <Link href="./SettCategories">
                        <div
                          className={
                            currentRoute ===
                            "/Setting/SettFinance/SettCategories"
                              ? `${styles["btn-head"]} ${styles["btn-head-active"]}`
                              : `${styles["btn-head"]}`
                          }
                        >
                          <a>Categories</a>
                        </div>
                      </Link>
                      <Link href="./SettEmployee">
                        <div
                          className={
                            currentRoute === "/Setting/SettFinance/SettEmployee"
                              ? `${styles["btn-head"]} ${styles["btn-head-active"]}`
                              : `${styles["btn-head"]}`
                          }
                        >
                          <a>Employee Enrollment</a>
                        </div>
                      </Link>
                    </section>
                  </div>
                </div>

                <section class="section-table">
                  <div
                    className={`${styles.contentTable} container-fluid mt-4`}
                  >
                    <div class="row align-items-start">
                      <table
                        {...getTableProps()}
                        className="table mb-3 rounded-0 overflow-hidden align-middle border mb-0 bg-white"
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
                                <div className="d-flex justify-content-end me-2">
                                  <td>
                                    <FontAwesomeIcon
                                      className={styles.EditIcon}
                                      icon={faPen}
                                    />
                                    <FontAwesomeIcon
                                      className={styles.DeleteIcon}
                                      icon={faTrashCan}
                                    />
                                  </td>
                                </div>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </section>

                <div
                  className={`${styles["content"]} d-flex justify-content-center text-center`}
                >
                  <div>
                    <img src="/image_580.png" />
                    <h4>There is no data to display</h4>
                    <p>Your cash adavance policy will display here</p>
                    {/* <a
                      href="/Setting/SettFinance/AssignEmployee"
                      className={`${styles["btn-create"]}  btn btn-primary`}
                    >
                      Add, edit or remove employees
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </main>
    </div>
  );
};
export default EmployeeEnrollment;
