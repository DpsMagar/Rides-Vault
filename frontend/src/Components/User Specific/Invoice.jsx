import React from 'react';
import Logo  from '../../Images/PrimaryLogo.png'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link  } from 'react-router-dom';

const Invoice = () => {
    const [data, setData]= useState([])
    const [totalPrice, setTotalPrice] = useState(0);


    useEffect(()=>{

        const fetch= async ()=>{
            try {
                const response= await axios.get('http://127.0.0.1:8000/api/order/',{
                    headers:{
                        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                    }
                })
                setData(response.data)
                 console.log(response.data);
                const total = response.data.reduce((sum, item) => sum + item.price * item.quantity, 0);
                setTotalPrice(total );

            } catch (error) {
                console.log(error);
                
            }
        }
        fetch();

    },[])

  return (
    <section className=" bg-black">
      <div className=" mx-auto  bg-white">
        <article className="overflow-hidden">
          <div className="bg-white rounded-b-md">
            {/* Header Section */}
            <Link to='/'>
                <div className="mx-9 mt-6 text-slate-700">
                <img className="h-12" src={Logo} alt="Logo" />
                </div>
            </Link>

            {/* Invoice Details */}
            <div className="p-9 grid grid-cols-4 gap-12 text-sm text-slate-500">
              <div><p className="font-normal text-slate-700">Invoice Detail:</p><p>rideVault</p><p>Bagmati, Kathmandu</p><p>Baneshowr, 44600</p></div>
              <div><p className="font-normal text-slate-700">Billed To</p><p>Dipesh Paharai Magar</p><p>Nepal</p></div>
              <div><p className="font-normal text-slate-700">Invoice Number</p><p>000000</p><p className="mt-2 font-normal text-slate-700">Date of Issue</p><p>00.00.00</p></div>
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
                  
                  {data.map((items)=>(
                                <tr className="border-b border-slate-200" key={items.id}>
                                <td className="py-4 text-sm font-medium text-slate-700">{items.name}</td>
                                <td className="hidden px-3 py-4 text-sm text-right text-slate-500 sm:table-cell">{items.quantity}</td>
                                <td className="hidden px-3 py-4 text-sm text-right text-slate-500 sm:table-cell">{`Rs.${items.price}`}</td>
                                <td className="py-4 text-sm text-right text-slate-500">{`Rs.${items.total_price}`}</td>
                              </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr><th colSpan="3" className="hidden pt-6 text-right text-sm font-light text-slate-500 sm:table-cell">Subtotal</th><td className="pt-6 text-sm text-right text-slate-500">Rs.{totalPrice}</td></tr>
                  <tr><th colSpan="3" className="hidden pt-6 text-right text-sm font-light text-slate-500 sm:table-cell">{`Discount:${" "}0.00 `}</th><td className="pt-6 text-sm text-right text-slate-500">{`Shipping:${" "}RS.150`}</td></tr>
                  <tr><th colSpan="3" className="hidden pt-4 text-right text-sm font-normal text-slate-700 sm:table-cell">Total</th><td className="pt-4 text-sm text-right text-slate-700">{totalPrice + 150}</td></tr>
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