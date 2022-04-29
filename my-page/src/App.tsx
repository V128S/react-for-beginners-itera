import "./App.css";

type MyDataProps = {
  name: string;
  surname: string;
};

const startDate: string = "2022-04-28";
const birthday: string = "1991-07-08";
let today: Date = new Date();
let start: Date = new Date(startDate);
let startBirth: Date = new Date(birthday);
let timeFromStart: number = today.getTime() - start.getTime();
let timeFromBirth: number = today.getTime() - startBirth.getTime();
let daysBetweenDates: number = Math.ceil(timeFromStart / 1000 / 60 / 60 / 24);
let daysBetweenBirth: number = Math.floor(
  timeFromBirth / 1000 / 60 / 60 / 24 / 7 / 52
);

const MyData: React.FC<MyDataProps> = (props) => (
  <div className="App-header">
    <span className="myName">
      Hi, my name is: {props.name} {props.surname}
    </span>{" "}
    <br />
    <span className="myAge">I'm: {daysBetweenBirth} years old!</span> <br />
    <p className="myBio">
      I begin to learn React and will continue it until get a job! <br />
      My journey longs about <span className="myDate">
        {daysBetweenDates}
      </span>{" "}
      days since I start! <br /> <br />
      Here's my contacts:
    </p>
    <div className="myLinks">
      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://fb.me/V128S"
            className="App-link"
          >
            FaceBook
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/V128S"
            className="App-link"
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://t.me/VI2US"
            className="App-link"
          >
            Telegram
          </a>
        </li>
      </ul>
    </div>
  </div>
);

const App = () => (
  <div className="App">
    <MyData name="Denys" surname="Saltan" />
  </div>
);

export default App;
