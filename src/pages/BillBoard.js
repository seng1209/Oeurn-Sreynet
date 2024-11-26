import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";
import "swiper/swiper-bundle.css";

const BillBoard = () => {
  return (
    <section
      id="billboard"
      className="position-relative overflow-hidden bg-light-blue"
    >
      <div className="swiper main-swiper">
        <div className="swiper-wrapper">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide>
              <div className="swiper-slide">
                <div className="container">
                  <div className="row d-flex align-items-center">
                    <div className="col-md-6">
                      <div className="banner-content">
                        <h1 className="display-2 text-uppercase text-dark pb-5">
                          Your Products Are Great.
                        </h1>
                        <a
                          href="shop.html"
                          className="btn btn-medium btn-dark text-uppercase btn-rounded-none"
                        >
                          Shop Product
                        </a>
                      </div>
                    </div>
                    <div className="col-md-5">
                      <div className="image-holder">
                        <img src="images/banner-image.png" alt="banner" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide">
                <div className="container">
                  <div className="row d-flex flex-wrap align-items-center">
                    <div className="col-md-6">
                      <div className="banner-content">
                        <h1 className="display-2 text-uppercase text-dark pb-5">
                          Technology Hack You Won't Get
                        </h1>
                        <a
                          href="shop.html"
                          className="btn btn-medium btn-dark text-uppercase btn-rounded-none"
                        >
                          Shop Product
                        </a>
                      </div>
                    </div>
                    <div className="col-md-5">
                      <div className="image-holder">
                        <img src="images/banner-image.png" alt="banner" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide">
                <div className="container">
                  <div className="row d-flex align-items-center">
                    <div className="col-md-6">
                      <div className="banner-content">
                        <h1 className="display-2 text-uppercase text-dark pb-5">
                          Your Products Are Great.
                        </h1>
                        <a
                          href="shop.html"
                          className="btn btn-medium btn-dark text-uppercase btn-rounded-none"
                        >
                          Shop Product
                        </a>
                      </div>
                    </div>
                    <div className="col-md-5">
                      <div className="image-holder">
                        <img src="images/banner-image.png" alt="banner" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide">
                <div className="container">
                  <div className="row d-flex flex-wrap align-items-center">
                    <div className="col-md-6">
                      <div className="banner-content">
                        <h1 className="display-2 text-uppercase text-dark pb-5">
                          Technology Hack You Won't Get
                        </h1>
                        <a
                          href="shop.html"
                          className="btn btn-medium btn-dark text-uppercase btn-rounded-none"
                        >
                          Shop Product
                        </a>
                      </div>
                    </div>
                    <div className="col-md-5">
                      <div className="image-holder">
                        <img src="images/banner-image.png" alt="banner" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      {/* <div className="swiper-icon swiper-arrow swiper-arrow-prev">
        <svg className="chevron-left">
          <use xlinkHref="#chevron-left" />
        </svg>
      </div>
      <div className="swiper-icon swiper-arrow swiper-arrow-next">
        <svg className="chevron-right">
          <use xlinkHref="#chevron-right" />
        </svg>
      </div> */}
    </section>
  );
};

export default BillBoard;
