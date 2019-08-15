<template>
    <div class="row">
        <div class="col-xs-12 col-sm-12">
            <div class="row">
                <app-home class="component-home"></app-home>
                <app-text class="component-text"></app-text>
            </div>
        </div>
    </div>
</template>

<script>
import Home from './components/home/HomeComponent.vue'
import HomeText from './components/home/HomeTextComponent.vue'

export default {
    components: {
        'app-home': Home,
        'app-text': HomeText
    }
}
</script>

<style scoped>
    .component-home {
        margin-top: 17%;
        margin-bottom: 10%;
    }
    .component-text {
        margin-top: 10%;
        margin-bottom: 10%;
    }
</style>
