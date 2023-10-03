import React from "react";
import { Link, useParams } from "react-router-dom";
import { useData } from "./PostProvider";

const City = () => {
  const { data, dispatch } = useData();

  const handleDelete = (id) => {
    let afterdelete = data.filter((value) => value.id != id);
    dispatch({ type: "del", payload: afterdelete });
  };

  return (
    <div>
      <ul>
        {data.map((value) => {
          return (
            <div>
              <Link to={`Details/${value.id}`}>
                {" "}
                <li>
                  <span className="pt">{value.countryCode}</span>
                  <h3 className="lisbon">{value.city}</h3>
                  <p>
                    ({value.month} {value.date},{value.year})
                  </p>
                </li>
              </Link>
              <button
                type="button"
                className="closebtn"
                onClick={() => handleDelete(value.id)}
              >
                X
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default City;
