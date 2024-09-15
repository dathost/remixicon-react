## Installation

```bash
npm install dathost-remixicon-react
```

## Usage

Just search for an icon on [remixicon.com](https://remixicon.com) and look for its name.  
The name translates to Svg followed by the name in `remixicon-react` converted to PascalCase.

For example the icons named `alert-line` and `alert-fill`:

```javascript
import SvgAlertLine from 'dathost-remixicon-react/SvgAlertLine';
import SvgAlertFill from 'dathost-remixicon-react/SvgAlertFill';

const MyComponent = () => {
  return (
    <div>
      <SvgAlertFill />
      <SvgAlertLine className="some-class" />
    </div>
  );
};
```
