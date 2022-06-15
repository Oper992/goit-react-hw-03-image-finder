import { Component } from 'react';
import style from './Searchbar.module.css';
import {ImSearch} from "./react-icons/im"

export default class Searchbar extends Component {
  render() {
    return (
      <header className={style.Searchbar}>
        <form className={style.Searchform} onSubmit={this.props.onSubmit}>
          <ImSearch/>
          <button type="submit" className={style['SearchForm-button']}>
            <span className={style['SearchForm-button-label']}>Search</span>
          </button>

          <input
            className={style['SearchForm-input']}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="палаючий Кремль..."
          />
        </form>
      </header>
    );
  }
}
