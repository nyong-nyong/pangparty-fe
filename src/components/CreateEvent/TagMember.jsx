// import { useState } from 'react';

// export default function TagMember() {
// 	const [search, setSearch] = useState('');

// 	const memberData = members.memberList.map((member) => {
// 		return (
// 			<div key={member.uid}>
// 				<li>{member.id}</li>
// 			</div>
// 		);
// 	});

// 	const onChange = (e) => {
// 		setSearch(e.target.value);
// 	};

// 	return (
// 		<div>
// 			<h3>축하해줄 친구를 태그해볼까요?</h3>
// 			<input type='text' value={search} onChange={onChange} placeholder='@' />
// 			{memberData}
// 			<button type='submit'>다음</button>
// 			<button>친구 계정이 없어요</button>
// 		</div>
// 	);
// }
