export const JavaScriptExample = `function $initHighlight(block, flags) {
    return a
}`
  
  export const CSSExample = `@font-face {
    font-family: Chunkfive; src: url('Chunkfive.otf');
  }
  body, .usertext {
    color: #F0F0F0; background: #600;
    font-family: Chunkfive, sans;
  }
  @import url(print.css);
  @media print {
    a[href^=http]::after {
      content: attr(href)
    }
  }`
  
  
  export const ExplicitImportExample = `import javascript from 'highlight.js/lib/languages/javascript'
  import css from 'highlight.js/lib/languages/css'
  import { Editor } from 'tiptap'
  import {
    CodeBlockHighlight,
  } from 'tiptap-extensions'
  export default {
    components: {
      Editor,
    },
    data() {
      return {
        extensions: [
          new CodeBlockHighlight({
            languages: {
              javascript,
              css,
            },
          })
        ]
      }
    }
  }`;
