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
  orderBook: {
    position: "relative",
    height: "400px",
    //marginBottom: "10px",
  },
  orderBookDivider: {
    textAlign: "center",
    padding: "15px 0px",
  },
  arrowDown: {
    display: "inline-block",
    font: "normal normal normal 24px/1",
    fontSize: "inherit",
    textRendering: "auto",
    lineHeight: "inherit",
  },
  textDanger: {
    color: "#e50202 !important",
  },
  textSuccess: {
    color: "#10d876 !important",
  },
}));

export default function TabPanel() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.cardHeader}>
        <h4 className={classes.title}>Order Book</h4>
      </div>
      <PerfectScrollbar>
        <div className={clsx(classes.cardBody, classes.orderBook)}>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Price (USD)</th>
                <th scope="col">Price (BTC)</th>
                <th scope="col">Total</th>
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
            </tbody>
          </table>

          <div className={classes.orderBookDivider}>
            <h6 className={classes.textDanger}>
              {" "}
              <ArrowDownwardRoundedIcon className={classes.arrowDown} /> 6587.35
            </h6>
            <span>6520.220 / 4835.00</span>
          </div>

          <table class="table">
            <thead>
              <tr>
                <th scope="col">Price (USD)</th>
                <th scope="col">Price (BTC)</th>
                <th scope="col">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={classes.textSuccess}>10393.50</td>
                <td>0.010</td>
                <td>14.109</td>
              </tr>
              <tr>
                <td className={classes.textSuccess}>10393.50</td>
                <td>0.010</td>
                <td>14.109</td>
              </tr>
              <tr>
                <td className={classes.textSuccess}>10393.50</td>
                <td>0.010</td>
                <td>14.109</td>
              </tr>
              <tr>
                <td className={classes.textSuccess}>10393.50</td>
                <td>0.010</td>
                <td>14.109</td>
              </tr>
              <tr>
                <td className={classes.textSuccess}>10393.50</td>
                <td>0.010</td>
                <td>14.109</td>
              </tr>
            </tbody>
          </table>
        </div>
      </PerfectScrollbar>
    </div>
  );
}
