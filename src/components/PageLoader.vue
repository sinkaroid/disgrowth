<template>
  <div class="page-loader" v-if="!isloaded">
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
  </div> 
</template>

<script>
  export default {
    data: () => {
      return {
        isloaded: false
      }
    },
    mounted() {
        setTimeout(() => {
            this.isloaded = true
        }, 3000)
      }
  }
</script>

<style lang="scss" scoped>
   $colors: #8CC271, #69BEEB, #F5AA39, #E9643B;

  // -----------------------------------------------------

  .page-loader {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgb(255, 255, 255);
    z-index: 999;
  }

  // -----------------------------------------------------

  .cube{
    width: 40px;
    height: 40px;
    margin-right: 10px;

    @for $i from 1 through length($colors) {
      &:nth-child(#{$i}) {
        background-color: nth($colors, $i);
      }
    }

    &:first-child {
      animation: left 1s infinite;
    }

    &:last-child {
      animation: right 1s infinite .5s;
    }
  }

  // -----------------------------------------------------

  @keyframes left {
    40% {
      transform: translateX(-60px);
    }
    50% {
      transform: translateX(0);      
    }
  }

  @keyframes right {
    40% {
      transform: translateX(60px);
    }
    50% {
      transform: translateX(0);
    }
  }
</style>