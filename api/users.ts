import api from "@api/instance";
import { ERROR_MESSAGE, SUCCESS_MESSAGE } from "@constants/account";
import { UserFormType } from "@typings/account";

const url = "/users";

const usersAPI = {
  validateAccount: async (values: UserFormType) => {
    const { email, userName, password, companyCode, companyName } = values;
    const body = {
      email,
      userName,
      password,
      companyCode: companyCode || "",
      companyName: companyName || "",
    };

    return await api
      .post(`${url}/validation`, body)
      .then(() => {
        return { ok: true };
      })
      .catch((err) => {
        const {
          response: {
            data: { message },
          },
        } = err;

        switch (message) {
          case "ALREADY EXIST EMAIL":
            alert(ERROR_MESSAGE.JOIN.ALREADY_EXIST_EMAIL);
            return { ok: false };
        }
      });
  },
  signUp: async (values: UserFormType) => {
    const { email, userName, password, companyCode, companyName } = values;
    const body = {
      email,
      userName,
      password,
      companyCode: companyCode || "",
      companyName: companyName || "",
    };

    return await api
      .post(`${url}/signup`, body)
      .then(() => {
        alert(SUCCESS_MESSAGE.JOIN);
        return { ok: true };
      })
      .catch((err) => {
        const {
          response: {
            data: { message },
          },
        } = err;

        switch (message) {
          case "NOT EXIST COMPANY CODE":
            return alert(ERROR_MESSAGE.JOIN.NOT_EXIST_COMPANY_CODE);
          case "ALREADY EXIST COMPANY NAME":
            return alert(ERROR_MESSAGE.JOIN.ALREADY_EXIST_COMPANY_NAME);
          case "EMPTY LETTER EXIST":
            return alert(ERROR_MESSAGE.JOIN.INVALID_COMPANY_NAME);
        }

        return { ok: false };
      });
  },
  signIn: async (values: UserFormType) => {
    const body = values;

    return await api
      .post(`${url}/login`, body, {
        headers: {
          withCredentials: true,
        },
      })
      .then((res) => {
        return { ok: true, sessionId: res.data };
      })
      .catch((err) => {
        const {
          response: {
            data: { message },
          },
        } = err;

        switch (message) {
          case "NOT EXIST EMAIL":
            alert(ERROR_MESSAGE.LOGIN);
        }
      });
  },
};

export default usersAPI;
