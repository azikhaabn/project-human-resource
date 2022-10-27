import React from "react";
import Link from "next/link";
import styles from "/styles/Component/Pagination.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

export default function Pagination() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <section class="section-paginate mt-3">
          <div className={`container-fluid`}>
            <div className={`${styles["row-paginate"]}`}>
              <p className={styles["text-show"]}>Showing 1 to 1 of 1 entries</p>
              <div>
                <Link href="#">
                  <FontAwesomeIcon icon={faAngleLeft} className={styles["arrow-icon"]} />
                </Link>
                &nbsp; &nbsp; <span className={styles["number-page"]}>1</span> &nbsp; &nbsp;
                <Link href="#">
                  <FontAwesomeIcon icon={faAngleRight} className={styles["arrow-icon"]} />
                </Link>
              </div>
              <ul class="pagination">
                <li className={`${styles["prev-page"]} page-item disabled`}>
                  <a className={`${styles["page-link-prev"]} page-link`}>Previous</a>
                </li>
                <li className={`${styles["next-page"]} page-item`}>
                  <a className={`${styles["page-link-next"]} page-link`} href="#">
                    Go
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
