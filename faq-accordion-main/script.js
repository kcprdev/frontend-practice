const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {
    button.addEventListener("click", () => {

        // Get the clicked answer and remember if it was open
        const answer = button.nextElementSibling;
        const icon = button.querySelector(".icon");
        const wasOpen = answer.classList.contains("active");

        // Close all FAQs and reset all icons
        buttons.forEach(btn => {
            const ans = btn.nextElementSibling;
            const ic = btn.querySelector(".icon");

            ans.classList.remove("active");
            ic.src = "assets/images/icon-plus.svg";
        });

        // If the clicked FAQ was closed, open it
        if (!wasOpen) {
            answer.classList.add("active");
            icon.src = "assets/images/icon-minus.svg";
        }
    });
});