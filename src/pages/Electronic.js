import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import axios from "axios";
import { Link } from "react-router-dom";

const Electronic = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/electronics")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <section
      id="mobile-products"
      className="product-store position-relative padding-large no-padding-top"
    >
      <div className="container">
        <div className="row">
          <div className="display-header d-flex justify-content-between pb-3">
            <h2 className="display-7 text-dark text-uppercase">Electronic</h2>
            <div className="btn-right">
              <a
                href="shop.html"
                className="btn btn-medium btn-normal text-uppercase"
              >
                Go to Shop
              </a>
            </div>
          </div>
          <div className="swiper product-swiper">
            <div className="swiper-wrapper">
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={50}
                slidesPerView={4}
                // navigation
                pagination={{ clickable: true }}
              >
                {products.map((product, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <div className="product-card position-relative">
                        <div className="image-holder">
                          <img
                            src={product.image}
                            alt={product.title}
                            className="img-fluid"
                            style={{ width: "100%", height: "300px" }}
                          />
                        </div>
                        <div className="cart-concern position-absolute">
                          <div className="cart-button d-flex">
                            <a href="#" className="btn btn-medium btn-black">
                              Add to Cart
                              <svg className="cart-outline">
                                <use xlinkHref="#cart-outline" />
                              </svg>
                            </a>
                          </div>
                        </div>
                        <div className="card-detail d-flex justify-content-between align-items-baseline pt-3">
                          <h5 className="card-title text-uppercase">
                            <a href="#">{product.title}</a>
                          </h5>
                          <span className="item-price text-primary">
                            ${product.price}
                          </span>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      <div className="swiper-pagination position-absolute text-center" />
    </section>
  );
};

export default Electronic;
