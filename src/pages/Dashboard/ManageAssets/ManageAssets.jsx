import React from "react";
import useAxios from "../../../hooks/useAxios";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthContext";
import { useEffect } from "react";
import { useState } from "react";

const ManageAssets = () => {
  const [assets, setAssets] = useState([]);
  const axiosInstance = useAxios();
  const {user} = useContext(AuthContext);

  useEffect(() => {
    axiosInstance.get(`/manager/assets/${user?.email}`)
      .then(response => {
        setAssets(response.data);
      })
      .catch(error => {
        console.error("Error fetching assets:", error);
      });
  }, [user?.email, axiosInstance]);

  console.log(assets);

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Asset Name</th>
              <th>Type</th>
              <th>Quantity</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
                assets.map((asset) => (
                    <tr key={asset._id}>
                      <th>
                        <label>
                          <input type="checkbox" className="checkbox" />
                        </label>
                        </th>
                        {/* <td>{asset.productImage}</td> */}
                        <td>{asset.productName}</td>
                        <td>{asset.productType}</td>
                        <td>{asset.productQuantity}</td>
                        <td>
                          <button className="btn btn-ghost btn-xs">Edit</button>
                        </td>
                    </tr>
                ))  
            }
          </tbody>

          {/* foot */}
          <tfoot>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default ManageAssets;
