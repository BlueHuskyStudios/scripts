package org.bh.scripts.components.themeSwatches

import org.bh.scripts.components.WrappedHtmlView
import org.w3c.dom.Element


/**
 * @author Ben Leggiero
 * @since 2019-06-23
 */
class ThemeSwatchViewWrapper(
        override val htmlElement: Element
) : WrappedHtmlView<Element> {

    companion object {
        const val themeSwatchCssSelector = "[theme-swatch-type]"
        const val themeSwatchTypeAttributeName = "theme-swatch-type"
        const val themeSwatchValueAttributeName = "theme-swatch-value"
    }
}

