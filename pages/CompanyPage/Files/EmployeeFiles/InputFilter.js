import React, { useState } from "react";
import styles from "/styles/CompanyPage/Files/Cfiles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const InputFilter = ({ filter, setFilter }) => {
	return (
		<>
			<label for="search" className={`${styles["formLabel"]} form-label`}>
				Search
			</label>
			<div className={`input-group mb-3`}>
				<span className={`${styles["input-group"]} input-group-text`}>
					<FontAwesomeIcon
						className={`${styles["search-icon"]}`}
						icon={faMagnifyingGlass}
					/>
				</span>
				<input
					type="text"
					value={filter || ""}
					onChange={(e) => setFilter(e.target.value)}
					className={`${styles["input-group"]} form-control`}
				></input>
			</div>
		</>
	);
};

export default InputFilter;
