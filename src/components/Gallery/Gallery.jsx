import PropTypes from "prop-types";
import { GalleryList, GalleryItem } from "./Gallery.styled";
import { GalleryComponent } from "../GalleryComponent/GalleryComponent";

const Gallery = ({images, onClick}) => {
  return (
    <GalleryList>
      {images.map(image => (
        <GalleryItem key={image.id} >
        
          <GalleryComponent
            webformatURL={image.webformatURL}
            largeImageURL={image.largeImageURL}
            tags={image.tags}
            onClick={onClick}
          /> 
          
        </GalleryItem>
      ))}
    </GalleryList>
  );
}

Gallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired, 
  })),
  onClick: PropTypes.func.isRequired,
}

export { Gallery };