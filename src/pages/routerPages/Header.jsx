import React from 'react'

const Header = () => {
  return (
    <>
     <header class="tf-header">
            <div class="header-inner">
                <div class="container">
                    <div class="row">
                        <div class="col-6 col-md-1">
                            <a href="index.html" class="logo-site">
                                <i class="icon icon-davies-logo"></i>
                            </a>
                        </div>
                        <div class="col-7 d-none d-md-block">
                            <div class="box-navigation">
                                <ul class="nav-menu-main">
                                    <li class="menu-item"><a href="#workScroll" class="item-link link text-caption"><span>01
                                                /</span>WORKS</a></li>
                                    <li class="menu-item"><a href="#serviceScroll" class="item-link link text-caption"><span>02
                                                /</span>SERVICES</a>
                                    </li>
                                    <li class="menu-item"><a href="#aboutScroll" class="item-link link text-caption"><span>03
                                                /</span>ABOUT</a></li>
                                    <li class="menu-item"><a href="#contactScroll" class="item-link link text-caption"><span>04
                                                /</span>CONTACT</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-3 col-md-2 d-none d-sm-block">
                            <div class="header-contact">
                                <a href="mailto:davies@gmail.com" class="link text-caption">DAVIES@GMAIL.COM</a>
                                <p class="text-caption">
                                    CUP <span class="clock"></span>
                                </p>
                            </div>
                        </div>
                        <div class="col-6 col-sm-3 col-md-2 d-flex justify-content-end align-items-start">
                            <button type="button" class="btn-mobile-menu open-mb-menu text-caption text-white link">
                                <i class="icon icon-menu"></i>
                                MENU
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    
    </>
  )
}

export default Header