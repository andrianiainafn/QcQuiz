import {AuthContext} from "./context/AuthContext";
import AppRoute from "./routes";

function App() {
  return (
      <AuthContext>
        <AppRoute/>
      </AuthContext>      
  );
}

export default App;
