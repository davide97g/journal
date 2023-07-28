import { computed, ref } from "vue";

const loading = ref(false);

export const isLoading = computed(() => loading.value);
export const setIsLoading = (value: boolean) => (loading.value = value);
