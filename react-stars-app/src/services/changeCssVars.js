/*
Формат CSS-переменной:
--theme-default-УникальноеИмя # дефолтная переменная
--theme-light-УникальноеИмя   # для "light"
--theme-dark-УникальноеИмя    # для "dark"
--theme-neutral-УникальноеИмя # для "neitral"
*/

export const changeCssVars = (theme) => {
  const root = document.querySelector(':root');

  // root.style.setProperty('--theme-default-header', `var(--theme-${theme}-header)`);
  // root.style.setProperty('--theme-default-bg-image', `var(--theme-${theme}-bg-image)`);

  const cssVars = ['header', 'bg-image'];

  cssVars.forEach((element) => {
    root.style.setProperty(`--theme-default-${element}`, `var(--theme-${theme}-${element})`);
  });
};

// --theme-light-header: #dfe3df;
//   --theme-dark-header: #ca6c6f;
//   --theme-neutral-header: #cccc46;
