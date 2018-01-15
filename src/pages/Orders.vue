<template>
    <main-layout>
        <div class="dived">Orders</div>
        <v-table></v-table>
    </main-layout>
</template>

<script>
    import MainLayout from '../layouts/Main.vue';
    import VTable from "../components/VTable.vue";

    export default {
        name: "orders",
        components: {
            VTable,
            MainLayout
        },
        data() {
            return {
                city: {
                    0: 'все',
                    1: 'Екатеринбург',
                    2: 'Челябинск',
                    3: 'Пермь',
                    4: 'Тюмень',
                    8: 'Уфа',
                    5: 'Нижний Тагил',
                    'post': 'Почта',
                    'carry': {
                        0: 'Все',
                        1: 'Завокзальная',
                        2: 'Еще один адрес'
                    },
                    10: 'Брак'
                }
            }
        }
    }
</script>

<style scoped>
    .dived{
        height: 170px;
    }

</style>