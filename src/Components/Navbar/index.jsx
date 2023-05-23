import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ShopCartContext } from "../../Context";


function Navbar() {
  const context = useContext(ShopCartContext);
  const activeStyle = "underline underline-offset-8";

  return (
    <nav className="flex justify-between items-center fixed z-10 w-full py-5 px-10 text-xl top-0">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg">
          <NavLink
            to="/"
            onClick={() => context.setSearchByCategory()}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Shop
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            onClick={() => context.searchByCategory()}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/clothes"
            onClick={() => context.setSearchByCategory('clothes')}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/electronics"
            onClick={() => context.setSearchByCategory('electronics')}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/shoes"
            onClick={() => context.setSearchByCategory('shoes')}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Shoes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/gaming"
            onClick={() => context.setSearchByCategory('gaming')}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Gaming
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/others"
            onClick={() => context.setSearchByCategory('others')}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Others
          </NavLink>
        </li>
      </ul>
      <ul className="flex items-center gap-3">
        <li>
          <NavLink
            to="/profile"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            @Dylan
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/my-orders"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            My orders
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/my-account"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/singin"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Sing in
          </NavLink>
        </li>
        <li className="flex">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAO9JREFUSEvNlN0VATEQhb/thE7ohFeKQBG8ohI6oRPOdTJ71m42GbvimNck95s7P6koHFVhfX4KeAQ3d+AMbL/hrunAAKY7B65jIbESLYBjEBdkVMQAE+AWVEe76GuyHMjJ0FAfp3rcB2i6GALJAiR6AWbAEjg5KeZ8Z1OY2gNrdp2NA2KTqPLoXXLRPm22JSS3cv2K3CZr2TahRPWjHifRkuYA5sJTJivPm2YO0Gx23biIg16nHoAmSfY90VlMD0DClmEKon+r87V4AZ7so3e8gD2wAg7AuqWUOsuOqWk1v/J2UqkzN6C4g+I9+F/AE7jxMhlT41/bAAAAAElFTkSuQmCC"/> {context.cartProducts.length}</li>
        
      </ul>
    </nav>
  );
}

export { Navbar };
