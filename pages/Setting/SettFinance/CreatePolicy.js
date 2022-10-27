import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "/styles/Setting/SettFinance/CreatePolicy.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
// import {  } from "@fortawesome/free-regular-svg-icons";
import { useRouter } from "next/router";
import Navbar from "../../Component/navbar";

const Advance = () => {
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
                <h2 className={`${styles.h2} ps-2 mb-3`}>Settings</h2>
                <div className={`d-flex flex-column`}>
                  <Link href="./AllProjects">
                    <a
                      className={
                        currentRoute === "/CompanyPage/Task/AllProjects"
                          ? `${styles["btn-cash"]} ${styles["btn-cash-active"]} py-2 px-2`
                          : `${styles["btn-cash"]} py-2 px-1 mt-1`
                      }
                    >
                      <span className={`${styles["cash-sidebar"]} ps-2`}>
                        &nbsp; Account Preference
                        <FontAwesomeIcon
                          className={styles.IconSidebar}
                          icon={faAngleRight}
                        />
                      </span>
                    </a>
                  </Link>
                  <Link href="./AllProjects">
                    <a
                      className={
                        currentRoute === "/CompanyPage/Task/AllProjects"
                          ? `${styles["btn-cash"]} ${styles["btn-cash-active"]} py-2 px-2`
                          : `${styles["btn-cash"]} py-2 px-1 mt-1`
                      }
                    >
                      <span className={`${styles["cash-sidebar"]} ps-2`}>
                        &nbsp; Company
                        <FontAwesomeIcon
                          className={styles.IconSidebar}
                          icon={faAngleRight}
                        />
                      </span>
                    </a>
                  </Link>
                  <Link href="./AllProjects">
                    <a
                      className={
                        currentRoute === "/CompanyPage/Task/AllProjects"
                          ? `${styles["btn-cash"]} ${styles["btn-cash-active"]} py-2 px-2`
                          : `${styles["btn-cash"]} py-2 px-1 mt-1`
                      }
                    >
                      <span className={`${styles["cash-sidebar"]} ps-2`}>
                        &nbsp; Time Management
                        <FontAwesomeIcon
                          className={styles.IconSidebar}
                          icon={faAngleRight}
                        />
                      </span>
                    </a>
                  </Link>
                  <Link href="./AllProjects">
                    <a
                      className={
                        currentRoute === "/CompanyPage/Task/AllProjects"
                          ? `${styles["btn-cash"]} ${styles["btn-cash-active"]} py-2 px-2`
                          : `${styles["btn-cash"]} py-2 px-1 mt-1`
                      }
                    >
                      <span className={`${styles["cash-sidebar"]} ps-2`}>
                        &nbsp; Payroll
                        <FontAwesomeIcon
                          className={styles.IconSidebar}
                          icon={faAngleRight}
                        />
                      </span>
                    </a>
                  </Link>
                  <Link href="./SettCashAd">
                    <a
                      className={
                        currentRoute === "/Setting/SettFinance/SettCashAd"
                          ? `${styles["btn-cash"]} ${styles["btn-cash-active"]} py-2 px-1`
                          : `${styles["btn-cash"]} py-2 px-1`
                      }
                    >
                      <span className={`${styles["cash-sidebar"]} ps-2`}>
                        &nbsp; Finance
                        <FontAwesomeIcon
                          className={styles.IconSidebar}
                          icon={faAngleRight}
                        />
                      </span>
                    </a>
                  </Link>

                  <Link href="./AllProjects">
                    <a
                      className={
                        currentRoute === "/CompanyPage/Task/AllProjects"
                          ? `${styles["btn-cash"]} ${styles["btn-cash-active"]} py-2 px-2`
                          : `${styles["btn-cash"]} py-2 px-1 mt-1`
                      }
                    >
                      <span className={`${styles["cash-sidebar"]} ps-2`}>
                        &nbsp; ESS
                        <FontAwesomeIcon
                          className={styles.IconSidebar}
                          icon={faAngleRight}
                        />
                      </span>
                    </a>
                  </Link>
                  <Link href="./AllProjects">
                    <a
                      className={
                        currentRoute === "/CompanyPage/Task/AllProjects"
                          ? `${styles["btn-cash"]} ${styles["btn-cash-active"]} py-2 px-2`
                          : `${styles["btn-cash"]} py-2 px-1 mt-1`
                      }
                    >
                      <span className={`${styles["cash-sidebar"]} ps-2`}>
                        &nbsp; Users
                        <FontAwesomeIcon
                          className={styles.IconSidebar}
                          icon={faAngleRight}
                        />
                      </span>
                    </a>
                  </Link>
                  <Link href="./AllProjects">
                    <a
                      className={
                        currentRoute === "/CompanyPage/Task/AllProjects"
                          ? `${styles["btn-cash"]} ${styles["btn-cash-active"]} py-2 px-2`
                          : `${styles["btn-cash"]} py-2 px-1 mt-1`
                      }
                    >
                      <span className={`${styles["cash-sidebar"]} ps-2`}>
                        &nbsp; Integration
                        <FontAwesomeIcon
                          className={styles.IconSidebar}
                          icon={faAngleRight}
                        />
                      </span>
                    </a>
                  </Link>
                </div>
              </div>

              <div className={`col-10 pt-3 ps-4`}>
                <div className={styles["task-header"]}>
                  <div className={styles.link}>
                    <a href="">Settings</a> / <a href="./SettPolicies">Finance</a> / <a href="">Cash Advance</a>
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
            <label className={styles.Label}>Settlement due date
            <FontAwesomeIcon className={styles.iconinfo} icon={faInfoCircle} />
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
                  className= {`${styles.check} form-check-input`}
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                ></input>
                <label className={styles.LabelCheck}>Include all categories</label>
              </div>
              </div>
              <div className={`col-5 mt-3`}>
              <label className={styles.Label}>Categories</label>
              <select
                className={`${styles["select-option"]} form-select`}
                aria-label="Default select example" 
              >
                <option selected>Select categories</option>
              </select>
            </div>
            <div className={styles.btnarea}>
            <button type="button" className={`${styles.btnCancel}`} data-bs-dismiss="modal">
              Cancel
            </button>
            <button type="button" className={`${styles.btnsubmit} btn btn-primary ms-4`}>
              Submit
            </button>
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
