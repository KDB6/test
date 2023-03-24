<template>
  <v-app class="container">
    <v-container class="findIdCom">
      <!-- findId__info -->
      <v-col class="findId__info">
        <h2>아이디 찾기가<br />완료되었습니다.</h2>
        <div class="findId__win">
          <div class="findId__win-info d-flex align-center">
            <h2>이름</h2>
            <p>김로지</p>
          </div>
          <div class="findId__win-info d-flex align-center">
            <h2>이름</h2>
            <p>김로지</p>
          </div>
          <div class="findId__win-info d-flex align-center">
            <h2>이름</h2>
            <p>김로지</p>
          </div>
          <div class="findId__win-info d-flex align-center">
            <h2>이름</h2>
            <p>김로지</p>
          </div>
        </div>
      </v-col>

      <!-- 돌아가기 버튼 -->
      <router-link :to="{ name: 'TestLogin' }" class="findId__completion">
        <v-btn class="btnBlack">돌아가기</v-btn>
      </router-link>
    </v-container>
  </v-app>
</template>

<script lang="ts" setup></script>

<style lang="scss"></style>
