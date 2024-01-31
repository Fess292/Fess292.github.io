$(".button--toContacts").click(function () { // ID откуда кливаем
    $('html, body').animate({
        scrollTop: $(".page-contacts").offset().top  // класс объекта к которому приезжаем
    }, 700); // Скорость прокрутки
});

$(".button--toPromo").click(function () { // ID откуда кливаем
    $('html, body').animate({
        scrollTop: $(".page-promo").offset().top  // класс объекта к которому приезжаем
    }, 700); // Скорость прокрутки
});

// закрепленная шапка
document.addEventListener("scroll", function () {
    var promoHeader = document.querySelector(".page-promo .header");
    var contactsHeader = document.querySelector(".page-contacts .header");
    var patternsMob = document.querySelector(".patterns-mob");
    var scrollPosition = window.scrollY;

    var promoOffset = promoHeader.offsetTop;
    var contactsOffset = contactsHeader.offsetTop;

    if (scrollPosition < contactsOffset && !promoHeader.classList.contains("fixed-header")) {
        promoHeader.classList.add("fixed-header");
        contactsHeader.classList.remove("fixed-header");
        patternsMob.style.paddingTop = "0";
    } else if (scrollPosition >= contactsOffset && !contactsHeader.classList.contains("fixed-header")) {
        contactsHeader.classList.add("fixed-header");
        promoHeader.classList.remove("fixed-header");
        patternsMob.style.paddingTop = "73px";
    } else if (scrollPosition < contactsOffset && contactsHeader.classList.contains("fixed-header")) {
        contactsHeader.classList.remove("fixed-header");
        patternsMob.style.paddingTop = "0";
    }
});

// Дополнительная проверка при изменении размеров окна
window.addEventListener("resize", function () {
    var promoHeader = document.querySelector(".page-promo .header");
    var contactsHeader = document.querySelector(".page-contacts .header");
    var patternsMob = document.querySelector(".patterns-mob");
    var scrollPosition = window.scrollY;

    var promoOffset = promoHeader.offsetTop;
    var contactsOffset = contactsHeader.offsetTop;

    if (scrollPosition < contactsOffset && !promoHeader.classList.contains("fixed-header")) {
        promoHeader.classList.add("fixed-header");
        contactsHeader.classList.remove("fixed-header");
        patternsMob.style.paddingTop = "0";
    } else if (scrollPosition >= contactsOffset && !contactsHeader.classList.contains("fixed-header")) {
        contactsHeader.classList.add("fixed-header");
        promoHeader.classList.remove("fixed-header");
        patternsMob.style.paddingTop = "73px";
    } else if (scrollPosition < contactsOffset && contactsHeader.classList.contains("fixed-header")) {
        contactsHeader.classList.remove("fixed-header");
        patternsMob.style.paddingTop = "0";
    }
});
/*
//   мобильная анимация  - одновременно все ряды
document.addEventListener("DOMContentLoaded", function() {
    const patternsGrid = document.getElementById("patternsGrid");
    const verticalRows = [
      ['.line1-1', '.line2-1'],
      ['.line1-2', '.line2-2'],
      ['.line1-3', '.line2-3'],
      ['.line1-4', '.line2-4'],
      ['.line1-5', '.line2-5'],
      ['.line1-6', '.line2-6']
    ];
  
    function toggleRandomPatternVisibility() {
      if (window.innerWidth > 1230 || !patternsGrid) {
        return; // Проверяем ширину экрана и определен ли patternsGrid
      }
  
      verticalRows.forEach(row => {
        const patterns = row.map(patternClass => patternsGrid.querySelector(patternClass));
        const visiblePatterns = patterns.filter(pattern => pattern.classList.contains('visible'));
  
        if (visiblePatterns.length === 0) {
          const randomIndex = Math.floor(Math.random() * patterns.length);
          patterns[randomIndex].classList.add('visible');
        } else {
          const visibleIndex = patterns.findIndex(pattern => pattern.classList.contains('visible'));
          if (visibleIndex !== -1) {
            patterns[visibleIndex].classList.remove('visible');
          }
        }
      });
    }
  
    function toggleAnimation() {
      toggleRandomPatternVisibility();
    }
  
    setInterval(toggleAnimation, 600); // Измените интервал, если нужно
  
    window.addEventListener('resize', function() {
      toggleRandomPatternVisibility(); // При изменении размеров окна проверяем снова
    });
  });

  */
