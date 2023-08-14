import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fatchProducts } from '../store/products/productSlice'
import Product from './Product'

function ProductSection() {
    const {products} = useSelector(state => state.product)

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fatchProducts())
        
    },[]) 
    return (
        <>
            <section className="bg0 p-t-23 p-b-140">
                <div className="container">
                    <div className="p-b-10">
                        <h3 className="ltext-103 cl5">
                            Product Overview
                        </h3>
                    </div>

                    <div className="flex-w flex-sb-m p-b-52">
                        <div className="flex-w flex-l-m filter-tope-group m-tb-10">
                            <button className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 how-active1" data-filter="*">
                                All Products
                            </button>

                            <button className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5" data-filter=".women">
                                Women
                            </button>

                            <button className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5" data-filter=".men">
                                Men
                            </button>

                            <button className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5" data-filter=".bag">
                                Bag
                            </button>

                            <button className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5" data-filter=".shoes">
                                Shoes
                            </button>

                            <button className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5" data-filter=".watches">
                                Watches
                            </button>
                        </div>
                    </div>

                    <div className="row isotope-grid">


                    {
                        products.map(item => <Product key={item.id} product={item} />)
                    }
                        

                    </div>
                </div>
            </section>
        </>
    )
}

export default ProductSection