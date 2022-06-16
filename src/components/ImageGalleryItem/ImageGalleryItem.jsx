import { Component } from 'react';
import style from './ImageGalleryItem.module.css';
import { Modal } from '../Modal/Modal';

export default class ImageGalleryItem extends Component {
  state = {
    isModal: false,
  };

  openModal = () => {
    this.setState({ isModal: true });
  };

  closeModal = e => {
    console.log(this.state.isModal);
    this.setState({ isModal: false });
  };

  render() {
    return (
      <li className={style.ImageGalleryItem} onClick={this.openModal}>
        <img
          className={style['ImageGalleryItem-image']}
          src={this.props.webformatURL}
          alt=""
        />
        {this.state.isModal && (
          <Modal
            largeImageURL={this.props.largeImageURL}
            closeModal={this.closeModal}
          />
        )}
      </li>
    );
  }
}
