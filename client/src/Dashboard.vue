<template>
    <div class="row">
        <app-chart :itens="itens"></app-chart>
        <app-item-list :itens="itens"></app-item-list>
    </div>
</template>

<script>
import ChartComponent from './components/dashboard/ChartComponent.vue'
import ItemListComponent from './components/dashboard/ItemListComponent.vue'
import { AppBus } from './index.js'

export default {
    data () {
        return {
            itens: [
                { name: 'Roupa', active: true, value: 20 },
                { name: 'Eletronicos', active: true, value: 5 },
                { name: 'Esportes', active: false, value: 7 },
                { name: 'Livros', active: false, value: 12 },
                { name: 'Jogos', active: false, value: 17 }
            ]
        }
    },
    created() {
        AppBus.$on('checkedItem', v => {
            var index = this.itens.map( (e, i) => {
                return e.name
            }).indexOf(v);

            this.itens[index].active = !this.itens[index].active;
        })
    },
    components: {
        'app-chart': ChartComponent,
        'app-item-list': ItemListComponent
    }
}
</script>
