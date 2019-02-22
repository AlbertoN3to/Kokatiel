<template>
  <a class="card">
    <i class="material-icons icon">{{ i }}</i>
    <div class="section">{{ v }}</div>
  </a>
</template>
<script>
export default {
    props: ['section', 'icon'],
    data() {
      return {
        v : this.section,
        i : this.icon
      }
    }
}
</script>
<style lang="css" scoped>
  .card {
    height: 135px;
    display: table;
    width: 100%;
    background-color: gray;
    border-radius: 5px;
    cursor: pointer;
    color: black;
  }
  .icon {
    font-size: 60px;
    display: table;
    margin: 15px auto 0px auto;
  }
  .section {
    font-size: 24px;
    display: table;
    margin: 0 auto;
  }
</style>
