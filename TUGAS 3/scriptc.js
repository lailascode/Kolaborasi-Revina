// Initialize tooltips
const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()
        const target = document.querySelector(this.getAttribute('href'))
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: 'smooth'
            })
        }
    })
})

// Form validation for appointment booking
const appointmentForm = document.getElementById('appointmentForm')
if (appointmentForm) {
    appointmentForm.addEventListener('submit', function(e) {
        e.preventDefault()
        const formData = new FormData(this)
        
        // Simple validation
        if (!formData.get('name') || !formData.get('email') || !formData.get('date')) {
            alert('Please fill all required fields')
            return
        }

        // In a real app, you would send this to a server
        alert('Appointment request submitted successfully! We will contact you shortly.')
        this.reset()
    })
}

// Testimonial carousel
const testimonialCarousel = document.getElementById('testimonialCarousel')
if (testimonialCarousel) {
    const carousel = new bootstrap.Carousel(testimonialCarousel, {
        interval: 5000,
        pause: 'hover'
    })
}

// Emergency contact button
const emergencyBtn = document.getElementById('emergencyBtn')
if (emergencyBtn) {
    emergencyBtn.addEventListener('click', function() {
        window.location.href = 'tel:+11234567890'
    })
}