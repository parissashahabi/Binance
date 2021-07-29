import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import ArrowDownwardRoundedIcon from "@material-ui/icons/ArrowDownwardRounded";
import "../css/style.css";
import clsx from "clsx";
import "react-perfect-scrollbar/dist/css/styles.css";
import PerfectScrollbar from "react-perfect-scrollbar";
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
    padding: "0 0.25rem 15px 0.25rem",
    marginBottom: 0,
    minWidth: 0,
    wordWrap: "break-word",
    justifyContent: "space-between",
    backgroundClip: "border-box",
    alignItems: "center",
  },
  title: {
    fontSize: "20px",
    marginBottom: "0px",
  },
  tradeHistory: {
    position: "relative",
    height: "400px",
    // marginBottom: "10px",
  },
  textDanger: {
    color: "#e50202 !important",
  },
  tableResponsive: { display: "block", width: "100%", overflowX: "auto" },
}));

export default function TabPanel() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.cardHeader}>
        <h4 className={classes.title}>Trade History</h4>
      </div>
      <PerfectScrollbar>
        <div className={clsx(classes.cardBody, classes.tradeHistory)}>
          <div className={classes.tableResponsive}>
            <table class="table table-borderless">
              <thead>
                <tr>
                  <th scope="col">Price</th>
                  <th scope="col">Size</th>
                  <th scope="col">Time</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={classes.textDanger}>10393.50</td>
                  <td>0.010</td>
                  <td>14.109</td>
                </tr>
                <tr>
                  <td className={classes.textDanger}>10393.50</td>
                  <td>0.010</td>
                  <td>14.109</td>
                </tr>
                <tr>
                  <td className={classes.textDanger}>10393.50</td>
                  <td>0.010</td>
                  <td>14.109</td>
                </tr>
                <tr>
                  <td className={classes.textDanger}>10393.50</td>
                  <td>0.010</td>
                  <td>14.109</td>
                </tr>
                <tr>
                  <td className={classes.textDanger}>10393.50</td>
                  <td>0.010</td>
                  <td>14.109</td>
                </tr>
                <tr>
                  <td className={classes.textDanger}>10393.50</td>
                  <td>0.010</td>
                  <td>14.109</td>
                </tr>
                <tr>
                  <td className={classes.textDanger}>10393.50</td>
                  <td>0.010</td>
                  <td>14.109</td>
                </tr>
                <tr>
                  <td className={classes.textDanger}>10393.50</td>
                  <td>0.010</td>
                  <td>14.109</td>
                </tr>
                <tr>
                  <td className={classes.textDanger}>10393.50</td>
                  <td>0.010</td>
                  <td>14.109</td>
                </tr>
                <tr>
                  <td className={classes.textDanger}>10393.50</td>
                  <td>0.010</td>
                  <td>14.109</td>
                </tr>
                <tr>
                  <td className={classes.textDanger}>10393.50</td>
                  <td>0.010</td>
                  <td>14.109</td>
                </tr>
                <tr>
                  <td className={classes.textDanger}>10393.50</td>
                  <td>0.010</td>
                  <td>14.109</td>
                </tr>
                <tr>
                  <td className={classes.textDanger}>10393.50</td>
                  <td>0.010</td>
                  <td>14.109</td>
                </tr>
                <tr>
                  <td className={classes.textDanger}>10393.50</td>
                  <td>0.010</td>
                  <td>14.109</td>
                </tr>
                <tr>
                  <td className={classes.textDanger}>10393.50</td>
                  <td>0.010</td>
                  <td>14.109</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </PerfectScrollbar>
    </div>
  );
}
