/* ================= فتح الدعوة ================= */

const openButton = document.getElementById("openButton");

const welcome = document.getElementById("welcome");

const invitation = document.getElementById("invitation");

const music = document.getElementById("music");


openButton.addEventListener("click", function () {

    // تشغيل الموسيقى
    music.play()
        .catch(function (error) {
            console.log("Music error:", error);
        });


    // إخفاء شاشة البداية
    welcome.style.opacity = "0";


    setTimeout(function () {

        welcome.style.display = "none";

        invitation.style.display = "block";

        window.scrollTo(0, 0);

    }, 1000);

});


/* ================= العد التنازلي ================= */

// تاريخ وميعاد الفرح
const weddingDate = new Date("October 11, 2026 20:00:00").getTime();


function updateCountdown() {

    const now = new Date().getTime();

    const difference = weddingDate - now;


    if (difference <= 0) {

        document.getElementById("days").innerText = "0";

        document.getElementById("hours").innerText = "0";

        document.getElementById("minutes").innerText = "0";

        document.getElementById("seconds").innerText = "0";

        return;

    }


    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );


    const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );


    const minutes = Math.floor(
        (difference % (1000 * 60 * 60))
        / (1000 * 60)
    );


    const seconds = Math.floor(
        (difference % (1000 * 60))
        / 1000
    );


    document.getElementById("days").innerText = days;

    document.getElementById("hours").innerText = hours;

    document.getElementById("minutes").innerText = minutes;

    document.getElementById("seconds").innerText = seconds;

}


updateCountdown();

setInterval(updateCountdown, 1000);


/* ================= الخريطة ================= */

function openMap() {

    // غير الرابط ده برابط القاعة الحقيقي
    window.open(
        "https://maps.google.com/",
        "_blank"
    );

}