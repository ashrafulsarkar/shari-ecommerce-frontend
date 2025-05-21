
import FashionBanner from '@/components/banner/fashion-banner'
import ProductArea from '@/components/products/beauty/product-area'
import FooterTwo from '@/layout/footers/footer-2'
import HeaderFour from '@/layout/headers/header-4'
import Wrapper from '@/layout/wrapper'
import React from 'react'

import slider_img_1 from '@assets/fpic/JO_01.png';
import slider_img_2 from '@assets/fpic/JO_2.png';
import slider_img_3 from '@assets/fpic/JO_03.png';
import ShopArea from '@/components/shop/shop-area'

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
            link: '/brand/jo',
          },
          {
            id: 2,
            subtitle: 'Woven in Bengal',
            title: 'Worn Worldwide',
            img: slider_img_2,
            link: '/brand/jo',
          },
          {
            id: 3,
            subtitle: 'Where Every Thread',
            title: 'Holds a Heritage',
            img: slider_img_3,
            link: '/brand/jo',
          },
        ]
      } />
      {/* <BeautyFeatured /> */}
      {/* <ProductArea type="popular" isOff={false} /> */}
      <div className="tp-product-area pt-80">
        <ShopArea
        isBrand = {true}
        type="popular"
        brandName="brand/jo"
      />
      </div>
      {/* <ProductBanner/> */}
      <FooterTwo />
    </Wrapper>
  )
}
