import React from "react";
import Link from "next/link";
import styles from "/styles/Component/ShowingSearch.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function ShowingSearch() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <section class="section-sellect-search mb-4">
          <div class="container-fluid">
            <div class="row mt-3 justify-content-end me-1">
              <div class="col-1">
                <label for="select" className={`${styles["form-label"]} form-label`}>
                  Showing
                </label>
                <select className={`${styles["input-group"]} form-select`} id="select">
                  <option selected>10</option>
                  <option value="25">25</option>
                  <option value="50">50</option>
                  <option value="75">75</option>
                  <option value="100">100</option>
                </select>
              </div>
              <div class="col-2">
                <label for="search" className={`${styles["form-label"]} form-label`}>
                  Search
                </label>
                <div className={`input-group mb-3`}>
                  <span className={`${styles["span-icon"]} input-group-text`}>
                    <FontAwesomeIcon className={styles["search-icon"]} icon={faMagnifyingGlass} />
                  </span>
                  <input type="text" className={`${styles["input-group"]} form-control`}></input>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
