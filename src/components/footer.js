import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import YouTubeIcon from "@material-ui/icons/YouTube";
import { makeStyles } from "@material-ui/core/styles";
import "../css/style.css";

const useStyles = makeStyles((theme) => ({
  footer: {
    borderTop: "1px solid #363c4e",
    background: "#131722",
    padding: "10px 0px",
    position: "fixed",
    bottom: "0",
    left: "0",
    right: "0",
  },
  copyRight: {
    "& p": {
      margin: "0",
      fontSize: "14px",
      color: "#7f88a6",
      "& a": { color: "#5d78ff", fontWeight: "500", textDecoration: "none" },
    },
  },
  social: {
    textAlign: "right",
    "& ul": {
      marginBottom: "0",
    },
    "& li": {
      display: "inline-block",
      "& a": {
        color: "#7f88a6 !important",
        padding: "0px .3rem",
      },
    },
  },
  containerFluid: {
    width: "100%",
    paddingRight: "10px",
    paddingLeft: "10px",
    marginRight: "auto",
    marginLeft: "auto",
  },
  row: {
    display: "flex",
    // flexWrap: "wrap",
    marginRight: "-10px",
    marginLeft: "-10px",
  },
  col: {
    position: "relative",
    width: "100%",
    paddingRight: "10px",
    paddingLeft: "10px",
  },
}));
function Footer2() {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <div className={classes.containerFluid}>
        <div className={classes.row}>
          <div className={classes.col}>
            <div className={classes.copyRight}>
              <p>
                © Copyright 2021 <a href="#">xxxx</a> I All Rights Reserved
              </p>
            </div>
          </div>
          <div className={classes.col}>
            <div className={classes.social}>
              <ul>
                <li>
                  <a href="#">
                    <FacebookIcon />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <TwitterIcon />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <LinkedInIcon />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <YouTubeIcon />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer2;
