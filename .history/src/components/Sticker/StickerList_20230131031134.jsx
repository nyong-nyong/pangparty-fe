import { useEffect } from 'react';
import axios from '../../api/axios';

export default function StickerList() {
	useEffect(() => {
    async function fetchData() {
      const request = await axios.get
    }
  })
	return (
		<div>
			<h1>스티커리스트</h1>
		</div>
	);
}
