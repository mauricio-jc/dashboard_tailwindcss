document.addEventListener("DOMContentLoaded", (event) => {
    document.addEventListener('click', function(event) {
        const dropdowns = document.querySelectorAll('.dropdown-content');
        dropdowns.forEach(dropdown => {
            if (!dropdown.parentElement.contains(event.target)) {
                dropdown.classList.remove('show');
            }
        });
    });
    
    document.querySelectorAll('.dropdown').forEach(anchor => {
        anchor.addEventListener('click', function(event) {
            event.preventDefault();
            const dropdownContent = this.nextElementSibling;
            dropdownContent.classList.toggle('show');
        });
    });

    const openModalButtons = document.querySelectorAll('.open-modal');
    const closeModalButtons = document.querySelectorAll('.close-modal');

    openModalButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            const modalId = event.currentTarget.getAttribute('data-modal-target');
            const modal = document.getElementById(modalId);
            modal.classList.remove('invisible');
            setTimeout(() => modal.classList.add('opacity-100'), 10);
        });
    });

    closeModalButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const modal = event.currentTarget.closest('.fixed');
            modal.classList.remove('opacity-100');
            setTimeout(() => modal.classList.add('invisible'), 300);
        });
    });

    const closeAlertButtons = document.querySelectorAll('.close-alert');
    closeAlertButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const modal = event.currentTarget.closest('.alert');
            modal.classList.remove('opacity-100');
            setTimeout(() => {
                modal.classList.add('opacity-0');
            }, 700);

            setTimeout(() => {
                modal.classList.add('hidden');
            }, 1200);
        });
    }); 
});