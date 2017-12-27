<template>
   <div class="boxLoading">
        <div class="preloader">
            <div></div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@-webkit-keyframes spin {
  0% {
    transform: rotate(0deg); /* Firefox 16+, IE 10+, Opera */
  }
  100% {
    transform: rotate(360deg); /* Firefox 16+, IE 10+, Opera */
  }
}
@-moz-keyframes spin {
  0% {
    -moz-transform: rotate(0deg); /* Firefox 16+*/
  }
  100% {
    -moz-transform: rotate(360deg); /* Firefox 16+*/
  }
}
@keyframes spin {
  0% {
    transform: rotate(0deg); /* Firefox 16+, IE 10+, Opera */
  }
  100% {
    transform: rotate(360deg); /* Firefox 16+, IE 10+, Opera */
  }
}
.boxLoading {
  position: fixed;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100%;
  z-index: 1003;
}
.preloader {
  position: absolute;
  top: 30%;
  left: 50%;
  width: 2rem;
  height: 2rem;
  margin-left: -1rem;
  border-radius: 0.12rem;
  background: rgba(0, 0, 0, 0.5);
  & > div {
    display: block;
    position: relative;
    left: 50%;
    top: 50%;
    width: 1rem;
    height: 1rem;
    margin: -0.5rem 0 0 -0.5rem;
    border-radius: 50%;
    border: 0.06rem solid transparent;
    border-top-color: #eee;
    transform: translate3d(0, 0, 0);
    animation: spin 2s linear infinite; /* Chrome, Firefox 16+, IE 10+, Opera */
    &:before {
      content: "";
      position: absolute;
      top: 5px;
      left: 5px;
      right: 5px;
      bottom: 5px;
      border-radius: 50%;
      border: 3px solid transparent;
      border-top-color: #eee;
      -webkit-animation: spin 3s linear infinite; /* Chrome, Opera 15+, Safari 5+ */
      animation: spin 3s linear infinite; /* Chrome, Firefox 16+, IE 10+, Opera */
    }
    &:after {
      content: "";
      position: absolute;
      top: 15px;
      left: 15px;
      right: 15px;
      bottom: 15px;
      border-radius: 50%;
      border: 3px solid transparent;
      border-top-color: #eee;
      animation: spin 1.5s linear infinite; /* Chrome, Firefox 16+, IE 10+, Opera */
    }
  }
}
</style>

