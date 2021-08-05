<i18n src="./locales/results.json"></i18n>

<template>
    <main>
        <div v-if="loaded">
            <h1>{{ $t('title') }}</h1>
            <p>{{ $t('p1') }}</p>
            <p>{{ $t('p2') }}</p>
            <p>
                <span class="red" style="font-size: 3rem;">{{resultWeight}} </span>
                <span>kg</span>
            </p>
            <p>{{ $t('by') }} <span class="red" style="font-size: 2rem;">{{date}}</span></p>
            <p>{{ $t('p3') }}</p>
            <div class="flex">
                <div class="flex-item cards similar">
                    <h3 class="red">88%</h3>
                    <p>{{ $t('p4-1') }} <span class="red" style="font-size: 1.2rem;">{{similar}}</span> {{ $t('p4-2') }}</p>
                </div>
                <div class="flex-item cards">
                    <h3>{{monthYear}}</h3>
                    <div class="week">
                        <div class="week-day" v-for="day in currentWeek" :key="day.num">
                            <p>{{day.day}}</p>
                            <p>{{day.num}}</p>
                        </div>
                    </div>
                    <p>
                        <span class="red">-{{possibleLoss.toPrecision(2)}}</span>kg
                    </p>
                    <p>{{ $t('p5') }}</p>
                </div>
            </div>
            <h2>{{ $t('title2') }}</h2>
            <div class="flex">
                <div class="flex-item">
                    <h3>{{ $t('carbs') }}</h3>
                    <p>
                        <span class="red">30</span>g
                    </p>
                </div>
                <div class="flex-item">
                    <h3>{{ $t('protein') }}</h3>
                    <p>
                        <span class="red">109</span>g
                    </p>
                </div>
                <div class="flex-item">
                    <h3>{{ $t('fat') }}</h3>
                    <p>
                        <span class="red">181</span>g
                    </p>
                </div>
            </div>
            <p>{{ $t('p6') }}</p>
            <img :src="require(`../assets/table2_${$i18n.locale}.png`)" alt="summary">
            <p>
                {{ $t('p7') }}
            </p>
            <h2>{{ $t('title3') }}</h2>
            <p>
                {{ $t('p8-1') }} <span class="red" style="font-size: 1.2rem;">{{ $t('p8-2') }}</span>
            </p>
            <img src="../assets/table3.png" alt="summary">
            <p>
                {{ $t('p9') }}
            </p>
            <h2>{{ $t('title4') }}</h2>
            <p>
                {{ $t('p10-1') }} <span class="red" style="font-size: 1.2rem;">{{ $t('p10-2') }}</span>
            </p>
            <img src="../assets/table4.jpg">
            <p>
                {{ $t('p11') }}
            </p>
            <h2>{{ $t('title5') }}</h2>
            <div class="metabolic">
                <p>{{ $t('p12') }}</p>
                <p>{{age}}</p>
            </div>
            <div class="metabolic">
                <p>{{ $t('title5') }}</p>
                <p>{{+age+7}}</p>
            </div>
            <p>
                {{ $t('p13') }}
            </p>
            <p>
                {{ $t('p14') }}
            </p>
            <p>
                {{ $t('p15') }}
            </p>
            <p>
                {{ $t('p16') }}
            </p>
            <p>
                {{ $t('p17') }}
            </p>
            <p>
                {{ $t('p18') }}
            </p>
            <p>
                {{ $t('p19') }}
            </p>
            <my-button class="yes" href="#">{{ $t('cta') }}</my-button>
        </div>
    </main>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
    data() {
        return {
            loaded: true
        }
    },

    computed: {
        ...mapState([
            'info',
            'dailyAct',
            'timeTired',
            'digest',
            'cravings',
            'goals',
            'height',
            'age',
            'currentWeight',
            'goalWeight'
        ]),
        ...mapGetters(['currentWeek', 'resultWeight', 'possibleLoss', 'similar', 'date', 'monthYear'])
    }
}
</script>

<style>
.stg13 img {
    width: 100%;
    max-width: initial;
}
.stg13 p {
    text-align: center;
}

.red {
    color: #ff0004;
    font-weight: bold;
}

.metabolic {
    display: flex;
    justify-content: center;
    width: 100%;
}

.metabolic p {
    width: 100%;
    font-weight: bold;
}

.flex {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
}

.flex-item {
    flex: 1 1 175px;
    font-size: 1.3rem;
    padding: 20px 10px;
}

.cards {
    box-shadow: 0 0 10px grey;
    border-radius: 5px;
    flex: 1 1 300px;
}

.similar {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.flex-item .red {
    font-size: 3rem;
}

.flex-item h3 {
    margin: 0 auto;
}

.week {
    display: flex;
}

.week-day {
    width: calc(100% / 7);
}

.week-day p {
    font-size: .9rem;
}
</style>