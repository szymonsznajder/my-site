export default function hero(block) {
  const heroPretitle = block.querySelector('#adapt-evolve-grow');
  heroPretitle.classList.add('pretitle');

  const embraceChange = block.querySelector('#embrace-change');
  const heroTitle = document.createElement('h1');
  heroTitle.innerHTML = `${embraceChange.innerHTML}`;
  embraceChange.replaceWith(heroTitle);
}
