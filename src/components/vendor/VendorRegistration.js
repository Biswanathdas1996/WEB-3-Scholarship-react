import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles'
import LinearProgress from "@mui/material/LinearProgress";
import VendorForm from "./VendorForm";
const useStyles = makeStyles(({ palette, ...theme }) => ({
  cardHolder: {
      background: '#f3f3f4',
      padding:'20px',
      alignItems:'center',
      minHeight:900
  },
  card: {
      maxWidth: 800,
      borderRadius: 12,
      margin: '1rem',
  },
}))


const VendorRegistration = () => {
  const classes = useStyles()
  //const account = useContext(AccountContest);
  const account=[];
  const [start, setStart] = useState(false);

  /* const getDataFromDatabase = (name, rollNo) => {
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
  }; */

  const submitForm = async (name, rollNo, score) => {
    setStart(true);
    /* await lottery.methods
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
      }); */
  };
  return (
    <div
    style={{justifyContent: 'center',alignItems: 'center', display: 'flex'}}
      className={classes.cardHolder}
    >
      {start && <LinearProgress color="secondary" />}
      {/* <Form submitForm={getDataFromDatabase} /> */}
      <VendorForm />
    </div>
  );
};
export default VendorRegistration;
