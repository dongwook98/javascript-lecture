// 접근제어자(외부에서 변경 불가능 하게 할 수 있다) - 캡슐화
// private(#), public(기본), protected
class Fruit {
  #name;
  #emoji;
  #type = '과일';
  constructor(name, emoji) {
    this.#name = name;
    this.#emoji = emoji;
  }
  display = () => {
    console.log(`${this.#name}: ${this.#emoji}`);
  };
}

const apple = new Fruit('apple', '🍎');
// apple.#name = '오렌지'; // SyntaxError: Private field '#name' must be declared in an enclosing class
//#field는 외부에서 접근이 불가능함
console.log(apple); // Fruit { display: [Function: display] }
apple.display(); // apple: 🍎
