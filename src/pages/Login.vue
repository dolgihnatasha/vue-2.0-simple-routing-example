<template>
    <main-layout>
        <div class="container mt-3">
            <form method="post" @submit.prevent="onSubmit">
                <div class="form-group">
                    <label for="login">Логин</label>
                    <input v-model="form.login" id="login" class="form-control" placeholder="Логин">
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="pass">Пароль</label>
                    <input  v-model="form.password" type="password" class="form-control" id="pass" placeholder="Пароль">
                </div>

                <button :onsubmit="false" type="submit" class="btn btn-primary">Войти</button>
            </form>
        </div>
        <div>
            {{form}}
        </div>
    </main-layout>
</template>

<script>
    import MainLayout from '../layouts/Main.vue'

    export default {
        data() {
            return {
                form:{
                    login: '',
                    password:''
                }
            }
        },
        components: {
            MainLayout
        },
        methods: {
            onSubmit: function () {
                console.log(this.form); // here should be sended data to server
                return false;
            }
        }
    }
</script>

<style scoped>

</style>