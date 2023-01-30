import { useEffect, useState } from 'react';
import axios from '../../api/axios';

export default function StickerList() {
	const [sticker, setSticker] = useState({});

	useEffect(() => {
		async function fetchData() {
			const request = await axios.get('/sticker');
			setSticker(request.data);
		}
		fetchData();
	});
	return (
		<div>
			<h1>스티커리스트</h1>
		</div>
	);
}
