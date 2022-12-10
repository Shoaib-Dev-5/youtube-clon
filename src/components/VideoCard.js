import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Avatar,
} from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

const VideoCard = ({ val }) => {
  return (
    <Link to={`/video/${val.id.videoId}`}>
      <Card  sx={{ width: { sm: "200px", xs: "100%" },height:'auto'}}>
        <CardMedia
       
          component="img"
          image={val?.snippet?.thumbnails?.medium?.url}
          

        />
        <CardContent>
          <Typography
            variant="body1"
            color="initial"
            sx={{ fontWeight: "bold" }}
          >
           
            {val.snippet.title.length > 40
              ? `${val.snippet.title.slice(0, 40)}...`
              : val.snippet.title}
          </Typography>
          <Link to={`/channel/${val.snippet.channelId}`}>
            <Stack direction="row" mt={2} >
              <Avatar sx={{ width: 25, height: 25, bgcolor: "gray" }}>
                {val.snippet.channelTitle.slice(0, 1)}
              </Avatar>
              <Typography
                variant="subtitle1"
                color="black"
                sx={{ display: "flex", alignItems: "center", ml: "3px" }}
              >
                {val.snippet.channelTitle.length > 10
              ? `${val.snippet.channelTitle.slice(0, 10)}...`
              : val.snippet.channelTitle}
              </Typography>
            </Stack>
          </Link>
        </CardContent>
      </Card>
    </Link>
  );
};

export default VideoCard;
