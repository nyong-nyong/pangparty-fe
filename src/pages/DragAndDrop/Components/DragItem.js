import React from 'react'
import Draggable from 'react-draggable'

function DragItem(data) {
  // const [dragItems, setDragItems] = useState([])

  // useEffect(() => {
  //   setDragItems(DragItems ? DragItems : [])
  // }, [])

  return (
  <div className="container" style={{ width: '100%'}}>
    <Draggable>
      <p>{data.data.content}</p>
      {/* {props.propsData} */}
    </Draggable>
  </div>
  )
}

export default DragItem;