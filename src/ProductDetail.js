import { Link, useParams } from "react-router-dom";

function ProductDetail(){
    const linkStyle = {
        color: 'rgb(241, 241, 190)'
    }
    const param = useParams();

    return (
    <>
        <h2>Product Details</h2>
        <p>{param.productId}</p>
        <p><Link to=".." style={linkStyle} relative="path">Back</Link></p>
    </>
);}

export default ProductDetail;