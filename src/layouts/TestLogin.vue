<template>
  <v-app class="container">
    <v-container class="TLogin">
      <!-- logo -->
      <v-col class="logo">TEST</v-col>

      <!-- signIn -->
      <v-col class="signIn">
        <v-text-field placeholder="아이디"></v-text-field>
        <v-text-field placeholder="비밀번호" class="mt10"></v-text-field>
      </v-col>

      <!-- signIn__sub -->
      <v-col class="signIn__sub">
        <router-link :to="{ name: '' }">
          <v-btn class="btnBlack">로그인</v-btn>
        </router-link>
        <v-col>
          <v-col class="find">
            <router-link :to="{ name: 'FindIdCom' }">
              <h2>아아디 찾기</h2>
            </router-link>
            <router-link :to="{ name: 'FindPassInput' }">
              <h2>비밀번호 찾기</h2>
            </router-link>
          </v-col>
          <v-col class="auto">
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 24C19.5228 24 24 19.5228 24 14C24 8.47715 19.5228 4 14 4C8.47715 4 4 8.47715 4 14C4 19.5228 8.47715 24 14 24Z"
                fill="black"
              />
              <path
                d="M10 13.541L12.908 16.4L18.4 11"
                stroke="white"
                stroke-width="1.2"
              />
            </svg>
            <h2>자동 로그인</h2>
          </v-col>
        </v-col>
      </v-col>

      <!-- 회원가입 및 콜센터 안내 -->
      <v-col class="signIn__bot">
        <router-link :to="{ name: 'SignUpAccount' }">
          <v-btn class="btnWhite">회원가입</v-btn>
        </router-link>
        <v-col>
          <h2>콜센터 02-123-4567</h2>
        </v-col>
      </v-col>
    </v-container>
  </v-app>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped></style>
