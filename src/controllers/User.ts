// import { HttpResponseType, HTTP_RESPONSES } from "../shared/constants/http";
// import { IHttpResponse } from "../shared/interfaces/http";
// import { useUserService } from "../shared/services/User";

// const { getUsers: getUsersService } = useUserService();

export const useUserController = () => {
  const getUsers = async () => {
    // try {
    //   const response: IHttpResponse = await getUsersService();
    //   res.status(response.statusCode).json(response);
    // } catch (err) {
    //   const response: IHttpResponse = HTTP_RESPONSES[HttpResponseType.ServerError];
    //   res.status(response.statusCode).json(response);
    // }
  };
  const createUser = () => {};
  const updateUser = () => {};
  const deleteUser = () => {};

  return {
    getUsers,
    createUser,
    updateUser,
    deleteUser,
  };
};
