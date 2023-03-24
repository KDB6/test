<template>
  <v-app class="container">
    <v-container class="findId">
      <!-- prev -->
      <v-col class="prev d-flex align-center">
        <router-link :to="{ name: 'TestLogin' }">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 20L8 12L16 4"
              stroke="black"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </router-link>
        <h2>아이디 찾기</h2>
      </v-col>

      <!-- findId__input -->
      <v-col class="findId__input">
        <h2>가입 시 입력한<br />생년월일을 입력해 주세요.</h2>
        <v-text-field placeholder="생년월일 6글자" class="mt10p"></v-text-field>
      </v-col>

      <!-- 다음 이동 -->
      <router-link :to="{ name: 'FindIdCom' }" class="findId__completion">
        <v-btn class="btnBlack">다음</v-btn>
      </router-link>
    </v-container>
  </v-app>
</template>

<script lang="ts" setup></script>

<style lang="scss"></style>
