import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import { searchImages, loadMoreImages } from './service/api';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { Puff } from 'react-loader-spinner';
import {Modal} from "./Modal/Modal"

export class App extends Component {
  state = {
    search: '',
    images: [],
    page: 1,
    isLoader: false,
    isModal: false,
  };

  onSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    this.setState({ search: e.target.elements[1].value, page: 1 });

    form.reset();
  };

  // async componentDidMount() {
  //   this.setState({ isLoader: true });
  //   this.setState({
  //     images: await searchImages(this.state.search),
  //     isLoader: false,
  //   });
  // }

  handleLoadMore = () => {
    this.setState(prevState => {
      return {
        page: prevState.page + 1,
        isLoader: true,
      };
    });
  };

  async componentDidUpdate(prevProps, prevState) {
    const { search, page } = this.state;

    if (prevState.page !== this.state.page) {
      const newImages = await loadMoreImages(search, page);

      this.setState(({ images }) => {
        return { images: [...images, ...newImages], isLoader: false };
      });
    }

    if (prevState.search !== search) {
      this.setState({ isLoader: true });
      this.setState({ images: await searchImages(search), isLoader: false });
    }
  }

  openModal = () => {
    this.setState({ isModal: true });
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery images={this.state.images} openModal={this.openModal} />
        {this.state.isLoader ? (
          <Puff color="#00BFFF" height={80} width={80} />
        ) : (
          <Button onClick={this.handleLoadMore} images={this.state.images} />
        )}
        <Modal/>
      </>
    );
  }
}
