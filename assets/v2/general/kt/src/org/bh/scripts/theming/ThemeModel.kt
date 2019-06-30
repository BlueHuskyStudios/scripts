package org.bh.scripts.theming

import org.bh.scripts.components.themeSwatches.ThemeSwatchModel
import kotlin.js.Json
import kotlin.js.json

data class ThemeModel(val color: ThemeColor?, val brightnessTier: ThemeBrightnessTier?) {
    val serialValue: String get() {
        return JSON.stringify(json(
                ThemeColor.serialKey to color?.serialValue,
                ThemeBrightnessTier.serialKey to brightnessTier?.serialValue
        ))
    }


    companion object {
//        internal const val regexGroupType = "type"
//        internal const val regexGroupValue = "value"
//
//        val regex = RegExp("""(?<$regexGroupType>\w+?)\.(?<$regexGroupValue>.+)""")
    }
}

operator fun ThemeModel.Companion.invoke(serialValue: String): ThemeModel? {

    val json: Json = JSON.parse(serialValue)
    val color = (json[ThemeColor.serialKey] as? String)?.let { ThemeColor(it) } ?: ThemeColor.default
    val brightnessTier = (json[ThemeBrightnessTier.serialKey] as? String)?.let { ThemeBrightnessTier(it) } ?: ThemeBrightnessTier.default

    return ThemeModel(color = color, brightnessTier = brightnessTier)

//    val match = regex.exec(serialValue) ?: return null
//    val swatchType = match.groups[regexGroupType] ?: return null
//    val swatchValue = match.groups[regexGroupValue] as? String ?: return null
//
//    return when (swatchType) {
//        ThemeColor.serialKey -> ThemeModel(color = ThemeSwatchModel.color(swatchValue)
//        ThemeBrightnessTier.serialKey -> ThemeSwatchModel.brightness(swatchValue)
//        else -> null.also { console.error("Unsupported serialized theme swatch type: $swatchType") }
//    }
}


operator fun ThemeModel.Companion.invoke(swatchModel: ThemeSwatchModel, getMissingData: Boolean = false): ThemeModel {
    return when (swatchModel) {
        is ThemeSwatchModel.color -> ThemeModel(swatchModel, getMissingData = getMissingData)
        is ThemeSwatchModel.brightness -> ThemeModel(swatchModel, getMissingData = getMissingData)
    }
}


operator fun ThemeModel.Companion.invoke(swatchColorModel: ThemeSwatchModel.color, getMissingData: Boolean): ThemeModel {
    return ThemeModel(color = ThemeColor(swatchColorModel.sheetName),
            brightnessTier = if (getMissingData) ThemeBrightnessTier.initFromPage() ?: ThemeBrightnessTier.default else null)
}


operator fun ThemeModel.Companion.invoke(swatchBrightnessModel: ThemeSwatchModel.brightness, getMissingData: Boolean): ThemeModel {
    return ThemeModel(color = if (getMissingData) ThemeColor.initFromPage() ?: ThemeColor.default else null,
            brightnessTier = swatchBrightnessModel.brightnessTier)
}


fun ThemeModel.fillingInMissingData(other: ThemeModel) = ThemeModel(
        color = this.color ?: other.color,
        brightnessTier = this.brightnessTier ?: other.brightnessTier
)
