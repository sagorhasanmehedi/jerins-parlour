import { Container, Grid, Paper, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import Navigation from "../Seard/Nevigation/Navigation";
import login1 from "../../Image_Icon/Icon/Group 1373.png";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";
import Useauth from "../../Hook/Useauth";

const Detailpage = () => {
  const { id } = useParams();
  const { user } = Useauth();
  const [services, setservises] = useState({});

  useEffect(() => {
    axios
      .get(`https://secret-journey-43006.herokuapp.com/singaleservice/${id}`)
      .then((data) => setservises(data.data));
  }, [id]);

  const handelsubmit = (e) => {
    const data = {
      name: services.name,
      description: services.description,
      price: services.price,
      img: services.img,
      email: user.email,
    };

    axios
      .post("https://secret-journey-43006.herokuapp.com/products", { data })
      .then((data) => {
        if (data.data.insertedId) {
          window.confirm("Order pleace");
        }
      });

    e.preventDefault();
  };

  return (
    <div>
      <Navigation />

      <div>
        <Container sx={{ py: 7 }}>
          <Typography
            variant="h4"
            sx={{ textAlign: "center", fontWeight: "bold", mb: 10 }}
          >
            Bye Now <span style={{ color: "#f63e7b" }}>Pay Later</span>
          </Typography>

          <Box sx={{ flexGrow: 1, mt: 5 }}>
            <Paper
              sx={{
                display: "flex",
                justifyContent: "space-between",
                pl: 10,
              }}
              elevation={3}
            >
              <Box sx={{ width: "500px", p: 7 }}>
                <img style={{ width: "20%" }} src={login1} alt="" />
                <Typography sx={{ fontWeight: "bold", my: 1 }}>
                  {services.name}
                </Typography>
                <Typography
                  style={{ fontWeight: "700", color: "#f63e7b", mb: 2 }}
                >
                  ${services.price}
                </Typography>
                <Box>
                  <Typography>{services.description}</Typography>
                </Box>
              </Box>
              <Box>
                <div className="form-parent">
                  <form
                    onSubmit={handelsubmit}
                    style={{ marginTop: 0 }}
                    className="from"
                  >
                    <h2 style={{ marginTop: "-25px", marginBottom: "35px" }}>
                      Bye Now
                    </h2>
                    <TextField
                      sx={{ width: "100%", mb: 3 }}
                      id="standard-basic"
                      defaultValue={user?.displayName}
                      variant="standard"
                    />
                    <br />

                    <TextField
                      sx={{ width: "100%", mb: 3 }}
                      id="standard-basic"
                      defaultValue={user?.email}
                      variant="standard"
                    />
                    <br />
                    <TextField
                      sx={{ width: "100%", mb: 3 }}
                      id="standard-basic"
                      defaultValue="Addres"
                      variant="standard"
                    />
                    <br />

                    <button className="form-button">Bye Now </button>
                  </form>
                </div>
              </Box>
            </Paper>
          </Box>
        </Container>
      </div>
    </div>
  );
};

export default Detailpage;
