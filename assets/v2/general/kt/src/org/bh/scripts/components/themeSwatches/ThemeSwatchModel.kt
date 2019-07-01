package org.bh.scripts.components.themeSwatches

import org.w3c.dom.Element
import org.bh.scripts.general.utilities.*
import org.bh.scripts.theming.ThemeBrightnessTier
import org.bh.scripts.components.themeSwatches.ThemeSwatchModel.*
import org.bh.scripts.theming.ThemeColor
import org.bh.scripts.theming.serialKey
import kotlin.js.RegExp


sealed class ThemeSwatchModel {

    class color(val sheetName: String): ThemeSwatchModel() { companion object }
    class brightness(val brightnessTier: ThemeBrightnessTier): ThemeSwatchModel() { companion object }

    companion object
}



val ThemeSwatchModel.serialValue: String
    get() = when (this) {
        is color -> "${ThemeColor.serialKey}.$sheetName"
        is brightness -> "${ThemeBrightnessTier.serialKey}.$brightnessTier"
    }


private fun ThemeSwatchViewWrapper.generateModel(): ThemeSwatchModel? {
    val swatchType = this.htmlElement.getAttribute(ThemeSwatchViewWrapper.themeSwatchTypeAttributeName) ?: return null
    val swatchValue = this.htmlElement.getAttribute(ThemeSwatchViewWrapper.themeSwatchValueAttributeName) ?: return null

    return when (swatchType) {
        ThemeColor.serialKey -> color(swatchValue)
        ThemeBrightnessTier.serialKey -> brightness(ThemeBrightnessTier.valueOf(swatchValue))
        else -> null
    }
}


val ThemeSwatchModel.colorSheetName get() = (this as? color)?.sheetName


private val existingModels = mutableMapOf<String, ThemeSwatchModel>()


operator fun brightness.Companion.invoke(serialValue: String): brightness? {
    return brightness(tryOrNull { ThemeBrightnessTier.valueOf(serialValue) } ?: return null)
}


operator fun ThemeSwatchModel.Companion.invoke(viewWrapper: ThemeSwatchViewWrapper): ThemeSwatchModel? {
    return ThemeSwatchModel(id = viewWrapper.htmlElement.id.ifEmpty { null },
            model = viewWrapper.generateModel() ?: return null)
}


operator fun ThemeSwatchModel.Companion.invoke(htmlElement: Element) =
        ThemeSwatchModel(viewWrapper = ThemeSwatchViewWrapper(htmlElement = htmlElement))


operator fun ThemeSwatchModel.Companion.invoke(id: String? = null, model: ThemeSwatchModel) =
        existingModels[id ?: model.serialValue, { model } ]

