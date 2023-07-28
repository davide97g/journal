<template>
  <div
    style="
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-around;
      flex-direction: column;
    "
  >
    <a-row>
      <a-col :span="24">
        <a-typography-title :level="4">Welcome to Journal</a-typography-title>
      </a-col>
      <a-col :span="24">
        <img
          src="/favicon.svg"
          style="
            width: 4rem;
            height: 4rem;
            border: 0.2rem dashed #dda6b9;
            border-radius: 100%;
            padding: 0.5rem;
            background-color: #f0d9e7;
          "
        />
      </a-col>
    </a-row>
    <div style="display: flex; flex-direction: column; gap: 2rem">
      <a-button
        type="primary"
        :icon="h(PlusOutlined)"
        @click="
          () =>
            router.push({
              name: 'New',
              params: { date: dayjs().format('MM-DD-YYYY') },
            })
        "
        >Add</a-button
      >
      <a-button
        type="dashed"
        :icon="h(CalendarOutlined)"
        @click="() => router.push('/calendar')"
        >Calendar</a-button
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { h } from "vue";
import { PlusOutlined, CalendarOutlined } from "@ant-design/icons-vue";
import { router } from "../router";
import dayjs from "dayjs";
</script>
