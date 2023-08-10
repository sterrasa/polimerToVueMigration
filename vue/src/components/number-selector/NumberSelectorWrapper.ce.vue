<template>
    <number-selector :minValue="minValue" :maxValue="maxValue"  @selected="handleSelected">
      {{ message }}
    </number-selector>
    <p>Current selection: {{currentSelection}}</p>
</template>

<script setup lang="ts">

import { defineComponent, ref } from 'vue';
import NumberSelector from '@/components/number-selector/NumberSelector.ce.vue'

const { minValue, maxValue, message } = defineProps(['minValue', 'maxValue', 'message']);
const currentSelection = ref<number | string>('');

const handleSelected = (event: CustomEvent<number[]>) => {
  const selectedNumber = event.detail[0];
  console.log('Numbers selected:', selectedNumber);
  currentSelection.value = selectedNumber
};

const NumberSelectorWrapper = defineComponent({
  name: 'NumberSelectorWrapper',
  component: {
    NumberSelector
  },
  setup() {
    return {
      handleSelected,
      currentSelection
    }
  }
})
</script>

<style scoped></style>
