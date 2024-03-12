<template>
  <a :href="url" target="_blank" class="my-button" :class="{ 'my-button--disabled': disabled }">
    {{ title }}
  </a>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    title: {
        type: String,
        required: true,
    },
  },
};
</script>

<style>
.my-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 64px;
  height: 36px;
  padding: 0 16px;
  background-color: #1976d2;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-size: 0.875rem;
  font-weight: 500;
  /* text-transform: uppercase; */
  letter-spacing: 0.02857em;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
}

.my-button:hover {
  background-color: #1565c0;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  text-decoration: none;
}

.my-button--disabled {
  pointer-events: none;
  background-color: rgba(0, 0, 0, 0.12);
  color: rgba(0, 0, 0, 0.26);
  box-shadow: none;
}
</style>