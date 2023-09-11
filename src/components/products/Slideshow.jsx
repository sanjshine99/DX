import React, { useEffect } from 'react';
import Swiper from 'swiper';
import charming from 'charming';
import { TweenMax, Expo, Back, Quart } from 'gsap';
import './Slideshow.css';

const Slideshow = () => {
  useEffect(() => {
    const animate = (direction = 'next') => {
      const activeSlide = document.querySelector('.swiper-slide-active');
      const activeSlideImg = activeSlide.querySelector('.slide-image');
      const activeSlideTitle = activeSlide.querySelector('.slide-title');
      const activeSlideTitleLetters = activeSlideTitle.querySelectorAll('span');

      activeSlideTitleLetters.forEach((letter, pos) => {
        TweenMax.to(letter, 0.6, {
          ease: Back.easeOut,
          delay: pos * 0.05,
          startAt: { y: '50%', opacity: 0 },
          y: '0%',
          opacity: 1,
        });
      });

      TweenMax.to(activeSlideImg, 1.5, {
        ease: Expo.easeOut,
        startAt: { x: direction === 'next' ? 200 : -200 },
        x: 0,
      });

      const oldSlide =
        direction === 'next'
          ? document.querySelector('.swiper-slide-prev')
          : document.querySelector('.swiper-slide-next');
      if (oldSlide) {
        const oldSlideTitle = oldSlide.querySelector('.slide-title');
        const oldSlideTitleLetters = oldSlideTitle.querySelectorAll('span');

        oldSlideTitleLetters.forEach((letter, pos) => {
          TweenMax.to(letter, 0.3, {
            ease: Quart.easeIn,
            delay: (oldSlideTitleLetters.length - pos - 1) * 0.04,
            y: '50%',
            opacity: 0,
          });
        });
      }
    };

    const animatePagination = (swiper, paginationEl) => {
      const paginationItemsLoader = paginationEl.querySelectorAll('.pagination-separator-loader');
      const activePaginationItem = paginationEl.querySelector('.swiper-pagination-bullet-active');
      const activePaginationItemLoader = activePaginationItem.querySelector('.pagination-separator-loader');

      TweenMax.set(paginationItemsLoader, { scaleX: 0 });
      TweenMax.to(activePaginationItemLoader, 3, {
        startAt: { scaleX: 0 },
        scaleX: 1,
      });
    };

    const init = () => {
      const slideTitles = document.querySelectorAll('.slide-title');
      slideTitles.forEach((slideTitle) => {
        charming(slideTitle);
      });

      const slideshow = new Swiper('.slideshow', {
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        speed: 500,
        preloadImages: true,
        updateOnImagesReady: true,
        pagination: {
          el: '.slideshow-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.slideshow-navigation-button.next',
          prevEl: '.slideshow-navigation-button.prev',
        },
        on: {
          init: () => animate('next'),
          paginationUpdate: (swiper, paginationEl) => animatePagination(swiper, paginationEl),
          slideNextTransitionStart: () => animate('next'),
          slidePrevTransitionStart: () => animate('prev'),
        },
      });
    };

    init();
  }, []);

  return (
    <section>
      <div className="swiper-container slideshow">
        <div className="swiper-wrapper">
          {/* Add your slides here */}
          <div className="swiper-slide slide">
            <div
              className="slide-image"
              style={{
                backgroundImage:
                  'url(https://images.unsplash.com/photo-1538083024336-555cf8943ddc?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=66b476a51b19889e13182c0e4827af18&auto=format&fit=crop&w=1950&q=80)',
              }}
            ></div>
            <span className="slide-title">Exotic places</span>
          </div>
          <div className="swiper-slide slide">
            <div
              className="slide-image"
              style={{
                backgroundImage:
                  'url(https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e07d2457879a4e15577ec75a31023e47&auto=format&fit=crop&w=2134&q=80)',
              }}
            ></div>
            <span className="slide-title">Meet ocean</span>
          </div>
          <div className="swiper-slide slide">
            <div
              className="slide-image"
              style={{
                backgroundImage:
                  'url(https://images.unsplash.com/photo-1482059470115-0aadd6bf6834?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=267bba9a4e280ec64388fe8fb01e9d1b&auto=format&fit=crop&w=1950&q=80)',
              }}
            ></div>
            <span className="slide-title">Around the world</span>
          </div>
        </div>
        <div className="slideshow-pagination"></div>
        <div className="slideshow-navigation">
          <div className="slideshow-navigation-button prev">
            <span className="fas fa-chevron-left"></span>
          </div>
          <div className="slideshow-navigation-button next">
            <span className="fas fa-chevron-right"></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slideshow;
