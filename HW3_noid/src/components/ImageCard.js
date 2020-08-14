import React from 'react';
import './ImageCard.css';
import SearchInput from './SearchInput';

const ImageCard=(props)=>{
    return(
        <div>
     <div class="sample-wallpaper">
          <article class="wallpaper">
            <img src={props.uri} alt="Wallpaper #1" class="wallpaper" />
          </article>
          </div>

        </div>
    );
}

export default ImageCard;