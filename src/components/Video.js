import React from 'react'
import VideoCard from './VideoCard'
import ChannelCard from './ChannelCard'
import { Box, Stack } from '@mui/material'

export const Video = ({video}) => {

  return (
    <Stack direction='row' sx={{flexWrap:'wrap',justifyContent:'center'}} gap={2}>
    

     {
      video.map((val,ind)=>{
      
        return(
          <Box key={ind}>
          {val.id.videoId && <VideoCard val={val}/> }
       {val.id.channelId && <ChannelCard val={val}/>
        }
        </Box>
          )
          })
     }
       
   
    </Stack>
  )
}
