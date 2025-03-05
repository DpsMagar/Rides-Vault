import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setItemName } from '../Store/CurrentItem';
// import {API_BASE_URL} from '../../fetches/api'
import BlurText from '../../FuzzyText/BlurText';

function ProductList() {
    const[data, setData]= useState([])
    const {state: message}= useLocation();
    const dispatch = useDispatch()
    const[loading, setLoading]= useState(true)
    
    

    useEffect(() => {

        const fetchData = async () => {
            try {
                // const response = await axios.get(`http://127.0.0.1:8000/api/${message}/`);
                const response = await axios.get(`https://rides-vault.onrender.com/api/${message}`);
                // const response = await axios.get(`${API_BASE_URL}/api/${message}`);
                console.log(message);
                
                setData(response.data);
                console.log(response.data);
                setLoading(false);
                
                
            } catch (error) {
                console.log(error);
            }
        };        
    
        fetchData();
    }, [message]);
    
    const onItemCLick=(id)=>{
        localStorage.setItem('id',id)
        // console.log("9999999999999999999999999999999999999", id);
        
        dispatch(setItemName(id))

    }
    const [showWarning, setShowWarning] = useState(false);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setShowWarning(true);
        }, 1000);

        return () => clearTimeout(timeoutId); // Cleanup on unmount
    }, []);
    
    
    

  return (
      
      <div className='min-h-screen bg-customColor max-w-screen p-10 overflow-hidden'>
        {/* <div className='text-7xl font-teko'>{message.charAt(0).toUpperCase() + message.slice(1)}s:</div>     */}
        {loading?(showWarning &&
                <div className='text-red-500 text-xl absolute mx-80 mt-52 '>
                <BlurText
                    text="Please note: Due to free hosting limitations, data fetching may take up to a minute."
                    delay={50}
                    animateBy="words"
                    direction="top"/>

                    
                </div>
        )
            
        
                :<div className='p-3 mx-9 mt-1 h-full w-full flex flex-wrap justify-start gap-7'>

                        {data.map((item)=>(
                            <Link to={`/${message}/details`} state={item.id} onClick={()=>onItemCLick(item.id)} key={item.id}>
                            {/* {localStorage.setItem('id', item.id)} */}
                                <div className='bg-yellow-950 rounded-lg size-60 flex flex-col justify-center shadow-lg hover:shadow-md hover:shadow-yellow-800'>
                                    <div className='size-44 mx-auto'>
                                        <img src={item.imageLink} alt="" />
                                        {/* <img src={`http://localhost:8080/Images/${message}/${item.image_name}`} alt="" /> */}
                                    </div >
                                    <span className='text-white w-auto mx-auto'>{item.name}</span>
                                </div>
                            </Link>
                        ))}
                        </div>}
      </div>
    )

}

export default ProductList
