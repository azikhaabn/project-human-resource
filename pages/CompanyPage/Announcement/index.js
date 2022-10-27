import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "/styles/CompanyPage/Announcement/announcementList.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faBars,
//   faEnvelope,
//   faUser,
//   faMagnifyingGlass,
// } from "@fortawesome/free-solid-svg-icon";
import AddNew from "./AddNew";
import Navbar from "../../Component/navbar";

export default function announcement() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Navbar />
        <div className={styles.image}>
          <img src="/image_618.png" className={styles.image}></img>
        </div>
        <div className={styles.box}>
          <div className={styles.link}>
            <a href="/CompanyPage/Announcement">Announcement List</a>
          </div>
          <div className={styles.content}>
            <div className="d-flex justify-content-between align-items-center">
              <button
                type="button"
                class="btn btn-outline-secondary btn-sm mt-4 ms-4 mb-3"
                data-bs-toggle="modal"
                data-bs-target="#modalCreate"
              >
                ADD NEW
              </button>
                <div className={`${styles.dropdown} dropdown me-3`}>
                  <button
                    class="btn btn-outline-secondary dropdown-toggle me-2"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Action
                  </button>
                  <ul className={`${styles.dropdownMenu} dropdown-menu`}>
                    <li>
                      <a className={`${styles.item} dropdown-item btn`} href="#">Delete Selected</a>
                    </li>
                  </ul>
                </div>
            </div>
            <div className={styles.horizontal}></div>
          </div>
        </div>
        <div
          class="modal fade"
          id="modalCreate"
          tabindex="-1"
          aria-labelledby="modalCreate"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <AddNew />
          </div>
        </div>
      </main>
    </div>
  );
}