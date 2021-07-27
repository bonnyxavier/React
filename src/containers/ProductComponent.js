import React from 'react';
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';



const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products);
    const renderList = products.map((product) => {
      const { id, title, image, price, category } = product;
      return (
        <div className="four wide column" key={id}>
        <Link to={`/product/${id}`}>
            <div className="ui link cards">
              <div className="card">
                <div className="image">
                  <img src={image} alt={title} />
                </div>
                <div className="content">
                  <div className="header">{title}</div>
                  <div className="meta price">$ {price}</div>
                  <div className="meta">{category}</div>
                </div>
              </div>
            </div>
            </Link>
        </div>
      );
    });
    return <>{renderList}</>;
  };
  

export default ProductComponent;



// const ProductComponent = () =>{
   
//     const products = useSelector((state)=>state.allProducts.product)
//     const renderList = products.map((product)=>{
//         const {id,title,image, price, category} = product
//         return(
//             <div className="four column wide" key={id}>
//                 <div className = "ui link cards">
//                     <div className = "card">
//                         <div className="image">
//                             <img src={image} alt={title} />
//                         </div>
//                         <div className="content"></div>
//                                 <div className="header">{title}</div>
//                                 <div className="meta price">${price}</div>
//                                 <div className="meta">{category}</div>
//                     </div>
//                 </div>
//             </div>
//             )
//     })

//     return(
//         <>
//         {renderList}
//         </>
//     )
   
// }