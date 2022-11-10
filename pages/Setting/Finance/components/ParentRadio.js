import { useState } from "react";
import ViewFilter from "../filter";
import RadioButton from "./RadioButton";
import styles from "/styles/Setting/Finance/ReimbursementSettings.module.css";

const ParentRadio = () => {
  const [isFilter, setIsFilter] = useState("Yes");

  const onChangeValue = (event) => {
    setIsFilter(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div className={`${styles["radio-default"]}`} style={{ marginLeft: "-20px" }}>
      <ul onChange={onChangeValue}>
        <li>
          <RadioButton id="yes" children="Yes" value="Yes" checked={isFilter === "Yes"} />
        </li>
        <li className="ms-5">
          <ul>
            <li>
              <RadioButton id="filter" children="Filter" value="Filter" checked={isFilter === "Filter"} />
            </li>
            <li>
              {isFilter === "Filter" ? (
                <button type="button" className={`${styles["btn-box"]} btn btn-outline-secondary btn-sm ms-3`} data-bs-toggle="modal" data-bs-target="#viewFilter">
                  VIEW FILTER
                </button>
              ) : (
                <></>
              )}
            </li>
          </ul>
        </li>
      </ul>

      {/* MODAL VIEW FILTER DEFAULT REIMBURSEMENT FOR NEW EMPLOYEE */}
          <div class="modal fade" id="viewFilter" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
              <ViewFilter />
            </div>
          </div>
    </div>
  );
};

export default ParentRadio;