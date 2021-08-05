<i18n src="./locales/home.json"></i18n>

<template>
    <main>
        <h1>{{ $t('title') }}</h1>
        <p class="subtitle">{{ $t('subtitle') }}</p>
        <ul class="list">
            <li v-for="item in ['0','1','2']" :key="item">
                <p>
                    {{ $t(`list.${item}.title`) }}
                </p>
                <span>
                    {{ $t(`list.${item}.text`) }}
                </span>
            </li>
        </ul>
        <div v-show="start">
            <img src="../assets/1_map_CA.png" alt="canada" style="max-width:200px;">
            <p class="subtitle">
                {{ $t('fromCA') }}
            </p>
            <my-button @click="fromCA=true;start=false">{{$t('yes')}}</my-button>
            <my-button @click="start = false" class="no">{{$t('no')}}</my-button>
        </div>
        <p v-show="!start && !fromCA">
            {{ $t('sorry') }}
            <my-button @click="start = true" style="display:block;margin: 15px auto;">{{$t('yes')}}</my-button>
        </p>
        <p v-show="fromCA && !start">
            <my-button @click="next('male')" class="male">{{ $t('mBtn') }}</my-button>
            <my-button @click="next('female')" class="female">{{ $t('femBtn') }}</my-button>
        </p>
    </main>
</template>

<script>
export default {
    data() {
        return {
            start: true,
            fromCA: false
        }
    },

    methods: {
        next(val) {
            this.$store.commit('setState', {
                name: 'gender',
                val
            })
            this.$router.push('./info')
        }
    }
}
</script>

<style lang="scss" scoped>

.list {
    text-align: left;
    list-style: none;
    padding: 0;
    p {
        margin: 0;
        font-size: 1.3rem;
        font-weight: bold;
    }
    span {
        font-size: 1.2rem;
        line-height: 2rem;
    }
    li {
        margin-bottom: 20px;
        padding-top: 3px;
        padding-right: 25px;
        padding-left: 40px;
        background-image: url(../assets/checked.png);
        background-position: 0 0;
        background-size: 25px 25px;
        background-repeat: no-repeat;
        background-attachment: scroll;
        text-align: left;
    }
}
</style>