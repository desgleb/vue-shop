<template>
  <BaseFormField :title="title" :error="error">
    <input
      v-model="dataValue"
      class="form__input"
      type="text"
      name="name"
      :placeholder="placeholder"
    />
  </BaseFormField>
</template>

<script>
import BaseFormField from "./BaseFormField.vue";

export default {
  props: ["title", "error", "placeholder", "value"],
  components: { BaseFormField },
  computed: {
    dataValue: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      },
    },
  },
};
</script>
