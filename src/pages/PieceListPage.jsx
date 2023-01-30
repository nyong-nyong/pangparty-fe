/* eslint-disabled */

import { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../components/common/Modal';
import StickerLists from '../components/Sticker/StickerLists';

// 완성된 롤링페이퍼 페이지

export default function PieceListPage() {
	const [modalOpen, setModalOpen] = useState(false); // 모달 노출여부
	const showModal = () => {
		setModalOpen(true);
	};

	return (
		<div>
			<h1>완성된 롤링페이퍼 페이지</h1>
			<div style={{ width: '100%', height: '500px' }}/>
			<button onClick={showModal}>스티커 붙이기</button>
			{modalOpen && (
				<Modal setModalOpen={setModalOpen} InnerComponent={StickerLists} />
			)}
			<Link to='/'>🏡 회귀 🏡</Link>
		</div>
	);
}
