import React, { FC } from 'react';
import Modal from 'react-modal';
import { Image } from '../ImageGallery/ImageGallery.types';


interface ImageModalProps {
  item: Image;
  alt_description: string;
  isOpen: boolean;
  onRequestClose: () => void;
  style: object;
}

const ImageModal: FC<ImageModalProps> = ({
  item: {
    urls: { regular },
  },
  alt_description,
  isOpen,
  onRequestClose,
  style,
}) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={style}>
      <img src={regular} alt={alt_description} />
    </Modal>
  );
};

export default ImageModal;
