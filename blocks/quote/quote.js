export default function decorate(block) {
  const quoteDiv = block.quoteSelector(':scope > div > div');
  console.log(quoteDiv);

  const blockquote = document.createElement('blockquote');
}
