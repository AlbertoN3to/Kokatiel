<template>
  <div>
    <app-navbar></app-navbar>
    <div class="container">
      <div class="row">
        <app-chart></app-chart>
        <app-item-list :itens="itens"></app-item-list>
      </div>
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
import ChartComponent from './components/dashboard/ChartComponent.vue'
import ItemListComponent from './components/dashboard/ItemListComponent.vue'

export default {
    data() {
        return {
            itens : [
                { name : 'Roupa'},
                { name : 'Eletronicos'},
                { name : 'Esportes'},
                { name : 'Livros'},
                { name : 'Jogos'},
            ]
        }
    },
    components: {
        'app-navbar' : NavbarComponent,
        'app-footer' : FooterComponent,
        'app-chart' : ChartComponent,
        'app-item-list' : ItemListComponent,
    }
}
</script>

