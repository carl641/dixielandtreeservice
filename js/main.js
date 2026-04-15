/* =================================================================
   Dixie Land Tree Service — Main JS
   Mobile menu, form handling, analytics hooks
   ================================================================= */
(function () {
  'use strict';

  // ----- Mobile menu toggle -----
  var toggle = document.querySelector('.nav-toggle');
  var menu = document.getElementById('mobile-menu');
  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var isOpen = menu.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      toggle.textContent = isOpen ? 'Close' : 'Menu';
    });
  }

  // ----- Smooth scroll for same-page anchors -----
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var id = link.getAttribute('href');
      if (id.length > 1) {
        var target = document.querySelector(id);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          history.replaceState(null, '', id);
        }
      }
    });
  });

  // ----- Estimate form handling -----
  var form = document.getElementById('estimate-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var data = new FormData(form);
      var name = (data.get('name') || '').toString().trim();
      var phone = (data.get('phone') || '').toString().trim();

      if (!name || !phone) {
        showFormMessage(
          'Please fill in your name and phone number so we can call you back.',
          'error'
        );
        return;
      }

      // In production, POST to backend/Formspree/Netlify Forms.
      // For now we show a confirmation and the user can also call directly.
      showFormMessage(
        'Thanks, ' +
          escapeHtml(name.split(' ')[0]) +
          '! We received your request and will call you back within 2 business hours. For emergencies, please call (256) 555-0100 now.',
        'success'
      );
      form.reset();
    });
  }

  function showFormMessage(text, type) {
    var box = document.getElementById('form-message');
    if (!box) return;
    box.textContent = text;
    box.style.padding = '14px 16px';
    box.style.borderRadius = '6px';
    box.style.marginTop = '14px';
    box.style.fontWeight = '600';
    if (type === 'success') {
      box.style.background = '#e6f0e5';
      box.style.color = '#1b3a1e';
      box.style.border = '1px solid #3b7340';
    } else {
      box.style.background = '#fdecea';
      box.style.color = '#8a1f1f';
      box.style.border = '1px solid #c0392b';
    }
  }

  function escapeHtml(s) {
    return s
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  // ----- Current year in footer -----
  var yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // ----- Click-to-call analytics hook (no-op unless GA loaded) -----
  document.querySelectorAll('a[href^="tel:"]').forEach(function (link) {
    link.addEventListener('click', function () {
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'click_to_call', {
          event_category: 'engagement',
          event_label: link.getAttribute('href'),
        });
      }
    });
  });
})();
