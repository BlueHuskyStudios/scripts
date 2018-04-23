package org.bh.scripts.general.components.sidebar



import jQueryInterface.*
import org.bh.scripts.general.components.*
import org.w3c.dom.Element



/**
 * @author Ben Leggiero
 * @since 2018-04-19
 */
class SidebarViewWrapper(
        override val htmlElement: Element
) : WrappedHtmlView<Element> {
    var isShown: Boolean
        get() = elementResponsibleForHidingAndShowingTheSidebar.hasClass(SidebarModel.sidebarShownClassName)
        set(newValue) {
            if (newValue)
                elementResponsibleForHidingAndShowingTheSidebar.addClass(SidebarModel.sidebarShownClassName)
            else
                elementResponsibleForHidingAndShowingTheSidebar.removeClass(SidebarModel.sidebarShownClassName)
        }

    val elementResponsibleForHidingAndShowingTheSidebar get() = defaultElementResponsibleForHidingAndShowingTheSidebar

    companion object {
        val defaultElementResponsibleForHidingAndShowingTheSidebar = jq(":root")
    }
}
