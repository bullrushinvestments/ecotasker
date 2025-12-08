import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useMediaQuery } from '@material-ui/core';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

interface BusinessSpecProps {
  products?: Product[];
  loading?: boolean;
  error?: string | null;
}

const CreateBusinessSpecification: React.FC<BusinessSpecProps> = ({ products, loading, error }) => {
  const isMobile = useMediaQuery('(max-width:600px)');
  
  useEffect(() => {
    if (!products) {
      fetchData();
    }
  }, [products]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get<Product[]>('https://api.example.com/products');
      setProducts(response.data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  return (
    <div className={clsx('business-spec', { 'is-loading': loading, 'has-error': error })}>
      {error && <p role="alert">{`Error: ${error}`}</p>}
      {!loading && !error && products.length > 0 && (
        <>
          <h2>Featured Products</h2>
          <div className={clsx('product-list', isMobile ? 'mobile' : '')}>
            {products.map(product => (
              <div key={product.id} className="product-item" role="article">
                <img src={product.imageUrl} alt={`Product ${product.name}`} />
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p>${product.price.toFixed(2)}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default CreateBusinessSpecification;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useMediaQuery } from '@material-ui/core';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

interface BusinessSpecProps {
  products?: Product[];
  loading?: boolean;
  error?: string | null;
}

const CreateBusinessSpecification: React.FC<BusinessSpecProps> = ({ products, loading, error }) => {
  const isMobile = useMediaQuery('(max-width:600px)');
  
  useEffect(() => {
    if (!products) {
      fetchData();
    }
  }, [products]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get<Product[]>('https://api.example.com/products');
      setProducts(response.data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  return (
    <div className={clsx('business-spec', { 'is-loading': loading, 'has-error': error })}>
      {error && <p role="alert">{`Error: ${error}`}</p>}
      {!loading && !error && products.length > 0 && (
        <>
          <h2>Featured Products</h2>
          <div className={clsx('product-list', isMobile ? 'mobile' : '')}>
            {products.map(product => (
              <div key={product.id} className="product-item" role="article">
                <img src={product.imageUrl} alt={`Product ${product.name}`} />
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p>${product.price.toFixed(2)}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default CreateBusinessSpecification;