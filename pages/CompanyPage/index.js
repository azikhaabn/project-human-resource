import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "/styles/CompanyPage/CompanyRelational/CompanyRelational.module.css";
import Navbar from "../Component/navbar";

const CompanyRelational = () => {
	return (
		<div className={styles.body}>
			<main className={styles.main} id="main">
				<Navbar />

				<main className={styles.mainContent}>
					{/* <div className=> */}
					<section className="container text-center">
						<h1 className="d-inline-block mt-3 mb-4">Company Relational</h1>
						<h2 className="text-uppercase">PT Zegen Solusi Mandiri</h2>

						<div className={`${styles["bg-content"]} row my-2`}>
							<div className={`${styles["relational-img"]}`}>
								<div className={`row my-2`}>
									<Link
										href="/CompanyPage/Assets/EmployeeAssets"
										className={`${styles["link-img"]}`}
									>
										<div className={`${styles["container"]} col ms-2`}>
											<a className={`${styles["text-img"]}`}>Assets</a>
											<div style={{ width: "100px", height: "150px" }}>
												<Image
													className={`${styles["row-img"]} img-fluid`}
													src="/asset-img.png"
													layout="fill"
												/>
											</div>
											<div className={styles.overlay}></div>
										</div>
									</Link>
									<Link href="/CompanyPage/Reprimand/ReprimandList">
										<div className={`${styles["container"]} col ms-2`}>
											<a className={`${styles["text-img"]}`}>Reprimand</a>
											<div style={{ width: "100px", height: "150px" }}>
												<Image
													className={`${styles["row-img"]} img-fluid`}
													src="/reprimand-img.png"
													layout="fill"
												/>
											</div>
											<div className={styles.overlay}></div>
										</div>
									</Link>
									<Link href="/CompanyPage/Task/AllTask">
										<div className={`${styles["container"]} col ms-2`}>
											<a className={`${styles["text-img"]}`}>Task</a>
											<div style={{ width: "100px", height: "150px" }}>
												<Image
													className={`${styles["row-img"]} img-fluid`}
													src="/task-img.png"
													layout="fill"
												/>
											</div>
											<div className={styles.overlay}></div>
										</div>
									</Link>
									<Link href="/CompanyPage/Announcement">
										<div className={`${styles["container"]} col ms-2 me-2`}>
											<a className={`${styles["text-img"]}`}>Announcement</a>
											<div style={{ width: "100px", height: "150px" }}>
												<Image
													className={`${styles["row-img"]} img-fluid`}
													src="/announce-img.png"
													layout="fill"
												/>
											</div>
											<div className={styles.overlay}></div>
										</div>
									</Link>
								</div>
								<div className={`row my-2`}>
									<Link href="/CompanyPage/UserActivityLog">
										<div className={`${styles["container"]} col ms-2`}>
											<a className={`${styles["text-img"]}`}>User Activity Log</a>
											<div style={{ width: "100px", height: "150px" }}>
												<Image
													className={`${styles["row-img"]} img-fluid`}
													src="/user-activity-log-img.png"
													layout="fill"
												/>
											</div>
											<div className={styles.overlay}></div>
										</div>
									</Link>
									<Link href="/CompanyPage/Notification">
										<div className={`${styles["container"]} col ms-2`}>
											<a className={`${styles["text-img"]}`}>Notification</a>
											<div style={{ width: "100px", height: "150px" }}>
												<Image
													className={`${styles["row-img"]} img-fluid`}
													src="/notification-img.png"
													layout="fill"
												/>
											</div>
											<div className={styles.overlay}></div>
										</div>
									</Link>
									<Link href="/CompanyPage/Onboarding/OnProgress">
										<div className={`${styles["container"]} col ms-2`}>
											<a className={`${styles["text-img"]}`}>Onboarding</a>
											<div style={{ width: "100px", height: "150px" }}>
												<Image
													className={`${styles["row-img"]} img-fluid`}
													src="/onboarding-img.png"
													layout="fill"
												/>
											</div>
											<div className={styles.overlay}></div>
										</div>
									</Link>
									<Link href="/CompanyPage/Files/CompanyFiles">
										<div className={`${styles["container"]} col ms-2 me-2`}>
											<a className={`${styles["text-img"]}`}>Files</a>
											<div style={{ width: "100px", height: "150px" }}>
												<Image
													className={`${styles["row-img"]} img-fluid`}
													src="/files-img.png"
													layout="fill"
												/>
											</div>
											<div className={styles.overlay}></div>
										</div>
									</Link>
								</div>
								<div className={`row my-2`}>
									<Link href="/CompanyPage/Polling/Active">
										<div className={`${styles["container"]} col ms-2`}>
											<a className={`${styles["text-img"]}`}>Polling</a>
											<div style={{ width: "100px", height: "150px" }}>
												<Image
													className={`${styles["row-img"]} img-fluid`}
													src="/polling-img.png"
													layout="fill"
												/>
											</div>
											<div className={styles.overlay}></div>
										</div>
									</Link>
									<Link href="/CompanyPage/DocumentTemplate">
										<div className={`${styles["container"]} col ms-2`}>
											<a className={`${styles["text-img"]}`}>Document Template</a>
											<div style={{ width: "100px", height: "150px" }}>
												<Image
													className={`${styles["row-img"]} img-fluid`}
													src="/document-template-img.png"
													layout="fill"
												/>
											</div>
											<div className={styles.overlay}></div>
										</div>
									</Link>
									{/* <Link href="/CompanyPage/Onboarding/OnProgress">
										<div className={`${styles["container"]} col ms-2`}>
											<a className={`${styles["text-img"]}`}>Onboarding</a>
											<div style={{ width: "100px", height: "150px" }}>
												<Image
													className={`${styles["row-img"]} img-fluid`}
													src="/onboarding-img.png"
													layout="fill"
												/>
											</div>
											<div className={styles.overlay}></div>
										</div>
									</Link>
									<Link href="/CompanyPage/Files/CompanyFiles">

									</Link> */}
									<Link href="/CompanyPage/ReportBuilder">
										<div className={`${styles["container"]} col ms-2 me-2`}>
											<a className={`${styles["text-img"]}`}>Report Builder</a>
											<div style={{ width: "100px", height: "150px" }}>
												<Image
													className={`${styles["row-img"]} img-fluid`}
													src="/report-builder-img.png"
													layout="fill"
												/>
											</div>
											<div className={styles.overlay}></div>
										</div>
									</Link>
								</div>
							</div>
						</div>
					</section>
					{/* </div> */}
				</main>
			</main>
		</div>
	);
};

export default CompanyRelational;
