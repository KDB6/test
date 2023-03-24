<template>
  <v-app class="container">
    <v-container class="businessCar">
      <!-- prev -->
      <v-col class="prev">
        <router-link :to="{ name: 'BusinessInfo' }">
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

      <!-- business__input -->
      <v-col class="business__input">
        <h2>
          차량 정보를<br />입력해 주세요.
          <div class="page"><span>3</span>/6</div>
        </h2>
        <v-text-field placeholder="사업자등록번호" class="mt10p"></v-text-field>
        <v-text-field placeholder="상호명" class="mt2p"> </v-text-field>
        <v-text-field placeholder="대표자명" class="mt2p"> </v-text-field>
        <v-btn class="busi__btn mt2p">
          <h2>사업자 주소 (선택)</h2>
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="11"
              cy="11"
              r="8"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16.5 16.958L21.5 21.958"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </v-btn>
        <v-text-field placeholder="사업장 상세 주소 (선택)" class="mt2p">
        </v-text-field>
      </v-col>

      <!-- 다음 이동 -->
      <router-link :to="{ name: '' }" class="businessInfo__completion">
        <v-btn class="btnGray">다음</v-btn>
      </router-link>
    </v-container>
  </v-app>
</template>

<script lang="ts" setup>
const avb = document.querySelector(".m2tp");
</script>

<style lang="scss" scoped></style>
