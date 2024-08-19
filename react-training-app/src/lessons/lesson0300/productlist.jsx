const ProductsList = ({ data }) => {
  return data.map((e) => (
    <div key={e.id} className="product-item">
      <h2>Item: {e.title}</h2>
    </div>
  ));
};

export default ProductsList;
