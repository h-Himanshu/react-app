import { useState } from "react";
import { useForm} from "react-hook-form";
import "../App.css";

function Form() {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors,isSubmitting },
  } = useForm( )
const delay =(d) => {
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
      resolve()
    }, d*1000);
  })
}

  const onSubmit = async(data) =>{ 
    await delay(2)//simulating network delay
   
  }
  return (
    <>
      <div className="form-container">
        <form className= "signIn" action="" onSubmit={handleSubmit(onSubmit) }>
          <input className="loginpt"  placeholder="Username" {...register("username",{required :{value:true,message:"Field cannot be empty"}})} type="text" />
          {errors.username && <div>{errors.username.message}</div>}
          <br />
          <input  className="loginpt" placeholder="Password" {...register("password",{required :{value:true,message:"Field cannot be empty"},minLength :{value :7,message : "Min length is 7"},})}  type="password" />
          {errors.password && <div>{errors.password.message}</div>}
          <br />
          {isSubmitting && <div className="loading">Loading...</div>}
          <div className="button">
            <input disabled = {isSubmitting} type="submit" value="Login" />
          </div>
        </form>
      </div>
    </>
  );
}

export default Form;
