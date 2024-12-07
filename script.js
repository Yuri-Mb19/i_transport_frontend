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

