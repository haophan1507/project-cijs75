import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function DetailProduct() {
  const param = useParams();
  console.log(param);
  const [productDetail, setProductDetail] = useState([]);

  useEffect(() => {
    const fetData = async () => {
      const res = await axios.get(
        `https://625a91bf0ab4013f94a2d9a8.mockapi.io/meals/${param.id}`
      );
      return res.data;
    };

    fetData().then((data) => setProductDetail(data));
  }, [param.id]);

  return <div>{productDetail.name}</div>;
}

export default DetailProduct;
