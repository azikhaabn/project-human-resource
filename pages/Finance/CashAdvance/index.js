import React from "react";
import styles from "/styles/Finance/CashAdvance/CashAdvance.module.css";
import Navbar from "../../Component/navbar";
import { useRouter } from "next/router";

export default function Cash() {
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <div className={styles.body}>
      <main className={styles.main} id="main">
        <Navbar />
        <main className={styles.mainContent}>
          <div className={`${styles.contentTable} container-fluid m-0`}>
            <div className={`row`}>
              <div className={`pt-1 ps-4`}>
                <div className={styles["header"]}>
                <div class="d-flex justify-content-end mt-3">
                    <a  href="/Setting/SettFinance/SettPolicies" className={`${styles["setting-btn"]} btn btn-light`}>
                      Settings
                    </a>
                   
                  </div>
                  <div className={styles.link}>
                    <a href="">Finance</a>
                  </div>
                  <h2 className={`${styles["all-cash-text"]} mb-5`}>
                    Cash Advance
                  </h2>
                </div>
                <div className={`${styles["select-content"]} d-flex`}>
                  <div class="col-2">
                    <select
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>All Policy</option>
                    </select>
                  </div>
                  <div class="col-2 ms-2">
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
            <table class="table table-border bg-light mt-5">
              <thead>
                <tr>
                  <th scope="col">Request ID</th>
                  <th scope="col">Request date</th>
                  <th scope="col">Date of use</th>
                  <th scope="col">Employee</th>
                  <th scope="col">Policy</th>
                  <th scope="col">Purpose</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody></tbody>
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
                <a className={`${styles["btn-create"]} btn btn-primary`}>
                  Create Policy
                </a>
              </div>
            </div>
          </div>
        </main>
      </main>
    </div>
  );
}
