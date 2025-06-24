import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../../../Store/Slice/shopSlice";

const ProductView = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { currentProduct } = useSelector((state) => state.shop);

  useEffect(() => {
    dispatch(getProduct(id));
  }, [dispatch, id]);

  console.log(currentProduct)
  return <div className="text-white">{currentProduct.title}</div>;
};

export default ProductView;
