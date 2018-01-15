<template>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top ">
        <v-link class="navbar-brand" href="/manager/orders/">МЕНЕДЖЕР</v-link>
        <!--<a class="navbar-brand" href="/manager/orders/">МЕНЕДЖЕР</a>-->
        <a class="navbar-brand" href="http://185.41.163.7:3000/admin/">АДМИНКА</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse"
                data-target="#navbarToggler" aria-controls="navbarToggler"
                aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse bg-dark " id="navbarToggler">

            <div class="navbar-nav mr-auto d-flex justify-content-end">
                <!--<div class="nav-item dropdown">-->
                    <!--<a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>-->
                    <!--<div class="dropdown-menu">-->
                        <!--&lt;!&ndash;возможно сюда запрятать чаты и &ndash;&gt;-->
                        <!--<a class="dropdown-item" href="#one">one</a>-->
                        <!--<a class="dropdown-item" href="#two">two</a>-->
                        <!--<div role="separator" class="dropdown-divider"></div>-->
                        <!--<a class="dropdown-item" href="#three">three</a>-->
                    <!--</div>-->
                <!--</div>-->

                <div class="nav-item">
                    <span class="nav-link">login: <span class="text-white">helo wurld</span></span>
                </div>
                <!--<div class="nav-item">-->
                    <!--<span class="nav-link">username: <span class="text-white">wurld</span></span>-->
                <!--</div>-->
                <div class="nav-item">
                    <v-link class="nav-link " href="/manager/orders/">Home</v-link>
                </div>
                <div class="nav-item">
                    <v-link class="nav-link " href="/manager/about/">About</v-link>
                </div>
                <div class="nav-item">
                    <v-link class="nav-link " href="/manager/login/">Login</v-link>
                </div>
                <div class="nav-item">
                    <v-link class="nav-link " href="/manager/orders/">Orders</v-link>
                </div>

            </div>

        </div>
    </nav>
</template>

<script>
    import VLink from './VLink.vue';

    export default {
        components: {
            VLink
        },
        name: "v-navbar"
    }
</script>

<style scoped>

</style>