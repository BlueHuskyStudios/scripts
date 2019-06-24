package org.bh.scripts.components.themeSwatches

import org.w3c.dom.Element
import org.bh.scripts.general.utilities.*
import org.bh.scripts.theming.ThemeBrightnessTier
import org.bh.scripts.components.themeSwatches.ThemeSwatchModel.*


sealed class ThemeSwatchModel {

    class color(val sheetName: String): ThemeSwatchModel()
    class brightness(val brightnessTier: ThemeBrightnessTier): ThemeSwatchModel()

    companion object
}



val ThemeSwatchModel.serialValue: String
    get() = when (this) {
        is color -> "color.$sheetName"
        is brightness -> "brightness.$brightnessTier"
    }



private fun ThemeSwatchViewWrapper.generateModel(): ThemeSwatchModel? {
    val swatchType = this.htmlElement.getAttribute(ThemeSwatchViewWrapper.themeSwatchTypeAttributeName) ?: return null
    val swatchValue = this.htmlElement.getAttribute(ThemeSwatchViewWrapper.themeSwatchValueAttributeName) ?: return null

    return when (swatchType) {
        "color" -> color(swatchValue)
        "brightness" -> brightness(ThemeBrightnessTier.valueOf(swatchValue))
        else -> null
    }
}


val ThemeSwatchModel.colorSheetName get() = (this as? color)?.sheetName


private val existingModels = mutableMapOf<String, ThemeSwatchModel>()

operator fun ThemeSwatchModel.Companion.invoke(viewWrapper: ThemeSwatchViewWrapper): ThemeSwatchModel? {
    return ThemeSwatchModel(id = viewWrapper.htmlElement.id.ifEmpty { null },
            model = viewWrapper.generateModel() ?: return null)
}


operator fun ThemeSwatchModel.Companion.invoke(htmlElement: Element) =
        ThemeSwatchModel(viewWrapper = ThemeSwatchViewWrapper(htmlElement = htmlElement))


operator fun ThemeSwatchModel.Companion.invoke(id: String? = null, model: ThemeSwatchModel) =
        existingModels[id ?: model.serialValue, { model } ]