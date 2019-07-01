package org.bh.scripts.theming

import jQueryInterface.jq
import org.bh.scripts.general.serialization.LocalStorage
import org.bh.scripts.general.serialization.blueHusky

object ThemeController {

    fun reloadTheme() {
        loadTheme()?.let(::setTheme)
    }


    fun saveTheme(model: ThemeModel) {
        val serialModel = loadTheme()?.let(model::fillingInMissingData) ?: model
        LocalStorage.blueHusky[themeKey] = serialModel.serialValue
    }


    fun setTheme(model: ThemeModel) {
        model.color?.let(::setColor)
        model.brightnessTier?.let(::setBrightness)
        saveTheme(model)
    }


    fun loadTheme() = LocalStorage.blueHusky[themeKey]?.let { ThemeModel(serialValue = it) }


    fun setColor(newColor: ThemeColor) {
        jq(themeSheetLinkElementSelector).attr("href", newColor.themeUrl)
    }


    fun setBrightness(newBrightness: ThemeBrightnessTier) {
        jq(":root")
                .removeClass(ThemeBrightnessTier.values().joinToString(" ", transform = ThemeBrightnessTier::className))
                .addClass(newBrightness.className)
    }


    const val themeKey = "theme"
    const val themeSheetLinkElementSelector = "link#theme-stylesheet"
    const val frameworkSheetLinkElementSelector = "link#framework-stylesheet"
}