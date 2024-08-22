import React, { FC } from 'react';
import Modal from 'react-modal';
import { Image } from '../ImageGallery/ImageGallery.types';


interface ImageModalProps {
  item: Image|null;
  isOpen: boolean;
  onRequestClose: () => void;
  style: object;
}

const ImageModal: FC<ImageModalProps> = ({
  item,
  isOpen,
  onRequestClose,
  style,
}) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={style}>
      <img src={item?.urls.regular} alt={item?.alt_description||'Image'} />
    </Modal>
  );
};

export default ImageModal;
