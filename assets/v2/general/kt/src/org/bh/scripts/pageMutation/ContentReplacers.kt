package org.bh.scripts.pageMutation

import jQueryInterface.jq


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
    elementsWithContentToBeReplaced.each { index, element ->
        val contentReplacerDataSource = jq(element).data(contentReplacerDataSourceDataKey) as? String ?: return@each
        element.innerHTML = replacer(contentReplacerDataSource, userSelectedDataReplacement)
    }
}


private inline val ContentReplacerMapElement.selector get() = key
private inline val ContentReplacerMapElement.replacer get() = value



private typealias ContentReplacerMapElement = Map.Entry<String, ContentReplacer>
typealias ContentReplacer = (dataSource: String, dataReplacement: String) -> String