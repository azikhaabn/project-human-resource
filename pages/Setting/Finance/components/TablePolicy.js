import React from "react";
import styles from "/styles/Setting/Finance/ReimbursementSettings.module.css";

export const TablePolicy = () => {
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
          <tbody></tbody>
        </table>

        <div className="mt-5">
          <div>
            <button type="button" className={`${styles["btn-box"]} btn btn-outline-secondary me-1 btn-sm`}>
              ADD BENEFIT
            </button>
          </div>

          <div className="d-flex justify-content-end">
            <button type="button" className={`${styles["btn-box"]} btn btn-outline-secondary me-1 btn-sm`}>
              SAVE & POLICY
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
