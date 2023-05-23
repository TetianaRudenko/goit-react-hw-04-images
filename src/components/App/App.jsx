import { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { apiService } from "../../services/apiService";
import { Wrap } from "./App.styled";
import { Searchbar } from "../Searchbar/Searchbar";
import { Gallery } from "../Gallery/Gallery";
import { Modal } from "../Modal/Modal";
import { LoadMoreButton } from "../Button/Button";
import { Loader } from "../Loader/Loader";

const App = () => {

  const [searchQuery, setSearchQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [totalImages, setTotalImages] = useState(0);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showImage, setShowImage] = useState(false);


  useEffect(() => {
    async function fetchData() {
      
      if (!searchQuery) {
        return;
      }

      setLoading(true);

      try {
        const data = await apiService(searchQuery, page);
        setTotalImages(data.totalHits);
        if (data.totalHits === 0) {
          setImages([]);
          toast.info(`Sorry, there are no images with ${searchQuery}. Please try again.`);
          return;
        }
        setImages(images => [...images, ...data.hits])
      } catch (error) {
        setError(error);
        toast.error('Sorry, an error occurred. Please try again');
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [searchQuery, page]);
  
  const handleSearchbarSubmit = query => {
    if (searchQuery !== query) {
      setSearchQuery(query);
      setPage(1);
      setImages([]);
    } else {
      if (searchQuery === query && images.length > 0) {
        toast.info(`We already found images with ${query}`)
      }
    }
  }

  const  toggleModal = e => {
    setShowModal(!showModal);

    if (showModal === false) {
      setShowImage(e.target);
    }
  }

  const handleLoadMore = () => {
    setPage(page + 1);
  }


  return (

    <Wrap>

      <Searchbar onSubmit={handleSearchbarSubmit} />
      {images && <Gallery images={images} onClick={toggleModal} />}
       
      { totalImages > images.length && images && !loading && !error && (
        <LoadMoreButton handleLoadMore={handleLoadMore}
        />)
      }

      { showModal && showImage && (<Modal  onClose={toggleModal}
            src={showImage.dataset.source}
            alt={showImage.alt}/>) }
      
      {loading && <Loader />}
      <ToastContainer autoClose={2500} />
      
    </Wrap>

  );
}
export { App };