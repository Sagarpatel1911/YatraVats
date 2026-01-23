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

document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("welcomeModal");
    const closeBtn = document.getElementById("closeBtn");
    const closeIcon = document.querySelector(".close-icon");

    // Page load hone ke 1 seconds baad dikhayen
    setTimeout(() => {
        modal.style.display = "flex";
    }, 1000);

    const closeModal = () => {
        modal.style.opacity = "0";
        setTimeout(() => modal.style.display = "none", 300);
    };

    closeBtn.addEventListener("click", closeModal);
    closeIcon.addEventListener("click", closeModal);

    // FIX: Screen (Background Overlay) par click karne se hat jaye
    modal.addEventListener("click", (e) => {
        // Agar click 'modal-overlay' par hua hai (content ke bahar), toh band ho jaye
        if (e.target.classList.contains('modal-overlay')) {
            closeModal();
        }
    });
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
    this.reset(); // Adds a clean finish
});




// 1. Tour Data Object (Kashmir add kiya gaya hai)
const tourData = {
    goa: {
        title: "Goa Beach Party Plan",
        plan: [
            { day: "Day 1", desc: "Arrival and North Goa beach exploration." },
            { day: "Day 2", desc: "Water sports and Scuba Diving." },
            { day: "Day 3", desc: "South Goa heritage tour and departure." }
        ]
    },
    kashmir: {
        title: "Kashmir Paradise Tour Plan",
        plan: [
            { day: "Day 1", desc: "Srinagar arrival and Dal Lake Shikara ride." },
            { day: "Day 2", desc: "Full day trip to Gulmarg (Gondola ride)." },
            { day: "Day 3", desc: "Srinagar to Pahalgam sightseeing." },
            { day: "Day 4", desc: "Aru Valley and Betaab Valley exploration." },
            { day: "Day 5", desc: "Sonmarg Glacier visit." },
            { day: "Day 6", desc: "Shopping in Srinagar and departure." }
        ]
    }
};

// 2. Optimized openItinerary Function
function openItinerary(tourId) {
    const modal = document.getElementById("itineraryModal");
    const body = document.getElementById("modalBody");
    const data = tourData[tourId];

    if (data) {
        let html = `<h2>${data.title}</h2><hr><br>`;
        data.plan.forEach(item => {
            html += `
                <div class="itinerary-day" style="margin-bottom: 15px; border-left: 3px solid #ff5722; padding-left: 10px;">
                    <h4 style="color: #ff5722; margin-bottom: 5px;">${item.day}</h4>
                    <p style="font-size: 14px; color: #555;">${item.desc}</p>
                </div>`;
        });
        
        // WhatsApp link ko dynamic banaya gaya hai taaki tour ka naam bhi jaye
        const waMsg = `I am interested in ${data.title}`;
        html += `<a href="https://wa.me/916263777672?text=${encodeURIComponent(waMsg)}" 
                    class="btn-book" 
                    style="display:block; margin-top:20px; text-decoration:none; text-align:center;">
                    Confirm Booking on WhatsApp
                 </a>`;
        
        body.innerHTML = html;
        modal.style.display = "block";
    } else {
        console.error("Tour data not found for: " + tourId);
    }
}

// 3. Close Modal Function
function closeModal() {
    document.getElementById("itineraryModal").style.display = "none";
}

// 4. Background Click to Close (Fixed Logic)
window.addEventListener('click', function (event) {
    const itineraryModal = document.getElementById("itineraryModal");
    const welcomeModal = document.getElementById("welcomeModal");

    if (event.target === itineraryModal) {
        itineraryModal.style.display = "none";
    }
    if (event.target === welcomeModal) {
        welcomeModal.style.display = "none";
    }
});




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


document.querySelectorAll('.policy-header').forEach(header => {
    header.addEventListener('click', () => {
        const item = header.parentElement;
        item.classList.toggle('active');
    });
});
