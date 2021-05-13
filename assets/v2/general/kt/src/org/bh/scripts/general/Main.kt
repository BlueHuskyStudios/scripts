package org.bh.scripts.general

import jQueryInterface.*
import kotlinx.browser.*
import org.bh.scripts.components.button.*
import org.bh.scripts.components.sidebar.*
import org.bh.scripts.components.themeSwatches.*
import org.bh.scripts.pageMutation.*
import org.bh.scripts.theming.*
import org.w3c.dom.*

/**
 * @author Ben Leggiero
 * @since 2018-04-19
 */



fun main(args: Array<String>) {
    Setup.downloadJQuery()

    document.addEventListener("DOMContentLoaded", {
        Setup.performCommonPageConnections()
        Setup.reloadStates()
        Setup.showJsOnlyElements()
    })
}



private object Setup {

    private val sidebarButtonControllers = mutableListOf<SidebarButtonController>()
    private val themeSwatchControllers = mutableListOf<ThemeSwatchController>()



    // MARK: - Connect

    fun performCommonPageConnections() {
        connectAllSidebarsToSidebarButtons()
        connectAllThemeSwatches()
        allowElementReplacers()
        connectInputBasedContentTransformers()
    }


    fun downloadJQuery() {
        if (js("jQuery") === undefined) {
            val script = document.createElement("script") as? HTMLScriptElement ?: return console.error("Could not create script element")
            script.src = "//code.jquery.com/jquery-3.x-git.slim.min.js"
            script.type = "text/javascript"
            document.getElementsByTagName("head")[0]?.appendChild(script) ?: console.error("Could not find head element")
        }
    }


    private fun connectAllSidebarsToSidebarButtons() {
        sidebarButtonControllers.addAll(
                jq(".show-sidebar-button")
                .map { _, sidebarButtonElement ->
                    val specifiedSidebarId = sidebarButtonElement.getAttributeNode("for")?.value

                    if (null != specifiedSidebarId) {
                        val sidebarElement = jq("#$specifiedSidebarId")[0]

                        if (null != sidebarElement) {
                            return@map SidebarButtonController(ButtonController(sidebarButtonElement), SidebarController(sidebarElement))
                        }
                    }
                    // No sidebar specified; associate the first one we can find

                    return@map SidebarButtonController(ButtonController(sidebarButtonElement),
                            SidebarController(jq(".${SidebarViewWrapper.className}")[0]))
                }
        )
    }


    private fun connectAllThemeSwatches() {
        themeSwatchControllers.addAll(
                jq(ThemeSwatchViewWrapper.themeSwatchCssSelector)
                        .map { _, themeSwatchElement ->
                            ThemeSwatchController(controlling = themeSwatchElement)
                        }
                        .filterNotNull()
        )
    }


    private fun allowElementReplacers() {
        document.asDynamic().addContentReplacer = fun (selector: String, replacer: ContentReplacer) {
            ContentReplacers.connectNewContentReplacer(selector= selector, replacer= replacer)
        }
    }


    private fun connectInputBasedContentTransformers() {
        jq("[data-apply-class-to-root-when-checked]").change { event ->
            (event?.currentTarget as? HTMLInputElement)?.let { element ->
                element.dataset["applyClassToRootWhenChecked"]?.let { newRootClass ->
                    jq(":root").toggleClass(newRootClass, element.checked)
                }
            }
        }
    }



    // MARK: - Reload

    fun reloadStates() {
        reloadTheme()
    }


    private fun reloadTheme() {
        ThemeController.reloadTheme()
    }



    // MARK: - JS Requirement Communication

    fun showJsOnlyElements() {
        jq(".show-only-when-js-is-enabled")
            .removeClass("show-only-when-js-is-enabled")
    }
}
