import "./ProductForm.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { addProduct } from "../../Services/productService";

function AddProduct() {

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

  const handleChange = (e) => {

    setProduct({

      ...product,

      [e.target.name]: e.target.value

    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    await addProduct({

      ...product,

      price: Number(product.price),

      rating: Number(product.rating),

      reviews: Number(product.reviews)

    });

    alert("Product Added Successfully");

    navigate("/admin/products");

  };

  return (

    <div className="product-form-container">

      <form
        className="product-form"
        onSubmit={handleSubmit}
      >

        <h1>Add Product</h1>

        <input
          type="text"
          name="name"
          placeholder="Product Name"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="brand"
          placeholder="Brand"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="category"
          placeholder="Category"
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="image"
          placeholder="Image URL"
          onChange={handleChange}
          required
        />

        <textarea
          name="description"
          placeholder="Description"
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="rating"
          placeholder="Rating"
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="reviews"
          placeholder="Reviews"
          onChange={handleChange}
          required
        />

        <button type="submit">

          Add Product

        </button>

      </form>

    </div>

  );

}

export default AddProduct;