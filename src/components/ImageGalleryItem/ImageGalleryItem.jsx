import { Component } from 'react';
import style from './ImageGalleryItem.module.css';
import { Modal } from '../Modal/Modal';

export default class ImageGalleryItem extends Component {
  state = {
    isModal: false,
  };

  openModal = e => {
    const modalRef = e.target;

    this.setState({ isModal: true });
    window.addEventListener('keydown', modalRef);
  };

  closeModal = e => {
    if (e.target.nodeName === 'DIV') {
      this.setState({ isModal: false });
    }
  };

  closeEsc = e => {
    console.log(e);
    if (e.key === 'Escape') {
      this.setState({ isModal: false });
    }
  };

  render() {
    return (
      <>
        <li className={style.ImageGalleryItem} onClick={this.openModal}>
          <img
            className={style['ImageGalleryItem-image']}
            src={this.props.webformatURL}
            alt=""
          />
        </li>
        {this.state.isModal && (
          <Modal
            largeImageURL={this.props.largeImageURL}
            closeModal={this.closeModal}
            closeEsc={this.closeEsc}
          />
        )}
      </>
    );
  }
}
