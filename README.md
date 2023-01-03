# context-base-api
This is library help u with solve problem with rerenders and simplify DI to your pages.
# Basic Usage
take the next.js page as an example
```jsx
import { withContexts } from "context-base-api";

export default withContexts(TodoPage, [GlobalStore])
```

and also use our store in the component we need

```jsx

import { FC, PropsWithChildren } from "react";
import { connectContext } from "context-base-api";

export const TodoList = connectContext(
    GlobalStore,
    ({ notifications, todos }) => ({ todos })
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

# Contribution
In the near future I would like to add several Contexts for use in connectContext.
If you have time you can help me with this 

# Donation
[Donation Alerts](https://www.donationalerts.com/r/stipafk)