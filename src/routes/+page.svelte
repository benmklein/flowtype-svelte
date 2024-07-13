<script lang="ts" type='module'>
import * as svelte from 'svelte'
import * as Ace from "ace-builds"
import {challenges, type ChallengeText} from '../challenges'
import { flip } from 'svelte/animate'
import { fade, fly } from "svelte/transition"
Ace.config.set('basePath', "src-min-noconflict")
let editor : Ace.Ace.Editor;
let goaleditor : Ace.Ace.Editor;
let score = 0;
let scoreBox : HTMLElement | null;

// function onKeyDown(e) {
//   console.log('key down')
//   compareTextLines()
// }
function normalizeText(text: string) {
  return text.replace(/\s+/g, ' ').trim();
}

async function compareTextLines() {
  let min = Math.min(editor.session.getDocument().getLength(), goaleditor.session.getDocument().getLength())
  let editorLines = editor.session.getDocument().getLines(0, min)
  let goalLines = goaleditor.session.getDocument().getLines(0, min)
  let matchingList = [];
  for (let i=min-1; i>=0; i--) {
    if (normalizeText(editorLines[i]) == normalizeText(goalLines[i])){
      matchingList.push((<never>i))
    }
  }
  console.log("Matching lines:", ...matchingList)
  matchingList.forEach( (e)=> {
    setTimeout(() =>{
    editor.session.getDocument().removeFullLines(e, e)
    goaleditor.session.getDocument().removeFullLines(e, e)
    score++
    console.log(score)
    if (scoreBox){
      scoreBox.innerHTML = score.toString()
    }
    }, 2000)
})
}

function getLines() {
  const num = Math.floor( Math.random() * 12 )

    const editUM =  editor.session.getUndoManager() 

    let editorLast = editor.session.getLength() + 1
    let goalLast = goaleditor.session.getLength() + 1

    editor.session.getDocument().insertFullLines(editorLast, challenges[num].startString)
    goaleditor.session.getDocument().insertFullLines(goalLast, challenges[num].endString)

  setTimeout(() => {
    console.log(document.querySelector('.ace_line:last-child'))
 
  }, 100);

  //@ts-ignore
  editUM.$undoStack.pop()
}

svelte.onMount(async () => {
  editor = Ace.edit("editor");
  editor.setTheme("ace/theme/monokai");
  editor.session.setMode("ace/mode/javascript");
  editor.setKeyboardHandler("ace/keyboard/vim");
  editor.setOptions({
    fontSize: "13pt"
  })

  goaleditor = Ace.edit("goaleditor")
  goaleditor.setTheme("ace/theme/monokai")
  goaleditor.session.setMode("ace/mode/javascript")
  goaleditor.setReadOnly(true)
  goaleditor.setOptions({
    fontSize: "13pt"
  })

  editor.on("change", (_) => {
  compareTextLines()
  })

  scoreBox = document?.getElementById('scorebox')

  setInterval(getLines, 5000)


})


</script>
<body class ="bg-black dark:bg-gray-900 h-screen">

  <title>typeFlow</title>

  <div class="absolute left-2/4 -translate-x-2/4 mx-auto top-2/4 -translate-y-2/4 flex gap-8 px-4 py-12">
  <h2 id="scorebox" class="text-3xl font-semibold tracking-tight text-gray-800 dark:text-white inline-block">
    0
  </h2>


    <div class="flex flex-col">


      <div id="editor"> Modify your text to match. Test text. </div>


    </div>
    <div id="goalbox" class="text-center">

      <div id="goaleditor" class="resize-none"> Make your text into this. </div>

    </div>

  </div>
</body>


<style lang="postcss">
:global(html) {
  background-color: theme(colors.gray.100);
}

#editor, #goaleditor { 
  position: relative;
  width: 800px;
  height:485px;
}
@keyframes example {
  from {opacity: 0;}
  to {opacity: 1;}
}
#scorebox {

  margin: 0 auto;
  margin-top: -80px;
  margin-right: -80px;
  animation-name: example;
  animation-duration: 2s ;
}



</style>

