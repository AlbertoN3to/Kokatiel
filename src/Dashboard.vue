<template>
  <div class="container">
      <div class="row">
        <app-chart></app-chart>
        <app-item-list :itens="itens"></app-item-list>
      </div>
    </div>
</template>

<script>
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
        'app-chart' : ChartComponent,
        'app-item-list' : ItemListComponent,
    }
}
</script>

