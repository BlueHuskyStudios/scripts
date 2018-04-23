package org.bh.scripts.general.components.sidebar

import org.bh.scripts.general.utilities.*
import org.w3c.dom.*
import kotlin.properties.Delegates



/**
 * @author Ben Leggiero
 * @since 2018-04-19
 */
class SidebarModel private constructor(initIsShown: Boolean = false) {
    var isShown by Delegates.observable(initIsShown, onChange = { _, oldValue, newValue ->
        delegate?.didShowOrHide(oldIsShown = oldValue, newIsShown = newValue)
    })

    var delegate: SidebarModelDelegate? = null


    companion object {
        const val className = "sidebar"
        const val sidebarShownClassName = "sidebar-shown"

        private val existingModels = mutableMapOf<String, SidebarModel>()


        operator fun invoke(htmlElement: Element) =
                invoke(id = htmlElement.id,
                       isShown = SidebarViewWrapper.defaultElementResponsibleForHidingAndShowingTheSidebar.hasClass(sidebarShownClassName))

        operator fun invoke(id: String = "", isShown: Boolean = false): SidebarModel {
            return existingModels[id, { SidebarModel(initIsShown = isShown) } ]
        }
    }
}



interface SidebarModelDelegate {
    fun didShowOrHide(oldIsShown: Boolean, newIsShown: Boolean)
}
