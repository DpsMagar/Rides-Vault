import React, { useState, useEffect } from 'react';
import logo from '../../Images/PrimaryLogo.png'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';

function Cart() {
  const [data, setData] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [filteredData, setFilteredData] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const navigate = useNavigate();

  const userId= useSelector((state)=> state.user.userId);


  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get('https://rides-vault.onrender.com/user/items', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          }
        });

        setData(response.data);
        console.log(response.data);
        

        const total = response.data.reduce((sum, item) => sum + item.price * item.quantity, 0);
        setTotalPrice(total);

      } catch (error) {
        console.log(error);
      }
    };
    fetch();
    setRefresh(prev => !prev);
  }, [refresh]);

  useEffect(()=>{
    setRefresh(prev => !prev);

  },[])
  

  const handleDelete = async (itemId) => {
    try {
      await axios.delete(`https://rides-vault.onrender.com/user/items/${itemId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        }
      });
      setRefresh(prev => !prev);
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //   const filteredData = data.map((item) => ({
  //     name: item.name,
  //     quantity: item.quantity,
  //     image: item.image,
  //     userId: userId
  //   }));

  //   setFilteredData(filteredData);
  // }, [data]);

  const PlaceOrder = async (e) => {
    e.preventDefault();  // Prevents Link from navigating prematurely

    const itemIds = data.map((item) => item.id);
    console.log(itemIds);
    

    try {
      await axios.post('https://rides-vault.onrender.com/user/order', 
      {userId: userId,
        items: itemIds,  
        totalPrice: totalPrice,
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        }
      });

      console.log('Order placed successfully');
      navigate('/user/invoice');  
      

    } catch (error) {
      console.error('Error placing order:', error);
    }
  };

  return (
    <section className="h-screen bg-customColor">
      <Link to='/'>
        <img src={logo} alt="" className='absolute p-6' />
      </Link>
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center">
          <h1 className="text-2xl font-semibold text-gray-900">Your Cart</h1>
        </div>

        <div className="mx-auto mt-8 max-w-md md:mt-12">
          <div className="rounded-3xl bg-white shadow-lg">
            <div className="px-4 py-6 sm:px-8 sm:py-10 bg-[#723838] rounded-xl">
              <div className="flow-root">
                <ul className="-my-8 h-[288px] overflow-auto my-scrollable-container w-[415px]">
                  {data && data.map((item) => (
                    <li key={item.id} className="flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0">
                      <div className="shrink-0 relative">
                        <span className="absolute top-1 left-1 flex h-6 w-6 items-center justify-center rounded-full border bg-customColor text-sm font-medium text-white shadow sm:-top-2 sm:-right-2">{item.quantity}</span>
                        <img className="h-24 w-24 max-w-full rounded-lg object-cover" src={item.imageLink} alt="Image Here" />
                        {/* <img className="h-24 w-24 max-w-full rounded-lg object-cover" src={`https://rides-vault.onrender.com/Images/${item.itemType}/${item.image}`} alt="Image Here" /> */}
                      </div>

                      <div className="relative flex flex-1 flex-col justify-between">
                        <div className="sm:col-gap-5 sm:grid sm:grid-cols-2">
                          <div className="pr-8 sm:pr-5">
                            <p className="text-base font-semibold text-gray-900">{item.name}</p>
                            <p className="mx-0 mt-1 mb-0 text-sm text-black">{item.item_type}</p>
                          </div>

                          <div className="mt-4 flex mx-4 items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
                            <p className="shrink-0 w-20 text-base font-semibold text-gray-900 sm:order-2 sm:ml-8 sm:text-right">RS.{item.price}</p>
                          </div>
                        </div>

                        <div className="absolute mx-4 top-0 right-0 flex sm:bottom-0 sm:top-auto">
                          <button
                            type="button"
                            className="flex rounded p-2 text-center text-gray-500 transition-all duration-200 ease-in-out focus:shadow hover:text-gray-900"
                            onClick={() => { if (window.confirm(`Are you sure you want to delete ${item.name}?`)) { handleDelete(item.id); } }}
                          >
                            ❌
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 space-y-3 border-t-2 border-b-2 border-customColor py-8 text-black">
                <div className="flex items-center justify-between">
                  <p>Subtotal</p>
                  <p className="text-lg font-semibold text-gray-900">Rs.{totalPrice}</p>
                </div>
                <div className="flex items-center justify-between">
                  <p>Shipping</p>
                  <p className="text-lg font-semibold text-gray-900">Rs.150</p>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900">Total</p>
                <p className="text-2xl font-semibold text-gray-900"><span className="text-xs font-bold">RS</span> {totalPrice + 150}</p>
              </div>

              <div className="mt-6 text-center">
                <button
                  type="button"
                  className="group inline-flex w-full items-center justify-center rounded-md bg-customColor px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800"
                  onClick={PlaceOrder}
                >
                  Place Order
                  <svg xmlns="http://www.w3.org/2000/svg" className="group-hover:ml-8 ml-4 h-6 w-6 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;
