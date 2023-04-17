import React from 'react';
import Header from './components/Header';
// import Meme from './components/Meme';
import MemeAPI from './components/MemeAPI';



function App() {
  return (
    <div className="App">
        
        <Header/>
        {/* <Meme />  here we are getting data from MemesData array that has meme objects*/} 
         {/*now we are fetching the meme data from API  */}
        <MemeAPI />   
        
    </div>
  );
}

export default App;
