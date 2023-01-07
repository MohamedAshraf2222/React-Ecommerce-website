import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Bag from '../../components/Bag'
import SideBar from '../../components/SideBar'
import { BagItemsContext } from '../../context/Store';
import { data } from "../../data/data";

const Home = () => {
    const { bagItems, setBagItems,SaveItems,SetItem } = useContext(BagItemsContext)

    useEffect(() => {
        if (localStorage.getItem('BagItems')) {
            SaveItems();
        }
    }, [])

    return (
        <>
            <div className="grid grid-home">
                <SideBar />
                <div className="content my-8">
                    <div className="flex flex-col search-item items-center mb-9">
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="">Search Item</label>
                            <input type="text" placeholder='Apple Watch, Samsung S21, Macbook Pro, ...' />
                        </div>
                    </div>
                    <div className='grid grid-content gap-8 mx-12'>
                        {data.map((product, i) => (
                            <div className={(product.type === 'laptop' ? 'span-laptop' : '')}>
                                <Link to={`/itemview/${product.id}`}>
                                    <div className={"bg-white content flex items-center justify-center "}>
                                        <img className='h-52 p-4' src={product.image} alt="" />
                                    </div>
                                </Link>
                                <div className='content-detail flex flex-col mt-4 gap-2'>
                                    <Link to={`/itemview/${product.id}`}>
                                        <span>{product.name}</span>
                                    </Link>
                                    <span>{product.detail}</span>
                                    <div className='flex justify-between m-2 items-center'>
                                        <span>$ {product.price}</span>
                                        <button onClick={() => SetItem(product.id)}>
                                            <svg width="35" height="34" viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect x="0.500015" width="34" height="34" rx="9" fill="#1A1F16" />
                                                <path d="M24.4842 13.9555C24.3798 13.8505 24.2557 13.7672 24.1189 13.7105C23.9822 13.6538 23.8356 13.6247 23.6875 13.625H21.4375V13.0625C21.4375 12.0182 21.0227 11.0167 20.2842 10.2783C19.5458 9.53984 18.5443 9.125 17.5 9.125C16.4557 9.125 15.4542 9.53984 14.7158 10.2783C13.9774 11.0167 13.5625 12.0182 13.5625 13.0625V13.625H11.3125C11.0141 13.625 10.728 13.7435 10.517 13.9545C10.306 14.1655 10.1875 14.4516 10.1875 14.75V22.3438C10.1875 23.7148 11.3477 24.875 12.7188 24.875H22.2813C22.9445 24.8752 23.5815 24.6159 24.056 24.1525C24.2947 23.9247 24.4849 23.6509 24.6149 23.3476C24.745 23.0442 24.8122 22.7177 24.8125 22.3877V14.75C24.813 14.6024 24.7842 14.4563 24.7278 14.3199C24.6715 14.1835 24.5886 14.0597 24.4842 13.9555ZM19.75 19.8125H18.0625V21.5C18.0625 21.6492 18.0033 21.7923 17.8978 21.8977C17.7923 22.0032 17.6492 22.0625 17.5 22.0625C17.3508 22.0625 17.2078 22.0032 17.1023 21.8977C16.9968 21.7923 16.9375 21.6492 16.9375 21.5V19.8125H15.25C15.1008 19.8125 14.9578 19.7532 14.8523 19.6477C14.7468 19.5423 14.6875 19.3992 14.6875 19.25C14.6875 19.1008 14.7468 18.9577 14.8523 18.8523C14.9578 18.7468 15.1008 18.6875 15.25 18.6875H16.9375V17C16.9375 16.8508 16.9968 16.7077 17.1023 16.6023C17.2078 16.4968 17.3508 16.4375 17.5 16.4375C17.6492 16.4375 17.7923 16.4968 17.8978 16.6023C18.0033 16.7077 18.0625 16.8508 18.0625 17V18.6875H19.75C19.8992 18.6875 20.0423 18.7468 20.1478 18.8523C20.2533 18.9577 20.3125 19.1008 20.3125 19.25C20.3125 19.3992 20.2533 19.5423 20.1478 19.6477C20.0423 19.7532 19.8992 19.8125 19.75 19.8125ZM20.3125 13.625H14.6875V13.0625C14.6875 12.3166 14.9838 11.6012 15.5113 11.0738C16.0387 10.5463 16.7541 10.25 17.5 10.25C18.2459 10.25 18.9613 10.5463 19.4888 11.0738C20.0162 11.6012 20.3125 12.3166 20.3125 13.0625V13.625Z" fill="white" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <Bag />
            </div>


        </>
    )
}

export default Home