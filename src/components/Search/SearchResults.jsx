import React from 'react'
import { useRecoilValue } from 'recoil'
import { searchResultsState, searchTypeState } from 'recoils/search/Atoms'

export default function SearchResults() {
  const type = useRecoilValue(searchTypeState)
  const searchResults = useRecoilValue(searchResultsState);

  // type별로 map key 변경해야함
  // 검색 결과에 따른 컴포넌트들 만들자.. ㅎㅎ

  //figma의 자동완성 관련 이야기 물어보기
  return (
    <div>
      { searchResults.length > 0 ? 
      searchResults.map((result) => {
        return (
          <span key={result.uid}>{result.introduction}</span>
        )
      })
      : <span>검색 결과가 존재하지 않습니다</span>
      }
    </div>
  )
}
