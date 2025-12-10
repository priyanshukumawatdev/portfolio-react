import React from 'react'

const Testimonial = () => {
  return (
    <>
     <section class="section-testimonial flat-spacing tf-btn-swiper-main">
            <h6 class="mini-title text-caption text-white-64 text-center">
                TRUSTED BY FOUNDED
            </h6>
            <div dir="ltr" class="swiper tf-swiper swiper-testimonial" data-preview="2.59" data-tablet="2.2" data-mobile-sm="1.5" data-mobile="1.2"
                data-loop="true" data-center="true" data-space-lg="40" data-space-md="30" data-space="15" data-init="1">
                <div class="swiper-wrapper">
                
                    <div class="swiper-slide">
                        <div class="testimonial-v01">
                            <div class="tes-author">
                                <div class="author_image">
                                    <img loading="lazy" width="437" height="328" src="assets/images/section/tes-1.jpg" alt="Image"/>
                                </div>
                                <div class="author_info">
                                    <h6 class="info__name text-body-1 letter-space--1">Ethan Morales</h6>
                                    <p class="info__duty">Marketing Director, Horizon Apparel</p>
                                </div>
                            </div>
                            <div class="br-line"></div>
                            <p class="tes-text text-body-1">
                                “Davies reimagined our digital presence. The site is striking, fast, and intuitive—engaging visitors while
                                clearly
                                expressing our brand.”
                            </p>
                        </div>
                    </div>
                   
                    <div class="swiper-slide">
                        <div class="testimonial-v01">
                            <div class="tes-author">
                                <div class="author_image">
                                    <img loading="lazy" width="437" height="328" src="assets/images/section/tes-2.jpg" alt="Image"/>
                                </div>
                                <div class="author_info">
                                    <h6 class="info__name text-body-1 letter-space--1">Liam Carter</h6>
                                    <p class="info__duty">Founder, Arcadia Tech</p>
                                </div>
                            </div>
                            <div class="br-line"></div>
                            <p class="tes-text text-body-1">
                                “Working with Davies was seamless. He nailed our vision and delivered a modern, functional website that feels
                                distinctly
                                ours.”
                            </p>
                        </div>
                    </div>
                   
                    <div class="swiper-slide">
                        <div class="testimonial-v01">
                            <div class="tes-author">
                                <div class="author_image">
                                    <img loading="lazy" width="437" height="328" src="assets/images/section/tes-3.jpg" alt="Image"/>
                                </div>
                                <div class="author_info">
                                    <h6 class="info__name text-body-1 letter-space--1">Sofia Carson</h6>
                                    <p class="info__duty">Product Manager, Lumos Studio</p>
                                </div>
                            </div>
                            <div class="br-line"></div>
                            <p class="tes-text text-body-1">
                                “From first concept to launch, Davies exceeded expectations. Every choice was intentional, making our platform
                                beautiful and easy to use.”
                            </p>
                        </div>
                    </div>

                    <div class="swiper-slide">
                        <div class="testimonial-v01">
                            <div class="tes-author">
                                <div class="author_image">
                                    <img loading="lazy" width="437" height="328" src="assets/images/section/tes-2.jpg" alt="Image"/>
                                </div>
                                <div class="author_info">
                                    <h6 class="info__name text-body-1 letter-space--1">Ethan Morales</h6>
                                    <p class="info__duty">Marketing Director, Horizon Apparel</p>
                                </div>
                            </div>
                            <div class="br-line"></div>
                            <p class="tes-text text-body-1">
                                “Davies reimagined our digital presence. The site is striking, fast, and intuitive—engaging visitors while
                                clearly
                                expressing our brand.”
                            </p>
                        </div>
                    </div>
                </div>
                <div class="group-btn-slider">
                    <div class="nav-prev-swiper lh-1">
                        <i class="icon icon-arrow-caret-left fs-8"></i>
                    </div>
                    <div class="sw-dot-default tf-sw-pagination"></div>
                    <div class="nav-next-swiper lh-1">
                        <i class="icon icon-arrow-caret-right fs-8"></i>
                    </div>
                </div>
            </div>
            <div class="indicator-wrap flat-spacing">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="wg-indicator mb-md-0">
                                <p class="indicate-title text-body-1">
                                    <span class="text-primary">//</span> Projects Delivered
                                </p>
                                <p class="indicate-counter wg-counter text-display-1 fw-medium">
                                    <span class="odometer" data-number="40">10</span> <span class="text-primary">+</span>
                                </p>
                                <p class="indicate-sub">
                                    Creative work that drive <br/>
                                    real results
                                </p>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="wg-indicator mb-md-0">
                                <p class="indicate-title text-body-1">
                                    <span class="text-primary">//</span> Clients Satisfaction
                                </p>
                                <p class="indicate-counter wg-counter text-display-1 fw-medium">
                                    <span class="odometer" data-number="96">10</span> <span class="text-primary">%</span>
                                </p>
                                <p class="indicate-sub">
                                    I mostly focus on <br/>
                                    exceeding expectations
                                </p>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="wg-indicator mb-0">
                                <p class="indicate-title text-body-1">
                                    <span class="text-primary">//</span> Years of Experience
                                </p>
                                <p class="indicate-counter wg-counter text-display-1 fw-medium">
                                    <span class="odometer" data-number="10">1</span> <span class="text-primary">+</span>
                                </p>
                                <p class="indicate-sub">
                                    Mastering the art of animation <br/>
                                    content and design
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bg-img-item">
                <img loading="lazy" width="1440" height="800" src="assets/images/item/grid.png" alt="Image"/>
            </div>
        </section>
    
    
    </>
  )
}

export default Testimonial