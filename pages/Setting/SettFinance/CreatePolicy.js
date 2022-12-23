import React, { useState } from 'react';
import Link from "next/link";
import styles from "/styles/Setting/SettFinance/CreatePolicy.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
// import {  } from "@fortawesome/free-regular-svg-icons";
import Select from 'react-select'
import { useRouter } from "next/router";
import Navbar from "../../Component/navbar";
import SettingSidebar from "../SettingSidebar";

const Advance = () => {

  const options = [
    { value: 'a', label: 'a' },
    { value: 'f', label: 'f'},
    
    ]

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
                    <a href="">Settings</a> /{" "}
                    <a href="./SettPolicies">Finance</a> /{" "}
                    <a href="">Cash Advance</a>
                  </div>
                  <h2 className={`${styles["all-cash-text"]} mb-4`}>
                    Create Policy
                  </h2>
                </div>
                <div className={styles.areacontent}>
                  <div class="col-5">
                    <label className={styles.Label}>Name</label>
                    <div className={`input-group mb-4`}>
                      <input
                        type="text"
                        id="name"
                        className={`${styles.inputname} form-control`}
                      ></input>
                    </div>
                  </div>
                  <div className={`col-5 mt-3`}>
                    <label className={styles.Label}>Effective Date</label>
                    <input
                      type="date"
                      id="taskName"
                      placeholder="New Task"
                      className={`${styles["input-date"]} form-control`}
                    ></input>
                  </div>
                  <div className={`col-4 mt-3`}>
                    <label className={styles.Label}>
                      Settlement due date
                      <FontAwesomeIcon
                        className={styles.iconinfo}
                        icon={faInfoCircle}
                      />
                    </label>
                    <div className={`${styles["InputDays"]} input-number`}>
                      <input
                        type="number"
                        className={`${styles.inputdue} form-control col-3`}
                      ></input>
                      <label for="days">Days</label>
                    </div>
                  </div>
                  <div className={`mt-3`}>
                    <label className={styles.Label}>Expenses category</label>
                    <div className="form-check me-5">
                      <input
                        className={`${styles.check} form-check-input`}
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      ></input>
                      <label className={styles.LabelCheck}>
                        Include all categories
                      </label>
                    </div>
                  </div>
                  <div className={`col-5 mt-3`}>
                    <label className={styles.Label}>Categories</label>
                    <Select
                      closeMenuOnSelect={false}
                      className="basic-multi-select"
                      classNamePrefix="select"
                      options={options}
                      isMulti
                      placeholder="Select categories"
                      />
                  </div>
                  <div className={styles.btnarea}>
                    <a
                      href="/Setting/SettFinance/SettPolicies"
                      role="button"
                      className={`${styles.btnCancel}`}
                    >
                      Cancel
                    </a>
                    <a
                      type="submit"
                      href="/Setting/SettFinance/PolicySuccessfullyCreated"
                      role="button"
                      className={`${styles.btnsubmit} btn btn-primary mb-1 ms-4`}
                    >
                      Submit
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
export default Advance;
