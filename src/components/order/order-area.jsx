'use client';
import React, { useRef } from "react";
import dayjs from "dayjs";
import ReactToPrint from "react-to-print";
// internal
import ErrorMsg from "@/components/common/error-msg";
import { useGetUserOrderByIdQuery } from "@/redux/features/order/orderApi";
import PrdDetailsLoader from "@/components/loader/prd-details-loader";
import Logo from "../Logo/Logo";


const OrderArea = ({ orderId }) => {
  const printRef = useRef();
  const { data: order, isError, isLoading } = useGetUserOrderByIdQuery(orderId);
  let content = null;
  if (isLoading) {
    content = <PrdDetailsLoader loading={isLoading}/>
  }
  if (isError) {
    content = <ErrorMsg msg="There was an error" />;
  }
  if (!isLoading && !isError) {
    const { name, country, city, contact, payment_status,invoice, createdAt, cart, shippingCost, discount, totalAmount,paymentMethod} = order.order;
    content = (
      <>
        <section className="invoice__area pt-120 pb-120">
          <div className="container">
            <div className="invoice__msg-wrapper">
              <div className="row">
                <div className="col-xl-12">
                  <div className="invoice_msg mb-40">
                    <p className="text-black alert alert-success">Thank you <strong>{name}</strong> Your order have been received ! </p>
                  </div>
                </div>
              </div>
            </div>
            <div ref={printRef} className="invoice__wrapper grey-bg-2 pt-40 pb-40 pl-40 pr-40 tp-invoice-print-wrapper">
              <div className="invoice__header-wrapper border-2 border-bottom border-white mb-40">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="invoice__header pb-20">
                      <div className="row align-items-end">
                        <div className="col-md-4 col-sm-6">
                          <div className="invoice__left">
                            <Logo/>
                            <p>2879 Elk Creek Road <br /> Stone Mountain, Georgia </p>
                          </div>
                        </div>
                        <div className="col-md-8 col-sm-6">
                          <div className="invoice__right mt-15 mt-sm-0 text-sm-end">
                            <h3 className="text-uppercase font-70 mb-20">Invoice</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="invoice__customer mb-30">
                <div className="row">
                  <div className="col-md-6 col-sm-8">
                    <div className="invoice__customer-details">
                      <h4 className="mb-10 text-uppercase">{name}</h4>
                      <p className="mb-0 text-uppercase">{country}</p>
                      <p className="mb-0 text-uppercase">{city}</p>
                      <p className="mb-0">{contact}</p>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-4">
                    <div className="invoice__details mt-md-0 mt-20 text-md-end">
                      <p className="mb-0">
                        <strong>Invoice ID:</strong> #{invoice}
                      </p>
                      <p className="mb-0">
                        <strong>Payment Status:</strong> #{payment_status}
                      </p>
                      <p className="mb-0">
                        <strong>Date:</strong> {dayjs(createdAt).format("MMMM D, YYYY")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="invoice__order-table pt-30 pb-30 pl-40 pr-40 bg-white mb-30">
                <table className="table">
                  <thead className="table-light">
                    <tr>
                      <th scope="col">SL</th>
                      <th scope="col">Product Name</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Item Price</th>
                      <th scope="col">Amount</th>
                    </tr>
                  </thead>
                  <tbody className="table-group-divider">
                    {cart.map((item, i) => (
                      <tr key={i}>
                        <td>{i + 1}</td>
                        <td>{item.title}</td>
                        <td>{item.orderQuantity}</td>
                        <td>৳{item.price}</td>
                        <td>৳{item.price * item.orderQuantity}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="invoice__total pt-40 pb-10 alert-success pl-40 pr-40 mb-30">
                <div className="row">
                  <div className="col-lg-3 col-md-4">
                    <div className="invoice__payment-method mb-30">
                      <h5 className="mb-0">Payment Method</h5>
                      <p className="tp-font-medium text-uppercase">{paymentMethod}</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4">
                    <div className="invoice__shippint-cost mb-30">
                      <h5 className="mb-0">Shipping Cost</h5>
                      <p className="tp-font-medium">৳{shippingCost}</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4">
                    <div className="invoice__discount-cost mb-30">
                      <h5 className="mb-0">Discount</h5>
                      <p className="tp-font-medium">৳{discount.toFixed(2)}</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4">
                    <div className="invoice__total-ammount mb-30">
                      <h5 className="mb-0">Total Ammount</h5>
                      <p className="tp-font-medium text-danger">
                        <strong>৳{parseInt(totalAmount).toFixed(2)}</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div className="invoice__print text-end mt-3">
              <div className="row">
                <div className="col-xl-12">
                  <ReactToPrint
                    trigger={() => (
                      <button
                        type="button"
                        className="tp-invoice-print tp-btn tp-btn-black"
                      >
                        <span className="mr-5">
                          <i className="fa-regular fa-print"></i>
                        </span>{" "}
                        Print
                      </button>
                    )}
                    content={() => printRef.current}
                    documentTitle="Invoice"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      {content}
    </>
  );
};

export default OrderArea;