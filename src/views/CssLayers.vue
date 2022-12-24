<template>
    <section>
        <h1>CSS Layer Example</h1>
        <div class="alert alert-primary" role="alert">
            This is a primary alert—check it out!
        </div>
        <div class="alert alert-secondary" role="alert">
            This is a secondary alert—check it out!
        </div>
        <div class="alert alert-success" role="alert">
            This is a success alert—check it out!
        </div>
        <div class="alert alert-danger" role="alert">
            This is a danger alert—check it out!
        </div>
        <div class="alert alert-warning" role="alert">
            This is a warning alert—check it out!
        </div>
        <div class="alert alert-info" role="alert">
            This is a info alert—check it out!
        </div>
        <div class="alert alert-light" role="alert">
            This is a light alert—check it out!
        </div>
        <div class="alert alert-dark" role="alert">
            This is a dark alert—check it out!
        </div>
    </section>
</template>


<style scoped>
@layer specific;

@import url('https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css') layer(bootstrap);

@layer specific {
    div {
        left: 5px;
        width: calc(100vw-50px);
        height: calc(82vh /2);
        border-radius: 4px;
        flex: none;
    }
}



section {
    width: 95vw;
    height: 95vh;
    /* background-color: greenyellow; */
    display: flex;
    flex-direction: column;
    ;
}
</style>