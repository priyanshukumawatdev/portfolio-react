import React from 'react'

const Hero = () => {
  return (
    <>
    
     <div class="section-hero-v1">
            <div class="overlay"></div>
            <div class="bg-video">
                <video class="" muted="" autoplay="" loop="" playsinline="">
                    <source src="assets/images/video/corridor.webm" type="video/mp4"/>
                </video>
                <div class="video-overlay"></div>
                <div class="video-overlay-2"></div>
                <div class="video-overlay-2"></div>
            </div>
            <div class="content-wrap">
                <div class="container">
                    <div class="row">
                        <div class="col-md-8">
                            <div class="col-left">
                                <ul class="tf-list vertical text-caption fw-medium ">
                                    <li><a href="#" class="link effectFade fadeUp">WEB-DESIGNER</a></li>
                                    <li><a href="#" class="link effectFade fadeUp">BLOGER</a></li>
                                    <li><a href="#" class="link effectFade fadeUp">TREND ANALYST</a></li>
                                </ul>
                                <div class="davies-large">
                                    <div class="effectFade fadeRotateX">
                                        DAVIES<span class="text-primary">_</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="col-right">
                                <div class="top text-caption fw-medium d-flex justify-content-between align-items-center effectFade">
                                    <p class="title text-has-dot ">
                                        <span class="br-dot"></span>
                                        AVAILABLE FOR WORK
                                    </p>
                                    <span>
                                        © 2025
                                    </span>
                                </div>
                                <div class="bot">
                                    <p class="desc text-white-64 effectFade fadeRight view-visible">
                                        I craft bold brands and modern websites with purpose. Each detail balances design and usability for
                                        impact. My
                                        work
                                        adapts as your vision grows.
                                    </p>
                                    <div class="effectFade fadeRight view-visible">
                                        <a href="#contactScroll" class="tf-btn ">
                                            START A PROJECT
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Hero