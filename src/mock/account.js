import Mock from "mockjs";
Mock.mock("/api/verify", "post", {
  data: {
    userId: "1762018210503786498",
    userName: "mock-Admin",
    mobile: "13048963949",
    resetPwd: false,
    userState: 1,
    roleList: [
      {
        id: "1761928074013245441",
        createdTime: null,
        updatedTime: null,
        createdBy: null,
        createdName: null,
        updatedBy: null,
        updatedName: null,
        stateDeleted: null,
        roleName: "管理员",
        roleDesc: null,
        roleType: null,
        stateLocked: null,
      },
    ],
    permissions: [
      "1010001001",
      "1010001000",
      "1010002001",
      "1010002002",
      "1010002003",
      "1010002004",
      "1010002005",
      "1010002006",
      "1010002000",
      "1010003001",
      "1010003002",
      "1010003003",
      "1010003004",
      "1010003000",
      "1010004002",
      "1010004001",
      "1010004003",
      "1010004000",
      "1010005001",
      "1010005000",
      "1010006001",
      "1010006002",
      "1010006003",
      "1010006004",
      "1010006005",
      "1010006006",
      "1010006007",
      "1010006008",
      "1010006000",
      "1010007002",
      "1010007001",
      "1010007000",
      "1010008001",
      "1010008002",
      "1010008003",
      "1010008000",
      "1010009001",
      "1010009002",
      "1010009003",
      "1010009000",
      "1010010001",
      "1010010000",
      "1010011001",
      "1010011002",
      "1010011000",
      "1010012002",
      "1010012001",
      "1010012003",
      "1010012004",
      "1010012005",
      "1010012006",
      "1010012000",
      "1010013001",
      "1010013002",
      "1010013003",
      "1010013004",
      "1010013005",
      "1010013000",
      "1010014001",
      "1010014002",
      "1010014003",
      "1010014004",
      "1010014000",
    ],
    token: "xu3pGrYEEXO5QPnzsZMiCu8fzkr69YTnSkdFlap8",
    lenderExists: true,
    platformAccountExists: true,
  },
  msg: null,
  status: 200,
  success: true,
  traceId: "c00009e1208f35fe",
});
Mock.mock("/api/userInfo", "get", {
  data: { id: 1, username: "admin", role: "超级管理员", nickname: "\u7ba1\u7406\u5458", is_supper: true, has_real_ip: true, permissions: [] },
  error: "",
  status: 200,
});
