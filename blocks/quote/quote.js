export default function decorate(block) {
  const quoteDiv = block.querySelector(':scope > div > div');
  console.log(quoteDiv);

  const blockquote = document.createElement('blockquote');

  blockquote.innerHTML = `${quoteDiv.innerHTML}`;

  quoteDiv.parentElement.replaceWith(blockquote);
}