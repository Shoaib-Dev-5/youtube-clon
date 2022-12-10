import { Box, Typography } from "@mui/material";
import React, {  useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FetchData } from "./FetchData";
import { Video } from "./Video";


export const SearchFeed =() => {
    const {searchterm}=useParams();
  const [video, setvideo] = useState([]);

  useEffect(()=>{ 
   FetchData(`search?part=snippet&q=${searchterm}`).then((data)=> setvideo(data.items));
  },[searchterm]);
  return (
   

      <Box mt={3} ml={2} sx={{flex:2}}>
       <Typography variant="h5">
       <font className="type">{searchterm}</font>
       <font className="video">Videos</font>
       </Typography>

        <Video video={video}/>
      </Box>
  );
};
