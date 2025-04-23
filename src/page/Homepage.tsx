import { Button } from "@/components/ui/button";

const Homepage = () => {
  return (
    <div className="flex-1 justify-center">
      <h1>​Zap logistic</h1>
      <a href="/product-table">
        <Button>Products Table</Button>
      </a>
    </div>
  );
};
export default Homepage;
