import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { CookiesProvider } from "react-cookie";
import Routers from "./pages/Routers";
import NavBar from "./components/common/Navbar";
import Footbar from "./components/common/Footbar";
import "./styles/App.scss";

// 여기는 완전 최상위 컴포넌트
// 완성된 페이지들만 뿌려주세요.
function App() {
  return (
    <div className="appContainer">
      <RecoilRoot>
        <CookiesProvider>
          <BrowserRouter>
            <div className="wrapper">
              <NavBar />
              <div className="contentWrapper">
                <Routers />
              </div>
              <Footbar />
            </div>
          </BrowserRouter>
        </CookiesProvider>
      </RecoilRoot>
    </div>
  );
}

export default App;
