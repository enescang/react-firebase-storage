import { useState } from "react";
import "./App.css";
import { firebaseClient } from "./firebase-client";

function App() {
  const [image, setImage] = useState('');
  const [imageUrl, setUrl] = useState();

  const uploadImageToFirebase = async (event) => {
    event.preventDefault();
    const ref = firebaseClient.storage().ref('myFolder/myImage.png');
    const put = await ref.put(image)
    const url = await put.ref.getDownloadURL();
    setUrl(url);
  };

  const changeImage = async (event) => {
    await setImage(event.target.files[0]);
    console.log(image)
  };

  return (
    <div className="App">
      <h1>{imageUrl}</h1>
      <form
        method="POST"
        encType="multipart/form-data"
        onSubmit={uploadImageToFirebase}
      >
        <input
          type="file"
          className="filetype"
          onChange={changeImage}
        />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}
export default App;
