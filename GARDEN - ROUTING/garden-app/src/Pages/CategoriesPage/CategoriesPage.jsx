import { CategoriesList } from "../../components/Categories/CategoriesList";
import { CategoryItemPage } from "../../components/Categories/CategoryItemPage";

function CategoriesPage() {
  return (
    <div>
      <CategoryItemPage />
      <CategoriesList style={{ display: "none" }} />
    </div>
  );
}

export default CategoriesPage;
