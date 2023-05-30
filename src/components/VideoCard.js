import React from 'react'

const VideoCard = ({info}) => {
    if(info==null)
        return;

    const { snippet, statistics } = info || {};
    const { channelTitle, title, thumbnails } = snippet;

    return (
    <div className="p-2 m-2 w-72 shadow-lg">
        <img alt="videoCard" className='rounded-lg' src={thumbnails.medium.url}/>
        <ul>
            <li className='font-bold py-2'>{title}</li>
            <li>{channelTitle}</li>
            <li>{statistics.viewCount} Views</li>
        </ul>
    </div>
    );
}

export default VideoCard