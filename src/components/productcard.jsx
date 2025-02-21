import React from "react";
import ViewButton from "../components/button";
import './productcard.css';

const Productcard=()=>{
    const productImage="data:image/jpeg;base64,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";
    const productName="Northrop Grumman B-2 Spirit";
    const price="$2,50,00,00,000";

    return(
        <div className="product-card">
            <img src={productImage} className="product-image"></img>
            <h2 className="product-name">{productName}</h2>
            <p className="price">{price}</p>
            <ViewButton/>
        </div>
    );
};

export default Productcard;