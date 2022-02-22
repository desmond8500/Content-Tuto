# Fonctions utiles

## Timer

```javascript
function delay(delay: number) {
    return new Promise(r => {
        setTimeout(r, delay);
    })
}

export class AuthPage implements OnInit {
    ngOnInit() {
    this.doTimer()
  }

    async doTimer() {
        for (let i = 0; i < this.counter; i++) {
        await delay(1000);
        this.counter = this.counter - 1;
        console.log(this.counter);
        }
    }
    }
```

## Timer2

```javascript
counter: { min: number, sec: number }

ngOnInit() {
    this.startTimer();
  }

  startTimer() {
    this.counter = { min: 2, sec: 0 } // choose whatever you want
    let intervalId = setInterval(() => {
      if (this.counter.sec - 1 == -1) {
        this.counter.min -= 1;
        this.counter.sec = 59
      }
      else this.counter.sec -= 1
      if (this.counter.min === 0 && this.counter.sec == 0) clearInterval(intervalId)
    }, 1000)
  }
```