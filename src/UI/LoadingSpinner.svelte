<h1>
    <span class="let1">A</span>
    <span class="let2">S</span>
    <span class="let3">T</span>
    <span class="let4">R</span>
    <span class="let5">O</span>
    <span class="let6">&nbsp;</span>
    <span class="let7">P</span>
    <span class="let8">A</span>
    <span class="let9">R</span>
    <span class="let10">K</span>
</h1>

<style>
    h1 {
        text-align: center;
        height: max-content;
        margin-top: 30vh;
        padding: 0;
        font-family: ‘Arial Narrow’, sans-serif;
        font-weight: 100;
        font-size: 1.1em;
        color: #a3e1f0;
    }

    span {
        position: relative;
        top: 0.63em;
        display: inline-block;
        text-transform: uppercase;
        opacity: 0;
        transform: rotateX(-90deg);
    }

    .let1 {
        animation: drop 1.1s ease-in-out infinite;
        animation-delay: 0s;
    }

    .let2 {
        animation: drop 1.1s ease-in-out infinite;
        animation-delay: 0.1s;
    }

    .let3 {
        animation: drop 1.1s ease-in-out infinite;
        animation-delay: 0.2s;
    }

    .let4 {
        animation: drop 1.1s ease-in-out infinite;
        animation-delay: 0.3s;
    }

    .let5 {
        animation: drop 1.1s ease-in-out infinite;
        animation-delay: 0.4s;
    }

    .let7 {
        animation: drop 1.1s ease-in-out infinite;
        animation-delay: 0.5s;
    }

    .let8 {
        animation: drop 1.1s ease-in-out infinite;
        animation-delay: 0.6s;
    }

    .let9 {
        animation: drop 1.1s ease-in-out infinite;
        animation-delay: 0.7s;
    }

    .let10 {
        animation: drop 1.1s ease-in-out infinite;
        animation-delay: 0.8s;
    }
    /* 
.let10 {
  animation: drop 1.3s ease-in-out infinite;
  animation-delay: 3.4s;
} */

    @keyframes drop {
        10% {
            opacity: 0.5;
        }
        20% {
            opacity: 1;
            top: 3.78em;
            transform: rotateX(-360deg);
        }
        80% {
            opacity: 1;
            top: 3.78em;
            transform: rotateX(-360deg);
        }
        90% {
            opacity: 0.5;
        }
        100% {
            opacity: 0;
            top: 6.94em;
        }
    }
</style>
