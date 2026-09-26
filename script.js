// FILTRO DEL MENÚ

const filterButtons = document.querySelectorAll(".filter-button");
const menuCards = document.querySelectorAll(".menu-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        // Quitar active de todos los botones
        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        // Activar el botón seleccionado
        button.classList.add("active");

        // Obtener categoría seleccionada
        const filter = button.dataset.filter;

        // Mostrar u ocultar productos
        menuCards.forEach(card => {

            const category = card.dataset.category;

            if (filter === "todos" || category === filter) {
                card.classList.remove("hidden");
            } else {
                card.classList.add("hidden");
            }

        });

    });

});