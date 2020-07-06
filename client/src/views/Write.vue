<template>
  <div class="content-inner">
    <input type="text" v-model="title" class="tf-title" placeholder="Title" />
    <ul class="list-category">
      <li v-for="item in categoryList" :key="item.code">
        <input
          type="radio"
          :value="item.code"
          v-model="category"
          :id="`category-${item.code}`"
          class="inp-category"
        />
        <label :for="`category-${item.code}`" class="lab-category">{{item.name}}</label>
      </li>
    </ul>
    <editor-menu :editor="editor" />
    <editor-content class="editor__content" :editor="editor" ref="editorContent" />
    <div class="ov-h">
      <button class="btn-write" @click="write()">write!</button>
      <router-link to="/">back</router-link>
    </div>
  </div>
</template>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { Editor, EditorContent, EditorMenuBar } from 'tiptap'
import { namespace, State, Mutation } from 'vuex-class'
import { EditorIcon, EditorMenu } from '../components'
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

const post = namespace('Post')
@Component({
  components: {
    Editor,
    EditorMenuBar,
    EditorContent,
    EditorMenu,
    Icon: EditorIcon,
  },
})
export default class Write extends Vue {
  public title: any = ''
  public categoryList = CATEGORY
  public category: any = ''
  public postImage: any = []
  public preview = ''
  public editor = new Editor({
    extensions: [
      new Blockquote(),
      new BulletList(),
      new CodeBlock(),
      new HardBreak(),
      new Heading({ levels: [1, 2, 3, 4, 5] }),
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
    content: ``,
  })
  public html = ''

  @Mutation
  public setDimmedStatus!: () => void

  @post.Action
  public writePost!: (postData: any) => void

  write() {
    if (!this.title || !this.category) return
    let html
    const editorContents = this.editor.view.docView.dom.innerHTML
    const imageSrc = []
    const rex = /([^>"']*(?:base64)+[^>"']+)["']?[^>]*>/g
    while ((html = rex.exec(editorContents))) {
      imageSrc.push(html[1].split(';base64').pop())
    }

    const postData = {
      title: this.title,
      category: this.category,
      contents: editorContents,
      imageSrc,
    }
    this.writePost(postData)
  }

}
</script>

<style lang="scss" >
.tf-title {
  display: block;
  font-size: 24px;
  border: none;
  border-bottom: 1px solid #e3e3e3;
  width: 100%;
  margin-bottom: 20px;
  padding-bottom: 5px;
  outline: none;
  &::-webkit-input-placeholder {
    color: #999;
  }
}
.inp-hide,
.inp-category {
  position: absolute;
  left: -9999px;
  top: -9999px;
  height: 0px;
  width: 0px;
}
.list-category {
  overflow: hidden;
  max-width: 980px;
  margin-bottom: 10px;
  border-right: 1px solid #e3e3e3;
  li {
    float: left;
    border: 1px solid #e3e3e3;
    font-size: 13px;
    width: 14.2857%;
    border-right: 0 none;
  }
  .inp-category:checked + .lab-category {
    background: #333;
    color: #fff;
    border: none;
    font-weight: bold;
  }
  .lab-category {
    display: block;
    line-height: 30px;
    cursor: pointer;
    text-align: center;
  }
}
.editor-wrap {
  max-width: 980px;
}
.lab-file {
  cursor: pointer;
  height: 12px;
}
.btn-write {
  float: right;
  height: 40px;
  width: 120px;
  color: #fff;
  background: #333;
}
</style>
