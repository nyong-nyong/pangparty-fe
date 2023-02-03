/* eslint-disable no-unused-vars */
import { useRecoilValue } from "recoil";
import {
  searchResultsState,
  searchTypeState,
} from "../../recoils/search/Atoms";
import SearchMemberResult from "./SearchMember";

export default function SearchResults() {
  const type = useRecoilValue(searchTypeState);
  const searchResults = useRecoilValue(searchResultsState);

  // type별로 map key 변경해야함
  // 검색 결과에 따른 컴포넌트들 만들자.. ㅎㅎ
  // figma의 자동완성 관련 이야기 물어보기

  if(searchResults === undefined || searchResults.length < 1) {
    return (<span>검색 결과가 존재하지 않습니다</span>);
  }

  switch(type) {
    case("member") :
      return (
        <ul>
          {searchResults.map((member) => {
            return (
              <SearchMemberResult key={member.id} member={member}/>
            )
          })};
        </ul>
      );
    
      case("event") :
      return (
        <ui>
          
        </ui>
      );
      case("hashtag") :
      return (
        <ui>
          
        </ui>
      );

      default:
        return (<span>검색 결과가 존재하지 않습니다</span>);
  }
}
