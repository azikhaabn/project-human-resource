import React from "react";
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
import Pagination from "../../Component/pagination";

export default function Loan() {
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
                <a className={`${styles["btn"]} btn btn-light ms-2 mt-5`}>
                  Import
                </a>
                {/* <input type="file"></input> */}
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
                  <div className={`input-group mb-5`}>
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
              <table class="table p-3">
                <thead class={`${styles.thtable} table-light`}>
                  <tr>
                    <th scope="col">No</th>
                    <th scope="col">Transaction ID</th>
                    <th scope="col">Loan Name</th>
                    <th scope="col">Employee</th>
                    <th scope="col">Loan Amount</th>
                    <th scope="col">Installment</th>
                    <th scope="col">Interest</th>
                    <th scope="col">Effective Date</th>
                    <th scope="">
                      <FontAwesomeIcon
                        className={styles.InfoIcon}
                        icon={faInfoCircle}
                      />
                    </th>
                  </tr>
                </thead>
                <tbody className={`${styles.bodytable} table border-bottom`}>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>Mark</td>
                    <td>
                      <FontAwesomeIcon
                        className={styles.Icon}
                        icon={faPenToSquare}
                      />
                      <FontAwesomeIcon className={styles.Icon} icon={faXmark} />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <Pagination />
          </div>
        </main>
      </main>
    </div>
  );
}
