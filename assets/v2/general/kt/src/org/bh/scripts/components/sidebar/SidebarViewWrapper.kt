package org.bh.scripts.components.sidebar



import jQueryInterface.*
import org.bh.scripts.components.*
import org.w3c.dom.Element



/**
 * @author Ben Leggiero
 * @since 2018-04-19
 */
class SidebarViewWrapper(
        override val htmlElement: Element,
        private val containerElement: JQuery = defaultContainerElement
) : WrappedHtmlView<Element> {

    private var scrimHtmlElementGetter = scrimElementGetter(containerElement)

    val scrimHtmlElement get() = scrimHtmlElementGetter()

    var isShown: Boolean
        get() = containerElement.hasClass(sidebarShownClassName)
        set(newValue) = if (newValue) show() else hide()


    init {
        if (0 == scrimHtmlElementGetter().length) {
            containerElement.prepend(generateNewScrimHtmlString())
        }
    }


    private fun hide() {
        containerElement.removeClass(sidebarShownClassName)
    }


    private fun show() {
        containerElement.addClass(sidebarShownClassName)
    }


    companion object {
        const val className = "sidebar"
        const val sidebarShownClassName = "sidebar-shown"
        const val scrimElementClassName = "sidebar-scrim"

        val defaultContainerElement = jq(":root")
        fun scrimElementGetter(containerElement: JQuery): () -> JQuery = {
            /*return*/ jq(selector = ".$scrimElementClassName", context = containerElement)
        }


        fun generateNewScrimHtmlString(): String {
            return """<div class="$scrimElementClassName"></div>"""
        }
    }
}
