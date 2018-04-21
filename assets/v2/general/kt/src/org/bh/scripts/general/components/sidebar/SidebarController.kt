package org.bh.scripts.general.components.sidebar

import org.bh.scripts.general.components.*
import kotlin.properties.Delegates



val sidebarHiddenClass = "sidebar-hidden"



/**
 * @author Ben Leggiero
 * @since 2018-04-19
 */
class SidebarController(
        model: SidebarModel,
        view: SidebarViewWrapper
): SidebarModelDelegate {

    private var suppressChangeReactions = false

    var model: SidebarModel by Delegates.observable(model) { _, _, newDelegate ->
        model.delegate = this
    }


    var view: SidebarViewWrapper by Delegates.observable(view) { _, _, newView ->
        suppressChangeReactions = true
        model.loadFromView(view)
        suppressChangeReactions = false
    }


    override fun didShowOrHide(oldIsShown: Boolean, newIsShown: Boolean) {
        if (suppressChangeReactions) { return }

        if (newIsShown) {
            view.removeClass(sidebarHiddenClass)
        }
        else {
            view.addClass(sidebarHiddenClass)
        }
    }


    fun toggleHidden() {
        model.isShown = !model.isShown
    }
}



fun SidebarModel.loadFromView(view: SidebarViewWrapper) {
    this.isShown = view.hasClass(sidebarHiddenClass)
}
