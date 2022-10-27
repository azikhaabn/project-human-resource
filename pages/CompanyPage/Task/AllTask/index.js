import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "/styles/CompanyPage/Task/AllTask.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faMagnifyingGlass
} from "@fortawesome/free-solid-svg-icons";
import { faFileLines } from "@fortawesome/free-regular-svg-icons";
import { useRouter } from "next/router";
import Navbar from "../../../Component/navbar";
import CreateNew from './create';

const AllTask = () => {
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
									<a className={currentRoute === "/CompanyPage/Task/AllTask" ? `${styles["btn-tasks"]} ${styles["btn-tasks-active"]} py-2 px-2` : `${styles["btn-tasks"]} py-2 px-2`}>
										<span className={`${styles["task-sidebar"]} ps-2`}>
											<FontAwesomeIcon icon={faFileLines} /> &nbsp; All tasks
										</span>
									</a>
									</Link>
									<Link href="./AllProjects">
									<a className={currentRoute === "/CompanyPage/Task/AllProjects" ? `${styles["btn-tasks"]} ${styles["btn-tasks-active"]} py-2 px-2` : `${styles["btn-tasks"]} py-2 px-2 mt-1`}>
										<span className={`${styles["task-sidebar"]} ps-2`}>
											<FontAwesomeIcon icon={faFileLines} /> &nbsp; Projects
										</span>
									</a>
									</Link>
								</div>
							</div>
							<div className={`col-10 pt-5 ps-4`}>
								<div className={styles["task-header"]}>
									<h5 className={`${styles["company-text"]}`}>Company</h5>
									<h1 className={`${styles["all-tasks-text"]}`}>All tasks</h1>
								</div>
								<div className={`${styles["task-content"]} d-flex`}>
									<div class="col-2">
										<select class="form-select" aria-label="Default select example">
											<option selected>All assignee</option>
											<option value="1">One</option>
											<option value="2">Two</option>
											<option value="3">Three</option>
										</select>
									</div>
									<div class="col-2 ms-3">
										<select class="form-select" aria-label="Default select example">
											<option selected>All project</option>
											<option value="1">One</option>
											<option value="2">Two</option>
											<option value="3">Three</option>
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
											<input
												type="text"
												className={`${styles["search-input"]} form-control`}
												placeholder="Search task by name"
											/>
										</div>
									</div>
								</div>
								<div
									className={`${styles["content"]} d-flex justify-content-center text-center`}
								>
									<div>
										<img src="/image_580.png" />
										<h4>No task to do</h4>
										<p>All task to do will show up here.</p>
										<a
											className={`${styles["btn-create"]} btn`}
											type="button"
											data-bs-toggle="modal"
											data-bs-target="#modalCreate"
										>
											Create new task
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div
						class="modal fade"
						id="modalCreate"
						tabindex="-1"
						aria-labelledby="exampleModalLabel"
						aria-hidden="true"
					>
						<div class="modal-dialog modal-dialog-centered">
							<CreateNew />
						</div>
					</div>

				</main>
			</main>
		</div>
	);
}
export default AllTask;	