import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import "../css/style.css";
import DepthChart from "./depthChart";
import "react-perfect-scrollbar/dist/css/styles.css";
import PerfectScrollbar from "react-perfect-scrollbar";
import clsx from "clsx";
const useStyles = makeStyles((theme) => ({
  root: {
    background: "#131722",
    position: "relative",
    //display: "flex",
    flexWrap: "wrap",
    marginRight: "-10px",
    marginLeft: "-10px",
  },
  cardBody: {
    flex: "1 1 auto",
    minHeight: "4px",
    padding: "1rem 0.25rem 0rem 0.25rem",
    position: "relative",
    //height: "400px",
    //marginBottom: "10px",
  },
  cardHeader: {
    position: "relative",
    display: "flex",
    color: "#F4F4F4",
    borderBottom: "1px solid #363c4e",
    padding: "0 0.25rem 0.53rem 0.25rem",
    marginBottom: 0,
    minWidth: 0,
    wordWrap: "break-word",
    justifyContent: "space-between",
    backgroundClip: "border-box",
    alignItems: "center",
  },
  fixedHeight: {
    position: "relative",
    height: "400px",
    // marginBottom: "10px",
  },
  title: {
    fontSize: "20px",
    marginBottom: "0px",
  },
}));

export default function TabPanel() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.cardHeader}>
        <h4 className={classes.title}>Depth Chart</h4>
      </div>
      <PerfectScrollbar>
        <div className={clsx(classes.cardBody, classes.fixedHeight)}>
          <DepthChart />
        </div>
      </PerfectScrollbar>
    </div>
  );
}
