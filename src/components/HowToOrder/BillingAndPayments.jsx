"use client"
import Link from 'next/link';
import { useState } from 'react';
import { Plus } from 'lucide-react';
import styles from '../../app/HowToOrder.module.css';
import SideBarLinks from './SideBarLinks';

export default function BillingAndPayments() {
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
      title: 'For deliveries within Bangladesh',
      content: 'Details about payment options for deliveries within Bangladesh would go here.'
    },
    {
      id: 2,
      title: 'For deliveries to a shipping address other than Bangladesh',
      content: 'Details about payment options for international deliveries would go here.'
    },
    {
      id: 3,
      title: 'Payment method for deliveries within Bangladesh',
      content: 'Specific payment methods available for local deliveries would go here.'
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
        <span className={styles.breadcrumbCurrent}>Billing & Payments</span>
      </nav>

      <div className={styles.layout}>
        {/* Sidebar */}
         <SideBarLinks/>

        {/* Main Content */}
        <div className={styles.mainContent}>
          <h1 className={styles.pageTitle}>Billing & Payments</h1>

          <p className={styles.introText}>
            We want to give our customers flexibility when making any purchase from Aarong.com. Check out our payment options below for any order shipped within Bangladesh or outside of Bangladesh.
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