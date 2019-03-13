<template>
<div class="col-xs-12 col-sm-12">
    <footer class="col-xs-12 col-sm-12">
            <span class="col-xs-12" :class="{'float-left' : !mobile, 'center' : mobile}">Contato : {{ contact }}</span> <span class="col-xs-12" :class="{'float-right' : !mobile, 'center' : mobile}">{{ copyright }}</span>
    </footer>
</div>
</template>

<script>
export default {
    data() {
        return {
            contact : '+55 (81) 99619-0382',
            copyright : 'Copyright© 2019 Kokatiel. Todos os direitos reservados.',
            mobile : window.innerWidth <= 576 ? true : false,
        }
    }
}
</script>

<style scoped>
    div {
        margin-bottom: 20px;
    }
    .center {
        display: table;
        margin: 0 auto;
    }
</style>

