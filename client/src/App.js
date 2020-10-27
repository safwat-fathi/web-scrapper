import React, { useState } from "react";
// axios
import { api } from "./api";

function App() {
  const [response, setResponse] = useState({});
  const [loading, setLoading] = useState(false);
  const [feedBackMsg, setFeedBackMsg] = useState("");
  // form inputs
  const [inputVals, setInputVals] = useState({
    url: "",
    title: "",
  });

  const handleChange = (e) => {
    // set inputs
    setInputVals({
      ...inputVals,
      [e.target.name]: e.target.value,
    });
  };

  // handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(inputVals);

    console.log("submitted");
    // post to API
    api
      .post("search", inputVals)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      {/* form */}
      <form onSubmit={handleSubmit}>
        <input
          name="url"
          type="text"
          value={inputVals.url}
          placeholder="Enter URL"
          onChange={handleChange}
        />
        <input
          name="title"
          type="text"
          value={inputVals.title}
          placeholder="Enter Title (optional)"
          onChange={handleChange}
        />
        <button type="submit">Add URL</button>
      </form>
      {/* table */}
      <table>
        {/* table head */}
        <tr>
          <th>Title/URL</th>
          <th>URL</th>
          <th>Last Checked</th>
        </tr>
        {/* table data */}
        <tr>
          <td></td>
          <td>
            <p>www.example.net/queryParam</p>
          </td>
          <td>
            <p>10/05/2022</p>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default App;
