import { CardMedia, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FetchData } from "./FetchData";
import Loading from "./Loading";
import { Video } from "./Video";

export const ChannelDetails = () => {
  const [video, setVideo] = useState([]);
  const [channelDetail, setChannelDetail] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    FetchData(`channels?part=statistics&id=${id}`).then((data) =>setChannelDetail(data.items[0])
    );
    FetchData(`search?channelId=${id}&part=snippet&order=date`).then((data) =>
      setVideo(data.items)
    );
  },[id]);
  if(!channelDetail) return <Loading type='cylon' />
  return (
    <Stack>
      <Box>
        <div className="bg-col"
        />
        <CardMedia
          component="img"
          image={channelDetail?.snippet.thumbnails?.high?.url}
          sx={{
            width: "100px",
            borderRadius: "50%",
            height: "100px",
            border: "1px solid black",
            mt: -8,
            mx: 'auto',
          }}
        />
        <Typography variant='h5' color="black" align="center" mt={2} sx={{fontWeight:'bold'}}>
          {channelDetail?.snippet?.title}
        </Typography>
        <Typography variant="h6" color="gray" align='center' sx={{mb:2}}>
          {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers
        </Typography>
      </Box>
      <Video video={video} />
    </Stack>
  );
};
