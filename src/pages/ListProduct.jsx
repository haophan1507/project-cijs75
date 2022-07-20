import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ListProduct() {
  const [product, setProduct] = useState([]);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetData = async () => {
      const res = await axios.get(
        'https://625a91bf0ab4013f94a2d9a8.mockapi.io/meals'
      );
      return res.data;
    };

    fetData().then((data) => setProduct(data));
  }, []);

  const productSearch = product.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <input
        type="text"
        placeholder="search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      {productSearch.map((item, index) => {
        return (
          <div key={index}>
            <p>{item.description}</p>
            <img
              src={item.image}
              height="200px"
              width="200px"
              onClick={() => navigate(`/product/${item.id}`)}
              alt=""
            />
          </div>
        );
      })}
    </>
  );
}

export default ListProduct;
