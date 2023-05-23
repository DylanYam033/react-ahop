import { useRoutes, BrowserRouter } from "react-router-dom"; //el hook useRoutes usa un array de objetos para almacenar las rutas y el componente al que apunta esa ruta
import { ShopCartProvider } from "../../Context";
import { Home } from "../Home";
import { MyAccount } from "../MyAccount";
import { MyOrder } from "../MyOrder";
import { MyOrders } from "../MyOrders";
import { NotFound } from "../NotFound";
import { SingIn } from "../SingIn";
import { Navbar } from "../../Components/Navbar";
import { CheckOutCart } from "../../Components/CheckOutCart";
import "./App.css";

function AppRoutes() {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/clothes", element: <Home /> },
    { path: "/electronics", element: <Home /> },
    { path: "/shoes", element: <Home /> },
    { path: "/gaming", element: <Home /> },
    { path: "/others", element: <Home /> },
    { path: "/my-account", element: <MyAccount /> },
    { path: "/my-order", element: <MyOrder /> },
    { path: "/my-orders", element: <MyOrders /> },
    { path: "/my-orders/last", element: <MyOrder /> },
    { path: "/my-orders/:id", element: <MyOrder /> },
    { path: "/notfound", element: <NotFound /> },
    { path: "/singin", element: <SingIn /> },
  ]);

  return routes;
}

function App() {
  return (
    <ShopCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
        <CheckOutCart/>
      </BrowserRouter>
    </ShopCartProvider>
  );
}

export { App };
