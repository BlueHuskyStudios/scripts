package org.bh.scripts.general.components.sidebar

import org.bh.scripts.general.components.sidebar.SidebarModel.Companion.sidebarShownClassName
import org.bh.scripts.general.components.sidebar.SidebarViewWrapper.Companion.defaultElementResponsibleForHidingAndShowingTheSidebar
import org.w3c.dom.*
import kotlin.properties.Delegates



/**
 * @author Ben Leggiero
 * @since 2018-04-19
 */
class SidebarController(
        /**
         * The model that this controller will look and listen to for guidance
         */
        initialModel: SidebarModel,

        /**
         * The view that this controller controls. If `null`, this will control all sidebar views it can find
         */
        initialView: SidebarViewWrapper?
): SidebarModelDelegate {

    private var suppressChangeReactions = false

    var model: SidebarModel by Delegates.observable(initialModel) { _, _, newModel ->
        didSetModel(newModel)
    }


    var view: SidebarViewWrapper? by Delegates.observable(initialView) { _, _, newView ->
        didSetView(newView)
    }


    init {
        didSetModel(initialModel)
        didSetView(initialView)
    }


    private fun didSetModel(newModel: SidebarModel) {
        newModel.delegate = this
    }


    private fun didSetView(newView: SidebarViewWrapper?) {
        suppressChangeReactions = true
        if (null == newView) {
            this.didShowOrHide(model.isShown, model.isShown)
        }
        else {
            this.model.loadFromView(newView)
        }
        suppressChangeReactions = false
    }


    override fun didShowOrHide(oldIsShown: Boolean, newIsShown: Boolean) {
        if (suppressChangeReactions) { return }

        val view = this.view

        if (null == view) {
            if (newIsShown) {
                defaultElementResponsibleForHidingAndShowingTheSidebar.addClass(sidebarShownClassName)
            }
            else {
                defaultElementResponsibleForHidingAndShowingTheSidebar.removeClass(sidebarShownClassName)
            }
        }
        else {
            view.isShown = newIsShown
        }
    }


    fun toggleHidden() {
        model.isShown = !model.isShown
    }


    companion object {
        operator fun invoke(htmlElement: Element?) =
                if (null == htmlElement)
                    SidebarController.allSidebars
                else
                    SidebarController(SidebarModel(htmlElement), SidebarViewWrapper(htmlElement))


        /**
         * Controls all sidebars in the same way
         */
        val allSidebars: SidebarController by lazy { SidebarController(SidebarModel(), null) }
    }
}



fun SidebarModel.loadFromView(view: SidebarViewWrapper) {
    this.isShown = view.isShown
}
