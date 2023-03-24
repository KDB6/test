<template>
  <div>
    <v-card>
      {{ user.name }} ({{ nickName }} ) 님 방문을 환영합니다. id => {{ id }}
      <p>
        <router-link to="/home">페이지 이동 Vue.js</router-link>
      </p>
      <p>
        <router-link to="/home/test">페이지 이동 Test</router-link>
      </p>
      <p>
        <router-link to="/testLogin">testLogin</router-link>
      </p>

      <v-btn block color="red" class="mt-6" @click="logOut"> 로그아웃 </v-btn>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from "@/store/auth.store";
import { storeToRefs } from "pinia";
import { useRouter, useRoute } from "vue-router";
import { defineProps, toRefs } from "vue";

type Props = { id: String };

const { signOut } = useAuthStore(); // method의 경우에는 그냥 불러오면 된다
const { user } = storeToRefs(useAuthStore()); // 반응형 변수(computed) 인경우에는 destructure를 할경우 반응성이 사라지므로 storeToRefs 를 해야 반응성을 유지한다

//welcome에서 query로 넘어온 텍스트를
const route = useRoute();
const nickName = route.query.nickName;

//route를 통해 params를 전달 받을때
const id = route.params.id;

//props를 통해 전달 받을때 - destructure 할때 반응성을 잃는다는 표시가 있는데 toRefs를 붙여서 반응성을 부여하거나 그냥 무시한다.
// const { id } = defineProps<{
//   name: string
// }>();

const router = useRouter();

const logOut = () => {
  signOut();
  router.push("/login");
};
</script>
/
