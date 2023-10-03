import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./form.css";
import { useData } from "./PostProvider";
import Button from "@mui/material/Button";

const Form = () => {
  const { FormHandle, state, dispatch } = useData();
  return (
    <form onSubmit={FormHandle}>
      <div className="form_input">
        <label>City name</label>
        <input
          type="text"
          value={state.country}
          onChange={(e) =>
            dispatch({ type: "country", payload: e.target.value })
          }
        ></input>
      </div>
      <div className="form_input">
        <label>When did you go to </label>
        <input
          type="text"
          value={state.date}
          onChange={(e) => dispatch({ type: "date", payload: e.target.value })}
        ></input>
      </div>
      <div className="form_input">
        <label>Notes about your trip to </label>
        <textarea
          rows={4}
          cols={10}
          value={state.note}
          onChange={(e) => dispatch({ type: "note", payload: e.target.value })}
        ></textarea>
      </div>
      <Button className="add-btn" type="submit" variant="contained">
        add
      </Button>
      <div className="backbtn">
        <Link to="/Wise/City">
          {" "}
          <Button variant="contained">Back</Button>
        </Link>
      </div>
    </form>
  );
};

export default Form;
