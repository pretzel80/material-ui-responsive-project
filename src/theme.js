import {createTheme} from "@material-ui/core";
import {blue, red} from "@material-ui/core/colors";

export const theme = createTheme({
    palette: {
        primary: {
            main: blue[500]
        },
    },
    myButton: {
        color: '#fff',
        backgroundColor: red[500],
        border: "2px solid black"
    }
})