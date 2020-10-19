# Inheritance

User
  -properties
    -name
    -score
  -methods
    -increaseScroe: returns score increased by 1
    -decreaseScore: returna score decreased by 1

PaidUser
  -properties
    -name
    -score
    -balance
  -methods
    -increaseScroe: returns score increased by 1
    -decreaseScore: returna score decreased by 1
    -increaseBalance: returna balance decreased by 1

Using Inheritance convert the above into following patterns.

1. Prototypal Pattern
2. Pseudoclassical Pattern
3. Classes


```js

class User() {
  constructor(name, score = 0) {
    this.name = name;
    this.score = score;
  }

  increaseScore() {
    return this.score += 1;
  }

  decreaseScore() {
    return this.score -= 1;
  }
}

class PaidUser extends User {
  constructor(name, score = 0) {
    super(name. score);
    this.balance = balance;
  }

  increaseBalance() {
    return balance -= 1;
  }
}
```