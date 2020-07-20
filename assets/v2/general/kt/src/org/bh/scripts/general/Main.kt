package org.bh.scripts.general

import jQueryInterface.*
import org.bh.scripts.components.button.*
import org.bh.scripts.components.sidebar.*
import org.bh.scripts.components.themeSwatches.ThemeSwatchController
import org.bh.scripts.components.themeSwatches.ThemeSwatchModel
import org.bh.scripts.components.themeSwatches.ThemeSwatchViewWrapper
import org.bh.scripts.components.themeSwatches.invoke
import org.bh.scripts.general.serialization.LocalStorage
import org.bh.scripts.general.serialization.invoke
import org.bh.scripts.theming.ThemeController
import kotlin.browser.document

/**
 * @author Ben Leggiero
 * @since 2018-04-19
 */



fun main(args: Array<String>) {
    jq(document).ready {
        Setup.performCommonPageConnections()
        Setup.reloadStates()
        Setup.showJsOnlyElements()
    }
}



private object Setup {

    private val sidebarButtonControllers = mutableListOf<SidebarButtonController>()
    private val themeSwatchControllers = mutableListOf<ThemeSwatchController>()



    // MARK: - Connect

    fun performCommonPageConnections() {
        connectAllSidebarsToSidebarButtons()
        connectAllThemeSwatches()
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
