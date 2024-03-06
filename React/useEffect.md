# useEffect Hook

## On Mount (analog componentDidMount)

useEffect сработает лишь один раз, когда компонент появляется на экране,
то есть в результате "маунтинга" компонента, если массив зависимостей
(dependency array) будет пустым как в примере ниже.

```js
export const Text = () => {
  const [text, setText] = useState("");

  useEffect(() => {
    console.log("Component mounted");
  }, []);

  return (
    <div>
      <input onChange={(e) => setText(e.target.value)} />
      <p>{text}</p>
    </div>
  );
};
```

## On Any Re-Render (analog componentDidUpdate)

Если массив зависимостей вообще не предоставлять хуку, то
useEffect будет срабатывать при каждом "обновлении"
(ре-рендеринге) компонента, в том числе когда он замаунтится.

Любое изменение состояния (state) приводит к ре-рендерингу и
вызову useEffect.

```js
export const Text = () => {
  const [text, setText] = useState("");

  useEffect(() => {
    console.log("Runs on mount + any re-rendering");
  });

  return (
    <div>
      <input onChange={(e) => setText(e.target.value)} />
      <p>{text}</p>
    </div>
  );
};
```

## on Unmount (analog componentWillUnmount)

Если вернуть функцию в функции useEffect, то эта функция будет
вызвана только при уничтожении (анмаутинге) компонента.

```js
export const Text = () => {
  const [text, setText] = useState("");

  useEffect(() => {
    console.log("Runs on text state update + mount");

    return () => {
      console.log("Runs when component unmounts");
    };
  }, [text]);

  return (
    <div>
      <input onChange={(e) => setText(e.target.value)} />
      <p>{text}</p>
    </div>
  );
};
```

## Почему в React.StrictMode useEffect срабатывает дважды?

React.StrictMode в index.js/.ts :

```js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <React.StrictMode> // <- this
    <App/>
  <React.StrictMode>
);
```

Ответ:

Это происходит потому, что React.StrictMode заставляет компонент
маунтиться единожды, для проверки корректности работы useEffect
и компонента в целом,после чего компонент ан-маунтится и маунтится снова.

```js
export const Text = () => {
  const [text, setText] = useState("");

  useEffect(() => {
    console.log("Runs on text state update + mount");

    return () => {
      console.log("Runs when component unmounts");
    };
  }, [text]);

  return (
    <div>
      <input onChange={(e) => setText(e.target.value)} />
      <p>{text}</p>
    </div>
  );
};

//console result:
//"Runs on text state update + mount"
//"Runs when component unmounts"
//"Runs on text state update + mount"
```

### Больше о React.StrictMode:

React's StrictMode is sort of a helper component that will help you write better React components, you can wrap a set of components with <StrictMode /> and it'll basically:

Verify that the components inside are following some of the recommended practices and warn you if not in the console.
Verify the deprecated methods are not being used, and if they're used strict mode will warn you in the console.
Help you prevent some side effects by identifying potential risks.
As the documentation says, strict mode is development oriented so you don't need to worry about it impacting on your production build.

I've found it especially useful to implement strict mode when I'm working on new code bases and I want to see what kind of code/components I'm facing. Also if you're on bug hunting mode, sometimes it's a good idea to wrap with <StrictMode /> the components/blocks of code you think might be the source of the problem.

So yeah, you're in the correct path to understanding strict mode, keep it up, I think it's one of those things you understand better when you play with them, so go ahead and have some fun.
