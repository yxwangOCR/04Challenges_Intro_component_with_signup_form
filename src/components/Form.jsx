import { useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  const color = { red: "hsl(0, 100%, 74%)" };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='input-block'>
        {errors.firstName ? (
          <input
            type='text'
            style={{ borderColor: color.red }}
            {...register("firstName", { required: true })}
          />
        ) : (
          <input
            type='text'
            placeholder='First Name'
            {...register("firstName", { required: true })}
          />
        )}
        {errors.firstName && <i className='ri-error-warning-fill'></i>}
        {errors.firstName && <span>First Name cannot be empty</span>}
      </div>
      <div className='input-block'>
        {errors.lastName ? (
          <input
            type='text'
            style={{ borderColor: color.red }}
            {...register("lastName", { required: true })}
          />
        ) : (
          <input
            type='text'
            placeholder='Last Name'
            {...register("lastName", { required: true })}
          />
        )}
        {errors.lastName && <i className='ri-error-warning-fill'></i>}
        {errors.lastName && <span>Last Name cannot be empty</span>}
      </div>
      <div className='input-block'>
        {errors.emailAddress ? (
          <input
            type='email'
            style={{ borderColor: color.red }}
            {...register("emailAddress", { required: true })}
          />
        ) : (
          <input
            type='email'
            placeholder='Email Address'
            {...register("emailAddress", { required: true })}
          />
        )}
        {errors.emailAddress && <i className='ri-error-warning-fill'></i>}
        {errors.emailAddress && <span>Looks like this is not an email</span>}
      </div>
      <div className='input-block'>
        {errors.password ? (
          <input
            type='password'
            style={{ borderColor: color.red }}
            {...register("password", { required: true })}
          />
        ) : (
          <input
            type='password'
            placeholder='Password'
            {...register("password", { required: true })}
          />
        )}
        {errors.password && <i className='ri-error-warning-fill'></i>}
        {errors.password && <span>Password cannot be empty</span>}
      </div>

      <button type='submit'>CLAIM YOUR FREE TRIAL</button>
      <p>
        By clicking the button, you are agreeing to our
        <span>Terms and Services</span>
      </p>
    </form>
  );
};

export default Form;
