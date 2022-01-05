import * as React from 'react';
import {Avatar, Container, Divider, ImageList, ImageListItem, Link, makeStyles, Typography} from "@material-ui/core";
import {AvatarGroup} from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(10),
        position: "sticky",
        top: 0
    },

    title: {
        fontSize: 16,
        fontWeight: 500,
        color: '#555'
    },

    link: {
        marginRight: theme.spacing(2),
        color: '#555',
        fontSize: 16,

    }
}))

const RightBar = () => {
    const classes = useStyles()
    return (
        <Container className={classes.container}>
            <Typography className={classes.title} gutterBottom>
                Online friends
            </Typography>
            <AvatarGroup max={6} style={{marginBottom: 20}}>
                <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg"/>
                <Avatar alt="Travis Howard" src="https://mui.com/static/images/avatar/2.jpg"/>
                <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/3.jpg"/>
                <Avatar alt="Agnes Walker" src="https://mui.com/static/images/avatar/4.jpg"/>
                <Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/5.jpg"/>
                <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/6.jpg"/>
                <Avatar alt="Agnes Walker" src="https://mui.com/static/images/avatar/7.jpg"/>
                <Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/8.jpg"/>
            </AvatarGroup>
            <Typography className={classes.title} gutterBottom>
                Gallery
            </Typography>
            <ImageList rowHeight={100} style={{marginBottom: 20}} cols={2}>
                <ImageListItem>
                    <img
                        src="https://images.unsplash.com/photo-1597645587822-e99fa5d45d25?w=242&h=242&fit=crop&auto=format"
                        alt="#"/>
                </ImageListItem>
                <ImageListItem>
                    <img
                        src="https://images.unsplash.com/photo-1516802273409-68526ee1bdd6?w=121&h=121&fit=crop&auto=format"
                        alt="#"/>
                </ImageListItem>
                <ImageListItem>
                    <img src="https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62?w=161&fit=crop&auto=format"
                         alt="#"/>
                </ImageListItem>
                <ImageListItem>
                    <img src="https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=248&fit=crop&auto=format"
                         alt="#"/>
                </ImageListItem>
                <ImageListItem>
                    <img
                        src="https://images.unsplash.com/photo-1589118949245-7d38baf380d6?w=164&h=164&fit=crop&auto=format"
                        alt="#"/>
                </ImageListItem>
                <ImageListItem>
                    <img
                        src="https://images.unsplash.com/photo-1471357674240-e1a485acb3e1?w=164&h=164&fit=crop&auto=format"
                        alt="#"/>
                </ImageListItem>
            </ImageList>
            <Typography className={classes.title} gutterBottom>
                Categories
            </Typography>
            <Link href={'#'} className={classes.link} variant={"body2"}>
                Sport
            </Link>
            <Link href={'#'} className={classes.link} variant={"body2"}>
                Food
            </Link>
            <Link href={'#'} className={classes.link} variant={"body2"}>
                Music
            </Link>
            <Divider flexItem style={{marginBottom: 5}}/>
            <Link href={'#'} className={classes.link} variant={"body2"}>
                Movies
            </Link>
            <Link href={'#'} className={classes.link} variant={"body2"}>
                Science
            </Link>
            <Link href={'#'} className={classes.link} variant={"body2"}>
                Life
            </Link>
        </Container>
    );
};

export default RightBar;