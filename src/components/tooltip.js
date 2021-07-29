import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";

const useStylesBootstrap = makeStyles((theme) => ({
  arrow: {
    color: theme.palette.common.black,
  },
  tooltip: {
    backgroundColor: theme.palette.common.black,
  },
}));

function BootstrapTooltip(props) {
  const classes = useStylesBootstrap();

  return <Tooltip arrow classes={classes} {...props} />;
}

const HtmlTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: "#1D2334",
    color: "#EFF6EE",
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #1D2334",
    maxWidth: 320,
  },
}))(Tooltip);

export default function CustomizedTooltips() {
  return (
    <div>
      <HtmlTooltip
        title={
          <React.Fragment>
            <Typography color="inherit">
              A limit order is an order to buy or sell at a specific price or
              better. Limit orders are not guaranteed to execute.
            </Typography>
          </React.Fragment>
        }
      >
        <InfoOutlinedIcon
          style={{ color: "#898990", fontSize: 15, verticalAlign: "middle" }}
        />
      </HtmlTooltip>
    </div>
  );
}
