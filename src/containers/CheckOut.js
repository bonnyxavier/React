// import React, {useEffect} from 'react';
// import { useParams } from 'react-router';
// import axios from 'axios';
// import { useDispatch, useSelector } from 'react-redux';
// import {selectedProduct, removeSelectedProduct} from '../redux/actions/productActions'




// const ProductDetail = () =>{
    
//     const product = useSelector((state)=>state.product)
//     const {image, title, price, category, description} = product
//     const {productId} = useParams()
//     console.log("this is useparams",useParams())
//     const dispatch = useDispatch()
//     console.log(product)

//     const mystyle= {
//         width: 50,
//         height: 50,
//     }
//     const mytablestyle ={
//         border: "5px",
//     }

//     const fetchProductDetail = async (id) => {
//         const response = await axios
//           .get(`https://fakestoreapi.com/products/${productId}`)
//           .catch((err) => {
//             console.log("Err: ", err);
//           });
//         dispatch(selectedProduct(response.data))
//       };
    
//       useEffect(()=>{
//       fetchProductDetail();
//     },[productId])

//     return(

//         <divs style={mytablestyle}>
//             <table >
//                 <tbody>
//                 <tr>
//                     <th>Image</th>
//                     <th>Category</th>
//                     <th>Price</th>
//                     <th>Title</th>
//                 </tr>
//                 <tr>
//                     <td><img className="ui fluid image" src={image} style={mystyle} /></td>
//                     <td>{category}</td>
//                     <td>{price}</td>
//                     <td>{title}</td>
//                 </tr>
//                 <tr>
//                     <td colSpan='3'>Total: </td>
//                 </tr>
//                 </tbody>

//             </table>
//         </divs>

//     )
// }

// export default ProductDetail