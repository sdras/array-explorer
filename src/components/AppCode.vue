<template>
  <div class="usage-code">
    <pre class="language-js">
      <code>
        let arr = [5, 1, 8];</code>
      <code v-if="selectedUsage" class="exampleoutput" ref="ex">  {{ selectedUsage.example }}
        //output
        {{ selectedUsage.output }}</code>
    </pre>
  </div>
</template>

<script>
import { TweenLite, TimelineMax, Back } from 'gsap'

export default {
  methods: {
    typeOut() {
      let split = new SplitText(this.$refs.ex, { type: 'chars' }),
        tl = new TimelineMax()

      tl.staggerFrom(
        split.chars,
        0.8,
        {
          opacity: 0,
          scale: 0,
          y: 80,
          ease: Back.easeOut
        },
        0.01
      )
    }
  },
  computed: {
    selectedUsage() {
      return this.$store.state.selectedMethod
    }
  }
  // watch: {
  //   selectedUsage() {
  //     setTimeout(() => {
  //       this.typeOut()
  //     }, 500)
  //   }
  // }
}
</script>

<style>
pre {
  padding: 0;
  background: #333;
  border: 1px solid white;
  color: white;
  transition: 0.2s all ease;
  display: block;
  border-radius: 5px;
  line-height: 2em;
}

.exampleoutput {
  display: inline-block;
}

/* custom syntax highlighting */
.keyword {
  color: #fa927d;
}

.punctuation {
  color: #f8ecb8;
}

.number {
  color: #a3f5bc;
}

.string {
  color: #ffce25;
}

.function {
  color: #7bb764;
}

.comment {
  color: #888;
}
</style>