import { Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Useauth from "../../../Hook/Useauth";

const Book = () => {
  const { user } = Useauth();
  const [data, setdata] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:7000/order?email=${user.email}`)
      .then((data) => setdata(data.data));
  }, [user.email]);
  return (
    <div>
      <Box sx={{ flexGrow: 1, mt: 5 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {data.map((DATA, index) => (
            <Grid
              key={index}
              sx={{ textAlign: "center" }}
              item
              xs={2}
              sm={4}
              md={4}
            >
              <Paper sx={{ py: 5, px: 5 }} elevation={3}>
                <img style={{ width: "20%" }} src={DATA.img} alt="" />
                <Typography sx={{ fontWeight: "bold", my: 1 }}>
                  {DATA.name}
                </Typography>
                <Typography
                  style={{ fontWeight: "700", color: "#f63e7b", mb: 2 }}
                >
                  ${DATA.price}
                </Typography>
                <Typography>{DATA.description}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default Book;
