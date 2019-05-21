<template>
    <div class="col-xs-12 col-sm-6 graphic">
        <div class="row dont dashboard-card">
            <div class="col-sm-12">
                <app-chart :chart-data="dataCollection" :options="options"></app-chart>
            </div>
        </div>
    </div>
</template>

<script>
import Chart from './ChartLine.vue'
// import { AppBus } from '../../../index.js'

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
                responsive: true,
                maintainAspectRatio: false,
                title: {
                    display: true,
                    text: 'Vendas (Ano)'
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            maxTicksLimit: 2,
                            max: 700
                        }
                    }],
                    xAxes: [{
                        ticks: {
                            autoSkip: true,
                            maxTicksLimit: 4,
                            maxRotation: 0
                        }
                    }]
                }
            }
        }
    },
    created () {
        /* this.itensFilter();
        this.loadChartValues();

        AppBus.$on('checkedItem', v => {
            this.itensFilter();
            this.clearChartValues();
            this.loadChartValues();

            console.log(this.labels)
            console.log(this.dataValues)
        }) */
    },
    mounted () {
        this.fillData()
    },
    methods: {
        fillData () {
            this.dataCollection = {
                labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
                datasets: [{
                    label: '2017',
                    fill: false,
                    data: [100, 300, 200, 400, 50, 350, 250, 450, 150, 280, 390, 70],
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                },
                {
                    label: '2018',
                    fill: false,
                    data: [250, 387, 248, 532, 111, 490, 192, 248, 374, 301, 87, 40],
                    backgroundColor: 'rgba(153, 102, 255, 0.2)',
                    borderColor: 'rgba(153, 102, 255, 1)',
                    borderWidth: 1
                },
                {
                    label: '2019',
                    fill: false,
                    data: [278, 345, 378, 328, 144, 217, 165, 364, 338, 477, 213, 95],
                    backgroundColor: 'rgba(255, 159, 64, 0.2)',
                    borderColor: 'rgba(255, 159, 64, 1)',
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
                this.dataValues.push(v.value)
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

<style>
    .dashboard-card {
        background-color: white;
        border-radius: 1%;
        height: 100%;
    }
    .graphic {
        width: 100%;
        height: 387px;
    }
    .chartjs-size-monitor {
        border: 0;
        margin: 0;
        height: 100%;
        width: 100%;
        display: block;
    }
    #line-chart {
        width: 100% !important;
        height: 385px !important;
    }
</style>
