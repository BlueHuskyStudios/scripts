package org.bh.scripts.components.sidebar

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

        private val existingModels = mutableMapOf<String, SidebarModel>()

        operator fun invoke(viewWrapper: SidebarViewWrapper) =
                invoke(id = viewWrapper.htmlElement.id,
                       isShown = viewWrapper.isShown)

        operator fun invoke(htmlElement: Element) =
                invoke(viewWrapper = SidebarViewWrapper(htmlElement = htmlElement))

        operator fun invoke(id: String = "", isShown: Boolean = false): SidebarModel {
            return existingModels[id, { SidebarModel(initIsShown = isShown) } ]
        }
    }
}



interface SidebarModelDelegate {
    fun didShowOrHide(oldIsShown: Boolean, newIsShown: Boolean)
}
