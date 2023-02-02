import React, {useState} from 'react'
import { useRecoilState } from 'recoil'
import { searchTypeState } from 'recoils/search/Atoms'

export default function SearchType() {
  const [searchType, setSearchType] = useRecoilState(searchTypeState)
  const [selectedType, setSelectedType] = useState({ event: true, member: false, hashtag: false })
  
  const handleClick = (e, type) => {
    e.preventDefault();
    setSearchType(type);
    const newSelectedType = { event: false, member: false, hashtag: false };
    newSelectedType.type = true;
    setSelectedType(newSelectedType);
  }

  return (
    <div>
      <button onClick={(e) => handleClick(e, 'event')}>이벤트</button>
      <button onClick={(e) => handleClick(e, 'member')}>계정</button>
      <button onClick={(e) => handleClick(e, 'hashtag')}>해시태그</button>
    </div>
  )
}
