import { useForm } from "react-hook-form";
import { CardWrapper } from "./components/card/card";
import { TodoProviderWrapper } from "./components/todo-provide/todo-provide";
import React from "react";
import { ADD_USER } from "./components/card/todo";
import { nanoid } from "nanoid";

function App() {
  const { register, handleSubmit, reset } = useForm();
  const { dispatch, data } = React.useContext(TodoProviderWrapper);


  const submit = (data) => {
    dispatch({ type: ADD_USER, value: { ...data, id: nanoid() } });
    reset();
  };



  return (
    <>
      <form style={{paddingTop:"30px"}} onSubmit={handleSubmit(submit)}>
        <div style={{display:"flex", justifyContent:"center", gap:"20px"}}>

        <input style={{padding:"10px", borderRadius:"15px", marginBottom:"20px"}} {...register("user_name")} type="text" />
        <br />
        <input style={{padding:"10px", borderRadius:"15px", marginBottom:"20px"}} {...register("last_name")} type="text" />
        <br />
        </div>
        <div style={{textAlign:"center"}}>
        <button style={{padding:"10px 20px", border: "2px solid grey", borderRadius:"15px", fontSize:"20px"}}  type="submit">send</button>
        </div>
      </form>
      <CardWrapper />
    </>
  );
}

export default App;
