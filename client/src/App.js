import { api } from "./utils/api";
import React, { useState, useEffect } from "react";
// connect to redux store
import { connect } from "react-redux";
// redux actions
import { getAllUrls, getUrlContent } from "./actions";

const App = (props) => {
  const { urls, loading, response, feedbackMsg } = props;
  // form inputs
  const [inputVals, setInputVals] = useState({
    url: "",
    title: "",
  });

  useEffect(() => {
    console.log("mounted");
    getAllUrls();
  }, []);

  useEffect(() => {
    console.log(response);
  }, [response]);

  // useEffect(() => {
  //   console.log(loading);
  // }, [loading]);

  // handle inputs change
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
    console.log(inputVals);

    // post to API
    // getUrlContent(inputVals);
    const headers = {
      "Content-Type": "application/json",
    };

    api
      .get("/urls")
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
        <thead>
          <tr>
            <th>Title</th>
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
    getUrlContent: (inputs) => dispatch(getUrlContent(inputs)),
    getAllUrls: () => dispatch(getAllUrls()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
