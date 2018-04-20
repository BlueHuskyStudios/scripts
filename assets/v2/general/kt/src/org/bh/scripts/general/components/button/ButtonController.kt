package org.bh.scripts.general.components.button

import org.bh.scripts.general.components.*
import org.bh.scripts.general.components.sidebar.*
import org.w3c.dom.events.Event
import kotlin.properties.Delegates



/**
 * @author Ben Leggiero
 * @since 2018-04-19
 */
class ButtonController(
        model: ButtonModel,
        view: ButtonViewWrapper
): ButtonModelDelegate {

    private var suppressChangeReactions = false

    var model: ButtonModel by Delegates.observable(model) { _, _, newDelegate ->
        model.delegate = this
    }

    var view: ButtonViewWrapper by Delegates.observable(view) { _, _, newView ->
        suppressChangeReactions = true
        model.loadFromView(view)
        suppressChangeReactions = false
    }

    override fun didPress(event: Event) {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }
}



fun ButtonModel.loadFromView(view: ButtonViewWrapper) {
    view.htmlElement.addEventListener("click", { event: Event ->
        this.handleClick(event)
    })
}
