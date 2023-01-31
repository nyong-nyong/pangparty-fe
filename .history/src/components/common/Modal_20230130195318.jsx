import { useEffect, useRef } from 'react';
import '../common/Modal.css';

export default function Modal({ setModalOpen, InnerComponent }) {
	// 모달창 닫기
	const closeModal = () => {
		setModalOpen(false);
	};

	console.log(InnerComponent);

	const modalRef = useRef();

	useEffect(() => {
		const handler = (e) => {
			if (modalRef.current && !modalRef.current.contains(e.target)) {
				setModalOpen(false);
			}
		};
		// 이벤트 핸들러 등록
		document.addEventListener('mousedown', handler);
		document.addEventListener('touchstart', handler); // 모바일 대응

		return () => {
			// 이벤트 핸들러 해제
			document.removeEventListener('mousedown', handler);
			document.removeEventListener('touchstart', handler); // 모바일 대응
		};
	});

	return (
		<div ref={modalRef} className='container'>
			<button className='close' onClick={closeModal}>
				x
			</button>
			<p>모달창</p>
			<InnerComponent />
		</div>
	);
}
