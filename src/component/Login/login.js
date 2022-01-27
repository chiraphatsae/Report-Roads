import React, { useEffect, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { HiMail, HiLockClosed } from 'react-icons/hi'
import { useForm } from "react-hook-form";
import './login.css'

const Login = () => {
    const [PassTogle, setPassTogle] = useState(false)
    const [loginStatus, setLoginStatue] = useState(false)
    const [rememberStatus, setRememberStatus] = useState(false)
    const logedIn = JSON.parse(localStorage.getItem('persit/Root')) ? JSON.parse(localStorage.getItem('persit/Root')) : ""


    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('userData_reportRoadApp'))
        if (userData) {
            console.log("true check local")
            setValue('email', userData.username,)
            setValue('password', userData.password,)
        } else {
            console.log("false check local")
        }
    }, [])
    const showPass = () => {
        setPassTogle(!PassTogle)
    }
    const rememberToggle = () => {
        setRememberStatus(!rememberStatus)

    }

    const { register, handleSubmit, setValue } = useForm();

    const onSubmit = data => {
        const username = "chirapat.sae@gmail.com"
        const password = "admin1234"
        if (data.email == username && data.password == password) {
            ///จำรหัสผ่าน
            if (rememberStatus) {
                localStorage.setItem('userData_reportRoadApp', JSON.stringify({ username: data.email, password: data.password}))
                localStorage.setItem('persit/Root', JSON.stringify({fname:"chiraphat", lname:"Worrawiwatmethakul", accessToken : "123456789" , expireToken : "0" }))              
                document.location.href = "/"
            } 
            ///ไม่จำรหัสผ่าน
            else {           
                localStorage.setItem('persit/Root', JSON.stringify({fname:"chiraphat", lname:"Worrawiwatmethakul", accessToken : "123456789" , expireToken : "0" }))              
                document.location.href = "/"
             
            }
        } else {
            setLoginStatue(true)
        }
    };

    return (
        <div className='container-fluid '>
            <div className='row '>
                <div className='col-lg-12 col-md-12 col-sm-12'>
                    <div className=' mt-5 '>
                        <div className="form-signin text-center">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <img className="mb-4" src="/road1.1.png" alt="" width="92" height="100%" />
                                <h3 className="h3 mb-3 mt-3 fw-normal">กรุณาล็อกอินเข้าสู่ระบบ</h3>
                                <div className="form-floating">
                                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"  {...register("email")} />
                                    <label htmlFor="floatingInput"><HiMail style={{ width: "20px", height: "20px" }} /> Email address</label>
                                </div>
                                <div className="input-group">
                                    <div className="form-floating " style={{ width: "86%", height: "100%" }}>
                                        <input className="form-control" type={PassTogle ? `text` : `password`} id="password" name="password" placeholder="Password" {...register("password")} />
                                        <label htmlFor="floatingPassword"><HiLockClosed style={{ width: "20px", height: "20px" }} /> Password</label>
                                    </div>
                                    <span className="input-group-text" style={{ height: "58px" }} onClick={() => showPass()}>
                                        {
                                            PassTogle ? <FaEye /> : <FaEyeSlash />
                                        }
                                    </span>
                                </div>
                                {
                                    loginStatus && <small className='text-danger ' style={{ aligh: "left" }}> *email หรือ password ไม่ถูกต้อง</small>
                                }
                                <div className="checkbox mb-3 mt-3">
                                    <label>
                                        <input checked={rememberStatus} type="checkbox" value="remember-me" onClick={() => rememberToggle()} /> Remember me
                                    </label>
                                </div>
                                <button className="w-100 btn btn-lg btn-secondary bg-pink" type="submit">Log in</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Login;
