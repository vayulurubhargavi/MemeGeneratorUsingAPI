import React from "react";
import MemesData from "../MemesData";


 /**
     * Challenge: Update our state to save the meme-related
     * data as an object called `meme`. It should have the
     * following 3 properties:
     * topText, bottomText, randomImage.
     * 
     * The 2 text states can default to empty strings for now,
     * amd randomImage should default to "http://i.imgflip.com/1bij.jpg"
     * 
     * Next, create a new state variable called `allMemeImages`
     * which will default to `memesData`, which we imported above
     * 
     * Lastly, update the `getMemeImage` function and the markup 
     * to reflect our newly reformed state object and array in the
     * correct way.
     */

function Meme()
{

 // const [memeImage,setMemeImage]=React.useState("http://i.imgflip.com/1bij.jpg");
 const [meme,setMeme] =React.useState({
  topText:"",
  bottomText:"",
  randomImage:"http://i.imgflip.com/1bij.jpg"
 })

 const [allMemeImages,setAllMemeImages]=React.useState(MemesData);

  function getMemeImage(){
    const memesArray=allMemeImages.data.memes;
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
