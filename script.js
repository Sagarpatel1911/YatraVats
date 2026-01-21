

// Mobile Menu Toggle Logic
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    // Toggle Icon between Bars and X
    const icon = mobileMenu.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});

// Close menu when a link is clicked (for mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        // Toggle Icon between Bars and X
    const icon = mobileMenu.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
    });
});





let currentIdx = 0;
const allSlides = document.querySelectorAll('#kenburns_slider .item');

function showSlide(n) {
    allSlides[currentIdx].classList.remove('active');
    currentIdx = (n + allSlides.length) % allSlides.length;
    allSlides[currentIdx].classList.add('active');
}

function moveSlide(step) {
    showSlide(currentIdx + step);
}

// Auto play (Har 10 second mein jaisa aapne likha hai)
setInterval(() => {
    moveSlide(1);
}, 10000);



document.getElementById('queryForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Form se data nikalna
    const name = this.querySelectorAll('input')[0].value;
    const phone = this.querySelectorAll('input')[1].value;
    const dest = this.querySelector('select').value;
    const msg = this.querySelector('textarea').value;

    // WhatsApp URL banana
    const waLink = `https://wa.me/916263777672?text=New%20Inquiry!%0AName:%20${name}%0APhone:%20${phone}%0ADestination:%20${dest}%0AMessage:%20${msg}`;

    window.open(waLink, '_blank');
});


document.getElementById('queryForm').addEventListener('submit', function(e) {
    // ... your existing code ...
    window.open(waLink, '_blank');
    this.reset(); // Adds a clean finish
});


function openItinerary(tourName) {
    alert("Hi! " + tourName + " ki detailed itinerary download ho rahi hai... (In Real Web, yahan PDF khulegi)");
    // Aap yahan direct PDF link bhi de sakte hain:
    // window.open('pdf/' + tourName + '.pdf');
}

const tourData = {
    kedarnath: {
        title: "Kedarnath Dham Yatra Plan",
        plan: [
            { day: "Day 1", desc: "Haridwar arrival and evening Ganga Aarti." },
            { day: "Day 2", desc: "Drive to Guptkashi, check-in to hotel." },
            { day: "Day 3", desc: "Trek to Kedarnath Ji, night stay at base camp." },
            { day: "Day 4", desc: "Morning Darshan and trek back to Sonprayag." },
            { day: "Day 5", desc: "Return to Haridwar/Rishikesh and departure." }
        ]
    },
    kashmir: {
        title: "Kashmir Paradise Plan",
        plan: [
            { day: "Day 1", desc: "Srinagar arrival and Shikara ride." },
            { day: "Day 2", desc: "Srinagar to Gulmarg day trip." },
            { day: "Day 3", desc: "Pahalgam visit and Betab Valley." }
        ]
    },
    goa: {
        title: "Goa Beach Party Plan",
        plan: [
            { day: "Day 1", desc: "Arrival and North Goa beach exploration." },
            { day: "Day 2", desc: "Water sports and Scuba Diving." },
            { day: "Day 3", desc: "South Goa heritage tour and departure." }
        ]
    }
};

function openItinerary(tourId) {
    const modal = document.getElementById("itineraryModal");
    const body = document.getElementById("modalBody");
    const data = tourData[tourId];

    if (data) {
        let html = `<h2>${data.title}</h2><hr><br>`;
        data.plan.forEach(item => {
            html += `
                <div class="itinerary-day">
                    <h4>${item.day}</h4>
                    <p>${item.desc}</p>
                </div>`;
        });
        html += `<a href="https://wa.me/916263777672" class="btn-book" style="display:block; margin-top:20px;">Confirm Booking on WhatsApp</a>`;
        body.innerHTML = html;
        modal.style.display = "block";
    }
}

function closeModal() {
    document.getElementById("itineraryModal").style.display = "none";
}

// Modal ke bahar click karne par close ho jaye
window.onclick = function (event) {
    let modal = document.getElementById("itineraryModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}




// FAQ Accordion Toggle
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');

    question.addEventListener('click', () => {
        // Kisi aur khule hue FAQ ko band karne ke liye (Optional)
        faqItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
            }
        });

        // Current item ko toggle karne ke liye
        item.classList.toggle('active');
    });
});
