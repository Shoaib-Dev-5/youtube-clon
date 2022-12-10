import { Box, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useContext, useEffect, useState } from "react";
import { global } from "../App";
import { FetchData } from "./FetchData";
import Loading from "./Loading";
import { Sidebar } from "./Sidebar";
import { Video } from "./Video";


export const Feed =() => {
  const [video, setvideo] = useState();
  const {selected}=useContext(global);

  useEffect(()=>{ 
   FetchData(`search?part=snippet&q=${selected}`).then((data)=> setvideo(data.items));
  },[selected]);
  if(!video) return <Loading type='balls' />
  return (
    
    <Stack sx={{ flexDirection: { xs: "column", md: "row" } }}>
      <Box
        sx={{
          overflow:'auto',
          height: {  md: "92vh" },
          width: { md: "20%" },
          px: { xs: 0, md: 2 },
          position:'fixed',
          backgroundColor:'white',
         zIndex:9
        }}
      >
        <Sidebar />
      
      </Box>

      <Box  sx={{ml:{md:'20%'},mt:{xs:'17%',md:'auto'}}}>
       <Typography variant="h5" ml='10%' sx={{display:'flex'}}>
       <Typography variant="h6" color="red" >{selected}</Typography>
       <Typography variant="h6" color="black">Videos</Typography>
       </Typography>

        <Video video={video}/>
      </Box>
    
    </Stack>
  );
};
