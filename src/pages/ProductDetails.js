import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NumberFormat from "react-number-format";

import pic2 from "../assets/images/Ellipse.png";
import Header from "../components/Header/Header";
import Image from "../components/Image/Image";
import Navbar from "../components/Navbar/Navbar";
import CartMessage from "../components/CartMessage/CartMessage";

import { fetchProductById } from "../store/actions/products";
import { addToCart } from "../store/actions/cart";

const ProductDetails = ({ history }) => {
  const [hideCartMessage, setHideCartMessage] = useState(true);
  const [product, setProduct] = useState([]);

  const product_id = history.location.pathname.split(
    "/buy/product-details/"
  )[1];

  const _product = useSelector((state) => state.products.product_by_id);
  const _count = useSelector((state) => state.cart.count);

  const dispatch = useDispatch();

  useEffect(() => {
    setProduct(_product);
  }, [product]);

  useEffect(() => {
    getProductById();
  }, []);

  const getProductById = async () => {
    try {
      await dispatch(fetchProductById(product_id));
    } catch (error) {
      console.log(error);
    }
  };

  const cartClickedHandler = () => {
    setHideCartMessage(false);
    try {
      dispatch(addToCart(product));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="container">
        <Header
          backIcon="fas fa-chevron-left"
          searchIcon="fas fa-search"
          cartIcon
          cartCounter={_count}
          backIconLink="/buy"
          searchIconLink="#"
          cartIconLink="/buy/cart"
          title="Details"
        />

        <CartMessage
          message="Item added to cart successfully"
          onClick={() => setHideCartMessage(true)}
          hideMessage={hideCartMessage}
        />

        <Image image={product.image} />

        <div className="product-details-container">
          <h3 className="product-text">{product.name}</h3>
          <p className="product-description">{product.description}</p>
          <p className="product-amount-range">
            &#8358;
            <NumberFormat
              value={product.price}
              displayType={"text"}
              thousandSeparator={true}
            />
            <span className="product-piece"> /Piece</span>
          </p>
        </div>
        <hr className="hr-line" />
        <div className="product-description-container">
          <p className="product-description-text">Product Description</p>
          <i className="fas fa-chevron-right"></i>
        </div>
        <hr className="hr-line" />
        <div className="review-container">
          <div className="review-header-wrapper">
            <p className="review-header-text">Review and Ratings</p>
            <p className="review-view-all">View all</p>
          </div>
          <div className="rating-wrapper">
            <div className="rating-icons">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <div>
              <p className="rating-score">3.0</p>
            </div>
          </div>
          <div className="rating-text-wrapper">
            <p className="rating-text">
              This is the best product I have used in a long while and the size
              fits perfectly and I love the colors!!!!!
            </p>
          </div>
          <div className="reviewer-wrapper">
            <div className="reviewer-img-wrapper">
              <img src={pic2} alt="review-img" className="reviewer-img" />
              <p className="reviewer-name">Segun Arinze</p>
            </div>
          </div>
        </div>
      </div>
      <Navbar activeNavBtn onClick={cartClickedHandler} />
    </>
  );
};

export default ProductDetails;
