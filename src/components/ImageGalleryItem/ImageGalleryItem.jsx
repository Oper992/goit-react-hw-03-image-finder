import { Component } from 'react';
import style from './ImageGalleryItem.module.css';

export default class ImageGalleryItem extends Component {
  render() {
    return (
      <li className={style.ImageGalleryItem}>
        <img
          className={style['ImageGalleryItem-image']}
          src={this.props.webformatURL}
          alt=""
        />
      </li>
    );
  }
}
