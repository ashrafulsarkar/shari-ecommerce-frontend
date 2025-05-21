
import FashionBanner from '@/components/banner/fashion-banner'
import BeautyFeatured from '@/components/features/beauty-featured'
import HomeHeroSlider from '@/components/hero-banner/home-hero-slider'
import ProductArea from '@/components/products/beauty/product-area'
import ProductBanner from '@/components/products/electronics/product-banner'
import Footer from '@/layout/footers/footer'
import FooterTwo from '@/layout/footers/footer-2'
import HeaderFour from '@/layout/headers/header-4'
import Wrapper from '@/layout/wrapper'
import React from 'react'

import slider_img_1 from '@assets/pic/jo-02.png';
import slider_img_2 from '@assets/pic/jo-4.png';
import slider_img_3 from '@assets/pic/jo1.png';

export default function page() {
  return (
    <Wrapper>
      <HeaderFour/>
      <FashionBanner bg={'khaki-bg'} slider_data={
        [
          {
            id: 1,
            subtitle: 'Draped in  Saree',
            title: 'Wrapped in Culture',
            img: slider_img_1,
          },
          {
            id: 2,
            subtitle: 'Woven in Bengal',
            title: 'Worn Worldwide',
            img: slider_img_2,
          },
          {
            id: 3,
            subtitle: 'Where Every Thread',
            title: 'Holds a Heritage',
            img: slider_img_3,
          },
        ]
      } />
      {/* <BeautyFeatured /> */}
      <ProductArea type="popular" isOff={false} />
      {/* <ProductBanner/> */}
      <FooterTwo />
    </Wrapper>
  )
}
