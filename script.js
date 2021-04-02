const textareaInput = document.querySelector('#textarea-input');
const btnConvert = document.querySelector('#btn-convert');
const divResult = document.querySelector('#div-result');
const btnCopy = document.querySelector('#btn-copy');

const convertNumber = (numbers) => {
  const value = textareaInput.value;
  if (value === '') {
    alert('Campo vazio');
  } else {
    const result = value.split(/\s/);
    const newRe = result.join("',\r\n'");
    console.log(`('${newRe}')`);
    textareaInput.value = `('${newRe}')`;
  }
}

const btnCopyFunc = (event) => {
  event.preventDefault();
  const copyText = textareaInput;
  if (copyText.value === '') {
    alert('Campo vazio');
  } else {
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Texto copiado: " + copyText.value);
  }
}

btnConvert.addEventListener("click", convertNumber);

btnCopy.addEventListener("click", btnCopyFunc);