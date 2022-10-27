import React from "react";
import styles from "/styles/CompanyPage/Company/ModalDelete.module.css";

const DeleteModalEmployee = () => {
	return (
		<div className={styles.container}>
			<div className={`${styles["modal-delete"]} modal-content rounded-0`}>
				<div class="modal-header">
					<h5 className={`${styles.titleDelete} modal-title`} id="exampleModalLabel">
						Delete Assets
					</h5>
				</div>
				<div class="modal-body">
					<p>Are you sure want to delete this assets?</p>
				</div>
				<div class="modal-footer">
					<button type="button" className={`${styles["btn-delete"]} btn btn-outline-secondary`}>
						YES
					</button>
					<button
						type="button"
						className={`${styles["btn-delete"]} btn btn-outline-secondary`}
						data-bs-dismiss="modal"
					>
						NO
					</button>
				</div>
			</div>
		</div>
	);
};

export default DeleteModalEmployee;
