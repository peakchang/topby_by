<script>
    export let data;
    let landList = [];
    $: data, setData();
    function setData() {
        landList = data.land_list;
        console.log(landList);
    }
</script>

<div class="grid grid-cols-2 md:grid-cols-3 gap-2">
    {#each landList as land}
        <a href="https://{land.ld_domain}.adpeak.kr" target="_blank">
            <div class="border rounded-md overflow-hidden">
                <div class="h-40 flex justify-center items-center">
                    <img
                        src={land.ld_banner_img.split(",")[0]}
                        alt=""
                        class="w-full h-full"
                    />
                </div>
                <div class="py-2 text-center">
                    {land.ld_name}
                </div>
            </div>
        </a>
    {/each}
</div>
