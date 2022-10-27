import React, { Component, useState } from "react";
import Link from "next/link";
import styles from "/styles/CompanyPage/ReportBuilder/Rbuilder.module.css";
import Navbar from "../../Component/navbar";

const ReportBuilder = () => {
  return (
    <div className={styles.body}>
      <main className={styles.main} id="main">
        <Navbar />

        <main className={styles.mainContent}>
          <div>
            <h5 className={`${styles["heading"]}`}>Report Builder</h5>
            <div className={`${styles["bg-content"]} mt-5`}>
              <div className={`d-flex justify-content-between ms-5 me-5`}>
                <div className={`${styles["box-left"]} mt-5`}>
                  <h5>Intoroducing Report Builder</h5>
                  <h3 class="mt-3">Feel free to create reports based on your needs</h3>
                  <p class="mt-3">Here you can select any into to show, add filters, and schedule reports in full control.</p>
                  <div className={`${styles["btn-report"]} mt-3`}>
                    <button type="button" className={`${styles["btn-create"]} btn me-3`}>
                      Try create report
                    </button>
                    <button type="button" className={`${styles["btn-learn"]} btn`}>
                      Learn more
                    </button>
                  </div>
                </div>
                <div>
                    <img src="/report_builder.png" className={styles.image}></img>
                </div>
              </div>
            </div>
          </div>
        </main>
      </main>
    </div>
  );
};

export default ReportBuilder;
