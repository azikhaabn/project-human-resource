import React from "react";
import Header from "../Component/header";
import styles from "/styles/addEmployee.module.css";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';



export default function AddEmployee() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Header />
        <div className={styles.wrapper}>
          <h2>Employees</h2>
          <h2>Add Employees</h2>
          <div className={styles.content}>
            <div className={styles.sectionNum}>
              <h4 className={styles.num}>1</h4>
              <div className={styles.line}></div>
              <h4 className={styles.num1}>2</h4>
              <div className={styles.line}></div>
              <h4 className={styles.num1}>3</h4>
              <div className={styles.line}></div>
              <h4 className={styles.num1}>4</h4>
            </div>
            <div className={styles.label}>
              <label className={styles.label1}>Personal Data</label>
              <label className={styles.label2}>Employment Data</label>
              <label className={styles.label3}>Payroll</label>
              <label className={styles.label4}>Invite Employee</label>
            </div>
            <form className={styles.form}>
              <label>Personal Data</label>
              <p>Fill all employee personal basic information data</p>

              <label>Name*</label>
              <div class="row">
                <div class="col">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="First name"
                  />
                </div>
                <div class="col">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Last name"
                  />
                </div>
              </div>
              <br />
              <label>Email*</label>
              <input
                class="form-control"
                type="text"
                placeholder="Email"
              ></input>
              <p>This Email is use for log in</p>
              <label>Mobile Phone</label>
              <input class="form-control" type="tel" placeholder="0"></input>
              <br />
              <div class="row">
                <div class="col">
                  <label>Place of Birth</label>
                  <input type="text" class="form-control" />
                </div>
                <div class="col">
                  <label>Birthdate*</label>
                  <input
                    type="date"
                    class="form-control"
                    placeholder="Select Date "
                  />
                </div>
              </div>
              <br />
              <FormControl>
                <FormLabel>Gender</FormLabel>
                <RadioGroup row name="radio-buttons-group">
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                </RadioGroup>
              </FormControl>
              <div class="ro">
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                  <Select
                    value={age}
                    onChange={handleChange}
                    displayEmpty
                    
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
