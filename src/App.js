import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ENDPOINT = "https://react-url-short.herokuapp.com";

const App = ()=> {
  const [formData, setformData] = useState({
    originalUrl :""
  });
  const {originalUrl} = formData;
  const handleChange = (text) => (e) => {
    setformData({ ...formData, [text]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (originalUrl) {
      console.log(originalUrl);
      const res = await axios.post(`${ENDPOINT}/api/url/short`, {originalUrl});
      console.log(res.data.url);
      
    } else{
      toast.error("Please enter the URL");
    }
  };
  return (
    <>
    <ToastContainer />
    <div className="container">
       <h3>URL SHORTNER</h3>
       <form onSubmit={handleSubmit}>
       <div className="input-group mb-3">
         <input type="text" 
          className="form-control" 
          onChange={handleChange("originalUrl")}
          value={originalUrl}
          placeholder="Enter URL.."  
          />
         <input type="submit" className="btnSubmit" value="send"/>
       </div>
       </form>
     </div>
     </>
  );
};

export default App;
