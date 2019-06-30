@file:Suppress("unused")

package org.bh.scripts.components.themeSwatches

import jQueryInterface.jq
import org.bh.scripts.general.serialization.*
import org.bh.scripts.theming.*
import org.w3c.dom.Element


/**
 * @author Ben Leggiero
 * @since 2019-06-23
 */
class ThemeSwatchController(
        val model: ThemeSwatchModel,
        val viewWrapper: ThemeSwatchViewWrapper
) {
    init {
        jq(viewWrapper.htmlElement).click {
            setTheme()
        }
    }

    private fun setTheme() {
        ThemeController.setTheme(ThemeModel(model))
    }


    companion object
}



operator fun ThemeSwatchController.Companion.invoke(controlling: Element): ThemeSwatchController? {
    @Suppress("UnnecessaryVariable")
    val swatchElement = controlling
    val view = ThemeSwatchViewWrapper(swatchElement)
    val model = ThemeSwatchModel(view) ?: return null
    return ThemeSwatchController(model, view)
}
