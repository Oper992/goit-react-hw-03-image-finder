import { Component } from 'react';
import style from './Button.module.css';

export default class Button extends Component {
  render() {
    return (
      <>
        <button
          type="button"
          className={style.Button}
          onClick={this.props.onClick}
        >
          Load more
        </button>
      </>
    );
  }
}
