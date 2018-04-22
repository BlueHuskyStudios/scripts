package org.bh.scripts.general.components.sidebar

import org.bh.scripts.general.components.button.*
import org.w3c.dom.events.*


/**
 * @author Ben Leggiero
 * @since 2018-04-19
 */
class SidebarButtonController(val buttonController: ButtonController,
                              val sidebarController: SidebarController): ButtonModelDelegate {

    init {
        buttonController.addPressListener { event ->
            this.didPress(event)
        }
    }


    override fun didPress(event: Event) {
        sidebarController.toggleHidden()
    }


    companion object {
        operator fun invoke(buttonModel: ButtonController?, sidebarController: SidebarController?): SidebarButtonController? {
            return if (null != buttonModel && null != sidebarController) {
                SidebarButtonController(buttonModel, sidebarController)
            }
            else {
                null
            }
        }
    }
}
