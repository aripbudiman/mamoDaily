import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToDatabase } from "../redux/slices/negaraSlices";
export default function FormValidasi() {
  const [data, setData] = useState({
    negara: "",
    skor: "",
  });
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const handleClick = () => {
    dispatch(addToDatabase(data));
  };
  return (
    <div>
      <div className="form-control">
        <label htmlFor="select" className="mb-2">
          Negara
        </label>
        <select
          name="negara"
          onChange={handleChange}
          className="select select-bordered w-full max-w-xs"
        >
          <option value="indonesia">indonesia</option>
          <option value="malaysia">malaysia</option>
          <option value="thailand">thailand</option>
        </select>
      </div>
      <div className="form-control">
        <label htmlFor="select" className="mb-2">
          Skor
        </label>
        <input
          name="skor"
          onChange={handleChange}
          type="text"
          placeholder="80"
          className="input input-bordered w-full max-w-xs"
        />
      </div>
      <div className="form-control mt-2">
        <button onClick={handleClick} className="btn btn-secondary max-w-xs">
          Submit
        </button>
      </div>
    </div>
  );
}
