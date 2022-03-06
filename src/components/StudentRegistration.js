import React, { useState, useContext } from "react";
import Form from "./Form";
import web3 from "../web3";
import lottery from "../contract/Lottery";
import { AccountContest } from "../App";
import swal from "sweetalert";
import LinearProgress from "@mui/material/LinearProgress";

const StudentRegistration = () => {
  const account = useContext(AccountContest);
  const [start, setStart] = useState(false);

  const getDataFromDatabase = (name, rollNo) => {
    fetch("http://localhost:6060/posts")
      .then((res) => res.json())
      .then((json) => {
        const validateStudent = json.data.find(
          (data) => data.rollNo === rollNo
        );
        if (validateStudent) {
          submitForm(name, rollNo, validateStudent?.score);
        } else {
          swal("Sorry you are not validated", {
            icon: "error",
          });
        }
      });
  };

  const submitForm = async (name, rollNo, score) => {
    setStart(true);
    await lottery.methods
      .register(name, Number(rollNo), Number(score))
      .send({
        from: account[0],
        value: 0,
      })
      .then((data) => {
        console.log("=>", data);
        swal("Amount successfully transfered", {
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
  return (
    <>
      {start && <LinearProgress color="secondary" />}
      <Form submitForm={getDataFromDatabase} />
    </>
  );
};
export default StudentRegistration;
