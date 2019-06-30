package org.bh.scripts.theming

import jQueryInterface.jq
import kotlin.js.RegExp
import org.bh.scripts.general.utilities.*


data class ThemeColor(val name: String, val sheetSuffix: String = name) {


    val themeUrl: String? get() { return stylesheetUrl(name) }


    companion object {

        private const val stylesheetsProtocol = "https"
        private const val stylesheetsDomain = "stylesheets.bhstudios.org"
        private const val stylesheetsDirectoryPath = "assets/v2/neon"
        private const val stylesheetNamePrefix = "neon-"
        private const val stylesheetNameSuffix = ".css"
        private const val stylesheetBaseUrl = "$stylesheetsProtocol://$stylesheetsDomain/$stylesheetsDirectoryPath"

        internal const val stylesheetRegexPatternColorGroupName = "color"
        private const val stylesheetUrlRegexPattern = "^$stylesheetBaseUrl/$stylesheetNamePrefix(?<$stylesheetRegexPatternColorGroupName>.+?)$stylesheetNameSuffix"
        internal val stylesheetUrlRegex by lazy { RegExp(stylesheetUrlRegexPattern) }


        private fun stylesheetFileName(color: String) = "$stylesheetNamePrefix$color$stylesheetNameSuffix"
        private fun stylesheetUrl(color: String) = "$stylesheetBaseUrl/${stylesheetFileName(color)}"

        const val serialKey = "color"
    }
}



val ThemeColor.serialValue get() = name

val ThemeColor.Companion.default get() = ThemeColor(name = "Water")


fun ThemeColor.Companion.initFromPage(): ThemeColor? {
    val stylesheetUrl = jq(ThemeController.themeSheetLinkElementSelector).attr("href") as? String ?: return null
    val match = stylesheetUrlRegex.exec(stylesheetUrl) ?: return null
    val colorName = match.groups[stylesheetRegexPatternColorGroupName] as? String ?: return null
    return ThemeColor(name = colorName)
}
