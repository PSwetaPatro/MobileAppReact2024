import React, { useState, useEffect } from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ProductDropdown.css'; // Import CSS file for styling

function ProductDropdown() {
  const [osType, setOsType] = useState('');
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [price, setPrice] = useState(0);
  const [images, setImages] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Update images when selectedProduct changes
    if (selectedProduct && selectedProduct.images) {
      setImages(selectedProduct.images);
    }

    // Load reviews when selectedProduct changes
    if (selectedProduct && selectedProduct.reviews) {
      setReviews(selectedProduct.reviews);
    }
  }, [selectedProduct]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const handleOsTypeChange = (e) => {
    const os = e.target.value;
    setOsType(os);
    setBrand('');
    setModel('');
  };

  const handleBrandChange = (e) => {
    const selectedBrand = e.target.value;
    setBrand(selectedBrand);
    setModel(''); // Reset model when brand changes
  };

  const handleModelChange = (e) => {
    const selectedModel = e.target.value;
    setModel(selectedModel);
    const selectedProduct = productsData[osType]?.[brand]?.find(product => product.name === selectedModel);
    setSelectedProduct(selectedProduct);
    setSelectedColor('');
    setSelectedVariant(null);
    setPrice(selectedProduct?.variants[0]?.price || 0); // Set default price to the first variant price
  };

  const handleColorChange = (e) => {
    const selectedColor = e.target.value;
    setSelectedColor(selectedColor);
    const selectedVariant = selectedProduct?.variants.find(variant => variant.colors.includes(selectedColor));
    setSelectedVariant(selectedVariant);
    setPrice(selectedVariant?.price || selectedProduct?.variants[0]?.price || 0); // Set default price to the first variant price
  };

  const handleVariantChange = (e) => {
    const selectedVariantType = e.target.value;
    const selectedVariant = selectedProduct?.variants.find(variant => variant.type === selectedVariantType);
    setSelectedVariant(selectedVariant);
    setPrice(selectedVariant?.price || selectedProduct?.variants[0]?.price || 0); // Set default price to the first variant price
  };

  const handleAddToCart = () => {
    if (selectedProduct && selectedColor && selectedVariant) {
      console.log('Added to cart:', selectedProduct.name, selectedColor, selectedVariant);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <select className="form-select mb-3" value={osType} onChange={handleOsTypeChange}>
            <option value="">Select OS Type</option>
            <option value="Android">Android</option>
            <option value="iOS">iOS</option>
          </select>
        </div>
        <div className="col">
          <select className="form-select mb-3" value={brand} onChange={handleBrandChange} disabled={!osType}>
            <option value="">Select Brand</option>
            {osType === 'Android' && (
              <>
                <option value="Samsung">Samsung</option>
                <option value="Xiaomi">Xiaomi</option>
                <option value="OnePlus">OnePlus</option>
                <option value="Google">Google</option>
              </>
            )}
            {osType === 'iOS' && (
              <option value="Apple">Apple</option>
            )}
          </select>
        </div>
        <div className="col">
          <select className="form-select mb-3" value={model} onChange={handleModelChange} disabled={!brand}>
            <option value="">Select Model</option>
            {brand && productsData[osType]?.[brand]?.map((product, index) => (
              <option key={index} value={product.name}>{product.name}</option>
            ))}
          </select>
        </div>
      </div>

      {selectedProduct && (
        <div className="product-details">
          <h3>{selectedProduct.name}</h3>
          <p className="price">Price: ${price}</p>
          <p>Colors:</p>
          <select className="form-select mb-3" value={selectedColor} onChange={handleColorChange}>
            <option value="">Select Color</option>
            {selectedProduct.colors?.map((color, index) => (
              <option key={index} value={color}>{color}</option>
            ))}
          </select>

          {selectedVariant && (
            <div>
              <p>Variants:</p>
              <select className="form-select mb-3" value={selectedVariant.type} onChange={handleVariantChange}>
                {selectedProduct.variants.map((variant, index) => (
                  <option key={index} value={variant.type}>{variant.type}</option>
                ))}
              </select>
            </div>
          )}

          <button className="btn btn-primary" onClick={handleAddToCart}>Add to Cart</button>
        </div>
      )}

      {images.length > 0 && (
        <div className="image-slider">
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index}>
                <img src={image.url} alt={selectedProduct.name} className="slide-image" />
              </div>
            ))}
          </Slider>
        </div>
      )}

      {reviews.length > 0 && (
        <div className="reviews">
          <h3>Reviews</h3>
          <ul>
            {reviews.map((review, index) => (
              <li key={index}>
                <p>{review.user}</p>
                <p>{review.comment}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ProductDropdown;
