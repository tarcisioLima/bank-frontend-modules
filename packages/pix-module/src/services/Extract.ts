import showResponseErrors from "../utils/showResponseErrors";
import { PAGINATION_LIMIT } from "../utils/constants";

const service = {};

service.get = async () => {
  try {
    const { data } = await fetch({
      url: `/extract`,
      method: "get",
      params: {
        limit: PAGINATION_LIMIT,
        ordering: "-id",
      },
    });
    if (!data) {
      return false;
    }

    return data;
  } catch (err) {
    showResponseErrors(err);
    return false;
  }
};

/* service.post = async (payload) => {
  try {
    const { data } = await fetch({
      url: `/accounts/`,
      method: "post",
      data: payload,
    });

    if (!data) {
      return false;
    }

    return data;
  } catch (err) {
    showResponseErrors(err);
    return false;
  }
}; */

export default service;
