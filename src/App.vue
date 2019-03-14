<template>
  <div>
    <app-navbar></app-navbar>
    <div class="container">
        <router-view></router-view>
    </div>
    <hr>
    <div class="container">
      <div class="row">
        <app-footer></app-footer>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarComponent from './components/shared/NavbarComponent.vue'
import FooterComponent from './components/shared/FooterComponent.vue'

export default {
    components: {
        'app-navbar': NavbarComponent,
        'app-footer': FooterComponent
    }
}
</script>
