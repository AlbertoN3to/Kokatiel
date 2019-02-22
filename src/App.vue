<template>
<navbar-component/>
    <div class="container">
      <div class="row">
        <div class="col s3" v-for="value in sections" :key="value.name">
          <card-component :section="value.name" :icon="value.icon"/>
        </div>
      </div>
    </div>
</template>
<script>
import NavbarComponent from './components/NavbarComponent.vue'
import CardComponent from './components/CardComponent.vue'
export default {
    components: {
      NavbarComponent,
        CardComponent
    },
    data() {
        return {sections : [{name : "Brinquedos", icon: "toys"}, {name : "Casa", icon : "home"}, {name : "Vestuario", icon : "wc"}, {name : "Informatica", icon : "computer"}, {name : "Games", icon : "videogame_asset"}, {name : "Eletrodomesticos", icon : "tv"}, {name : "Eletronicos", icon : "phone_iphone"}, {name : "Esportes", icon : "rowing"}, {name : "Livros", icon : "storage"}, {name : "Outros", icon : "camera"}]}
    }
}
</script>

