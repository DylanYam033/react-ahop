import { Layout } from "../../Components/Layout"
import { OrdersCard } from "../../Components/OrdersCard"
import { useContext } from "react";
import { ShopCartContext } from "../../Context";
import { Link } from "react-router-dom";

function MyOrders() {
  const context = useContext(ShopCartContext);

    return (
      <Layout>
        <div className="flex items-center justify-center relative w-80">
          <h1 className="font-medium text-xl mb-5">My Orders</h1>
        </div>
        {
          context.order.map((order, index) => (
            <Link key={index} to={`/my-orders/${index}`}>
              <OrdersCard 
                totalPrice={order.totalPrice} 
                totalProducts={order.totalProducts}/>
            </Link>
            
          ))
        }
      </Layout>
    )
  }
  
  export {MyOrders} 