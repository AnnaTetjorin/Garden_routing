import { ProductItemPage } from "../../components/Products/ProductItemPage";
import { ProductsList } from "../../components/Products/ProductsList";

function ProductsPage() {
  return (
    <div>
      <ProductItemPage />
      <ProductsList content="main" />
    </div>
  );
}

export default ProductsPage;
