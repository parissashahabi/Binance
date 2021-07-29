import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Tab, Nav } from "react-bootstrap";
import "../css/style.css";
import StarIcon from "@material-ui/icons/Star";
import "react-perfect-scrollbar/dist/css/styles.css";
import PerfectScrollbar from "react-perfect-scrollbar";
import clsx from "clsx";
const useStyles = makeStyles((theme) => ({
  root: {
    background: "#131722",
    position: "relative",
    // display: "flex",
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
    padding: "0 0.25rem 0.9rem 0.25rem",
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
    //marginBottom: "10px",
  },
  navPills: {
    lineHeight: "initial",
    "& a": {
      padding: "0px 7px",
      color: "#898990",
      borderRadius: "0.25rem",
      fontWeight: "500",
      "&.active": {
        backgroundColor: "transparent !important",
        color: "#5d78ff !important",
        opacity: "1",
      },
    },
  },
  navTabs: {
    backgroundColor: "rgba(137, 137, 144, 0.25) !important",
    border: "0",
    borderRadius: "4px",

    "& a": {
      borderRadius: "4px",
      color: "#898990",
      borderColor: "transparent !important",
      "&.active": {
        borderColor: "transparent !important",
        color: "rgb(93, 120, 255) !important",
        backgroundColor: "rgba(93, 120, 255, 0.25) !important",
      },
    },
  },
  star: {
    display: "inline-block",
    font: "normal normal normal 24px/1",
    fontSize: "inherit",
    textRendering: "auto",
    lineHeight: "inherit",
  },
}));

