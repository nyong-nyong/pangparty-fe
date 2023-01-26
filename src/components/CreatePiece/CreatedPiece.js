import React from 'react'

function CreatedPiece(props) {
  
  return (
    <div>
      <h3>CreatedPiece: 임시 데이터 전달 확인소</h3>
      {/* redux 적용 후, 아래 내용은 piecelist에 반영되어야 합니다. */}
      <div>
        {props.createdPieces.map(item => {
          if (item) {
            return (
              <div key={item.id} className="pieceContainer">
                <div className={`RollingPaperCard-${item['font']}`}>
                  <p >{item.content}</p>
                  <p>{`From. ${item.writer_name}`}</p>
                </div>
              </div>
            )
          } 
        })}
      </div>
    </div>
  )
}

export default CreatedPiece;