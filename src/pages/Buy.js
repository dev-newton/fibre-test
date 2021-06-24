import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import NumberFormat from "react-number-format";

import Header from "../components/Header/Header";
import SearchBar from "../components/SearchBar/SearchBar";
import ScrollBanner from "../components/ScrollBanner/ScrollBanner";
import Banner from "../components/ScrollBanner/Banner";
import backImg from "../assets/images/backImg.png";
import Categories from "../components/Categories/Categories";
import Category from "../components/Categories/Category";
import Products from "../components/Products/Products";
import Product from "../components/Products/Product";
import CartIcon from "../components/CartIcon/CartIcon";
import Navbar from "../components/Navbar/Navbar";

import {
  fetchProducts,
  fetchProductLocations,
} from "../store/actions/products";

const bannerText1 = (
  <p>
    Having any <span className="banner-text-highlight">issues </span>
    with
    <br /> your order?
  </p>
);

const bannerText2 = (
  <p>
    Having any <span className="banner-text-highlight">issues </span>
    with
    <br /> your order?
  </p>
);

const bannerText3 = (
  <p>
    Having any <span className="">issues </span>
    with
    <br /> your order?
  </p>
);

const Buy = () => {
  const [clicked, setClicked] = useState(false);
  const [selected, setSelected] = useState("All Places");
  const [searched, setSearched] = useState("");
  const [searchedErrorMessage, setSearchedErrorMessage] = useState("");

  const [products, setProducts] = useState([]);
  const [productLocations, setProductLocations] = useState([]);

  const _products = useSelector((state) => state.products.products);
  const _product_locations = useSelector(
    (state) => state.products.product_locations
  );
  const _count = useSelector((state) => state.cart.count);

  const dispatch = useDispatch();

  useEffect(() => {
    setProducts(_products);
    setProductLocations(_product_locations);
  }, [_products, _product_locations]);

  useEffect(() => {
    getProducts();
    getProductLocations();
  }, []);

  const getProducts = async () => {
    try {
      await dispatch(fetchProducts());
    } catch (error) {
      console.log(error);
    }
  };

  const getProductLocations = async () => {
    try {
      await dispatch(fetchProductLocations());
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearchedChanged = (e) => {
    if (e.target.value.length <= 1) setProducts(_products);
    setSearched(e.target.value);
    setSearchedErrorMessage(false);
  };

  const handleSearched = async () => {
    const searched_products = await products.find(
      (product) => searched.toLowerCase() === product.name.toLowerCase()
    );

    if (searched.length === 0) {
      setSearchedErrorMessage("Search field cannot be empty !");
      setProducts(_products);
      return;
    }

    if (searched_products === undefined) {
      setSearchedErrorMessage("No match found !");
      setProducts(_products);
      return;
    }

    setProducts([searched_products]);
  };

  return (
    <>
      <div className="container">
        <Header title="Trollbasket" />
        <div className="location-wrapper">
          <div
            onMouseEnter={() => setClicked(true)}
            onMouseLeave={() => setClicked(false)}
            className="location-cover"
          >
            <div className={`location ${clicked && `active`}`}>
              <div className="location-circle">
                <i className="fas fa-map-marker-alt"></i>
              </div>

              <p className="location-text">{selected}</p>
              <i className="fas fa-chevron-down"></i>
            </div>
            {clicked && (
              <ul className="location-dropdown">
                <li
                  className="location-dropdown-item"
                  onClick={() => {
                    setClicked(false);
                    setSelected("All Places");
                  }}
                >
                  All Places
                </li>
                {productLocations.map((location, i) => {
                  return (
                    <li
                      key={i}
                      onClick={() => {
                        setClicked(false);
                        setSelected(location);
                      }}
                      className="location-dropdown-item"
                    >
                      {location}
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
          <div className="location">
            <div className="location-circle">
              <i className="fas fa-archive"></i>
            </div>
            <p className="location-text">My Orders</p>
          </div>
          <Link className="Link" to="/buy/cart">
            <div className="location">
              <CartIcon cartCounter={_count} />

              <p className="location-text">Cart</p>
            </div>
          </Link>
        </div>
        <SearchBar
          value={searched}
          onChange={handleSearchedChanged}
          onClick={handleSearched}
          placeholder="Search merchbuy"
          searchErrorMessage={searchedErrorMessage}
        />
        <ScrollBanner>
          <Banner
            bannerColor="#227eff"
            bannerText={bannerText1}
            bannerButtonText="Contact Us"
            bannerButtonColor="#fff"
            bannerButtonTextColor="#227eff"
          />

          <Banner
            bannerImg={backImg}
            bannerText={bannerText2}
            bannerButtonText="Contact Us"
            bannerButtonColor="#227eff"
            bannerButtonTextColor="#fff"
          />

          <Banner
            bannerColor="#ee6f44"
            bannerText={bannerText3}
            bannerTextColor="#fff"
            bannerButtonText="Contact Us"
            bannerButtonColor="#fff"
            bannerButtonTextColor="#ee6f44"
          />
        </ScrollBanner>
        <Categories>
          <Category
            categoryColor="#227eff"
            categoryIcon="fas fa-file-alt"
            categoryText="Product Categories"
          />
          <Category
            categoryColor="#ee6f44"
            categoryIcon="fas fa-fire"
            categoryText="Popular Products"
          />
          <Category
            categoryColor="#7e42f5"
            categoryIcon="fas fa-thumbs-up"
            categoryText="Recommended Products"
          />
          <Category
            categoryColor="#05944f"
            categoryIcon="fas fa-store"
            categoryText="Shops"
          />
        </Categories>
        <Products>
          <div className="products-wrapper">
            {products.map((product, i) => {
              if (product.location === selected) {
                return (
                  <Product
                    key={i}
                    productImage={product.image}
                    productName={product.name}
                    productPriceRange={
                      <>
                        &#8358;
                        <NumberFormat
                          value={product.price}
                          displayType={"text"}
                          thousandSeparator={true}
                        />
                      </>
                    }
                    productQuantity={product.stock}
                    linkTo={`/buy/product-details/${product.id}`}
                  />
                );
              } else if (selected === "All Places") {
                return (
                  <Product
                    key={i}
                    productImage={product.image}
                    productName={product.name}
                    productPriceRange={
                      <>
                        &#8358;
                        <NumberFormat
                          value={product.price}
                          displayType={"text"}
                          thousandSeparator={true}
                        />
                      </>
                    }
                    productQuantity={product.stock}
                    linkTo={`/buy/product-details/${product.id}`}
                  />
                );
              }
            })}
          </div>
        </Products>
      </div>
      <Navbar activeNav="buy" />
    </>
  );
};

export default Buy;
