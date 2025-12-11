import React from 'react'

const AboutUs = () => {
  return (
    <>
    
     <section class="section-about-me flat-spacing" id="aboutScroll">
            <div class="s-img-bg">
                <img loading="lazy" width="1440" height="906" src="assets/images/section/bg-about.jpg" alt="Background"/>
            </div>
            <div class="container position-relative z-5">
                <div class="row">
                    <div class="col-lg-5">
                        <div class="col-left mb-lg-0">
                            <div class="davies-video">
                                <video class="video" muted="" autoplay="" loop="" playsInline="">
                                    <source src="assets/images/video/davies-video.mp4" type="video/mp4"/>
                                </video>
                                <div class="overlay v1"></div>
                                <div class="overlay mark-1"></div>
                                <div class="overlay mark-2"></div>
                            </div>
                            <div class="signature">
                                <img loading="lazy" width="111" height="40" src="assets/images/logo/davies-small.svg" alt="Image"/>
                            </div>
                            <div class="badget">
                                <img loading="lazy" width="156" height="156" src="assets/images/item/badge-design.png" alt="Image"/>
                            </div>
                        </div>
                    </div>
                    <div class="offset-lg-1 col-lg-6 offset-xl-2 col-xl-5">
                        <div class="col-right">
                            <h6 class="mini-title text-caption text-white-64">
                                ABOUT ME
                            </h6>
                            <div class="text-color-change">
                                <h5 class="desc letter-space--2 fw-normal ">
                                    I’m a designer and no-code developer creating bold, functional, and award- winning digital experiences
                                    that
                                    help
                                    brands
                                    connect with their audience.
                                </h5>
                            </div>
                            <div class="br-line"></div>
                            <ul class="experience-list overflow-hidden">
                                <li>Work Experience</li>
                                <li class="effectFade fadeRight">
                                    <p class="exp_name">Independent Product Designer</p>
                                    <p class="exp_year">2025</p>
                                </li>
                                <li class="effectFade fadeRight">
                                    <p class="exp_name">Senior UX Designer at CloudForge</p>
                                    <p class="exp_year">2024 - 2025</p>
                                </li>
                                <li class="effectFade fadeRight">
                                    <p class="exp_name">Product Designer at Orbit Systems</p>
                                    <p class="exp_year">2022 - 2024</p>
                                </li>
                                <li class="effectFade fadeRight">
                                    <p class="exp_name">UI/UX Designer at PixelHaus</p>
                                    <p class="exp_year">2021 - 2022</p>
                                </li>
                                <li class="effectFade fadeRight">
                                    <p class="exp_name">Junior Designer at Brightline Studio</p>
                                    <p class="exp_year">2020 - 2021</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default AboutUs