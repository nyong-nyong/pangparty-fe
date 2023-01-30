// import React from 'react';
// import Draggable from 'react-draggable';

// export default function StickerLists(setModalOpen) {
// 	const test = (e) => {
// 		console.log(e.target);
// 	};

// 	/* 
//     리덕스 공부해서 향후 추가할 예정!!
//     Dragable은 지워도 됨

//     스티커 리스트 생각하고 있는 작동법
//     1. StickerList 에서 sticker 한 개에 onClick 이벤트 발생
//     2. 리덕스에 setModalOpen store 하나 생성 후, onClick 발생 시 상태 변경(false)
//       2-1. 모달창 close
//       2-2. 스티커 정보도 리덕스에 저장 후 PieceListPage 뿌려주기
//     3. PieceListPage redux -> setModalOpen, sticker 정보
//     4. 후에 스티커 하나당 dnd 추가
//   */

//   const stickerData = stickers.stickerList.map((sticker) => {
//     return (
// 			<div key={sticker.uid}>
// 				<Draggable>
// 					<img
// 						src={sticker.url}
// 						alt='스티커'
// 						width='100px'
// 						onDragStart={test}
// 					/>
// 				</Draggable>
// 			</div>
// 		);
// 	});

// 	return <div>{stickerData}</div>;
// }
