<template>
    <div class="col-xs-12 col-sm-5">
        <app-chart :chart-data="dataCollection" :options="options"></app-chart>
    </div>
</template>

<script>
import Chart from './ChartBar.vue'
import { AppBus } from '../../../index.js'

export default {
    props: {
        itens: Array
    },
    data () {
        return {
            itensActive: null,
            dataCollection: {},
            labels: [],
            dataValues: [],
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        }
    },
    created () {
        AppBus.$on('fCheckedItem', v => {
            this.itensFilter()
            this.clearChartValues()
            this.loadChartValues()

            console.log(this.labels)
            console.log(this.dataValues)
        })
    },
    mounted () {
        this.fillData()
        this.itensFilter()
        this.clearChartValues()
        this.loadChartValues()
    },
    methods: {
        fillData () {
            this.dataCollection = {
                labels: this.labels,
                datasets: [{
                    label: '# of Votes',
                    data: this.dataValues,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            }

            console.log(this.dataCollection.datasets[0].data)
        },
        itensFilter () {
            this.itensActive = this.itens.filter((value) => {
                return value.active === true
            })
        },
        loadChartValues () {
            this.itensActive.forEach((v, i) => {
                this.labels.push(v.name)
                this.dataValues.push(v.sold)
            })

            this.fillData()
        },
        clearChartValues () {
            this.labels = []
            this.dataValues = []
        }
    },
    components: {
        'app-chart': Chart
    }
}
</script>
