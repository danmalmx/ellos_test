<template>
  <header :style="{backgroundImage: `url(${image})`}">
    <div class="overlay"></div>
        <h1>ellos</h1>
        <h2>{{text}}</h2>
        <span class="animation">-></span>
        <a href="/commerce" class="btn">Shoppa loss!</a>
        <!-- <a nuxt-link to="/commerce" >Shoppa loss!</a> -->
  </header>
</template>

<script>
  import plushAnimals from "static/hang-out-1521445_1920.jpg";

  export default {
    data() {
      return {
        image: plushAnimals,
        text: 'Shoppa babykläder hos Ellos till bra priser. Här hittar du allt för din baby i storlekar 50-92. Handla babykläder enkelt online hos ellos.se',
      }
    }
  }
</script>

<style>
header {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  position: relative;
  background: no-repeat center/center cover;
  position: relative;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
}

h1 {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  font-size: 3rem;
  font-weight: 300;
  font-size: 5rem;
  color: #fff;
}

h2 {
  position: absolute;
  color: #fff;
  width: 45%;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -35%);
  text-align: center;

}

.btn {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  /* background: #FFF; */
  font-size: 1.2rem;
  font-weight: bold;
  color: #fff;
  width: 250px;
  padding: 1rem 2rem;
  text-decoration: none;
  border: 3px solid #fff;
  /* border-radius: 50px; */
  transition: .3s;
  margin-top: 1rem;
}

.btn:hover {
  border: none;
  background: #359E02;
  color: #F94C73
}

.btn:active {
  transform: scale(0.9, 0.9) translateX(-50%);
  size: 90%;
}

.animation {
  position: absolute;
  top: 54%;
  left: 40%;
  transform: translate(-50%, -50%);
  animation: move 4s infinite;
  color: #fff;
  font-size: 1rem;
}

@keyframes move {
  0% {
    background-color: red;
  }

}


@media (max-height: 480px) {
  h2 {
    position: absolute;
    width: 60%
  }

  .btn {
    position: absolute;
    top: 60%;
  }
}

</style>>

