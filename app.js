document.addEventListener('DOMContentLoaded', function () {
			const burger = document.querySelector('.burger-menu');
			const mobileMenu = document.querySelector('.header__box');

			burger.addEventListener('click', function () {
				this.classList.toggle('active');
				mobileMenu.classList.toggle('active');

				if (mobileMenu.classList.contains('active')) {
					document.body.style.overflow = 'hidden';
				} else {
					document.body.style.overflow = '';
				}
			});

			const mobileLinks = document.querySelectorAll('.mobile-menu__link');
			mobileLinks.forEach(link => {
				link.addEventListener('click', function () {
					burger.classList.remove('active');
					mobileMenu.classList.remove('active');
					document.body.style.overflow = '';
				});
			});
		});