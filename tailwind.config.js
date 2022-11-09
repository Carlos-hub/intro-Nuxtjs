/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'interactive': "url('/svg/interactive.svg')",
        'home': "url('/svg/home.svg')",
        'user': "url('/svg/user.svg')",
        'comment': "url('/svg/comment.svg')",
        'interrogation': "url('/svg/interrogation.svg')",
        'settings':"url('/svg/settings.svg')",
        'lock':"url('/svg/lock.svg')",
        'singout':"url('/svg/sign-out-alt.svg')",
      }
    },
  },
  plugins: [],
}
