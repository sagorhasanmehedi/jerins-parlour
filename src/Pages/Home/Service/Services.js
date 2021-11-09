import { Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import logo1 from "../../../Image_Icon/Icon/Group 1372.png";
import logo2 from "../../../Image_Icon/Icon/Group 1373.png";
import logo3 from "../../../Image_Icon/Icon/Group 1374.png";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import "./Service.css";
import axios from "axios";
import { useHistory } from "react-router";

const Services = () => {
  const [services, setservices] = useState([]);

  // get services from database
  useEffect(() => {
    axios
      .get("https://secret-journey-43006.herokuapp.com/services")
      .then((data) => setservices(data.data));
  }, []);

  const history = useHistory();
  const handeldetail = (id) => {
    history.push(`/detailpage/${id}`);
  };

  return (
    <div>
      <Container sx={{ py: 7 }}>
        <Typography
          variant="h4"
          sx={{ textAlign: "center", fontWeight: "bold" }}
        >
          Our Awesome <span style={{ color: "#f63e7b" }}>Services</span>
        </Typography>

        <Box sx={{ flexGrow: 1, mt: 5 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {services.map((SERVICES, index) => (
              <Grid
                key={index}
                sx={{ textAlign: "center" }}
                item
                xs={2}
                sm={4}
                md={4}
              >
                <Paper sx={{ py: 5, px: 5 }} elevation={3}>
                  <img style={{ width: "20%" }} src={SERVICES.img} alt="" />
                  <Typography sx={{ fontWeight: "bold", my: 1 }}>
                    {SERVICES.name}
                  </Typography>
                  <Typography
                    style={{ fontWeight: "700", color: "#f63e7b", mb: 2 }}
                  >
                    ${SERVICES.price}
                  </Typography>
                  <Typography>{SERVICES.description}</Typography>
                  <button
                    onClick={() => handeldetail(SERVICES._id)}
                    className="card-button"
                  >
                    Buy Now
                  </button>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default Services;
