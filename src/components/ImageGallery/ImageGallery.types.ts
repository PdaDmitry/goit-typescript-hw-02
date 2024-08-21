export interface Image {
  id: string;
  urls: { small: string };
  alt_description: string;
}

export interface ImageGalleryProps {
  items: Image[];
  handleClick: (item: Image) => void;
}
