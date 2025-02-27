import React from 'react';
import Logo  from '../../Images/PrimaryLogo.png'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link  } from 'react-router-dom';

const Invoice = () => {
    const [itemsData, setItemsData]= useState([])
    const [ordersData, setOrdersData]= useState([])
    // const [totalPrice, setTotalPrice] = useState(0);
    const [loading, setLoading]= useState(true)


    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem("token");
            // console.log("JWT Token:", token); // Debugging
        
            try {
                // console.log("Making request to backend...");
                const response = await axios.get("http://localhost:8080/user/whole-data", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                        Accept: "application/json"
                    },
                });
                // console.log("Response received:", response);
                setItemsData(response.data.items);
                setOrdersData(response.data.orders);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
                setLoading(false);
            }
        };
    
        fetchData();
    }, []);

    const rawDate = ordersData?.orderedAt;
    const formattedDate = rawDate
      ? new Date(rawDate).toLocaleString("en-US", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })
      : "N/A";
    
    
  

    if (loading) {
      return(
        <div className="flex justify-center items-center h-screen">
                <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 border-solid rounded-full border-primary-500 border-t-transparent" role="status">
                    <span className="visually-hidden">-</span>
                </div>
            </div>
      )
    }
    
  return (
    <section className=" bg-black">
      <div className=" mx-auto  bg-white">
        <article className="overflow-hidden">
          <div className="bg-white rounded-b-md">
            {/* Header Section */}
                <div className="mx-9 mt-6 text-slate-700">
                <Link className='' to='/'>
                  <img className="h-12 block " src={Logo} alt="Logo" />
                </Link>
                </div>

            {/* Invoice Details */}
            <div className="p-9 grid grid-cols-4 gap-12 text-sm text-slate-500">
              <div><p className="font-normal text-slate-700">Invoice Detail:</p><p>rideVault</p><p>Bagmati, Kathmandu</p><p>Baneshowr, 44600</p></div>
              {/* <div><p className="font-normal text-slate-700">Billed To</p> <p>{itemsData[0].user_name.charAt(0).toUpperCase() + itemsData[0].user_name.slice(1)}</p><p>Nepal</p></div> */}
              <div><p className="font-normal text-slate-700">Invoice Number</p><p>{ordersData.orderNumber}</p><p className="mt-2 font-normal text-slate-700">Date of Issue</p><p>{formattedDate}</p></div>
              <div><p className="font-normal text-slate-700">Terms</p><p>Due on receipt</p></div>
            </div>

            {/* Invoice Table */}
            <div className="p-4">
              <table className="min-w-full divide-y divide-slate-500">
                <thead>
                  <tr>
                    <th className=" text-left text-sm font-normal text-slate-700">Description</th>
                    <th className="hidden  text-right text-sm font-normal text-slate-700 sm:table-cell">Quantity</th>
                    <th className="hidden  text-right text-sm font-normal text-slate-700 sm:table-cell">Rate</th>
                    <th className=" text-right text-sm font-normal text-slate-700">Amount</th>
                  </tr>
                </thead>
                <tbody> 
                  
                  {itemsData.map((items)=>(
                                <tr className="border-b border-slate-200" key={items.id}>
                                <td className="py-4 text-sm font-medium text-slate-700">{items.name}</td>
                                <td className="hidden px-3 py-4 text-sm text-right text-slate-500 sm:table-cell">{items.quantity}</td>
                                <td className="hidden px-3 py-4 text-sm text-right text-slate-500 sm:table-cell">{`Rs.${items.price}`}</td>
                                <td className="py-4 text-sm text-right text-slate-500">{`Rs.${items.totalPrice}`}</td>
                              </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr><th colSpan="3" className="hidden pt-6 text-right text-sm font-light text-slate-500 sm:table-cell">Subtotal</th><td className="pt-6 text-sm text-right text-slate-500">Rs.{ordersData.totalPrice}</td></tr>
                  <tr><th colSpan="3" className="hidden pt-6 text-right text-sm font-light text-slate-500 sm:table-cell">{`Discount:${" "}0.00 `}</th><td className="pt-6 text-sm text-right text-slate-500">{`Shipping:${" "}RS.150`}</td></tr>
                  <tr><th colSpan="3" className="hidden pt-4 text-right text-sm font-normal text-slate-700 sm:table-cell">Total</th><td className="pt-4 text-sm text-right text-slate-700">{ordersData.totalPrice+ 150}</td></tr>
                </tfoot>
              </table>
            </div>

            {/* Footer */}
            <div className=" p-9 border-t border-slate-200">
              <p className="text-sm font-light text-slate-700">
              Payment is due upon receipt of this invoice. Please make payment immediately to avoid any delays in processing. If you have any questions or concerns regarding this invoice, kindly contact us at 9875314856
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Invoice;
