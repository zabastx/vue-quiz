<template>
    <label class="checkbox">
        <slot>No Value</slot>
        <input type="checkbox" name="goals" @change="update" :value="value">
        <span class="checkmark"></span>
    </label>
</template>

<script>
export default {
    name: 'my-checkbox',
    props: {
        goals: {
            type: Array,
            required: true
        },
        value: {
            type: String,
            required: true
        }
    },
    methods: {
        update(e) {
            const uptGoals = [...this.goals]
            if (!e.target.checked) {
                uptGoals.splice(uptGoals.indexOf(this.value), 1);
            } else {
                uptGoals.push(this.value);
            }
            this.$emit('update:goals', uptGoals)
        }
    }
}
</script>

<style scoped>
.checkbox {
    display: block;
    position: relative;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    text-align: left;
    max-width: 350px;
    padding: 10px 10px 10px 55px;
    margin: 15px auto;
}

.checkbox input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
}

.checkmark {
    position: absolute;
    top: 50%;
    left: 15px;
    height: 25px;
    width: 25px;
    background-color: #eee;
    transform: translateY(-50%);
    box-sizing: border-box;
}

.checkbox:hover input ~ .checkmark {
    background-color: #ccc;
}

.checkbox input:checked ~ .checkmark {
    background-color: #2196F3;
}

.checkmark:after {
    content: "";
    position: absolute;
    display: none;
}

.checkbox input:checked ~ .checkmark:after {
    display: block;
}

.checkbox .checkmark:after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
}
input:focus ~ .checkmark {
    border: 1px solid #2196F3
}
</style>