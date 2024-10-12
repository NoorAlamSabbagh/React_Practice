import React from 'react'
import { useForm } from "react-hook-form";
import "../../App.css"

const HookForm = () => {
  const { register, handleSubmit, watch, formState: { errors, isSubmitting} } = useForm();

  async function onSubmit(data) {
    await new Promise((resolve) => setTimeout(resolve, 5000))
    console.log("Submitting the form", data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>First Name: </label>
        <input className={errors.firstName ? 'input-error' : ""}
          {...register("firstName",
            {
              required: true,
              minLength: { value: 3, message: "Min Len atleast 3" },
              maxLength: { value: 6, message: "Min Len atleast 6" },
            })} />
        {errors.firstName && <p className='error-msg'>{errors.firstName.message}</p>}
      </div>
      <br />
      <div>
        <label>Middle Name: </label>
        <input className={errors.firstName ? 'input-error' : ""} {...register("middleName")} />
      </div>
      <br />
      <div>
        <label>Last Name: </label>
        <input
        className={errors.firstName ? 'input-error' : ""}
        {...register("lastName",
          {
            pattern: {
              value: /^[A-Za-z]+$/i,
              message: "Last Name is not as per the rules"
            }
          })} />
        {errors.lastName && <p className='error-msg'>{errors.lastName.message}</p>}
      </div>
      <br />
      <input type='submit' disabled={isSubmitting}  value={isSubmitting ? "Submitting" : "Submitted"}/>
    </form>
  )
}

export default HookForm;