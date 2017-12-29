<template>
    <table class="table table-striped table-hover table-sm .table-responsive-sm header-fixed">
        <thead class="table-primary"><tr>
            <th style="width: 2%" class=""><input type="checkbox" title="q" v-bind:onchange="selectAll()"></th>
            <th style="width: 5%" class="">#</th>
            <th style="width: 3%" class="">Пк</th>
            <th style="width: 10%" class="">Поступление</th>
            <th style="width: 8%" class="">Доставка</th>
            <th style="width: 8%" class="">Статус</th>
            <th style="width: 8%" class="name">Имя</th>
            <th style="width: 20%" class="name">Адрес</th>
            <th style="width: 5%" class="pay">Время</th>
            <th style="width: 7%" class="pay">Оплата</th>
            <th style="width: 8%" class="sum">Стоимость</th>
            <th style="width: 8%" class="courier">Редактор</th>
            <th style="width: 8%" class="courier">Курьер</th>
        </tr></thead>
        <tbody>
        <!--:key="row.id"-->
        <tr v-for="row in orders"
            v-bind:onclick="printRow(row)">
            <td style="width: 2%"><input v-bind:id="'chk_' + row.id" type="checkbox" title="q"></td>
            <td style="width: 5%">{{row.id}}</td>
            <td style="width: 3%">{{row.pack}}</td>
            <td style="width: 10%">{{row.date}}</td>
            <td style="width: 8%">{{row.date_delivery}}</td>
            <td style="width: 8%">{{row.realization}}</td>
            <td style="width: 8%">{{row.name}}</td>
            <td style="width: 20%" v-html="row.delivery_address"></td>
            <td style="width: 5%">{{row.time_delivery}}</td>
            <td style="width: 7%">{{row.form_pay}}</td>
            <td style="width: 8%">{{row.sum}}</td>
            <td style="width: 8%">{{row.edit}}</td>
            <td style="width: 8%">{{row.courier}}</td>
        </tr>
        </tbody>
    </table>
</template>

<script>
    import VLink from './VLink.vue';
    export default {
        components: {
            VLink
        },
        name: "v-table",
        data() {
            console.log(this);
            return {
                orders: this.$root.orders
            }
        },
        methods: {
            printRow(row) {
                // alert('click');
                // console.log(row);
            },
            selectAll() {
                // let inputs = document.querySelectorAll('input[id|="#chk"]');
                // console.log(inputs);
                // // console.log(().length)
            }
        }
    }

</script>

<style scoped>


    /* header fixed */
    .header-fixed {
        width: 100%;
        /*min-height: 1px;*/
        height: 650px;
    }

    .header-fixed > thead {

        width: calc(100% - 17px);
    }
    .header-fixed > thead,
    .header-fixed > tbody,
    .header-fixed > thead > tr,
    .header-fixed > tbody > tr,
    .header-fixed > thead > tr > th,
    .header-fixed > tbody > tr > td {
        display: block;
    }

    .header-fixed > tbody > tr:after,
    .header-fixed > thead > tr:after {
        content: ' ';
        display: block;
        visibility: hidden;
        clear: both;
    }

    .header-fixed > tbody {
        overflow-y: scroll;
        height: 100%;
        /*height: 600px;*/
        /*height: calc(100% - 250px);*/
    }

    .header-fixed > tbody > tr > td,
    .header-fixed > thead > tr > th {
        width: calc(100% / 13) ;
        height: 100%;
        float: left;
    }

</style>