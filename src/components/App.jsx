import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';

export class App extends Component {
  state = {
    search: '',
  };

  onSubmit = e => {
    e.preventDefault();

    this.setState({ search: e.currentTarget.value });
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.onSubmit} />
      </>
    );
  }
}
