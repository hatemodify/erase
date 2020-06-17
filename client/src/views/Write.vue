<template>
  <div>
    <input type="text" v-model="title" />
    <ul class="list-category">
      <li v-for="item in categoryList" :key="item.code">
        <label :for="`category-${item.code}`">{{item.name}}</label>
        <input type="radio" :value="item.code" v-model="category" :id="`category-${item.code}`" />
      </li>
    </ul>
    <editor-menu-bar :editor="editor" v-slot="{ commands, isActive }">
      <div class="menubar">
        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.bold() }"
          @click="commands.bold"
        >
          <icon name="bold" />
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.italic() }"
          @click="commands.italic"
        >
          <icon name="italic" />
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.strike() }"
          @click="commands.strike"
        >
          <icon name="strike" />
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.underline() }"
          @click="commands.underline"
        >
          <icon name="underline" />
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.code() }"
          @click="commands.code"
        >
          <icon name="code" />
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.heading({ level: 1 }) }"
          @click="commands.heading({ level: 1 })"
        >H1</button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.heading({ level: 2 }) }"
          @click="commands.heading({ level: 2 })"
        >H2</button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.heading({ level: 3 }) }"
          @click="commands.heading({ level: 3 })"
        >H3</button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.bullet_list() }"
          @click="commands.bullet_list"
        >
          <icon name="ul" />
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.ordered_list() }"
          @click="commands.ordered_list"
        >
          <icon name="ol" />
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.blockquote() }"
          @click="commands.blockquote"
        >
          <icon name="quote" />
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.code_block() }"
          @click="commands.code_block"
        >
          <icon name="code" />
        </button>

        <button class="menubar__button" @click="commands.horizontal_rule">
          <icon name="hr" />
        </button>

        <button class="menubar__button" @click="commands.undo">
          <icon name="undo" />
        </button>

        <button class="menubar__button" @click="commands.redo">
          <icon name="redo" />
        </button>
        <button class="menubar__button" @click="showImagePrompt(commands.image)">
          <icon name="image" />
        </button>
      </div>
    </editor-menu-bar>
    <editor-content class="editor__content" :editor="editor" />
    <button class="btn-write" @click="write()">write!</button>
  </div>
</template>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { Editor, EditorContent, EditorMenuBar } from 'tiptap'
import { namespace } from 'vuex-class'
import { EditorIcon } from '../components'
import { CATEGORY } from '../constants'

import {
  Blockquote,
  CodeBlock,
  HardBreak,
  Heading,
  HorizontalRule,
  OrderedList,
  BulletList,
  ListItem,
  TodoItem,
  TodoList,
  Bold,
  Code,
  Italic,
  Link,
  Strike,
  Underline,
  History,
  Image,
  CodeBlockHighlight,
} from 'tiptap-extensions'
import javascript from 'highlight.js/lib/languages/javascript'
import css from 'highlight.js/lib/languages/css'
import scss from 'highlight.js/lib/languages/scss'
import typescript from 'highlight.js/lib/languages/css'
import '@/assets/style/atom-one-dark.scss'

import { JavaScriptExample, CSSExample, ExplicitImportExample } from './example'

const post = namespace('Post')
@Component({
  components: {
    Editor,
    EditorMenuBar,
    EditorContent,
    Icon: EditorIcon,
  },
})
export default class Write extends Vue {
  public title: any = ''
  public categoryList = CATEGORY
  public category: any = ''
  public editor = new Editor({
    extensions: [
      new Blockquote(),
      new BulletList(),
      new CodeBlock(),
      new HardBreak(),
      new Heading({ levels: [1, 2, 3] }),
      new HorizontalRule(),
      new ListItem(),
      new OrderedList(),
      new TodoItem(),
      new TodoList(),
      new Link(),
      new Bold(),
      new Code(),
      new Italic(),
      new Strike(),
      new Underline(),
      new History(),
      new Image(),
      new CodeBlockHighlight({
        languages: {
          javascript,
          css,
        },
      }),
    ],
    content: `                   <h2>
            Code Highlighting
          </h2>
          <p>
            These are code blocks with <strong>automatic syntax highlighting</strong> based on highlight.js.
          </p>
          <pre><code>${JavaScriptExample}</code></pre>
          <pre><code>${CSSExample}</code></pre>
          <p>
            Note: tiptap doesn't import syntax highlighting language definitions from highlight.js. You
            <strong>must</strong> import them and initialize the extension with all languages you want to support:
          </p>
          <pre><code>${ExplicitImportExample}</code></pre>`,
  })
  @post.Action
  public writePost!: (postData: any) => void
  write() {
    const postData = {
      title: this.title,
      category: this.category,
      contents: this.editor.view.docView.dom.innerHTML
    }
    this.writePost(postData)
    console.log()
  }
}
</script>

