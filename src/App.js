import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Chart from "./components/charts";
import OrderBook from "./components/order-book";
import TradeHistory from "./components/trade-history";
import OrderTabPanel from "./components/order-tab-panel";
import MarketTabPanel from "./components/market-tab-panel";
import DepthChart from "./components/depth-chart";
import YourPortfolio from "./components/your-portfolio";
import "react-perfect-scrollbar/dist/css/styles.css";
import Footer from "./components/footer.js";
import "./css/style.css";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    background: "#030304",
  },
  toolbar: {
    paddingRight: 24,
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    background: "#131722",
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },

  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: "relative",
    background: "#131722",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    background: "#131722",
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  // fixedHeight1: {
  //   height: 140,
  // },
  fixedHeight2: {
    height: 472,
  },
  cardBody: {
    flex: "1 1 auto",
    minHeight: "4px",
    padding: "1.25rem 1rem",
  },
  row: {
    display: "flex",
    flexWrap: "wrap",
    marginRight: "-10px",
    marginLeft: "-10px",
  },
  cardHeader: {
    position: "relative",
    display: "flex",
    color: "#F4F4F4",
    padding: "0.1rem 0.25rem",
    marginBottom: 0,
    minWidth: 0,
    wordWrap: "break-word",
    justifyContent: "space-between",
  },
  strongCardHeader: {
    color: "#10D876",
  },
  Divider: {
    backgroundColor: "#898990",
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const fixedHeightPaper1 = clsx(classes.paper, classes.fixedHeight1);
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            Dashboard
          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>

      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="xl" className={classes.container}>
          <Grid container spacing={2}>
            {/* USD Perpetual Swap */}

            <Grid item xs={12} md={6}>
              <Paper className={fixedHeightPaper1}>
                <div className={classes.card}>
                  <div className={classes.cardHeader}>
                    <h4>BTC - USD Perpetual Swap</h4>
                    <span>
                      24h Change{" "}
                      <strong className={classes.strongCardHeader}>
                        {" "}
                        +5.30%
                      </strong>
                    </span>
                  </div>
                  <Divider className={classes.Divider} />
                  <div className={classes.cardBody}>
                    <Grid Container className={classes.row} spacing={2}>
                      <Grid item spacing={2} sm={3} xs={6}>
                        <p>24h Volume</p>
                        <h6>814,107.51 USD</h6>
                      </Grid>
                      <Grid item spacing={2} sm={3} xs={6}>
                        <p>Index Price</p>
                        <h6>10,326.19 USD</h6>
                      </Grid>
                      <Grid item spacing={2} sm={3} xs={6}>
                        <p>Mark Price</p>
                        <h6>10,343.94 USD</h6>
                      </Grid>
                      <Grid item spacing={2} sm={3} xs={6}>
                        <p>Last Price</p>
                        <h6>10,383.51 USD</h6>
                      </Grid>
                    </Grid>
                  </div>
                </div>
              </Paper>
            </Grid>

            {/* your wallet */}

            <Grid item xs={12} md={6}>
              <Paper className={fixedHeightPaper1}>
                <div className={classes.card}>
                  <div className={classes.cardHeader}>
                    <h4>Your Wallet</h4>
                    <span>Update 10 minutes ago</span>
                  </div>
                  <Divider className={classes.Divider} />
                  <div className={classes.cardBody}>
                    <Grid Container className={classes.row} spacing={2}>
                      <Grid item spacing={2} sm={3} xs={6}>
                        <p>Equity</p>
                        <h6>34.00 USD</h6>
                      </Grid>
                      <Grid item spacing={2} sm={3} xs={6}>
                        <p>Available Margin</p>
                        <h6>47.00 USD</h6>
                      </Grid>
                      <Grid item spacing={2} sm={3} xs={6}>
                        <p>Unrealized P&L</p>
                        <h6>92.00 USD</h6>
                      </Grid>
                      <Grid item spacing={2} sm={3} xs={6}>
                        <p>Position Margin</p>
                        <h6>58.00 USD</h6>
                      </Grid>
                    </Grid>
                  </div>
                </div>
              </Paper>
            </Grid>

            {/* order panel */}

            <Grid item xs={12} md={6} lg={3}>
              <Paper className={classes.paper}>
                <OrderTabPanel />
              </Paper>
            </Grid>

            {/* chart */}

            <Grid item xs={12} md={6} lg={5}>
              <Paper className={clsx(classes.paper, classes.fixedHeight2)}>
                <Chart />
              </Paper>
            </Grid>

            {/* order book */}

            <Grid item xs={12} md={6} lg={2}>
              <Paper className={classes.paper}>
                <OrderBook />
              </Paper>
            </Grid>

            {/* trade history */}

            <Grid item xs={12} md={6} lg={2}>
              <Paper className={classes.paper}>
                <TradeHistory />
              </Paper>
            </Grid>

            {/* market panel */}

            <Grid item xs={12} md={6} lg={3}>
              <Paper className={classes.paper}>
                <MarketTabPanel />
              </Paper>
            </Grid>

            {/* portfolio */}

            <Grid item xs={12} md={6} lg={2}>
              <Paper className={classes.paper}>
                <YourPortfolio />
              </Paper>
            </Grid>

            {/* depth chart */}

            <Grid item xs={12} md={12} lg={7}>
              <Paper className={classes.paper}>
                <DepthChart />
              </Paper>
            </Grid>
          </Grid>

          {/* footer */}

          <Box pt={4}></Box>
          <Footer />
        </Container>
      </main>
    </div>
  );
}
