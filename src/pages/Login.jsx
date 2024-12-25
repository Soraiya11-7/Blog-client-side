import React, { useContext, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthProviderContext } from '../Provider/AuthProvider';

import { FcGoogle } from 'react-icons/fc';
import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


const Login = () => {
    const emailRef = useRef();
    const navigate = useNavigate();
    const { signInWithGoogle, loginUser, setMail } = useContext(AuthProviderContext);
    const [error, setError] = useState("");
    const location = useLocation();
    const from = location.state;

    //Login with email, password
    const handleLogin = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        setError("");
        // console.log(email,password);
        loginUser(email, password)
            .then((res) => {
                // console.log(result.user);
                const lastSignInTime = res?.user?.metadata?.lastSignInTime;

                const loginInfo = {email, lastSignInTime};

                fetch(`http://localhost:5000/users`, {
                    method:"PATCH",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(loginInfo)
                   })
                   .then(res => res.json())
                   .then(data => {
                    // console.log(data);
                   
                        Swal.fire({
                            title: 'Success!',
                            text: 'Login Successfully',
                            icon: 'success',
                            confirmButtonText: 'Cool'
                          })
                
                   })

                
                e.target.reset();
                navigate(location?.state ? location.state : '/');
            })
            .catch((err) => {
                const errorMessage = err.message;
                const errorCode = errorMessage.match(/\(([^)]+)\)/)?.[1];
                // setError(errorCode);
                toast.error(errorCode || "An unexpected error occurred", {
                    position: "top-center",
                    autoClose: 2000,
                  });
                // setError(err.message);
            });

    }

    //Login with Google
    const handleLoginWithGoogle = () => {
        signInWithGoogle()
            .then(() => {

                Swal.fire({
                    title: 'Success!',
                    text: 'Login Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
        
                navigate(location?.state ? location.state : '/');
            })
            .catch((err) => {
                // setError({ ...error, login: err.code })
                const errorMessage = err.message;
                const errorCode = errorMessage.match(/\(([^)]+)\)/)?.[1];
                // setError(errorCode );
                toast.error(errorCode || "An unexpected error occurred", {
                    position: "top-center",
                    autoClose: 2000,
                  });

            });
    }

   
    return (

        <div className="flex justify-center py-8 items-center ">
            <div className="card bg-base-100  w-[90%] sm:w-[60%] md:w-[50%] lg:w-[35%] mx-auto shadow-2xl p-1 sm:p-2">
                <h1 className="text-xl sm:text-3xl font-bold text-center mt-3">Login now!</h1>
                <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input ref={emailRef} type="email" placeholder="email" name='email' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                        {/* {
                            error && <label className="label text-red-600 text-xs">
                                {error}
                            </label>
                        } */}

                    </div>
                    <div className="form-control mt-6">
                        <button className="p-2 rounded-xl  bg-purple-500 text-white text-base sm:text-lg font-bold">Login</button>
                    </div>
                </form>
                <div className="flex items-center mb-4 w-[80%] mx-auto">
                    <div className="flex-grow border-t-2 border-black"></div>
                    <span className="mx-4 text-gray-500 font-medium text-sm sm:text-lg">OR</span>
                    <div className="flex-grow border-t-2 border-black"></div>
                </div>
                <div className='flex justify-center items-center mb-3'>
                    <button onClick={handleLoginWithGoogle} className='p-1 sm:p-2 flex items-center gap-1 rounded-xl border text-base sm:text-lg hover:border-purple-500'><FcGoogle className='text-base sm:text-lg'></FcGoogle> Login with Google</button>
                </div>
                {/* <ToastContainer /> */}
                <h2 className='text-sm sm:text-base text-center mb-3'>New to this website? <Link to='/auth/register' className='text-blue-500'>Create an account</Link></h2>
            </div>
        </div>

    );
};

export default Login;