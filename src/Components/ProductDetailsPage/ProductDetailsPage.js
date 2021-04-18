import { ProductDetailsImageComponent,ImageParalxComponentDetails,ProductDetailsImageComponentsec } from "../ImageParalxComponent/ImageParalxComponent"
import rating from "../../Assets/Images/rating.png";

export const ProductDetailsPage=()=> {
    return(
        <>
        <div>
            <div className="row">
            <ImageParalxComponentDetails></ImageParalxComponentDetails>
            <div className="product-price">
            <h2 className="product-head">Lorem Ipsum is simply dummy text</h2>
             <h3>₹9,999/- Only</h3>
            </div>
                        
            </div>
            <div className="row">
                <p className="product-desc product-sec align-center">"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
                    unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries"</p>
            </div>
            <div className="row">
                <div className="col-md-6 col-xs-6">
                    <ProductDetailsImageComponent></ProductDetailsImageComponent>
                </div>
                <div className="col-md-6 col-xs-6">
                    <div className="product-sec">
                        <h2 className="product-head">Lorem Ipsum</h2>
                        <h3>₹9,999/-</h3>
                        <img src={rating} alt="rating" style={{height: "30px"}}/>
                        <p className="product-desc">Lorem Ipsum has been the industry's standard dummy</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 col-xs-6">
                    <div className="product-sec">
                        <p className="product-desc">Payment Options:-</p>
                        <ul>
                            <li>Bank OfferFlat ₹500 off on Transaction with ICICI Bank Debit</li>
                            <li>Bank Offer5% Unlimited Cashback </li>
                            <li>Special PriceExtra ₹1000 off</li>
                            <li>Get a Google Nest Hub (Chalk) at just ₹5,999</li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-6 col-xs-6">
                    <ProductDetailsImageComponentsec></ProductDetailsImageComponentsec>
                </div>
            </div>
            <div className="row align-center">
                <div className="product-sec">
                    <h2 className="product-head">Thank You...!</h2>
                    <p className="product-desc">Lorem Ipsum has been the industry's standard dummy</p>
                </div>
            </div>
        </div>
        </>
    )
}