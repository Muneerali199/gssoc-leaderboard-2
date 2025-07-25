import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        // Existing color system
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))'
        },
        
        // Harry Potter theme colors
        gold: '#ffd700',
        goldDark: '#c9a227',
        silver: '#c0c0c0',
        darkBlue: '#0e1a40',
        hogwartsBlue: '#222f5b',
        gryffindorRed: '#740001',
        slytherinGreen: '#1a472a',
        ravenclawBlue: '#0e1a40',
        hufflepuffYellow: '#ecb939',
        
        // Magical theme variants
        gryffindorGold: 'var(--gryffindor-gold, #ffd700)',
        slytherinSilver: 'var(--slytherin-silver, #c0c0c0)'
      },
      fontFamily: {
        harryPotter: ['"Harry Potter"', 'serif'],
        // Keep existing font families
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-10px) rotate(1deg)' },
          '66%': { transform: 'translateY(-5px) rotate(-1deg)' }
        },
        'sparkle': {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' }
        },
        'magical-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255, 215, 0, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(255, 215, 0, 0.6)' }
        },
        'pulse-slow': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'sparkle': 'sparkle 3s ease-in-out infinite',
        'magical-glow': 'magical-glow 3s ease-in-out infinite',
        'pulse-slow': 'pulse-slow 5s ease-in-out infinite',
        // Extended sparkle animations for different elements
        'sparkle-fast': 'sparkle 1.5s ease-in-out infinite',
        'sparkle-slow': 'sparkle 4s ease-in-out infinite'
      },
      // Additional magical theme extensions
      boxShadow: {
        'magical': '0 0 15px rgba(255, 215, 0, 0.5)',
        'magical-lg': '0 0 30px rgba(255, 215, 0, 0.7)',
        'dark-magical': '0 0 15px rgba(14, 26, 64, 0.7)'
      },
      textShadow: {
        'magical': '0 0 5px rgba(255, 215, 0, 0.7)',
        'dark-magical': '0 0 5px rgba(14, 26, 64, 0.7)'
      }
    }
  },
  plugins: [
    require("tailwindcss-animate"),
    // Optional plugin for text shadows if needed
    function({ addUtilities }) {
      const newUtilities = {
        '.text-shadow-magical': {
          'text-shadow': '0 0 5px rgba(255, 215, 0, 0.7)',
        },
        '.text-shadow-dark-magical': {
          'text-shadow': '0 0 5px rgba(14, 26, 64, 0.7)',
        },
      }
      addUtilities(newUtilities)
    }
  ],
} satisfies Config;