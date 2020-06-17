import client from '../plugins/contentful'

export const state = () => ({
  posts: [],
  asset: '',
})

export const mutations = {
  setPosts(state, payload) {
    state.posts = payload
  },
  setAsset(state, payload) {
    state.asset = payload
  }
}

export const actions = {
  async getPosts({commit}) {
    const response = await client.getEntries({
      content_type: 'blogPost'
    })
    
    // const asset = client.getAsset('5cvGYjwCvZR4WRVZM0Yvac')
    //   .then((asset) => console.log(asset.fields.file.url))
    const asset = await client.getAsset('5cvGYjwCvZR4WRVZM0Yvac')
    commit('setAsset', asset)

    if (response.items.length > 0) {
      commit('setPosts', response.items)
    }
  },
}