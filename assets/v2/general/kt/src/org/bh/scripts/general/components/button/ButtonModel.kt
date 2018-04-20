package org.bh.scripts.general.components.button

import org.w3c.dom.events.Event
import kotlin.properties.Delegates



typealias GenericEvent = (Event) -> Unit



/**
 * @author Ben Leggiero
 * @since 2018-04-19
 */
class ButtonModel {
    var delegate: ButtonModelDelegate? = null

    fun handleClick(event: Event) {
        delegate?.didPress(event)
    }
}



interface ButtonModelDelegate {
    fun didPress(event: Event)
}
