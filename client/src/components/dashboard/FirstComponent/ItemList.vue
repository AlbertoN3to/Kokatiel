<template>
  <li class="list-group-item" @click="checkItem">
    <div class="checkbox">
      <label><input type="checkbox" :value="checkboxName" :checked="checked"><span @click="checkItem">{{ checkboxName }}</span></label>
    </div>
  </li>
</template>

<script>
import { AppBus } from '../../../index.js'

export default {
    props: {
        checkboxName: String,
        checkboxActive: Boolean
    },
    data () {
        return {
            checked: this.checkboxActive
        }
    },
    methods: {
        checkItem () {
            this.checked = !this.checked
            AppBus.$emit('fCheckedItem', this.checkboxName)
        }
    }
}
</script>

<style scoped>
    span {
        margin-left: 10px;
    }
    li, span {
        cursor: pointer;
    }
</style>
