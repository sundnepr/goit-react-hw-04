import PropTypes from 'prop-types';
import css from './ImageCard.module.css';

export function ImageGalleryItem({ image, onClick }) {
  return (
      <li className={css.imageGalleryItem}>
      <img id={image.id} src={image.urls.regular} alt={image.tags} data-large={image.urls.full} onClick={onClick} />
    </li>
  );
}

ImageGalleryItem.prototype = {
  image: PropTypes.shape({
    id: PropTypes.string.isRequired,
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};