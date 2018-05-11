<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand"
         href="#">專案流程管理</a>
      <button class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse"
           id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link"
               href="#">Home
              <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link"
               href="#">Link</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle"
               href="#"
               id="navbarDropdown"
               role="button"
               data-toggle="dropdown"
               aria-haspopup="true"
               aria-expanded="false">
              Dropdown
            </a>
            <div class="dropdown-menu"
                 aria-labelledby="navbarDropdown">
              <a class="dropdown-item"
                 href="#">Action</a>
              <a class="dropdown-item"
                 href="#">Another action</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item"
                 href="#">Something else here</a>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled"
               href="#">Disabled</a>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2"
                 type="search"
                 placeholder="Search"
                 aria-label="Search">
          <button class="btn btn-outline-success my-2 my-sm-0"
                  type="submit">Search</button>
        </form>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
// firebase 設定檔
let config = {
  apiKey: 'AIzaSyDh3-r1jj4yKC6YuazflECugU91Ru7Kl2Y',
  authDomain: 'ml-kit-ea899.firebaseapp.com',
  databaseURL: 'https://ml-kit-ea899.firebaseio.com/',
  storageBucket: 'ml-kit-ea899.appspot.com'
}
// 初始化 firebase 載入設定檔
let app = firebase.initializeApp(config)

export default {
  name: 'App',

  data() {
    return {}
  }
}
</script>

<style lang="scss">
@import '../node_modules/bootstrap/scss/bootstrap.scss';
</style>
