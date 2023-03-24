<template>
  <v-app class="businessSearch">
    <v-col>
      <div class="search__top">
        <div class="prev d-flex align-center">
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
          <h2>사업장 주소 검색</h2>
        </div>
        <div class="search">
          <v-text-field
            placeholder="도로명, 지번으로 검색"
            class="search__input"
          >
          </v-text-field>
          <svg
            class="search__input-svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7 1.25C3.82436 1.25 1.25 3.82436 1.25 7V17C1.25 20.1756 3.82436 22.75 7 22.75H17C20.1756 22.75 22.75 20.1756 22.75 17V7C22.75 3.82436 20.1756 1.25 17 1.25H7ZM14.6519 9.34858C14.9448 9.64147 14.9448 10.1163 14.6519 10.4092L13.0609 12.0002L14.6519 13.5913C14.9448 13.8841 14.9448 14.359 14.6519 14.6519C14.359 14.9448 13.8841 14.9448 13.5912 14.6519L12.0002 13.0609L10.4092 14.6519C10.1163 14.9448 9.64147 14.9448 9.34858 14.6519C9.05568 14.359 9.05568 13.8841 9.34858 13.5912L10.9395 12.0002L9.34858 10.4093C9.05568 10.1164 9.05568 9.64151 9.34858 9.34861C9.64147 9.05572 10.1163 9.05572 10.4092 9.34861L12.0002 10.9396L13.5912 9.34858C13.8841 9.05568 14.359 9.05568 14.6519 9.34858Z"
              fill="#ccc"
            />
          </svg>
        </div>
      </div>
    </v-col>
    <v-container>
      <v-col>
        <div class="search__all">
          <div class="search__loading">
            <h2>검색 중입니다...</h2>
          </div>
          <div class="search__info">
            <div class="search__info-address">
              <h2>서울특별시 성동구 <span>왕십리로</span> 58</h2>
              <p>서울특별시 성동구 성수동 1가 656-3</p>
            </div>
            <div class="search__info-address">
              <h2>서울특별시 성동구 <span>왕십리로</span> 58</h2>
              <p>서울특별시 성동구 성수동 1가 656-3</p>
            </div>
            <div class="search__info-address">
              <h2>서울특별시 성동구 <span>왕십리로</span> 58</h2>
              <p>서울특별시 성동구 성수동 1가 656-3</p>
            </div>
            <div class="search__info-address">
              <h2>서울특별시 성동구 <span>왕십리로</span> 58</h2>
              <p>서울특별시 성동구 성수동 1가 656-3</p>
            </div>
            <div class="search__info-address">
              <h2>서울특별시 성동구 <span>왕십리로</span> 58</h2>
              <p>서울특별시 성동구 성수동 1가 656-3</p>
            </div>
            <div class="search__info-address">
              <h2>서울특별시 성동구 <span>왕십리로</span> 58</h2>
              <p>서울특별시 성동구 성수동 1가 656-3</p>
            </div>
            <div class="search__info-address">
              <h2>서울특별시 성동구 <span>왕십리로</span> 58</h2>
              <p>서울특별시 성동구 성수동 1가 656-3</p>
            </div>
            <div class="search__info-address">
              <h2>서울특별시 성동구 <span>왕십리로</span> 58</h2>
              <p>서울특별시 성동구 성수동 1가 656-3</p>
            </div>
            <div class="search__info-address">
              <h2>서울특별시 성동구 <span>왕십리로</span> 58</h2>
              <p>서울특별시 성동구 성수동 1가 656-3</p>
            </div>
          </div>
        </div>
      </v-col>
    </v-container>
  </v-app>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped></style>
