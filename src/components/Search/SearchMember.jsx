import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../api/axios";
import requests from "../../api/requests";


export default function SearchMemberResult(member) {

  const [isFollowed, setIsFollowed] = useState();

  useEffect(() => {
    setIsFollowed(member.isFollowed);
  }, [member]);

  const onClickProfile = () => {
    const navigate = useNavigate()
    navigate("/");
    // 해당 멤버의 프로필로 이동
  }

  const onClickFollow = (e) => {
    e.preventDefault();

    async function unfollow() {
      await axios
        .delete(requests.following.delFollowing())
        .then((res) => {
          setIsFollowed(!isFollowed)
        })
        .catch((err) => {
          console.log(err);
        });
    }

    async function follow() {
      await axios
        .delete(requests.following.postFollowing())
        .then((res) => {
          setIsFollowed(!isFollowed)
        })
        .catch((err) => {
          console.log(err);
        });
    }
    
    if(isFollowed) return unfollow;
    return follow;
  }

  return (
    <div>
      <div onClick={onClickProfile}>
        <img src={member.imgUrl}/>
      </div>
      <div onClick={onClickProfile}>
        <span>{member.id}</span>
        <span>{member.name}</span>
      </div>
      <div>
        { isFollowed ?
          <button onClick={(e) => onClickFollow(e)}>팔로우 취소</button>:
          <button onClick={(e) => onClickFollow(e)}>팔로우</button>
        }
      </div>
    </div>
  )
}