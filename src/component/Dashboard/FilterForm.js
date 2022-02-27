import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import { FaFilter } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'
import { MuiPickersUtilsProvider, } from "@material-ui/pickers";
import { DatePicker } from '@material-ui/pickers';
import { useStyles1, useStyles } from '../../DatePicker/style'
import { obj_rpr_host } from '../../config/config'
import axios from 'axios'
import OverwriteMomentBE from '../../OverwriteMomentBE'
import moment from 'moment';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
const FilterForm = ({ detailListRaw, setDetailListRaw, setSelectedPage, setFilterToggle }) => {
    const history = useHistory()
    const classes = useStyles1()
    const optionsFailed = [
        { value: 'ไม่พบข้อมูล', label: 'ไม่พบข้อมูล' },
    ]
    const [districtList, setDistrictList] = useState([])
    const [roadList, setRoadList] = useState([])
    const [roadId, setRoadId] = useState([])
    const [districtId, setDistrictId] = useState([])
    const [startDate, setStartDate] = useState((moment()))
    const [endDate, setEndDate] = useState(moment())

    useEffect(() => {
        getDistrict()
    }, [])
    const getDistrict = async () => {
        const res = await axios.get(obj_rpr_host + '/district')
        const raw = res.data.data
        if (raw.length != - 0) {
            const filterData = raw.map((val) => {
                return (
                    {
                        value: val.id,
                        label: val.districtName,
                    }
                )
            })
            setDistrictList(filterData)
        }
    }

    const getRoads = async (val) => {
        setDistrictId(val)
        const res = await axios.get(obj_rpr_host + '/road/' + val.value)
        const raw = res.data.data
        if (raw.length != - 0) {
            const filterData = raw.map((val) => {
                return (
                    {
                        value: val.id,
                        label: val.roadRoute + val.roadName,
                    }
                )
            })
            const allData = ({
                value: "",
                label: "เลือกทั้งหมด"
            })

            setRoadList([allData, ...filterData,])
        }
    }

    const filterData = async () => {
        console.log(startDate, "startDate")
        console.log(endDate, "endDate")
        console.log(districtId, "districtId")
        console.log(roadId, "roadId")
        const url = `${obj_rpr_host}/detail/dashboard/filter`
        const res = await axios.get(url, { params: { "startDate": moment(startDate).format("YYYY-MM-DD"), "endDate": moment(endDate).format("YYYY-MM-DD"), "district": districtId ? districtId.value : "", "road": roadId ? roadId.value : "" } })
        console.log(res.data.data)
        setDetailListRaw(res.data.data)
        setSelectedPage(0)
        setFilterToggle(true)

    }
    const onClearfilterData = () => {
        history.go(0)
    }



    return (
        <MuiPickersUtilsProvider utils={OverwriteMomentBE} locale="th">
            <div className="col-lg-12">
                <div className="row pl-3 mb-2 mt-2 pr-3">

                    <div className="col-lg-6 col-md-6 col-sm-12 mt-2">
                        <label className=" font-w500" >เลือกวันเริ่มต้น</label>
                        <div className='mt-1'>
                            < DatePicker
                                format="DD/MM/YYYY"
                                value={startDate}
                                onChange={setStartDate}
                                autoOk
                                variant="inline"
                                inputVariant="outlined"
                                fullWidth
                                className={classes.root}
                            />
                        </div>

                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 mt-2">
                        <label className=" font-w500" >เลือกวันสิ้นสุด</label>
                        <div className='mt-1'>
                            < DatePicker
                                format="DD/MM/YYYY"
                                value={endDate}
                                onChange={setEndDate}
                                fullWidth
                                autoOk
                                variant="inline"
                                inputVariant="outlined"
                                className={classes.root}
                                minDate={startDate}
                            />
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-12 mt-2">
                        <div className="form-group">
                            <label>อำเภอ</label>
                            <Select defaultValue={{ label: "เลือก" }} options={districtList.length != 0 ? districtList : optionsFailed} onChange={(e) => getRoads(e)} />
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 mt-2">
                        <div className="form-group">
                            <label>สายทาง</label>
                            <Select defaultValue={{ label: "เลือก" }} options={roadList.length != 0 ? roadList : optionsFailed} onChange={(e) => setRoadId(e)} />
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 mt-2 text-center">
                        <label></label>
                        <div className="d-flex  ">
                            <button className="btn btn-secondary btn-lg m-0 p-0 pl-3 pr-3 pt-1 pb-1 ml-1 " type="button" onClick={() => filterData()}> ค้นหา <FaFilter /></button>

                            <button className="btn btn-danger btn-lg  m-0 p-0 pl-3 pr-3 pt-1 pb-1 ml-1" type="buttonClear" onClick={() => onClearfilterData()}>ล้าง <AiOutlineClose /></button>
                        </div>
                    </div>
                </div>
            </div>
        </MuiPickersUtilsProvider>
    )
}

export default FilterForm