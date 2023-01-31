import { useEffect } from 'react';
import axios from '../../api/axios';

export default function StickerList() {
	useEffect(() => {
		axios.get('stickers');
	});
	return (
		<div>
			<h1>스티커리스트</h1>
		</div>
	);
}
