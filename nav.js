document.addEventListener('DOMContentLoaded', function () {
    const dropdownBtns = document.querySelectorAll('.dropbtn');

    dropdownBtns.forEach(btn => {
        btn.addEventListener('click', toggleDropdown);
        btn.querySelectorAll('span').forEach(span => {
            span.addEventListener('click', function (e) {
                // This stops the click from propagating up to the parent elements.
                e.stopPropagation();
                toggleDropdown.call(btn);
            });
        });
    });

    function toggleDropdown() {
        // Toggle dropdown
        this.nextElementSibling.classList.toggle("show");
        // Adjust other navigation items
        adjustNavItems(this);
    }
    
    function adjustNavItems(clickedBtn) {
        const allDropdownContents = document.querySelectorAll('.dropdown-content');

        allDropdownContents.forEach(content => {
            if (content !== clickedBtn.nextElementSibling && content.classList.contains('show')) {
                content.classList.remove('show');
                // Additional logic to reposition other nav items
            }
        });
    }

    // Close the dropdown if clicked outside
    window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            for (var i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                    // Additional logic to reposition other nav items
                }
            }
        }
    };
});
