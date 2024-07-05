<script>
    import "../app.css";
</script>

<svelte:head>
    <!-- SUIT 폰트 CSS -->
    <link
        href="https://cdn.jsdelivr.net/gh/sunn-us/SUIT/fonts/static/woff2/SUIT.css"
        rel="stylesheet"
    />

    <link
        rel="stylesheet"
        as="style"
        href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.8/dist/web/static/pretendard-dynamic-subset.css"
    />

    <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <!-- Include stylesheet -->

</svelte:head>
<slot />

<style>
    :global(.max_screen) {
        max-width: 800px;
        padding: 0 10px;
    }

    :global(.pretendard) {
        font-family: "Pretendard";
    }
</style>
