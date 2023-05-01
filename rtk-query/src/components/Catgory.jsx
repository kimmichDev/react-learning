import { Link } from "react-router-dom";
import { useGetCategoriesQuery } from "../services/CategoryApi";

function Catgory() {
  const { data } = useGetCategoriesQuery();
  const categories = data?.data;
  return (
    <div>
      <ul>
        {categories?.map((category) => (
          <li key={category?.id}>
            <Link to={`/categories/${category?.id}`}>{category?.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Catgory;
