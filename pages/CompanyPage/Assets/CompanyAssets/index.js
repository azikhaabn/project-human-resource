import React, { Component, useState } from "react";
import Link from "next/link";
import styles from "/styles/CompanyPage/Company/CompanyPage.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faXmark,
	faPenToSquare,
	faMagnifyingGlass,
	faAngleRight,
	faAngleLeft,
} from "@fortawesome/free-solid-svg-icons";
import DeleteModalCompany from "./deleteModalCompany";
import EditModalCompany from "./editModalCompany";
import AddModalCompany from "./addModalCompany";
import Navbar from "../../../Component/navbar";
import ShowingSearch from "../../../Component/showingSearch";
import Pagination from "../../../Component/pagination";
import { useRouter } from "next/router";

export default function CompanyAssets() {
	const router = useRouter();
	const currentRoute = router.pathname;

	return (
		<div className={styles.body}>
			<main className={styles.main} id="main">
				<Navbar />

				<img src="/image497.png" className={styles.image}></img>

				<main className={styles.mainContent}>
					<div className={`${styles.container} bg-light m-0`}>
						<div className={`${styles.mainToggle}`}>
							<section class="section-link-assets d-flex text-center">
								<Link href="./EmployeeAssets">
									<div
										className={
											currentRoute === "/CompanyPage/Assets/EmployeeAssets"
												? `${styles.toggleAssets} ${styles.active} col-6 py-4`
												: `${styles.toggleAssets} col-6 py-4`
										}
									>
										<a>Employee Assets</a>
									</div>
								</Link>
								
								<Link href="./CompanyAssets">
									<div
										className={
											currentRoute === "/CompanyPage/Assets/CompanyAssets"
												? `${styles.toggleAssets} ${styles.active} col-6 py-4`
												: `${styles.toggleAssets} col-6 py-4`
										}
									>
										<a>Company Assets</a>
									</div>
								</Link>
							</section>
						</div>

						<section class="section-button-assets">
							<div class="container-fluid mt-4">
								<div class="row align-items-start mt-5 ms-0">
									<div class="col-lg-4">
										<a
											className={`${styles["btnAssets"]} btn`}
											type="button"
											data-bs-toggle="modal"
											data-bs-target="#addModal"
										>
											Add New
										</a>
									</div>
								</div>
							</div>
						</section>

						<ShowingSearch />

						<section class="section-table">
							<div className={`${styles.contentTable} container-fluid`}>
								<div class="row align-items-start mx-2">
									<table class="table table-hover border-5">
										<thead>
											<tr>
												<td class="py-3" scope="col"></td>
												<td class="py-3" scope="col">
													Asset Name
												</td>
												<td class="py-3" scope="col">
													Quantity
												</td>
												<td class="py-3" scope="col">
													Update Date
												</td>
												<td class="py-3" scope="col">
													Files
												</td>
												<td class="py-3" scope="col">
													Action
												</td>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td class="py-4" scope="row">
													1
												</td>
												<td class="py-4">sffs</td>
												<td class="py-4">0</td>
												<td class="py-4">2022-08-02 16:45</td>
												<td class="py-4"></td>
												<td class="py-4">
													<a
														class="btn"
														type="button"
														data-bs-toggle="modal"
														data-bs-target="#editModal"
													>
														<FontAwesomeIcon icon={faPenToSquare} color="red" width={15} />
													</a>
													<a
														class="btn"
														type="button"
														data-bs-toggle="modal"
														data-bs-target="#deleteModal"
													>
														<FontAwesomeIcon icon={faXmark} color="red" width={15} />
													</a>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</section>

						<div>
							<Pagination />
						</div>
					</div>

					{/* Modal Create */}
					<div
						class="modal fade"
						id="addModal"
						tabindex="-1"
						aria-labelledby="exampleModalLabel"
						aria-hidden="true"
					>
						<div class="modal-dialog modal-dialog-centered">
							<div>
								<AddModalCompany />
							</div>
						</div>
					</div>

					{/* Edit Create */}
					<div
						class="modal fade"
						id="editModal"
						tabindex="-1"
						aria-labelledby="exampleModalLabel"
						aria-hidden="true"
					>
						<div class="modal-dialog modal-dialog-centered">
							<div>
								<EditModalCompany />
							</div>
						</div>
					</div>

					{/* Modal Delete */}
					<div
						class="modal fade"
						id="deleteModal"
						tabindex="-1"
						aria-labelledby="exampleModalLabel"
						aria-hidden="true"
					>
						<div class="modal-dialog">
							<div>
								<DeleteModalCompany />
							</div>
						</div>
					</div>
				</main>
			</main>
		</div>
	);
}
