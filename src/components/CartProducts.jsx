import React from 'react'

function CartProducts({cartItem}) {
    const {image , title , price} = cartItem
    return (
        <>
            <tr className="table_row">
                <td className="column-1">
                    <div className="how-itemcart1">
                        <img src={image} alt="IMG" />
                    </div>
                </td>
                <td className="column-2">{title}</td>
                <td className="column-3">$ {price}</td>
                <td className="column-4">
                    <div className="wrap-num-product flex-w m-l-auto m-r-0">
                        <div className="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m">
                            <i className="fs-16 zmdi zmdi-minus"></i>
                        </div>

                        <input className="mtext-104 cl3 txt-center num-product" type="number" name="num-product1" value="1" />

                        <div className="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m">
                            <i className="fs-16 zmdi zmdi-plus"></i>
                        </div>
                    </div>
                </td>
                <td className="column-5">$ {price}</td>
            </tr>
        </>
    )
}

export default CartProducts