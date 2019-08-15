<template>
    <div>
        <div class="row dont">
            <app-chart-line></app-chart-line>
            <app-another></app-another>
            <app-another></app-another>
        </div>
        <!--<div class="row dont">
            <app-chart-bar :itens="fItens"></app-chart-bar>
            <app-item-list :itens="fItens"></app-item-list>
        </div>-->
    </div>
</template>

<script>
// import ChartBarComponent from './components/dashboard/FirstComponent/ChartComponent.vue'
import ChartLineComponent from './components/dashboard/SecondComponent/ChartComponent.vue'
// import ItemListComponent from './components/dashboard/FirstComponent/ItemListComponent.vue'
import Another from './components/dashboard/SecondComponent/Another.vue'
import { AppBus } from './index.js'

export default {
    components: {
        /* 'app-chart-bar': ChartBarComponent,
        'app-item-list': ItemListComponent, */
        'app-chart-line': ChartLineComponent,
        'app-another': Another
    },
    data () {
        return {
            serviceItens: [],
            fItens: []

        }
    },
    created () {
        /* Simulação de serviço */
        this.serviceItens = [
            { name: 'Roupa', sold: 20 },
            { name: 'Eletronicos', sold: 5 },
            { name: 'Esportes', sold: 7 },
            { name: 'Livros', sold: 12 },
            { name: 'Jogos', sold: 17 }
        ]

        this.moduleItens()

        AppBus.$on('fCheckedItem', v => {
            var index = this.fItens.map((e, i) => {
                return e.name
            }).indexOf(v)

            this.fItens[index].active = !this.fItens[index].active
        })
    },
    methods: {
        moduleItens () {
            this.serviceItens.forEach((v, i) => {
                var obj = { name: v.name, sold: v.sold }
                i <= 1 ? obj.active = true : obj.active = false

                this.fItens.push(obj)
            })

            AppBus.$emit('ready', true)
        }
    }
}
</script>

<style>
  .row.dont {
      margin: 0px;
  }
</style>
