package org.bh.scripts.general.components.sidebar

import kotlin.properties.Delegates



/**
 * @author Ben Leggiero
 * @since 2018-04-19
 */
class SidebarModel {
    var isShown by Delegates.observable(false, onChange = { property, oldValue, newValue ->
        delegate?.didShowOrHide(oldIsShown = oldValue, newIsShown = newValue)
    })

    var delegate: SidebarModelDelegate? = null
}



interface SidebarModelDelegate {
    fun didShowOrHide(oldIsShown: Boolean, newIsShown: Boolean)
}
