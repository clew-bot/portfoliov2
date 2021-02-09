import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import "./portstyle.css";
import SimpleCard from "../../components/Card";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function Portfolio() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1 className="firsth1">Check out some of my favorite work!</h1>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>KidTastic</Paper>
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
            Kids website that kids can come on, log in and watch videos along
            with using the playground section.
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>Techieblogger</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <SimpleCard />
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
          <Paper className={classes.paper}>Fitness Tracker</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <img
              src="./assets/images/fitnesstracker.png"
              alt="techblog"
              className="portImg"
            />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            Fitness tracker will help reach realistic goals and save progress.
            Website made using mongoose as main database.
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
