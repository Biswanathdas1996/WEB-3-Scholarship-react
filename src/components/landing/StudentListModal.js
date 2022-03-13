import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import contract from "../../contract/Scholarship";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ openStudentModal, closeStudentModal }) {
  const [start, setStart] = React.useState(false);
  const [vendorData, setVendorData] = React.useState([]);
  let history = useNavigate();
  const handleClose = () => closeStudentModal(false);

  React.useEffect(() => {
    fetchVendorData();
  }, []);

  async function fetchVendorData() {
    setStart(true);
    const studentList = await contract.methods.getListOfStudents().call();
    console.log(studentList);
    setVendorData(studentList);
    setStart(false);
  }

  const login = (slNo) => {
    localStorage.setItem("studentID", slNo);
    history("/student-details");
  };

  return (
    <div>
      <Modal
        open={openStudentModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Select student
          </Typography>
          {vendorData.length > 0
            ? vendorData.map((data) => {
                return (
                  <List>
                    <ListItem disablePadding>
                      <ListItemButton onClick={() => login(data?.slNo)}>
                        <ListItemText primary={data?.name} />
                      </ListItemButton>
                    </ListItem>
                  </List>
                );
              })
            : "Please wait..."}
        </Box>
      </Modal>
    </div>
  );
}
