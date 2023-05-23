import PropTypes from "prop-types";
import { GalleryImage } from "./GalleryComponent.styled";

const GalleryComponent = ({
  webformatURL, 
  largeImageURL,
  tags,
  onClick,
}) => {
  return (
    <>
      <GalleryImage
        src={webformatURL}
        alt={tags}
        data-source={largeImageURL}
        onClick={onClick}
      />
    </>
  );
}


GalleryComponent.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export { GalleryComponent };