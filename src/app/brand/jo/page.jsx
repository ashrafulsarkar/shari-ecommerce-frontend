
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

export default function page() {
  return (
    <Wrapper>
      <HeaderFour/>
      <FashionBanner bg={'khaki-bg'} />
      {/* <BeautyFeatured /> */}
      <ProductArea type="popular" isOff={false} />
      {/* <ProductBanner/> */}
      <FooterTwo />
    </Wrapper>
  )
}
