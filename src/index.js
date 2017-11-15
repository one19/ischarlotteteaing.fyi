var m = require("mithril")
import { injectGlobal } from 'emotion'

injectGlobal`
* {
  margin: 0;
  padding: 0;
  height: 100%;
  min-height: 100%;
  width: 100%;
  box-sizing: border-box;
}
h1 { font-size: 36px;}
h2 { font-size: 32px;}
h3 { font-size: 28px;}
h4, label { font-size: 24px;}
h5 { font-size: 20px;}
h6, p, div { font-size: 16px;}
`;

m.render(document.body, <h1>hello world</h1>)
