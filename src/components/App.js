import React, { useContext } from "react";
import { UserProvider } from "../context/user";
import Header from "./Header";
import Profile from "./Profile";
import { themeContext } from "../context/theme";

function App() {

  const {theme} = useContext(themeContext)

  // const [theme, setTheme] = useState("dark");
  return (
    <main className={theme}>
      <UserProvider>
        {/* <Header theme={theme} setTheme={setTheme} /> */}
        <Header />
        <Profile />
      </UserProvider>

    </main>
  );
}

export default App;