export default function TabPanel() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Tab.Container defaultActiveKey="STAR">
        <div>
          <div className={classes.cardHeader}>
            <Nav variant="pills" className={classes.navPills}>
              <Nav.Link eventKey="STAR">
                <StarIcon className={classes.star} />
              </Nav.Link>
              <Nav.Link eventKey="BTC">BTC</Nav.Link>
              <Nav.Link eventKey="ETH">ETH</Nav.Link>
              <Nav.Link eventKey="NEO">NEO</Nav.Link>
              <Nav.Link eventKey="USDT">USDT</Nav.Link>
              <Nav.Link eventKey="DAI">DAI</Nav.Link>
            </Nav>
          </div>
          <PerfectScrollbar>
            <div className={clsx(classes.cardBody, classes.fixedHeight)}>
              <Tab.Content>
                <Tab.Pane eventKey="STAR">
                  <table class="table">
                    <thead>
                      <tr>
                        <th>Pairs</th>
                        <th>Last Price</th>
                        <th>Change</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <StarIcon className={classes.star} /> ETH/BTC
                        </td>
                        <td>0.00020255</td>
                        <td class="red">-2.58%</td>
                      </tr>
                      <tr>
                        <td>
                          <StarIcon className={classes.star} /> KCS/BTC
                        </td>
                        <td>0.00013192</td>
                        <td class="green">+5.6%</td>
                      </tr>
                      <tr>
                        <td>
                          <StarIcon className={classes.star} /> XRP/BTC
                        </td>
                        <td>0.00002996</td>
                        <td class="red">-1.55%</td>
                      </tr>
                      <tr>
                        <td>
                          <StarIcon className={classes.star} /> VET/BTC
                        </td>
                        <td>0.00000103</td>
                        <td class="green">+1.8%</td>
                      </tr>
                    </tbody>
                  </table>
                </Tab.Pane>
                <Tab.Pane eventKey="BTC">
                  <table class="table">
                    <thead>
                      <tr>
                        <th>Pairs</th>
                        <th>Last Price</th>
                        <th>Change</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <StarIcon className={classes.star} /> ETH/BTC
                        </td>
                        <td>0.00020255</td>
                        <td class="red">-2.58%</td>
                      </tr>
                      <tr>
                        <td>
                          <StarIcon className={classes.star} /> KCS/BTC
                        </td>
                        <td>0.00013192</td>
                        <td class="green">+5.6%</td>
                      </tr>
                      <tr>
                        <td>
                          <StarIcon className={classes.star} /> XRP/BTC
                        </td>
                        <td>0.00002996</td>
                        <td class="red">-1.55%</td>
                      </tr>
                      <tr>
                        <td>
                          <StarIcon className={classes.star} /> VET/BTC
                        </td>
                        <td>0.00000103</td>
                        <td class="green">+1.8%</td>
                      </tr>
                      <tr>
                        <td>
                          <StarIcon className={classes.star} /> EOS/BTC
                        </td>
                        <td>0.00000103</td>
                        <td class="red">-2.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <StarIcon className={classes.star} /> BTT/BTC
                        </td>
                        <td>0.00002303</td>
                        <td class="red">-1.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <StarIcon className={classes.star} /> LTC/BTC
                        </td>
                        <td>0.03520103</td>
                        <td class="green">+1.5%</td>
                      </tr>
                      <tr>
                        <td>
                          <StarIcon className={classes.star} /> TRX/BTC
                        </td>
                        <td>0.00330103</td>
                        <td class="red">-3.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <StarIcon className={classes.star} /> BSV/BTC
                        </td>
                        <td>0.00300103</td>
                        <td class="green">+2.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <StarIcon className={classes.star} /> COTI/BTC
                        </td>
                        <td>0.003500103</td>
                        <td class="green">+2.85%</td>
                      </tr>
                      <tr>
                        <td>
                          <StarIcon className={classes.star} /> XYT/BTC
                        </td>
                        <td>0.00003103</td>
                        <td class="green">+3.55%</td>
                      </tr>
                      <tr>
                        <td>
                          <StarIcon className={classes.star} /> BNB/BTC
                        </td>
                        <td>0.003500103</td>
                        <td class="red">-2.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <StarIcon className={classes.star} /> XMR/BTC
                        </td>
                        <td>0.003500103</td>
                        <td class="red">-1.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <StarIcon className={classes.star} /> TRY/BTC
                        </td>
                        <td>0.00000123</td>
                        <td class="red">-2.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <StarIcon className={classes.star} /> ADA/BTC
                        </td>
                        <td>0.00050103</td>
                        <td class="green">+5.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <StarIcon className={classes.star} /> NEO/BTC
                        </td>
                        <td>0.00340103</td>
                        <td class="red">-1.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <StarIcon className={classes.star} /> XLM/BTC
                        </td>
                        <td>0.00035103</td>
                        <td class="green">+5.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <StarIcon className={classes.star} /> ENQ/BTC
                        </td>
                        <td>0.00354103</td>
                        <td class="green">+2.02%</td>
                      </tr>
                      <tr>
                        <td>
                          <StarIcon className={classes.star} /> AVA/BTC
                        </td>
                        <td>0.02535103</td>
                        <td class="green">+3.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <StarIcon className={classes.star} /> AMB/BTC
                        </td>
                        <td>0.05335103</td>
                        <td class="green">+1.0%</td>
                      </tr>
                      <tr>
                        <td>
                          <StarIcon className={classes.star} /> MAP/BTC
                        </td>
                        <td>0.00234103</td>
                        <td class="red">-2.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <StarIcon className={classes.star} /> GO/BTC
                        </td>
                        <td>0.00354103</td>
                        <td class="red">-6.50%</td>
                      </tr>
                      <tr>
                        <td>
                          <StarIcon className={classes.star} /> KICK/BTC
                        </td>
                        <td>0.02053103</td>
                        <td class="red">-6.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <StarIcon className={classes.star} /> DBC/BTC
                        </td>
                        <td>0.02535103</td>
                        <td class="green">+7.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <StarIcon className={classes.star} /> GGC/BTC
                        </td>
                        <td>0.00353103</td>
                        <td class="red">-4.05%</td>
                      </tr>
                    </tbody>
                  </table>
                </Tab.Pane>
                <Tab.Pane eventKey="ETH">
                  <table class="table">
                    <thead>
                      <tr>
                        <th>Pairs</th>
                        <th>Last Price</th>
                        <th>Change</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <StarIcon className={classes.star} /> BTC/ETH
                        </td>
                        <td>0.00020255</td>
                        <td class="green">+1.58%</td>
                      </tr>
                      <tr>
                        <td>
                          <StarIcon className={classes.star} /> KCS/ETH
                        </td>
                        <td>0.00013192</td>
                        <td class="red">-0.6%</td>
                      </tr>
                      <tr>
                        <td>
                          <StarIcon className={classes.star} /> XRP/ETH
                        </td>
                        <td>0.00002996</td>
                        <td class="red">-0.55%</td>
                      </tr>
                      <tr>
                        <td>
                          <StarIcon className={classes.star} /> VET/ETH
                        </td>
                        <td>0.00000103</td>
                        <td class="green">+1.8%</td>
                      </tr>
                      <tr>
                        <td>
                          <StarIcon className={classes.star} /> EOS/ETH
                        </td>
                        <td>0.00000103</td>
                        <td class="red">-2.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <StarIcon className={classes.star} /> BTT/ETH
                        </td>
                        <td>0.00002303</td>
                        <td class="red">-1.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <StarIcon className={classes.star} /> LTC/ETH
                        </td>
                        <td>0.03520103</td>
                        <td class="green">+1.5%</td>
                      </tr>
                      <tr>
                        <td>
                          <StarIcon className={classes.star} /> TRX/ETH
                        </td>
                        <td>0.00330103</td>
                        <td class="red">-3.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <StarIcon className={classes.star} /> BSV/ETH
                        </td>
                        <td>0.00300103</td>
                        <td class="green">+2.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <StarIcon className={classes.star} /> COTI/ETH
                        </td>
                        <td>0.003500103</td>
                        <td class="green">+2.85%</td>
                      </tr>
                      <tr>
                        <td>
                          <StarIcon className={classes.star} /> XYT/ETH
                        </td>
                        <td>0.00003103</td>
                        <td class="green">+3.55%</td>
                      </tr>
                      <tr>
                        <td>
                          <StarIcon className={classes.star} /> BNB/ETH
                        </td>
                        <td>0.003500103</td>
                        <td class="red">-2.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <StarIcon className={classes.star} /> XMR/ETH
                        </td>
                        <td>0.003500103</td>
                        <td class="red">-1.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <StarIcon className={classes.star} /> TRY/ETH
                        </td>
                        <td>0.00000123</td>
                        <td class="red">-2.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <StarIcon className={classes.star} /> ADA/ETH
                        </td>
                        <td>0.00050103</td>
                        <td class="green">+5.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <StarIcon className={classes.star} /> NEO/ETH
                        </td>
                        <td>0.00340103</td>
                        <td class="red">-1.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <StarIcon className={classes.star} /> XLM/ETH
                        </td>
                        <td>0.00035103</td>
                        <td class="green">+5.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <StarIcon className={classes.star} /> ENQ/ETH
                        </td>
                        <td>0.00354103</td>
                        <td class="green">+2.02%</td>
                      </tr>
                      <tr>
                        <td>
                          <StarIcon className={classes.star} /> AVA/ETH
                        </td>
                        <td>0.02535103</td>
                        <td class="green">+3.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <StarIcon className={classes.star} /> AMB/ETH
                        </td>
                        <td>0.05335103</td>
                        <td class="green">+1.0%</td>
                      </tr>
                      <tr>
                        <td>
                          <StarIcon className={classes.star} /> MAP/ETH
                        </td>
                        <td>0.00234103</td>
                        <td class="red">-2.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <StarIcon className={classes.star} /> GO/ETH
                        </td>
                        <td>0.00354103</td>
                        <td class="red">-6.50%</td>
                      </tr>
                      <tr>
                        <td>
                          <StarIcon className={classes.star} /> KICK/ETH
                        </td>
                        <td>0.02053103</td>
                        <td class="red">-6.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <StarIcon className={classes.star} /> DBC/ETH
                        </td>
                        <td>0.02535103</td>
                        <td class="green">+7.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <StarIcon className={classes.star} /> GGC/ETH
                        </td>
                        <td>0.00353103</td>
                        <td class="red">-4.05%</td>
                      </tr>
                    </tbody>
                  </table>
                </Tab.Pane>
                <Tab.Pane eventKey="NEO">
                  <table class="table">
                    <thead>
                      <tr>
                        <th>Pairs</th>
                        <th>Last Price</th>
                        <th>Change</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <StarIcon className={classes.star} /> ETH/NEO
                        </td>
                        <td>0.00350255</td>
                        <td class="red">-6.58%</td>
                      </tr>
                      <tr>
                        <td>
                          <StarIcon className={classes.star} /> KCS/NEO
                        </td>
                        <td>0.00013192</td>
                        <td class="green">+0.6%</td>
                      </tr>
                      <tr>
                        <td>
                          <StarIcon className={classes.star} /> XRP/NEO
                        </td>
                        <td>0.00002996</td>
                        <td class="red">-0.55%</td>
                      </tr>
                      <tr>
                        <td>
                          <StarIcon className={classes.star} /> VET/NEO
                        </td>
                        <td>0.00000103</td>
                        <td class="green">+1.8%</td>
                      </tr>
                      <tr>
                        <td>
                          <StarIcon className={classes.star} /> EOS/NEO
                        </td>
                        <td>0.00000103</td>
                        <td class="red">-2.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <StarIcon className={classes.star} /> BTT/NEO
                        </td>
                        <td>0.00002303</td>
                        <td class="red">-1.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <StarIcon className={classes.star} /> LTC/NEO
                        </td>
                        <td>0.03520103</td>
                        <td class="green">+1.5%</td>
                      </tr>
                      <tr>
                        <td>
                          <StarIcon className={classes.star} /> TRX/NEO
                        </td>
                        <td>0.00330103</td>
                        <td class="red">-3.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <StarIcon className={classes.star} /> BSV/NEO
                        </td>
                        <td>0.00300103</td>
                        <td class="green">+2.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <StarIcon className={classes.star} /> COTI/NEO
                        </td>
                        <td>0.003500103</td>
                        <td class="green">+2.85%</td>
                      </tr>
                      <tr>
                        <td>
                          <StarIcon className={classes.star} /> XYT/NEO
                        </td>
                        <td>0.00003103</td>
                        <td class="green">+3.55%</td>
                      </tr>
                      <tr>
                        <td>
                          <StarIcon className={classes.star} /> BNB/NEO
                        </td>
                        <td>0.003500103</td>
                        <td class="red">-2.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <StarIcon className={classes.star} /> XMR/NEO
                        </td>
                        <td>0.003500103</td>
                        <td class="red">-1.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <StarIcon className={classes.star} /> TRY/NEO
                        </td>
                        <td>0.00000123</td>
                        <td class="red">-2.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <StarIcon className={classes.star} /> ADA/NEO
                        </td>
                        <td>0.00050103</td>
                        <td class="green">+5.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <StarIcon className={classes.star} /> NEO/NEO
                        </td>
                        <td>0.00340103</td>
                        <td class="red">-1.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <StarIcon className={classes.star} /> XLM/NEO
                        </td>
                        <td>0.00035103</td>
                        <td class="green">+5.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <StarIcon className={classes.star} /> ENQ/NEO
                        </td>
                        <td>0.00354103</td>
                        <td class="green">+2.02%</td>
                      </tr>
                      <tr>
                        <td>
                          <StarIcon className={classes.star} /> AVA/NEO
                        </td>
                        <td>0.02535103</td>
                        <td class="green">+3.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <StarIcon className={classes.star} /> AMB/NEO
                        </td>
                        <td>0.05335103</td>
                        <td class="green">+1.0%</td>
                      </tr>
                      <tr>
                        <td>
                          <StarIcon className={classes.star} /> MAP/NEO
                        </td>
                        <td>0.00234103</td>
                        <td class="red">-2.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <StarIcon className={classes.star} /> GO/NEO
                        </td>
                        <td>0.00354103</td>
                        <td class="red">-6.50%</td>
                      </tr>
                      <tr>
                        <td>
                          <StarIcon className={classes.star} /> KICK/NEO
                        </td>
                        <td>0.02053103</td>
                        <td class="red">-6.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <StarIcon className={classes.star} /> DBC/NEO
                        </td>
                        <td>0.02535103</td>
                        <td class="green">+7.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <StarIcon className={classes.star} /> GGC/NEO
                        </td>
                        <td>0.00353103</td>
                        <td class="red">-4.05%</td>
                      </tr>
                    </tbody>
                  </table>
                </Tab.Pane>
                <Tab.Pane eventKey="USDT">
                  <table class="table">
                    <thead>
                      <tr>
                        <th>Pairs</th>
                        <th>Last Price</th>
                        <th>Change</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <StarIcon className={classes.star} /> ETH/USDT
                        </td>
                        <td>0.00350255</td>
                        <td class="red">-2.58%</td>
                      </tr>
                      <tr>
                        <td>
                          <StarIcon className={classes.star} /> KCS/USDT
                        </td>
                        <td>0.00013192</td>
                        <td class="green">+6.6%</td>
                      </tr>
                      <tr>
                        <td>
                          <StarIcon className={classes.star} /> XRP/USDT
                        </td>
                        <td>0.00002996</td>
                        <td class="red">-0.55%</td>
                      </tr>
                      <tr>
                        <td>
                          <StarIcon className={classes.star} /> VET/USDT
                        </td>
                        <td>0.00000103</td>
                        <td class="green">+1.8%</td>
                      </tr>
                      <tr>
                        <td>
                          <StarIcon className={classes.star} /> EOS/USDT
                        </td>
                        <td>0.00000103</td>
                        <td class="red">-2.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <StarIcon className={classes.star} /> BTT/USDT
                        </td>
                        <td>0.00002303</td>
                        <td class="red">-1.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <StarIcon className={classes.star} /> LTC/USDT
                        </td>
                        <td>0.03520103</td>
                        <td class="green">+1.5%</td>
                      </tr>
                      <tr>
                        <td>
                          <StarIcon className={classes.star} /> TRX/USDT
                        </td>
                        <td>0.00330103</td>
                        <td class="red">-3.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <StarIcon className={classes.star} /> BSV/USDT
                        </td>
                        <td>0.00300103</td>
                        <td class="green">+2.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <StarIcon className={classes.star} /> COTI/USDT
                        </td>
                        <td>0.003500103</td>
                        <td class="green">+2.85%</td>
                      </tr>
                      <tr>
                        <td>
                          <StarIcon className={classes.star} /> XYT/USDT
                        </td>
                        <td>0.00003103</td>
                        <td class="green">+3.55%</td>
                      </tr>
                      <tr>
                        <td>
                          <StarIcon className={classes.star} /> BNB/USDT
                        </td>
                        <td>0.003500103</td>
                        <td class="red">-2.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <StarIcon className={classes.star} /> XMR/USDT
                        </td>
                        <td>0.003500103</td>
                        <td class="red">-1.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <StarIcon className={classes.star} /> TRY/USDT
                        </td>
                        <td>0.00000123</td>
                        <td class="red">-2.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <StarIcon className={classes.star} /> ADA/USDT
                        </td>
                        <td>0.00050103</td>
                        <td class="green">+5.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <StarIcon className={classes.star} /> USDT/USDT
                        </td>
                        <td>0.00340103</td>
                        <td class="red">-1.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <StarIcon className={classes.star} /> XLM/USDT
                        </td>
                        <td>0.00035103</td>
                        <td class="green">+5.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <StarIcon className={classes.star} /> ENQ/USDT
                        </td>
                        <td>0.00354103</td>
                        <td class="green">+2.02%</td>
                      </tr>
                      <tr>
                        <td>
                          <StarIcon className={classes.star} /> AVA/USDT
                        </td>
                        <td>0.02535103</td>
                        <td class="green">+3.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <StarIcon className={classes.star} /> AMB/USDT
                        </td>
                        <td>0.05335103</td>
                        <td class="green">+1.0%</td>
                      </tr>
                      <tr>
                        <td>
                          <StarIcon className={classes.star} /> MAP/USDT
                        </td>
                        <td>0.00234103</td>
                        <td class="red">-2.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <StarIcon className={classes.star} /> GO/USDT
                        </td>
                        <td>0.00354103</td>
                        <td class="red">-6.50%</td>
                      </tr>
                      <tr>
                        <td>
                          <StarIcon className={classes.star} /> KICK/USDT
                        </td>
                        <td>0.02053103</td>
                        <td class="red">-6.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <StarIcon className={classes.star} /> DBC/USDT
                        </td>
                        <td>0.02535103</td>
                        <td class="green">+7.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <StarIcon className={classes.star} /> GGC/USDT
                        </td>
                        <td>0.00353103</td>
                        <td class="red">-4.05%</td>
                      </tr>
                    </tbody>
                  </table>
                </Tab.Pane>
                <Tab.Pane eventKey="DAI">
                  <table class="table">
                    <thead>
                      <tr>
                        <th>Pairs</th>
                        <th>Last Price</th>
                        <th>Change</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <StarIcon className={classes.star} /> ETH/DAI
                        </td>
                        <td>0.05320255</td>
                        <td class="green">+6.58%</td>
                      </tr>
                      <tr>
                        <td>
                          <StarIcon className={classes.star} /> KCS/DAI
                        </td>
                        <td>0.00013192</td>
                        <td class="green">+0.6%</td>
                      </tr>
                      <tr>
                        <td>
                          <StarIcon className={classes.star} /> XRP/DAI
                        </td>
                        <td>0.00002996</td>
                        <td class="red">-0.55%</td>
                      </tr>
                      <tr>
                        <td>
                          <StarIcon className={classes.star} /> VET/DAI
                        </td>
                        <td>0.00000103</td>
                        <td class="green">+1.8%</td>
                      </tr>
                      <tr>
                        <td>
                          <StarIcon className={classes.star} /> EOS/DAI
                        </td>
                        <td>0.00000103</td>
                        <td class="red">-2.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <StarIcon className={classes.star} /> BTT/DAI
                        </td>
                        <td>0.00002303</td>
                        <td class="red">-1.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <StarIcon className={classes.star} /> LTC/DAI
                        </td>
                        <td>0.03520103</td>
                        <td class="green">+1.5%</td>
                      </tr>
                      <tr>
                        <td>
                          <StarIcon className={classes.star} /> TRX/DAI
                        </td>
                        <td>0.00330103</td>
                        <td class="red">-3.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <StarIcon className={classes.star} /> BSV/DAI
                        </td>
                        <td>0.00300103</td>
                        <td class="green">+2.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <StarIcon className={classes.star} /> COTI/DAI
                        </td>
                        <td>0.003500103</td>
                        <td class="green">+2.85%</td>
                      </tr>
                      <tr>
                        <td>
                          <StarIcon className={classes.star} /> XYT/DAI
                        </td>
                        <td>0.00003103</td>
                        <td class="green">+3.55%</td>
                      </tr>
                      <tr>
                        <td>
                          <StarIcon className={classes.star} /> BNB/DAI
                        </td>
                        <td>0.003500103</td>
                        <td class="red">-2.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <StarIcon className={classes.star} /> XMR/DAI
                        </td>
                        <td>0.003500103</td>
                        <td class="red">-1.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <StarIcon className={classes.star} /> TRY/DAI
                        </td>
                        <td>0.00000123</td>
                        <td class="red">-2.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <StarIcon className={classes.star} /> ADA/DAI
                        </td>
                        <td>0.00050103</td>
                        <td class="green">+5.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <StarIcon className={classes.star} /> DAI/DAI
                        </td>
                        <td>0.00340103</td>
                        <td class="red">-1.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <StarIcon className={classes.star} /> XLM/DAI
                        </td>
                        <td>0.00035103</td>
                        <td class="green">+5.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <StarIcon className={classes.star} /> ENQ/DAI
                        </td>
                        <td>0.00354103</td>
                        <td class="green">+2.02%</td>
                      </tr>
                      <tr>
                        <td>
                          <StarIcon className={classes.star} /> AVA/DAI
                        </td>
                        <td>0.02535103</td>
                        <td class="green">+3.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <StarIcon className={classes.star} /> AMB/DAI
                        </td>
                        <td>0.05335103</td>
                        <td class="green">+1.0%</td>
                      </tr>
                      <tr>
                        <td>
                          <StarIcon className={classes.star} /> MAP/DAI
                        </td>
                        <td>0.00234103</td>
                        <td class="red">-2.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <StarIcon className={classes.star} /> GO/DAI
                        </td>
                        <td>0.00354103</td>
                        <td class="red">-6.50%</td>
                      </tr>
                      <tr>
                        <td>
                          <StarIcon className={classes.star} /> KICK/DAI
                        </td>
                        <td>0.02053103</td>
                        <td class="red">-6.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <StarIcon className={classes.star} /> DBC/DAI
                        </td>
                        <td>0.02535103</td>
                        <td class="green">+7.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <StarIcon className={classes.star} /> GGC/DAI
                        </td>
                        <td>0.00353103</td>
                        <td class="red">-4.05%</td>
                      </tr>
                    </tbody>
                  </table>
                </Tab.Pane>
              </Tab.Content>
            </div>
          </PerfectScrollbar>
        </div>
      </Tab.Container>
    </div>
  );
}
