<template>
  <div class="container">
    <h2>Latest posts</h2>
    <ul>
      <li v-for="(post, index) in posts" :key="index">
        <nuxt-link :to="post.fields.slug">{{ post.fields.title }}</nuxt-link>
      </li>
    </ul>


    <HelloType :user="user"></HelloType>
  </div>
</template>

<script>
// import { Component, Vue } from 'vue-property-decorator'
import HelloType from '~/components/HelloType'

// @Component({
//   components: {
//     HelloType
//   }
// })
// export default class Ho extends Vue {}

export default {
  components: {
    HelloType
  },
  computed: {
    posts() {
      return  this.$store.state.posts.posts
    }
  },
  async fetch({ store, params }) {
    await store.dispatch('posts/getPosts', params.slug)
  },
  data() {
    return {
      user: { firstName: 'My', lastName: 'Precious' }
    }
  },
  
  mounted() {
    // console.log(this.$store.state.posts.posts)
  }
}
</script>