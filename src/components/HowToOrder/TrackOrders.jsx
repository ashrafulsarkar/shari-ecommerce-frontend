"use client"
import Link from 'next/link';
import { useState } from 'react';
import { Plus } from 'lucide-react';
import styles from '../../app/HowToOrder.module.css';
import SideBarLinks from './SideBarLinks';

export default function TrackOrders() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (sectionNumber) => {
    if (openSection === sectionNumber) {
      setOpenSection(null);
    } else {
      setOpenSection(sectionNumber);
    }
  };


  const paymentSections = [];

  return (
    <div className={styles.container}>
      {/* Breadcrumb */}
      <nav className={styles.breadcrumb}>
        <Link href="/" className={styles.breadcrumbLink}>Home</Link>
        <span className={styles.breadcrumbSeparator}>/</span>
        <span className={styles.breadcrumbCurrent}>Track Your Order</span>
      </nav>

      <div className={styles.layout}>
        {/* Sidebar */}
         <SideBarLinks/>

        {/* Main Content */}
        <div className={styles.mainContent}>
          <h1 className={styles.pageTitle}>Track Your Order</h1>

          <p className={styles.introText}>
          To track your order simply go to the contact us page and select Online Orders under Topic drop down menu. Please note down your order number to insert into the required field. We will get back to you.

If you are a registered user you can check your order status at any time.
To do so click on my order history after logging into your Aarong account.

Alternatively you may call (+88) 09 678 444 777 seven days a week, 10am – 8pm BST or email us at customerservice.aarong@brac.net.
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