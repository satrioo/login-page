import React, { useState, useEffect } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';

function Form() {
  const [loading, setLoading] = useState(true);
  const [showPass, setShowPass] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const validationSchema = Yup.object().shape({
    email: Yup.string()
        .required('Email is required')
        .email('Email is invalid'),
    password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
    });
    const formOptions = { resolver: yupResolver(validationSchema) };

    const { register, handleSubmit, reset, formState } = useForm(formOptions);
    const { errors } = formState;

    function togglePass() {
      setShowPass(!showPass)
    }

    function onSubmit(data) {
      setLoading(true);
      setTimeout(() => {  
        setLoading(false);
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(data, null, 4));
          return false;
      }, 2000);
    }

  return (
    <div className='mt-12'>
      {loading ? (
        <div className="loader-container">
      	  <div className="spinner"></div>
        </div>
      ) : ''}
      <div>
        <p className='text-[32px] font-bold'> Hello </p>
        <p className='text-[18px]'> Enter your email and password to login. </p>

        <p className='text-[24px] font-semibold mt-8'> Login </p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className=' flex flex-col mb-2 md:mt-8 mt-4'>
            <label className=' block'> Email </label>
            <input type="text" name="email" {...register('email')} className={`block w-full ${errors.email ? 'is-invalid' : ''}`} />
            <div className="invalid-feedback w-full">{errors.email?.message}</div>
          </div>

          <div className=' flex flex-col'>
            <label className=' block'> Password </label>
            <div className='relative'>
              <input type={showPass ? "text" : "password"} className={` block w-full pr-11 ${errors.password ? 'is-invalid' : ''}`} name="password" {...register('password')} />
              { showPass ? (
              <img src="https://img.icons8.com/?size=256&amp;id=5XiJ2fH1HjKN&amp;format=png" onClick={togglePass} width="256" height="256" className='icon cursor-pointer' />
              ) : (
              <img src="https://img.icons8.com/?size=256&amp;id=PWKe0BAu1upx&amp;format=png" onClick={togglePass} width="256" height="256" className='icon cursor-pointer' />
              )}
            </div>
            <div className="invalid-feedback w-full">{errors.password?.message}</div>
          </div>

          <div className=' flex justify-between my-4 items-center'>
            <div className=' flex items-center gap-2'>
              <input id="check" type='checkbox' />
              <label for="check" className=' cursor-pointer text-purples text-[16px]'> Remember me</label>
            </div>
            <button className='text-purples underline text-[16px]'> Forgot Password?</button>
          </div>

          <div className=' flex gap-2 action justify-between mb-6'>
            <button type="submit" className='btn btn-purple'> Login </button>
            <button type="button" className='btn '> Sign Up </button>
          </div>
        </form>

        <div>
          <span className='text-[14px] flex justify-center mb-3'> Or, Login with </span>
          <div className=' flex justify-between gap-2'>
            <button className='btn btn-small'> Facebook </button>
            <button className='btn btn-small'> Linnked In </button>
            <button className='btn btn-small'> Google </button>
          </div>
        </div>
      </div>
    </div>
  )
}  

export default Form;