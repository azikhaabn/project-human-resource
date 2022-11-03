import styles from "/styles/Setting/Finance/ReimbursementSettings.module.css";

const RadioButton = (props) => {
	// const [isChecked, setIsChecked] = useState('active');
	const { id, children, value, checked } = props;
	return (
		<div className={`${styles["form-check"]} form-check`}>
			<input
				className={`${styles["check-radio"]}`}
				type="radio"
				name="default"
				id={id}
				value={value}
				checked={checked}
			/>
			<label className={`${styles["form-label"]} form-check-label ms-2`} for={id}>
				{children}
			</label>
		</div>
	);
};

export default RadioButton;
