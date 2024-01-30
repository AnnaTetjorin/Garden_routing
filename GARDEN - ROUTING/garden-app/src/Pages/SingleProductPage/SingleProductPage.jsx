import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShowSingleProduct } from "../../components/SingleProduct/ShowSingleProduct";

function SingleProductPage() {
  const [singleProduct, setSingleProduct] = useState();
  const { id } = useParams();

  useEffect(() => {
    ShowSingleProduct(id, setSingleProduct);
  }, [id]);

  return (
    <div>
      <ShowSingleProduct />
    </div>
  );
}

export default SingleProductPage;
