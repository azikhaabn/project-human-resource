import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Formula from "../formula";
import styles from "/styles/Setting/Finance/ReimbursementSettings.module.css";

export const TablePolicy = () => {
  const [showTable, setShowTable] = useState(false);

  return (
    <div>
      <section className="mt-5">
        <table className="table">
          <thead style={{ backgroundColor: "#eee" }}>
            <tr>
              <th>No.</th>
              <th>Benefit Name</th>
              <th>Max Request</th>
              <th>Min Next Claim (Months)</th>
              <th>Formula</th>
              <th>Action</th>
            </tr>
          </thead>
          {showTable ? (
            <tbody style={{ borderBottom: "2px solid #c0bfbf" }}>
              <td>1</td>
              <td>
                <div className={`col-10`}>
                  <input type="text" id="reimName" className={`${styles["input-group"]} form-control`}></input>
                </div>
              </td>
              <td>
                <div className={`col-10`}>
                  <input type="text" id="reimName" className={`${styles["input-group"]} form-control`}></input>
                </div>
              </td>
              <td>
                <div className={`col-10`}>
                  <input type="text" id="reimName" className={`${styles["input-group"]} form-control`}></input>
                </div>
              </td>
              <td>
                <button type="button" className={`${styles["btn-box"]} btn btn-outline-secondary btn-sm ms-3`} data-bs-toggle="modal" data-bs-target="#viewFormula" style={{ marginTop: "2px" }}>
                  FORMULA
                </button>
              </td>
              <td>
                <div
                  style={{ cursor: "pointer" }}  
                  onClick={() => {
                    setShowTable(false);
                  }}
                >
                  <FontAwesomeIcon icon={faXmark} style={{ color: "#9f0111" }} />
                </div>
              </td>
            </tbody>
          ) : null}
        </table>

        <div className="mt-5">
          <div>
            <button
              type="button"
              className={`${styles["btn-box"]} btn btn-outline-secondary me-1 btn-sm`}
              onClick={() => {
                setShowTable(!showTable);
              }}
            >
              ADD BENEFIT
            </button>
          </div>

          <div className="d-flex justify-content-end">
            <button type="button" className={`${styles["btn-box"]} btn btn-outline-secondary me-1 btn-sm`}>
              SAVE & POLICY
            </button>
          </div>
        </div>

        {/* MODAL FORMULA NO EXPIRY DATE */}
        <div class="modal fade" id="viewFormula" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered">
            <Formula />
          </div>
        </div>
      </section>
    </div>
  );
};
