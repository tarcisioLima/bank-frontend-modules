import PixModule from "pix-module";
import { useEffect } from "react";

import "./App.css";

const pixModule = PixModule({
  accessToken: "teste",
  baseURL: "https://api.com",
  isMock: false,
});

// pixModule.services.extract.get()

function App() {
  const fetch = async () => {
    const { services } = pixModule;
    const extract = await services.extract.get();
    const charge = await services.charge_someone.post({
      description: "Teste",
      key_id: 22,
      amount: 1000,
    });
    const key = await services.key.post({
      key_type: "EMAIL",
      type_origin_account: "corrente",
      key: "teste@teste.com",
    });

    // console.log("# Extract: ", extract);
    // console.log("# Charge: ", charge);
    console.log("# Key: ", key);
  };

  useEffect(() => {
    fetch();
  }, []);

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
