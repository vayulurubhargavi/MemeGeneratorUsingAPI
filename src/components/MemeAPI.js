import React from "react";

function Meme()
{


 const [meme,setMeme] =React.useState({
  topText:"",
  bottomText:"",
  randomImage:"http://i.imgflip.com/1bij.jpg"
 })
/* fectching data using useEffect hook
we have defined a meme array state  with an empty array
we now made an api call and converted the object into json format and then set the setAllMeme with the data received from api call*/
 const [allMeme,setAllMeme]=React.useState([]);

 React.useEffect( function() {
    fetch("https://api.imgflip.com/get_memes")
    .then(res => res.json())
    .then(data => setAllMeme(data.data.memes));
      
 },[])
 console.log(allMeme);

  function getMemeImage(){
    const memesArray=allMeme;
    const randomIndex=Math.floor(Math.random() * memesArray.length);
    const url=memesArray[randomIndex].url;
    setMeme( prevMeme =>{
      return ( {
        ...prevMeme,
        randomImage:url
      })
    });
    console.log(url);
  }

  function handleChange(event) 
  {
    const {name, value} = event.target;
    setMeme(prevMeme => ({
        ...prevMeme,
        [name]: value
    }))
  }
  
 
    return(       
        
         <div className="meme-form">
             
            <div className="input-form">
                <input
                type="text"
                placeholder="top-text"
                name="topText"
                value={meme.topText}
                onChange={handleChange}
                />

                <input
                type="text"
                placeholder="bottom-text"
                name="bottomText"
                value={meme.bottomText}
                onChange={handleChange}
                
                />

            <button 
              className="form-button"
              onClick={getMemeImage}
            >Get a New meme Image </button>


            </div>
            
            <div className="meme">
            <img src={meme.randomImage} className="meme-Image" alt="click the button to get the memeImage" />
            <h2 className="meme-text top">{meme.topText}</h2>
            <h2 className="meme-text bottom">{meme.bottomText}</h2>
            </div>
            
            
        </div>
    )
}

export default Meme;
