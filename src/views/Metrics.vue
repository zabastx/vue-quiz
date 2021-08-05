<i18n>
{
    "en": {
        "title1": "What's your height and age?",
        "title2": "Last Question!",
        "subTitle": "Your Weight",
        "height": "Height",
        "age": "Age",
        "years": "years",
        "curWeight": "Current weight",
        "goalWeight": "Goal weight"
    },
    "fr": {
        "title1": "Quelle est votre taille et votre âge?",
        "title2": "Dernière question!",
        "subTitle": "Votre poids",
        "height": "Hauteur",
        "age": "Âge",
        "years": "ans",
        "curWeight": "Poids actuel",
        "goalWeight": "Poids cible"
    }
}
</i18n>

<template>
    <main>
        <transition-group name="fade" mode="out-in">
            <div v-if="firstQ">
                <h2>{{$t('title1')}}</h2>
                <label>
                    <p>{{$t('height')}}: </p> 
                    <input type="number" min="125" max="225" v-model="height" @blur="handleInput('height', maxHeight, minHeight)">
                    <p> cm, 125-225</p>
                </label>
                <label>
                    <p>{{$t('age')}}: </p> 
                    <input type="number" min="21" max="69" v-model="age" @blur="handleInput('age', maxAge, minAge)">
                    <p>{{$t('years')}}, 21-69</p>
                </label>
                <my-button class="yes" @click="firstQ = !firstQ" :disabled="!form1" />
            </div>
            <div v-else>
                <h2>{{$t('title2')}}</h2>
                <h3>{{$t('subTitle')}}</h3>
                <label>
                    <p>{{$t('curWeight')}} (kg): </p> 
                    <input type="number" min="55" max="255" v-model="curWeight" @blur="handleCurrent">
                    <p>kg, 55-255</p>
                </label>
                <label>
                    <p>{{$t('goalWeight')}} (kg): </p> 
                    <input type="number" min="45" max="255" v-model="goalWeight" @blur="handleGoal">
                    <p>kg, 45-255</p>
                </label>
                <my-button class="yes" @click="toResults" :disabled="!form2" />
            </div>
        </transition-group>
    </main>
</template>

<script>
export default {
    data() {
        return {
            firstQ: true,
            minHeight: 125,
            minAge: 21,
            minCurWeight: 55,
            minGoalWeight: 45,
            maxHeight: 225,
            maxAge: 69,
            maxCurWeight: 255,
            maxGoalWeight: 255
        }
    },

    computed: {
        height: {
            get() {
                return this.$store.state.height
            },
            set(val) {
                this.$store.commit('setState', {
                    name: 'height',
                    val
                })
            }
        },
        age: {
            get() {
                return this.$store.state.age
            },
            set(val) {
                this.$store.commit('setState', {
                    name: 'age',
                    val
                })
            }
        },
        curWeight: {
            get() {
                return this.$store.state.curWeight
            },
            set(val) {
                this.$store.commit('setState', {
                    name: 'curWeight',
                    val
                })
            }
        },
        goalWeight: {
            get() {
                return this.$store.state.goalWeight
            },
            set(val) {
                this.$store.commit('setState', {
                    name: 'goalWeight',
                    val
                })
            }
        },
        form1() {
            return !!(+this.height && +this.age)
        },
        form2() {
            return !!(+this.curWeight && +this.goalWeight)
        }
    },

    methods: {
        handleGoal() {
            if ((+this.goalWeight + 5) >= this.curWeight) {
            this.goalWeight = this.curWeight - 5
            }
        },
        handleCurrent() {
            if ((+this.goalWeight + 5) >= this.curWeight) {
            this.curWeight = this.goalWeight + 5
            }
        },
        handleInput(target, max, min) {
            if (+this[target] > max) this[target] = max
            if (+this[target] < min) this[target] = min
        },
        toResults() {
            this.$emit('loading')
            this.$router.push('./results')
        }
    }
}
</script>

<style scoped>
main {
    position: relative;
}

main > div {
    width: 100%;
    display: flow-root;
}

.fade-item {
    display: inline-block;
    margin-right: 10px;
}
.fade-enter-active,
.fade-leave-active {
    transition: all 500ms ease;
}
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    position: absolute;
}

input {
    font-size: 1rem;
    width: 75px;
    text-align: center;
}
</style>

