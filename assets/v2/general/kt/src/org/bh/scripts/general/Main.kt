package org.bh.scripts.general

import jQueryInterface.*
import org.bh.scripts.general.components.button.*
import org.bh.scripts.general.components.sidebar.*
import org.w3c.dom.*

/**
 * @author Ben Leggiero
 * @since 2018-04-19
 */



fun main(args: Array<String>) {
    jq {
        Setup.performCommonPageConnections()
    }
}



private object Setup {

    private val sidebarButtonControllers = mutableListOf<SidebarButtonController>()


    fun performCommonPageConnections() {
        connectAllSidebarsToSidebarButtons()
    }


    private fun connectAllSidebarsToSidebarButtons() {
        val firstSidebarElement: Element? by lazy { jq(".${SidebarModel.className}")[0] }

        val controllers = jq(".show-sidebar-button").map { _, sidebarButtonElement ->
            val specifiedSidebarId = sidebarButtonElement.getAttributeNode("for")?.value

            if (null != specifiedSidebarId) {
                val sidebarElement = jq("#$specifiedSidebarId")[0]

                if (null != sidebarElement) {
                    return@map SidebarButtonController(ButtonController(sidebarButtonElement), SidebarController(sidebarElement))
                }
            }
            // No sidebar specified; associate the first one we can find

            return@map SidebarButtonController(ButtonController(sidebarButtonElement), SidebarController(firstSidebarElement))
        }
        sidebarButtonControllers.addAll(controllers)
    }
}