<style lang="scss" >
$color-black: #000000;
$color-white: #ffffff;
$color-grey: #dddddd;
button {
  background: none;
  border: none;
}

h1,
h2,
h3 {
  line-height: 1.3;
}

.button {
  font-weight: bold;
  display: inline-flex;
  background: transparent;
  border: 0;
  color: $color-black;
  padding: 0.2rem 0.5rem;
  margin-right: 0.2rem;
  border-radius: 3px;
  cursor: pointer;
  background-color: rgba($color-black, 0.1);

  &:hover {
    background-color: rgba($color-black, 0.15);
  }
}

.message {
  background-color: rgba($color-black, 0.05);
  color: rgba($color-black, 0.7);
  padding: 1rem;
  border-radius: 6px;
  margin-bottom: 1.5rem;
  font-style: italic;
}
.menububble {
  position: absolute;
  display: flex;
  z-index: 20;
  background: $color-black;
  border-radius: 5px;
  padding: 0.3rem;
  margin-bottom: 0.5rem;
  transform: translateX(-50%);
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.2s, visibility 0.2s;

  &.is-active {
    opacity: 1;
    visibility: visible;
  }

  &__button {
    display: inline-flex;
    background: transparent;
    border: 0;
    color: $color-white;
    padding: 0.2rem 0.5rem;
    margin-right: 0.2rem;
    border-radius: 3px;
    cursor: pointer;

    &:last-child {
      margin-right: 0;
    }

    &:hover {
      background-color: rgba($color-white, 0.1);
    }

    &.is-active {
      background-color: rgba($color-white, 0.2);
    }
  }

  &__form {
    display: flex;
    align-items: center;
  }

  &__input {
    font: inherit;
    border: none;
    background: transparent;
    color: $color-white;
  }
}

.menubar {
  margin-bottom: 1rem;
  transition: visibility 0.2s 0.4s, opacity 0.2s 0.4s;

  &.is-hidden {
    visibility: hidden;
    opacity: 0;
  }

  &.is-focused {
    visibility: visible;
    opacity: 1;
    transition: visibility 0.2s, opacity 0.2s;
  }

  &__button {
    font-weight: bold;
    display: inline-flex;
    background: transparent;
    border: 0;
    color: $color-black;
    padding: 0.2rem 0.5rem;
    margin-right: 0.2rem;
    border-radius: 3px;
    cursor: pointer;

    &:hover {
      background-color: rgba($color-black, 0.05);
    }

    &.is-active {
      background-color: rgba($color-black, 0.1);
    }
  }

  [class^='__button'] {
    font-size: 13.3333px;
  }
}

.editor__content {
  border: 1px solid #e3e3e3;
  position: relative;
  max-width: 30rem;
  margin: 0 auto 5rem auto;
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-word;

  * {
    caret-color: currentColor;
  }


  ul,
  ol {
    padding-left: 1rem;
  }

  li > p,
  li > ol,
  li > ul {
    margin: 0;
  }

  a {
    color: inherit;
  }

  blockquote {
    border-left: 3px solid rgba($color-black, 0.1);
    color: rgba($color-black, 0.8);
    padding-left: 0.8rem;
    font-style: italic;

    p {
      margin: 0;
    }
  }

  img {
    max-width: 100%;
    border-radius: 3px;
  }

  table {
    border-collapse: collapse;
    table-layout: fixed;
    width: 100%;
    margin: 0;
    overflow: hidden;

    td,
    th {
      min-width: 1em;
      border: 2px solid $color-grey;
      padding: 3px 5px;
      vertical-align: top;
      box-sizing: border-box;
      position: relative;
      > * {
        margin-bottom: 0;
      }
    }

    th {
      font-weight: bold;
      text-align: left;
    }

    .selectedCell:after {
      z-index: 2;
      position: absolute;
      content: '';
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background: rgba(200, 200, 255, 0.4);
      pointer-events: none;
    }

    .column-resize-handle {
      position: absolute;
      right: -2px;
      top: 0;
      bottom: 0;
      width: 4px;
      z-index: 20;
      background-color: #adf;
      pointer-events: none;
    }
  }

  .tableWrapper {
    margin: 1em 0;
    overflow-x: auto;
  }

  .resize-cursor {
    cursor: ew-resize;
    cursor: col-resize;
  }
}


</style>
