import React from 'react'

const Pricing = () => {
  return (
    <>
     <section class="section-pricing flat-spacing flat-animate-tab">
            <div class="bg-img">
                <img loading="lazy" width="1440" height="1081" src="assets/images/item/bg-4.png" alt="Image"/>
            </div>
            <div class="container">
                <div class="s-header justify-content-center">
                    <h2 class="text-display-2 letter-space--3 effectFade fadeUp">
                        Pricing made easy
                    </h2>
                </div>
                <ul class="pricing-tab_btn" role="tablist">
                    <li class="nav-tab-item" role="presentation">
                        <a href="#monthly" data-bs-toggle="tab" class="tf-btn-tab fw-medium letter-space--1 active">
                            <span class="dot-active"></span>
                            Monthly
                        </a>
                    </li>
                    <li class="nav-tab-item" role="presentation">
                        <a href="#annual" data-bs-toggle="tab" class="tf-btn-tab fw-medium letter-space--1">
                            <span class="dot-active"></span>
                            <span>
                                Annualy - <span class="text-primary">Save 20%</span>
                            </span>
                        </a>
                    </li>
                </ul>
                <div class="tab-content">
                    <div class="tab-pane active show" id="monthly" role="tabpanel">
                        <div class="tf-grid-layout md-col-2 lg-col-3">
                            <div class="wg-plan">
                                <div class="br-line"></div>
                                <p class="plan-name letter-space--1 fw-medium">Basic</p>
                                <h4 class="plan-price">
                                    $640 <span class="text-body-2 fw-normal text-white-64 letter-space--1">/month</span>
                                </h4>
                                <p class="plan-desc text-white-64">
                                    Perfect for early-stage teams or startups ready to launch their first online presence.
                                </p>
                                <a href="#contactScroll" class="btn-action tf-btn style-troke w-100">
                                    <span class="text-caption fw-medium">CHOOSE THIS PLAN</span>
                                </a>
                                <ul class="benefit-list tf-list vertical">
                                    <li class="benefit_title text-white-64">What’s included:</li>
                                    <li><span>//</span> Custom website design</li>
                                    <li><span>//</span> Responsive layouts</li>
                                    <li><span>//</span> Basic SEO setup</li>
                                    <li><span>//</span> Tool integrations</li>
                                    <li><span>//</span> Ongoing support</li>
                                </ul>
                            </div>
                            <div class="wg-plan style-2">
                                <div class="bg-img bg-img_1 d-xl-block"></div>
                                <div class="bg-img bg-img_2">
                                    <img loading="lazy" width="416" height="625" src="assets/images/item/bg-2.png" alt="Image"/>
                                </div>
                                <div class="br-line bg-primary"></div>
                                <p class="plan-name letter-space--1 fw-medium">Pro</p>
                                <h4 class="plan-price">
                                    <span><span class="text-primary">$</span>1,280</span>
                                    <span class="text-body-2 fw-normal text-white-64 letter-space--1">/month</span>
                                </h4>
                                <p class="plan-desc text-white-64">
                                    Ideal for growing brands that require added features and enhanced creative flexibility.
                                </p>
                                <a href="#contactScroll" class="btn-action tf-btn style-fill w-100 animate-btn animate-dark">
                                    <span class="text-caption fw-medium">CHOOSE THIS PLAN</span>
                                </a>
                                <ul class="benefit-list tf-list vertical">
                                    <li class="benefit_title text-white-64">What’s included:</li>
                                    <li><span class="text-primary">//</span> Advanced web design</li>
                                    <li><span class="text-primary">//</span> Interactive elements</li>
                                    <li><span class="text-primary">//</span> Full SEO services</li>
                                    <li><span class="text-primary">//</span> E-commerce setup</li>
                                    <li><span class="text-primary">//</span> Monthly reports</li>
                                </ul>
                            </div>
                            <div class="wg-plan style-2">
                                <div class="bg-img bg-img_1"></div>
                                <div class="br-line bg-white"></div>
                                <p class="plan-name letter-space--1 fw-medium">Max</p>
                                <h4 class="plan-price">
                                    $2,560 <span class="text-body-2 fw-normal text-white-64 letter-space--1">/month</span>
                                </h4>
                                <p class="plan-desc text-white-64">
                                    Designed for established companies seeking a completely bespoke digital solution.
                                </p>
                                <a href="#contactScroll" class="btn-action tf-btn style-fill-white w-100 animate-btn animate-dark">
                                    <span class="text-caption fw-medium">CHOOSE THIS PLAN</span>
                                </a>
                                <ul class="benefit-list tf-list vertical">
                                    <li class="benefit_title text-white-64">What’s included:</li>
                                    <li><span>//</span> Complete branding</li>
                                    <li><span>//</span> Premium visuals</li>
                                    <li><span>//</span> Enterprise systems</li>
                                    <li><span>//</span> Dedicated manager</li>
                                    <li><span>//</span> Priority support</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane" id="annual" role="tabpanel">
                        <div class="tf-grid-layout md-col-2 lg-col-3">
                            <div class="wg-plan">
                                <div class="br-line"></div>
                                <p class="plan-name letter-space--1 fw-medium">Basic</p>
                                <h4 class="plan-price">
                                    $6,400 <span class="text-body-2 fw-normal text-white-64 letter-space--1">/annual</span>
                                </h4>
                                <p class="plan-desc text-white-64">
                                    Perfect for early-stage teams or startups ready to launch their first online presence.
                                </p>
                                <a href="#contactScroll" class="btn-action tf-btn style-troke w-100">
                                    <span class="text-caption fw-medium">CHOOSE THIS PLAN</span>
                                </a>
                                <ul class="benefit-list tf-list vertical">
                                    <li class="benefit_title text-white-64">What’s included:</li>
                                    <li><span>//</span> Custom website design</li>
                                    <li><span>//</span> Responsive layouts</li>
                                    <li><span>//</span> Basic SEO setup</li>
                                    <li><span>//</span> Tool integrations</li>
                                    <li><span>//</span> Ongoing support</li>
                                </ul>
                            </div>
                            <div class="wg-plan style-2">
                                <div class="bg-img bg-img_1 d-xl-block"></div>
                                <div class="bg-img bg-img_2">
                                    <img loading="lazy" width="416" height="625" src="assets/images/item/bg-2.png" alt="Image"/>
                                </div>
                                <div class="br-line bg-primary"></div>
                                <p class="plan-name letter-space--1 fw-medium">Pro</p>
                                <h4 class="plan-price">
                                    <span><span class="text-primary">$</span>12,800</span>
                                    <span class="text-body-2 fw-normal text-white-64 letter-space--1">/annual</span>
                                </h4>
                                <p class="plan-desc text-white-64">
                                    Ideal for growing brands that require added features and enhanced creative flexibility.
                                </p>
                                <a href="#contactScroll" class="btn-action tf-btn style-fill w-100 animate-btn animate-dark">
                                    <span class="text-caption fw-medium">CHOOSE THIS PLAN</span>
                                </a>
                                <ul class="benefit-list tf-list vertical">
                                    <li class="benefit_title text-white-64">What’s included:</li>
                                    <li><span class="text-primary">//</span> Advanced web design</li>
                                    <li><span class="text-primary">//</span> Interactive elements</li>
                                    <li><span class="text-primary">//</span> Full SEO services</li>
                                    <li><span class="text-primary">//</span> E-commerce setup</li>
                                    <li><span class="text-primary">//</span> Monthly reports</li>
                                </ul>
                            </div>
                            <div class="wg-plan style-2">
                                <div class="bg-img bg-img_1"></div>
                                <div class="br-line bg-white"></div>
                                <p class="plan-name letter-space--1 fw-medium">Max</p>
                                <h4 class="plan-price">
                                    $25,600 <span class="text-body-2 fw-normal text-white-64 letter-space--1">/annual</span>
                                </h4>
                                <p class="plan-desc text-white-64">
                                    Designed for established companies seeking a completely bespoke digital solution.
                                </p>
                                <a href="#contactScroll" class="btn-action tf-btn style-fill-white w-100 animate-btn animate-dark">
                                    <span class="text-caption fw-medium">CHOOSE THIS PLAN</span>
                                </a>
                                <ul class="benefit-list tf-list vertical">
                                    <li class="benefit_title text-white-64">What’s included:</li>
                                    <li><span>//</span> Complete branding</li>
                                    <li><span>//</span> Premium visuals</li>
                                    <li><span>//</span> Enterprise systems</li>
                                    <li><span>//</span> Dedicated manager</li>
                                    <li><span>//</span> Priority support</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Pricing