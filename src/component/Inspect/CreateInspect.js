import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { obj_rpr_host } from '../../config/config'

const CreateInspect = () => {
    const [districtList, setDistrictList] = useState([])
    const [roadList , setRoadList] = useState([])
    ///getDistrict
    useEffect(() => {
        getDistrict()
    }, [])
    const getDistrict = async () => {
        const res = await axios.get(obj_rpr_host + '/district')
        setDistrictList(res.data)
    }

    const getRoad = async(id) => {
        console.log(id , "===id====")
        const res = await axios.get(obj_rpr_host + '/roads/'+ id)
        setRoadList(res.data)
    }
    console.log(roadList)

    return (
        <div className="col-lg-6 mx-auto m-5">
            <div className="form-group">
                <div className="row bg-white p-3 rounded2x">                   
                    <div className="col-lg-12 p-2">
                        <label>อำเภอ  <span className='text-danger'>*</span></label>
                        <select className="form-control rounded2x bg-light mt-1" 
                        onChange={(event) => getRoad(event.target.value)}
                        >
                            <option  value={"0"}>กรุณาเลือก</option>
                            {
                                districtList.length != 0 ? 
                                  districtList.map((val, key) => {
                                      return  <option  key={key}  value={val.district_Id}>{val.district_Id}.{val.district_Name}</option>
                                  }
                                )
                               :   <option >ไม่สามารถเชื่อมต่อServerได้</option>
                            }
                        </select>
                    </div>
                    <div className="col-lg-12 p-2">
                        <label>สายทาง <span className='text-danger'>*</span></label>
                        <select className="form-control rounded2x bg-light mt-1" 
                        onChange={(event) => getRoad(event.target.value)}
                        >
                            <option  value={"0"}>กรุณาเลือกอำเภอก่อน </option>
                            {
                                roadList.length != 0 ? 
                                roadList.map((val, key) => {
                                      return  <option  key={key}  value={val.road_id}>{val. road_Name}</option>
                                  }
                                )
                               :   <option >ไม่สามารถเชื่อมต่อServerได้</option>
                            }
                        </select>
                    </div>
                    <div>
                        <label></label>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default CreateInspect
