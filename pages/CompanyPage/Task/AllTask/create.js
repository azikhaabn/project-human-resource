import React from "react";
import styles from "/styles/CompanyPage/Task/CreateNew.module.css";

const CreateNew = () => {
	return (
		<div>
			<main className={styles.main}>
				<div class="modal-content rounded-0">
					<div class="modal-header border-bottom mt-2 mb-3">
						<h5 class="modal-title ms-3">Create Task</h5>
						<button
							type="button"
							class="btn-close"
							data-bs-dismiss="modal"
							aria-label="Close"
						></button>
					</div>

					<div className={`${styles["form-label"]} modal-body ms-3 me-3`}>
						<div>
							<label for="taskName" className={`form-label`}>
								Task Name
							</label>
							<div className={`input-group mb-3`}>
								<input
									type="text"
									id="taskName"
									placeholder="New Task"
									className={`form-control`}
								></input>
							</div>
						</div>

						<div>
							<label className={`form-label`}>Project</label>
							<select class="form-select mb-3" aria-label="Default select example">
								<option selected>No project</option>
								{/* <option value="1">No Project</option> */}
								<option value="2">New Project</option>
								{/* <option value="3">Three</option> */}
							</select>
						</div>

						<div>
							<label className={`form-label`}>Assignee</label>
							<select class="form-select mb-3" aria-label="Default select example">
								<option selected>Select assignee</option>
								<option value="1">Viona Pasha</option>
								<option value="2">Mahmud Derawan</option>
								{/* <option value="3">Three</option> */}
							</select>
						</div>

						<div class="mb-3">
							<label className={`form-label`}>Due on</label>
							<div class="d-flex justify-content-between mb-2">
								<div className={`input-group me-2`}>
									<input
										type="date"
										id="taskName"
										placeholder="New Task"
										className={`${styles["input-date"]} form-control`}
									></input>
								</div>
								<div className={`input-group`}>
									<input
										type="time"
										id="taskName"
										placeholder="New Task"
										className={`form-control`}
									></input>
								</div>
							</div>

							<div class="form-check">
								<input
									class="form-check-input"
									type="checkbox"
									value=""
									id="flexCheckDefault"
								/>
								<label
									class={`${styles["check-box"]} form-check-label`}
									for="flexCheckDefault"
								>
									Default checkbox
								</label>
							</div>
						</div>

						<div class="mt-4 mb-3 form-group">
							<label for="description" className={`col-form-label`}>
								Description
							</label>
							<div className={`input-group mb-3`}>
								<textarea
									type="text"
									className={`${styles["text-area"]} form-control col-xs-12`}
									id="description"
									rows="5"
									placeholder="Add extra details..."
								></textarea>
							</div>
						</div>

						<div class="mb-4">
							<label className={`form-label`}>Attachment</label>
							<div className={`input-group me-2`}>
								<input
									type="file"
									id="taskName"
									placeholder="New Task"
									className={`form-control`}
								></input>
							</div>
						</div>

						<div class="form-check">
							<input
								class="form-check-input"
								type="checkbox"
								value=""
								id="flexCheckDefault"
							/>
							<label
								class={`${styles["check-box"]} form-check-label`}
								for="flexCheckDefault"
							>
								Email to assigned employee
							</label>
						</div>
					</div>

					<div class="modal-footer mb-2 mt-5">
						<button
							type="button"
							className={`${styles["btn-can"]} btn btn-light me-2`}
							data-bs-dismiss="modal"
						>
							Cancel
						</button>
						<button type="button" class="btn btn-primary me-3">
							Save
						</button>
					</div>
				</div>
			</main>
		</div>
	);
}

export default CreateNew;
