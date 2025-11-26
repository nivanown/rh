/*- works -*/
document.addEventListener("DOMContentLoaded", function () {
    const works = document.querySelectorAll(".work");
    const btn = document.getElementById("show-works");
    const step = 3;
    let visibleCount = step;

    function fadeIn(el, duration = 400) {
        el.style.opacity = 0;
        el.style.display = "flex";

        let last = +new Date();
        const tick = function () {
            el.style.opacity = +el.style.opacity + (new Date() - last) / duration;
            last = +new Date();

            if (+el.style.opacity < 1) {
                requestAnimationFrame(tick);
            } else {
                el.style.opacity = 1;
            }
        };
        tick();
    }

    works.forEach((work, index) => {
        if (index < visibleCount) {
            work.style.display = "flex";
        } else {
            work.style.display = "none";
        }
    });

    btn.addEventListener("click", function () {
        let nextCount = visibleCount + step;

        works.forEach((work, index) => {
            if (index >= visibleCount && index < nextCount) {
                setTimeout(() => fadeIn(work, 500), (index - visibleCount) * 150);
            }
        });

        visibleCount = nextCount;

        if (visibleCount >= works.length) {
            btn.classList.add("hidden");
        }
    });
});