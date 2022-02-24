import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Card, Col } from 'react-bootstrap'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { obj_rpr_host } from '../../config/config'
const Detail = () => {

    const [detailData, setDetailData] = useState([])
    const [topicList, setTopicList] = useState([])
    const [inspectorList, setInspectorList] = useState([])
    const { id } = useParams()
    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const url = `${obj_rpr_host}/detail/${id}`
        const resp = await axios.get(url)
        setDetailData(resp.data.data)
        setTopicList(resp.data.data.topic)
        setInspectorList(resp.data.data.inspector)
    }
    return (
        <div className='m-3'>
            <Col className="col-xl-5 col-xxl-5 col-lg-5 mx-auto">
                <Card>
                    <Card.Header className="d-block p-4">
                        <Card.Title className="mb-0 mb-1">ข้อมูลการตรวจสอบถนน</Card.Title>
                        <Card.Text className="mb-0 subtitle">รายละเอียดข้อมูลการตรวจสอบถนน</Card.Text>
                    </Card.Header>
                    <Card.Body className="p-4 pt-3">
                        {
                            detailData.length != 0 ?
                                <>
                                    <ul className="list-group list-group-flush ">
                                        <tr className="  list-group-item d-flex justify-content-between p-1">
                                            <th className="text-nowrap text-littleBlack ">อำเภอ</th>
                                            <th className="text-nowrap text-littleBlack">รหัสสายทาง</th>
                                        </tr>
                                        <tr className="  list-group-item d-flex justify-content-between p-1">
                                            <td className="text-nowrap text-pink "><strong>{detailData.District.districtName}</strong></td>
                                            <td className="text-nowrap text-pink"><strong>{detailData.Road.roadRoute}</strong></td>
                                        </tr>
                                    </ul>
                                    <li className="  list-group-item d-flex justify-content-between p-1" >
                                        <span className="text-nowrap   ">ชื่อสายทาง : </span>
                                        <span className="text-right text-littleBlack">{detailData.Road.roadName}</span>
                                    </li>
                                    <li className="  list-group-item d-flex justify-content-between p-1" >
                                        <span className="text-nowrap  ">ปัญหา : </span>
                                        <div className='text-right text-littleBlack'>
                                            {
                                                topicList.length != 0 && topicList.map((val, index) => {
                                                    return (
                                                        <span className="text-nowrap  ">{val.topicDetail}<br /> </span>
                                                    )
                                                })
                                            }
                                        </div>
                                    </li>
                                    <li className="  list-group-item d-flex justify-content-between p-1" >
                                        <span className="text-nowrap  ">คณะผู้ลงสำรวจ : </span>
                                        <div className='text-right text-littleBlack'>
                                            {
                                                inspectorList.length != 0 && inspectorList.map((val, index) => {
                                                    return (
                                                        <span className=" fs-16">{index + 1}.{val.User.prefix}{val.User.firstName}&emsp;{val.User.lastName}<br /> </span>
                                                    )
                                                })
                                            }
                                        </div>
                                    </li>
                                    <div className='text-center '>
                                    <li className="  list-group-item d-flex justify-content-between p-1" >
                                        <span className="text-nowrap  ">ภาพรายงาน : </span>
                                        <img className='rounded2x' src={`data:image/jpeg;base64,${detailData.detailImg}`} width={250} height={"100%"} />
                                        </li>
                                    </div>

                                </> :
                                <div className='text-center'>
                                    <p >*ไม่สามารถดึงข้อมูลจากระบบได้</p>
                                </div>
                        }

                    </Card.Body>
                </Card>
            </Col>
        </div>
    )
}

export default Detail