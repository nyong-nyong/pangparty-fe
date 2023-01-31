import { Link } from 'react-router-dom';
// import styled from "styled-components"
import RpThemeChange from '../components/CreatePiece/RpThemeChange';
import CreatedPiece from '../components/CreatePiece/CreatedPiece';
import '../components/CreatePiece/CreatePiece.css';
import type { useRef, useState } from 'react';

// 롤링페이퍼 작성하는 페이지

export default function CreatePiecePage() {
	// 작성되는 내용, 작성 완료시 비워줘야 뒤로 왔을 때 비어있어
	const [pieceContent, setPieceContent] = useState({
		uid: 0, // 식별key값 (현재 임의로 Date.now로 사용 중)
		member_uid: null, // 유저 id값, 회원 비회원 여부 확인 가능
		writer_name: '', // 작성가능한 이름, 초기값 세팅 필요
		content: '',
		font: 'Pretendard',
	});

	// 작성완료되어 아래로 넘겨줄 내용, 추후엔 DB로 넘겨주게 수정해야함. 일단 이 위치에서 리스트를 저장함
	const [createdPieces, setCreatedPieces] = useState([]);

	const [fontActivation, setFontActivation] = useState(false);
	const [alignActivation, setAlignActivation] = useState(false);
	const [colorActivation, setColorActivation] = useState(false);

	// 작성완료시 제출하고 내용 초기화
	const submitPiece = (e) => {
		setCreatedPieces([...createdPieces, pieceContent]);
		setPieceContent({
			uid: 0,
			member_uid: null,
			writer_name: '',
			content: '',
			font: 'Pretendard',
		});
		const newClassName = `RollingPaperCard-Pretendard`;
		const inputTextArea = document.getElementById('inputTextArea');
		inputTextArea.className = newClassName;
		// console.log(inputTextArea)
	};

	// 타이핑되는 내용 저장
	const typingPiece = (e) => {
		setPieceContent({
			uid: Date.now(), // 식별key값 (현재 임의로 Date.now로 사용 중)
			member_uid: null, // 유저 id값, 회원 비회원 여부 확인 가능
			writer_name: pieceContent.writer_name, // 작성가능한 이름, 초기값 세팅 필요
			content: e.target.value,
			font: pieceContent.font,
		});
	};

	const typingWriter = (e) => {
		setPieceContent({
			uid: Date.now(), // 식별key값 (현재 임의로 Date.now로 사용 중)
			member_uid: null, // 유저 id값, 회원 비회원 여부 확인 가능
			writer_name: e.target.value, // 작성가능한 이름, 초기값 세팅 필요
			content: pieceContent.content,
			font: pieceContent.font,
		});
	};

	const isFontActive = (e) => {
		setFontActivation(!fontActivation);
		setAlignActivation(false);
		setColorActivation(false);
	};

	const isAlignActive = (e) => {
		setFontActivation(false);
		setAlignActivation(!alignActivation);
		setColorActivation(false);
	};

	const isColorActive = (e) => {
		setFontActivation(false);
		setAlignActivation(false);
		setColorActivation(!colorActivation);
	};

	// 폰트 버튼 클릭시 발생하는 이벤트 처리
	const inputRef = useRef(null);

	const handleFontBtnClick = () => {
		inputRef.current.focus();
		const newClassName = `RollingPaperCard-${pieceContent['font']}`;
		inputRef.current.className = newClassName;
		// console.log(inputRef.current.className)
	};

	return (
		<div
			style={{
				display: 'flex',
				alignItems: 'center',
				flexDirection: 'column',
			}}>
			<h1>롤링페이퍼 작성페이지 </h1>

			<div className='pieceContainer'>
				<textarea
					id='inputTextArea'
					className='pieceWrite'
					placeholder='내용을 입력해주세요'
					onChange={typingPiece}
					value={pieceContent.content}
					ref={inputRef}
				/>
				<span>
					From.
					<input
						type='text'
						className='writerName'
						onChange={typingWriter}
						value={pieceContent.writer_name}
						placeholder=''
					/>
				</span>
			</div>
			{/* 버튼 눌렀을 때 그 버튼 기능에 맞는 compnent만 렌더링 합니다. */}
			<div className='buttonContainer'>
				<button
					className='changeButton'
					id='fontChangeButton'
					type='button'
					onClick={isFontActive}
					value='font'>
					T
				</button>
				<button
					className='changeButton'
					id='alignChangeButton'
					type='button'
					onClick={isAlignActive}
					value='align'>
					정렬
				</button>
				<button
					className='changeButton'
					id='colorChangeButton'
					type='button'
					onClick={isColorActive}
					value='color'>
					컬러
				</button>
			</div>

			<RpThemeChange
				fontActivation={fontActivation}
				alignActivation={alignActivation}
				colorActivation={colorActivation}
				pieceContent={pieceContent}
				setPieceContent={setPieceContent}
				handleFontBtnClick={handleFontBtnClick}
			/>

			{/* 일단 데이터 이동 확인을 위해 link에서 밖으로 뺐습니다. */}
			<button type='submit' onClick={submitPiece} style={{ margin: '5%' }}>
				다음
			</button>
			{/* 폰트 버튼 기능 추가 */}
			{/* 내용작성 시 enter를 통해 줄바꿈을 하게 되는데, form으로 submit이벤트 발동시키면 줄바꿈 해야하는데 제출되어버리니까 form으로 묶지 않았습니다.  */}

			<div style={{ marginTop: '20px' }}>
				<CreatedPiece createdPieces={createdPieces} />
			</div>

			<Link to='/rollingpaper'>
				<button type='button' style={{ marginTop: '20px' }}>
					피스리스트로 가는 임시 이동 버튼
				</button>
			</Link>
		</div>
	);
}
