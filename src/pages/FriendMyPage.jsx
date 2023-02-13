import { useParams } from "react-router-dom";
import FriendProfile from "../components/FriendMyPage/FriendProfile";

export default function FriendMyPage() {
  const params = useParams();

  return (
    <div>
      <FriendProfile memberId={params.memberId} />
    </div>
  );
}
