package org.bh.scripts.general.components.sidebar

import jQueryInterface.*
import org.bh.scripts.general.components.*
import org.bh.scripts.general.components.sidebar.SidebarModel.Companion.sidebarHiddenClass
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
                jq(".${SidebarModel.className}").removeClass(sidebarHiddenClass)
            }
            else {
                jq(".${SidebarModel.className}").addClass(sidebarHiddenClass)
            }
        }
        else {
            if (newIsShown) {
                view.removeClass(sidebarHiddenClass)
            }
            else {
                view.addClass(sidebarHiddenClass)
            }
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
    this.isShown = view.hasClass(sidebarHiddenClass)
}
