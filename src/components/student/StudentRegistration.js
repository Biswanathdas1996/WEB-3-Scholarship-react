import React, { useState, useContext, useEffect } from "react";
import Form from "./Form";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@mui/material/LinearProgress";
import contract from "../../contract/Lottery";
import { AccountContest } from "../../App";
import swal from "sweetalert";
import { AppBar, Toolbar } from "@mui/material";
import Home from "@mui/icons-material/Home";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  cardHolder: {
    background: "#f3f3f4",
    alignItems: "center",
    height: "90vh",
    overflow: "auto",
  },
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
      <AppBar position="relative" position="relative" style={{backgroundColor:"#d25304",color:"#fff"}}>
        <Toolbar>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Home sx={{ mr: 2 }} style={{ color: "#fff" }} />
          </Link>
          <Typography variant="h6" color="inherit" noWrap>
            Welcome to E-Scholarship
          </Typography>
        </Toolbar>
      </AppBar>
      <div
       
        className={classes.cardHolder}
      >
        <Form submitForm={getDataFromDatabase} start={start} />
      </div>
    </>
  );
};
export default StudentRegistration;
