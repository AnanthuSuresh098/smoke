import { useEffect ,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productsData } from "../Redux/actions";

export const Products=()=>{

 const dispatch = useDispatch();

 const { products, isError, isLoading } = useSelector((state) => ({
   
   products: state.products,
   isError: state.isError,
   isLoading: state.isLoading,

 }));

useEffect(() => {

  dispatch(productsData());

}, [dispatch]);

return (
  <div>
    {isLoading && (
      <div className="loading_gif_wrap">
        <img
          className="loading_gif"
          src="https://c.tenor.com/tEBoZu1ISJ8AAAAC/spinning-loading.gif"
          alt="loading_gif"
        />
      </div>
    )}

    <div id="products-main-wrap">
      {products &&
        !isLoading &&
        products.map((e) => {
          return (
            <div className="products-sub-wrap">
              <div className="products-images-wrap">
                <img
                  src={e.image}
                  alt="logo192.png"
                  className="products-images"
                />
              </div>
              <div>
                <div className="product-title">{e.title}</div>
                <div className="product-by">{e.by}</div>
                <div className="product-description">{e.description}</div>
                <img
                  src="rating.png"
                  alt="logo192.png"
                  className="product-rating"
                />
                <div className="product-price">
                  {" "}
                  <strong>{e.price}</strong>
                  <span>USD</span>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  </div>
);
}
