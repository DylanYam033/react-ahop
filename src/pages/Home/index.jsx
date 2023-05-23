import { useContext } from "react";
import { Layout } from "../../Components/Layout";
import { Card } from "../../Components/Card";
import { ProductDetail } from "../../Components/ProductDetail";
import { ShopCartContext } from "../../Context";

function Home() {
  const context = useContext(ShopCartContext);

  const renderView = () => {
    if (context.filteredProducts?.length > 0) {
      return context.filteredProducts?.map((product) => (
        <Card key={product.id} data={product} />
      ));
    } else {
      return <div>Sin resultados</div>;
    }
  };

  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80">
        <h1 className="font-medium text-xl mb-5">Home</h1>
      </div>

      <input
        type="text"
        placeholder="Search a product"
        className="rounded-lg border border-black w-80 p-2 mb-5"
        onChange={(event) => context.setSearchProducts(event.target.value)}
      />
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg ">
        {renderView()}
      </div>
      <ProductDetail />
    </Layout>
  );
}

export { Home };

const url =
  "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/products/22347";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "0f1e768d82msh88d3eabbd613c87p195bb6jsn49328bdd9b29",
    "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
  },
};

try {
  const response = await fetch(url, options);
  const result = await response.text();
  console.log(result);
} catch (error) {
  console.error(error);
}
