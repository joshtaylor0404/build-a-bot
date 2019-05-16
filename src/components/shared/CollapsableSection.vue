<template>
    <div>
        <div class="header">
            <div v-if="open" @click="open = !open">&#x25b2; Collapse</div>
            <div v-if="!open" @click="open = !open">&#x25bC; Expand</div>
        </div>
        <slot v-if="open">
        </slot>
    </div>
</template>

<script>
export default {
  name: 'CollapsableSection',
  data() {
    return {
      open: true,
    };
  },
};
</script>

<style>
    .header {
        background-color: #bbb;
        padding: 3px;
        cursor: pointer;
    }
</style>
