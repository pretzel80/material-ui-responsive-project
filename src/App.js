import * as React from 'react';
import Button from "@material-ui/core/Button";
import {Accessible, Person, PermContactCalendarOutlined} from "@material-ui/icons";

const App = () => {
    return (
        <>
            <Button variant={"outlined"} color={"primary"} size={"small"} startIcon={<Person/>}>
                Material UI
            </Button>
            <Button variant={"outlined"} color="error" size={"medium"} startIcon={<Accessible/>}>
                Material UI
            </Button>
            <Button variant={"outlined"} color={"secondary"} size={"large"} startIcon={<PermContactCalendarOutlined/>}>
                Material UI
            </Button>
        </>
    );
};

export default App;