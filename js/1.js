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
      if (window.innerWidth < 1000) {
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
      if (window.innerWidth > 1000 || !patternsGrid) {
        return;
      }

      const column = columns[columnIndex];
      const patterns = column.map(patternClass => patternsGrid.querySelector(patternClass)); // Здесь исправлено
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
      columns.forEach((column, index) => { // Здесь добавлено
        toggleRandomPatternVisibility(index);
      }); // Здесь добавлено
    });
  }

  patternsGrids.forEach(id => {
    initializePatternsGrid(id);
  });
});

// скрытие и показ блока с контактами в мобиле
function showContacts() {
  if (window.innerWidth < 1000) {
    document.getElementById('page-contacts').style.display = 'block';
    document.getElementById('page-promo').style.display = 'none';
    document.getElementById('header--contacts').scrollIntoView();
  } else if (window.innerWidth >= 1000 && window.innerWidth < 1600) {
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
      ['.line1-8', '.line2-8', '.line3-8', '.line4-8', '.line5-8', '.line6-8', '.line7-8', '.line8-8'],
      ['.line1-9', '.line2-9', '.line3-9', '.line4-9', '.line5-9', '.line6-7', '.line7-7', '.line8-7'],
      ['.line1-10', '.line2-10', '.line3-10', '.line4-10', '.line5-10', '.line6-10', '.line7-10', '.line8-10'],
      ['.line1-11', '.line2-11', '.line3-11', '.line4-11', '.line5-11', '.line6-11', '.line7-11', '.line8-11'],
      ['.line1-12', '.line2-12', '.line3-12', '.line4-12', '.line5-12', '.line6-12', '.line7-12', '.line8-12'],
      ['.line1-13', '.line2-13', '.line3-13', '.line4-13', '.line5-13', '.line6-13', '.line7-13', '.line8-13'],
      ['.line1-14', '.line2-14', '.line3-14', '.line4-14', '.line5-14', '.line6-14', '.line7-14', '.line8-14'],
      ['.line1-15', '.line2-15', '.line3-15', '.line4-15', '.line5-15', '.line6-15', '.line7-15', '.line8-15'],
      ['.line1-16', '.line2-16', '.line3-16', '.line4-16', '.line5-16', '.line6-16', '.line7-16', '.line8-16'],
      ['.line1-17', '.line2-17', '.line3-17', '.line4-17', '.line5-17', '.line6-17', '.line7-17', '.line8-17']
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

    function toggleAnimation(visibleIndices) {
      columns.forEach(column => {
        if (column) {
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
        }
      });
    }

    let currentVisiblePattern = null;

    setInterval(() => {
      setInitialVisibility();

      if (currentVisiblePattern !== null) {
        const visibleIndices = [];

        while (visibleIndices.length < 2) {
          const randomIndex = Math.floor(Math.random() * 8);
          if (!visibleIndices.includes(randomIndex)) {
            visibleIndices.push(randomIndex);
          }
        }

        toggleAnimation(visibleIndices);
      }

      currentVisiblePattern = currentVisiblePattern === null ? 0 : (currentVisiblePattern + 1) % 8;
    }, 600);

    window.addEventListener('resize', function () {
      setInitialVisibility();
    });
  }

  patternsGrids.forEach(id => {
    initializePatternsGrid(id);
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
});document.addEventListener('DOMContentLoaded', function() {
  const buttonToContacts = document.querySelector('.button--toContacts');

  if (buttonToContacts) {
    buttonToContacts.addEventListener('click', function() {
      simulateMultipleWheelScrolls(5); // Вызываем функцию для эмуляции прокрутки
    });
  }
});

function simulateMultipleWheelScrolls(steps) {
  let step = 0;
  const simulateScroll = () => {
    if (step < steps) {
      handleWheel(); // Вызываем обработчик прокрутки
      step++;
      setTimeout(simulateScroll, 250); // Вызываем следующую эмуляцию через 250 мс
    }
  };
  simulateScroll();
}

function anim(el) {
  console.log(scroll.start, scroll.fin);
  const preactive = document.querySelector('.preactive');
  if (scroll.direction > 0) {
    if (scroll.step === 0)
      scroll.step = (scroll.start - scroll.fin) / (scroll.delay / 10);
    if (scroll.start > scroll.fin && scroll.start >= 0) {
      setTimeout(function () {
        scroll.start += -scroll.step;
        preactive.style.zIndex = 91
        el.style.webkitMaskImage =
          'linear-gradient(#000 ' + scroll.start + '%, transparent ' + scroll.start + '%)';
        anim(el);
      }, 10);
    } 
    if (scroll.start<=0 && scroll.fin<=0) {
      preactive.style.zIndex = 101
    }
    else if (scroll.start < 0) {
      scroll.start = 0;
      
    }
  } 
  
  else if (scroll.direction < 0) {
    console.log(scroll.start, scroll.fin);
    if (scroll.step === 0)
      scroll.step = (scroll.fin - scroll.start) / (scroll.delay / 10);
    if (scroll.start < scroll.fin && scroll.start <= 100) {
      preactive.style.zIndex = 91
      setTimeout(function () {
        scroll.start += scroll.step;
        console.log(scroll.start);
        el.style.webkitMaskImage =
          'linear-gradient(#000 ' + scroll.start + '%, transparent ' + scroll.start + '%)';
        anim(el);
      }, 10);
    } else if (scroll.start > 100) {
      scroll.start = 100;
    }
  }
}

let scroll = {
  start: 100,
  fin: 0,
  step: 0,
  delay: 250,
  direction: 100
};

let disable = false;

function handleWheel(event) {
  if (window.innerWidth > 1600 && !disable) {
    disable = true;
    scroll.direction = 25 * Math.sign(event ? event.deltaY : 100); // Если передано событие, используем его, в противном случае прокрутка вверх
    scroll.fin = scroll.start - scroll.direction;
    anim(document.querySelector('section.active'));
    setTimeout(() => {
      disable = false;
    }, scroll.delay);
  }
}

document.addEventListener('wheel', handleWheel);


