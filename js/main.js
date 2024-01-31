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
document.addEventListener("DOMContentLoaded", function () {
  function handleScroll(headerClass) {
    const header = document.querySelector(`.${headerClass}`);
    const placeholder = document.createElement('div');
    placeholder.className = 'fixed-header-placeholder';

    // Вставляем пустой блок перед шапкой
    header.parentNode.insertBefore(placeholder, header);

    function updateHeader() {
      if (window.innerWidth < 1200) {
        if (window.scrollY > 0) {
          header.classList.add('fixed-header');
          placeholder.style.display = 'block';
        } else {
          header.classList.remove('fixed-header');
          placeholder.style.display = 'none';
        }
      } else {
        // Если ширина экрана больше 1200, сбрасываем стили
        header.classList.remove('fixed-header');
        placeholder.style.display = 'none';
      }
    }

    // Вызываем функцию при загрузке и изменении размера окна
    window.addEventListener('scroll', updateHeader);
    window.addEventListener('resize', updateHeader);

    // Вызываем функцию сразу после загрузки для правильной инициализации
    updateHeader();
  }

  // Запускаем для разных header-ов
  handleScroll('header--contacts');
  handleScroll('header--promo');
});


// мобильная анимация
document.addEventListener("DOMContentLoaded", function () {
  const patternsGrids = ['patternsGrid', 'patternsGrid-2', 'patternsGrid-3']; // Добавляем ID для каждого patternsGrid

  function initializePatternsGrid(id) {
    const patternsGrid = document.getElementById(id);

    if (!patternsGrid) {
      return;
    }

    const columns = [
      ['.line1-1', '.line2-1'],
      ['.line1-2', '.line2-2'],
      ['.line1-3', '.line2-3'],
      ['.line1-4', '.line2-4'],
      ['.line1-5', '.line2-5'],
      ['.line1-6', '.line2-6']
    ];

    function setInitialVisibility() {
      columns.forEach(column => {
        const patterns = column.map(patternClass => patternsGrid.querySelector(patternClass));
        const randomIndex = Math.floor(Math.random() * patterns.length);

        patterns.forEach((pattern, index) => {
          if (index === randomIndex) {
            pattern.classList.add('visible');
          } else {
            pattern.classList.remove('visible');
          }
        });
      });
    }

    setInitialVisibility();

    function toggleRandomPatternVisibility(columnIndex) {
      if (window.innerWidth > 1230 || !patternsGrid) {
        return;
      }

      const column = columns[columnIndex];
      const patterns = column.map(patternClass => patternsGrid.querySelector(patternClass));
      const randomIndex = Math.floor(Math.random() * patterns.length);

      patterns.forEach((pattern, index) => {
        if (index === randomIndex) {
          pattern.classList.add('visible');
        } else {
          pattern.classList.remove('visible');
        }
      });
    }

    function toggleAnimation() {
      columns.forEach((column, index) => {
        const randomDelay = 150 + Math.floor(Math.random() * 351);
        setTimeout(() => {
          toggleRandomPatternVisibility(index);
        }, randomDelay);
      });
    }

    setInterval(toggleAnimation, 600);

    window.addEventListener('resize', function () {
      toggleRandomPatternVisibility();
    });
  }

  patternsGrids.forEach(id => {
    initializePatternsGrid(id);
  });
});

// скрытие и показ блока с контактами в мобиле
function showContacts() {
  if (window.innerWidth < 1230) {
    document.getElementById('page-contacts').style.display = 'block';
    document.getElementById('page-promo').style.display = 'none';
    document.getElementById('header--contacts').scrollIntoView();
  } else if (window.innerWidth >= 1230 && window.innerWidth < 1600) {
    document.getElementById('page-contacts').style.display = 'grid';
    document.getElementById('page-promo').style.display = 'grid';
  } 

  // Скрыть блок #page-promo
  // document.getElementById('page-promo').style.display = 'none';

  // Прокрутить страницу к header--contacts
  // document.getElementById('header--contacts').scrollIntoView();
}

function showPromo() {
  // Скрыть блок #page-contacts
  document.getElementById('page-contacts').style.display = 'none';
  // Показать блок #page-promo
  document.getElementById('page-promo').style.display = 'block';
  // Прокрутить страницу к header--promo
  document.getElementById('header--promo').scrollIntoView();
}

