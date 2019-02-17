<script>
export default {
    created() {
        console.log('propertyComputed will update, as this.property is now reactive.')
        this.$router.push('/blog/')
        }
    }
</script>
<template>
<div>
hei
</div>
</template>