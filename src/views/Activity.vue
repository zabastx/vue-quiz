<i18n src='./locales/activity.json'>
</i18n>

<template>
    <main>
        <transition-group name="fade" tag="div" class="transition">
            <div class="stage1" v-show="stage===0" key="1">
                <h2>{{ $t('title1') }}</h2>
                <my-button class="ans" @click="next('Low')">{{$t('Low')}}</my-button>
                <my-button class="ans" @click="next('Medium')">{{$t('Medium')}}</my-button>
                <my-button class="ans" @click="next('High')">{{$t('High')}}</my-button>
            </div>
            <div class="stage2" v-show="stage===1" key="2">
                <h2>{{ $t('title2') }}</h2>
                <my-button class="ans" @click="next('Morning')">{{$t('Morning')}}</my-button>
                <my-button class="ans" @click="next('Day')">{{$t('Day')}}</my-button>
                <my-button class="ans" @click="next('Evening')">{{$t('Evening')}}</my-button>
                <my-button class="ans" @click="next('Night')">{{$t('Night')}}</my-button>
            </div>
            <div class="stage3" v-show="stage===2" key="3">
                <h2>{{ $t('title3') }}</h2>
                <p>
                    {{ $t('p1') }}
                </p>
                <p>
                    {{ $t('p2') }}
                </p>
                <my-button class="ans" @click="next('Never')">{{$t('Never')}}</my-button>
                <my-button class="ans" @click="next('Sometimes')">{{$t('Sometimes')}}</my-button>
                <my-button class="ans" @click="next('Often')">{{$t('Often')}}</my-button>
            </div>
            <div class="stage4" v-show="stage===3" key="4">
                <h2>{{ $t('title4') }}</h2>
                <p>
                    {{ $t('p3') }}
                </p>
                <my-button class="ans" @click="next('Never')">{{$t('Never')}}</my-button>
                <my-button class="ans" @click="next('Sometimes')">{{$t('Sometimes')}}</my-button>
                <my-button class="ans" @click="next('Often')">{{$t('Often')}}</my-button>
            </div>
        </transition-group>
    </main>
</template>

<script>
export default {
    data() {
        return {
            stage: 0,
            answers: ['dailyAct', 'timeTired', 'digest', 'cravings']
        }
    },

    methods: {
        next(val) {
            this.$store.commit('setState', {
                name: this.answers[this.stage],
                val
            })
            if (this.stage===3) {
                this.$router.push('./goals')
            }
            this.stage++
        }
    }
}
</script>

<style scoped>
.transition {
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
    transform: translateX(30px);
}

.fade-leave-to {
    position: absolute;
}

</style>