import { useContext } from "react";
import { ShopCartContext } from "../../Context";
import { CheckIcon } from "@heroicons/react/24/solid";

function Card(props) {
  const context = useContext(ShopCartContext);

  const showProductDetail = (productDetail) => {
    context.openProductDetail();
    context.setProductDetail(productDetail);
  };

  const addProductsCart = (product) => {
    context.setCartProducts([...context.cartProducts, product]);
    context.openCheckOutCart();
  };

  const renderIcon = (id) => {
    const isInCart =
      context.cartProducts.filter((product) => product.id === id).length > 0;

    if (isInCart) {
      return (
        <div>
          <CheckIcon />
        </div>
      
      )
      
    } else {
      return (
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAPZJREFUSEvNlMENwjAMRV83gU1gE7jCEMAQcAUmgU1gE9BHsVSlTmKpFJFr2v/87CQdE69u4nx+CnglmydwBfbfsOsbGMByl8B9LMRr0Qo4p3BBvGXFNFvsfTADHim1ZDEKoGwZyOQCrB2F0QCz0MDnCZDPKOe67ar18AYskoFMIoCBeQ1gw+5bWNWlFml2spe1/qtetNqwPYB7+lrHTJdt5wzbA+Qt/di2AN6wS3fPbVsLoDCr7FB5PkqmTQMBdJIEiazBxYwYKNgqrEH0bg2eliggUr37TRRwBDbACdhmSbW90AyU17/FeVG1vTBgcoPJZ/C/gDd/HzoZKByosgAAAABJRU5ErkJggg=="
          onClick={() => addProductsCart(props.data)}
        />
      );
    }
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg cursor-pointer">
      <div className="px-6 py-4">
        <span
          className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 
        mb-2"
        >
          {props.data.category.name}
        </span>
        <span
          className="inline-block bg-gray-200 rounded-full px-3 py-1 text-lg font-semibold text-gray-700 
        mr-2 mb-2"
        >
          {" "}
          ${props.data.price}
        </span>
        <img
          src={props.data.images[0]}
          alt=""
          className="rounded-lg"
          onClick={() => showProductDetail(props.data)}
        />
      </div>
      <div className="flex justify-center">
        <span
          className=" bg-gray-200 rounded-full px-5 py-1 text-sm font-semibold text-gray-700 mr-2 
        mb-2"
        >
          {props.data.title}
        </span>

        <span
          className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 
        mb-2"
          onClick={() => context.setCounter(context.counter + 1)}
        >
          {renderIcon(props.data.id)}
        </span>
      </div>
    </div>
  );
}

export { Card };
