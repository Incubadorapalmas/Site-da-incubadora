document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const mensagem = document.getElementById('mensagem').value;

        if (!nome || !email || !mensagem) {
            alert('Por favor, preencha todos os campos.');
            event.preventDefault();
        } else {
            alert('Mensagem enviada com sucesso!');
        }
    });

    // Smooth scrolling for nav links
    const navLinks = document.querySelectorAll('.nav-flutuante a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    const modal = document.getElementById('pre-incubacao-modal');
    const openModalButton = document.getElementById('pre-incubacao-btn');
    const closeModalButton = document.getElementById('modal-close');

    openModalButton.addEventListener('click', function() {
        modal.classList.add('active');
    });

    closeModalButton.addEventListener('click', function() {
        modal.classList.remove('active');
    });

    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.classList.remove('active');
        }
    });

    const incubacaoModal = document.getElementById('incubacao-modal');
    const openIncubacaoButton = document.getElementById('incubacao-btn');
    const closeIncubacaoButton = document.getElementById('modal-close-incubacao');

    openIncubacaoButton.addEventListener('click', function() {
        incubacaoModal.classList.add('active');
    });

    closeIncubacaoButton.addEventListener('click', function() {
        incubacaoModal.classList.remove('active');
    });

    incubacaoModal.addEventListener('click', function(event) {
        if (event.target === incubacaoModal) {
            incubacaoModal.classList.remove('active');
        }
    });
});