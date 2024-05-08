<script lang="ts" setup>
defineProps({
  modelValue : {
    type : Boolean,
    required: false
  }
})

defineEmits(['update:modelValue'])

</script>

<template>
  <div>
    <label class="text-sm border border-black p-2 px-4 cursor-pointer"
           :class="{'bg-green-700 text-white' : modelValue, 'underline' : !modelValue} ">
      <input type="checkbox"
             :value="modelValue"
             @input="$emit('update:modelValue', !modelValue)"
             class="hidden"
      >
      {{modelValue? 'Completed!🎉' : 'Mark as Complete'}}
    </label>

  </div>
</template>

<style scoped></style>
