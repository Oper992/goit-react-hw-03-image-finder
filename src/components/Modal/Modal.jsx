import { Component } from 'react';
import style from './Modal.module.css';

export class Modal extends Component {
  render() {
    const { closeModal, largeImageURL } = this.props;
    return (
      <div className={style.Overlay} onClick={closeModal}>
        <div className={style.Modal}>
          <img src={largeImageURL} alt=""></img>
        </div>
      </div>
    );
  }
}
