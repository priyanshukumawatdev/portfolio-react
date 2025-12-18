// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import AboutUs from "./pages/routerPages/AboutUs";
import Header from "./pages/routerPages/Header";
import Hero from "./pages/routerPages/Hero";
import SelectWork from "./pages/routerPages/SelectWork";
import Features from "./pages/routerPages/Features";
import Service from "./pages/routerPages/Service";
import Proccess from "./pages/routerPages/Proccess";
import TechStack from "./pages/routerPages/TechStack";
import Brand from "./pages/routerPages/Brand";
import Award from "./pages/routerPages/Award";
import Testimonial from "./pages/routerPages/Testimonial";
import Pricing from "./pages/routerPages/Pricing";
import Faq from "./pages/routerPages/Faq";
import Footer from "./components/shared/Footer";
import Cta from "./pages/routerPages/Cta";


function App() {
  return (
 <>

    <canvas class="cursor-trail d-none d-xl-block" id="trail"></canvas>

{/*    
    <button id="goTop">
        <span class="border-progress"></span>
        <span class="ic-wrap">
            <span class="icon icon-arrow-caret-right"></span>
        </span>
    </button>
  
    <div class="preloader overflow-hidden">
        <div class="site-name"><span>DAVIES</span></div>
        <div class="preloader-gutters">
            <div class="bar">
                <div class="inner-bar"></div>
            </div>
            <div class="bar">
                <div class="inner-bar"></div>
            </div>
            <div class="bar">
                <div class="inner-bar"></div>
            </div>
            <div class="bar">
                <div class="inner-bar"></div>
            </div>
            <div class="bar">
                <div class="inner-bar"></div>
            </div>
            <div class="bar">
                <div class="inner-bar"></div>
            </div>
            <div class="bar">
                <div class="inner-bar"></div>
            </div>
            <div class="bar">
                <div class="inner-bar"></div>
            </div>
        </div>
    </div> */}
  

    <main id="wrapper">

   
        <div class="tf-left-bar">
            <a class="btn-setting-color" data-bs-toggle="offcanvas" href="#settingColorMenu"><i class="icon-gear"></i></a>
        </div>


<Header/>
<Hero/>
<SelectWork/>
<Features/>
<Service/>
<Proccess/>
<AboutUs/>
<TechStack/>
<Brand/>
<Award/>
<Testimonial/>
<Pricing/>
<Faq/>
<Cta/>
<Footer/>

</main>
    


     <div class="offcanvas-menu">
        <div class="offcanvas-content">
            <div class="container h-100">
                <div class="offcanvas-content_wrapin">
                    <div class="canvas_head">
                        <a href="index.html" class="logo-site">
                            <i class="icon icon-davies-logo"></i>
                        </a>
                        <div class="btn-mobile-menu close-mb-menu text-caption link">
                            <i class="icon icon-close"></i>
                            CLOSE
                        </div>
                    </div>
                    <div class="canvas_center">
                        <ul class="nav-ul-mb">
                            <li>
                                <div class="item close-mb-menu">
                                    <a href="#workScroll" class="mb-menu-link text-display-1">
                                        <span class="text">Works</span>
                                        <div class="infiniteSlide_text_main">
                                            <div class="infiniteSlide infiniteSlide_text" data-clone="5">
                                                <p class="text-body-2 letter-space--1">
                                                    <span class="text-primary">//</span> View Works
                                                </p>
                                                <p class="text-body-2 letter-space--1">
                                                    <span class="text-primary">//</span> View Works
                                                </p>
                                                <p class="text-body-2 letter-space--1">
                                                    <span class="text-primary">//</span> View Works
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div class="item close-mb-menu">
                                    <a href="#aboutScroll" class="mb-menu-link text-display-1">
                                        <span class="text">About</span>
                                        <div class="infiniteSlide_text_main">
                                            <div class="infiniteSlide infiniteSlide_text" data-clone="5">
                                                <p class="text-body-2 letter-space--1">
                                                    <span class="text-primary">//</span> View About
                                                </p>
                                                <p class="text-body-2 letter-space--1">
                                                    <span class="text-primary">//</span> View About
                                                </p>
                                                <p class="text-body-2 letter-space--1">
                                                    <span class="text-primary">//</span> View About
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div class="item close-mb-menu">
                                    <a href="#serviceScroll" class="mb-menu-link text-display-1">
                                        <span class="text">Services</span>
                                        <div class="infiniteSlide_text_main">
                                            <div class="infiniteSlide infiniteSlide_text" data-clone="5">
                                                <p class="text-body-2 letter-space--1">
                                                    <span class="text-primary">//</span> View Services
                                                </p>
                                                <p class="text-body-2 letter-space--1">
                                                    <span class="text-primary">//</span> View Services
                                                </p>
                                                <p class="text-body-2 letter-space--1">
                                                    <span class="text-primary">//</span> View Services
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div class="item close-mb-menu">
                                    <a href="#contactScroll" class="mb-menu-link text-display-1">
                                        <span class="text">Contact</span>
                                        <div class="infiniteSlide_text_main">
                                            <div class="infiniteSlide infiniteSlide_text" data-clone="5">
                                                <p class="text-body-2 letter-space--1">
                                                    <span class="text-primary">//</span> View Contact
                                                </p>
                                                <p class="text-body-2 letter-space--1">
                                                    <span class="text-primary">//</span> View Contact
                                                </p>
                                                <p class="text-body-2 letter-space--1">
                                                    <span class="text-primary">//</span> View Contact
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="canvas_foot">
                        <div class="left">
                            <a href="mailto:davies@gmail.com" class="link text-caption">DAVIES@GMAIL.COM</a>
                            <p class="text-caption">
                                CUP <span class="clock"></span>
                            </p>
                        </div>
                        <div class="right">
                            <a href="#" class="tf-link-icon text-caption link">
                                <i class="icon icon-arrow-top-right"></i>
                                TWITTER (X)
                            </a>
                            <a href="#" class="tf-link-icon text-caption link">
                                <i class="icon icon-arrow-top-right"></i>
                                DRIBBBLE
                            </a>
                            <a href="#" class="tf-link-icon text-caption link">
                                <i class="icon icon-arrow-top-right"></i>
                                LINKEDIN
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <div class="offcanvas offcanvas-end offcanvas-color" id="settingColorMenu">
        <div class="offcanvas-content">
            <span class="icon-close-popup" data-bs-dismiss="offcanvas">
                <i class="icon-close"></i>
            </span>
            <div class="canvas-header">
                <h3 class="fw-semibold">Configuration</h3>
            </div>
            <div class="canvas-body">
                <h6 class="title fw-semibold">COLORS</h6>
                <div class="settings-color list-choose">
                    <button type="button" class="choose-item link-no-action active"></button>
                    <button type="button" class="choose-item link-no-action"></button>
                    <button type="button" class="choose-item link-no-action"></button>
                    <button type="button" class="choose-item link-no-action"></button>
                    <button type="button" class="choose-item link-no-action"></button>
                    <button type="button" class="choose-item link-no-action"></button>
                    <button type="button" class="choose-item link-no-action"></button>
                    <button type="button" class="choose-item link-no-action"></button>
                </div>
            </div>
        </div>
    </div>
 
 
 </>
  );
}

export default App;
