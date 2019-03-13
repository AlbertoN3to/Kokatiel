<template>
    <li class="list-group-item">
        <div class="checkbox">
            <label><input type="checkbox" :value="checkboxName"><span>{{ checkboxName }}</span></label>
        </div>
    </li>
</template>

<script>
export default {
    props: ['checkboxName'],
}
</script>

<style scoped>
    span {
        margin-left: 10px;
    }
</style>


