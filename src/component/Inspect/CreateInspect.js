import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { obj_rpr_host } from '../../config/config'
///icon css
import { HiPlusSm, HiMinusSm } from 'react-icons/hi'
import { Button, Badge } from 'react-bootstrap'
//react hook form
import { useForm } from "react-hook-form";
//moment.js
import moment from 'moment'


const CreateInspect = () => {
    const [districtList, setDistrictList] = useState([])
    const [roadList, setRoadList] = useState([])

    ///react hook form
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    ///---getDistrict
    useEffect(() => {
        getDistrict()
    }, [])
    const getDistrict = async () => {
        const res = await axios.get(obj_rpr_host + '/district')
        setDistrictList(res.data)
    }
    ///---getRoad
    const getRoad = async (id) => {
        console.log(id, "===id====")
        const res = await axios.get(obj_rpr_host + '/roads/' + id)
        setRoadList(res.data)
    }
    ///---Report List 
    const [reportList, setReportList] = useState([{ detail: "mu" }, { detail: "mhee" }])
    //Add 
    const addReport = () => {
        let list = [{
            detail: watch("detail")
        }]
        setReportList([...reportList, ...list])
    }
    //Delete
    const delReport = (index) => {
        let list = [...reportList]
        list.splice(index, 1)
        setReportList(list)
    }
    console.log(reportList, "reportList ====")

    ///---Submit
    const onSubmit = data => {
        console.log(data)
    };


    return (
        <div className="col-lg-7 col-md-8 col-sm-10 col-10 mx-auto m-5">

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <div className="row bg-white p-4  rounded2x">
                        <h5 className=" date-badge  ">วันที่  {" "}
                            <Badge bg="light " className="rounded2x text-dark p-2">
                                <span className="fs-16">
                                    {new Date().toLocaleDateString('th-TH', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric',
                                    })}
                                </span>
                            </Badge>
                        </h5>
                        <div className="col-lg-12  p-2">
                            <label>อำเภอ  <span className='text-danger'>*</span></label>
                            <select className="form-control rounded2x bg-light mt-1"
                                onChange={(event) => getRoad(event.target.value)}
                            >
                                <option value={"0"}>กรุณาเลือก</option>
                                {
                                    districtList.length != 0 ?
                                        districtList.map((val, key) => {
                                            return <option key={key} value={val.district_Id}>{val.district_Id}.{val.district_Name}</option>
                                        }
                                        )
                                        : <option >ไม่สามารถเชื่อมต่อServerได้</option>
                                }
                            </select>
                        </div>
                        <div className="col-lg-12 p-2">
                            <label>สายทาง <span className='text-danger'>*</span></label>
                            <select className="form-control rounded2x bg-light mt-1"
                                onChange={(event) => getRoad(event.target.value)}
                            >
                                <option value={"0"}>กรุณาเลือกอำเภอก่อน </option>
                                {
                                    roadList.length != 0 ?
                                        roadList.map((val, key) => {
                                            return <option key={key} value={val.road_id}>{val.road_Name}</option>
                                        }
                                        )
                                        : <option >ไม่สามารถเชื่อมต่อServerได้</option>
                                }
                            </select>
                        </div>
                        <div className="col-lg-12 p-2">
                            <div className="row">
                                <label>รายละเอียดปัญหาที่พบ <span className='text-danger'>*</span></label>
                                {
                                    reportList.length != 0 &&
                                    reportList.map((val, index) => {
                                        return (
                                            <div className="row m-0 p-0" key="index">
                                                <div className="col-10 ">
                                                    <input type="text" className="form-control bg-light rounded2x mt-2" value={val.detail} />
                                                </div>
                                                <div className="col-2 d-grid ">

                                                    <Button onClick={() => delReport(index)} variant=" btn-danger-light mt-2" className="rounded2x" size="sm">
                                                        ลบ <span className="font-weight-bold"><HiMinusSm /></span>
                                                    </Button>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                                <div className="col-10">
                                    <input type="text" className="form-control bg-light rounded2x mt-2" />
                                </div>
                                <div className="col-2 d-grid ">
                                    <Button onClick={() => addReport()} variant=" btn-primary-light mt-2" className="rounded2x" size="sm">
                                        เพิ่ม <span className="font-weight-bold"><HiPlusSm /></span>
                                    </Button>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </form>
        </div>
    )
}

export default CreateInspect
