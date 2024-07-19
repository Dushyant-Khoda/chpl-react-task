"use client";

import { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const SizeArray = [6, 7, 8, 9];
const ColoreArray = ["#E6DBCE", "#FF2828", "#33FB01", "#000000"];
export default function Dashboard() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        height: "calc(100% - 75px)",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Grid
        container
        spacing={0}
        style={{ display: "flex", alignItems: "center" }}
      >
        <Grid item xs={3} style={{ height: "100%" }}>
          <div
            style={{
              textAlign: "left",
              color: "white",
              paddingLeft: 24,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <div style={{ width: "100%" }}>
              <h1>Nike Air Max 1</h1>
              <p>$195.55</p>
            </div>
            <div style={{ width: "100%" }}>
              <p>Colors</p>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                }}
              >
                {ColoreArray.map((item, key) => {
                  return (
                    <div
                      style={{
                        height: 20,
                        width: 20,
                        display: "flex",
                        alignItems: "center",
                        background: item,
                        borderRadius: "50%",
                        marginRight: 10,
                      }}
                    ></div>
                  );
                })}
              </div>
            </div>
            <div style={{ width: "100%" }}>
              <p>Size</p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {SizeArray.map((item, key) => {
                  return (
                    <div
                      style={{
                        height: 40,
                        width: 40,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "black",
                        background: key == 0 ? "white" : "transparent",
                        borderRadius: "50%",
                        border: "1px solid black",
                        fontWeight: 700,
                        marginRight: 10,
                        marginBottom: 20,
                      }}
                    >
                      {item}
                    </div>
                  );
                })}
              </div>
            </div>

            <Button
              variant="contained"
              style={{ background: "#ED3B6B", width: 120 }}
            >
              BUY
            </Button>
          </div>
        </Grid>
        <Grid item xs={6}>
          <img src="shoes.png" style={{ height: "600px", width: "100%" }}></img>
        </Grid>

        <Grid item xs={3}>
          <img
            src="CircleImage.svg"
            style={{ height: "600px", width: "100%" }}
          ></img>
        </Grid>
      </Grid>
    </Box>
  );
}
