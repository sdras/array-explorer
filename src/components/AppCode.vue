<template>
  <aside>
    <div class="usage-code usage1">
      <p>
        <span>let arr = [5, 1, 8];</span><br>
        <span v-if="selectedUsage"
          class="exampleoutput"
          ref="ex"
          v-html="selectedUsage.example">
        </span>
      </p>
    </div>
    <div v-if="selectedUsage" class="usage2">
      <h3 style="margin-top: 50px">Output</h3>
      <div class="usage-code">
        <p>
          <span
            class="exampleoutput2"
            ref="ex2"
            v-html="selectedUsage.output">
          </span>
        </p>
      </div><!--usage-code-->
    </div>
  </aside>
</template>

<script>
import { TweenLite, TimelineMax, Back, Power4 } from 'gsap'

export default {
  methods: {
    typeOut() {
      let split = new SplitText(this.$refs.ex, { type: 'chars' }),
        split2 = new SplitText(this.$refs.ex2, { type: 'chars' }),
        tl = new TimelineMax()

      tl.add('start')
      tl.to(this.$refs.ex, 0.1, {
        opacity: 1
      })
      tl.staggerFromTo(
        split.chars,
        0.1,
        {
          opacity: 0,
          scale: 0,
          color: '#aeded4',
          transformOrigin: '50% 50%',
          ease: Power4.easeOut
        },
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

      tl.to(this.$refs.ex2, 0.1, {
        opacity: 1
      })
      tl.staggerFromTo(
        split2.chars,
        0.1,
        {
          opacity: 0,
          scale: 0,
          color: '#aeded4',
          transformOrigin: '50% 50%',
          ease: Power4.easeOut
        },
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
      if (this.selectedUsage) {
        TweenMax.set([this.$refs.ex, this.$refs.ex2], {
          opacity: 0
        })
        setTimeout(() => {
          this.typeOut()
        }, 500)
      }
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
  transition: 0.2s all ease;
  display: block;
  border-radius: 5px;
  line-height: 1.8em;
  font-family: monospace;
}

.usage1 {
  color: #aeded4;
}

.usage2 span {
  color: #ecc2a4;
}

.exampleoutput,
.exampleoutput2 {
  display: inline-block;
  opacity: 0;
}

.exampleoutput div,
.exampleoutput2 div {
  opacity: 0;
  transform: scale(0);
}
</style>
