import { useState } from "react";
import ShowFilter from "./ShowRadio";
import styles from "/styles/Setting/Finance/ReimbursementSettings.module.css";

const ParentRadio = () => {
	// const [isChecked, setIsChecked] = useState(false);
	// const handleCheck = () => {
	// 	setIsChecked(!isChecked);
	// };
	const [isFilter, setIsFilter] = useState("Yes");

	const onChangeValue = (event) => {
		setIsFilter(event.target.value);
		console.log(event.target.value);
	};

	return (
		<div className={`${styles["radio-default"]}`} style={{ marginLeft: "-20px" }}>
			<ul onChange={onChangeValue}>
				<li>
					<ShowFilter
						id="yes"
						children="Yes"
						value="Yes"
						checked={isFilter === "Yes"}
					/>
				</li>
				<li className="ms-5">
					<ul>
						<li>
							<ShowFilter
								id="filter"
								children="Filter"
								value="Filter"
								checked={isFilter === "Filter"}
							/>
						</li>
						<li>
							{isFilter === "Filter" ? (
								<button
									type="button"
									className={`${styles["btn-box"]} btn btn-outline-secondary btn-sm ms-3`}
									data-bs-toggle="modal"
									data-bs-target="#viewFilter"
								>
									VIEW FILTER
								</button>
							) : (
								<></>
							)}
						</li>
					</ul>
				</li>
			</ul>
		</div>
	);
};

export default ParentRadio;
