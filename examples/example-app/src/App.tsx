import PixModule from "pix-module";
import { useEffect } from "react";

import "./App.css";

const pixModule = PixModule({
  accessToken: "teste",
  baseURL: "https://api.com",
  isMock: true,
});

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
      key: "test@test.com",
    });
    const limit = await services.limit.post({
      limit_day_amount: 5000,
      limit_night_amount: 2000,
    });
    const checkqrcode = await services.checkqrcode.post({
      code: "testcode",
    });
    const payqrcode = await services.payqrcode.post({
      code: "testcode",
      type_origin_account: "poupança",
      payment_date: "2021-12-20",
    });
    const receipts = await services.receipt.get();
    const transfer = await services.transfer.post({
      amount: 20,
      receiver_key: "test@test.com",
      type_receiver_key: "EMAIL",
      type_origin_account: "corrente",
    });

    const keyPUT = await services.key.put(1, {
      type_origin_account: "poupança",
    });

    console.log("# Extract: ", extract);
    console.log("# Charge: ", charge);
    console.log("# Key: ", key);
    console.log("# Key PUT: ", keyPUT);
    console.log("# Limit: ", limit);
    console.log("# Receipt: ", receipts);
    console.log("# Check QR Code: ", checkqrcode);

    console.log("# Transfer: ", transfer);
    console.log("# Pay QR Code: ", payqrcode);
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
