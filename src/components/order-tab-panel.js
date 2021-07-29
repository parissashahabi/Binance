import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Tab, Nav } from "react-bootstrap";
import "../css/style.css";
import Menu from "./menu";
import ToolTip from "./tooltip";
import clsx from "clsx";
import "react-perfect-scrollbar/dist/css/styles.css";
import PerfectScrollbar from "react-perfect-scrollbar";
const useStyles = makeStyles((theme) => ({
  root: {
    background: "#131722",
    position: "relative",
    // display: "flex",
    flexWrap: "wrap",
    marginRight: "-10px",
    marginLeft: "-10px",
  },
  Divider: {
    backgroundColor: "#898990",
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
    // display: "flex",
    color: "#F4F4F4",
    padding: "0.1rem 0.25rem",
    marginBottom: 0,
    minWidth: 0,
    wordWrap: "break-word",
    justifyContent: "space-between",
    backgroundClip: "border-box",
  },
  fixedHeight: {
    position: "relative",
    height: "390px",
    // marginBottom: "10px",
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
  menu: {
    display: "flex",
    justifyContent: "space-between",
  },
  limit_header: {
    display: "flex",
    alignItems: "center",
    position: "relative",
    bottom: "-1px",
  },
  limit_d_d1: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    color: "#EFF6EE",
  },
  limit_d_s1: {
    boxSizing: "border-box",
    margin: "0px 8px 0px 0px",
    minWidth: "0px",
    fontSize: "12px",
    height: "14px",
  },
  limit_d_d2: {
    boxSizing: "border-box",
    margin: "0px",
    minWidth: "0px",
    flex: "1 1 0%",
    textAlign: "right",
    display: "flex",
    justifyContent: "flex-end",
    fontSize: "12px",
  },
  limit_f_d1: {
    boxSizing: "border-box",
    margin: "0px",
    minWidth: "0px",
    height: "210px",
  },
  limit_f_d2: {
    margintop: "0px",
    marginBottom: "12px",
    margin: "16px 0px 8px",
    minWidth: "0px",
    width: "100%",
    boxSizing: "border-box",
    borderRadius: "4px",
    height: "40px",
    lineHeight: "40px",
    backgroundColor: "rgba(3, 3, 4, .8)",
  },
  market_f_d2: {
    margintop: "0px",
    marginBottom: "12px",
    margin: "16px 0px 8px",
    minWidth: "0px",
    width: "100%",
    boxSizing: "border-box",
    borderRadius: "4px",
    height: "40px",
    lineHeight: "40px",
    backgroundColor: "rgba(3, 3, 4, .5)",
  },
  limit_f_d3: {
    boxSizing: "border-box",
    margin: "0px",
    minWidth: "0px",
    display: "inline-flex",
    position: "relative",
    alignItems: "center",
    lineHeight: "1.6",
    border: "1px solid transparent",
    borderRadius: "4px",
    width: "100%",
    height: "100%",
    fontSize: "14px",
  },
  limit_f_d4: {
    flexShrink: "0",
    marginLeft: "8px",
    minWidth: "48px",
    fontSize: "14px",
    color: "#898990",
  },
  limit_f_l: {
    boxSizing: "border-box",
    margin: "0px",
    minWidth: "0px",
    fontSize: "14px",
    display: "inline-block",
    textAlign: "right",
  },
  limit_f_l1: {
    color: "#898990",
  },
  limit_f_l2: {
    color: "#EFF6EE",
  },
  limit_f_i1: {
    color: "#EFF6EE",
    fontsize: "14px",
    paddingLeft: "4px",
    paddingRight: "4px",
    textAlign: "right",
    boxSizing: "border-box",
    margin: "0px",
    minWidth: "0px",
    width: "100%",
    height: "100%",
    padding: "0px",
    outline: "none",
    backgroundColor: "inherit",
    opacity: "1",
    border: "none",
  },
  limit_f_d5: {
    marginLeft: "8px",
    flexShrink: "0",
    marginRight: "8px",
    fontSize: "14px",
    color: "#EFF6EE",
  },
  limit_f_d6: {
    display: "inline-flex",
    verticalalign: "middle",
    position: "relative",
    width: "100%",
    marginTop: "1.6rem",
  },
  limit_btn: {
    color: "#EFF6EE",
    fontSize: "16px",
    flex: "1 1 auto",
    padding: "0.375rem 0.75rem",
    lineHeight: "1.5",
    borderRadius: " 0.25rem",
    border: "1px solid transparent",
  },
  limit_btn_success: {
    borderColor: " #10d876",
    backgroundColor: "#10d876",
    borderTopRightRadius: "0",
    borderBottomRightRadius: "0",
  },
  limit_btn_danger: {
    borderColor: " #e50202",
    backgroundColor: "#e50202",
    borderTopLeftRadius: "0",
    borderBottomLeftRadius: "0",
  },
  formControl: {
    display: "block",
    width: "100%",
    height: "calc(1.5em + 0.75rem + 2px)",
    padding: "0.375rem 0rem",
    fontSize: "0.875rem",
    fontWeight: "400",
    lineHeight: "1.5",
    color: "#898990",
    maxWidth: "150px",
    backgroundColor: "rgba(3, 3, 4, .8)",
    backgroundClip: "padding-box",
    border: "1px solid rgba(3, 3, 4, .8)",
    borderRadius: " 0.25rem",
    transition: "border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
  },
}));

