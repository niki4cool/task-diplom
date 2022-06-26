import React from 'react';
import {Route, Routes} from 'react-router-dom';
import General from "./General";
import HomePage from "./HomePage";
import SearchResults from "./SearchResults";
import LikedTracks from "./LikedTracks";

function App() {
   return (
       <>
           <Routes>
               <Route path="/" element={<General/>}>
                   <Route index element={<HomePage/>}/>
                   <Route path="track_search" element={<SearchResults/>}/>
                   <Route path="liked_tracks" element={<LikedTracks/>}/>
               </Route>
           </Routes>
       </>
   );
}

export default App;
