"use client"
import Link from 'next/link';
import { useState } from 'react';
import { Plus } from 'lucide-react';
import styles from '../../app/HowToOrder.module.css';
import SideBarLinks from './SideBarLinks';

export default function HowToOrder() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (sectionNumber) => {
    if (openSection === sectionNumber) {
      setOpenSection(null);
    } else {
      setOpenSection(sectionNumber);
    }
  };


  const paymentSections = [
    {
      id: 1,
      title: ' Step 1: Select your location',
      content: `Our product offering and catalogues vary based on your intended delivery location. Customers can select the country product catalogue based on their intended shipping address from the top menu bar (see image below).
You will see BGD, AUS, GER, SIN, UAE, UK or USA on the top menu bar which will indicate the country catalogue page you are currently browsing.`
    },
    {
      id: 2,
      title: 'Step 2: Browse items by category',
      content: 'To browse the online store, use the main navigation menu (visible at the bottom part of the page) which has the names of the different product categories – Women, Men, Kids, Home Décor, Wedding, Jewellery, Gifts & Crafts, Skin & Hair, Brands.'
    },
    {
      id: 3,
      title: 'Step 3: Selecting your desired product',
      content: `Once you click or tap on a sub-category to will take you to the product listing page. Each subcategory of the products can be filtered or sorted based on price, size, colour etc.
      <div>
      <img src="https://www.aarong.com/media/How-to-order/3-1-how-to-order-06122023.png" alt="">
      </div>

      `
    },
    {
      id: 4,
      title: 'Payment method for deliveries to a shipping address other than Bangladesh',
      content: 'Specific payment methods available for international deliveries would go here.'
    },
    {
      id: 5,
      title: 'Custom Duties',
      content: 'Information about custom duties would go here.'
    }
  ];

  return (
    <div className={styles.container}>
      {/* Breadcrumb */}
      <nav className={styles.breadcrumb}>
        <Link href="/" className={styles.breadcrumbLink}>Home</Link>
        <span className={styles.breadcrumbSeparator}>/</span>
        <span className={styles.breadcrumbCurrent}>How To Order</span>
      </nav>

      <div className={styles.layout}>
        {/* Sidebar */}
         <SideBarLinks/>

        {/* Main Content */}
        <div className={styles.mainContent}>
          <h1 className={styles.pageTitle}>How To Order</h1>

          <p className={styles.introText}>
          Follow these simple steps to successfully place your order on Aarong website
          </p>

          <div className={styles.accordionSections}>
            {paymentSections.map((section) => (
              <div key={section.id} className={styles.accordionItem}>
                <button
                  onClick={() => toggleSection(section.id)}
                  className={styles.accordionButton}
                >
                  <h3 className={styles.accordionTitle}>
                    {section.title}
                  </h3>
                  <Plus size={24} />
                </button>

                {openSection === section.id && (
                  <div className={styles.accordionContent}>
                    <div dangerouslySetInnerHTML={{ __html: section.content }} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}