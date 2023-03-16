import api from "@api/instance";
import { ERROR_MESSAGE } from "@constants/account";
import { UserFormType } from "@typings/account";

const url = "/users";

const usersAPI = {
  validateAccount: async (values: UserFormType) => {
    const { email, name, password, companyCode, companyName } = values;
    const body = {
      email,
      name,
      password,
      companyCode,
      companyName,
    };

    return await api
      .post(`${url}/validation`, body)
      .then(({ status }) => {
        switch (status) {
          case 200:
            return { ok: true };
        }
      })
      .catch(({ response: { status } }) => {
        switch (status) {
          case 400:
            alert(ERROR_MESSAGE.DUPLICATE_EMAIL);
            return { ok: false };
        }
      });
  },
};

export default usersAPI;
