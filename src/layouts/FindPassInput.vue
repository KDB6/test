<template>
  <v-app class="container">
    <v-container class="FindPass">
      <!-- 이전 -->
      <v-col class="prev">
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
      </v-col>

      <!-- 비밀번호 입력창 -->
      <v-col class="findPass__input">
        <h2 class="findPass__title">
          새로운 비밀번호를<br />
          입력해 주세요.
        </h2>
        <div class="mt10p">
          <v-text-field placeholder="비밀번호"></v-text-field>
          <div class="d-flex align-center mt1p">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 13L10 18L19 7"
                stroke="#d6d9dd"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p class="findPass__terms">8자 이상 20자 이내</p>
          </div>
          <div class="d-flex align-center">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 13L10 18L19 7"
                stroke="#d6d9dd"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p class="findPass__terms">
              영어 대소문자, 숫자, 특수문자 중 2종류 이상 조합
            </p>
          </div>
        </div>
        <v-text-field placeholder="비밀번호 확인" class="mt7p"></v-text-field>
      </v-col>

      <!-- 버튼 -->
      <router-link :to="{ name: 'TestLogin' }" class="findPass__completion">
        <v-btn class="btnBlack">확인</v-btn>
      </router-link>
    </v-container>
  </v-app>
</template>

<script lang="ts" setup></script>

<style lang="scss"></style>
