import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import { Button } from "@mui/material";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const Orderlist = () => {
  const [order, setorder] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:7000/adminorder")
      .then((data) => setorder(data.data));
  }, []);

  console.log(order);
  return (
    <div>
      <TableContainer sx={{ width: "750px" }} component={Paper}>
        <Table sx={{ minWidth: 750 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {order.map((ORDER) => (
              <TableRow
                key={ORDER.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell sx={{ border: 0 }} component="th" scope="row">
                  {ORDER.name}
                </TableCell>
                <TableCell sx={{ border: 0 }} align="right">
                  {ORDER.email}
                </TableCell>
                <TableCell sx={{ border: 0 }} align="right">
                  {ORDER.status}
                </TableCell>
                <TableCell sx={{ border: 0 }} align="right">
                  <Button variant="contained">Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Orderlist;
