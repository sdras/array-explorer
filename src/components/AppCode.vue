<template>
  <aside>
    <div class="usage-code">
      <p>
        <code>let arr = [5, 1, 8];</code><br>
        <code v-if="selectedUsage" 
          class="exampleoutput" 
          ref="ex" 
          v-html="selectedUsage.example">
        </code>
      </p>
    </div>
    <div v-if="selectedUsage">
      <h3 style="margin-top: 50px">Output</h3>
      <div class="usage-code">
        <p>
          <code
            class="exampleoutput2" 
            ref="ex2" 
            v-html="selectedUsage.output">
          </code>
        </p>
      </div><!--usage-code-->
    </div>
  </aside>
</template>

<script>
import { TweenLite, TimelineMax, Back } from 'gsap'

export default {
  methods: {
    typeOut() {
      let split = new SplitText(this.$refs.ex, { type: 'chars' }),
        split2 = new SplitText(this.$refs.ex2, { type: 'chars' }),
        tl = new TimelineMax()

      tl.add('start')
      tl.to('.exampleoutput', 0.1, {
        opacity: 1
      })
      tl.staggerTo(
        split.chars,
        0.1,
        {
          opacity: 1,
          scale: 1,
          color: '#fff',
          transformOrigin: '50% 50%',
          ease: Power4.easeOut
        },
        0.03,
        'start+=0'
      )
      tl.staggerTo(
        split.chars,
        0.1,
        {
          color: '#aeded4',
          ease: Back.easeIn
        },
        0.03,
        'start+=0.1'
      )

      tl.to('.exampleoutput2', 0.1, {
        opacity: 1
      })
      tl.staggerTo(
        split2.chars,
        0.1,
        {
          opacity: 1,
          scale: 1,
          color: '#fff',
          transformOrigin: '50% 50%',
          ease: Power4.easeOut
        },
        0.03,
        'start1+=0'
      )
      tl.staggerTo(
        split2.chars,
        0.1,
        {
          color: '#ecc2a4',
          ease: Back.easeIn
        },
        0.03,
        'start1+=0.1'
      )
    }
  },
  computed: {
    selectedUsage() {
      return this.$store.state.selectedMethod
    }
  },
  watch: {
    selectedUsage() {
      setTimeout(() => {
        this.typeOut()
      }, 500)
    }
  }
}
</script>

<style>
.usage-code {
  padding: 0 20px;
  margin: 20px 0;
  background: #333;
  border: 2px solid #f55e41;
  color: #aeded4;
  transition: 0.2s all ease;
  display: block;
  border-radius: 5px;
  line-height: 1.8em;
}

.exampleoutput,
.exampleoutput2 {
  display: inline-block;
  opacity: 0;
  color: #ecc2a4;
}

.exampleoutput div,
.exampleoutput2 div {
  opacity: 0;
  scale: 0;
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