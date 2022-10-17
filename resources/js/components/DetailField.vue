<template>
    <div class="flex flex-col md:flex-row -mx-6 px-6 py-2 md:py-0 space-y-2 md:space-y-0">
        <div class="md:w-1/4 md:py-3">
            <h4 class="font-bold md:font-normal">{{ field.name }}</h4>
        </div>
        <div class="md:w-3/4 md:py-3 break-all lg:break-words">
            <p class="text-90 flex items-center">
                <a
                    class="link-default"
                    :href="field.value"
                    target="_blank"
                >{{ field.value }}</a>
            </p>
        </div>
    </div>
    <div
        class="flex flex-col md:flex-row -mx-6 px-6 py-2 md:py-0 space-y-2 md:space-y-0"
        v-if="field.value"
    >
        <div class="dark:dark-mode w-full py-5 pb-3">
            <NotionRenderer v-if="page" :blockMap="page" fullPage />
        </div>
    </div>
</template>

<script>
    import { NotionRenderer, getPageBlocks, useGetPageBlocks } from "vue3-notion"
    import { defineComponent, ref, onMounted } from "vue"

    export default defineComponent({
        props: ['index', 'resource', 'resourceName', 'resourceId', 'field'],
        emits: ['actionExecuted'],
        components: {
            NotionRenderer
        },
        setup (props) {


            const link = ref(props.field.value)
            const id = ref(null)
            const page = ref(null)

            if (link.value) {
                id.value = link.value.split('-').pop();
                onMounted(async () => {
                    page.value = await getPageBlocks(id.value)
                })
            }

            return { page }
        }
    });
</script>

<style>
    @import "prismjs/themes/prism.css";
    @import "katex/dist/katex.min.css";
</style>
