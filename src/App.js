import "./App.scss";
import {Odometer} from './Odometer'


function App() {
  return (
    <div className="App">
      <header className="App-header">Simple Odometer Library Demo</header>
      <main>
        <section className="container1">
          <Odometer
            classN="odo1"
            num="9384756"
            fontSize={30}
            gap={20}
            animationSpeed={3}
            animationTimingStyles="linear"
          />

          <div className="pre">
            <span className="code">
              &#60;Odometer classN="odo1" num=&#123;9384756&#125;
              fontSize=&#123;30&#125; gap=&#123;20&#125;
              animationSpeed=&#123;3&#125;
              animationTimingStyles=&#123;linear&#125; /&#62;
            </span>
          </div>
        </section>

        <section className="container2">
          <Odometer
            classN="odo2"
            num="7832188"
            fontSize={50}
            gap={40}
            animationSpeed={10}
            reverse={true}
          />

          <div className="pre">
            <span className="code">
              &#60;Odometer classN="odo2" num='7832188'
              fontSize=&#123;50&#125; gap=&#123;40&#125;
              animationSpeed=&#123;10&#125;
              reverse=&#123;true&#125; /&#62;
            </span>
          </div>
        </section>

        <section className="container3">
          <Odometer
            classN="odo3"
            num="693258"
            gap={20}
            animationTimingStyles='ease-in-out'
          />

          <div className="pre">
            <span className="code">
              &#60;Odometer classN="odo3" num=&#123;693258&#125;
              gap=&#123;20&#125;
              animationTimingStyles='ease-in-out' /&#62;
            </span>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
