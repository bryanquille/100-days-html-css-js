const tasks = document.getElementsByName('task');
const text = document.querySelector('#text');
const form = document.querySelector('#form');
const btn = document.querySelector('#btn');
const result = document.querySelector('#result');
const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const key = "password";
let taskValue = 'encrypt';

function VigenereCipher(key, abc) {
    this.key = key;
    this.abc = abc;
    this.keyword = function (text) {
      let j = 0;
      let keywordStr = "";
      for (let i = 0; i < text.length; i++) {
        if (j === this.key.length) j = 0;
        keywordStr += this.key[j];
        j++;
      }
      return keywordStr;
    }
  
    this.encode = function (str) {
      let encodeStr = "";
      const keywordStr = this.keyword(str);
      for (let i = 0; i < str.length; i++) {
        if (abc.includes(str[i])) {
          const pos = (abc.indexOf(str[i]) + abc.indexOf(keywordStr[i])) % abc.length;
          encodeStr += abc[pos]
        } else {
          encodeStr += str[i];
        }
      }
      return encodeStr;
    };
  
    this.decode = function (str) {
      let decodeStr = "";
      const keywordStr = this.keyword(str);
      for (let i = 0; i < str.length; i++) {
        if (abc.includes(str[i])) {
          const pos = (abc.indexOf(str[i]) - abc.indexOf(keywordStr[i])) % abc.length;
          decodeStr += abc.at(pos);
        } else {
          decodeStr += str[i];
        }
      }
      return decodeStr;
    };
}
  

tasks.forEach(task => {
    task.addEventListener('change', () => {
        if (task.checked) {
            taskValue = task.value;
            btn.textContent = taskValue;
            text.value = '';
        }
    });
});

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let c = new VigenereCipher(key, alphabet);
    const textValue = text.value;
    if (taskValue === 'encrypt') {
        result.textContent = c.encode(textValue);
    } else if (taskValue === 'decrypt') {
        result.textContent = c.decode(textValue);
    }
});
