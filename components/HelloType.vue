<template>
  <div>
    Name: {{ fullName }}
    Message: {{ message }}
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { createComponent, computed, ref } from '@vue/composition-api'

interface User {
  firstName: string
  lastName: number
}

// Class API
// @Component
// export default class HelloType extends Vue {
//   @Prop({ type: Object, required: true }) readonly user!: User

//   message: string = 'This is a message'

//   get fullName (): string {
//     return `${this.user.firstName} ${this.user.lastName}`
//   }
// }


// Composition API
export default createComponent({
  props: {
    user: {
      type: Object as () => User,
      required: true
    }
  },

  setup ({ user }) {
    const fullName = computed(() => `${user.firstName} ${user.lastName}`)
    const message = ref('This is Composition API MESSAGE')

    return {
      fullName,
      message
    }
  }
})

</script>