import { Component } from 'react';
import style from './Modal.module.css';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.props.closeEsc);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.props.closeEsc);
  }

  render() {
    const { closeModal, largeImageURL } = this.props;
    return (
      <div className={style.Overlay} onClick={closeModal}>
        <div className={style.Modal}>
          <img src={largeImageURL} alt="" width="1000px"></img>
        </div>
      </div>
    );
  }
}
