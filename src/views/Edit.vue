<template>
  <div v-if="!entry && isLoading">
    <a-spin />
  </div>
  <div
    v-else-if="!entry"
    style="
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
    "
  >
    <a-empty description="No entry found" style="color: white" />
    <a-row>
      <a-col :span="24">
        <Button type="dashed" @click="goToNewEntry">Create</Button>
      </a-col>
    </a-row>
  </div>
  <div
    v-else
    style="
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    "
  >
    {{ new Date(entry.date).toLocaleDateString() }}
    {{ dayjs().format("MM-DD-YYYY") }}
    <a-typography-title :level="5"
      >Edit Journal for
      {{ dayjs(entry.date).format("MM-DD-YYYY") }}</a-typography-title
    >
    <a-row>
      <a-col :span="24">
        <a-textarea
          v-model:value="entry.entry"
          :rows="10"
          :placeholder="`What's on your mind?`"
        />
      </a-col>
    </a-row>
    <a-row>
      <a-col :span="24">
        <a-rate v-model:value="entry.rating" allow-half />
      </a-col>
    </a-row>
    <a-row style="margin-bottom: 2rem">
      <a-col :span="24">
        <Button
          type="primary"
          @click="() => update()"
          :loading="isLoading"
          :disabled="!entry.entry.length || !entry.rating"
          >Update</Button
        >
      </a-col>
    </a-row>
  </div>
</template>

<script setup lang="ts">
import { Button } from "ant-design-vue";
import { ref } from "vue";
import dayjs from "dayjs";
import { isLoading } from "../utils";
import { JournalService } from "../services/journal";
import { JournalEntry } from "../types/journal";
import { router } from "../router";
import { useRoute } from "vue-router";

const route = useRoute();
const date = dayjs((route.params.date as string) || dayjs()).format(
  "MM-DD-YYYY"
);

const entry = ref<JournalEntry | null>(null);

const getEntry = () =>
  JournalService.getEntry(date).then((data) => (entry.value = data));

const update = () => {
  if (!entry.value) return;
  JournalService.updateEntry(entry.value).then(() => {
    router.push({ name: "Home" });
  });
};

const goToNewEntry = () => {
  router.push({ name: "New", params: { date: date } });
};

getEntry();
</script>
