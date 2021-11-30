import PixModule from "pix-module";

import "./App.css";

const pixModule = PixModule({
  accessToken: "teste",
  baseURL: "https://api.com",
});

// pixModule.services.extract.get()

function App() {
  return (
    <div className="App">
      Olá, aplicação de teste está funcionando!
      <br></br>
      accessToken: {pixModule.activeAccessToken}
      baseURL: {pixModule.activeBaseURL}
    </div>
  );
}

export default App;
