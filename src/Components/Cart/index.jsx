import { useContext } from "react";
import { XMarkIcon } from '@heroicons/react/24/solid'
import "./styles.css"
import { ShopCartContext } from "../../Context";


function productCart(){
    const context = useContext(ShopCartContext);
    console.log(context.productDetail)
    return(
        <aside className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} .product-cart flex flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className="flex justify-between items-center p-6">
                <h2 className="font-medium text-xl">My order</h2>
                <div>
                    <XMarkIcon className="h-6 w-6 text-black-500 cursor-pointer" onClick={context.closeProductDetail} />
                </div>
            </div>
        </aside>
    )
}

export {productCart}
