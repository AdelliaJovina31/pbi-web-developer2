  let filter = document.querySelector('.filter');
  filter.appendChild(generateDropDown());

  function generateDropDown() {
    let data = [];
    let wors
  }

  const currentPage = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll('.navbar ul a');

  navLinks.forEach(link => {
      if (link.getAttribute('href') === currentPage) {
          link.classList.add('active'); // Tambahkan kelas aktif pada link saat ini
      }
  }); 