import Draggable from 'react-draggable';

function CreatedPiece(props) {
	const itemClick = (e) => {
		console.log(e.target);
	};

	return (
		<div>
			<h3>CreatedPiece: 임시 데이터 전달 확인소</h3>
			{/* redux 적용 후, 아래 내용은 piecelist에 반영되어야 합니다. */}
			<div>
				{props.createdPieces.map((item) => {
					if (item) {
						return (
							<div key={item.id}>
								<Draggable>
									<p
										onClick={itemClick}
										onKeyUp={this.}
										className={`RollingPaperCard-${item.font}`}
										style={{
											height: '100px',
											width: '20%',
											backgroundColor: 'aqua',
										}}>
										{item.content}
									</p>
								</Draggable>
							</div>
						);
					}
					return null;
				})}
			</div>
		</div>
	);
}

export default CreatedPiece;
