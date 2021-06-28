<template>
  <div>
    <header>
      <nav>
        <div class="logo">
          <h4>les saintes boucles</h4>
        </div>
        <div :class="['nav-links', burger ? 'nav-active' : 'displaynone']">
          <div><router-link :to="{ name: 'home' }">Home</router-link></div>
          <div>
            <router-link :to="{ name: 'prediction' }">Prediction</router-link>
          </div>
          <div>
            <span id="deroulant" @click="togglederoulant">Boucles ▼</span>
            <div
              id="sousmenu"
              :class="sousmenu ? '' : 'toggleboucle'"
              :v-model="sousmenu"
            >
              <span
                ><router-link :to="{ name: 'leserv' }"
                  >Serveur</router-link
                ></span
              >
              <span
                ><router-link :to="{ name: 'lamano' }">Mano</router-link></span
              >
              <span
                ><router-link :to="{ name: 'losvagos' }"
                  >Vagos</router-link
                ></span
              >
              <span
                ><router-link :to="{ name: 'lesverts' }"
                  >Verts</router-link
                ></span
              >
              <span
                ><router-link :to="{ name: 'police' }"
                  >Police</router-link
                ></span
              >
            </div>
          </div>
          <div>
            <router-link :to="{ name: 'faq' }">FAQ </router-link>
          </div>
          <div><router-link :to="{ name: 'clips' }">Clips</router-link></div>
          <div><router-link :to="{ name: 'memes' }">Memes</router-link></div>
          <div><router-link :to="{ name: 'bingo' }">BINGO</router-link></div>
        </div>
        <div :class="['burger', burger ? 'toggle' : '']" @click="toggleburger">
          <div class="line1"></div>
          <div class="line2"></div>
          <div class="line3"></div>
        </div>
      </nav>
    </header>
    <div id="fixednav"></div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      sousmenu: false,
      burger: false,
    };
  },
  methods: {
    togglederoulant: function() {
      this.sousmenu = !this.sousmenu;
    },
    toggleburger: function() {
      this.burger = !this.burger;
    },
  },
  watch: {
    burger: function(val) {
      const children = this.$el.querySelectorAll(".nav-links > div");
      children.forEach(function(link, index) {
        if (val) {
          link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 +
            0.5}s`;
        } else {
          link.style.animation = "";
        }
      });
    },
    $route() {
      this.toggleburger();
    },
  },
};
</script>

<style>
header {
  position: fixed;
}
nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 8vh;
  min-width: 100vw;
  background-color: #1e1e1e;
  font-family: "Poppins", sans-serif;
}

.logo {
  color: rgb(226, 226, 226);
  text-transform: uppercase;
  letter-spacing: 3px;
  font-size: 20px;
}

.nav-links {
  display: flex;
  width: 50%;
  justify-content: space-around;
  padding-bottom: 50px;
  padding-top: 20px;
}

.nav-links a {
  color: rgb(226, 226, 226);
  text-decoration: none;
  letter-spacing: 2px;
  font-weight: bold;
  font-size: 14px;
}

.burger {
  display: none;
}

.burger div {
  width: 25px;
  height: 3px;
  background-color: rgb(226, 226, 226);
  margin: 5px;
  transition: all 0.3s ease;
}

@media screen and (max-width: 1320px) {
  .nav-links {
    position: absolute;
    right: 0;
    height: 92vh;
    top: 8vh;
    background-color: #1e1e1e;
    display: flex;
    flex-direction: column;
    flex-basis: auto;
    align-items: center;
    justify-content: space-around;
    width: 30%;
    transform: translateX(100%);
    transition: transform 0.5s ease-in;
  }
  .displaynone {
    display: none;
  }
  .nav-links > div {
    opacity: 0;
  }
  .burger {
    display: block;
    cursor: pointer;
  }

  #sousmenu {
    padding-top: 20px !important;
    margin: 0 !important;
    position: relative !important;
    flex-direction: column !important;
    background-color: transparent !important;
  }
}

.nav-active {
  transform: translateX(0%);
}

@keyframes navLinkFade {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0px);
  }
}

.toggle .line1 {
  transform: rotate(-45deg) translate(-5px, 6px);
}
.toggle .line2 {
  opacity: 0;
}
.toggle .line3 {
  transform: rotate(45deg) translate(-5px, -6px);
}

#sousmenu {
  background-color: #1e1e1e;
  position: absolute;
  display: flex;
  flex-direction: row;
  margin-top: 10px;
}
#deroulant {
  cursor: pointer;
  min-height: 8vh;
  background-color: #1e1e1e;
  font-family: "Poppins", sans-serif;
  color: rgb(226, 226, 226);
  text-decoration: none;
  letter-spacing: 2px;
  font-weight: bold;
  font-size: 14px;
}

.toggleboucle {
  display: none !important;
}

#sousmenu > span {
  margin: 0 10px 0 10px;
}
</style>
