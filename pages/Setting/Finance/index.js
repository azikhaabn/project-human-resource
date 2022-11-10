import React, { Component, useState } from "react";
import Link from "next/link";
import styles from "/styles/Setting/Finance/ReimbursementSettings.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import Settings from "../HeadSettings/index";
import Navbar from "../../Component/navbar";
import ParentRadio from "./components/ParentRadio";
import RadioTaxable from "./components/RadioTaxable";
import { Emerge } from "./components/Emerge";
import { TablePolicy } from "./components/TablePolicy";
import { NoExpiryDate } from "./components/NoExpiryDate";

const FinanceSettings = () => {
  const [showParentRadio, setShowParentRadio] = useState(false);
  const [showTaxable, setShowTaxable] = useState(false);
  const [hideNoExpiryDate, setHideNoExpiryDate] = useState(true);
  const [firstYearFlag, setFirstYearFlag] = useState(false);

  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <div className={styles.body}>
      <main className={styles.main} id="main">
        <Navbar />
        <main className={`${styles["main-content"]}`}>
          <div className={`${styles["bg-content"]} mt-5`}>
            <div class="mb-5">
              <Settings />
            </div>
            <div className={`${styles["content"]}`}>
              <div className="container-fluid">
                <div className={`${styles["row-sidebar"]} row`}>
                  <div className={`${styles["sidebar"]} col-2`}>
                    <div className="d-flex flex-column text-center">
                      <Link href="./Finance">
                        <div className={currentRoute === "/Setting/Finance" ? `${styles["btn-tasks"]} ${styles["active"]}` : `${styles["btn-tasks"]}`}>
                          <div className={`${styles["icon-finance"]}`}>
                            <FontAwesomeIcon icon={faCoins} />
                          </div>
                          <span style={{ letterSpacing: "3px" }}>REIMBURSEMENT</span>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="col-10 mb-5">
                    <div className={`${styles["title-finance"]}`}>
                      <span className={`${styles["title"]}`}>REIMBURSEMENT POLICY</span>
                      <hr />
                    </div>

                    <div class="mx-2">
                      <section class="form-group">
                        <div className={`d-flex justify-content-between`}>
                          <div className={`col-6 me-2`}>
                            <label for="reimName" className={`${styles["form-label"]} form-label`}>
                              Reimbursement Name
                            </label>
                            <div className={`input-group mb-3`}>
                              <input type="text" id="reimName" className={`${styles["input-group"]} form-control`}></input>
                            </div>
                          </div>
                          <div className={`col-6`}>
                            <label for="effectiveDate" className={`${styles["form-label"]} form-label`}>
                              Effective Date
                            </label>
                            <div className={`input-group mb-3`}>
                              <input type="date" id="effectiveDate" className={`${styles["input-group"]} form-control`}></input>
                            </div>
                          </div>
                        </div>
                        <div>
                          <label for="reimDesc" className={`${styles["form-label"]} form-label`}>
                            Reimbursement Description
                          </label>
                          <div className={`input-group`}>
                            <textarea type="text" id="reimDesc" className={`${styles["input-group"]} form-control`}></textarea>
                          </div>
                        </div>
                      </section>

                      <section className={`${styles["list-finance"]} d-flex justify-content-between mt-3`}>
                        <ul>
                          <li>
                            <div className={`${styles["form-check"]} form-check`}>
                              <input className={`${styles["check-input"]} form-check-input rounded-0`} type="checkbox" id="policy" />
                              <label className={`${styles["form-label"]} form-check-label`} for="policy">
                                This Policy has unlimited amount
                              </label>
                            </div>
                          </li>

                          <div>
                            <li>
                              <div className={`${styles["form-check"]} form-check`}>
                                <input
                                  className={`${styles["check-input"]} form-check-input rounded-0`}
                                  type="checkbox"
                                  value=""
                                  id="default"
                                  onClick={() => {
                                    setShowParentRadio(!showParentRadio);
                                  }}
                                />
                                <label className={`${styles["form-label"]} form-check-label`} for="default">
                                  Default Reimbursement for new employee
                                </label>
                              </div>
                            </li>

                            {showParentRadio ? <ParentRadio /> : <></>}
                          </div>

                          <div>
                            <li>
                              <div className={`${styles["form-check"]} form-check`}>
                                <input className={`${styles["check-input"]} form-check-input rounded-0`} type="checkbox" value="" id="include" />
                                <label className={`${styles["form-label"]} form-check-label`} for="include">
                                  Include in Take Home Pay
                                </label>
                              </div>
                            </li>
                          </div>

                          <div>
                            <li>
                              <div className={`${styles["form-check"]} form-check`}>
                                <input
                                  className={`${styles["check-input"]} form-check-input rounded-0`}
                                  type="checkbox"
                                  value=""
                                  id="texable"
                                  onClick={() => {
                                    setShowTaxable(!showTaxable);
                                  }}
                                />
                                <label className={`${styles["form-label"]} form-check-label`} for="texable">
                                  Taxable
                                </label>
                              </div>
                            </li>
                            {showTaxable ? <RadioTaxable /> : <></>}
                          </div>

                          <li>
                            <div className={`${styles["form-check"]} form-check`}>
                              <input
                                className={`${styles["check-input"]} form-check-input rounded-0`}
                                type="checkbox"
                                value=""
                                id="protate"
                                // onClick={() => {
                                //   setShowTaxable(!showTaxable);
                                // }}
                              />
                              <label className={`${styles["form-label"]} form-check-label`} for="protate">
                                Prorate on First Year
                              </label>
                            </div>
                          </li>

                          <li>
                            <div className={`${styles["form-check"]} form-check`}>
                              <input
                                className={`${styles["check-input"]} form-check-input rounded-0`}
                                type="checkbox"
                                value=""
                                id="noExpiryDate"
                                onClick={() => {
                                  setHideNoExpiryDate(!hideNoExpiryDate);
                                }}
                              />
                              <label className={`${styles["form-label"]} form-check-label`} for="noExpiryDate">
                                No Expiry Date
                              </label>
                            </div>
                          </li>

                          <li>
                            <div className={`${styles["form-check"]} form-check`}>
                              <input className={`${styles["check-input"]} form-check-input rounded-0`} type="checkbox" value="" id="maxRequest" />
                              <label className={`${styles["form-label"]} form-check-label`} for="maxRequest">
                                Max Request Per Emerge
                              </label>
                            </div>
                          </li>

                          <li>
                            <div className={`${styles["form-check"]} form-check`}>
                              <input
                                className={`${styles["check-input"]} form-check-input rounded-0`}
                                type="checkbox"
                                value=""
                                id="maxRequest"
                                onClick={() => {
                                  setFirstYearFlag(!firstYearFlag);
                                }}
                              />
                              <label className={`${styles["form-label"]} form-check-label`} for="maxRequest">
                                First Year Flag
                              </label>
                            </div>

                            {firstYearFlag ? (
                              <ul>
                                <li>
                                  <div className={`${styles["form-check"]} form-check`}>
                                    <input className={`${styles["check-input"]} form-check-input rounded-0`} type="checkbox" value="" id="maxRequest" />
                                    <label className={`${styles["form-label"]} form-check-label`} for="maxRequest">
                                      Effective From Join Date
                                    </label>
                                  </div>
                                </li>
                                <div style={{ marginLeft: "-20px" }}>
                                  <li className="d-flex justify-content-start">
                                    <div className={`${styles["form-check"]} form-check`}>
                                      <input className={`${styles["check-radio"]}`} type="radio" name="emerge" id="month" />
                                      <label className={`${styles["form-label"]} form-check-label ms-2`} for="month">
                                        Emerge After
                                      </label>
                                    </div>

                                    <div className={`col-6 ms-3`}>
                                      <label for="reimName" className={`${styles["form-label"]} form-label`}>
                                        Month(s)
                                      </label>
                                      <div className={`input-group mb-3`}>
                                        <input type="text" id="reimName" className={`${styles["input-group"]} form-control`}></input>
                                      </div>
                                    </div>
                                  </li>
                                  <li>
                                    <div className={`${styles["form-check"]} form-check`}>
                                      <input className={`${styles["check-radio"]}`} type="radio" name="emerge" id="month" />
                                      <label className={`${styles["form-label"]} form-check-label ms-2`} for="month">
                                        First Emerge Status
                                      </label>
                                    </div>

                                    <div>
                                      <select className={`${styles["select-emerge"]} form-select`} multiple aria-label="multiple select example" style={{ marginLeft: "20px" }}>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                      </select>
                                    </div>
                                  </li>
                                </div>
                              </ul>
                            ) : (
                              <></>
                            )}
                          </li>
                        </ul>

                        <div style={{ marginRight: "100px" }}>{hideNoExpiryDate ? <NoExpiryDate /> : <></>}</div>
                      </section>

                      <div>
                        {/* EXPIRY DATE */}
                        <Emerge />
                      </div>

                      {/* TABEL SETTINGS */}
                      <div>
                        <TablePolicy />
                      </div>
                    </div>
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

export default FinanceSettings;