// var myPlacemark = new ymaps.Placemark([41.028397,28.971935], null,{
// 	iconLayout: 'default#image',
// 	iconImageHref: "../img/map-ico.svg",
// 	iconImageSize: [47, 52],
// 	iconImageOffset: [-15, -44]
// });
// myMap.geoObjects.add(myPlacemark);
// анимация на планшете
// ['patternsGridWeb1', 'patternsGridWeb2'];
document.addEventListener("DOMContentLoaded", function () {
  const patternsGrids = ['patternsGridWeb1', 'patternsGridWeb2'];

  function initializePatternsGrid(id) {
    const patternsGrid = document.getElementById(id);

    if (!patternsGrid) {
      return;
    }

    const columns = [
      ['.line1-1', '.line2-1', '.line3-1', '.line4-1', '.line5-1', '.line6-1', '.line7-1', '.line8-1'],
      ['.line1-2', '.line2-2', '.line3-2', '.line4-2', '.line5-2', '.line6-2', '.line7-2', '.line8-2'],
      ['.line1-3', '.line2-3', '.line3-3', '.line4-3', '.line5-3', '.line6-3', '.line7-3', '.line8-3'],
      ['.line1-4', '.line2-4', '.line3-4', '.line4-4', '.line5-4', '.line6-4', '.line7-4', '.line8-4'],
      ['.line1-5', '.line2-5', '.line3-5', '.line4-5', '.line5-5', '.line6-5', '.line7-5', '.line8-5'],
      ['.line1-6', '.line2-6', '.line3-6', '.line4-6', '.line5-6', '.line6-6', '.line7-6', '.line8-6'],
      ['.line1-7', '.line2-7', '.line3-7', '.line4-7', '.line5-7', '.line6-7', '.line7-7', '.line8-7'],
      ['.line1-8', '.line2-8', '.line3-8', '.line4-8', '.line5-8', '.line6-8', '.line7-8', '.line8-8']
    ];

    function setInitialVisibility() {
      columns.forEach(column => {
        const patterns = column.map(patternClass => patternsGrid.querySelector(patternClass));
        const visibleIndices = [];

        while (visibleIndices.length < 4) {
          const randomIndex = Math.floor(Math.random() * patterns.length);
          if (!visibleIndices.includes(randomIndex)) {
            visibleIndices.push(randomIndex);
          }
        }

        patterns.forEach((pattern, index) => {
          if (pattern) {
            pattern.classList.toggle('visible', visibleIndices.includes(index));
          }
        });
      });
    }

    function toggleAnimation() {
      columns.forEach(column => {
        if (column) {
          const visibleIndices = [];

          while (visibleIndices.length < 2) {
            const randomIndex = Math.floor(Math.random() * column.length);
            if (!visibleIndices.includes(randomIndex)) {
              visibleIndices.push(randomIndex);
            }
          }

          setTimeout(() => {
            column.forEach((pattern, index) => {
              if (pattern) {
                const shouldBeVisible = visibleIndices.includes(index);
                const isVisible = pattern.classList && pattern.classList.contains('visible');

                if (shouldBeVisible && !isVisible) {
                  pattern.classList && pattern.classList.add && pattern.classList.add('visible');
                } else if (!shouldBeVisible && isVisible) {
                  pattern.classList && pattern.classList.remove && pattern.classList.remove('visible');
                } else if (!isVisible && !shouldBeVisible) {
                  pattern.classList && pattern.classList.add && pattern.classList.add('visible');
                }
              }
            });
          }, 0);
        }
      });
    }

    let currentVisiblePattern = null;

    setInterval(() => {
      setInitialVisibility();

      if (currentVisiblePattern !== null) {
        columns.forEach(column => {
          column.forEach((pattern, index) => {
            if (pattern) {
              const isVisible = pattern.classList && pattern.classList.contains('visible');
              const shouldBeVisible = currentVisiblePattern === pattern;

              if (isVisible && !shouldBeVisible) {
                pattern.classList && pattern.classList.remove && pattern.classList.remove('visible');
              } else if (!isVisible && shouldBeVisible) {
                pattern.classList && pattern.classList.add && pattern.classList.add('visible');
              }
            }
          });
        });
      }

      toggleAnimation();
    }, 600);

    window.addEventListener('resize', function () {
      setInitialVisibility();
      toggleAnimation();
    });
  }

  patternsGrids.forEach(id => {
    initializePatternsGrid(id);
  });
});


// magic скролл----------------------------
var scene;
var controller2;
var controller;

function initScrollMagic() {
  controller2 = new ScrollMagic.Controller({
    globalSceneOptions: {
      triggerHook: "onLeave"
    }
  });

  controller = new ScrollMagic.Controller({
    globalSceneOptions: {
      triggerHook: "onEnter"
    }
  });

  var slides = document.querySelectorAll("section.layer");
  for (var i = 0; i < slides.length; i++) {
    scene = new ScrollMagic.Scene({
      triggerElement: slides[i]
    })
      .setPin(slides[i])
      // .addIndicators()
      .addTo(controller2);
  }

  var unpinSlide = document.querySelectorAll("div.unpin");
  var scene2 = new ScrollMagic.Scene({
    triggerElement: unpinSlide[0]
  })
  // .addIndicators({
//     colorStart: "rgba(255,255,255,0.5)",
//     colorEnd: "rgba(255,255,255,0.5)", 
//     colorTrigger : "rgba(255,255,255,1)",
//     name: 'unpin'
// })
    .setClassToggle(".page-contacts, .page-promo ")
    .on("enter", function (e) {
      scene.destroy(true);
    })
    .addTo(controller);
}

function handleResize() {
  var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

  if (windowWidth >= 1600) {
    initScrollMagic();
  } else {
    if (controller) {
      controller.destroy(true);
    }
    if (controller2) {
      controller2.destroy(true);
    }
  }
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function () {
  handleResize();

  // Обработчик события изменения размера окна
  window.addEventListener('resize', function () {
    handleResize();
  });
});

// ховер логотипа
document.addEventListener('DOMContentLoaded', function () {
  var logoIcos = document.querySelectorAll('.header__logo-ico');

  logoIcos.forEach(function (logoIco) {
    var svgs = logoIco.querySelectorAll('svg');
    var currentIndex = 0;
    var intervalId;

    function changeLogo() {
      // Убираем класс "active" у текущего SVG
      svgs[currentIndex].classList.remove('active');

      // Переходим к следующему индексу
      currentIndex = Math.floor(Math.random() * svgs.length);

      // Добавляем класс "active" к новому текущему SVG
      svgs[currentIndex].classList.add('active');
    }

    logoIco.addEventListener('mouseenter', function () {
      // Начинаем интервал при наведении
      intervalId = setInterval(changeLogo, 300);
    });

    logoIco.addEventListener('mouseleave', function () {
      // Останавливаем интервал при уходе курсора
      clearInterval(intervalId);
    });
  });
});
// карта--------------------


