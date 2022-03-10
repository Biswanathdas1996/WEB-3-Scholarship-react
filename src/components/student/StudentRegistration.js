import React, { useState, useContext, useEffect } from "react";
import Form from "./Form";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@mui/material/LinearProgress";
import contract from "../../contract/Lottery";
import { AccountContest } from "../../App";
import swal from "sweetalert";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  cardHolder: {
    background: "#6d9ac4",
    padding: "20px",
    alignItems: "center",
  }
}));

const StudentRegistration = () => {
  const classes = useStyles();
  const account = useContext(AccountContest);

  const [start, setStart] = useState(false);

  const getDataFromDatabase = (name, rollNo, dob) => {
    fetch("http://localhost:6060/posts")
      .then((res) => res.json())
      .then((json) => {
        const validateStudent = json.data.find(
          (data) => data.uniqueNo === rollNo
        );
        if (validateStudent) {
          submitForm(name, rollNo, validateStudent?.score, dob);
        } else {
          swal("Sorry you are not validated", {
            icon: "error",
          });
        }
      });
  };

  const submitForm = async (name, rollNo, score, dob) => {
    setStart(true);
    await contract.methods
      .registerStudent(name, Number(rollNo), Number(score), dob)
      .send({
        from: account[0],
        value: 0,
      })
      .then((data) => {
        console.log("=>", data);
        swal("Registration done !", {
          icon: "success",
        });
        setStart(false);
      })
      .catch((error) => {
        console.log("error-->", error);
        swal(error.message, {
          icon: "error",
        });
        setStart(false);
      });
  };

  useEffect(() => {
    fetchStudentData();
  }, []);

  async function fetchStudentData() {
    const students = await contract.methods.getListOfStudents().call();
    console.log("students", students);
  }

  return (
    <>
      {start && <LinearProgress color="secondary" />}

      <div
        style={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
        className={classes.cardHolder}
      >
        <Form submitForm={getDataFromDatabase} />
      </div>
    </>
  );
};
export default StudentRegistration;
