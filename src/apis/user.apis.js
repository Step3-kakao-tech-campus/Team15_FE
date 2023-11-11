import { https } from "../functions/axios";
import { MyInfoDto } from "./dtos/user.dto";

export const getMyInfo = async () => {
  const myInfo = await https.get("user");
  return new MyInfoDto(myInfo.response);
};
