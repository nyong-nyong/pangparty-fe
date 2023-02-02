import { useNavigate } from "react-router-dom";

function TempHistory() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div>
      <button type="button" name="back" onClick={handleGoBack}>
        뒤로
      </button>
      <button type="button" name="go" onClick={handleGoHome}>
        홈으로
      </button>
    </div>
  );
}

export default TempHistory;
