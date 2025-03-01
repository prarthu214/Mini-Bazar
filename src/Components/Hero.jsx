import { Box, Typography } from "@mui/material";
import React from "react";
import background from '../Assets/Images/img6.jpg'

export default function Hero() {
  return (
    <Box sx={{
      width: "100%",
      height: "90vh",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundImage: `url(${background})`, // Add background image
    }}>
      <Box sx={{
        width: "100%",
        height: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        textColor:"white",
        backgroundColor: "rgba(0,0,0,0.5)", // Add overlay for better text readability
      }}>
      
        <Typography
          sx={{
            fontWeight: "900",
            fontSize: { xs: "50px", sm: "80px" },
            textTransform: "uppercase",
            color: "white",
          }}
          gutterBottom
        >
          Welcome to MiniBazar
        </Typography>
        <Typography
          gutterBottom
          sx={{ fontWeight: "900", fontSize: "30px", color: "white" }}
        > Freshness overload!
         
        </Typography>
        <Typography
          gutterBottom
          sx={{ width: "80%", fontWeight: "600", color: "#000000b8" }}
        >
         

        </Typography>
      </Box>
    </Box>
  );
}