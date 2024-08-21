import React, { FC } from 'react';
import css from './ImageCard.module.css';
import { Image,ImageGalleryProps } from '../ImageGallery/ImageGallery.types';

interface ImageCardProps {
  data: Image;
  onClick: () => void;
}

const ImageCard: FC<ImageCardProps> = ({
  data: {
    urls: { small },
    alt_description,
  },
  onClick,
}) => {
  return (
    <div>
      <img className={css.galleryImage} src={small} alt={alt_description} onClick={onClick} />
    </div>
  );
};

export default ImageCard;
