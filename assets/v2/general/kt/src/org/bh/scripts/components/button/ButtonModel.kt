package org.bh.scripts.components.button

import org.w3c.dom.*
import org.w3c.dom.events.Event



/**
 * @author Ben Leggiero
 * @since 2018-04-19
 */
class ButtonModel {
    var delegate: ButtonModelDelegate? = null

    fun handleClick(event: Event) {
        delegate?.didPress(event)
    }


    companion object {
        operator fun invoke(@Suppress("UNUSED_PARAMETER") htmlElement: Element) = ButtonModel()
    }
}



interface ButtonModelDelegate {
    fun didPress(event: Event)
}
