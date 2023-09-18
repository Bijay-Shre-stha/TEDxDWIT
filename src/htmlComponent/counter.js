class Counter extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
        this.startCountdown();
    }

    render() {
        this.shadowRoot.innerHTML = `
        <style>
            .counter__container {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                padding: 20px;
                letter-spacing: 2px;
                margin-top: -25px;
                color: var(--primary)
            }
            .timing__container {
                display: flex;
                flex-direction: row;
                align-items: center;
                font-size: large;
            }
            .timing__box {
                display: flex;
                flex-direction: column;
                align-items: center;
                margin: 10px;
            }
            .timing__box__number {
                font-size: xx-large;
                font-weight: bold;
            }
            .timing__box__text {
                font-size: small;
                font-weight: bold;
            }
        </style>
        <div class="counter__container">
            <div class="timing__container">
                <div class="timing__box">
                    <div class="timing__box__number" style="color: var(--primary)">00:</div>
                    <div class="timing__box__text" style="color: var(--primary)">Days:</div>
                </div>
                <div class="timing__box">
                    <div class="timing__box__number" style="color: var(--tertiary)">00:</div>
                    <div class="timing__box__text" style="color: var(--tertiary)">Hours:</div>
                </div>
                <div class="timing__box">
                    <div class="timing__box__number" style="color: var(--tertiary)">00:</div>
                    <div class="timing__box__text" style="color: var(--tertiary)">Minutes:</div>
                </div>
                <div class="timing__box">
                    <div class="timing__box__number" style="color: var(--tertiary)">00</div>
                    <div class="timing__box__text" style="color: var(--tertiary)">Seconds</div>
                </div>
            </div>
        </div>
        `;
    }

    startCountdown() {
        const targetDate = new Date("2023-09-30T09:00:00").getTime();
        // const targetDate = new Date("2023-09-16T09:00:00").getTime();

        const updateCountdown = () => {
            const now = new Date().getTime();
            const timeRemaining = targetDate - now;

            if (timeRemaining <= 0) {
                clearInterval(interval);
                this.shadowRoot.querySelector('.counter__container').textContent = 'Event Started';
            } else {
                const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
                const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

                this.shadowRoot.querySelector('.timing__box__number').textContent = this.addLeadingZero(days) + ':';
                this.shadowRoot.querySelector('.timing__box__text').textContent = 'Days:';

                this.shadowRoot.querySelector('.timing__box:nth-child(2) .timing__box__number').textContent = this.addLeadingZero(hours) + ':';
                this.shadowRoot.querySelector('.timing__box:nth-child(2) .timing__box__text').textContent = 'Hours:';

                this.shadowRoot.querySelector('.timing__box:nth-child(3) .timing__box__number').textContent = this.addLeadingZero(minutes) + ':';
                this.shadowRoot.querySelector('.timing__box:nth-child(3) .timing__box__text').textContent = 'Minutes:';

                this.shadowRoot.querySelector('.timing__box:nth-child(4) .timing__box__number').textContent = this.addLeadingZero(seconds);
                this.shadowRoot.querySelector('.timing__box:nth-child(4) .timing__box__text').textContent = 'Seconds';
            }
        };

        const interval = setInterval(updateCountdown, 1000);
        updateCountdown();
    }

    addLeadingZero(number) {
        return number < 10 ? `0${number}` : number;
    }
}

customElements.define("my-counter", Counter);
