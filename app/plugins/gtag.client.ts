export default defineNuxtPlugin(() => {
  const firstScript = document.createElement('script')
  firstScript.async = true
  firstScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-9PCJ1Y5BNS'
  document.head.appendChild(firstScript)

  const secondScript = document.createElement('script')
  secondScript.innerHTML = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-9PCJ1Y5BNS');`
  document.head.appendChild(secondScript)
})
