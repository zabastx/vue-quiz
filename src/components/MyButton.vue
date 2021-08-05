<i18n>
{
    "en": {
        "next": "Next"
    },

    "fr": {
        "next": "Prochain"
    }
}
</i18n>

<template>
    <button class="btn">
        <slot>{{ $t('next') }}</slot>
    </button>
</template>

<script>
export default {
    name: 'my-button'
}
</script>

<style lang="scss" scoped>
.btn {
    display: inline-block;
    padding: 15px 25px;
    background-color: green;
    color: #fff;
    border: 0;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1.5rem;
    margin: 15px;
    transition-duration: 100ms;
    &:hover {
        box-shadow: 0 0 5px black;
    }
    &:focus {
        box-shadow: 0 0 10px blue;
        outline-offset: -1px;
    }
    &.ans {
        max-width: 400px;
        width: 100%;
        margin: 15px auto;
        display: block;
    }
    &:disabled {
        background-color: grey;
        cursor: not-allowed;
        &:hover {
            box-shadow: none;
        }
    }
}

.male {
    background-color: #3898ec;
}

.female {
    background-color: pink;
}

.no {
    background-color: red;
}
</style>