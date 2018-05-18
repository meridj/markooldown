export default function downloadMarkdownFile(data, filename, type) {
  const a = document.createElement('a');
  const file = new Blob([data], { type: type });
  const url = URL.createObjectURL(file);
  const fileStringToArray = filename.split('.');
  let completedFilName = '';

  if (fileStringToArray[fileStringToArray.length - 1] === 'md') {
    completedFilName = fileStringToArray.join('.');
  } else {
    fileStringToArray.push('md');
    completedFilName = fileStringToArray.join('.');
  }
  a.href = url;
  a.download = completedFilName;
  document.body.appendChild(a);
  a.click();
  setTimeout(() => {
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  }, 0);
}
