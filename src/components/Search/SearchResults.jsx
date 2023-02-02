import React from 'react'
import { useRecoilValue } from 'recoil'
import { searchResultsState } from 'recoils/search/Atoms'

export default function SearchResults() {
  const searchResults = useRecoilValue(searchResultsState);

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
