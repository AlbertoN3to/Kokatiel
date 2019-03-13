<template>
    <div class="col-xs-12 col-sm-7">
        <ul class="list-group">
            <item-list v-for="item in itens" :key="item.name" :checkboxName="item.name"></item-list>
        </ul>
    </div>
</template>

<script>
import Itens from './ItemList.vue'

export default {
    props: {
        itens: Array
    },
    data() {
        return {
            itens : itens
        }
    },
    components: {
        'item-list' : Itens
    }
}
</script>

<style scoped>
    div {
        margin-top: 30px;
    } 
</style>


