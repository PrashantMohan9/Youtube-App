import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';

const WatchPage = () => {
    const [searchParams] = useSearchParams();
    //To get query param
    // console.log(searchParams.get("v")); 

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(closeMenu())
    },[dispatch]);  //Added dispatch in dependency array just to remove esLint Warning
                    //Works fine even if not added in dep array
  return (
    <div>
        <iframe className='px-5'
            width="1200" 
            height="600" 
            src={ "https://www.youtube.com/embed/" + searchParams.get("v") } 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen
        ></iframe>
    </div>
  )
}

export default WatchPage