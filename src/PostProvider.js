import React, { createContext, useContext, useReducer, useState } from "react";
const Post = createContext();

const PostProvider = ({ children }) => {
  //reducer
  const reducer = (state, action) => {
    switch (action.type) {
      case "add":
        return { ...state, data: action.payload };
      case "country":
        return { ...state, country: action.payload };
      case "date":
        return { ...state, date: action.payload };
      case "note":
        return { ...state, note: action.payload };
      case "del":
        return { ...state``, data: action.payload };
      case "map":
        return { ...state, Maping: action.payload };
      case "user":
        return { ...state, user: action.payload };
      default:
        return { ...state };
    }
  };

  const oldData = [
    {
      id: 1,
      country: "Dindigul",
      countryCode: "DG",
      city: "Palani",
      date: "Mon,Jan 15 2020",
      note: "the love of my native place",
      lat: 10.4897,
      long: 77.7544,
    },
    {
      id: 2,
      country: "Karur",
      countryCode: "KR",
      city: "Karur",
      date: "Mon,Jan 15 2021",
      note: "this my second home",
      lat: 10.9601,
      long: 78.0766,
    },
    {
      id: 3,
      country: "Chennai",
      countryCode: "Ch",
      city: "Chennai",
      date: "Sun,Jun 24 2023",
      note: "Current Living city",
      lat: 12.9349,
      long: 80.2137,
    },
  ];

  const AddData = (newObj) => {
    dispatch({ type: "add", payload: [...state.data, newObj] });
  };

  // login validation
  const Passdata = [
    {
      mail: "santhosh@gmail.com",
      password: 12345678,
    },
    {
      mail: "kumar@gmail.com",
      password: "santhosh",
    },
    {
      mail: "santhoshkumar@gmail.com",
      password: "kumar123",
    },
  ];

  const login = (email, password) => {
    const validUser = Passdata.find(
      (user) => user.mail == email && user.password == password
    );

    if (validUser) {
      dispatch({ type: "user", payload: validUser });
      return true;
    }
    return false;
  };
  // form show up
  const mapchange = () => {
    dispatch({ type: "map", payload: true });
  };

  const FormFalse = () => {
    dispatch({ type: "map", payload: false });
  };
  //intial data
  const intData = {
    data: oldData,
    country: " ",
    date: " ",
    note: " ",
    Maping: false,
    user: null,
  };
  //reducer method
  const [state, dispatch] = useReducer(reducer, intData);
  // destructure the datat from state
  const { country, date, note, data, Maping, user } = state;

  // form handling

  const FormHandle = (e) => {
    e.preventDefault();
    const newObj = {
      id: Date.now(),
      country,
      countryCode: "Ch",
      city: "Chennai",
      date,
      note,
      lat: 12.9349,
      long: 80.2137,
    };
    AddData(newObj);
    dispatch({ type: "map", payload: false });
  };

  return (
    <Post.Provider
      value={{
        data,
        user: user || null,
        login,
        mapchange,
        FormFalse,
        Maping,
        FormHandle,
        state,
        dispatch,
      }}
    >
      {" "}
      {children}
    </Post.Provider>
  );
};
const useData = () => {
  const context = useContext(Post);
  return context;
};

export { PostProvider, useData };
