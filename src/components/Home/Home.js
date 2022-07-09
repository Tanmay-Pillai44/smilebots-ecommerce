import ReactStars from "react-rating-stars-component";
import productsData from "../../data/products_list.json";
import { NavLink } from "react-router-dom"

const Home = () => {
    return (
        <>
            <h1 className="heading">E-Commerce</h1>
            <div className="cards-wrapper">
                {
                    productsData.map((product, index) => (
                        <div className="card-box" key={index}>
                            <NavLink to={`/products/${product.productId}`}  style={{ "textDecoration": "none", "color": "black"}}>
                                <img src={product.imageURL} className="card-img-top" alt="" />
                                <div className="card-body">
                                    <div className="card-title">{ product.name }</div>
                                    <div className="star-container">
                                        <ReactStars style={{ "border":"0", "textAlign":"center"}}
                                            count={5}
                                            value={product.rating}
                                            edit={false}
                                            size={20}
                                            activeColor="#ffd700"
                                        />
                                    </div>
                                    <div className="price-box">
                                        <span style={{"marginRight":"10px", "color":"red"}}> {product.discount} Off</span>
                                        <span style={{"color":"#999999"}}>
                                            <b>${product.price}</b>
                                        </span>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Home;