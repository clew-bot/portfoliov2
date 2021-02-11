import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    textAlign: "center",
  },
  title: {
    fontSize: 12,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Homepage() {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2">
          Born and raised in Southern California, my name is Chad Lew and I
          guess the first two things you could say about me is that I like to
          read and I like to code. My passion for coding is fueled by endless
          learning and enjoyment through the internet and mentors. I'm a father,
          mentor, mentee, coder, lover, and friend. My hobbies would consist of
          mainly coding new js libraries to try out, reading/listening to books
          (audible is the best), and working. Some other stuff i'm passionate
          about are sociology, psychology, investing (stock market), cartoons,
          cryptocurrency, pokemon, osrs, netflix shows (hah!), and everything
          apple related.
        </Typography>
      </CardContent>
    </Card>
  );
}
