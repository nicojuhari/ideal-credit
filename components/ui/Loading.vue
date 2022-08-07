<script setup>
</script>
<template>
    <div class="loader"></div>
</template>
<style scoped>
.loader {
    --loader-size: 60px;
    --loader-border: 6px;
    --loader-color: #fff;

    border: var(--loader-border) solid transparent;
    border-radius: 50%;
    border-top-width: var(--loader-border);
    border-top-style: solid;
    border-top-color: var(--loader-color);
    width: var(--loader-size);
    height: var(--loader-size);
    -webkit-animation: spin 1.2s linear infinite;
    /* Safari */
    animation: spin 1.2s linear infinite;
}

.loader.small {
    --loader-size: 24px;
    --loader-border: 3px;
}

/* Safari */
@-webkit-keyframes spin {
    0% {
        -webkit-transform: rotate(0deg);
    }

    100% {
        -webkit-transform: rotate(360deg);
    }
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>