export default defineNuxtPlugin(() => {
  const comment = (text: string, totalWidth: number = 80) => {
    const padding = Math.max(0, Math.floor((totalWidth - text.length) / 2))
    const paddedText = ' '.repeat(padding) + text + ' '.repeat(padding)
    return document.createComment(paddedText.slice(0, totalWidth))
  }

  document.prepend(
    comment(''),
    comment('Hi there! o/'),
    comment('Thank you for visiting and using DOM Inspector'),
    comment(''),
    comment('Made with <3 for Aya'),
    // comment('I Love Ayaaa'),
    comment('Built using Nuxt + Vue.js and Tailwind CSS'),
    comment(''),
    comment('Source code: https://github.com/yuuraeru/ayaaais'),
    comment('')
  )
})
