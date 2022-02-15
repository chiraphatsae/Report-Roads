import React from 'react'
import './cameraPreview.css'
import Camera, { IMAGE_TYPES } from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import toast, { Toaster } from 'react-hot-toast';

const CameraPreview = ({ setTurnOnCam, setImgDataUri }) => {
    const handleTakePhoto = () => {

    }
    const handleTakePhotoAnimationDone = async (dataUri) => {
        //Do stuff with the photo...
        console.log('takePhoto', dataUri);
        toast.success('successfully 📸 ' , {
            position : 'top-right',
            style :{
                borderBottom : "10px solid #00b894"
            }
        })
        setTurnOnCam(false)
        setImgDataUri(dataUri)
    }
    return (
        <div className="mainCamera">
            <Camera
                isFullscreen={true}
                onTakePhoto={() => handleTakePhoto()}
                onTakePhotoAnimationDone={(dataUri) => { handleTakePhotoAnimationDone(dataUri); }}
                idealResolution={{ width: 640, height: 480 }}
                imageType={IMAGE_TYPES.JPG}
                imageCompression={0.97}
                isMaxResolution={true}
            />

        </div >
    )
}

export default CameraPreview
