/**
* Template Name: FlexStart
* Template URL: https://bootstrapmade.com/flexstart-bootstrap-startup-template/
* Updated: Nov 01 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);
  
  /**
   * Создание модального окна для обратного звонка
   */
  function createCallbackModal() {
    // Создаем элементы модального окна
    const modalOverlay = document.createElement('div');
    modalOverlay.className = 'modal-overlay';
    modalOverlay.id = 'callbackModal';
    modalOverlay.style.display = 'none';
    
    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';
    
    const modalHeader = document.createElement('div');
    modalHeader.className = 'modal-header';
    
    const modalTitle = document.createElement('h4');
    modalTitle.textContent = 'Заказать обратный звонок';
    
    const closeButton = document.createElement('button');
    closeButton.className = 'close-button';
    closeButton.innerHTML = '&times;';
    closeButton.onclick = function() {
      modalOverlay.style.display = 'none';
    };
    
    const modalBody = document.createElement('div');
    modalBody.className = 'modal-body';
    
    const form = document.createElement('form');
    form.id = 'callbackForm';
    form.className = 'callback-form';
    
    const nameGroup = document.createElement('div');
    nameGroup.className = 'form-group';
    
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.name = 'name';
    nameInput.id = 'callback-name';
    nameInput.className = 'form-control';
    nameInput.placeholder = 'Ваше имя';
    nameInput.required = true;
    
    const phoneGroup = document.createElement('div');
    phoneGroup.className = 'form-group';
    
    const phoneInput = document.createElement('input');
    phoneInput.type = 'tel';
    phoneInput.name = 'phone';
    phoneInput.id = 'callback-phone';
    phoneInput.className = 'form-control';
    phoneInput.placeholder = 'Ваш телефон';
    phoneInput.required = true;
    
    const timeGroup = document.createElement('div');
    timeGroup.className = 'form-group';
    
    const timeSelect = document.createElement('select');
    timeSelect.name = 'time';
    timeSelect.id = 'callback-time';
    timeSelect.className = 'form-control';
    
    const timeOptions = [
      { value: '', text: 'Выберите удобное время для звонка' },
      { value: 'morning', text: 'Утро (9:00 - 12:00)' },
      { value: 'day', text: 'День (12:00 - 15:00)' },
      { value: 'evening', text: 'Вечер (15:00 - 18:00)' }
    ];
    
    timeOptions.forEach(option => {
      const optionElement = document.createElement('option');
      optionElement.value = option.value;
      optionElement.textContent = option.text;
      timeSelect.appendChild(optionElement);
    });
    
    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.className = 'btn btn-primary';
    submitButton.textContent = 'Заказать звонок';
    
    // Добавляем элементы в DOM
    nameGroup.appendChild(nameInput);
    phoneGroup.appendChild(phoneInput);
    timeGroup.appendChild(timeSelect);
    
    form.appendChild(nameGroup);
    form.appendChild(phoneGroup);
    form.appendChild(timeGroup);
    form.appendChild(submitButton);
    
    modalHeader.appendChild(modalTitle);
    modalHeader.appendChild(closeButton);
    
    modalBody.appendChild(form);
    
    modalContent.appendChild(modalHeader);
    modalContent.appendChild(modalBody);
    
    modalOverlay.appendChild(modalContent);
    
    document.body.appendChild(modalOverlay);
    
    // Добавляем стили для модального окна
    const style = document.createElement('style');
    style.textContent = `
      .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
      }
      
      .modal-content {
        background-color: white;
        border-radius: 5px;
        width: 90%;
        max-width: 500px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      }
      
      .modal-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px;
        border-bottom: 1px solid #e9ecef;
      }
      
      .modal-header h4 {
        margin: 0;
      }
      
      .close-button {
        background: none;
        border: none;
        font-size: 24px;
        cursor: pointer;
      }
      
      .modal-body {
        padding: 15px;
      }
      
      .form-group {
        margin-bottom: 15px;
      }
      
      .callback-form button {
        width: 100%;
        padding: 10px;
        background-color: #4154f1;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
      }
      
      .callback-form button:hover {
        background-color: #3445c5;
      }
    `;
    
    document.head.appendChild(style);
    
    // Добавляем кнопку обратного звонка в хедер
    const headerButtons = document.querySelector('.btn-getstarted').parentNode;
    const callbackButton = document.createElement('a');
    callbackButton.href = '#';
    callbackButton.className = 'btn-callback ms-3';
    callbackButton.textContent = 'Обратный звонок';
    callbackButton.onclick = function(e) {
      e.preventDefault();
      modalOverlay.style.display = 'flex';
    };
    
    // Добавляем стили для кнопки
    const buttonStyle = document.createElement('style');
    buttonStyle.textContent = `
      .btn-callback {
        background-color: #ff6b6b;
        color: white;
        padding: 8px 20px;
        border-radius: 4px;
        text-decoration: none;
        transition: all 0.3s;
      }
      
      .btn-callback:hover {
        background-color: #ff5252;
        color: white;
      }
    `;
    
    document.head.appendChild(buttonStyle);
    headerButtons.appendChild(callbackButton);
    
    // Обработка отправки формы обратного звонка
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      if (validateCallbackForm()) {
        // Имитация отправки данных на сервер
        const formData = {
          name: nameInput.value,
          phone: phoneInput.value,
          time: timeSelect.value
        };
        
        console.log('Отправка данных:', formData);
        
        // Показываем сообщение об успешной отправке
        form.innerHTML = '<div class="alert alert-success">Спасибо! Мы перезвоним вам в ближайшее время.</div>';
        
        // Закрываем модальное окно через 3 секунды
        setTimeout(function() {
          modalOverlay.style.display = 'none';
          // Восстанавливаем форму
          form.innerHTML = '';
          form.appendChild(nameGroup);
          form.appendChild(phoneGroup);
          form.appendChild(timeGroup);
          form.appendChild(submitButton);
          
          // Очищаем поля формы
          nameInput.value = '';
          phoneInput.value = '';
          timeSelect.value = '';
        }, 3000);
      }
    });
    
    // Функция валидации формы обратного звонка
    function validateCallbackForm() {
      let isValid = true;
      
      // Валидация имени
      if (nameInput.value.trim() === '') {
        showError(nameInput, 'Пожалуйста, введите ваше имя');
        isValid = false;
      } else {
        removeError(nameInput);
      }
      
      // Валидация телефона
      const phoneRegex = /^\+?[0-9\s\-\(\)]{10,20}$/;
      if (!phoneRegex.test(phoneInput.value)) {
        showError(phoneInput, 'Пожалуйста, введите корректный номер телефона');
        isValid = false;
      } else {
        removeError(phoneInput);
      }
      
      // Валидация времени
      if (timeSelect.value === '') {
        showError(timeSelect, 'Пожалуйста, выберите удобное время для звонка');
        isValid = false;
      } else {
        removeError(timeSelect);
      }
      
      return isValid;
    }
  }
  
  // Функции для отображения и скрытия ошибок валидации
  function showError(input, message) {
    const formGroup = input.parentElement;
    const errorElement = formGroup.querySelector('.error-message') || document.createElement('div');
    
    if (!formGroup.querySelector('.error-message')) {
      errorElement.className = 'error-message';
      errorElement.style.color = 'red';
      errorElement.style.fontSize = '12px';
      errorElement.style.marginTop = '5px';
      formGroup.appendChild(errorElement);
    }
    
    errorElement.textContent = message;
    input.style.borderColor = 'red';
  }
  
  function removeError(input) {
    const formGroup = input.parentElement;
    const errorElement = formGroup.querySelector('.error-message');
    
    if (errorElement) {
      formGroup.removeChild(errorElement);
    }
    
    input.style.borderColor = '';
  }

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  if (mobileNavToggleBtn) {
    mobileNavToggleBtn.addEventListener('click', mobileNavToogle);
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Frequently Asked Questions Toggle
   */
  document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle').forEach((faqItem) => {
    faqItem.addEventListener('click', () => {
      faqItem.parentNode.classList.toggle('faq-active');
    });
  });

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });
    });

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
      filters.addEventListener('click', function() {
        isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        initIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        if (typeof aosInit === 'function') {
          aosInit();
        }
      }, false);
    });

  });

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function(e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);

  /**
   * Валидация и обработка контактной формы
   */
  function initContactForm() {
    const contactForm = document.querySelector('.php-email-form');
    
    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nameInput = contactForm.querySelector('input[name="name"]');
        const emailInput = contactForm.querySelector('input[name="email"]');
        const subjectInput = contactForm.querySelector('input[name="subject"]');
        const messageInput = contactForm.querySelector('textarea[name="message"]');
        
        const loadingElement = contactForm.querySelector('.loading');
        const errorElement = contactForm.querySelector('.error-message');
        const sentElement = contactForm.querySelector('.sent-message');
        
        // Скрываем все сообщения
        loadingElement.style.display = 'none';
        errorElement.style.display = 'none';
        sentElement.style.display = 'none';
        
        // Валидация формы
        if (validateContactForm(nameInput, emailInput, subjectInput, messageInput)) {
          // Показываем индикатор загрузки
          loadingElement.style.display = 'block';
          
          // Имитация отправки данных на сервер
          const formData = {
            name: nameInput.value,
            email: emailInput.value,
            subject: subjectInput.value,
            message: messageInput.value
          };
          
          console.log('Отправка данных формы:', formData);
          
          // Имитация задержки ответа сервера
          setTimeout(function() {
            // Скрываем индикатор загрузки
            loadingElement.style.display = 'none';
            
            // Показываем сообщение об успешной отправке
            sentElement.style.display = 'block';
            
            // Очищаем форму
            contactForm.reset();
          }, 1500);
        }
      });
    }
    
    // Валидация контактной формы
    function validateContactForm(nameInput, emailInput, subjectInput, messageInput) {
      let isValid = true;
      
      // Валидация имени
      if (nameInput.value.trim() === '') {
        showError(nameInput, 'Пожалуйста, введите ваше имя');
        isValid = false;
      } else {
        removeError(nameInput);
      }
      
      // Валидация email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailInput.value)) {
        showError(emailInput, 'Пожалуйста, введите корректный email');
        isValid = false;
      } else {
        removeError(emailInput);
      }
      
      // Валидация темы
      if (subjectInput.value.trim() === '') {
        showError(subjectInput, 'Пожалуйста, введите тему сообщения');
        isValid = false;
      } else {
        removeError(subjectInput);
      }
      
      // Валидация сообщения
      if (messageInput.value.trim() === '') {
        showError(messageInput, 'Пожалуйста, введите текст сообщения');
        isValid = false;
      } else {
        removeError(messageInput);
      }
      
      return isValid;
    }
  }
  
  /**
   * Валидация и обработка формы подписки на рассылку
   */
  function initNewsletterForm() {
    const newsletterForm = document.querySelector('.footer-newsletter form');
    
    if (newsletterForm) {
      newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const emailInput = newsletterForm.querySelector('input[name="email"]');
        const loadingElement = newsletterForm.querySelector('.loading');
        const errorElement = newsletterForm.querySelector('.error-message');
        const sentElement = newsletterForm.querySelector('.sent-message');
        
        // Скрываем все сообщения
        loadingElement.style.display = 'none';
        errorElement.style.display = 'none';
        sentElement.style.display = 'none';
        
        // Валидация email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
          errorElement.textContent = 'Пожалуйста, введите корректный email';
          errorElement.style.display = 'block';
          return false;
        }
        
        // Показываем индикатор загрузки
        loadingElement.style.display = 'block';
        
        // Имитация отправки данных на сервер
        console.log('Подписка на рассылку:', emailInput.value);
        
        // Имитация задержки ответа сервера
        setTimeout(function() {
          // Скрываем индикатор загрузки
          loadingElement.style.display = 'none';
          
          // Показываем сообщение об успешной отправке
          sentElement.style.display = 'block';
          
          // Очищаем форму
          newsletterForm.reset();
        }, 1500);
      });
    }
  }
  
  /**
   * Инициализация всех форм и функций при загрузке страницы
   */
  window.addEventListener('load', function() {
    // Создаем модальное окно для обратного звонка
    createCallbackModal();
    
    // Инициализируем контактную форму
    initContactForm();
    
    // Инициализируем форму подписки на рассылку
    initNewsletterForm();
    
    // Устанавливаем текущий год в футере
    const copyrightYear = document.getElementById('copyright-year');
    if (copyrightYear) {
      copyrightYear.textContent = new Date().getFullYear();
    }
  });

})();