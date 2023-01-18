import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import './CreatePiece.css'
import CreatedPiece from './CreatedPiece';

// 롤링페이퍼 작성하는 페이지

export default function CreatePiece() {

  // 작성되는 내용, 작성 완료시 비워줘야 뒤로 왔을 때 비어있어요.
  const [pieceContent, setPieceContent] = useState({'id': 0, 'content': '', 'locZ': 0})

  // 작성완료되어 아래로 넘겨줄 내용, 추후엔 DB로 넘겨주게 수정해야함. 일단 이 위치에서 리스트를 저장함
  const [createdPieces, setCreatedPieces] = useState([])

  // 작성완료시 제출하고 내용 초기화 
  const submitPiece = (e) => {
    setCreatedPieces( [...createdPieces, pieceContent])

    setPieceContent({'id': 0, 'content': '', 'locZ': 0})
  }

  // 타이핑되는 내용 저장
  const typingPiece = (e) => {
    setPieceContent({'id':Date.now() , 'content':e.target.value, 'locZ':0 })
  }
  
  const checking = () => {
    console.log(createdPieces)
  }

  return (
    <div>
      <h1>롤링페이퍼 작성페이지</h1>

      <div className='pieceContainer'> 
        <textarea
          className='pieceWrite' cols="30" rows="10"
          onChange={typingPiece}
          value={pieceContent.content}
        >
        </textarea>
        {/* 일단 데이터 이동 확인을 위해 link에서 밖으로 뺐습니다. */}
        <button type='submit' onClick={submitPiece}>작성완료</button>
        {/* 내용작성 시 enter를 통해 줄바꿈을 하게 되는데, form으로 submit이벤트 발동시키면 줄바꿈 해야하는데 제출되어버리니까 form으로 묶지 않았습니다.  */}
      </div>

      <div style={{ marginTop: '20px' }}>
        <CreatedPiece createdPieces={createdPieces}/>
      </div>

      <Link to="/rollingpaper">
        <button style={{ marginTop:'20px' }}>피스리스트로 가는 임시 이동 버튼</button>
      </Link>

    </div>
  );
}
