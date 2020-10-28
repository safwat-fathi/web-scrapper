import React, { useState } from "react";
// connect to redux store
import { connect } from "react-redux";
// redux actions
import { getUrlContent } from "./actions";

const App = ({ urls, response, loading, feedBackMsg }) => {
  // form inputs
  const [inputVals, setInputVals] = useState({
    url: "",
    title: "",
  });
  //
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
    console.log("submitted");
    // post to API
    getUrlContent(inputVals);
  };

  console.log(urls);

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
        <thead>
          <tr>
            <th>Title/URL</th>
            <th>URL</th>
            <th>Last Checked</th>
          </tr>
          {/* table data */}
        </thead>
        {/* table head */}
        <tbody>
          <tr>
            <td>Title</td>
            <td>
              <p>www.example.net/queryParam</p>
            </td>
            <td>
              <p>10/05/2022</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => {
  return {
    getUrlContent: (inputVals) => dispatch(getUrlContent(inputVals)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
