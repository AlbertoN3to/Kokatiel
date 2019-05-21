<template>
    <div class="col-sm-3">
        <div class="row dont dashboard-card">
            <div class="col-sm-12">
                <div class="average" v-for="x in 3" :key="x">
                    <h4>Vendas (Avg)</h4>
                    <div class="bar">
                        <div class="bar-progress" :style="{width: randomNumber()+'%'}"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            sWidth: 100
        }
    },
    methods: {
        randomNumber () {
            return Math.floor(Math.random() * 101)
        }
    }
}
</script>

<style scoped>
    h4 {
        text-align: center;
        margin-top: 1rem;
        margin-bottom: 1rem;
    }
    .bar {
        display: table;
        margin: 0 auto;
        width: 80%;
        height: 22px;
        border: 1px solid black;
        background-color: white;
    }
    .bar-progress {
        background-color: #22d622;
        height: 100%;
    }
    .average {
        margin-bottom: 50px;
    }
</style>
