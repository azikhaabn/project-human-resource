import React, { Component, useState } from "react";
import Link from "next/link";
import styles from "/styles/CompanyPage/Onboarding/Completed.module.css";
import { useRouter } from "next/router";
import Navbar from "../../../Component/navbar";

export default function Completed() {
  const router = useRouter();
	const currentRoute = router.pathname;

  return (
    <div className={styles.body}>
      <main className={styles.main} id="main">
        <Navbar />

        <img src="/image_671.png" className={styles.image}></img>

        <main className={styles.mainContent}>
          <div className={`${styles["bg-content"]} mt-5`}>
            <div className={`ms-4`}>
              <div className={`${styles.container} m-0`}>
                <div className={`${styles["main-toggle"]}`}>
                  <section class="section-link-assets d-flex text-center">
                    <Link href="./OnProgress">
                      <div className={currentRoute === "/CompanyPage/Onboarding/OnProgress" ? `${styles["btn-head"]} ${styles["btn-head-active"]}` : `${styles["btn-head"]}`}>
                        <a>On Progress</a>
                      </div>
                    </Link>
                    <Link href="./Completed">
                      <div className={currentRoute === "/CompanyPage/Onboarding/Completed" ? `${styles["btn-head"]} ${styles["btn-head-active"]}` : `${styles["btn-head"]}`}>
                        <a>Completed</a>
                      </div>
                    </Link>
                  </section>
                </div>
              </div>
            </div>

            <div className={`${styles["content"]} mt-5`}>
              <div className={`mb-5 ms-3`}>

                <section className={`${styles["section-option"]} section-sellect-search mb-4 mt-5`}>
                  <div class="container-fluid">
                    <div class="row mt-3">
                      <div className={`col-2`}>
                        <label for="select" className={`${styles["form-label"]} form-label`}>
                          Select Month Period
                        </label>
                        <select className={`${styles["form-select"]} form-select`} id="select">
                          <option selected>--All--</option>
                          <option value="january">January</option>
                          <option value="february">February</option>
                          <option value="march">March</option>
                          <option value="april">April</option>
                          <option value="may">May</option>
                          <option value="june">June</option>
                          <option value="july">July</option>
                          <option value="august">August</option>
                          <option value="september">September</option>
                          <option value="october">October</option>
                          <option value="november">November</option>
                          <option value="desember">Desember</option>
                        </select>
                      </div>

                      <div className={`col-2`}>
                        <label for="select" className={`${styles["form-label"]} form-label`}>
                          Select Year Period
                        </label>
                        <select className={`${styles["form-select"]} form-select`} id="select">
                          <option selected>--All--</option>
                          <option value="2021">2021</option>
                          <option value="2022">2022</option>
                          <option value="2023">2023</option>
                        </select>
                      </div>

                      <div className={`col-2`}>
                        <label for="select" className={`${styles["form-label"]} form-label`}>
                          Showing
                        </label>
                        <select className={`${styles["form-select"]} form-select`} id="select">
                          <option selected>10 Employees</option>
                          <option value="20">20 Employees</option>
                          <option value="30">30 Employees</option>
                          <option value="40">40 Employees</option>
                          <option value="50">50 Employees</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </section>

                <section className={`section-table me-3`}>
                  <table className={`${styles["table"]} table`}>
                    <thead>
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td></td>
                        <td>NO DATA AVAILABLE</td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                </section>
              </div>
            </div>
          </div>
        </main>
      </main>
    </div>
  );
}
