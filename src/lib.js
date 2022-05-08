export function handlePages(pages) {
  const newArr = [];
  let len = pages.length - 1;
  if (len % 2 !== 0) {
    len++;
  }
  for (let page of pages) {
    for (let i = 0; i <= page.pageIndex; i++) {
      if (page.pageIndex === i) {
        if (i % 2 === 0) {
          newArr.push([pages[i], pages[page.pageIndex + 1]]);
        }
      }
    }
  }
  return newArr;
}