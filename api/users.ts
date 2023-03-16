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
      companyCode: companyCode || "",
      companyName: companyName || "",
    };

    return await api
      .post(`${url}/validation`, body)
      .then(({ status }) => {
        switch (status) {
          case 200:
            return { ok: true };
        }
      })
      .catch(
        ({
          response: {
            data: { message },
          },
        }) => {
          switch (message) {
            case "ALREADY EXIST EMAIL":
              alert(ERROR_MESSAGE.ALREADY_EXIST_EMAIL);
              return { ok: false };
          }
        }
      );
  },
};

export default usersAPI;
