import BannerArea from '@/components/banner/banner-area'
import FashionBanner from '@/components/banner/fashion-banner'
import FashionCategory from '@/components/categories/fashion-category'
import HomeHeroSlider from '@/components/hero-banner/home-hero-slider'
import ProductArea from '@/components/products/beauty/product-area'
import PopularProducts from '@/components/products/fashion/popular-products'
import Footer from '@/layout/footers/footer'
import FooterTwo from '@/layout/footers/footer-2'
import HeaderFour from '@/layout/headers/header-4'
import Wrapper from '@/layout/wrapper'
import React from 'react'

import slider_img_1 from '@assets/pic/G-01.png';
import slider_img_2 from '@assets/pic/g-08.png';
import slider_img_3 from '@assets/pic/14.png';


export default function page() {
  return (
    <Wrapper>
      <HeaderFour/>
      {/* <HomeHeroSlider/> */}
      <FashionBanner bg={'khaki-bg'}
      slider_data={
              [
                {
                  id: 1,
                  subtitle: 'A Fabric of Faith',
                  title: 'A Dress of Devotion',
                  img: slider_img_1,
                },
                {
                  id: 2,
                  subtitle: 'Rooted in Ritual',
                  title: 'Worn with Wonder',
                  img: slider_img_2,
                },
                {
                  id: 3,
                  subtitle: 'Tradition in Threads',
                  title: 'Style in Every Stitch',
                  img: slider_img_3,
                },
              ]
            }
             />
      {/* <FashionCategory/> */}
      {/* <PopularProducts type="typeTopSeller" /> */}
      <ProductArea type="typeTopSeller" isOff={false} />
      {/* <BannerArea/> */}
      <FooterTwo />
    </Wrapper>
  )
}
