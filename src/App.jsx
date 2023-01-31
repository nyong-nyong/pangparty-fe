import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Routers from "./pages/Routers";
import "./styles/App.css";

// 여기는 완전 최상위 컴포넌트
// 완성된 페이지들만 뿌려주세요.

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routers />
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
