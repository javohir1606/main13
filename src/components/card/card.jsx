import React, { useContext } from "react";
import { TodoProviderWrapper } from "../todo-provide/todo-provide";
import { DELETE_USER, EDIT_USER } from "./todo";

export const CardWrapper = () => {
  const { data, dispatch } = useContext(TodoProviderWrapper);

  const deleteItem = (id) => {
    dispatch({ type: DELETE_USER, id });
  };

  const editItem = (id, value) => {
    dispatch({ type: EDIT_USER, id, value });
  };

  return (
    <div>
      {data?.users?.map((item) => (
        <div key={item.id}>
          <h1>{item.user_name} {item.last_name}</h1>
          <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
           
            <button
              style={{
                padding: "10px 20px",
                border: "2px solid grey",
                borderRadius: "15px",
                fontSize: "20px"
              }}
              onClick={() => deleteItem(item.id)}
            >
              Delete
            </button>

            <button
              style={{
                padding: "10px 20px",
                border: "2px solid grey",
                borderRadius: "15px",
                fontSize: "20px"
              }}
              onClick={() => editItem(item.id, { user_name: "New Name", last_name: "New Last Name" })} // Temporary edit for demo purposes
            >
              Edit
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
export const todoReducer = (state, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, action.value]
      };

    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.id)
      };

    case EDIT_USER:
      return {
        ...state,
        users: state.users.map((item) =>
          item.id === action.id ? { ...item, ...action.value } : item
        ),
      };

    default:
      return state;
  }
};
