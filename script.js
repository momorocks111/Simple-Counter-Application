var count = 0;

const counterValue = document.querySelector(".counter-value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("count-down")) {
      count--;
    }

    if (styles.contains("count-up")) {
      count++;
    }

    if (styles.contains("reset-count")) {
      count = 0;
    }

    counterValue.innerHTML = count;

    if (count < 0) {
      counterValue.classList.add("negative");
      counterValue.classList.remove("positive");
      counterValue.classList.remove("neutral");
    }

    if (count > 0) {
      counterValue.classList.add("positive");
      counterValue.classList.remove("negative");
      counterValue.classList.remove("neutral");
    }

    if (count == 0) {
      counterValue.classList.add("neutral");
      counterValue.classList.remove("negative");
      counterValue.classList.remove("positive");
    }
  });
});
