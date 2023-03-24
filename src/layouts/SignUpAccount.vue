<template>
  <v-app class="container">
    <v-container class="signUpAccount">
      <!-- prev -->
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
        <div class="bar">
          <div class="progress"></div>
        </div>
      </v-col>

      <!-- account__input -->
      <v-col class="account__input">
        <h2>
          계정 정보를<br />
          입력해 주세요.
          <div class="page"><span>1</span>/6</div>
        </h2>
        <!-- account__id -->
        <div class="account__id mt10p">
          <v-text-field placeholder="아이디"> </v-text-field>
          <v-btn class="account__id-btn">중복 확인</v-btn>
          <div class="account__id-text">
            <div class="d-flex align-center mt2p">
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
              <p class="account__text-terms">6자 이상 12자 이내</p>
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
              <p class="account__text-terms">영어 소문자, 숫자 조합</p>
            </div>
          </div>
        </div>
        <!-- account__pass -->
        <div class="account__pass mt5p">
          <v-text-field placeholder="비밀번호"></v-text-field>
          <div class="account__pass-text mt2p">
            <div class="d-flex align-center">
              <svg
                wwidth="20"
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
              <p class="account__text-terms">8자 이상 20자 이내</p>
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
              <p class="account__text-terms">
                영어 대소문자, 숫자, 특수문자 중 2종류 이상 조합
              </p>
            </div>
          </div>
        </div>
        <!-- account__rePass -->
        <div class="account__rePass mt5p">
          <v-text-field placeholder="비밀번호 확인"></v-text-field>
        </div>
      </v-col>

      <!-- 다음 이동 -->
      <router-link
        :to="{ name: 'BusinessInfo' }"
        class="signUpAccount__completion"
      >
        <v-btn class="btnBlack">다음</v-btn>
      </router-link>
    </v-container>
  </v-app>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped></style>
