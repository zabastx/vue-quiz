<i18n>
{
    "en": {
        "loadText": [
            "Identifying Dietary Profile...",
            "Analyzing Root Cause Factors...",
            "Capsules To Help Eliminate Fatigue...",
            "Capsules For Metabolism Repair...",
            "Capsules That Increase Energy...",
            "Preparing personalized report..."
        ]
    },
    "fr": {
        "loadText": [
            "Identifier le profil diététique...",
            "Des gélules pour aider à éliminer la fatigue...",
            "Analyser les facteurs de causes profondes...",
            "Capsules pour réparer le métabolisme...",
            "Des gélules qui augmentent l\'énergie...",
            "Préparer un rapport personnalisé..."
        ]
    }
}
</i18n>

<template>
    <div class="loading">
        <div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        <p>{{load}} %</p>
        <p>{{loadText}}</p>
    </div>
</template>

<script>
export default {
    name: 'spinner',
    data() {
        return {
            load: 0
        }
    },

    computed: {
        loadText() {
            const step = Math.floor(this.load / 19)
            return this.$t(`loadText.${step}`)
        }
    },

    created() {
        const load = setInterval(() => {
            this.load++
            if (this.load >= 100) {
                clearInterval(load)
                this.$emit('loaded')
          }
        }, 100)
    }
}
</script>

<style scoped>
p {
    font-size: 1.5rem;
}

.loading {
  animation: fade-out 300ms linear;
}

.lds-spinner {
    color: black;
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }
  .lds-spinner div {
    transform-origin: 40px 40px;
    animation: lds-spinner 1.2s linear infinite;
  }
  .lds-spinner div:after {
    content: " ";
    display: block;
    position: absolute;
    top: 3px;
    left: 37px;
    width: 6px;
    height: 18px;
    border-radius: 20%;
    background: black;
  }
  .lds-spinner div:nth-child(1) {
    transform: rotate(0deg);
    animation-delay: -1.1s;
  }
  .lds-spinner div:nth-child(2) {
    transform: rotate(30deg);
    animation-delay: -1s;
  }
  .lds-spinner div:nth-child(3) {
    transform: rotate(60deg);
    animation-delay: -0.9s;
  }
  .lds-spinner div:nth-child(4) {
    transform: rotate(90deg);
    animation-delay: -0.8s;
  }
  .lds-spinner div:nth-child(5) {
    transform: rotate(120deg);
    animation-delay: -0.7s;
  }
  .lds-spinner div:nth-child(6) {
    transform: rotate(150deg);
    animation-delay: -0.6s;
  }
  .lds-spinner div:nth-child(7) {
    transform: rotate(180deg);
    animation-delay: -0.5s;
  }
  .lds-spinner div:nth-child(8) {
    transform: rotate(210deg);
    animation-delay: -0.4s;
  }
  .lds-spinner div:nth-child(9) {
    transform: rotate(240deg);
    animation-delay: -0.3s;
  }
  .lds-spinner div:nth-child(10) {
    transform: rotate(270deg);
    animation-delay: -0.2s;
  }
  .lds-spinner div:nth-child(11) {
    transform: rotate(300deg);
    animation-delay: -0.1s;
  }
  .lds-spinner div:nth-child(12) {
    transform: rotate(330deg);
    animation-delay: 0s;
  }
  @keyframes lds-spinner {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  
  @keyframes fade-out {
    0% {
      opacity: 0;
      transform: translateY(50%);
    }
    100% {
      opacity: 1;
      transform: translateY(0%);
    }
  }
</style>