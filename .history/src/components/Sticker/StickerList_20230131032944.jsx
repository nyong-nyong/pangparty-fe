import { useEffect, useState } from 'react';
import axios from 'axios';

export default function StickerList() {
	const [sticker, setSticker] = useState({});

	useEffect(() => {
		async function fetchData() {
			const request = await axios.get(
				'https://ee36ec81-32f6-4dd1-8f67-4b330393e56e.mock.pstmn.io/stickers',
			)
      .then((res) => {
        setSticker(res.data);
      })
		}
	});

	if (!sticker) return <div>...loading</div>;

	return (
		<div>
			<h1>스티커리스트</h1>
		</div>
	);
}
