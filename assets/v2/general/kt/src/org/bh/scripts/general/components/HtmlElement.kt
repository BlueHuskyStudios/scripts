package org.bh.scripts.general.components

import org.w3c.dom.Element
import kotlin.dom.*

/**
 * @author Ben Leggiero
 * @since 2018-04-19
 */
interface WrappedHtmlView<ElementType: Element> {
    val htmlElement: ElementType
}


val WrappedHtmlView<*>.className: String get() = htmlElement.className
fun WrappedHtmlView<*>.addClass(vararg newClasses: String) = htmlElement.addClass(*newClasses)
fun WrappedHtmlView<*>.removeClass(vararg oldClasses: String) = htmlElement.removeClass(*oldClasses)
fun WrappedHtmlView<*>.hasClass(possibleClass: String) = htmlElement.hasClass(possibleClass)
