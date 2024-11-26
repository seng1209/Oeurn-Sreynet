import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

const SmartWatch = () => {
  return (
    <section
      id="smart-watches"
      className="product-store padding-large position-relative"
    >
      <div className="container">
        <div className="row">
          <div className="display-header d-flex justify-content-between pb-3">
            <h2 className="display-7 text-dark text-uppercase">
              Smart Watches
            </h2>
            <div className="btn-right">
              <a
                href="shop.html"
                className="btn btn-medium btn-normal text-uppercase"
              >
                Go to Shop
              </a>
            </div>
          </div>
          <div className="swiper product-watch-swiper">
            <div className="swiper-wrapper">
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={50}
                slidesPerView={4}
                // navigation
                pagination={{ clickable: true }}
              >
                <SwiperSlide>
                  <div className="swiper-slide">
                    <div className="product-card position-relative">
                      <div className="image-holder">
                        <img
                          src="images/product-item6.jpg"
                          alt="product-item"
                          className="img-fluid"
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
                        <h3 className="card-title text-uppercase">
                          <a href="#">Pink watch</a>
                        </h3>
                        <span className="item-price text-primary">$870</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide">
                    <div className="product-card position-relative">
                      <div className="image-holder">
                        <img
                          src="images/product-item7.jpg"
                          alt="product-item"
                          className="img-fluid"
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
                        <h3 className="card-title text-uppercase">
                          <a href="#">Heavy watch</a>
                        </h3>
                        <span className="item-price text-primary">$680</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide">
                    <div className="product-card position-relative">
                      <div className="image-holder">
                        <img
                          src="images/product-item8.jpg"
                          alt="product-item"
                          className="img-fluid"
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
                        <h3 className="card-title text-uppercase">
                          <a href="#">spotted watch</a>
                        </h3>
                        <span className="item-price text-primary">$750</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide">
                    <div className="product-card position-relative">
                      <div className="image-holder">
                        <img
                          src="images/product-item9.jpg"
                          alt="product-item"
                          className="img-fluid"
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
                        <h3 className="card-title text-uppercase">
                          <a href="#">black watch</a>
                        </h3>
                        <span className="item-price text-primary">$650</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide">
                    <div className="product-card position-relative">
                      <div className="image-holder">
                        <img
                          src="images/product-item10.jpg"
                          alt="product-item"
                          className="img-fluid"
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
                      <div className="card-detail d-flex justify-content-between pt-3">
                        <h3 className="card-title text-uppercase">
                          <a href="#">black watch</a>
                        </h3>
                        <span className="item-price text-primary">$750</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      <div className="swiper-pagination position-absolute text-center" />
    </section>
  );
};

export default SmartWatch;
