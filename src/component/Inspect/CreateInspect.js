import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { obj_rpr_host } from '../../config/config'
///icon css
import { HiPlusSm, HiMinusSm, } from 'react-icons/hi'
import { MdClose, MdOutlinePhotoCameraBack, MdOutlineLinkedCamera } from 'react-icons/md'
import { Button, Badge } from 'react-bootstrap'
import ReactLoading from 'react-loading';
import './createInspect.css'
//react hook form
import { useForm } from "react-hook-form";
//camera
import CameraPreview from './CameraPreview'
//sweet alert
import Swal from 'sweetalert2'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'



const CreateInspect = () => {
    const [loading, setLoading] = useState(false)
    const history = useHistory()
    const [districtList, setDistrictList] = useState([])
    const [roadList, setRoadList] = useState([])
    const [districtId, setDistrictId] = useState("")
    const [roadId, setRoadId] = useState("")
    const [userList, setUserList] = useState([])
    ///---errors
    const [topicError, setTopicError] = useState(false)
    const [coNameError, setConameError] = useState(false)


    ///react hook form
    const { handleSubmit, register, formState: { errors } } = useForm();

    ///---getDistrict
    useEffect(() => {
        getDistrict()
        getUser()
    }, [])
    const getDistrict = async () => {
        const res = await axios.get(obj_rpr_host + '/district')
        setDistrictList(res.data.data)

    }
    const getUser = async () => {
        const res = await axios.get(obj_rpr_host + '/users')
        setUserList(res.data.data)
    }
    ///---getRoad
    const getRoad = async (id) => {
        setDistrictId(id)
        const res = await axios.get(obj_rpr_host + '/road/' + id)
        setRoadList(res.data.data)
    }
    const onRoadChnge = (id) => {
        setRoadId(id)
    }
    ///---Report List 
    const [reportList, setReportList] = useState([])
    const [reportTopic, setReportTopic] = useState("")
    //Add 
    const addReport = () => {
        if (!reportTopic) {
            window.alert("กรุณากรอกรายละเอียกก่อนกดเพิ่ม")
        } else {
            let list = [{
                topicDetail: reportTopic ? reportTopic : "-"
            }]
            setReportTopic("")
            setReportList([...reportList, ...list])
        }
    }
    //Delete
    const delReport = (index) => {
        let list = [...reportList]
        list.splice(index, 1)
        setReportList(list)
    }
    //Edit 
    const editReportItems = (index, { target: { value } }, type) => {
        let list = [...reportList]
        const currData = list[index]
        const newData = {
            topicDetail: type == "reportDetail" ? value : currData.target_name,
        }
        list.splice(index, 1, newData)
        setReportList(list);

    }

    ///---Search Co Name
    const [searchName, setSearchName] = useState("")
    const [nameList, setNameList] = useState([]) //ชื่อที่ get มา 
    const [coNameList, setCoNameList] = useState([])
    const [nameToolTips, setNameToolTips] = useState(false)
    //search form database
    const onSearchName = (txt) => {
        setSearchName(txt)
        const dataName = txt ? userList.filter((val) => val.firstName.includes(txt)) : []
        if (dataName.length != 0) {
            setNameToolTips(true)
            setNameList(dataName)
        } else {
            setNameToolTips(false)
            setNameList([])
        }
    }
    //Add from tooltip to List
    const onAddNameToList = (val) => {
        setCoNameList([...coNameList, val])
        setNameList([])
        setSearchName("")
        setNameToolTips(false)
    }
    //Del form coNameList 
    const onDelCoNameList = (index) => {
        let list = [...coNameList]
        list.splice(index, 1)
        setCoNameList(list)

    }

    ///---Submit
    const onSubmit = async (data) => {

        if (reportList.length != 0) {
            setTopicError(false)
        } else {
            setTopicError(true)
        }
        if (coNameList.length == 0) {
            setConameError(true)
        }
  
    
        const finalData = {
            roadId: roadId,
            districtId: districtId,
            detailImg: imgDataUri,
            topic: reportList,
            reporter: coNameList,
            creater: "3300100621661",
        }
        const url = obj_rpr_host + '/detail'
        if (!topicError && !coNameError) {
            const res = await axios.post(url, finalData)
            if (res.status == 200) {
                Swal.fire({
                    icon: 'success',
                    title: 'สำเร็จ 😊',
                    text: 'เพิ่มข้อมูลรายงานเรียบร้อย 📓',
                }).then(() => {
                  history.go(0)
                })
          
        } else {
            Swal.fire({
                icon: 'Error',
                title: 'ไม่สำเร็จ 😞 ',  
                text: 'เพิ่มข้อมูลไม่สำเร็จ กรุณาติดต่อผู้ดูแลระบบ ', 
            })
        }
    }


};

///---showCamera
const [turnOnCam, setTurnOnCam] = useState(false)
const [imgDataUri, setImgDataUri] = useState("")
const switchCamera = () => {
    setTurnOnCam(!turnOnCam)
}



return (
    <div className="col-lg-6 col-md-8 col-sm-10 col-10 mx-auto m-5">
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
                            <option value={""}>กรุณาเลือก</option>
                            {
                                districtList.length != 0 ?
                                    districtList.map((val, key) => {
                                        return <option key={key} value={val.id}>{val.districtName}</option>
                                    }
                                    )
                                    : <option >ไม่สามารถเชื่อมต่อServerได้</option>
                            }
                        </select>
                        {errors.district && <small className="text-danger "> * ต้องเลือก</small>}
                    </div>
                    <div className="col-lg-12 p-2">
                        <label>สายทาง <span className='text-danger'>*</span></label>
                        <select className="form-control rounded2x bg-light mt-1"
                            onChange={(event) => onRoadChnge(event.target.value)}
                        // {...register("road", { required: true })}
                        >
                            <option value={""}>กรุณาเลือกอำเภอก่อน </option>
                            {
                                roadList.length != 0 ?
                                    roadList.map((val, key) => {
                                        return <option key={key} value={val.id}>{val.roadRoute} {val.roadName} </option>
                                    }
                                    )
                                    : <option >ไม่สามารถเชื่อมต่อServerได้</option>
                            }
                        </select>
                        {errors.road && <small className="text-danger "> * ต้องเลือก</small>}
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
                                                <input type="text" onChange={(e) => editReportItems(index, e, "reportDetail")} className="form-control bg-light rounded2x mt-2" value={val.topicDetail} />
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
                                <input type="text" value={reportTopic} onChange={(event) => setReportTopic(event.target.value)} className="form-control bg-light rounded2x mt-2" />
                            </div>
                            <div className="col-2 d-grid ">
                                <Button onClick={() => addReport()} variant=" btn-primary-light mt-2" className="rounded2x" size="sm">
                                    เพิ่ม <span className="font-weight-bold"><HiPlusSm /></span>
                                </Button>
                            </div>
                            {
                                topicError && reportList.length == 0 ? <small className="text-danger "> * กรุณากรอกรายละเอียดปัญหาที่พบ</small> : <></>
                            }
                        </div>
                    </div>
                    <div className="bg-light rounded2x pt-3 pb-3 mt-2">
                        <label>คณะผู้ลงสำรวจ<span className='text-danger'>*</span></label>
                        <div className="row">
                            <div className="col-12 mt-1">
                                <input
                                    className="form-control rounded2x bg-white mt-1"
                                    type="text"
                                    value={searchName}
                                    onChange={(e) => onSearchName(e.target.value)}
                                    placeholder="พิมพ์เพื่อค้นหารายชื่อ . . ."
                                />
                            </div>
                        </div>
                        {
                            nameToolTips ?
                                <div className="dataResult">
                                    {
                                        nameList.length != 0 ? nameList.map((val, index) => {
                                            return (
                                                <div className="dataItem mx-auto" href="#" onClick={() => onAddNameToList(val)} >
                                                    <p>{index + 1}.{val.prefix}{val.firstName}  {val.lastName}</p>
                                                </div>
                                            )
                                        }) : <> </>
                                    }
                                </div>
                                : <></>}
                        {
                            coNameList.length != 0 ? <div className="mt-2 p-3 bg-white rounded2x">
                                <label>รายชื่อผู้รายงาน</label>

                                {
                                    coNameList.length != 0 ? coNameList.map((val, index) => {
                                        return <div className="row mt-3 m-2">
                                            <div className="col-10  border-bottom">
                                                <p className="p-0 m-0">{index + 1}.{val.prefix} {val.firstName}   {val.lastName}</p>
                                            </div>
                                            <div className="col-2 text-center  closeButton" onClick={() => onDelCoNameList(index)}>
                                                <MdClose />
                                            </div>
                                        </div>
                                    }) : <></>
                                }
                            </div> : <></>
                        }
                    </div>
                    {
                        coNameError && coNameList.length == 0 ? <small className="text-danger "> * กรุณาใส่รายชื่อผู้รายงาน</small> : <></>
                    }
                    <div className="col-12 text-center mx-auto  mt-3  rounded2x">
                        {
                            imgDataUri ?
                                <div className="rounded2x">
                                    <img src={imgDataUri} width={"100%"} height={"auto"} />
                                    <div className="col-12  mx-auto takePhoto  " onClick={() => switchCamera()}>
                                        <div className=" m-0 p-0" style={{ fontSize: "50px" }}>
                                            <MdOutlineLinkedCamera />
                                        </div>
                                        <div className="m-0 p-0 pb-2">
                                            <label>คลิกเพื่อถ่ายรูปใหม่</label>
                                        </div>
                                    </div>
                                </div>
                                :
                                <div className="col-12 rounded2x mx-auto takePhoto  " onClick={() => switchCamera()}>
                                    <div className=" m-0 p-0" style={{ fontSize: "50px" }}>
                                        <MdOutlinePhotoCameraBack />
                                    </div>
                                    <div className="m-0 p-0 pb-2">
                                        <label>คลิกเพื่อถ่ายรูป</label>
                                    </div>

                                </div>
                        }
                    </div>
                    {
                        turnOnCam ? <CameraPreview setTurnOnCam={setTurnOnCam} setImgDataUri={setImgDataUri} /> : <></>
                    }
                    <div className="col-12 text-center mt-3 ">
                        <Button type="submit" className="rounded2x btn-pink" size="md" style={{ width: "200px" }}>
                            ส่งข้อมูล
                        </Button>
                    </div>
                </div>
            </div>
        </form>
    </div>
)
}

export default CreateInspect
