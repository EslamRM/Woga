<template>
    <div>
        <video controls muted autoplay>
            <source src="~/assets/WOGA.mp4" type="video/mp4">
        </video>
    </div>
</template>
  
<script>
export default {
    name: 'VideoPlayer',
}
</script>
  
<style>
video {
    width: 100%;
    height: auto;
    border-radius: 20px;
    position: relative;
    z-index: 1;
}
</style>
  