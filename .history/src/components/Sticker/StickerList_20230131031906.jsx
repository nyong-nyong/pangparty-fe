import { useEffect, useState } from 'react';
import axios from '../../api/axios';

export default function StickerList() {
	const [sticker, setSticker] = useState({});

	useEffect(() => {
		async function fetchData() {
      console.log(axios.get('/s'));
			const request = await axios.get('/stickers');
			setSticker(request.data);
		}
		fetchData();
	});

	if (!sticker) return <div>...loading</div>;

	return (
		<div>
			<h1>스티커리스트</h1>
		</div>
	);
}
