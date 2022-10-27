import React from "react";
import styles from "/styles/CompanyPage/Company/ModalAdd.module.css";

const AddModalCompany = () => {
	return (
		<div className={styles.container}>
			<div className={`${styles.modal} modal-content`}>
				<div
					className={`${styles.modalContent} modal-header mt-2 ms-3 mb-3 me-3 border-bottom`}
				>
					<h3 class="modal-title">Add Company Assets</h3>
				</div>

				<div className={`${styles.modalBody} modal-body ms-3`}>
					<div class="d-flex justify-content-between">
						<div class="col-5">
							<label for="assetsCategory" className={`${styles.formLabel} form-label`}>
								Assets Category
							</label>
							<div className={`input-group mb-3`}>
								<input
									type="text"
									id="assetsCategory"
									className={`${styles.inputAssetsCategory} form-control`}
								></input>
							</div>
						</div>

						<div class="col-5 me-3">
							<label for="serialNumber" className={`${styles.formLabel} form-label`}>
								Quantity
							</label>
							<div className={`input-group mb-3`}>
								<input
									type="text"
									id="serialNumber"
									className={`${styles.inputAssetsCategory} form-control`}
								></input>
							</div>
						</div>
					</div>

					<div class="me-3 mt-4 mb-5">
						<label for="description" className={`${styles.formLabel} form-label`}>
							Description
						</label>
						<div className={`${styles.desc} input-group mb-3`}>
							<textarea
								type="text"
								id="description"
								className={`${styles.inputAssetsCategory} form-control`}
								rows="4"
							></textarea>
						</div>
					</div>

					<button
						type="button"
						className={`${styles.btnModal} btn btn-outline-secondary mt-3 me-2 btn-sm`}
					>
						CLICK HERE TO UPLOAD
					</button>
				</div>

				<div class="modal-footer border-top mb-2">
					<button
						type="button"
						className={`${styles.btnModal} btn btn-outline-secondary mt-2 me-1 btn-sm`}
						data-bs-dismiss="modal"
					>
						CLOSE
					</button>
					<button
						type="button"
						className={`${styles.btnModal} btn btn-outline-secondary mt-2 me-2 btn-sm`}
					>
						UPDATE
					</button>
				</div>
			</div>
		</div>
	);
};

export default AddModalCompany;
