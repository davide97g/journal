<template>
  <a-calendar
    v-model:value="value"
    @select="onSelect"
    style="overflow-y: auto; padding: 0.5rem; height: 100%"
  >
    <template #dateCellRender="{ current }">
      <div
        style="
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
        "
      >
        <edit-outlined v-if="getEntriesForDate(current).length > 0" />
      </div>
    </template>
  </a-calendar>
</template>

<script setup lang="ts">
import { Dayjs } from "dayjs";
import dayjs from "dayjs";
import { ref } from "vue";
import { JournalEntry } from "../types/journal";
import { JournalService } from "../services/journal";
import { router } from "../router";
import { EditOutlined } from "@ant-design/icons-vue";

const value = ref<Dayjs>();
const entries = ref<JournalEntry[]>([]);

const getEntries = () => {
  JournalService.getEntries().then((data) => {
    entries.value = data;
  });
};

const getEntriesForDate = (date: Dayjs) => {
  return entries.value.filter(
    (entry) =>
      dayjs(entry.date, "MM-DD-YYYY").format("MM-DD-YYYY") ===
      date.format("MM-DD-YYYY")
  );
};

const onSelect = (value: Dayjs) => {
  router.push({
    name: "Edit",
    params: { date: value.format("MM-DD-YYYY") },
  });
};

getEntries();
</script>

<style scoped>
.events {
  list-style: none;
  margin: 0;
  padding: 0;
}
.events .ant-badge-status {
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
  text-overflow: ellipsis;
  font-size: 12px;
}
.notes-month {
  text-align: center;
  font-size: 28px;
}
.notes-month section {
  font-size: 28px;
}
</style>
