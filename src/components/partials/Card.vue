<script>
export default {
  props:{
    name: String,
    status: String,
    species:String,
    image: String,
  }
}
</script>

<template>
  <div class="col mb-3">
    <div class="card">
      <img :src="image" class="card-img-top" :alt="name">
      <div class="card-body">
        <h5 class="card-title">{{ name }}</h5>
        <h6 class="card-title">{{ status }}</h6>
        <p class="text-center">{{ species }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>