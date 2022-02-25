import React, { useState, useEffect } from 'react'
import './logedin.css'
import Summary from './summary'
import { Table } from 'react-bootstrap'
import { obj_rpr_host } from '../../config/config'
import axios from 'axios'
<<<<<<< HEAD
import { Link } from 'react-router-dom'
=======
import ReactPaginate from 'react-paginate';

import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
>>>>>>> 23ada00f7a26bb678f1fe661226a4b0f5b5b3e4e
const Logedin = () => {
    const [sortType, setSortType] = useState(false)
    const [detailList, setDetailList] = useState([])
    const [lengthData, setLengthData] = useState()
    const history = useHistory()
    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const res = await axios.get(obj_rpr_host + '/detail')
       
        setPageCount(Math.ceil(res.data.data.length / perPage))
        setLengthData(res.data.data.length)
        setDetailList(res.data.data.slice(offset, offset + perPage))
     
    }
    const [offset, setOffset] = useState(0);
    const [perPage] = useState(5);
    const [pageCount, setPageCount] = useState(0)
    const [selectedPage, setSelectedPage] = useState(0)
    const handlePageClick = (e) => {
        setSelectedPage(e.selected)
        const selectedPage = e.selected;
        setOffset(selectedPage * perPage)
        console.log(e)

    };
    useEffect(()=>{

    },[])
    const onDetailClick = (id) => {
        const path = `detail/${id}`
        history.push(path)
    }
  

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
<<<<<<< HEAD
=======
                                    <th className="text-nowrap text-littleBlack">วันที่ตรวจสอบ</th>
>>>>>>> 23ada00f7a26bb678f1fe661226a4b0f5b5b3e4e
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
<<<<<<< HEAD
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
=======

                                            <tr className='tr-hover' key={index} onClick={() => onDetailClick(val.id)}>
                                                <td>{index + 1}</td>
                                                <td>{val.District.districtName}</td>
                                                <td>{val.Road.roadRoute}</td>
                                                <td>{val.Road.roadName}</td>
                                                <td>{new Date(val.created_at).toLocaleDateString()}</td>
                                                <td>{val.inspector[0].User.prefix}{val.inspector[0].User.firstName} {val.inspector[0].User.lastName}</td>
                                                <td>{val.topic[0].topicDetail}</td>

                                            </tr>

>>>>>>> 23ada00f7a26bb678f1fe661226a4b0f5b5b3e4e
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
            <div className="d-flex justify-content-between align-items-center mt-1 pl-2 pr-2">
                <div className="dataTables_info">
                    ข้อมูลทั้งหมด {lengthData} ข้อมูล
                </div>
                <div>
                    <div className="d-flex justify-content-center">
                        <ReactPaginate
                            pageClassName={'page-item'}
                            previousLabel={"ย้อนกลับ"}
                            nextLabel={"ถัดไป"}
                            breakLabel={"..."}
                            breakClassName={'page-item'}
                            breakLinkClassName={'page-link'}
                            pageCount={pageCount}
                            marginPagesDisplayed={1}
                            forcePage={selectedPage}
                            pageRangeDisplayed={3}
                            onPageChange={handlePageClick}
                            containerClassName={'pagination'}
                            subContainerClassName={"pages pagination"}
                            pageLinkClassName={'page-link'}
                            previousClassName={'page-item'}
                            previousLinkClassName={'page-link'}
                            nextClassName={'page-item'}
                            nextLinkClassName={'page-link'}
                            activeClassName={'active'}
                        />
                    </div>
                </div>
            </div>
        </div >

    )
}

export default Logedin