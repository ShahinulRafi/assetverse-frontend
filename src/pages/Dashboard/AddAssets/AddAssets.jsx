import React from "react";
// import axios from "axios";
import useAxios from "../../../hooks/useAxios";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthContext";

const AddAssets = () => {
  const axiosInstance = useAxios();
  const {user} = useContext(AuthContext);

  const handleAddAsset = (e) => {
    e.preventDefault();
    const form = e.target;
    const productName = form.productName.value;
    const productImage = form.productImage.files[0];
    const productType = form.productType.value;
    const productQuantity = form.productQuantity.value;

    const newAsset = {
      productName,
      productImage,
      productType,
      productQuantity: parseInt(productQuantity),
      managerEmail: user?.email
    };

    console.log(newAsset);
    axiosInstance
      .post("/assets", newAsset)
      .then((response) => {
        alert("Asset added successfully:", response.data);
        // form.reset();
      })
      .catch((error) => {
        console.error("Error adding asset:", error);
      });
  };
  return (
    <div>
      <h2>Add Assets</h2>

      <div className="flex justify-center mt-10">
        <div className="card bg-base-100 w-full max-w-md shadow-2xl">
          <div className="card-body">
            <h2 className="text-xl font-semibold text-center mb-4">
              Add Asset
            </h2>

            <form onSubmit={handleAddAsset}>
              <fieldset className="fieldset space-y-3">
                {/* Product Name */}
                <label className="label">Product Name</label>
                <input
                  type="text"
                  name="productName"
                  className="input input-bordered w-full"
                  placeholder="Enter product name"
                />

                {/* Product Image */}
                <label className="label">Product Image (ImgBB)</label>
                <input
                  type="file"
                  name="productImage"
                  accept="image/*"
                  className="file-input file-input-bordered w-full"
                />

                {/* Product Type */}
                <label className="label">Product Type</label>
                <select
                  name="productType"
                  className="select select-bordered w-full"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select type
                  </option>
                  <option value="Returnable">Returnable</option>
                  <option value="Non-returnable">Non-returnable</option>
                </select>

                {/* Product Quantity */}
                <label className="label">Product Quantity</label>
                <input
                  type="number"
                  name="productQuantity"
                  min="1"
                  className="input input-bordered w-full"
                  placeholder="Enter quantity"
                />

                {/* Submit */}
                <button className="btn btn-primary mt-4 w-full">
                  Add Asset
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAssets;
