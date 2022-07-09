import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import productsData from "../../data/products_list.json";
import ReactStars from "react-rating-stars-component";
import { useDispatch } from "react-redux";
import { addItem, delItem } from "../../redux/action";


const ProductPage = () => {

    const { id } = useParams();
    const [ product, setProduct ] = useState({});
    const [cartBtn, setCartBtn] = useState("ADD TO CART")

    const navigate = useNavigate();


    useEffect(() => {
        let getProduct = productsData.find(item => item.productId === id);
        setProduct(getProduct);
    }, [id]);

    const dispatch = useDispatch();

    const handleCart = (product) => {
        if(cartBtn === "ADD TO CART") {
            dispatch(addItem(product))
            setCartBtn("REMOVE FROM CART")
        } else {
            dispatch(delItem(product))
            setCartBtn("ADD TO CART")
        }
    }

    return (
        <div className="popup-wrapper">
            <div className="popup-inner">
                <img src={product.imageURL} alt="product-img" height="300px" width="400px" />
                <div className="details-box">
                    <div className="product-name">{product.name}</div>
                    <div className="product-brand">{product.brandName}</div>
                    <div className="product-seller">- {product.sellerName}</div>
                    <div className="star-container">
                        <ReactStars style={{ "border":"0"}}
                            count={5}
                            value={product.rating}
                            edit={false}
                            size={20}
                            activeColor="#ffd700"
                        />
                    </div>
                    <div className="product-price-box">
                        <span style={{"marginRight":"10px", "color":"red"}}> {product.discount} Off</span>
                        <span style={{"color":"#999999"}}>
                            <b>${product.price}</b>
                        </span>
                    </div>
                    <div className="add-to-cart" onClick={() => handleCart(product)}>
                        <span className="material-symbols-outlined shop-logo">shopping_bag</span>
                        <span className="add-name">{cartBtn}</span>
                    </div>
                    <div className="go-back" onClick={() => navigate("/home")}>
                        GO BACK
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductPage;