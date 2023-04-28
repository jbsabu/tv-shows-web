import {useEffect, useState} from 'react'

export default function Home({shows, setShows}) {
  const [hovering,setHovering] = useState()
  useEffect(()=>{
    //https://tv-shows-api-js.web.app/shows
    //tv-shows-api-c10.web.app/shows
    fetch('https://tv-shows-api-js.web.app/shows')
    .then(resp=> resp.json())
    .then(setShows)
    .catch(alert)
  },[])

  const handleHover = (e)=> {
    console.log(e.target.src)
    console.log(e.type)
    // document.getElementById()
  }


  return (
    <div className = "main-container">
      {!shows ? "Loading" : shows.map(show => 
       ( <div key = {show.id } className = "button-effect show-container">
          <img src ={show.poster} onMouseEnter={handleHover} onMouseLeave={handleHover} />
            <h2>{show.title}</h2>
            <p>Seasons: {show.seasons}</p>
        </div>)

      )}
    </div>
  );
}
