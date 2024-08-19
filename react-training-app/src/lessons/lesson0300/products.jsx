import ProductsList from "./productlist";
import withFetchData from "./hoc";

// products.jsx
const Todos = withFetchData(
  ProductsList,
  "https://jsonplaceholder.typicode.com/todos"
);

const Photos = withFetchData(
  ProductsList,
  "https://jsonplaceholder.typicode.com/photos"
);

const Albums = withFetchData(
  ProductsList,
  "https://jsonplaceholder.typicode.com/albums"
);

export { Todos, Photos, Albums };
