import React from 'react'
import { Favorite, FavoriteBorder, MoreVert, Share } from '@mui/icons-material'
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'

const Post = () => {

    return (
        <Card sx={{ margin: 5 }} >
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
                        R
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVert />
                    </IconButton>
                }
                title="Shrimp and Chorizo Paella"
                subheader="September 14, 2016"
            />
            <CardMedia
                height="x194"
                component="img"
                alt="Paella dish"
                image="https://th.bing.com/th/id/R.36ad519207160902638159b42811f1c2?rik=JdH0u6zEz6WyIQ&riu=http%3a%2f%2fstatic.materialicious.com%2fimages%2fbeautiful-landscape-photography-by-adnan-bubalo-o.jpg&ehk=bmCT9dtgsIZ%2bXldNqI75ELBQm%2fqMfuUkTWJjVJCsdB0%3d&risl=&pid=ImgRaw&r=0"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                    if you like.
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: 'red' }} />} />
                </IconButton>
                <IconButton aria-label="share">
                    <Share />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default Post