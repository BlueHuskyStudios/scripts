package org.bh.scripts.theming

/**
 * A certain tier of brightness for a theme. Also known as "dark mode" or "light mode".
 */
enum class ThemeBrightnessTier {

    /** The background is pure black and the text is light (but not pure white). Good for OLED displays */
    black,

    /** The background is dark, but not quite black, and the text is light. Good for night time */
    dark,

    /** The background is light (but not pure white), and the text is dark (but not pure black). Good for reading */
    light,

    /** The background is pure white and the text is dark (but not pure black). Good for accessibility */
    white;



    companion object
}



val ThemeBrightnessTier.className get() = "brightness-$name"


val ThemeBrightnessTier.Companion.allClassNames get() = ThemeBrightnessTier.values().map { it.className }