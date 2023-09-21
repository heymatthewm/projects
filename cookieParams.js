<script>
    var urlParams = new URLSearchParams(window.location.search);
    
    urlParams.forEach((value, key) => {
    document.cookie = key + "=" + value
});
</script>