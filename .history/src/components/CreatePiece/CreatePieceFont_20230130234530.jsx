import React from 'react';

const ContextFonts = React.memo(
	({ pieceContent, setPieceContent, handleFontBtnClick }) => {
		const fontbuttons = [
			{
				id: 1,
				fontName: '프리텐다드',
				fontStyle: 'Pretendard',
			},
			{
				id: 2,
				fontName: '교보손글씨',
				fontStyle: 'KyoboHandwriting2020A',
			},
			{
				id: 3,
				fontName: '코트라 희망체',
				fontStyle: 'KOTRAHOPE',
			},
		];

		const handleFontClick = (e) => {
			const newPieceContent = pieceContent;
			newPieceContent.font = e.target.value;
			setPieceContent(newPieceContent);
			handleFontBtnClick();
		};

		return (
			<div>
				{fontbuttons.map((button) => (
					<button
						className='fontBtn'
						type='button'
						key={button.id}
						onClick={handleFontClick}
						value={button.fontStyle}
						style={{
							width: 'auto',
							margin: '10px',
						}}>
						{button.fontName}
					</button>
				))}
			</div>
		);
	},
);

export default 