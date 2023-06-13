/**
 *Descobrir qual é a largura da minha sidebar e da minha
  main section para reajustar a largura do meu header e
  do meu footer.
 */
const sidebar = document.querySelector('.sidebar')
const mainSection = document.querySelector('.main-section')

const larguraSidebar = sidebar.offsetWidth;
const larguraMainSection = mainSection.offsetWidth;

const larguraTotal = larguraMainSection + larguraSidebar;

console.log('Largura total', larguraTotal, 'px')