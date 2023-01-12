# context-base-api
This is library help u with solve problem with rerenders and simplify DI to your pages.
# Basic Usage
take the next.js page as an example
```tsx
import { withContexts } from "context-base-api";

export default withContexts(TodoPage, [GlobalStore])
```

and also use our store in the component we need

```tsx

import { FC, PropsWithChildren } from "react";
import { connectContext } from "context-base-api";

export const TodoList = connectContext(
    [GlobalStore],
    ([{ notifications, todos }]) => ({ todos })
)(({ todos }) => {
    return (
        <div>
            {todos.map(({ name }) => (
                <div>{name}</div>
            ))}
        </div>
    );
});
```

# Stores

Create simple store

```tsx
export const MessagesStore = createStore(() => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<string[]>();

    const loadingItems = () => {
        setLoading(true);
        (() => {
            setData([]);
        })();
        setLoading(false);
    };

    return {
        state: { messages: { isLoading: loading, items: data } },
        actions: { loadingItems },
    };
});

```

Create store with dependencies another store

```tsx
export const MessagesStore = createStore(({notifications}) => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState < string[] > ();

    const loadingItems = () => {
        setLoading(true);
        (() => {
            setData([]);
        })();
        setLoading(false);
    };

    return {
        state: {messages: {isLoading: loading, items: data}},
        actions: {loadingItems},
    };
}, [GlobalStore.Context], 
    ({state: {notifications}}) => ({ notifications})
);

```

# Contribution
In the near future I would like to add several Contexts for use in connectContext.
If you have time you can help me with this 

# Donation
[Donation Alerts](https://www.donationalerts.com/r/stipafk)