<template>

    <section class="scroll-container">
        <div class="div_1 scroll-area">1</div>
        <div class="div_2 scroll-area">2</div>
        <div class="div_3 scroll-area">3</div>
        <div class="div_4 scroll-area">4</div>
        <div class="div_1 scroll-area">5</div>
        <div class="div_2 scroll-area">6</div>
        <div class="div_3 scroll-area">7</div>
        <div class="div_4 scroll-area">8</div>
        <div class="div_1 scroll-area">9</div>
        <div class="div_2 scroll-area">10</div>
        <div class="div_3 scroll-area">11</div>
        <div class="div_4 scroll-area">12</div>
    </section>


</template>

<style scoped>
.scroll-container,
.scroll-area {
    font-size: 60px;
    height: 90vh;
}

.scroll-area {
    align-items: center;
    justify-content: center;
    text-align: center;
    display: flex;
    scroll-snap-align: start;
    width: calc(100vw - 100px);
    flex: none;
    scroll-margin-left: 100px;
}

.scroll-container {
    overflow: auto;
    scroll-snap-type: x proximity;
    width: 100vw;
    color: rgba(27, 25, 25, 0.788);
    display: flex;
}


.div_1 {
    background: yellowgreen
}

.div_2 {
    background: rgb(140, 0, 255);
}

.div_3 {
    background: rgb(68, 255, 0);
}

.div_4 {
    background: yellow;
}
</style>