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
    <div class="mt-3">
      <img :src="image" class="photo card-img-top" :alt="name">
      <div class="card-body">
        <h5 class="card-title">{{ name }}</h5>
        <h5 class="card-title">----</h5>
        <h6 class="card-title">{{ status }}</h6>
        <p class="text-center">{{ species }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.photo{
  width: 220px;
  height: 220px;
  overflow: hidden;
  border-radius: 50%;
}
.photo:hover{
  width: 210px;
  height:210px;
  box-shadow: 4px 4px 4px  #7d6b6b;
}
h5, h6 ,p{
  color:rgb(43, 1, 43);
}
</style>