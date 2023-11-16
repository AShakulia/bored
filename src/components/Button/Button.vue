<script>
export default {
  props: {
    buttonClass: {
      type: String,
      default: "btn"
    },
    buttonText: {
      type: String,
      default: ""
    }
  }
}
</script>
<template>
  <button :class="buttonClass">
    {{buttonText}}
  </button>
</template>
<style lang="scss" scoped>
  .btn {
    width: 10rem;
    height: 2rem;
    border: none;
    border-radius: 5px;
    background-color: rgb(88, 201, 88);
    color: white;
    cursor: pointer;
    &:hover {
      background-color: lighten(rgb(88, 201, 88),10);
    }

    &.btn-add {
      background-color: blue;
      &:hover{
        background-color: lighten(blue,10);
      }
    }
  }
</style>