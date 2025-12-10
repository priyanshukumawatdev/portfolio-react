import React from 'react'

const Features = () => {
  return (
    <>
     <section class="section-feature flat-spacing tf-btn-swiper-main">
            <div class="container">
                <div class="s-header">
                    <h2 class="text-display-2 fw-semibold letter-space--3 effectFade fadeUp">
                        Featured Templates
                    </h2>
                    <a href="#" class="tf-btn">
                        BROWSE ALL
                    </a>
                </div>
                <div class="position-relative">
                    <div dir="ltr" class="swiper tf-swiper swiper-feature" data-preview="2" data-tablet="2" data-mobile-sm="1" data-mobile="1"
                        data-space-lg="40" data-space-md="30" data-space="15" data-pagination="1" data-pagination-sm="1" data-pagination-md="2"
                        data-pagination-lg="2">
                        <div class="swiper-wrapper">
                            
                            <div class="swiper-slide">
                                <div class="wg-feature-v01 hover-img main-mouse-hover">
                                    <a href="#" class="feature-image img-style">
                                        <img loading="lazy" width="628" height="471" src="assets/images/section/feature-1.jpg" alt="Image"/>
                                    </a>
                                    <div class="feature-content">
                                        <div class="info">
                                            <p class="tag text-white-64 letter-space--1">Portfolio</p>
                                            <h5 class="name letter-space--2">
                                                <a href="#" class="link">Portz</a>
                                            </h5>
                                        </div>
                                        <h5 class="price letter-space--2 text-primary">
                                            $49
                                        </h5>
                                    </div>
                                    <div class="tf-mouse">
                                        <a href="#" class="action tf-btn-2">
                                            <i class="icon icon-arrow-long-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                          
                            <div class="swiper-slide">
                                <div class="wg-feature-v01 hover-img main-mouse-hover">
                                    <a href="#" class="feature-image img-style">
                                        <img loading="lazy" width="628" height="471" src="assets/images/section/feature-2.jpg" alt="Image"/>
                                    </a>
                                    <div class="feature-content">
                                        <div class="info">
                                            <p class="tag text-white-64 letter-space--1">Agency</p>
                                            <h5 class="name letter-space--2">
                                                <a href="#" class="link">Agenz</a>
                                            </h5>
                                        </div>
                                        <h5 class="price letter-space--2 text-primary">
                                            $49
                                        </h5>
                                    </div>
                                    <div class="tf-mouse">
                                        <a href="#" class="action tf-btn-2">
                                            <i class="icon icon-arrow-long-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                         
                            <div class="swiper-slide main-mouse-hover">
                                <div class="wg-feature-v01 hover-img">
                                    <a href="#" class="feature-image img-style">
                                        <img loading="lazy" width="628" height="471" src="assets/images/section/feature-1.jpg" alt="Image"/>
                                    </a>
                                    <div class="feature-content">
                                        <div class="info">
                                            <p class="tag text-white-64 letter-space--1">Portfolio</p>
                                            <h5 class="name letter-space--2">
                                                <a href="#" class="link">Portz</a>
                                            </h5>
                                        </div>
                                        <h5 class="price letter-space--2 text-primary">
                                            $49
                                        </h5>
                                    </div>
                                    <div class="tf-mouse">
                                        <a href="#" class="action tf-btn-2">
                                            <i class="icon icon-arrow-long-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="group-btn-slider">
                            <div class="btn-nav-swiper text-caption fw-medium link nav-prev-swiper">
                                <i class="icon icon-arrow-long-left"></i>
                                PREV
                            </div>
                            <div class="btn-nav-swiper text-caption fw-medium link nav-next-swiper">
                                NEXT
                                <i class="icon icon-arrow-long-right"></i>
                            </div>
                        </div>
                    </div>
                    {/* <!-- <div class="hover-wrap left main-mouse-hover">
                        <div class="action tf-btn-2 nav-prev-swiper-2 tf-mouse mode-2">
                            <i class="icon icon-arrow-long-left"></i>
                        </div>
                    </div>
                    <div class="hover-wrap right main-mouse-hover">
                        <div class="action tf-btn-2 nav-next-swiper-2 tf-mouse mode-2">
                            <i class="icon icon-arrow-long-right"></i>
                        </div>
                    </div> --> */}
                </div>
            </div>
        </section>
    </>
  )
}

export default Features