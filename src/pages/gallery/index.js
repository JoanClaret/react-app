require('./style.scss');

import React from 'react';

export default class Gallery extends React.Component {
  render() {
    return(
      <div>
        <h1>Gallery</h1>
        <div className="gallery">
            <img className="gallery--image" src="https://placeholdit.imgix.net/~text?txtsize=20&txt=Image&w=150&h=150"/>
            <img className="gallery--image" src="https://placeholdit.imgix.net/~text?txtsize=20&txt=Image&w=150&h=150"/>
            <img className="gallery--image" src="https://placeholdit.imgix.net/~text?txtsize=20&txt=Image&w=150&h=150"/>
            <img className="gallery--image" src="https://placeholdit.imgix.net/~text?txtsize=20&txt=Image&w=150&h=150"/>
            <img className="gallery--image" src="https://placeholdit.imgix.net/~text?txtsize=20&txt=Image&w=150&h=150"/>
            <img className="gallery--image" src="https://placeholdit.imgix.net/~text?txtsize=20&txt=Image&w=150&h=150"/>
            <img className="gallery--image" src="https://placeholdit.imgix.net/~text?txtsize=20&txt=Image&w=150&h=150"/>
            <img className="gallery--image" src="https://placeholdit.imgix.net/~text?txtsize=20&txt=Image&w=150&h=150"/>
            <img className="gallery--image" src="https://placeholdit.imgix.net/~text?txtsize=20&txt=Image&w=150&h=150"/>
            <img className="gallery--image" src="https://placeholdit.imgix.net/~text?txtsize=20&txt=Image&w=150&h=150"/>
            <img className="gallery--image" src="https://placeholdit.imgix.net/~text?txtsize=20&txt=Image&w=150&h=150"/>
            <img className="gallery--image" src="https://placeholdit.imgix.net/~text?txtsize=20&txt=Image&w=150&h=150"/>
        </div>
      </div>
    )
  }
}
