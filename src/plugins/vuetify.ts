// Styles
import "@mdi/font/css/materialdesignicons.css"
import "vuetify/styles"

// Vuetify
import {createVuetify, ThemeDefinition} from "vuetify"
import {aliases, mdi}                   from "vuetify/iconsets/mdi"
import {de}                             from "vuetify/locale"
import DayJsAdapter                     from "@date-io/dayjs"


const myCustomLightTheme: ThemeDefinition = {
    dark: false,
    colors: {
        background: "#FFFFFF",
        surface: "#FFFFFF",
        primary: "#9F0E2E",
        "primary-darken-1": "#3700B3",
        secondary: "#03DAC6",
        "secondary-darken-1": "#018786",
        error: "#B00020",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FB8C00"
    }
}

export default createVuetify({
    icons: {
        defaultSet: "mdi",
        aliases,
        sets: {
            mdi
        }
    },
    theme: {
        defaultTheme: "myCustomLightTheme",
        themes: {
            myCustomLightTheme
        }
    },
    locale: {
        locale: "de",
        fallback: "de",
        messages: {de}
    },
    date: {
        adapter: DayJsAdapter,
        locale: {de: "de"}
    }
})
