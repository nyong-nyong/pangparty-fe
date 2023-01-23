import axios from 'axios';
import React, { useState, useRef } from 'react'
import styled from 'styled-components';

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

  const submitPhotoFile = async (e) => {
    e.preventDefault();
    const photo = photoRef.current.files[0];

    if(photo) {
      const formData = new FormData();
      formData.append('requests', photo)

      for(const data of formData) console.log(data)

      await axios({
        method: 'post',
        url: 'http://localhost:4000/requests',
        data: formData,
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
    }
  }


  return (
    <form onSubmit={submitPhotoFile}>
      <PhotoUploadLabel htmlFor={'photoUpload'}>사진 업로드</PhotoUploadLabel>
      <input
        type={'file'}
        accept={'image/*'}
        id={'photoUpload'}
        onChange={savePhotoFile}
        ref={photoRef}
        style={{ display: "none"}}
      />
      <button>전송</button>
      <br/>
      <img
        src={photoFile}
        alt={"업로드된 사진"}
      />
    </form>
  )
}

const PhotoUploadLabel = styled.label`
  margin: 5px 0 20px 0;
  font-weight: bold;
  font-size: 13px;
  color: #0095f6;
  display: inline-block;
  cursor: pointer;
`