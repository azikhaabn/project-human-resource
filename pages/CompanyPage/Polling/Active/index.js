import React, { Component, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "/styles/CompanyPage/Polling/Active.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCircleCheck, faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import Navbar from "../../../Component/navbar";
import CreateNewPoll from "./createNewPoll";
import { useRouter } from "next/router";
import { faCircleCheck, faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const Active = () => {
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <div className={styles.body}>
      <main className={styles.main} id="main">
        <Navbar />

        <img src="/polling.png" className={styles.image}></img>

        <div className={`d-flex justify-content-end mt-3 me-5`}>
          <a className={`${styles["btn-polls"]} btn btn-sm btn-outline-secondary`} type="button" data-bs-toggle="modal" data-bs-target="#modalCreatePoll">
            CREATE NEW POLLS
          </a>
        </div>

        <main className={`${styles["main-content"]}`}>
          <div className={`${styles["bg-content"]} mt-5`}>
            <div className={`${styles["content"]}`}>
              <div className="container-fluid">
                <div className={`${styles["row-sidebar"]} row`}>
                  <div className={`${styles["sidebar"]} col-2`}>
                    <div className="d-flex flex-column text-center">
                      <Link href="./Active">
                        <div className={currentRoute === "/CompanyPage/Polling/Active" ? `${styles["btn-tasks"]} ${styles["active"]}` : `${styles["btn-tasks"]}`}>
                          <div className={`${styles["icon-poll"]}`}>
                            <FontAwesomeIcon icon={faCircleCheck} />
                          </div>
                          <span>ACTIVE</span>
                        </div>
                      </Link>
                      <Link href="./NonActive">
                        <div className={currentRoute === "/CompanyPage/Polling/NonActive" ? `${styles["btn-tasks"]} ${styles["active"]}` : `${styles["btn-tasks"]}`}>
                          <div className={`${styles["icon-poll"]}`}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                          </div>
                          <span>NON-ACTIVE</span>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="col-10">
                    <div className={`${styles["title-poll"]}`}>
                      <span className={`${styles["title"]}`}>Active Poll</span>
                      <hr />
                    </div>
                    <div className={`${styles["data-poll"]} text-center`}>
                      <span>No Polls</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <div class="modal fade" id="modalCreatePoll" tabindex="-1" aria-labelledby="modalCreateNewPoll" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered">
            <CreateNewPoll />
          </div>
        </div>
		
        <div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
          <div class="modal-dialog modal-dalog-centered">
            <div className={`${styles["modal-2"]} modal-content rounded-0`}>
              <div class="modal-body">
                <p>Are you sure to create this polls?</p>
              </div>
              <div class="modal-footer">
                <button type="button" className={`${styles["btn-create"]} btn btn-outline-secondary me-1 btn-sm`}>
                  CONFIRM
                </button>
                <button type="button" className={`${styles["btn-create"]} btn btn-outline-secondary me-1 btn-sm`} data-bs-dismiss="modal">
                  CANCEL
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Active;
