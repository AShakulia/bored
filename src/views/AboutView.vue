<template>
  <div class="about">
    <Button 
      :buttonText="'Click me'"
      :class="'btn-add'"
    />
  </div>
</template>

<script>
import Button from '../components/Button/Button.vue';

export default {
  components: {
    Button
  }
}
</script>

<style>

</style>
