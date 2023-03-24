// 페이지 경로 맵핑
const routes = [
  {
    path: "/",
    redirect: "welcome",
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/layouts/LogIn.vue"),
    meta: {
      //로그인 페이지는 auth가 필요 없음
      requiresAuth: false,
    },
  },
  {
    path: "/welcome",
    name: "welcome",
    component: () => import("@/layouts/Welcome.vue"),
    meta: {
      requiresAuth: true,
    },
    props: true, //parameter를 props로 받고 싶은 경우 정의한다
  },
  {
    path: "/home",
    component: () => import("@/layouts/Default.vue"),
    meta: {
      requiresAuth: true,
    },
    children: [
      {
        path: "",
        name: "home",
        component: () => import("@/views/Home.vue"),
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: "test",
        name: "test",
        component: () => import("@/views/Test.vue"),
        meta: {
          requiresAuth: true,
        },
      },
    ],
  },
  // TestLogin
  {
    path: "/testLogin",
    name: "TestLogin",
    component: () => import("@/layouts/TestLogin.vue"),
    meta: {
      requiresAuth: false,
    },
  },
  // FindId
  {
    path: "/findId",
    name: "FindId",
    component: () => import("@/layouts/FindId.vue"),
    meta: {
      requiresAuth: false,
    },
  },
  // FindIdCom
  {
    path: "/findIdCom",
    name: "FindIdCom",
    component: () => import("@/layouts/FindIdCom.vue"),
    meta: {
      requiresAuth: false,
    },
  },
  // FindPassBirth
  {
    path: "/findPassBirth",
    name: "FindPassBirth",
    component: () => import("@/layouts/FindPassBirth.vue"),
    meta: {
      requiresAuth: false,
    },
  },
  // FindPassInput
  {
    path: "/findPassInput",
    name: "FindPassInput",
    component: () => import("@/layouts/FindPassInput.vue"),
    meta: {
      requiresAuth: false,
    },
  },
  // SignUpAccount
  {
    path: "/signUpAccount",
    name: "SignUpAccount",
    component: () => import("@/layouts/SignUpAccount.vue"),
    meta: {
      requiresAuth: false,
    },
  },
  // BusinessInfo
  {
    path: "/businessInfo",
    name: "BusinessInfo",
    component: () => import("@/layouts/BusinessInfo.vue"),
    meta: {
      requiresAuth: false,
    },
  },
  // BusinessInfo
  {
    path: "/businessAddress",
    name: "BusinessAddress",
    component: () => import("@/layouts/BusinessAddress.vue"),
    meta: {
      requiresAuth: false,
    },
  },
  // BusinessSearch
  {
    path: "/businessSearch",
    name: "BusinessSearch",
    component: () => import("@/layouts/BusinessSearch.vue"),
    meta: {
      requiresAuth: false,
    },
  },
  // BusinessCar
  {
    path: "/businessCar",
    name: "BusinessCar",
    component: () => import("@/layouts/BusinessCar.vue"),
    meta: {
      requiresAuth: false,
    },
  },
];

export default routes;
