import { useState } from "react";
import { ImageModal } from "../imageModal/ImageModal";
import css from './ImageCard.module.css'
export const ImageCard = ({ item }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className={css.imgItem}>
      <img className={css.img} src={item.urls.small} alt={item.description} onClick={openModal} />
      <ImageModal item={item} isOpen={modalIsOpen} closeModal={closeModal} />
    </div>
  );
};