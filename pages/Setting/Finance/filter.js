import React from "react";
import styles from "/styles/Setting/Finance/Filter.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import Organization from "../../CompanyPage/Announcement/Organization";

const ViewFilter = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.modal} modal-content rounded-0`}>
        <div className={`${styles["modal-header"]} modal-header`}>
          <h3 class="modal-title ms-3" style={{ color: "#910111" }}>
            Filter
          </h3>
        </div>

        <div className={`${styles["modal-body"]} modal-body`}>
          <div className={`row my-2 mx-3`}>
            <div className={`${styles.container} col-3 border`} style={{ overflowY: "scroll" }}>
              <div className={`${styles.square}`}>
                <div className={`${styles.header}`}>
                  <h5>Organization</h5>
                </div>
                <div className={`${styles.body}`}></div>
                <div className={`${styles.footer} border-top`}>
                    <a data-bs-toggle="modal" data-bs-target="#exampleModal">
                  <h5 className="my-2">
                    <FontAwesomeIcon icon={faCirclePlus} style={{ color: "#910111" }} /> Add Organization
                  </h5>
                  </a>
                </div>
              </div>
            </div>
            <div className={`${styles.container} col-3 border`} style={{ overflowY: "scroll" }}>
              <div className={`${styles.square}`}>
                <div className={`${styles.header}`}>
                  <h5>Job Position</h5>
                </div>
                <div className={`${styles.body}`}></div>
                <div className={`${styles.footer} border-top`}>
                  <h5 className="my-2">
                    <FontAwesomeIcon icon={faCirclePlus} style={{ color: "#910111" }} /> Add Job Position
                  </h5>
                </div>
              </div>
            </div>
            <div className={`${styles.container} col-3 border`} style={{ overflowY: "scroll" }}>
              <div className={`${styles.square}`}>
                <div className={`${styles.header}`}>
                  <h5>Job Level</h5>
                </div>
                <div className={`${styles.body}`}></div>
                <div className={`${styles.footer} border-top`}>
                  <h5 className="my-2">
                    <FontAwesomeIcon icon={faCirclePlus} style={{ color: "#910111" }} /> Add Job Level
                  </h5>
                </div>
              </div>
            </div>
            <div className={`${styles.container} col-3 border`} style={{ overflowY: "scroll" }}>
              <div className={`${styles.square}`}>
                <div className={`${styles.header}`}>
                  <h5>Branch</h5>
                </div>
                <div className={`${styles.body}`}></div>
                <div className={`${styles.footer} border-top`}>
                  <h5 className="my-2">
                    <FontAwesomeIcon icon={faCirclePlus} style={{ color: "#910111" }} /> Add Branch
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="modal-footer mt-5">
          <button type="button" className={`${styles["btn-box"]} btn btn-sm btn-outline-secondary`}>
            CONFIRM
          </button>
          <button type="button" className={`${styles["btn-box"]} btn btn-sm btn-outline-secondary`} data-bs-dismiss="modal">
            CLOSE
          </button>
        </div>
      </div>

      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <Organization />
        </div>
      </div>
    </div>
  );
};

export default ViewFilter;
