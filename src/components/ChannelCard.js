import { Card, CardMedia, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const ChannelCard = ({ val }) => {
  return (
    <Link to={`/channel/${val.snippet.channelId}`}>
    <Card sx={{ width: { sm: "250px", xs: "100%" ,backgroundColor:'black'} }}>
      <CardMedia
        component="img"
        image={val?.snippet?.thumbnails?.high?.url}
        sx={{ width : "200px" ,borderRadius:"50%" ,height:'200px', border:'1px solid black', mt:3,mx:3}}
      />
      <Typography variant="body2" color="white" align="center" my={2}>
        {val.snippet.channelTitle}
      </Typography>
    </Card>
    </Link>
  );
};

export default ChannelCard;
