import * as React from 'react';
import {alpha, AppBar, Avatar, Badge, InputBase, makeStyles, Toolbar, Typography} from "@material-ui/core";
import {Search, Mail, Notifications, Cancel} from "@material-ui/icons";
import {useState} from "react";


const useStyles = makeStyles((theme) => ({
    toolbar: {
        display: "flex",
        justifyContent: "space-between",
    },

    logoLg: {
        display: "none",
        [theme.breakpoints.up("sm")]: {
            display: "block"
        }
    },

    logoSm: {
        display: "block",
        [theme.breakpoints.up("sm")]: {
            display: "none"
        }
    },

    search: {
        display: "flex",
        alignItems: "center",
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        borderRadius: theme.shape.borderRadius,
        width: '50%',
        [theme.breakpoints.down("sm")]: {
            display: (props) => props.open ? 'flex' : 'none',
            width: '70%',
        }
    },

    searchButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up("sm")]: {
            display: 'none',
        }
    },

    cancel: {
        [theme.breakpoints.up("sm")]: {
            display: 'none',
        }
    },

    input: {
        color: "white",
        marginLeft: theme.spacing(1)
    },

    icons: {
        display: (props) => props.open ? 'none' : 'flex',
        alignItems: "center",
    },

    badge: {
        marginRight: theme.spacing(2)
    },


}))

const NavBar = () => {
    const [open, setOpen] = useState(false)
    const classes = useStyles({open})

    return (
        <AppBar position={"fixed"}>
            <Toolbar className={classes.toolbar}>
                <Typography variant="h6" className={classes.logoLg}>
                    ZD-Project
                </Typography>
                <Typography variant="h6" className={classes.logoSm}>
                    ZD
                </Typography>
                <div className={classes.search}>
                    <Search/>
                    <InputBase
                        placeholder='Search...'
                        className={classes.input}
                    />
                    <Cancel
                        className={classes.cancel}
                        onClick={() => setOpen(false)}
                    />
                </div>
                <div className={classes.icons}>
                    <Search
                        className={classes.searchButton}
                        onClick={()=>setOpen(true)}
                    />
                    <Badge badgeContent={4} color="secondary" className={classes.badge}>
                        <Mail/>
                    </Badge>
                    <Badge badgeContent={2} color="secondary" className={classes.badge}>
                        <Notifications/>
                    </Badge>
                    <Avatar
                        alt="Bruce Willis"
                        src="https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/21cbe58f-4ad8-4d14-9634-f0923eb2b5ad/280x420"
                    />
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;