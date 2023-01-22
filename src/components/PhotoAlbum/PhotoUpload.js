import React, { useState, useRef } from 'react'

export default function PhotoUpload() {

  const [photoFile, setPhotoFile] = useState("")
  const photoRef = useRef()

  const savePhotoFile = () => {
    const photo = photoRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(photo);
    reader.onloadend = () => {
      setPhotoFile(reader.result);
    }
  }

  return (
    <form>
      <label htmlFor={'photoUpload'}>사진 업로드</label>
      <input
        type={'file'}
        accept={'image/*'}
        id={'photoUpload'}
        onChange={savePhotoFile}
        ref={photoRef}
      />
      <img
        src={photoFile}
        alt={"업로드된 사진"}
      />
    </form>
  )
}
