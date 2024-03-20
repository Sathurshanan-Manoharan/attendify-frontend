import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "../axiosConfiguration/axiosconfig";
import Button from "@mui/material/Button";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";

function SessionAttendance() {
  const { id } = useParams();
  const [rows, setRows] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null); //File selection for handling
  const [fileUploaded, setFileUploaded] = useState(false); //For displaying success message

  //Handles adding of the file
  function fileChangeHandler(event) {
    setSelectedFile(event.target.files[0]);
  }

  //Handles upload of the file to the backend
  async function uploadHandler() {
    try {
      const csvForm = new FormData();
      csvForm.append('csvFile', selectedFile);
      const response = await axios.post('http://127.0.0.1:3000/api/v1/attendance/upload', csvForm, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(response.data);
      setFileUploaded(true);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  const handleOkButtonClick = () => {
    setFileUploaded(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/v1/attendance/${id}`);

        const { studentsPresent } = response.data.data;
        console.log(studentsPresent);
        const newRows = studentsPresent.map((student) => ({
          id: student.studentInfo.studentID,
          name: `${student.studentInfo.firstName} ${student.studentInfo.lastName}`,
          date: student.date,
          "check-in": student.check_in_time,
          status: "Present",
        }));
        setRows(newRows);
      } catch (error) {
        console.error(error); // Handle errors appropriately
      }
    };

    fetchData();
  }, [id]);

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 150,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "name",
      headerName: "NAME",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "date",
      headerName: "DATE",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "check-in",
      headerName: "CHECK IN",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "status",
      headerName: "STATUS",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => (
        <Box
          sx={{
            backgroundColor:
              params.value === "Present"
                ? "#BCEAB8"
                : params.value === "Absent"
                  ? "#F0C6C6"
                  : "inherit",
            borderRadius: "100px",
            paddingTop: "7px",
            paddingBottom: "7px",
            paddingRight: "40px",
            paddingLeft: "40px",
            color:
              params.value === "Present"
                ? "#2C5702"
                : params.value === "Absent"
                  ? "BB0000"
                  : "inherit",
            textAlign: "center",
          }}
        >
          {params.value}
        </Box>
      ),
    },
  ];

  //List of all the data entries stored as objects
  // const rows = userData;

  return (
    //<ThemeProvider theme={textFont}>
    <Box>
      <Card
        variant="elevation"
        sx={{
          // boxShadow: "0px 0px 20px 10px rgba(0, 0, 0, 0.035)",
          boxShadow: 2,
          borderRadius: "12px",
          border: "none",
        }}
      >
        <CardContent sx={{ display: "grid" }}>
          <Typography variant="h6" color="#004AAD" fontWeight="bold">
            Attendance Overview
          </Typography>
          <Divider sx={{ marginBottom: "20px", marginTop: "12px" }}></Divider>

          {/* Conditionally renders if rows recieves null */}
          {rows.length === 0 && (
            <Box display="flex" flexDirection="column" alignItems="center" sx={{ marginBottom: "30px" }}>
              <Typography variant="h4" color="#004AAD" fontWeight="bold">Upload CSV File</Typography>
              <Button sx={{ marginTop: "20px" }}
                component="label"
                variant="outlined"
              >
                Select File
                <input type="file" accept=".csv" onChange={fileChangeHandler} style={{ display: 'none' }} />
              </Button>
              {selectedFile && (
                <Card sx={{ bgcolor: "#004AAD", margin: "5px" }}>
                  <Typography variant="body1" margin="5px" color="white">
                    <InsertDriveFileIcon sx={{ marginRight: "5px" }} /> {selectedFile.name}
                  </Typography>
                </Card>

              )}

              <Box sx={{ marginTop: "20px" }}>
                <Button
                  variant="contained"
                  onClick={uploadHandler}
                  disabled={!selectedFile}
                  startIcon={<CloudUploadIcon />}
                >
                  Upload
                </Button>
              </Box>
            </Box>
          )}

          {/* Conditionally renders if rows recieves values  */}
          {rows.length > 0 && (
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5, 10, 20]}
              sx={{ textAlign: "center" }}
            />
          )}

          {/* Popup Message */}
          <Dialog open={fileUploaded} onClose={handleOkButtonClick}>
            <DialogTitle>File successfully uploaded</DialogTitle>
            <DialogContent>
              <Typography variant="body1">Your file has been successfully uploaded.</Typography>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleOkButtonClick} autoFocus>
                OK
              </Button>
            </DialogActions>
          </Dialog>

        </CardContent>
      </Card>
    </Box>
  );


}


export default SessionAttendance;
