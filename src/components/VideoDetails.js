import { Avatar, Box, Stack, Typography } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";
import { FetchData } from "./FetchData";
import Loading from "./Loading";
import { Video } from "./Video";

export const VideoDetails = ()=> {
  const { id } = useParams();

  const options = {
    method: 'GET',
    url: 'https://youtube-v31.p.rapidapi.com/search',
    params: {
      relatedToVideoId: id,
      part: 'id,snippet',
      type: 'video',
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': 'e51d09021bmsh765fcb6528a2fb5p1a0d95jsnddcea823faaa',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };
  
  const [videoDetail, setVideoDetail] = useState(null);
  const[video,setVideo]=useState([]);
  useEffect(() => {
    FetchData(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    );
    
    // FetchData(`search?relatedTovideoId=${id}&part=id,snippet&type=video`)
    // .then((data)=> setVideo(data.items))
    axios.request(options).then(function (res) {
      setVideo(res.data.items)
    }).catch(function (error) {
     alert(error)
    });
  },[id]);
 

  if(!videoDetail) return <Loading type='cubes' />


  const {
    snippet: { title, description, channelId, channelTitle },
    statistics: { likeCount, viewCount },
  } = videoDetail;
  return (
    <div>
      <Box>
        <Stack direction="column">
          <Box px={2} mb={3}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="player"
              width='100%'
              controls
            />
            <Typography variant="h6" color="black">
              {title}
            </Typography>
            <Stack direction="row" justifyContent="space-between" mt={2}>
              
              <Stack direction='row' gap={2}>
                <Typography variant="body1" color="gray">
                  {parseInt(likeCount).toLocaleString()}Likes
                </Typography>
                <Typography variant="body1" color="gray">
                  {parseInt(viewCount).toLocaleString()}Views
                </Typography>
              </Stack>
              <Link to={`/channel/${channelId}`} style={{display:'flex',flexDirection:'row',backgroundColor:'rgb(240, 240, 240)',padding:'5px',borderRadius:'20px',marginRight:'20px'}}>
                <Avatar>{channelTitle.slice(0, 1)}</Avatar>
                <Typography variant="body2" color="black" ml={2} sx={{display:'flex',alignItems:'center',fontWeight:'bold',marginRight:'20px'}}>
                {channelTitle}
                </Typography>
              </Link>
            </Stack>
          </Box>
          <Stack direction='column'>
            <Video video={video}/>
          </Stack>
        </Stack>
      </Box>
    </div>
  );
};
