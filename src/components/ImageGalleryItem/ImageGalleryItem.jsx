import { Component } from 'react';
import style from './ImageGalleryItem.module.css';

export default class ImageGalleryItem extends Component {
  render() {
    const { id, webformatURL, largeImageURL } = this.props.images;

    return (
      <li className={style['gallery-item']} key={id}>
        <img src={webformatURL} alt="" />
      </li>
    );
  }
}
