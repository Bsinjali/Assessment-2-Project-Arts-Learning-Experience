/**
 * ARTS LEARNING EXPERIENCE - Early Childhood Education
 * High Reliability Vanilla JavaScript Interaction Module
 * GitHub Pages Compatible | No Dependencies | WCAG 2.2 AA Accessible
 */

(function () {
  'use strict';

  // Wait for DOM content to be fully loaded
  document.addEventListener('DOMContentLoaded', initApp);

  function initApp() {
    initStickyHeader();
    initScrollSpy();
    initMobileMenu();
    initAccordions();
    initVideoFallback();
    initBackToTop();
    initSmoothScroll();
    initCohortToggle();
  }

  /* --------------------------------------------------------------------------
     1. Sticky Header & Shadow on Scroll
     -------------------------------------------------------------------------- */
  function initStickyHeader() {
    var header = document.getElementById('main-header');
    if (!header) return;

    var handleScroll = function () {
      if (window.scrollY > 20) {
        header.classList.add('is-scrolled');
      } else {
        header.classList.remove('is-scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }

  /* --------------------------------------------------------------------------
     2. Active Navigation Highlight via IntersectionObserver
     -------------------------------------------------------------------------- */
  function initScrollSpy() {
    var sections = document.querySelectorAll('section[id], header[id="hero"]');
    var navLinks = document.querySelectorAll('.nav-link[href^="#"], .mobile-nav-link[href^="#"]');

    if (!sections.length || !navLinks.length) return;

    if ('IntersectionObserver' in window) {
      var observerOptions = {
        root: null,
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0
      };

      var activeId = '';

      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            activeId = entry.target.getAttribute('id');
            updateNavHighlight(activeId);
          }
        });
      }, observerOptions);

      sections.forEach(function (section) {
        observer.observe(section);
      });
    }

    function updateNavHighlight(id) {
      navLinks.forEach(function (link) {
        var href = link.getAttribute('href');
        if (href === '#' + id) {
          link.classList.add('active');
          link.setAttribute('aria-current', 'page');
        } else {
          link.classList.remove('active');
          link.removeAttribute('aria-current');
        }
      });
    }
  }

  /* --------------------------------------------------------------------------
     3. Mobile Navigation Drawer & Hamburger
     -------------------------------------------------------------------------- */
  function initMobileMenu() {
    var toggleBtn = document.getElementById('mobile-menu-toggle');
    var closeBtn = document.getElementById('mobile-menu-close');
    var drawer = document.getElementById('mobile-drawer');
    var backdrop = document.getElementById('mobile-backdrop');
    var mobileLinks = document.querySelectorAll('.mobile-nav-link');

    if (!toggleBtn || !drawer) return;

    function openMenu() {
      drawer.classList.add('is-open');
      document.body.style.overflow = 'hidden';
      toggleBtn.setAttribute('aria-expanded', 'true');
      if (closeBtn) closeBtn.focus();
    }

    function closeMenu() {
      drawer.classList.remove('is-open');
      document.body.style.overflow = '';
      toggleBtn.setAttribute('aria-expanded', 'false');
      toggleBtn.focus();
    }

    toggleBtn.addEventListener('click', openMenu);
    if (closeBtn) closeBtn.addEventListener('click', closeMenu);
    if (backdrop) backdrop.addEventListener('click', closeMenu);

    mobileLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        closeMenu();
      });
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && drawer.classList.contains('is-open')) {
        closeMenu();
      }
    });
  }

  /* --------------------------------------------------------------------------
     4. Interactive Step Accordions & Global Toggles
     -------------------------------------------------------------------------- */
  function initAccordions() {
    var stepCards = document.querySelectorAll('.step-card');

    stepCards.forEach(function (card) {
      var trigger = card.querySelector('.step-trigger');
      var body = card.querySelector('.step-body');
      if (!trigger || !body) return;

      trigger.addEventListener('click', function () {
        var isOpen = card.classList.contains('is-open');
        if (isOpen) {
          card.classList.remove('is-open');
          trigger.setAttribute('aria-expanded', 'false');
          body.style.display = 'none';
        } else {
          card.classList.add('is-open');
          trigger.setAttribute('aria-expanded', 'true');
          body.style.display = 'block';
        }
      });
    });

    // Initialize Global Expand/Collapse buttons for each section
    var toggleAllBtns = document.querySelectorAll('[data-accordion-toggle]');
    toggleAllBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var sectionId = btn.getAttribute('data-accordion-toggle');
        var section = document.getElementById(sectionId);
        if (!section) return;

        var sectionCards = section.querySelectorAll('.step-card');
        var shouldExpand = btn.getAttribute('data-state') !== 'expanded';

        sectionCards.forEach(function (card) {
          var trigger = card.querySelector('.step-trigger');
          var body = card.querySelector('.step-body');
          if (trigger && body) {
            if (shouldExpand) {
              card.classList.add('is-open');
              trigger.setAttribute('aria-expanded', 'true');
              body.style.display = 'block';
            } else {
              card.classList.remove('is-open');
              trigger.setAttribute('aria-expanded', 'false');
              body.style.display = 'none';
            }
          }
        });

        if (shouldExpand) {
          btn.setAttribute('data-state', 'expanded');
          btn.innerHTML = '<svg class="w-4 h-4 inline-block mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path></svg> Collapse All Steps';
        } else {
          btn.setAttribute('data-state', 'collapsed');
          btn.innerHTML = '<svg class="w-4 h-4 inline-block mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg> Expand All Steps';
        }
      });
    });
  }

  /* --------------------------------------------------------------------------
     5. Hero Video Graceful Fallback
     -------------------------------------------------------------------------- */
  function initVideoFallback() {
    var video = document.getElementById('hero-video-player');
    var fallbackPoster = document.getElementById('hero-fallback-poster');

    if (!video) return;

    // Listen for error or stall
    video.addEventListener('error', function () {
      video.style.display = 'none';
      if (fallbackPoster) fallbackPoster.style.display = 'block';
    });

    // Handle browsers that block autoplay
    var playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(function () {
        // Video autoplay was prevented; ensure poster or static view works
        video.setAttribute('controls', 'false');
      });
    }
  }

  /* --------------------------------------------------------------------------
     6. Back to Top Button
     -------------------------------------------------------------------------- */
  function initBackToTop() {
    var backToTopBtn = document.getElementById('back-to-top');
    if (!backToTopBtn) return;

    window.addEventListener('scroll', function () {
      if (window.scrollY > 400) {
        backToTopBtn.classList.remove('opacity-0', 'pointer-events-none');
        backToTopBtn.classList.add('opacity-100', 'pointer-events-auto');
      } else {
        backToTopBtn.classList.add('opacity-0', 'pointer-events-none');
        backToTopBtn.classList.remove('opacity-100', 'pointer-events-auto');
      }
    }, { passive: true });

    backToTopBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* --------------------------------------------------------------------------
     7. Accessible Smooth Scrolling
     -------------------------------------------------------------------------- */
  function initSmoothScroll() {
    var anchorLinks = document.querySelectorAll('a[href^="#"]:not([href="#"])');

    anchorLinks.forEach(function (link) {
      link.addEventListener('click', function (e) {
        var targetId = link.getAttribute('href').substring(1);
        var targetElement = document.getElementById(targetId);

        if (targetElement) {
          e.preventDefault();
          var headerOffset = 70;
          var elementPosition = targetElement.getBoundingClientRect().top;
          var offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });

          // Focus for accessibility
          targetElement.setAttribute('tabindex', '-1');
          targetElement.focus({ preventScroll: true });
        }
      });
    });
  }

  /* --------------------------------------------------------------------------
     8. Cohort Details Toggle
     -------------------------------------------------------------------------- */
  function initCohortToggle() {
    var toggleBtn = document.getElementById('cohort-details-btn');
    var detailsPanel = document.getElementById('cohort-details-panel');

    if (!toggleBtn || !detailsPanel) return;

    toggleBtn.addEventListener('click', function () {
      var isHidden = detailsPanel.classList.contains('hidden');
      if (isHidden) {
        detailsPanel.classList.remove('hidden');
        toggleBtn.setAttribute('aria-expanded', 'true');
        toggleBtn.innerHTML = 'Hide Demographic Context ↑';
      } else {
        detailsPanel.classList.add('hidden');
        toggleBtn.setAttribute('aria-expanded', 'false');
        toggleBtn.innerHTML = 'View Cohort Breakdown ↓';
      }
    });
  }
})();
