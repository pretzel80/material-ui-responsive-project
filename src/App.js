import * as React from 'react';
import Button from "@material-ui/core/Button";
import {Accessible, Person, PermContactCalendarOutlined} from "@material-ui/icons";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    // button: {
    //     color: "white",
    //     backgroundColor: theme.palette.primary.main,
    // }
    button: {
        ...theme.myButton
    }
}))

const App = () => {
    const classes = useStyles()
    return (
        <>
            <Button
                variant={"outlined"}
                color={"primary"}
                size={"small"}
                startIcon={<Person/>}
                className={classes.button}
            >
                Material UI
            </Button>
            <Button
                variant={"outlined"}
                color="inherit"
                size={"medium"}
                startIcon={<Accessible/>}
            >
                Material UI
            </Button>
            <Button
                variant={"outlined"}
                color={"secondary"}
                size={"large"}
                startIcon={<PermContactCalendarOutlined/>}
            >
                Material UI
            </Button>
            <Button
                variant={"contained"}
                size={"large"}
                startIcon={<PermContactCalendarOutlined/>}
                style={{color: "green", backgroundColor: "black"}}
            >
                Material UI
            </Button>
        </>
    );
};

export default App;