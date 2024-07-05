<script>
    import { goto } from "$app/navigation";
    let getLocation = "전체";
    export let data;
    $: data, setData();
    function setData() {
        if (!data.getLocation) {
            getLocation = "전체";
        }
    }

    let locationArr = [
        "전체",
        "서울시",
        "경기북부",
        "경기남부",
        "인천광역시",
        "충청도",
        "경상도",
        "전라도",
        "강원도",
    ];

    function changeLocation() {
        goto(`?location=${getLocation}`, { invalidateAll: true });
    }
</script>

<div
    class="container mx-auto px-1 max-w-[860px] pt-5 flex justify-between items-center pretendard"
>
    <div>
        <a href="/">
            <img src="/logo.png" alt="" class="max-w-[120px]" />
        </a>
    </div>
    <div>
        <span class="mr-1 text-gray-600">
            <i class="fa fa-compass" aria-hidden="true"></i>
            지역 :
        </span>
        <select
            class="p-1.5 border-gray-400 rounded-md text-sm"
            bind:value={getLocation}
            on:change={changeLocation}
        >
            {#each locationArr as location}
                <option value={location}>{location}</option>
            {/each}
        </select>
    </div>
</div>

<hr class="my-5" />

<div class=" container mx-auto px-1 max-w-[860px] pretendard">
    <slot></slot>
</div>
