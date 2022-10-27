import React, { Component, useMemo, useState } from "react";
import Link from "next/link";
import styles from "/styles/CompanyPage/Company/CompanyPage.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCircleInfo,
	faXmark,
	faPenToSquare,
	faMagnifyingGlass,
	faAngleRight,
	faAngleLeft,
} from "@fortawesome/free-solid-svg-icons";
import Navbar from "../../../Component/navbar";
import EditModalEmployee from "./editModalEmployee";
import AddModalEmployee from "./addModalEmployee";
import DeleteModalEmployee from "./deleteModalEmployee";
import { useRouter } from "next/router";
import { COLUMNS } from "../columns";
import MOCK_DATA from "../MOCK_DATA.json";
import { useGlobalFilter, useTable, usePagination } from "react-table";
import InputFilter from "./inputFilter";

export default function CompanyAssets() {
	const columns = useMemo(() => COLUMNS, []);
	const data = useMemo(() => MOCK_DATA, []);

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		page,
		nextPage,
		previousPage,
		canNextPage,
		canPreviousPage,
		setPageSize,
		prepareRow,
		state,
		setGlobalFilter,
	} = useTable({ columns, data }, useGlobalFilter, usePagination);

	const { globalFilter, pageIndex, pageSize } = state;

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
										<button
											type="button"
											className={`${styles.btnAssets} btn col-md btn-sm me-1`}
										>
											Export Assets
										</button>
										<button
											type="button"
											className={`${styles.btnAssets} btn col-md btn-sm me-1`}
										>
											Import Assets
										</button>
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

						<section class="section-sellect-search mb-4">
							<div class="container-fluid">
								<div class="row mt-3 justify-content-end me-1">
									<div class="col-1">
										<label for="select" className={`${styles.formLabel} form-label`}>
											Showing
										</label>
										<select
											value={pageSize}
											onChange={(e) => setPageSize(Number(e.target.value))}
											className={`${styles.formSelect} form-select`}
											id="select"
										>
											{[10, 25, 50, 75, 100].map((pageSize) => (
												<option key={pageSize} value={pageSize}>
													{pageSize}
												</option>
											))}
										</select>
									</div>
									<div class="col-2">
										<InputFilter filter={globalFilter} setFilter={setGlobalFilter} />
									</div>
								</div>
							</div>
						</section>

						<section class="section-table">
							<div className={`${styles.contentTable} container-fluid`}>
								<div class="row align-items-start mx-2">
									<table
										{...getTableProps}
										className="table mb-3 shadow-sm rounded-3 overflow-hidden align-middle mb-0 bg-white"
									>
										<thead className="bg-light">
											{headerGroups.map((headerGroup) => (
												<tr {...headerGroup.getHeaderGroupProps()}>
													{headerGroup.headers.map((column) => (
														<th {...column.getHeaderProps()}>{column.render("Header")}</th>
													))}
												</tr>
											))}
										</thead>
										<tbody {...getTableBodyProps}>
											{page.map((row) => {
												prepareRow(row);
												return (
													<tr {...row.getRowProps()}>
														{row.cells.map((cell) => {
															return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
														})}
													</tr>
												);
											})}
										</tbody>
									</table>
								</div>
							</div>
						</section>

						<section class="section-paginate mt-3">
							<div className={`container-fluid`}>
								<div className={`${styles.rowPaginate}`}>
									<p className={styles.textShow}>
										Showing 1 to {pageSize} of {pageSize} entries
									</p>
									<div>
										<Link href="#">
											<FontAwesomeIcon
												onClick={() => previousPage()}
												icon={faAngleLeft}
												className={`${
													!canPreviousPage
														? styles["arrow-icon-disabled"]
														: styles["arrow-icon"]
												} `}
											/>
										</Link>
										&nbsp; &nbsp;{" "}
										<span className={styles.numberPage}>{pageIndex + 1}</span> &nbsp;
										&nbsp;
										<Link href="#">
											<FontAwesomeIcon
												onClick={() => nextPage()}
												icon={faAngleRight}
												className={`${
													!canNextPage ? styles["arrow-icon-disabled"] : styles["arrow-icon"]
												} `}
											/>
										</Link>
									</div>
									<ul class="pagination">
										<li className="page-item">
											<button
												onClick={() => previousPage()}
												className={`text-uppercase page-link ${
													!canPreviousPage ? "disabled" : ""
												}`}
											>
												Previous
											</button>
										</li>
										<li className="page-item">
											<button
												onClick={() => nextPage()}
												className={`text-uppercase page-link ${
													!canNextPage ? "disabled" : ""
												}`}
											>
												Go
											</button>
										</li>
									</ul>
								</div>
							</div>
						</section>
					</div>

					{/* Add Modal Employee */}
					<div
						class="modal fade"
						id="addModal"
						tabindex="-1"
						aria-labelledby="exampleModalLabel"
						aria-hidden="true"
					>
						<div class="modal-dialog modal-dialog-centered">
							<AddModalEmployee />
						</div>
					</div>

					{/* Edit Modal Employee */}
					<div
						class="modal fade"
						id="editModal"
						tabindex="-1"
						aria-labelledby="exampleModalLabel"
						aria-hidden="true"
					>
						<div class="modal-dialog modal-dialog-centered">
							<EditModalEmployee />
						</div>
					</div>

					{/* Delete Modal Employee */}
					<div
						class="modal fade"
						id="deleteModal"
						tabindex="-1"
						aria-labelledby="exampleModalLabel"
						aria-hidden="true"
					>
						<div class="modal-dialog">
							<DeleteModalEmployee />
						</div>
					</div>
				</main>
			</main>
		</div>
	);
}
