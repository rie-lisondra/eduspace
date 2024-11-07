/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./login.html",
    "./registration.html",
    "./reg-student.html",
    "./reg-teacher.html",
    "./teacher-dashboard.html",
    "./student-dashboard.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'league': ['League Spartan', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      borderRadius: {
        'extra-large': '55px',
      },
    },
  },
  plugins: [],
}