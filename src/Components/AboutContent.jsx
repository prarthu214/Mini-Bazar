import { Box, Grid2, Typography } from "@mui/material";
import React from "react";
import about from '../Assets/Images/about-3.jpg'

export default function AboutContent() {
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Grid2
        container
        // spacing={2}
        sx={{ backgroundColor: "#acab753b", borderRadius: "20px" }}
      >
        <Grid2 size={{ xs: 12, sm: 6 }}>
          <img
            src={about}
            alt="picture"
            style={{ width: "100%", borderRadius: "20px" }}
          />
        </Grid2>
        <Grid2
          size={{ xs: 12, sm: 6 }}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              p: 3,
              textAlign: "justify",
            }}
          >
            <Typography
              gutterBottom
              sx={{ fontWeight: "900", fontSize: "40px" }}
            >
              About <span style={{ color: "#5a0c4a" }}>Us</span>
            </Typography>
            <Typography
              variant="subtitle2"
              gutterBottom
              sx={{ fontWeight: "900" }}
            >
              subtitle of website
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ textAlign: "justify" }}
            >
             The Mini Bazar is in September and it's held in the street. 
             For arms dealers, it's a profitable bazaar. With no money to pay rent, and no relatives to take her in, the family are sleeping in the bazaar. 
             There will be a bazaar with more than 100 food, drink, clothes and craft stalls.
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              sx={{ textAlign: "justify" }}
            >
              The Mini Bazar is in September and it's held in the street. 
             For arms dealers, it's a profitable bazaar. With no money to pay rent, and no relatives to take her in, the family are sleeping in the bazaar. 
             There will be a bazaar with more than 100 food, drink, clothes and craft stalls.
            </Typography>
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
}