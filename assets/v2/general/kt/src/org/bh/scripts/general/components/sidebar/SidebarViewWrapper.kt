package org.bh.scripts.general.components.sidebar



import jQueryInterface.*
import org.bh.scripts.general.components.*
import org.w3c.dom.Element



/**
 * @author Ben Leggiero
 * @since 2018-04-19
 */
class SidebarViewWrapper(
        override val htmlElement: Element,
        private val parentElement: JQuery = defaultParentElement
) : WrappedHtmlView<Element> {

    private var scrimHtmlElementGetter = scrimElementGetter(parentElement)

    val scrimHtmlElement get() = scrimHtmlElementGetter()

    var isShown: Boolean
        get() = parentElement.hasClass(sidebarShownClassName)
        set(newValue) = if (newValue) show() else hide()


    init {
        if (0 == scrimHtmlElementGetter().length) {
            parentElement.prepend(generateNewScrimHtmlString())
        }
    }


    private fun hide() {
        parentElement.removeClass(sidebarShownClassName)
    }


    private fun show() {
        parentElement.addClass(sidebarShownClassName)
    }


    companion object {
        const val className = "sidebar"
        const val sidebarShownClassName = "sidebar-shown"
        const val scrimElementClassName = "sidebar-scrim"

        val defaultParentElement = jq(":root")
        fun scrimElementGetter(parentElement: JQuery): () -> JQuery = {
            /*return*/ jq(selector = ".$scrimElementClassName", context = parentElement)
        }


        fun generateNewScrimHtmlString(): String {
            return """<div class="$scrimElementClassName"></div>"""
        }
    }
}
