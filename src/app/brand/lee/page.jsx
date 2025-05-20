import BannerArea from '@/components/banner/banner-area'
import FashionCategory from '@/components/categories/fashion-category'
import HomeHeroSlider from '@/components/hero-banner/home-hero-slider'
import ProductArea from '@/components/products/beauty/product-area'
import PopularProducts from '@/components/products/fashion/popular-products'
import Footer from '@/layout/footers/footer'
import FooterTwo from '@/layout/footers/footer-2'
import HeaderFour from '@/layout/headers/header-4'
import Wrapper from '@/layout/wrapper'
import React from 'react'

export default function page() {
  return (
    <Wrapper>
      <HeaderFour/>
      <HomeHeroSlider/>
      {/* <FashionCategory/> */}
      {/* <PopularProducts type="typeTopSeller" /> */}
      <ProductArea type="typeTopSeller" isOff={false} />
      {/* <BannerArea/> */}
      <FooterTwo />
    </Wrapper>
  )
}
