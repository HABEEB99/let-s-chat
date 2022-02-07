module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        btn: '#B91646',
        logo: '#105652',
        sidebar: '#FBF3E4',
        body: '#DFD8CA',
      },
    },
  },
  plugins: [],
};
