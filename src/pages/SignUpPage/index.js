import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

const SignUpPage = () => {
  const [passwordIsShowed, setPasswordIsShowed] = useState({
    password: false,
    confirmPassword: false,
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const submitHandler = (data) => {
    console.log(data);
  };

  return (
    <main className="grid grid-cols-2">
      <div className="bg-left-login dark:bg-dark-left-login">123</div>
      <div className="bg-right-login dark:bg-dark-right-login">
        <form
          onSubmit={handleSubmit(submitHandler)}
          className="flex flex-col px-[130px] pt-[110px] gap-[50px] pb-[50px]"
        >
          <div className="flex items-center justify-center gap-[14px]">
            <img src="/image/logo.svg" alt="" className="w-[32px] h-[32px]" />
            <p className="text-3xl font-bold">grocerymart</p>
          </div>
          <div className="flex flex-col gap-[10px]">
            <h1 className="text-4xl font-medium text-center">Sign Up</h1>
            <p className="text-login-text text-2xl text-center">
              Let’s create your account and Shop like a pro and save money.
            </p>
          </div>
          <div className="flex flex-col gap-[20px]">
            <div className="relative">
              <input
                {...register('email', {
                  required: true,
                  pattern:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                })}
                type="text"
                className="p-[12px] rounded-3xl text-2xl font-medium w-full border-[1px] border-solid border-login-text"
                placeholder="Email"
              />
              <img
                src="/icon/mail.svg"
                alt=""
                className="icon absolute right-[10px] top-[25%]"
              />
              {errors.email && (
                <p className="absolute bottom-[-25px] text-2xl font-medium text-rose-900">
                  Invalid email
                </p>
              )}
            </div>

            <div className="relative mt-[10px]">
              <input
                {...register('password', { required: true, minLength: 6 })}
                type={!passwordIsShowed.password ? 'password' : 'text'}
                className="p-[12px] rounded-3xl text-2xl font-medium w-full border-[1px] border-solid border-login-text"
                placeholder="Password"
                autoComplete="off"
              />
              <img
                src={
                  passwordIsShowed.password
                    ? '/icon/closed-eye.svg'
                    : '/icon/eye.svg'
                }
                alt=""
                className="icon absolute w-[24px] h-[24px] right-[10px] top-[25%]"
                onClick={() => {
                  setPasswordIsShowed((prevState) => {
                    return {
                      password: !prevState.password,
                      confirmPassword: prevState.confirmPassword,
                    };
                  });
                }}
              />
              {errors.password && (
                <p className="absolute bottom-[-25px] text-2xl font-medium text-rose-900">
                  Password needs to be 6 characters
                </p>
              )}
            </div>

            <div className="relative mt-[10px]">
              <input
                {...register('confirmPassword', {
                  required: true,
                  validate: (value, formValues) =>
                    value === formValues.password,
                })}
                type={!passwordIsShowed.confirmPassword ? 'password' : 'text'}
                className="p-[12px] rounded-3xl text-2xl font-medium w-full border-[1px] border-solid border-login-text"
                placeholder="Confirm password"
                autoComplete="off"
              />
              <img
                src={
                  passwordIsShowed.confirmPassword
                    ? '/icon/closed-eye.svg'
                    : '/icon/eye.svg'
                }
                alt=""
                className="icon absolute w-[24px] h-[24px] right-[10px] top-[25%]"
                onClick={() => {
                  setPasswordIsShowed((prevState) => {
                    return {
                      password: prevState.password,
                      confirmPassword: !prevState.confirmPassword,
                    };
                  });
                }}
              />
              {errors.confirmPassword && (
                <p className="absolute bottom-[-25px] text-2xl font-medium text-rose-900">
                  Confirm password doesn't match
                </p>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="rounded-[10px] bg-login-btn text-text py-[12px] text-3xl font-medium"
          >
            Sign Up
          </button>
          <p className="font-normal text-2xl text-login-text text-center mt-[70px]">
            You have an account yet?{' '}
            <Link to={ROUTES.LOGIN} className="text-[#0071DC] font-medium ">
              Log In
            </Link>
          </p>
        </form>
      </div>
    </main>
  );
};

export default SignUpPage;
