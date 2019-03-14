<template>
    <div class="col-xs-12 col-sm-6">
        <div class="form-group">
            <label for="email">{{ emailLabel }}</label>
            <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Seu email">
        </div>
        <div class="form-group">
            <label for="password">{{ passwordLabel }}</label>
            <input type="password" class="form-control" id="password" placeholder="Senha">
        </div>
        <button type="button" class="btn btn-primary" @click="submitForm">{{ buttonText }}</button>
    </div>
</template>
<script>
export default {
    data () {
        return {
            emailLabel: 'Email',
            passwordLabel: 'Senha',
            buttonText: 'Login'
        }
    },
    methods: {
        validateFrom () {
            
        },
        submitForm () {
            this.$router.push('/dashboard')
        }
    }
}
</script>

