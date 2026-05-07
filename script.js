document.addEventListener("DOMContentLoaded", () => {

  /* ── CONFETTI FUNCTION ── */
function burstConfetti() {
  const cake = document.querySelector(".cake-img");
  if (!cake) return;

  const rect = cake.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const topY = rect.top;

  for (let i = 0; i < 60; i++) {   // 👈 MORE PIECES
    const confetti = document.createElement("div");
    confetti.className = "confetti";

    confetti.style.left = centerX + "px";
    confetti.style.top = topY + "px";

    // random spread
    const x = (Math.random() - 0.5) * 400;
    const y = Math.random() * -250;

    confetti.style.setProperty("--x", `${x}px`);
    confetti.style.setProperty("--y", `${y}px`);
    confetti.style.background =
      Math.random() > 0.5 ? "#ff85a1" : "#ffd6e0";

    document.body.appendChild(confetti);

    setTimeout(() => confetti.remove(), 1500);
  }
}


  /* ── CANDLE CLICK ── */
  const candle2 = document.getElementById("candle-2");
  const candle0 = document.getElementById("candle-0");

  function blowCandle(el, blownSrc) {
    if (el.dataset.blown) return;

    el.dataset.blown = "true";
    el.src = blownSrc;
    el.classList.add("blown");

    burstConfetti(); // 🎉 added here
  }

  candle2?.addEventListener("click", () =>
    blowCandle(candle2, "assets/stickers/2-blown.png")
  );

  candle0?.addEventListener("click", () =>
    blowCandle(candle0, "assets/stickers/0-blown.png")
  );


  /* ── MAIN BUTTON ── */
  const btn         = document.getElementById("dont-btn");
  const label       = document.getElementById("dont-label");
  const subtext     = document.getElementById("btn-sub");
  const placeholder = document.getElementById("photo-placeholder");
  const photoWrap   = document.getElementById("photo-wrap");
  const card        = document.getElementById("msg-card");

  let clicked = false;

  btn?.addEventListener("click", () => {
    if (clicked) return;
    clicked = true;

    btn.disabled = true;

    label.textContent = "okay bro 😐 (get it?)";
    if (subtext) subtext.textContent = "you never listen";

    setTimeout(() => {

      label.textContent = "ok fine now wait";
      if (subtext) subtext.textContent = "this is on you btw";

      setTimeout(() => {

        placeholder?.classList.add("hidden");

        if (photoWrap) {
          photoWrap.classList.remove("hidden");
          photoWrap.classList.add("fade-in");
        }

        label.textContent = "mb if ts is a lil corny";
        if (subtext) subtext.style.display = "none";

        setTimeout(() => {
          if (card) {
            card.classList.remove("hidden");
            card.classList.add("slide-in");

            setTimeout(() => {
              card.scrollIntoView({
                behavior: "smooth",
                block: "nearest"
              });
            }, 200);
          }
        }, 500);

      }, 900);

    }, 900);
  });


  /* ── EASTER EGG ── */
  const hint  = document.getElementById("easter-hint");
  const toast = document.getElementById("toast");

  let toastTimer;

  hint?.addEventListener("click", () => {
    clearTimeout(toastTimer);

    toast.classList.remove("hidden");
    void toast.offsetWidth;

    toast.classList.add("show");

    toastTimer = setTimeout(() => {
      toast.classList.remove("show");
      setTimeout(() => toast.classList.add("hidden"), 300);
    }, 2400);
  });


  /* ── MUSIC TOGGLE ── */
  const music = document.getElementById("bg-music");
  const musicBtn = document.getElementById("music-btn");
  const musicText = musicBtn?.querySelector(".music-text");
  const musicIcon = musicBtn?.querySelector(".music-icon");

  let playing = false;

  musicBtn?.addEventListener("click", () => {
    if (!playing) {
      music.play();
      musicText.textContent = "pause this";
      playing = true;
    } else {
      music.pause();
      musicText.textContent = "play this rq";
      playing = false;
    }
  });

});
