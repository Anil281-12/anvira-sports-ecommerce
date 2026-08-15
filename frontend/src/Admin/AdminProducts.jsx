import "./Admin.css";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { getAllProducts, deleteProduct } from "../Services/productService";
import { setProducts } from "../redux/productSlice";

function AdminProducts() {

  const dispatch = useDispatch();

  const products = useSelector(
    (state) => state.products.products
  );

  useEffect(() => {

    loadProducts();

  }, []);

  const loadProducts = async () => {

    const data = await getAllProducts();

    dispatch(setProducts(data));

  };

  const handleDelete = async (id) => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (!confirmDelete) return;

    await deleteProduct(id);

    alert("Product Deleted Successfully");

    loadProducts();

  };

  return (

    <>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "25px",
        }}
      >

        <h1 className="dashboard-title">
          📦 Products
        </h1>

        <Link to="/admin/add-product">

          <button className="edit-btn">

            + Add Product

          </button>

        </Link>

      </div>

      <table className="admin-table">

        <thead>

          <tr>

            <th>Image</th>

            <th>Name</th>

            <th>Category</th>

            <th>Price</th>

            <th>Edit</th>

            <th>Delete</th>

          </tr>

        </thead>

        <tbody>

          {products.map((product) => (

            <tr key={product.id}>

              <td>

                <img
                  src={product.image}
                  alt={product.name}
                />

              </td>

              <td>{product.name}</td>

              <td>{product.category}</td>

              <td>₹ {product.price}</td>

              <td>

                <Link
                  to={`/admin/edit-product/${product.id}`}
                >

                  <button className="edit-btn">

                    Edit

                  </button>

                </Link>

              </td>

              <td>

                <button
                  className="delete-btn"
                  onClick={() =>
                    handleDelete(product.id)
                  }
                >

                  Delete

                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </>

  );

}

export default AdminProducts;