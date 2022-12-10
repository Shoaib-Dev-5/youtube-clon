import { Box, Stack } from '@mui/material';
import './App.css';
import {Routes,Route} from 'react-router-dom'
import { Feed } from './components/Feed';
import {VideoDetails} from './components/VideoDetails'
import { ChannelDetails } from './components/ChannelDetails';
import { Navbar } from './components/Navbar';
import { useState } from 'react';
import { createContext } from 'react';
import { SearchFeed } from './components/SearchFeed';

export const global=createContext();
function App() {
  const [selected,setSelected]=useState("New");

  return (
    <div className='App'>
      <global.Provider value={{selected,setSelected}}>
      <Navbar/>
      <Routes>
      <Route exact path='/' element={<Feed/>}/>
      <Route exact path='/video/:id' element={<VideoDetails/>} />
      <Route exact path='/channel/:id' element={<ChannelDetails/>} />
      <Route exact path='/search/:searchterm' element={<SearchFeed/>} />
      </Routes>
      </global.Provider>
    </div>
    
  );
}

export default App;
