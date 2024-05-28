import React, { useEffect, useState } from "react";
import axios from "axios";

function Test() {
  const [file, setFile] = useState(null);
  const [image, setImage] = useState(null);
  const [housesData, setHouses] = useState([]);

  const handleUpload = (e) => {
    const formData = new FormData();
    formData.append('file', file);
    axios.post("http://localhost:8006/upload", formData)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  useEffect(() => {
    axios.get("http://localhost:8006/getImage")
      .then(res => setImage(res.data[51].image))
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    axios.get("http://localhost:8006/home").then((res) => {
      setHouses(res.data);
    });
  }, []);

  useEffect(() => {
    const house = housesData.find(house => house.id === 51);
    if (house) {
      setImage(house.image);
    }
  }, []);

  return (
    <div>
      <input type="file" id="myFile" accept="image/*" onChange={(e) => setFile(e.target.files[0])}/>
      <button onClick={handleUpload}>Submit</button>
      <br />
      {image && <img src={image} alt="House"/>}
    </div>
  );
}

export default Test;

