import { useParams } from "react-router";

const Category = () => {
  const { categoryId } = useParams();

  return <h1>Catégorie : {categoryId}</h1>;
};

export default Category;
