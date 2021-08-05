<i18n>
{
    "en": {
        "title": "How familiar are you with the Keto Capsules?",
        "1": "I know the basics",
        "2": "I deeply understand the issue",
        "3": "Not familiar at all"
    },

    "fr": {
        "title": "Connaissez-vous les gélules Keto?",
        "1": "Pas du tout familier",
        "2": "Je connais les bases",
        "3": "Je comprends parfaitement le problème"
    }
}
</i18n>

<template>
    <main>
        <h2>{{ $t('title') }}</h2>
        <my-button class="ans" @click="next($t('1'))">{{ $t('1') }}</my-button>
        <my-button class="ans" @click="next($t('2'))">{{ $t('2') }}</my-button>
        <my-button class="ans" @click="next($t('3'))">{{ $t('3') }}</my-button>
    </main>
</template>

<script>
export default {
    methods: {
        next(val) {
            this.$store.commit('setState', {
                name: 'info',
                val
            })
            this.$router.push('./about')
        }
    }
}
</script>
