import React from 'react';
import './product.css';

const Mice = () => {
  return (
    <>
      <h2>Mice</h2>
      <ul>
        <li>
          <img
            src='http://img.pccomponentes.com/articles/24/244389/a29.jpg'
            alt='razer viper ultimate'
          />
        </li>
        <li>
          <img
            src='https://resource.logitechg.com/content/dam/gaming/en/products/pro-wireless-gaming-mouse/pro-wireless-carbon-gallery-1.png'
            alt='logitech g pro wireless'
          />
        </li>
        <li>
          <img
            src='https://www.vsgamers.es/thumbnails/product_gallery_large/uploads/products/glorious/ratones/raton-glorious-pc-gaming-race-model-o-wireless-negro/galeria/raton-glorious-pc-gaming-race-model-o-wireless-negro-galeria.jpg'
            alt='glorious model o wireless'
          />
        </li>
      </ul>
    </>
  );
};

export default Mice;
