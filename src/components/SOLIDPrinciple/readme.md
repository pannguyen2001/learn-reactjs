2025-09-28

No need follow strictly all principles, just apply which i find that it need. Over application can be make it unecessary complex ans hard to understand, debug.

Final aim: better, but simple, reusable, easy to understand, easy to widen vertically and horizontally and maintain.

First, run successfully, then improvement step by step without breaking base.core/current prj

GG search key word and result need:

[SOLID principle in react]
- [SOLID Principles in React: A Simple and Practical Guide (***)] https://blog.incubyte.co/blog/solid-principles-in-react-a-simple-and-practical-guide/

- [] https://dev.to/drruvari/mastering-solid-principles-in-react-easy-examples-and-best-practices-142b

- [] https://dev.to/rahulvijayvergiya/understanding-solid-principles-and-their-implementation-in-react-fm5

- [(*)] https://jsdev.space/solid-design-react/

[Open/close pinciple vs Liskov Substitution Principle (LSP) react]
- [Open-Closed Principle in React] https://dev.to/mikhaelesa/open-closed-principle-in-react-1lgd

- [] https://softwareengineering.stackexchange.com/questions/244773/is-method-overriding-always-a-violation-of-liskov-substitution-principle

- [] https://cekrem.github.io/posts/open-closed-principle-in-react/

[Liskov Substitution Principle (LSP) in react]
- [] https://github.com/Safnaj/React-SOLID-Principles

- [] https://softwareengineering.stackexchange.com/questions/178488/lsp-vs-ocp-liskov-substitution-vs-open-close

- [] https://blog.logrocket.com/liskov-substitution-principle-lsp/

1. Single responsibility principle: A component should have only one reason to change, meaning it should have only one job.

Meaning: 1 component should be 1 function, or logic, ur UI,.... Not let compoment handle >=2 jobs.

seperate into: logic(fetch data, logger,..) and UI update


2. Open/Close principle: can be add more function/ props,.., but not modify current code.
(Can add more, but not modify current props)
(add but not change origin)

Child can extend and winden parent but not change or modify parent, like extend/ implement/ inherit

create base component and extend it, should not modify base component or add more props to identify child component

In React: This is achieved through techniques like:
- Composition: Using props and children to pass functionality or render different content within a component without changing the component's internal logic.
- Higher-Order Components (HOCs) or Render Props: Encapsulating reusable logic that can be applied to multiple components.
- Custom Hooks: Abstracting stateful logic and side effects for reuse across components.

ex:
// Button.js
const Button = ({ onClick, children, style }) => {
  return (
    <button onClick={onClick} style={style}>
      {children}
    </button>
  );
};

// Usage
const PrimaryButton = (props) => {
  const primaryStyle = { backgroundColor: 'blue', color: 'white' };
  return <Button {...props} style={primaryStyle} />;
};

// Create base button component and extend it, by create new component and add more props to new component


NOT:
// IncorrectButton.js
// Modifying the original Button component directly for a specific style
const Button = ({ onClick, children, primary }) => {
  const style = primary ? { backgroundColor: 'blue', color: 'white' } : null;
  return (
    <button onClick={onClick} style={style}>
      {children}
    </button>
  );
};

// If have more button type, ex: warning button, you add more props, like 'waring' into current prop: { onClick, children, primary }, like you added icon to origin prop { onclick, children } => INCORRECT

// But i think this ex is still issue, not so reusable => need improve it, for more reusable with more props can be

3. Liskov Substitution Principle (LSP): Children can replace parent, and not break prj. It mean children can extend parent, but not change what parent do
(extend prop but not change behavior, meaning parent has action/prop 1, 2, chidren laso do action 1, 2 as parent, instead of can not, and children can replace parent)
(add but not break out)

// Base component providing a layout
const Card = ({ children }) => (
    <div style={{ border: '1px solid gray', padding: '10px' }}>
    {children}
    </div>
);

// Specialized component using composition
const UserCard = ({ user }) => (
    <Card>
    <h3>{user.name}</h3>
    <p>{user.email}</p>
    </Card>
);

// UserCard is a "substitute" for Card in the sense that it provides a Card-like structure
// but with specific content, without breaking the Card's fundamental layout role.

parent as a core layout, children can be extendable layout with diffrerent props add-on, but like father like son, the work the same in common behaviors.


In React: This applies to:
- Component Composition: If a component expects a certain set of props, any component passed as a prop that provides those props should work without issues.

- Polymorphism: Ensuring that different components that serve a similar purpose can be swapped out without breaking the application.


OCP vs LSP
Key Differences and Relationship:
Focus:
- OCP: how to introduce new features without modifying existing code
- LSP: the behavioral contract between a type and its subtypes, ensure they are work on the same.

Mechanism:
- OCP: composition and extension mechanisms (props, HOCs, hooks)
- LSP: behavioral compatibility when substituting components or data structures.
- Interplay: Adhering to LSP can often facilitate OCP. If your components are designed to be easily substitutable (LSP), it becomes easier to extend their functionality without modification (OCP). For instance, if a component adheres to a specific prop interface (LSP), you can easily create new components that also adhere to that interface and use them interchangeably, extending your application's capabilities without changing the original component.

4. Interface Segregation Principle (ISP): Meaning component should only reveive necessary props, no unecessary extra

It can be relates to first principle
Beake it out to smaller ans simpler

Ex:
// Text.js
const Text = ({ type, children }) => {
  switch (type) {
    case 'header':
      return <h1>{children}</h1>;
    case 'title':
      return <h2>{children}</h2>;
    default:
      return <p>{children}</p>;
  }
};

// NOT:
// IncorrectText.js
// This component expects multiple unrelated props, cluttering the interface
const IncorrectText = ({ type, children, onClick, isLoggedIn }) => {
  if (isLoggedIn && onClick) {
    return <a href="#" onClick={onClick}>{children}</a>;
  }
  return type === 'header' ? <h1>{children}</h1> : <p>{children}</p>;
};

// Need break it out


5. Dependency Inversion Principle (DIP): High-level modules should not depend on low-level modules. Both should depend on abstractions.
Example: get/post/put data
Shouldn't hard code fetch data inside component, need create abstract hook or wrapper function to handle it

Ex:
// useUserData.js (Abstraction)
const useUserData = (userId) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchData(userId).then(setUser);
  }, [userId]);

  return user;
};

// UserProfile.js
const UserProfile = ({ userId }) => {
  const user = useUserData(userId);

  if (!user) return <p>Loading...</p>;
  return <div><h1>{user.name}</h1></div>;
};

// NOT:
// IncorrectUserProfile.js
const IncorrectUserProfile = ({ userId }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetching data directly inside the component
    fetch(`https://api.example.com/users/${userId}`)
      .then(response => response.json())
      .then(setUser);
  }, [userId]);

  if (!user) return <p>Loading...</p>;
  return <div><h1>{user.name}</h1></div>;
};

// Hard code data fetching inside component => Incorrect, can be repeat and increase size, hard to debug

-------------------------------------------------------------------------------

2025-10-03

[Component Composition Pattern]
- [] https://legacy.reactjs.org/docs/composition-vs-inheritance.html