function Product({ name, price, description }) {
    return (
        <div className="product" style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', width: '600px' }}>
            <h4>Product Name: {name}</h4>
            <p>Description: {description}</p>
            <p>Price: Rs. {price}</p>
            <button>Add to Cart</button>
        </div>
    );
}

export default Product;