import React, { useState } from 'react'
import './VideoSidebar.css'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CommentIcon from '@material-ui/icons/Comment';
import ShareIcon from '@material-ui/icons/Share';

function VideoSidebar(props) {
    const [liked,setLiked] = useState(false);
    return (
        <div className="videoSidebar">
            <div className="videoSidebar__button">
                {liked ? (
                    <FavoriteIcon fontSize="large" onClick={e => setLiked(false)}/>
                ): (
                    <FavoriteBorderIcon onClick={e => setLiked(true)}/>
                )}
                <p>{liked ? props.likes + 1:props.likes}</p>
            </div>
            <div className="videoSidebar__button">
                <CommentIcon fontSize="large"/>
                <p>{props.messages}</p>
            </div>
            <div className="videoSidebar__button">
                <ShareIcon fontSize="large"/>
                <p>{props.share}</p>
            </div>
        </div>
    )
}

export default VideoSidebar
