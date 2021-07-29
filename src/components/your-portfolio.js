import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
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
    padding: "0 0.25rem 0.53rem 0.25rem",
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
  balanceWidget: {
    position: "relative",
    height: "400px",
    // marginBottom: "10px",
  },
  h3: {
    marginBottom: "0.5rem",
    fontWeight: "500",
    fontSize: "1.5rem",
    lineHeight: "1.2",
    color: "#EFF6EE",
  },
  h6: {
    marginBottom: "0.5rem",
    fontWeight: "500",
    fontSize: "0.875rem",
    lineHeight: "1.2",
    color: "#EFF6EE",
  },
  totalBlance: { padding: "1rem 0px 2rem", textAlign: "center" },
  tableResponsive: { display: "block", width: "100%", overflowX: "auto" },
}));

export default function TabPanel() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.cardHeader}>
        <h4 className={classes.title}>Your Portfolio </h4>
      </div>
      <PerfectScrollbar>
        <div className={clsx(classes.cardBody, classes.balanceWidget)}>
          <div className={classes.totalBlance}>
            <h3 className={classes.h3}>$ 63411.00</h3>
            <h6 className={classes.h6}>Total Balance</h6>
          </div>

          <div className={classes.tableResponsive}>
            <table class="table">
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Size</th>
                  <th>USD</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>BTC</td>
                  <td>0.000242</td>
                  <td>0.125 USD</td>
                </tr>
                <tr>
                  <td>LTC</td>
                  <td>0.000242 </td>
                  <td>0.125 USD</td>
                </tr>
                <tr>
                  <td>XRP</td>
                  <td>0.000242 </td>
                  <td>0.125 USD</td>
                </tr>
                <tr>
                  <td>ETH</td>
                  <td>0.000242 </td>
                  <td>0.125 USD</td>
                </tr>
                <tr>
                  <td>XTZ</td>
                  <td>0.000242 </td>
                  <td>0.125 USD</td>
                </tr>
                <tr>
                  <td>EOS</td>
                  <td>0.000242 </td>
                  <td>0.125 USD</td>
                </tr>
                <tr>
                  <td>Dash</td>
                  <td>0.000242 </td>
                  <td>0.125 USD</td>
                </tr>
                <tr>
                  <td>USDT</td>
                  <td>0.000242 </td>
                  <td>0.125 USD</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </PerfectScrollbar>
    </div>
  );
}
