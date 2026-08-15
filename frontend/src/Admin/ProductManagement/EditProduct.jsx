import "./ProductForm.css";

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
  getAllProducts,
  updateProduct,
} from "../../Services/productService";

function EditProduct() {

  const { id } = useParams();

  const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: "",
    brand: "",
    category: "",
    price: "",
    image: "",
    description: "",
    rating: "",
    reviews: ""
  });

  useEffect(() => {

    loadProduct();

  }, []);

  const loadProduct = async () => {

    const products = await getAllProducts();

    const selectedProduct = products.find(
      (item) => item.id == id
    );

    if (selectedProduct) {

      setProduct(selectedProduct);

    }

  };

  const handleChange = (e) => {

    setProduct({

      ...product,

      [e.target.name]: e.target.value

    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    await updateProduct(id, {

      ...product,

      price: Number(product.price),

      rating: Number(product.rating),

      reviews: Number(product.reviews)

    });

    alert("Product Updated Successfully");

    navigate("/admin/products");

  };

  return (

    <div className="product-form-container">

      <form
        className="product-form"
        onSubmit={handleSubmit}
      >

        <h1>Edit Product</h1>

        <input
          type="text"
          name="name"
          value={product.name}
          onChange={handleChange}
          placeholder="Product Name"
          required
        />

        <input
          type="text"
          name="brand"
          value={product.brand}
          onChange={handleChange}
          placeholder="Brand"
          required
        />

        <input
          type="text"
          name="category"
          value={product.category}
          onChange={handleChange}
          placeholder="Category"
          required
        />

        <input
          type="number"
          name="price"
          value={product.price}
          onChange={handleChange}
          placeholder="Price"
          required
        />

        <input
          type="text"
          name="image"
          value={product.image}
          onChange={handleChange}
          placeholder="Image URL"
          required
        />

        <textarea
          name="description"
          value={product.description}
          onChange={handleChange}
          placeholder="Description"
          required
        />

        <input
          type="number"
          name="rating"
          value={product.rating}
          onChange={handleChange}
          placeholder="Rating"
          required
        />

        <input
          type="number"
          name="reviews"
          value={product.reviews}
          onChange={handleChange}
          placeholder="Reviews"
          required
        />

        <button type="submit">

          Update Product

        </button>

      </form>

    </div>

  );

}

export default EditProduct;