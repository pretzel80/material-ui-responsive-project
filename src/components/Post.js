import * as React from 'react';
import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    makeStyles,
    Typography
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    card: {
        marginBottom: theme.spacing(5)
    },

    media: {
        height: 250,
        [theme.breakpoints.down("sm")]: {
            height: 150
        }
    },

}))

const Post = () => {
    const classes = useStyles()
    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image='https://images.pexels.com/photos/1149347/pexels-photo-1149347.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                    title={"My Post"}
                />
                <CardContent>
                    <Typography
                        gutterBottom
                        variant={"h5"}
                    >
                        My first post
                    </Typography>
                    <Typography
                        variant={"body2"}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo impedit magnam nostrum, nulla
                        numquam odio omnis perspiciatis quasi qui quibusdam, repellendus reprehenderit veritatis?
                        Aliquid eos esse est, omnis quod voluptates?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo impedit magnam nostrum, nulla
                        numquam odio omnis perspiciatis quasi qui quibusdam, repellendus reprehenderit veritatis?
                        Aliquid eos esse est, omnis quod voluptates?
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size={'small'} color={"primary"}>
                    Share
                </Button>
                <Button size={'small'} color={"primary"}>
                    Learn More
                </Button>
            </CardActions>
        </Card>
    );
};

export default Post;