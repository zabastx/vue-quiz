<i18n>
{
    "en": {
        "goals": [
            "Burn fat",
            "Improve metabolism",
            "Improve digestion",
            "Get more energy",
            "Better sleep",
            "Lose weight without fitness",
            "Lose weight without diet"
        ],
        "title": "What are your goals for taking Keto nutritional supplements?",
        "subtitle": "(select as many as you like)"
    },
    "fr": {
        "goals": [
            "Brûler les graisses",
            "Améliorer le métabolisme",
            "Améliorer la digestion",
            "Obtenir plus d\'énergie",
            "Meilleur sommeil",
            "Perdre du poids sans remise en forme",
            "Perdre du poids sans régime"
        ],
        "title": "Quels sont vos objectifs en prenant des compléments alimentaires Keto?",
        "subtitle": "(sélectionnez-en autant que vous le souhaitez)"
    }
}
</i18n>

<template>
    <main>
        <h2>{{$t('title')}}</h2>
        <p class="subtitle">
            {{$t('subtitle')}}
        </p>
        <my-checkbox
        v-for="goal in [0,1,2,3,4,5,6]"
        :key="goal"
        :value="$t(`goals.${goal}`)"
        v-model:goals="selectedGoals"
        >{{$t(`goals.${goal}`)}}</my-checkbox>
        <my-button :disabled="selectedGoals.length < 1"
        @click="next"
        class="yes"/>
    </main>
</template>

<script>
export default {
    data() {
        return {
            selectedGoals: []
        }
    },
    methods: {
        next() {
            this.$store.commit('setState', {
                name: 'goals',
                val: this.selectedGoals
            })
            this.$router.push('./metrics')
        }
    }
}
</script>

<style lang="scss" scoped>

</style>