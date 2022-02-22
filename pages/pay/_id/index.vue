<template>
  <div>
    <pre>{{ link }}</pre>
  </div>
</template>

<script>
export default {
  name: 'Pay',
  async asyncData({ $axios, params }) {
    const { id } = params
    const isRelay = id.startsWith('RELAY')

    try {
      let response
      if (isRelay) {
        const { data } = await $axios.get(`https://api.fluidcoins.com/v1/${id}`)
        const { relay } = data
        response = relay
      } else {
        const { data } = await $axios.get(
          `https://api.fluidcoins.com/v1/status/links/${id}`
        )
        const { link } = data
        response = link
      }

      return {
        isRelay,
        link: response,
      }
    } catch (e) {
      return {
        isActiveLink: false,
        link: {
          title: 'Payment link is no longer active',
        },
      }
    }
  },
  head() {
    const title =
      this.link.title || `Send money to ${this.link.human_readable_name}`
    const description =
      this.link.description || `Send money to ${this.link.human_readable_name}`
    return {
      title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: description,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: description,
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: title,
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: title,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: description,
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
