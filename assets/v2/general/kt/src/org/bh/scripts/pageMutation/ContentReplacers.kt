package org.bh.scripts.pageMutation

import jQueryInterface.jq
import org.bh.scripts.general.utilities.isCapitalized
import kotlin.js.Json


object ContentReplacers {

    private val contentReplacers = mutableMapOf<String, ContentReplacer>()

    fun connectNewContentReplacer(selector: String, replacer: ContentReplacer) {
        contentReplacers[selector] = replacer
        runContentReplacers()
    }


    private fun runContentReplacers() {
        contentReplacers.forEach {
            it.run()
        }
    }
}



private fun ContentReplacerMapElement.run() {
    val contentReplacerSelectorUi = jq("[data-replaced-element-selector=\"${selector}\"]")
    if (contentReplacerSelectorUi.length < 1) { return }

    val contentReplacerDataSourceDataKey = contentReplacerSelectorUi.data("content-replacer-data-source") as? String ?: return
    val contentReplacerDataReplacementDataKey = contentReplacerSelectorUi.data("content-replacer-data-replacement") as? String ?: return

    val userSelectedContentReplacement = jq("[data-pronoun-gender][selected]")
    if (userSelectedContentReplacement.length != 1) { return }

    val userSelectedDataReplacement = userSelectedContentReplacement.data(contentReplacerDataReplacementDataKey) as? String ?: return

    val elementsWithContentToBeReplaced = jq(selector)
    elementsWithContentToBeReplaced.each { _, element ->
        val contentReplacerDataSource = jq(element).data(contentReplacerDataSourceDataKey) as? String ?: return@each
        val result = replacer(contentReplacerDataSource, userSelectedDataReplacement)
        val newTextContent: String

        val jsonResult = result as? Json
        if (null != jsonResult) {

            val rawNewTextContent = jsonResult["text"] as? String ?: return@each
            val originalTextContent = element.textContent

            if (null != originalTextContent) {
                val maintainOriginalCapitalization = jsonResult["maintainOriginalCapitalization"] as? Boolean ?: false

                newTextContent =
                    if (maintainOriginalCapitalization) {
                        if (!originalTextContent.isCapitalized) {
                            rawNewTextContent.capitalize()
                        } else {
                            rawNewTextContent.decapitalize()
                        }
                    } else {
                        rawNewTextContent
                    }
            } else {
                newTextContent = rawNewTextContent
            }
        }
        else {
            newTextContent = result as? String ?: "$result"
        }


        element.textContent = newTextContent
    }
}


private inline val ContentReplacerMapElement.selector get() = key
private inline val ContentReplacerMapElement.replacer get() = value



private typealias ContentReplacerMapElement = Map.Entry<String, ContentReplacer>
typealias ContentReplacer = (dataSource: String, dataReplacement: String) -> Any