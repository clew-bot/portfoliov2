import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import "./portstyle.css";
import TechCard from "../../components/Cards/TechCard";
import KidCard from "../../components/Cards/KidCard";
import FitCard from "../../components/Cards/FitCard";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 2,
  },
  paper: {
    padding: theme.spacing(),
    textAlign: "center",
    color: theme.palette.text.primary,
  },
}));

export default function Portfolio() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1 className="firsth1">
        My code projects. Open Source and coded with 💚
      </h1>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <h1 className="firstTites">KidTastic</h1>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <img
              src="./assets/images/kidtastic2.png"
              alt="kidtastic"
              className="portImg"
            />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <KidCard />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <h1 className="firstTites">Tech-Blog</h1>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <TechCard />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <img
              src="./assets/images/techblog.png"
              alt="techblog"
              className="portImg"
            />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <h1 className="firstTites">Fitness-Tracker</h1>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <img
              src="./assets/images/fittracker.png"
              alt="techblog"
              className="portImg"
            />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <FitCard />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
