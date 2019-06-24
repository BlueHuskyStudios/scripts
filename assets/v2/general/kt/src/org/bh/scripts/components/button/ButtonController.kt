package org.bh.scripts.components.button

import org.w3c.dom.*
import org.w3c.dom.events.Event
import kotlin.properties.Delegates



typealias PressListener = (Event) -> Unit



/**
 * @author Ben Leggiero
 * @since 2018-04-19
 */
class ButtonController(
        initialModel: ButtonModel,
        initialView: ButtonViewWrapper
): ButtonModelDelegate {

    constructor(htmlElement: Element): this(ButtonModel(htmlElement), ButtonViewWrapper(htmlElement))


    private var suppressChangeReactions = false

    private val pressListeners = mutableSetOf<PressListener>()

    var model: ButtonModel by Delegates.observable(initialModel) { _, _, newModel ->
        didSetModel(newModel)
    }

    var view: ButtonViewWrapper by Delegates.observable(initialView) { _, _, newView ->
        didSetView(newView)
    }


    init {
        didSetModel(initialModel)
        didSetView(initialView)
    }


    private fun didSetModel(newModel: ButtonModel) {
        newModel.delegate = this
    }


    private fun didSetView(newView: ButtonViewWrapper) {
        suppressChangeReactions = true
        this.model.loadFromView(newView)
//        jq(newView.htmlElement).click { model.handleClick(it) }
        suppressChangeReactions = false
    }


    override fun didPress(event: Event) {
        pressListeners.forEach {
            it(event)
        }
    }


    fun addPressListener(newPressListener: PressListener) {
        pressListeners.add(newPressListener)
    }
}



fun ButtonModel.loadFromView(view: ButtonViewWrapper) {
    view.htmlElement.addEventListener("click", { event: Event ->
        this.handleClick(event)
    })
}
