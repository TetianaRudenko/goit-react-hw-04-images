import { useEffect} from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import { Overlay, OverlayModal } from "./Modal.styled";

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ src, alt, onClose }) => {
  
  useEffect(() => {
    const handleKeydown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    }
    
    window.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('keydown', handleKeydown);
    }

  }, [onClose]);
  

  const handleOverlayClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }

  
  return createPortal(
    <Overlay onClick={handleOverlayClick}>
      <OverlayModal>
        <img src={src} alt={alt} width="1280" />
        {/* {this.props.children} */}
      </OverlayModal>
    </Overlay>,
    modalRoot
  );
}

Modal.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export { Modal };