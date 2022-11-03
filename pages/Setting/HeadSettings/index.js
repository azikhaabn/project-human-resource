import React from "react";
import Link from "next/link";
import styles from "/styles/Setting/HeadSettings/Settings.module.css";

export default function Settings() {
  return (
    <div className={styles.container}>
      <ul>
        <li>
          <Link href="#">
            <div>
              <a>Account Preferences</a>
            </div>
          </Link>
        </li>

        <li>
          <Link href="#">
            <div>Company</div>
          </Link>
        </li>

        <li>
          <div className={`${styles["dropdown-btn"]} dropdown`}>
            <button class="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
              Time Management
            </button>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="#">
                  Time Off
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Attendance
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Schedule
                </a>
              </li>
            </ul>
          </div>
        </li>

        <li>
          <Link href="#">
            <div>Payroll</div>
          </Link>
        </li>

        <li>
          <Link href="#">
            <div className={`${styles["dropdown-btn"]} dropdown`}>
              <button class="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                Finance
              </button>
              <ul class="dropdown-menu">
                <li>
                  <Link href="#">
                    <a class="dropdown-item" href="#">
                      Reimbursement
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a class="dropdown-item" href="#">
                      Cash Advance
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a class="dropdown-item" href="#">
                      Loan
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </Link>
        </li>

        <li>
          <Link href="#">
            <div>ESS</div>
          </Link>
        </li>

        <li>
          <div className={`${styles["dropdown-btn"]} dropdown`}>
            <button class="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
              Users
            </button>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Something
                </a>
              </li>
            </ul>
          </div>
        </li>

        <li>
          <Link href="#">
            <div>Integration</div>
          </Link>
        </li>
      </ul>
    </div>
  );
}
