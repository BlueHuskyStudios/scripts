@file:Suppress("unused")

package org.bh.scripts.components.themeSwatches

import jQueryInterface.jq
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
        when (this.model) {
            is ThemeSwatchModel.color -> jq(themeSheetLinkElementSelector).attr("href", themeUrl)
            is ThemeSwatchModel.brightness -> jq(":root")
                    .removeClass(ThemeBrightnessTier.allClassNames.joinToString(" "))
                    .addClass(model.brightnessTier.className)
        }
    }


    private val themeUrl: String? get() { return stylesheetUrl(model.colorSheetName ?: return null) }


    companion object {

        const val themeSheetLinkElementSelector = "link#theme-stylesheet"
        const val frameworkSheetLinkElementSelector = "link#framework-stylesheet"

        private const val stylesheetsProtocol = "https"
        private const val stylesheetsDomain = "stylesheets.bhstudios.org"
        private const val stylesheetsDirectoryPath = "assets/v2/neon/"
        private const val stylesheetNamePrefix = "neon-"
        private const val stylesheetNameSuffix = ".css"
        private const val stylesheetBaseUrl = "$stylesheetsProtocol://$stylesheetsDomain/$stylesheetsDirectoryPath"


        private fun stylesheetFileName(color: String) = "$stylesheetNamePrefix$color$stylesheetNameSuffix"
        private fun stylesheetUrl(color: String) = "$stylesheetBaseUrl/${stylesheetFileName(color)}"
    }
}



operator fun ThemeSwatchController.Companion.invoke(controlling: Element): ThemeSwatchController? {
    @Suppress("UnnecessaryVariable")
    val swatchElement = controlling
    val view = ThemeSwatchViewWrapper(swatchElement)
    val model = ThemeSwatchModel(view) ?: return null
    return ThemeSwatchController(model, view)
}
