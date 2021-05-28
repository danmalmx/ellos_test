<template>
  <header class="image" :style="{backgroundImage: `url(${image})`}">
    <div class="overlay"></div>
        <h1>ellos</h1>
        <h2>{{text}}</h2>
        <span class="pointing-arrow"><i class="fas fa-arrow-up 3x"></i></span>
        <a href="/commerce" class="btn">Shoppa loss!</a>
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
  min-width: 10%;
  min-height: 100vh;
  top: 0;
  left: 0;
  background: no-repeat cover;
  background-position: center cdenter;
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
  top: 30%;
  left: 50%;
  transform: translate(-50%, -30%);
  text-align: center;

}

.btn {
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -45%);
  text-align: center;
  font-size: 1.2rem;
  font-weight: bold;
  color: #fff;
  width: 250px;
  padding: 1rem 2rem;
  text-decoration: none;
  border: 3px solid #fff;
  margin-top: 1rem;
}

.btn:hover {
  transition: all .3s ease-in-out;
  background: #000;
  color: #FFF;
}

.btn:active {
  background: #EEE;
}

.pointing-arrow {
  position: absolute;
  top: 53%;
  left: 50%;
  transform: translate(-50%, -53%);
  animation: move 1s infinite;
  color: #fff;
  font-size: 1rem;
}

@keyframes move {
  0% {
    top: 53%;
  }
  25% {
    top: 52.25%;
  }
  50% {
    top: 52.5%;
  }
  75% {
    top: 52.75%;
  }
  100% {
    top: 53%;  }

}

@media (max-width: 480px) {
  header {
    left: 20%;
  }
  h2 {
    top: 40%;
    width: 70%
  }

  .btn {
    top: 78%;
  }

  .pointing-arrow {
    top: 78%;

  }

  @keyframes move {
    0% {
      top: 89%;
    }
    25% {
      top: 88.25%;
    }
    50% {
      top: 88.5%;
    }
    75% {
      top: 88.75%;
    }
    100% {
      top: 89%;
    }
  }
}

</style>>

