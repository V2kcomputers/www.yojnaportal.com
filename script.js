<script type="text/javascript">
document.addEventListener('DOMContentLoaded', function() {
    const currentLocation = location.href;
    const menuItems = document.querySelectorAll('.scrollmenu a, .bottom-nav ul li a');
    const menuLength = menuItems.length;

    for (let i = 0; i < menuLength; i++) {
        if (menuItems[i].href === currentLocation) {
            menuItems[i].classList.add('active');
        }
    }

    const scrollMenuLinks = document.querySelectorAll('.scrollmenu a');

    // Add event listeners to each menu link
    scrollMenuLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Remove active class from all links
            scrollMenuLinks.forEach(link => link.classList.remove('active'));
            // Add active class to the clicked link
            this.classList.add('active');
        });
    });
});




</script>
/* jobs Ccript */

/* yojna Scripts Start */

<script>
    function myFunction() {
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();

        // Filter English Table
        table = document.getElementById("myTableEnglish");
        tr = table.getElementsByTagName("tr");
        for (i = 1; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[0];
            if (td) {
                txtValue = td.textContent || td.innerText;
                tr[i].style.display = txtValue.toUpperCase().indexOf(filter) > -1 ? "" : "none";
            }
        }

        // Filter Hindi Table
        table = document.getElementById("myTableHindi");
        tr = table.getElementsByTagName("tr");
        for (i = 1; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[0];
            if (td) {
                txtValue = td.textContent || td.innerText;
                tr[i].style.display = txtValue.toUpperCase().indexOf(filter) > -1 ? "" : "none";
            }
        }
    }

    function filterSelection(c) {
        var x, i;
        x = document.getElementsByClassName("filterDiv");
        for (i = 0; i < x.length; i++) {
            x[i].classList.remove("show");
            if (c === "all" || x[i].classList.contains(c)) {
                x[i].classList.add("show");
            }
        }
    }

    function toggleLanguage() {
        var englishTable = document.getElementById("englishTable");
        var hindiTable = document.getElementById("hindiTable");
        var languageToggle = document.getElementById("languageToggle");

        if (englishTable.classList.contains("active")) {
            englishTable.classList.remove("active");
            hindiTable.classList.add("active");
            languageToggle.textContent = "Switch to English";
        } else {
            hindiTable.classList.remove("active");
            englishTable.classList.add("active");
            languageToggle.textContent = "Switch to Hindi";
        }
    }

    // Initialize filter on page load
    filterSelection('all');
</script>

/* yojna Scripts Finished */
