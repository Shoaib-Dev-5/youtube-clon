import { Box, Paper, Typography, IconButton } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { width } from '@mui/system';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Search = () => {
  const navigate=useNavigate();
  const [search,setSearch]=useState('');
  const submitHundle=(e)=>{
    e.preventDefault();
    if(search){
      navigate(`/search/${search}`);

      setSearch('');
    }
  }
  return (
    <Box width="50%">
      <Paper component='form' onSubmit={submitHundle} sx={{display:'flex',flexDirection:'row', width:'100%',justifyContent:'space-between'}}>
        <input type="text" className='search' placeholder='Search...' value={search} onChange={(e)=> setSearch(e.target.value)}/>
        <IconButton aria-label="" onClick={submitHundle}>
          <SearchIcon/>
        </IconButton>
        </Paper>
    </Box>
  )
}
