import { useEffect, useState } from "react";
import "./App.css";
import supabase from "./utils/supabase";
type inventory = {
  productId: string;
  amount: number;
  productName: string;
};

function App() {
  const [data, setData] = useState<inventory[]>();
  useEffect(() => {
    const getData = async () => {
      const { data } = await supabase.from("inventory_items").select();
      if (data) setData(data);
    };
    getData();
  }, []);
  return (
    <h1>
      <pre>{JSON.stringify(data, null, "")}</pre>
    </h1>
  );
}

export default App;
