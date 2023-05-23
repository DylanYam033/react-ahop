import { useContext } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import "./styles.css";
import { ShopCartContext } from "../../Context";
import { OrderCard } from "../OrderCard";
import { totalPrice } from "../../utils";

function CheckOutCart() {
  const context = useContext(ShopCartContext);

  const deleteProduct = (id) =>{
    const filteredProducts = context.cartProducts.filter(product => product.id != id)
    context.setCartProducts(filteredProducts)
    context.setCounter(context.counter - 1)
    
  }

  const AddOrder = () =>{
    const orderAdd = {
      date: 'today',
      products: context.cartProducts,
      totalProducts: context.cartProducts.length,
      totalPrice: totalPrice(context.cartProducts)
    }

    context.setOrder([...context.order, orderAdd])
    context.setCartProducts([])
    context.setCounter(0)
    context.setSearchProducts(null)
  }

  return (
    <aside
      className={`${
        context.isCheckOutCartOpen ? "flex" : "hidden"
      } checkout-cart flex flex-col fixed right-0 border border-black rounded-lg bg-white`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">My Order</h2>
        <div>
          <XMarkIcon
            className="h-6 w-6 text-black-500 cursor-pointer"
            onClick={context.closeCheckOutCart}
          />
        </div>
      </div>
      <div className="px-6 overflow-y-scroll flex-1">
      {context.cartProducts.map((product) => (
        <OrderCard
          key={product.id}
          id={product.id}
          title={product.title}
          imageUrl={product.images[0]}
          price={product.price}
          deleteProduct={deleteProduct}
        />
      ))}
      </div>
      <div className="px-6 mb-6">
        <p className="flex justify-between items-center">
          <span>Total:</span>
          <span className="font-medium text-xl">${totalPrice(context.cartProducts)}</span>
        </p>
        <Link to='/my-orders/last'>
          <button className="w-full bg-black py-3 text-white rounded-lg" onClick={() => AddOrder()}>Ordenar</button>
        </Link>
        
      </div>
    </aside>
  );
}

export { CheckOutCart };
