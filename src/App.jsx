import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import FormValidasi from "./components/FormValidasi";
import { useSelector, useDispatch } from "react-redux";
import readNegara from "./feature/negara/read";
export default function App() {
  const dispatch = useDispatch();
  const negara = useSelector((state) => state.negara.negara);

  useEffect(() => {
    readNegara(dispatch);
  }, [dispatch, negara]);
  const data = Object.entries(negara);
  return (
    <div>
      <Navbar />
      <div className="max-w-5xl mx-auto p-5">
        <FormValidasi />
      </div>
      <div>
        {data.map((item) => (
          <div key={item[0]}>
            <p>{item[1].negara}</p>
            <p>{item[1].skor}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
