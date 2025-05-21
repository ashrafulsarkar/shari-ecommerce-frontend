'use client';
import React from 'react';
import { CartTwo, Delivery, Discount, Refund, Support } from '@/svg';

export const feature_data = [
  {
    icon: <Delivery />,
    title: 'Inside Dhaka',
    subtitle: 'Within 3 Days, Cash on  Delivery' ,
    subtitle1: ' '
  },
  {
    icon: <Delivery />,
    title: 'Outside Dhaka',
    subtitle: 'Within 5 Days Advanced Payment.',
    subtitle1:""
  },
  {
    icon: <><svg xmlns="http://www.w3.org/2000/svg" width="50"
      height="50" viewBox="0 0 33 27" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-bag-icon lucide-shopping-bag"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg></>,
    title: 'Shipping Charge',
    subtitle: 'For Jo, Delivery is Free',
    subtitle1: 'For Lee, Depends on the product’s Weight',
  },
  {
    icon: <Support />,
    title: 'Chat With Us',
    subtitle: 'We offer business-hour chat support',
    subtitle1:""
  },
]




const FeatureAreaTwo = () => {
  return (
    <section className={`tp-feature-area tp-feature-border-2 pb-80`}>
      <div className="container">
        <div className="tp-feature-inner-2">
          <div className="row align-items-center">
            {feature_data.map((item, i) => (
              <div key={i} className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                <div className="tp-feature-item-2 d-flex align-items-start mb-40">
                  <div className="tp-feature-icon-2 mr-10">
                    <span>
                      {item.icon}
                    </span>
                  </div>
                  <div className="tp-feature-content-2">
                    <h3 className="tp-feature-title-2">{item.title}</h3>
                    <p>{item.subtitle}</p>
                    <p>{item.subtitle1}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureAreaTwo;