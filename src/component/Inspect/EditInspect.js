import React, { useState } from 'react'
import Camera, { FACING_MODES, IMAGE_TYPES } from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';

import ImagePreview from './ImagePreview'

const EditInspect = () => {
  const [dataUri, setDataUri] = useState('');

  function handleTakePhotoAnimationDone(dataUri) {
    console.log('takePhoto', dataUri);
    setDataUri(dataUri);
  }

  const isFullscreen = false;
  console.log(isFullscreen, "isfullScreen")
  return (
    <div>
      {
        (dataUri)
          ? <ImagePreview dataUri={dataUri}
            isFullscreen={isFullscreen}
          />
          : <Camera onTakePhotoAnimationDone={handleTakePhotoAnimationDone}
            imageType={IMAGE_TYPES.JPG}
            isFullscreen={isFullscreen}
          />
      }
    </div>
  )
}

export default EditInspect
