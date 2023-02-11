/* eslint-disable no-unused-vars */
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { CookiesProvider } from "react-cookie";
import Routers from "./pages/Routers";
import LoginPage from "./pages/LoginPage";
import NavBar from "./components/common/Navbar";
import Footbar from "./components/common/Footbar";

// 여기는 완전 최상위 컴포넌트
// 완성된 페이지들만 뿌려주세요.
function App() {
  const [loginPage, setLoginPage] = useState(true);
  return (
    <div className="appContainer">
      <RecoilRoot>
        <CookiesProvider>
          <BrowserRouter>
            {loginPage ? (
              <LoginPage />
            ) : (
              <>
                <NavBar />
                <Routers />
                <Footbar />
              </>
            )}
          </BrowserRouter>
        </CookiesProvider>
      </RecoilRoot>
    </div>
  );
}

export default App;
