import React from "react";
import Link from "next/link";
import styles from "/styles/CompanyPage/Task/Projects.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faBoxArchive, faFileLines } from "@fortawesome/free-solid-svg-icons";
// import { faFileLines } from "@fortawesome/free-regular-svg-icons";
import Navbar from "../../../Component/navbar";
import CreateProject from "./create";
import { useRouter } from "next/router";

export default function Projects() {
  const router = useRouter();
	const currentRoute = router.pathname;

  return (
    <div className={styles.body}>
      <main className={styles.main} id="main">
        <Navbar />

        <main className={styles.mainContent}>
          <div className={`container-fluid m-0`}>
            <div className={`row`}>
              <div className={`${styles["sidebar"]} col-2 pt-5`}>
                <h2 className={`${styles.h2} ps-3 mb-3`}>Tasks</h2>
                <div className={`d-flex flex-column`}>
                  <Link href="./AllTask">
									<a className={currentRoute === "/CompanyPage/Task/AllTask" ? `${styles["btn-tasks"]} ${styles["btn-tasks-active"]} py-2 px-2` : `${styles["btn-tasks"]} py-2 px-2 mb-1`}>
										<span className={`${styles["task-sidebar"]} ps-2`}>
											<FontAwesomeIcon icon={faFileLines} /> &nbsp; All tasks
										</span>
									</a>
									</Link>
                  <Link href="./AllProjects">
									<a className={currentRoute === "/CompanyPage/Task/AllProjects" ? `${styles["btn-tasks"]} ${styles["btn-tasks-active"]} py-2 px-2` : `${styles["btn-tasks"]} py-2 px-2`}>
										<span className={`${styles["task-sidebar"]} ps-2`}>
											<FontAwesomeIcon icon={faFileLines} /> &nbsp; Projects
										</span>
									</a>
									</Link>
                </div>
              </div>

              <div className={`col-10 pt-3 ps-4`}>
                <div className={styles["task-header"]}>
                  <h5 className={`${styles["company-text"]}`}>Company</h5>
                  <h1 className={`${styles["all-tasks-text"]} mb-4`}>Projects</h1>
                </div>

                <div className={`border-bottom border-1`}>
                  <span className={`${styles["span-underline"]} ${styles["links"]} me-3`}>Active</span>
                  <span>Archive</span>
                </div>

                <div className={`${styles["task-content"]} d-flex`}>
                  <div class="col-2">
                    <select class="form-select" aria-label="Default select example">
                      <option selected>All member</option>
                      <option value="1">Viona Pasha</option>
                      <option value="2">Mahmud Derawan</option>
                      <option value="3">Linda Maria</option>
                    </select>
                  </div>
                  <div className={`${styles["last-item"]} col-3.5`}>
                    <div className={`input-group`}>
                      <span className={`${styles["search-span"]} input-group-text`} id="basic-addon1">
												<FontAwesomeIcon
													className={styles.searchIcon}
													icon={faMagnifyingGlass}
												/>
											</span>
                      <input type="text" className={`${styles["search-input"]} form-control`} placeholder="Search task by name" />
                    </div>
                  </div>
                </div>
                <table class="table table-bordered bg-light mt-5">
                  <thead>
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Member</th>
                      <th scope="col">Task</th>
                    </tr>
                  </thead>
                  <tbody></tbody>
                </table>
                <div className={`${styles["content"]} d-flex justify-content-center text-center`}>
                  <div>
                    <img src="/image_580.png" />
                    <h4>No task to do</h4>
                    <p>All task to do will show up here.</p>
                    <a className={`${styles["btn-create"]} btn`} data-bs-toggle="modal" data-bs-target="#modalCreateProject">
                      Create new task
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
						class="modal fade"
						id="modalCreateProject"
						tabindex="-1"
						aria-labelledby="modalCreate"
						aria-hidden="true"
					>
						<div class="modal-dialog">
							<div>
								<CreateProject />
							</div>
						</div>
					</div>
        </main>
      </main>
    </div>
  );
}