export default function TabPanel() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Tab.Container defaultActiveKey="Spot">
        <div>
          <div className={classes.menu}>
            <div className={classes.cardHeader}>
              <Nav variant="tabs" className={classes.navTabs}>
                <Nav.Item>
                  <Nav.Link eventKey="Spot">Spot</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="Cross">Cross 3x</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="Isolated">Isolated 10x</Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
            <Menu />
          </div>
          <PerfectScrollbar>
            <div className={clsx(classes.cardBody, classes.fixedHeight)}>
              <Tab.Content>
                <Tab.Pane eventKey="Spot">
                  <Tab.Container defaultActiveKey="limit">
                    <div>
                      <div className={classes.limit_header}>
                        <Nav variant="pills" className={classes.navPills}>
                          <Nav.Link eventKey="limit">Limit</Nav.Link>
                          <Nav.Link eventKey="market">Market</Nav.Link>
                          <Nav.Link eventKey="stop-limit">Stop-limit</Nav.Link>
                          {/* <Nav.Link eventKey="OCO">OCO</Nav.Link> */}
                        </Nav>
                        <ToolTip />
                      </div>

                      <div className={classes.cardBody}>
                        <Tab.Content>
                          <Tab.Pane eventKey="limit">
                            <div>
                              <div className={classes.limit_d_d1}>
                                <span className={classes.limit_d_s1}>Avbl</span>
                                <div className={classes.limit_d_d2}>-USDT</div>
                              </div>
                            </div>
                            <form novalidate autoComplete="off">
                              <div className={classes.limit_f_d1}>
                                <div className={classes.limit_f_d2}>
                                  <div className={classes.limit_f_d3}>
                                    <div className={classes.limit_f_d4}>
                                      <label
                                        className={clsx(
                                          classes.limit_f_l,
                                          classes.limit_f_l1
                                        )}
                                      >
                                        Price
                                      </label>
                                    </div>
                                    <input
                                      min="0.01"
                                      step="0.01"
                                      type="text"
                                      name="Price"
                                      placeholder="34410.25"
                                      className={classes.limit_f_i1}
                                    ></input>
                                    <div className={classes.limit_f_d5}>
                                      <label
                                        className={clsx(
                                          classes.limit_f_l,
                                          classes.limit_f_l2
                                        )}
                                      >
                                        USDT
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <div>
                                  <div className={classes.limit_f_d2}>
                                    <div className={classes.limit_f_d3}>
                                      <div className={classes.limit_f_d4}>
                                        <label className={classes.limit_f_l1}>
                                          Amount
                                        </label>
                                      </div>
                                      <input
                                        min="0.01"
                                        step="0.01"
                                        type="text"
                                        name="Price"
                                        className={classes.limit_f_i1}
                                      ></input>
                                      <div className={classes.limit_f_d5}>
                                        <label className={classes.limit_f_l2}>
                                          BTC
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className={classes.limit_f_d6}>
                                <button
                                  type="submit"
                                  name="submit"
                                  className={clsx(
                                    classes.limit_btn,
                                    classes.limit_btn_success
                                  )}
                                >
                                  Buy Now
                                </button>
                                <button
                                  type="submit"
                                  name="submit"
                                  className={clsx(
                                    classes.limit_btn,
                                    classes.limit_btn_danger
                                  )}
                                >
                                  Sell Now
                                </button>
                              </div>
                            </form>
                          </Tab.Pane>
                          <Tab.Pane eventKey="market">
                            <div>
                              <div className={classes.limit_d_d1}>
                                <span className={classes.limit_d_s1}>Avbl</span>
                                <div className={classes.limit_d_d2}>-USDT</div>
                              </div>
                            </div>
                            <form novalidate autoComplete="off">
                              <div className={classes.limit_f_d1}>
                                <div className={classes.market_f_d2}>
                                  <div className={classes.limit_f_d3}>
                                    <div className={classes.limit_f_d4}>
                                      <label
                                        className={clsx(
                                          classes.limit_f_l,
                                          classes.limit_f_l1
                                        )}
                                      >
                                        Price
                                      </label>
                                    </div>
                                    <input
                                      min="0.01"
                                      step="0.01"
                                      type="text"
                                      name="Price"
                                      value="Market"
                                      disabled
                                      className={classes.limit_f_i1}
                                    ></input>
                                    <div className={classes.limit_f_d5}>
                                      <label
                                        className={clsx(
                                          classes.limit_f_l,
                                          classes.limit_f_l2
                                        )}
                                      >
                                        USDT
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <div>
                                  <div className={classes.limit_f_d2}>
                                    <div className={classes.limit_f_d3}>
                                      <div className={classes.limit_f_d4}>
                                        <select
                                          name="currency"
                                          className={classes.formControl}
                                        >
                                          <option
                                            data-display="Bitcoin"
                                            value="bitcoin"
                                          >
                                            Bitcoin
                                          </option>
                                          <option value="litecoin">
                                            Litecoin
                                          </option>
                                        </select>
                                      </div>
                                      <input
                                        min="0.01"
                                        step="0.01"
                                        type="text"
                                        name="Price"
                                        className={classes.limit_f_i1}
                                      ></input>
                                      <div className={classes.limit_f_d5}>
                                        <label className={classes.limit_f_l2}>
                                          BTC
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className={classes.limit_f_d6}>
                                <button
                                  type="submit"
                                  name="submit"
                                  className={clsx(
                                    classes.limit_btn,
                                    classes.limit_btn_success
                                  )}
                                >
                                  Buy Now
                                </button>
                                <button
                                  type="submit"
                                  name="submit"
                                  className={clsx(
                                    classes.limit_btn,
                                    classes.limit_btn_danger
                                  )}
                                >
                                  Sell Now
                                </button>
                              </div>
                            </form>
                          </Tab.Pane>
                          <Tab.Pane eventKey="stop-limit">
                            {" "}
                            <div>
                              <div className={classes.limit_d_d1}>
                                <span className={classes.limit_d_s1}>Avbl</span>
                                <div className={classes.limit_d_d2}>-USDT</div>
                              </div>
                            </div>
                            <form novalidate autoComplete="off">
                              <div className={classes.limit_f_d1}>
                                <div className={classes.limit_f_d2}>
                                  <div className={classes.limit_f_d3}>
                                    <div className={classes.limit_f_d4}>
                                      <label
                                        className={clsx(
                                          classes.limit_f_l,
                                          classes.limit_f_l1
                                        )}
                                      >
                                        Stop
                                      </label>
                                    </div>
                                    <input
                                      min="0.01"
                                      step="0.01"
                                      type="text"
                                      name="Price"
                                      className={classes.limit_f_i1}
                                    ></input>
                                    <div className={classes.limit_f_d5}>
                                      <label
                                        className={clsx(
                                          classes.limit_f_l,
                                          classes.limit_f_l2
                                        )}
                                      >
                                        USDT
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <div>
                                  <div className={classes.limit_f_d2}>
                                    <div className={classes.limit_f_d3}>
                                      <div className={classes.limit_f_d4}>
                                        <label className={classes.limit_f_l1}>
                                          Limit
                                        </label>
                                      </div>
                                      <input
                                        min="0.01"
                                        step="0.01"
                                        type="text"
                                        name="Price"
                                        placeholder="39785.87"
                                        className={classes.limit_f_i1}
                                      ></input>
                                      <div className={classes.limit_f_d5}>
                                        <label className={classes.limit_f_l2}>
                                          USDT
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div>
                                  <div className={classes.limit_f_d2}>
                                    <div className={classes.limit_f_d3}>
                                      <div className={classes.limit_f_d4}>
                                        <label className={classes.limit_f_l1}>
                                          Amount
                                        </label>
                                      </div>
                                      <input
                                        min="0.01"
                                        step="0.01"
                                        type="text"
                                        name="Price"
                                        className={classes.limit_f_i1}
                                      ></input>
                                      <div className={classes.limit_f_d5}>
                                        <label className={classes.limit_f_l2}>
                                          BTC
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className={classes.limit_f_d6}>
                                <button
                                  type="submit"
                                  name="submit"
                                  className={clsx(
                                    classes.limit_btn,
                                    classes.limit_btn_success
                                  )}
                                >
                                  Buy Now
                                </button>
                                <button
                                  type="submit"
                                  name="submit"
                                  className={clsx(
                                    classes.limit_btn,
                                    classes.limit_btn_danger
                                  )}
                                >
                                  Sell Now
                                </button>
                              </div>
                            </form>
                          </Tab.Pane>
                          <Tab.Pane eventKey="OCO"></Tab.Pane>
                        </Tab.Content>
                      </div>
                    </div>
                  </Tab.Container>
                </Tab.Pane>
                <Tab.Pane eventKey="Cross"></Tab.Pane>
                <Tab.Pane eventKey="Isolated"></Tab.Pane>
              </Tab.Content>
            </div>
          </PerfectScrollbar>
        </div>
      </Tab.Container>
    </div>
  );
}
