// import styled from 'styled-components';
import { ContextFonts } from './CreatePieceFont';

function RpThemeChange(props) {
	// const ColorContainer = styled.div`
	// 	background: ;
	// `;

	if (props.fontActivation) {
		return (
			<div>
				<h2>폰트변경</h2>
				<ContextFonts
					pieceContent={props.pieceContent}
					setPieceContent={props.setPieceContent}
					handleFontBtnClick={props.handleFontBtnClick}
				/>
			</div>
		);
	}
	if (props.alignActivation) {
		return <div>정렬 변경</div>;
	} else if (props.colorActivation) {
		return (
			<div>
				<h2>배경색 변경</h2>
			</div>
		);
	} else {
		return <div>암것도없지롱</div>;
	}
}

export default RpThemeChange;
