<script setup>
const props = defineProps({
    to: {
        type: String,
        default: '',
    },
})

const componentTag = () => {
    if (props.to) return 'router-link';
    return 'button';
}

</script>
<template>
    <component :is="componentTag()" :to="to" class="btn">
        <slot></slot>
    </component>
</template>