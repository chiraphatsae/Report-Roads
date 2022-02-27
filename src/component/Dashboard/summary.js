import React from 'react'
import { FaFileInvoiceDollar, FaPenNib, FaStar, FaCheck, FaTags, FaBook, FaCalendarAlt } from 'react-icons/fa'

const Summary = () => {
  return (
    <div className="row">
    <div className="col-lg-3 col-md-4 m-0 pb-2">
            <div className="card">
                <div className="card-body ">
                    <div className="media align-items-center">
                        <div className="media-body mr-3">
                            <h2 className="num-text text-black border-radius-0">321</h2>
                        </div>
                        <div className="rounded  pl-2 pr-2 p-1" style={{backgroundColor : '#dfddf5'}}>
                        <h2 className='text-pink'  style={{color : '#6155cc'}} ><FaFileInvoiceDollar /></h2>
 
                        </div>
                    </div>
                    <span className="fs-16">โครงการทั้งหมด</span>
                </div>
            </div>
        </div>
        <div className="col-lg-3 col-md-4 m-0 pb-2">
            <div className="card">
                <div className="card-body ">
                    <div className="media align-items-center">
                        <div className="media-body mr-3">
                            <h2 className="num-text text-black border-radius-0">321</h2>
                        </div>
                        <div className="rounded  pl-2 pr-2 p-1" style={{backgroundColor : '#cceaea'}}>
                        <h2 className='text-pink'  style={{color : '#3ec8bc'}} ><FaPenNib /></h2>
                        </div>
                    </div>
                    <span className="fs-16">รายงานทั้งหมด</span>
                </div>
            </div>
        </div>
        <div className="col-lg-3 col-md-4 m-0 pb-2">
            <div className="card">
                <div className="card-body ">
                    <div className="media align-items-center">
                        <div className="media-body mr-3">
                            <h2 className="num-text text-black border-radius-0">321</h2>
                        </div>
                        <div className="rounded  pl-2 pr-2 p-1" style={{backgroundColor : '#fde4e4'}}>
                        <h2 className='text-pink'  style={{color : '#f77777'}} ><FaStar /></h2>

                        </div>
                    </div>
                    <span className="fs-16">โครงการทั้งหมด</span>
                </div>
            </div>
        </div>
        <div className="col-lg-3 col-md-4 m-0 pb-2">
            <div className="card">
                <div className="card-body ">
                    <div className="media align-items-center">
                        <div className="media-body mr-3">
                            <h2 className="num-text text-black border-radius-0">321</h2>
                        </div>
                        <div className="rounded  pl-2 pr-2 p-1" style={{backgroundColor : '#f3e1d8'}}>
                        <h2 className='text-pink'  style={{color : '#fe9c5e'}} ><FaCheck /></h2>
                       
                        </div>
                    </div>
                    <span className="fs-16">โครงการทั้งหมด</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Summary