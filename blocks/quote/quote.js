export default function decorate(block) {
  const quoteDiv = block.quoteSelector(':scope > div > div');
  console.log(quoteDiv, "dupa blada");

  const blockquote = document.createElement(tagName: 'blockquote');

}