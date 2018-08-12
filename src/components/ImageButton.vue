<template>
  <div>
    <img src="../assets/logo.png" alt="Button">
    {{ msg }}
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ImageButton extends Vue {
  @Prop() private msg!: string;
}
</script>

<style scoped lang="scss">
  $black: #0a0a0a;

  img {
    border: 10px dotted $black;
  }
</style>
