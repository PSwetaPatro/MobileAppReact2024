import React from 'react';
import ProductDropdown from './ProductDropdown';

function HomePage() {
  return (
    <div className="page container">
      <h1 className="display-4 mt-5 mb-4 text-center">Welcome to Our Store</h1>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <ProductDropdown />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
