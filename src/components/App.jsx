import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    search: '',
  };

  onSubmit = e => {
    e.preventDefault();
    this.setState({ search: e.target.elements[1].value });
  };

  async fetchImages() {
    const baseUrl = 'https://pixabay.com/api/';
    const key = '26236897-1332e9e9dbdbc4080cdf2cc84';

    const response = await fetch(
      `${baseUrl}?key=${key}&q=${this.state.search}&page=1`
    );

    
    const images = await response.json();
    console.log(images);
    return images;
  }

  render() {
    return (
      <>
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery images={this.fetchImages()} />
      </>
    );
  }
}
