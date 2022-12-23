import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "/styles/Setting/SettFinance/PolicySuccessfullyCreated.module.css";
import { useRouter } from "next/router";
import Navbar from "../../Component/navbar";
import SettingSidebar from "../SettingSidebar";

const PolicySuccessfullyCreated = () => {
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
                <div className={styles["task-header"]}>
                  <div className={styles.link}>
                    <a href="">Settings</a> /<a href="">Finance</a> /
                    <a href="">Cash Advance</a>
                  </div>
                  <h2 className={`${styles["all-cash-text"]} mb-4`}>
                    Create Policy
                  </h2>
                </div>
                <div
                  className={`${styles["content"]} d-flex justify-content-center text-center`}
                >
                  <div>
                    <img src="/image_580.png" />
                    <h4>Policy Successfully Created</h4>
                    <p>
                      No employee assigned to your policy, click button to below
                      to<br></br>assign empployee.
                    </p>
                    <a
                      href="/Setting/SettFinance/AssignEmployee"
                      className={`${styles["btn-create"]}  btn btn-primary`}
                    >
                      Assign employee to policy
                    </a>
                    <a
                      href="/Setting/SettFinance/SettPolicies"
                      role="button"
                      className={`${styles.btnBack}`}
                    >
                      Back to policy list
                    </a>
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
export default PolicySuccessfullyCreated;
