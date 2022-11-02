import React from "react";
import Link from "next/link";
import styles from "/styles/Finance/Reimbursement/ViewSetting.module.css";
import Navbar from "../../../Component/navbar";
import Pagination from "../../../Component/pagination";
import ShowingSearch from "../../../Component/showingSearch";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";

export default function Request() {
  return (
    <div className={styles.body}>
      <main className={styles.main} id="main">
        <Navbar />

        <div className={`${styles.container}`}>
          <div className={`${styles["content"]}`}>
            <div className={`${styles["header"]}`}>
              <Link href="/Finance/Reimbursement">
                <a type="button" className={`${styles["btn-img"]}`}>
                  BACK TO REIMBURSEMENT MENU
                </a>
              </Link>
              <img src="/image_618.png" className={styles.image} />
            </div>
            <div className={`${styles["box"]}`}>
              <ShowingSearch />
              <section class="section-table">
                <table class="table">
                  <thead className={`${styles["table-head"]}`}>
                    <tr>
                      <th scope="col">
                        <span className={`ms-3`}>Name</span>
                        {/* <span className={`${styles["icon-sorting"]} d-flex align-items-start flex-column position-absolute`}>
                          <FontAwesomeIcon icon={faCaretUp} className={`${styles["column-icon"]}`} />
                        </span>
                        <span className={`${styles["icon-sorting"]} d-flex align-items-start flex-column position-absolute mt-2`}>
                          <FontAwesomeIcon icon={faCaretDown} />
                        </span> */}
                      </th>
                      <th scope="col">
                        <span className={`ms-3`}>Set Default</span>
                      </th>
                      <th scope="col">
                        <span className={`ms-3`}>Emerge at join (Default Only)</span>
                      </th>
                      <th scope="col">
                        <span className={`ms-3`}>Mandatory Upload File</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className={`${styles["table-body"]}`}>
                    <tr>
                      <td>Medical Claim</td>
                      <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                      <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                      <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                    </tr>
                    <tr>
                      <td>Transportasi</td>
                      <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                      <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                      <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                    </tr>
                    <tr>
                      <td>asdfg</td>
                      <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                      <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                      <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                    </tr>
                    <tr>
                      <td>hjkl</td>
                      <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                      <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                      <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                    </tr>
                  </tbody>
                </table>
              </section>
              <Pagination />
              <div className={`d-flex justify-content-end`}>
                <button type="button" className={`${styles["btn-box"]} btn btn-sm btn-outline-secondary `}>SAVE</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
