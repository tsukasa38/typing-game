<script lang="ts">
    export let url: string = "#";
    export let title: string = "";
</script>

<div class="container">
    <a class="link" href={url}>
        <p class="title">{title}</p>
    </a>
</div>

<style>
    .container {
        margin: 1rem;
        width: 200px;
        height: 90px;
        border-radius: 1rem;
        background-color: #ffffff;
        border: 5px solid #ffffff;
        box-shadow: 2px 2px 2px 1px #acacac;
    }
    .link {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        text-decoration: none;
    }
    .container:hover {
        box-shadow: none;
        border: 5px solid #ff9c00;
    }
    .title {
        color: #000000;
        font-size: 1.4rem;
    }
</style>