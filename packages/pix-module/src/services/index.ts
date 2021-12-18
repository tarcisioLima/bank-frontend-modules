import { AxiosInstance } from "axios";
import ExtractService from "./Extract";
import ChargeSomeoneService from "./ChargeSomeone";
import KeyService from "./Key";
import LimitService from "./Limit";
import PayQRCodeService from "./PayQRCode";
import CheckQRCodeService from "./CheckQRCode";
import ReceiptService from "./Receipt";
import TransferService from "./Transfer";

const all = (fetcher: AxiosInstance, isMock: boolean) => {
  const extract = ExtractService(fetcher, isMock);
  const charge_someone = ChargeSomeoneService(fetcher, isMock);
  const key = KeyService(fetcher, isMock);
  const limit = LimitService(fetcher, isMock);
  const payqrcode = PayQRCodeService(fetcher, isMock);
  const checkqrcode = CheckQRCodeService(fetcher, isMock);
  const receipt = ReceiptService(fetcher, isMock);
  const transfer = TransferService(fetcher, isMock);

  return {
    extract,
    charge_someone,
    key,
    limit,
    checkqrcode,
    payqrcode,
    receipt,
    transfer,
  };
};

export default all;
