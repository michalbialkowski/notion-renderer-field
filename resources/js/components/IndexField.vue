<template>
    <span>
        <template v-if="link">
            <a
                class="link-default"
                :href="link"
                target="_blank"
                @click.stop
            >{{ label }}</a>
        </template>
    </span>
</template>

<script>

    import { defineComponent, ref } from "vue"

    export default defineComponent({
        props: ['resourceName', 'field'],
        setup (props) {
            const label = ref(props.field.name)
            const link = ref(props.field.value)

            return { label, link }
        }
    })
</script>
