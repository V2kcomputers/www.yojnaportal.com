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

