import { useSelector, useDispatch } from "react-redux";
import { delItem } from "../../redux/action";

const Cart = () => {

    const state = useSelector((state) => state.addItems)
    const dispatch = useDispatch();
    console.log(state)

    const handleClose = (item) => {
        dispatch(delItem(item))
    }

    const cartItems = (cartItem) => {
        return (
            <div className="px-4 my-5 bg-light rounded-3 cart-product-wrapper" key={cartItem.productId}>
                <div className="container py-4">
                    <div className="cls-btn" onClick={() => handleClose(cartItem)}><span className="material-symbols-outlined">close</span></div>
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <img src={cartItem.imageURL} alt={cartItem.name} height="200px" width="180px" />
                        </div>
                        <div className="col-md-4">
                            <h3>{cartItem.name}</h3>
                            <p className="lead fw-bold">${cartItem.price}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <>
            {state.length !== 0 && state.map(cartItems)}
            {state.length !== 0 &&
                <div className="buy-now">BUY NOW</div>
            }
        </>
    )
}

export default Cart;