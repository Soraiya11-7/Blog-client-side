import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { AuthProviderContext } from '../Provider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const instance = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true
  });

const useAxiosSecure = () => {

   const {signOutUser} = useContext(AuthProviderContext);
   const navigate = useNavigate();

    useEffect(() => {
        instance.interceptors.response.use(response =>{
            return response;
        }, error => {
            if(error.status === 401 || error.status === 403){
                // console.log('need to logout the user');
                signOutUser()
                .then(() => {
                    // console.log('logout user');
                    navigate('/auth/login');
                })
                .catch(error => {
                    // console.log(error)
                }
                )
            }
            return Promise.reject(error);
        })
    },[signOutUser])
    return instance;
};

export default useAxiosSecure;