import { AxiosInstance } from "axios";
import ExtractService from "./Extract";
import ChargeSomeoneService from "./ChargeSomeone";
import KeyService from "./Key";
import LimitService from "./Limit";
import PayQRCodeService from "./PayQRCode";
import ReceiptService from "./Receipt";
import TransferService from "./Transfer";

const all = (fetcher: AxiosInstance) => {
  const extract = ExtractService(fetcher);
  const chargeSomeone = ChargeSomeoneService(fetcher);
  const key = KeyService(fetcher);
  const limit = LimitService(fetcher);
  const payQRCode = PayQRCodeService(fetcher);
  const receipt = ReceiptService(fetcher);
  const transfer = TransferService(fetcher);

  return {
    extract,
    chargeSomeone,
    key,
    limit,
    payQRCode,
    receipt,
    transfer,
  };
};

export default all;
