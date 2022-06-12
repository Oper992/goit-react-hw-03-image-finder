import { Component } from 'react';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import style from './Searchbar.module.css';

export default class ImageGallery extends Component {
  render() {
    return (
      <ul className={style.ImageGallery}>
        <ImageGalleryItem />
      </ul>
    );
  }
}
