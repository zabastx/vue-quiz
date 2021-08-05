<i18n src="./locales/about.json"></i18n>

<template>
    <main>
        <h2>{{$t('title')}}</h2>
        <p>
            {{ $t('p1') }}
        </p>
        <p>
            {{ $t('p2') }}
        </p>
        <img :src="require(`@/assets/4_1_${$i18n.locale}.jpg`)" alt="ketosis benefits">
        <p>
            {{ $t('p3') }}
        </p>
        <p>
            {{ $t('p4') }}
        </p>
        <img :src="require(`@/assets/4_2_${$i18n.locale}.jpg`)" alt="what is ketosis">
        <p>
            {{ $t('p5') }}
        </p>
        <p>
            {{ $t('p6') }}
        </p>
        <img :src="require(`@/assets/4_cetosis_${$i18n.locale}.jpg`)" alt="diagram">
        <p style="text-align: center;">
            {{ $t('p7') }}
        </p>
        <my-button @click="next">{{$t('yes')}}</my-button>
    </main>
</template>

<script>
export default {
    methods: {
        next() {
            this.$router.push('./activity')
        }
    }
}
</script>

<style scoped>
p {
    text-align: left;
}
</style>