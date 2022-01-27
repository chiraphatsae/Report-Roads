import React from 'react'
import './notLogin.css'
import {FaRoad} from'react-icons/fa'
const NotLogIn = () => {
    return (
        <div className=" text-center ">
            <div className="notLogIn  ">
                <div className="text-uppercase p-5 text-center bg-white  rounded2x">
                    <h1 className="fs-70 mt-2"><FaRoad/></h1>
                    <div className="mainText">road inspection record system</div>
                    <h5  className="secText"> ระบบบันทึกการตรวจถนนถ่ายโอน</h5>
                    <hr />
                    <div className="subText">
                        <p className="mt-4 mb-0">โดยองค์การบริหารส่วนจังหวัดนครราชสีมา </p>
                        <p className="m-0 p-0"><b className="m-0 p-0">Nakhon Ratchasima Provincial Administrative Organization</b></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotLogIn
