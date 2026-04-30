(function () {
  'use strict';

  /** Replace ⭐️ N/10 with a colored badge in h2, h3, and li elements */
  function processScoreBadges() {
    var scoreRe = /⭐️\s*(\d+(?:\.\d+)?)\/10/;
    var targets = document.querySelectorAll('.main-content h2, .main-content h3, .main-content li');
    targets.forEach(function (el) {
      var m = el.innerHTML.match(scoreRe);
      if (!m) return;
      var score = parseFloat(m[1]);
      var tier;
      if (score >= 9) tier = 'high';
      else if (score >= 7) tier = 'good';
      else if (score >= 5) tier = 'mid';
      else tier = 'low';
      el.innerHTML = el.innerHTML.replace(
        scoreRe,
        '<span class="score-badge" data-tier="' + tier + '">' + m[1] + '</span>'
      );
    });
  }

  /** Add semantic classes to tag lines, source lines, and background paragraphs */
  function markSemanticElements() {
    var paragraphs = document.querySelectorAll('.main-content p');
    paragraphs.forEach(function (p) {
      var text = p.textContent.trim();

      // Tag line: starts with Tags or 标签 (bold prefix rendered by Markdown)
      if (/^(Tags|标签)\s*:/.test(text)) {
        p.classList.add('tag-line');
        return;
      }

      // Source line: pattern like "source · site · date"
      if (/^(rss|reddit|github|hackernews|hn|telegram)\s*·/i.test(text)) {
        p.classList.add('source-line');
        return;
      }
    });
  }

  /** Set up EN/中文 language toggle as a page-level control */
  function setupLanguageToggle() {
    function getPostsData() {
      if (Array.isArray(window.HORIZON_POSTS)) return window.HORIZON_POSTS;
      var el = document.getElementById('horizon-posts-data');
      if (!el) return [];
      try {
        return JSON.parse(el.textContent || '[]');
      } catch (e) {
        return [];
      }
    }

    function normalizePath(path) {
      if (!path) return '/';
      var out = path;
      if (!/^\//.test(out)) out = '/' + out;
      out = out.replace(/\/index\.html$/, '/');
      out = out.replace(/\.html$/, '');
      out = out.replace(/\/+$/, '');
      return out || '/';
    }

    function normalizeSlug(slug) {
      return (slug || '').replace(/-(zh|en)$/i, '');
    }

    function findArticleTarget(lang) {
      var posts = getPostsData();
      if (!posts.length) return null;

      var currentPath = normalizePath(window.location.pathname);
      var current = null;

      for (var i = 0; i < posts.length; i++) {
        if (normalizePath(posts[i].url) === currentPath) {
          current = posts[i];
          break;
        }
      }
      if (!current) return null;

      var target = null;
      var keyByRef = current.ref && current.ref.trim();
      var keyByDate = current.date && current.date.trim();
      var keyBySlug = normalizeSlug(current.slug);

      for (var j = 0; j < posts.length; j++) {
        var p = posts[j];
        if (p.lang !== lang) continue;

        if (keyByRef && p.ref === keyByRef) {
          target = p.url;
          break;
        }
      }

      if (!target && keyByDate) {
        for (var k = 0; k < posts.length; k++) {
          var p2 = posts[k];
          if (p2.lang !== lang) continue;
          if (p2.date === keyByDate && normalizeSlug(p2.slug) === keyBySlug) {
            target = p2.url;
            break;
          }
        }
      }

      return target ? normalizePath(target) : null;
    }

    // Create toggle buttons
    var toggle = document.createElement('div');
    toggle.className = 'lang-toggle';

    var btnEn = document.createElement('button');
    btnEn.textContent = 'EN';
    btnEn.type = 'button';

    var btnZh = document.createElement('button');
    btnZh.textContent = '中文';
    btnZh.type = 'button';

    toggle.appendChild(btnEn);
    toggle.appendChild(btnZh);

    // Insert at top of body
    document.body.insertBefore(toggle, document.body.firstChild);

    // Read saved preference, default to zh
    var saved = null;
    try { saved = localStorage.getItem('horizon-lang'); } catch (e) { /* noop */ }
    var currentLang = saved === 'en' ? 'en' : 'zh';

    function updateButtons(lang) {
      if (lang === 'en') {
        btnEn.classList.add('active');
        btnZh.classList.remove('active');
      } else {
        btnZh.classList.add('active');
        btnEn.classList.remove('active');
      }
    }

    // Index page: toggle lang-section visibility
    var zhSection = document.getElementById('lang-zh');
    var enSection = document.getElementById('lang-en');

    function showSection(lang) {
      if (!zhSection || !enSection) return;
      if (lang === 'en') {
        enSection.classList.remove('hidden');
        zhSection.classList.add('hidden');
      } else {
        zhSection.classList.remove('hidden');
        enSection.classList.add('hidden');
      }
    }

    // Article page: redirect to the other language version
    function switchArticleLang(lang) {
      var path = window.location.pathname;
      var target = null;

      // Prefer metadata-based mapping across languages.
      target = findArticleTarget(lang);

      // Fallback: old URL suffix replacement logic.
      if (!target && lang === 'en' && /-zh(?:\.html)?$/.test(path.replace(/\/$/, ''))) {
        target = path.replace(/-zh(\.html)?$/, '-en$1').replace(/-zh\/$/, '-en/');
      } else if (!target && lang === 'zh' && /-en(?:\.html)?$/.test(path.replace(/\/$/, ''))) {
        target = path.replace(/-en(\.html)?$/, '-zh$1').replace(/-en\/$/, '-zh/');
      }
      if (target) window.location.href = target;
    }

    function setLang(lang) {
      currentLang = lang;
      updateButtons(lang);
      try { localStorage.setItem('horizon-lang', lang); } catch (e) { /* noop */ }
      if (zhSection && enSection) {
        showSection(lang);
      } else {
        switchArticleLang(lang);
      }
    }

    btnEn.addEventListener('click', function () { setLang('en'); });
    btnZh.addEventListener('click', function () { setLang('zh'); });

    // Initialize
    updateButtons(currentLang);
    if (zhSection && enSection) {
      showSection(currentLang);
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    processScoreBadges();
    markSemanticElements();
    setupLanguageToggle();
  });
})();
