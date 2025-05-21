'use client';
import React, { useEffect, useRef, useState } from 'react';
import ErrorMsg from '@/components/common/error-msg';
import { useGetAllTypesQuery, useGetPopularProductByTypeQuery, useGetProductTypeQuery } from '@/redux/features/productApi';
import ProductItem from './product-item';
import { HomeTwoPrdLoader } from '@/components/loader';


const ProductArea = () => {
  const [activeTab, setActiveTab] = useState("");
  const activeRef = useRef(null);
  const marker = useRef(null);
   const { data: products, isError, isLoading } =
    useGetPopularProductByTypeQuery({ type: 'typeFeatureProduct', query: `new=true` });

   const { data: alltypes, isError:typeIsError, isLoading:typeIsloading } =
   useGetAllTypesQuery();

   const typeTabs = alltypes?.result?.map(type => type.name) || [];
   const tabs = [...typeTabs];



  // handleActiveTab
  useEffect(() => {
    // Position the marker after the active tab has been updated
    if (activeRef.current && marker.current) {
      marker.current.style.left = activeRef.current.offsetLeft + "px";
      marker.current.style.width = activeRef.current.offsetWidth + "px";
    }
  }, [activeTab,products]);

  const handleActiveTab = (e, tab) => {
    setActiveTab(tab);
  };

  // decide what to render
  let content = null;

  if (isLoading) {
    content = (
      <HomeTwoPrdLoader loading={isLoading} />
    );
  }
  if (!isLoading && isError) {
    content = <ErrorMsg msg="There was an error" />;
  }
  if (!isLoading && !isError && products?.data?.length === 0) {
    content = <ErrorMsg msg="No Products found!" />;
  }
  if (!isLoading && !isError && products?.data?.length > 0) {

    let product_items = products.data;
    if (activeTab === 'All Collection') {
      product_items = products.data
    } else{
      product_items = products.data.filter(p => p.type?.name === activeTab);
    }
    content = <>
      <div className="row align-items-end pt-70">
        <div className="col-xl-6 col-lg-6">
          <div className="tp-section-title-wrapper-4 text-center text-lg-start">
            <span className="tp-section-title-pre-4">Product Collection</span>
            <h3 className="tp-section-title-4">Discover our Products</h3>
          </div>
        </div>
        <div className="col-xl-6 col-lg-6">
          <div className="tp-product-tab-2 tp-product-tab-3  tp-tab ">
            <div className="tp-product-tab-inner-3 d-flex align-items-center justify-content-center justify-content-lg-end">
              <nav>
                <div className="nav nav-tabs justify-content-center tp-product-tab tp-tab-menu p-relative" id="nav-tab" role="tablist">

                  {tabs.map((tab, i) => (
                    <button
                      key={i}
                      ref={activeTab === tab ? activeRef : null}
                      onClick={(e) => handleActiveTab(e, tab)}
                      className={`nav-link text-capitalize ${activeTab === tab ? "active" : ""}`}
                    >
                      {tab.split("-").join(" ")}
                      <span className="tp-product-tab-tooltip">{product_items.length}</span>
                    </button>
                  ))}

                  <span ref={marker} id="productTabMarker" className="tp-tab-line d-none d-sm-inline-block"></span>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        {product_items.map((prd) => (
          <div key={prd._id} className="col-xl-3 col-lg-4 col-sm-6">
            <ProductItem product={prd} />
          </div>
        ))}
      </div>
    </>
  }


  return (
    <>
      <section className="tp-product-area">
        <div className="container">
          {content}
        </div>
      </section>
    </>
  );
};

export default ProductArea;