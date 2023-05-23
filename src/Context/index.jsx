import { createContext, useState, useEffect } from "react";

export const ShopCartContext = createContext();

export const ShopCartProvider = ({ children }) => {

  // Get products
  const [products, setProducts] = useState(null)
  const [filteredProducts, setFilteredProducts] = useState(null)

  //search product by title
  const [searchProducts, setSearchProducts] = useState(null)

  //search product by category
  const [searchByCategory, setSearchByCategory] = useState(null)
  console.log('category: ',searchByCategory)

   //consumo de API
   useEffect(()=>{
    fetch('https://api.escuelajs.co/api/v1/products')
    .then(response => response.json())
    .then(data => setProducts(data))
  }, [])

  const filteredProductsByTitle = (products, searchProducts) => {
    return products?.filter(product => product.title.toLowerCase().includes(searchProducts.toLowerCase()))
  }

  const filteredProductsByCategory = (products, searchByCategory) => {
    console.log('CATEGORY: ',products)
    return products?.filter(product => product.category.name.toLowerCase().includes(searchByCategory.toLowerCase()))
  }

  const filterBy = (searchType, products, searchProducts, searchByCategory) =>{
    if(searchType === 'BY_TITLE'){
      return filteredProductsByTitle(products, searchProducts)
    }

    if(searchType === 'BY_CATEGORY'){
      return filteredProductsByCategory(products, searchByCategory)
    }

    if(searchType === 'BY_TITLE_AND_CATEGORY'){
      return filteredProductsByCategory(products, searchByCategory).filter(product => product.title.toLowerCase().includes(searchProducts.toLowerCase()))
    }

    if(!searchType){
      return products
    }
  }

  useEffect(()=>{

    if(searchProducts && searchByCategory ) setFilteredProducts(filterBy('BY_TITLE_AND_CATEGORY', products, searchProducts, searchByCategory))
    if(searchProducts && !searchByCategory ) setFilteredProducts(filterBy('BY_TITLE', products, searchProducts, searchByCategory))
    if(!searchProducts && searchByCategory) setFilteredProducts(filterBy('BY_CATEGORY', products, searchProducts, searchByCategory))
    if(!searchProducts && !searchByCategory) setFilteredProducts(filterBy(null, products, searchProducts, searchByCategory))
  }, [products, searchProducts, searchByCategory])

  console.log('FILTER:' ,filteredProducts)


  // Incrementar valor del carrito
  const [counter, setCounter] = useState(0)

  // Cambiar valor del detalle de producto si se abre o no
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
  const openProductDetail = () => setIsProductDetailOpen(true) 
  const closeProductDetail = () => setIsProductDetailOpen(false) 

  // Ver o cerrar el contenido del carrito
  const [isCheckOutCartOpen, setIsCheckOutCartOpen] = useState(false)
  const openCheckOutCart = () => setIsCheckOutCartOpen(true) 
  const closeCheckOutCart = () => setIsCheckOutCartOpen(false) 

  // Mostrar detalle de un producto
  const [productDetail, setProductDetail] = useState({})

  // Agregar productos al carrito de compras
  const [cartProducts, setCartProducts] = useState([])

  // Ordenes
  const [order, setOrder] = useState([])

  return(
    <ShopCartContext.Provider value={{
        counter,
        setCounter,
        openProductDetail,
        closeProductDetail,
        isProductDetailOpen, 
        productDetail,
        setProductDetail,
        cartProducts,
        setCartProducts,
        isCheckOutCartOpen,
        setIsCheckOutCartOpen,
        openCheckOutCart,
        closeCheckOutCart,
        order,
        setOrder,
        products,
        setProducts,
        searchProducts,
        setSearchProducts,
        filteredProducts,
        searchByCategory, 
        setSearchByCategory
    }}>
        {children}
    </ShopCartContext.Provider>
  );
}
