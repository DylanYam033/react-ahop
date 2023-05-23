import { useContext } from "react";
import { XMarkIcon } from '@heroicons/react/24/solid'
import "./styles.css"
import { ShopCartContext } from "../../Context";


function ProductDetail(){
    const context = useContext(ShopCartContext);
    return(
        <aside className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className="flex justify-between items-center p-6">
                <h2 className="font-medium text-xl">Detail</h2>
                <div>
                    <XMarkIcon className="h-6 w-6 text-black-500 cursor-pointer" onClick={context.closeProductDetail} />
                </div>
            </div>
            <figure className="px-6">
                    <img className="w-full h-full rounded-lg" src={context.productDetail.images?.[0]} 
                    alt={context.productDetail.title} />
                </figure>
                <p className="flex flex-col p-6">
                    <span className="font-medium text-2xl mb-2">${context.productDetail.price}</span>
                    <span className="font-medium text-md">{context.productDetail.title}</span>
                    <span className="font-light text-sm">{context.productDetail.description}</span>
                </p>
        </aside>
    )
}

export {ProductDetail}
