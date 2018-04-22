package org.bh.scripts.general.components.button

import jQueryInterface.*
import org.w3c.dom.*
import org.w3c.dom.events.Event
import kotlin.properties.Delegates



typealias PressListener = (Event) -> Unit



/**
 * @author Ben Leggiero
 * @since 2018-04-19
 */
class ButtonController(
        initalModel: ButtonModel,
        initialView: ButtonViewWrapper
): ButtonModelDelegate {

    private var suppressChangeReactions = false

    private val pressListeners = mutableSetOf<PressListener>()

    var model: ButtonModel by Delegates.observable(initalModel) { _, _, newModel ->
        didSetModel(newModel)
    }


    var view: ButtonViewWrapper by Delegates.observable(initialView) { _, _, newView ->
        didSetView(newView)
    }


    init {
        didSetModel(initalModel)
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


    companion object {
        operator fun invoke(htmlElement: Element) =
                ButtonController(ButtonModel(htmlElement), ButtonViewWrapper(htmlElement))
    }
}



fun ButtonModel.loadFromView(view: ButtonViewWrapper) {
    view.htmlElement.addEventListener("click", { event: Event ->
        this.handleClick(event)
    })
}
