<template>
  <div :style="{ '--background-color': backgroundColor, '--text-color': textColor }" class="number-selector">
    <slot>Select:</slot>
    <div class="selectables">
      <span class="selectable" v-for="currentItem in items" :key="`element-${currentItem}`">
        <input 
          :style="{ width: radioSize, height: radioSize }" 
          type="radio" :id="`item-${currentItem}`"
          :value="currentItem" 
          :checked="currentItem === selectableItems" 
          @change="onSelected(currentItem)"
          :aria-label="`Select ${currentItem}`" 
        />
        <label :for="`item-${currentItem}`">{{ currentItem }}</label>
      </span>
    </div>
  </div>
</template>

<script lang="ts">

import { defineComponent, ref, computed, onMounted } from 'vue'

export default defineComponent({
  name: 'NumberSelector',
  props: {
    minValue: {
      type: Number,
      required: true,
      validator: (value: number) => value >= 0,
    },
    maxValue: {
      type: Number,
      required: true,
      validator: (value: number) => value >= 0,
    },
    backgroundColor: {
      type: String,
      default: '#fffff',
    },
    textColor: {
      type: String,
      default: 'rgba(0 0 0 / 87%)',
    },
    radioSize: {
      type: String,
      default: '1.0rem',
    }
  },
  emits: ['selected'],

  setup(props, { emit }) {

    const { minValue, maxValue } = props
    const selectableItems = ref<number>()

    const items = computed<number[]>(() => {
      const tmpItems: number[] = [];
      for (let i = minValue; i <= maxValue; i++) {
        tmpItems.push(i);
      }
      return tmpItems;
    })

    onMounted(() => {
      console.log('onMounted');
    })

    const onSelected = (number: number) => {
      console.log(`Selected number: ${number}`);
      selectableItems.value = number;
      emit('selected', number);
    }

    return {
      selectableItems,
      items,
      onSelected
    }
  }
})
</script>

<style lang="css" scoped >
.number-selector {

  --background-color: #242424;
  --text-color: rgba(255, 255, 255, 0.87);

  margin: 1em;
  padding: 0.5em;
  max-width: min-content;
  border: #9d9d9d solid;

  background-color: var(--background-color);
  color: var(--text-color);
}

.selectable {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0.5em;
}

.selectables {
  display: flex;
  flex-direction: row;
}
</style>


