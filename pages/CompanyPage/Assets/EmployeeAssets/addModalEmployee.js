import React from "react";
import styles from "/styles/CompanyPage/Company/ModalAdd.module.css";

const AddModalEmployee = () => {
	return (
		<div className={styles.container}>
			<div className={`${styles.modal} modal-content`}>
				<div
					className={`${styles.modalContent} modal-header mt-2 ms-3 mb-3 me-3 border-bottom`}
				>
					<h3 class="modal-title">Add Assets</h3>
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
								Serial Number
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

					<div class="container-fluid mb-5">
						<div class="row mt-3 justify-content-end">
							<div>
								<label for="holder" className={`${styles.formLabel} form-label`}>
									Holder
								</label>
								<select className={`${styles.formSelect} form-select`} id="holder">
									<option selected>Choose The Employee</option>
									<option value="1">1</option>
									<option value="2">2</option>
									<option value="3">3</option>
									<option value="4">4</option>
								</select>
							</div>
						</div>
					</div>

					<div class="me-3 mt-4 mb-5">
						<label for="description" className={`${styles.formLabel} form-label`}>
							Description
						</label>
						<div className={`input-group mb-3`}>
							<textarea
								type="text"
								id="description"
								className={`${styles.inputAssetsCategory} form-control`}
								rows="4"
							></textarea>
						</div>
					</div>

					<div class="d-flex justify-content-start">
						<div class="col-4">
							<label for="landDate" className={`${styles.formLabel} form-label`}>
								Land Date
							</label>
							<div className={`input-group mb-3`}>
								<input
									type="date"
									id="landDate"
									className={`${styles.inputAssetsCategory} form-control`}
								></input>
							</div>
						</div>

						<div class="form-check ms-4 mt-4">
							<input
								class="form-check-input"
								type="checkbox"
								value=""
								id="flexCheckChecked"
							/>
							<label class="form-check-label" for="flexCheckChecked">
								Returned?
							</label>
						</div>
					</div>
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

export default AddModalEmployee;
