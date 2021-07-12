import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ENDPOINT = "http://localhost:8000";

const App = ()=> {
  return (
    <div className="container">
       <h3>URL SHORTNER</h3>
       {/* <label for="basic-url" class="form-label">Your vanity URL</label> */}
       <div class="input-group mb-3">
         <input type="text" class="form-control" placeholder="Enter URL.." aria-label="Enter URL" aria-describedby="button-addon2" />
         <button class="btn btn-outline-secondary" type="button" id="button-addon2">Send</button>
       </div>
     </div>
  );
};

export default App;
