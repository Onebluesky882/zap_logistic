import "./App.css";
import AddProduct from "./page/ProductsTable";

function App({ children }: React.PropsWithChildren) {
  return <div>{children}</div>;
}

export default App;
