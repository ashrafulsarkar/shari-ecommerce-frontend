
import FashionBanner from '@/components/banner/fashion-banner'
import ProductArea from '@/components/products/beauty/product-area'
import FooterTwo from '@/layout/footers/footer-2'
import HeaderFour from '@/layout/headers/header-4'
import Wrapper from '@/layout/wrapper'
import React from 'react'

import slider_img_1 from '@assets/fpic/11.png';
import slider_img_2 from '@assets/fpic/12.png';
import slider_img_3 from '@assets/fpic/13.png';
import ShopArea from '@/components/shop/shop-area'


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
                  link: '/brand/lee',
                },
                {
                  id: 2,
                  subtitle: 'Rooted in Ritual',
                  title: 'Worn with Wonder',
                  img: slider_img_2,
                  link: '/brand/lee',
                },
                {
                  id: 3,
                  subtitle: 'Tradition in Threads',
                  title: 'Style in Every Stitch',
                  img: slider_img_3,
                  link: '/brand/lee',
                },
              ]
            }
             />
      {/* <FashionCategory/> */}
      {/* <PopularProducts type="typeTopSeller" /> */}
      {/* <ProductArea type="typeTopSeller" isOff={false} /> */}
      <div className="tp-product-area pt-80">
              <ShopArea
              isBrand = {true}
              type="typeTopSeller"
              brandName="brand/lee"
            />
            </div>
      {/* <BannerArea/> */}
      <FooterTwo />
    </Wrapper>
  )
}
