import { readDatabase } from "../../redux/slices/negaraSlices";

const readNegara = async (dispatch) => {
    try {
      const response = await fetch("https://mamo-daily-default-rtdb.asia-southeast1.firebasedatabase.app/tes.json");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      dispatch(readDatabase(data));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  

export default readNegara;