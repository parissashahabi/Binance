import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "#EFF6EE",
  },
}));

export default function Title(props) {
  const classes = useStyles();
  return (
    <Typography
      className={classes.root}
      component="h2"
      variant="h6"
      gutterBottom
    >
      {props.children}
    </Typography>
  );
}

Title.propTypes = {
  children: PropTypes.node,
};
