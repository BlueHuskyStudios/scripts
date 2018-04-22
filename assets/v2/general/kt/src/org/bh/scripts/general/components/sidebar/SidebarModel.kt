package org.bh.scripts.general.components.sidebar

import org.w3c.dom.*
import kotlin.dom.*
import kotlin.properties.Delegates



/**
 * @author Ben Leggiero
 * @since 2018-04-19
 */
class SidebarModel(isShown: Boolean = false) {
    var isShown by Delegates.observable(isShown, onChange = { _, oldValue, newValue ->
        delegate?.didShowOrHide(oldIsShown = oldValue, newIsShown = newValue)
    })

    var delegate: SidebarModelDelegate? = null


    companion object {
        const val className = "sidebar"
        const val sidebarShownClass = "sidebar-shown"


        operator fun invoke(htmlElement: Element) = SidebarModel(isShown = htmlElement.hasClass(sidebarShownClass))
    }
}



interface SidebarModelDelegate {
    fun didShowOrHide(oldIsShown: Boolean, newIsShown: Boolean)
}