//   мобильная анимация  - поочередно все ряды

//   мобильная анимация  - поочередно все ряды-2
/*
document.addEventListener("DOMContentLoaded", function() {
   const patternsGrid = document.getElementById("patternsGrid");
   const verticalRows = [
     ['.line1-1', '.line2-1'],
     ['.line1-2', '.line2-2'],
     ['.line1-3', '.line2-3'],
     ['.line1-4', '.line2-4'],
     ['.line1-5', '.line2-5'],
     ['.line1-6', '.line2-6']
   ];
 
   function toggleRandomPatternVisibility(rowIndex) {
     if (window.innerWidth > 1230 || !patternsGrid) {
       return; // Проверяем ширину экрана и определен ли patternsGrid
     }
 
     const row = verticalRows[rowIndex];
     const patterns = row.map(patternClass => patternsGrid.querySelector(patternClass));
     const visiblePatterns = patterns.filter(pattern => pattern.classList.contains('visible'));
 
     if (visiblePatterns.length === 0) {
       const randomIndex = Math.floor(Math.random() * patterns.length);
       patterns[randomIndex].classList.add('visible');
     } else {
       const visibleIndex = patterns.findIndex(pattern => pattern.classList.contains('visible'));
       if (visibleIndex !== -1) {
         patterns[visibleIndex].classList.remove('visible');
       }
     }
   }
 
   function toggleAnimation() {
     verticalRows.forEach((row, index) => {
       setTimeout(() => {
         toggleRandomPatternVisibility(index);
       }, 150 * index); // Увеличиваем задержку для каждого вертикального ряда
     });
   }
 
   setInterval(toggleAnimation, 150 * verticalRows.length); // Измените интервал, если нужно
 
   window.addEventListener('resize', function() {
     toggleRandomPatternVisibility(); // При изменении размеров окна проверяем снова
   });
 });
 */

// через рамдомное время 
document.addEventListener("DOMContentLoaded", function() {
    const patternsGrid = document.getElementById("patternsGrid");
    const verticalRows = [
      ['.line1-1', '.line2-1'],
      ['.line1-2', '.line2-2'],
      ['.line1-3', '.line2-3'],
      ['.line1-4', '.line2-4'],
      ['.line1-5', '.line2-5'],
      ['.line1-6', '.line2-6']
    ];
  
    function toggleRandomPatternVisibility(rowIndex) {
      if (window.innerWidth > 1230 || !patternsGrid) {
        return; // Проверяем ширину экрана и определен ли patternsGrid
      }
  
      const row = verticalRows[rowIndex];
      const patterns = row.map(patternClass => patternsGrid.querySelector(patternClass));
      const visiblePatterns = patterns.filter(pattern => pattern.classList.contains('visible'));
  
      if (visiblePatterns.length === 0) {
        const randomIndex = Math.floor(Math.random() * patterns.length);
        patterns[randomIndex].classList.add('visible');
      } else {
        const visibleIndex = patterns.findIndex(pattern => pattern.classList.contains('visible'));
        if (visibleIndex !== -1) {
          patterns[visibleIndex].classList.remove('visible');
        }
      }
    }
  
    function toggleAnimation() {
      verticalRows.forEach((row, index) => {
        const randomDelay = 150 + Math.floor(Math.random() * 351); // от 150 мс до 500 мс
        setTimeout(() => {
          toggleRandomPatternVisibility(index);
        }, randomDelay);
      });
    }
  
    setInterval(toggleAnimation, 500); // Измените интервал, если нужно
  
    window.addEventListener('resize', function() {
      toggleRandomPatternVisibility(); // При изменении размеров окна проверяем снова
    });
  });
