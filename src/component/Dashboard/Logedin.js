import React, { useState, useEffect } from 'react'
import './logedin.css'
import Summary from './summary'
import { FaSearch, FaFilter, FaSortAmountDownAlt, FaSortAmountUpAlt } from 'react-icons/fa'
import { Table } from 'react-bootstrap'
import { obj_rpr_host } from '../../config/config'
import axios from 'axios'
import { Link } from 'react-router-dom'
const Logedin = () => {
    const [sortType, setSortType] = useState(false)
    const [detailList, setDetailList] = useState([])
    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const res = await axios.get(obj_rpr_host + '/detail')
        setDetailList(res.data.data)
    }
    console.log(detailList, "detailList")
    const onSorted = () => {
        setSortType(!sortType)
        // if (sortType == true) {
        //     setProjectAllData(projectAllData.sort((a, b) => new Date(a.create_date).setHours(0, 0, 0, 0) - new Date(b.create_date).setHours(0, 0, 0, 0)))
        // } else {
        //     setProjectAllData(projectAllData.sort((a, b) => new Date(b.create_date).setHours(0, 0, 0, 0) - new Date(a.create_date).setHours(0, 0, 0, 0)))
        // }

    }
    return (
        <div className="container-fluid mt-3">
            <Summary />
            <div className="bg-white pt-2 pr-0 pb-0 rounded mt-2 ">
                <Table responsive className="text-littleBlack m-0 p-0 " >
                    <div className="dataTables_wrapper className='m-0 p-0'">
                        <table id="example" className="table border-no display dataTablesCard  project-bx m-0 p-0">
                            <thead className='m-0 p-0'>
                                <tr className='m-0 p-0'>
                                    <th className='text-pink fs-18'>#</th>
                                    <th className="text-nowrap text-littleBlack">วันที่ตรวจสอบ</th>
                                    <th className="text-nowrap text-littleBlack">อำเภอ  </th>
                                    <th className="text-nowrap text-littleBlack">รหัสสายทาง</th>
                                    <th className="text-nowrap text-littleBlack">ชื่อสายทาง</th>
                                    <th className="text-nowrap text-littleBlack">คณะผู้ลงสำรวจ</th>
                                    <th className="text-nowrap text-littleBlack">ปัญหา</th>
                                    {/* <th className="text-nowrap text-littleBlack fs-20" onClick={() => onSorted()}>
                                        {
                                            sortType ? <span className="text-dark"><FaSortAmountDownAlt /></span > : <span className="text-dark"><FaSortAmountUpAlt /></span>
                                        }
                                    </th> */}
                                </tr>
                            </thead>
                            <tbody  >
                                {
                                    detailList.length != 0 ? detailList.map((val, index) => {
                                        return (
                                            <Link to="/">
                                                <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td><h6 className="text-pink">{new Date(val.created_at).toLocaleDateString()}</h6></td>
                                                    <td>{val.District.districtName}</td>
                                                    <td>{val.Road.roadRoute}</td>
                                                    <td>{val.Road.roadName}</td>

                                                    <td>{val.inspector[0].User.prefix}{val.inspector[0].User.firstName} {val.inspector[0].User.lastName}</td>
                                                    <td>{val.topic[0].topicDetail}</td>
                                                    {/* <td className='fs-14'>
                                                    {
                                                        val.inspector.map((valInspect, indexInspec) => {
                                                            return (
                                                                <tr>
                                                                    <td>{valInspect.User.prefix}{valInspect.User.firstName}  {valInspect.User.lastName}</td>
                                                                </tr>

                                                            )
                                                        })
                                                    }
                                                </td> */}
                                                    {/* <td>
                                                    {
                                                        val.topic.map((valTopic, indexTopic)=>{
                                                            return(
                                                                <tr>
                                                                    <td>{valTopic.topicDetail}</td>
                                                                </tr>
                                                            )
                                                        })
                                                    }
                                                </td> */}
                                                </tr>
                                            </Link>
                                        )
                                    }) :
                                        <tr className='text-center'>
                                            <td colSpan={7}>
                                                
                                                ไม่มีข้อมูล หรือ ไม่สามารถดึงข้อมูลจากเซิฟเวอร์ได้
                                            </td>
                                        </tr>
                                }


                            </tbody>

                        </table>
                    </div>
                </Table>
            </div>

        </div >

    )
}

export default Logedin