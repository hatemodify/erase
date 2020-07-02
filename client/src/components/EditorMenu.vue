<template>
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
      <button class="menubar__button" for="aaa">
        <label for="inp-file" class="icon lab-file">
          <icon name="image" />
          <input type="file" ref="aaa" class="inp-hide" id="inp-file" @change="onFileChange" />
        </label>
      </button>
    </div>
  </editor-menu-bar>
</template>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { EditorMenuBar } from 'tiptap'
import { namespace } from 'vuex-class'
import EditorIcon from './EditorIcon'
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

@Component({
  components: {
    EditorMenuBar,
    Icon: EditorIcon,
  },
})
export default class EditorMenu extends Vue {
  @Prop() editor!: any
  public title: any = ''
  public category: any = ''
  public postImage: any = []
  public preview = ''

  onFileChange(e: any) {
    const files = e.target.files || e.dataTransfer.files
    if (!files.length) return
    this.createImage(files[0])
    // this.preview = URL.createObjectURL(files[0])
  }
  createImage(file: any) {
    const image = new Image()
    const reader = new FileReader()
    const a = document.createElement('figure')
    // const b = URL.createObjectURL(file)
    reader.onload = (e: any) => {
      a.innerHTML = `<img src="${e.target.result}" class="post-image"/>`
      document.querySelector('.ProseMirror').append(a)
    }
    reader.readAsDataURL(file)
  }
}
</script>

<style lang="scss" >
</style>
