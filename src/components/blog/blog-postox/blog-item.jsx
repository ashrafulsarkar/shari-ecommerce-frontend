'use client';
import React from 'react';
import Link from 'next/link';
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { useState } from 'react';
// internal
import PopupVideo from '@/components/common/popup-video';

// slider setting
const slider_setting = {
  slidesPerView: 1,
  spaceBetween: 0,
  autoplay: {
    delay: 3000,
  },
  navigation: {
    nextEl: ".tp-postbox-slider-button-next",
    prevEl: ".tp-postbox-slider-button-prev",
  },
}

const BlogItem = ({ item = {} }) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  return (
    <>
      <article
        className="tp-postbox-item format-image mb-50 transition-3"
      >
        {!item.blockquote &&
          !item.video &&
          !item.audio &&
          !item.slider && (
            <div className="tp-postbox-thumb w-img">
              <Link href={`/blog-details/${item.slug}`}>
                <Image src={item.img}  width={500} height={300}
                style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
               alt={item.title} />
              </Link>
            </div>
          )}
        {item?.video && (
          <div className="tp-postbox-thumb tp-postbox-video w-img p-relative">
            <Link href={`/blog-details/${item.id}`}>
              <Image src={item.img}  width={500} height={300}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
              alt={item.title} />
            </Link>
            <a
              onClick={() => setIsVideoOpen(true)}
              className="cursor-pointer tp-postbox-video-btn popup-video"
            >
              <i className="fas fa-play"></i>
            </a>
          </div>
        )}
        {item?.audio && (
          <div className="tp-postbox-thumb tp-postbox-audio w-img p-relative">
            <iframe
              allow="autoplay"
              src={item.audio_id}
            ></iframe>
          </div>
        )}
        {item?.slider && (
          <Swiper {...slider_setting} modules={[Navigation, Autoplay]} className="tp-postbox-thumb tp-postbox-slider swiper-container w-img p-relative">
            {item.slider_images.map((img, i) => (
              <SwiperSlide key={i} className="tp-postbox-slider-item">
                <Image src={img} alt="slider img" width={'auto'} height={'auto'} />
              </SwiperSlide>
            ))}
            <div className="tp-postbox-nav">
              <button className="tp-postbox-slider-button-next">
                <i className="fal fa-arrow-right"></i>
              </button>
              <button className="tp-postbox-slider-button-prev">
                <i className="fal fa-arrow-left"></i>
              </button>
            </div>
          </Swiper>
        )}
        {!item.blockquote && (
          <div className="tp-postbox-content">
            <div className="tp-postbox-meta">
              <span>
                <i className="far fa-calendar-check"></i> {item?.createdAt}
              </span>
              <span>
                <a href="#">
                  <i className="far fa-user"></i> {item?.created_by?.name}
                </a>
              </span>
              <span>
                <a href="#">
                  <i className="fal fa-comments"></i> {item?.comment} Comments
                </a>
              </span>
            </div>
            <h3 className="tp-postbox-title">
              <Link href={`/blog-details/${item.slug}`}>
                {item.title}
              </Link>
            </h3>
            <div className="tp-postbox-text">
              <div dangerouslySetInnerHTML={{ __html: item.description.slice(0,150) }} />

            </div>
            <div className="tp-postbox-read-more">
              <Link href={`/blog-details/${item.slug}`} className="tp-btn">
                Read More
              </Link>
            </div>
          </div>
        )}
        {item.blockquote && (
          <div className="tp-postbox-quote">
            <blockquote>
              <p>
                {item.title}
                <cite>{item.created_by?.name}</cite>
              </p>
            </blockquote>
          </div>
        )}
      </article>

      {/* modal popup start */}
      {item.video && (
        <PopupVideo
          isVideoOpen={isVideoOpen}
          setIsVideoOpen={setIsVideoOpen}
          videoId={item.video_id}
        />
      )}
      {/* modal popup end */}
    </>
  );
};

export default BlogItem;