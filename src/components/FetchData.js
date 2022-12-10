import axios from 'axios';

const base_url= 'https://youtube-v31.p.rapidapi.com';
const options = {
    params: {
        maxResults: '50'
      },
    headers: {
      'X-RapidAPI-Key': 'e51d09021bmsh765fcb6528a2fb5p1a0d95jsnddcea823faaa',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }

  };
export const FetchData =async (url) => {
      const {data}=await axios.get(`${base_url}/${url}`,options);

  return data
  
}
