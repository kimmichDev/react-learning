import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useGetCategoryByIdQuery, useUpdateCategoryMutation } from "../services/CategoryApi";

function Detail() {
  const { id } = useParams();
  const { data } = useGetCategoryByIdQuery(id);
  const category = data?.data;
  const [name, setName] = useState("");
  useEffect(() => {
    setName(category?.name);
  }, [category]);
  const [updateCategory] = useUpdateCategoryMutation();
  const formSubmitHander = (e) => {
    e.preventDefault();
    updateCategory({ id, name });
    console.log("ok");
  };
  return (
    <div>
      Detail - {category?.name}
      <form onSubmit={formSubmitHander}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="submit" value="Update" />
      </form>
    </div>
  );
}

export default Detail;
