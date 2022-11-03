import { useState } from "react";
import RadioButton from "./RadioButton";
// import styles from "/styles/Setting/Finance/ReimbursementSettings.module.css";

const ParentRadio = () => {
  const [taxable, setTaxable] = useState("Irregular");

  const onChangeValue = (event) => {
    setTaxable(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div style={{ margin: "20px 0" }}>
      <h5 style={{ fontSize: "15px" }}>Text Group</h5>
      <ul onChange={onChangeValue} style={{ marginLeft: "-20px" }}>
        <li>
          <RadioButton id="irregular" children="Irregular" value="Irregular" checked={taxable === "Irregular"}/>
        </li>
        <li>
          <RadioButton id="regular" children="Regular" value="Regular" checked={taxable === "Regular"} />
        </li>
      </ul>
    </div>
  );
};

export default ParentRadio;
