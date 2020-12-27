package org.bh.scripts.pageMutation

import jQueryInterface.jq
import org.bh.scripts.general.utilities.isCapitalized
import org.w3c.dom.Element
import kotlin.js.Json


object ContentReplacers {

    private val contentReplacers = mutableMapOf<String, ContentReplacer>()

    fun connectNewContentReplacer(selector: String, replacer: ContentReplacer) {
        contentReplacers[selector] = replacer
        runContentReplacers()
    }


    private fun runContentReplacers() {
        contentReplacers.forEach {
            it.connectAndRun()
        }
    }
}



private fun ContentReplacerMapElement.connectAndRun() {
    val contentReplacerSelectorUi = jq("[data-replaced-element-selector=\"${selectorForAllElementsWithContentToBeReplaced}\"]")
    if (contentReplacerSelectorUi.length < 1) { return }

    val contentReplacerDataSourceDataKey = contentReplacerSelectorUi.data("content-replacer-data-source") as? String ?: return
    val contentReplacerDataReplacementDataKey = contentReplacerSelectorUi.data("content-replacer-data-replacement") as? String ?: return
    val contentReplacerDataReplacementSelector = "[$contentReplacerDataReplacementDataKey]"

    connectButtons(contentReplacerDataSourceDataKey= contentReplacerDataSourceDataKey,
        contentReplacerDataReplacementSelector= contentReplacerDataReplacementSelector,
        contentReplacerDataReplacementDataKey= contentReplacerDataReplacementDataKey)

    run(contentReplacerDataSourceDataKey= contentReplacerDataSourceDataKey,
        contentReplacerDataReplacementSelector= contentReplacerDataReplacementSelector,
        contentReplacerDataReplacementDataKey= contentReplacerDataReplacementDataKey)
}


private fun ContentReplacerMapElement.connectButtons(contentReplacerDataSourceDataKey: String,
                                                     contentReplacerDataReplacementSelector: String,
                                                     contentReplacerDataReplacementDataKey: String) {
    jq(contentReplacerDataReplacementSelector).click {
        val currentTarget = it.currentTarget as? Element ?: return@click
        clearSelection(contentReplacerDataReplacementSelector= contentReplacerDataReplacementSelector)
        select(currentTarget)
        run(contentReplacerDataSourceDataKey= contentReplacerDataSourceDataKey,
            contentReplacerDataReplacementSelector= contentReplacerDataReplacementSelector,
            contentReplacerDataReplacementDataKey= contentReplacerDataReplacementDataKey)
    }
}


private fun ContentReplacerMapElement.clearSelection(contentReplacerDataReplacementSelector: String) {
    jq(contentReplacerDataReplacementSelector).attr("selected", null as String?)
}


private fun ContentReplacerMapElement.select(element: Element) {
    jq(element).select()
}


private fun ContentReplacerMapElement.run(contentReplacerDataSourceDataKey: String,
                                          contentReplacerDataReplacementSelector: String,
                                          contentReplacerDataReplacementDataKey: String) {
    val userSelectedContentReplacement = jq("$contentReplacerDataReplacementSelector[selected]")
    if (userSelectedContentReplacement.length != 1) { return }

    val userSelectedDataReplacement = userSelectedContentReplacement.data(contentReplacerDataReplacementDataKey) as? String ?: return

    val elementsWithContentToBeReplaced = jq(selectorForAllElementsWithContentToBeReplaced)
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


private inline val ContentReplacerMapElement.selectorForAllElementsWithContentToBeReplaced get() = key
private inline val ContentReplacerMapElement.replacer get() = value



private typealias ContentReplacerMapElement = Map.Entry<String, ContentReplacer>
typealias ContentReplacer = (dataSource: String, dataReplacement: String) -> Any