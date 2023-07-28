<template>
  <div
    style="
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    "
  >
    <a-typography-title :level="5"
      >New Journal for {{ date.format("MM-DD-YYYY") }}</a-typography-title
    >
    <a-row>
      <a-col :span="24">
        <a-textarea
          v-model:value="note"
          :rows="10"
          :placeholder="`What's on your mind?`"
        />
      </a-col>
    </a-row>
    <a-row>
      <a-col :span="24">
        <a-rate v-model:value="rate" allow-half />
      </a-col>
    </a-row>
    <a-row style="margin-bottom: 2rem">
      <a-col :span="24">
        <Button
          type="primary"
          @click="() => save()"
          :loading="isLoading"
          :disabled="!note.length || !rate"
          >Save</Button
        >
      </a-col>
    </a-row>
  </div>
</template>

<script setup lang="ts">
import { Button } from "ant-design-vue";
import { ref } from "vue";
import { isLoading } from "../utils";
import dayjs from "dayjs";
import { JournalService } from "../services/journal";
import { router } from "../router";
import { useRoute } from "vue-router";

const route = useRoute();
const date = dayjs((route.params.date as string) || new Date());

const note = ref("");
const rate = ref(0);

const save = () => {
  JournalService.createNewEntry({
    entry: note.value,
    date: date.format("MM-DD-YYYY"),
    rating: rate.value,
  }).then(() => {
    router.push({ name: "Home" });
  });
};
</script>
