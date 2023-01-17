import React, {useState, useRef} from 'react'
import Draggable from 'react-draggable';
import './DragAndDrop.css'
import DragItem from './Components/DragItem.js'

function DragAndDrop() {

  const [pos, setPos] = useState({posX: 0, posY: 0})

  const trackPos = (data) => {
    setPos({ posX: data.x, posY: data.y})
  }

  const propsData = [
      {
        id: '1',
        content: 'hello num1'
      },
      {
        id: '2',
        content: 'hello num2'
      }
    ]

  // const SayHi = { message: 'say hi ㅋㅋ'}
  
  return (
  <div className="container" style={{ width: '100%'}}>
    {propsData.map((data) => (
      <div key={data.id}>
        <DragItem 
          data = {data}
        />
      </div>
    ))}

    {/* <Draggable onDrag={(e, data) => trackPos(data)} style={{ width:'30%' }}>
      <div
      className="drag-box"
      style={{ left: pos.posX.toFixed(0), top: pos.posY.toFixed(0), width: '10%' }}
      >
        제일 위에있는 고 ㅋㅋ
      </div>
    </Draggable>
    <Draggable onDrag={(e, data) => trackPos(data)} style={{ width:'30%' }}>
      <div
      className="drag-box"
      style={{ left: pos.posX.toFixed(0), top: pos.posY.toFixed(0), width: '10%' }}
      >
        제고 ㅋㅋ
      </div>
    </Draggable>
      <DragItem 
        SayHi = {SayHi}
        propsData = {propsData}
      /> */}
  </div>
  )
}

export default DragAndDrop;