package org.bh.scripts.general.components.sidebar

import org.bh.scripts.general.components.button.*
import org.w3c.dom.events.*


/**
 * @author Ben Leggiero
 * @since 2018-04-19
 */
class SidebarButtonController(val buttonModel: ButtonModel,
                              val sidebarController: SidebarController): ButtonModelDelegate {

    init {
        buttonModel.delegate = this
    }

    override fun didPress(event: Event) {
        sidebarController.toggleHidden()
    }
}
