import * as React from 'react';
import {Grid, makeStyles} from "@material-ui/core";
import NavBar from "./components/NavBar";
import LeftBar from "./components/LeftBar";
import Feed from "./components/Feed";
import RightBar from "./components/RightBar";

const useStyles = makeStyles((theme) => ({
    right: {
      [theme.breakpoints.down("sm")]: {
          display: 'none',
      }
    },
}))

const App = () => {
    const classes = useStyles()
    return (
        <div>
            <NavBar/>
            <Grid container>
                <Grid item sm={2} xs={2}>
                    <LeftBar/>
                </Grid>
                <Grid item sm={7} xs={2}>
                    <Feed/>
                </Grid>
                <Grid item sm={3} className={classes.right}>
                    <RightBar/>
                </Grid>
            </Grid>
        </div>
    );
};

export default App;