/* eslint-disable react/prop-types */
import '../styles/Product.css'
const Product = ({ image, name}) => {
    return(
        <div className='product-card'>
            <div className='product-image-wrapper'>
                <img src={image} alt="Product" className='product-image'/>
            </div>
            <p className='product-name'>{name}</p>
        </div>
    )
}

export default Product