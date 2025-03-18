"use client"
import Link from 'next/link';
import { useState } from 'react';
import { Plus } from 'lucide-react';
import styles from '../../app/HowToOrder.module.css';
import SideBarLinks from './SideBarLinks';

export default function ReturnExchange() {
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

  const content_with_html=`

  <div class="query_container">

<h3>Discount Sales </h3> <p style="text-align:justify"> Our return &amp; exchange policy shall not be applicable for any discount sales product(s). Any discount item once purchased cannot be exchanged or returned. No return or exchange is applicable for purchases made during the campaign period.</p>



<h3>Exchange </h3> <p style="text-align:justify"> We know that sometimes you buy something that does not work out the way you had hoped, and for that reason we did our best to make an exchange policy that is helpful for you.</p>



<h3>For orders shipped within Bangladesh </h3> <p style="text-align:justify"> If you are not fully satisfied with the products you bought, simply bring it back within 30 days of the purchase date to any of our outlets with your receipt or invoice for online orders and we will gladly exchange the product. Please note that the value of the exchanged product should be of similar or higher value than the original product price. If exchanging for a higher value item, the purchase value difference must be paid. </p>

<p style="text-align:justify"> Alternatively, you may ship the product to our e-commerce warehouse and we will gladly provide you with a credit note for future online purchases.  </p>

<p>Our address is: </p>

<p> Aarong E-Commerce </p> <p>204/B-5, Gulshan-Tejgaon Link Road </p> <p> Dhaka-1208</p>


<p style="text-align:justify"> Items that you want to exchange or return must be unworn, unwashed and unused with all original tags attached. Items that are opened or damaged or do not have a receipt may be denied an exchange. </p>

<p style="text-align:justify"> We will reimburse you with the amount paid for the product and VAT through store credit after we have physically received the product. Please note any shipping costs will not be credited.</p>


<h3>For orders shipped outside of Bangladesh </h3>

<p>At the moment, orders can only be exchanged if it is returned to any of our outlets in Bangladesh within 3 months of the purchase date. Exchanges must be physically hand carried back to Bangladesh either through a friend, family member, or during your next visit. Upon receiving the product, you will be able to exchange it for another product of similar or higher value.  </p>

<p> Please note any shipping costs will not be credited. </p>

<p> For any further clarification, please contact <a href=" https://aarong.com/contact/">Customer Service</a>.  </p>









<h3>Return</h3>We give our best effort to ensure that the product(s) you ordered online meets your expectations, but occasionally orders may reach you in a manner that is not anticipated. We will rectify any such claims or discrepancies related to your purchase.  <p></p>

    <br>
       <p>Any product would qualify as a return if it meets any of the following condition(s):</p>
       <ul>
          <p style="text-indent: 10%">•	Products with major quality defects</p>
          <p style="text-indent: 10%">•	Products damaged during shipment</p>
          <p style="text-indent: 10%">•	Wrong product, size or colour</p>
          <p style="text-indent: 10%">•	Product lost in shipment</p>
       </ul>
<p>You are requested to inform Customer Service for any change within 7 days of receiving the product. Please <a href=" https://aarong.com/contact/">Click Here</a> on how to get in touch with us. We will get in touch to assist you in processing your return.
 </p>

<p>For all the successful returns, we will reship the rightful product to you(based on availability) or issue you a credit note for future purchases.</p>



    </div>
    `;

  return (
    <div className={styles.container}>
      {/* Breadcrumb */}
      <nav className={styles.breadcrumb}>
        <Link href="/" className={styles.breadcrumbLink}>Home</Link>
        <span className={styles.breadcrumbSeparator}>/</span>
        <span className={styles.breadcrumbCurrent}>Return & Exchange Policy</span>
      </nav>

      <div className={styles.layout}>
        {/* Sidebar */}
         <SideBarLinks/>

        {/* Main Content */}
        <div className={styles.mainContent}>
          <h1 className={styles.pageTitle}>Return & Exchange Policy</h1>

          <p className={styles.introText}>
            We want to give our customers flexibility when making any purchase from Aarong.com. Check out our payment options below for any order shipped within Bangladesh or outside of Bangladesh.
          </p>
          <div dangerouslySetInnerHTML={{ __html: content_with_html }} />

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