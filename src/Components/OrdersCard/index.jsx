
const OrdersCard = (props) => {

  const { totalPrice, totalProducts } = props;

  return (
    <div className="items-center mb-3 border border-black rounded-lg p-4 w-80">
      <p className="flex justify-between">
        <div className="flex flex-col">
            <span className="font-light">today</span>
            <span className="font-light">{totalProducts} Articles</span>
        </div>
        <span className="font-medium text-2xl">${totalPrice}</span>
      </p>
    </div>
  );
};

export { OrdersCard };
 