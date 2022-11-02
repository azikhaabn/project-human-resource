import React, { Component, useState } from "react";
import Link from "next/link";
import styles from "/styles/Setting/Finance/ReimbursementSettings.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import Settings from "../HeadSettings/index";
import Navbar from "../../Component/navbar";
import ViewFilter from "./filter";
import Formula from "./formula";
import AddParent from "./addParent";
import ParentRadio from "./components/ParentRadio";

const FinanceSettings = () => {
	const [showParentRadio, setShowParentRadio] = useState(false);
	const router = useRouter();
	const currentRoute = router.pathname;

	return (
		<div className={styles.body}>
			<main className={styles.main} id="main">
				<Navbar />
				<main className={`${styles["main-content"]}`}>
					<div className={`${styles["bg-content"]} mt-5`}>
						<div class="mb-5">
							<Settings />
						</div>
						<div className={`${styles["content"]}`}>
							<div className="container-fluid">
								<div className={`${styles["row-sidebar"]} row`}>
									<div className={`${styles["sidebar"]} col-2`}>
										<div className="d-flex flex-column text-center">
											<Link href="./Finance">
												<div
													className={
														currentRoute === "/Settings/Finance"
															? `${styles["btn-tasks"]} ${styles["active"]}`
															: `${styles["btn-tasks"]}`
													}
												>
													<div className={`${styles["icon-finance"]}`}>
														<FontAwesomeIcon icon={faCoins} />
													</div>
													<span style={{ letterSpacing: "3px" }}>REIMBURSEMENT</span>
												</div>
											</Link>
										</div>
									</div>
									<div className="col-10 mb-5">
										<div className={`${styles["title-finance"]}`}>
											<span className={`${styles["title"]}`}>REIMBURSEMENT POLICY</span>
											<hr />
										</div>

										<div class="mx-2">
											<section class="form-group">
												<div className={`d-flex justify-content-between`}>
													<div className={`col-6 me-2`}>
														<label
															for="reimName"
															className={`${styles["form-label"]} form-label`}
														>
															Reimbursement Name
														</label>
														<div className={`input-group mb-3`}>
															<input
																type="text"
																id="reimName"
																className={`${styles["input-group"]} form-control`}
															></input>
														</div>
													</div>
													<div className={`col-6`}>
														<label
															for="effectiveDate"
															className={`${styles["form-label"]} form-label`}
														>
															Effective Date
														</label>
														<div className={`input-group mb-3`}>
															<input
																type="date"
																id="effectiveDate"
																className={`${styles["input-group"]} form-control`}
															></input>
														</div>
													</div>
												</div>
												<div>
													<label
														for="reimDesc"
														className={`${styles["form-label"]} form-label`}
													>
														Reimbursement Description
													</label>
													<div className={`input-group`}>
														<textarea
															type="text"
															id="reimDesc"
															className={`${styles["input-group"]} form-control`}
														></textarea>
													</div>
												</div>
											</section>

											<section
												className={`${styles["list-finance"]} d-flex justify-content-between mt-3`}
											>
												<ul>
													<li>
														<div className={`${styles["form-check"]} form-check`}>
															<input
																className={`${styles["check-input"]} form-check-input rounded-0`}
																type="checkbox"
																id="policy"
															/>
															<label
																className={`${styles["form-label"]} form-check-label`}
																for="policy"
															>
																This Policy has unlimited amount
															</label>
														</div>
													</li>

													<div>
														<li>
															<div className={`${styles["form-check"]} form-check`}>
																<input
																	className={`${styles["check-input"]} form-check-input rounded-0`}
																	type="checkbox"
																	value=""
																	id="default"
																	onClick={() => {
																		setShowParentRadio(!showParentRadio);
																	}}
																/>
																<label
																	className={`${styles["form-label"]} form-check-label`}
																	for="default"
																>
																	Default Reimbursement for new employee
																</label>
															</div>
														</li>

														{showParentRadio ? <ParentRadio /> : <></>}
													</div>

													<li>
														<div className={`${styles["form-check"]} form-check`}>
															<input
																className={`${styles["check-input"]} form-check-input rounded-0`}
																type="checkbox"
																value=""
																id="include"
															/>
															<label
																className={`${styles["form-label"]} form-check-label`}
																for="include"
															>
																Include in Take Home Pay
															</label>
														</div>
													</li>

													<li>
														<div className={`${styles["form-check"]} form-check`}>
															<input
																className={`${styles["check-input"]} form-check-input rounded-0`}
																type="checkbox"
																value=""
																id="texable"
															/>
															<label
																className={`${styles["form-label"]} form-check-label`}
																for="texable"
															>
																Taxable
															</label>
														</div>

														<div className="my-3">
															<h5 style={{ fontSize: "15px" }}>Tax Group</h5>
															<ul style={{ marginLeft: "-20px" }}>
																<li>
																	<div className={`${styles["form-check"]} form-check`}>
																		<input
																			className={`${styles["check-radio"]}`}
																			type="radio"
																			name="taxGroup"
																			id="irregular"
																		/>
																		<label
																			className={`${styles["form-label"]} form-check-label ms-2`}
																			for="irregular"
																		>
																			Irregular
																		</label>
																	</div>
																</li>
																<li>
																	<div className={`${styles["form-check"]} form-check`}>
																		<input
																			className={`${styles["check-radio"]}`}
																			type="radio"
																			name="taxGroup"
																			id="regular"
																		/>
																		<label
																			className={`${styles["form-label"]} form-check-label ms-2`}
																			for="regular"
																		>
																			Regular
																		</label>
																	</div>
																</li>
															</ul>
														</div>
													</li>

													<li>
														<div className={`${styles["form-check"]} form-check`}>
															<input
																className={`${styles["check-input"]} form-check-input rounded-0`}
																type="checkbox"
																value=""
																id="protate"
															/>
															<label
																className={`${styles["form-label"]} form-check-label`}
																for="protate"
															>
																Prorate on First Year
															</label>
														</div>
													</li>

													<li>
														<div className={`${styles["form-check"]} form-check`}>
															<input
																className={`${styles["check-input"]} form-check-input rounded-0`}
																type="checkbox"
																value=""
																id="noExpiryDate"
															/>
															<label
																className={`${styles["form-label"]} form-check-label`}
																for="noExpiryDate"
															>
																No Expiry Date
															</label>
														</div>
													</li>

													<li>
														<div className={`${styles["form-check"]} form-check`}>
															<input
																className={`${styles["check-input"]} form-check-input rounded-0`}
																type="checkbox"
																value=""
																id="maxRequest"
															/>
															<label
																className={`${styles["form-label"]} form-check-label`}
																for="maxRequest"
															>
																Max Request Per Emerge
															</label>
														</div>
													</li>
												</ul>

												<div>
													<h5 style={{ fontSize: "15px", marginLeft: "-20px" }}>
														Expired In
													</h5>
													<div className={`d-flex justify-content-start mb-4`}>
														<div className={`${styles["form-check"]} form-check`}>
															<input
																className={`${styles["check-radio"]}`}
																type="radio"
																name="expiredIn"
																id="month"
															/>
															<label
																className={`${styles["form-label"]} form-check-label col-5 ms-2`}
																for="month"
															>
																<input
																	className={`${styles["input-group"]} form-control`}
																	type="text"
																/>
															</label>
														</div>
														<h5 style={{ marginLeft: "-80px", fontSize: "15px" }}>Month</h5>
													</div>

													<div className={`d-flex justify-content-start ms-1`}>
														<div
															className={`d-flex justify-content-start`}
															style={{ marginLeft: "24px" }}
														>
															<input
																className={`${styles["check-radio"]}`}
																type="radio"
																name="expiredIn"
																style={{ marginBottom: "20px" }}
															/>
															<div className={`col-12 me-1 ms-2`}>
																<div className={`mb-3`}>
																	<label
																		for="day"
																		className={`${styles["form-label"]} form-label`}
																	>
																		Day
																	</label>
																	<div className={`input-group mb-3`}>
																		<div className={`input-group mb-3`}>
																			<select className={`${styles["input-group"]} form-select`}>
																				<option slected>1</option>
																				<option value="2">2</option>
																			</select>
																		</div>
																	</div>
																</div>
															</div>
														</div>
														<div className={`col-5 ms-4`}>
															<div className={`mb-3`}>
																<label
																	for="month"
																	className={`${styles["form-label"]} form-label`}
																>
																	Month
																</label>
																<div className={`input-group mb-3`}>
																	<select className={`${styles["input-group"]} form-select`}>
																		<option selected="true">January</option>
																		<option value="february">February</option>
																		<option value="march">March</option>
																		<option value="april">April</option>
																		<option value="may">May</option>
																		<option value="june">June</option>
																		<option value="july">July</option>
																		<option value="august">August</option>
																		<option value="september">September</option>
																		<option value="october">October</option>
																		<option value="november">November</option>
																		<option value="desember">Desember</option>
																	</select>
																</div>
															</div>
														</div>
													</div>

													<div className={`d-flex justify-content-start ms-3`}>
														<h5 class="ms-5" style={{ fontSize: "15px", marginTop: "27px" }}>
															Minimum expiry
														</h5>
														<div className={`col-5`}>
															<div className={`mb-3 ms-3`}>
																<label
																	for="month"
																	className={`${styles["form-label"]} form-label`}
																>
																	Month(s)
																</label>
																<div className={`input-group mb-3`}>
																	<input
																		type="text"
																		id="month"
																		className={`${styles["input-group"]} form-control`}
																		placeholder="0"
																	/>
																</div>
															</div>
														</div>
													</div>
												</div>
											</section>

											{/* EXPIRY DATE */}
											<section className={`${styles["expiry-date"]} mt-5`}>
												<h5>Emerge</h5>
												<ul>
													<li className={`d-flex justify-content-start`}>
														<div>
															<div className={`${styles["form-check"]} form-check`}>
																<input
																	className={`${styles["check-radio"]}`}
																	type="radio"
																	name="emerge"
																	id="month"
																/>
																<label
																	className={`${styles["form-label"]} form-check-label ms-2`}
																	for="month"
																>
																	Annually
																</label>
															</div>
														</div>

														<div className={`col-1`}>
															<div className={`ms-3`}>
																<label
																	for="day"
																	className={`${styles["form-label"]} form-label`}
																	style={{ width: "100px" }}
																>
																	Day Emerge Annually
																</label>
																<div className={`input-group mb-3`}>
																	<div className={`input-group mb-3`}>
																		<select className={`${styles["input-group"]} form-select`}>
																			<option slected>1</option>
																			<option value="2">2</option>
																		</select>
																	</div>
																</div>
															</div>
														</div>
														<div className={`col-2`}>
															<div className={`mb-3 ms-3`}>
																<label
																	for="month"
																	className={`${styles["form-label"]} form-label`}
																	style={{ width: "100px" }}
																>
																	Month Emerge Annually
																</label>
																<div className={`input-group`}>
																	<select className={`${styles["input-group"]} form-select`}>
																		<option selected="true">January</option>
																		<option value="february">February</option>
																		<option value="march">March</option>
																		<option value="april">April</option>
																		<option value="may">May</option>
																		<option value="june">June</option>
																		<option value="july">July</option>
																		<option value="august">August</option>
																		<option value="september">September</option>
																		<option value="october">October</option>
																		<option value="november">November</option>
																		<option value="desember">Desember</option>
																	</select>
																</div>
															</div>
														</div>
														<div className={`col-1 ms-3`}>
															<label
																for="yearEmmerge"
																className={`${styles["form-label"]} form-label`}
																style={{ width: "100px" }}
															>
																Year Emerge Annually
															</label>
															<div className={`input-group mb-3`}>
																<input
																	type="text"
																	id="yearEmmerge"
																	className={`${styles["input-group"]} form-control`}
																></input>
															</div>
														</div>

														<div class="ms-3">
															<h5 style={{ fontSize: "15px" }}>Reimbursement Limit</h5>
															<div className={`${styles["form-check"]} form-check`}>
																<input
																	className={`${styles["check-radio"]}`}
																	type="radio"
																	name="rLimit"
																	id="month"
																/>
																<label
																	className={`${styles["form-label"]} form-check-label col-5 ms-2`}
																	for="month"
																>
																	Amount
																</label>
															</div>
															<div className="d-flex justify-content-start">
																<div className={`${styles["form-check"]} form-check mt-3`}>
																	<input
																		className={`${styles["check-radio"]}`}
																		type="radio"
																		name="rLimit"
																		id="month"
																	/>
																	<label
																		className={`${styles["form-label"]} form-check-label col-5 ms-2`}
																		for="month"
																	>
																		Formula
																	</label>
																</div>
																<button
																	type="button"
																	className={`${styles["btn-box"]} btn btn-outline-secondary btn-sm ms-3`}
																	data-bs-toggle="modal"
																	data-bs-target="#formula"
																>
																	FORMULA
																</button>
															</div>
														</div>

														<div className={`col-2 ms-3`}>
															<div className={`input-group mb-3 mt-3`}>
																<input
																	type="text"
																	id="reimName"
																	className={`${styles["input-group"]} form-control`}
																></input>
															</div>
														</div>
													</li>

													<li>
														<div>
															<div className={`${styles["form-check"]} form-check`}>
																<input
																	className={`${styles["check-radio"]}`}
																	type="radio"
																	name="emerge"
																	id="month"
																/>
																<label
																	className={`${styles["form-label"]} form-check-label ms-2`}
																	for="month"
																>
																	Anniversary
																</label>
															</div>
														</div>
													</li>

													<li>
														<div>
															<div className={`${styles["form-check"]} form-check`}>
																<input
																	className={`${styles["check-radio"]}`}
																	type="radio"
																	name="emerge"
																	id="month"
																/>
																<label
																	className={`${styles["form-label"]} form-check-label ms-2`}
																	for="month"
																>
																	Monthly
																</label>
															</div>
														</div>
													</li>
												</ul>
											</section>

											{/* TABEL SETTINGS */}
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
														<button
															type="button"
															className={`${styles["btn-box"]} btn btn-outline-secondary me-1 btn-sm`}
														>
															ADD BENEFIT
														</button>
													</div>

													<div className="d-flex justify-content-end">
														<button
															type="button"
															className={`${styles["btn-box"]} btn btn-outline-secondary me-1 btn-sm`}
														>
															SAVE & POLICY
														</button>
													</div>
												</div>
											</section>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* MODAL VIEW FILTER DEFAULT REIMBURSEMENT FOR NEW EMPLOYEE */}
					<div
						class="modal fade"
						id="viewFilter"
						tabindex="-1"
						aria-labelledby="exampleModalLabel"
						aria-hidden="true"
					>
						<div class="modal-dialog modal-dialog-centered">
							<ViewFilter />
						</div>
					</div>

					{/* MODAL FORMULA NO EXPIRY DATE */}
					<div
						class="modal fade"
						id="formula"
						tabindex="-1"
						aria-labelledby="exampleModalLabel"
						aria-hidden="true"
					>
						<div class="modal-dialog modal-dialog-centered">
							<Formula />
							{/* <AddParent className={styles.modal} /> */}
						</div>
					</div>

					{/* <div class="modal fade" id="exampleModal4" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
              <AddParent />
            </div>
          </div> */}
				</main>
			</main>
		</div>
	);
};

export default FinanceSettings;
