function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
}

function setOption(type) {
    const bookingFields = document.getElementById('booking-fields');
    const buttons = document.querySelectorAll('.booking-options .option');

    // Atualiza os botões ativos
    buttons.forEach((btn) => btn.classList.remove('active'));
    document.querySelector(`.option[onclick="setOption('${type}')"]`).classList.add('active');

    // Define os campos dinâmicos com base na opção selecionada
    if (type === 'distance') {
        bookingFields.innerHTML = `
            <div class="field">
                <label for="pickup-date">Pickup Date <i class="fas fa-question-circle"></i></label>
                <input type="date" id="pickup-date">
            </div>
            <div class="field">
                <label for="pickup-time">Pickup Time <i class="fas fa-question-circle"></i></label>
                <input type="time" id="pickup-time">
            </div>
            <div class="field">
                <label for="pickup-location">Pickup Location <i class="fas fa-question-circle"></i></label>
                <input type="text" id="pickup-location" placeholder="Enter a location">
            </div>
            <div class="field">
                <label for="dropoff-location">Drop-Off Location <i class="fas fa-question-circle"></i></label>
                <input type="text" id="dropoff-location" placeholder="Enter a location">
            </div>
        `;
    } else if (type === 'hourly') {
        bookingFields.innerHTML = `
            <div class="field">
                <label for="pickup-date">Pickup Date <i class="fas fa-question-circle"></i></label>
                <input type="date" id="pickup-date">
            </div>
            <div class="field">
                <label for="pickup-time">Pickup Time <i class="fas fa-question-circle"></i></label>
                <input type="time" id="pickup-time">
            </div>
            <div class="field">
                <label for="pickup-location">Pickup Location <i class="fas fa-question-circle"></i></label>
                <input type="text" id="pickup-location" placeholder="Enter a location">
            </div>
            <div class="field">
                <label for="duration">Duration (in hours) <i class="fas fa-question-circle"></i></label>
                <select id="duration">
                    <option value="1">1 hour(s)</option>
                    <option value="2">2 hour(s)</option>
                    <option value="3">3 hour(s)</option>
                    <option value="4">4 hour(s)</option>
                </select>
            </div>
        `;
    } else if (type === 'flat_rate') {
        bookingFields.innerHTML = `
            <div class="field">
                <label for="pickup-date">Pickup Date <i class="fas fa-question-circle"></i></label>
                <input type="date" id="pickup-date">
            </div>
            <div class="field">
                <label for="pickup-time">Pickup Time <i class="fas fa-question-circle"></i></label>
                <input type="time" id="pickup-time">
            </div>
            <div class="field">
                <label for="route">Route <i class="fas fa-question-circle"></i></label>
                <select id="route">
                    <option value="new_york">New York City Tour</option>
                    <option value="paris">Paris City Tour</option>
                    <option value="cracow">Cracow Old Town</option>
                    <option value="schoenefeld">Schoenefeld Airport Shuttle</option>
                </select>
            </div>
        `;
    }
}

const testimonials = [
    {
        text: "I couldn’t be happier with the transport you did. It was great and your car was amazing. Thank you for your great service and I will continue to refer friends and family to you all.",
        author: "BETTY FINSEN"
    },
    {
        text: "I hired AutoRide to pick me up at the airport with their Sedan. I had just got back from a long trip in Germany and was very tired. The driver was on time and extremely courteous and I had no problems at all. Great service!",
        author: "KEVIN FOSTER"
    },
    {
        text: "This is the best service I have had so far. The driver was punctual and very helpful, he knew the city well. His skills helped avoid traffic jams. I will recommend AutoRide to all my friends!",
        author: "MITCH MICHAEL"
    },
    {
        text: "Great experience with this company. I have used many others in Oakland but this was by far the best. You guys made our trip so easy. Great customer service, wonderful drivers and by far the best and most affordable transportation company I have used. Thank you soo much!",
        author: "MARK WEBSTER"
    }
];

const textElement = document.getElementById("testimonial-text");
const authorElement = document.getElementById("testimonial-author");
const dots = document.querySelectorAll(".dot");

dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        // Atualiza a classe ativa nos pontos
        dots.forEach(d => d.classList.remove("active"));
        dot.classList.add("active");

        // Atualiza o texto e o autor
        textElement.textContent = testimonials[index].text;
        authorElement.textContent = testimonials[index].author;
    });
});

// Define o primeiro ponto como ativo por padrão
dots[0].classList.add("active");

document.querySelectorAll('.number').forEach((numberElement) => {
    const target = +numberElement.getAttribute('data-target');
    let current = 0;
    const increment = target / 100; // Ajuste para controlar a velocidade da contagem

    const updateNumber = () => {
        current += increment;
        if (current >= target) {
            numberElement.textContent = target; // Garante que o valor final seja exato
        } else {
            numberElement.textContent = Math.floor(current);
            requestAnimationFrame(updateNumber);
        }
    };

    updateNumber();
});




const banner = document.querySelector('.animated-banner');

document.addEventListener('mousemove', (event) => {
    const { clientX, clientY, innerWidth, innerHeight } = event;

    // Calculate offsets for the background movement
    const xOffset = ((clientX / innerWidth) - 0.5) * 10; // Adjust movement intensity
    const yOffset = ((clientY / innerHeight) - 0.5) * 10;

    // Apply the calculated offsets to the background position
    banner.style.backgroundPosition = `${50 + xOffset}% ${50 + yOffset}%`;
});

const statNumbers = document.querySelectorAll('.stat-number');

function animateCount(stat) {
    const target = +stat.getAttribute('data-target');
    const increment = target / 100; // Ajuste da velocidade

    let count = 0;

    const updateCount = () => {
        count += increment;
        if (count < target) {
            stat.textContent = Math.ceil(count);
            requestAnimationFrame(updateCount);
        } else {
            stat.textContent = target;
        }
    };

    updateCount();
}

document.querySelector('.stats-section').addEventListener('mouseover', () => {
    statNumbers.forEach((stat) => {
        if (!stat.classList.contains('animated')) {
            stat.classList.add('animated');
            animateCount(stat);
        }
    });
});
