<template>
  <div class="nav-container">
    <div class="nav-bar">
      <i class="icon fas fa-bars fa-lg" @click="alert"></i>
      <h1>ellos</h1>
      <i class="icon fas fa-user-circle fa-lg" @click="alert"></i>
    </div>
      <p class="sub-text">Babykläder i storlekar 50-92</p>
  </div>
</template>

<script>
export default {
  methods: {
    alert() {
      alert('inte implementerat')
    }
  }

}
</script>

<style scoped>
  .nav-container {
    width: 100%;
    height: 120px;
    background: #EEE;

  }

  .nav-bar {
    display: flex;
    justify-content: space-between;
    width: 70%;
    padding: 1.5rem 0;
    margin: 0 auto;
  }

 h1 {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0);
    font-size: 3rem;
    font-weight: 300;
    font-size: 3rem;
    color: #000;
 }

  .sub-text {
    position: relative;
    bottom: 20px;
    left: 0;
    text-align: center;
  }


  .icon {
    cursor: pointer;
    color: #ccc;
    margin: 1rem;
  }

  @media (max-width: 480px) {
    .nav-bar {
      width: 85%;
    }
  }
</style>
