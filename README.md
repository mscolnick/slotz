# Slotz

Teleport React components into anywhere into the react-tree.

Modernized from [react-slot-fill](https://github.com/camwest/react-slot-fill)

## Example

```tsx
// slotz.js
class Toolbar extends Component {
  static Item = ({ label }: { label: string }) => (
    <Fill name="Toolbar.Item">
      <button>{label}</button>
    </Fill>
  );

  render() {
    return (
      <nav>
        <Slot name="Toolbar.Item" />
      </nav>
    );
  }
}

class Footer extends Component {
  static Item = ({ href, label }: { href: string; label: string }) => (
    <Fill name="Footer.Item">
      <a href={href}>{label}</a>
    </Fill>
  );

  render() {
    return (
      <footer>
        <Slot name="Footer.Item" />
      </footer>
    );
  }
}

// my-page.js
const Feature = () => {
  return (
    <div>
      <Toolbar.Item label="Home 2" />
      <Toolbar.Item label="About" />
      <Footer.Item label="Twitter" href="twitter.com/reactjs" />
    </div>
  );
};

const MyPage = () => {
  return (
    <Provider>
      <div className="main">
        <Toolbar />
        <Footer />
        <Feature />
      </div>
    </Provider>
  );
};

// HTML
<div className="main">
  <nav>
    <button>Home 2</button>
    <button>About</button>
  </nav>
  <footer>
    <a href="twitter.com/reactjs">Twitter</a>
  </footer>
  <div />
</div>;
```
