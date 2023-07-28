<template>
  <a-config-provider :theme="customTheme">
    <a-space
      direction="vertical"
      :style="{ width: '100%', 'text-align': 'center' }"
    >
      <a-layout>
        <a-typography-title
          @click="() => router.push('/')"
          style="cursor: pointer"
          >Journal</a-typography-title
        >
        <a-layout-content style="height: calc(100vh - 6rem); padding: 0 1rem">
          <router-view></router-view
        ></a-layout-content>
        <a-layout-footer style="height: 2rem; padding: 0 1rem">
          <a-typography-paragraph
            >v{{ packageJson.version }}</a-typography-paragraph
          >
        </a-layout-footer>
      </a-layout>
    </a-space>
  </a-config-provider>
</template>

<script setup lang="ts">
import { customTheme } from "./theme";
import packageJson from "../package.json";
import { router } from "./router";
</script>
