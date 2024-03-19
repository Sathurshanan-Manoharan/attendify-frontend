import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "../axiosConfiguration/axiosconfig";

function SessionAttendance() {
  const { id } = useParams();
  const [rows, setRows] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/v1/attendance/${id}`);
        if (response.data.status === "success") {
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
        } 
        
      } catch (error) {
        console.error(error); // Handle errors appropriately
      }
    };

    fetchData();
  }, []);

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
          <CardContent>
            <Typography variant="h6" color="#004AAD" fontWeight="bold">
              Attendance Overview
            </Typography>
            <Divider sx={{ marginBottom: "20px", marginTop: "12px" }}></Divider>
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5, 10, 20]}
              sx={{ textAlign: "center" }}
            />
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}

export default SessionAttendance;
