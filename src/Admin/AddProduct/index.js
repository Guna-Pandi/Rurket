import React from "react";
import "./index.css";
function AddProduct() {
  return (
    <div className="addProduct">        
      <div className="addProduct-form">
      <h1>Add New Product</h1>
      <div className="leftSide">    
      
            <form id="addProduct-form" method="POST">
              <div className="join">
                <label htmlFor="name">Name</label>
                <input name="name" placeholder="Ex: Mangos" type="text" />
                </div>

            <div className="option">
              <label htmlFor="category">Category</label>
              <select id="category">
                <option>Vegetables</option>
                <option>Fruits</option>
                <option>Beverages</option>
                <option>Grocery</option>
                <option>Edible oil</option>
                <option>Household</option>
              </select>
            </div>

            <div className="single-row">
              <div className="single-column">
                <label htmlFor="available">Available</label>
                <input name="available" placeholder="Ex: 30" type="text" />
              </div>

              <div className="option">
                <label htmlFor="unit">Unit</label>
                <select id="unit">
                  <option>Ex: Kg</option>
                  <option>Ex: g</option>
                  <option>Ex: mg</option>
                </select>
              </div>
            </div>

            <div className="single-row">
              <div className="single-column">
                <label htmlFor="min">Min</label>
                <input name="min" placeholder="Ex: 0.5" type="text" />
              </div>

              <div className="single-column">
                <label htmlFor="max">Max</label>
                <input name="max" placeholder="Ex: 5" type="text" />
              </div>
              </div>
            </form>         
        </div>
        </div>


      <div className="addRight">
        <div className="rightSide">
          <form id="addright" method="POST">
            <label htmlFor="description">Description</label>
            <textarea
              rows="6"
              placeholder="Say about the product"
              name="description"
              required
            ></textarea>

            <label htmlFor="image">Image</label>
            <label
              for="imgselect"
              className="font-inter font-normal border-gray-300 border overflow-hidden cursor-pointer rounded-lg h-10 pt-3 pl-2 text-gray-400"
            >
              Select the product image
            </label>
            <input
              id="imgselect"
              type="file"
              accept=".png, .jpg, .jpeg"
              placeholder="select img"
              hidden
            />

            <div className="btn">
              <button type="submit">Save</button>
            </div>
            <div className="para-ppp">
              <div className="para-pp">
                <a href="###" className="link">
                  Watch our video{" "}
                </a>{" "}
                to know more about adding the product
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
