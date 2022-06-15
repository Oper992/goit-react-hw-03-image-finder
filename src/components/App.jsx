import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';

export class App extends Component {
  state = {
    search: '',
    images: [],
    page: 1,
  };

  onSubmit = e => {
    e.preventDefault();
    this.setState({ search: e.target.elements[1].value, page: 1 });
    console.log(this.state.search);
  };

  componentDidMount() {
    this.fetchImages().then(hits => this.setState({ images: hits }));
  }

  // componentDidUpdate(prevState) {
  //   const images = this.state.images;

  //   if (prevState.page !== 1) {
  //   }
  // }

  fetchImages = async () => {
    const baseUrl = 'https://pixabay.com/api/';
    const parameters = new URLSearchParams({
      key: '26236897-1332e9e9dbdbc4080cdf2cc84',
      q: this.state.search,
      image_type: 'photo',
      per_page: 12,
      page: this.state.page,
    });

    try {
      const response = await fetch(`${baseUrl}?${parameters}`);
      const images = await response.json();

      return images.hits;
    } catch (error) {
      console.log(error);
    }
  };

  handleLoadMore = async () => {
    this.setState(({ page }) => {
      return { page: page + 1 };
    });
    const newImages = await this.fetchImages();

    this.setState(({ images }) => {
      return { images: [...images, newImages] };
    });
    console.log(this.state.page);
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery images={this.state.images} />
        {this.state.images.length && <Button onClick={this.handleLoadMore} />}
      </>
    );
  }
}
