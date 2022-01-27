import React from 'react'

const CreateInspect = () => {
    return (
        <div className=" m-5">

            <div className="form-group">
                <div className="row bg-white p-3 rounded2x">
                    <div className="col-lg-4 p-2">
                        <label >เลือกอำเภอ</label>
                        <input type="text" className="form-control rounded2x bg-light" />
                    </div>
                    <div className="col-lg-4 p-2">
                        <label >เลือกสายทาง</label>
                        <input type="text" className="form-control rounded2x bg-light" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CreateInspect
